import { dispatchAnalyticsEvent, normalizeShareEvent } from '@/app/analytics-model';
import { recordAnalyticsEngineEvent, recordVisit } from '@/db/analytics';

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
    contentLength > 2048
  ) {
    return Response.json({ error: 'Invalid request' }, { status: 403 });
  }

  let body: {
    visitorId?: unknown;
    eventType?: unknown;
    pathname?: unknown;
    language?: unknown;
    referrerHost?: unknown;
    utmSource?: unknown;
    utmMedium?: unknown;
    utmCampaign?: unknown;
    sessionId?: unknown;
    landingPage?: unknown;
    policyId?: unknown;
    outboundClick?: unknown;
    shareMethod?: unknown;
    shareAction?: unknown;
  };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return Response.json({ error: 'Invalid request body' }, { status: 400 });
  }

  if (
    !body || typeof body !== 'object' ||
    typeof body.visitorId !== 'string' ||
    !UUID_PATTERN.test(body.visitorId)
  ) {
    return Response.json(
      { error: 'Invalid visitor identifier' },
      { status: 400 },
    );
  }

  if (
    (body.eventType !== undefined &&
      !['page_view', 'outbound_click', 'share'].includes(body.eventType as string)) ||
    (body.eventType === 'share' && !normalizeShareEvent(body.shareMethod, body.shareAction))
  ) {
    return Response.json({ error: 'Invalid analytics event' }, { status: 400 });
  }

  try {
    const cloudflareCountry = (
      request as Request & { cf?: { country?: string | null } }
    ).cf?.country;
    const country =
      cloudflareCountry ?? request.headers.get('CF-IPCountry');
    const metadata = {
      eventType: body.eventType === 'share' ? 'share' as const : 'outbound_click' as const,
      pathname: body.pathname,
      language: body.language,
      referrerHost: body.referrerHost,
      utmSource: body.utmSource,
      utmMedium: body.utmMedium,
      utmCampaign: body.utmCampaign,
      sessionId: body.sessionId,
      landingPage: body.landingPage,
      policyId: body.policyId,
      outboundClick: body.outboundClick,
      shareMethod: body.shareMethod,
      shareAction: body.shareAction,
    };

    await dispatchAnalyticsEvent(body.eventType, {
      pageView: () => recordVisit(body.visitorId as string, country, metadata),
      outboundClick: () =>
        recordAnalyticsEngineEvent(body.visitorId as string, country, metadata),
      share: () =>
        recordAnalyticsEngineEvent(body.visitorId as string, country, metadata),
    });
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
