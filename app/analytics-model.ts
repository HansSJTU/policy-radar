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
  day: string;
  country: string;
  pathname: string;
  language: 'zh' | 'en';
  visitorHash: string;
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
    blobs: [
      'page_view',
      visit.day,
      visit.country,
      visit.pathname,
      visit.language,
    ],
    doubles: [1],
  };
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
