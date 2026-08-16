import { describe, expect, it, vi } from 'vitest';
import { UpAPI } from '../client.js';
import { UpAPIError, UpAPITimeoutError } from '../errors.js';

const KEY = 'upapi_test_key';

function jsonResponse(
  body: unknown,
  init: { status?: number; headers?: Record<string, string> } = {},
): Response {
  return new Response(JSON.stringify(body), {
    status: init.status ?? 200,
    headers: { 'content-type': 'application/json', ...(init.headers ?? {}) },
  });
}

/** Typed so `fetchMock.mock.calls[0]` keeps its `[url, init]` tuple shape. */
function mockFetch(impl: (url: string, init: RequestInit) => Promise<Response>) {
  return vi.fn(impl);
}

/**
 * A Response whose HEADERS have arrived but whose body never completes.
 *
 * Aborting `signal` errors the body stream, which is exactly what a real fetch
 * implementation does — undici and the browser both wire the request signal into
 * the response body — and is the only thing that can ever interrupt a stalled
 * read. A mock that ignored the signal would hang the test run instead of
 * proving anything.
 */
function stallingBodyResponse(signal: AbortSignal | undefined, init?: ResponseInit): Response {
  const stream = new ReadableStream({
    start(controller) {
      const fail = () =>
        controller.error(Object.assign(new Error('aborted'), { name: 'AbortError' }));
      if (signal?.aborted) {
        fail();
        return;
      }
      signal?.addEventListener('abort', fail, { once: true });
    },
  });
  return new Response(stream, init);
}

function client(fetchImpl: typeof globalThis.fetch, options: Partial<{ retries: number }> = {}) {
  return new UpAPI({
    apiKey: KEY,
    fetch: fetchImpl,
    retry: { retries: options.retries ?? 0 },
  });
}

describe('UpAPI.call', () => {
  it('POSTs to {baseUrl}/{slug} with the api key and returns the parsed body', async () => {
    const fetchMock = mockFetch(async () => jsonResponse({ stars: 42 }));
    const sdk = client(fetchMock as unknown as typeof globalThis.fetch);

    const out = await sdk.call<{ stars: number }>('github-trending.get', { language: 'ts' });

    expect(out).toEqual({ stars: 42 });
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const call = fetchMock.mock.calls[0];
    expect(call?.[0]).toBe('https://api.upapi.io/github-trending.get');
    expect(call?.[1].method).toBe('POST');
    expect((call?.[1].headers as Record<string, string>)['x-api-key']).toBe(KEY);
    expect(call?.[1].body).toBe(JSON.stringify({ language: 'ts' }));
  });

  it('honors a custom baseUrl and strips its trailing slash', async () => {
    const fetchMock = mockFetch(async () => jsonResponse({}));
    const sdk = new UpAPI({
      apiKey: KEY,
      baseUrl: 'http://localhost:57000/',
      fetch: fetchMock as unknown as typeof globalThis.fetch,
    });

    await sdk.call('ip-geolocation.get', {});

    expect(fetchMock.mock.calls[0]?.[0]).toBe('http://localhost:57000/ip-geolocation.get');
  });

  it('requires an api key', () => {
    expect(() => new UpAPI({ apiKey: '' })).toThrow(/apiKey/);
  });
});

describe('error envelope', () => {
  it('maps {error:{code,message}} onto a typed UpAPIError', async () => {
    const fetchMock = vi.fn(async () =>
      jsonResponse(
        { error: { code: 'INVALID_INPUT', message: 'url is required' } },
        { status: 400, headers: { 'x-request-id': 'req-123' } },
      ),
    );
    const sdk = client(fetchMock as unknown as typeof globalThis.fetch);

    const err = await sdk.call('archive-wayback.get', {}).catch((e: unknown) => e);

    expect(err).toBeInstanceOf(UpAPIError);
    const typed = err as UpAPIError;
    expect(typed.code).toBe('INVALID_INPUT');
    expect(typed.status).toBe(400);
    expect(typed.message).toBe('url is required');
    expect(typed.requestId).toBe('req-123');
    expect(typed.slug).toBe('archive-wayback.get');
  });

  it('falls back to UNKNOWN for a non-envelope body (edge HTML, empty reply)', async () => {
    const fetchMock = vi.fn(
      async () => new Response('<html>502 Bad Gateway</html>', { status: 502 }),
    );
    const sdk = client(fetchMock as unknown as typeof globalThis.fetch);

    const err = (await sdk.call('bbc-news.get', {}).catch((e: unknown) => e)) as UpAPIError;

    expect(err).toBeInstanceOf(UpAPIError);
    expect(err.code).toBe('UNKNOWN');
    expect(err.status).toBe(502);
  });

  it('rejects a code that is not in the public vocabulary', async () => {
    const fetchMock = vi.fn(async () =>
      jsonResponse({ error: { code: 'MADE_UP_CODE', message: 'nope' } }, { status: 400 }),
    );
    const sdk = client(fetchMock as unknown as typeof globalThis.fetch);

    const err = (await sdk.call('bbc-news.get', {}).catch((e: unknown) => e)) as UpAPIError;

    expect(err.code).toBe('UNKNOWN');
    expect(err.message).toBe('nope');
  });
});

describe('rate-limit headers', () => {
  const HEADERS = {
    'X-RateLimit-Limit': '10',
    'X-RateLimit-Remaining': '7',
    'X-RateLimit-Reset': '1770000000',
    'X-RateLimit-Limit-Month': '1000',
    'X-RateLimit-Remaining-Month': '860',
  };

  it('surfaces per-call metering via callWithMeta', async () => {
    const fetchMock = vi.fn(async () =>
      jsonResponse(
        { ok: true },
        { headers: { ...HEADERS, 'x-request-id': 'req-9', 'x-upapi-cache': 'HIT' } },
      ),
    );
    const sdk = client(fetchMock as unknown as typeof globalThis.fetch);

    const result = await sdk.callWithMeta('bbc-news.get', {});

    expect(result.data).toEqual({ ok: true });
    expect(result.cached).toBe(true);
    expect(result.requestId).toBe('req-9');
    expect(result.rateLimit).toMatchObject({
      limit: 10,
      remaining: 7,
      resetAt: 1770000000,
      monthlyLimit: 1000,
      monthlyRemaining: 860,
    });
    // Absent off-trial — clients must feature-detect rather than read zeros.
    expect(result.rateLimit.trial).toBeUndefined();
  });

  it('reports the trial budget only when the gateway sends it', async () => {
    const fetchMock = vi.fn(async () =>
      jsonResponse(
        {},
        {
          headers: {
            ...HEADERS,
            'X-Trial-Units-Limit': '5000',
            'X-Trial-Units-Remaining': '4200',
          },
        },
      ),
    );
    const sdk = client(fetchMock as unknown as typeof globalThis.fetch);

    const { rateLimit } = await sdk.callWithMeta('bbc-news.get', {});

    expect(rateLimit.trial).toEqual({ limit: 5000, remaining: 4200 });
  });

  it('attaches rate-limit state to the error too', async () => {
    const fetchMock = vi.fn(async () =>
      jsonResponse(
        { error: { code: 'RATE_LIMITED', message: 'slow down' } },
        {
          status: 429,
          headers: { ...HEADERS, 'X-RateLimit-Remaining': '0', 'Retry-After': '60' },
        },
      ),
    );
    const sdk = client(fetchMock as unknown as typeof globalThis.fetch);

    const err = (await sdk.call('bbc-news.get', {}).catch((e: unknown) => e)) as UpAPIError;

    expect(err.isRateLimited).toBe(true);
    expect(err.retryAfterSeconds).toBe(60);
    expect(err.rateLimit?.remaining).toBe(0);
  });
});

describe('retries', () => {
  it('retries a 429 once Retry-After has elapsed, then succeeds', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(
        jsonResponse(
          { error: { code: 'RATE_LIMITED', message: 'slow down' } },
          {
            status: 429,
            headers: { 'Retry-After': '0.01' },
          },
        ),
      )
      .mockResolvedValueOnce(jsonResponse({ ok: true }));
    const sdk = client(fetchMock as unknown as typeof globalThis.fetch, { retries: 2 });

    await expect(sdk.call('bbc-news.get', {})).resolves.toEqual({ ok: true });
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it('gives up after the configured number of retries', async () => {
    const fetchMock = vi.fn(async () =>
      jsonResponse(
        { error: { code: 'RATE_LIMITED', message: 'slow down' } },
        {
          status: 429,
          headers: { 'Retry-After': '0.01' },
        },
      ),
    );
    const sdk = client(fetchMock as unknown as typeof globalThis.fetch, { retries: 1 });

    await expect(sdk.call('bbc-news.get', {})).rejects.toBeInstanceOf(UpAPIError);
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it('does NOT sleep out a 429 whose Retry-After exceeds the cap', async () => {
    const fetchMock = vi.fn(async () =>
      jsonResponse(
        { error: { code: 'RATE_LIMITED', message: 'monthly quota' } },
        {
          status: 429,
          headers: { 'Retry-After': '86400' },
        },
      ),
    );
    const sdk = client(fetchMock as unknown as typeof globalThis.fetch, { retries: 3 });

    await expect(sdk.call('bbc-news.get', {})).rejects.toBeInstanceOf(UpAPIError);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it('does NOT retry QUOTA_EXCEEDED even when Retry-After is short', async () => {
    // The heart of the code-based decision: the magnitude heuristic would have
    // happily retried this (10ms is well inside the cap), burning attempts on a
    // budget that cannot refill until the next month.
    const fetchMock = vi.fn(async () =>
      jsonResponse(
        { error: { code: 'QUOTA_EXCEEDED', message: 'Monthly quota exceeded' } },
        { status: 429, headers: { 'Retry-After': '0.01' } },
      ),
    );
    const sdk = client(fetchMock as unknown as typeof globalThis.fetch, { retries: 3 });

    const err = (await sdk.call('bbc-news.get', {}).catch((e: unknown) => e)) as UpAPIError;

    expect(err.code).toBe('QUOTA_EXCEEDED');
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it('retries SERVICE_BUSY, which carries no Retry-After at all', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(
        jsonResponse({ error: { code: 'SERVICE_BUSY', message: 'saturated' } }, { status: 429 }),
      )
      .mockResolvedValueOnce(jsonResponse({ ok: true }));
    const sdk = client(fetchMock as unknown as typeof globalThis.fetch, { retries: 2 });

    await expect(sdk.call('bbc-news.get', {})).resolves.toEqual({ ok: true });
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it('falls back to the Retry-After heuristic when the 429 carries no known code', async () => {
    // An edge-generated 429, or a gateway older than the code split. The old rule
    // still applies so those callers are not stranded.
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(new Response('<html>too many requests</html>', { status: 429 }))
      .mockResolvedValueOnce(jsonResponse({ ok: true }));
    const sdk = client(fetchMock as unknown as typeof globalThis.fetch, { retries: 2 });

    await expect(sdk.call('bbc-news.get', {})).resolves.toEqual({ ok: true });
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it('reuses ONE Idempotency-Key across every attempt of the same call', async () => {
    // This is what makes the retry above safe rather than merely polite: the
    // gateway sees one logical request, so the second attempt replays instead of
    // running the operation (and billing) twice.
    const seen: (string | undefined)[] = [];
    const fetchMock = mockFetch(async (_url, init) => {
      seen.push(new Headers(init.headers as HeadersInit).get('idempotency-key') ?? undefined);
      return seen.length === 1
        ? jsonResponse(
            { error: { code: 'RATE_LIMITED', message: 'slow down' } },
            { status: 429, headers: { 'Retry-After': '0.01' } },
          )
        : jsonResponse({ ok: true });
    });
    const sdk = client(fetchMock as unknown as typeof globalThis.fetch, { retries: 2 });

    await sdk.call('bbc-news.get', {});

    expect(seen).toHaveLength(2);
    expect(seen[0]).toBeTruthy();
    expect(seen[0]).toBe(seen[1]);
    expect(seen[0]!.length).toBeGreaterThanOrEqual(36);
  });

  it('gives each separate call its own key', async () => {
    const seen: (string | null)[] = [];
    const fetchMock = mockFetch(async (_url, init) => {
      seen.push(new Headers(init.headers as HeadersInit).get('idempotency-key'));
      return jsonResponse({ ok: true });
    });
    const sdk = client(fetchMock as unknown as typeof globalThis.fetch);

    await sdk.call('bbc-news.get', {});
    await sdk.call('bbc-news.get', {});

    expect(seen[0]).not.toBe(seen[1]);
  });

  it('sends the caller’s own key when one is supplied', async () => {
    const fetchMock = mockFetch(async () => jsonResponse({ ok: true }));
    const sdk = client(fetchMock as unknown as typeof globalThis.fetch);

    await sdk.call('bbc-news.get', {}, { idempotencyKey: 'order-4711-attempt-of-record-000000' });

    const init = fetchMock.mock.calls[0]![1];
    expect(new Headers(init.headers as HeadersInit).get('idempotency-key')).toBe(
      'order-4711-attempt-of-record-000000',
    );
  });

  it('sends no key when idempotency is turned off', async () => {
    const fetchMock = mockFetch(async () => jsonResponse({ ok: true }));
    const sdk = new UpAPI({
      apiKey: KEY,
      fetch: fetchMock as unknown as typeof globalThis.fetch,
      idempotency: false,
    });

    await sdk.call('bbc-news.get', {});

    const init = fetchMock.mock.calls[0]![1];
    expect(new Headers(init.headers as HeadersInit).get('idempotency-key')).toBeNull();
  });

  it('never sends a key on /usage, which is a GET and is not metered', async () => {
    const fetchMock = mockFetch(async () => jsonResponse({ plan: 'Free' }));
    const sdk = client(fetchMock as unknown as typeof globalThis.fetch);

    await sdk.usage();

    const init = fetchMock.mock.calls[0]![1];
    expect(new Headers(init.headers as HeadersInit).get('idempotency-key')).toBeNull();
  });

  it('reports a replayed response through callWithMeta', async () => {
    const fetchMock = mockFetch(async () =>
      jsonResponse({ ok: true }, { headers: { 'Idempotency-Replayed': 'true' } }),
    );
    const sdk = client(fetchMock as unknown as typeof globalThis.fetch);

    const result = await sdk.callWithMeta('bbc-news.get', {});

    expect(result.replayed).toBe(true);
  });

  it('never retries a 5xx — operations are non-idempotent POSTs and each attempt meters', async () => {
    const fetchMock = vi.fn(async () =>
      jsonResponse({ error: { code: 'UPSTREAM_ERROR', message: 'boom' } }, { status: 502 }),
    );
    const sdk = client(fetchMock as unknown as typeof globalThis.fetch, { retries: 3 });

    await expect(sdk.call('bbc-news.get', {})).rejects.toBeInstanceOf(UpAPIError);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});

describe('timeouts and cancellation', () => {
  it('aborts the request after timeoutMs and throws UpAPITimeoutError', async () => {
    const fetchMock = vi.fn(
      (_url: string, init: RequestInit) =>
        new Promise<Response>((_resolve, reject) => {
          init.signal?.addEventListener('abort', () =>
            reject(Object.assign(new Error('aborted'), { name: 'AbortError' })),
          );
        }),
    );
    const sdk = new UpAPI({
      apiKey: KEY,
      fetch: fetchMock as unknown as typeof globalThis.fetch,
      timeoutMs: 20,
    });

    const err = (await sdk.call('bbc-news.get', {}).catch((e: unknown) => e)) as UpAPITimeoutError;

    expect(err).toBeInstanceOf(UpAPITimeoutError);
    expect(err.timeoutMs).toBe(20);
    expect(err.slug).toBe('bbc-news.get');
  });

  it('times out while the BODY stalls, not only while headers are pending', async () => {
    // The regression this pins: the timeout used to be cleared as soon as the
    // fetch promise settled, so a peer that sent a status line and then stalled
    // the body hung forever — past timeoutMs, with the abort controller already
    // unreachable.
    const fetchMock = vi.fn(async (_url: string, init: RequestInit) =>
      stallingBodyResponse(init.signal ?? undefined, {
        headers: { 'content-type': 'application/json' },
      }),
    );
    const sdk = new UpAPI({
      apiKey: KEY,
      fetch: fetchMock as unknown as typeof globalThis.fetch,
      timeoutMs: 25,
      retry: { retries: 0 },
    });

    const err = (await sdk.call('bbc-news.get', {}).catch((e: unknown) => e)) as UpAPITimeoutError;

    expect(err).toBeInstanceOf(UpAPITimeoutError);
    expect(err.timeoutMs).toBe(25);
    expect(err.slug).toBe('bbc-news.get');
  });

  it('times out a stalled body on /usage too', async () => {
    const fetchMock = vi.fn(async (_url: string, init: RequestInit) =>
      stallingBodyResponse(init.signal ?? undefined),
    );
    const sdk = new UpAPI({
      apiKey: KEY,
      fetch: fetchMock as unknown as typeof globalThis.fetch,
      timeoutMs: 25,
      retry: { retries: 0 },
    });

    await expect(sdk.usage()).rejects.toBeInstanceOf(UpAPITimeoutError);
  });

  it('times out a 429 whose body stalls, rather than hanging in the retry drain', async () => {
    // The 429's own body read is the one a caller never sees the result of — it
    // exists to drain the socket and to expose the error code the retry decision
    // needs. Outside the timer it would hang the retry loop silently.
    const fetchMock = vi.fn(async (_url: string, init: RequestInit) =>
      stallingBodyResponse(init.signal ?? undefined, {
        status: 429,
        headers: { 'Retry-After': '0.01' },
      }),
    );
    const sdk = new UpAPI({
      apiKey: KEY,
      fetch: fetchMock as unknown as typeof globalThis.fetch,
      timeoutMs: 25,
      retry: { retries: 3 },
    });

    await expect(sdk.call('bbc-news.get', {})).rejects.toBeInstanceOf(UpAPITimeoutError);
  });

  it("cancels a stalled body read on the caller's AbortSignal", async () => {
    const controller = new AbortController();
    const fetchMock = vi.fn(async (_url: string, init: RequestInit) =>
      stallingBodyResponse(init.signal ?? undefined),
    );
    // Long timeout: the abort, not the clock, has to be what ends this.
    const sdk = new UpAPI({
      apiKey: KEY,
      fetch: fetchMock as unknown as typeof globalThis.fetch,
      timeoutMs: 60_000,
      retry: { retries: 0 },
    });

    const promise = sdk.call('bbc-news.get', {}, { signal: controller.signal });
    // Let the fetch settle so the abort lands during the body read, not before it.
    await new Promise((resolve) => setTimeout(resolve, 5));
    controller.abort();

    const err = (await promise.catch((e: unknown) => e)) as UpAPITimeoutError;
    expect(err).toBeInstanceOf(UpAPITimeoutError);
    expect(err.message).toBe('Request aborted by caller');
  });

  it("propagates the caller's AbortSignal", async () => {
    const controller = new AbortController();
    const fetchMock = vi.fn(
      (_url: string, init: RequestInit) =>
        new Promise<Response>((_resolve, reject) => {
          init.signal?.addEventListener('abort', () =>
            reject(Object.assign(new Error('aborted'), { name: 'AbortError' })),
          );
        }),
    );
    const sdk = client(fetchMock as unknown as typeof globalThis.fetch);

    const promise = sdk.call('bbc-news.get', {}, { signal: controller.signal });
    controller.abort();

    await expect(promise).rejects.toBeInstanceOf(UpAPITimeoutError);
  });
});

describe('usage()', () => {
  it('GETs /usage and returns the parsed quota snapshot', async () => {
    const payload = {
      plan: 'Pro',
      planSlug: 'pro',
      status: 'ACTIVE',
      rpmLimit: 300,
      monthlyLimit: 500000,
      usedThisMinute: 4,
      usedThisMonth: 1200,
      remainingMinute: 296,
      remainingMonth: 498800,
      units: { used: 1200, limit: 500000, remaining: 498800 },
      resetAt: '2026-08-06T00:00:00.000Z',
      hostedFunctions: { used: 2, limit: 25 },
      computeSeconds: { used: 30, limit: 10000 },
    };
    const fetchMock = mockFetch(async () => jsonResponse(payload));
    const sdk = client(fetchMock as unknown as typeof globalThis.fetch);

    const usage = await sdk.usage();

    expect(usage.plan).toBe('Pro');
    expect(usage.units.remaining).toBe(498800);
    // The trial block is omitted off-trial.
    expect(usage.trial).toBeUndefined();
    const call = fetchMock.mock.calls[0];
    expect(call?.[0]).toBe('https://api.upapi.io/usage');
    expect(call?.[1].method).toBe('GET');
    expect((call?.[1].headers as Record<string, string>)['x-api-key']).toBe(KEY);
  });

  it('exposes the trial block while a trial is live', async () => {
    const fetchMock = vi.fn(async () =>
      jsonResponse({
        plan: 'Pro',
        planSlug: 'pro',
        status: 'TRIALING',
        rpmLimit: 300,
        monthlyLimit: 500000,
        usedThisMinute: 0,
        usedThisMonth: 100,
        remainingMinute: 300,
        remainingMonth: 499900,
        units: { used: 100, limit: 500000, remaining: 499900 },
        trial: {
          unitCap: 50000,
          unitsUsed: 100,
          unitsRemaining: 49900,
          endsAt: '2026-08-20T00:00:00.000Z',
        },
        resetAt: '2026-08-06T00:00:00.000Z',
        hostedFunctions: { used: 0, limit: 25 },
        computeSeconds: { used: 0, limit: 10000 },
      }),
    );
    const sdk = client(fetchMock as unknown as typeof globalThis.fetch);

    const usage = await sdk.usage();

    expect(usage.trial?.unitCap).toBe(50000);
    expect(usage.trial?.unitsRemaining).toBe(49900);
  });

  it('throws a typed error on an invalid key', async () => {
    const fetchMock = vi.fn(async () =>
      jsonResponse(
        { error: { code: 'UNAUTHORIZED', message: 'Invalid API key' } },
        { status: 401 },
      ),
    );
    const sdk = client(fetchMock as unknown as typeof globalThis.fetch);

    const err = (await sdk.usage().catch((e: unknown) => e)) as UpAPIError;

    expect(err.code).toBe('UNAUTHORIZED');
    expect(err.status).toBe(401);
  });
});

describe('generated operation surface', () => {
  it('routes a typed method to its slug', async () => {
    const fetchMock = mockFetch(async () => jsonResponse({ section: 'news' }));
    const sdk = client(fetchMock as unknown as typeof globalThis.fetch);

    await sdk.operations['bbc-news.get']({ limit: 5 });

    const call = fetchMock.mock.calls[0];
    expect(call?.[0]).toBe('https://api.upapi.io/bbc-news.get');
    expect(call?.[1].body).toBe(JSON.stringify({ limit: 5 }));
  });
});
