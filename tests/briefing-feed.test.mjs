import test from 'node:test';
import assert from 'node:assert/strict';

import { briefingItems, englishBriefing, getThirtyDayBriefing } from '../app/briefing-feed.ts';
import { communitySchools, verifiedSchools } from '../app/cpt-schools.ts';

// Campus-level developments live in the CPT school tracker, so the rolling 30-day
// briefing must never name an individual institution.
const genericSchoolWords = new Set(['university', 'college', 'institute', 'school', 'of', 'at', 'the']);
const ambiguousPlaceNames = new Set([
  'new york', 'boston', 'washington', 'pennsylvania', 'michigan', 'alabama', 'utah',
  'delaware', 'oregon', 'kansas', 'colorado', 'maryland', 'california', 'carolina', 'buffalo',
]);

function schoolAliases(name) {
  const base = name.replace(/\s*\(.*\)\s*$/, '').trim();
  const distinctive = base
    .split(/\s+/)
    .filter((word) => !genericSchoolWords.has(word.toLowerCase()));
  const alias = distinctive.join(' ');
  if (!alias || alias === base || ambiguousPlaceNames.has(alias.toLowerCase())) return [base];
  return [base, alias];
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

test('the 30-day briefing excludes individual campus notices', () => {
  const aliases = [...verifiedSchools, ...communitySchools].flatMap(({ school }) => schoolAliases(school));
  const localized = [
    ...briefingItems,
    ...Object.entries(englishBriefing).map(([id, copy]) => ({ id, ...copy })),
  ];
  for (const item of localized) {
    const text = `${item.policy} ${item.summary}`;
    for (const alias of aliases) {
      assert.doesNotMatch(
        text,
        new RegExp(`(^|[^\\p{L}])${escapeRegExp(alias)}([^\\p{L}]|$)`, 'u'),
        `${item.id} carries a campus-specific development (${alias})`,
      );
    }
  }
});

test('every briefing item supplies English copy for the English homepage', () => {
  assert.deepEqual(
    Object.keys(englishBriefing).sort(),
    briefingItems.map(({ id }) => id).sort(),
  );
});

test('recent updates stay inside the prior 30 days and sort newest first', () => {
  const { recent } = getThirtyDayBriefing('2026-08-29');

  assert.deepEqual(
    recent.map(({ id, date }) => [id, date]),
    [
      ['grace-oira-cleared', '2026-08-27'],
      ['h1b-fee-nprm', '2026-08-25'],
      ['cpt-integral-guidance', '2026-08-24'],
      ['h1b-reform-oira', '2026-08-24'],
      ['opt-fee-oira', '2026-08-20'],
      ['duration-lawsuit', '2026-08-18'],
      ['cpt-risk-notice', '2026-08-12'],
      ['ead-discretion-comment-close', '2026-08-04'],
    ],
  );
});

test('future briefing only includes confirmed events in the next 30 days', () => {
  const { upcoming } = getThirtyDayBriefing('2026-09-01');

  assert.deepEqual(
    upcoming.map(({ id, date }) => [id, date]),
    [
      ['duration-injunction-hearing', '2026-09-03'],
      ['duration-effective-date', '2026-09-15'],
      ['h1b-fee-old-proclamation-expiry', '2026-09-21'],
      ['h1b-fee-comment-deadline', '2026-09-24'],
    ],
  );
  assert.ok(upcoming.every((item) => item.confirmed));
});

test('the September 3 briefing records the completed hearing without implying a ruling', () => {
  const { recent, upcoming } = getThirtyDayBriefing('2026-09-03');
  const hearing = recent.find(({ id }) => id === 'duration-hearing-under-advisement');
  const filing = recent.find(({ id }) => id === 'duration-government-opposition');

  assert.ok(hearing);
  assert.match(hearing.summary, /留待裁定/);
  assert.match(hearing.summary, /没有当庭裁决/);
  assert.ok(filing);
  assert.match(filing.summary, /不是法院裁定/);
  assert.equal(upcoming.some(({ id }) => id === 'duration-injunction-hearing'), false);
});

test('briefing date labels follow the same rolling window across a year boundary', async () => {
  const { getBriefingDateLabels } = await import('../app/briefing-feed.ts');
  assert.deepEqual(getBriefingDateLabels('2026-09-09'), { recent: '08·11—09·09', upcoming: '09·10—10·09' });
  assert.deepEqual(getBriefingDateLabels('2026-12-31'), { recent: '12·02—12·31', upcoming: '01·01—01·30' });
});

test('published NPRM is recent and the comment deadline enters the correct rolling window', () => {
  const { recent, upcoming } = getThirtyDayBriefing('2026-09-12');
  assert.ok(recent.some(({ id }) => id === 'grace-publication'));
  assert.ok(!upcoming.some(({ id }) => id === 'grace-publication'));
  assert.ok(!upcoming.some(({ id }) => id === 'grace-comment-deadline'));
  assert.ok(getThirtyDayBriefing('2026-10-11').upcoming.some(({ id, date }) => id === 'grace-comment-deadline' && date === '2026-11-10'));
});

test('nationwide D/S stay removes the superseded effective date while preserving earlier snapshots', () => {
  for (const language of ['zh', 'en']) {
    const { recent, upcoming } = getThirtyDayBriefing('2026-09-14', language);
    assert.ok(recent.some(item => item.id === 'duration-nationwide-stay'));
    assert.ok(!upcoming.some(item => item.id === 'duration-effective-date'));
    assert.ok(upcoming.some(item => item.id === 'duration-status-conference' && item.date === '2026-10-02'));
    assert.ok(getThirtyDayBriefing('2026-09-13', language).upcoming.some(item => item.id === 'duration-effective-date'));
  }
});
