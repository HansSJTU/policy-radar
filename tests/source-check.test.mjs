import assert from 'node:assert/strict';
import test from 'node:test';

import { communitySchools, verifiedSchools } from '../app/cpt-schools.ts';
import { policyContents } from '../content/policies/index.ts';
import {
  buildReport,
  changedLines,
  classify,
  collectSources,
  ecfrToText,
  federalRegisterToText,
  feedToText,
  fetchPlan,
  htmlToText,
  isArchivedDocument,
  unusableReason,
} from '../scripts/source-check-model.mjs';

const items = collectSources({ policyContents, verifiedSchools, communitySchools });

test('every policy and school is covered, each policy with one primary source', () => {
  for (const policy of policyContents) {
    const own = items.filter((item) => item.owner === `policy:${policy.id}`);
    assert.equal(own.filter((item) => item.primary).length, 1, policy.id);
    assert.ok(!own.find((item) => item.primary).url.includes('uscardforum.com'), policy.id);
    for (const { href } of policy.sources) {
      assert.ok(own.some((item) => item.url === href), `${policy.id} ${href}`);
    }
    if (policy.commentUrl) assert.ok(own.some((item) => item.url === policy.commentUrl));
  }
  for (const school of verifiedSchools) {
    assert.ok(items.some((item) => item.owner === `school:${school.id}` && item.url === school.href));
  }
  for (const school of communitySchools) {
    assert.ok(items.some((item) => item.owner === `school:${school.id}` && item.url === null));
  }
});

test('reader pages that turn programs away are fetched through their feeds and APIs', () => {
  assert.deepEqual(
    fetchPlan('https://www.federalregister.gov/documents/2026/10/08/2026-20660/optional-practical-training-fees'),
    {
      kind: 'federal-register',
      key: 'federal-register:2026-20660',
      url: 'https://www.federalregister.gov/api/v1/documents/2026-20660.json',
    },
  );
  assert.equal(fetchPlan('https://www.federalregister.gov/d/2026-11285').key, 'federal-register:2026-11285');

  const entry = fetchPlan('https://www.courtlistener.com/docket/74919449/association-of-american-universities-v-us-department-of-homeland/?order_by=desc#entry-33');
  const feed = fetchPlan('https://www.courtlistener.com/docket/74919449/feed/');
  assert.equal(entry.url, 'https://www.courtlistener.com/docket/74919449/feed/');
  assert.equal(entry.key, feed.key);

  const comment = fetchPlan('https://www.regulations.gov/commenton/ICEB-2026-0100-0001', { regulationsApiKey: 'k' });
  assert.equal(comment.url, 'https://api.regulations.gov/v4/documents/ICEB-2026-0100-0001');
  assert.deepEqual(comment.headers, { 'X-Api-Key': 'k' });
  assert.equal(
    fetchPlan('https://www.regulations.gov/docket/USCIS-2026-0529').url,
    'https://api.regulations.gov/v4/dockets/USCIS-2026-0529',
  );

  const section = fetchPlan('https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-214/subpart-A/section-214.1#p-214.1(l)(2)');
  assert.equal(section.url, 'https://www.ecfr.gov/api/versioner/v1/versions/title-8.json?section=214.1');
  assert.equal(section.key, fetchPlan('https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-214/section-214.1#p-214.1(c)(5)').key);
});

test('other links are fetched as cited, without the fragment', () => {
  const pdf = fetchPlan('https://www.nafsa.org/sites/default/files/media/document/Transcript.pdf#page=70');
  assert.equal(pdf.kind, 'page');
  assert.equal(pdf.url, 'https://www.nafsa.org/sites/default/files/media/document/Transcript.pdf');
  assert.equal(fetchPlan('https://www.uscardforum.com/t/topic/531864').kind, 'forum');
  assert.ok(isArchivedDocument('https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.51.0.pdf'));
  assert.ok(isArchivedDocument('https://www.govinfo.gov/content/pkg/FR-2026-10-08/pdf/2026-20660.pdf'));
  assert.ok(!isArchivedDocument('https://www.ice.gov/doclib/sevis/pdf/bcm260801.pdf'));
});

test('page text ignores scripts, markup and hidden tokens', () => {
  const page = (token) => `<html><head><title>CPT &amp; OPT</title><script>var csrf="${token}"</script></head>
    <body><nav>Menu</nav><div data-nonce="${token}"><h1>Update</h1><p>CPT is&nbsp;paused.<br>Check back.</p></div>
    <!-- rendered ${token} --><style>.a{}</style></body></html>`;
  assert.equal(htmlToText(page('a1')), 'CPT & OPT\nMenu\nUpdate\nCPT is paused.\nCheck back.');
  assert.equal(htmlToText(page('a1')), htmlToText(page('b2')));
});

test('a marked main region is used when it holds the content', () => {
  const body = 'Required internships only. '.repeat(30);
  const html = `<title>T</title><nav>Rotating news ${Date.now()}</nav><main><p>${body}</p></main>`;
  assert.equal(htmlToText(html), `T\n${body.trim()}`);
});

test('docket feeds become one line per entry', () => {
  const xml = `<feed><entry><title>Entry #34 in AAU v. DHS</title>
    <link href="https://www.courtlistener.com/docket/1/x/?order_by=desc#entry-34"/>
    <updated>2026-11-12T00:00:00-08:00</updated>
    <summary type="html">&lt;p&gt;Transcript&lt;/p&gt;</summary></entry></feed>`;
  assert.equal(
    feedToText(xml),
    '2026-11-12T00:00:00-08:00 | Entry #34 in AAU v. DHS | Transcript | https://www.courtlistener.com/docket/1/x/?order_by=desc#entry-34',
  );
  assert.equal(feedToText('<feed></feed>'), '');
});

test('a Federal Register record changes only when its facts do', () => {
  const record = {
    document_number: '2026-20660',
    title: 'Optional Practical Training Fees',
    comments_close_on: '2026-11-09',
    agencies: [{ name: 'Homeland Security Department' }],
    page_views: { count: 10 },
  };
  const text = federalRegisterToText(record);
  assert.match(text, /comments_close_on: 2026-11-09/);
  assert.match(text, /agency_names: \["Homeland Security Department"\]/);
  assert.equal(text, federalRegisterToText({ ...record, page_views: { count: 999 } }));
  assert.notEqual(text, federalRegisterToText({ ...record, comments_close_on: '2026-12-09' }));
});

test('a regulation section is tracked by its amendment dates', () => {
  const text = ecfrToText({
    content_versions: [
      { name: '§ 214.1 Requirements', amendment_date: '2026-08-11', removed: false },
      { name: '§ 214.1 Requirements', amendment_date: '2026-09-15', removed: false },
    ],
  });
  assert.equal(text, '§ 214.1 Requirements\namended 2026-08-11\namended 2026-09-15');
  assert.equal(ecfrToText({ content_versions: [] }), '');
});

test('refusals and verification pages are not treated as content', () => {
  const long = 'Curricular Practical Training policy. '.repeat(20);
  assert.equal(unusableReason(200, long), null);
  assert.equal(unusableReason(403, long), 'HTTP 403');
  assert.equal(unusableReason(404, long), 'HTTP 404 (page gone)');
  assert.equal(unusableReason(200, 'Just a moment...\nEnable JavaScript and cookies to continue'), 'verification page instead of content');
  assert.equal(unusableReason(200, 'Loading'), 'page has no readable text');
  // A long page that mentions a captcha is still content.
  assert.equal(unusableReason(200, `${long.repeat(10)} captcha`), null);
});

test('a source is new, changed, unchanged or unreadable', () => {
  assert.equal(classify(undefined, { hash: 'a' }), 'new');
  assert.equal(classify('a', { hash: 'a' }), 'unchanged');
  assert.equal(classify('a', { hash: 'b' }), 'changed');
  assert.equal(classify('a', { problem: 'HTTP 403' }), 'blocked');
  assert.equal(classify('a', { problem: 'HTTP 404 (page gone)', gone: true }), 'gone');
  // Archived documents on record are not downloaded again.
  assert.equal(classify('a', null), 'unchanged');
});

test('changed lines list what was added and removed', () => {
  assert.deepEqual(changedLines('a\nb\nc', 'a\nc\nd\nd'), { added: ['d', 'd'], removed: ['b'] });
  assert.deepEqual(changedLines('a\na', 'a'), { added: [], removed: ['a'] });
});

test('the report leads with what to read and summarises each item', () => {
  const report = buildReport({
    date: '2026-11-15',
    items: [
      { owner: 'policy:opt-fee', url: 'https://example.gov/rule', primary: true, label: 'NPRM', key: 'k1' },
      { owner: 'policy:opt-fee', url: 'https://example.edu/note', primary: false, label: '', key: 'k2' },
      { owner: 'school:x', url: 'https://x.edu/cpt', primary: true, label: 'X', key: 'k3' },
      { owner: 'school:y', url: null, primary: false, label: 'Y' },
    ],
    results: new Map([
      ['k1', { state: 'changed', textFile: '/t/k1.txt', diffFile: '/d/k1.diff', added: ['Comments closed'], removed: [] }],
      ['k2', { state: 'unchanged' }],
      ['k3', { state: 'blocked', note: 'HTTP 403' }],
    ]),
  });
  assert.match(report, /3 sources: 1 changed, 1 blocked, 1 unchanged\./);
  assert.match(report, /## Read these[\s\S]*policy:opt-fee \(primary\)\*\* changed: https:\/\/example\.gov\/rule — NPRM\n {2}text: \/t\/k1\.txt\n {2}diff: \/d\/k1\.diff\n {2}\+ Comments closed/);
  assert.match(report, /## Open these another way[\s\S]*school:x \(primary\)\*\* blocked: https:\/\/x\.edu\/cpt — X\n {2}HTTP 403/);
  assert.match(report, /\| policy:opt-fee \| changed \| 1 \| 0 \| 1 \|/);
  assert.match(report, /\| school:x \| blocked \| 0 \| 1 \| 0 \|/);
  assert.match(report, /\| school:y \| screenshot only \| 0 \| 0 \| 0 \|/);
});
