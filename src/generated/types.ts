/**
 * GENERATED FILE — DO NOT EDIT.
 *
 * Produced by packages/sdk/scripts/generate.ts from the TS + Python + Rust
 * operation registries. Run `pnpm generate:sdk` after changing any operation; CI fails if
 * this file is out of date.
 */

// ── archive-wayback.get ─────────────────────────────────────────────────

export interface ArchiveWaybackGetInput {
  /**
   * URL to look up in the Wayback Machine
   */
  url: string;
  /**
   * Optional target time YYYYMMDDhhmmss (partial ok). Omit for the newest snapshot.
   */
  timestamp?: string | null;
}

export interface ArchiveWaybackGetOutputSnapshot {
  url: string;
  timestamp: string;
  takenAt: string;
  status: number;
}

export interface ArchiveWaybackGetOutput {
  queriedUrl: string;
  found: boolean;
  closest: ArchiveWaybackGetOutputSnapshot | null;
  fetchedAt: string;
}

// ── audio-transcribe-result.get ─────────────────────────────────────────

export interface AudioTranscribeResultGetInput {
  /**
   * The jobId returned by audio-transcribe (e.g. upapi-3f9c1d2e4b5a…).
   */
  jobId: string;
}

export interface AudioTranscribeResultGetOutputSegment {
  /**
   * Segment start, seconds from the beginning
   */
  start: number;
  /**
   * Segment end, seconds from the beginning
   */
  end: number;
  text: string;
}

export interface AudioTranscribeResultGetOutput {
  /**
   * completed once the transcript is ready; processing while it is still running
   */
  status: string;
  /**
   * Pass this to audio-transcribe-result.get to poll
   */
  jobId: string;
  /**
   * Full transcript; null until completed
   */
  text?: string | null;
  /**
   * Time-coded segments; null until completed
   */
  segments?: Array<AudioTranscribeResultGetOutputSegment> | null;
  /**
   * Detected (or forced) language code; null until completed
   */
  language?: string | null;
  /**
   * Audio duration in seconds; null until completed
   */
  durationSec?: number | null;
  /**
   * Progress percentage, 0-100
   */
  progress?: number;
  /**
   * Seconds to wait before polling again; null once completed
   */
  pollAfterSec?: number | null;
}

// ── audio-transcribe.post ───────────────────────────────────────────────

export interface AudioTranscribePostInput {
  /**
   * Public URL of the audio or video to transcribe (e.g. https://example.com/interview.mp3). Up to 2 hours long.
   */
  url: string;
  /**
   * Spoken-language hint as an ISO code (e.g. en). Omit to auto-detect.
   */
  language?: string | null;
}

export interface AudioTranscribePostOutputSegment {
  /**
   * Segment start, seconds from the beginning
   */
  start: number;
  /**
   * Segment end, seconds from the beginning
   */
  end: number;
  text: string;
}

export interface AudioTranscribePostOutput {
  /**
   * completed once the transcript is ready; processing while it is still running
   */
  status: string;
  /**
   * Pass this to audio-transcribe-result.get to poll
   */
  jobId: string;
  /**
   * Full transcript; null until completed
   */
  text?: string | null;
  /**
   * Time-coded segments; null until completed
   */
  segments?: Array<AudioTranscribePostOutputSegment> | null;
  /**
   * Detected (or forced) language code; null until completed
   */
  language?: string | null;
  /**
   * Audio duration in seconds; null until completed
   */
  durationSec?: number | null;
  /**
   * Progress percentage, 0-100
   */
  progress?: number;
  /**
   * Seconds to wait before polling again; null once completed
   */
  pollAfterSec?: number | null;
}

// ── bbc-news.get ────────────────────────────────────────────────────────

export interface BbcNewsGetInput {
  /**
   * BBC section slug
   */
  section?:
    | 'news'
    | 'world'
    | 'business'
    | 'technology'
    | 'science-environment'
    | 'entertainment-arts'
    | 'sport';
  /**
   * Max headlines to return
   */
  limit?: number;
}

export interface BbcNewsGetOutput {
  section: string;
  url: string;
  totalCount: number;
  headlines: Array<{
    position: number;
    title: string;
    url: string;
    summary: string;
  }>;
  fetchedAt: string;
}

// ── bluesky-profile.get ─────────────────────────────────────────────────

export interface BlueskyProfileGetInput {
  /**
   * Bluesky handle (e.g. bsky.app) or DID (did:plc:...)
   */
  handle: string;
}

export interface BlueskyProfileGetOutput {
  did: string;
  handle: string;
  displayName: string | null;
  description: string | null;
  avatar: string | null;
  banner: string | null;
  followersCount: number;
  followsCount: number;
  postsCount: number;
  indexedAt: string | null;
  associated: Record<string, unknown> | null;
  labels: Array<string>;
  fetchedAt: string;
}

// ── cloudflare-page-title.get ───────────────────────────────────────────

export interface CloudflarePageTitleGetInput {
  /**
   * URL to fetch
   */
  url: string;
  /**
   * curl-cffi browser profile
   */
  impersonate?: string;
}

export interface CloudflarePageTitleGetOutput {
  url: string;
  status: number;
  title: string;
  server: string;
  fetched_with: string;
}

// ── crypto-price.get ────────────────────────────────────────────────────

export interface CryptoPriceGetInput {
  /**
   * Comma-separated CoinGecko coin ids (e.g. bitcoin,ethereum,solana)
   */
  coins: string;
  /**
   * Comma-separated fiat/crypto quote currencies (e.g. usd,eur,btc)
   */
  vsCurrencies?: string;
  includeMarketCap?: boolean;
  include24hChange?: boolean;
}

export interface CryptoPriceGetOutput {
  prices: Record<string, Record<string, number | null>>;
  marketCaps: Record<string, Record<string, number | null>>;
  change24h: Record<string, Record<string, number | null>>;
  fetchedAt: string;
}

// ── currency-convert.get ────────────────────────────────────────────────

export interface CurrencyConvertGetInput {
  /**
   * Amount of the base currency to convert
   */
  amount?: number;
  /**
   * ISO-4217 base currency code (e.g. USD)
   */
  base: string;
  /**
   * Comma-separated ISO-4217 target currency codes (e.g. EUR,GBP,JPY)
   */
  targets: string;
}

export interface CurrencyConvertGetOutput {
  amount: number;
  base: string;
  date: string;
  rates: Record<string, number>;
  converted: Record<string, number>;
  fetchedAt: string;
}

// ── detect-tech-stack.post ──────────────────────────────────────────────

export interface DetectTechStackPostInput {
  /**
   * URL to analyze (e.g. https://stripe.com)
   */
  url: string;
}

export interface DetectTechStackPostOutputTechnology {
  name: string;
  category: string;
  confidence: string;
  evidence: string;
}

export interface DetectTechStackPostOutput {
  url: string;
  finalUrl: string;
  statusCode: number;
  technologies: Array<DetectTechStackPostOutputTechnology>;
  server: string | null;
  poweredBy: string | null;
  contentType: string | null;
  fetchedAt: string;
}

// ── devto-articles-search.get ───────────────────────────────────────────

export interface DevtoArticlesSearchGetInput {
  /**
   * Filter by single tag (e.g. javascript, python, ai)
   */
  tag?: string | null;
  /**
   * Filter by author username
   */
  username?: string | null;
  /**
   * If true, return the top articles of the week (ignores tag/username)
   */
  topArticles?: boolean;
  pageSize?: number;
}

export interface DevtoArticlesSearchGetOutputArticle {
  id: number;
  title: string;
  description: string;
  url: string;
  slug: string;
  publishedAt: string;
  readingTimeMinutes: number;
  commentsCount: number;
  reactionsCount: number;
  positiveReactionsCount: number;
  tags: Array<string>;
  author: string;
  authorUsername: string;
  coverImage: string | null;
}

export interface DevtoArticlesSearchGetOutput {
  totalReturned: number;
  articles: Array<DevtoArticlesSearchGetOutputArticle>;
  fetchedAt: string;
}

// ── email-read-verification-code.post ───────────────────────────────────

export interface EmailReadVerificationCodePostInput {
  /**
   * IMAP server hostname
   */
  imapHost?: string;
  /**
   * IMAP server port
   */
  imapPort?: number;
  /**
   * IMAP username (email address)
   */
  imapUser: string;
  /**
   * IMAP password or app password
   */
  imapPass: string;
  /**
   * Filter emails by sender (e.g. noreply@redditmail.com)
   */
  senderFilter: string;
  /**
   * Filter by recipient address (useful with catch-all domains)
   */
  recipientFilter?: string;
  /**
   * Regex pattern to match subject line
   */
  subjectPattern?: string;
  /**
   * Regex to extract a verification code from the email SUBJECT (the body is not fetched — use email-read-verification-link for body tokens)
   */
  codePattern?: string;
  /**
   * Only look at emails received within this many minutes
   */
  maxAgeMinutes?: number;
  /**
   * Number of polling attempts
   */
  maxRetries?: number;
  /**
   * Milliseconds between retry attempts
   */
  retryDelayMs?: number;
}

export interface EmailReadVerificationCodePostOutput {
  /**
   * Extracted verification code
   */
  code: string;
  /**
   * Email subject line
   */
  subject: string;
  /**
   * Sender address
   */
  from: string;
  /**
   * Recipient address
   */
  to: string;
  /**
   * When the email was received
   */
  receivedAt: string;
  fetchedAt: string;
  elapsedMs: number;
}

// ── email-read-verification-link.post ───────────────────────────────────

export interface EmailReadVerificationLinkPostInput {
  /**
   * IMAP server hostname
   */
  imapHost?: string;
  /**
   * IMAP server port
   */
  imapPort?: number;
  /**
   * IMAP username (email address)
   */
  imapUser: string;
  /**
   * IMAP password or app password
   */
  imapPass: string;
  /**
   * Filter emails by sender (e.g. noreply@reddit.com)
   */
  senderFilter: string;
  /**
   * Filter by recipient address (useful with catch-all domains)
   */
  recipientFilter?: string;
  /**
   * Regex matched against the subject, to pick one of several mails from the same sender
   */
  subjectPattern?: string;
  /**
   * Regex matched against the DECODED body. The first capture group is returned when present, otherwise the whole match. Default matches any http(s) URL.
   */
  linkPattern?: string;
  /**
   * Only look at emails received within this many minutes
   */
  maxAgeMinutes?: number;
  /**
   * Number of polling attempts
   */
  maxRetries?: number;
  /**
   * Milliseconds between retry attempts
   */
  retryDelayMs?: number;
  /**
   * Mailboxes to search, in order. Omit to search INBOX plus whatever the server flags \All and \Junk (Gmail: All Mail and Spam) — providers routinely file one-time verification links as junk, and searching INBOX alone reports them as never sent.
   */
  mailboxes?: Array<string>;
}

export interface EmailReadVerificationLinkPostOutput {
  /**
   * First body match — the link to follow
   */
  link: string;
  /**
   * Every distinct match in the body, in document order
   */
  allLinks: Array<string>;
  /**
   * Email subject line
   */
  subject: string;
  /**
   * Sender address
   */
  from: string;
  /**
   * Recipient address
   */
  to: string;
  /**
   * When the email was received
   */
  receivedAt: string;
  /**
   * Which mailbox the hit came from. A link found in Spam is still a valid link, but it tells the caller the provider is filtering this sender.
   */
  mailbox: string;
  fetchedAt: string;
  elapsedMs: number;
}

// ── fetch-markdown.post ─────────────────────────────────────────────────

export interface FetchMarkdownPostInput {
  /**
   * Absolute http(s) URL of the page to convert (e.g. https://en.wikipedia.org/wiki/Markdown). Private, loopback and link-local destinations are refused.
   */
  url: string;
  /**
   * article = Mozilla Readability main-content extraction, verified against the whole page and auto-downgraded when it strips too much; full = the whole body with nav/footer/aside/form removed (e.g. article).
   */
  mode?: 'article' | 'full';
  /**
   * Keep inline [text](url) links in the markdown and return the extracted link list (e.g. true). false unwraps every anchor to plain text.
   */
  includeLinks?: boolean;
  /**
   * Keep ![alt](url) image references in the markdown (e.g. false). Images are dropped by default because they cost tokens and rarely help an LLM.
   */
  includeImages?: boolean;
  /**
   * Maximum characters of markdown to return (e.g. 100000). Output is cut at the nearest paragraph/line boundary and `truncated` is set.
   */
  maxChars?: number;
  /**
   * Total network budget in milliseconds across the direct attempt and the one proxied retry (e.g. 20000). Capped below the 28s API-gateway edge timeout.
   */
  timeoutMs?: number;
}

export interface FetchMarkdownPostOutput {
  /**
   * The converted document. Prefixed with the page title as an H1 when the extracted content does not already start with a heading.
   */
  markdown: string;
  /**
   * Page/article title, or an empty string if none was found.
   */
  title: string;
  /**
   * Author line, when Readability or a meta tag exposes one; null otherwise.
   */
  byline: string | null;
  /**
   * Language tag from <html lang> (e.g. "en"); null if absent.
   */
  lang: string | null;
  /**
   * Short summary from Readability or the meta description; null if absent.
   */
  excerpt: string | null;
  /**
   * Absolute http(s) links found in the extracted content, capped at 500. Present only when includeLinks is true; reflects the extracted document, which may be longer than a truncated markdown body.
   */
  links?: Array<{
    href: string;
    text: string;
  }>;
  /**
   * URL actually fetched, after following redirects.
   */
  finalUrl: string;
  /**
   * HTTP status of the response that produced the markdown.
   */
  httpStatus: number;
  /**
   * Transport that produced the returned body: direct = straight from the worker; datacenter/residential = the proxy-pool tier used for the retry.
   */
  fetchedWith: 'direct' | 'datacenter' | 'residential';
  /**
   * Which stage produced the markdown. In article mode this reads "full-dom" when Readability failed the content-density check.
   */
  extractor: 'readability' | 'full-dom';
  /**
   * True when the markdown was cut to fit maxChars.
   */
  truncated: boolean;
  /**
   * Length of the returned markdown.
   */
  charCount: number;
  /**
   * ISO-8601 timestamp of the fetch.
   */
  fetchedAt: string;
}

// ── github-repo.get ─────────────────────────────────────────────────────

export interface GithubRepoGetInput {
  /**
   * Repo owner (user or org)
   */
  owner: string;
  /**
   * Repo name
   */
  repo: string;
}

export interface GithubRepoGetOutput {
  fullName: string;
  description: string | null;
  htmlUrl: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  forks: number;
  openIssues: number;
  watchers: number;
  defaultBranch: string;
  topics: Array<string>;
  license: string | null;
  isArchived: boolean;
  isFork: boolean;
  isTemplate: boolean;
  createdAt: string;
  updatedAt: string;
  pushedAt: string;
  fetchedAt: string;
}

// ── github-trending.get ─────────────────────────────────────────────────

export interface GithubTrendingGetInput {
  /**
   * Programming language slug (python, rust, typescript, go, …). Empty = any language.
   */
  language?: string;
  /**
   * Trend window
   */
  since?: 'daily' | 'weekly' | 'monthly';
  limit?: number;
}

export interface GithubTrendingGetOutput {
  language: string;
  since: string;
  totalCount: number;
  repos: Array<{
    position: number;
    fullName: string;
    url: string;
    description: string;
    language: string;
    totalStars: number;
    starsToday: number;
    forks: number;
  }>;
  fetchedAt: string;
}

// ── github-user.get ─────────────────────────────────────────────────────

export interface GithubUserGetInput {
  /**
   * GitHub login (user or org)
   */
  username: string;
}

export interface GithubUserGetOutput {
  login: string;
  name: string | null;
  type: string;
  bio: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  twitterHandle: string | null;
  publicRepos: number;
  publicGists: number;
  followers: number;
  following: number;
  avatarUrl: string;
  htmlUrl: string;
  createdAt: string;
  fetchedAt: string;
}

// ── google-autocomplete.post ────────────────────────────────────────────

export interface GoogleAutocompletePostInput {
  /**
   * Seed query to autocomplete
   */
  query: string;
  /**
   * hl param (e.g. en, fr, es)
   */
  language?: string;
  /**
   * gl param (e.g. us, ca, gb)
   */
  country?: string;
  /**
   * 'chrome' (rich: relevance+type) or 'firefox' (simple)
   */
  client?: string;
  /**
   * Also query '{query} a..z' to mine long-tail suggestions
   */
  expand?: boolean;
  /**
   * Max suggestions to return
   */
  maxSuggestions?: number;
  /**
   * Optional proxy URL
   */
  proxyUrl?: string | null;
}

export interface GoogleAutocompletePostOutputSuggestionItem {
  text: string;
  relevance?: number | null;
  kind?: string | null;
}

export interface GoogleAutocompletePostOutput {
  success: boolean;
  query: string;
  suggestions: Array<GoogleAutocompletePostOutputSuggestionItem>;
  count: number;
  message: string;
  fetchedAt: string;
  elapsedMs: number;
}

// ── google-maps-place.get ───────────────────────────────────────────────

export interface GoogleMapsPlaceGetInput {
  /**
   * Google place id, as returned by Google Maps Business Search (e.g. "ChIJj61dQgK6j4AR4GeTYWZsKWw").
   */
  placeId?: string | null;
  /**
   * Google customer id, the decimal identifier (e.g. "1868053941146338963").
   */
  cid?: string | null;
  /**
   * Google feature id (e.g. "0x4cce05120f81812b:0x19eca9297f4bc693").
   */
  featureId?: string | null;
  /**
   * A Google Maps link to the place, pasted as-is from the browser or the share sheet.
   */
  url?: string | null;
  /**
   * Language for the name and opening hours, as an ISO code (e.g. "en").
   */
  language?: string;
  /**
   * Two-letter country code biasing the response (e.g. "ca").
   */
  region?: string;
  /**
   * Route the request through your own proxy (e.g. http://user:pass@host:port). Omit to use upAPI's pool.
   */
  proxyUrl?: string | null;
}

/**
 * The place itself, flattened — same shape as one Business Search result.
 */
export interface GoogleMapsPlaceGetOutput {
  name: string;
  /**
   * Google place id (ChIJ...)
   */
  placeId?: string | null;
  /**
   * Google feature id (0x<cell>:0x<cid>); pass it to Google Maps Place Details
   */
  featureId?: string | null;
  /**
   * Google customer id — the decimal form of the feature id
   */
  cid?: string | null;
  address?: string | null;
  addressLines?: Array<string> | null;
  street?: string | null;
  city?: string | null;
  /**
   * Human "City, Region, Country" line
   */
  locality?: string | null;
  countryCode?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  /**
   * Primary Google category
   */
  category?: string | null;
  categories?: Array<string> | null;
  rating?: number | null;
  /**
   * Total Google reviews. Best-effort: Google serves this field inconsistently on the Maps endpoints — the same request returned it one hour and omitted it the next (measured 2026-08-17) — so treat null as 'not published on this response', not as zero reviews.
   */
  reviewCount?: number | null;
  /**
   * Phone as Google displays it locally
   */
  phone?: string | null;
  /**
   * E.164 phone, when Google publishes one
   */
  phoneInternational?: string | null;
  website?: string | null;
  domain?: string | null;
  timezone?: string | null;
  thumbnail?: string | null;
  /**
   * Per weekday, as [{"day": "Monday", "hours": ["8 AM-11 PM"]}]
   */
  openingHours?: Array<Record<string, unknown>> | null;
  googleMapsUrl?: string | null;
  /**
   * Which input identifier this lookup was resolved from: placeId, cid, featureId or url
   */
  resolvedFrom: string;
}

// ── google-maps-reviews.get ─────────────────────────────────────────────

export interface GoogleMapsReviewsGetInput {
  /**
   * Google place id, as returned by Google Maps Business Search (e.g. "ChIJj61dQgK6j4AR4GeTYWZsKWw").
   */
  placeId?: string | null;
  /**
   * Google customer id, the decimal identifier (e.g. "1868053941146338963").
   */
  cid?: string | null;
  /**
   * Google feature id (e.g. "0x4cce05120f81812b:0x19eca9297f4bc693").
   */
  featureId?: string | null;
  /**
   * A Google Maps link to the place, pasted as-is from the browser or the share sheet.
   */
  url?: string | null;
  /**
   * How many reviews to return, up to 200 (e.g. 100). Google serves at most 60 per page, so higher values cost proportionally more time.
   */
  maxResults?: number;
  /**
   * Order Google returns the reviews in: relevance (Google's own "most relevant" ranking, the default), newest, highest_rating or lowest_rating.
   */
  sort?: string;
  /**
   * Continue a previous call: pass the `nextPageToken` it returned. Keep `sort` and the place identifier the same, or the token will not line up.
   */
  pageToken?: string | null;
  /**
   * Language for the reviews, as an ISO code (e.g. "en", "fr"). Google uses this to pick and rank which reviews it surfaces, so different languages genuinely return different reviews rather than translations of one set.
   */
  language?: string;
  /**
   * Two-letter country code biasing the response (e.g. "ca").
   */
  region?: string;
  /**
   * Route the request through your own proxy (e.g. http://user:pass@host:port). Omit to use upAPI's pool.
   */
  proxyUrl?: string | null;
}

export interface GoogleMapsReviewsGetOutputOwnerResponse {
  text?: string | null;
  /**
   * How Google phrases the age of the reply (e.g. "a month ago")
   */
  relativeTime?: string | null;
}

/**
 * One Google Maps review.
 */
export interface GoogleMapsReviewsGetOutputReview {
  reviewId?: string | null;
  /**
   * Stars the author gave, 1-5
   */
  rating?: number | null;
  /**
   * The scale the rating is on — 5 on every response measured
   */
  ratingMax?: number | null;
  /**
   * The review body in full. Null when the author rated without writing anything, which is common — roughly one review in ten on the places measured.
   */
  text?: string | null;
  /**
   * Language of the text as delivered, as an ISO code
   */
  language?: string | null;
  /**
   * How Google phrases the age of the review (e.g. "a week ago")
   */
  relativeTime?: string | null;
  /**
   * When the review was posted, as an ISO 8601 UTC timestamp
   */
  publishedAt?: string | null;
  author?: GoogleMapsReviewsGetOutputReviewAuthor | null;
  /**
   * Photos the author attached to this review
   */
  photos?: Array<GoogleMapsReviewsGetOutputReviewPhoto> | null;
  /**
   * The business owner's public reply, when there is one
   */
  ownerResponse?: GoogleMapsReviewsGetOutputOwnerResponse | null;
  /**
   * Permalink to the review on Google Maps
   */
  reviewUrl?: string | null;
  /**
   * Which network published the review — "Google" for the overwhelming majority, but Google also syndicates partner sources on some places
   */
  source?: string | null;
}

export interface GoogleMapsReviewsGetOutputReviewAuthor {
  name?: string | null;
  profileUrl?: string | null;
  photoUrl?: string | null;
  /**
   * How many reviews this author has contributed to Google overall
   */
  reviewCount?: number | null;
  /**
   * How many photos this author has contributed to Google overall
   */
  photoCount?: number | null;
}

export interface GoogleMapsReviewsGetOutputReviewPhoto {
  url: string;
  caption?: string | null;
}

export interface GoogleMapsReviewsGetOutput {
  /**
   * The Google feature id these reviews were read from
   */
  featureId: string;
  /**
   * Which input identifier this lookup was resolved from: placeId, cid, featureId or url
   */
  resolvedFrom: string;
  sort: string;
  count: number;
  reviews: Array<GoogleMapsReviewsGetOutputReview>;
  /**
   * Pass back as `pageToken` to read the next page. Null when Google has no more reviews to give.
   */
  nextPageToken?: string | null;
  /**
   * True when Google still had more reviews than `maxResults` allowed
   */
  truncated: boolean;
}

// ── google-maps-search.post ─────────────────────────────────────────────

export interface GoogleMapsSearchPostInput {
  /**
   * What to search for, exactly as you would type it into Google Maps (e.g. "coffee shops in Ottawa" or "dentist near Shoreditch London").
   */
  query: string;
  /**
   * Centre the search on this latitude (e.g. 45.4215). Pass with `longitude`. Omit to let Google infer the area from the query text.
   */
  latitude?: number | null;
  /**
   * Centre the search on this longitude (e.g. -75.6972). Pass with `latitude`.
   */
  longitude?: number | null;
  /**
   * Map zoom for the coordinate search, controlling the radius: 13 is roughly a city (the default), 16 a neighbourhood, 10 a metro area.
   */
  zoom?: number | null;
  /**
   * How many places to return, up to 100 (e.g. 40). Google serves 20 per page, so higher values cost proportionally more time.
   */
  maxResults?: number;
  /**
   * Language for names and hours, as an ISO code (e.g. "en", "fr").
   */
  language?: string;
  /**
   * Two-letter country code biasing the results (e.g. "ca", "gb").
   */
  region?: string;
  /**
   * Route the request through your own proxy (e.g. http://user:pass@host:port). Omit to use upAPI's pool.
   */
  proxyUrl?: string | null;
}

/**
 * One Google Maps business.
 *
 * Shared by both operations on purpose: search rows and the place-details
 * response are the SAME record shape upstream, so publishing two subtly
 * different schemas for them would be a fiction that callers pay for when they
 * chain a search into a details lookup.
 */
export interface GoogleMapsSearchPostOutputPlace {
  name: string;
  /**
   * Google place id (ChIJ...)
   */
  placeId?: string | null;
  /**
   * Google feature id (0x<cell>:0x<cid>); pass it to Google Maps Place Details
   */
  featureId?: string | null;
  /**
   * Google customer id — the decimal form of the feature id
   */
  cid?: string | null;
  address?: string | null;
  addressLines?: Array<string> | null;
  street?: string | null;
  city?: string | null;
  /**
   * Human "City, Region, Country" line
   */
  locality?: string | null;
  countryCode?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  /**
   * Primary Google category
   */
  category?: string | null;
  categories?: Array<string> | null;
  rating?: number | null;
  /**
   * Total Google reviews. Best-effort: Google serves this field inconsistently on the Maps endpoints — the same request returned it one hour and omitted it the next (measured 2026-08-17) — so treat null as 'not published on this response', not as zero reviews.
   */
  reviewCount?: number | null;
  /**
   * Phone as Google displays it locally
   */
  phone?: string | null;
  /**
   * E.164 phone, when Google publishes one
   */
  phoneInternational?: string | null;
  website?: string | null;
  domain?: string | null;
  timezone?: string | null;
  thumbnail?: string | null;
  /**
   * Per weekday, as [{"day": "Monday", "hours": ["8 AM-11 PM"]}]
   */
  openingHours?: Array<Record<string, unknown>> | null;
  googleMapsUrl?: string | null;
}

export interface GoogleMapsSearchPostOutput {
  query: string;
  count: number;
  places: Array<GoogleMapsSearchPostOutputPlace>;
  /**
   * True when Google still had more results than `maxResults` allowed
   */
  truncated: boolean;
}

// ── hackernews-search.get ───────────────────────────────────────────────

export interface HackernewsSearchGetInput {
  /**
   * Full-text search query
   */
  query: string;
  /**
   * HN Algolia tag filter: story, comment, poll, show_hn, ask_hn, front_page, etc.
   */
  tags?: string;
  /**
   * Sort order
   */
  order?: string;
  hitsPerPage?: number;
}

export interface HackernewsSearchGetOutputHit {
  id: string;
  title: string;
  author: string;
  url: string;
  points: number | null;
  numComments: number | null;
  createdAt: string;
  tags: Array<string>;
  storyText: string | null;
}

export interface HackernewsSearchGetOutput {
  query: string;
  totalHits: number;
  hits: Array<HackernewsSearchGetOutputHit>;
  fetchedAt: string;
}

// ── html-to-pdf.post ────────────────────────────────────────────────────

export interface HtmlToPdfPostInput {
  /**
   * Absolute http(s) URL to render (e.g. https://example.com). Mutually exclusive with `html`. URLs resolving to private, loopback, link-local or cloud-metadata addresses are rejected.
   */
  url?: string;
  /**
   * Raw HTML document to render, up to 2 MB. Mutually exclusive with `url`. Relative asset paths cannot resolve in this mode — use absolute https URLs or inline/data: assets (e.g. <h1>Invoice #42</h1>).
   */
  html?: string;
  /**
   * Paper size (e.g. A4).
   */
  format?: 'A4' | 'Letter' | 'Legal';
  /**
   * Print in landscape orientation instead of portrait (e.g. false).
   */
  landscape?: boolean;
  /**
   * Page margins as CSS lengths. Omitted sides default to zero, matching Chromium (e.g. {"top":"1in","bottom":"1in"}).
   */
  margin?: {
    /**
     * Top margin (e.g. 1in).
     */
    top?: string;
    /**
     * Right margin (e.g. 0.5in).
     */
    right?: unknown;
    /**
     * Bottom margin (e.g. 1in).
     */
    bottom?: unknown;
    /**
     * Left margin (e.g. 0.5in).
     */
    left?: unknown;
  };
  /**
   * Render background colours and images. Defaults to true — Chromium defaults this off, which strips the visual design most callers are trying to capture (e.g. true).
   */
  printBackground?: boolean;
  /**
   * Rendering scale of the webpage, 0.1 to 2 (e.g. 1).
   */
  scale?: number;
  /**
   * Pages to include. Omit for the whole document (e.g. 1-5, 8).
   */
  pageRanges?: string;
  /**
   * Which CSS media type to emulate. 'screen' (default) reproduces what a visitor sees; 'print' honours the site's print stylesheet (e.g. screen).
   */
  media?: 'screen' | 'print';
  /**
   * When rendering counts as done: 'domcontentloaded' is fastest, 'load' waits for subresources, 'networkidle' waits for the network to go quiet (e.g. load).
   */
  waitUntil?: 'load' | 'domcontentloaded' | 'networkidle';
}

export interface HtmlToPdfPostOutput {
  /**
   * Base64-encoded PDF bytes. No `data:` URI prefix — decode directly.
   */
  pdf: string;
  /**
   * Page count, read from the PDF itself. Omitted when the structure cannot be read with certainty — the PDF is still valid.
   */
  pages?: number;
  /**
   * Size of the DECODED PDF in bytes (the base64 string is ~4/3 of this).
   */
  bytes: number;
}

// ── image-ocr.post ──────────────────────────────────────────────────────

export interface ImageOcrPostInput {
  /**
   * Public URL of the image to read (e.g. https://example.com/receipt.png). Provide this OR `file`, not both.
   */
  url?: string | null;
  /**
   * The image itself, base64-encoded (no data: URI prefix). Max 3.7 MB decoded — base64 inflates by 4/3 and the API request body is capped at 5 MB. Supply `url` instead for anything larger. Expected media type image/*.
   */
  file?: string | null;
  /**
   * Scripts present in the image (e.g. en). Supported: ch, en — one bundled model covers Latin and Chinese. Omit for the default.
   */
  languages?: Array<string> | null;
}

export interface ImageOcrPostOutputBbox {
  /**
   * Left edge, pixels from the image's left
   */
  x: number;
  /**
   * Top edge, pixels from the image's top
   */
  y: number;
  width: number;
  height: number;
}

export interface ImageOcrPostOutputBlock {
  /**
   * Text of this detected line
   */
  text: string;
  /**
   * Recognition confidence, 0-1
   */
  confidence: number;
  bbox: ImageOcrPostOutputBbox;
}

export interface ImageOcrPostOutput {
  /**
   * All recognised text, one detected line per row
   */
  text: string;
  /**
   * Each detected line with its confidence and box
   */
  blocks: Array<ImageOcrPostOutputBlock>;
  /**
   * Image width in pixels
   */
  width: number;
  /**
   * Image height in pixels
   */
  height: number;
  /**
   * True when more than 5000 text blocks were detected and cut
   */
  truncated: boolean;
}

// ── instagram-check-account-health.get ──────────────────────────────────

export interface InstagramCheckAccountHealthGetInput {
  /**
   * Instagram username (without @)
   */
  username: string;
  /**
   * Optional proxy URL
   */
  proxyUrl?: string | null;
}

export interface InstagramCheckAccountHealthGetOutput {
  success: boolean;
  username: string;
  accountActive: boolean;
  isSuspended: boolean;
  isPrivate: boolean;
  isVerified: boolean;
  isBusinessAccount: boolean;
  followerCount: number;
  followingCount: number;
  postCount: number;
  message: string;
  fetchedAt: string;
  elapsedMs: number;
}

// ── instagram-check-account.post ────────────────────────────────────────

export interface InstagramCheckAccountPostInput {
  /**
   * Username, email, or phone number to check
   */
  query: string;
  /**
   * Optional proxy URL (recommended for bulk)
   */
  proxyUrl?: string | null;
}

export interface InstagramCheckAccountPostOutput {
  success: boolean;
  query: string;
  exists: boolean;
  queryType?: string | null;
  canSendEmail?: boolean;
  canSendPhone?: boolean;
  canUseFacebook?: boolean;
  canSendWhatsapp?: boolean;
  fetchedAt: string;
  elapsedMs: number;
}

// ── instagram-discover-location.post ────────────────────────────────────

export interface InstagramDiscoverLocationPostInput {
  /**
   * Instagram location ID (numeric)
   */
  locationId: string;
  /**
   * Optional proxy URL
   */
  proxyUrl?: string | null;
}

export interface InstagramDiscoverLocationPostOutputLocationPost {
  pk: string;
  shortcode: string;
  postUrl: string;
}

export interface InstagramDiscoverLocationPostOutput {
  success: boolean;
  locationId: string;
  locationName: string;
  posts: Array<InstagramDiscoverLocationPostOutputLocationPost>;
  latitude?: number | null;
  longitude?: number | null;
  fetchedAt: string;
  elapsedMs: number;
}

// ── instagram-get-post-commenters.post ──────────────────────────────────

export interface InstagramGetPostCommentersPostInput {
  /**
   * Post shortcode
   */
  shortcode: string;
  /**
   * Optional proxy URL
   */
  proxyUrl?: string | null;
}

export interface InstagramGetPostCommentersPostOutputComment {
  commentId: string;
  text: string;
  username: string;
  createdAt?: number | null;
}

export interface InstagramGetPostCommentersPostOutputCommenter {
  username: string;
  userId: string;
  isVerified?: boolean;
  profilePicUrl?: string | null;
}

export interface InstagramGetPostCommentersPostOutput {
  success: boolean;
  shortcode: string;
  ownerUsername: string;
  caption: string;
  commenters: Array<InstagramGetPostCommentersPostOutputCommenter>;
  comments: Array<InstagramGetPostCommentersPostOutputComment>;
  siblingShortcodes: Array<string>;
  fetchedAt: string;
  elapsedMs: number;
}

// ── instagram-get-post-info.post ────────────────────────────────────────

export interface InstagramGetPostInfoPostInput {
  /**
   * Post shortcode (the part after /p/ in the URL)
   */
  shortcode: string;
  /**
   * Optional proxy URL
   */
  proxyUrl?: string | null;
}

export interface InstagramGetPostInfoPostOutput {
  success: boolean;
  shortcode: string;
  postUrl: string;
  ownerUsername: string;
  caption: string;
  commentCount?: number | null;
  mediaUrls: Array<string>;
  isVideo?: boolean;
  videoUrl?: string | null;
  fetchedAt: string;
  elapsedMs: number;
}

// ── instagram-get-user-posts.post ───────────────────────────────────────

export interface InstagramGetUserPostsPostInput {
  /**
   * Instagram user PK (numeric ID, from get-user-profile)
   */
  userId: string;
  /**
   * Posts per page (max 33)
   */
  count?: number;
  /**
   * Pagination cursor (next_max_id from previous call)
   */
  maxId?: string | null;
  /**
   * Optional proxy URL (recommended — endpoint rate-limits aggressively)
   */
  proxyUrl?: string | null;
}

export interface InstagramGetUserPostsPostOutputPostItem {
  pk: string;
  shortcode: string;
  postUrl: string;
  caption?: string;
  likeCount?: number;
  commentCount?: number;
  mediaType?: number;
  takenAt?: number;
}

export interface InstagramGetUserPostsPostOutput {
  success: boolean;
  userId: string;
  posts: Array<InstagramGetUserPostsPostOutputPostItem>;
  moreAvailable: boolean;
  nextMaxId?: string | null;
  fetchedAt: string;
  elapsedMs: number;
}

// ── instagram-get-user-profile.post ─────────────────────────────────────

export interface InstagramGetUserProfilePostInput {
  /**
   * Instagram username (without @)
   */
  username: string;
  /**
   * Optional proxy URL
   */
  proxyUrl?: string | null;
}

export interface InstagramGetUserProfilePostOutput {
  success: boolean;
  username: string;
  fullName: string;
  biography: string;
  isPrivate: boolean;
  isVerified: boolean;
  isBusinessAccount: boolean;
  profilePicUrl?: string | null;
  externalUrl?: string | null;
  categoryName?: string | null;
  followers: number;
  following: number;
  postCount: number;
  instagramId: string;
  fetchedAt: string;
  elapsedMs: number;
}

// ── ip-geolocation.get ──────────────────────────────────────────────────

export interface IpGeolocationGetInput {
  /**
   * IPv4 or IPv6 address; omit to geolocate the caller
   */
  ip?: string | null;
}

export interface IpGeolocationGetOutput {
  ip: string;
  city: string | null;
  region: string | null;
  country: string | null;
  countryCode: string | null;
  postal: string | null;
  latitude: number | null;
  longitude: number | null;
  timezone: string | null;
  org: string | null;
  asn: string | null;
  languages: Array<string>;
  currency: string | null;
  fetchedAt: string;
}

// ── linkedin-check-account-health.post ──────────────────────────────────

export interface LinkedinCheckAccountHealthPostInput {
  /**
   * JSON of session cookies: li_at, JSESSIONID, bcookie.
   */
  sessionCookies: string;
  /**
   * Optional user-provided proxy URL.
   */
  proxyUrl?: string | null;
}

export interface LinkedinCheckAccountHealthPostOutput {
  success?: boolean;
  isValid?: boolean;
  profileName?: string;
  profileUrl?: string;
  profileUrn?: string;
  message?: string;
  fetchedAt?: string;
  elapsedMs?: number;
}

// ── linkedin-get-profile.post ───────────────────────────────────────────

export interface LinkedinGetProfilePostInput {
  /**
   * LinkedIn public identifier / vanity name (the slug in /in/<vanity>).
   */
  vanityName: string;
  /**
   * JSON of session cookies: li_at, JSESSIONID, bcookie.
   */
  sessionCookies: string;
  /**
   * Optional user-provided proxy URL.
   */
  proxyUrl?: string | null;
}

export interface LinkedinGetProfilePostOutputProfile {
  firstName?: string;
  lastName?: string;
  headline?: string;
  location?: string;
  vanityName?: string;
  profileUrl?: string;
  entityUrn?: string;
  publicIdentifier?: string;
  summary?: string;
}

export interface LinkedinGetProfilePostOutput {
  success?: boolean;
  profile?: LinkedinGetProfilePostOutputProfile;
  /**
   * Additional raw scalar fields extracted from the profile object.
   */
  fields?: Record<string, unknown>;
  message?: string;
  fetchedAt?: string;
  elapsedMs?: number;
}

// ── linkedin-jobs-detail.get ────────────────────────────────────────────

export interface LinkedinJobsDetailGetInput {
  /**
   * LinkedIn posting id, job URL or urn:li:jobPosting URN. Ids come from linkedin-jobs-search (e.g. 4431992044).
   */
  jobId: string;
  /**
   * User-provided proxy URL. Omit to use the operation's own datacenter pool.
   */
  proxyUrl?: string | null;
}

export interface LinkedinJobsDetailGetOutput {
  jobId: string;
  title: string;
  company: string;
  companyUrl: string | null;
  location: string;
  postedLabel: string | null;
  applicantsLabel: string | null;
  seniorityLevel: string | null;
  employmentType: string | null;
  jobFunction: string | null;
  industries: string | null;
  descriptionHtml: string;
  descriptionText: string;
  jobUrl: string | null;
  logoUrl: string | null;
  fetchedAt: string;
  elapsedMs: number;
}

// ── linkedin-jobs-search.get ────────────────────────────────────────────

export interface LinkedinJobsSearchGetInput {
  /**
   * Job title, skill or company to search for (e.g. "python developer")
   */
  keywords: string;
  /**
   * City, region or country to search in (e.g. "United States")
   */
  location?: string;
  /**
   * 1-based results page. LinkedIn's guest surface returns 10 postings per page.
   */
  page?: number;
  /**
   * Recency filter: any, past-month, past-week or past-24h
   */
  timePosted?: string;
  /**
   * Workplace filter: any, on-site, remote or hybrid
   */
  workplaceType?: string;
  /**
   * User-provided proxy URL. Omit to use the operation's own datacenter pool.
   */
  proxyUrl?: string | null;
}

export interface LinkedinJobsSearchGetOutputJobResult {
  jobId: string;
  title: string;
  company: string;
  companyUrl: string | null;
  location: string;
  postedAt: string | null;
  postedLabel: string | null;
  salary: string | null;
  benefits: Array<string>;
  jobUrl: string | null;
  logoUrl: string | null;
}

export interface LinkedinJobsSearchGetOutput {
  keywords: string;
  location: string;
  page: number;
  resultCount: number;
  hasMore: boolean;
  jobs: Array<LinkedinJobsSearchGetOutputJobResult>;
  fetchedAt: string;
  elapsedMs: number;
}

// ── linkedin-profile-search.post ────────────────────────────────────────

export interface LinkedinProfileSearchPostInput {
  /**
   * Job title or skill to search (e.g. 'Data Engineer')
   */
  keyword: string;
  /**
   * Location filter (e.g. 'Tunisia', 'New York')
   */
  location?: string | null;
  /**
   * Max profiles to return
   */
  maxResults?: number;
}

export interface LinkedinProfileSearchPostOutputLinkedInProfile {
  position: number;
  name: string;
  headline: string;
  url: string;
  linkedinPath: string;
}

export interface LinkedinProfileSearchPostOutput {
  success: boolean;
  keyword: string;
  location: string | null;
  profiles: Array<LinkedinProfileSearchPostOutputLinkedInProfile>;
  totalFound: number;
  query: string;
  message: string;
  fetchedAt: string;
  elapsedMs: number;
}

// ── mastodon-profile.get ────────────────────────────────────────────────

export interface MastodonProfileGetInput {
  /**
   * Fully-qualified Mastodon handle, e.g. "Gargron@mastodon.social"
   */
  handle: string;
}

export interface MastodonProfileGetOutput {
  id: string;
  username: string;
  acct: string;
  instance: string;
  displayName: string;
  note: string;
  url: string;
  avatar: string | null;
  header: string | null;
  followersCount: number;
  followingCount: number;
  statusesCount: number;
  createdAt: string | null;
  lastStatusAt: string | null;
  locked: boolean;
  bot: boolean;
  discoverable: boolean | null;
  group: boolean;
  fetchedAt: string;
}

// ── nasa-apod.get ───────────────────────────────────────────────────────

export interface NasaApodGetInput {
  /**
   * YYYY-MM-DD; omit for today. Must be on or after 1995-06-16.
   */
  date?: string | null;
  /**
   * Include high-resolution URL when available
   */
  hd?: boolean;
}

export interface NasaApodGetOutput {
  date: string;
  title: string;
  explanation: string;
  mediaType: string;
  url: string;
  hdurl: string | null;
  copyright: string | null;
  fetchedAt: string;
}

// ── npm-package.get ─────────────────────────────────────────────────────

export interface NpmPackageGetInput {
  /**
   * Package name, including @scope/ for scoped packages (e.g. @angular/core)
   */
  name: string;
}

export interface NpmPackageGetOutputVersion {
  version: string;
  publishedAt: string | null;
}

export interface NpmPackageGetOutput {
  name: string;
  description: string | null;
  latestVersion: string;
  versionCount: number;
  latestVersions: Array<NpmPackageGetOutputVersion>;
  license: string | null;
  homepage: string | null;
  repository: string | null;
  keywords: Array<string>;
  maintainers: Array<string>;
  createdAt: string | null;
  modifiedAt: string | null;
  fetchedAt: string;
}

// ── opengraph-parse.get ─────────────────────────────────────────────────

export interface OpengraphParseGetInput {
  /**
   * URL to fetch + parse for social preview metadata
   */
  url: string;
}

export interface OpengraphParseGetOutput {
  url: string;
  finalUrl: string;
  status: number;
  title: string;
  description: string | null;
  ogTitle: string | null;
  ogDescription: string | null;
  ogImage: string | null;
  ogType: string | null;
  ogSiteName: string | null;
  twitterTitle: string | null;
  twitterDescription: string | null;
  twitterImage: string | null;
  canonical: string | null;
  favicon: string | null;
  fetchedAt: string;
}

// ── pdf-extract-text.post ───────────────────────────────────────────────

export interface PdfExtractTextPostInput {
  /**
   * Public URL of the PDF to read (e.g. https://example.com/report.pdf). Provide this OR `file`, not both.
   */
  url?: string | null;
  /**
   * The PDF itself, base64-encoded (no data: URI prefix). Max 3.7 MB decoded — base64 inflates by 4/3 and the API request body is capped at 5 MB. Supply `url` instead for anything larger. Expected media type application/pdf.
   */
  file?: string | null;
  /**
   * Page range to extract, 1-based and inclusive (e.g. 1-5,8,11-13). Omit for the whole document.
   */
  pages?: string | null;
  /**
   * Also detect tables and return each one as a Markdown table (e.g. false). Slower — leave off unless you need them.
   */
  tables?: boolean;
}

export interface PdfExtractTextPostOutputTable {
  /**
   * 1-based page the table was found on
   */
  page: number;
  /**
   * 0-based position of this table within its page
   */
  index: number;
  rows: number;
  columns: number;
  /**
   * The table rendered as a GitHub-flavoured Markdown table
   */
  markdown: string;
}

export interface PdfExtractTextPostOutput {
  /**
   * All extracted text, pages joined by a blank line
   */
  text: string;
  /**
   * Number of pages the document contains
   */
  pages: number;
  /**
   * 1-based page numbers actually extracted
   */
  extractedPages: Array<number>;
  /**
   * Text of each extracted page, in order
   */
  pageTexts: Array<string>;
  /**
   * Detected tables; null unless `tables` was true
   */
  tables?: Array<PdfExtractTextPostOutputTable> | null;
  /**
   * True when output was cut at the 600000-character response cap
   */
  truncated: boolean;
}

// ── pokeapi-pokemon.get ─────────────────────────────────────────────────

export interface PokeapiPokemonGetInput {
  /**
   * Pokemon name (e.g. pikachu) or numeric dex id (as string)
   */
  name: string;
}

export interface PokeapiPokemonGetOutputStat {
  name: string;
  baseStat: number;
}

export interface PokeapiPokemonGetOutput {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: Array<string>;
  abilities: Array<string>;
  stats: Array<PokeapiPokemonGetOutputStat>;
  baseExperience: number | null;
  spriteFront: string | null;
  officialArtwork: string | null;
  fetchedAt: string;
}

// ── pypi-package.get ────────────────────────────────────────────────────

export interface PypiPackageGetInput {
  /**
   * PyPI package name (e.g. django, curl-cffi)
   */
  name: string;
}

export interface PypiPackageGetOutput {
  name: string;
  summary: string | null;
  latestVersion: string;
  license: string | null;
  author: string | null;
  authorEmail: string | null;
  homepage: string | null;
  projectUrls: Record<string, string>;
  requiresPython: string | null;
  keywords: Array<string>;
  classifiers: Array<string>;
  releaseCount: number;
  latestReleaseUploaded: string | null;
  fetchedAt: string;
}

// ── reddit-check-account-health.get ─────────────────────────────────────

export interface RedditCheckAccountHealthGetInput {
  /**
   * Reddit username (without u/)
   */
  username: string;
  /**
   * Account session cookies (JSON or '; '-delimited) — enables the reliable authenticated me.json read
   */
  sessionCookies?: string | null;
  /**
   * User-provided proxy URL
   */
  proxyUrl?: string | null;
}

export interface RedditCheckAccountHealthGetOutput {
  username: string;
  linkKarma: number;
  commentKarma: number;
  totalKarma: number;
  accountAge: number;
  createdUtc: number;
  isSuspended: boolean;
  /**
   * active | banned | suspended | notfound
   */
  status?: string;
  /**
   * True iff Reddit serves the permanent ban page
   */
  isBanned?: boolean;
  /**
   * Human-readable why (e.g. 'ban page confirmed via anon cross-check')
   */
  statusReason?: string | null;
  hasVerifiedEmail: boolean;
  isGold: boolean;
  isMod: boolean;
  iconUrl: string | null;
  fetchedAt: string;
  elapsedMs: number;
}

// ── reddit-check-comment-visibility.get ─────────────────────────────────

export interface RedditCheckCommentVisibilityGetInput {
  /**
   * Comment permalink, e.g. /r/Advice/comments/<postid>/comment/<cid>/ (or full URL)
   */
  permalink: string;
  /**
   * t1_<id> (or bare id). If omitted, parsed from the permalink.
   */
  commentId?: string | null;
  /**
   * Exit IP for the view — SHOULD be the reader account's own pinned IP, and differ from the author's for a true third-party check.
   */
  proxyUrl?: string | null;
  /**
   * A NON-AUTHOR pooled account's session cookie blob. REQUIRED in practice since 2026-07-30: Reddit answers every anonymous surface (HTML and .json) with a reCAPTCHA or 'blocked by network security' wall, so the cookie-less path is blocked and this check cannot run anonymously. Supplying a DIFFERENT account's session reads the comment the way any logged-in third party would — removed/shadowbanned comments are hidden from every non-author user, logged in or out, so the visibility verdict is the same. MUST NOT be the author's own session: Reddit shows an author their own removed comments, which would manufacture a false 'visible'.
   */
  readerSessionCookies?: string | null;
}

export interface RedditCheckCommentVisibilityGetOutput {
  commentId: string;
  permalink: string;
  threadLoaded: boolean;
  visibleToAnon: boolean;
  removed: boolean;
  shadowSuspected: boolean;
  fetchedAt: string;
  elapsedMs: number;
}

// ── reddit-get-trending.get ─────────────────────────────────────────────

export interface RedditGetTrendingGetInput {
  /**
   * Subreddit name (without r/)
   */
  subreddit: string;
  /**
   * Listing type: hot, new, rising, top, controversial
   */
  listing?: string;
  /**
   * Time filter for 'top' listing: hour, day, week, month, year, all
   */
  time?: string;
  /**
   * Max posts to return
   */
  limit?: number;
  /**
   * Pagination cursor
   */
  after?: string | null;
  /**
   * REQUIRED IN PRACTICE. Reddit account session cookies, as a JSON object or a '; '-delimited cookie header; the blob must contain reddit_session. Since 2026-07-30 Reddit blocks EVERY anonymous read surface, so a call without cookies returns a classified UPSTREAM_BLOCKED rather than data. Obtain the blob from reddit-login.post, or copy the reddit_session cookie out of a signed-in browser. A lead-gen account-pool row stores it nested at cookies->>'sessionCookies', not at the row's top level.
   */
  sessionCookies?: string | null;
  /**
   * User-provided proxy URL
   */
  proxyUrl?: string | null;
}

export interface RedditGetTrendingGetOutputPostItem {
  id: string;
  title: string;
  author: string;
  subreddit: string;
  selftext: string;
  url: string;
  permalink: string;
  score: number;
  upvoteRatio: number;
  numComments: number;
  createdUtc: number;
  isNsfw: boolean;
  isSelf: boolean;
  linkFlair: string | null;
}

export interface RedditGetTrendingGetOutput {
  subreddit: string;
  listing: string;
  posts: Array<RedditGetTrendingGetOutputPostItem>;
  after: string | null;
  totalResults: number;
  fetchedAt: string;
  elapsedMs: number;
}

// ── reddit-scrape-post.get ──────────────────────────────────────────────

export interface RedditScrapePostGetInput {
  /**
   * Subreddit name
   */
  subreddit: string;
  /**
   * Reddit post ID (e.g. '1abc23')
   */
  postId: string;
  /**
   * Comment sort: best, top, new, controversial, old, qa
   */
  commentSort?: string;
  /**
   * Max comment nesting depth
   */
  commentDepth?: number;
  /**
   * REQUIRED IN PRACTICE. Reddit account session cookies, as a JSON object or a '; '-delimited cookie header; the blob must contain reddit_session. Since 2026-07-30 Reddit blocks EVERY anonymous read surface, so a call without cookies returns a classified UPSTREAM_BLOCKED rather than data. Obtain the blob from reddit-login.post, or copy the reddit_session cookie out of a signed-in browser. A lead-gen account-pool row stores it nested at cookies->>'sessionCookies', not at the row's top level.
   */
  sessionCookies?: string | null;
  /**
   * User-provided proxy URL
   */
  proxyUrl?: string | null;
}

export interface RedditScrapePostGetOutputCommentItem {
  id: string;
  author: string;
  body: string;
  score: number;
  createdUtc: number;
  depth: number;
  isOp: boolean;
  parentId: string | null;
}

export interface RedditScrapePostGetOutputPostData {
  id: string;
  title: string;
  author: string;
  selftext: string;
  url: string;
  permalink: string;
  score: number;
  upvoteRatio: number;
  numComments: number;
  createdUtc: number;
  isNsfw: boolean;
  isSelf: boolean;
  linkFlair: string | null;
}

export interface RedditScrapePostGetOutput {
  post: RedditScrapePostGetOutputPostData;
  comments: Array<RedditScrapePostGetOutputCommentItem>;
  fetchedAt: string;
  elapsedMs: number;
}

// ── reddit-search-posts.get ─────────────────────────────────────────────

export interface RedditSearchPostsGetInput {
  /**
   * Search query
   */
  query: string;
  /**
   * Limit search to a specific subreddit
   */
  subreddit?: string | null;
  /**
   * Sort order: relevance, hot, top, new, comments
   */
  sort?: string;
  /**
   * Time filter: hour, day, week, month, year, all
   */
  time?: string;
  /**
   * Max results per page
   */
  limit?: number;
  /**
   * Pagination cursor (fullname of last item)
   */
  after?: string | null;
  /**
   * REQUIRED IN PRACTICE. Reddit account session cookies, as a JSON object or a '; '-delimited cookie header; the blob must contain reddit_session. Since 2026-07-30 Reddit blocks EVERY anonymous read surface, so a call without cookies returns a classified UPSTREAM_BLOCKED rather than data. Obtain the blob from reddit-login.post, or copy the reddit_session cookie out of a signed-in browser. A lead-gen account-pool row stores it nested at cookies->>'sessionCookies', not at the row's top level.
   */
  sessionCookies?: string | null;
  /**
   * User-provided proxy URL
   */
  proxyUrl?: string | null;
}

export interface RedditSearchPostsGetOutputPostItem {
  id: string;
  title: string;
  author: string;
  subreddit: string;
  selftext: string;
  url: string;
  permalink: string;
  score: number;
  upvoteRatio: number;
  numComments: number;
  createdUtc: number;
  isNsfw: boolean;
  isSelf: boolean;
  linkFlair: string | null;
}

export interface RedditSearchPostsGetOutput {
  query: string;
  posts: Array<RedditSearchPostsGetOutputPostItem>;
  after: string | null;
  totalResults: number;
  fetchedAt: string;
  elapsedMs: number;
}

// ── reddit-subreddit-info.get ───────────────────────────────────────────

export interface RedditSubredditInfoGetInput {
  /**
   * Subreddit name (without r/)
   */
  subreddit: string;
  /**
   * REQUIRED IN PRACTICE. Reddit account session cookies, as a JSON object or a '; '-delimited cookie header; the blob must contain reddit_session. Since 2026-07-30 Reddit blocks EVERY anonymous read surface, so a call without cookies returns a classified UPSTREAM_BLOCKED rather than data. Obtain the blob from reddit-login.post, or copy the reddit_session cookie out of a signed-in browser. A lead-gen account-pool row stores it nested at cookies->>'sessionCookies', not at the row's top level.
   */
  sessionCookies?: string | null;
  /**
   * User-provided proxy URL
   */
  proxyUrl?: string | null;
}

export interface RedditSubredditInfoGetOutputSubRule {
  shortName: string;
  description: string;
  priority: number;
}

export interface RedditSubredditInfoGetOutput {
  subreddit: string;
  title: string;
  description: string;
  subscribers: number;
  activeUsers: number;
  createdUtc: number;
  isNsfw: boolean;
  language: string | null;
  bannerUrl: string | null;
  iconUrl: string | null;
  rules: Array<RedditSubredditInfoGetOutputSubRule>;
  fetchedAt: string;
  elapsedMs: number;
}

// ── screenshot.post ─────────────────────────────────────────────────────

export interface ScreenshotPostInput {
  /**
   * Absolute http(s) URL of the page to capture (e.g. https://example.com). URLs resolving to private, loopback, link-local or cloud-metadata addresses are rejected.
   */
  url: string;
  /**
   * Capture the entire scrollable document instead of just the viewport (e.g. false).
   */
  fullPage?: boolean;
  /**
   * Image encoding: 'png' is lossless and sharper for text; 'jpeg' is far smaller and accepts `quality` (e.g. png).
   */
  format?: 'png' | 'jpeg';
  /**
   * JPEG encoder quality, 1-100 (default 80). Rejected when format is png, which is lossless (e.g. 80).
   */
  quality?: number;
  /**
   * Viewport width in CSS pixels (e.g. 1280).
   */
  width?: number;
  /**
   * Viewport height in CSS pixels. Still sets the layout viewport when fullPage is true, but the image then grows to the document height (e.g. 800).
   */
  height?: number;
  /**
   * When navigation counts as done: 'domcontentloaded' is fastest, 'load' waits for subresources, 'networkidle' waits for the network to go quiet and suits lazy-rendered apps (e.g. load).
   */
  waitUntil?: 'load' | 'domcontentloaded' | 'networkidle';
  /**
   * Extra settle time after navigation before the shot, in milliseconds — for animations or late hydration (e.g. 500).
   */
  delayMs?: number;
  /**
   * Abort requests to known ad and tracker hosts before they load, so they cannot appear in the image (e.g. true).
   */
  blockAds?: boolean;
}

export interface ScreenshotPostOutput {
  /**
   * Base64-encoded image bytes. No `data:` URI prefix — decode directly.
   */
  image: string;
  /**
   * Encoding of the returned image.
   */
  format: 'png' | 'jpeg';
  /**
   * Image width in pixels.
   */
  width: number;
  /**
   * Image height in pixels — the full document height when fullPage was true.
   */
  height: number;
  /**
   * Size of the DECODED image in bytes (the base64 string is ~4/3 of this).
   */
  bytes: number;
  /**
   * URL of the page actually captured, after any redirects.
   */
  finalUrl: string;
}

// ── sitemap-parse.get ───────────────────────────────────────────────────

export interface SitemapParseGetInput {
  /**
   * Sitemap URL (usually /sitemap.xml or a sitemap index)
   */
  url: string;
  /**
   * Max URLs to return
   */
  limit?: number;
}

export interface SitemapParseGetOutputUrlEntry {
  loc: string;
  lastmod: string | null;
  changefreq: string | null;
  priority: number | null;
}

export interface SitemapParseGetOutput {
  sitemapUrl: string;
  type: string;
  totalFound: number;
  returned: number;
  urls: Array<SitemapParseGetOutputUrlEntry>;
  childSitemaps: Array<string>;
  fetchedAt: string;
}

// ── stackexchange-search.get ────────────────────────────────────────────

export interface StackexchangeSearchGetInput {
  /**
   * Full-text search query
   */
  query: string;
  /**
   * Stack Exchange site slug (stackoverflow, superuser, askubuntu, serverfault, etc.)
   */
  site?: string;
  pageSize?: number;
  sort?: string;
}

export interface StackexchangeSearchGetOutputHit {
  questionId: number;
  title: string;
  link: string;
  tags: Array<string>;
  score: number;
  answerCount: number;
  viewCount: number;
  isAnswered: boolean;
  hasAcceptedAnswer: boolean;
  askedBy: string;
  createdAt: string;
  lastActivity: string;
}

export interface StackexchangeSearchGetOutput {
  query: string;
  site: string;
  totalReturned: number;
  hasMore: boolean;
  quotaRemaining: number | null;
  hits: Array<StackexchangeSearchGetOutputHit>;
  fetchedAt: string;
}

// ── text-analyze.post ───────────────────────────────────────────────────

export interface TextAnalyzePostInput {
  /**
   * The text to analyze.
   */
  text: string;
}

export interface TextAnalyzePostOutput {
  bytes: number;
  characters: number;
  lines: number;
  sentences: number;
  /**
   * Lowercase hex SHA-256 of the UTF-8 bytes.
   */
  sha256: string;
  words: number;
}

// ── tiktok-check-account-health.get ─────────────────────────────────────

export interface TiktokCheckAccountHealthGetInput {
  /**
   * TikTok username (without @)
   */
  username: string;
  /**
   * Optional proxy URL
   */
  proxyUrl?: string | null;
}

export interface TiktokCheckAccountHealthGetOutput {
  success: boolean;
  username: string;
  accountActive: boolean;
  isSuspended: boolean;
  isPrivate: boolean;
  verified: boolean;
  followerCount: number;
  followingCount: number;
  videoCount: number;
  likeCount: number;
  message: string;
  fetchedAt: string;
  elapsedMs: number;
}

// ── tiktok-discover-users.post ──────────────────────────────────────────

export interface TiktokDiscoverUsersPostInput {
  /**
   * TikTok video ID to mine commenters from
   */
  videoId: string;
  /**
   * Maximum unique users to discover
   */
  maxUsers?: number;
  /**
   * Optional proxy URL
   */
  proxyUrl?: string | null;
}

export interface TiktokDiscoverUsersPostOutputDiscoveredUser {
  uniqueId: string;
  nickname: string;
  secUid: string;
  avatarUrl?: string | null;
}

export interface TiktokDiscoverUsersPostOutput {
  success: boolean;
  videoId: string;
  users: Array<TiktokDiscoverUsersPostOutputDiscoveredUser>;
  commentsScanned: number;
  fetchedAt: string;
  elapsedMs: number;
}

// ── tiktok-get-comments.post ────────────────────────────────────────────

export interface TiktokGetCommentsPostInput {
  /**
   * TikTok video ID (aweme_id)
   */
  videoId: string;
  /**
   * Comments per page (max 50)
   */
  count?: number;
  /**
   * Pagination cursor (0 for first page)
   */
  cursor?: number;
  /**
   * Optional proxy URL
   */
  proxyUrl?: string | null;
}

export interface TiktokGetCommentsPostOutputCommentItem {
  commentId: string;
  text: string;
  likes: number;
  replyCount: number;
  createTime: number;
  user: Record<string, unknown>;
}

export interface TiktokGetCommentsPostOutput {
  success: boolean;
  videoId: string;
  comments: Array<TiktokGetCommentsPostOutputCommentItem>;
  hasMore: boolean;
  cursor: number;
  total: number;
  fetchedAt: string;
  elapsedMs: number;
}

// ── tiktok-get-user-profile.post ────────────────────────────────────────

export interface TiktokGetUserProfilePostInput {
  /**
   * TikTok username (without @)
   */
  username: string;
  /**
   * Optional proxy URL
   */
  proxyUrl?: string | null;
}

export interface TiktokGetUserProfilePostOutput {
  success: boolean;
  username: string;
  nickname: string;
  bio: string;
  verified: boolean;
  privateAccount: boolean;
  followers: number;
  following: number;
  likes: number;
  videoCount: number;
  avatarUrl?: string | null;
  secUid: string;
  fetchedAt: string;
  elapsedMs: number;
}

// ── tiktok-get-video-detail.post ────────────────────────────────────────

export interface TiktokGetVideoDetailPostInput {
  /**
   * TikTok username (without @)
   */
  username: string;
  /**
   * TikTok video ID
   */
  videoId: string;
  /**
   * Optional proxy URL
   */
  proxyUrl?: string | null;
}

export interface TiktokGetVideoDetailPostOutput {
  success: boolean;
  videoId: string;
  description: string;
  createTime: number;
  author: Record<string, unknown>;
  stats: Record<string, unknown>;
  music?: Record<string, unknown> | null;
  duration?: number;
  fetchedAt: string;
  elapsedMs: number;
}

// ── timezone-lookup.get ─────────────────────────────────────────────────

export interface TimezoneLookupGetInput {
  /**
   * Decimal latitude
   */
  latitude: number;
  /**
   * Decimal longitude
   */
  longitude: number;
}

export interface TimezoneLookupGetOutput {
  timezone: string;
  countryCode: string | null;
  countryName: string | null;
  currentLocalTime: string;
  currentUtcOffsetSeconds: number;
  standardUtcOffsetSeconds: number;
  daylightSavingsUtcOffsetSeconds: number;
  isDaylightSavingTime: boolean;
  fetchedAt: string;
}

// ── translate-text.get ──────────────────────────────────────────────────

export interface TranslateTextGetInput {
  /**
   * Text to translate (<=500 chars)
   */
  text: string;
  /**
   * Source language code (or 'auto')
   */
  source?: string;
  /**
   * Target language code (e.g. en, fr, de, ja, es)
   */
  target: string;
}

export interface TranslateTextGetOutputMatch {
  translation: string;
  quality: number;
  source: string | null;
}

export interface TranslateTextGetOutput {
  text: string;
  sourceLang: string;
  targetLang: string;
  translation: string;
  quality: number;
  matches: Array<TranslateTextGetOutputMatch>;
  fetchedAt: string;
}

// ── weather-current.get ─────────────────────────────────────────────────

export interface WeatherCurrentGetInput {
  /**
   * Decimal latitude
   */
  latitude: number;
  /**
   * Decimal longitude
   */
  longitude: number;
  /**
   * metric: °C, km/h; imperial: °F, mph
   */
  units?: string;
}

export interface WeatherCurrentGetOutput {
  latitude: number;
  longitude: number;
  temperature: number;
  apparentTemperature: number;
  humidity: number;
  windSpeed: number;
  windDirection: number;
  weatherCode: number;
  weatherDescription: string;
  isDay: boolean;
  precipitation: number;
  cloudCover: number;
  units: string;
  observedAt: string;
  fetchedAt: string;
}

// ── web-search.post ─────────────────────────────────────────────────────

export interface WebSearchPostInput {
  /**
   * Search query
   */
  query: string;
  /**
   * Max results to return
   */
  maxResults?: number;
  /**
   * Region code (wt-wt=global, us-en, uk-en, etc)
   */
  region?: string;
}

export interface WebSearchPostOutputResultItem {
  position: number;
  title: string;
  url: string;
  snippet: string;
  domain: string;
}

export interface WebSearchPostOutput {
  success: boolean;
  query: string;
  results: Array<WebSearchPostOutputResultItem>;
  totalResults: number;
  message: string;
  fetchedAt: string;
  elapsedMs: number;
}

// ── wikipedia-article.get ───────────────────────────────────────────────

export interface WikipediaArticleGetInput {
  /**
   * Article title, URL-style slug, or free-form text (e.g. "Albert Einstein")
   */
  title: string;
  /**
   * Wikipedia language code
   */
  language?: string;
}

export interface WikipediaArticleGetOutput {
  title: string;
  displayTitle: string;
  description: string | null;
  extract: string;
  extractHtml: string;
  pageUrl: string;
  lang: string;
  revision: string | null;
  timestamp: string | null;
  thumbnail: string | null;
  originalImage: string | null;
  coordinates: Record<string, number> | null;
  fetchedAt: string;
}
