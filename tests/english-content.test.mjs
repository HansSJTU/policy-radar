import assert from 'node:assert/strict';
import test from 'node:test';

import { getThirtyDayBriefing } from '../app/briefing-feed.ts';
import {
  englishCommunitySchools,
  englishPolicies,
  englishRouteStages,
  englishVerifiedSchools,
} from '../app/english-content.ts';
import { annotateGlossary, glossaryEntries } from '../app/glossary.ts';
import { getProcessTrack } from '../app/process-model.ts';

const han = /[\u3400-\u9fff]/u;

function collectStrings(value) {
  if (typeof value === 'string') return [value];
  if (Array.isArray(value)) return value.flatMap(collectStrings);
  if (value && typeof value === 'object') return Object.values(value).flatMap(collectStrings);
  return [];
}

test('the English policy and school datasets contain no Chinese copy', () => {
  assert.equal(Object.keys(englishPolicies).length, 10);
  assert.equal(Object.keys(englishVerifiedSchools).length, 11);
  assert.equal(Object.keys(englishCommunitySchools).length, 10);
  assert.equal(Object.keys(englishRouteStages).length, 4);

  const strings = collectStrings({
    englishPolicies,
    englishVerifiedSchools,
    englishCommunitySchools,
    englishRouteStages,
  });
  assert.equal(strings.filter((value) => han.test(value)).length, 0);
});

test('every English policy supplies a translated source label for each source', () => {
  const sourceCounts = {
    'opt-fee': 3,
    'h1b-fee': 2,
    'h1b-weighted-selection': 2,
    'duration-status': 5,
    'cpt-guidance': 3,
    'prevailing-wage': 3,
    'h1b-reform': 3,
    'grace-period': 3,
    'ead-discretion': 3,
    'h4-ead': 2,
  };
  for (const [id, count] of Object.entries(sourceCounts)) {
    assert.equal(englishPolicies[id].sourceLabels.length, count, id);
  }
});

test('English briefings and process tracks contain no Chinese copy', () => {
  const briefing = getThirtyDayBriefing('2026-08-29', 'en');
  const ids = Object.keys(englishPolicies);
  const processStrings = ids.flatMap((id) => collectStrings(getProcessTrack(id, 'en')));
  const briefingStrings = collectStrings(briefing);
  assert.equal([...processStrings, ...briefingStrings].filter((value) => han.test(value)).length, 0);
});

test('every glossary entry has an English-only popover definition', () => {
  for (const entry of glossaryEntries) {
    const [segment] = annotateGlossary(entry.term, 'en');
    assert.equal(segment.type, 'term');
    assert.equal(han.test(segment.fullName), false, entry.term);
    assert.equal(han.test(segment.explanation), false, entry.term);
  }
});
