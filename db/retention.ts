// Only page views enter these tables. All writes share the traffic D1 transaction.
export const retentionSchema = [
  `CREATE TABLE IF NOT EXISTS retention_visitors (
    anonymous_visitor_id TEXT PRIMARY KEY NOT NULL,
    first_seen TEXT NOT NULL, last_seen TEXT NOT NULL, first_day TEXT NOT NULL,
    utm_source TEXT NOT NULL, utm_medium TEXT NOT NULL,
    utm_campaign TEXT NOT NULL, referrer_host TEXT NOT NULL
  )`,
  `CREATE TABLE IF NOT EXISTS retention_days (
    anonymous_visitor_id TEXT NOT NULL, day TEXT NOT NULL,
    PRIMARY KEY (anonymous_visitor_id, day)
  )`,
  `CREATE INDEX IF NOT EXISTS retention_days_day ON retention_days(day)`,
  `CREATE TABLE IF NOT EXISTS retention_sessions (
    anonymous_visitor_id TEXT NOT NULL, session_id TEXT NOT NULL,
    PRIMARY KEY (anonymous_visitor_id, session_id)
  )`,
];
export const upsertRetentionVisitor = `INSERT INTO retention_visitors
  (anonymous_visitor_id, first_seen, last_seen, first_day, utm_source, utm_medium, utm_campaign, referrer_host)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  ON CONFLICT(anonymous_visitor_id) DO UPDATE SET
    last_seen = MAX(last_seen, excluded.last_seen),
    first_day = CASE WHEN excluded.first_seen < first_seen THEN excluded.first_day ELSE first_day END,
    utm_source = CASE WHEN excluded.first_seen < first_seen THEN excluded.utm_source ELSE utm_source END,
    utm_medium = CASE WHEN excluded.first_seen < first_seen THEN excluded.utm_medium ELSE utm_medium END,
    utm_campaign = CASE WHEN excluded.first_seen < first_seen THEN excluded.utm_campaign ELSE utm_campaign END,
    referrer_host = CASE WHEN excluded.first_seen < first_seen THEN excluded.referrer_host ELSE referrer_host END,
    first_seen = MIN(first_seen, excluded.first_seen)`;
export const insertRetentionDay = `INSERT OR IGNORE INTO retention_days VALUES (?, ?)`;
export const insertRetentionSession = `INSERT OR IGNORE INTO retention_sessions
  SELECT ?, ? WHERE ?1 IS NOT NULL AND ?2 <> '(unknown)'`;

export const selectRetentionVisitors = `SELECT v.*,
  (SELECT COUNT(*) FROM retention_days d WHERE d.anonymous_visitor_id = v.anonymous_visitor_id) AS visit_days,
  (SELECT COUNT(*) FROM retention_sessions s WHERE s.anonymous_visitor_id = v.anonymous_visitor_id) AS session_count
  FROM retention_visitors v`;

// The as-of day is still in progress: only strictly earlier target days are mature.
export const selectRetentionCohorts = `WITH offsets(n) AS (VALUES (1), (3), (7), (30))
  SELECT v.first_day AS cohort_day, v.utm_source, v.utm_medium, v.utm_campaign,
    v.referrer_host, o.n AS retention_day, COUNT(*) AS cohort_size,
    CASE WHEN date(v.first_day, '+' || o.n || ' days') < ?1
      THEN COUNT(d.day) ELSE NULL END AS retained_visitors,
    CASE WHEN date(v.first_day, '+' || o.n || ' days') < ?1
      THEN ROUND(100.0 * COUNT(d.day) / COUNT(*), 2) ELSE NULL END AS retention_percent
  FROM retention_visitors v CROSS JOIN offsets o
  LEFT JOIN retention_days d ON d.anonymous_visitor_id = v.anonymous_visitor_id
    AND d.day = date(v.first_day, '+' || o.n || ' days')
  WHERE v.first_day < ?1
  GROUP BY v.first_day, v.utm_source, v.utm_medium, v.utm_campaign, v.referrer_host, o.n
  ORDER BY cohort_day, utm_source, utm_medium, utm_campaign, referrer_host, retention_day`;

// A returning browser has a recorded page view before this calendar day.
export const selectReturningVisitors = `SELECT d.day, COUNT(*) AS visitors,
  SUM(CASE WHEN v.first_day < d.day THEN 1 ELSE 0 END) AS returning_visitors,
  ROUND(100.0 * SUM(CASE WHEN v.first_day < d.day THEN 1 ELSE 0 END) / COUNT(*), 2) AS returning_percent
  FROM retention_days d JOIN retention_visitors v USING (anonymous_visitor_id)
  WHERE d.day < ?1 GROUP BY d.day ORDER BY d.day`;
