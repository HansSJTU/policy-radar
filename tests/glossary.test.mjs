import test from 'node:test';
import assert from 'node:assert/strict';

import { annotateGlossary, glossaryEntries } from '../app/glossary.ts';

test('annotates every approved immigration-policy term', () => {
  const text = 'ICE/SEVP 通知 DSO，DHS 的 OMB 与 OIRA 将审查 NPRM；cap-subject H-1B 申请还会涉及 I-765 与 I-539。';
  const terms = annotateGlossary(text)
    .filter((segment) => segment.type === 'term')
    .map((segment) => segment.value);

  assert.deepEqual(terms, [
    'ICE/SEVP',
    'DSO',
    'DHS',
    'OMB',
    'OIRA',
    'NPRM',
    'cap-subject H-1B',
    'I-765',
    'I-539',
  ]);
});

test('matches the longest glossary phrase before its component abbreviations', () => {
  const segments = annotateGlossary('ICE/SEVP 发布更新，ICE 与 SEVP 分别有各自含义。');
  const terms = segments
    .filter((segment) => segment.type === 'term')
    .map((segment) => segment.value);

  assert.deepEqual(terms, ['ICE/SEVP', 'ICE', 'SEVP']);
});

test('each glossary term supplies a full name and a practical explanation', () => {
  for (const entry of glossaryEntries) {
    assert.ok(entry.fullName.length > entry.term.length);
    assert.match(entry.explanation, /。$/);
  }
});

test('a glossary match exposes separate heading and body text for the instant popover', () => {
  const [segment] = annotateGlossary('OMB');

  assert.equal(segment.type, 'term');
  assert.equal(segment.fullName, 'Office of Management and Budget（白宫管理和预算办公室）');
  assert.equal(segment.explanation, '总统行政办公室的一部分；负责监管审查的 OIRA 隶属于 OMB。');
});

test('annotates the five newly approved regulation and CPT terms', () => {
  const segments = annotateGlossary('CFR、Broadcast、integral、cooperative agreement 与 Cap-exempt');
  const terms = segments
    .filter((segment) => segment.type === 'term')
    .map((segment) => segment.value);

  assert.deepEqual(terms, [
    'CFR',
    'Broadcast',
    'integral',
    'cooperative agreement',
    'Cap-exempt',
  ]);
});

test('maps lowercase cap-exempt text to the same popover definition', () => {
  const [segment] = annotateGlossary('cap-exempt');

  assert.equal(segment.type, 'term');
  assert.equal(segment.value, 'cap-exempt');
  assert.equal(segment.fullName, 'Cap-exempt H-1B（不受年度名额限制的 H-1B）');
});

test('annotates the agencies and filings used by the prevailing-wage policy', () => {
  const terms = annotateGlossary('DOL 使用 OEWS 处理 H-1B LCA 与 PERM 工资标准。')
    .filter((segment) => segment.type === 'term')
    .map((segment) => segment.value);

  assert.deepEqual(terms, ['DOL', 'OEWS', 'LCA', 'PERM']);
});
