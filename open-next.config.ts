import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// Static Assets incremental cache: serves prerendered pages from Workers Static Assets (0 KV writes per deploy,
// bypassing the Free-plan 1,000/day KV write limit [code 10048]). Dynamic routes still run SSR on demand.
export default defineCloudflareConfig({
	incrementalCache: staticAssetsIncrementalCache,
	enableCacheInterception: true,
});
