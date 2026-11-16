import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import { getUpdateLog } from '../app/update-log.ts';
import {
  changeAnchor,
  changeLocation,
  isUpdateMonth,
  RECENT_UPDATE_DAYS,
  recentUpdates,
  UPDATE_MONTHS,
  updateMonthLabel,
  updatesInMonth,
} from '../app/update-pages.ts';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('the update log is newest first and logs the same days in both languages', () => {
  const days = getUpdateLog('zh').map((update) => update.date);
  assert.deepEqual(days, [...days].sort().reverse());
  assert.equal(new Set(days).size, days.length);
  assert.deepEqual(getUpdateLog('en').map((update) => update.date), days);
});

test('/updates shows the 30 days ending on the newest update', () => {
  for (const language of ['zh', 'en']) {
    const log = getUpdateLog(language);
    const recent = recentUpdates(language);
    const newest = Date.parse(`${log[0].date}T12:00:00Z`);
    const age = (update) => (newest - Date.parse(`${update.date}T12:00:00Z`)) / 86_400_000;

    assert.equal(recent[0], log[0]);
    assert.ok(recent.length <= RECENT_UPDATE_DAYS);
    assert.ok(recent.every((update) => age(update) < RECENT_UPDATE_DAYS));
    // Nothing inside the window is dropped, and the rest of the log is older.
    assert.deepEqual(recent, log.slice(0, recent.length));
    assert.ok(log.slice(recent.length).every((update) => age(update) >= RECENT_UPDATE_DAYS));
  }
});

test('every update is on the page of its month, and only there', () => {
  assert.deepEqual(UPDATE_MONTHS, [...UPDATE_MONTHS].sort().reverse());
  for (const language of ['zh', 'en']) {
    const log = getUpdateLog(language);
    const paged = UPDATE_MONTHS.flatMap((month) => updatesInMonth(language, month));
    assert.deepEqual(paged, log);
    for (const month of UPDATE_MONTHS) {
      assert.ok(updatesInMonth(language, month).every((update) => update.date.startsWith(month)));
    }
  }
  assert.equal(isUpdateMonth(UPDATE_MONTHS[0]), true);
  assert.equal(isUpdateMonth('1999-01'), false);
  assert.equal(isUpdateMonth('constructor'), false);
});

test('months are named in the page language', () => {
  assert.equal(updateMonthLabel('2026-10', 'zh'), '2026年10月');
  assert.equal(updateMonthLabel('2026-10', 'en'), 'October 2026');
});

test('each change id is unique, so a link to a change finds one place', () => {
  const ids = getUpdateLog('zh').flatMap((update) => update.changes.map((change) => change.id));
  assert.equal(new Set(ids).size, ids.length);
  assert.deepEqual(
    getUpdateLog('en').flatMap((update) => update.changes.map((change) => change.id)),
    ids,
  );

  const oldest = getUpdateLog('zh').at(-1);
  assert.deepEqual(changeLocation(oldest.changes[0].id), {
    path: `/updates/${oldest.date.slice(0, 7)}`,
    anchor: changeAnchor(oldest.changes[0]),
  });
  assert.equal(changeLocation('no-such-change'), null);
});

test('an old /updates#change link is sent on to the month page', async () => {
  const page = await read('app/updates/page.tsx');
  const redirect = await read('app/updates/older-change-redirect.tsx');
  const route = await read('app/updates/change/[changeId]/route.ts');

  assert.match(page, /<OlderChangeRedirect \/>/);
  // Only when the anchor is not on the page, so recent links stay put.
  assert.match(redirect, /document\.getElementById\(anchor\)\) return;/);
  assert.match(redirect, /\/updates\/change\//);
  assert.match(route, /changeLocation\(changeId\)/);
  // An unknown id returns to /updates without an anchor, which ends the loop.
  assert.match(route, /: `\/updates\$\{query\}`/);
});

test('the list page and the month pages render the same entries component', async () => {
  const page = await read('app/updates/page.tsx');
  const month = await read('app/updates/[month]/page.tsx');
  assert.match(page, /<UpdateReleases updates=\{recentUpdates\(language\)\}/);
  assert.match(page, /<UpdateMonthLinks language=\{language\} \/>/);
  assert.match(month, /<UpdateReleases updates=\{updatesInMonth\(language, month\)\}/);
  assert.match(month, /if \(!isUpdateMonth\(month\)\) notFound\(\);/);
});
