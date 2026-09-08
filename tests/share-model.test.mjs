import assert from 'node:assert/strict';
import test from 'node:test';

const share = await import('../app/share-model.ts').catch(() => ({}));

test('shared links preserve page, anchor, and selected language but strip incoming tracking', () => {
  assert.equal(typeof share.buildShareContent, 'function');
  const content = share.buildShareContent(
    'https://example.com/updates?lang=zh&utm_source=private&token=secret#opt-fee', 'en',
  );
  assert.equal(content.url, 'https://example.com/updates?lang=en#opt-fee');
  assert.doesNotMatch(content.text, /secret|private/);
  assert.match(content.text, /https:\/\/example.com\/updates\?lang=en#opt-fee/);
});

test('homepage sharing preserves every supported path and the ranking anchor', () => {
  for (const language of ['en', 'zh']) {
    for (const path of ['F-1', 'CPT', 'OPT', 'H-1B']) {
      const content = share.buildShareContent(
        `https://example.com/?path=${path}&utm_source=reddit#ranking`, language,
      );
      assert.equal(content.url, `https://example.com/?lang=${language}&path=${path}#ranking`);
      assert.ok(content.text.endsWith(content.url));
      assert.doesNotMatch(content.text, /utm_source|reddit/);
    }
  }
});

test('homepage sharing omits unsupported filters and keeps only content parameters', () => {
  for (const path of ['', 'all', 'H-4', 'h-1b', 'unknown']) {
    const content = share.buildShareContent(
      `https://example.com/?lang=zh&path=${path}&from=OPT&utm_campaign=private&token=secret#cpt-schools`, 'en',
    );
    assert.equal(content.url, 'https://example.com/?lang=en#cpt-schools');
    assert.doesNotMatch(content.text, /private|secret/);
  }
});

test('homepage sharing without a filter or anchor still uses the selected language', () => {
  const content = share.buildShareContent('https://example.com/?utm_source=reddit', 'zh');
  assert.equal(content.url, 'https://example.com/?lang=zh');
});

test('mail and WhatsApp encode punctuation and Unicode without changing the shared text', () => {
  assert.equal(typeof share.buildShareLinks, 'function');
  const content = { title: '政策 & 路径', text: '你好 & hello\nhttps://example.com/?lang=zh', url: 'https://example.com/?lang=zh' };
  const links = share.buildShareLinks(content, false);
  const whatsapp = new URL(links.whatsapp);
  assert.equal(whatsapp.origin, 'https://wa.me');
  assert.equal(whatsapp.searchParams.get('text'), content.text);
  const mail = new URL(links.email);
  assert.equal(mail.protocol, 'mailto:');
  assert.equal(mail.searchParams.get('subject'), content.title);
  assert.equal(mail.searchParams.get('body'), content.text);
  assert.equal(decodeURIComponent(links.messages.split('body=')[1]), content.text);
  assert.match(links.messages, /^sms:\?body=/);
  assert.match(share.buildShareLinks(content, true).messages, /^sms:&body=/);
});
