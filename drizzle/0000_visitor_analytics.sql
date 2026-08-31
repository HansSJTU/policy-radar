CREATE TABLE IF NOT EXISTS daily_traffic (
  day TEXT PRIMARY KEY NOT NULL,
  page_views INTEGER NOT NULL DEFAULT 0,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS daily_visitors (
  day TEXT NOT NULL,
  visitor_hash TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (day, visitor_hash)
);
--> statement-breakpoint
PRAGMA optimize;
