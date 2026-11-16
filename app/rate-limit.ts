// Per-address limits on the two endpoints that write data. Without them a
// script sending random visitor ids could add any number of ratings or page
// views. The limits are set in wrangler.jsonc and counted by Cloudflare per
// location, so they are approximate; they are generous enough for a campus
// network that shares one address.

export type WriteLimiter = 'RATINGS_LIMITER' | 'VISITS_LIMITER';

type RequestLike = { method: string; url: string; headers: Headers };
type Limiter = { limit(options: { key: string }): Promise<{ success: boolean }> };

const LIMITED_PATHS: Record<string, WriteLimiter> = {
  '/api/policy-ratings': 'RATINGS_LIMITER',
  '/api/visit': 'VISITS_LIMITER',
};

// Which limiter counts this request, and under which key. Null when the
// request is not limited: reads, other paths, or no client address (local
// development and tests).
export function writeLimitFor(
  request: RequestLike,
): { limiter: WriteLimiter; key: string } | null {
  if (request.method !== 'POST') return null;
  const limiter = LIMITED_PATHS[new URL(request.url).pathname];
  const address = request.headers.get('cf-connecting-ip');
  return limiter && address ? { limiter, key: address } : null;
}

// True when the request is over its limit. A missing or failing limiter never
// blocks a request: losing the limit is better than losing the endpoint.
export async function isOverWriteLimit(
  request: RequestLike,
  limiters: Partial<Record<WriteLimiter, Limiter>>,
): Promise<boolean> {
  const rule = writeLimitFor(request);
  const limiter = rule && limiters[rule.limiter];
  if (!rule || !limiter) return false;
  try {
    const { success } = await limiter.limit({ key: rule.key });
    return !success;
  } catch {
    return false;
  }
}

// Answering while a body is still unread drops the connection, and the client
// sees a failed request instead of the 429. Bodies here are a few hundred
// bytes, so read them first; anything large is left unread.
const MAX_DRAINED_BYTES = 8192;

export async function tooManyRequests(request?: Request): Promise<Response> {
  const length = request?.headers.get('content-length');
  if (request && length && Number(length) <= MAX_DRAINED_BYTES) {
    await request.arrayBuffer().catch(() => undefined);
  }
  return Response.json(
    { error: 'Too many requests' },
    { status: 429, headers: { 'Cache-Control': 'no-store', 'Retry-After': '60' } },
  );
}
