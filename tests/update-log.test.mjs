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

test('the newest content update records the hearing, government opposition, and CPT evidence', () => {
  const [entry] = getUpdateLog('zh');

  assert.equal(entry.date, '2026-09-03');
  assert.deepEqual(
    entry.changes.map((change) => change.id),
    ['duration-hearing-under-advisement', 'duration-government-opposition', 'cpt-school-evidence-2026-09-03'],
  );

  const text = collectStrings(entry).join(' ');
  assert.match(text, /第 47 项/);
  assert.match(text, /留待裁定/);
  assert.match(text, /没有当庭作出裁决/);
  assert.match(text, /不是法院裁定/);
  assert.match(text, /APA § 705/);
  assert.match(text, /21 所/);
  assert.match(text, /23 所/);
  assert.match(text, /University of Maryland, College Park/);
  assert.match(text, /Trine University/);
  assert.doesNotMatch(text, /未提交|未推送|未发布/);
});

test('the September 2 content update records UC Berkeley thesis and dissertation CPT criteria', () => {
  const [, entry] = getUpdateLog('zh');

  assert.equal(entry.date, '2026-09-02');
  assert.deepEqual(entry.changes.map((change) => change.id), ['uc-berkeley-cpt-criteria']);

  const text = collectStrings(entry).join(' ');
  assert.match(text, /Degree-required 与 thesis\/dissertation-required CPT 继续/);
  assert.match(text, /Advanced to Candidacy/);
  assert.match(text, /无法由其他研究或数据收集方式合理替代/);
  assert.match(text, /导师书面证明/);
  assert.doesNotMatch(text, /学校数量|证据分组|排序不变|未提交|未推送|未发布/);
});

test('the September 1 content update records the corrected hearing date and material CPT changes', () => {
  const [, , entry] = getUpdateLog('zh');

  assert.equal(entry.date, '2026-09-01');
  assert.deepEqual(
    entry.changes.map((change) => change.id),
    ['duration-hearing', 'cpt-guidance-dates', 'cpt-school-evidence'],
  );

  const text = collectStrings(entry).join(' ');
  assert.match(text, /2026-09-09/);
  assert.match(text, /2026-09-03/);
  assert.match(text, /13 所/);
  assert.match(text, /21 所/);
  assert.match(text, /University of Washington/);
  assert.match(text, /Goldey-Beacom College/);
  assert.match(text, /Purdue University/);
  assert.match(text, /MIT/);
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
