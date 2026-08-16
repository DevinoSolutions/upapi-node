import { parseRateLimit, parseRetryAfter, toUpAPIError, UpAPITimeoutError } from './errors.js';
import type { RateLimitInfo } from './errors.js';
import { buildOperations, type Operations } from './generated/operations.js';
import type { Usage } from './usage.js';

export const DEFAULT_BASE_URL = 'https://api.upapi.io';
export const DEFAULT_TIMEOUT_MS = 60_000;
/** Never sleep longer than this for one retry, whatever `Retry-After` claims. */
export const MAX_RETRY_DELAY_MS = 60_000;

export type RetryOptions = {
  /** Additional attempts after the first. 0 disables retrying. Default 2. */
  retries?: number;
  /** Upper bound on a single backoff sleep. Default 60s. */
  maxRetryDelayMs?: number;
};

export type UpAPIOptions = {
  /** An `upapi_` key from app.upapi.io → API Keys. */
  apiKey: string;
  baseUrl?: string;
  /** Injected for tests or for a proxy-aware fetch. Defaults to global fetch. */
  fetch?: typeof globalThis.fetch;
  /**
   * Deadline for the WHOLE exchange — connect, headers, and reading the response
   * body — not just time-to-first-byte. Default 60s.
   */
  timeoutMs?: number;
  retry?: RetryOptions;
  /**
   * Send an auto-generated `Idempotency-Key` with every operation call, reusing
   * it across this client's own retries. Default `true`.
   *
   * It is on by default because the retry it protects is on by default: an
   * operation is a POST with real upstream side effects, so a retried 429 could
   * otherwise post the same comment twice. Turning it off makes each attempt an
   * independent request again — meaningful only if you are certain your
   * operations are naturally idempotent, or you handle replay yourself.
   */
  idempotency?: boolean;
};

export type CallOptions = {
  signal?: AbortSignal;
  timeoutMs?: number;
  retry?: RetryOptions;
  /**
   * Use THIS `Idempotency-Key` instead of a generated one.
   *
   * Supply your own when the unit of work is something in your system rather
   * than something in this process — an order id, a job id — so a retry from a
   * different process, or after a restart, is still recognized as the same
   * request. 36–255 characters.
   */
  idempotencyKey?: string;
  /** Per-call override of the client's `idempotency` setting. */
  idempotency?: boolean;
};

/** A successful call plus the metering context the gateway returned with it. */
export type CallResult<TOut> = {
  data: TOut;
  rateLimit: RateLimitInfo;
  requestId: string | undefined;
  /** True when the gateway served a cached upstream result (op-level cache TTL). */
  cached: boolean;
  /**
   * True when this answer was REPLAYED from the idempotency ledger — a previous
   * request with the same key produced it, nothing ran again, and nothing was
   * billed again. Expected on a retry; on a first attempt it means the key had
   * already been used.
   */
  replayed: boolean;
};

function sleep(ms: number, signal: AbortSignal | undefined): Promise<void> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      signal?.removeEventListener('abort', onAbort);
      resolve();
    }, ms);
    function onAbort() {
      clearTimeout(timer);
      reject(new UpAPITimeoutError('Request aborted while waiting to retry'));
    }
    if (signal?.aborted) {
      onAbort();
      return;
    }
    signal?.addEventListener('abort', onAbort, { once: true });
  });
}

/**
 * `AbortSignal.any` only landed in Node 20.3, and the package supports >=20.0 —
 * so the caller's signal is bridged onto our timeout controller by hand.
 */
function linkAbort(controller: AbortController, external: AbortSignal | undefined): () => void {
  if (!external) return () => {};
  if (external.aborted) {
    controller.abort(external.reason);
    return () => {};
  }
  const onAbort = () => controller.abort(external.reason);
  external.addEventListener('abort', onAbort, { once: true });
  return () => external.removeEventListener('abort', onAbort);
}

async function readBody(response: Response): Promise<unknown> {
  const text = await response.text();
  if (text.length === 0) return undefined;
  try {
    return JSON.parse(text) as unknown;
  } catch {
    return text;
  }
}

/** The `error.code` of a standard envelope, or undefined for anything else. */
function errorCodeOf(body: unknown): string | undefined {
  if (body === null || typeof body !== 'object' || !('error' in body)) return undefined;
  const error = (body as { error: unknown }).error;
  if (error === null || typeof error !== 'object') return undefined;
  const code = (error as { code?: unknown }).code;
  return typeof code === 'string' ? code : undefined;
}

/**
 * Whether a 429 is worth waiting out.
 *
 * The gateway splits its 429s by CODE: `RATE_LIMITED` is the per-minute burst
 * window, which refills on its own; `QUOTA_EXCEEDED` is a spent budget — the
 * month's units, a trial's allowance, or compute seconds — which does not.
 * `SERVICE_BUSY` is momentary saturation. Branching on the code is exact, where
 * the old rule (infer it from how large `Retry-After` was) could only guess, and
 * guessed wrong for a monthly quota exhausted near the end of a month.
 *
 * The magnitude heuristic survives ONLY as the fallback for a response with no
 * recognizable code — an older gateway that answered `RATE_LIMITED` for every
 * 429, or an edge that produced the 429 itself. In that case a `Retry-After`
 * beyond `maxRetryDelayMs` still means "this is not a wait you want", which is
 * what the caller's cap already expresses.
 */
function shouldRetry429(body: unknown, delayMs: number, maxRetryDelayMs: number): boolean {
  switch (errorCodeOf(body)) {
    case 'RATE_LIMITED':
    case 'SERVICE_BUSY':
      return true;
    case 'QUOTA_EXCEEDED':
      return false;
    default:
      return delayMs <= maxRetryDelayMs;
  }
}

/**
 * A fresh `Idempotency-Key`.
 *
 * `crypto.randomUUID` needs a secure context, which a browser served over plain
 * http does not have, so a non-cryptographic fallback keeps the SDK usable in
 * local development. The key is a collision-avoidance token within one
 * organization's 24-hour ledger, not a secret — it authorizes nothing, and a
 * caller who needs a stronger guarantee passes their own via `idempotencyKey`.
 */
function newIdempotencyKey(): string {
  const webcrypto = globalThis.crypto as Crypto | undefined;
  if (typeof webcrypto?.randomUUID === 'function') return webcrypto.randomUUID();
  const hex = (n: number) =>
    Array.from({ length: n }, () => Math.floor(Math.random() * 16).toString(16)).join('');
  return `${hex(8)}-${hex(4)}-4${hex(3)}-a${hex(3)}-${hex(12)}`;
}

/**
 * Typed client for the upAPI gateway.
 *
 * Every operation is `POST {baseUrl}/{slug}` authenticated with an `x-api-key`
 * header; there is no other shape to learn. `call` is the escape hatch for a slug
 * this build predates; `operations` is the generated, fully-typed surface.
 */
export class UpAPI {
  readonly baseUrl: string;
  /** Per-op typed methods keyed by slug, e.g. `client.operations['ip-geolocation.get']({...})`. */
  readonly operations: Operations;

  readonly #apiKey: string;
  readonly #fetch: typeof globalThis.fetch;
  readonly #timeoutMs: number;
  readonly #retry: Required<RetryOptions>;
  readonly #idempotency: boolean;

  constructor(options: UpAPIOptions) {
    if (!options.apiKey) {
      throw new Error('UpAPI: `apiKey` is required. Create one at app.upapi.io → API Keys.');
    }
    this.#apiKey = options.apiKey;
    this.baseUrl = (options.baseUrl ?? DEFAULT_BASE_URL).replace(/\/+$/, '');
    // Bound so a caller can pass `fetch` off an object without losing `this`.
    this.#fetch = (options.fetch ?? globalThis.fetch).bind(globalThis);
    this.#timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
    this.#retry = {
      retries: options.retry?.retries ?? 2,
      maxRetryDelayMs: options.retry?.maxRetryDelayMs ?? MAX_RETRY_DELAY_MS,
    };
    this.#idempotency = options.idempotency ?? true;
    this.operations = buildOperations(this);
  }

  /** Invoke an operation and return its output. */
  async call<TOut = unknown, TIn = unknown>(
    slug: string,
    input: TIn,
    options?: CallOptions,
  ): Promise<TOut> {
    const result = await this.callWithMeta<TOut, TIn>(slug, input, options);
    return result.data;
  }

  /**
   * `call` plus the response's rate-limit headers and request id.
   *
   * Metering is returned per call rather than stashed on the client: a shared
   * `lastRateLimit` field would be overwritten by whichever concurrent request
   * happened to land last, which is exactly when quota state matters most.
   */
  async callWithMeta<TOut = unknown, TIn = unknown>(
    slug: string,
    input: TIn,
    options?: CallOptions,
  ): Promise<CallResult<TOut>> {
    // Resolved once per CALL, not per attempt: the whole point is that every
    // attempt at this one logical request carries the same key, so the gateway
    // replays the first result instead of running the operation again.
    const useIdempotency = options?.idempotency ?? this.#idempotency;
    const idempotencyKey =
      options?.idempotencyKey ?? (useIdempotency ? newIdempotencyKey() : undefined);

    const { response, body } = await this.#request(
      `${this.baseUrl}/${slug}`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          ...(idempotencyKey === undefined ? {} : { 'idempotency-key': idempotencyKey }),
        },
        body: JSON.stringify(input ?? {}),
      },
      slug,
      options,
    );

    if (!response.ok) throw toUpAPIError(response, body, slug);

    return {
      data: body as TOut,
      rateLimit: parseRateLimit(response.headers),
      requestId: response.headers.get('x-request-id') ?? undefined,
      cached: response.headers.get('x-upapi-cache') === 'HIT',
      replayed: response.headers.get('idempotency-replayed') === 'true',
    };
  }

  /**
   * Current plan, quotas, and consumption for the key's organization. Free to
   * poll — it is not metered and writes no call row.
   */
  async usage(options?: CallOptions): Promise<Usage> {
    const { response, body } = await this.#request(
      `${this.baseUrl}/usage`,
      { method: 'GET', headers: { accept: 'application/json' } },
      undefined,
      options,
    );
    if (!response.ok) throw toUpAPIError(response, body, undefined);
    return body as Usage;
  }

  /**
   * One attempt-loop iteration's worth of work, with the response body ALREADY
   * read. `timeoutMs` is a deadline on the whole exchange, not just on headers —
   * see `#request`.
   */
  async #request(
    url: string,
    init: RequestInit,
    slug: string | undefined,
    options: CallOptions | undefined,
  ): Promise<{ response: Response; body: unknown }> {
    const timeoutMs = options?.timeoutMs ?? this.#timeoutMs;
    const retries = options?.retry?.retries ?? this.#retry.retries;
    const maxRetryDelayMs = options?.retry?.maxRetryDelayMs ?? this.#retry.maxRetryDelayMs;

    let attempt = 0;
    for (;;) {
      const controller = new AbortController();
      const unlink = linkAbort(controller, options?.signal);
      const timer = setTimeout(() => controller.abort(), timeoutMs);

      let response: Response;
      let body: unknown;
      let retryDelayMs: number | undefined;
      try {
        response = await this.#fetch(url, {
          ...init,
          headers: { ...init.headers, 'x-api-key': this.#apiKey },
          signal: controller.signal,
        });

        // Read the body HERE, while the timeout and the caller's signal are still
        // armed. Headers arriving is not the end of the exchange: a peer that sends
        // a status line and then stalls the body would, if this ran after the
        // `finally` below, hang forever with nothing left able to interrupt it —
        // `timeoutMs` already elapsed and the controller is no longer reachable.
        // Reading unconditionally also drains the socket on the retry path, which
        // keep-alive requires, and it is what makes the code-based retry decision
        // below possible at all.
        body = await readBody(response);

        // 429 is the only retried status. Operations are POSTs with real upstream
        // side effects (an account created, a comment posted) and the gateway meters
        // each attempt, so replaying a 5xx could both double-charge and double-act.
        if (response.status === 429 && attempt < retries) {
          const seconds = parseRetryAfter(response.headers);
          const delayMs = seconds !== undefined && seconds > 0 ? seconds * 1000 : 1000;
          // Which 429 this is comes from the error CODE (see shouldRetry429); the
          // caller's ceiling on a single sleep still applies either way, so a
          // legitimately retryable wait longer than they allowed surfaces as the
          // 429 rather than as a very long pause.
          if (delayMs <= maxRetryDelayMs && shouldRetry429(body, delayMs, maxRetryDelayMs)) {
            retryDelayMs = delayMs;
          }
        }
      } catch (err) {
        if (options?.signal?.aborted) {
          throw new UpAPITimeoutError('Request aborted by caller', { slug });
        }
        if (controller.signal.aborted) {
          throw new UpAPITimeoutError(`Request timed out after ${timeoutMs}ms`, {
            slug,
            timeoutMs,
          });
        }
        throw err;
      } finally {
        clearTimeout(timer);
        unlink();
      }

      if (retryDelayMs === undefined) return { response, body };

      await sleep(retryDelayMs, options?.signal);
      attempt += 1;
    }
  }
}
