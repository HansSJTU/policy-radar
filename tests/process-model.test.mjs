import test from 'node:test';
import assert from 'node:assert/strict';

import {
  getProcessTrack,
  getProcessStageState,
  getProcessStageLabel,
} from '../app/process-model.ts';

test('all federal rulemaking policies share one process bar', () => {
  const ids = [
    'opt-fee',
    'h1b-fee',
    'h1b-weighted-selection',
    'duration-status',
    'prevailing-wage',
    'h1b-reform',
    'grace-period',
    'ead-discretion',
    'h4-ead',
  ];
  const tracks = ids.map(getProcessTrack);

  assert.ok(tracks.every((track) => track.kind === 'federal-rulemaking'));
  for (const track of tracks.slice(1)) {
    assert.deepEqual(track.stages, tracks[0].stages);
  }
});

test('H-1B weighted selection is a completed federal rulemaking now in effect', () => {
  const track = getProcessTrack('h1b-weighted-selection');

  assert.equal(track.kind, 'federal-rulemaking');
  assert.equal(track.stages[track.lastCompletedStage], '生效');
  assert.match(track.detail, /2026-02-27/);
  assert.equal(track.litigation.length, 0);
});

test('comment-closed proposals complete comments while the final rule remains a future event', () => {
  for (const id of ['prevailing-wage', 'ead-discretion']) {
    const track = getProcessTrack(id);
    assert.equal(track.stages[track.lastCompletedStage], '公众评论');
    assert.match(track.currentSummary, /评论期.*结束/);
    assert.equal(track.activeStage, null);
    assert.equal(track.nextStage, 4);
    assert.equal(getProcessStageState(track, 4), 'upcoming');
  }
});

test('D/S fixed-duration rule remains federal rulemaking with litigation overlaid', () => {
  const track = getProcessTrack('duration-status');
  const englishTrack = getProcessTrack('duration-status', 'en');

  assert.equal(track.name, '联邦规则制定流程');
  assert.equal(track.stages[track.lastCompletedStage], '最终规则');
  assert.deepEqual(
    track.litigation.map(({ date, label }) => ({ date, label })),
    [
      { date: '8·18', label: '提起诉讼' },
      { date: '9·02', label: '拟议反对意见' },
      { date: '9·03', label: '听证后待裁定' },
    ],
  );
  assert.deepEqual(
    track.litigation.map(({ afterStage, progress }) => ({
      afterStage,
      progress,
    })),
    [
      { afterStage: 4, progress: 53 },
      { afterStage: 4, progress: 70 },
      { afterStage: 4, progress: 80 },
    ],
  );
  assert.deepEqual(
    track.litigation.map(({ lane }) => lane),
    ['base', 'raised', 'base'],
  );
  assert.deepEqual(
    englishTrack.litigation.map(({ date, label }) => ({ date, label })),
    [
      { date: '8·18', label: 'Lawsuit filed' },
      { date: '9·02', label: 'Proposed opposition' },
      { date: '9·03', label: 'Hearing held; decision pending' },
    ],
  );
  assert.match(track.currentSummary, /留待裁定/);
  assert.match(englishTrack.currentSummary, /under advisement/);
});

test('administrative guidance has its own process and color family', () => {
  const track = getProcessTrack('cpt-guidance');

  assert.equal(track.kind, 'administrative-guidance');
  assert.equal(track.name, 'SEVP 行政指引流程');
  assert.notDeepEqual(track.stages, getProcessTrack('opt-fee').stages);
});

test('public inspection does not mark formal Federal Register publication as completed', () => {
  for (const language of ['zh', 'en']) {
    const track = getProcessTrack('grace-period', language);
    assert.equal(track.lastCompletedStage, 1);
    assert.equal(track.activeStage, null);
    assert.equal(track.nextStage, 2);
    assert.equal(getProcessStageState(track, 1), 'complete');
    assert.equal(getProcessStageState(track, 2), 'upcoming');
    assert.match(track.waitingFor, /NPRM/);
    assert.match(
      getProcessStageLabel(track, 2, language),
      /尚未发生|Not yet reached/,
    );
  }
});

test('an ongoing review is distinct from a completed review and a future proposal', () => {
  const track = getProcessTrack('opt-fee');
  assert.equal(getProcessStageState(track, 0), 'complete');
  assert.equal(getProcessStageState(track, 1), 'active');
  assert.equal(getProcessStageState(track, 2), 'upcoming');
});

test('all tracks keep completed, active and future stages disjoint and languages aligned', async () => {
  const { POLICY_IDS } = await import('../app/community-impact-model.ts');
  for (const id of POLICY_IDS) {
    const zh = getProcessTrack(id, 'zh');
    const en = getProcessTrack(id, 'en');
    for (const field of ['lastCompletedStage', 'activeStage', 'nextStage']) {
      assert.equal(zh[field], en[field]);
      assert.ok(
        zh[field] === null || (zh[field] >= 0 && zh[field] < zh.stages.length),
      );
    }
    if (zh.activeStage !== null)
      assert.ok(zh.activeStage > (zh.lastCompletedStage ?? -1));
    if (zh.nextStage !== null) {
      assert.ok(zh.nextStage > (zh.activeStage ?? zh.lastCompletedStage ?? -1));
      assert.equal(getProcessStageState(zh, zh.nextStage), 'upcoming');
      assert.ok(zh.waitingFor && en.waitingFor);
    }
    assert.equal('currentStage' in zh, false);
  }
});
