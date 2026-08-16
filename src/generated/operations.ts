/**
 * GENERATED FILE — DO NOT EDIT.
 *
 * Produced by packages/sdk/scripts/generate.ts from the TS + Python operation
 * registries. Run `pnpm generate:sdk` after changing any operation; CI fails if
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
  CloudflarePageTitleGetInput,
  CloudflarePageTitleGetOutput,
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
  GithubRepoGetInput,
  GithubRepoGetOutput,
  GithubTrendingGetInput,
  GithubTrendingGetOutput,
  GithubUserGetInput,
  GithubUserGetOutput,
  GoogleAutocompletePostInput,
  GoogleAutocompletePostOutput,
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
  TiktokCheckAccountHealthGetInput,
  TiktokCheckAccountHealthGetOutput,
  TiktokDiscoverUsersPostInput,
  TiktokDiscoverUsersPostOutput,
  TiktokGetCommentsPostInput,
  TiktokGetCommentsPostOutput,
  TiktokGetUserProfilePostInput,
  TiktokGetUserProfilePostOutput,
  TiktokGetVideoDetailPostInput,
  TiktokGetVideoDetailPostOutput,
  TimezoneLookupGetInput,
  TimezoneLookupGetOutput,
  TranslateTextGetInput,
  TranslateTextGetOutput,
  WeatherCurrentGetInput,
  WeatherCurrentGetOutput,
  WebSearchPostInput,
  WebSearchPostOutput,
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
  /** Get Cloudflare Page Title — Fetch the <title> of a URL using curl-cffi with browser TLS impersonation. Handles sites that block plain-requests but allow browser-like TLS fingerprints. */
  'cloudflare-page-title.get': (
    input: CloudflarePageTitleGetInput,
    options?: CallOptions,
  ) => Promise<CloudflarePageTitleGetOutput>;
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
  /** Get GitHub Repository — Fetch metadata (stars, forks, topics, license, dates) for a public GitHub repository via the REST API. */
  'github-repo.get': (
    input: GithubRepoGetInput,
    options?: CallOptions,
  ) => Promise<GithubRepoGetOutput>;
  /** Get GitHub Trending Repositories — Fetch the github.com/trending page for the most-starred repos in a time window, optionally filtered by language. Pure HTTP (no browser). Returns full name, URL, description, language, total stars, stars this window, forks. */
  'github-trending.get': (
    input: GithubTrendingGetInput,
    options?: CallOptions,
  ) => Promise<GithubTrendingGetOutput>;
  /** Get GitHub User — Fetch a GitHub user or organization's public profile: name, bio, company, location, follower/repo counts, avatar, Twitter handle. */
  'github-user.get': (
    input: GithubUserGetInput,
    options?: CallOptions,
  ) => Promise<GithubUserGetOutput>;
  /** Google Autocomplete — Real Google search suggestions (autocomplete/suggest) via pure HTTP — no browser, no CAPTCHA. Set expand=true to mine long-tail keywords. */
  'google-autocomplete.post': (
    input: GoogleAutocompletePostInput,
    options?: CallOptions,
  ) => Promise<GoogleAutocompletePostOutput>;
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
  /** Get Trending Reddit Posts — Fetch trending, hot, rising, top, or new posts from any subreddit with pagination and time filtering. */
  'reddit-get-trending.get': (
    input: RedditGetTrendingGetInput,
    options?: CallOptions,
  ) => Promise<RedditGetTrendingGetOutput>;
  /** Scrape Reddit Post & Comments — Fetch a Reddit post with its comment tree. Returns post metadata, selftext, and nested comments with scores and authorship. */
  'reddit-scrape-post.get': (
    input: RedditScrapePostGetInput,
    options?: CallOptions,
  ) => Promise<RedditScrapePostGetOutput>;
  /** Search Reddit Posts — Search Reddit posts by keyword with subreddit filtering, sort, and time range. Returns structured post data including scores, comments count, and metadata. */
  'reddit-search-posts.get': (
    input: RedditSearchPostsGetInput,
    options?: CallOptions,
  ) => Promise<RedditSearchPostsGetOutput>;
  /** Get Subreddit Info — Fetch subreddit metadata: subscriber count, description, rules, active users, appearance settings. */
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
    'cloudflare-page-title.get': (input, options) =>
      client.call<CloudflarePageTitleGetOutput, CloudflarePageTitleGetInput>(
        'cloudflare-page-title.get',
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
    'github-repo.get': (input, options) =>
      client.call<GithubRepoGetOutput, GithubRepoGetInput>('github-repo.get', input, options),
    'github-trending.get': (input, options) =>
      client.call<GithubTrendingGetOutput, GithubTrendingGetInput>(
        'github-trending.get',
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
    'weather-current.get': (input, options) =>
      client.call<WeatherCurrentGetOutput, WeatherCurrentGetInput>(
        'weather-current.get',
        input,
        options,
      ),
    'web-search.post': (input, options) =>
      client.call<WebSearchPostOutput, WebSearchPostInput>('web-search.post', input, options),
    'wikipedia-article.get': (input, options) =>
      client.call<WikipediaArticleGetOutput, WikipediaArticleGetInput>(
        'wikipedia-article.get',
        input,
        options,
      ),
  };
}
