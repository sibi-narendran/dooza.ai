import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import kvIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/kv-incremental-cache";
import { withRegionalCache } from "@opennextjs/cloudflare/overrides/incremental-cache/regional-cache";
import kvNextTagCache from "@opennextjs/cloudflare/overrides/tag-cache/kv-next-tag-cache";
import memoryQueue from "@opennextjs/cloudflare/overrides/queue/memory-queue";

// ISR: pages/routes with revalidate (/blog, /blog/[slug], /rss.xml, /llms.txt) are cached in KV;
// revalidatePath() (api/blog, api/outrank) is tracked in the KV tag cache;
// background regeneration goes through the in-worker memory queue (WORKER_SELF_REFERENCE).
// Speed (2026-10-12: TTFB ~1.2 s vs Vercel ~0.2 s): regional Cache API layer in front of KV, and cache
// interception serves ISR/SSG hits without loading the Next server.
// Switch to the R2 incremental cache once R2 is enabled on the account.
export default defineCloudflareConfig({
	incrementalCache: withRegionalCache(kvIncrementalCache, { mode: "long-lived" }),
	enableCacheInterception: true,
	tagCache: kvNextTagCache,
	queue: memoryQueue,
});
