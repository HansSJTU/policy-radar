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
