import {
  normalizeCampaignDimension,
  normalizePolicyId,
} from '../app/analytics-model.ts';
import { isUuid } from '../lib/identifiers.ts';

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
    isUuid(session.sessionId) &&
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
    utmSource: normalizeCampaignDimension(current.searchParams.get('utm_source')),
    utmMedium: normalizeCampaignDimension(current.searchParams.get('utm_medium')),
    utmCampaign: normalizeCampaignDimension(current.searchParams.get('utm_campaign')),
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
  return normalizePolicyId(value);
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
