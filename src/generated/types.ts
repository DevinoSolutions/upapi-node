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

// ── chatous-check-session.get ───────────────────────────────────────────

export interface ChatousCheckSessionGetInput {
  /**
   * The account's `connect.sid` cookie value, as set on chatous.com when the account signed in.
   */
  connectSid: string;
  /**
   * Optional proxy URL to send this request through. Omit to call Chatous directly. Pass the exit the account normally uses if you keep one per account.
   */
  proxyUrl?: string | null;
}

export interface ChatousCheckSessionGetOutput {
  /**
   * True when Chatous still accepts this connectSid.
   */
  valid: boolean;
  /**
   * Chatous's own verdict: 0 = authenticated, 1111 = anonymous or expired. Returned so a caller can tell those two apart from any future third value.
   */
  returnCode: number;
  checkedAt: string;
  elapsedMs: number;
}

// ── chatous-get-account-state.get ───────────────────────────────────────

export interface ChatousGetAccountStateGetInput {
  /**
   * The account's `connect.sid` cookie value, as set on chatous.com when the account signed in.
   */
  connectSid: string;
  /**
   * How long to hold the socket open collecting the opening burst. Raise it for an account with many conversations; the call returns early once the server stops sending.
   */
  maxSeconds?: number;
  /**
   * Cap on collected socket frames, so a very busy account cannot stream on.
   */
  maxMessages?: number;
  /**
   * Optional proxy URL for the WebSocket. Omit to connect directly. Pass the exit the account normally uses if you keep one per account.
   */
  proxyUrl?: string | null;
}

export interface ChatousGetAccountStateGetOutputConversation {
  chat_id?: string | null;
  user_id?: string | null;
  screenname?: string | null;
  age?: number | string | null;
  about?: string | null;
  gender?: string | null;
  location?: string | null;
  profile_tags?: Array<string> | null;
  profile_photo_icon?: string | null;
}

export interface ChatousGetAccountStateGetOutputMessage {
  chatId: string;
  message: string;
  /**
   * True when this account sent it, from Chatous's own `is_me` flag.
   */
  fromMe: boolean;
}

export interface ChatousGetAccountStateGetOutput {
  /**
   * The account's own profile as Chatous pushed it, or null when the burst carried none. Null means 'not sent in this window', never 'no profile'.
   */
  profile: Record<string, unknown> | null;
  conversations: Array<ChatousGetAccountStateGetOutputConversation>;
  /**
   * Message history for the conversations above, oldest first as received.
   */
  messages: Array<ChatousGetAccountStateGetOutputMessage>;
  conversationCount: number;
  messageCount: number;
  socketOpened: boolean;
  /**
   * Raw socket frames collected, before classification.
   */
  frameCount: number;
  /**
   * Socket items this build could not read. Non-zero means the platform's frame shape has changed and this answer is INCOMPLETE - the account may hold conversations that are missing from the lists above.
   */
  undecodableItemCount: number;
  fetchedAt: string;
  elapsedMs: number;
}

// ── chatous-poll-events.get ─────────────────────────────────────────────

export interface ChatousPollEventsGetInput {
  /**
   * The account's `connect.sid` cookie value, as set on chatous.com when the account signed in.
   */
  connectSid: string;
  /**
   * How long to listen before returning whatever arrived.
   */
  maxSeconds?: number;
  /**
   * Return as soon as this many socket frames have arrived.
   */
  maxEvents?: number;
  /**
   * Optional proxy URL for the WebSocket. Omit to connect directly.
   */
  proxyUrl?: string | null;
}

export interface ChatousPollEventsGetOutputEvent {
  /**
   * chat = matched with a new person (carries their profile). message = a message in an existing chat. disconnect = a chat ended. queue = the server acknowledged a queue entry. unknown = a frame type this build does not recognise, with the raw payload.
   */
  type: string;
  chatId?: string | null;
  chat_id?: string | null;
  user_id?: string | null;
  screenname?: string | null;
  age?: number | string | null;
  about?: string | null;
  gender?: string | null;
  location?: string | null;
  profile_tags?: Array<string> | null;
  profile_photo_icon?: string | null;
  message?: string | null;
  fromMe?: boolean | null;
  endedByMe?: boolean | null;
  queueId?: string | null;
  /**
   * Present only on `unknown`: the frame exactly as Chatous sent it.
   */
  raw?: Record<string, unknown> | null;
}

export interface ChatousPollEventsGetOutput {
  events: Array<ChatousPollEventsGetOutputEvent>;
  eventCount: number;
  /**
   * Frames whose type this build does not recognise. A non-zero value is a shape change worth investigating, not an error.
   */
  unknownEventCount: number;
  socketOpened: boolean;
  /**
   * Socket items this build could not read at all - distinct from `unknown` events, which ARE returned with their payload. Non-zero means frames were lost to a shape change, so a zero-event answer here is not evidence the account was quiet.
   */
  undecodableItemCount: number;
  closedByServer: boolean;
  fetchedAt: string;
  elapsedMs: number;
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

// ── contra-company-profile.get ──────────────────────────────────────────

export interface ContraCompanyProfileGetInput {
  /**
   * Company slug from a contra.com/company/<slug> URL, e.g. "ajproductions_llc_c7a4d0"
   */
  slug: string;
  /**
   * User-provided proxy URL. Omit to use the operation's own datacenter pool.
   */
  proxyUrl?: string | null;
}

export interface ContraCompanyProfileGetOutputMoney {
  currency: string;
  amount: number;
}

export interface ContraCompanyProfileGetOutputStatistics {
  averageReviewRating: number | null;
  projectCount: number | null;
  totalSpend: ContraCompanyProfileGetOutputMoney | null;
  visibility: string | null;
}

export interface ContraCompanyProfileGetOutput {
  slug: string | null;
  url: string;
  id: string | null;
  name: string | null;
  headline: string | null;
  description: string | null;
  website: string | null;
  location: string | null;
  yearFounded: number | null;
  numberOfEmployees: number | null;
  isVerified: boolean | null;
  profileRoute: string | null;
  logoUrl: string | null;
  reviewCount: number | null;
  statistics: ContraCompanyProfileGetOutputStatistics | null;
  fetchedAt: string;
  elapsedMs: number;
}

// ── contra-discover-people.get ──────────────────────────────────────────

export interface ContraDiscoverPeopleGetInput {
  /**
   * Contra role names to filter on, e.g. ["Web Developer", "Brand Designer"]. Omit for the unfiltered directory.
   */
  roles?: Array<string>;
  /**
   * Free-text search over profiles. Omit to browse by role only.
   */
  query?: string | null;
  /**
   * User-provided proxy URL. Omit to use the operation's own datacenter pool.
   */
  proxyUrl?: string | null;
}

export interface ContraDiscoverPeopleGetOutputPerson {
  id: string | null;
  username: string | null;
  name: string | null;
  title: string | null;
  professionalTitle: string | null;
  location: string | null;
  profileUrl: string | null;
  avatarUrl: string | null;
  roles: Array<string>;
  followerCount: number | null;
  hiredCount: number | null;
  isQuickResponder: boolean | null;
  isNewToContra: boolean | null;
  canReceiveInquiries: boolean | null;
  visitorIsFollowing: boolean | null;
  platformEarningsBadge: string | null;
  reviewSummary: ContraDiscoverPeopleGetOutputReviewSummary | null;
  workPreferences: ContraDiscoverPeopleGetOutputWorkPreferences | null;
}

export interface ContraDiscoverPeopleGetOutputReviewSummary {
  averageScore: string | null;
  count: number | null;
}

export interface ContraDiscoverPeopleGetOutputWorkPreferences {
  isCurrentlyAvailable: boolean | null;
  minimumHourlyRate: number | null;
}

export interface ContraDiscoverPeopleGetOutput {
  url: string;
  roles: Array<string>;
  query: string | null;
  resultCount: number;
  people: Array<ContraDiscoverPeopleGetOutputPerson>;
  fetchedAt: string;
  elapsedMs: number;
}

// ── contra-job-detail.get ───────────────────────────────────────────────

export interface ContraJobDetailGetInput {
  /**
   * Opportunity slug from a contra.com/opportunity/<slug> URL, e.g. "vWsXX3YM-paid-ads-graphic-designer-for-meta-and-linked-in"
   */
  slug: string;
  /**
   * User-provided proxy URL. Omit to use the operation's own datacenter pool.
   */
  proxyUrl?: string | null;
}

export interface ContraJobDetailGetOutputBudget {
  type: string | null;
  min: ContraJobDetailGetOutputMoney | null;
  max: ContraJobDetailGetOutputMoney | null;
  estimatedHours: number | null;
}

export interface ContraJobDetailGetOutputMoney {
  currency: string;
  amount: number;
}

export interface ContraJobDetailGetOutputOrganization {
  id: string | null;
  slug: string | null;
  name: string | null;
  headline: string | null;
  description: string | null;
  website: string | null;
  location: string | null;
  yearFounded: number | null;
  numberOfEmployees: number | null;
  isVerified: boolean | null;
  profileRoute: string | null;
  logoUrl: string | null;
  reviewCount: number | null;
  statistics: Record<string, unknown> | null;
}

export interface ContraJobDetailGetOutput {
  slug: string | null;
  url: string;
  id: string | null;
  title: string | null;
  status: string | null;
  description: string;
  createdAt: string | null;
  expiresAt: string | null;
  applicationsClosedAt: string | null;
  allowGuestApplications: boolean | null;
  externalUrl: string | null;
  numberOfOpenPositions: number | null;
  numberOfFilledPositions: number | null;
  hiringAsIndividual: boolean | null;
  visitorCanApply: boolean;
  budget: ContraJobDetailGetOutputBudget;
  roles: Array<string>;
  tools: Array<string>;
  organization: ContraJobDetailGetOutputOrganization | null;
  fetchedAt: string;
  elapsedMs: number;
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

// ── github-issue-comments.get ───────────────────────────────────────────

export interface GithubIssueCommentsGetInput {
  /**
   * Repo owner (user or org)
   */
  owner: string;
  /**
   * Repo name
   */
  repo: string;
  /**
   * Issue or pull request number
   */
  issueNumber: number;
  /**
   * ISO-8601 timestamp: only comments updated at or after this
   */
  since?: string | null;
  perPage?: number;
  page?: number;
  /**
   * Optional GitHub token (5,000 req/h)
   */
  token?: string | null;
  /**
   * Optional exit to send from (direct otherwise)
   */
  proxyUrl?: string | null;
}

export interface GithubIssueCommentsGetOutputCommentSummary {
  id: number;
  body: string;
  author: string | null;
  authorType: string | null;
  authorAssociation: string | null;
  htmlUrl: string;
  reactions: number;
  createdAt: string | null;
  updatedAt: string | null;
}

/**
 * The rate-limit headers GitHub returned on THIS response, surfaced so the caller
 * can pace itself instead of the operation sleeping on its behalf.
 */
export interface GithubIssueCommentsGetOutputRateLimitInfo {
  /**
   * X-RateLimit-Limit: requests allowed per window
   */
  limit: number | null;
  /**
   * X-RateLimit-Remaining: requests left
   */
  remaining: number | null;
  /**
   * X-RateLimit-Reset as an ISO-8601 UTC timestamp
   */
  resetAt: string | null;
  /**
   * X-RateLimit-Reset as unix seconds
   */
  resetEpoch: number | null;
  /**
   * X-RateLimit-Resource: which bucket (core, search, graphql, ...)
   */
  resource: string | null;
}

export interface GithubIssueCommentsGetOutput {
  items: Array<GithubIssueCommentsGetOutputCommentSummary>;
  rateLimit: GithubIssueCommentsGetOutputRateLimitInfo;
  fetchedAt: string;
}

// ── github-repo-contributors.get ────────────────────────────────────────

export interface GithubRepoContributorsGetInput {
  /**
   * Repo owner (user or org)
   */
  owner: string;
  /**
   * Repo name
   */
  repo: string;
  /**
   * Also return email-only contributors with no GitHub account
   */
  includeAnonymous?: boolean;
  perPage?: number;
  page?: number;
  /**
   * Optional GitHub token (5,000 req/h)
   */
  token?: string | null;
  /**
   * Optional exit to send from (direct otherwise)
   */
  proxyUrl?: string | null;
}

export interface GithubRepoContributorsGetOutputContributorSummary {
  id: number;
  /**
   * None for anonymous (email-only) contributors
   */
  login: string | null;
  type: string;
  contributions: number;
  htmlUrl: string | null;
  avatarUrl: string | null;
}

/**
 * The rate-limit headers GitHub returned on THIS response, surfaced so the caller
 * can pace itself instead of the operation sleeping on its behalf.
 */
export interface GithubRepoContributorsGetOutputRateLimitInfo {
  /**
   * X-RateLimit-Limit: requests allowed per window
   */
  limit: number | null;
  /**
   * X-RateLimit-Remaining: requests left
   */
  remaining: number | null;
  /**
   * X-RateLimit-Reset as an ISO-8601 UTC timestamp
   */
  resetAt: string | null;
  /**
   * X-RateLimit-Reset as unix seconds
   */
  resetEpoch: number | null;
  /**
   * X-RateLimit-Resource: which bucket (core, search, graphql, ...)
   */
  resource: string | null;
}

export interface GithubRepoContributorsGetOutput {
  items: Array<GithubRepoContributorsGetOutputContributorSummary>;
  rateLimit: GithubRepoContributorsGetOutputRateLimitInfo;
  fetchedAt: string;
}

// ── github-repo-issues.get ──────────────────────────────────────────────

export interface GithubRepoIssuesGetInput {
  /**
   * Repo owner (user or org)
   */
  owner: string;
  /**
   * Repo name
   */
  repo: string;
  /**
   * open | closed | all
   */
  state?: string;
  /**
   * Comma-separated label names to require
   */
  labels?: string | null;
  /**
   * created | updated | comments
   */
  sort?: string;
  /**
   * asc | desc
   */
  direction?: string;
  /**
   * ISO-8601 timestamp: only issues updated at or after this
   */
  since?: string | null;
  perPage?: number;
  page?: number;
  /**
   * GitHub lists pull requests on this endpoint too; the default drops them so a lead hunt sees only issues
   */
  includePullRequests?: boolean;
  /**
   * Optional GitHub token (5,000 req/h)
   */
  token?: string | null;
  /**
   * Optional exit to send from (direct otherwise)
   */
  proxyUrl?: string | null;
}

export interface GithubRepoIssuesGetOutputIssueSummary {
  id: number;
  number: number;
  title: string;
  body: string | null;
  state: string;
  htmlUrl: string;
  /**
   * owner/repo the issue belongs to
   */
  repository: string | null;
  author: string | null;
  authorType: string | null;
  authorAssociation: string | null;
  /**
   * GitHub lists pull requests on the issues endpoints; this tells them apart
   */
  isPullRequest: boolean;
  comments: number;
  labels: Array<string>;
  reactions: number;
  createdAt: string | null;
  updatedAt: string | null;
  closedAt: string | null;
}

/**
 * The rate-limit headers GitHub returned on THIS response, surfaced so the caller
 * can pace itself instead of the operation sleeping on its behalf.
 */
export interface GithubRepoIssuesGetOutputRateLimitInfo {
  /**
   * X-RateLimit-Limit: requests allowed per window
   */
  limit: number | null;
  /**
   * X-RateLimit-Remaining: requests left
   */
  remaining: number | null;
  /**
   * X-RateLimit-Reset as an ISO-8601 UTC timestamp
   */
  resetAt: string | null;
  /**
   * X-RateLimit-Reset as unix seconds
   */
  resetEpoch: number | null;
  /**
   * X-RateLimit-Resource: which bucket (core, search, graphql, ...)
   */
  resource: string | null;
}

export interface GithubRepoIssuesGetOutput {
  items: Array<GithubRepoIssuesGetOutputIssueSummary>;
  rateLimit: GithubRepoIssuesGetOutputRateLimitInfo;
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

// ── github-search-discussions.get ───────────────────────────────────────

export interface GithubSearchDiscussionsGetInput {
  /**
   * GitHub search syntax for discussions, e.g. '"note taking" is:open'
   */
  q: string;
  /**
   * Rows to return (max 100)
   */
  first?: number;
  /**
   * pageInfo.endCursor from the previous page
   */
  after?: string | null;
  /**
   * GitHub token - GraphQL does not accept anonymous calls
   */
  token: string;
  /**
   * Optional exit to send from (direct otherwise)
   */
  proxyUrl?: string | null;
}

export interface GithubSearchDiscussionsGetOutputDiscussionSummary {
  /**
   * GraphQL node id (the value addDiscussionComment takes)
   */
  id: string;
  number: number;
  title: string;
  body: string | null;
  url: string;
  author: string | null;
  repository: string | null;
  createdAt: string | null;
  comments: number | null;
  category: string | null;
}

/**
 * The rate-limit headers GitHub returned on THIS response, surfaced so the caller
 * can pace itself instead of the operation sleeping on its behalf.
 */
export interface GithubSearchDiscussionsGetOutputRateLimitInfo {
  /**
   * X-RateLimit-Limit: requests allowed per window
   */
  limit: number | null;
  /**
   * X-RateLimit-Remaining: requests left
   */
  remaining: number | null;
  /**
   * X-RateLimit-Reset as an ISO-8601 UTC timestamp
   */
  resetAt: string | null;
  /**
   * X-RateLimit-Reset as unix seconds
   */
  resetEpoch: number | null;
  /**
   * X-RateLimit-Resource: which bucket (core, search, graphql, ...)
   */
  resource: string | null;
}

export interface GithubSearchDiscussionsGetOutput {
  totalCount: number;
  items: Array<GithubSearchDiscussionsGetOutputDiscussionSummary>;
  endCursor: string | null;
  hasNextPage: boolean;
  rateLimit: GithubSearchDiscussionsGetOutputRateLimitInfo;
  fetchedAt: string;
}

// ── github-search-issues.get ────────────────────────────────────────────

export interface GithubSearchIssuesGetInput {
  /**
   * GitHub search syntax, e.g. 'is:issue is:open "note taking app" language:python'
   */
  q: string;
  /**
   * Rows per page (max 100)
   */
  perPage?: number;
  /**
   * Page number (search caps at 1000 rows)
   */
  page?: number;
  /**
   * comments | reactions | created | updated | interactions (default: best match)
   */
  sort?: string | null;
  /**
   * asc | desc
   */
  order?: string | null;
  /**
   * GitHub returns PRs on this endpoint too; false filters them out client-side
   */
  includePullRequests?: boolean;
  /**
   * Optional GitHub token: raises the limit from 10 to 30 searches/min and lets the search see private repos the token can read
   */
  token?: string | null;
  /**
   * Optional exit to send from; a datacenter exit is leased when omitted
   */
  proxyUrl?: string | null;
}

export interface GithubSearchIssuesGetOutputIssueSummary {
  id: number;
  number: number;
  title: string;
  body: string | null;
  state: string;
  htmlUrl: string;
  /**
   * owner/repo the issue belongs to
   */
  repository: string | null;
  author: string | null;
  authorType: string | null;
  authorAssociation: string | null;
  /**
   * GitHub lists pull requests on the issues endpoints; this tells them apart
   */
  isPullRequest: boolean;
  comments: number;
  labels: Array<string>;
  reactions: number;
  createdAt: string | null;
  updatedAt: string | null;
  closedAt: string | null;
}

/**
 * The rate-limit headers GitHub returned on THIS response, surfaced so the caller
 * can pace itself instead of the operation sleeping on its behalf.
 */
export interface GithubSearchIssuesGetOutputRateLimitInfo {
  /**
   * X-RateLimit-Limit: requests allowed per window
   */
  limit: number | null;
  /**
   * X-RateLimit-Remaining: requests left
   */
  remaining: number | null;
  /**
   * X-RateLimit-Reset as an ISO-8601 UTC timestamp
   */
  resetAt: string | null;
  /**
   * X-RateLimit-Reset as unix seconds
   */
  resetEpoch: number | null;
  /**
   * X-RateLimit-Resource: which bucket (core, search, graphql, ...)
   */
  resource: string | null;
}

export interface GithubSearchIssuesGetOutput {
  totalCount: number;
  incompleteResults: boolean;
  items: Array<GithubSearchIssuesGetOutputIssueSummary>;
  rateLimit: GithubSearchIssuesGetOutputRateLimitInfo;
  fetchedAt: string;
}

// ── github-search-repos.get ─────────────────────────────────────────────

export interface GithubSearchReposGetInput {
  /**
   * GitHub search syntax, e.g. 'note taking language:typescript stars:>100'
   */
  q: string;
  perPage?: number;
  page?: number;
  /**
   * stars | forks | help-wanted-issues | updated
   */
  sort?: string | null;
  /**
   * asc | desc
   */
  order?: string | null;
  /**
   * Optional GitHub token (30 searches/min)
   */
  token?: string | null;
  /**
   * Optional exit to send from; a datacenter exit is leased when omitted
   */
  proxyUrl?: string | null;
}

/**
 * The rate-limit headers GitHub returned on THIS response, surfaced so the caller
 * can pace itself instead of the operation sleeping on its behalf.
 */
export interface GithubSearchReposGetOutputRateLimitInfo {
  /**
   * X-RateLimit-Limit: requests allowed per window
   */
  limit: number | null;
  /**
   * X-RateLimit-Remaining: requests left
   */
  remaining: number | null;
  /**
   * X-RateLimit-Reset as an ISO-8601 UTC timestamp
   */
  resetAt: string | null;
  /**
   * X-RateLimit-Reset as unix seconds
   */
  resetEpoch: number | null;
  /**
   * X-RateLimit-Resource: which bucket (core, search, graphql, ...)
   */
  resource: string | null;
}

export interface GithubSearchReposGetOutputRepoSummary {
  id: number;
  fullName: string;
  owner: string | null;
  description: string | null;
  htmlUrl: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  forks: number;
  openIssues: number;
  topics: Array<string>;
  license: string | null;
  isArchived: boolean;
  isFork: boolean;
  createdAt: string | null;
  updatedAt: string | null;
  pushedAt: string | null;
}

export interface GithubSearchReposGetOutput {
  totalCount: number;
  incompleteResults: boolean;
  items: Array<GithubSearchReposGetOutputRepoSummary>;
  rateLimit: GithubSearchReposGetOutputRateLimitInfo;
  fetchedAt: string;
}

// ── github-search-users.get ─────────────────────────────────────────────

export interface GithubSearchUsersGetInput {
  /**
   * GitHub search syntax, e.g. 'location:berlin language:python followers:>50'
   */
  q: string;
  perPage?: number;
  page?: number;
  /**
   * followers | repositories | joined
   */
  sort?: string | null;
  /**
   * asc | desc
   */
  order?: string | null;
  /**
   * Optional GitHub token (30 searches/min)
   */
  token?: string | null;
  /**
   * Optional exit to send from; a datacenter exit is leased when omitted
   */
  proxyUrl?: string | null;
}

/**
 * The rate-limit headers GitHub returned on THIS response, surfaced so the caller
 * can pace itself instead of the operation sleeping on its behalf.
 */
export interface GithubSearchUsersGetOutputRateLimitInfo {
  /**
   * X-RateLimit-Limit: requests allowed per window
   */
  limit: number | null;
  /**
   * X-RateLimit-Remaining: requests left
   */
  remaining: number | null;
  /**
   * X-RateLimit-Reset as an ISO-8601 UTC timestamp
   */
  resetAt: string | null;
  /**
   * X-RateLimit-Reset as unix seconds
   */
  resetEpoch: number | null;
  /**
   * X-RateLimit-Resource: which bucket (core, search, graphql, ...)
   */
  resource: string | null;
}

export interface GithubSearchUsersGetOutputUserSummary {
  id: number;
  login: string;
  type: string;
  htmlUrl: string;
  avatarUrl: string;
  /**
   * Search relevance score, when the row came from search
   */
  score: number | null;
}

export interface GithubSearchUsersGetOutput {
  totalCount: number;
  incompleteResults: boolean;
  items: Array<GithubSearchUsersGetOutputUserSummary>;
  rateLimit: GithubSearchUsersGetOutputRateLimitInfo;
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

// ── github-user-emails.get ──────────────────────────────────────────────

export interface GithubUserEmailsGetInput {
  /**
   * GitHub login
   */
  username: string;
  /**
   * How many of the user's most recently pushed repositories to scan
   */
  maxRepos?: number;
  /**
   * GitHub token. REQUIRED here, unlike the single-call reads: this operation fans out to 1 + maxRepos requests, so an anonymous call spends up to 11 of the 60 requests an hour that every keyless caller through this worker shares. With a token the budget is the caller's own 5,000/h.
   */
  token: string;
  /**
   * Optional exit to send from (direct otherwise)
   */
  proxyUrl?: string | null;
}

export interface GithubUserEmailsGetOutputCommitEmail {
  email: string;
  name: string | null;
  /**
   * owner/repo the commit was read from
   */
  repository: string;
  sha: string;
  committedAt: string | null;
}

/**
 * The rate-limit headers GitHub returned on THIS response, surfaced so the caller
 * can pace itself instead of the operation sleeping on its behalf.
 */
export interface GithubUserEmailsGetOutputRateLimitInfo {
  /**
   * X-RateLimit-Limit: requests allowed per window
   */
  limit: number | null;
  /**
   * X-RateLimit-Remaining: requests left
   */
  remaining: number | null;
  /**
   * X-RateLimit-Reset as an ISO-8601 UTC timestamp
   */
  resetAt: string | null;
  /**
   * X-RateLimit-Reset as unix seconds
   */
  resetEpoch: number | null;
  /**
   * X-RateLimit-Resource: which bucket (core, search, graphql, ...)
   */
  resource: string | null;
}

export interface GithubUserEmailsGetOutput {
  username: string;
  emails: Array<GithubUserEmailsGetOutputCommitEmail>;
  reposScanned: Array<string>;
  /**
   * Rate-limit headers from the LAST call made
   */
  rateLimit: GithubUserEmailsGetOutputRateLimitInfo;
  fetchedAt: string;
}

// ── github-user.get ─────────────────────────────────────────────────────

export interface GithubUserGetInput {
  /**
   * GitHub login (user or org)
   */
  username: string;
  /**
   * Optional GitHub token: 5,000 req/h instead of 60, and sees the email field when the profile allows it
   */
  token?: string | null;
  /**
   * Optional exit to send from (direct otherwise)
   */
  proxyUrl?: string | null;
}

/**
 * The rate-limit headers GitHub returned on THIS response, surfaced so the caller
 * can pace itself instead of the operation sleeping on its behalf.
 */
export interface GithubUserGetOutputRateLimitInfo {
  /**
   * X-RateLimit-Limit: requests allowed per window
   */
  limit: number | null;
  /**
   * X-RateLimit-Remaining: requests left
   */
  remaining: number | null;
  /**
   * X-RateLimit-Reset as an ISO-8601 UTC timestamp
   */
  resetAt: string | null;
  /**
   * X-RateLimit-Reset as unix seconds
   */
  resetEpoch: number | null;
  /**
   * X-RateLimit-Resource: which bucket (core, search, graphql, ...)
   */
  resource: string | null;
}

export interface GithubUserGetOutput {
  login: string;
  id: number;
  name: string | null;
  type: string;
  bio: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  twitterHandle: string | null;
  hireable: boolean | null;
  publicRepos: number;
  publicGists: number;
  followers: number;
  following: number;
  avatarUrl: string;
  htmlUrl: string;
  createdAt: string;
  updatedAt: string | null;
  rateLimit: GithubUserGetOutputRateLimitInfo;
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

// ── instagram-get-user-by-id.post ───────────────────────────────────────

export interface InstagramGetUserByIdPostInput {
  /**
   * Numeric Instagram user id (pk)
   */
  userId: string;
  /**
   * Optional proxy URL. Instagram 401-gates anonymous reads per egress IP.
   */
  proxyUrl?: string | null;
}

export interface InstagramGetUserByIdPostOutput {
  success: boolean;
  pk: string;
  username: string;
  /**
   * 'stub' = identity only (what anonymous returns today); 'full' = counts and profile detail were disclosed
   */
  detailLevel: string;
  fullName?: string | null;
  biography?: string | null;
  isPrivate?: boolean | null;
  isVerified?: boolean | null;
  isBusiness?: boolean | null;
  isProfessional?: boolean | null;
  category?: string | null;
  businessEmail?: string | null;
  publicEmail?: string | null;
  businessPhone?: string | null;
  externalUrl?: string | null;
  bioLinks: Array<string>;
  /**
   * null = not disclosed by this surface, never 'zero followers'
   */
  followerCount?: number | null;
  followingCount?: number | null;
  mediaCount?: number | null;
  profilePicUrl?: string | null;
  fbid?: string | null;
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

// ── reddit-oauth-me.get ─────────────────────────────────────────────────

export interface RedditOauthMeGetInput {
  /**
   * Reddit app client id
   */
  clientId: string;
  /**
   * Reddit app client secret. Never logged.
   */
  clientSecret: string;
  /**
   * OAuth2 refresh token for the account. Never logged, never returned.
   */
  refreshToken: string;
  /**
   * The User-Agent this request is made with, sent verbatim. REQUIRED and never defaulted: Reddit's API rules ask for a descriptive UA that names the app and its contact, and a shared default would put every caller of this worker behind one identity.
   */
  userAgent: string;
  /**
   * Optional exit IP. Omit for the worker's default egress -- the OAuth lane has no per-account IP requirement of its own.
   */
  proxyUrl?: string | null;
  /**
   * When given, the call FAILS unless Reddit reports this exact username. Use it whenever the credentials were looked up by account, so a mis-filed token is a loud refusal rather than a silent identity swap.
   */
  expectedUsername?: string | null;
}

export interface RedditOauthMeGetOutput {
  /**
   * The Reddit username these credentials speak as
   */
  name: string;
  /**
   * Reddit's own account id (the t2 id, without the prefix)
   */
  id: string;
  isSuspended: boolean;
  hasVerifiedEmail: boolean;
  linkKarma: number;
  commentKarma: number;
  /**
   * Account creation time, epoch seconds UTC
   */
  created: number;
  /**
   * The OAuth scopes this token carries, sorted. A caller planning to comment should see 'submit' here; its absence is why an otherwise-valid token will be refused at the write.
   */
  scopes: Array<string>;
  /**
   * Lifetime Reddit gave the access token that was minted for this call. Reported so a caller can reason about how long a token is good for; the token itself is never returned.
   */
  tokenExpiresInSec: number;
  fetchedAt: string;
  elapsedMs: number;
}

// ── reddit-oauth-post-comment.post ──────────────────────────────────────

export interface RedditOauthPostCommentPostInput {
  /**
   * Reddit app client id
   */
  clientId: string;
  /**
   * Reddit app client secret. Never logged.
   */
  clientSecret: string;
  /**
   * OAuth2 refresh token for the posting account. Never logged, never returned.
   */
  refreshToken: string;
  /**
   * The User-Agent this request is made with, sent verbatim. REQUIRED and never defaulted -- Reddit's API rules ask for a descriptive UA naming the app.
   */
  userAgent: string;
  /**
   * Fullname of what is being replied to: `t3_<id>` for a post, `t1_<id>` for another comment. This is the complete address of the parent -- unlike the cookie path, no page URL is needed or accepted.
   */
  thingId: string;
  /**
   * The comment body, markdown, exactly as it will appear.
   */
  text: string;
  /**
   * The account this comment must be attributed to. REQUIRED, unlike on the read operation: a refresh token is opaque, so without this a mis-filed credential posts under an identity nobody chose -- and every gate upstream reasoned about a different account. Compared against the name Reddit itself reports, before anything is created.
   */
  expectedUsername: string;
  /**
   * Optional exit IP. Omit for the worker's default egress -- the OAuth lane has no per-account IP requirement of its own.
   */
  proxyUrl?: string | null;
}

export interface RedditOauthPostCommentPostOutput {
  /**
   * The new comment's id, without the `t1_` prefix
   */
  commentId: string;
  /**
   * The new comment's fullname, e.g. `t1_abc123`
   */
  commentFullname: string;
  /**
   * Absolute permalink to the comment. Reddit returns a site-relative path; it is made absolute here so no caller has to know which host to prepend.
   */
  permalink: string;
  /**
   * Creation time Reddit recorded, epoch seconds UTC
   */
  createdUtc: number;
  /**
   * The username Reddit reported for the token, echoed so a caller records who actually spoke rather than who it believed it had asked for.
   */
  postedAs: string;
  /**
   * The fullname this comment replies to
   */
  parentThingId: string;
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
  /**
   * False when a block or upstream failure cut the scan short — the users listed are real but the list is partial.
   */
  complete: boolean;
  /**
   * "limit-reached", "exhausted", or "blocked-mid-scan"
   */
  stopReason: string;
  fetchedAt: string;
  elapsedMs: number;
}

// ── tiktok-get-comment-replies.get ──────────────────────────────────────

export interface TiktokGetCommentRepliesGetInput {
  /**
   * Parent video id (aweme_id / item_id)
   */
  videoId: string;
  /**
   * Comment id whose replies to fetch
   */
  commentId: string;
  /**
   * Replies per page (max 50)
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

export interface TiktokGetCommentRepliesGetOutputCommentUser {
  uniqueId: string;
  nickname: string;
  secUid: string;
  verified: boolean;
}

export interface TiktokGetCommentRepliesGetOutputReplyItem {
  commentId: string;
  text: string;
  likes: number;
  replyCount: number;
  createTime: number;
  user: TiktokGetCommentRepliesGetOutputCommentUser;
}

export interface TiktokGetCommentRepliesGetOutput {
  success: boolean;
  videoId: string;
  commentId: string;
  replies: Array<TiktokGetCommentRepliesGetOutputReplyItem>;
  hasMore: boolean;
  cursor: number;
  total: number;
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

// ── tiktok-get-video-embed.get ──────────────────────────────────────────

export interface TiktokGetVideoEmbedGetInput {
  /**
   * TikTok video id (the numeric aweme id)
   */
  videoId: string;
  /**
   * Optional proxy URL
   */
  proxyUrl?: string | null;
}

export interface TiktokGetVideoEmbedGetOutputAuthor {
  uniqueId: string;
  nickname: string;
  signature: string;
  verified: boolean;
  secUid: string;
  followers: number;
  following: number;
  likes: number;
  videos: number;
}

export interface TiktokGetVideoEmbedGetOutputStats {
  plays: number;
  likes: number;
  comments: number;
  shares: number;
}

export interface TiktokGetVideoEmbedGetOutput {
  success: boolean;
  videoId: string;
  description: string;
  createTime: string;
  author: TiktokGetVideoEmbedGetOutputAuthor;
  stats: TiktokGetVideoEmbedGetOutputStats;
  hashtags: Array<string>;
  musicTitle?: string | null;
  musicAuthor?: string | null;
  durationSeconds: number;
  thumbnailUrl?: string | null;
  locationCreated: string;
  fetchedAt: string;
  elapsedMs: number;
}

// ── tiktok-oembed.get ───────────────────────────────────────────────────

export interface TiktokOembedGetInput {
  /**
   * Any TikTok profile or video URL, e.g. https://www.tiktok.com/@tiktok
   */
  url: string;
  /**
   * Optional proxy URL. "none" forces a direct request; omit to auto-pick.
   */
  proxyUrl?: string | null;
}

export interface TiktokOembedGetOutput {
  success: boolean;
  /**
   * "video" for a video URL, otherwise "profile"
   */
  urlType: string;
  title: string;
  authorName: string;
  authorUrl: string;
  thumbnailUrl?: string | null;
  thumbnailWidth?: number | null;
  thumbnailHeight?: number | null;
  embedProductId: string;
  providerName: string;
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

// ── upwork-jobs-detail.get ──────────────────────────────────────────────

export interface UpworkJobsDetailGetInput {
  /**
   * An Upwork job: its ciphertext ("~021234…"), or the job URL that upwork-jobs-search returns.
   */
  job: string;
  /**
   * User-provided proxy URL. Omit to use the operation's own pool.
   */
  proxyUrl?: string | null;
}

export interface UpworkJobsDetailGetOutput {
  ciphertext: string;
  title: string | null;
  description: string | null;
  status: string | null;
  jobType: string | null;
  contractorTier: string | null;
  postedOn: string | null;
  publishTime: string | null;
  skills: Array<string>;
  hourlyBudgetMin: number | null;
  hourlyBudgetMax: number | null;
  totalApplicants: number | null;
  totalHired: number | null;
  totalInvitedToInterview: number | null;
  lastBuyerActivity: string | null;
  buyerCountry: string | null;
  buyerScore: number | null;
  buyerTotalJobsWithHires: number | null;
  buyerTotalSpent: number | null;
  jobUrl: string | null;
  fetchedAt: string;
  elapsedMs: number;
}

// ── upwork-jobs-search.get ──────────────────────────────────────────────

export interface UpworkJobsSearchGetInput {
  /**
   * What to search for (e.g. "python developer", "react native app")
   */
  query: string;
  /**
   * 1-based results page.
   */
  page?: number;
  /**
   * Postings per page, 1-50.
   */
  pageSize?: number;
  /**
   * Result order: recency (newest first) or relevance.
   */
  sort?: string;
  /**
   * Contract type filter: any, hourly or fixed.
   */
  jobType?: string;
  /**
   * Required experience: any, entry, intermediate or expert.
   */
  experienceLevel?: string;
  /**
   * User-provided proxy URL. Omit to use the operation's own pool.
   */
  proxyUrl?: string | null;
}

export interface UpworkJobsSearchGetOutputJobResult {
  jobId: string;
  ciphertext: string | null;
  title: string;
  description: string | null;
  jobType: string | null;
  publishTime: string | null;
  hourlyBudgetMin: number | null;
  hourlyBudgetMax: number | null;
  fixedPriceAmount: number | null;
  jobUrl: string | null;
}

export interface UpworkJobsSearchGetOutput {
  query: string;
  page: number;
  pageSize: number;
  resultCount: number;
  totalFound: number | null;
  hasMore: boolean | null;
  jobs: Array<UpworkJobsSearchGetOutputJobResult>;
  fetchedAt: string;
  elapsedMs: number;
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

// ── wellfound-application-modal.post ────────────────────────────────────

export interface WellfoundApplicationModalPostInput {
  /**
   * Authenticated blob from wellfound-login.
   */
  session: string;
  /**
   * Wellfound job listing id.
   */
  jobId: string;
  /**
   * Same exit the session was minted on. Omit to send directly.
   */
  proxyUrl?: string | null;
}

export interface WellfoundApplicationModalPostOutputQuestion {
  id: string;
  question?: string;
  /**
   * Answer kind, for example freeform.
   */
  kind?: string;
  required?: boolean;
  options?: Array<WellfoundApplicationModalPostOutputQuestionOption>;
}

export interface WellfoundApplicationModalPostOutputQuestionOption {
  id?: string;
  text?: string;
}

export interface WellfoundApplicationModalPostOutput {
  questions?: Array<WellfoundApplicationModalPostOutputQuestion>;
  currentUserApplied?: boolean;
  /**
   * Reasons Wellfound would refuse this application, empty when qualified.
   */
  qualificationErrors?: Array<string>;
  /**
   * Refreshed blob carrying rotated cookies. Persist THIS one, not the input.
   */
  session?: string;
}

// ── wellfound-browse-jobs.post ──────────────────────────────────────────

export interface WellfoundBrowseJobsPostInput {
  /**
   * Blob from wellfound-public-session.
   */
  session: string;
  /**
   * Role slug to search, for example software-engineer.
   */
  roleSlug: string;
  /**
   * Use remote for the remote search, otherwise a Wellfound location slug.
   */
  scope?: string;
  /**
   * 1-based page number.
   */
  page?: number;
  /**
   * Same exit the session was minted on. Omit to send directly.
   */
  proxyUrl?: string | null;
}

export interface WellfoundBrowseJobsPostOutputJobSummary {
  id: string;
  title?: string;
  slug?: string;
  startupId?: string;
  /**
   * Canonical listing page, https://wellfound.com/jobs/<id>-<slug>. Empty when Wellfound disclosed no slug, because both halves are required: the id alone 404s.
   */
  jobUrl?: string;
  compensation?: string;
  equity?: string;
  jobType?: string;
  /**
   * True or False as Wellfound disclosed it. Null means Wellfound did not say -- it is NOT inferred from the scope you searched.
   */
  remote?: boolean | null;
  /**
   * REMOTE, ONSITE or ONSITE_OR_REMOTE. Empty when undisclosed.
   */
  remoteConfigKind?: string;
  locationNames?: Array<string>;
  liveStartAt?: number | null;
  /**
   * Full listing description; the SEO search returns it inline.
   */
  description?: string;
  startupName?: string;
  startupSlug?: string;
  startupLogoUrl?: string;
  startupCompanySize?: string;
  startupHighConcept?: string;
  /**
   * Empty on anonymous results; use wellfound-company-overview.
   */
  startupFundingStage?: string;
  /**
   * Empty on anonymous results; use wellfound-company-overview.
   */
  startupTotalRaised?: string;
}

export interface WellfoundBrowseJobsPostOutput {
  jobs?: Array<WellfoundBrowseJobsPostOutputJobSummary>;
  /**
   * False when Wellfound sent no page count, so a paginating caller stops.
   */
  hasNextPage?: boolean;
  totalJobCount?: number;
  /**
   * Refreshed blob carrying rotated cookies. Persist THIS one, not the input.
   */
  session?: string;
  elapsedMs?: number;
}

// ── wellfound-company-overview.post ─────────────────────────────────────

export interface WellfoundCompanyOverviewPostInput {
  /**
   * Blob from wellfound-public-session (anonymous) or wellfound-login.
   */
  session: string;
  /**
   * Wellfound company (startup) id.
   */
  startupId: string;
  /**
   * Same exit the session was minted on. Omit to send directly.
   */
  proxyUrl?: string | null;
}

export interface WellfoundCompanyOverviewPostOutputCompanyOverview {
  id?: string;
  name?: string;
  slug?: string;
  productDescription?: string;
  companySize?: string;
  /**
   * Formatted, for example $104.7M. Empty when not disclosed.
   */
  totalRaised?: string;
  marketTags?: Array<string>;
  locationTags?: Array<string>;
  websiteUrl?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
  blogUrl?: string;
}

export interface WellfoundCompanyOverviewPostOutput {
  company?: WellfoundCompanyOverviewPostOutputCompanyOverview;
  /**
   * Refreshed blob carrying rotated cookies. Persist THIS one, not the input.
   */
  session?: string;
}

// ── wellfound-conversation-detail.post ──────────────────────────────────

export interface WellfoundConversationDetailPostInput {
  /**
   * Authenticated blob from wellfound-login.
   */
  session: string;
  /**
   * The BARE modelId from wellfound-list-conversations, for example 982616801. Not the prefixed node id, which this query rejects.
   */
  conversationId: string;
  /**
   * Company id for this conversation.
   */
  startupId: string;
  /**
   * Wellfound ConversationTypeEnum value.
   */
  conversationType?: string;
  /**
   * Same exit the session was minted on. Omit to send directly.
   */
  proxyUrl?: string | null;
}

export interface WellfoundConversationDetailPostOutput {
  id?: string;
  /**
   * Message nodes, oldest first as Wellfound returns them.
   */
  messages?: Array<Record<string, unknown>>;
  /**
   * Refreshed blob carrying rotated cookies. Persist THIS one, not the input.
   */
  session?: string;
}

// ── wellfound-job-detail.post ───────────────────────────────────────────

export interface WellfoundJobDetailPostInput {
  /**
   * Blob from wellfound-public-session (anonymous) or wellfound-login.
   */
  session: string;
  /**
   * Wellfound job listing id.
   */
  jobId: string;
  /**
   * Listing slug, used for the URL and referer.
   */
  slug?: string;
  /**
   * Same exit the session was minted on. Omit to send directly.
   */
  proxyUrl?: string | null;
}

export interface WellfoundJobDetailPostOutputCompany {
  id?: string;
  name?: string;
  slug?: string;
  highConcept?: string;
  productDescription?: string;
  companySize?: string;
  totalRaised?: string;
  fundingStage?: string;
  marketTags?: Array<string>;
  locationTags?: Array<string>;
  founderNames?: Array<string>;
  perks?: Array<string>;
  logoUrl?: string;
}

export interface WellfoundJobDetailPostOutputJobDetail {
  id: string;
  title?: string;
  slug?: string;
  startupId?: string;
  description?: string;
  descriptionHtml?: string;
  /**
   * Canonical listing page, https://wellfound.com/jobs/<id>-<slug>. Empty when Wellfound disclosed no slug, because both halves are required: the id alone 404s.
   */
  jobUrl?: string;
  /**
   * Always false on an anonymous session.
   */
  currentUserApplied?: boolean;
  /**
   * Empty on an anonymous session.
   */
  currentUserQualificationReport?: Record<string, unknown>;
  skills?: Array<string>;
  compensation?: string;
  equity?: string;
  jobType?: string;
  /**
   * True or False as Wellfound disclosed it; null when it did not.
   */
  remote?: boolean | null;
  /**
   * REMOTE, ONSITE or ONSITE_OR_REMOTE, read from remoteConfig. Empty when undisclosed, which the anonymous surface often is.
   */
  remoteConfigKind?: string;
  locationNames?: Array<string>;
  acceptedRemoteLocations?: Array<string>;
  yearsExperienceMin?: number | null;
  yearsExperienceMax?: number | null;
  liveStartAt?: number | null;
}

export interface WellfoundJobDetailPostOutput {
  job: WellfoundJobDetailPostOutputJobDetail;
  company?: WellfoundJobDetailPostOutputCompany;
  /**
   * Refreshed blob carrying rotated cookies. Persist THIS one, not the input.
   */
  session?: string;
}

// ── wellfound-list-applications.post ────────────────────────────────────

export interface WellfoundListApplicationsPostInput {
  /**
   * Authenticated blob from wellfound-login.
   */
  session: string;
  /**
   * 1-based page number. The response carries no pageInfo: a page with no new applications means the end.
   */
  page?: number;
  /**
   * Same exit the session was minted on. Omit to send directly.
   */
  proxyUrl?: string | null;
}

export interface WellfoundListApplicationsPostOutput {
  /**
   * Application nodes, each with status, createdAt, jobListing and startup.
   */
  applications?: Array<Record<string, unknown>>;
  /**
   * Refreshed blob carrying rotated cookies. Persist THIS one, not the input.
   */
  session?: string;
}

// ── wellfound-list-conversations.post ───────────────────────────────────

export interface WellfoundListConversationsPostInput {
  /**
   * Authenticated blob from wellfound-login.
   */
  session: string;
  /**
   * ONGOING or ARCHIVED.
   */
  scope?: string;
  /**
   * 1-based page number.
   */
  page?: number;
  /**
   * Same exit the session was minted on. Omit to send directly.
   */
  proxyUrl?: string | null;
}

export interface WellfoundListConversationsPostOutputConversationSummary {
  /**
   * Prefixed node id.
   */
  id?: string;
  /**
   * Bare conversation id. This is the value wellfound-conversation-detail and wellfound-send-message take, NOT the prefixed id above.
   */
  modelId?: string;
  modelType?: string;
  unread?: boolean;
  /**
   * The company on the other side.
   */
  startup?: Record<string, unknown>;
  /**
   * The latest message in the thread.
   */
  message?: Record<string, unknown>;
}

export interface WellfoundListConversationsPostOutput {
  conversations?: Array<WellfoundListConversationsPostOutputConversationSummary>;
  hasNextPage?: boolean;
  /**
   * Refreshed blob carrying rotated cookies. Persist THIS one, not the input.
   */
  session?: string;
}

// ── wellfound-pipeline-stats.post ───────────────────────────────────────

export interface WellfoundPipelineStatsPostInput {
  /**
   * Authenticated blob from wellfound-login.
   */
  session: string;
  /**
   * Wellfound viewer id, available from wellfound-viewer.
   */
  userId: string;
  /**
   * Same exit the session was minted on. Omit to send directly.
   */
  proxyUrl?: string | null;
}

export interface WellfoundPipelineStatsPostOutput {
  /**
   * Pipeline counts, for example interested, matched, messages, savedJobListings.
   */
  stats?: Record<string, unknown>;
  /**
   * Refreshed blob carrying rotated cookies. Persist THIS one, not the input.
   */
  session?: string;
}

// ── wellfound-public-session.post ───────────────────────────────────────

export interface WellfoundPublicSessionPostInput {
  /**
   * curl_cffi browser-impersonation target used to mint the session.
   */
  impersonate?: string;
  /**
   * Exit to mint from (http://user:pass@host:port). Omit to send directly. The returned session is bound to whatever exit minted it, so every later call must pass the SAME value.
   */
  proxyUrl?: string | null;
}

export interface WellfoundPublicSessionPostOutput {
  /**
   * Opaque anonymous session blob. Pass to wellfound-browse-jobs, wellfound-job-detail and wellfound-company-overview. Carries no account credentials.
   */
  session: string;
  /**
   * Persisted queries discovered in Wellfound's bundle (a health signal).
   */
  operationCount: number;
  /**
   * Wall-clock time spent minting.
   */
  elapsedMs: number;
}

// ── wellfound-refresh-ops.post ──────────────────────────────────────────

export interface WellfoundRefreshOpsPostInput {
  /**
   * Session blob from wellfound-public-session or wellfound-login.
   */
  session: string;
  /**
   * Same exit the blob was minted on. Omit to send directly.
   */
  proxyUrl?: string | null;
}

export interface WellfoundRefreshOpsPostOutput {
  /**
   * Refreshed blob: the same cookies, a new signature and op-id map.
   */
  session: string;
  /**
   * Persisted queries in the refreshed map.
   */
  operationCount: number;
  /**
   * Wall-clock time spent re-scanning.
   */
  elapsedMs: number;
}

// ── wellfound-search-jobs.post ──────────────────────────────────────────

export interface WellfoundSearchJobsPostInput {
  /**
   * Authenticated blob from wellfound-login.
   */
  session: string;
  /**
   * 1-based page number.
   */
  page?: number;
  /**
   * Wellfound role tag ids.
   */
  roleTagIds?: Array<string> | null;
  /**
   * Wellfound skill tag ids.
   */
  skillTagIds?: Array<string> | null;
  /**
   * Job types, for example full-time or contract.
   */
  jobTypes?: Array<string> | null;
  /**
   * Wellfound remote preference enum value.
   */
  remotePreference?: string | null;
  /**
   * Wellfound location id.
   */
  locationId?: string | null;
  /**
   * Hide listings that redirect off Wellfound.
   */
  hideOffPlatform?: boolean;
  /**
   * Same exit the session was minted on. Omit to send directly.
   */
  proxyUrl?: string | null;
}

export interface WellfoundSearchJobsPostOutputJobSummary {
  id: string;
  title?: string;
  slug?: string;
  startupId?: string;
  /**
   * Canonical listing page, https://wellfound.com/jobs/<id>-<slug>. Empty when Wellfound disclosed no slug, because both halves are required: the id alone 404s.
   */
  jobUrl?: string;
  /**
   * True when this account has already applied.
   */
  currentUserApplied?: boolean;
  compensation?: string;
  equity?: string;
  jobType?: string;
  /**
   * True or False as Wellfound disclosed it; null when it did not.
   */
  remote?: boolean | null;
  /**
   * REMOTE, ONSITE or ONSITE_OR_REMOTE. Empty when undisclosed.
   */
  remoteConfigKind?: string;
  locationNames?: Array<string>;
  liveStartAt?: number | null;
  description?: string;
  startupName?: string;
  startupSlug?: string;
  startupLogoUrl?: string;
  startupCompanySize?: string;
  startupHighConcept?: string;
  startupFundingStage?: string;
  startupTotalRaised?: string;
}

export interface WellfoundSearchJobsPostOutput {
  jobs?: Array<WellfoundSearchJobsPostOutputJobSummary>;
  page?: number;
  hasNextPage?: boolean;
  /**
   * Companies matched, which is what Wellfound counts here.
   */
  totalStartupCount?: number;
  /**
   * Refreshed blob carrying rotated cookies. Persist THIS one, not the input.
   */
  session?: string;
}

// ── wellfound-viewer.post ───────────────────────────────────────────────

export interface WellfoundViewerPostInput {
  /**
   * Authenticated blob from wellfound-login.
   */
  session: string;
  /**
   * Same exit the session was minted on. Omit to send directly.
   */
  proxyUrl?: string | null;
}

export interface WellfoundViewerPostOutput {
  /**
   * Wellfound user id behind this session.
   */
  viewerId?: string;
  /**
   * False when Wellfound has restricted this account.
   */
  canApplyToJobs?: boolean;
  candidateState?: string;
  /**
   * Decoded analytics traits, empty when absent or undecodable.
   */
  traits?: Record<string, unknown>;
  /**
   * Refreshed blob carrying rotated cookies. Persist THIS one, not the input.
   */
  session?: string;
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
