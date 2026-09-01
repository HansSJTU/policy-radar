import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import { getUpdateLog } from '../app/update-log.ts';

const han = /[\u3400-\u9fff]/u;

function collectStrings(value) {
  if (typeof value === 'string') return [value];
  if (Array.isArray(value)) return value.flatMap(collectStrings);
  if (value && typeof value === 'object') return Object.values(value).flatMap(collectStrings);
  return [];
}

test('the first content update contains only the three material September 1 changes', () => {
  const [entry] = getUpdateLog('zh');

  assert.equal(entry.date, '2026-09-01');
  assert.deepEqual(
    entry.changes.map((change) => change.id),
    ['duration-hearing', 'cpt-guidance-dates', 'cpt-school-evidence'],
  );

  const text = collectStrings(entry).join(' ');
  assert.match(text, /2026-09-03/);
  assert.match(text, /2026-09-09/);
  assert.match(text, /13 所/);
  assert.match(text, /18 所/);
  assert.doesNotMatch(text, /排序不变|没有阶段变化|未提交|未推送|未发布/);
});

test('the English update log contains no Chinese copy', () => {
  const strings = collectStrings(getUpdateLog('en'));
  assert.equal(strings.filter((value) => han.test(value)).length, 0);
});

test('the update page and home navigation expose the changelog route', async () => {
  const [page, home] = await Promise.all([
    readFile(new URL('../app/updates/page.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/policy-radar-client.tsx', import.meta.url), 'utf8'),
  ]);

  assert.match(page, /getUpdateLog/);
  assert.match(home, /\/updates\?lang=en/);
  assert.match(home, /href=\{updatesHref\}/);
});
