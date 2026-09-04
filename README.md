# @upapi/sdk

Typed TypeScript client for **api.upapi.io**. Zero runtime dependencies, Node >= 20
(global `fetch`), ESM.

```ts
import { UpAPI } from '@upapi/sdk';

const upapi = new UpAPI({ apiKey: process.env.UPAPI_API_KEY! });

// Typed per-operation surface — input and output types come from the op's schema.
const news = await upapi.operations['bbc-news.get']({ section: 'technology', limit: 5 });

// Or the generic escape hatch for a slug this build predates.
const geo = await upapi.call('ip-geolocation.get', { ip: '1.1.1.1' });
```

Slugs contain `.` and `-`, so `operations` is indexed rather than dotted.

## Errors

Every non-2xx reply becomes an `UpAPIError` carrying the platform's canonical error
code, so branching is stable across operations and worker languages:

```ts
import { UpAPIError } from '@upapi/sdk';

try {
  await upapi.operations['github-trending.get']({});
} catch (err) {
  if (err instanceof UpAPIError && err.code === 'RATE_LIMITED') {
    console.log(`retry in ${err.retryAfterSeconds}s`, err.rateLimit?.monthlyRemaining);
  }
}
```

`UpAPITimeoutError` is thrown separately for a `timeoutMs` expiry or a caller abort.

## Quotas

`callWithMeta` returns the gateway's rate-limit headers alongside the data. Metering
is returned per call rather than stashed on the client: a shared `lastRateLimit`
would be overwritten by whichever concurrent request landed last — exactly when
quota state matters most.

```ts
const { data, rateLimit, requestId, cached } = await upapi.callWithMeta('bbc-news.get', {});
const usage = await upapi.usage(); // plan, limits, consumption — free to poll
```

Monthly figures are **weighted units**, not call counts: one invocation spends the
op's `unitWeight` (SERP 25x, browser 20x, residential-proxy social 15x, LLM 10x,
light social 4x, plain HTTP relay 1x). `rateLimit.trial` and `usage.trial` are
**absent** off-trial — feature-detect them rather than reading zeros.

## Retries

Default: **429 only**, honoring `Retry-After`, up to 2 extra attempts.

5xx are deliberately never retried. Operations are POSTs with real upstream side
effects (an account created, a comment posted) and the gateway meters every
attempt, so replaying one could both double-charge and double-act. A 429 whose
`Retry-After` exceeds `maxRetryDelayMs` (60s default) is surfaced rather than slept
out — that is the month-quota or trial-cap case, where the wait is measured in days.

```ts
new UpAPI({ apiKey, retry: { retries: 0 } }); // opt out entirely
```

## Generated artifacts

`src/generated/*` and `openapi.json` are **checked in** and produced by
`pnpm generate:sdk` from the same worker registries that seed the live marketplace:

| Artifact                       | Contents                                                     |
| ------------------------------ | ------------------------------------------------------------ |
| `src/generated/catalog.ts`     | Every public op: metadata, unit weight, input/output schemas |
| `src/generated/types.ts`       | Per-op `…Input` / `…Output` interfaces                       |
| `src/generated/operations.ts`  | The typed `client.operations` table                          |
| `src/generated/error-codes.ts` | `PUBLIC_ERROR_CODES` + status map                            |
| `openapi.json`                 | OpenAPI 3.0.3, same builder as the live `/api/openapi.json`  |

Generation is deterministic — ops sorted by slug, `$defs` emitted in sorted order,
no timestamps or machine paths — so CI regenerates and runs `git diff --exit-code`.
Drift between the workers and the SDK fails the build instead of shipping.

Regenerating needs the TS worker **built** and `uv` on PATH:

```bash
pnpm --filter @upapi/marketplace-api-worker-ts build
pnpm generate:sdk
```

### Scope of the catalog

Only operations whose `publishTargets` include `upapi` are emitted. Gated-private
automation ops are excluded — the gateway 404s them for every key, so listing them
would advertise unreachable endpoints and name the automation surface publicly.

All three worker languages are covered. The Rust worker's `text-analyze.post` used to
be a known gap — its schema was read as "only knowable from the live engine", which
generation cannot depend on — until `scripts/lib/rust-manifest.ts` began deriving the
manifest and schemas from the `.rs` source, statically and with no Rust toolchain.

### Why the schema→TS emitter is in-tree

`scripts/json-schema-to-ts.ts` is a small emitter targeting the two dialects this
repo produces (Pydantic v2 and zod-to-json-schema) rather than a dependency on
`json-schema-to-typescript`. The output is a checked-in artifact verified
byte-for-byte in CI, so every ordering and formatting decision has to be ours and
stable — and the package ships with zero runtime dependencies.

## Where development happens

This repository is the published home of `@upapi/sdk`: it is what npm installs, and
issues and pull requests are welcome here. The typed operation catalog under
`src/generated/` is generated from upAPI’s private operation definitions and synced
into this repo automatically, so edits to those files are made upstream and would be
overwritten. The client, error handling and tests in the remaining files are
hand-written and are the code to change.
