CREATE TABLE IF NOT EXISTS policy_impact_seed_ratings (
  policy_id TEXT PRIMARY KEY,
  seed_count INTEGER NOT NULL CHECK (seed_count > 0),
  rating_total INTEGER NOT NULL CHECK (
    rating_total >= seed_count AND rating_total <= seed_count * 10
  ),
  is_fake INTEGER NOT NULL DEFAULT 1 CHECK (is_fake = 1),
  note TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS policy_impact_seed_batches (
  seed_key TEXT PRIMARY KEY,
  applied_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  is_fake INTEGER NOT NULL DEFAULT 1 CHECK (is_fake = 1),
  note TEXT NOT NULL
);

WITH seed_values (
  policy_id,
  seed_count,
  rating_total,
  is_fake,
  note
) AS (
  VALUES
    ('opt-fee', 18, 173, 1, 'FAKE launch seed; safe to delete'),
    ('h1b-fee', 17, 161, 1, 'FAKE launch seed; safe to delete'),
    ('duration-status', 20, 184, 1, 'FAKE launch seed; safe to delete'),
    ('h1b-weighted-selection', 16, 139, 1, 'FAKE launch seed; safe to delete'),
    ('cpt-guidance', 19, 169, 1, 'FAKE launch seed; safe to delete'),
    ('prevailing-wage', 14, 115, 1, 'FAKE launch seed; safe to delete'),
    ('h1b-reform', 12, 89, 1, 'FAKE launch seed; safe to delete'),
    ('grace-period', 15, 119, 1, 'FAKE launch seed; safe to delete'),
    ('ead-discretion', 11, 69, 1, 'FAKE launch seed; safe to delete'),
    ('h4-ead', 13, 92, 1, 'FAKE launch seed; safe to delete')
)
INSERT INTO policy_impact_seed_ratings (
  policy_id,
  seed_count,
  rating_total,
  is_fake,
  note
)
SELECT policy_id, seed_count, rating_total, is_fake, note
FROM seed_values
WHERE NOT EXISTS (
  SELECT 1
  FROM policy_impact_seed_batches
  WHERE seed_key = 'community-impact-launch-v1'
)
ON CONFLICT(policy_id) DO UPDATE SET
  seed_count = excluded.seed_count,
  rating_total = excluded.rating_total,
  is_fake = excluded.is_fake,
  note = excluded.note;

INSERT OR IGNORE INTO policy_impact_seed_batches (seed_key, is_fake, note)
VALUES (
  'community-impact-launch-v1',
  1,
  'FAKE community-impact launch seed. Cleanup: DELETE FROM policy_impact_seed_ratings WHERE is_fake = 1; retain this marker so later deploys do not reinsert seeds.'
);
