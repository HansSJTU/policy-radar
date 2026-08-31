import test from 'node:test';
import assert from 'node:assert/strict';

import { getThirtyDayBriefing } from '../app/briefing-feed.ts';

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
  const { upcoming } = getThirtyDayBriefing('2026-08-29');

  assert.deepEqual(
    upcoming.map(({ id, date }) => [id, date]),
    [
      ['duration-government-response', '2026-08-31'],
      ['duration-injunction-hearing', '2026-09-03'],
      ['duration-effective-date', '2026-09-15'],
      ['h1b-fee-comment-deadline', '2026-09-24'],
    ],
  );
  assert.ok(upcoming.every((item) => item.confirmed));
});
