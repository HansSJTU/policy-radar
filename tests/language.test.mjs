import assert from 'node:assert/strict';
import test from 'node:test';

import {
  brandHomeLabel,
  languageFromAcceptLanguage,
  languageFromReferrer,
  parseLanguage,
} from '../app/language.ts';

test('parses only explicit supported language selections', () => {
  assert.equal(parseLanguage('zh'), 'zh');
  assert.equal(parseLanguage(' EN '), 'en');
  assert.equal(parseLanguage('fr'), undefined);
});

test('uses the highest-priority supported browser language', () => {
  assert.equal(languageFromAcceptLanguage('zh-CN,zh;q=0.9,en;q=0.8'), 'zh');
  assert.equal(languageFromAcceptLanguage('en-US,en;q=0.9,zh;q=0.7'), 'en');
  assert.equal(languageFromAcceptLanguage('en;q=0.6,zh-Hans;q=0.9'), 'zh');
});

test('defaults unsupported or missing browser languages to English', () => {
  assert.equal(languageFromAcceptLanguage('fr-FR,fr;q=0.9'), 'en');
  assert.equal(languageFromAcceptLanguage(undefined), 'en');
});

test('opens visits from Chinese communities in Chinese', () => {
  assert.equal(languageFromReferrer('https://www.uscardforum.com/t/topic/527162'), 'zh');
  assert.equal(languageFromReferrer('https://link.1p3a.com/'), 'zh');
  assert.equal(languageFromReferrer('https://link.1point3acres.com/?url=x'), 'zh');
  assert.equal(languageFromReferrer('https://mp.weixin.qq.com/s/abc'), 'zh');
  assert.equal(languageFromReferrer('https://www.xiaohongshu.com/explore/1'), 'zh');
});

test('leaves other referrers to the browser language', () => {
  assert.equal(languageFromReferrer('https://www.google.com/'), undefined);
  assert.equal(languageFromReferrer('https://notuscardforum.com/'), undefined);
  assert.equal(languageFromReferrer('https://uscardforum.com.example.org/'), undefined);
  assert.equal(languageFromReferrer(''), undefined);
  assert.equal(languageFromReferrer(null), undefined);
  assert.equal(languageFromReferrer('not a url'), undefined);
});

test('labels the brand as the site home without matching back-to-top blockers', () => {
  assert.equal(brandHomeLabel('en'), 'Policy Radar home');
  assert.equal(brandHomeLabel('zh'), '政策雷达首页');
});
