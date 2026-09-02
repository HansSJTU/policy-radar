import { env } from 'cloudflare:workers';

import {
  buildTrafficSeries,
  getTrafficStartDay,
  hashDailyVisitor,
  normalizeCampaignDimension,
  normalizeCountryCode,
  normalizeOutboundClick,
  normalizePolicyId,
  normalizeReferrerHost,
  normalizeSessionId,
  normalizeVisitLanguage,
  normalizeVisitPathname,
  writeAnalyticsEngineVisit,
  writeVisitAnalytics,
  type CountryTrafficPoint,
  type TrafficPoint,
} from '@/app/analytics-model';
import {
  createDailyCountryTrafficTable,
  createDailyCountryVisitorsTable,
  createDailyTrafficTable,
  createDailyVisitorBaselineTable,
  createDailyVisitorsTable,
  insertDailyCountryVisitor,
  selectCountryTraffic,
  selectTrafficSeries,
  upsertDailyCountryTraffic,
} from '@/db/schema';

let schemaPromise: Promise<void> | undefined;

type AnalyticsMetadata = {
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
};

function database() {
  return env.DB;
}

async function ensureAnalyticsSchema() {
  if (!schemaPromise) {
    const db = database();
    schemaPromise = db
      .batch([
        db.prepare(createDailyTrafficTable),
        db.prepare(createDailyVisitorsTable),
        db.prepare(createDailyVisitorBaselineTable),
        db.prepare(createDailyCountryTrafficTable),
        db.prepare(createDailyCountryVisitorsTable),
      ])
      .then(() => undefined)
      .catch((error) => {
        schemaPromise = undefined;
        throw error;
      });
  }

  return schemaPromise;
}

function easternDay(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(now);
  const value = Object.fromEntries(
    parts.map((part) => [part.type, part.value]),
  );
  return `${value.year}-${value.month}-${value.day}`;
}

export async function recordVisit(
  visitorId: string,
  country: string | null | undefined,
  metadata: AnalyticsMetadata = {},
  now = new Date(),
) {
  await ensureAnalyticsSchema();
  const db = database();
  const day = easternDay(now);
  const visitorHash = await hashDailyVisitor(day, visitorId);
  const countryCode = normalizeCountryCode(country);

  await writeVisitAnalytics(
    () =>
      db.batch([
        db
          .prepare(
            `INSERT INTO daily_traffic (day, page_views, updated_at)
             VALUES (?, 1, CURRENT_TIMESTAMP)
             ON CONFLICT(day) DO UPDATE SET
               page_views = page_views + 1,
               updated_at = CURRENT_TIMESTAMP`,
          )
          .bind(day),
        db
          .prepare(
            `INSERT OR IGNORE INTO daily_visitors (day, visitor_hash)
             VALUES (?, ?)`,
          )
          .bind(day, visitorHash),
        db.prepare(upsertDailyCountryTraffic).bind(day, countryCode),
        db
          .prepare(insertDailyCountryVisitor)
          .bind(day, countryCode, visitorHash),
      ]),
    env.ANALYTICS,
    {
      eventType: 'page_view',
      day,
      country: countryCode,
      pathname: normalizeVisitPathname(metadata.pathname),
      language: normalizeVisitLanguage(metadata.language),
      visitorHash,
      referrerHost: normalizeReferrerHost(metadata.referrerHost),
      utmSource: normalizeCampaignDimension(metadata.utmSource),
      utmMedium: normalizeCampaignDimension(metadata.utmMedium),
      utmCampaign: normalizeCampaignDimension(metadata.utmCampaign),
      sessionId: normalizeSessionId(metadata.sessionId),
      landingPage: normalizeVisitPathname(metadata.landingPage),
      policyId: normalizePolicyId(metadata.policyId),
      outboundClick: '',
    },
  );
}

export async function recordAnalyticsEngineEvent(
  visitorId: string,
  country: string | null | undefined,
  metadata: AnalyticsMetadata = {},
  now = new Date(),
) {
  const day = easternDay(now);
  const visitorHash = await hashDailyVisitor(day, visitorId);

  writeAnalyticsEngineVisit(env.ANALYTICS, {
    eventType: 'outbound_click',
    day,
    country: normalizeCountryCode(country),
    pathname: normalizeVisitPathname(metadata.pathname),
    language: normalizeVisitLanguage(metadata.language),
    visitorHash,
    referrerHost: normalizeReferrerHost(metadata.referrerHost),
    utmSource: normalizeCampaignDimension(metadata.utmSource),
    utmMedium: normalizeCampaignDimension(metadata.utmMedium),
    utmCampaign: normalizeCampaignDimension(metadata.utmCampaign),
    sessionId: normalizeSessionId(metadata.sessionId),
    landingPage: normalizeVisitPathname(metadata.landingPage),
    policyId: normalizePolicyId(metadata.policyId),
    outboundClick: normalizeOutboundClick(metadata.outboundClick),
  });
}

type TrafficRow = {
  day: string;
  page_views: number;
  visitors: number;
};

export async function getTrafficSeries(days = 30, now = new Date()) {
  await ensureAnalyticsSchema();
  const today = easternDay(now);
  const startDay = getTrafficStartDay(days, today);
  const result = await database()
    .prepare(selectTrafficSeries)
    .bind(startDay)
    .all<TrafficRow>();

  const rows: TrafficPoint[] = result.results.map((row) => ({
    day: row.day,
    pageViews: Number(row.page_views),
    visitors: Number(row.visitors),
  }));

  return buildTrafficSeries(rows, days, today);
}

type CountryTrafficRow = {
  country: string;
  page_views: number;
  visitors: number;
};

export async function getCountryTraffic(days = 30, now = new Date()) {
  await ensureAnalyticsSchema();
  const today = easternDay(now);
  const startDay = getTrafficStartDay(days, today);
  const result = await database()
    .prepare(selectCountryTraffic)
    .bind(startDay, startDay)
    .all<CountryTrafficRow>();

  return result.results.map<CountryTrafficPoint>((row) => ({
    country: row.country,
    pageViews: Number(row.page_views),
    visitors: Number(row.visitors),
  }));
}
