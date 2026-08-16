/**
 * Shape of `GET /usage`. Mirrors apps/web/src/app/api/usage/route.ts.
 *
 * The monthly figures are WEIGHTED UNITS, not raw call counts: one invocation
 * spends the operation's `unitWeight` (SERP 25×, browser 20×, residential-proxy
 * social 15×, LLM 10×, light social 4×, plain HTTP relay 1×). A plan advertising
 * 50,000 units is therefore 50,000 cheap calls or 2,000 SERP calls.
 */
export type Usage = {
  /** Display name of the active plan, or `'Free'`. */
  plan: string;
  planSlug: string;
  /** `ACTIVE` | `TRIALING` | `PAST_DUE` | `FREE` | … */
  status: string;
  rpmLimit: number;
  monthlyLimit: number;
  usedThisMinute: number;
  usedThisMonth: number;
  remainingMinute: number;
  remainingMonth: number;
  units: {
    used: number;
    limit: number;
    remaining: number;
  };
  /**
   * Present ONLY while the organization is on a live trial. A trial is capped at
   * 10% of the tier's monthly units for its whole duration, so calls can stop far
   * below `monthlyLimit` — feature-detect this block rather than reading zeros.
   */
  trial?: {
    unitCap: number;
    unitsUsed: number;
    unitsRemaining: number;
    endsAt: string | null;
  };
  /** ISO timestamp at which the per-minute window resets. */
  resetAt: string;
  hostedFunctions: { used: number; limit: number };
  computeSeconds: { used: number; limit: number };
};
