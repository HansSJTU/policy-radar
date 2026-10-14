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

export const createPolicyImpactRatingsTable = `
  CREATE TABLE IF NOT EXISTS policy_impact_ratings (
    policy_id TEXT NOT NULL,
    visitor_id TEXT NOT NULL,
    rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 10),
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (policy_id, visitor_id)
  )
`;

export const createPolicyImpactSeedRatingsTable = `
  CREATE TABLE IF NOT EXISTS policy_impact_seed_ratings (
    policy_id TEXT PRIMARY KEY,
    seed_count INTEGER NOT NULL CHECK (seed_count > 0),
    rating_total INTEGER NOT NULL CHECK (
      rating_total >= seed_count AND rating_total <= seed_count * 10
    ),
    is_fake INTEGER NOT NULL DEFAULT 1 CHECK (is_fake = 1),
    note TEXT NOT NULL
  )
`;

export const upsertPolicyImpactRating = `
  INSERT INTO policy_impact_ratings (policy_id, visitor_id, rating)
  VALUES (?, ?, ?)
  ON CONFLICT(policy_id, visitor_id) DO UPDATE SET
    rating = excluded.rating,
    updated_at = CURRENT_TIMESTAMP
`;

// A policy's launch seed stops counting once it has this many real ratings.
export const SEED_RETIREMENT_REAL_RATINGS = 10;

export const selectPolicyImpactAggregates = `
  WITH real_totals AS (
    SELECT
      policy_id,
      SUM(rating) AS rating_total,
      COUNT(*) AS rating_count
    FROM policy_impact_ratings
    GROUP BY policy_id
  ), active_seeds AS (
    SELECT
      policy_impact_seed_ratings.policy_id,
      policy_impact_seed_ratings.rating_total AS rating_total,
      policy_impact_seed_ratings.seed_count AS seed_count
    FROM policy_impact_seed_ratings
    LEFT JOIN real_totals
      ON real_totals.policy_id = policy_impact_seed_ratings.policy_id
    WHERE policy_impact_seed_ratings.is_fake = 1
      AND COALESCE(real_totals.rating_count, 0) < ${SEED_RETIREMENT_REAL_RATINGS}
  ), policy_ids AS (
    SELECT policy_id FROM real_totals
    UNION
    SELECT policy_id FROM active_seeds
  )
  SELECT
    policy_ids.policy_id,
    ROUND(
      (
        COALESCE(real_totals.rating_total, 0) +
        COALESCE(active_seeds.rating_total, 0)
      ) * 1.0 /
      (
        COALESCE(real_totals.rating_count, 0) +
        COALESCE(active_seeds.seed_count, 0)
      ),
      1
    ) AS average,
    COALESCE(real_totals.rating_count, 0) +
      COALESCE(active_seeds.seed_count, 0) AS rating_count
  FROM policy_ids
  LEFT JOIN real_totals USING (policy_id)
  LEFT JOIN active_seeds USING (policy_id)
  ORDER BY policy_ids.policy_id ASC
`;
