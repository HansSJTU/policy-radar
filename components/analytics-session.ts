export type SessionAttribution = {
  referrerHost: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  sessionId: string;
  landingPage: string;
};

type SessionStorageLike = {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
};

type SessionOptions = {
  href: string;
  referrer: string;
  createSessionId: () => string;
};

type AnalyticsEventPayloadOptions = {
  eventType: 'page_view' | 'outbound_click' | 'share';
  visitorId: string;
  pathname: string;
  language: string;
  session: SessionAttribution;
  policyId?: string;
  outboundClick?: string;
  shareMethod?: string;
  shareAction?: string;
};

const SESSION_KEY = 'f1-policy-radar-analytics-session';
const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function cleanCampaignValue(value: string | null) {
  return Array.from(value ?? '')
    .filter((character) => {
      const code = character.charCodeAt(0);
      return code >= 32 && code !== 127;
    })
    .join('')
    .trim()
    .slice(0, 128);
}

function referrerHost(referrer: string) {
  if (!referrer) return '(direct)';
  try {
    return new URL(referrer).hostname.toLowerCase() || '(direct)';
  } catch {
    return '(direct)';
  }
}

function isSessionAttribution(value: unknown): value is SessionAttribution {
  if (!value || typeof value !== 'object') return false;
  const session = value as Partial<SessionAttribution>;
  return (
    typeof session.referrerHost === 'string' &&
    typeof session.utmSource === 'string' &&
    typeof session.utmMedium === 'string' &&
    typeof session.utmCampaign === 'string' &&
    typeof session.sessionId === 'string' &&
    UUID_PATTERN.test(session.sessionId) &&
    typeof session.landingPage === 'string' &&
    session.landingPage.startsWith('/') &&
    !session.landingPage.startsWith('//')
  );
}

export function getOrCreateSessionAttribution(
  storage: SessionStorageLike,
  options: SessionOptions,
): SessionAttribution {
  try {
    const stored = storage.getItem(SESSION_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as unknown;
      if (isSessionAttribution(parsed)) return parsed;
    }
  } catch {
    // A fresh in-memory session still provides useful dimensions.
  }

  const current = new URL(options.href);
  const session: SessionAttribution = {
    referrerHost: referrerHost(options.referrer),
    utmSource: cleanCampaignValue(current.searchParams.get('utm_source')),
    utmMedium: cleanCampaignValue(current.searchParams.get('utm_medium')),
    utmCampaign: cleanCampaignValue(current.searchParams.get('utm_campaign')),
    sessionId: options.createSessionId(),
    landingPage: current.pathname,
  };

  try {
    storage.setItem(SESSION_KEY, JSON.stringify(session));
  } catch {
    // Some private-browsing modes disable session storage.
  }

  return session;
}

export function getPolicyIdFromHash(hash: string) {
  const value = hash.startsWith('#') ? hash.slice(1) : hash;
  return /^[a-z0-9][a-z0-9-]{0,63}$/.test(value) ? value : '';
}

export function buildAnalyticsEventPayload(
  options: AnalyticsEventPayloadOptions,
) {
  return {
    eventType: options.eventType,
    visitorId: options.visitorId,
    pathname: options.pathname,
    language: options.language,
    ...options.session,
    policyId: options.policyId ?? '',
    outboundClick: options.outboundClick ?? '',
    ...(options.eventType === 'share'
      ? { shareMethod: options.shareMethod, shareAction: options.shareAction }
      : {}),
  };
}
