/**
 * GENERATED FILE — DO NOT EDIT.
 *
 * Produced by packages/sdk/scripts/generate.ts from the TS + Python operation
 * registries. Run `pnpm generate:sdk` after changing any operation; CI fails if
 * this file is out of date.
 */

/** One catalog entry: everything a caller or an MCP tool table needs about an op. */
export type OperationMeta = {
  slug: string;
  operationId: string;
  name: string;
  description: string;
  category: string;
  tags: readonly string[];
  workerLanguage: string;
  publishTargets: readonly string[];
  /** Weighted units one invocation spends against the monthly quota. */
  unitWeight: number;
  inputSchema: Record<string, unknown>;
  outputSchema: Record<string, unknown>;
};

/**
 * Every public operation slug, sorted. Kept as a separate `as const` array so
 * `OperationSlug` is a literal union WITHOUT `as const` on `OPERATIONS` — that
 * would inline every JSON Schema into the declaration file and bloat consumers'
 * type-checking for no gain.
 */
export const OPERATION_SLUGS = [
  'archive-wayback.get',
  'audio-transcribe-result.get',
  'audio-transcribe.post',
  'bbc-news.get',
  'bluesky-profile.get',
  'cloudflare-page-title.get',
  'crypto-price.get',
  'currency-convert.get',
  'detect-tech-stack.post',
  'devto-articles-search.get',
  'email-read-verification-code.post',
  'email-read-verification-link.post',
  'fetch-markdown.post',
  'github-repo.get',
  'github-trending.get',
  'github-user.get',
  'google-autocomplete.post',
  'hackernews-search.get',
  'html-to-pdf.post',
  'image-ocr.post',
  'instagram-check-account-health.get',
  'instagram-check-account.post',
  'instagram-discover-location.post',
  'instagram-get-post-commenters.post',
  'instagram-get-post-info.post',
  'instagram-get-user-posts.post',
  'instagram-get-user-profile.post',
  'ip-geolocation.get',
  'linkedin-check-account-health.post',
  'linkedin-get-profile.post',
  'linkedin-profile-search.post',
  'mastodon-profile.get',
  'nasa-apod.get',
  'npm-package.get',
  'opengraph-parse.get',
  'pdf-extract-text.post',
  'pokeapi-pokemon.get',
  'pypi-package.get',
  'reddit-check-account-health.get',
  'reddit-check-comment-visibility.get',
  'reddit-get-trending.get',
  'reddit-scrape-post.get',
  'reddit-search-posts.get',
  'reddit-subreddit-info.get',
  'screenshot.post',
  'sitemap-parse.get',
  'stackexchange-search.get',
  'tiktok-check-account-health.get',
  'tiktok-discover-users.post',
  'tiktok-get-comments.post',
  'tiktok-get-user-profile.post',
  'tiktok-get-video-detail.post',
  'timezone-lookup.get',
  'translate-text.get',
  'weather-current.get',
  'web-search.post',
  'wikipedia-article.get',
] as const;

export type OperationSlug = (typeof OPERATION_SLUGS)[number];

/**
 * Every PUBLIC operation (`publishTargets` includes `upapi`), sorted by slug.
 * Gated-private operations are deliberately absent — the gateway 404s them, so
 * listing them here would only advertise endpoints no key can reach.
 */
export const OPERATIONS: readonly OperationMeta[] = [
  {
    slug: 'archive-wayback.get',
    operationId: 'archive_wayback_get',
    name: 'Wayback Machine Lookup',
    description:
      'Find the closest Wayback Machine snapshot of a URL (optionally near a target timestamp). Returns the snapshot URL, its capture timestamp, and HTTP status.',
    category: 'Data',
    tags: ['wayback', 'archive', 'internet-archive', 'python'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 1,
    inputSchema: {
      properties: {
        url: {
          description: 'URL to look up in the Wayback Machine',
          format: 'uri',
          maxLength: 2083,
          minLength: 1,
          title: 'Url',
          type: 'string',
        },
        timestamp: {
          anyOf: [
            {
              maxLength: 14,
              minLength: 4,
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description:
            'Optional target time YYYYMMDDhhmmss (partial ok). Omit for the newest snapshot.',
          title: 'Timestamp',
        },
      },
      required: ['url'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        Snapshot: {
          properties: {
            url: {
              title: 'Url',
              type: 'string',
            },
            timestamp: {
              title: 'Timestamp',
              type: 'string',
            },
            takenAt: {
              title: 'Takenat',
              type: 'string',
            },
            status: {
              title: 'Status',
              type: 'integer',
            },
          },
          required: ['url', 'timestamp', 'takenAt', 'status'],
          title: 'Snapshot',
          type: 'object',
        },
      },
      properties: {
        queriedUrl: {
          title: 'Queriedurl',
          type: 'string',
        },
        found: {
          title: 'Found',
          type: 'boolean',
        },
        closest: {
          anyOf: [
            {
              $ref: '#/$defs/Snapshot',
            },
            {
              type: 'null',
            },
          ],
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
      },
      required: ['queriedUrl', 'found', 'closest', 'fetchedAt'],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'audio-transcribe-result.get',
    operationId: 'audio_transcribe_result_get',
    name: 'Get Transcription Result',
    description:
      'Fetch the result of a transcription started by audio-transcribe, using its jobId. Returns the finished transcript with time-coded segments, or the current progress while it is still running. Job ids are kept for 24 hours.',
    category: 'Media',
    tags: ['audio', 'video', 'transcribe', 'speech', 'polling', 'job'],
    workerLanguage: 'python',
    publishTargets: ['upapi'],
    unitWeight: 1,
    inputSchema: {
      properties: {
        jobId: {
          description: 'The jobId returned by audio-transcribe (e.g. upapi-3f9c1d2e4b5a…).',
          maxLength: 200,
          minLength: 1,
          title: 'Jobid',
          type: 'string',
        },
      },
      required: ['jobId'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        Segment: {
          properties: {
            start: {
              description: 'Segment start, seconds from the beginning',
              title: 'Start',
              type: 'number',
            },
            end: {
              description: 'Segment end, seconds from the beginning',
              title: 'End',
              type: 'number',
            },
            text: {
              title: 'Text',
              type: 'string',
            },
          },
          required: ['start', 'end', 'text'],
          title: 'Segment',
          type: 'object',
        },
      },
      properties: {
        status: {
          description:
            'completed once the transcript is ready; processing while it is still running',
          title: 'Status',
          type: 'string',
        },
        jobId: {
          description: 'Pass this to audio-transcribe-result.get to poll',
          title: 'Jobid',
          type: 'string',
        },
        text: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Full transcript; null until completed',
          title: 'Text',
        },
        segments: {
          anyOf: [
            {
              items: {
                $ref: '#/$defs/Segment',
              },
              type: 'array',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Time-coded segments; null until completed',
          title: 'Segments',
        },
        language: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Detected (or forced) language code; null until completed',
          title: 'Language',
        },
        durationSec: {
          anyOf: [
            {
              type: 'number',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Audio duration in seconds; null until completed',
          title: 'Durationsec',
        },
        progress: {
          default: 0,
          description: 'Progress percentage, 0-100',
          title: 'Progress',
          type: 'integer',
        },
        pollAfterSec: {
          anyOf: [
            {
              type: 'integer',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Seconds to wait before polling again; null once completed',
          title: 'Pollaftersec',
        },
      },
      required: ['status', 'jobId'],
      title: 'Transcript',
      type: 'object',
    },
  },
  {
    slug: 'audio-transcribe.post',
    operationId: 'audio_transcribe_post',
    name: 'Transcribe Audio or Video',
    description:
      'Transcribe speech from an audio or video URL, with time-coded segments and automatic language detection. Short clips come back in the same call; longer ones return a jobId to poll with audio-transcribe-result. GPU Whisper, up to two hours per file.',
    category: 'Media',
    tags: ['audio', 'video', 'transcribe', 'speech', 'whisper', 'subtitles'],
    workerLanguage: 'python',
    publishTargets: ['upapi'],
    unitWeight: 10,
    inputSchema: {
      properties: {
        url: {
          description:
            'Public URL of the audio or video to transcribe (e.g. https://example.com/interview.mp3). Up to 2 hours long.',
          format: 'uri',
          maxLength: 2048,
          minLength: 1,
          title: 'Url',
          type: 'string',
          'x-upapi-upload': true,
        },
        language: {
          anyOf: [
            {
              maxLength: 16,
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Spoken-language hint as an ISO code (e.g. en). Omit to auto-detect.',
          title: 'Language',
        },
      },
      required: ['url'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        Segment: {
          properties: {
            start: {
              description: 'Segment start, seconds from the beginning',
              title: 'Start',
              type: 'number',
            },
            end: {
              description: 'Segment end, seconds from the beginning',
              title: 'End',
              type: 'number',
            },
            text: {
              title: 'Text',
              type: 'string',
            },
          },
          required: ['start', 'end', 'text'],
          title: 'Segment',
          type: 'object',
        },
      },
      properties: {
        status: {
          description:
            'completed once the transcript is ready; processing while it is still running',
          title: 'Status',
          type: 'string',
        },
        jobId: {
          description: 'Pass this to audio-transcribe-result.get to poll',
          title: 'Jobid',
          type: 'string',
        },
        text: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Full transcript; null until completed',
          title: 'Text',
        },
        segments: {
          anyOf: [
            {
              items: {
                $ref: '#/$defs/Segment',
              },
              type: 'array',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Time-coded segments; null until completed',
          title: 'Segments',
        },
        language: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Detected (or forced) language code; null until completed',
          title: 'Language',
        },
        durationSec: {
          anyOf: [
            {
              type: 'number',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Audio duration in seconds; null until completed',
          title: 'Durationsec',
        },
        progress: {
          default: 0,
          description: 'Progress percentage, 0-100',
          title: 'Progress',
          type: 'integer',
        },
        pollAfterSec: {
          anyOf: [
            {
              type: 'integer',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Seconds to wait before polling again; null once completed',
          title: 'Pollaftersec',
        },
      },
      required: ['status', 'jobId'],
      title: 'Transcript',
      type: 'object',
    },
  },
  {
    slug: 'bbc-news.get',
    operationId: 'bbc_news_get',
    name: 'Get BBC News Headlines',
    description:
      'Fetch headlines from a BBC section (news / world / business / technology / science-environment / entertainment-arts / sport) via the official BBC RSS feeds. Pure HTTP (no browser). Returns title, article URL, and summary for each headline.',
    category: 'Data',
    tags: ['bbc', 'news', 'headlines', 'rss'],
    workerLanguage: 'ts',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 1,
    inputSchema: {
      type: 'object',
      properties: {
        section: {
          type: 'string',
          enum: [
            'news',
            'world',
            'business',
            'technology',
            'science-environment',
            'entertainment-arts',
            'sport',
          ],
          default: 'news',
          description: 'BBC section slug',
        },
        limit: {
          type: 'integer',
          minimum: 1,
          maximum: 50,
          default: 15,
          description: 'Max headlines to return',
        },
      },
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#',
    },
    outputSchema: {
      type: 'object',
      properties: {
        section: {
          type: 'string',
        },
        url: {
          type: 'string',
          format: 'uri',
        },
        totalCount: {
          type: 'integer',
          minimum: 0,
        },
        headlines: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              position: {
                type: 'integer',
                exclusiveMinimum: 0,
              },
              title: {
                type: 'string',
              },
              url: {
                type: 'string',
                format: 'uri',
              },
              summary: {
                type: 'string',
              },
            },
            required: ['position', 'title', 'url', 'summary'],
            additionalProperties: false,
          },
        },
        fetchedAt: {
          type: 'string',
        },
      },
      required: ['section', 'url', 'totalCount', 'headlines', 'fetchedAt'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#',
    },
  },
  {
    slug: 'bluesky-profile.get',
    operationId: 'bluesky_profile_get',
    name: 'Get Bluesky Profile',
    description:
      'Fetch a Bluesky (AT Protocol) profile by handle or DID. Returns display name, description, avatar/banner, follower and post counts, labels, and DID. Uses the public AppView - no auth required.',
    category: 'Social Media',
    tags: ['bluesky', 'atproto', 'social', 'python'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 1,
    inputSchema: {
      properties: {
        handle: {
          description: 'Bluesky handle (e.g. bsky.app) or DID (did:plc:...)',
          maxLength: 253,
          minLength: 1,
          title: 'Handle',
          type: 'string',
        },
      },
      required: ['handle'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      properties: {
        did: {
          title: 'Did',
          type: 'string',
        },
        handle: {
          title: 'Handle',
          type: 'string',
        },
        displayName: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Displayname',
        },
        description: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Description',
        },
        avatar: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Avatar',
        },
        banner: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Banner',
        },
        followersCount: {
          title: 'Followerscount',
          type: 'integer',
        },
        followsCount: {
          title: 'Followscount',
          type: 'integer',
        },
        postsCount: {
          title: 'Postscount',
          type: 'integer',
        },
        indexedAt: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Indexedat',
        },
        associated: {
          anyOf: [
            {
              additionalProperties: true,
              type: 'object',
            },
            {
              type: 'null',
            },
          ],
          title: 'Associated',
        },
        labels: {
          items: {
            type: 'string',
          },
          title: 'Labels',
          type: 'array',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
      },
      required: [
        'did',
        'handle',
        'displayName',
        'description',
        'avatar',
        'banner',
        'followersCount',
        'followsCount',
        'postsCount',
        'indexedAt',
        'associated',
        'labels',
        'fetchedAt',
      ],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'cloudflare-page-title.get',
    operationId: 'cloudflare_page_title_get',
    name: 'Get Cloudflare Page Title',
    description:
      'Fetch the <title> of a URL using curl-cffi with browser TLS impersonation. Handles sites that block plain-requests but allow browser-like TLS fingerprints.',
    category: 'Tools',
    tags: ['cloudflare', 'scraping', 'anti-bot', 'python', 'curl-cffi'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 1,
    inputSchema: {
      properties: {
        url: {
          description: 'URL to fetch',
          format: 'uri',
          maxLength: 2083,
          minLength: 1,
          title: 'Url',
          type: 'string',
        },
        impersonate: {
          default: 'chrome131',
          description: 'curl-cffi browser profile',
          title: 'Impersonate',
          type: 'string',
        },
      },
      required: ['url'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      properties: {
        url: {
          title: 'Url',
          type: 'string',
        },
        status: {
          title: 'Status',
          type: 'integer',
        },
        title: {
          title: 'Title',
          type: 'string',
        },
        server: {
          title: 'Server',
          type: 'string',
        },
        fetched_with: {
          title: 'Fetched With',
          type: 'string',
        },
      },
      required: ['url', 'status', 'title', 'server', 'fetched_with'],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'crypto-price.get',
    operationId: 'crypto_price_get',
    name: 'Get Crypto Prices',
    description:
      "Current crypto prices (+ optional market cap and 24h change) for one or more coins across fiat or crypto quote currencies via CoinGecko's free simple-price endpoint.",
    category: 'Finance',
    tags: ['crypto', 'price', 'coingecko', 'python'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 1,
    inputSchema: {
      properties: {
        coins: {
          description: 'Comma-separated CoinGecko coin ids (e.g. bitcoin,ethereum,solana)',
          maxLength: 500,
          minLength: 1,
          title: 'Coins',
          type: 'string',
        },
        vsCurrencies: {
          default: 'usd',
          description: 'Comma-separated fiat/crypto quote currencies (e.g. usd,eur,btc)',
          maxLength: 200,
          minLength: 3,
          title: 'Vscurrencies',
          type: 'string',
        },
        includeMarketCap: {
          default: true,
          title: 'Includemarketcap',
          type: 'boolean',
        },
        include24hChange: {
          default: true,
          title: 'Include24Hchange',
          type: 'boolean',
        },
      },
      required: ['coins'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      properties: {
        prices: {
          additionalProperties: {
            additionalProperties: {
              anyOf: [
                {
                  type: 'number',
                },
                {
                  type: 'null',
                },
              ],
            },
            type: 'object',
          },
          title: 'Prices',
          type: 'object',
        },
        marketCaps: {
          additionalProperties: {
            additionalProperties: {
              anyOf: [
                {
                  type: 'number',
                },
                {
                  type: 'null',
                },
              ],
            },
            type: 'object',
          },
          title: 'Marketcaps',
          type: 'object',
        },
        change24h: {
          additionalProperties: {
            additionalProperties: {
              anyOf: [
                {
                  type: 'number',
                },
                {
                  type: 'null',
                },
              ],
            },
            type: 'object',
          },
          title: 'Change24H',
          type: 'object',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
      },
      required: ['prices', 'marketCaps', 'change24h', 'fetchedAt'],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'currency-convert.get',
    operationId: 'currency_convert_get',
    name: 'Convert Currency',
    description:
      'Convert a fiat amount across one or more target currencies using ECB daily reference rates via Frankfurter. Returns both unit rates and the converted amounts.',
    category: 'Finance',
    tags: ['currency', 'forex', 'fx', 'ecb', 'python'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 1,
    inputSchema: {
      properties: {
        amount: {
          default: 1,
          description: 'Amount of the base currency to convert',
          exclusiveMinimum: 0,
          title: 'Amount',
          type: 'number',
        },
        base: {
          description: 'ISO-4217 base currency code (e.g. USD)',
          maxLength: 3,
          minLength: 3,
          title: 'Base',
          type: 'string',
        },
        targets: {
          description: 'Comma-separated ISO-4217 target currency codes (e.g. EUR,GBP,JPY)',
          maxLength: 200,
          minLength: 3,
          title: 'Targets',
          type: 'string',
        },
      },
      required: ['base', 'targets'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      properties: {
        amount: {
          title: 'Amount',
          type: 'number',
        },
        base: {
          title: 'Base',
          type: 'string',
        },
        date: {
          title: 'Date',
          type: 'string',
        },
        rates: {
          additionalProperties: {
            type: 'number',
          },
          title: 'Rates',
          type: 'object',
        },
        converted: {
          additionalProperties: {
            type: 'number',
          },
          title: 'Converted',
          type: 'object',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
      },
      required: ['amount', 'base', 'date', 'rates', 'converted', 'fetchedAt'],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'detect-tech-stack.post',
    operationId: 'detect_tech_stack_post',
    name: 'Detect Website Tech Stack',
    description:
      'Analyze any website to detect its technology stack — frameworks (Next.js, Nuxt, WordPress, Shopify), hosting (Vercel, Netlify, AWS), analytics (GA, Plausible, Segment), CDNs, CSS frameworks, payment providers, and more. Uses HTTP headers, HTML patterns, and script analysis.',
    category: 'Developer Tools',
    tags: ['tech-stack', 'wappalyzer', 'builtwith', 'scraping', 'python'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 1,
    inputSchema: {
      properties: {
        url: {
          description: 'URL to analyze (e.g. https://stripe.com)',
          format: 'uri',
          maxLength: 2083,
          minLength: 1,
          title: 'Url',
          type: 'string',
        },
      },
      required: ['url'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        Technology: {
          properties: {
            name: {
              title: 'Name',
              type: 'string',
            },
            category: {
              title: 'Category',
              type: 'string',
            },
            confidence: {
              title: 'Confidence',
              type: 'string',
            },
            evidence: {
              title: 'Evidence',
              type: 'string',
            },
          },
          required: ['name', 'category', 'confidence', 'evidence'],
          title: 'Technology',
          type: 'object',
        },
      },
      properties: {
        url: {
          title: 'Url',
          type: 'string',
        },
        finalUrl: {
          title: 'Finalurl',
          type: 'string',
        },
        statusCode: {
          title: 'Statuscode',
          type: 'integer',
        },
        technologies: {
          items: {
            $ref: '#/$defs/Technology',
          },
          title: 'Technologies',
          type: 'array',
        },
        server: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Server',
        },
        poweredBy: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Poweredby',
        },
        contentType: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Contenttype',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
      },
      required: [
        'url',
        'finalUrl',
        'statusCode',
        'technologies',
        'server',
        'poweredBy',
        'contentType',
        'fetchedAt',
      ],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'devto-articles-search.get',
    operationId: 'devto_articles_search_get',
    name: 'Search dev.to Articles',
    description:
      'Search articles on dev.to by tag, username, or top-of-week trending. Returns title, description, tags, author, reading time, reaction and comment counts.',
    category: 'Developer Tools',
    tags: ['devto', 'articles', 'blog', 'python'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 1,
    inputSchema: {
      properties: {
        tag: {
          anyOf: [
            {
              maxLength: 50,
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Filter by single tag (e.g. javascript, python, ai)',
          title: 'Tag',
        },
        username: {
          anyOf: [
            {
              maxLength: 40,
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Filter by author username',
          title: 'Username',
        },
        topArticles: {
          default: false,
          description: 'If true, return the top articles of the week (ignores tag/username)',
          title: 'Toparticles',
          type: 'boolean',
        },
        pageSize: {
          default: 10,
          maximum: 30,
          minimum: 1,
          title: 'Pagesize',
          type: 'integer',
        },
      },
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        Article: {
          properties: {
            id: {
              title: 'Id',
              type: 'integer',
            },
            title: {
              title: 'Title',
              type: 'string',
            },
            description: {
              title: 'Description',
              type: 'string',
            },
            url: {
              title: 'Url',
              type: 'string',
            },
            slug: {
              title: 'Slug',
              type: 'string',
            },
            publishedAt: {
              title: 'Publishedat',
              type: 'string',
            },
            readingTimeMinutes: {
              title: 'Readingtimeminutes',
              type: 'integer',
            },
            commentsCount: {
              title: 'Commentscount',
              type: 'integer',
            },
            reactionsCount: {
              title: 'Reactionscount',
              type: 'integer',
            },
            positiveReactionsCount: {
              title: 'Positivereactionscount',
              type: 'integer',
            },
            tags: {
              items: {
                type: 'string',
              },
              title: 'Tags',
              type: 'array',
            },
            author: {
              title: 'Author',
              type: 'string',
            },
            authorUsername: {
              title: 'Authorusername',
              type: 'string',
            },
            coverImage: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Coverimage',
            },
          },
          required: [
            'id',
            'title',
            'description',
            'url',
            'slug',
            'publishedAt',
            'readingTimeMinutes',
            'commentsCount',
            'reactionsCount',
            'positiveReactionsCount',
            'tags',
            'author',
            'authorUsername',
            'coverImage',
          ],
          title: 'Article',
          type: 'object',
        },
      },
      properties: {
        totalReturned: {
          title: 'Totalreturned',
          type: 'integer',
        },
        articles: {
          items: {
            $ref: '#/$defs/Article',
          },
          title: 'Articles',
          type: 'array',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
      },
      required: ['totalReturned', 'articles', 'fetchedAt'],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'email-read-verification-code.post',
    operationId: 'email_read_verification_code_post',
    name: 'Read Email Verification Code',
    description:
      'Connect to an IMAP mailbox and extract a verification code from the SUBJECT of a recent email. Polls with retries. Supports Gmail (with App Password), Outlook, and any IMAP server. Generic — works for any platform that puts its code in the subject line; for a token that only appears in the body, use email-read-verification-link.',
    category: 'Utility',
    tags: ['email', 'verification', 'imap', 'utility'],
    workerLanguage: 'ts',
    publishTargets: ['upapi'],
    unitWeight: 1,
    inputSchema: {
      type: 'object',
      properties: {
        imapHost: {
          type: 'string',
          default: 'imap.gmail.com',
          description: 'IMAP server hostname',
        },
        imapPort: {
          type: 'integer',
          default: 993,
          description: 'IMAP server port',
        },
        imapUser: {
          type: 'string',
          description: 'IMAP username (email address)',
        },
        imapPass: {
          type: 'string',
          description: 'IMAP password or app password',
        },
        senderFilter: {
          type: 'string',
          description: 'Filter emails by sender (e.g. noreply@redditmail.com)',
        },
        recipientFilter: {
          type: 'string',
          description: 'Filter by recipient address (useful with catch-all domains)',
        },
        subjectPattern: {
          type: 'string',
          description: 'Regex pattern to match subject line',
        },
        codePattern: {
          type: 'string',
          default: '\\b(\\d{6})\\b',
          description:
            'Regex to extract a verification code from the email SUBJECT (the body is not fetched — use email-read-verification-link for body tokens)',
        },
        maxAgeMinutes: {
          type: 'integer',
          default: 15,
          description: 'Only look at emails received within this many minutes',
        },
        maxRetries: {
          type: 'integer',
          default: 5,
          description: 'Number of polling attempts',
        },
        retryDelayMs: {
          type: 'integer',
          default: 10000,
          description: 'Milliseconds between retry attempts',
        },
      },
      required: ['imapUser', 'imapPass', 'senderFilter'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#',
    },
    outputSchema: {
      type: 'object',
      properties: {
        code: {
          type: 'string',
          description: 'Extracted verification code',
        },
        subject: {
          type: 'string',
          description: 'Email subject line',
        },
        from: {
          type: 'string',
          description: 'Sender address',
        },
        to: {
          type: 'string',
          description: 'Recipient address',
        },
        receivedAt: {
          type: 'string',
          description: 'When the email was received',
        },
        fetchedAt: {
          type: 'string',
        },
        elapsedMs: {
          type: 'integer',
          minimum: 0,
        },
      },
      required: ['code', 'subject', 'from', 'to', 'receivedAt', 'fetchedAt', 'elapsedMs'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#',
    },
  },
  {
    slug: 'email-read-verification-link.post',
    operationId: 'email_read_verification_link_post',
    name: 'Read Email Verification Link',
    description:
      'Connect to an IMAP mailbox and extract a link from the BODY of a recent email. Decodes quoted-printable/base64 bodies before matching, so URLs split across lines are returned whole. Polls with retries. Use this for verification mail whose token is a one-time URL rather than a code in the subject.',
    category: 'Utility',
    tags: ['email', 'verification', 'imap', 'utility'],
    workerLanguage: 'ts',
    publishTargets: ['upapi'],
    unitWeight: 1,
    inputSchema: {
      type: 'object',
      properties: {
        imapHost: {
          type: 'string',
          default: 'imap.gmail.com',
          description: 'IMAP server hostname',
        },
        imapPort: {
          type: 'integer',
          default: 993,
          description: 'IMAP server port',
        },
        imapUser: {
          type: 'string',
          description: 'IMAP username (email address)',
        },
        imapPass: {
          type: 'string',
          description: 'IMAP password or app password',
        },
        senderFilter: {
          type: 'string',
          description: 'Filter emails by sender (e.g. noreply@reddit.com)',
        },
        recipientFilter: {
          type: 'string',
          description: 'Filter by recipient address (useful with catch-all domains)',
        },
        subjectPattern: {
          type: 'string',
          description:
            'Regex matched against the subject, to pick one of several mails from the same sender',
        },
        linkPattern: {
          type: 'string',
          default: 'https?://[^\\s"\'<>)\\]]+',
          description:
            'Regex matched against the DECODED body. The first capture group is returned when present, otherwise the whole match. Default matches any http(s) URL.',
        },
        maxAgeMinutes: {
          type: 'integer',
          default: 15,
          description: 'Only look at emails received within this many minutes',
        },
        maxRetries: {
          type: 'integer',
          default: 5,
          description: 'Number of polling attempts',
        },
        retryDelayMs: {
          type: 'integer',
          default: 10000,
          description: 'Milliseconds between retry attempts',
        },
        mailboxes: {
          type: 'array',
          items: {
            type: 'string',
          },
          description:
            'Mailboxes to search, in order. Omit to search INBOX plus whatever the server flags \\All and \\Junk (Gmail: All Mail and Spam) — providers routinely file one-time verification links as junk, and searching INBOX alone reports them as never sent.',
        },
      },
      required: ['imapUser', 'imapPass', 'senderFilter'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#',
    },
    outputSchema: {
      type: 'object',
      properties: {
        link: {
          type: 'string',
          description: 'First body match — the link to follow',
        },
        allLinks: {
          type: 'array',
          items: {
            type: 'string',
          },
          description: 'Every distinct match in the body, in document order',
        },
        subject: {
          type: 'string',
          description: 'Email subject line',
        },
        from: {
          type: 'string',
          description: 'Sender address',
        },
        to: {
          type: 'string',
          description: 'Recipient address',
        },
        receivedAt: {
          type: 'string',
          description: 'When the email was received',
        },
        mailbox: {
          type: 'string',
          description:
            'Which mailbox the hit came from. A link found in Spam is still a valid link, but it tells the caller the provider is filtering this sender.',
        },
        fetchedAt: {
          type: 'string',
        },
        elapsedMs: {
          type: 'integer',
          minimum: 0,
        },
      },
      required: [
        'link',
        'allLinks',
        'subject',
        'from',
        'to',
        'receivedAt',
        'mailbox',
        'fetchedAt',
        'elapsedMs',
      ],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#',
    },
  },
  {
    slug: 'fetch-markdown.post',
    operationId: 'fetch_markdown_post',
    name: 'Fetch URL as Markdown',
    description:
      'Convert any web page into clean, LLM-ready Markdown. Fetches over plain HTTP with browser headers (retrying once through a residential or datacenter proxy when the origin serves a bot wall), removes boilerplate with Mozilla Readability, and converts with GitHub-flavored Markdown tables, lists and code blocks. Article mode is verified against a whole-page conversion and downgrades itself when Readability strips too much, so you are never handed a gutted page. Returns the markdown plus title, byline, language, excerpt, the extracted link list, the final URL after redirects, and which transport served the body. No browser is used, so a client-rendered page is reported as an error rather than as empty content.',
    category: 'Tools',
    tags: ['markdown', 'html', 'readability', 'llm', 'rag', 'scraper', 'content', 'converter'],
    workerLanguage: 'ts',
    publishTargets: ['upapi'],
    unitWeight: 3,
    inputSchema: {
      type: 'object',
      properties: {
        url: {
          type: 'string',
          format: 'uri',
          maxLength: 2048,
          description:
            'Absolute http(s) URL of the page to convert (e.g. https://en.wikipedia.org/wiki/Markdown). Private, loopback and link-local destinations are refused.',
        },
        mode: {
          type: 'string',
          enum: ['article', 'full'],
          default: 'article',
          description:
            'article = Mozilla Readability main-content extraction, verified against the whole page and auto-downgraded when it strips too much; full = the whole body with nav/footer/aside/form removed (e.g. article).',
        },
        includeLinks: {
          type: 'boolean',
          default: true,
          description:
            'Keep inline [text](url) links in the markdown and return the extracted link list (e.g. true). false unwraps every anchor to plain text.',
        },
        includeImages: {
          type: 'boolean',
          default: false,
          description:
            'Keep ![alt](url) image references in the markdown (e.g. false). Images are dropped by default because they cost tokens and rarely help an LLM.',
        },
        maxChars: {
          type: 'integer',
          minimum: 500,
          maximum: 400000,
          default: 100000,
          description:
            'Maximum characters of markdown to return (e.g. 100000). Output is cut at the nearest paragraph/line boundary and `truncated` is set.',
        },
        timeoutMs: {
          type: 'integer',
          minimum: 2000,
          maximum: 24000,
          default: 20000,
          description:
            'Total network budget in milliseconds across the direct attempt and the one proxied retry (e.g. 20000). Capped below the 28s API-gateway edge timeout.',
        },
      },
      required: ['url'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#',
    },
    outputSchema: {
      type: 'object',
      properties: {
        markdown: {
          type: 'string',
          description:
            'The converted document. Prefixed with the page title as an H1 when the extracted content does not already start with a heading.',
        },
        title: {
          type: 'string',
          description: 'Page/article title, or an empty string if none was found.',
        },
        byline: {
          type: ['string', 'null'],
          description: 'Author line, when Readability or a meta tag exposes one; null otherwise.',
        },
        lang: {
          type: ['string', 'null'],
          description: 'Language tag from <html lang> (e.g. "en"); null if absent.',
        },
        excerpt: {
          type: ['string', 'null'],
          description: 'Short summary from Readability or the meta description; null if absent.',
        },
        links: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              href: {
                type: 'string',
              },
              text: {
                type: 'string',
              },
            },
            required: ['href', 'text'],
            additionalProperties: false,
          },
          description:
            'Absolute http(s) links found in the extracted content, capped at 500. Present only when includeLinks is true; reflects the extracted document, which may be longer than a truncated markdown body.',
        },
        finalUrl: {
          type: 'string',
          description: 'URL actually fetched, after following redirects.',
        },
        httpStatus: {
          type: 'integer',
          description: 'HTTP status of the response that produced the markdown.',
        },
        fetchedWith: {
          type: 'string',
          enum: ['direct', 'datacenter', 'residential'],
          description:
            'Transport that produced the returned body: direct = straight from the worker; datacenter/residential = the proxy-pool tier used for the retry.',
        },
        extractor: {
          type: 'string',
          enum: ['readability', 'full-dom'],
          description:
            'Which stage produced the markdown. In article mode this reads "full-dom" when Readability failed the content-density check.',
        },
        truncated: {
          type: 'boolean',
          description: 'True when the markdown was cut to fit maxChars.',
        },
        charCount: {
          type: 'integer',
          minimum: 0,
          description: 'Length of the returned markdown.',
        },
        fetchedAt: {
          type: 'string',
          description: 'ISO-8601 timestamp of the fetch.',
        },
      },
      required: [
        'markdown',
        'title',
        'byline',
        'lang',
        'excerpt',
        'finalUrl',
        'httpStatus',
        'fetchedWith',
        'extractor',
        'truncated',
        'charCount',
        'fetchedAt',
      ],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#',
    },
  },
  {
    slug: 'github-repo.get',
    operationId: 'github_repo_get',
    name: 'Get GitHub Repository',
    description:
      'Fetch metadata (stars, forks, topics, license, dates) for a public GitHub repository via the REST API.',
    category: 'Developer Tools',
    tags: ['github', 'repo', 'metadata', 'python'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 1,
    inputSchema: {
      properties: {
        owner: {
          description: 'Repo owner (user or org)',
          maxLength: 100,
          minLength: 1,
          title: 'Owner',
          type: 'string',
        },
        repo: {
          description: 'Repo name',
          maxLength: 200,
          minLength: 1,
          title: 'Repo',
          type: 'string',
        },
      },
      required: ['owner', 'repo'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      properties: {
        fullName: {
          title: 'Fullname',
          type: 'string',
        },
        description: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Description',
        },
        htmlUrl: {
          title: 'Htmlurl',
          type: 'string',
        },
        homepage: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Homepage',
        },
        language: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Language',
        },
        stars: {
          title: 'Stars',
          type: 'integer',
        },
        forks: {
          title: 'Forks',
          type: 'integer',
        },
        openIssues: {
          title: 'Openissues',
          type: 'integer',
        },
        watchers: {
          title: 'Watchers',
          type: 'integer',
        },
        defaultBranch: {
          title: 'Defaultbranch',
          type: 'string',
        },
        topics: {
          items: {
            type: 'string',
          },
          title: 'Topics',
          type: 'array',
        },
        license: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'License',
        },
        isArchived: {
          title: 'Isarchived',
          type: 'boolean',
        },
        isFork: {
          title: 'Isfork',
          type: 'boolean',
        },
        isTemplate: {
          title: 'Istemplate',
          type: 'boolean',
        },
        createdAt: {
          title: 'Createdat',
          type: 'string',
        },
        updatedAt: {
          title: 'Updatedat',
          type: 'string',
        },
        pushedAt: {
          title: 'Pushedat',
          type: 'string',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
      },
      required: [
        'fullName',
        'description',
        'htmlUrl',
        'homepage',
        'language',
        'stars',
        'forks',
        'openIssues',
        'watchers',
        'defaultBranch',
        'topics',
        'license',
        'isArchived',
        'isFork',
        'isTemplate',
        'createdAt',
        'updatedAt',
        'pushedAt',
        'fetchedAt',
      ],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'github-trending.get',
    operationId: 'github_trending_get',
    name: 'Get GitHub Trending Repositories',
    description:
      'Fetch the github.com/trending page for the most-starred repos in a time window, optionally filtered by language. Pure HTTP (no browser). Returns full name, URL, description, language, total stars, stars this window, forks.',
    category: 'Developer Tools',
    tags: ['github', 'trending', 'repos', 'developer'],
    workerLanguage: 'ts',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 1,
    inputSchema: {
      type: 'object',
      properties: {
        language: {
          type: 'string',
          minLength: 0,
          maxLength: 30,
          default: '',
          description:
            'Programming language slug (python, rust, typescript, go, …). Empty = any language.',
        },
        since: {
          type: 'string',
          enum: ['daily', 'weekly', 'monthly'],
          default: 'daily',
          description: 'Trend window',
        },
        limit: {
          type: 'integer',
          minimum: 1,
          maximum: 30,
          default: 15,
        },
      },
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#',
    },
    outputSchema: {
      type: 'object',
      properties: {
        language: {
          type: 'string',
        },
        since: {
          type: 'string',
        },
        totalCount: {
          type: 'integer',
          minimum: 0,
        },
        repos: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              position: {
                type: 'integer',
                exclusiveMinimum: 0,
              },
              fullName: {
                type: 'string',
              },
              url: {
                type: 'string',
                format: 'uri',
              },
              description: {
                type: 'string',
              },
              language: {
                type: 'string',
              },
              totalStars: {
                type: 'integer',
                minimum: 0,
              },
              starsToday: {
                type: 'integer',
                minimum: 0,
              },
              forks: {
                type: 'integer',
                minimum: 0,
              },
            },
            required: [
              'position',
              'fullName',
              'url',
              'description',
              'language',
              'totalStars',
              'starsToday',
              'forks',
            ],
            additionalProperties: false,
          },
        },
        fetchedAt: {
          type: 'string',
        },
      },
      required: ['language', 'since', 'totalCount', 'repos', 'fetchedAt'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#',
    },
  },
  {
    slug: 'github-user.get',
    operationId: 'github_user_get',
    name: 'Get GitHub User',
    description:
      "Fetch a GitHub user or organization's public profile: name, bio, company, location, follower/repo counts, avatar, Twitter handle.",
    category: 'Developer Tools',
    tags: ['github', 'user', 'profile', 'python'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 1,
    inputSchema: {
      properties: {
        username: {
          description: 'GitHub login (user or org)',
          maxLength: 100,
          minLength: 1,
          title: 'Username',
          type: 'string',
        },
      },
      required: ['username'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      properties: {
        login: {
          title: 'Login',
          type: 'string',
        },
        name: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Name',
        },
        type: {
          title: 'Type',
          type: 'string',
        },
        bio: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Bio',
        },
        company: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Company',
        },
        blog: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Blog',
        },
        location: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Location',
        },
        email: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Email',
        },
        twitterHandle: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Twitterhandle',
        },
        publicRepos: {
          title: 'Publicrepos',
          type: 'integer',
        },
        publicGists: {
          title: 'Publicgists',
          type: 'integer',
        },
        followers: {
          title: 'Followers',
          type: 'integer',
        },
        following: {
          title: 'Following',
          type: 'integer',
        },
        avatarUrl: {
          title: 'Avatarurl',
          type: 'string',
        },
        htmlUrl: {
          title: 'Htmlurl',
          type: 'string',
        },
        createdAt: {
          title: 'Createdat',
          type: 'string',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
      },
      required: [
        'login',
        'name',
        'type',
        'bio',
        'company',
        'blog',
        'location',
        'email',
        'twitterHandle',
        'publicRepos',
        'publicGists',
        'followers',
        'following',
        'avatarUrl',
        'htmlUrl',
        'createdAt',
        'fetchedAt',
      ],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'google-autocomplete.post',
    operationId: 'google_autocomplete_post',
    name: 'Google Autocomplete',
    description:
      'Real Google search suggestions (autocomplete/suggest) via pure HTTP — no browser, no CAPTCHA. Set expand=true to mine long-tail keywords.',
    category: 'Search',
    tags: ['google', 'autocomplete', 'suggest', 'keywords', 'search'],
    workerLanguage: 'python',
    publishTargets: ['upapi'],
    unitWeight: 1,
    inputSchema: {
      properties: {
        query: {
          description: 'Seed query to autocomplete',
          minLength: 1,
          title: 'Query',
          type: 'string',
        },
        language: {
          default: 'en',
          description: 'hl param (e.g. en, fr, es)',
          title: 'Language',
          type: 'string',
        },
        country: {
          default: 'us',
          description: 'gl param (e.g. us, ca, gb)',
          title: 'Country',
          type: 'string',
        },
        client: {
          default: 'chrome',
          description: "'chrome' (rich: relevance+type) or 'firefox' (simple)",
          title: 'Client',
          type: 'string',
        },
        expand: {
          default: false,
          description: "Also query '{query} a..z' to mine long-tail suggestions",
          title: 'Expand',
          type: 'boolean',
        },
        maxSuggestions: {
          default: 50,
          description: 'Max suggestions to return',
          maximum: 200,
          minimum: 1,
          title: 'Maxsuggestions',
          type: 'integer',
        },
        proxyUrl: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Optional proxy URL',
          title: 'Proxyurl',
        },
      },
      required: ['query'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        SuggestionItem: {
          properties: {
            text: {
              title: 'Text',
              type: 'string',
            },
            relevance: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Relevance',
            },
            kind: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Kind',
            },
          },
          required: ['text'],
          title: 'SuggestionItem',
          type: 'object',
        },
      },
      properties: {
        success: {
          title: 'Success',
          type: 'boolean',
        },
        query: {
          title: 'Query',
          type: 'string',
        },
        suggestions: {
          items: {
            $ref: '#/$defs/SuggestionItem',
          },
          title: 'Suggestions',
          type: 'array',
        },
        count: {
          title: 'Count',
          type: 'integer',
        },
        message: {
          title: 'Message',
          type: 'string',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
        elapsedMs: {
          title: 'Elapsedms',
          type: 'integer',
        },
      },
      required: ['success', 'query', 'suggestions', 'count', 'message', 'fetchedAt', 'elapsedMs'],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'hackernews-search.get',
    operationId: 'hackernews_search_get',
    name: 'Search Hacker News',
    description:
      "Full-text + filter search over Hacker News (stories, comments, Show/Ask HN, front page) via Algolia's open API. Ordered by relevance or date.",
    category: 'Tools',
    tags: ['hackernews', 'news', 'search', 'python'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 1,
    inputSchema: {
      properties: {
        query: {
          description: 'Full-text search query',
          maxLength: 200,
          minLength: 1,
          title: 'Query',
          type: 'string',
        },
        tags: {
          default: 'story',
          description:
            'HN Algolia tag filter: story, comment, poll, show_hn, ask_hn, front_page, etc.',
          title: 'Tags',
          type: 'string',
        },
        order: {
          default: 'relevance',
          description: 'Sort order',
          pattern: '^(relevance|date)$',
          title: 'Order',
          type: 'string',
        },
        hitsPerPage: {
          default: 20,
          maximum: 50,
          minimum: 1,
          title: 'Hitsperpage',
          type: 'integer',
        },
      },
      required: ['query'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        Hit: {
          properties: {
            id: {
              title: 'Id',
              type: 'string',
            },
            title: {
              title: 'Title',
              type: 'string',
            },
            author: {
              title: 'Author',
              type: 'string',
            },
            url: {
              title: 'Url',
              type: 'string',
            },
            points: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Points',
            },
            numComments: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Numcomments',
            },
            createdAt: {
              title: 'Createdat',
              type: 'string',
            },
            tags: {
              items: {
                type: 'string',
              },
              title: 'Tags',
              type: 'array',
            },
            storyText: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Storytext',
            },
          },
          required: [
            'id',
            'title',
            'author',
            'url',
            'points',
            'numComments',
            'createdAt',
            'tags',
            'storyText',
          ],
          title: 'Hit',
          type: 'object',
        },
      },
      properties: {
        query: {
          title: 'Query',
          type: 'string',
        },
        totalHits: {
          title: 'Totalhits',
          type: 'integer',
        },
        hits: {
          items: {
            $ref: '#/$defs/Hit',
          },
          title: 'Hits',
          type: 'array',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
      },
      required: ['query', 'totalHits', 'hits', 'fetchedAt'],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'html-to-pdf.post',
    operationId: 'html_to_pdf_post',
    name: 'Render HTML or URL to PDF',
    description:
      'Render a public web page or a raw HTML document to a print-quality PDF with headless Chromium — paper size, orientation, margins, scale and page ranges included. Returns base64 PDF bytes.',
    category: 'Tools',
    tags: ['pdf', 'html', 'browser', 'render', 'print', 'document'],
    workerLanguage: 'ts',
    publishTargets: ['upapi'],
    unitWeight: 20,
    inputSchema: {
      type: 'object',
      properties: {
        url: {
          type: 'string',
          format: 'uri',
          maxLength: 2048,
          description:
            'Absolute http(s) URL to render (e.g. https://example.com). Mutually exclusive with `html`. URLs resolving to private, loopback, link-local or cloud-metadata addresses are rejected.',
        },
        html: {
          type: 'string',
          minLength: 1,
          maxLength: 2000000,
          description:
            'Raw HTML document to render, up to 2 MB. Mutually exclusive with `url`. Relative asset paths cannot resolve in this mode — use absolute https URLs or inline/data: assets (e.g. <h1>Invoice #42</h1>).',
        },
        format: {
          type: 'string',
          enum: ['A4', 'Letter', 'Legal'],
          default: 'A4',
          description: 'Paper size (e.g. A4).',
        },
        landscape: {
          type: 'boolean',
          default: false,
          description: 'Print in landscape orientation instead of portrait (e.g. false).',
        },
        margin: {
          type: 'object',
          properties: {
            top: {
              type: 'string',
              pattern: '^\\d+(\\.\\d+)?(px|in|cm|mm)?$',
              description: 'Top margin (e.g. 1in).',
            },
            right: {
              $ref: '#/properties/margin/properties/top',
              description: 'Right margin (e.g. 0.5in).',
            },
            bottom: {
              $ref: '#/properties/margin/properties/top',
              description: 'Bottom margin (e.g. 1in).',
            },
            left: {
              $ref: '#/properties/margin/properties/top',
              description: 'Left margin (e.g. 0.5in).',
            },
          },
          additionalProperties: false,
          description:
            'Page margins as CSS lengths. Omitted sides default to zero, matching Chromium (e.g. {"top":"1in","bottom":"1in"}).',
        },
        printBackground: {
          type: 'boolean',
          default: true,
          description:
            'Render background colours and images. Defaults to true — Chromium defaults this off, which strips the visual design most callers are trying to capture (e.g. true).',
        },
        scale: {
          type: 'number',
          minimum: 0.1,
          maximum: 2,
          default: 1,
          description: 'Rendering scale of the webpage, 0.1 to 2 (e.g. 1).',
        },
        pageRanges: {
          type: 'string',
          maxLength: 200,
          pattern: '^\\s*\\d+(\\s*-\\s*\\d+)?(\\s*,\\s*\\d+(\\s*-\\s*\\d+)?)*\\s*$',
          description: 'Pages to include. Omit for the whole document (e.g. 1-5, 8).',
        },
        media: {
          type: 'string',
          enum: ['screen', 'print'],
          default: 'screen',
          description:
            "Which CSS media type to emulate. 'screen' (default) reproduces what a visitor sees; 'print' honours the site's print stylesheet (e.g. screen).",
        },
        waitUntil: {
          type: 'string',
          enum: ['load', 'domcontentloaded', 'networkidle'],
          default: 'load',
          description:
            "When rendering counts as done: 'domcontentloaded' is fastest, 'load' waits for subresources, 'networkidle' waits for the network to go quiet (e.g. load).",
        },
      },
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#',
    },
    outputSchema: {
      type: 'object',
      properties: {
        pdf: {
          type: 'string',
          description: 'Base64-encoded PDF bytes. No `data:` URI prefix — decode directly.',
        },
        pages: {
          type: 'integer',
          exclusiveMinimum: 0,
          description:
            'Page count, read from the PDF itself. Omitted when the structure cannot be read with certainty — the PDF is still valid.',
        },
        bytes: {
          type: 'integer',
          exclusiveMinimum: 0,
          description: 'Size of the DECODED PDF in bytes (the base64 string is ~4/3 of this).',
        },
      },
      required: ['pdf', 'bytes'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#',
    },
  },
  {
    slug: 'image-ocr.post',
    operationId: 'image_ocr_post',
    name: 'OCR an Image',
    description:
      'Read the text in an image, by URL or as an inline base64 upload. Returns the full text plus every detected line with its confidence score and pixel bounding box. Runs locally on PP-OCR/ONNX — no cloud vision API, no per-image fee.',
    category: 'Tools',
    tags: ['ocr', 'image', 'text', 'recognition', 'vision', 'document'],
    workerLanguage: 'python',
    publishTargets: ['upapi'],
    unitWeight: 4,
    inputSchema: {
      properties: {
        url: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description:
            'Public URL of the image to read (e.g. https://example.com/receipt.png). Provide this OR `file`, not both.',
          title: 'Url',
        },
        file: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          contentEncoding: 'base64',
          contentMediaType: 'image/*',
          default: null,
          description:
            'The image itself, base64-encoded (no data: URI prefix). Max 3.7 MB decoded — base64 inflates by 4/3 and the API request body is capped at 5 MB. Supply `url` instead for anything larger. Expected media type image/*.',
          title: 'File',
        },
        languages: {
          anyOf: [
            {
              items: {
                type: 'string',
              },
              maxItems: 4,
              type: 'array',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description:
            'Scripts present in the image (e.g. en). Supported: ch, en — one bundled model covers Latin and Chinese. Omit for the default.',
          title: 'Languages',
        },
      },
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        Bbox: {
          properties: {
            x: {
              description: "Left edge, pixels from the image's left",
              title: 'X',
              type: 'integer',
            },
            y: {
              description: "Top edge, pixels from the image's top",
              title: 'Y',
              type: 'integer',
            },
            width: {
              title: 'Width',
              type: 'integer',
            },
            height: {
              title: 'Height',
              type: 'integer',
            },
          },
          required: ['x', 'y', 'width', 'height'],
          title: 'Bbox',
          type: 'object',
        },
        Block: {
          properties: {
            text: {
              description: 'Text of this detected line',
              title: 'Text',
              type: 'string',
            },
            confidence: {
              description: 'Recognition confidence, 0-1',
              title: 'Confidence',
              type: 'number',
            },
            bbox: {
              $ref: '#/$defs/Bbox',
            },
          },
          required: ['text', 'confidence', 'bbox'],
          title: 'Block',
          type: 'object',
        },
      },
      properties: {
        text: {
          description: 'All recognised text, one detected line per row',
          title: 'Text',
          type: 'string',
        },
        blocks: {
          description: 'Each detected line with its confidence and box',
          items: {
            $ref: '#/$defs/Block',
          },
          title: 'Blocks',
          type: 'array',
        },
        width: {
          description: 'Image width in pixels',
          title: 'Width',
          type: 'integer',
        },
        height: {
          description: 'Image height in pixels',
          title: 'Height',
          type: 'integer',
        },
        truncated: {
          description: 'True when more than 5000 text blocks were detected and cut',
          title: 'Truncated',
          type: 'boolean',
        },
      },
      required: ['text', 'blocks', 'width', 'height', 'truncated'],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'instagram-check-account-health.get',
    operationId: 'instagram_check_account_health_get',
    name: 'Instagram Check Account Health',
    description:
      'Check if Instagram account is active/suspended. Returns follower, post counts, and verification status.',
    category: 'Social Media',
    tags: ['instagram', 'account', 'health', 'check'],
    workerLanguage: 'python',
    publishTargets: ['upapi'],
    unitWeight: 15,
    inputSchema: {
      properties: {
        username: {
          description: 'Instagram username (without @)',
          minLength: 1,
          title: 'Username',
          type: 'string',
        },
        proxyUrl: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Optional proxy URL',
          title: 'Proxyurl',
        },
      },
      required: ['username'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      properties: {
        success: {
          title: 'Success',
          type: 'boolean',
        },
        username: {
          title: 'Username',
          type: 'string',
        },
        accountActive: {
          title: 'Accountactive',
          type: 'boolean',
        },
        isSuspended: {
          title: 'Issuspended',
          type: 'boolean',
        },
        isPrivate: {
          title: 'Isprivate',
          type: 'boolean',
        },
        isVerified: {
          title: 'Isverified',
          type: 'boolean',
        },
        isBusinessAccount: {
          title: 'Isbusinessaccount',
          type: 'boolean',
        },
        followerCount: {
          title: 'Followercount',
          type: 'integer',
        },
        followingCount: {
          title: 'Followingcount',
          type: 'integer',
        },
        postCount: {
          title: 'Postcount',
          type: 'integer',
        },
        message: {
          title: 'Message',
          type: 'string',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
        elapsedMs: {
          title: 'Elapsedms',
          type: 'integer',
        },
      },
      required: [
        'success',
        'username',
        'accountActive',
        'isSuspended',
        'isPrivate',
        'isVerified',
        'isBusinessAccount',
        'followerCount',
        'followingCount',
        'postCount',
        'message',
        'fetchedAt',
        'elapsedMs',
      ],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'instagram-check-account.post',
    operationId: 'instagram_check_account_post',
    name: 'Instagram Check Account',
    description:
      'Check if a username/email/phone is linked to an Instagram account. Returns existence + recovery channels.',
    category: 'Social Media',
    tags: ['instagram', 'account', 'oracle', 'verification', 'social'],
    workerLanguage: 'python',
    publishTargets: ['upapi'],
    unitWeight: 15,
    inputSchema: {
      properties: {
        query: {
          description: 'Username, email, or phone number to check',
          minLength: 1,
          title: 'Query',
          type: 'string',
        },
        proxyUrl: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Optional proxy URL (recommended for bulk)',
          title: 'Proxyurl',
        },
      },
      required: ['query'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      properties: {
        success: {
          title: 'Success',
          type: 'boolean',
        },
        query: {
          title: 'Query',
          type: 'string',
        },
        exists: {
          title: 'Exists',
          type: 'boolean',
        },
        queryType: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Querytype',
        },
        canSendEmail: {
          default: false,
          title: 'Cansendemail',
          type: 'boolean',
        },
        canSendPhone: {
          default: false,
          title: 'Cansendphone',
          type: 'boolean',
        },
        canUseFacebook: {
          default: false,
          title: 'Canusefacebook',
          type: 'boolean',
        },
        canSendWhatsapp: {
          default: false,
          title: 'Cansendwhatsapp',
          type: 'boolean',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
        elapsedMs: {
          title: 'Elapsedms',
          type: 'integer',
        },
      },
      required: ['success', 'query', 'exists', 'fetchedAt', 'elapsedMs'],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'instagram-discover-location.post',
    operationId: 'instagram_discover_location_post',
    name: 'Instagram Discover Location Posts',
    description:
      'Get 50-95 post shortcodes from a location page. No auth needed. Use with get-post-commenters for massive lead discovery.',
    category: 'Social Media',
    tags: ['instagram', 'location', 'discovery', 'leads', 'social'],
    workerLanguage: 'python',
    publishTargets: ['upapi'],
    unitWeight: 15,
    inputSchema: {
      properties: {
        locationId: {
          description: 'Instagram location ID (numeric)',
          minLength: 1,
          title: 'Locationid',
          type: 'string',
        },
        proxyUrl: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Optional proxy URL',
          title: 'Proxyurl',
        },
      },
      required: ['locationId'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        LocationPost: {
          properties: {
            pk: {
              title: 'Pk',
              type: 'string',
            },
            shortcode: {
              title: 'Shortcode',
              type: 'string',
            },
            postUrl: {
              title: 'Posturl',
              type: 'string',
            },
          },
          required: ['pk', 'shortcode', 'postUrl'],
          title: 'LocationPost',
          type: 'object',
        },
      },
      properties: {
        success: {
          title: 'Success',
          type: 'boolean',
        },
        locationId: {
          title: 'Locationid',
          type: 'string',
        },
        locationName: {
          title: 'Locationname',
          type: 'string',
        },
        posts: {
          items: {
            $ref: '#/$defs/LocationPost',
          },
          title: 'Posts',
          type: 'array',
        },
        latitude: {
          anyOf: [
            {
              type: 'number',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Latitude',
        },
        longitude: {
          anyOf: [
            {
              type: 'number',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Longitude',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
        elapsedMs: {
          title: 'Elapsedms',
          type: 'integer',
        },
      },
      required: ['success', 'locationId', 'locationName', 'posts', 'fetchedAt', 'elapsedMs'],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'instagram-get-post-commenters.post',
    operationId: 'instagram_get_post_commenters_post',
    name: 'Instagram Get Post Commenters',
    description:
      'Extract commenters, comment text, and sibling posts from a post page. One call = ~24 lead-gen entities. No auth needed.',
    category: 'Social Media',
    tags: ['instagram', 'commenters', 'discovery', 'leads', 'social'],
    workerLanguage: 'python',
    publishTargets: ['upapi'],
    unitWeight: 15,
    inputSchema: {
      properties: {
        shortcode: {
          description: 'Post shortcode',
          minLength: 1,
          title: 'Shortcode',
          type: 'string',
        },
        proxyUrl: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Optional proxy URL',
          title: 'Proxyurl',
        },
      },
      required: ['shortcode'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        Comment: {
          properties: {
            commentId: {
              title: 'Commentid',
              type: 'string',
            },
            text: {
              title: 'Text',
              type: 'string',
            },
            username: {
              title: 'Username',
              type: 'string',
            },
            createdAt: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Createdat',
            },
          },
          required: ['commentId', 'text', 'username'],
          title: 'Comment',
          type: 'object',
        },
        Commenter: {
          properties: {
            username: {
              title: 'Username',
              type: 'string',
            },
            userId: {
              title: 'Userid',
              type: 'string',
            },
            isVerified: {
              default: false,
              title: 'Isverified',
              type: 'boolean',
            },
            profilePicUrl: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Profilepicurl',
            },
          },
          required: ['username', 'userId'],
          title: 'Commenter',
          type: 'object',
        },
      },
      properties: {
        success: {
          title: 'Success',
          type: 'boolean',
        },
        shortcode: {
          title: 'Shortcode',
          type: 'string',
        },
        ownerUsername: {
          title: 'Ownerusername',
          type: 'string',
        },
        caption: {
          title: 'Caption',
          type: 'string',
        },
        commenters: {
          items: {
            $ref: '#/$defs/Commenter',
          },
          title: 'Commenters',
          type: 'array',
        },
        comments: {
          items: {
            $ref: '#/$defs/Comment',
          },
          title: 'Comments',
          type: 'array',
        },
        siblingShortcodes: {
          items: {
            type: 'string',
          },
          title: 'Siblingshortcodes',
          type: 'array',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
        elapsedMs: {
          title: 'Elapsedms',
          type: 'integer',
        },
      },
      required: [
        'success',
        'shortcode',
        'ownerUsername',
        'caption',
        'commenters',
        'comments',
        'siblingShortcodes',
        'fetchedAt',
        'elapsedMs',
      ],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'instagram-get-post-info.post',
    operationId: 'instagram_get_post_info_post',
    name: 'Instagram Get Post Info',
    description:
      'Get post metadata (caption, owner, media, comment count) via embed page. No auth needed, not rate-limited.',
    category: 'Social Media',
    tags: ['instagram', 'post', 'scraping', 'social', 'embed'],
    workerLanguage: 'python',
    publishTargets: ['upapi'],
    unitWeight: 15,
    inputSchema: {
      properties: {
        shortcode: {
          description: 'Post shortcode (the part after /p/ in the URL)',
          minLength: 1,
          title: 'Shortcode',
          type: 'string',
        },
        proxyUrl: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Optional proxy URL',
          title: 'Proxyurl',
        },
      },
      required: ['shortcode'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      properties: {
        success: {
          title: 'Success',
          type: 'boolean',
        },
        shortcode: {
          title: 'Shortcode',
          type: 'string',
        },
        postUrl: {
          title: 'Posturl',
          type: 'string',
        },
        ownerUsername: {
          title: 'Ownerusername',
          type: 'string',
        },
        caption: {
          title: 'Caption',
          type: 'string',
        },
        commentCount: {
          anyOf: [
            {
              type: 'integer',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Commentcount',
        },
        mediaUrls: {
          items: {
            type: 'string',
          },
          title: 'Mediaurls',
          type: 'array',
        },
        isVideo: {
          default: false,
          title: 'Isvideo',
          type: 'boolean',
        },
        videoUrl: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Videourl',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
        elapsedMs: {
          title: 'Elapsedms',
          type: 'integer',
        },
      },
      required: [
        'success',
        'shortcode',
        'postUrl',
        'ownerUsername',
        'caption',
        'mediaUrls',
        'fetchedAt',
        'elapsedMs',
      ],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'instagram-get-user-posts.post',
    operationId: 'instagram_get_user_posts_post',
    name: 'Instagram Get User Posts',
    description:
      "Get a user's recent posts with engagement metrics. Rate-limited — use proxy rotation for bulk. No auth needed.",
    category: 'Social Media',
    tags: ['instagram', 'posts', 'feed', 'scraping', 'social'],
    workerLanguage: 'python',
    publishTargets: ['upapi'],
    unitWeight: 15,
    inputSchema: {
      properties: {
        userId: {
          description: 'Instagram user PK (numeric ID, from get-user-profile)',
          minLength: 1,
          title: 'Userid',
          type: 'string',
        },
        count: {
          default: 12,
          description: 'Posts per page (max 33)',
          maximum: 33,
          minimum: 1,
          title: 'Count',
          type: 'integer',
        },
        maxId: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Pagination cursor (next_max_id from previous call)',
          title: 'Maxid',
        },
        proxyUrl: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Optional proxy URL (recommended — endpoint rate-limits aggressively)',
          title: 'Proxyurl',
        },
      },
      required: ['userId'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        PostItem: {
          properties: {
            pk: {
              title: 'Pk',
              type: 'string',
            },
            shortcode: {
              title: 'Shortcode',
              type: 'string',
            },
            postUrl: {
              title: 'Posturl',
              type: 'string',
            },
            caption: {
              default: '',
              title: 'Caption',
              type: 'string',
            },
            likeCount: {
              default: 0,
              title: 'Likecount',
              type: 'integer',
            },
            commentCount: {
              default: 0,
              title: 'Commentcount',
              type: 'integer',
            },
            mediaType: {
              default: 1,
              title: 'Mediatype',
              type: 'integer',
            },
            takenAt: {
              default: 0,
              title: 'Takenat',
              type: 'integer',
            },
          },
          required: ['pk', 'shortcode', 'postUrl'],
          title: 'PostItem',
          type: 'object',
        },
      },
      properties: {
        success: {
          title: 'Success',
          type: 'boolean',
        },
        userId: {
          title: 'Userid',
          type: 'string',
        },
        posts: {
          items: {
            $ref: '#/$defs/PostItem',
          },
          title: 'Posts',
          type: 'array',
        },
        moreAvailable: {
          title: 'Moreavailable',
          type: 'boolean',
        },
        nextMaxId: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Nextmaxid',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
        elapsedMs: {
          title: 'Elapsedms',
          type: 'integer',
        },
      },
      required: ['success', 'userId', 'posts', 'moreAvailable', 'fetchedAt', 'elapsedMs'],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'instagram-get-user-profile.post',
    operationId: 'instagram_get_user_profile_post',
    name: 'Instagram Get User Profile',
    description:
      'Get full Instagram user profile (bio, stats, verified, business status). Works for public profiles without auth.',
    category: 'Social Media',
    tags: ['instagram', 'user', 'profile', 'scraping', 'social'],
    workerLanguage: 'python',
    publishTargets: ['upapi'],
    unitWeight: 15,
    inputSchema: {
      properties: {
        username: {
          description: 'Instagram username (without @)',
          minLength: 1,
          title: 'Username',
          type: 'string',
        },
        proxyUrl: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Optional proxy URL',
          title: 'Proxyurl',
        },
      },
      required: ['username'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      properties: {
        success: {
          title: 'Success',
          type: 'boolean',
        },
        username: {
          title: 'Username',
          type: 'string',
        },
        fullName: {
          title: 'Fullname',
          type: 'string',
        },
        biography: {
          title: 'Biography',
          type: 'string',
        },
        isPrivate: {
          title: 'Isprivate',
          type: 'boolean',
        },
        isVerified: {
          title: 'Isverified',
          type: 'boolean',
        },
        isBusinessAccount: {
          title: 'Isbusinessaccount',
          type: 'boolean',
        },
        profilePicUrl: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Profilepicurl',
        },
        externalUrl: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Externalurl',
        },
        categoryName: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Categoryname',
        },
        followers: {
          title: 'Followers',
          type: 'integer',
        },
        following: {
          title: 'Following',
          type: 'integer',
        },
        postCount: {
          title: 'Postcount',
          type: 'integer',
        },
        instagramId: {
          title: 'Instagramid',
          type: 'string',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
        elapsedMs: {
          title: 'Elapsedms',
          type: 'integer',
        },
      },
      required: [
        'success',
        'username',
        'fullName',
        'biography',
        'isPrivate',
        'isVerified',
        'isBusinessAccount',
        'followers',
        'following',
        'postCount',
        'instagramId',
        'fetchedAt',
        'elapsedMs',
      ],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'ip-geolocation.get',
    operationId: 'ip_geolocation_get',
    name: 'Geolocate IP Address',
    description:
      'Resolve an IP (IPv4 or IPv6) to city, region, country, lat/long, timezone, ASN, and currency. Omit the ip field to geolocate the caller.',
    category: 'Data',
    tags: ['ip', 'geolocation', 'asn', 'python'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 1,
    inputSchema: {
      properties: {
        ip: {
          anyOf: [
            {
              maxLength: 45,
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'IPv4 or IPv6 address; omit to geolocate the caller',
          title: 'Ip',
        },
      },
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      properties: {
        ip: {
          title: 'Ip',
          type: 'string',
        },
        city: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'City',
        },
        region: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Region',
        },
        country: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Country',
        },
        countryCode: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Countrycode',
        },
        postal: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Postal',
        },
        latitude: {
          anyOf: [
            {
              type: 'number',
            },
            {
              type: 'null',
            },
          ],
          title: 'Latitude',
        },
        longitude: {
          anyOf: [
            {
              type: 'number',
            },
            {
              type: 'null',
            },
          ],
          title: 'Longitude',
        },
        timezone: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Timezone',
        },
        org: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Org',
        },
        asn: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Asn',
        },
        languages: {
          items: {
            type: 'string',
          },
          title: 'Languages',
          type: 'array',
        },
        currency: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Currency',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
      },
      required: [
        'ip',
        'city',
        'region',
        'country',
        'countryCode',
        'postal',
        'latitude',
        'longitude',
        'timezone',
        'org',
        'asn',
        'languages',
        'currency',
        'fetchedAt',
      ],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'linkedin-check-account-health.post',
    operationId: 'linkedin_check_account_health_post',
    name: 'LinkedIn Check Account Health',
    description:
      'Check whether a LinkedIn session (cookies) is still authenticated via the Voyager me endpoint. Returns isValid plus the logged-in profile name/URL.',
    category: 'Social Media',
    tags: ['linkedin', 'account', 'health', 'auth', 'voyager'],
    workerLanguage: 'python',
    publishTargets: ['upapi'],
    unitWeight: 15,
    inputSchema: {
      properties: {
        sessionCookies: {
          description: 'JSON of session cookies: li_at, JSESSIONID, bcookie.',
          minLength: 1,
          title: 'Sessioncookies',
          type: 'string',
        },
        proxyUrl: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Optional user-provided proxy URL.',
          title: 'Proxyurl',
        },
      },
      required: ['sessionCookies'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      properties: {
        success: {
          default: false,
          title: 'Success',
          type: 'boolean',
        },
        isValid: {
          default: false,
          title: 'Isvalid',
          type: 'boolean',
        },
        profileName: {
          default: '',
          title: 'Profilename',
          type: 'string',
        },
        profileUrl: {
          default: '',
          title: 'Profileurl',
          type: 'string',
        },
        profileUrn: {
          default: '',
          title: 'Profileurn',
          type: 'string',
        },
        message: {
          default: '',
          title: 'Message',
          type: 'string',
        },
        fetchedAt: {
          default: '',
          title: 'Fetchedat',
          type: 'string',
        },
        elapsedMs: {
          default: 0,
          title: 'Elapsedms',
          type: 'integer',
        },
      },
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'linkedin-get-profile.post',
    operationId: 'linkedin_get_profile_post',
    name: 'LinkedIn Get Profile',
    description:
      'Fetch a LinkedIn profile (name, headline, location, vanity) by vanity name via the Voyager dash API. Cookie-authenticated.',
    category: 'Social Media',
    tags: ['linkedin', 'profile', 'voyager'],
    workerLanguage: 'python',
    publishTargets: ['upapi'],
    unitWeight: 15,
    inputSchema: {
      properties: {
        vanityName: {
          description: 'LinkedIn public identifier / vanity name (the slug in /in/<vanity>).',
          minLength: 1,
          title: 'Vanityname',
          type: 'string',
        },
        sessionCookies: {
          description: 'JSON of session cookies: li_at, JSESSIONID, bcookie.',
          minLength: 1,
          title: 'Sessioncookies',
          type: 'string',
        },
        proxyUrl: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Optional user-provided proxy URL.',
          title: 'Proxyurl',
        },
      },
      required: ['vanityName', 'sessionCookies'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        Profile: {
          properties: {
            firstName: {
              default: '',
              title: 'Firstname',
              type: 'string',
            },
            lastName: {
              default: '',
              title: 'Lastname',
              type: 'string',
            },
            headline: {
              default: '',
              title: 'Headline',
              type: 'string',
            },
            location: {
              default: '',
              title: 'Location',
              type: 'string',
            },
            vanityName: {
              default: '',
              title: 'Vanityname',
              type: 'string',
            },
            profileUrl: {
              default: '',
              title: 'Profileurl',
              type: 'string',
            },
            entityUrn: {
              default: '',
              title: 'Entityurn',
              type: 'string',
            },
            publicIdentifier: {
              default: '',
              title: 'Publicidentifier',
              type: 'string',
            },
            summary: {
              default: '',
              title: 'Summary',
              type: 'string',
            },
          },
          title: 'Profile',
          type: 'object',
        },
      },
      properties: {
        success: {
          default: false,
          title: 'Success',
          type: 'boolean',
        },
        profile: {
          $ref: '#/$defs/Profile',
        },
        fields: {
          additionalProperties: true,
          description: 'Additional raw scalar fields extracted from the profile object.',
          title: 'Fields',
          type: 'object',
        },
        message: {
          default: '',
          title: 'Message',
          type: 'string',
        },
        fetchedAt: {
          default: '',
          title: 'Fetchedat',
          type: 'string',
        },
        elapsedMs: {
          default: 0,
          title: 'Elapsedms',
          type: 'integer',
        },
      },
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'linkedin-profile-search.post',
    operationId: 'linkedin_profile_search_post',
    name: 'LinkedIn Profile Search',
    description:
      'Find LinkedIn profiles by job title and location. Returns name, headline, and profile URL. Web-search backed — no login required.',
    category: 'Search',
    tags: ['linkedin', 'search', 'profiles', 'lead-gen'],
    workerLanguage: 'python',
    publishTargets: ['upapi'],
    unitWeight: 15,
    inputSchema: {
      properties: {
        keyword: {
          description: "Job title or skill to search (e.g. 'Data Engineer')",
          minLength: 1,
          title: 'Keyword',
          type: 'string',
        },
        location: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: "Location filter (e.g. 'Tunisia', 'New York')",
          title: 'Location',
        },
        maxResults: {
          default: 50,
          description: 'Max profiles to return',
          maximum: 100,
          minimum: 1,
          title: 'Maxresults',
          type: 'integer',
        },
      },
      required: ['keyword'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        LinkedInProfile: {
          properties: {
            position: {
              title: 'Position',
              type: 'integer',
            },
            name: {
              title: 'Name',
              type: 'string',
            },
            headline: {
              title: 'Headline',
              type: 'string',
            },
            url: {
              title: 'Url',
              type: 'string',
            },
            linkedinPath: {
              title: 'Linkedinpath',
              type: 'string',
            },
          },
          required: ['position', 'name', 'headline', 'url', 'linkedinPath'],
          title: 'LinkedInProfile',
          type: 'object',
        },
      },
      properties: {
        success: {
          title: 'Success',
          type: 'boolean',
        },
        keyword: {
          title: 'Keyword',
          type: 'string',
        },
        location: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Location',
        },
        profiles: {
          items: {
            $ref: '#/$defs/LinkedInProfile',
          },
          title: 'Profiles',
          type: 'array',
        },
        totalFound: {
          title: 'Totalfound',
          type: 'integer',
        },
        query: {
          title: 'Query',
          type: 'string',
        },
        message: {
          title: 'Message',
          type: 'string',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
        elapsedMs: {
          title: 'Elapsedms',
          type: 'integer',
        },
      },
      required: [
        'success',
        'keyword',
        'location',
        'profiles',
        'totalFound',
        'query',
        'message',
        'fetchedAt',
        'elapsedMs',
      ],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'mastodon-profile.get',
    operationId: 'mastodon_profile_get',
    name: 'Get Mastodon Profile',
    description:
      'Look up a Mastodon account by fully-qualified handle (e.g. Gargron@mastodon.social). Works against any Mastodon instance via its open REST API - no auth needed.',
    category: 'Social Media',
    tags: ['mastodon', 'fediverse', 'social', 'python'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 1,
    inputSchema: {
      properties: {
        handle: {
          description: 'Fully-qualified Mastodon handle, e.g. "Gargron@mastodon.social"',
          maxLength: 256,
          minLength: 3,
          title: 'Handle',
          type: 'string',
        },
      },
      required: ['handle'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      properties: {
        id: {
          title: 'Id',
          type: 'string',
        },
        username: {
          title: 'Username',
          type: 'string',
        },
        acct: {
          title: 'Acct',
          type: 'string',
        },
        instance: {
          title: 'Instance',
          type: 'string',
        },
        displayName: {
          title: 'Displayname',
          type: 'string',
        },
        note: {
          title: 'Note',
          type: 'string',
        },
        url: {
          title: 'Url',
          type: 'string',
        },
        avatar: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Avatar',
        },
        header: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Header',
        },
        followersCount: {
          title: 'Followerscount',
          type: 'integer',
        },
        followingCount: {
          title: 'Followingcount',
          type: 'integer',
        },
        statusesCount: {
          title: 'Statusescount',
          type: 'integer',
        },
        createdAt: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Createdat',
        },
        lastStatusAt: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Laststatusat',
        },
        locked: {
          title: 'Locked',
          type: 'boolean',
        },
        bot: {
          title: 'Bot',
          type: 'boolean',
        },
        discoverable: {
          anyOf: [
            {
              type: 'boolean',
            },
            {
              type: 'null',
            },
          ],
          title: 'Discoverable',
        },
        group: {
          title: 'Group',
          type: 'boolean',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
      },
      required: [
        'id',
        'username',
        'acct',
        'instance',
        'displayName',
        'note',
        'url',
        'avatar',
        'header',
        'followersCount',
        'followingCount',
        'statusesCount',
        'createdAt',
        'lastStatusAt',
        'locked',
        'bot',
        'discoverable',
        'group',
        'fetchedAt',
      ],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'nasa-apod.get',
    operationId: 'nasa_apod_get',
    name: 'Get NASA Astronomy Picture of the Day',
    description:
      "Fetch NASA's Astronomy Picture of the Day (APOD). Today's by default, or any date from 1995-06-16 onwards. Returns title, explanation, media URL (+ HD variant), copyright. Uses DEMO_KEY by default; set NASA_API_KEY env for higher rate limits.",
    category: 'Media',
    tags: ['nasa', 'space', 'astronomy', 'python'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 1,
    inputSchema: {
      properties: {
        date: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'YYYY-MM-DD; omit for today. Must be on or after 1995-06-16.',
          title: 'Date',
        },
        hd: {
          default: true,
          description: 'Include high-resolution URL when available',
          title: 'Hd',
          type: 'boolean',
        },
      },
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      properties: {
        date: {
          title: 'Date',
          type: 'string',
        },
        title: {
          title: 'Title',
          type: 'string',
        },
        explanation: {
          title: 'Explanation',
          type: 'string',
        },
        mediaType: {
          title: 'Mediatype',
          type: 'string',
        },
        url: {
          title: 'Url',
          type: 'string',
        },
        hdurl: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Hdurl',
        },
        copyright: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Copyright',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
      },
      required: [
        'date',
        'title',
        'explanation',
        'mediaType',
        'url',
        'hdurl',
        'copyright',
        'fetchedAt',
      ],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'npm-package.get',
    operationId: 'npm_package_get',
    name: 'Get npm Package',
    description:
      'Fetch metadata for a public npm package: latest version, recent versions, maintainers, license, repository, keywords.',
    category: 'Developer Tools',
    tags: ['npm', 'package', 'nodejs', 'python'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 1,
    inputSchema: {
      properties: {
        name: {
          description: 'Package name, including @scope/ for scoped packages (e.g. @angular/core)',
          maxLength: 214,
          minLength: 1,
          title: 'Name',
          type: 'string',
        },
      },
      required: ['name'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        Version: {
          properties: {
            version: {
              title: 'Version',
              type: 'string',
            },
            publishedAt: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Publishedat',
            },
          },
          required: ['version', 'publishedAt'],
          title: 'Version',
          type: 'object',
        },
      },
      properties: {
        name: {
          title: 'Name',
          type: 'string',
        },
        description: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Description',
        },
        latestVersion: {
          title: 'Latestversion',
          type: 'string',
        },
        versionCount: {
          title: 'Versioncount',
          type: 'integer',
        },
        latestVersions: {
          items: {
            $ref: '#/$defs/Version',
          },
          title: 'Latestversions',
          type: 'array',
        },
        license: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'License',
        },
        homepage: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Homepage',
        },
        repository: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Repository',
        },
        keywords: {
          items: {
            type: 'string',
          },
          title: 'Keywords',
          type: 'array',
        },
        maintainers: {
          items: {
            type: 'string',
          },
          title: 'Maintainers',
          type: 'array',
        },
        createdAt: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Createdat',
        },
        modifiedAt: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Modifiedat',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
      },
      required: [
        'name',
        'description',
        'latestVersion',
        'versionCount',
        'latestVersions',
        'license',
        'homepage',
        'repository',
        'keywords',
        'maintainers',
        'createdAt',
        'modifiedAt',
        'fetchedAt',
      ],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'opengraph-parse.get',
    operationId: 'opengraph_parse_get',
    name: 'Parse Open Graph Metadata',
    description:
      'Fetch a URL and extract its Open Graph, Twitter Card, <title>, description, canonical, and favicon metadata - everything needed to render a rich link preview.',
    category: 'SEO tools',
    tags: ['opengraph', 'metadata', 'preview', 'scraping', 'python'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 1,
    inputSchema: {
      properties: {
        url: {
          description: 'URL to fetch + parse for social preview metadata',
          format: 'uri',
          maxLength: 2083,
          minLength: 1,
          title: 'Url',
          type: 'string',
        },
      },
      required: ['url'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      properties: {
        url: {
          title: 'Url',
          type: 'string',
        },
        finalUrl: {
          title: 'Finalurl',
          type: 'string',
        },
        status: {
          title: 'Status',
          type: 'integer',
        },
        title: {
          title: 'Title',
          type: 'string',
        },
        description: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Description',
        },
        ogTitle: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Ogtitle',
        },
        ogDescription: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Ogdescription',
        },
        ogImage: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Ogimage',
        },
        ogType: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Ogtype',
        },
        ogSiteName: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Ogsitename',
        },
        twitterTitle: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Twittertitle',
        },
        twitterDescription: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Twitterdescription',
        },
        twitterImage: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Twitterimage',
        },
        canonical: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Canonical',
        },
        favicon: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Favicon',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
      },
      required: [
        'url',
        'finalUrl',
        'status',
        'title',
        'description',
        'ogTitle',
        'ogDescription',
        'ogImage',
        'ogType',
        'ogSiteName',
        'twitterTitle',
        'twitterDescription',
        'twitterImage',
        'canonical',
        'favicon',
        'fetchedAt',
      ],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'pdf-extract-text.post',
    operationId: 'pdf_extract_text_post',
    name: 'Extract Text from PDF',
    description:
      'Extract the text of a PDF, by URL or as an inline base64 upload. Optionally restrict it to a page range and detect tables, returned as Markdown. Runs locally on PDFium — no third-party document API, no per-page fee.',
    category: 'Tools',
    tags: ['pdf', 'text', 'extract', 'document', 'parse', 'tables'],
    workerLanguage: 'python',
    publishTargets: ['upapi'],
    unitWeight: 2,
    inputSchema: {
      properties: {
        url: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description:
            'Public URL of the PDF to read (e.g. https://example.com/report.pdf). Provide this OR `file`, not both.',
          title: 'Url',
        },
        file: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          contentEncoding: 'base64',
          contentMediaType: 'application/pdf',
          default: null,
          description:
            'The PDF itself, base64-encoded (no data: URI prefix). Max 3.7 MB decoded — base64 inflates by 4/3 and the API request body is capped at 5 MB. Supply `url` instead for anything larger. Expected media type application/pdf.',
          title: 'File',
        },
        pages: {
          anyOf: [
            {
              maxLength: 200,
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description:
            'Page range to extract, 1-based and inclusive (e.g. 1-5,8,11-13). Omit for the whole document.',
          title: 'Pages',
        },
        tables: {
          default: false,
          description:
            'Also detect tables and return each one as a Markdown table (e.g. false). Slower — leave off unless you need them.',
          title: 'Tables',
          type: 'boolean',
        },
      },
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        Table: {
          properties: {
            page: {
              description: '1-based page the table was found on',
              title: 'Page',
              type: 'integer',
            },
            index: {
              description: '0-based position of this table within its page',
              title: 'Index',
              type: 'integer',
            },
            rows: {
              title: 'Rows',
              type: 'integer',
            },
            columns: {
              title: 'Columns',
              type: 'integer',
            },
            markdown: {
              description: 'The table rendered as a GitHub-flavoured Markdown table',
              title: 'Markdown',
              type: 'string',
            },
          },
          required: ['page', 'index', 'rows', 'columns', 'markdown'],
          title: 'Table',
          type: 'object',
        },
      },
      properties: {
        text: {
          description: 'All extracted text, pages joined by a blank line',
          title: 'Text',
          type: 'string',
        },
        pages: {
          description: 'Number of pages the document contains',
          title: 'Pages',
          type: 'integer',
        },
        extractedPages: {
          description: '1-based page numbers actually extracted',
          items: {
            type: 'integer',
          },
          title: 'Extractedpages',
          type: 'array',
        },
        pageTexts: {
          description: 'Text of each extracted page, in order',
          items: {
            type: 'string',
          },
          title: 'Pagetexts',
          type: 'array',
        },
        tables: {
          anyOf: [
            {
              items: {
                $ref: '#/$defs/Table',
              },
              type: 'array',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Detected tables; null unless `tables` was true',
          title: 'Tables',
        },
        truncated: {
          description: 'True when output was cut at the 600000-character response cap',
          title: 'Truncated',
          type: 'boolean',
        },
      },
      required: ['text', 'pages', 'extractedPages', 'pageTexts', 'truncated'],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'pokeapi-pokemon.get',
    operationId: 'pokeapi_pokemon_get',
    name: 'Get Pokemon',
    description:
      'Look up a Pokemon by name or national dex id. Returns types, abilities, base stats (HP/attack/defense/sp.atk/sp.def/speed), height/weight, and artwork URLs.',
    category: 'Media',
    tags: ['pokemon', 'gaming', 'python'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 1,
    inputSchema: {
      properties: {
        name: {
          description: 'Pokemon name (e.g. pikachu) or numeric dex id (as string)',
          maxLength: 50,
          minLength: 1,
          title: 'Name',
          type: 'string',
        },
      },
      required: ['name'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        Stat: {
          properties: {
            name: {
              title: 'Name',
              type: 'string',
            },
            baseStat: {
              title: 'Basestat',
              type: 'integer',
            },
          },
          required: ['name', 'baseStat'],
          title: 'Stat',
          type: 'object',
        },
      },
      properties: {
        id: {
          title: 'Id',
          type: 'integer',
        },
        name: {
          title: 'Name',
          type: 'string',
        },
        height: {
          title: 'Height',
          type: 'integer',
        },
        weight: {
          title: 'Weight',
          type: 'integer',
        },
        types: {
          items: {
            type: 'string',
          },
          title: 'Types',
          type: 'array',
        },
        abilities: {
          items: {
            type: 'string',
          },
          title: 'Abilities',
          type: 'array',
        },
        stats: {
          items: {
            $ref: '#/$defs/Stat',
          },
          title: 'Stats',
          type: 'array',
        },
        baseExperience: {
          anyOf: [
            {
              type: 'integer',
            },
            {
              type: 'null',
            },
          ],
          title: 'Baseexperience',
        },
        spriteFront: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Spritefront',
        },
        officialArtwork: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Officialartwork',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
      },
      required: [
        'id',
        'name',
        'height',
        'weight',
        'types',
        'abilities',
        'stats',
        'baseExperience',
        'spriteFront',
        'officialArtwork',
        'fetchedAt',
      ],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'pypi-package.get',
    operationId: 'pypi_package_get',
    name: 'Get PyPI Package',
    description:
      'Fetch metadata for a public PyPI package: latest version, author, license, project URLs, classifiers, requirements.',
    category: 'Developer Tools',
    tags: ['pypi', 'package', 'python'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 1,
    inputSchema: {
      properties: {
        name: {
          description: 'PyPI package name (e.g. django, curl-cffi)',
          maxLength: 214,
          minLength: 1,
          title: 'Name',
          type: 'string',
        },
      },
      required: ['name'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      properties: {
        name: {
          title: 'Name',
          type: 'string',
        },
        summary: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Summary',
        },
        latestVersion: {
          title: 'Latestversion',
          type: 'string',
        },
        license: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'License',
        },
        author: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Author',
        },
        authorEmail: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Authoremail',
        },
        homepage: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Homepage',
        },
        projectUrls: {
          additionalProperties: {
            type: 'string',
          },
          title: 'Projecturls',
          type: 'object',
        },
        requiresPython: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Requirespython',
        },
        keywords: {
          items: {
            type: 'string',
          },
          title: 'Keywords',
          type: 'array',
        },
        classifiers: {
          items: {
            type: 'string',
          },
          title: 'Classifiers',
          type: 'array',
        },
        releaseCount: {
          title: 'Releasecount',
          type: 'integer',
        },
        latestReleaseUploaded: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Latestreleaseuploaded',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
      },
      required: [
        'name',
        'summary',
        'latestVersion',
        'license',
        'author',
        'authorEmail',
        'homepage',
        'projectUrls',
        'requiresPython',
        'keywords',
        'classifiers',
        'releaseCount',
        'latestReleaseUploaded',
        'fetchedAt',
      ],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'reddit-check-account-health.get',
    operationId: 'reddit_check_account_health_get',
    name: 'Check Reddit Account Health',
    description:
      'Check the health and status of a Reddit account. Pass sessionCookies for the reliable authenticated read (required for new/low-karma accounts); otherwise falls back to parsing the public profile.',
    category: 'Social Media',
    tags: ['reddit', 'account', 'health', 'social'],
    workerLanguage: 'python',
    publishTargets: ['upapi'],
    unitWeight: 4,
    inputSchema: {
      properties: {
        username: {
          description: 'Reddit username (without u/)',
          maxLength: 100,
          minLength: 1,
          title: 'Username',
          type: 'string',
        },
        sessionCookies: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description:
            "Account session cookies (JSON or '; '-delimited) — enables the reliable authenticated me.json read",
          title: 'Sessioncookies',
        },
        proxyUrl: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'User-provided proxy URL',
          title: 'Proxyurl',
        },
      },
      required: ['username'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      properties: {
        username: {
          title: 'Username',
          type: 'string',
        },
        linkKarma: {
          title: 'Linkkarma',
          type: 'integer',
        },
        commentKarma: {
          title: 'Commentkarma',
          type: 'integer',
        },
        totalKarma: {
          title: 'Totalkarma',
          type: 'integer',
        },
        accountAge: {
          title: 'Accountage',
          type: 'integer',
        },
        createdUtc: {
          title: 'Createdutc',
          type: 'number',
        },
        isSuspended: {
          title: 'Issuspended',
          type: 'boolean',
        },
        status: {
          default: 'active',
          description: 'active | banned | suspended | notfound',
          title: 'Status',
          type: 'string',
        },
        isBanned: {
          default: false,
          description: 'True iff Reddit serves the permanent ban page',
          title: 'Isbanned',
          type: 'boolean',
        },
        statusReason: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: "Human-readable why (e.g. 'ban page confirmed via anon cross-check')",
          title: 'Statusreason',
        },
        hasVerifiedEmail: {
          title: 'Hasverifiedemail',
          type: 'boolean',
        },
        isGold: {
          title: 'Isgold',
          type: 'boolean',
        },
        isMod: {
          title: 'Ismod',
          type: 'boolean',
        },
        iconUrl: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Iconurl',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
        elapsedMs: {
          title: 'Elapsedms',
          type: 'integer',
        },
      },
      required: [
        'username',
        'linkKarma',
        'commentKarma',
        'totalKarma',
        'accountAge',
        'createdUtc',
        'isSuspended',
        'hasVerifiedEmail',
        'isGold',
        'isMod',
        'iconUrl',
        'fetchedAt',
        'elapsedMs',
      ],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'reddit-check-comment-visibility.get',
    operationId: 'reddit_check_comment_visibility_get',
    name: 'Check Reddit Comment Visibility',
    description:
      "Detect shadowban/auto-removal: read a comment's focused permalink JSON as a non-author and report whether it is actually visible to the public.",
    category: 'Social Media',
    tags: ['reddit', 'shadowban', 'moderation', 'social'],
    workerLanguage: 'python',
    publishTargets: ['upapi'],
    unitWeight: 4,
    inputSchema: {
      properties: {
        permalink: {
          description:
            'Comment permalink, e.g. /r/Advice/comments/<postid>/comment/<cid>/ (or full URL)',
          minLength: 1,
          title: 'Permalink',
          type: 'string',
        },
        commentId: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 't1_<id> (or bare id). If omitted, parsed from the permalink.',
          title: 'Commentid',
        },
        proxyUrl: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description:
            "Exit IP for the view — SHOULD be the reader account's own pinned IP, and differ from the author's for a true third-party check.",
          title: 'Proxyurl',
        },
        readerSessionCookies: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description:
            "A NON-AUTHOR pooled account's session cookie blob. REQUIRED in practice since 2026-07-30: Reddit answers every anonymous surface (HTML and .json) with a reCAPTCHA or 'blocked by network security' wall, so the cookie-less path is blocked and this check cannot run anonymously. Supplying a DIFFERENT account's session reads the comment the way any logged-in third party would — removed/shadowbanned comments are hidden from every non-author user, logged in or out, so the visibility verdict is the same. MUST NOT be the author's own session: Reddit shows an author their own removed comments, which would manufacture a false 'visible'.",
          title: 'Readersessioncookies',
        },
      },
      required: ['permalink'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      properties: {
        commentId: {
          title: 'Commentid',
          type: 'string',
        },
        permalink: {
          title: 'Permalink',
          type: 'string',
        },
        threadLoaded: {
          title: 'Threadloaded',
          type: 'boolean',
        },
        visibleToAnon: {
          title: 'Visibletoanon',
          type: 'boolean',
        },
        removed: {
          title: 'Removed',
          type: 'boolean',
        },
        shadowSuspected: {
          title: 'Shadowsuspected',
          type: 'boolean',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
        elapsedMs: {
          title: 'Elapsedms',
          type: 'integer',
        },
      },
      required: [
        'commentId',
        'permalink',
        'threadLoaded',
        'visibleToAnon',
        'removed',
        'shadowSuspected',
        'fetchedAt',
        'elapsedMs',
      ],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'reddit-get-trending.get',
    operationId: 'reddit_get_trending_get',
    name: 'Get Trending Reddit Posts',
    description:
      'Fetch trending, hot, rising, top, or new posts from any subreddit with pagination and time filtering.',
    category: 'Social Media',
    tags: ['reddit', 'trending', 'posts', 'social'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 4,
    inputSchema: {
      properties: {
        subreddit: {
          description: 'Subreddit name (without r/)',
          maxLength: 100,
          minLength: 1,
          title: 'Subreddit',
          type: 'string',
        },
        listing: {
          default: 'hot',
          description: 'Listing type: hot, new, rising, top, controversial',
          title: 'Listing',
          type: 'string',
        },
        time: {
          default: 'day',
          description: "Time filter for 'top' listing: hour, day, week, month, year, all",
          title: 'Time',
          type: 'string',
        },
        limit: {
          default: 25,
          description: 'Max posts to return',
          maximum: 100,
          minimum: 1,
          title: 'Limit',
          type: 'integer',
        },
        after: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Pagination cursor',
          title: 'After',
        },
        sessionCookies: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description:
            "Account session cookies (JSON or '; '-delimited). STRONGLY RECOMMENDED: since 2026-07-30 Reddit gates every ANONYMOUS listing surface behind a reCAPTCHA / network-security block, so a call without cookies is expected to fail with CAPTCHA_FAILED or UPSTREAM_BLOCKED rather than return posts.",
          title: 'Sessioncookies',
        },
        proxyUrl: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'User-provided proxy URL',
          title: 'Proxyurl',
        },
      },
      required: ['subreddit'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        PostItem: {
          properties: {
            id: {
              title: 'Id',
              type: 'string',
            },
            title: {
              title: 'Title',
              type: 'string',
            },
            author: {
              title: 'Author',
              type: 'string',
            },
            subreddit: {
              title: 'Subreddit',
              type: 'string',
            },
            selftext: {
              title: 'Selftext',
              type: 'string',
            },
            url: {
              title: 'Url',
              type: 'string',
            },
            permalink: {
              title: 'Permalink',
              type: 'string',
            },
            score: {
              title: 'Score',
              type: 'integer',
            },
            upvoteRatio: {
              title: 'Upvoteratio',
              type: 'number',
            },
            numComments: {
              title: 'Numcomments',
              type: 'integer',
            },
            createdUtc: {
              title: 'Createdutc',
              type: 'number',
            },
            isNsfw: {
              title: 'Isnsfw',
              type: 'boolean',
            },
            isSelf: {
              title: 'Isself',
              type: 'boolean',
            },
            linkFlair: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Linkflair',
            },
          },
          required: [
            'id',
            'title',
            'author',
            'subreddit',
            'selftext',
            'url',
            'permalink',
            'score',
            'upvoteRatio',
            'numComments',
            'createdUtc',
            'isNsfw',
            'isSelf',
            'linkFlair',
          ],
          title: 'PostItem',
          type: 'object',
        },
      },
      properties: {
        subreddit: {
          title: 'Subreddit',
          type: 'string',
        },
        listing: {
          title: 'Listing',
          type: 'string',
        },
        posts: {
          items: {
            $ref: '#/$defs/PostItem',
          },
          title: 'Posts',
          type: 'array',
        },
        after: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'After',
        },
        totalResults: {
          title: 'Totalresults',
          type: 'integer',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
        elapsedMs: {
          title: 'Elapsedms',
          type: 'integer',
        },
      },
      required: [
        'subreddit',
        'listing',
        'posts',
        'after',
        'totalResults',
        'fetchedAt',
        'elapsedMs',
      ],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'reddit-scrape-post.get',
    operationId: 'reddit_scrape_post_get',
    name: 'Scrape Reddit Post & Comments',
    description:
      'Fetch a Reddit post with its comment tree. Returns post metadata, selftext, and nested comments with scores and authorship.',
    category: 'Social Media',
    tags: ['reddit', 'scrape', 'post', 'comments', 'social'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 4,
    inputSchema: {
      properties: {
        subreddit: {
          description: 'Subreddit name',
          minLength: 1,
          title: 'Subreddit',
          type: 'string',
        },
        postId: {
          description: "Reddit post ID (e.g. '1abc23')",
          minLength: 1,
          title: 'Postid',
          type: 'string',
        },
        commentSort: {
          default: 'best',
          description: 'Comment sort: best, top, new, controversial, old, qa',
          title: 'Commentsort',
          type: 'string',
        },
        commentDepth: {
          default: 5,
          description: 'Max comment nesting depth',
          maximum: 20,
          minimum: 0,
          title: 'Commentdepth',
          type: 'integer',
        },
        sessionCookies: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description:
            "Account session cookies (JSON or '; '-delimited). STRONGLY RECOMMENDED: since 2026-07-30 Reddit blocks the anonymous comments JSON read outright, so a call without cookies is expected to fail with UPSTREAM_BLOCKED.",
          title: 'Sessioncookies',
        },
        proxyUrl: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'User-provided proxy URL',
          title: 'Proxyurl',
        },
      },
      required: ['subreddit', 'postId'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        CommentItem: {
          properties: {
            id: {
              title: 'Id',
              type: 'string',
            },
            author: {
              title: 'Author',
              type: 'string',
            },
            body: {
              title: 'Body',
              type: 'string',
            },
            score: {
              title: 'Score',
              type: 'integer',
            },
            createdUtc: {
              title: 'Createdutc',
              type: 'number',
            },
            depth: {
              title: 'Depth',
              type: 'integer',
            },
            isOp: {
              title: 'Isop',
              type: 'boolean',
            },
            parentId: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Parentid',
            },
          },
          required: ['id', 'author', 'body', 'score', 'createdUtc', 'depth', 'isOp', 'parentId'],
          title: 'CommentItem',
          type: 'object',
        },
        PostData: {
          properties: {
            id: {
              title: 'Id',
              type: 'string',
            },
            title: {
              title: 'Title',
              type: 'string',
            },
            author: {
              title: 'Author',
              type: 'string',
            },
            selftext: {
              title: 'Selftext',
              type: 'string',
            },
            url: {
              title: 'Url',
              type: 'string',
            },
            permalink: {
              title: 'Permalink',
              type: 'string',
            },
            score: {
              title: 'Score',
              type: 'integer',
            },
            upvoteRatio: {
              title: 'Upvoteratio',
              type: 'number',
            },
            numComments: {
              title: 'Numcomments',
              type: 'integer',
            },
            createdUtc: {
              title: 'Createdutc',
              type: 'number',
            },
            isNsfw: {
              title: 'Isnsfw',
              type: 'boolean',
            },
            isSelf: {
              title: 'Isself',
              type: 'boolean',
            },
            linkFlair: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Linkflair',
            },
          },
          required: [
            'id',
            'title',
            'author',
            'selftext',
            'url',
            'permalink',
            'score',
            'upvoteRatio',
            'numComments',
            'createdUtc',
            'isNsfw',
            'isSelf',
            'linkFlair',
          ],
          title: 'PostData',
          type: 'object',
        },
      },
      properties: {
        post: {
          $ref: '#/$defs/PostData',
        },
        comments: {
          items: {
            $ref: '#/$defs/CommentItem',
          },
          title: 'Comments',
          type: 'array',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
        elapsedMs: {
          title: 'Elapsedms',
          type: 'integer',
        },
      },
      required: ['post', 'comments', 'fetchedAt', 'elapsedMs'],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'reddit-search-posts.get',
    operationId: 'reddit_search_posts_get',
    name: 'Search Reddit Posts',
    description:
      'Search Reddit posts by keyword with subreddit filtering, sort, and time range. Returns structured post data including scores, comments count, and metadata.',
    category: 'Social Media',
    tags: ['reddit', 'search', 'posts', 'social'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 4,
    inputSchema: {
      properties: {
        query: {
          description: 'Search query',
          maxLength: 500,
          minLength: 1,
          title: 'Query',
          type: 'string',
        },
        subreddit: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Limit search to a specific subreddit',
          title: 'Subreddit',
        },
        sort: {
          default: 'relevance',
          description: 'Sort order: relevance, hot, top, new, comments',
          title: 'Sort',
          type: 'string',
        },
        time: {
          default: 'all',
          description: 'Time filter: hour, day, week, month, year, all',
          title: 'Time',
          type: 'string',
        },
        limit: {
          default: 25,
          description: 'Max results per page',
          maximum: 100,
          minimum: 1,
          title: 'Limit',
          type: 'integer',
        },
        after: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Pagination cursor (fullname of last item)',
          title: 'After',
        },
        sessionCookies: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description:
            "Account session cookies (JSON or '; '-delimited). STRONGLY RECOMMENDED: since 2026-07-30 Reddit gates the anonymous search page behind a reCAPTCHA and blocks the anonymous search.json, so a call without cookies is expected to fail with CAPTCHA_FAILED or UPSTREAM_BLOCKED. With cookies the SSR parse is skipped and the authenticated search.json is read directly.",
          title: 'Sessioncookies',
        },
        proxyUrl: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'User-provided proxy URL',
          title: 'Proxyurl',
        },
      },
      required: ['query'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        PostItem: {
          properties: {
            id: {
              title: 'Id',
              type: 'string',
            },
            title: {
              title: 'Title',
              type: 'string',
            },
            author: {
              title: 'Author',
              type: 'string',
            },
            subreddit: {
              title: 'Subreddit',
              type: 'string',
            },
            selftext: {
              title: 'Selftext',
              type: 'string',
            },
            url: {
              title: 'Url',
              type: 'string',
            },
            permalink: {
              title: 'Permalink',
              type: 'string',
            },
            score: {
              title: 'Score',
              type: 'integer',
            },
            upvoteRatio: {
              title: 'Upvoteratio',
              type: 'number',
            },
            numComments: {
              title: 'Numcomments',
              type: 'integer',
            },
            createdUtc: {
              title: 'Createdutc',
              type: 'number',
            },
            isNsfw: {
              title: 'Isnsfw',
              type: 'boolean',
            },
            isSelf: {
              title: 'Isself',
              type: 'boolean',
            },
            linkFlair: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Linkflair',
            },
          },
          required: [
            'id',
            'title',
            'author',
            'subreddit',
            'selftext',
            'url',
            'permalink',
            'score',
            'upvoteRatio',
            'numComments',
            'createdUtc',
            'isNsfw',
            'isSelf',
            'linkFlair',
          ],
          title: 'PostItem',
          type: 'object',
        },
      },
      properties: {
        query: {
          title: 'Query',
          type: 'string',
        },
        posts: {
          items: {
            $ref: '#/$defs/PostItem',
          },
          title: 'Posts',
          type: 'array',
        },
        after: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'After',
        },
        totalResults: {
          title: 'Totalresults',
          type: 'integer',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
        elapsedMs: {
          title: 'Elapsedms',
          type: 'integer',
        },
      },
      required: ['query', 'posts', 'after', 'totalResults', 'fetchedAt', 'elapsedMs'],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'reddit-subreddit-info.get',
    operationId: 'reddit_subreddit_info_get',
    name: 'Get Subreddit Info',
    description:
      'Fetch subreddit metadata: subscriber count, description, rules, active users, appearance settings.',
    category: 'Social Media',
    tags: ['reddit', 'subreddit', 'metadata', 'social'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 4,
    inputSchema: {
      properties: {
        subreddit: {
          description: 'Subreddit name (without r/)',
          maxLength: 100,
          minLength: 1,
          title: 'Subreddit',
          type: 'string',
        },
        sessionCookies: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description:
            "Account session cookies (JSON or '; '-delimited). STRONGLY RECOMMENDED: since 2026-07-30 Reddit blocks the anonymous about.json read outright, so a call without cookies is expected to fail with UPSTREAM_BLOCKED.",
          title: 'Sessioncookies',
        },
        proxyUrl: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'User-provided proxy URL',
          title: 'Proxyurl',
        },
      },
      required: ['subreddit'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        SubRule: {
          properties: {
            shortName: {
              title: 'Shortname',
              type: 'string',
            },
            description: {
              title: 'Description',
              type: 'string',
            },
            priority: {
              title: 'Priority',
              type: 'integer',
            },
          },
          required: ['shortName', 'description', 'priority'],
          title: 'SubRule',
          type: 'object',
        },
      },
      properties: {
        subreddit: {
          title: 'Subreddit',
          type: 'string',
        },
        title: {
          title: 'Title',
          type: 'string',
        },
        description: {
          title: 'Description',
          type: 'string',
        },
        subscribers: {
          title: 'Subscribers',
          type: 'integer',
        },
        activeUsers: {
          title: 'Activeusers',
          type: 'integer',
        },
        createdUtc: {
          title: 'Createdutc',
          type: 'number',
        },
        isNsfw: {
          title: 'Isnsfw',
          type: 'boolean',
        },
        language: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Language',
        },
        bannerUrl: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Bannerurl',
        },
        iconUrl: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Iconurl',
        },
        rules: {
          items: {
            $ref: '#/$defs/SubRule',
          },
          title: 'Rules',
          type: 'array',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
        elapsedMs: {
          title: 'Elapsedms',
          type: 'integer',
        },
      },
      required: [
        'subreddit',
        'title',
        'description',
        'subscribers',
        'activeUsers',
        'createdUtc',
        'isNsfw',
        'language',
        'bannerUrl',
        'iconUrl',
        'rules',
        'fetchedAt',
        'elapsedMs',
      ],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'screenshot.post',
    operationId: 'screenshot_post',
    name: 'Capture Website Screenshot',
    description:
      'Render any public web page in headless Chromium and return a PNG or JPEG screenshot as base64 — viewport or full page, with a configurable viewport size, wait strategy and settle delay.',
    category: 'Tools',
    tags: ['screenshot', 'browser', 'render', 'image', 'capture', 'thumbnail'],
    workerLanguage: 'ts',
    publishTargets: ['upapi'],
    unitWeight: 20,
    inputSchema: {
      type: 'object',
      properties: {
        url: {
          type: 'string',
          format: 'uri',
          maxLength: 2048,
          description:
            'Absolute http(s) URL of the page to capture (e.g. https://example.com). URLs resolving to private, loopback, link-local or cloud-metadata addresses are rejected.',
        },
        fullPage: {
          type: 'boolean',
          default: false,
          description:
            'Capture the entire scrollable document instead of just the viewport (e.g. false).',
        },
        format: {
          type: 'string',
          enum: ['png', 'jpeg'],
          default: 'png',
          description:
            "Image encoding: 'png' is lossless and sharper for text; 'jpeg' is far smaller and accepts `quality` (e.g. png).",
        },
        quality: {
          type: 'integer',
          minimum: 1,
          maximum: 100,
          description:
            'JPEG encoder quality, 1-100 (default 80). Rejected when format is png, which is lossless (e.g. 80).',
        },
        width: {
          type: 'integer',
          minimum: 320,
          maximum: 3840,
          default: 1280,
          description: 'Viewport width in CSS pixels (e.g. 1280).',
        },
        height: {
          type: 'integer',
          minimum: 320,
          maximum: 2160,
          default: 800,
          description:
            'Viewport height in CSS pixels. Still sets the layout viewport when fullPage is true, but the image then grows to the document height (e.g. 800).',
        },
        waitUntil: {
          type: 'string',
          enum: ['load', 'domcontentloaded', 'networkidle'],
          default: 'load',
          description:
            "When navigation counts as done: 'domcontentloaded' is fastest, 'load' waits for subresources, 'networkidle' waits for the network to go quiet and suits lazy-rendered apps (e.g. load).",
        },
        delayMs: {
          type: 'integer',
          minimum: 0,
          maximum: 5000,
          default: 0,
          description:
            'Extra settle time after navigation before the shot, in milliseconds — for animations or late hydration (e.g. 500).',
        },
        blockAds: {
          type: 'boolean',
          default: false,
          description:
            'Abort requests to known ad and tracker hosts before they load, so they cannot appear in the image (e.g. true).',
        },
      },
      required: ['url'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#',
    },
    outputSchema: {
      type: 'object',
      properties: {
        image: {
          type: 'string',
          description: 'Base64-encoded image bytes. No `data:` URI prefix — decode directly.',
        },
        format: {
          type: 'string',
          enum: ['png', 'jpeg'],
          description: 'Encoding of the returned image.',
        },
        width: {
          type: 'integer',
          exclusiveMinimum: 0,
          description: 'Image width in pixels.',
        },
        height: {
          type: 'integer',
          exclusiveMinimum: 0,
          description: 'Image height in pixels — the full document height when fullPage was true.',
        },
        bytes: {
          type: 'integer',
          exclusiveMinimum: 0,
          description: 'Size of the DECODED image in bytes (the base64 string is ~4/3 of this).',
        },
        finalUrl: {
          type: 'string',
          format: 'uri',
          description: 'URL of the page actually captured, after any redirects.',
        },
      },
      required: ['image', 'format', 'width', 'height', 'bytes', 'finalUrl'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#',
    },
  },
  {
    slug: 'sitemap-parse.get',
    operationId: 'sitemap_parse_get',
    name: 'Parse Sitemap',
    description:
      'Fetch and parse an XML sitemap, sitemap index, or plaintext URL list. Returns URL entries (with lastmod/changefreq/priority) or child sitemap locations.',
    category: 'SEO tools',
    tags: ['sitemap', 'seo', 'xml', 'python'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 1,
    inputSchema: {
      properties: {
        url: {
          description: 'Sitemap URL (usually /sitemap.xml or a sitemap index)',
          format: 'uri',
          maxLength: 2083,
          minLength: 1,
          title: 'Url',
          type: 'string',
        },
        limit: {
          default: 500,
          description: 'Max URLs to return',
          maximum: 5000,
          minimum: 1,
          title: 'Limit',
          type: 'integer',
        },
      },
      required: ['url'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        UrlEntry: {
          properties: {
            loc: {
              title: 'Loc',
              type: 'string',
            },
            lastmod: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Lastmod',
            },
            changefreq: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Changefreq',
            },
            priority: {
              anyOf: [
                {
                  type: 'number',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Priority',
            },
          },
          required: ['loc', 'lastmod', 'changefreq', 'priority'],
          title: 'UrlEntry',
          type: 'object',
        },
      },
      properties: {
        sitemapUrl: {
          title: 'Sitemapurl',
          type: 'string',
        },
        type: {
          title: 'Type',
          type: 'string',
        },
        totalFound: {
          title: 'Totalfound',
          type: 'integer',
        },
        returned: {
          title: 'Returned',
          type: 'integer',
        },
        urls: {
          items: {
            $ref: '#/$defs/UrlEntry',
          },
          title: 'Urls',
          type: 'array',
        },
        childSitemaps: {
          items: {
            type: 'string',
          },
          title: 'Childsitemaps',
          type: 'array',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
      },
      required: [
        'sitemapUrl',
        'type',
        'totalFound',
        'returned',
        'urls',
        'childSitemaps',
        'fetchedAt',
      ],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'stackexchange-search.get',
    operationId: 'stackexchange_search_get',
    name: 'Search Stack Exchange',
    description:
      'Full-text search over any Stack Exchange site (stackoverflow, superuser, askubuntu, etc.). Returns question id, title, tags, score, answer count, accepted-answer flag, asker, timestamps.',
    category: 'Developer Tools',
    tags: ['stackoverflow', 'stackexchange', 'search', 'python'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 1,
    inputSchema: {
      properties: {
        query: {
          description: 'Full-text search query',
          maxLength: 300,
          minLength: 1,
          title: 'Query',
          type: 'string',
        },
        site: {
          default: 'stackoverflow',
          description:
            'Stack Exchange site slug (stackoverflow, superuser, askubuntu, serverfault, etc.)',
          maxLength: 50,
          minLength: 2,
          title: 'Site',
          type: 'string',
        },
        pageSize: {
          default: 10,
          maximum: 30,
          minimum: 1,
          title: 'Pagesize',
          type: 'integer',
        },
        sort: {
          default: 'relevance',
          pattern: '^(relevance|votes|activity|creation)$',
          title: 'Sort',
          type: 'string',
        },
      },
      required: ['query'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        Hit: {
          properties: {
            questionId: {
              title: 'Questionid',
              type: 'integer',
            },
            title: {
              title: 'Title',
              type: 'string',
            },
            link: {
              title: 'Link',
              type: 'string',
            },
            tags: {
              items: {
                type: 'string',
              },
              title: 'Tags',
              type: 'array',
            },
            score: {
              title: 'Score',
              type: 'integer',
            },
            answerCount: {
              title: 'Answercount',
              type: 'integer',
            },
            viewCount: {
              title: 'Viewcount',
              type: 'integer',
            },
            isAnswered: {
              title: 'Isanswered',
              type: 'boolean',
            },
            hasAcceptedAnswer: {
              title: 'Hasacceptedanswer',
              type: 'boolean',
            },
            askedBy: {
              title: 'Askedby',
              type: 'string',
            },
            createdAt: {
              title: 'Createdat',
              type: 'string',
            },
            lastActivity: {
              title: 'Lastactivity',
              type: 'string',
            },
          },
          required: [
            'questionId',
            'title',
            'link',
            'tags',
            'score',
            'answerCount',
            'viewCount',
            'isAnswered',
            'hasAcceptedAnswer',
            'askedBy',
            'createdAt',
            'lastActivity',
          ],
          title: 'Hit',
          type: 'object',
        },
      },
      properties: {
        query: {
          title: 'Query',
          type: 'string',
        },
        site: {
          title: 'Site',
          type: 'string',
        },
        totalReturned: {
          title: 'Totalreturned',
          type: 'integer',
        },
        hasMore: {
          title: 'Hasmore',
          type: 'boolean',
        },
        quotaRemaining: {
          anyOf: [
            {
              type: 'integer',
            },
            {
              type: 'null',
            },
          ],
          title: 'Quotaremaining',
        },
        hits: {
          items: {
            $ref: '#/$defs/Hit',
          },
          title: 'Hits',
          type: 'array',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
      },
      required: [
        'query',
        'site',
        'totalReturned',
        'hasMore',
        'quotaRemaining',
        'hits',
        'fetchedAt',
      ],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'tiktok-check-account-health.get',
    operationId: 'tiktok_check_account_health_get',
    name: 'TikTok Check Account Health',
    description:
      'Check if TikTok account is active/suspended. Returns follower, video, and like counts.',
    category: 'Social Media',
    tags: ['tiktok', 'account', 'health', 'check'],
    workerLanguage: 'python',
    publishTargets: ['upapi'],
    unitWeight: 15,
    inputSchema: {
      properties: {
        username: {
          description: 'TikTok username (without @)',
          minLength: 1,
          title: 'Username',
          type: 'string',
        },
        proxyUrl: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Optional proxy URL',
          title: 'Proxyurl',
        },
      },
      required: ['username'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      properties: {
        success: {
          title: 'Success',
          type: 'boolean',
        },
        username: {
          title: 'Username',
          type: 'string',
        },
        accountActive: {
          title: 'Accountactive',
          type: 'boolean',
        },
        isSuspended: {
          title: 'Issuspended',
          type: 'boolean',
        },
        isPrivate: {
          title: 'Isprivate',
          type: 'boolean',
        },
        verified: {
          title: 'Verified',
          type: 'boolean',
        },
        followerCount: {
          title: 'Followercount',
          type: 'integer',
        },
        followingCount: {
          title: 'Followingcount',
          type: 'integer',
        },
        videoCount: {
          title: 'Videocount',
          type: 'integer',
        },
        likeCount: {
          title: 'Likecount',
          type: 'integer',
        },
        message: {
          title: 'Message',
          type: 'string',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
        elapsedMs: {
          title: 'Elapsedms',
          type: 'integer',
        },
      },
      required: [
        'success',
        'username',
        'accountActive',
        'isSuspended',
        'isPrivate',
        'verified',
        'followerCount',
        'followingCount',
        'videoCount',
        'likeCount',
        'message',
        'fetchedAt',
        'elapsedMs',
      ],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'tiktok-discover-users.post',
    operationId: 'tiktok_discover_users_post',
    name: 'TikTok Discover Users from Comments',
    description:
      'Mine unique commenters from a video for lead discovery. No auth needed. Returns user profiles from comment threads.',
    category: 'Social Media',
    tags: ['tiktok', 'discovery', 'users', 'comments', 'social', 'leads'],
    workerLanguage: 'python',
    publishTargets: ['upapi'],
    unitWeight: 15,
    inputSchema: {
      properties: {
        videoId: {
          description: 'TikTok video ID to mine commenters from',
          minLength: 1,
          title: 'Videoid',
          type: 'string',
        },
        maxUsers: {
          default: 50,
          description: 'Maximum unique users to discover',
          maximum: 200,
          minimum: 1,
          title: 'Maxusers',
          type: 'integer',
        },
        proxyUrl: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Optional proxy URL',
          title: 'Proxyurl',
        },
      },
      required: ['videoId'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        DiscoveredUser: {
          properties: {
            uniqueId: {
              title: 'Uniqueid',
              type: 'string',
            },
            nickname: {
              title: 'Nickname',
              type: 'string',
            },
            secUid: {
              title: 'Secuid',
              type: 'string',
            },
            avatarUrl: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Avatarurl',
            },
          },
          required: ['uniqueId', 'nickname', 'secUid'],
          title: 'DiscoveredUser',
          type: 'object',
        },
      },
      properties: {
        success: {
          title: 'Success',
          type: 'boolean',
        },
        videoId: {
          title: 'Videoid',
          type: 'string',
        },
        users: {
          items: {
            $ref: '#/$defs/DiscoveredUser',
          },
          title: 'Users',
          type: 'array',
        },
        commentsScanned: {
          title: 'Commentsscanned',
          type: 'integer',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
        elapsedMs: {
          title: 'Elapsedms',
          type: 'integer',
        },
      },
      required: ['success', 'videoId', 'users', 'commentsScanned', 'fetchedAt', 'elapsedMs'],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'tiktok-get-comments.post',
    operationId: 'tiktok_get_comments_post',
    name: 'TikTok Get Comments',
    description:
      'Get comments on a video with commenter info. No auth needed. Supports pagination via cursor.',
    category: 'Social Media',
    tags: ['tiktok', 'comments', 'scraping', 'social'],
    workerLanguage: 'python',
    publishTargets: ['upapi'],
    unitWeight: 15,
    inputSchema: {
      properties: {
        videoId: {
          description: 'TikTok video ID (aweme_id)',
          minLength: 1,
          title: 'Videoid',
          type: 'string',
        },
        count: {
          default: 20,
          description: 'Comments per page (max 50)',
          maximum: 50,
          minimum: 1,
          title: 'Count',
          type: 'integer',
        },
        cursor: {
          default: 0,
          description: 'Pagination cursor (0 for first page)',
          minimum: 0,
          title: 'Cursor',
          type: 'integer',
        },
        proxyUrl: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Optional proxy URL',
          title: 'Proxyurl',
        },
      },
      required: ['videoId'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        CommentItem: {
          properties: {
            commentId: {
              title: 'Commentid',
              type: 'string',
            },
            text: {
              title: 'Text',
              type: 'string',
            },
            likes: {
              title: 'Likes',
              type: 'integer',
            },
            replyCount: {
              title: 'Replycount',
              type: 'integer',
            },
            createTime: {
              title: 'Createtime',
              type: 'integer',
            },
            user: {
              additionalProperties: true,
              title: 'User',
              type: 'object',
            },
          },
          required: ['commentId', 'text', 'likes', 'replyCount', 'createTime', 'user'],
          title: 'CommentItem',
          type: 'object',
        },
      },
      properties: {
        success: {
          title: 'Success',
          type: 'boolean',
        },
        videoId: {
          title: 'Videoid',
          type: 'string',
        },
        comments: {
          items: {
            $ref: '#/$defs/CommentItem',
          },
          title: 'Comments',
          type: 'array',
        },
        hasMore: {
          title: 'Hasmore',
          type: 'boolean',
        },
        cursor: {
          title: 'Cursor',
          type: 'integer',
        },
        total: {
          title: 'Total',
          type: 'integer',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
        elapsedMs: {
          title: 'Elapsedms',
          type: 'integer',
        },
      },
      required: [
        'success',
        'videoId',
        'comments',
        'hasMore',
        'cursor',
        'total',
        'fetchedAt',
        'elapsedMs',
      ],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'tiktok-get-user-profile.post',
    operationId: 'tiktok_get_user_profile_post',
    name: 'TikTok Get User Profile',
    description:
      'Get full user profile (bio, stats, verified status) via SSR scraping. No auth needed.',
    category: 'Social Media',
    tags: ['tiktok', 'user', 'profile', 'scraping', 'social'],
    workerLanguage: 'python',
    publishTargets: ['upapi'],
    unitWeight: 15,
    inputSchema: {
      properties: {
        username: {
          description: 'TikTok username (without @)',
          minLength: 1,
          title: 'Username',
          type: 'string',
        },
        proxyUrl: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Optional proxy URL',
          title: 'Proxyurl',
        },
      },
      required: ['username'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      properties: {
        success: {
          title: 'Success',
          type: 'boolean',
        },
        username: {
          title: 'Username',
          type: 'string',
        },
        nickname: {
          title: 'Nickname',
          type: 'string',
        },
        bio: {
          title: 'Bio',
          type: 'string',
        },
        verified: {
          title: 'Verified',
          type: 'boolean',
        },
        privateAccount: {
          title: 'Privateaccount',
          type: 'boolean',
        },
        followers: {
          title: 'Followers',
          type: 'integer',
        },
        following: {
          title: 'Following',
          type: 'integer',
        },
        likes: {
          title: 'Likes',
          type: 'integer',
        },
        videoCount: {
          title: 'Videocount',
          type: 'integer',
        },
        avatarUrl: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Avatarurl',
        },
        secUid: {
          title: 'Secuid',
          type: 'string',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
        elapsedMs: {
          title: 'Elapsedms',
          type: 'integer',
        },
      },
      required: [
        'success',
        'username',
        'nickname',
        'bio',
        'verified',
        'privateAccount',
        'followers',
        'following',
        'likes',
        'videoCount',
        'secUid',
        'fetchedAt',
        'elapsedMs',
      ],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'tiktok-get-video-detail.post',
    operationId: 'tiktok_get_video_detail_post',
    name: 'TikTok Get Video Detail',
    description:
      'Get full video metadata (description, stats, author, music) via SSR scraping. No auth needed.',
    category: 'Social Media',
    tags: ['tiktok', 'video', 'scraping', 'social'],
    workerLanguage: 'python',
    publishTargets: ['upapi'],
    unitWeight: 15,
    inputSchema: {
      properties: {
        username: {
          description: 'TikTok username (without @)',
          minLength: 1,
          title: 'Username',
          type: 'string',
        },
        videoId: {
          description: 'TikTok video ID',
          minLength: 1,
          title: 'Videoid',
          type: 'string',
        },
        proxyUrl: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Optional proxy URL',
          title: 'Proxyurl',
        },
      },
      required: ['username', 'videoId'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      properties: {
        success: {
          title: 'Success',
          type: 'boolean',
        },
        videoId: {
          title: 'Videoid',
          type: 'string',
        },
        description: {
          title: 'Description',
          type: 'string',
        },
        createTime: {
          title: 'Createtime',
          type: 'integer',
        },
        author: {
          additionalProperties: true,
          title: 'Author',
          type: 'object',
        },
        stats: {
          additionalProperties: true,
          title: 'Stats',
          type: 'object',
        },
        music: {
          anyOf: [
            {
              additionalProperties: true,
              type: 'object',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Music',
        },
        duration: {
          default: 0,
          title: 'Duration',
          type: 'integer',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
        elapsedMs: {
          title: 'Elapsedms',
          type: 'integer',
        },
      },
      required: [
        'success',
        'videoId',
        'description',
        'createTime',
        'author',
        'stats',
        'fetchedAt',
        'elapsedMs',
      ],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'timezone-lookup.get',
    operationId: 'timezone_lookup_get',
    name: 'Look Up Timezone',
    description:
      'Resolve a lat/long to its IANA timezone, country, current local time, UTC offset (with DST detection), and standard offset. Uses the free timeapi.io.',
    category: 'Data',
    tags: ['timezone', 'geo', 'python'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 1,
    inputSchema: {
      properties: {
        latitude: {
          description: 'Decimal latitude',
          maximum: 90,
          minimum: -90,
          title: 'Latitude',
          type: 'number',
        },
        longitude: {
          description: 'Decimal longitude',
          maximum: 180,
          minimum: -180,
          title: 'Longitude',
          type: 'number',
        },
      },
      required: ['latitude', 'longitude'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      properties: {
        timezone: {
          title: 'Timezone',
          type: 'string',
        },
        countryCode: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Countrycode',
        },
        countryName: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Countryname',
        },
        currentLocalTime: {
          title: 'Currentlocaltime',
          type: 'string',
        },
        currentUtcOffsetSeconds: {
          title: 'Currentutcoffsetseconds',
          type: 'integer',
        },
        standardUtcOffsetSeconds: {
          title: 'Standardutcoffsetseconds',
          type: 'integer',
        },
        daylightSavingsUtcOffsetSeconds: {
          title: 'Daylightsavingsutcoffsetseconds',
          type: 'integer',
        },
        isDaylightSavingTime: {
          title: 'Isdaylightsavingtime',
          type: 'boolean',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
      },
      required: [
        'timezone',
        'countryCode',
        'countryName',
        'currentLocalTime',
        'currentUtcOffsetSeconds',
        'standardUtcOffsetSeconds',
        'daylightSavingsUtcOffsetSeconds',
        'isDaylightSavingTime',
        'fetchedAt',
      ],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'translate-text.get',
    operationId: 'translate_text_get',
    name: 'Translate Text',
    description:
      'Translate short text (<=500 chars) between language codes via MyMemory Translated. Free tier is 5,000 words/day shared across callers; no auth required.',
    category: 'Communication',
    tags: ['translate', 'i18n', 'language', 'python'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 1,
    inputSchema: {
      properties: {
        text: {
          description: 'Text to translate (<=500 chars)',
          maxLength: 500,
          minLength: 1,
          title: 'Text',
          type: 'string',
        },
        source: {
          default: 'auto',
          description: "Source language code (or 'auto')",
          maxLength: 10,
          minLength: 2,
          title: 'Source',
          type: 'string',
        },
        target: {
          description: 'Target language code (e.g. en, fr, de, ja, es)',
          maxLength: 10,
          minLength: 2,
          title: 'Target',
          type: 'string',
        },
      },
      required: ['text', 'target'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        Match: {
          properties: {
            translation: {
              title: 'Translation',
              type: 'string',
            },
            quality: {
              title: 'Quality',
              type: 'number',
            },
            source: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Source',
            },
          },
          required: ['translation', 'quality', 'source'],
          title: 'Match',
          type: 'object',
        },
      },
      properties: {
        text: {
          title: 'Text',
          type: 'string',
        },
        sourceLang: {
          title: 'Sourcelang',
          type: 'string',
        },
        targetLang: {
          title: 'Targetlang',
          type: 'string',
        },
        translation: {
          title: 'Translation',
          type: 'string',
        },
        quality: {
          title: 'Quality',
          type: 'number',
        },
        matches: {
          items: {
            $ref: '#/$defs/Match',
          },
          title: 'Matches',
          type: 'array',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
      },
      required: [
        'text',
        'sourceLang',
        'targetLang',
        'translation',
        'quality',
        'matches',
        'fetchedAt',
      ],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'weather-current.get',
    operationId: 'weather_current_get',
    name: 'Get Current Weather',
    description:
      'Current temperature, humidity, wind, precipitation, and condition code at the given lat/long via Open-Meteo (free, no auth). Metric or imperial units.',
    category: 'Data',
    tags: ['weather', 'open-meteo', 'python'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 1,
    inputSchema: {
      properties: {
        latitude: {
          description: 'Decimal latitude',
          maximum: 90,
          minimum: -90,
          title: 'Latitude',
          type: 'number',
        },
        longitude: {
          description: 'Decimal longitude',
          maximum: 180,
          minimum: -180,
          title: 'Longitude',
          type: 'number',
        },
        units: {
          default: 'metric',
          description: 'metric: °C, km/h; imperial: °F, mph',
          pattern: '^(metric|imperial)$',
          title: 'Units',
          type: 'string',
        },
      },
      required: ['latitude', 'longitude'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      properties: {
        latitude: {
          title: 'Latitude',
          type: 'number',
        },
        longitude: {
          title: 'Longitude',
          type: 'number',
        },
        temperature: {
          title: 'Temperature',
          type: 'number',
        },
        apparentTemperature: {
          title: 'Apparenttemperature',
          type: 'number',
        },
        humidity: {
          title: 'Humidity',
          type: 'integer',
        },
        windSpeed: {
          title: 'Windspeed',
          type: 'number',
        },
        windDirection: {
          title: 'Winddirection',
          type: 'integer',
        },
        weatherCode: {
          title: 'Weathercode',
          type: 'integer',
        },
        weatherDescription: {
          title: 'Weatherdescription',
          type: 'string',
        },
        isDay: {
          title: 'Isday',
          type: 'boolean',
        },
        precipitation: {
          title: 'Precipitation',
          type: 'number',
        },
        cloudCover: {
          title: 'Cloudcover',
          type: 'integer',
        },
        units: {
          title: 'Units',
          type: 'string',
        },
        observedAt: {
          title: 'Observedat',
          type: 'string',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
      },
      required: [
        'latitude',
        'longitude',
        'temperature',
        'apparentTemperature',
        'humidity',
        'windSpeed',
        'windDirection',
        'weatherCode',
        'weatherDescription',
        'isDay',
        'precipitation',
        'cloudCover',
        'units',
        'observedAt',
        'fetchedAt',
      ],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'web-search.post',
    operationId: 'web_search_post',
    name: 'Web Search',
    description:
      'Search the web and get structured results (titles, URLs, snippets). DuckDuckGo-backed — no browser, no CAPTCHA, fast.',
    category: 'Search',
    tags: ['search', 'web', 'duckduckgo', 'serp'],
    workerLanguage: 'python',
    publishTargets: ['upapi'],
    unitWeight: 1,
    inputSchema: {
      properties: {
        query: {
          description: 'Search query',
          minLength: 1,
          title: 'Query',
          type: 'string',
        },
        maxResults: {
          default: 20,
          description: 'Max results to return',
          maximum: 100,
          minimum: 1,
          title: 'Maxresults',
          type: 'integer',
        },
        region: {
          default: 'wt-wt',
          description: 'Region code (wt-wt=global, us-en, uk-en, etc)',
          title: 'Region',
          type: 'string',
        },
      },
      required: ['query'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        ResultItem: {
          properties: {
            position: {
              title: 'Position',
              type: 'integer',
            },
            title: {
              title: 'Title',
              type: 'string',
            },
            url: {
              title: 'Url',
              type: 'string',
            },
            snippet: {
              title: 'Snippet',
              type: 'string',
            },
            domain: {
              title: 'Domain',
              type: 'string',
            },
          },
          required: ['position', 'title', 'url', 'snippet', 'domain'],
          title: 'ResultItem',
          type: 'object',
        },
      },
      properties: {
        success: {
          title: 'Success',
          type: 'boolean',
        },
        query: {
          title: 'Query',
          type: 'string',
        },
        results: {
          items: {
            $ref: '#/$defs/ResultItem',
          },
          title: 'Results',
          type: 'array',
        },
        totalResults: {
          title: 'Totalresults',
          type: 'integer',
        },
        message: {
          title: 'Message',
          type: 'string',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
        elapsedMs: {
          title: 'Elapsedms',
          type: 'integer',
        },
      },
      required: [
        'success',
        'query',
        'results',
        'totalResults',
        'message',
        'fetchedAt',
        'elapsedMs',
      ],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'wikipedia-article.get',
    operationId: 'wikipedia_article_get',
    name: 'Get Wikipedia Article Summary',
    description:
      'Fetch a Wikipedia article summary (description + extract + thumbnail + coordinates) from any supported language via the public REST API.',
    category: 'Data',
    tags: ['wikipedia', 'article', 'knowledge', 'python'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 1,
    inputSchema: {
      properties: {
        title: {
          description: 'Article title, URL-style slug, or free-form text (e.g. "Albert Einstein")',
          maxLength: 250,
          minLength: 1,
          title: 'Title',
          type: 'string',
        },
        language: {
          default: 'en',
          description: 'Wikipedia language code',
          maxLength: 5,
          minLength: 2,
          title: 'Language',
          type: 'string',
        },
      },
      required: ['title'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      properties: {
        title: {
          title: 'Title',
          type: 'string',
        },
        displayTitle: {
          title: 'Displaytitle',
          type: 'string',
        },
        description: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Description',
        },
        extract: {
          title: 'Extract',
          type: 'string',
        },
        extractHtml: {
          title: 'Extracthtml',
          type: 'string',
        },
        pageUrl: {
          title: 'Pageurl',
          type: 'string',
        },
        lang: {
          title: 'Lang',
          type: 'string',
        },
        revision: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Revision',
        },
        timestamp: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Timestamp',
        },
        thumbnail: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Thumbnail',
        },
        originalImage: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Originalimage',
        },
        coordinates: {
          anyOf: [
            {
              additionalProperties: {
                type: 'number',
              },
              type: 'object',
            },
            {
              type: 'null',
            },
          ],
          title: 'Coordinates',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
      },
      required: [
        'title',
        'displayTitle',
        'description',
        'extract',
        'extractHtml',
        'pageUrl',
        'lang',
        'revision',
        'timestamp',
        'thumbnail',
        'originalImage',
        'coordinates',
        'fetchedAt',
      ],
      title: 'Output',
      type: 'object',
    },
  },
];
