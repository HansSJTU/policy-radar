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
