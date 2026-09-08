/**
 * GENERATED FILE — DO NOT EDIT.
 *
 * Produced by packages/sdk/scripts/generate.ts from the TS + Python + Rust
 * operation registries. Run `pnpm generate:sdk` after changing any operation; CI fails if
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
  'chatous-check-session.get',
  'chatous-get-account-state.get',
  'chatous-poll-events.get',
  'cloudflare-page-title.get',
  'contra-company-profile.get',
  'contra-discover-people.get',
  'contra-job-detail.get',
  'crypto-price.get',
  'currency-convert.get',
  'detect-tech-stack.post',
  'devto-articles-search.get',
  'email-read-verification-code.post',
  'email-read-verification-link.post',
  'fetch-markdown.post',
  'github-issue-comments.get',
  'github-repo-contributors.get',
  'github-repo-issues.get',
  'github-repo.get',
  'github-search-discussions.get',
  'github-search-issues.get',
  'github-search-repos.get',
  'github-search-users.get',
  'github-trending.get',
  'github-user-emails.get',
  'github-user.get',
  'google-autocomplete.post',
  'google-maps-place.get',
  'google-maps-reviews.get',
  'google-maps-search.post',
  'hackernews-search.get',
  'html-to-pdf.post',
  'image-ocr.post',
  'instagram-check-account-health.get',
  'instagram-check-account.post',
  'instagram-discover-location.post',
  'instagram-get-post-commenters.post',
  'instagram-get-post-info.post',
  'instagram-get-user-by-id.post',
  'instagram-get-user-posts.post',
  'instagram-get-user-profile.post',
  'ip-geolocation.get',
  'linkedin-check-account-health.post',
  'linkedin-get-profile.post',
  'linkedin-jobs-detail.get',
  'linkedin-jobs-search.get',
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
  'text-analyze.post',
  'tiktok-check-account-health.get',
  'tiktok-discover-users.post',
  'tiktok-get-comment-replies.get',
  'tiktok-get-comments.post',
  'tiktok-get-user-profile.post',
  'tiktok-get-video-detail.post',
  'tiktok-get-video-embed.get',
  'tiktok-oembed.get',
  'timezone-lookup.get',
  'translate-text.get',
  'upwork-jobs-detail.get',
  'upwork-jobs-search.get',
  'weather-current.get',
  'web-search.post',
  'wellfound-application-modal.post',
  'wellfound-browse-jobs.post',
  'wellfound-company-overview.post',
  'wellfound-conversation-detail.post',
  'wellfound-job-detail.post',
  'wellfound-list-applications.post',
  'wellfound-list-conversations.post',
  'wellfound-pipeline-stats.post',
  'wellfound-public-session.post',
  'wellfound-refresh-ops.post',
  'wellfound-search-jobs.post',
  'wellfound-viewer.post',
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
    slug: 'chatous-check-session.get',
    operationId: 'chatous_check_session_get',
    name: 'Chatous Check Session',
    description:
      "Check whether a Chatous connect.sid cookie is still accepted. Returns Chatous's own verdict (0 authenticated, 1111 anonymous or expired) so an expired session is reported as data rather than as a failure.",
    category: 'Social Media',
    tags: ['chatous', 'session', 'auth'],
    workerLanguage: 'python',
    publishTargets: ['upapi'],
    unitWeight: 1,
    inputSchema: {
      properties: {
        connectSid: {
          description:
            "The account's `connect.sid` cookie value, as set on chatous.com when the account signed in.",
          minLength: 1,
          title: 'Connectsid',
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
          description:
            'Optional proxy URL to send this request through. Omit to call Chatous directly. Pass the exit the account normally uses if you keep one per account.',
          title: 'Proxyurl',
        },
      },
      required: ['connectSid'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      properties: {
        valid: {
          description: 'True when Chatous still accepts this connectSid.',
          title: 'Valid',
          type: 'boolean',
        },
        returnCode: {
          description:
            "Chatous's own verdict: 0 = authenticated, 1111 = anonymous or expired. Returned so a caller can tell those two apart from any future third value.",
          title: 'Returncode',
          type: 'integer',
        },
        checkedAt: {
          title: 'Checkedat',
          type: 'string',
        },
        elapsedMs: {
          title: 'Elapsedms',
          type: 'integer',
        },
      },
      required: ['valid', 'returnCode', 'checkedAt', 'elapsedMs'],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'chatous-get-account-state.get',
    operationId: 'chatous_get_account_state_get',
    name: 'Chatous Get Account State',
    description:
      "Read a Chatous account's own profile, its open conversations and their message history in one bounded WebSocket read. Chatous exposes no REST endpoint for any of this, so the socket's opening burst is the only source.",
    category: 'Social Media',
    tags: ['chatous', 'profile', 'conversations', 'messages'],
    workerLanguage: 'python',
    publishTargets: ['upapi'],
    unitWeight: 4,
    inputSchema: {
      properties: {
        connectSid: {
          description:
            "The account's `connect.sid` cookie value, as set on chatous.com when the account signed in.",
          minLength: 1,
          title: 'Connectsid',
          type: 'string',
        },
        maxSeconds: {
          default: 12,
          description:
            'How long to hold the socket open collecting the opening burst. Raise it for an account with many conversations; the call returns early once the server stops sending.',
          maximum: 25,
          minimum: 2,
          title: 'Maxseconds',
          type: 'number',
        },
        maxMessages: {
          default: 300,
          description: 'Cap on collected socket frames, so a very busy account cannot stream on.',
          maximum: 500,
          minimum: 1,
          title: 'Maxmessages',
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
          description:
            'Optional proxy URL for the WebSocket. Omit to connect directly. Pass the exit the account normally uses if you keep one per account.',
          title: 'Proxyurl',
        },
      },
      required: ['connectSid'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        Conversation: {
          properties: {
            chat_id: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Chat Id',
            },
            user_id: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'User Id',
            },
            screenname: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Screenname',
            },
            age: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Age',
            },
            about: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'About',
            },
            gender: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Gender',
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
              title: 'Location',
            },
            profile_tags: {
              anyOf: [
                {
                  items: {
                    type: 'string',
                  },
                  type: 'array',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Profile Tags',
            },
            profile_photo_icon: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Profile Photo Icon',
            },
          },
          title: 'Conversation',
          type: 'object',
        },
        Message: {
          properties: {
            chatId: {
              title: 'Chatid',
              type: 'string',
            },
            message: {
              title: 'Message',
              type: 'string',
            },
            fromMe: {
              description: "True when this account sent it, from Chatous's own `is_me` flag.",
              title: 'Fromme',
              type: 'boolean',
            },
          },
          required: ['chatId', 'message', 'fromMe'],
          title: 'Message',
          type: 'object',
        },
      },
      properties: {
        profile: {
          anyOf: [
            {
              additionalProperties: true,
              type: 'object',
            },
            {
              type: 'null',
            },
          ],
          description:
            "The account's own profile as Chatous pushed it, or null when the burst carried none. Null means 'not sent in this window', never 'no profile'.",
          title: 'Profile',
        },
        conversations: {
          items: {
            $ref: '#/$defs/Conversation',
          },
          title: 'Conversations',
          type: 'array',
        },
        messages: {
          description: 'Message history for the conversations above, oldest first as received.',
          items: {
            $ref: '#/$defs/Message',
          },
          title: 'Messages',
          type: 'array',
        },
        conversationCount: {
          title: 'Conversationcount',
          type: 'integer',
        },
        messageCount: {
          title: 'Messagecount',
          type: 'integer',
        },
        socketOpened: {
          title: 'Socketopened',
          type: 'boolean',
        },
        frameCount: {
          description: 'Raw socket frames collected, before classification.',
          title: 'Framecount',
          type: 'integer',
        },
        undecodableItemCount: {
          description:
            "Socket items this build could not read. Non-zero means the platform's frame shape has changed and this answer is INCOMPLETE - the account may hold conversations that are missing from the lists above.",
          title: 'Undecodableitemcount',
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
        'profile',
        'conversations',
        'messages',
        'conversationCount',
        'messageCount',
        'socketOpened',
        'frameCount',
        'undecodableItemCount',
        'fetchedAt',
        'elapsedMs',
      ],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'chatous-poll-events.get',
    operationId: 'chatous_poll_events_get',
    name: 'Chatous Poll Events',
    description:
      "Listen on a Chatous account's WebSocket for a bounded window and return the events that arrived: new matches with the partner's profile, incoming messages, chat disconnects and queue acknowledgements.",
    category: 'Social Media',
    tags: ['chatous', 'events', 'messages', 'realtime'],
    workerLanguage: 'python',
    publishTargets: ['upapi'],
    unitWeight: 4,
    inputSchema: {
      properties: {
        connectSid: {
          description:
            "The account's `connect.sid` cookie value, as set on chatous.com when the account signed in.",
          minLength: 1,
          title: 'Connectsid',
          type: 'string',
        },
        maxSeconds: {
          default: 15,
          description: 'How long to listen before returning whatever arrived.',
          maximum: 25,
          minimum: 2,
          title: 'Maxseconds',
          type: 'number',
        },
        maxEvents: {
          default: 50,
          description: 'Return as soon as this many socket frames have arrived.',
          maximum: 500,
          minimum: 1,
          title: 'Maxevents',
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
          description: 'Optional proxy URL for the WebSocket. Omit to connect directly.',
          title: 'Proxyurl',
        },
      },
      required: ['connectSid'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        Event: {
          properties: {
            type: {
              description:
                'chat = matched with a new person (carries their profile). message = a message in an existing chat. disconnect = a chat ended. queue = the server acknowledged a queue entry. unknown = a frame type this build does not recognise, with the raw payload.',
              title: 'Type',
              type: 'string',
            },
            chatId: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Chatid',
            },
            chat_id: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Chat Id',
            },
            user_id: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'User Id',
            },
            screenname: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Screenname',
            },
            age: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Age',
            },
            about: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'About',
            },
            gender: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Gender',
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
              title: 'Location',
            },
            profile_tags: {
              anyOf: [
                {
                  items: {
                    type: 'string',
                  },
                  type: 'array',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Profile Tags',
            },
            profile_photo_icon: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Profile Photo Icon',
            },
            message: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Message',
            },
            fromMe: {
              anyOf: [
                {
                  type: 'boolean',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Fromme',
            },
            endedByMe: {
              anyOf: [
                {
                  type: 'boolean',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Endedbyme',
            },
            queueId: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Queueid',
            },
            raw: {
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
              description: 'Present only on `unknown`: the frame exactly as Chatous sent it.',
              title: 'Raw',
            },
          },
          required: ['type'],
          title: 'Event',
          type: 'object',
        },
      },
      properties: {
        events: {
          items: {
            $ref: '#/$defs/Event',
          },
          title: 'Events',
          type: 'array',
        },
        eventCount: {
          title: 'Eventcount',
          type: 'integer',
        },
        unknownEventCount: {
          description:
            'Frames whose type this build does not recognise. A non-zero value is a shape change worth investigating, not an error.',
          title: 'Unknowneventcount',
          type: 'integer',
        },
        socketOpened: {
          title: 'Socketopened',
          type: 'boolean',
        },
        undecodableItemCount: {
          description:
            'Socket items this build could not read at all - distinct from `unknown` events, which ARE returned with their payload. Non-zero means frames were lost to a shape change, so a zero-event answer here is not evidence the account was quiet.',
          title: 'Undecodableitemcount',
          type: 'integer',
        },
        closedByServer: {
          title: 'Closedbyserver',
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
        'events',
        'eventCount',
        'unknownEventCount',
        'socketOpened',
        'undecodableItemCount',
        'closedByServer',
        'fetchedAt',
        'elapsedMs',
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
    slug: 'contra-company-profile.get',
    operationId: 'contra_company_profile_get',
    name: 'Get Contra Company Profile',
    description:
      "Read one contra.com company profile by its slug: name, description, website, location, year founded, verification badge, review count and the client statistics Contra publishes (average rating, projects hired, total spend). Reads Contra's public page — no Contra account is required.",
    category: 'Social Media',
    tags: ['contra', 'company', 'hiring', 'b2b', 'leads'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 4,
    inputSchema: {
      properties: {
        slug: {
          description:
            'Company slug from a contra.com/company/<slug> URL, e.g. "ajproductions_llc_c7a4d0"',
          maxLength: 300,
          minLength: 1,
          title: 'Slug',
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
          description: "User-provided proxy URL. Omit to use the operation's own datacenter pool.",
          title: 'Proxyurl',
        },
      },
      required: ['slug'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        Money: {
          properties: {
            currency: {
              title: 'Currency',
              type: 'string',
            },
            amount: {
              title: 'Amount',
              type: 'number',
            },
          },
          required: ['currency', 'amount'],
          title: 'Money',
          type: 'object',
        },
        Statistics: {
          properties: {
            averageReviewRating: {
              anyOf: [
                {
                  type: 'number',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Averagereviewrating',
            },
            projectCount: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Projectcount',
            },
            totalSpend: {
              anyOf: [
                {
                  $ref: '#/$defs/Money',
                },
                {
                  type: 'null',
                },
              ],
            },
            visibility: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Visibility',
            },
          },
          required: ['averageReviewRating', 'projectCount', 'totalSpend', 'visibility'],
          title: 'Statistics',
          type: 'object',
        },
      },
      properties: {
        slug: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Slug',
        },
        url: {
          title: 'Url',
          type: 'string',
        },
        id: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Id',
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
        headline: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Headline',
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
        website: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Website',
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
        yearFounded: {
          anyOf: [
            {
              type: 'integer',
            },
            {
              type: 'null',
            },
          ],
          title: 'Yearfounded',
        },
        numberOfEmployees: {
          anyOf: [
            {
              type: 'integer',
            },
            {
              type: 'null',
            },
          ],
          title: 'Numberofemployees',
        },
        isVerified: {
          anyOf: [
            {
              type: 'boolean',
            },
            {
              type: 'null',
            },
          ],
          title: 'Isverified',
        },
        profileRoute: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Profileroute',
        },
        logoUrl: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Logourl',
        },
        reviewCount: {
          anyOf: [
            {
              type: 'integer',
            },
            {
              type: 'null',
            },
          ],
          title: 'Reviewcount',
        },
        statistics: {
          anyOf: [
            {
              $ref: '#/$defs/Statistics',
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
        elapsedMs: {
          title: 'Elapsedms',
          type: 'integer',
        },
      },
      required: [
        'slug',
        'url',
        'id',
        'name',
        'headline',
        'description',
        'website',
        'location',
        'yearFounded',
        'numberOfEmployees',
        'isVerified',
        'profileRoute',
        'logoUrl',
        'reviewCount',
        'statistics',
        'fetchedAt',
        'elapsedMs',
      ],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'contra-discover-people.get',
    operationId: 'contra_discover_people_get',
    name: 'Search Contra Freelancers',
    description:
      "Search contra.com's public directory of independent professionals by role or free text. Returns each profile's name, headline, roles, location, review average and count, follower and hire counts, availability and minimum hourly rate. Reads Contra's public page — no Contra account is required.",
    category: 'Social Media',
    tags: ['contra', 'freelancers', 'directory', 'talent', 'leads'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 5,
    inputSchema: {
      properties: {
        roles: {
          description:
            'Contra role names to filter on, e.g. ["Web Developer", "Brand Designer"]. Omit for the unfiltered directory.',
          items: {
            type: 'string',
          },
          maxItems: 5,
          title: 'Roles',
          type: 'array',
        },
        query: {
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
          description: 'Free-text search over profiles. Omit to browse by role only.',
          title: 'Query',
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
          description: "User-provided proxy URL. Omit to use the operation's own datacenter pool.",
          title: 'Proxyurl',
        },
      },
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        Person: {
          properties: {
            id: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Id',
            },
            username: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Username',
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
            title: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Title',
            },
            professionalTitle: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Professionaltitle',
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
            profileUrl: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Profileurl',
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
              title: 'Avatarurl',
            },
            roles: {
              items: {
                type: 'string',
              },
              title: 'Roles',
              type: 'array',
            },
            followerCount: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Followercount',
            },
            hiredCount: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Hiredcount',
            },
            isQuickResponder: {
              anyOf: [
                {
                  type: 'boolean',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Isquickresponder',
            },
            isNewToContra: {
              anyOf: [
                {
                  type: 'boolean',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Isnewtocontra',
            },
            canReceiveInquiries: {
              anyOf: [
                {
                  type: 'boolean',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Canreceiveinquiries',
            },
            visitorIsFollowing: {
              anyOf: [
                {
                  type: 'boolean',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Visitorisfollowing',
            },
            platformEarningsBadge: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Platformearningsbadge',
            },
            reviewSummary: {
              anyOf: [
                {
                  $ref: '#/$defs/ReviewSummary',
                },
                {
                  type: 'null',
                },
              ],
            },
            workPreferences: {
              anyOf: [
                {
                  $ref: '#/$defs/WorkPreferences',
                },
                {
                  type: 'null',
                },
              ],
            },
          },
          required: [
            'id',
            'username',
            'name',
            'title',
            'professionalTitle',
            'location',
            'profileUrl',
            'avatarUrl',
            'roles',
            'followerCount',
            'hiredCount',
            'isQuickResponder',
            'isNewToContra',
            'canReceiveInquiries',
            'visitorIsFollowing',
            'platformEarningsBadge',
            'reviewSummary',
            'workPreferences',
          ],
          title: 'Person',
          type: 'object',
        },
        ReviewSummary: {
          properties: {
            averageScore: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Averagescore',
            },
            count: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Count',
            },
          },
          required: ['averageScore', 'count'],
          title: 'ReviewSummary',
          type: 'object',
        },
        WorkPreferences: {
          properties: {
            isCurrentlyAvailable: {
              anyOf: [
                {
                  type: 'boolean',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Iscurrentlyavailable',
            },
            minimumHourlyRate: {
              anyOf: [
                {
                  type: 'number',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Minimumhourlyrate',
            },
          },
          required: ['isCurrentlyAvailable', 'minimumHourlyRate'],
          title: 'WorkPreferences',
          type: 'object',
        },
      },
      properties: {
        url: {
          title: 'Url',
          type: 'string',
        },
        roles: {
          items: {
            type: 'string',
          },
          title: 'Roles',
          type: 'array',
        },
        query: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Query',
        },
        resultCount: {
          title: 'Resultcount',
          type: 'integer',
        },
        people: {
          items: {
            $ref: '#/$defs/Person',
          },
          title: 'People',
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
      required: ['url', 'roles', 'query', 'resultCount', 'people', 'fetchedAt', 'elapsedMs'],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'contra-job-detail.get',
    operationId: 'contra_job_detail_get',
    name: 'Get Contra Opportunity',
    description:
      "Read one contra.com freelance opportunity by its slug: title, full description, budget range, required roles and tools, application window, and the hiring company with its review count and spend statistics. Reads Contra's public page — no Contra account is required.",
    category: 'Social Media',
    tags: ['contra', 'jobs', 'freelance', 'hiring', 'opportunity'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 4,
    inputSchema: {
      properties: {
        slug: {
          description:
            'Opportunity slug from a contra.com/opportunity/<slug> URL, e.g. "vWsXX3YM-paid-ads-graphic-designer-for-meta-and-linked-in"',
          maxLength: 300,
          minLength: 1,
          title: 'Slug',
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
          description: "User-provided proxy URL. Omit to use the operation's own datacenter pool.",
          title: 'Proxyurl',
        },
      },
      required: ['slug'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        Budget: {
          properties: {
            type: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Type',
            },
            min: {
              anyOf: [
                {
                  $ref: '#/$defs/Money',
                },
                {
                  type: 'null',
                },
              ],
            },
            max: {
              anyOf: [
                {
                  $ref: '#/$defs/Money',
                },
                {
                  type: 'null',
                },
              ],
            },
            estimatedHours: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Estimatedhours',
            },
          },
          required: ['type', 'min', 'max', 'estimatedHours'],
          title: 'Budget',
          type: 'object',
        },
        Money: {
          properties: {
            currency: {
              title: 'Currency',
              type: 'string',
            },
            amount: {
              title: 'Amount',
              type: 'number',
            },
          },
          required: ['currency', 'amount'],
          title: 'Money',
          type: 'object',
        },
        Organization: {
          properties: {
            id: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Id',
            },
            slug: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Slug',
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
            headline: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Headline',
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
            website: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Website',
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
            yearFounded: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Yearfounded',
            },
            numberOfEmployees: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Numberofemployees',
            },
            isVerified: {
              anyOf: [
                {
                  type: 'boolean',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Isverified',
            },
            profileRoute: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Profileroute',
            },
            logoUrl: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Logourl',
            },
            reviewCount: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Reviewcount',
            },
            statistics: {
              anyOf: [
                {
                  additionalProperties: true,
                  type: 'object',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Statistics',
            },
          },
          required: [
            'id',
            'slug',
            'name',
            'headline',
            'description',
            'website',
            'location',
            'yearFounded',
            'numberOfEmployees',
            'isVerified',
            'profileRoute',
            'logoUrl',
            'reviewCount',
            'statistics',
          ],
          title: 'Organization',
          type: 'object',
        },
      },
      properties: {
        slug: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Slug',
        },
        url: {
          title: 'Url',
          type: 'string',
        },
        id: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Id',
        },
        title: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Title',
        },
        status: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Status',
        },
        description: {
          title: 'Description',
          type: 'string',
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
        expiresAt: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Expiresat',
        },
        applicationsClosedAt: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Applicationsclosedat',
        },
        allowGuestApplications: {
          anyOf: [
            {
              type: 'boolean',
            },
            {
              type: 'null',
            },
          ],
          title: 'Allowguestapplications',
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
          title: 'Externalurl',
        },
        numberOfOpenPositions: {
          anyOf: [
            {
              type: 'integer',
            },
            {
              type: 'null',
            },
          ],
          title: 'Numberofopenpositions',
        },
        numberOfFilledPositions: {
          anyOf: [
            {
              type: 'integer',
            },
            {
              type: 'null',
            },
          ],
          title: 'Numberoffilledpositions',
        },
        hiringAsIndividual: {
          anyOf: [
            {
              type: 'boolean',
            },
            {
              type: 'null',
            },
          ],
          title: 'Hiringasindividual',
        },
        visitorCanApply: {
          title: 'Visitorcanapply',
          type: 'boolean',
        },
        budget: {
          $ref: '#/$defs/Budget',
        },
        roles: {
          items: {
            type: 'string',
          },
          title: 'Roles',
          type: 'array',
        },
        tools: {
          items: {
            type: 'string',
          },
          title: 'Tools',
          type: 'array',
        },
        organization: {
          anyOf: [
            {
              $ref: '#/$defs/Organization',
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
        elapsedMs: {
          title: 'Elapsedms',
          type: 'integer',
        },
      },
      required: [
        'slug',
        'url',
        'id',
        'title',
        'status',
        'description',
        'createdAt',
        'expiresAt',
        'applicationsClosedAt',
        'allowGuestApplications',
        'externalUrl',
        'numberOfOpenPositions',
        'numberOfFilledPositions',
        'hiringAsIndividual',
        'visitorCanApply',
        'budget',
        'roles',
        'tools',
        'organization',
        'fetchedAt',
        'elapsedMs',
      ],
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
    slug: 'github-issue-comments.get',
    operationId: 'github_issue_comments_get',
    name: 'List GitHub Issue Comments',
    description:
      'List the comments on a GitHub issue or pull request, paginated: author, association (OWNER/MEMBER/CONTRIBUTOR/NONE), body, reaction count, timestamps. Plus the rate-limit headers.',
    category: 'Developer Tools',
    tags: ['github', 'issues', 'comments', 'developer', 'python'],
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
        issueNumber: {
          description: 'Issue or pull request number',
          minimum: 1,
          title: 'Issuenumber',
          type: 'integer',
        },
        since: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'ISO-8601 timestamp: only comments updated at or after this',
          title: 'Since',
        },
        perPage: {
          default: 30,
          maximum: 100,
          minimum: 1,
          title: 'Perpage',
          type: 'integer',
        },
        page: {
          default: 1,
          minimum: 1,
          title: 'Page',
          type: 'integer',
        },
        token: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Optional GitHub token (5,000 req/h)',
          title: 'Token',
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
          description: 'Optional exit to send from (direct otherwise)',
          title: 'Proxyurl',
        },
      },
      required: ['owner', 'repo', 'issueNumber'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        CommentSummary: {
          properties: {
            id: {
              title: 'Id',
              type: 'integer',
            },
            body: {
              title: 'Body',
              type: 'string',
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
            authorType: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Authortype',
            },
            authorAssociation: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Authorassociation',
            },
            htmlUrl: {
              title: 'Htmlurl',
              type: 'string',
            },
            reactions: {
              title: 'Reactions',
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
            updatedAt: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Updatedat',
            },
          },
          required: [
            'id',
            'body',
            'author',
            'authorType',
            'authorAssociation',
            'htmlUrl',
            'reactions',
            'createdAt',
            'updatedAt',
          ],
          title: 'CommentSummary',
          type: 'object',
        },
        RateLimitInfo: {
          description:
            'The rate-limit headers GitHub returned on THIS response, surfaced so the caller\ncan pace itself instead of the operation sleeping on its behalf.',
          properties: {
            limit: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Limit: requests allowed per window',
              title: 'Limit',
            },
            remaining: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Remaining: requests left',
              title: 'Remaining',
            },
            resetAt: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Reset as an ISO-8601 UTC timestamp',
              title: 'Resetat',
            },
            resetEpoch: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Reset as unix seconds',
              title: 'Resetepoch',
            },
            resource: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Resource: which bucket (core, search, graphql, ...)',
              title: 'Resource',
            },
          },
          required: ['limit', 'remaining', 'resetAt', 'resetEpoch', 'resource'],
          title: 'RateLimitInfo',
          type: 'object',
        },
      },
      properties: {
        items: {
          items: {
            $ref: '#/$defs/CommentSummary',
          },
          title: 'Items',
          type: 'array',
        },
        rateLimit: {
          $ref: '#/$defs/RateLimitInfo',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
      },
      required: ['items', 'rateLimit', 'fetchedAt'],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'github-repo-contributors.get',
    operationId: 'github_repo_contributors_get',
    name: 'List GitHub Repository Contributors',
    description:
      "List a repository's contributors ranked by commit count, paginated: login, id, type, contributions, profile URL. Plus the rate-limit headers.",
    category: 'Developer Tools',
    tags: ['github', 'contributors', 'repo', 'developer', 'python'],
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
        includeAnonymous: {
          default: false,
          description: 'Also return email-only contributors with no GitHub account',
          title: 'Includeanonymous',
          type: 'boolean',
        },
        perPage: {
          default: 30,
          maximum: 100,
          minimum: 1,
          title: 'Perpage',
          type: 'integer',
        },
        page: {
          default: 1,
          minimum: 1,
          title: 'Page',
          type: 'integer',
        },
        token: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Optional GitHub token (5,000 req/h)',
          title: 'Token',
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
          description: 'Optional exit to send from (direct otherwise)',
          title: 'Proxyurl',
        },
      },
      required: ['owner', 'repo'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        ContributorSummary: {
          properties: {
            id: {
              title: 'Id',
              type: 'integer',
            },
            login: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              description: 'None for anonymous (email-only) contributors',
              title: 'Login',
            },
            type: {
              title: 'Type',
              type: 'string',
            },
            contributions: {
              title: 'Contributions',
              type: 'integer',
            },
            htmlUrl: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Htmlurl',
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
              title: 'Avatarurl',
            },
          },
          required: ['id', 'login', 'type', 'contributions', 'htmlUrl', 'avatarUrl'],
          title: 'ContributorSummary',
          type: 'object',
        },
        RateLimitInfo: {
          description:
            'The rate-limit headers GitHub returned on THIS response, surfaced so the caller\ncan pace itself instead of the operation sleeping on its behalf.',
          properties: {
            limit: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Limit: requests allowed per window',
              title: 'Limit',
            },
            remaining: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Remaining: requests left',
              title: 'Remaining',
            },
            resetAt: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Reset as an ISO-8601 UTC timestamp',
              title: 'Resetat',
            },
            resetEpoch: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Reset as unix seconds',
              title: 'Resetepoch',
            },
            resource: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Resource: which bucket (core, search, graphql, ...)',
              title: 'Resource',
            },
          },
          required: ['limit', 'remaining', 'resetAt', 'resetEpoch', 'resource'],
          title: 'RateLimitInfo',
          type: 'object',
        },
      },
      properties: {
        items: {
          items: {
            $ref: '#/$defs/ContributorSummary',
          },
          title: 'Items',
          type: 'array',
        },
        rateLimit: {
          $ref: '#/$defs/RateLimitInfo',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
      },
      required: ['items', 'rateLimit', 'fetchedAt'],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'github-repo-issues.get',
    operationId: 'github_repo_issues_get',
    name: 'List GitHub Repository Issues',
    description:
      "List a repository's issues with state/label/date filters and pagination. Pull requests are filtered out by default. Returns parsed rows (author, labels, comment and reaction counts) plus the rate-limit headers.",
    category: 'Developer Tools',
    tags: ['github', 'issues', 'repo', 'developer', 'python'],
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
        state: {
          default: 'open',
          description: 'open | closed | all',
          title: 'State',
          type: 'string',
        },
        labels: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Comma-separated label names to require',
          title: 'Labels',
        },
        sort: {
          default: 'created',
          description: 'created | updated | comments',
          title: 'Sort',
          type: 'string',
        },
        direction: {
          default: 'desc',
          description: 'asc | desc',
          title: 'Direction',
          type: 'string',
        },
        since: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'ISO-8601 timestamp: only issues updated at or after this',
          title: 'Since',
        },
        perPage: {
          default: 30,
          maximum: 100,
          minimum: 1,
          title: 'Perpage',
          type: 'integer',
        },
        page: {
          default: 1,
          minimum: 1,
          title: 'Page',
          type: 'integer',
        },
        includePullRequests: {
          default: false,
          description:
            'GitHub lists pull requests on this endpoint too; the default drops them so a lead hunt sees only issues',
          title: 'Includepullrequests',
          type: 'boolean',
        },
        token: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Optional GitHub token (5,000 req/h)',
          title: 'Token',
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
          description: 'Optional exit to send from (direct otherwise)',
          title: 'Proxyurl',
        },
      },
      required: ['owner', 'repo'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        IssueSummary: {
          properties: {
            id: {
              title: 'Id',
              type: 'integer',
            },
            number: {
              title: 'Number',
              type: 'integer',
            },
            title: {
              title: 'Title',
              type: 'string',
            },
            body: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Body',
            },
            state: {
              title: 'State',
              type: 'string',
            },
            htmlUrl: {
              title: 'Htmlurl',
              type: 'string',
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
              description: 'owner/repo the issue belongs to',
              title: 'Repository',
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
            authorType: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Authortype',
            },
            authorAssociation: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Authorassociation',
            },
            isPullRequest: {
              description:
                'GitHub lists pull requests on the issues endpoints; this tells them apart',
              title: 'Ispullrequest',
              type: 'boolean',
            },
            comments: {
              title: 'Comments',
              type: 'integer',
            },
            labels: {
              items: {
                type: 'string',
              },
              title: 'Labels',
              type: 'array',
            },
            reactions: {
              title: 'Reactions',
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
            updatedAt: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Updatedat',
            },
            closedAt: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Closedat',
            },
          },
          required: [
            'id',
            'number',
            'title',
            'body',
            'state',
            'htmlUrl',
            'repository',
            'author',
            'authorType',
            'authorAssociation',
            'isPullRequest',
            'comments',
            'labels',
            'reactions',
            'createdAt',
            'updatedAt',
            'closedAt',
          ],
          title: 'IssueSummary',
          type: 'object',
        },
        RateLimitInfo: {
          description:
            'The rate-limit headers GitHub returned on THIS response, surfaced so the caller\ncan pace itself instead of the operation sleeping on its behalf.',
          properties: {
            limit: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Limit: requests allowed per window',
              title: 'Limit',
            },
            remaining: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Remaining: requests left',
              title: 'Remaining',
            },
            resetAt: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Reset as an ISO-8601 UTC timestamp',
              title: 'Resetat',
            },
            resetEpoch: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Reset as unix seconds',
              title: 'Resetepoch',
            },
            resource: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Resource: which bucket (core, search, graphql, ...)',
              title: 'Resource',
            },
          },
          required: ['limit', 'remaining', 'resetAt', 'resetEpoch', 'resource'],
          title: 'RateLimitInfo',
          type: 'object',
        },
      },
      properties: {
        items: {
          items: {
            $ref: '#/$defs/IssueSummary',
          },
          title: 'Items',
          type: 'array',
        },
        rateLimit: {
          $ref: '#/$defs/RateLimitInfo',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
      },
      required: ['items', 'rateLimit', 'fetchedAt'],
      title: 'Output',
      type: 'object',
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
    slug: 'github-search-discussions.get',
    operationId: 'github_search_discussions_get',
    name: 'Search GitHub Discussions',
    description:
      "Search GitHub Discussions across all repositories (GraphQL). Returns title, body, author, repository, category, comment count and the node id you need to reply, with cursor pagination. Requires your own GitHub token - GitHub's GraphQL API does not serve anonymous callers.",
    category: 'Developer Tools',
    tags: ['github', 'search', 'discussions', 'graphql', 'developer', 'python'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 1,
    inputSchema: {
      properties: {
        q: {
          description: 'GitHub search syntax for discussions, e.g. \'"note taking" is:open\'',
          maxLength: 256,
          minLength: 1,
          title: 'Q',
          type: 'string',
        },
        first: {
          default: 30,
          description: 'Rows to return (max 100)',
          maximum: 100,
          minimum: 1,
          title: 'First',
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
          description: 'pageInfo.endCursor from the previous page',
          title: 'After',
        },
        token: {
          description: 'GitHub token - GraphQL does not accept anonymous calls',
          minLength: 1,
          title: 'Token',
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
          description: 'Optional exit to send from (direct otherwise)',
          title: 'Proxyurl',
        },
      },
      required: ['q', 'token'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        DiscussionSummary: {
          properties: {
            id: {
              description: 'GraphQL node id (the value addDiscussionComment takes)',
              title: 'Id',
              type: 'string',
            },
            number: {
              title: 'Number',
              type: 'integer',
            },
            title: {
              title: 'Title',
              type: 'string',
            },
            body: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Body',
            },
            url: {
              title: 'Url',
              type: 'string',
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
            comments: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Comments',
            },
            category: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Category',
            },
          },
          required: [
            'id',
            'number',
            'title',
            'body',
            'url',
            'author',
            'repository',
            'createdAt',
            'comments',
            'category',
          ],
          title: 'DiscussionSummary',
          type: 'object',
        },
        RateLimitInfo: {
          description:
            'The rate-limit headers GitHub returned on THIS response, surfaced so the caller\ncan pace itself instead of the operation sleeping on its behalf.',
          properties: {
            limit: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Limit: requests allowed per window',
              title: 'Limit',
            },
            remaining: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Remaining: requests left',
              title: 'Remaining',
            },
            resetAt: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Reset as an ISO-8601 UTC timestamp',
              title: 'Resetat',
            },
            resetEpoch: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Reset as unix seconds',
              title: 'Resetepoch',
            },
            resource: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Resource: which bucket (core, search, graphql, ...)',
              title: 'Resource',
            },
          },
          required: ['limit', 'remaining', 'resetAt', 'resetEpoch', 'resource'],
          title: 'RateLimitInfo',
          type: 'object',
        },
      },
      properties: {
        totalCount: {
          title: 'Totalcount',
          type: 'integer',
        },
        items: {
          items: {
            $ref: '#/$defs/DiscussionSummary',
          },
          title: 'Items',
          type: 'array',
        },
        endCursor: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Endcursor',
        },
        hasNextPage: {
          title: 'Hasnextpage',
          type: 'boolean',
        },
        rateLimit: {
          $ref: '#/$defs/RateLimitInfo',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
      },
      required: ['totalCount', 'items', 'endCursor', 'hasNextPage', 'rateLimit', 'fetchedAt'],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'github-search-issues.get',
    operationId: 'github_search_issues_get',
    name: 'Search GitHub Issues',
    description:
      "Search issues and pull requests across all of GitHub with GitHub's search syntax. Returns parsed rows (author, repo, labels, comment count, reactions) plus the rate-limit headers so you can pace yourself. Works without a token (10 searches/min per IP); pass your own token for 30/min.",
    category: 'Developer Tools',
    tags: ['github', 'search', 'issues', 'developer', 'python'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 6,
    inputSchema: {
      properties: {
        q: {
          description:
            'GitHub search syntax, e.g. \'is:issue is:open "note taking app" language:python\'',
          maxLength: 256,
          minLength: 1,
          title: 'Q',
          type: 'string',
        },
        perPage: {
          default: 30,
          description: 'Rows per page (max 100)',
          maximum: 100,
          minimum: 1,
          title: 'Perpage',
          type: 'integer',
        },
        page: {
          default: 1,
          description: 'Page number (search caps at 1000 rows)',
          maximum: 34,
          minimum: 1,
          title: 'Page',
          type: 'integer',
        },
        sort: {
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
            'comments | reactions | created | updated | interactions (default: best match)',
          title: 'Sort',
        },
        order: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'asc | desc',
          title: 'Order',
        },
        includePullRequests: {
          default: true,
          description:
            'GitHub returns PRs on this endpoint too; false filters them out client-side',
          title: 'Includepullrequests',
          type: 'boolean',
        },
        token: {
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
            'Optional GitHub token: raises the limit from 10 to 30 searches/min and lets the search see private repos the token can read',
          title: 'Token',
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
          description: 'Optional exit to send from; a datacenter exit is leased when omitted',
          title: 'Proxyurl',
        },
      },
      required: ['q'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        IssueSummary: {
          properties: {
            id: {
              title: 'Id',
              type: 'integer',
            },
            number: {
              title: 'Number',
              type: 'integer',
            },
            title: {
              title: 'Title',
              type: 'string',
            },
            body: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Body',
            },
            state: {
              title: 'State',
              type: 'string',
            },
            htmlUrl: {
              title: 'Htmlurl',
              type: 'string',
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
              description: 'owner/repo the issue belongs to',
              title: 'Repository',
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
            authorType: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Authortype',
            },
            authorAssociation: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Authorassociation',
            },
            isPullRequest: {
              description:
                'GitHub lists pull requests on the issues endpoints; this tells them apart',
              title: 'Ispullrequest',
              type: 'boolean',
            },
            comments: {
              title: 'Comments',
              type: 'integer',
            },
            labels: {
              items: {
                type: 'string',
              },
              title: 'Labels',
              type: 'array',
            },
            reactions: {
              title: 'Reactions',
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
            updatedAt: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Updatedat',
            },
            closedAt: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Closedat',
            },
          },
          required: [
            'id',
            'number',
            'title',
            'body',
            'state',
            'htmlUrl',
            'repository',
            'author',
            'authorType',
            'authorAssociation',
            'isPullRequest',
            'comments',
            'labels',
            'reactions',
            'createdAt',
            'updatedAt',
            'closedAt',
          ],
          title: 'IssueSummary',
          type: 'object',
        },
        RateLimitInfo: {
          description:
            'The rate-limit headers GitHub returned on THIS response, surfaced so the caller\ncan pace itself instead of the operation sleeping on its behalf.',
          properties: {
            limit: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Limit: requests allowed per window',
              title: 'Limit',
            },
            remaining: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Remaining: requests left',
              title: 'Remaining',
            },
            resetAt: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Reset as an ISO-8601 UTC timestamp',
              title: 'Resetat',
            },
            resetEpoch: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Reset as unix seconds',
              title: 'Resetepoch',
            },
            resource: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Resource: which bucket (core, search, graphql, ...)',
              title: 'Resource',
            },
          },
          required: ['limit', 'remaining', 'resetAt', 'resetEpoch', 'resource'],
          title: 'RateLimitInfo',
          type: 'object',
        },
      },
      properties: {
        totalCount: {
          title: 'Totalcount',
          type: 'integer',
        },
        incompleteResults: {
          title: 'Incompleteresults',
          type: 'boolean',
        },
        items: {
          items: {
            $ref: '#/$defs/IssueSummary',
          },
          title: 'Items',
          type: 'array',
        },
        rateLimit: {
          $ref: '#/$defs/RateLimitInfo',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
      },
      required: ['totalCount', 'incompleteResults', 'items', 'rateLimit', 'fetchedAt'],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'github-search-repos.get',
    operationId: 'github_search_repos_get',
    name: 'Search GitHub Repositories',
    description:
      "Search repositories across GitHub with GitHub's search syntax (language, stars, topics, pushed dates). Returns parsed rows plus the rate-limit headers. Works without a token; pass your own for the higher limit.",
    category: 'Developer Tools',
    tags: ['github', 'search', 'repositories', 'developer', 'python'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 6,
    inputSchema: {
      properties: {
        q: {
          description: "GitHub search syntax, e.g. 'note taking language:typescript stars:>100'",
          maxLength: 256,
          minLength: 1,
          title: 'Q',
          type: 'string',
        },
        perPage: {
          default: 30,
          maximum: 100,
          minimum: 1,
          title: 'Perpage',
          type: 'integer',
        },
        page: {
          default: 1,
          maximum: 34,
          minimum: 1,
          title: 'Page',
          type: 'integer',
        },
        sort: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'stars | forks | help-wanted-issues | updated',
          title: 'Sort',
        },
        order: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'asc | desc',
          title: 'Order',
        },
        token: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Optional GitHub token (30 searches/min)',
          title: 'Token',
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
          description: 'Optional exit to send from; a datacenter exit is leased when omitted',
          title: 'Proxyurl',
        },
      },
      required: ['q'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        RateLimitInfo: {
          description:
            'The rate-limit headers GitHub returned on THIS response, surfaced so the caller\ncan pace itself instead of the operation sleeping on its behalf.',
          properties: {
            limit: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Limit: requests allowed per window',
              title: 'Limit',
            },
            remaining: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Remaining: requests left',
              title: 'Remaining',
            },
            resetAt: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Reset as an ISO-8601 UTC timestamp',
              title: 'Resetat',
            },
            resetEpoch: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Reset as unix seconds',
              title: 'Resetepoch',
            },
            resource: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Resource: which bucket (core, search, graphql, ...)',
              title: 'Resource',
            },
          },
          required: ['limit', 'remaining', 'resetAt', 'resetEpoch', 'resource'],
          title: 'RateLimitInfo',
          type: 'object',
        },
        RepoSummary: {
          properties: {
            id: {
              title: 'Id',
              type: 'integer',
            },
            fullName: {
              title: 'Fullname',
              type: 'string',
            },
            owner: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Owner',
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
            updatedAt: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Updatedat',
            },
            pushedAt: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Pushedat',
            },
          },
          required: [
            'id',
            'fullName',
            'owner',
            'description',
            'htmlUrl',
            'homepage',
            'language',
            'stars',
            'forks',
            'openIssues',
            'topics',
            'license',
            'isArchived',
            'isFork',
            'createdAt',
            'updatedAt',
            'pushedAt',
          ],
          title: 'RepoSummary',
          type: 'object',
        },
      },
      properties: {
        totalCount: {
          title: 'Totalcount',
          type: 'integer',
        },
        incompleteResults: {
          title: 'Incompleteresults',
          type: 'boolean',
        },
        items: {
          items: {
            $ref: '#/$defs/RepoSummary',
          },
          title: 'Items',
          type: 'array',
        },
        rateLimit: {
          $ref: '#/$defs/RateLimitInfo',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
      },
      required: ['totalCount', 'incompleteResults', 'items', 'rateLimit', 'fetchedAt'],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'github-search-users.get',
    operationId: 'github_search_users_get',
    name: 'Search GitHub Users',
    description:
      'Search GitHub users and organizations by login, location, language, follower count and more. Returns login/id/type/avatar rows (follow with Get GitHub User for the full profile) plus the rate-limit headers.',
    category: 'Developer Tools',
    tags: ['github', 'search', 'users', 'developer', 'python'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 6,
    inputSchema: {
      properties: {
        q: {
          description: "GitHub search syntax, e.g. 'location:berlin language:python followers:>50'",
          maxLength: 256,
          minLength: 1,
          title: 'Q',
          type: 'string',
        },
        perPage: {
          default: 30,
          maximum: 100,
          minimum: 1,
          title: 'Perpage',
          type: 'integer',
        },
        page: {
          default: 1,
          maximum: 34,
          minimum: 1,
          title: 'Page',
          type: 'integer',
        },
        sort: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'followers | repositories | joined',
          title: 'Sort',
        },
        order: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'asc | desc',
          title: 'Order',
        },
        token: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Optional GitHub token (30 searches/min)',
          title: 'Token',
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
          description: 'Optional exit to send from; a datacenter exit is leased when omitted',
          title: 'Proxyurl',
        },
      },
      required: ['q'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        RateLimitInfo: {
          description:
            'The rate-limit headers GitHub returned on THIS response, surfaced so the caller\ncan pace itself instead of the operation sleeping on its behalf.',
          properties: {
            limit: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Limit: requests allowed per window',
              title: 'Limit',
            },
            remaining: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Remaining: requests left',
              title: 'Remaining',
            },
            resetAt: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Reset as an ISO-8601 UTC timestamp',
              title: 'Resetat',
            },
            resetEpoch: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Reset as unix seconds',
              title: 'Resetepoch',
            },
            resource: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Resource: which bucket (core, search, graphql, ...)',
              title: 'Resource',
            },
          },
          required: ['limit', 'remaining', 'resetAt', 'resetEpoch', 'resource'],
          title: 'RateLimitInfo',
          type: 'object',
        },
        UserSummary: {
          properties: {
            id: {
              title: 'Id',
              type: 'integer',
            },
            login: {
              title: 'Login',
              type: 'string',
            },
            type: {
              title: 'Type',
              type: 'string',
            },
            htmlUrl: {
              title: 'Htmlurl',
              type: 'string',
            },
            avatarUrl: {
              title: 'Avatarurl',
              type: 'string',
            },
            score: {
              anyOf: [
                {
                  type: 'number',
                },
                {
                  type: 'null',
                },
              ],
              description: 'Search relevance score, when the row came from search',
              title: 'Score',
            },
          },
          required: ['id', 'login', 'type', 'htmlUrl', 'avatarUrl', 'score'],
          title: 'UserSummary',
          type: 'object',
        },
      },
      properties: {
        totalCount: {
          title: 'Totalcount',
          type: 'integer',
        },
        incompleteResults: {
          title: 'Incompleteresults',
          type: 'boolean',
        },
        items: {
          items: {
            $ref: '#/$defs/UserSummary',
          },
          title: 'Items',
          type: 'array',
        },
        rateLimit: {
          $ref: '#/$defs/RateLimitInfo',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
      },
      required: ['totalCount', 'incompleteResults', 'items', 'rateLimit', 'fetchedAt'],
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
    slug: 'github-user-emails.get',
    operationId: 'github_user_emails_get',
    name: 'Get GitHub User Commit Emails',
    description:
      'Collect the public commit-author emails a GitHub user has pushed with, from their most recently updated repositories (noreply addresses dropped). One listing call plus one per repository scanned. Plus the rate-limit headers.',
    category: 'Developer Tools',
    tags: ['github', 'email', 'user', 'enrichment', 'developer', 'python'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 3,
    inputSchema: {
      properties: {
        username: {
          description: 'GitHub login',
          maxLength: 100,
          minLength: 1,
          title: 'Username',
          type: 'string',
        },
        maxRepos: {
          default: 3,
          description: "How many of the user's most recently pushed repositories to scan",
          maximum: 10,
          minimum: 1,
          title: 'Maxrepos',
          type: 'integer',
        },
        token: {
          description:
            "GitHub token. REQUIRED here, unlike the single-call reads: this operation fans out to 1 + maxRepos requests, so an anonymous call spends up to 11 of the 60 requests an hour that every keyless caller through this worker shares. With a token the budget is the caller's own 5,000/h.",
          minLength: 1,
          title: 'Token',
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
          description: 'Optional exit to send from (direct otherwise)',
          title: 'Proxyurl',
        },
      },
      required: ['username', 'token'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        CommitEmail: {
          properties: {
            email: {
              title: 'Email',
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
            repository: {
              description: 'owner/repo the commit was read from',
              title: 'Repository',
              type: 'string',
            },
            sha: {
              title: 'Sha',
              type: 'string',
            },
            committedAt: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Committedat',
            },
          },
          required: ['email', 'name', 'repository', 'sha', 'committedAt'],
          title: 'CommitEmail',
          type: 'object',
        },
        RateLimitInfo: {
          description:
            'The rate-limit headers GitHub returned on THIS response, surfaced so the caller\ncan pace itself instead of the operation sleeping on its behalf.',
          properties: {
            limit: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Limit: requests allowed per window',
              title: 'Limit',
            },
            remaining: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Remaining: requests left',
              title: 'Remaining',
            },
            resetAt: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Reset as an ISO-8601 UTC timestamp',
              title: 'Resetat',
            },
            resetEpoch: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Reset as unix seconds',
              title: 'Resetepoch',
            },
            resource: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Resource: which bucket (core, search, graphql, ...)',
              title: 'Resource',
            },
          },
          required: ['limit', 'remaining', 'resetAt', 'resetEpoch', 'resource'],
          title: 'RateLimitInfo',
          type: 'object',
        },
      },
      properties: {
        username: {
          title: 'Username',
          type: 'string',
        },
        emails: {
          items: {
            $ref: '#/$defs/CommitEmail',
          },
          title: 'Emails',
          type: 'array',
        },
        reposScanned: {
          items: {
            type: 'string',
          },
          title: 'Reposscanned',
          type: 'array',
        },
        rateLimit: {
          $ref: '#/$defs/RateLimitInfo',
          description: 'Rate-limit headers from the LAST call made',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
      },
      required: ['username', 'emails', 'reposScanned', 'rateLimit', 'fetchedAt'],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'github-user.get',
    operationId: 'github_user_get',
    name: 'Get GitHub User',
    description:
      "Fetch a GitHub user or organization's public profile: name, bio, company, location, follower/repo counts, avatar, Twitter handle, hireable flag. Plus the rate-limit headers. Works without a token; pass your own for 5,000 req/h.",
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
        token: {
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
            'Optional GitHub token: 5,000 req/h instead of 60, and sees the email field when the profile allows it',
          title: 'Token',
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
          description: 'Optional exit to send from (direct otherwise)',
          title: 'Proxyurl',
        },
      },
      required: ['username'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        RateLimitInfo: {
          description:
            'The rate-limit headers GitHub returned on THIS response, surfaced so the caller\ncan pace itself instead of the operation sleeping on its behalf.',
          properties: {
            limit: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Limit: requests allowed per window',
              title: 'Limit',
            },
            remaining: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Remaining: requests left',
              title: 'Remaining',
            },
            resetAt: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Reset as an ISO-8601 UTC timestamp',
              title: 'Resetat',
            },
            resetEpoch: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Reset as unix seconds',
              title: 'Resetepoch',
            },
            resource: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              description: 'X-RateLimit-Resource: which bucket (core, search, graphql, ...)',
              title: 'Resource',
            },
          },
          required: ['limit', 'remaining', 'resetAt', 'resetEpoch', 'resource'],
          title: 'RateLimitInfo',
          type: 'object',
        },
      },
      properties: {
        login: {
          title: 'Login',
          type: 'string',
        },
        id: {
          title: 'Id',
          type: 'integer',
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
        hireable: {
          anyOf: [
            {
              type: 'boolean',
            },
            {
              type: 'null',
            },
          ],
          title: 'Hireable',
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
        updatedAt: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Updatedat',
        },
        rateLimit: {
          $ref: '#/$defs/RateLimitInfo',
        },
        fetchedAt: {
          title: 'Fetchedat',
          type: 'string',
        },
      },
      required: [
        'login',
        'id',
        'name',
        'type',
        'bio',
        'company',
        'blog',
        'location',
        'email',
        'twitterHandle',
        'hireable',
        'publicRepos',
        'publicGists',
        'followers',
        'following',
        'avatarUrl',
        'htmlUrl',
        'createdAt',
        'updatedAt',
        'rateLimit',
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
    slug: 'google-maps-place.get',
    operationId: 'google_maps_place_get',
    name: 'Google Maps Place Details',
    description:
      'Look up one Google Maps place by place id, CID, feature id or a pasted Maps link, and get its name, full address, coordinates, categories, rating, review count, phone, website and opening hours. Pairs with Google Maps Business Search, which returns the identifiers this accepts.',
    category: 'Maps',
    tags: ['google', 'maps', 'places', 'local', 'business', 'details', 'geo'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 4,
    inputSchema: {
      properties: {
        placeId: {
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
            'Google place id, as returned by Google Maps Business Search (e.g. "ChIJj61dQgK6j4AR4GeTYWZsKWw").',
          title: 'Placeid',
        },
        cid: {
          anyOf: [
            {
              maxLength: 25,
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Google customer id, the decimal identifier (e.g. "1868053941146338963").',
          title: 'Cid',
        },
        featureId: {
          anyOf: [
            {
              maxLength: 60,
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Google feature id (e.g. "0x4cce05120f81812b:0x19eca9297f4bc693").',
          title: 'Featureid',
        },
        url: {
          anyOf: [
            {
              maxLength: 2000,
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description:
            'A Google Maps link to the place, pasted as-is from the browser or the share sheet.',
          title: 'Url',
        },
        language: {
          default: 'en',
          description: 'Language for the name and opening hours, as an ISO code (e.g. "en").',
          maxLength: 5,
          title: 'Language',
          type: 'string',
        },
        region: {
          default: 'us',
          description: 'Two-letter country code biasing the response (e.g. "ca").',
          maxLength: 2,
          minLength: 2,
          title: 'Region',
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
          description:
            "Route the request through your own proxy (e.g. http://user:pass@host:port). Omit to use upAPI's pool.",
          title: 'Proxyurl',
        },
      },
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      description: 'The place itself, flattened — same shape as one Business Search result.',
      properties: {
        name: {
          title: 'Name',
          type: 'string',
        },
        placeId: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Google place id (ChIJ...)',
          title: 'Placeid',
        },
        featureId: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Google feature id (0x<cell>:0x<cid>); pass it to Google Maps Place Details',
          title: 'Featureid',
        },
        cid: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Google customer id — the decimal form of the feature id',
          title: 'Cid',
        },
        address: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Address',
        },
        addressLines: {
          anyOf: [
            {
              items: {
                type: 'string',
              },
              type: 'array',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Addresslines',
        },
        street: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Street',
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
          default: null,
          title: 'City',
        },
        locality: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Human "City, Region, Country" line',
          title: 'Locality',
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
          default: null,
          title: 'Countrycode',
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
        category: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Primary Google category',
          title: 'Category',
        },
        categories: {
          anyOf: [
            {
              items: {
                type: 'string',
              },
              type: 'array',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Categories',
        },
        rating: {
          anyOf: [
            {
              type: 'number',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Rating',
        },
        reviewCount: {
          anyOf: [
            {
              type: 'integer',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description:
            "Total Google reviews. Best-effort: Google serves this field inconsistently on the Maps endpoints — the same request returned it one hour and omitted it the next (measured 2026-08-17) — so treat null as 'not published on this response', not as zero reviews.",
          title: 'Reviewcount',
        },
        phone: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Phone as Google displays it locally',
          title: 'Phone',
        },
        phoneInternational: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'E.164 phone, when Google publishes one',
          title: 'Phoneinternational',
        },
        website: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Website',
        },
        domain: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Domain',
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
          default: null,
          title: 'Timezone',
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
          default: null,
          title: 'Thumbnail',
        },
        openingHours: {
          anyOf: [
            {
              items: {
                additionalProperties: true,
                type: 'object',
              },
              type: 'array',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Per weekday, as [{"day": "Monday", "hours": ["8 AM-11 PM"]}]',
          title: 'Openinghours',
        },
        googleMapsUrl: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Googlemapsurl',
        },
        resolvedFrom: {
          description:
            'Which input identifier this lookup was resolved from: placeId, cid, featureId or url',
          title: 'Resolvedfrom',
          type: 'string',
        },
      },
      required: ['name', 'resolvedFrom'],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'google-maps-reviews.get',
    operationId: 'google_maps_reviews_get',
    name: 'Google Maps Reviews',
    description:
      "Read the reviews on any Google Maps place by place id, CID, feature id or a pasted Maps link. Returns each review's rating, full text, author, photos, timestamp and the owner's reply, sorted by relevance, date or rating, with cursor pagination through the whole feed.",
    category: 'Maps',
    tags: ['google', 'maps', 'reviews', 'ratings', 'local', 'business', 'reputation'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 6,
    inputSchema: {
      properties: {
        placeId: {
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
            'Google place id, as returned by Google Maps Business Search (e.g. "ChIJj61dQgK6j4AR4GeTYWZsKWw").',
          title: 'Placeid',
        },
        cid: {
          anyOf: [
            {
              maxLength: 25,
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Google customer id, the decimal identifier (e.g. "1868053941146338963").',
          title: 'Cid',
        },
        featureId: {
          anyOf: [
            {
              maxLength: 60,
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Google feature id (e.g. "0x4cce05120f81812b:0x19eca9297f4bc693").',
          title: 'Featureid',
        },
        url: {
          anyOf: [
            {
              maxLength: 2000,
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description:
            'A Google Maps link to the place, pasted as-is from the browser or the share sheet.',
          title: 'Url',
        },
        maxResults: {
          default: 20,
          description:
            'How many reviews to return, up to 200 (e.g. 100). Google serves at most 60 per page, so higher values cost proportionally more time.',
          maximum: 200,
          minimum: 1,
          title: 'Maxresults',
          type: 'integer',
        },
        sort: {
          default: 'relevance',
          description:
            'Order Google returns the reviews in: relevance (Google\'s own "most relevant" ranking, the default), newest, highest_rating or lowest_rating.',
          title: 'Sort',
          type: 'string',
        },
        pageToken: {
          anyOf: [
            {
              maxLength: 3000,
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description:
            'Continue a previous call: pass the `nextPageToken` it returned. Keep `sort` and the place identifier the same, or the token will not line up.',
          title: 'Pagetoken',
        },
        language: {
          default: 'en',
          description:
            'Language for the reviews, as an ISO code (e.g. "en", "fr"). Google uses this to pick and rank which reviews it surfaces, so different languages genuinely return different reviews rather than translations of one set.',
          maxLength: 5,
          title: 'Language',
          type: 'string',
        },
        region: {
          default: 'us',
          description: 'Two-letter country code biasing the response (e.g. "ca").',
          maxLength: 2,
          minLength: 2,
          title: 'Region',
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
          description:
            "Route the request through your own proxy (e.g. http://user:pass@host:port). Omit to use upAPI's pool.",
          title: 'Proxyurl',
        },
      },
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        OwnerResponse: {
          properties: {
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
              title: 'Text',
            },
            relativeTime: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              description: 'How Google phrases the age of the reply (e.g. "a month ago")',
              title: 'Relativetime',
            },
          },
          title: 'OwnerResponse',
          type: 'object',
        },
        Review: {
          description: 'One Google Maps review.',
          properties: {
            reviewId: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Reviewid',
            },
            rating: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              description: 'Stars the author gave, 1-5',
              title: 'Rating',
            },
            ratingMax: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              description: 'The scale the rating is on — 5 on every response measured',
              title: 'Ratingmax',
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
              description:
                'The review body in full. Null when the author rated without writing anything, which is common — roughly one review in ten on the places measured.',
              title: 'Text',
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
              description: 'Language of the text as delivered, as an ISO code',
              title: 'Language',
            },
            relativeTime: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              description: 'How Google phrases the age of the review (e.g. "a week ago")',
              title: 'Relativetime',
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
              default: null,
              description: 'When the review was posted, as an ISO 8601 UTC timestamp',
              title: 'Publishedat',
            },
            author: {
              anyOf: [
                {
                  $ref: '#/$defs/ReviewAuthor',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
            },
            photos: {
              anyOf: [
                {
                  items: {
                    $ref: '#/$defs/ReviewPhoto',
                  },
                  type: 'array',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              description: 'Photos the author attached to this review',
              title: 'Photos',
            },
            ownerResponse: {
              anyOf: [
                {
                  $ref: '#/$defs/OwnerResponse',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              description: "The business owner's public reply, when there is one",
            },
            reviewUrl: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              description: 'Permalink to the review on Google Maps',
              title: 'Reviewurl',
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
              default: null,
              description:
                'Which network published the review — "Google" for the overwhelming majority, but Google also syndicates partner sources on some places',
              title: 'Source',
            },
          },
          title: 'Review',
          type: 'object',
        },
        ReviewAuthor: {
          properties: {
            name: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Name',
            },
            profileUrl: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Profileurl',
            },
            photoUrl: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Photourl',
            },
            reviewCount: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              description: 'How many reviews this author has contributed to Google overall',
              title: 'Reviewcount',
            },
            photoCount: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              description: 'How many photos this author has contributed to Google overall',
              title: 'Photocount',
            },
          },
          title: 'ReviewAuthor',
          type: 'object',
        },
        ReviewPhoto: {
          properties: {
            url: {
              title: 'Url',
              type: 'string',
            },
            caption: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Caption',
            },
          },
          required: ['url'],
          title: 'ReviewPhoto',
          type: 'object',
        },
      },
      properties: {
        featureId: {
          description: 'The Google feature id these reviews were read from',
          title: 'Featureid',
          type: 'string',
        },
        resolvedFrom: {
          description:
            'Which input identifier this lookup was resolved from: placeId, cid, featureId or url',
          title: 'Resolvedfrom',
          type: 'string',
        },
        sort: {
          title: 'Sort',
          type: 'string',
        },
        count: {
          title: 'Count',
          type: 'integer',
        },
        reviews: {
          items: {
            $ref: '#/$defs/Review',
          },
          title: 'Reviews',
          type: 'array',
        },
        nextPageToken: {
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
            'Pass back as `pageToken` to read the next page. Null when Google has no more reviews to give.',
          title: 'Nextpagetoken',
        },
        truncated: {
          description: 'True when Google still had more reviews than `maxResults` allowed',
          title: 'Truncated',
          type: 'boolean',
        },
      },
      required: ['featureId', 'resolvedFrom', 'sort', 'count', 'reviews', 'truncated'],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'google-maps-search.post',
    operationId: 'google_maps_search_post',
    name: 'Google Maps Business Search',
    description:
      'Search Google Maps for businesses by text query, optionally centred on coordinates. Returns each place with its name, address, coordinates, category, rating, review count, opening hours, website and phone where Google publishes them, plus the place id you can pass to Google Maps Place Details.',
    category: 'Maps',
    tags: ['google', 'maps', 'places', 'local', 'business', 'leads', 'geo'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 6,
    inputSchema: {
      properties: {
        query: {
          description:
            'What to search for, exactly as you would type it into Google Maps (e.g. "coffee shops in Ottawa" or "dentist near Shoreditch London").',
          maxLength: 300,
          minLength: 1,
          title: 'Query',
          type: 'string',
        },
        latitude: {
          anyOf: [
            {
              maximum: 90,
              minimum: -90,
              type: 'number',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description:
            'Centre the search on this latitude (e.g. 45.4215). Pass with `longitude`. Omit to let Google infer the area from the query text.',
          title: 'Latitude',
        },
        longitude: {
          anyOf: [
            {
              maximum: 180,
              minimum: -180,
              type: 'number',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Centre the search on this longitude (e.g. -75.6972). Pass with `latitude`.',
          title: 'Longitude',
        },
        zoom: {
          anyOf: [
            {
              maximum: 21,
              minimum: 3,
              type: 'number',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description:
            'Map zoom for the coordinate search, controlling the radius: 13 is roughly a city (the default), 16 a neighbourhood, 10 a metro area.',
          title: 'Zoom',
        },
        maxResults: {
          default: 20,
          description:
            'How many places to return, up to 100 (e.g. 40). Google serves 20 per page, so higher values cost proportionally more time.',
          maximum: 100,
          minimum: 1,
          title: 'Maxresults',
          type: 'integer',
        },
        language: {
          default: 'en',
          description: 'Language for names and hours, as an ISO code (e.g. "en", "fr").',
          maxLength: 5,
          title: 'Language',
          type: 'string',
        },
        region: {
          default: 'us',
          description: 'Two-letter country code biasing the results (e.g. "ca", "gb").',
          maxLength: 2,
          minLength: 2,
          title: 'Region',
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
          description:
            "Route the request through your own proxy (e.g. http://user:pass@host:port). Omit to use upAPI's pool.",
          title: 'Proxyurl',
        },
      },
      required: ['query'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        Place: {
          description:
            'One Google Maps business.\n\nShared by both operations on purpose: search rows and the place-details\nresponse are the SAME record shape upstream, so publishing two subtly\ndifferent schemas for them would be a fiction that callers pay for when they\nchain a search into a details lookup.',
          properties: {
            name: {
              title: 'Name',
              type: 'string',
            },
            placeId: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              description: 'Google place id (ChIJ...)',
              title: 'Placeid',
            },
            featureId: {
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
                'Google feature id (0x<cell>:0x<cid>); pass it to Google Maps Place Details',
              title: 'Featureid',
            },
            cid: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              description: 'Google customer id — the decimal form of the feature id',
              title: 'Cid',
            },
            address: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Address',
            },
            addressLines: {
              anyOf: [
                {
                  items: {
                    type: 'string',
                  },
                  type: 'array',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Addresslines',
            },
            street: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Street',
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
              default: null,
              title: 'City',
            },
            locality: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              description: 'Human "City, Region, Country" line',
              title: 'Locality',
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
              default: null,
              title: 'Countrycode',
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
            category: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              description: 'Primary Google category',
              title: 'Category',
            },
            categories: {
              anyOf: [
                {
                  items: {
                    type: 'string',
                  },
                  type: 'array',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Categories',
            },
            rating: {
              anyOf: [
                {
                  type: 'number',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Rating',
            },
            reviewCount: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              description:
                "Total Google reviews. Best-effort: Google serves this field inconsistently on the Maps endpoints — the same request returned it one hour and omitted it the next (measured 2026-08-17) — so treat null as 'not published on this response', not as zero reviews.",
              title: 'Reviewcount',
            },
            phone: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              description: 'Phone as Google displays it locally',
              title: 'Phone',
            },
            phoneInternational: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              description: 'E.164 phone, when Google publishes one',
              title: 'Phoneinternational',
            },
            website: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Website',
            },
            domain: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Domain',
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
              default: null,
              title: 'Timezone',
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
              default: null,
              title: 'Thumbnail',
            },
            openingHours: {
              anyOf: [
                {
                  items: {
                    additionalProperties: true,
                    type: 'object',
                  },
                  type: 'array',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              description: 'Per weekday, as [{"day": "Monday", "hours": ["8 AM-11 PM"]}]',
              title: 'Openinghours',
            },
            googleMapsUrl: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Googlemapsurl',
            },
          },
          required: ['name'],
          title: 'Place',
          type: 'object',
        },
      },
      properties: {
        query: {
          title: 'Query',
          type: 'string',
        },
        count: {
          title: 'Count',
          type: 'integer',
        },
        places: {
          items: {
            $ref: '#/$defs/Place',
          },
          title: 'Places',
          type: 'array',
        },
        truncated: {
          description: 'True when Google still had more results than `maxResults` allowed',
          title: 'Truncated',
          type: 'boolean',
        },
      },
      required: ['query', 'count', 'places', 'truncated'],
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
    slug: 'instagram-get-user-by-id.post',
    operationId: 'instagram_get_user_by_id_post',
    name: 'Instagram Get User By Id',
    description:
      'Resolve an Instagram profile from a numeric user id, no login. Anonymous returns identity (username, profile picture) — see detailLevel.',
    category: 'Social Media',
    tags: ['instagram', 'profile', 'user', 'scraping', 'social', 'http'],
    workerLanguage: 'python',
    publishTargets: ['upapi'],
    unitWeight: 15,
    inputSchema: {
      properties: {
        userId: {
          description: 'Numeric Instagram user id (pk)',
          minLength: 1,
          title: 'Userid',
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
          description: 'Optional proxy URL. Instagram 401-gates anonymous reads per egress IP.',
          title: 'Proxyurl',
        },
      },
      required: ['userId'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      properties: {
        success: {
          title: 'Success',
          type: 'boolean',
        },
        pk: {
          title: 'Pk',
          type: 'string',
        },
        username: {
          title: 'Username',
          type: 'string',
        },
        detailLevel: {
          description:
            "'stub' = identity only (what anonymous returns today); 'full' = counts and profile detail were disclosed",
          title: 'Detaillevel',
          type: 'string',
        },
        fullName: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Fullname',
        },
        biography: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Biography',
        },
        isPrivate: {
          anyOf: [
            {
              type: 'boolean',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Isprivate',
        },
        isVerified: {
          anyOf: [
            {
              type: 'boolean',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Isverified',
        },
        isBusiness: {
          anyOf: [
            {
              type: 'boolean',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Isbusiness',
        },
        isProfessional: {
          anyOf: [
            {
              type: 'boolean',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Isprofessional',
        },
        category: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Category',
        },
        businessEmail: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Businessemail',
        },
        publicEmail: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Publicemail',
        },
        businessPhone: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Businessphone',
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
        bioLinks: {
          items: {
            type: 'string',
          },
          title: 'Biolinks',
          type: 'array',
        },
        followerCount: {
          anyOf: [
            {
              type: 'integer',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: "null = not disclosed by this surface, never 'zero followers'",
          title: 'Followercount',
        },
        followingCount: {
          anyOf: [
            {
              type: 'integer',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Followingcount',
        },
        mediaCount: {
          anyOf: [
            {
              type: 'integer',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Mediacount',
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
        fbid: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Fbid',
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
      required: ['success', 'pk', 'username', 'detailLevel', 'bioLinks', 'fetchedAt', 'elapsedMs'],
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
    slug: 'linkedin-jobs-detail.get',
    operationId: 'linkedin_jobs_detail_get',
    name: 'Get LinkedIn Job Details',
    description:
      "Fetch one LinkedIn job posting: full description, seniority level, employment type, job function, industries, applicant count and posting age. Accepts the job id from linkedin-jobs-search, a job URL or a urn:li:jobPosting URN. Reads LinkedIn's public guest surface — no LinkedIn account or cookie is required.",
    category: 'Social Media',
    tags: ['linkedin', 'jobs', 'hiring', 'recruiting', 'job-description'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 6,
    inputSchema: {
      properties: {
        jobId: {
          description:
            'LinkedIn posting id, job URL or urn:li:jobPosting URN. Ids come from linkedin-jobs-search (e.g. 4431992044).',
          maxLength: 300,
          minLength: 1,
          title: 'Jobid',
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
          description: "User-provided proxy URL. Omit to use the operation's own datacenter pool.",
          title: 'Proxyurl',
        },
      },
      required: ['jobId'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      properties: {
        jobId: {
          title: 'Jobid',
          type: 'string',
        },
        title: {
          title: 'Title',
          type: 'string',
        },
        company: {
          title: 'Company',
          type: 'string',
        },
        companyUrl: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Companyurl',
        },
        location: {
          title: 'Location',
          type: 'string',
        },
        postedLabel: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Postedlabel',
        },
        applicantsLabel: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Applicantslabel',
        },
        seniorityLevel: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Senioritylevel',
        },
        employmentType: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Employmenttype',
        },
        jobFunction: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Jobfunction',
        },
        industries: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Industries',
        },
        descriptionHtml: {
          title: 'Descriptionhtml',
          type: 'string',
        },
        descriptionText: {
          title: 'Descriptiontext',
          type: 'string',
        },
        jobUrl: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Joburl',
        },
        logoUrl: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Logourl',
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
        'jobId',
        'title',
        'company',
        'companyUrl',
        'location',
        'postedLabel',
        'applicantsLabel',
        'seniorityLevel',
        'employmentType',
        'jobFunction',
        'industries',
        'descriptionHtml',
        'descriptionText',
        'jobUrl',
        'logoUrl',
        'fetchedAt',
        'elapsedMs',
      ],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'linkedin-jobs-search.get',
    operationId: 'linkedin_jobs_search_get',
    name: 'Search LinkedIn Jobs',
    description:
      "Search LinkedIn job postings by keyword and location. Returns title, company, location, posting date, salary hint and the job id you pass to linkedin-jobs-detail. Reads LinkedIn's public guest surface — no LinkedIn account or cookie is required.",
    category: 'Social Media',
    tags: ['linkedin', 'jobs', 'hiring', 'recruiting', 'search'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 6,
    inputSchema: {
      properties: {
        keywords: {
          description: 'Job title, skill or company to search for (e.g. "python developer")',
          maxLength: 200,
          minLength: 1,
          title: 'Keywords',
          type: 'string',
        },
        location: {
          default: 'United States',
          description: 'City, region or country to search in (e.g. "United States")',
          maxLength: 200,
          title: 'Location',
          type: 'string',
        },
        page: {
          default: 1,
          description:
            "1-based results page. LinkedIn's guest surface returns 10 postings per page.",
          maximum: 40,
          minimum: 1,
          title: 'Page',
          type: 'integer',
        },
        timePosted: {
          default: 'any',
          description: 'Recency filter: any, past-month, past-week or past-24h',
          title: 'Timeposted',
          type: 'string',
        },
        workplaceType: {
          default: 'any',
          description: 'Workplace filter: any, on-site, remote or hybrid',
          title: 'Workplacetype',
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
          description: "User-provided proxy URL. Omit to use the operation's own datacenter pool.",
          title: 'Proxyurl',
        },
      },
      required: ['keywords'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        JobResult: {
          properties: {
            jobId: {
              title: 'Jobid',
              type: 'string',
            },
            title: {
              title: 'Title',
              type: 'string',
            },
            company: {
              title: 'Company',
              type: 'string',
            },
            companyUrl: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Companyurl',
            },
            location: {
              title: 'Location',
              type: 'string',
            },
            postedAt: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Postedat',
            },
            postedLabel: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Postedlabel',
            },
            salary: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Salary',
            },
            benefits: {
              items: {
                type: 'string',
              },
              title: 'Benefits',
              type: 'array',
            },
            jobUrl: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Joburl',
            },
            logoUrl: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Logourl',
            },
          },
          required: [
            'jobId',
            'title',
            'company',
            'companyUrl',
            'location',
            'postedAt',
            'postedLabel',
            'salary',
            'benefits',
            'jobUrl',
            'logoUrl',
          ],
          title: 'JobResult',
          type: 'object',
        },
      },
      properties: {
        keywords: {
          title: 'Keywords',
          type: 'string',
        },
        location: {
          title: 'Location',
          type: 'string',
        },
        page: {
          title: 'Page',
          type: 'integer',
        },
        resultCount: {
          title: 'Resultcount',
          type: 'integer',
        },
        hasMore: {
          title: 'Hasmore',
          type: 'boolean',
        },
        jobs: {
          items: {
            $ref: '#/$defs/JobResult',
          },
          title: 'Jobs',
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
        'keywords',
        'location',
        'page',
        'resultCount',
        'hasMore',
        'jobs',
        'fetchedAt',
        'elapsedMs',
      ],
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
      'Fetch trending, hot, rising, top, or new posts from any subreddit with pagination and time filtering. Requires a Reddit session cookie in sessionCookies (obtain it from reddit-login.post, or copy reddit_session out of a signed-in browser) — Reddit has blocked every anonymous read surface since 2026-07-30.',
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
            "REQUIRED IN PRACTICE. Reddit account session cookies, as a JSON object or a '; '-delimited cookie header; the blob must contain reddit_session. Since 2026-07-30 Reddit blocks EVERY anonymous read surface, so a call without cookies returns a classified UPSTREAM_BLOCKED rather than data. Obtain the blob from reddit-login.post, or copy the reddit_session cookie out of a signed-in browser. A lead-gen account-pool row stores it nested at cookies->>'sessionCookies', not at the row's top level.",
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
      'Fetch a Reddit post with its comment tree: post metadata, selftext, and nested comments with scores and authorship. Requires a Reddit session cookie in sessionCookies (obtain it from reddit-login.post, or copy reddit_session out of a signed-in browser) — Reddit has blocked every anonymous read surface since 2026-07-30.',
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
            "REQUIRED IN PRACTICE. Reddit account session cookies, as a JSON object or a '; '-delimited cookie header; the blob must contain reddit_session. Since 2026-07-30 Reddit blocks EVERY anonymous read surface, so a call without cookies returns a classified UPSTREAM_BLOCKED rather than data. Obtain the blob from reddit-login.post, or copy the reddit_session cookie out of a signed-in browser. A lead-gen account-pool row stores it nested at cookies->>'sessionCookies', not at the row's top level.",
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
      'Search Reddit posts by keyword with subreddit filtering, sort and time range. Returns structured post data including scores, comment count and metadata. Requires a Reddit session cookie in sessionCookies (obtain it from reddit-login.post, or copy reddit_session out of a signed-in browser) — Reddit has blocked every anonymous read surface since 2026-07-30.',
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
            "REQUIRED IN PRACTICE. Reddit account session cookies, as a JSON object or a '; '-delimited cookie header; the blob must contain reddit_session. Since 2026-07-30 Reddit blocks EVERY anonymous read surface, so a call without cookies returns a classified UPSTREAM_BLOCKED rather than data. Obtain the blob from reddit-login.post, or copy the reddit_session cookie out of a signed-in browser. A lead-gen account-pool row stores it nested at cookies->>'sessionCookies', not at the row's top level.",
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
      'Fetch subreddit metadata: subscriber count, description, rules, active users and appearance settings. Requires a Reddit session cookie in sessionCookies (obtain it from reddit-login.post, or copy reddit_session out of a signed-in browser) — Reddit has blocked every anonymous read surface since 2026-07-30.',
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
            "REQUIRED IN PRACTICE. Reddit account session cookies, as a JSON object or a '; '-delimited cookie header; the blob must contain reddit_session. Since 2026-07-30 Reddit blocks EVERY anonymous read surface, so a call without cookies returns a classified UPSTREAM_BLOCKED rather than data. Obtain the blob from reddit-login.post, or copy the reddit_session cookie out of a signed-in browser. A lead-gen account-pool row stores it nested at cookies->>'sessionCookies', not at the row's top level.",
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
    slug: 'text-analyze.post',
    operationId: 'text_analyze_post',
    name: 'Text Analyze',
    description:
      'Analyze text: character / word / line / sentence / byte counts plus a SHA-256 digest. Pure-compute, no network — a native Rust marketplace endpoint.',
    category: 'Developer Tools',
    tags: ['text', 'rust', 'hash', 'sha256', 'stats'],
    workerLanguage: 'rust',
    publishTargets: ['upapi'],
    unitWeight: 1,
    inputSchema: {
      $schema: 'http://json-schema.org/draft-07/schema#',
      title: 'AnalyzeInput',
      type: 'object',
      properties: {
        text: {
          type: 'string',
          description: 'The text to analyze.',
        },
      },
      required: ['text'],
    },
    outputSchema: {
      $schema: 'http://json-schema.org/draft-07/schema#',
      title: 'AnalyzeOutput',
      type: 'object',
      properties: {
        bytes: {
          type: 'integer',
          format: 'uint',
          minimum: 0,
        },
        characters: {
          type: 'integer',
          format: 'uint',
          minimum: 0,
        },
        lines: {
          type: 'integer',
          format: 'uint',
          minimum: 0,
        },
        sentences: {
          type: 'integer',
          format: 'uint',
          minimum: 0,
        },
        sha256: {
          type: 'string',
          description: 'Lowercase hex SHA-256 of the UTF-8 bytes.',
        },
        words: {
          type: 'integer',
          format: 'uint',
          minimum: 0,
        },
      },
      required: ['bytes', 'characters', 'lines', 'sentences', 'sha256', 'words'],
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
        complete: {
          description:
            'False when a block or upstream failure cut the scan short — the users listed are real but the list is partial.',
          title: 'Complete',
          type: 'boolean',
        },
        stopReason: {
          description: '"limit-reached", "exhausted", or "blocked-mid-scan"',
          title: 'Stopreason',
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
        'videoId',
        'users',
        'commentsScanned',
        'complete',
        'stopReason',
        'fetchedAt',
        'elapsedMs',
      ],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'tiktok-get-comment-replies.get',
    operationId: 'tiktok_get_comment_replies_get',
    name: 'TikTok Get Comment Replies',
    description:
      "Get the replies under a single TikTok comment, with each replier's handle and profile info. No auth needed. Paginated by cursor.",
    category: 'Social Media',
    tags: ['tiktok', 'comments', 'replies', 'scraping', 'social'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 3,
    inputSchema: {
      properties: {
        videoId: {
          description: 'Parent video id (aweme_id / item_id)',
          minLength: 1,
          title: 'Videoid',
          type: 'string',
        },
        commentId: {
          description: 'Comment id whose replies to fetch',
          minLength: 1,
          title: 'Commentid',
          type: 'string',
        },
        count: {
          default: 20,
          description: 'Replies per page (max 50)',
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
      required: ['videoId', 'commentId'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        CommentUser: {
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
            verified: {
              title: 'Verified',
              type: 'boolean',
            },
          },
          required: ['uniqueId', 'nickname', 'secUid', 'verified'],
          title: 'CommentUser',
          type: 'object',
        },
        ReplyItem: {
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
              $ref: '#/$defs/CommentUser',
            },
          },
          required: ['commentId', 'text', 'likes', 'replyCount', 'createTime', 'user'],
          title: 'ReplyItem',
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
        commentId: {
          title: 'Commentid',
          type: 'string',
        },
        replies: {
          items: {
            $ref: '#/$defs/ReplyItem',
          },
          title: 'Replies',
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
        'commentId',
        'replies',
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
    slug: 'tiktok-get-video-embed.get',
    operationId: 'tiktok_get_video_embed_get',
    name: 'TikTok Get Video By Id',
    description:
      'Full video metadata (description, hashtags, play/like/comment counts, author and author follower stats) from a video id alone — no author handle needed, no auth.',
    category: 'Social Media',
    tags: ['tiktok', 'video', 'embed', 'metadata', 'social', 'scraping'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 3,
    inputSchema: {
      properties: {
        videoId: {
          description: 'TikTok video id (the numeric aweme id)',
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
      required: ['videoId'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        Author: {
          properties: {
            uniqueId: {
              title: 'Uniqueid',
              type: 'string',
            },
            nickname: {
              title: 'Nickname',
              type: 'string',
            },
            signature: {
              title: 'Signature',
              type: 'string',
            },
            verified: {
              title: 'Verified',
              type: 'boolean',
            },
            secUid: {
              title: 'Secuid',
              type: 'string',
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
            videos: {
              title: 'Videos',
              type: 'integer',
            },
          },
          required: [
            'uniqueId',
            'nickname',
            'signature',
            'verified',
            'secUid',
            'followers',
            'following',
            'likes',
            'videos',
          ],
          title: 'Author',
          type: 'object',
        },
        Stats: {
          properties: {
            plays: {
              title: 'Plays',
              type: 'integer',
            },
            likes: {
              title: 'Likes',
              type: 'integer',
            },
            comments: {
              title: 'Comments',
              type: 'integer',
            },
            shares: {
              title: 'Shares',
              type: 'integer',
            },
          },
          required: ['plays', 'likes', 'comments', 'shares'],
          title: 'Stats',
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
        description: {
          title: 'Description',
          type: 'string',
        },
        createTime: {
          title: 'Createtime',
          type: 'string',
        },
        author: {
          $ref: '#/$defs/Author',
        },
        stats: {
          $ref: '#/$defs/Stats',
        },
        hashtags: {
          items: {
            type: 'string',
          },
          title: 'Hashtags',
          type: 'array',
        },
        musicTitle: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Musictitle',
        },
        musicAuthor: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Musicauthor',
        },
        durationSeconds: {
          title: 'Durationseconds',
          type: 'integer',
        },
        thumbnailUrl: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Thumbnailurl',
        },
        locationCreated: {
          title: 'Locationcreated',
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
        'videoId',
        'description',
        'createTime',
        'author',
        'stats',
        'hashtags',
        'durationSeconds',
        'locationCreated',
        'fetchedAt',
        'elapsedMs',
      ],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'tiktok-oembed.get',
    operationId: 'tiktok_oembed_get',
    name: 'TikTok oEmbed Lookup',
    description:
      "Resolve any TikTok profile or video URL to its title, author and thumbnail via TikTok's public oEmbed endpoint. No auth, no signing.",
    category: 'Social Media',
    tags: ['tiktok', 'oembed', 'metadata', 'social', 'scraping'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 1,
    inputSchema: {
      properties: {
        url: {
          description: 'Any TikTok profile or video URL, e.g. https://www.tiktok.com/@tiktok',
          minLength: 1,
          title: 'Url',
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
          description: 'Optional proxy URL. "none" forces a direct request; omit to auto-pick.',
          title: 'Proxyurl',
        },
      },
      required: ['url'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      properties: {
        success: {
          title: 'Success',
          type: 'boolean',
        },
        urlType: {
          description: '"video" for a video URL, otherwise "profile"',
          title: 'Urltype',
          type: 'string',
        },
        title: {
          title: 'Title',
          type: 'string',
        },
        authorName: {
          title: 'Authorname',
          type: 'string',
        },
        authorUrl: {
          title: 'Authorurl',
          type: 'string',
        },
        thumbnailUrl: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Thumbnailurl',
        },
        thumbnailWidth: {
          anyOf: [
            {
              type: 'integer',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Thumbnailwidth',
        },
        thumbnailHeight: {
          anyOf: [
            {
              type: 'integer',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          title: 'Thumbnailheight',
        },
        embedProductId: {
          title: 'Embedproductid',
          type: 'string',
        },
        providerName: {
          title: 'Providername',
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
        'urlType',
        'title',
        'authorName',
        'authorUrl',
        'embedProductId',
        'providerName',
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
    slug: 'upwork-jobs-detail.get',
    operationId: 'upwork_jobs_detail_get',
    name: 'Get Upwork Job Details',
    description:
      "Read one Upwork job posting in full: the complete description, required skills, budget, how many freelancers have applied and been interviewed, and the client's country, rating, hire count and total spend. Accepts the job ciphertext or the job URL. Reads Upwork's public visitor surface — no Upwork account is required.",
    category: 'Social Media',
    tags: ['upwork', 'jobs', 'freelance', 'hiring', 'details'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 10,
    inputSchema: {
      properties: {
        job: {
          description:
            'An Upwork job: its ciphertext ("~021234…"), or the job URL that upwork-jobs-search returns.',
          maxLength: 300,
          minLength: 1,
          title: 'Job',
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
          description: "User-provided proxy URL. Omit to use the operation's own pool.",
          title: 'Proxyurl',
        },
      },
      required: ['job'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      properties: {
        ciphertext: {
          title: 'Ciphertext',
          type: 'string',
        },
        title: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Title',
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
        status: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Status',
        },
        jobType: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Jobtype',
        },
        contractorTier: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Contractortier',
        },
        postedOn: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Postedon',
        },
        publishTime: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Publishtime',
        },
        skills: {
          items: {
            type: 'string',
          },
          title: 'Skills',
          type: 'array',
        },
        hourlyBudgetMin: {
          anyOf: [
            {
              type: 'number',
            },
            {
              type: 'null',
            },
          ],
          title: 'Hourlybudgetmin',
        },
        hourlyBudgetMax: {
          anyOf: [
            {
              type: 'number',
            },
            {
              type: 'null',
            },
          ],
          title: 'Hourlybudgetmax',
        },
        totalApplicants: {
          anyOf: [
            {
              type: 'integer',
            },
            {
              type: 'null',
            },
          ],
          title: 'Totalapplicants',
        },
        totalHired: {
          anyOf: [
            {
              type: 'integer',
            },
            {
              type: 'null',
            },
          ],
          title: 'Totalhired',
        },
        totalInvitedToInterview: {
          anyOf: [
            {
              type: 'integer',
            },
            {
              type: 'null',
            },
          ],
          title: 'Totalinvitedtointerview',
        },
        lastBuyerActivity: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Lastbuyeractivity',
        },
        buyerCountry: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Buyercountry',
        },
        buyerScore: {
          anyOf: [
            {
              type: 'number',
            },
            {
              type: 'null',
            },
          ],
          title: 'Buyerscore',
        },
        buyerTotalJobsWithHires: {
          anyOf: [
            {
              type: 'integer',
            },
            {
              type: 'null',
            },
          ],
          title: 'Buyertotaljobswithhires',
        },
        buyerTotalSpent: {
          anyOf: [
            {
              type: 'number',
            },
            {
              type: 'null',
            },
          ],
          title: 'Buyertotalspent',
        },
        jobUrl: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          title: 'Joburl',
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
        'ciphertext',
        'title',
        'description',
        'status',
        'jobType',
        'contractorTier',
        'postedOn',
        'publishTime',
        'skills',
        'hourlyBudgetMin',
        'hourlyBudgetMax',
        'totalApplicants',
        'totalHired',
        'totalInvitedToInterview',
        'lastBuyerActivity',
        'buyerCountry',
        'buyerScore',
        'buyerTotalJobsWithHires',
        'buyerTotalSpent',
        'jobUrl',
        'fetchedAt',
        'elapsedMs',
      ],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'upwork-jobs-search.get',
    operationId: 'upwork_jobs_search_get',
    name: 'Search Upwork Jobs',
    description:
      "Search Upwork job postings by keyword. Returns title, description, contract type, budget, publish time and the job reference you pass to upwork-jobs-detail. Reads Upwork's public visitor surface — no Upwork account or cookie is required.",
    category: 'Social Media',
    tags: ['upwork', 'jobs', 'freelance', 'hiring', 'search'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 10,
    inputSchema: {
      properties: {
        query: {
          description: 'What to search for (e.g. "python developer", "react native app")',
          maxLength: 200,
          minLength: 1,
          title: 'Query',
          type: 'string',
        },
        page: {
          default: 1,
          description: '1-based results page.',
          maximum: 100,
          minimum: 1,
          title: 'Page',
          type: 'integer',
        },
        pageSize: {
          default: 20,
          description: 'Postings per page, 1-50.',
          maximum: 50,
          minimum: 1,
          title: 'Pagesize',
          type: 'integer',
        },
        sort: {
          default: 'recency',
          description: 'Result order: recency (newest first) or relevance.',
          title: 'Sort',
          type: 'string',
        },
        jobType: {
          default: 'any',
          description: 'Contract type filter: any, hourly or fixed.',
          title: 'Jobtype',
          type: 'string',
        },
        experienceLevel: {
          default: 'any',
          description: 'Required experience: any, entry, intermediate or expert.',
          title: 'Experiencelevel',
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
          description: "User-provided proxy URL. Omit to use the operation's own pool.",
          title: 'Proxyurl',
        },
      },
      required: ['query'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        JobResult: {
          properties: {
            jobId: {
              title: 'Jobid',
              type: 'string',
            },
            ciphertext: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Ciphertext',
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
            jobType: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Jobtype',
            },
            publishTime: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Publishtime',
            },
            hourlyBudgetMin: {
              anyOf: [
                {
                  type: 'number',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Hourlybudgetmin',
            },
            hourlyBudgetMax: {
              anyOf: [
                {
                  type: 'number',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Hourlybudgetmax',
            },
            fixedPriceAmount: {
              anyOf: [
                {
                  type: 'number',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Fixedpriceamount',
            },
            jobUrl: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'null',
                },
              ],
              title: 'Joburl',
            },
          },
          required: [
            'jobId',
            'ciphertext',
            'title',
            'description',
            'jobType',
            'publishTime',
            'hourlyBudgetMin',
            'hourlyBudgetMax',
            'fixedPriceAmount',
            'jobUrl',
          ],
          title: 'JobResult',
          type: 'object',
        },
      },
      properties: {
        query: {
          title: 'Query',
          type: 'string',
        },
        page: {
          title: 'Page',
          type: 'integer',
        },
        pageSize: {
          title: 'Pagesize',
          type: 'integer',
        },
        resultCount: {
          title: 'Resultcount',
          type: 'integer',
        },
        totalFound: {
          anyOf: [
            {
              type: 'integer',
            },
            {
              type: 'null',
            },
          ],
          title: 'Totalfound',
        },
        hasMore: {
          anyOf: [
            {
              type: 'boolean',
            },
            {
              type: 'null',
            },
          ],
          title: 'Hasmore',
        },
        jobs: {
          items: {
            $ref: '#/$defs/JobResult',
          },
          title: 'Jobs',
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
        'query',
        'page',
        'pageSize',
        'resultCount',
        'totalFound',
        'hasMore',
        'jobs',
        'fetchedAt',
        'elapsedMs',
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
    slug: 'wellfound-application-modal.post',
    operationId: 'wellfound_application_modal_post',
    name: 'Wellfound Application Modal',
    description:
      "Read a Wellfound listing's application modal: its screening questions with option ids, whether this account has already applied, and the qualification report. Read-only, and the intended step immediately before wellfound-apply. Requires an authenticated session blob from wellfound-login.",
    category: 'Social Media',
    tags: ['wellfound', 'jobs', 'apply'],
    workerLanguage: 'python',
    publishTargets: ['upapi'],
    unitWeight: 4,
    inputSchema: {
      properties: {
        session: {
          description: 'Authenticated blob from wellfound-login.',
          minLength: 1,
          title: 'Session',
          type: 'string',
        },
        jobId: {
          description: 'Wellfound job listing id.',
          minLength: 1,
          title: 'Jobid',
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
          description: 'Same exit the session was minted on. Omit to send directly.',
          title: 'Proxyurl',
        },
      },
      required: ['session', 'jobId'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        Question: {
          properties: {
            id: {
              title: 'Id',
              type: 'string',
            },
            question: {
              default: '',
              title: 'Question',
              type: 'string',
            },
            kind: {
              default: 'freeform',
              description: 'Answer kind, for example freeform.',
              title: 'Kind',
              type: 'string',
            },
            required: {
              default: false,
              title: 'Required',
              type: 'boolean',
            },
            options: {
              items: {
                $ref: '#/$defs/QuestionOption',
              },
              title: 'Options',
              type: 'array',
            },
          },
          required: ['id'],
          title: 'Question',
          type: 'object',
        },
        QuestionOption: {
          properties: {
            id: {
              default: '',
              title: 'Id',
              type: 'string',
            },
            text: {
              default: '',
              title: 'Text',
              type: 'string',
            },
          },
          title: 'QuestionOption',
          type: 'object',
        },
      },
      properties: {
        questions: {
          items: {
            $ref: '#/$defs/Question',
          },
          title: 'Questions',
          type: 'array',
        },
        currentUserApplied: {
          default: false,
          title: 'Currentuserapplied',
          type: 'boolean',
        },
        qualificationErrors: {
          description: 'Reasons Wellfound would refuse this application, empty when qualified.',
          items: {
            type: 'string',
          },
          title: 'Qualificationerrors',
          type: 'array',
        },
        session: {
          default: '',
          description: 'Refreshed blob carrying rotated cookies. Persist THIS one, not the input.',
          title: 'Session',
          type: 'string',
        },
      },
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'wellfound-browse-jobs.post',
    operationId: 'wellfound_browse_jobs_post',
    name: 'Wellfound Browse Jobs',
    description:
      'Browse public Wellfound job listings through the anonymous SEO GraphQL search: job id, slug, title, compensation, equity, locations, full description and the hiring company, with deep pagination. No login. Takes a blob from wellfound-public-session and must run on the exit that minted it. Company funding fields are empty on anonymous results; use wellfound-company-overview for those.',
    category: 'Social Media',
    tags: ['wellfound', 'jobs', 'search', 'public'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 6,
    inputSchema: {
      properties: {
        session: {
          description: 'Blob from wellfound-public-session.',
          minLength: 1,
          title: 'Session',
          type: 'string',
        },
        roleSlug: {
          description: 'Role slug to search, for example software-engineer.',
          minLength: 1,
          title: 'Roleslug',
          type: 'string',
        },
        scope: {
          default: 'remote',
          description: 'Use remote for the remote search, otherwise a Wellfound location slug.',
          title: 'Scope',
          type: 'string',
        },
        page: {
          default: 1,
          description: '1-based page number.',
          minimum: 1,
          title: 'Page',
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
          description: 'Same exit the session was minted on. Omit to send directly.',
          title: 'Proxyurl',
        },
      },
      required: ['session', 'roleSlug'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        JobSummary: {
          properties: {
            id: {
              title: 'Id',
              type: 'string',
            },
            title: {
              default: '',
              title: 'Title',
              type: 'string',
            },
            slug: {
              default: '',
              title: 'Slug',
              type: 'string',
            },
            startupId: {
              default: '',
              title: 'Startupid',
              type: 'string',
            },
            jobUrl: {
              default: '',
              title: 'Joburl',
              type: 'string',
            },
            compensation: {
              default: '',
              title: 'Compensation',
              type: 'string',
            },
            equity: {
              default: '',
              title: 'Equity',
              type: 'string',
            },
            jobType: {
              default: '',
              title: 'Jobtype',
              type: 'string',
            },
            remote: {
              anyOf: [
                {
                  type: 'boolean',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              description:
                'True or False as Wellfound disclosed it. Null means Wellfound did not say -- it is NOT inferred from the scope you searched.',
              title: 'Remote',
            },
            remoteConfigKind: {
              default: '',
              description: 'REMOTE, ONSITE or ONSITE_OR_REMOTE. Empty when undisclosed.',
              title: 'Remoteconfigkind',
              type: 'string',
            },
            locationNames: {
              items: {
                type: 'string',
              },
              title: 'Locationnames',
              type: 'array',
            },
            liveStartAt: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Livestartat',
            },
            description: {
              default: '',
              description: 'Full listing description; the SEO search returns it inline.',
              title: 'Description',
              type: 'string',
            },
            startupName: {
              default: '',
              title: 'Startupname',
              type: 'string',
            },
            startupSlug: {
              default: '',
              title: 'Startupslug',
              type: 'string',
            },
            startupLogoUrl: {
              default: '',
              title: 'Startuplogourl',
              type: 'string',
            },
            startupCompanySize: {
              default: '',
              title: 'Startupcompanysize',
              type: 'string',
            },
            startupHighConcept: {
              default: '',
              title: 'Startuphighconcept',
              type: 'string',
            },
            startupFundingStage: {
              default: '',
              description: 'Empty on anonymous results; use wellfound-company-overview.',
              title: 'Startupfundingstage',
              type: 'string',
            },
            startupTotalRaised: {
              default: '',
              description: 'Empty on anonymous results; use wellfound-company-overview.',
              title: 'Startuptotalraised',
              type: 'string',
            },
          },
          required: ['id'],
          title: 'JobSummary',
          type: 'object',
        },
      },
      properties: {
        jobs: {
          items: {
            $ref: '#/$defs/JobSummary',
          },
          title: 'Jobs',
          type: 'array',
        },
        hasNextPage: {
          default: false,
          description: 'False when Wellfound sent no page count, so a paginating caller stops.',
          title: 'Hasnextpage',
          type: 'boolean',
        },
        totalJobCount: {
          default: 0,
          title: 'Totaljobcount',
          type: 'integer',
        },
        session: {
          default: '',
          description: 'Refreshed blob carrying rotated cookies. Persist THIS one, not the input.',
          title: 'Session',
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
    slug: 'wellfound-company-overview.post',
    operationId: 'wellfound_company_overview_post',
    name: 'Wellfound Company Overview',
    description:
      'Fetch a Wellfound company overview: product description, headcount band, total raised, market and location tags, and the website, LinkedIn, X and blog links. Read-only, and works with an anonymous session from wellfound-public-session.',
    category: 'Social Media',
    tags: ['wellfound', 'company', 'public'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 4,
    inputSchema: {
      properties: {
        session: {
          description: 'Blob from wellfound-public-session (anonymous) or wellfound-login.',
          minLength: 1,
          title: 'Session',
          type: 'string',
        },
        startupId: {
          description: 'Wellfound company (startup) id.',
          minLength: 1,
          title: 'Startupid',
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
          description: 'Same exit the session was minted on. Omit to send directly.',
          title: 'Proxyurl',
        },
      },
      required: ['session', 'startupId'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        CompanyOverview: {
          properties: {
            id: {
              default: '',
              title: 'Id',
              type: 'string',
            },
            name: {
              default: '',
              title: 'Name',
              type: 'string',
            },
            slug: {
              default: '',
              title: 'Slug',
              type: 'string',
            },
            productDescription: {
              default: '',
              title: 'Productdescription',
              type: 'string',
            },
            companySize: {
              default: '',
              title: 'Companysize',
              type: 'string',
            },
            totalRaised: {
              default: '',
              description: 'Formatted, for example $104.7M. Empty when not disclosed.',
              title: 'Totalraised',
              type: 'string',
            },
            marketTags: {
              items: {
                type: 'string',
              },
              title: 'Markettags',
              type: 'array',
            },
            locationTags: {
              items: {
                type: 'string',
              },
              title: 'Locationtags',
              type: 'array',
            },
            websiteUrl: {
              default: '',
              title: 'Websiteurl',
              type: 'string',
            },
            linkedinUrl: {
              default: '',
              title: 'Linkedinurl',
              type: 'string',
            },
            twitterUrl: {
              default: '',
              title: 'Twitterurl',
              type: 'string',
            },
            blogUrl: {
              default: '',
              title: 'Blogurl',
              type: 'string',
            },
          },
          title: 'CompanyOverview',
          type: 'object',
        },
      },
      properties: {
        company: {
          $ref: '#/$defs/CompanyOverview',
        },
        session: {
          default: '',
          description: 'Refreshed blob carrying rotated cookies. Persist THIS one, not the input.',
          title: 'Session',
          type: 'string',
        },
      },
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'wellfound-conversation-detail.post',
    operationId: 'wellfound_conversation_detail_post',
    name: 'Wellfound Conversation Detail',
    description:
      'Fetch one Wellfound recruiter conversation with its full message history. Takes the bare conversation modelId from wellfound-list-conversations. Read-only. Requires an authenticated session blob from wellfound-login.',
    category: 'Social Media',
    tags: ['wellfound', 'messages'],
    workerLanguage: 'python',
    publishTargets: ['upapi'],
    unitWeight: 4,
    inputSchema: {
      properties: {
        session: {
          description: 'Authenticated blob from wellfound-login.',
          minLength: 1,
          title: 'Session',
          type: 'string',
        },
        conversationId: {
          description:
            'The BARE modelId from wellfound-list-conversations, for example 982616801. Not the prefixed node id, which this query rejects.',
          minLength: 1,
          title: 'Conversationid',
          type: 'string',
        },
        startupId: {
          description: 'Company id for this conversation.',
          minLength: 1,
          title: 'Startupid',
          type: 'string',
        },
        conversationType: {
          default: 'JOBPAIRING',
          description: 'Wellfound ConversationTypeEnum value.',
          title: 'Conversationtype',
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
          description: 'Same exit the session was minted on. Omit to send directly.',
          title: 'Proxyurl',
        },
      },
      required: ['session', 'conversationId', 'startupId'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      properties: {
        id: {
          default: '',
          title: 'Id',
          type: 'string',
        },
        messages: {
          description: 'Message nodes, oldest first as Wellfound returns them.',
          items: {
            additionalProperties: true,
            type: 'object',
          },
          title: 'Messages',
          type: 'array',
        },
        session: {
          default: '',
          description: 'Refreshed blob carrying rotated cookies. Persist THIS one, not the input.',
          title: 'Session',
          type: 'string',
        },
      },
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'wellfound-job-detail.post',
    operationId: 'wellfound_job_detail_post',
    name: 'Wellfound Job Detail',
    description:
      'Fetch one Wellfound job listing in full (description, skills, compensation, equity, remote configuration, locations) together with the hiring company, including funding stage and total raised. Read-only, and works with an anonymous session from wellfound-public-session. An expired or removed listing is reported as such rather than returned as an empty job.',
    category: 'Social Media',
    tags: ['wellfound', 'jobs', 'public'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 6,
    inputSchema: {
      properties: {
        session: {
          description: 'Blob from wellfound-public-session (anonymous) or wellfound-login.',
          minLength: 1,
          title: 'Session',
          type: 'string',
        },
        jobId: {
          description: 'Wellfound job listing id.',
          minLength: 1,
          title: 'Jobid',
          type: 'string',
        },
        slug: {
          default: '',
          description: 'Listing slug, used for the URL and referer.',
          title: 'Slug',
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
          description: 'Same exit the session was minted on. Omit to send directly.',
          title: 'Proxyurl',
        },
      },
      required: ['session', 'jobId'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        Company: {
          properties: {
            id: {
              default: '',
              title: 'Id',
              type: 'string',
            },
            name: {
              default: '',
              title: 'Name',
              type: 'string',
            },
            slug: {
              default: '',
              title: 'Slug',
              type: 'string',
            },
            highConcept: {
              default: '',
              title: 'Highconcept',
              type: 'string',
            },
            productDescription: {
              default: '',
              title: 'Productdescription',
              type: 'string',
            },
            companySize: {
              default: '',
              title: 'Companysize',
              type: 'string',
            },
            totalRaised: {
              default: '',
              title: 'Totalraised',
              type: 'string',
            },
            fundingStage: {
              default: '',
              title: 'Fundingstage',
              type: 'string',
            },
            marketTags: {
              items: {
                type: 'string',
              },
              title: 'Markettags',
              type: 'array',
            },
            locationTags: {
              items: {
                type: 'string',
              },
              title: 'Locationtags',
              type: 'array',
            },
            founderNames: {
              items: {
                type: 'string',
              },
              title: 'Foundernames',
              type: 'array',
            },
            perks: {
              items: {
                type: 'string',
              },
              title: 'Perks',
              type: 'array',
            },
            logoUrl: {
              default: '',
              title: 'Logourl',
              type: 'string',
            },
          },
          title: 'Company',
          type: 'object',
        },
        JobDetail: {
          properties: {
            id: {
              title: 'Id',
              type: 'string',
            },
            title: {
              default: '',
              title: 'Title',
              type: 'string',
            },
            slug: {
              default: '',
              title: 'Slug',
              type: 'string',
            },
            startupId: {
              default: '',
              title: 'Startupid',
              type: 'string',
            },
            description: {
              default: '',
              title: 'Description',
              type: 'string',
            },
            descriptionHtml: {
              default: '',
              title: 'Descriptionhtml',
              type: 'string',
            },
            jobUrl: {
              default: '',
              title: 'Joburl',
              type: 'string',
            },
            currentUserApplied: {
              default: false,
              description: 'Always false on an anonymous session.',
              title: 'Currentuserapplied',
              type: 'boolean',
            },
            currentUserQualificationReport: {
              additionalProperties: true,
              description: 'Empty on an anonymous session.',
              title: 'Currentuserqualificationreport',
              type: 'object',
            },
            skills: {
              items: {
                type: 'string',
              },
              title: 'Skills',
              type: 'array',
            },
            compensation: {
              default: '',
              title: 'Compensation',
              type: 'string',
            },
            equity: {
              default: '',
              title: 'Equity',
              type: 'string',
            },
            jobType: {
              default: '',
              title: 'Jobtype',
              type: 'string',
            },
            remote: {
              anyOf: [
                {
                  type: 'boolean',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              description: 'True or False as Wellfound disclosed it; null when it did not.',
              title: 'Remote',
            },
            remoteConfigKind: {
              default: '',
              description:
                'REMOTE, ONSITE or ONSITE_OR_REMOTE, read from remoteConfig. Empty when undisclosed, which the anonymous surface often is.',
              title: 'Remoteconfigkind',
              type: 'string',
            },
            locationNames: {
              items: {
                type: 'string',
              },
              title: 'Locationnames',
              type: 'array',
            },
            acceptedRemoteLocations: {
              items: {
                type: 'string',
              },
              title: 'Acceptedremotelocations',
              type: 'array',
            },
            yearsExperienceMin: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Yearsexperiencemin',
            },
            yearsExperienceMax: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Yearsexperiencemax',
            },
            liveStartAt: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Livestartat',
            },
          },
          required: ['id'],
          title: 'JobDetail',
          type: 'object',
        },
      },
      properties: {
        job: {
          $ref: '#/$defs/JobDetail',
        },
        company: {
          $ref: '#/$defs/Company',
        },
        session: {
          default: '',
          description: 'Refreshed blob carrying rotated cookies. Persist THIS one, not the input.',
          title: 'Session',
          type: 'string',
        },
      },
      required: ['job'],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'wellfound-list-applications.post',
    operationId: 'wellfound_list_applications_post',
    name: 'Wellfound List Applications',
    description:
      "List one page of the signed-in candidate's Wellfound job applications, each with its status, the listing and the company. The response carries no page info, so a page with no new applications means the end. Read-only. Requires an authenticated session blob from wellfound-login.",
    category: 'Social Media',
    tags: ['wellfound', 'jobs', 'applications'],
    workerLanguage: 'python',
    publishTargets: ['upapi'],
    unitWeight: 4,
    inputSchema: {
      properties: {
        session: {
          description: 'Authenticated blob from wellfound-login.',
          minLength: 1,
          title: 'Session',
          type: 'string',
        },
        page: {
          default: 1,
          description:
            '1-based page number. The response carries no pageInfo: a page with no new applications means the end.',
          minimum: 1,
          title: 'Page',
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
          description: 'Same exit the session was minted on. Omit to send directly.',
          title: 'Proxyurl',
        },
      },
      required: ['session'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      properties: {
        applications: {
          description: 'Application nodes, each with status, createdAt, jobListing and startup.',
          items: {
            additionalProperties: true,
            type: 'object',
          },
          title: 'Applications',
          type: 'array',
        },
        session: {
          default: '',
          description: 'Refreshed blob carrying rotated cookies. Persist THIS one, not the input.',
          title: 'Session',
          type: 'string',
        },
      },
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'wellfound-list-conversations.post',
    operationId: 'wellfound_list_conversations_post',
    name: 'Wellfound List Conversations',
    description:
      "List the signed-in candidate's Wellfound recruiter conversations with the company, the unread flag and the latest message in each thread. Read-only. Requires an authenticated session blob from wellfound-login.",
    category: 'Social Media',
    tags: ['wellfound', 'messages'],
    workerLanguage: 'python',
    publishTargets: ['upapi'],
    unitWeight: 4,
    inputSchema: {
      properties: {
        session: {
          description: 'Authenticated blob from wellfound-login.',
          minLength: 1,
          title: 'Session',
          type: 'string',
        },
        scope: {
          default: 'ONGOING',
          description: 'ONGOING or ARCHIVED.',
          title: 'Scope',
          type: 'string',
        },
        page: {
          default: 1,
          description: '1-based page number.',
          minimum: 1,
          title: 'Page',
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
          description: 'Same exit the session was minted on. Omit to send directly.',
          title: 'Proxyurl',
        },
      },
      required: ['session'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        ConversationSummary: {
          properties: {
            id: {
              default: '',
              description: 'Prefixed node id.',
              title: 'Id',
              type: 'string',
            },
            modelId: {
              default: '',
              description:
                'Bare conversation id. This is the value wellfound-conversation-detail and wellfound-send-message take, NOT the prefixed id above.',
              title: 'Modelid',
              type: 'string',
            },
            modelType: {
              default: '',
              title: 'Modeltype',
              type: 'string',
            },
            unread: {
              default: false,
              title: 'Unread',
              type: 'boolean',
            },
            startup: {
              additionalProperties: true,
              description: 'The company on the other side.',
              title: 'Startup',
              type: 'object',
            },
            message: {
              additionalProperties: true,
              description: 'The latest message in the thread.',
              title: 'Message',
              type: 'object',
            },
          },
          title: 'ConversationSummary',
          type: 'object',
        },
      },
      properties: {
        conversations: {
          items: {
            $ref: '#/$defs/ConversationSummary',
          },
          title: 'Conversations',
          type: 'array',
        },
        hasNextPage: {
          default: false,
          title: 'Hasnextpage',
          type: 'boolean',
        },
        session: {
          default: '',
          description: 'Refreshed blob carrying rotated cookies. Persist THIS one, not the input.',
          title: 'Session',
          type: 'string',
        },
      },
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'wellfound-pipeline-stats.post',
    operationId: 'wellfound_pipeline_stats_post',
    name: 'Wellfound Pipeline Stats',
    description:
      "Fetch the signed-in candidate's Wellfound pipeline counts: interested, matched, messages and saved listings. Read-only. Requires an authenticated session blob from wellfound-login and the viewer id from wellfound-viewer.",
    category: 'Social Media',
    tags: ['wellfound', 'jobs', 'stats'],
    workerLanguage: 'python',
    publishTargets: ['upapi'],
    unitWeight: 4,
    inputSchema: {
      properties: {
        session: {
          description: 'Authenticated blob from wellfound-login.',
          minLength: 1,
          title: 'Session',
          type: 'string',
        },
        userId: {
          description: 'Wellfound viewer id, available from wellfound-viewer.',
          minLength: 1,
          title: 'Userid',
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
          description: 'Same exit the session was minted on. Omit to send directly.',
          title: 'Proxyurl',
        },
      },
      required: ['session', 'userId'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      properties: {
        stats: {
          additionalProperties: true,
          description:
            'Pipeline counts, for example interested, matched, messages, savedJobListings.',
          title: 'Stats',
          type: 'object',
        },
        session: {
          default: '',
          description: 'Refreshed blob carrying rotated cookies. Persist THIS one, not the input.',
          title: 'Session',
          type: 'string',
        },
      },
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'wellfound-public-session.post',
    operationId: 'wellfound_public_session_post',
    name: 'Wellfound Public Session',
    description:
      'Mint an anonymous Wellfound browsing session (DataDome cookie, Apollo signature and persisted-query map) with no credentials and no account. Returns an opaque blob for the Wellfound read operations. The blob is bound to the exit IP that minted it: pass the same proxyUrl to every call in a chain, or omit it on all of them.',
    category: 'Social Media',
    tags: ['wellfound', 'jobs', 'session', 'public'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 6,
    inputSchema: {
      properties: {
        impersonate: {
          default: 'chrome146',
          description: 'curl_cffi browser-impersonation target used to mint the session.',
          title: 'Impersonate',
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
          description:
            'Exit to mint from (http://user:pass@host:port). Omit to send directly. The returned session is bound to whatever exit minted it, so every later call must pass the SAME value.',
          title: 'Proxyurl',
        },
      },
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      properties: {
        session: {
          description:
            'Opaque anonymous session blob. Pass to wellfound-browse-jobs, wellfound-job-detail and wellfound-company-overview. Carries no account credentials.',
          title: 'Session',
          type: 'string',
        },
        operationCount: {
          description: "Persisted queries discovered in Wellfound's bundle (a health signal).",
          title: 'Operationcount',
          type: 'integer',
        },
        elapsedMs: {
          description: 'Wall-clock time spent minting.',
          title: 'Elapsedms',
          type: 'integer',
        },
      },
      required: ['session', 'operationCount', 'elapsedMs'],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'wellfound-refresh-ops.post',
    operationId: 'wellfound_refresh_ops_post',
    name: 'Wellfound Refresh Operations',
    description:
      "Re-scan Wellfound's public JS bundle for the current Apollo signature and persisted-query op-id map after a frontend deploy, and return the session blob with that material refreshed. No login and no credentials. A Wellfound deploy invalidates every persisted-query hash at once and looks identical to an expired session, so run this before concluding a session died.",
    category: 'Social Media',
    tags: ['wellfound', 'jobs', 'session', 'maintenance'],
    workerLanguage: 'python',
    publishTargets: ['upapi', 'rapidapi', 'apify'],
    unitWeight: 6,
    inputSchema: {
      properties: {
        session: {
          description: 'Session blob from wellfound-public-session or wellfound-login.',
          minLength: 1,
          title: 'Session',
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
          description: 'Same exit the blob was minted on. Omit to send directly.',
          title: 'Proxyurl',
        },
      },
      required: ['session'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      properties: {
        session: {
          description: 'Refreshed blob: the same cookies, a new signature and op-id map.',
          title: 'Session',
          type: 'string',
        },
        operationCount: {
          description: 'Persisted queries in the refreshed map.',
          title: 'Operationcount',
          type: 'integer',
        },
        elapsedMs: {
          description: 'Wall-clock time spent re-scanning.',
          title: 'Elapsedms',
          type: 'integer',
        },
      },
      required: ['session', 'operationCount', 'elapsedMs'],
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'wellfound-search-jobs.post',
    operationId: 'wellfound_search_jobs_post',
    name: 'Wellfound Search Jobs',
    description:
      'Search Wellfound job listings as a signed-in candidate, with role, skill, job-type, remote-preference and location filters, and an already-applied flag per listing. Read-only. Requires an authenticated session blob from wellfound-login; for public browsing with no account use wellfound-browse-jobs.',
    category: 'Social Media',
    tags: ['wellfound', 'jobs', 'search'],
    workerLanguage: 'python',
    publishTargets: ['upapi'],
    unitWeight: 6,
    inputSchema: {
      properties: {
        session: {
          description: 'Authenticated blob from wellfound-login.',
          minLength: 1,
          title: 'Session',
          type: 'string',
        },
        page: {
          default: 1,
          description: '1-based page number.',
          minimum: 1,
          title: 'Page',
          type: 'integer',
        },
        roleTagIds: {
          anyOf: [
            {
              items: {
                type: 'string',
              },
              type: 'array',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Wellfound role tag ids.',
          title: 'Roletagids',
        },
        skillTagIds: {
          anyOf: [
            {
              items: {
                type: 'string',
              },
              type: 'array',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Wellfound skill tag ids.',
          title: 'Skilltagids',
        },
        jobTypes: {
          anyOf: [
            {
              items: {
                type: 'string',
              },
              type: 'array',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Job types, for example full-time or contract.',
          title: 'Jobtypes',
        },
        remotePreference: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Wellfound remote preference enum value.',
          title: 'Remotepreference',
        },
        locationId: {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'null',
            },
          ],
          default: null,
          description: 'Wellfound location id.',
          title: 'Locationid',
        },
        hideOffPlatform: {
          default: true,
          description: 'Hide listings that redirect off Wellfound.',
          title: 'Hideoffplatform',
          type: 'boolean',
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
          description: 'Same exit the session was minted on. Omit to send directly.',
          title: 'Proxyurl',
        },
      },
      required: ['session'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      $defs: {
        JobSummary: {
          properties: {
            id: {
              title: 'Id',
              type: 'string',
            },
            title: {
              default: '',
              title: 'Title',
              type: 'string',
            },
            slug: {
              default: '',
              title: 'Slug',
              type: 'string',
            },
            startupId: {
              default: '',
              title: 'Startupid',
              type: 'string',
            },
            jobUrl: {
              default: '',
              title: 'Joburl',
              type: 'string',
            },
            currentUserApplied: {
              default: false,
              description: 'True when this account has already applied.',
              title: 'Currentuserapplied',
              type: 'boolean',
            },
            compensation: {
              default: '',
              title: 'Compensation',
              type: 'string',
            },
            equity: {
              default: '',
              title: 'Equity',
              type: 'string',
            },
            jobType: {
              default: '',
              title: 'Jobtype',
              type: 'string',
            },
            remote: {
              anyOf: [
                {
                  type: 'boolean',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              description: 'True or False as Wellfound disclosed it; null when it did not.',
              title: 'Remote',
            },
            remoteConfigKind: {
              default: '',
              description: 'REMOTE, ONSITE or ONSITE_OR_REMOTE. Empty when undisclosed.',
              title: 'Remoteconfigkind',
              type: 'string',
            },
            locationNames: {
              items: {
                type: 'string',
              },
              title: 'Locationnames',
              type: 'array',
            },
            liveStartAt: {
              anyOf: [
                {
                  type: 'integer',
                },
                {
                  type: 'null',
                },
              ],
              default: null,
              title: 'Livestartat',
            },
            description: {
              default: '',
              title: 'Description',
              type: 'string',
            },
            startupName: {
              default: '',
              title: 'Startupname',
              type: 'string',
            },
            startupSlug: {
              default: '',
              title: 'Startupslug',
              type: 'string',
            },
            startupLogoUrl: {
              default: '',
              title: 'Startuplogourl',
              type: 'string',
            },
            startupCompanySize: {
              default: '',
              title: 'Startupcompanysize',
              type: 'string',
            },
            startupHighConcept: {
              default: '',
              title: 'Startuphighconcept',
              type: 'string',
            },
            startupFundingStage: {
              default: '',
              title: 'Startupfundingstage',
              type: 'string',
            },
            startupTotalRaised: {
              default: '',
              title: 'Startuptotalraised',
              type: 'string',
            },
          },
          required: ['id'],
          title: 'JobSummary',
          type: 'object',
        },
      },
      properties: {
        jobs: {
          items: {
            $ref: '#/$defs/JobSummary',
          },
          title: 'Jobs',
          type: 'array',
        },
        page: {
          default: 1,
          title: 'Page',
          type: 'integer',
        },
        hasNextPage: {
          default: false,
          title: 'Hasnextpage',
          type: 'boolean',
        },
        totalStartupCount: {
          default: 0,
          description: 'Companies matched, which is what Wellfound counts here.',
          title: 'Totalstartupcount',
          type: 'integer',
        },
        session: {
          default: '',
          description: 'Refreshed blob carrying rotated cookies. Persist THIS one, not the input.',
          title: 'Session',
          type: 'string',
        },
      },
      title: 'Output',
      type: 'object',
    },
  },
  {
    slug: 'wellfound-viewer.post',
    operationId: 'wellfound_viewer_post',
    name: 'Wellfound Viewer',
    description:
      'Fetch the signed-in Wellfound viewer: user id, whether the account may still apply to jobs, candidate state and analytics traits. The cheapest way to check that a session is alive and the account is unrestricted. Read-only. Requires an authenticated session blob from wellfound-login.',
    category: 'Social Media',
    tags: ['wellfound', 'viewer', 'health'],
    workerLanguage: 'python',
    publishTargets: ['upapi'],
    unitWeight: 4,
    inputSchema: {
      properties: {
        session: {
          description: 'Authenticated blob from wellfound-login.',
          minLength: 1,
          title: 'Session',
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
          description: 'Same exit the session was minted on. Omit to send directly.',
          title: 'Proxyurl',
        },
      },
      required: ['session'],
      title: 'Input',
      type: 'object',
    },
    outputSchema: {
      properties: {
        viewerId: {
          default: '',
          description: 'Wellfound user id behind this session.',
          title: 'Viewerid',
          type: 'string',
        },
        canApplyToJobs: {
          default: true,
          description: 'False when Wellfound has restricted this account.',
          title: 'Canapplytojobs',
          type: 'boolean',
        },
        candidateState: {
          default: '',
          title: 'Candidatestate',
          type: 'string',
        },
        traits: {
          additionalProperties: true,
          description: 'Decoded analytics traits, empty when absent or undecodable.',
          title: 'Traits',
          type: 'object',
        },
        session: {
          default: '',
          description: 'Refreshed blob carrying rotated cookies. Persist THIS one, not the input.',
          title: 'Session',
          type: 'string',
        },
      },
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
