CREATE TABLE IF NOT EXISTS daily_country_traffic (
  day TEXT NOT NULL,
  country TEXT NOT NULL,
  page_views INTEGER NOT NULL DEFAULT 0,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (day, country)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS daily_country_visitors (
  day TEXT NOT NULL,
  country TEXT NOT NULL,
  visitor_hash TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (day, country, visitor_hash)
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS daily_country_visitors_day_country_idx
  ON daily_country_visitors (day, country);
--> statement-breakpoint
PRAGMA optimize;
