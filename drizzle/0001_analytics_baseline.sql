CREATE TABLE IF NOT EXISTS daily_visitor_baseline (
  day TEXT PRIMARY KEY NOT NULL,
  visitors INTEGER NOT NULL DEFAULT 0,
  imported_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
PRAGMA optimize;
