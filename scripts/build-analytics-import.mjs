import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

const DAY_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/;

function validDay(value) {
  if (typeof value !== 'string') return false;
  const match = DAY_PATTERN.exec(value);
  if (!match) return false;

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const parsed = new Date(Date.UTC(year, month - 1, day));

  return (
    parsed.getUTCFullYear() === year &&
    parsed.getUTCMonth() === month - 1 &&
    parsed.getUTCDate() === day
  );
}

function requireCount(value, field, day) {
  if (!Number.isSafeInteger(value) || value < 0) {
    throw new TypeError(`${field} for ${day} must be a non-negative safe integer`);
  }
}

export function buildAnalyticsImport(rows) {
  if (!Array.isArray(rows)) {
    throw new TypeError('Analytics baseline must be an array');
  }

  const seenDays = new Set();
  const validatedRows = rows.map((row, index) => {
    if (!row || typeof row !== 'object' || Array.isArray(row)) {
      throw new TypeError(`Row ${index + 1} must be an object`);
    }
    if (!validDay(row.day)) {
      throw new TypeError(`Row ${index + 1} day must be a valid YYYY-MM-DD date`);
    }
    if (seenDays.has(row.day)) {
      throw new TypeError(`Duplicate day: ${row.day}`);
    }
    seenDays.add(row.day);
    requireCount(row.pageViews, 'pageViews', row.day);
    requireCount(row.visitors, 'visitors', row.day);

    return {
      day: row.day,
      pageViews: row.pageViews,
      visitors: row.visitors,
    };
  });

  validatedRows.sort((left, right) => left.day.localeCompare(right.day));

  const statements = ['BEGIN TRANSACTION;'];
  for (const row of validatedRows) {
    statements.push(
      `INSERT INTO daily_traffic (day, page_views, updated_at) VALUES ('${row.day}', ${row.pageViews}, CURRENT_TIMESTAMP) ON CONFLICT(day) DO UPDATE SET page_views = excluded.page_views, updated_at = CURRENT_TIMESTAMP;`,
      `INSERT INTO daily_visitor_baseline (day, visitors, imported_at) VALUES ('${row.day}', ${row.visitors}, CURRENT_TIMESTAMP) ON CONFLICT(day) DO UPDATE SET visitors = excluded.visitors, imported_at = CURRENT_TIMESTAMP;`,
    );
  }
  statements.push('COMMIT;', '');
  return statements.join('\n');
}

const executedDirectly =
  process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;

if (executedDirectly) {
  const source = await readFile(
    new URL('../data/analytics-baseline.json', import.meta.url),
    'utf8',
  );
  process.stdout.write(buildAnalyticsImport(JSON.parse(source)));
}
