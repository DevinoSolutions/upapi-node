/**
 * @upapi/sdk — typed client for api.upapi.io.
 *
 * Zero runtime dependencies; Node >=20 (global fetch). The operation catalog,
 * per-op types, and error vocabulary under `./generated` are produced by
 * `pnpm generate:sdk` from the same worker registries that seed the live
 * marketplace — edit an operation, regenerate, and the SDK follows.
 */
export {
  UpAPI,
  DEFAULT_BASE_URL,
  DEFAULT_TIMEOUT_MS,
  MAX_RETRY_DELAY_MS,
  type UpAPIOptions,
  type CallOptions,
  type CallResult,
  type RetryOptions,
} from './client.js';

export {
  UpAPIError,
  UpAPITimeoutError,
  parseRateLimit,
  parseRetryAfter,
  type RateLimitInfo,
} from './errors.js';

export type { Usage } from './usage.js';

export {
  PUBLIC_ERROR_CODES,
  PUBLIC_ERROR_STATUS,
  type PublicErrorCode,
} from './generated/error-codes.js';

export {
  OPERATIONS,
  OPERATION_SLUGS,
  type OperationSlug,
  type OperationMeta,
} from './generated/catalog.js';

export type { Operations } from './generated/operations.js';

export type * from './generated/types.js';
