import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { DatabaseSync } from 'node:sqlite';
import test from 'node:test';

const root = new URL('../', import.meta.url);

void test('D1 migrations preserve the public August 30–31 traffic baseline', async () => {
  const database = new DatabaseSync(':memory:');
  const migrationDirectory = new URL('drizzle/', root);
  const migrationFiles = (await readdir(migrationDirectory))
    .filter((file) => file.endsWith('.sql'))
    .sort();

  for (const file of migrationFiles) {
    database.exec(await readFile(new URL(file, migrationDirectory), 'utf8'));
  }

  const rows = database
    .prepare(`
      SELECT traffic.day, traffic.page_views AS pageViews, baseline.visitors
      FROM daily_traffic AS traffic
      JOIN daily_visitor_baseline AS baseline ON baseline.day = traffic.day
      ORDER BY traffic.day
    `)
    .all()
    .map((row) => ({ ...row }));

  assert.deepEqual(rows, [
    { day: '2026-08-30', pageViews: 926, visitors: 774 },
    { day: '2026-08-31', pageViews: 734, visitors: 559 },
  ]);

  const countryTables = database
    .prepare(`
      SELECT name
      FROM sqlite_master
      WHERE type = 'table' AND name LIKE 'daily_country_%'
      ORDER BY name
    `)
    .all()
    .map((row) => row.name);

  assert.deepEqual(countryTables, [
    'daily_country_traffic',
    'daily_country_visitors',
  ]);
});
