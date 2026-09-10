/**
 * GENERATED FILE — DO NOT EDIT.
 *
 * Produced by packages/sdk/scripts/generate.ts from the TS + Python + Rust
 * operation registries. Run `pnpm generate:sdk` after changing any operation; CI fails if
 * this file is out of date.
 */

import type { CallOptions, UpAPI } from '../client.js';
import type {
  ArchiveWaybackGetInput,
  ArchiveWaybackGetOutput,
  AudioTranscribeResultGetInput,
  AudioTranscribeResultGetOutput,
  AudioTranscribePostInput,
  AudioTranscribePostOutput,
  BbcNewsGetInput,
  BbcNewsGetOutput,
  BlueskyProfileGetInput,
  BlueskyProfileGetOutput,
  ChatousCheckSessionGetInput,
  ChatousCheckSessionGetOutput,
  ChatousGetAccountStateGetInput,
  ChatousGetAccountStateGetOutput,
  ChatousPollEventsGetInput,
  ChatousPollEventsGetOutput,
  CloudflarePageTitleGetInput,
  CloudflarePageTitleGetOutput,
  ContraCompanyProfileGetInput,
  ContraCompanyProfileGetOutput,
  ContraDiscoverPeopleGetInput,
  ContraDiscoverPeopleGetOutput,
  ContraJobDetailGetInput,
  ContraJobDetailGetOutput,
  CryptoPriceGetInput,
  CryptoPriceGetOutput,
  CurrencyConvertGetInput,
  CurrencyConvertGetOutput,
  DetectTechStackPostInput,
  DetectTechStackPostOutput,
  DevtoArticlesSearchGetInput,
  DevtoArticlesSearchGetOutput,
  EmailReadVerificationCodePostInput,
  EmailReadVerificationCodePostOutput,
  EmailReadVerificationLinkPostInput,
  EmailReadVerificationLinkPostOutput,
  FetchMarkdownPostInput,
  FetchMarkdownPostOutput,
  GithubIssueCommentsGetInput,
  GithubIssueCommentsGetOutput,
  GithubRepoContributorsGetInput,
  GithubRepoContributorsGetOutput,
  GithubRepoIssuesGetInput,
  GithubRepoIssuesGetOutput,
  GithubRepoGetInput,
  GithubRepoGetOutput,
  GithubSearchDiscussionsGetInput,
  GithubSearchDiscussionsGetOutput,
  GithubSearchIssuesGetInput,
  GithubSearchIssuesGetOutput,
  GithubSearchReposGetInput,
  GithubSearchReposGetOutput,
  GithubSearchUsersGetInput,
  GithubSearchUsersGetOutput,
  GithubTrendingGetInput,
  GithubTrendingGetOutput,
  GithubUserEmailsGetInput,
  GithubUserEmailsGetOutput,
  GithubUserGetInput,
  GithubUserGetOutput,
  GoogleAutocompletePostInput,
  GoogleAutocompletePostOutput,
  GoogleMapsPlaceGetInput,
  GoogleMapsPlaceGetOutput,
  GoogleMapsReviewsGetInput,
  GoogleMapsReviewsGetOutput,
  GoogleMapsSearchPostInput,
  GoogleMapsSearchPostOutput,
  HackernewsSearchGetInput,
  HackernewsSearchGetOutput,
  HtmlToPdfPostInput,
  HtmlToPdfPostOutput,
  ImageOcrPostInput,
  ImageOcrPostOutput,
  InstagramCheckAccountHealthGetInput,
  InstagramCheckAccountHealthGetOutput,
  InstagramCheckAccountPostInput,
  InstagramCheckAccountPostOutput,
  InstagramDiscoverLocationPostInput,
  InstagramDiscoverLocationPostOutput,
  InstagramGetPostCommentersPostInput,
  InstagramGetPostCommentersPostOutput,
  InstagramGetPostInfoPostInput,
  InstagramGetPostInfoPostOutput,
  InstagramGetUserByIdPostInput,
  InstagramGetUserByIdPostOutput,
  InstagramGetUserPostsPostInput,
  InstagramGetUserPostsPostOutput,
  InstagramGetUserProfilePostInput,
  InstagramGetUserProfilePostOutput,
  IpGeolocationGetInput,
  IpGeolocationGetOutput,
  LinkedinCheckAccountHealthPostInput,
  LinkedinCheckAccountHealthPostOutput,
  LinkedinGetProfilePostInput,
  LinkedinGetProfilePostOutput,
  LinkedinJobsDetailGetInput,
  LinkedinJobsDetailGetOutput,
  LinkedinJobsSearchGetInput,
  LinkedinJobsSearchGetOutput,
  LinkedinProfileSearchPostInput,
  LinkedinProfileSearchPostOutput,
  MastodonProfileGetInput,
  MastodonProfileGetOutput,
  NasaApodGetInput,
  NasaApodGetOutput,
  NpmPackageGetInput,
  NpmPackageGetOutput,
  OpengraphParseGetInput,
  OpengraphParseGetOutput,
  PdfExtractTextPostInput,
  PdfExtractTextPostOutput,
  PokeapiPokemonGetInput,
  PokeapiPokemonGetOutput,
  PypiPackageGetInput,
  PypiPackageGetOutput,
  RedditCheckAccountHealthGetInput,
  RedditCheckAccountHealthGetOutput,
  RedditCheckCommentVisibilityGetInput,
  RedditCheckCommentVisibilityGetOutput,
  RedditGetTrendingGetInput,
  RedditGetTrendingGetOutput,
  RedditOauthMeGetInput,
  RedditOauthMeGetOutput,
  RedditOauthPostCommentPostInput,
  RedditOauthPostCommentPostOutput,
  RedditScrapePostGetInput,
  RedditScrapePostGetOutput,
  RedditSearchPostsGetInput,
  RedditSearchPostsGetOutput,
  RedditSubredditInfoGetInput,
  RedditSubredditInfoGetOutput,
  ScreenshotPostInput,
  ScreenshotPostOutput,
  SitemapParseGetInput,
  SitemapParseGetOutput,
  StackexchangeSearchGetInput,
  StackexchangeSearchGetOutput,
  TextAnalyzePostInput,
  TextAnalyzePostOutput,
  TiktokCheckAccountHealthGetInput,
  TiktokCheckAccountHealthGetOutput,
  TiktokDiscoverUsersPostInput,
  TiktokDiscoverUsersPostOutput,
  TiktokGetCommentRepliesGetInput,
  TiktokGetCommentRepliesGetOutput,
  TiktokGetCommentsPostInput,
  TiktokGetCommentsPostOutput,
  TiktokGetUserProfilePostInput,
  TiktokGetUserProfilePostOutput,
  TiktokGetVideoDetailPostInput,
  TiktokGetVideoDetailPostOutput,
  TiktokGetVideoEmbedGetInput,
  TiktokGetVideoEmbedGetOutput,
  TiktokOembedGetInput,
  TiktokOembedGetOutput,
  TimezoneLookupGetInput,
  TimezoneLookupGetOutput,
  TranslateTextGetInput,
  TranslateTextGetOutput,
  UpworkJobsDetailGetInput,
  UpworkJobsDetailGetOutput,
  UpworkJobsSearchGetInput,
  UpworkJobsSearchGetOutput,
  WeatherCurrentGetInput,
  WeatherCurrentGetOutput,
  WebSearchPostInput,
  WebSearchPostOutput,
  WellfoundApplicationModalPostInput,
  WellfoundApplicationModalPostOutput,
  WellfoundBrowseJobsPostInput,
  WellfoundBrowseJobsPostOutput,
  WellfoundCompanyOverviewPostInput,
  WellfoundCompanyOverviewPostOutput,
  WellfoundConversationDetailPostInput,
  WellfoundConversationDetailPostOutput,
  WellfoundJobDetailPostInput,
  WellfoundJobDetailPostOutput,
  WellfoundListApplicationsPostInput,
  WellfoundListApplicationsPostOutput,
  WellfoundListConversationsPostInput,
  WellfoundListConversationsPostOutput,
  WellfoundPipelineStatsPostInput,
  WellfoundPipelineStatsPostOutput,
  WellfoundPublicSessionPostInput,
  WellfoundPublicSessionPostOutput,
  WellfoundRefreshOpsPostInput,
  WellfoundRefreshOpsPostOutput,
  WellfoundSearchJobsPostInput,
  WellfoundSearchJobsPostOutput,
  WellfoundViewerPostInput,
  WellfoundViewerPostOutput,
  WikipediaArticleGetInput,
  WikipediaArticleGetOutput,
} from './types.js';

/**
 * The typed per-operation surface, keyed by slug. Slugs contain `.` and `-`, so
 * they are indexed rather than dotted: `client.operations['github-trending.get']({...})`.
 */
export type Operations = {
  /** Wayback Machine Lookup — Find the closest Wayback Machine snapshot of a URL (optionally near a target timestamp). Returns the snapshot URL, its capture timestamp, and HTTP status. */
  'archive-wayback.get': (
    input: ArchiveWaybackGetInput,
    options?: CallOptions,
  ) => Promise<ArchiveWaybackGetOutput>;
  /** Get Transcription Result — Fetch the result of a transcription started by audio-transcribe, using its jobId. Returns the finished transcript with time-coded segments, or the current progress while it is still running. Job ids are kept for 24 hours. */
  'audio-transcribe-result.get': (
    input: AudioTranscribeResultGetInput,
    options?: CallOptions,
  ) => Promise<AudioTranscribeResultGetOutput>;
  /** Transcribe Audio or Video — Transcribe speech from an audio or video URL, with time-coded segments and automatic language detection. Short clips come back in the same call; longer ones return a jobId to poll with audio-transcribe-result. GPU Whisper, up to two hours per file. */
  'audio-transcribe.post': (
    input: AudioTranscribePostInput,
    options?: CallOptions,
  ) => Promise<AudioTranscribePostOutput>;
  /** Get BBC News Headlines — Fetch headlines from a BBC section (news / world / business / technology / science-environment / entertainment-arts / sport) via the official BBC RSS feeds. Pure HTTP (no browser). Returns title, article URL, and summary for each headline. */
  'bbc-news.get': (input: BbcNewsGetInput, options?: CallOptions) => Promise<BbcNewsGetOutput>;
  /** Get Bluesky Profile — Fetch a Bluesky (AT Protocol) profile by handle or DID. Returns display name, description, avatar/banner, follower and post counts, labels, and DID. Uses the public AppView - no auth required. */
  'bluesky-profile.get': (
    input: BlueskyProfileGetInput,
    options?: CallOptions,
  ) => Promise<BlueskyProfileGetOutput>;
  /** Chatous Check Session — Check whether a Chatous connect.sid cookie is still accepted. Returns Chatous's own verdict (0 authenticated, 1111 anonymous or expired) so an expired session is reported as data rather than as a failure. */
  'chatous-check-session.get': (
    input: ChatousCheckSessionGetInput,
    options?: CallOptions,
  ) => Promise<ChatousCheckSessionGetOutput>;
  /** Chatous Get Account State — Read a Chatous account's own profile, its open conversations and their message history in one bounded WebSocket read. Chatous exposes no REST endpoint for any of this, so the socket's opening burst is the only source. */
  'chatous-get-account-state.get': (
    input: ChatousGetAccountStateGetInput,
    options?: CallOptions,
  ) => Promise<ChatousGetAccountStateGetOutput>;
  /** Chatous Poll Events — Listen on a Chatous account's WebSocket for a bounded window and return the events that arrived: new matches with the partner's profile, incoming messages, chat disconnects and queue acknowledgements. */
  'chatous-poll-events.get': (
    input: ChatousPollEventsGetInput,
    options?: CallOptions,
  ) => Promise<ChatousPollEventsGetOutput>;
  /** Get Cloudflare Page Title — Fetch the <title> of a URL using curl-cffi with browser TLS impersonation. Handles sites that block plain-requests but allow browser-like TLS fingerprints. */
  'cloudflare-page-title.get': (
    input: CloudflarePageTitleGetInput,
    options?: CallOptions,
  ) => Promise<CloudflarePageTitleGetOutput>;
  /** Get Contra Company Profile — Read one contra.com company profile by its slug: name, description, website, location, year founded, verification badge, review count and the client statistics Contra publishes (average rating, projects hired, total spend). Reads Contra's public page — no Contra account is required. */
  'contra-company-profile.get': (
    input: ContraCompanyProfileGetInput,
    options?: CallOptions,
  ) => Promise<ContraCompanyProfileGetOutput>;
  /** Search Contra Freelancers — Search contra.com's public directory of independent professionals by role or free text. Returns each profile's name, headline, roles, location, review average and count, follower and hire counts, availability and minimum hourly rate. Reads Contra's public page — no Contra account is required. */
  'contra-discover-people.get': (
    input: ContraDiscoverPeopleGetInput,
    options?: CallOptions,
  ) => Promise<ContraDiscoverPeopleGetOutput>;
  /** Get Contra Opportunity — Read one contra.com freelance opportunity by its slug: title, full description, budget range, required roles and tools, application window, and the hiring company with its review count and spend statistics. Reads Contra's public page — no Contra account is required. */
  'contra-job-detail.get': (
    input: ContraJobDetailGetInput,
    options?: CallOptions,
  ) => Promise<ContraJobDetailGetOutput>;
  /** Get Crypto Prices — Current crypto prices (+ optional market cap and 24h change) for one or more coins across fiat or crypto quote currencies via CoinGecko's free simple-price endpoint. */
  'crypto-price.get': (
    input: CryptoPriceGetInput,
    options?: CallOptions,
  ) => Promise<CryptoPriceGetOutput>;
  /** Convert Currency — Convert a fiat amount across one or more target currencies using ECB daily reference rates via Frankfurter. Returns both unit rates and the converted amounts. */
  'currency-convert.get': (
    input: CurrencyConvertGetInput,
    options?: CallOptions,
  ) => Promise<CurrencyConvertGetOutput>;
  /** Detect Website Tech Stack — Analyze any website to detect its technology stack — frameworks (Next.js, Nuxt, WordPress, Shopify), hosting (Vercel, Netlify, AWS), analytics (GA, Plausible, Segment), CDNs, CSS frameworks, payment providers, and more. Uses HTTP headers, HTML patterns, and script analysis. */
  'detect-tech-stack.post': (
    input: DetectTechStackPostInput,
    options?: CallOptions,
  ) => Promise<DetectTechStackPostOutput>;
  /** Search dev.to Articles — Search articles on dev.to by tag, username, or top-of-week trending. Returns title, description, tags, author, reading time, reaction and comment counts. */
  'devto-articles-search.get': (
    input: DevtoArticlesSearchGetInput,
    options?: CallOptions,
  ) => Promise<DevtoArticlesSearchGetOutput>;
  /** Read Email Verification Code — Connect to an IMAP mailbox and extract a verification code from the SUBJECT of a recent email. Polls with retries. Supports Gmail (with App Password), Outlook, and any IMAP server. Generic — works for any platform that puts its code in the subject line; for a token that only appears in the body, use email-read-verification-link. */
  'email-read-verification-code.post': (
    input: EmailReadVerificationCodePostInput,
    options?: CallOptions,
  ) => Promise<EmailReadVerificationCodePostOutput>;
  /** Read Email Verification Link — Connect to an IMAP mailbox and extract a link from the BODY of a recent email. Decodes quoted-printable/base64 bodies before matching, so URLs split across lines are returned whole. Polls with retries. Use this for verification mail whose token is a one-time URL rather than a code in the subject. */
  'email-read-verification-link.post': (
    input: EmailReadVerificationLinkPostInput,
    options?: CallOptions,
  ) => Promise<EmailReadVerificationLinkPostOutput>;
  /** Fetch URL as Markdown — Convert any web page into clean, LLM-ready Markdown. Fetches over plain HTTP with browser headers (retrying once through a residential or datacenter proxy when the origin serves a bot wall), removes boilerplate with Mozilla Readability, and converts with GitHub-flavored Markdown tables, lists and code blocks. Article mode is verified against a whole-page conversion and downgrades itself when Readability strips too much, so you are never handed a gutted page. Returns the markdown plus title, byline, language, excerpt, the extracted link list, the final URL after redirects, and which transport served the body. No browser is used, so a client-rendered page is reported as an error rather than as empty content. */
  'fetch-markdown.post': (
    input: FetchMarkdownPostInput,
    options?: CallOptions,
  ) => Promise<FetchMarkdownPostOutput>;
  /** List GitHub Issue Comments — List the comments on a GitHub issue or pull request, paginated: author, association (OWNER/MEMBER/CONTRIBUTOR/NONE), body, reaction count, timestamps. Plus the rate-limit headers. */
  'github-issue-comments.get': (
    input: GithubIssueCommentsGetInput,
    options?: CallOptions,
  ) => Promise<GithubIssueCommentsGetOutput>;
  /** List GitHub Repository Contributors — List a repository's contributors ranked by commit count, paginated: login, id, type, contributions, profile URL. Plus the rate-limit headers. */
  'github-repo-contributors.get': (
    input: GithubRepoContributorsGetInput,
    options?: CallOptions,
  ) => Promise<GithubRepoContributorsGetOutput>;
  /** List GitHub Repository Issues — List a repository's issues with state/label/date filters and pagination. Pull requests are filtered out by default. Returns parsed rows (author, labels, comment and reaction counts) plus the rate-limit headers. */
  'github-repo-issues.get': (
    input: GithubRepoIssuesGetInput,
    options?: CallOptions,
  ) => Promise<GithubRepoIssuesGetOutput>;
  /** Get GitHub Repository — Fetch metadata (stars, forks, topics, license, dates) for a public GitHub repository via the REST API. */
  'github-repo.get': (
    input: GithubRepoGetInput,
    options?: CallOptions,
  ) => Promise<GithubRepoGetOutput>;
  /** Search GitHub Discussions — Search GitHub Discussions across all repositories (GraphQL). Returns title, body, author, repository, category, comment count and the node id you need to reply, with cursor pagination. Requires your own GitHub token - GitHub's GraphQL API does not serve anonymous callers. */
  'github-search-discussions.get': (
    input: GithubSearchDiscussionsGetInput,
    options?: CallOptions,
  ) => Promise<GithubSearchDiscussionsGetOutput>;
  /** Search GitHub Issues — Search issues and pull requests across all of GitHub with GitHub's search syntax. Returns parsed rows (author, repo, labels, comment count, reactions) plus the rate-limit headers so you can pace yourself. Works without a token (10 searches/min per IP); pass your own token for 30/min. */
  'github-search-issues.get': (
    input: GithubSearchIssuesGetInput,
    options?: CallOptions,
  ) => Promise<GithubSearchIssuesGetOutput>;
  /** Search GitHub Repositories — Search repositories across GitHub with GitHub's search syntax (language, stars, topics, pushed dates). Returns parsed rows plus the rate-limit headers. Works without a token; pass your own for the higher limit. */
  'github-search-repos.get': (
    input: GithubSearchReposGetInput,
    options?: CallOptions,
  ) => Promise<GithubSearchReposGetOutput>;
  /** Search GitHub Users — Search GitHub users and organizations by login, location, language, follower count and more. Returns login/id/type/avatar rows (follow with Get GitHub User for the full profile) plus the rate-limit headers. */
  'github-search-users.get': (
    input: GithubSearchUsersGetInput,
    options?: CallOptions,
  ) => Promise<GithubSearchUsersGetOutput>;
  /** Get GitHub Trending Repositories — Fetch the github.com/trending page for the most-starred repos in a time window, optionally filtered by language. Pure HTTP (no browser). Returns full name, URL, description, language, total stars, stars this window, forks. */
  'github-trending.get': (
    input: GithubTrendingGetInput,
    options?: CallOptions,
  ) => Promise<GithubTrendingGetOutput>;
  /** Get GitHub User Commit Emails — Collect the public commit-author emails a GitHub user has pushed with, from their most recently updated repositories (noreply addresses dropped). One listing call plus one per repository scanned. Plus the rate-limit headers. */
  'github-user-emails.get': (
    input: GithubUserEmailsGetInput,
    options?: CallOptions,
  ) => Promise<GithubUserEmailsGetOutput>;
  /** Get GitHub User — Fetch a GitHub user or organization's public profile: name, bio, company, location, follower/repo counts, avatar, Twitter handle, hireable flag. Plus the rate-limit headers. Works without a token; pass your own for 5,000 req/h. */
  'github-user.get': (
    input: GithubUserGetInput,
    options?: CallOptions,
  ) => Promise<GithubUserGetOutput>;
  /** Google Autocomplete — Real Google search suggestions (autocomplete/suggest) via pure HTTP — no browser, no CAPTCHA. Set expand=true to mine long-tail keywords. */
  'google-autocomplete.post': (
    input: GoogleAutocompletePostInput,
    options?: CallOptions,
  ) => Promise<GoogleAutocompletePostOutput>;
  /** Google Maps Place Details — Look up one Google Maps place by place id, CID, feature id or a pasted Maps link, and get its name, full address, coordinates, categories, rating, review count, phone, website and opening hours. Pairs with Google Maps Business Search, which returns the identifiers this accepts. */
  'google-maps-place.get': (
    input: GoogleMapsPlaceGetInput,
    options?: CallOptions,
  ) => Promise<GoogleMapsPlaceGetOutput>;
  /** Google Maps Reviews — Read the reviews on any Google Maps place by place id, CID, feature id or a pasted Maps link. Returns each review's rating, full text, author, photos, timestamp and the owner's reply, sorted by relevance, date or rating, with cursor pagination through the whole feed. */
  'google-maps-reviews.get': (
    input: GoogleMapsReviewsGetInput,
    options?: CallOptions,
  ) => Promise<GoogleMapsReviewsGetOutput>;
  /** Google Maps Business Search — Search Google Maps for businesses by text query, optionally centred on coordinates. Returns each place with its name, address, coordinates, category, rating, review count, opening hours, website and phone where Google publishes them, plus the place id you can pass to Google Maps Place Details. */
  'google-maps-search.post': (
    input: GoogleMapsSearchPostInput,
    options?: CallOptions,
  ) => Promise<GoogleMapsSearchPostOutput>;
  /** Search Hacker News — Full-text + filter search over Hacker News (stories, comments, Show/Ask HN, front page) via Algolia's open API. Ordered by relevance or date. */
  'hackernews-search.get': (
    input: HackernewsSearchGetInput,
    options?: CallOptions,
  ) => Promise<HackernewsSearchGetOutput>;
  /** Render HTML or URL to PDF — Render a public web page or a raw HTML document to a print-quality PDF with headless Chromium — paper size, orientation, margins, scale and page ranges included. Returns base64 PDF bytes. */
  'html-to-pdf.post': (
    input: HtmlToPdfPostInput,
    options?: CallOptions,
  ) => Promise<HtmlToPdfPostOutput>;
  /** OCR an Image — Read the text in an image, by URL or as an inline base64 upload. Returns the full text plus every detected line with its confidence score and pixel bounding box. Runs locally on PP-OCR/ONNX — no cloud vision API, no per-image fee. */
  'image-ocr.post': (
    input: ImageOcrPostInput,
    options?: CallOptions,
  ) => Promise<ImageOcrPostOutput>;
  /** Instagram Check Account Health — Check if Instagram account is active/suspended. Returns follower, post counts, and verification status. */
  'instagram-check-account-health.get': (
    input: InstagramCheckAccountHealthGetInput,
    options?: CallOptions,
  ) => Promise<InstagramCheckAccountHealthGetOutput>;
  /** Instagram Check Account — Check if a username/email/phone is linked to an Instagram account. Returns existence + recovery channels. */
  'instagram-check-account.post': (
    input: InstagramCheckAccountPostInput,
    options?: CallOptions,
  ) => Promise<InstagramCheckAccountPostOutput>;
  /** Instagram Discover Location Posts — Get 50-95 post shortcodes from a location page. No auth needed. Use with get-post-commenters for massive lead discovery. */
  'instagram-discover-location.post': (
    input: InstagramDiscoverLocationPostInput,
    options?: CallOptions,
  ) => Promise<InstagramDiscoverLocationPostOutput>;
  /** Instagram Get Post Commenters — Extract commenters, comment text, and sibling posts from a post page. One call = ~24 lead-gen entities. No auth needed. */
  'instagram-get-post-commenters.post': (
    input: InstagramGetPostCommentersPostInput,
    options?: CallOptions,
  ) => Promise<InstagramGetPostCommentersPostOutput>;
  /** Instagram Get Post Info — Get post metadata (caption, owner, media, comment count) via embed page. No auth needed, not rate-limited. */
  'instagram-get-post-info.post': (
    input: InstagramGetPostInfoPostInput,
    options?: CallOptions,
  ) => Promise<InstagramGetPostInfoPostOutput>;
  /** Instagram Get User By Id — Resolve an Instagram profile from a numeric user id, no login. Anonymous returns identity (username, profile picture) — see detailLevel. */
  'instagram-get-user-by-id.post': (
    input: InstagramGetUserByIdPostInput,
    options?: CallOptions,
  ) => Promise<InstagramGetUserByIdPostOutput>;
  /** Instagram Get User Posts — Get a user's recent posts with engagement metrics. Rate-limited — use proxy rotation for bulk. No auth needed. */
  'instagram-get-user-posts.post': (
    input: InstagramGetUserPostsPostInput,
    options?: CallOptions,
  ) => Promise<InstagramGetUserPostsPostOutput>;
  /** Instagram Get User Profile — Get full Instagram user profile (bio, stats, verified, business status). Works for public profiles without auth. */
  'instagram-get-user-profile.post': (
    input: InstagramGetUserProfilePostInput,
    options?: CallOptions,
  ) => Promise<InstagramGetUserProfilePostOutput>;
  /** Geolocate IP Address — Resolve an IP (IPv4 or IPv6) to city, region, country, lat/long, timezone, ASN, and currency. Omit the ip field to geolocate the caller. */
  'ip-geolocation.get': (
    input: IpGeolocationGetInput,
    options?: CallOptions,
  ) => Promise<IpGeolocationGetOutput>;
  /** LinkedIn Check Account Health — Check whether a LinkedIn session (cookies) is still authenticated via the Voyager me endpoint. Returns isValid plus the logged-in profile name/URL. */
  'linkedin-check-account-health.post': (
    input: LinkedinCheckAccountHealthPostInput,
    options?: CallOptions,
  ) => Promise<LinkedinCheckAccountHealthPostOutput>;
  /** LinkedIn Get Profile — Fetch a LinkedIn profile (name, headline, location, vanity) by vanity name via the Voyager dash API. Cookie-authenticated. */
  'linkedin-get-profile.post': (
    input: LinkedinGetProfilePostInput,
    options?: CallOptions,
  ) => Promise<LinkedinGetProfilePostOutput>;
  /** Get LinkedIn Job Details — Fetch one LinkedIn job posting: full description, seniority level, employment type, job function, industries, applicant count and posting age. Accepts the job id from linkedin-jobs-search, a job URL or a urn:li:jobPosting URN. Reads LinkedIn's public guest surface — no LinkedIn account or cookie is required. */
  'linkedin-jobs-detail.get': (
    input: LinkedinJobsDetailGetInput,
    options?: CallOptions,
  ) => Promise<LinkedinJobsDetailGetOutput>;
  /** Search LinkedIn Jobs — Search LinkedIn job postings by keyword and location. Returns title, company, location, posting date, salary hint and the job id you pass to linkedin-jobs-detail. Reads LinkedIn's public guest surface — no LinkedIn account or cookie is required. */
  'linkedin-jobs-search.get': (
    input: LinkedinJobsSearchGetInput,
    options?: CallOptions,
  ) => Promise<LinkedinJobsSearchGetOutput>;
  /** LinkedIn Profile Search — Find LinkedIn profiles by job title and location. Returns name, headline, and profile URL. Web-search backed — no login required. */
  'linkedin-profile-search.post': (
    input: LinkedinProfileSearchPostInput,
    options?: CallOptions,
  ) => Promise<LinkedinProfileSearchPostOutput>;
  /** Get Mastodon Profile — Look up a Mastodon account by fully-qualified handle (e.g. Gargron@mastodon.social). Works against any Mastodon instance via its open REST API - no auth needed. */
  'mastodon-profile.get': (
    input: MastodonProfileGetInput,
    options?: CallOptions,
  ) => Promise<MastodonProfileGetOutput>;
  /** Get NASA Astronomy Picture of the Day — Fetch NASA's Astronomy Picture of the Day (APOD). Today's by default, or any date from 1995-06-16 onwards. Returns title, explanation, media URL (+ HD variant), copyright. Uses DEMO_KEY by default; set NASA_API_KEY env for higher rate limits. */
  'nasa-apod.get': (input: NasaApodGetInput, options?: CallOptions) => Promise<NasaApodGetOutput>;
  /** Get npm Package — Fetch metadata for a public npm package: latest version, recent versions, maintainers, license, repository, keywords. */
  'npm-package.get': (
    input: NpmPackageGetInput,
    options?: CallOptions,
  ) => Promise<NpmPackageGetOutput>;
  /** Parse Open Graph Metadata — Fetch a URL and extract its Open Graph, Twitter Card, <title>, description, canonical, and favicon metadata - everything needed to render a rich link preview. */
  'opengraph-parse.get': (
    input: OpengraphParseGetInput,
    options?: CallOptions,
  ) => Promise<OpengraphParseGetOutput>;
  /** Extract Text from PDF — Extract the text of a PDF, by URL or as an inline base64 upload. Optionally restrict it to a page range and detect tables, returned as Markdown. Runs locally on PDFium — no third-party document API, no per-page fee. */
  'pdf-extract-text.post': (
    input: PdfExtractTextPostInput,
    options?: CallOptions,
  ) => Promise<PdfExtractTextPostOutput>;
  /** Get Pokemon — Look up a Pokemon by name or national dex id. Returns types, abilities, base stats (HP/attack/defense/sp.atk/sp.def/speed), height/weight, and artwork URLs. */
  'pokeapi-pokemon.get': (
    input: PokeapiPokemonGetInput,
    options?: CallOptions,
  ) => Promise<PokeapiPokemonGetOutput>;
  /** Get PyPI Package — Fetch metadata for a public PyPI package: latest version, author, license, project URLs, classifiers, requirements. */
  'pypi-package.get': (
    input: PypiPackageGetInput,
    options?: CallOptions,
  ) => Promise<PypiPackageGetOutput>;
  /** Check Reddit Account Health — Check the health and status of a Reddit account. Pass sessionCookies for the reliable authenticated read (required for new/low-karma accounts); otherwise falls back to parsing the public profile. */
  'reddit-check-account-health.get': (
    input: RedditCheckAccountHealthGetInput,
    options?: CallOptions,
  ) => Promise<RedditCheckAccountHealthGetOutput>;
  /** Check Reddit Comment Visibility — Detect shadowban/auto-removal: read a comment's focused permalink JSON as a non-author and report whether it is actually visible to the public. */
  'reddit-check-comment-visibility.get': (
    input: RedditCheckCommentVisibilityGetInput,
    options?: CallOptions,
  ) => Promise<RedditCheckCommentVisibilityGetOutput>;
  /** Get Trending Reddit Posts — Fetch trending, hot, rising, top, or new posts from any subreddit with pagination and time filtering. Requires a Reddit session cookie in sessionCookies (obtain it from reddit-login.post, or copy reddit_session out of a signed-in browser) — Reddit has blocked every anonymous read surface since 2026-07-30. */
  'reddit-get-trending.get': (
    input: RedditGetTrendingGetInput,
    options?: CallOptions,
  ) => Promise<RedditGetTrendingGetOutput>;
  /** Reddit - who does this OAuth app speak as? — Exchanges a Reddit OAuth2 refresh token and reads the account it belongs to over Reddit's documented API: username, suspension state, verified email, karma, account age and the token's scopes. Reads only -- it creates nothing. The access token and the supplied secrets are never returned or logged. */
  'reddit-oauth-me.get': (
    input: RedditOauthMeGetInput,
    options?: CallOptions,
  ) => Promise<RedditOauthMeGetOutput>;
  /** Reddit - post a comment as a registered app — Posts a comment through Reddit's documented OAuth2 API using a refresh token, with the caller's own User-Agent. Verifies the token's account against expectedUsername before creating anything, and turns Reddit's HTTP-200 `json.errors` refusals (locked thread, subreddit ban, rate limit) into classified failures. No browser, no captcha, no cookies. */
  'reddit-oauth-post-comment.post': (
    input: RedditOauthPostCommentPostInput,
    options?: CallOptions,
  ) => Promise<RedditOauthPostCommentPostOutput>;
  /** Scrape Reddit Post & Comments — Fetch a Reddit post with its comment tree: post metadata, selftext, and nested comments with scores and authorship. Requires a Reddit session cookie in sessionCookies (obtain it from reddit-login.post, or copy reddit_session out of a signed-in browser) — Reddit has blocked every anonymous read surface since 2026-07-30. */
  'reddit-scrape-post.get': (
    input: RedditScrapePostGetInput,
    options?: CallOptions,
  ) => Promise<RedditScrapePostGetOutput>;
  /** Search Reddit Posts — Search Reddit posts by keyword with subreddit filtering, sort and time range. Returns structured post data including scores, comment count and metadata. Requires a Reddit session cookie in sessionCookies (obtain it from reddit-login.post, or copy reddit_session out of a signed-in browser) — Reddit has blocked every anonymous read surface since 2026-07-30. */
  'reddit-search-posts.get': (
    input: RedditSearchPostsGetInput,
    options?: CallOptions,
  ) => Promise<RedditSearchPostsGetOutput>;
  /** Get Subreddit Info — Fetch subreddit metadata: subscriber count, description, rules, active users and appearance settings. Requires a Reddit session cookie in sessionCookies (obtain it from reddit-login.post, or copy reddit_session out of a signed-in browser) — Reddit has blocked every anonymous read surface since 2026-07-30. */
  'reddit-subreddit-info.get': (
    input: RedditSubredditInfoGetInput,
    options?: CallOptions,
  ) => Promise<RedditSubredditInfoGetOutput>;
  /** Capture Website Screenshot — Render any public web page in headless Chromium and return a PNG or JPEG screenshot as base64 — viewport or full page, with a configurable viewport size, wait strategy and settle delay. */
  'screenshot.post': (
    input: ScreenshotPostInput,
    options?: CallOptions,
  ) => Promise<ScreenshotPostOutput>;
  /** Parse Sitemap — Fetch and parse an XML sitemap, sitemap index, or plaintext URL list. Returns URL entries (with lastmod/changefreq/priority) or child sitemap locations. */
  'sitemap-parse.get': (
    input: SitemapParseGetInput,
    options?: CallOptions,
  ) => Promise<SitemapParseGetOutput>;
  /** Search Stack Exchange — Full-text search over any Stack Exchange site (stackoverflow, superuser, askubuntu, etc.). Returns question id, title, tags, score, answer count, accepted-answer flag, asker, timestamps. */
  'stackexchange-search.get': (
    input: StackexchangeSearchGetInput,
    options?: CallOptions,
  ) => Promise<StackexchangeSearchGetOutput>;
  /** Text Analyze — Analyze text: character / word / line / sentence / byte counts plus a SHA-256 digest. Pure-compute, no network — a native Rust marketplace endpoint. */
  'text-analyze.post': (
    input: TextAnalyzePostInput,
    options?: CallOptions,
  ) => Promise<TextAnalyzePostOutput>;
  /** TikTok Check Account Health — Check if TikTok account is active/suspended. Returns follower, video, and like counts. */
  'tiktok-check-account-health.get': (
    input: TiktokCheckAccountHealthGetInput,
    options?: CallOptions,
  ) => Promise<TiktokCheckAccountHealthGetOutput>;
  /** TikTok Discover Users from Comments — Mine unique commenters from a video for lead discovery. No auth needed. Returns user profiles from comment threads. */
  'tiktok-discover-users.post': (
    input: TiktokDiscoverUsersPostInput,
    options?: CallOptions,
  ) => Promise<TiktokDiscoverUsersPostOutput>;
  /** TikTok Get Comment Replies — Get the replies under a single TikTok comment, with each replier's handle and profile info. No auth needed. Paginated by cursor. */
  'tiktok-get-comment-replies.get': (
    input: TiktokGetCommentRepliesGetInput,
    options?: CallOptions,
  ) => Promise<TiktokGetCommentRepliesGetOutput>;
  /** TikTok Get Comments — Get comments on a video with commenter info. No auth needed. Supports pagination via cursor. */
  'tiktok-get-comments.post': (
    input: TiktokGetCommentsPostInput,
    options?: CallOptions,
  ) => Promise<TiktokGetCommentsPostOutput>;
  /** TikTok Get User Profile — Get full user profile (bio, stats, verified status) via SSR scraping. No auth needed. */
  'tiktok-get-user-profile.post': (
    input: TiktokGetUserProfilePostInput,
    options?: CallOptions,
  ) => Promise<TiktokGetUserProfilePostOutput>;
  /** TikTok Get Video Detail — Get full video metadata (description, stats, author, music) via SSR scraping. No auth needed. */
  'tiktok-get-video-detail.post': (
    input: TiktokGetVideoDetailPostInput,
    options?: CallOptions,
  ) => Promise<TiktokGetVideoDetailPostOutput>;
  /** TikTok Get Video By Id — Full video metadata (description, hashtags, play/like/comment counts, author and author follower stats) from a video id alone — no author handle needed, no auth. */
  'tiktok-get-video-embed.get': (
    input: TiktokGetVideoEmbedGetInput,
    options?: CallOptions,
  ) => Promise<TiktokGetVideoEmbedGetOutput>;
  /** TikTok oEmbed Lookup — Resolve any TikTok profile or video URL to its title, author and thumbnail via TikTok's public oEmbed endpoint. No auth, no signing. */
  'tiktok-oembed.get': (
    input: TiktokOembedGetInput,
    options?: CallOptions,
  ) => Promise<TiktokOembedGetOutput>;
  /** Look Up Timezone — Resolve a lat/long to its IANA timezone, country, current local time, UTC offset (with DST detection), and standard offset. Uses the free timeapi.io. */
  'timezone-lookup.get': (
    input: TimezoneLookupGetInput,
    options?: CallOptions,
  ) => Promise<TimezoneLookupGetOutput>;
  /** Translate Text — Translate short text (<=500 chars) between language codes via MyMemory Translated. Free tier is 5,000 words/day shared across callers; no auth required. */
  'translate-text.get': (
    input: TranslateTextGetInput,
    options?: CallOptions,
  ) => Promise<TranslateTextGetOutput>;
  /** Get Upwork Job Details — Read one Upwork job posting in full: the complete description, required skills, budget, how many freelancers have applied and been interviewed, and the client's country, rating, hire count and total spend. Accepts the job ciphertext or the job URL. Reads Upwork's public visitor surface — no Upwork account is required. */
  'upwork-jobs-detail.get': (
    input: UpworkJobsDetailGetInput,
    options?: CallOptions,
  ) => Promise<UpworkJobsDetailGetOutput>;
  /** Search Upwork Jobs — Search Upwork job postings by keyword. Returns title, description, contract type, budget, publish time and the job reference you pass to upwork-jobs-detail. Reads Upwork's public visitor surface — no Upwork account or cookie is required. */
  'upwork-jobs-search.get': (
    input: UpworkJobsSearchGetInput,
    options?: CallOptions,
  ) => Promise<UpworkJobsSearchGetOutput>;
  /** Get Current Weather — Current temperature, humidity, wind, precipitation, and condition code at the given lat/long via Open-Meteo (free, no auth). Metric or imperial units. */
  'weather-current.get': (
    input: WeatherCurrentGetInput,
    options?: CallOptions,
  ) => Promise<WeatherCurrentGetOutput>;
  /** Web Search — Search the web and get structured results (titles, URLs, snippets). DuckDuckGo-backed — no browser, no CAPTCHA, fast. */
  'web-search.post': (
    input: WebSearchPostInput,
    options?: CallOptions,
  ) => Promise<WebSearchPostOutput>;
  /** Wellfound Application Modal — Read a Wellfound listing's application modal: its screening questions with option ids, whether this account has already applied, and the qualification report. Read-only, and the intended step immediately before wellfound-apply. Requires an authenticated session blob from wellfound-login. */
  'wellfound-application-modal.post': (
    input: WellfoundApplicationModalPostInput,
    options?: CallOptions,
  ) => Promise<WellfoundApplicationModalPostOutput>;
  /** Wellfound Browse Jobs — Browse public Wellfound job listings through the anonymous SEO GraphQL search: job id, slug, title, compensation, equity, locations, full description and the hiring company, with deep pagination. No login. Takes a blob from wellfound-public-session and must run on the exit that minted it. Company funding fields are empty on anonymous results; use wellfound-company-overview for those. */
  'wellfound-browse-jobs.post': (
    input: WellfoundBrowseJobsPostInput,
    options?: CallOptions,
  ) => Promise<WellfoundBrowseJobsPostOutput>;
  /** Wellfound Company Overview — Fetch a Wellfound company overview: product description, headcount band, total raised, market and location tags, and the website, LinkedIn, X and blog links. Read-only, and works with an anonymous session from wellfound-public-session. */
  'wellfound-company-overview.post': (
    input: WellfoundCompanyOverviewPostInput,
    options?: CallOptions,
  ) => Promise<WellfoundCompanyOverviewPostOutput>;
  /** Wellfound Conversation Detail — Fetch one Wellfound recruiter conversation with its full message history. Takes the bare conversation modelId from wellfound-list-conversations. Read-only. Requires an authenticated session blob from wellfound-login. */
  'wellfound-conversation-detail.post': (
    input: WellfoundConversationDetailPostInput,
    options?: CallOptions,
  ) => Promise<WellfoundConversationDetailPostOutput>;
  /** Wellfound Job Detail — Fetch one Wellfound job listing in full (description, skills, compensation, equity, remote configuration, locations) together with the hiring company, including funding stage and total raised. Read-only, and works with an anonymous session from wellfound-public-session. An expired or removed listing is reported as such rather than returned as an empty job. */
  'wellfound-job-detail.post': (
    input: WellfoundJobDetailPostInput,
    options?: CallOptions,
  ) => Promise<WellfoundJobDetailPostOutput>;
  /** Wellfound List Applications — List one page of the signed-in candidate's Wellfound job applications, each with its status, the listing and the company. The response carries no page info, so a page with no new applications means the end. Read-only. Requires an authenticated session blob from wellfound-login. */
  'wellfound-list-applications.post': (
    input: WellfoundListApplicationsPostInput,
    options?: CallOptions,
  ) => Promise<WellfoundListApplicationsPostOutput>;
  /** Wellfound List Conversations — List the signed-in candidate's Wellfound recruiter conversations with the company, the unread flag and the latest message in each thread. Read-only. Requires an authenticated session blob from wellfound-login. */
  'wellfound-list-conversations.post': (
    input: WellfoundListConversationsPostInput,
    options?: CallOptions,
  ) => Promise<WellfoundListConversationsPostOutput>;
  /** Wellfound Pipeline Stats — Fetch the signed-in candidate's Wellfound pipeline counts: interested, matched, messages and saved listings. Read-only. Requires an authenticated session blob from wellfound-login and the viewer id from wellfound-viewer. */
  'wellfound-pipeline-stats.post': (
    input: WellfoundPipelineStatsPostInput,
    options?: CallOptions,
  ) => Promise<WellfoundPipelineStatsPostOutput>;
  /** Wellfound Public Session — Mint an anonymous Wellfound browsing session (DataDome cookie, Apollo signature and persisted-query map) with no credentials and no account. Returns an opaque blob for the Wellfound read operations. The blob is bound to the exit IP that minted it: pass the same proxyUrl to every call in a chain, or omit it on all of them. */
  'wellfound-public-session.post': (
    input: WellfoundPublicSessionPostInput,
    options?: CallOptions,
  ) => Promise<WellfoundPublicSessionPostOutput>;
  /** Wellfound Refresh Operations — Re-scan Wellfound's public JS bundle for the current Apollo signature and persisted-query op-id map after a frontend deploy, and return the session blob with that material refreshed. No login and no credentials. A Wellfound deploy invalidates every persisted-query hash at once and looks identical to an expired session, so run this before concluding a session died. */
  'wellfound-refresh-ops.post': (
    input: WellfoundRefreshOpsPostInput,
    options?: CallOptions,
  ) => Promise<WellfoundRefreshOpsPostOutput>;
  /** Wellfound Search Jobs — Search Wellfound job listings as a signed-in candidate, with role, skill, job-type, remote-preference and location filters, and an already-applied flag per listing. Read-only. Requires an authenticated session blob from wellfound-login; for public browsing with no account use wellfound-browse-jobs. */
  'wellfound-search-jobs.post': (
    input: WellfoundSearchJobsPostInput,
    options?: CallOptions,
  ) => Promise<WellfoundSearchJobsPostOutput>;
  /** Wellfound Viewer — Fetch the signed-in Wellfound viewer: user id, whether the account may still apply to jobs, candidate state and analytics traits. The cheapest way to check that a session is alive and the account is unrestricted. Read-only. Requires an authenticated session blob from wellfound-login. */
  'wellfound-viewer.post': (
    input: WellfoundViewerPostInput,
    options?: CallOptions,
  ) => Promise<WellfoundViewerPostOutput>;
  /** Get Wikipedia Article Summary — Fetch a Wikipedia article summary (description + extract + thumbnail + coordinates) from any supported language via the public REST API. */
  'wikipedia-article.get': (
    input: WikipediaArticleGetInput,
    options?: CallOptions,
  ) => Promise<WikipediaArticleGetOutput>;
};

export function buildOperations(client: UpAPI): Operations {
  return {
    'archive-wayback.get': (input, options) =>
      client.call<ArchiveWaybackGetOutput, ArchiveWaybackGetInput>(
        'archive-wayback.get',
        input,
        options,
      ),
    'audio-transcribe-result.get': (input, options) =>
      client.call<AudioTranscribeResultGetOutput, AudioTranscribeResultGetInput>(
        'audio-transcribe-result.get',
        input,
        options,
      ),
    'audio-transcribe.post': (input, options) =>
      client.call<AudioTranscribePostOutput, AudioTranscribePostInput>(
        'audio-transcribe.post',
        input,
        options,
      ),
    'bbc-news.get': (input, options) =>
      client.call<BbcNewsGetOutput, BbcNewsGetInput>('bbc-news.get', input, options),
    'bluesky-profile.get': (input, options) =>
      client.call<BlueskyProfileGetOutput, BlueskyProfileGetInput>(
        'bluesky-profile.get',
        input,
        options,
      ),
    'chatous-check-session.get': (input, options) =>
      client.call<ChatousCheckSessionGetOutput, ChatousCheckSessionGetInput>(
        'chatous-check-session.get',
        input,
        options,
      ),
    'chatous-get-account-state.get': (input, options) =>
      client.call<ChatousGetAccountStateGetOutput, ChatousGetAccountStateGetInput>(
        'chatous-get-account-state.get',
        input,
        options,
      ),
    'chatous-poll-events.get': (input, options) =>
      client.call<ChatousPollEventsGetOutput, ChatousPollEventsGetInput>(
        'chatous-poll-events.get',
        input,
        options,
      ),
    'cloudflare-page-title.get': (input, options) =>
      client.call<CloudflarePageTitleGetOutput, CloudflarePageTitleGetInput>(
        'cloudflare-page-title.get',
        input,
        options,
      ),
    'contra-company-profile.get': (input, options) =>
      client.call<ContraCompanyProfileGetOutput, ContraCompanyProfileGetInput>(
        'contra-company-profile.get',
        input,
        options,
      ),
    'contra-discover-people.get': (input, options) =>
      client.call<ContraDiscoverPeopleGetOutput, ContraDiscoverPeopleGetInput>(
        'contra-discover-people.get',
        input,
        options,
      ),
    'contra-job-detail.get': (input, options) =>
      client.call<ContraJobDetailGetOutput, ContraJobDetailGetInput>(
        'contra-job-detail.get',
        input,
        options,
      ),
    'crypto-price.get': (input, options) =>
      client.call<CryptoPriceGetOutput, CryptoPriceGetInput>('crypto-price.get', input, options),
    'currency-convert.get': (input, options) =>
      client.call<CurrencyConvertGetOutput, CurrencyConvertGetInput>(
        'currency-convert.get',
        input,
        options,
      ),
    'detect-tech-stack.post': (input, options) =>
      client.call<DetectTechStackPostOutput, DetectTechStackPostInput>(
        'detect-tech-stack.post',
        input,
        options,
      ),
    'devto-articles-search.get': (input, options) =>
      client.call<DevtoArticlesSearchGetOutput, DevtoArticlesSearchGetInput>(
        'devto-articles-search.get',
        input,
        options,
      ),
    'email-read-verification-code.post': (input, options) =>
      client.call<EmailReadVerificationCodePostOutput, EmailReadVerificationCodePostInput>(
        'email-read-verification-code.post',
        input,
        options,
      ),
    'email-read-verification-link.post': (input, options) =>
      client.call<EmailReadVerificationLinkPostOutput, EmailReadVerificationLinkPostInput>(
        'email-read-verification-link.post',
        input,
        options,
      ),
    'fetch-markdown.post': (input, options) =>
      client.call<FetchMarkdownPostOutput, FetchMarkdownPostInput>(
        'fetch-markdown.post',
        input,
        options,
      ),
    'github-issue-comments.get': (input, options) =>
      client.call<GithubIssueCommentsGetOutput, GithubIssueCommentsGetInput>(
        'github-issue-comments.get',
        input,
        options,
      ),
    'github-repo-contributors.get': (input, options) =>
      client.call<GithubRepoContributorsGetOutput, GithubRepoContributorsGetInput>(
        'github-repo-contributors.get',
        input,
        options,
      ),
    'github-repo-issues.get': (input, options) =>
      client.call<GithubRepoIssuesGetOutput, GithubRepoIssuesGetInput>(
        'github-repo-issues.get',
        input,
        options,
      ),
    'github-repo.get': (input, options) =>
      client.call<GithubRepoGetOutput, GithubRepoGetInput>('github-repo.get', input, options),
    'github-search-discussions.get': (input, options) =>
      client.call<GithubSearchDiscussionsGetOutput, GithubSearchDiscussionsGetInput>(
        'github-search-discussions.get',
        input,
        options,
      ),
    'github-search-issues.get': (input, options) =>
      client.call<GithubSearchIssuesGetOutput, GithubSearchIssuesGetInput>(
        'github-search-issues.get',
        input,
        options,
      ),
    'github-search-repos.get': (input, options) =>
      client.call<GithubSearchReposGetOutput, GithubSearchReposGetInput>(
        'github-search-repos.get',
        input,
        options,
      ),
    'github-search-users.get': (input, options) =>
      client.call<GithubSearchUsersGetOutput, GithubSearchUsersGetInput>(
        'github-search-users.get',
        input,
        options,
      ),
    'github-trending.get': (input, options) =>
      client.call<GithubTrendingGetOutput, GithubTrendingGetInput>(
        'github-trending.get',
        input,
        options,
      ),
    'github-user-emails.get': (input, options) =>
      client.call<GithubUserEmailsGetOutput, GithubUserEmailsGetInput>(
        'github-user-emails.get',
        input,
        options,
      ),
    'github-user.get': (input, options) =>
      client.call<GithubUserGetOutput, GithubUserGetInput>('github-user.get', input, options),
    'google-autocomplete.post': (input, options) =>
      client.call<GoogleAutocompletePostOutput, GoogleAutocompletePostInput>(
        'google-autocomplete.post',
        input,
        options,
      ),
    'google-maps-place.get': (input, options) =>
      client.call<GoogleMapsPlaceGetOutput, GoogleMapsPlaceGetInput>(
        'google-maps-place.get',
        input,
        options,
      ),
    'google-maps-reviews.get': (input, options) =>
      client.call<GoogleMapsReviewsGetOutput, GoogleMapsReviewsGetInput>(
        'google-maps-reviews.get',
        input,
        options,
      ),
    'google-maps-search.post': (input, options) =>
      client.call<GoogleMapsSearchPostOutput, GoogleMapsSearchPostInput>(
        'google-maps-search.post',
        input,
        options,
      ),
    'hackernews-search.get': (input, options) =>
      client.call<HackernewsSearchGetOutput, HackernewsSearchGetInput>(
        'hackernews-search.get',
        input,
        options,
      ),
    'html-to-pdf.post': (input, options) =>
      client.call<HtmlToPdfPostOutput, HtmlToPdfPostInput>('html-to-pdf.post', input, options),
    'image-ocr.post': (input, options) =>
      client.call<ImageOcrPostOutput, ImageOcrPostInput>('image-ocr.post', input, options),
    'instagram-check-account-health.get': (input, options) =>
      client.call<InstagramCheckAccountHealthGetOutput, InstagramCheckAccountHealthGetInput>(
        'instagram-check-account-health.get',
        input,
        options,
      ),
    'instagram-check-account.post': (input, options) =>
      client.call<InstagramCheckAccountPostOutput, InstagramCheckAccountPostInput>(
        'instagram-check-account.post',
        input,
        options,
      ),
    'instagram-discover-location.post': (input, options) =>
      client.call<InstagramDiscoverLocationPostOutput, InstagramDiscoverLocationPostInput>(
        'instagram-discover-location.post',
        input,
        options,
      ),
    'instagram-get-post-commenters.post': (input, options) =>
      client.call<InstagramGetPostCommentersPostOutput, InstagramGetPostCommentersPostInput>(
        'instagram-get-post-commenters.post',
        input,
        options,
      ),
    'instagram-get-post-info.post': (input, options) =>
      client.call<InstagramGetPostInfoPostOutput, InstagramGetPostInfoPostInput>(
        'instagram-get-post-info.post',
        input,
        options,
      ),
    'instagram-get-user-by-id.post': (input, options) =>
      client.call<InstagramGetUserByIdPostOutput, InstagramGetUserByIdPostInput>(
        'instagram-get-user-by-id.post',
        input,
        options,
      ),
    'instagram-get-user-posts.post': (input, options) =>
      client.call<InstagramGetUserPostsPostOutput, InstagramGetUserPostsPostInput>(
        'instagram-get-user-posts.post',
        input,
        options,
      ),
    'instagram-get-user-profile.post': (input, options) =>
      client.call<InstagramGetUserProfilePostOutput, InstagramGetUserProfilePostInput>(
        'instagram-get-user-profile.post',
        input,
        options,
      ),
    'ip-geolocation.get': (input, options) =>
      client.call<IpGeolocationGetOutput, IpGeolocationGetInput>(
        'ip-geolocation.get',
        input,
        options,
      ),
    'linkedin-check-account-health.post': (input, options) =>
      client.call<LinkedinCheckAccountHealthPostOutput, LinkedinCheckAccountHealthPostInput>(
        'linkedin-check-account-health.post',
        input,
        options,
      ),
    'linkedin-get-profile.post': (input, options) =>
      client.call<LinkedinGetProfilePostOutput, LinkedinGetProfilePostInput>(
        'linkedin-get-profile.post',
        input,
        options,
      ),
    'linkedin-jobs-detail.get': (input, options) =>
      client.call<LinkedinJobsDetailGetOutput, LinkedinJobsDetailGetInput>(
        'linkedin-jobs-detail.get',
        input,
        options,
      ),
    'linkedin-jobs-search.get': (input, options) =>
      client.call<LinkedinJobsSearchGetOutput, LinkedinJobsSearchGetInput>(
        'linkedin-jobs-search.get',
        input,
        options,
      ),
    'linkedin-profile-search.post': (input, options) =>
      client.call<LinkedinProfileSearchPostOutput, LinkedinProfileSearchPostInput>(
        'linkedin-profile-search.post',
        input,
        options,
      ),
    'mastodon-profile.get': (input, options) =>
      client.call<MastodonProfileGetOutput, MastodonProfileGetInput>(
        'mastodon-profile.get',
        input,
        options,
      ),
    'nasa-apod.get': (input, options) =>
      client.call<NasaApodGetOutput, NasaApodGetInput>('nasa-apod.get', input, options),
    'npm-package.get': (input, options) =>
      client.call<NpmPackageGetOutput, NpmPackageGetInput>('npm-package.get', input, options),
    'opengraph-parse.get': (input, options) =>
      client.call<OpengraphParseGetOutput, OpengraphParseGetInput>(
        'opengraph-parse.get',
        input,
        options,
      ),
    'pdf-extract-text.post': (input, options) =>
      client.call<PdfExtractTextPostOutput, PdfExtractTextPostInput>(
        'pdf-extract-text.post',
        input,
        options,
      ),
    'pokeapi-pokemon.get': (input, options) =>
      client.call<PokeapiPokemonGetOutput, PokeapiPokemonGetInput>(
        'pokeapi-pokemon.get',
        input,
        options,
      ),
    'pypi-package.get': (input, options) =>
      client.call<PypiPackageGetOutput, PypiPackageGetInput>('pypi-package.get', input, options),
    'reddit-check-account-health.get': (input, options) =>
      client.call<RedditCheckAccountHealthGetOutput, RedditCheckAccountHealthGetInput>(
        'reddit-check-account-health.get',
        input,
        options,
      ),
    'reddit-check-comment-visibility.get': (input, options) =>
      client.call<RedditCheckCommentVisibilityGetOutput, RedditCheckCommentVisibilityGetInput>(
        'reddit-check-comment-visibility.get',
        input,
        options,
      ),
    'reddit-get-trending.get': (input, options) =>
      client.call<RedditGetTrendingGetOutput, RedditGetTrendingGetInput>(
        'reddit-get-trending.get',
        input,
        options,
      ),
    'reddit-oauth-me.get': (input, options) =>
      client.call<RedditOauthMeGetOutput, RedditOauthMeGetInput>(
        'reddit-oauth-me.get',
        input,
        options,
      ),
    'reddit-oauth-post-comment.post': (input, options) =>
      client.call<RedditOauthPostCommentPostOutput, RedditOauthPostCommentPostInput>(
        'reddit-oauth-post-comment.post',
        input,
        options,
      ),
    'reddit-scrape-post.get': (input, options) =>
      client.call<RedditScrapePostGetOutput, RedditScrapePostGetInput>(
        'reddit-scrape-post.get',
        input,
        options,
      ),
    'reddit-search-posts.get': (input, options) =>
      client.call<RedditSearchPostsGetOutput, RedditSearchPostsGetInput>(
        'reddit-search-posts.get',
        input,
        options,
      ),
    'reddit-subreddit-info.get': (input, options) =>
      client.call<RedditSubredditInfoGetOutput, RedditSubredditInfoGetInput>(
        'reddit-subreddit-info.get',
        input,
        options,
      ),
    'screenshot.post': (input, options) =>
      client.call<ScreenshotPostOutput, ScreenshotPostInput>('screenshot.post', input, options),
    'sitemap-parse.get': (input, options) =>
      client.call<SitemapParseGetOutput, SitemapParseGetInput>('sitemap-parse.get', input, options),
    'stackexchange-search.get': (input, options) =>
      client.call<StackexchangeSearchGetOutput, StackexchangeSearchGetInput>(
        'stackexchange-search.get',
        input,
        options,
      ),
    'text-analyze.post': (input, options) =>
      client.call<TextAnalyzePostOutput, TextAnalyzePostInput>('text-analyze.post', input, options),
    'tiktok-check-account-health.get': (input, options) =>
      client.call<TiktokCheckAccountHealthGetOutput, TiktokCheckAccountHealthGetInput>(
        'tiktok-check-account-health.get',
        input,
        options,
      ),
    'tiktok-discover-users.post': (input, options) =>
      client.call<TiktokDiscoverUsersPostOutput, TiktokDiscoverUsersPostInput>(
        'tiktok-discover-users.post',
        input,
        options,
      ),
    'tiktok-get-comment-replies.get': (input, options) =>
      client.call<TiktokGetCommentRepliesGetOutput, TiktokGetCommentRepliesGetInput>(
        'tiktok-get-comment-replies.get',
        input,
        options,
      ),
    'tiktok-get-comments.post': (input, options) =>
      client.call<TiktokGetCommentsPostOutput, TiktokGetCommentsPostInput>(
        'tiktok-get-comments.post',
        input,
        options,
      ),
    'tiktok-get-user-profile.post': (input, options) =>
      client.call<TiktokGetUserProfilePostOutput, TiktokGetUserProfilePostInput>(
        'tiktok-get-user-profile.post',
        input,
        options,
      ),
    'tiktok-get-video-detail.post': (input, options) =>
      client.call<TiktokGetVideoDetailPostOutput, TiktokGetVideoDetailPostInput>(
        'tiktok-get-video-detail.post',
        input,
        options,
      ),
    'tiktok-get-video-embed.get': (input, options) =>
      client.call<TiktokGetVideoEmbedGetOutput, TiktokGetVideoEmbedGetInput>(
        'tiktok-get-video-embed.get',
        input,
        options,
      ),
    'tiktok-oembed.get': (input, options) =>
      client.call<TiktokOembedGetOutput, TiktokOembedGetInput>('tiktok-oembed.get', input, options),
    'timezone-lookup.get': (input, options) =>
      client.call<TimezoneLookupGetOutput, TimezoneLookupGetInput>(
        'timezone-lookup.get',
        input,
        options,
      ),
    'translate-text.get': (input, options) =>
      client.call<TranslateTextGetOutput, TranslateTextGetInput>(
        'translate-text.get',
        input,
        options,
      ),
    'upwork-jobs-detail.get': (input, options) =>
      client.call<UpworkJobsDetailGetOutput, UpworkJobsDetailGetInput>(
        'upwork-jobs-detail.get',
        input,
        options,
      ),
    'upwork-jobs-search.get': (input, options) =>
      client.call<UpworkJobsSearchGetOutput, UpworkJobsSearchGetInput>(
        'upwork-jobs-search.get',
        input,
        options,
      ),
    'weather-current.get': (input, options) =>
      client.call<WeatherCurrentGetOutput, WeatherCurrentGetInput>(
        'weather-current.get',
        input,
        options,
      ),
    'web-search.post': (input, options) =>
      client.call<WebSearchPostOutput, WebSearchPostInput>('web-search.post', input, options),
    'wellfound-application-modal.post': (input, options) =>
      client.call<WellfoundApplicationModalPostOutput, WellfoundApplicationModalPostInput>(
        'wellfound-application-modal.post',
        input,
        options,
      ),
    'wellfound-browse-jobs.post': (input, options) =>
      client.call<WellfoundBrowseJobsPostOutput, WellfoundBrowseJobsPostInput>(
        'wellfound-browse-jobs.post',
        input,
        options,
      ),
    'wellfound-company-overview.post': (input, options) =>
      client.call<WellfoundCompanyOverviewPostOutput, WellfoundCompanyOverviewPostInput>(
        'wellfound-company-overview.post',
        input,
        options,
      ),
    'wellfound-conversation-detail.post': (input, options) =>
      client.call<WellfoundConversationDetailPostOutput, WellfoundConversationDetailPostInput>(
        'wellfound-conversation-detail.post',
        input,
        options,
      ),
    'wellfound-job-detail.post': (input, options) =>
      client.call<WellfoundJobDetailPostOutput, WellfoundJobDetailPostInput>(
        'wellfound-job-detail.post',
        input,
        options,
      ),
    'wellfound-list-applications.post': (input, options) =>
      client.call<WellfoundListApplicationsPostOutput, WellfoundListApplicationsPostInput>(
        'wellfound-list-applications.post',
        input,
        options,
      ),
    'wellfound-list-conversations.post': (input, options) =>
      client.call<WellfoundListConversationsPostOutput, WellfoundListConversationsPostInput>(
        'wellfound-list-conversations.post',
        input,
        options,
      ),
    'wellfound-pipeline-stats.post': (input, options) =>
      client.call<WellfoundPipelineStatsPostOutput, WellfoundPipelineStatsPostInput>(
        'wellfound-pipeline-stats.post',
        input,
        options,
      ),
    'wellfound-public-session.post': (input, options) =>
      client.call<WellfoundPublicSessionPostOutput, WellfoundPublicSessionPostInput>(
        'wellfound-public-session.post',
        input,
        options,
      ),
    'wellfound-refresh-ops.post': (input, options) =>
      client.call<WellfoundRefreshOpsPostOutput, WellfoundRefreshOpsPostInput>(
        'wellfound-refresh-ops.post',
        input,
        options,
      ),
    'wellfound-search-jobs.post': (input, options) =>
      client.call<WellfoundSearchJobsPostOutput, WellfoundSearchJobsPostInput>(
        'wellfound-search-jobs.post',
        input,
        options,
      ),
    'wellfound-viewer.post': (input, options) =>
      client.call<WellfoundViewerPostOutput, WellfoundViewerPostInput>(
        'wellfound-viewer.post',
        input,
        options,
      ),
    'wikipedia-article.get': (input, options) =>
      client.call<WikipediaArticleGetOutput, WikipediaArticleGetInput>(
        'wikipedia-article.get',
        input,
        options,
      ),
  };
}
