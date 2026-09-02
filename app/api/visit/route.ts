import { recordVisit } from '@/db/analytics';

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const origin = request.headers.get('origin');
  const fetchSite = request.headers.get('sec-fetch-site');
  const contentLength = Number(request.headers.get('content-length') ?? 0);

  if (
    (origin && origin !== requestUrl.origin) ||
    fetchSite === 'cross-site' ||
    contentLength > 512
  ) {
    return Response.json({ error: 'Invalid request' }, { status: 403 });
  }

  let body: {
    visitorId?: unknown;
    pathname?: unknown;
    language?: unknown;
  };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return Response.json({ error: 'Invalid request body' }, { status: 400 });
  }

  if (
    typeof body.visitorId !== 'string' ||
    !UUID_PATTERN.test(body.visitorId)
  ) {
    return Response.json(
      { error: 'Invalid visitor identifier' },
      { status: 400 },
    );
  }

  try {
    const cloudflareCountry = (
      request as Request & { cf?: { country?: string | null } }
    ).cf?.country;
    await recordVisit(
      body.visitorId,
      cloudflareCountry ?? request.headers.get('CF-IPCountry'),
      { pathname: body.pathname, language: body.language },
    );
  } catch {
    return Response.json(
      { error: 'Analytics service unavailable' },
      { status: 503 },
    );
  }

  return new Response(null, {
    status: 204,
    headers: { 'Cache-Control': 'no-store' },
  });
}
