INSERT INTO daily_traffic (day, page_views, updated_at)
VALUES ('2026-08-30', 926, CURRENT_TIMESTAMP)
ON CONFLICT(day) DO UPDATE SET
  page_views = daily_traffic.page_views + excluded.page_views,
  updated_at = CURRENT_TIMESTAMP;
--> statement-breakpoint
INSERT INTO daily_visitor_baseline (day, visitors, imported_at)
VALUES ('2026-08-30', 774, CURRENT_TIMESTAMP)
ON CONFLICT(day) DO UPDATE SET
  visitors = daily_visitor_baseline.visitors + excluded.visitors,
  imported_at = CURRENT_TIMESTAMP;
--> statement-breakpoint
INSERT INTO daily_traffic (day, page_views, updated_at)
VALUES ('2026-08-31', 734, CURRENT_TIMESTAMP)
ON CONFLICT(day) DO UPDATE SET
  page_views = daily_traffic.page_views + excluded.page_views,
  updated_at = CURRENT_TIMESTAMP;
--> statement-breakpoint
INSERT INTO daily_visitor_baseline (day, visitors, imported_at)
VALUES ('2026-08-31', 559, CURRENT_TIMESTAMP)
ON CONFLICT(day) DO UPDATE SET
  visitors = daily_visitor_baseline.visitors + excluded.visitors,
  imported_at = CURRENT_TIMESTAMP;
--> statement-breakpoint
PRAGMA optimize;
