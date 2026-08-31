export const createDailyTrafficTable = `
  CREATE TABLE IF NOT EXISTS daily_traffic (
    day TEXT PRIMARY KEY NOT NULL,
    page_views INTEGER NOT NULL DEFAULT 0,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  )
`;

export const createDailyVisitorsTable = `
  CREATE TABLE IF NOT EXISTS daily_visitors (
    day TEXT NOT NULL,
    visitor_hash TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (day, visitor_hash)
  )
`;

export const createDailyVisitorBaselineTable = `
  CREATE TABLE IF NOT EXISTS daily_visitor_baseline (
    day TEXT PRIMARY KEY NOT NULL,
    visitors INTEGER NOT NULL DEFAULT 0,
    imported_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  )
`;

export const createDailyCountryTrafficTable = `
  CREATE TABLE IF NOT EXISTS daily_country_traffic (
    day TEXT NOT NULL,
    country TEXT NOT NULL,
    page_views INTEGER NOT NULL DEFAULT 0,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (day, country)
  )
`;

export const createDailyCountryVisitorsTable = `
  CREATE TABLE IF NOT EXISTS daily_country_visitors (
    day TEXT NOT NULL,
    country TEXT NOT NULL,
    visitor_hash TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (day, country, visitor_hash)
  )
`;

export const selectTrafficSeries = `
  SELECT
    traffic.day AS day,
    traffic.page_views AS page_views,
    COUNT(visitors.visitor_hash) + COALESCE(baseline.visitors, 0) AS visitors
  FROM daily_traffic AS traffic
  LEFT JOIN daily_visitors AS visitors ON visitors.day = traffic.day
  LEFT JOIN daily_visitor_baseline AS baseline ON baseline.day = traffic.day
  WHERE traffic.day >= ?
  GROUP BY traffic.day, traffic.page_views, baseline.visitors
  ORDER BY traffic.day ASC
`;

export const selectCountryTraffic = `
  WITH visitor_totals AS (
    SELECT country, COUNT(*) AS visitors
    FROM daily_country_visitors
    WHERE day >= ?
    GROUP BY country
  )
  SELECT
    traffic.country AS country,
    SUM(traffic.page_views) AS page_views,
    COALESCE(visitor_totals.visitors, 0) AS visitors
  FROM daily_country_traffic AS traffic
  LEFT JOIN visitor_totals ON visitor_totals.country = traffic.country
  WHERE traffic.day >= ?
  GROUP BY traffic.country, visitor_totals.visitors
  ORDER BY visitors DESC, page_views DESC, country ASC
`;

export const upsertDailyCountryTraffic = `
  INSERT INTO daily_country_traffic (day, country, page_views, updated_at)
  VALUES (?, ?, 1, CURRENT_TIMESTAMP)
  ON CONFLICT(day, country) DO UPDATE SET
    page_views = page_views + 1,
    updated_at = CURRENT_TIMESTAMP
`;

export const insertDailyCountryVisitor = `
  INSERT OR IGNORE INTO daily_country_visitors (day, country, visitor_hash)
  VALUES (?, ?, ?)
`;
