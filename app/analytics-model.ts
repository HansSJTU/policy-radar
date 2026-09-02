export type TrafficPoint = {
  day: string;
  pageViews: number;
  visitors: number;
};

export type CountryTrafficPoint = {
  country: string;
  pageViews: number;
  visitors: number;
};

export type AnalyticsEngineVisit = {
  eventType: 'page_view' | 'outbound_click';
  day: string;
  country: string;
  pathname: string;
  language: 'zh' | 'en';
  visitorHash: string;
  referrerHost: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  sessionId: string;
  landingPage: string;
  policyId: string;
  outboundClick: string;
};

type AnalyticsEngineDataPoint = {
  indexes: string[];
  blobs: string[];
  doubles: number[];
};

type AnalyticsEngineWriter = {
  writeDataPoint(event: AnalyticsEngineDataPoint): void;
};

export function buildAnalyticsEngineVisitDataPoint(
  visit: AnalyticsEngineVisit,
): AnalyticsEngineDataPoint {
  return {
    indexes: [visit.visitorHash],
    // Analytics Engine exposes these append-only dimensions as blob1..blob13.
    blobs: [
      visit.eventType,
      visit.day,
      visit.country,
      visit.pathname,
      visit.language,
      visit.referrerHost,
      visit.utmSource,
      visit.utmMedium,
      visit.utmCampaign,
      visit.sessionId,
      visit.landingPage,
      visit.policyId,
      visit.outboundClick,
    ],
    doubles: [1],
  };
}

export async function dispatchAnalyticsEvent(
  eventType: unknown,
  handlers: {
    pageView: () => Promise<unknown>;
    outboundClick: () => Promise<unknown>;
  },
) {
  if (eventType === 'outbound_click') {
    await handlers.outboundClick();
    return;
  }

  await handlers.pageView();
}

export async function hashDailyVisitor(day: string, visitorId: string) {
  const digest = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(`${day}:${visitorId}`),
  );
  return Array.from(new Uint8Array(digest), (byte) =>
    byte.toString(16).padStart(2, '0'),
  ).join('');
}

export function writeAnalyticsEngineVisit(
  dataset: AnalyticsEngineWriter | undefined,
  visit: AnalyticsEngineVisit,
) {
  try {
    dataset?.writeDataPoint(buildAnalyticsEngineVisitDataPoint(visit));
  } catch {
    // D1 remains authoritative when the optional event stream is unavailable.
  }
}

export async function writeVisitAnalytics(
  writeD1: () => Promise<unknown>,
  dataset: AnalyticsEngineWriter | undefined,
  visit: AnalyticsEngineVisit,
) {
  await writeD1();
  writeAnalyticsEngineVisit(dataset, visit);
}

export function normalizeVisitPathname(pathname: unknown) {
  return typeof pathname === 'string' &&
    pathname.startsWith('/') &&
    !pathname.startsWith('//') &&
    pathname.length <= 256
    ? pathname
    : '/';
}

export function normalizeVisitLanguage(language: unknown): 'zh' | 'en' {
  if (typeof language === 'string' && language.toLowerCase().startsWith('en')) {
    return 'en';
  }
  return 'zh';
}

export function normalizeReferrerHost(value: unknown) {
  if (typeof value !== 'string' || value.trim() === '') return '(direct)';
  const normalized = value.trim().toLowerCase();
  if (normalized === '(direct)') return normalized;

  try {
    const parsed = new URL(`https://${normalized}`);
    return parsed.hostname === normalized &&
      parsed.pathname === '/' &&
      parsed.search === '' &&
      parsed.hash === ''
      ? normalized
      : '(direct)';
  } catch {
    return '(direct)';
  }
}

export function normalizeCampaignDimension(value: unknown) {
  return typeof value === 'string'
    ? Array.from(value)
        .filter((character) => {
          const code = character.charCodeAt(0);
          return code >= 32 && code !== 127;
        })
        .join('')
        .trim()
        .slice(0, 128)
    : '';
}

export function normalizeSessionId(value: unknown) {
  return typeof value === 'string' &&
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
      value,
    )
    ? value.toLowerCase()
    : '(unknown)';
}

export function normalizePolicyId(value: unknown) {
  return typeof value === 'string' && /^[a-z0-9][a-z0-9-]{0,63}$/.test(value)
    ? value
    : '';
}

export function normalizeOutboundClick(value: unknown) {
  if (typeof value !== 'string') return '';

  try {
    const destination = new URL(value);
    if (destination.protocol !== 'https:' && destination.protocol !== 'http:') {
      return '';
    }
    return `${destination.host.toLowerCase()}${destination.pathname}`.slice(
      0,
      256,
    );
  } catch {
    return '';
  }
}

export function normalizeCountryCode(country: string | null | undefined) {
  const normalized = country?.trim().toUpperCase();
  return normalized && /^[A-Z]{2}$/.test(normalized) ? normalized : 'ZZ';
}

export function getCountryLabel(country: string, language: 'zh' | 'en') {
  const normalized = normalizeCountryCode(country);
  if (normalized === 'ZZ') return language === 'en' ? 'Unknown' : '未知';

  return (
    new Intl.DisplayNames([language === 'en' ? 'en-US' : 'zh-CN'], {
      type: 'region',
    }).of(normalized) ?? normalized
  );
}

function parseDay(day: string) {
  return new Date(`${day}T00:00:00.000Z`);
}

function formatDay(date: Date) {
  return date.toISOString().slice(0, 10);
}

export function getTrafficStartDay(days: number, today: string) {
  const start = parseDay(today);
  start.setUTCDate(start.getUTCDate() - Math.max(0, days - 1));
  return formatDay(start);
}

export function buildTrafficSeries(
  rows: TrafficPoint[],
  days: number,
  today: string,
) {
  const safeDays = Math.max(1, Math.floor(days));
  const rowsByDay = new Map(rows.map((row) => [row.day, row]));
  const start = parseDay(getTrafficStartDay(safeDays, today));

  return Array.from({ length: safeDays }, (_, index) => {
    const date = new Date(start);
    date.setUTCDate(start.getUTCDate() + index);
    const day = formatDay(date);
    return rowsByDay.get(day) ?? { day, pageViews: 0, visitors: 0 };
  });
}

export function summarizeTraffic(points: TrafficPoint[]) {
  return points.reduce(
    (summary, point) => ({
      pageViews: summary.pageViews + point.pageViews,
      visitorDays: summary.visitorDays + point.visitors,
      activeDays:
        summary.activeDays +
        (point.pageViews > 0 || point.visitors > 0 ? 1 : 0),
    }),
    { pageViews: 0, visitorDays: 0, activeDays: 0 },
  );
}
