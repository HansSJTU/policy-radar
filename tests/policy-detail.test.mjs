import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { policyHref, legacyPolicyHref } from '../app/policy-links.ts';
import { buildShareContent } from '../app/share-model.ts';
import { getProcessTrack } from '../app/process-model.ts';
import { getPolicyDetail } from '../app/policy-detail-model.ts';
import { getPolicyExamples } from '../app/policy-examples.ts';

test('policy links retain language and target the requested detail section', () => {
  assert.equal(policyHref('opt-fee', 'zh'), '/policies/opt-fee?lang=zh');
  assert.equal(
    policyHref('duration-status', 'en', 'timeline'),
    '/policies/duration-status?lang=en#timeline',
  );
});

test('only known legacy policy fragments become detail URLs', () => {
  assert.equal(legacyPolicyHref('#opt-fee', 'en'), '/policies/opt-fee?lang=en');
  assert.equal(legacyPolicyHref('#cpt-schools', 'zh'), null);
  assert.equal(legacyPolicyHref('#ranking', 'zh'), null);
  assert.equal(legacyPolicyHref('#not-a-policy', 'en'), null);
  assert.equal(legacyPolicyHref('#%zz', 'en'), null);
});

test('policy sharing uses its own summary and drops acquisition and navigation parameters', () => {
  const content = buildShareContent(
    'https://example.com/policies/opt-fee?utm_source=xhs&from=H-1B&path=H-1B#outlook',
    'en',
    'OPT fee',
    'Potential impact on the first job.',
  );
  assert.equal(
    content.url,
    'https://example.com/policies/opt-fee?lang=en#outlook',
  );
  assert.equal(
    content.text,
    'OPT fee\nPotential impact on the first job.\nhttps://example.com/policies/opt-fee?lang=en#outlook',
  );
});

test('detail selection does not fall back to a different policy or language', () => {
  assert.equal(getPolicyDetail('unknown-policy', 'zh'), undefined);
  const english = getPolicyDetail('h4-ead', 'en');
  assert.equal(english.record.id, 'h4-ead');
  assert.equal(english.editorial.id, 'h4-ead');
  assert.doesNotMatch(JSON.stringify(english), /[\u3400-\u9fff]/u);
  assert.equal(
    getPolicyDetail('opt-fee', 'zh').editorial.title,
    'OPT 可能增收 10 万美元',
  );
});

test('all existing policy IDs resolve with complete analysis and valid related links', async () => {
  const { POLICY_IDS } = await import('../app/community-impact-model.ts');
  for (const language of ['zh', 'en'])
    for (const id of POLICY_IDS) {
      const detail = getPolicyDetail(id, language);
      assert.equal(detail.record.id, id);
      assert.equal(detail.editorial.scenarios.length, 3);
      const process = getProcessTrack(id, language);
      assert.ok(
        process.stages[process.activeStage ?? process.lastCompletedStage],
      );
      assert.ok(
        detail.record.sources.every(
          (source) => source.label && source.href.startsWith('https://'),
        ),
      );
      for (const related of detail.editorial.related)
        assert.ok(getPolicyDetail(related, language), `${id} → ${related}`);
    }
});

test('example groups stay aligned with rendered impacts in both languages', async () => {
  const { POLICY_IDS } = await import('../app/community-impact-model.ts');
  for (const id of POLICY_IDS) {
    for (const language of ['zh', 'en']) {
      const { editorial } = getPolicyDetail(id, language);
      const groups = getPolicyExamples(id, language);
      assert.equal(
        groups.length,
        editorial.impacts.length,
        `${id} (${language}) has unreachable or missing example groups`,
      );
    }
  }

  for (const language of ['zh', 'en']) {
    const groups = getPolicyExamples('h1b-program-integrity', language);
    for (const term of language === 'en'
      ? ['visa interview', 'secondary inspection']
      : ['面签', '二次检查']) {
      assert.ok(groups[0].some((text) => text.includes(term)));
    }
    assert.ok(
      groups[2].some((text) =>
        text.includes(language === 'en' ? 'LCA data' : 'LCA 数据'),
      ),
    );
  }
});

test('federal details share one process while litigation remains separate', () => {
  for (const language of ['zh', 'en']) {
    const federal = getProcessTrack('opt-fee', language).stages;
    for (const id of [
      'h1b-fee',
      'duration-status',
      'h1b-weighted-selection',
      'prevailing-wage',
      'h1b-reform',
      'grace-period',
      'ead-discretion',
      'h4-ead',
      'perm-modernization',
    ]) {
      assert.deepEqual(getProcessTrack(id, language).stages, federal);
    }
    const litigation = getProcessTrack('duration-status', language);
    assert.equal(litigation.lastCompletedStage, 4);
    assert.equal(litigation.litigation.length, 4);
    assert.notDeepEqual(
      getProcessTrack('cpt-guidance', language).stages,
      federal,
    );
  }
});

test('emphasis markers in detail copy are balanced and never render literally', async () => {
  const { POLICY_IDS } = await import('../app/community-impact-model.ts');
  for (const id of POLICY_IDS) {
    for (const language of ['zh', 'en']) {
      const { editorial } = getPolicyDetail(id, language);
      const fields = [
        editorial.summary,
        editorial.background,
        editorial.analysis,
        editorial.teaser,
        editorial.headline,
        editorial.deck,
        editorial.outlook,
        editorial.caveat,
        editorial.note,
        editorial.keyPoint?.label,
        editorial.keyPoint?.text,
        ...editorial.impacts.flat(),
        ...editorial.scope.flat(),
        ...editorial.scenarios.flat(),
      ].filter(Boolean);
      for (const field of fields)
        assert.equal(
          (field.match(/\*\*/g) ?? []).length % 2,
          0,
          `${id} (${language}) has an unclosed emphasis marker: ${field.slice(0, 60)}`,
        );
    }
  }

  const { keyPoint, impacts } = getPolicyDetail('h1b-program-integrity', 'zh').editorial;
  assert.ok(keyPoint?.label && keyPoint.text);
  assert.match(keyPoint.text, /\*\*签证和入境审查\*\*/);
  // The visa and entry emphasis lives in the callout only; the scope impact
  // states the three conditions without repeating the stage comparison.
  assert.doesNotMatch(impacts[0][1], /\*\*/);

  const english = getPolicyDetail('h1b-program-integrity', 'en').editorial;
  assert.doesNotMatch(english.impacts[0][1], /\*\*/);
  assert.match(english.keyPoint.text, /\*\*visa and entry review\*\*/);
});

test('every detail has an explicit effect, audience, caveat and distinct background in both languages', async () => {
  const { POLICY_IDS } = await import('../app/community-impact-model.ts');
  for (const id of POLICY_IDS) {
    for (const language of ['zh', 'en']) {
      const { editorial } = getPolicyDetail(id, language);
      for (const field of [
        'status',
        'effectLabel',
        'audience',
        'caveat',
        'summary',
        'background',
      ])
        assert.ok(editorial[field]);
      assert.notEqual(editorial.summary, editorial.background);
      if (language === 'en')
        assert.doesNotMatch(JSON.stringify(editorial), /[\u3400-\u9fff]/u);
      const expected =
        id === 'h1b-weighted-selection'
          ? 'in-effect'
          : id === 'cpt-guidance'
            ? 'guidance-in-use'
            : id === 'h1b-program-integrity'
              ? 'executive-order-issued'
            : 'not-in-effect';
      assert.equal(editorial.effectState, expected);
    }
  }
  assert.match(
    getPolicyDetail('opt-fee', 'zh').editorial.effectLabel,
    /金额未确认/,
  );
  assert.match(
    getPolicyDetail('grace-period', 'en').editorial.effectLabel,
    /Current rule unchanged/,
  );
});

test('grace-period publication is distinct from final effectiveness', () => {
  for (const language of ['zh', 'en']) {
    const detail = getPolicyDetail('grace-period', language);
    assert.equal(detail.checkedOn, '2026-09-17');
    assert.equal(detail.editorial.effectState, 'not-in-effect');
    assert.ok(detail.record.sources.some(({ href }) => href.endsWith('/2026-18631.pdf')));
    assert.ok(detail.record.milestones.some(({ date }) => date === '2026-09-10'));
    assert.ok(detail.record.next.some(({ date }) => date === '2026-11-10'));
    assert.match(detail.record.current, /USCIS|DHS/);
    assert.doesNotMatch(detail.record.current, /提案尚未公开|proposal is not yet public/);
  }
});

test('PERM expectations stay labeled as analysis and cite the Justice Department settlement', () => {
  for (const language of ['zh', 'en']) {
    const { editorial, record } = getPolicyDetail('perm-modernization', language);
    assert.equal(editorial.possibilities.items.length, 5);
    assert.equal(
      editorial.possibilities.items.filter(([, text]) => text.length > 0).length,
      5,
    );
    const text = JSON.stringify(editorial.possibilities);
    assert.match(text, /OpenAI/);
    assert.match(text, /ATS/);
    assert.ok(
      record.sources.some(({ href }) =>
        href.includes('justice.gov/opa/pr/civil-rights-division-secures-settlement-openai'),
      ),
    );
    assert.ok(record.milestones.some(({ date }) => date === '2026-08-04'));
  }
  assert.match(
    getPolicyDetail('perm-modernization', 'zh').editorial.possibilities.note,
    /不是 DOL 已公布的条款/,
  );
  assert.match(
    getPolicyDetail('perm-modernization', 'en').editorial.possibilities.heading,
    /expect/i,
  );
});

test('D/S relief is consistent across details, homepage and share copy', async () => {
  const { getPolicyShareItem } = await import('../app/item-share-model.ts');
  const { buildItemShareContent } = await import('../app/share-model.ts');
  const { getHomePolicyEditorial } = await import('../app/policy-home-model.ts');
  for (const language of ['zh', 'en']) {
    const detail = getPolicyDetail('duration-status', language);
    assert.equal(detail.editorial.effectState, 'not-in-effect');
    assert.equal(detail.editorial.discovery.next.date, '2026-10-02');
    assert.ok(detail.record.sources.some(source => source.href.endsWith('.51.0.pdf')));
    const text = buildItemShareContent(getPolicyShareItem('duration-status', language), language).text;
    const expression = language === 'zh' ? /全国暂缓/ : /Nationwide court stay/;
    assert.match(text, expression);
    assert.match(getHomePolicyEditorial('duration-status', language).status, expression);
  }
});

test('policy detail page displays community score and provides rating sidebar and mobile trigger', () => {
  const css = readFileSync(new URL('../app/policies/[policyId]/policy-detail.css', import.meta.url), 'utf8');
  assert.match(css, /\.pd-status-shell/);
  assert.match(css, /container-name:\s*pdstatus/);
  assert.match(css, /@container\s+pdstatus\s+\(min-width:\s*710px\)/);
  assert.match(css, /\.pd-rate-action-btn/);
  assert.match(css, /\.pd-sidebar-rating/);
  assert.match(css, /scrollbar-gutter:\s*stable/);
  assert.match(css, /\.pd-rating-modal-dialog/);
  assert.match(css, /\.pd-rating-modal-sheet/);

  const pageSource = readFileSync(new URL('../app/policies/[policyId]/page.tsx', import.meta.url), 'utf8');
  assert.match(pageSource, /PolicyRatingProvider/);
  assert.match(pageSource, /PolicyDetailStatusScore/);
  assert.match(pageSource, /PolicyDetailSidebarRating/);
  assert.match(pageSource, /pd-status-shell/);
  assert.match(pageSource, /isForumLink/);
});

/**
 * Minimal brace-aware CSS splitter. Good enough for these stylesheets: it
 * skips `/* *​/` comments and strings, then walks braces to separate top-level
 * rules from at-rules that carry nested blocks (`@media`, `@container`).
 */
function parseCss(css) {
  const source = css.replace(/\/\*[\s\S]*?\*\//g, '');
  const rules = [];
  let index = 0;
  while (index < source.length) {
    const open = source.indexOf('{', index);
    if (open === -1) break;
    const prelude = source.slice(index, open).trim();
    let depth = 1;
    let cursor = open + 1;
    while (cursor < source.length && depth > 0) {
      const char = source[cursor];
      if (char === '{') depth += 1;
      else if (char === '}') depth -= 1;
      cursor += 1;
    }
    const body = source.slice(open + 1, cursor - 1);
    if (prelude.startsWith('@')) {
      const at = prelude.match(/^@([\w-]+)\s*(.*)$/);
      const conditions = (at?.[2] ?? '')
        .split(',')
        .map((part) => part.trim())
        .filter(Boolean);
      for (const nested of parseCss(body)) {
        rules.push({
          at: at?.[1] ?? '',
          conditions,
          selector: nested.selector,
          declarations: nested.declarations,
        });
      }
    } else {
      const declarations = new Map();
      for (const chunk of body.split(';')) {
        const colon = chunk.indexOf(':');
        if (colon === -1) continue;
        const property = chunk.slice(0, colon).trim().toLowerCase();
        const value = chunk.slice(colon + 1).trim().replace(/^["']|["']$/g, '');
        if (property) declarations.set(property, value);
      }
      rules.push({ at: '', conditions: [], selector: prelude, declarations });
    }
    index = cursor;
  }
  return rules;
}

/** Selectors carrying `container-type: inline-size`, mapped to their container names. */
function containerDeclarations(rules) {
  const declared = new Map();
  for (const rule of rules) {
    if (rule.at || !rule.declarations.has('container-type')) continue;
    const name = rule.declarations.get('container-name');
    if (!name) continue;
    for (const selector of rule.selector.split(',').map((part) => part.trim())) {
      if (!selector) continue;
      if (!declared.has(selector)) declared.set(selector, new Set());
      declared.get(selector).add(name);
    }
  }
  return declared;
}

test('the pd-status container query cannot target its own container element', () => {
  // A container query is evaluated against an element's ancestor containers, so a
  // rule inside `@container` can never style the very element that declares it.
  // The status row previously set `container-type` on `.pd-status` while also
  // querying `pdstatus` for `.pd-status`, which silently made the 4-column rule
  // dead and left the desktop status bar at two columns. This guards that shape.
  const css = readFileSync(
    new URL('../app/policies/[policyId]/policy-detail.css', import.meta.url),
    'utf8',
  );
  const rules = parseCss(css);
  const declared = containerDeclarations(rules);

  const queried = new Map();
  for (const rule of rules) {
    if (rule.at !== 'container') continue;
    const names = rule.conditions
      .map((condition) => condition.match(/^([\w-]+)/)?.[1])
      .filter(Boolean);
    for (const selector of rule.selector.split(',').map((part) => part.trim())) {
      if (!selector) continue;
      if (!queried.has(selector)) queried.set(selector, new Set());
      for (const name of names) queried.get(selector).add(name);
    }
  }

  const selfReferencing = [...queried.entries()]
    .filter(([selector, names]) =>
      [...names].some((name) => declared.get(selector)?.has(name)),
    )
    .map(([selector, names]) => `${selector} (${[...names].join(', ')})`);
  assert.deepEqual(
    selfReferencing,
    [],
    'these selectors both declare and query the same container, so the query never applies',
  );

  // The container and the grid must stay on separate elements for the above to hold.
  assert.ok(declared.has('.pd-status-shell'), '.pd-status-shell must declare the container');
  assert.ok(
    !containerDeclarations(rules).has('.pd-status'),
    '.pd-status must not declare the container it is styled by',
  );
});

test('the status row collapses to one column on narrow screens and four on wide ones', () => {
  const css = readFileSync(
    new URL('../app/policies/[policyId]/policy-detail.css', import.meta.url),
    'utf8',
  );
  const rules = parseCss(css);
  // `repeat(2, minmax(0, 1fr))` and a bare `minmax(0, 1fr)` both contain exactly
  // one `minmax`, so the repeat count — not a substring count — is what matters.
  const columns = (value) => {
    const repeat = value.match(/^repeat\(\s*(\d+)\s*,/);
    if (repeat) return Number(repeat[1]);
    return value.split(/\s+/).filter((part) => part.startsWith('minmax(')).length;
  };

  const base = rules.find(
    (rule) => !rule.at && rule.selector === '.pd-status' && rule.declarations.has('grid-template-columns'),
  );
  assert.ok(base, '.pd-status must set an explicit grid-template-columns');
  assert.equal(columns(base.declarations.get('grid-template-columns')), 2);

  const wide = rules.find(
    (rule) =>
      rule.at === 'container' &&
      rule.selector === '.pd-status' &&
      rule.declarations.has('grid-template-columns'),
  );
  assert.ok(wide, 'the container query must redefine the status grid columns');
  assert.equal(columns(wide.declarations.get('grid-template-columns')), 4);

  const narrow = rules.find(
    (rule) =>
      rule.at === 'media' &&
      rule.selector === '.pd-status' &&
      rule.declarations.has('grid-template-columns'),
  );
  assert.ok(narrow, 'narrow screens must override the status grid columns');
  assert.equal(columns(narrow.declarations.get('grid-template-columns')), 1);
  // `flex-direction` is inert on a grid container; the old mobile rule relied on it.
  assert.equal(
    narrow.declarations.has('flex-direction'),
    false,
    'stacking must use grid-template-columns, not flex-direction',
  );
});
