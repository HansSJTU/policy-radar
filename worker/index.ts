import handler from 'vinext/server/fetch-handler';

import { canonicalRedirect } from '../app/canonical-host';
import { LANGUAGE_COOKIE } from '../app/language';
import { isOverWriteLimit, tooManyRequests } from '../app/rate-limit';
import { withSecurityHeaders } from '../app/security-headers';
import {
  isProbePath,
  RATINGS_CACHE_SECONDS,
  ratingsCacheKey,
  SHORT_CACHE_SECONDS,
  shortCacheKey,
  staticAssetFor,
} from '../app/static-pages';

// Pages that only change on deploy are rendered at build time (see
// app/static-pages.ts). Serving them from static assets costs almost no CPU;
// everything else, and any request without a prebuilt file, goes to vinext.
// Browsers still revalidate: the language can come from a cookie.
function withNoStore(response: Response) {
  const served = new Response(response.body, response);
  served.headers.set('Cache-Control', 'no-store, must-revalidate');
  return served;
}

async function respond(
  request: Request,
  env: Env,
  ctx: ExecutionContext,
): Promise<Response> {
  if (isProbePath(new URL(request.url).pathname)) {
    return new Response('Not found', { status: 404 });
  }
  if (await isOverWriteLimit(request, env)) return tooManyRequests(request);
  const ratingsKey = ratingsCacheKey(request);
  if (ratingsKey) {
    const cache = await caches.open('short-cache');
    const cached = await cache.match(ratingsKey);
    if (cached) return withNoStore(cached);
    const response = await handler.fetch(request, env, ctx);
    if (response.status !== 200) return response;
    const stored = new Response(response.clone().body, response);
    stored.headers.set('Cache-Control', `public, max-age=${RATINGS_CACHE_SECONDS}`);
    stored.headers.delete('Vary');
    ctx.waitUntil(cache.put(ratingsKey, stored));
    return response;
  }
  const asset = canonicalRedirect(request.url, request.method)
    ? null
    : staticAssetFor(request);
  if (asset) {
    const response = await env.ASSETS.fetch(
      new Request(new URL(asset, request.url), { method: request.method }),
    );
    if (response.ok) {
      const served = new Response(response.body, response);
      if (asset.endsWith('.png')) {
        served.headers.set('Cache-Control', 'public, max-age=3600');
      } else {
        // Same as the rendered page: the language can come from a cookie.
        served.headers.set('Cache-Control', 'no-store, must-revalidate');
        served.headers.delete('ETag');
      }
      return served;
    }
  }
  const cacheKey = canonicalRedirect(request.url, request.method)
    ? null
    : shortCacheKey(request);
  if (cacheKey) {
    const cache = await caches.open('short-cache');
    const cached = await cache.match(cacheKey);
    if (cached) return withNoStore(cached);
    const language = new URL(cacheKey).searchParams.get('lang');
    const headers = new Headers(request.headers);
    headers.set('cookie', `${LANGUAGE_COOKIE}=${language}`);
    const response = await handler.fetch(
      new Request(request, { headers }),
      env,
      ctx,
    );
    if (response.status !== 200) return response;
    // The edge cache honours Cache-Control, so the stored copy gets its own.
    const stored = new Response(response.clone().body, response);
    stored.headers.set('Cache-Control', `public, max-age=${SHORT_CACHE_SECONDS}`);
    stored.headers.delete('Vary');
    ctx.waitUntil(cache.put(cacheKey, stored));
    return response;
  }
  return handler.fetch(request, env, ctx);
}

export default {
  async fetch(request, env, ctx) {
    return withSecurityHeaders(await respond(request, env, ctx));
  },
} satisfies ExportedHandler<Env>;
