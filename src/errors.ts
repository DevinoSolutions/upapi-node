import { PUBLIC_ERROR_STATUS, type PublicErrorCode } from './generated/error-codes.js';

/**
 * Rate-limit state parsed from a gateway response. Present on every gateway reply
 * — success and failure alike — so a caller can pace itself without waiting for a
 * 429. `trial` is absent unless the org is on a live trial (the gateway omits the
 * `X-Trial-Units-*` headers off-trial), so feature-detect rather than reading 0.
 */
export type RateLimitInfo = {
  /** Requests permitted per minute. */
  limit: number | null;
  /** Requests left in the current minute window. */
  remaining: number | null;
  /** Unix seconds at which the minute window resets. */
  resetAt: number | null;
  /** Weighted units permitted this UTC month (a heavy op spends >1 per call). */
  monthlyLimit: number | null;
  /** Weighted units left this UTC month. */
  monthlyRemaining: number | null;
  /** Trial unit budget — absent when the org is not on a live trial. */
  trial?: { limit: number; remaining: number };
};

function int(headers: Headers, name: string): number | null {
  const raw = headers.get(name);
  if (raw === null) return null;
  const n = Number(raw);
  return Number.isFinite(n) ? n : null;
}

export function parseRateLimit(headers: Headers): RateLimitInfo {
  const info: RateLimitInfo = {
    limit: int(headers, 'X-RateLimit-Limit'),
    remaining: int(headers, 'X-RateLimit-Remaining'),
    resetAt: int(headers, 'X-RateLimit-Reset'),
    monthlyLimit: int(headers, 'X-RateLimit-Limit-Month'),
    monthlyRemaining: int(headers, 'X-RateLimit-Remaining-Month'),
  };
  const trialLimit = int(headers, 'X-Trial-Units-Limit');
  const trialRemaining = int(headers, 'X-Trial-Units-Remaining');
  if (trialLimit !== null && trialRemaining !== null) {
    info.trial = { limit: trialLimit, remaining: trialRemaining };
  }
  return info;
}

/** `Retry-After` in seconds. The gateway always sends the delta-seconds form. */
export function parseRetryAfter(headers: Headers): number | undefined {
  const raw = headers.get('Retry-After');
  if (raw === null) return undefined;
  const seconds = Number(raw);
  if (Number.isFinite(seconds) && seconds >= 0) return seconds;
  // HTTP allows an absolute date; convert so callers only ever handle seconds.
  const at = Date.parse(raw);
  if (Number.isNaN(at)) return undefined;
  return Math.max(0, Math.ceil((at - Date.now()) / 1000));
}

/**
 * Every non-2xx reply from api.upapi.io surfaces as this one error type. `code` is
 * drawn from the platform's single public vocabulary (`PUBLIC_ERROR_CODES`), so
 * branching on it is stable across ops and worker languages — the gateway
 * canonicalizes a classified worker failure before it reaches the caller.
 */
export class UpAPIError extends Error {
  readonly code: PublicErrorCode | 'UNKNOWN';
  readonly status: number;
  readonly slug: string | undefined;
  readonly requestId: string | undefined;
  readonly retryAfterSeconds: number | undefined;
  readonly rateLimit: RateLimitInfo | undefined;
  /** The raw parsed body, when the response carried one. */
  readonly body: unknown;

  constructor(init: {
    code: PublicErrorCode | 'UNKNOWN';
    message: string;
    status: number;
    slug?: string;
    requestId?: string;
    retryAfterSeconds?: number;
    rateLimit?: RateLimitInfo;
    body?: unknown;
  }) {
    super(init.message);
    this.name = 'UpAPIError';
    this.code = init.code;
    this.status = init.status;
    this.slug = init.slug;
    this.requestId = init.requestId;
    this.retryAfterSeconds = init.retryAfterSeconds;
    this.rateLimit = init.rateLimit;
    this.body = init.body;
  }

  /** True when waiting and re-sending the identical request is meaningful. */
  get isRateLimited(): boolean {
    return this.status === 429;
  }
}

/** Thrown when a request exceeds `timeoutMs`, or the caller's signal aborts. */
export class UpAPITimeoutError extends Error {
  readonly slug: string | undefined;
  readonly timeoutMs: number | undefined;

  constructor(message: string, init?: { slug?: string; timeoutMs?: number }) {
    super(message);
    this.name = 'UpAPITimeoutError';
    this.slug = init?.slug;
    this.timeoutMs = init?.timeoutMs;
  }
}

function isPublicErrorCode(value: unknown): value is PublicErrorCode {
  return (
    typeof value === 'string' && Object.prototype.hasOwnProperty.call(PUBLIC_ERROR_STATUS, value)
  );
}

/**
 * Map a failed response onto `UpAPIError`. The public envelope is exactly
 * `{error:{code,message}}`; anything else (an HTML error page from an edge, an
 * empty body) still yields a typed error rather than a parse crash.
 */
export function toUpAPIError(
  response: Response,
  body: unknown,
  slug: string | undefined,
): UpAPIError {
  const envelope =
    body !== null && typeof body === 'object' && 'error' in body
      ? (body as { error: unknown }).error
      : undefined;
  const detail =
    envelope !== null && typeof envelope === 'object'
      ? (envelope as { code?: unknown; message?: unknown })
      : undefined;

  const code = isPublicErrorCode(detail?.code) ? detail.code : 'UNKNOWN';
  const message =
    typeof detail?.message === 'string' && detail.message.length > 0
      ? detail.message
      : `upAPI request failed with HTTP ${response.status}`;

  return new UpAPIError({
    code,
    message,
    status: response.status,
    slug,
    requestId: response.headers.get('x-request-id') ?? undefined,
    retryAfterSeconds: parseRetryAfter(response.headers),
    rateLimit: parseRateLimit(response.headers),
    body,
  });
}
