// Pure helpers for scripts/check-sources.mjs: which sources the site cites,
// how each one is fetched, and how a response is turned into comparable text.

const FORUM_HOST = 'www.uscardforum.com';

// Documents that never change once published. They are fetched once and not
// downloaded again while their hash is on record.
const ARCHIVED = [
  /^https:\/\/storage\.courtlistener\.com\/recap\//,
  /^https:\/\/www\.govinfo\.gov\/content\/pkg\//,
];

export function isArchivedDocument(url) {
  return ARCHIVED.some((pattern) => pattern.test(url));
}

function hrefsIn(value, found = []) {
  if (Array.isArray(value)) {
    for (const item of value) hrefsIn(item, found);
  } else if (value && typeof value === 'object') {
    for (const [key, item] of Object.entries(value)) {
      if ((key === 'href' || key === 'commentUrl') && typeof item === 'string') {
        found.push(item);
      } else {
        hrefsIn(item, found);
      }
    }
  }
  return found;
}

// Every link the site cites, grouped by the policy or school that cites it.
// A policy's primary source is its first non-forum entry in `sources`.
export function collectSources({ policyContents, verifiedSchools, communitySchools }) {
  const items = [];
  for (const policy of policyContents) {
    const primary = policy.sources.find(
      ({ href }) => new URL(href).host !== FORUM_HOST,
    )?.href;
    const labels = new Map(policy.sources.map(({ href, en }) => [href, en]));
    for (const url of new Set(hrefsIn(policy))) {
      if (!/^https?:\/\//.test(url)) continue;
      items.push({
        owner: `policy:${policy.id}`,
        url,
        primary: url === primary,
        label: labels.get(url) ?? '',
      });
    }
  }
  for (const school of verifiedSchools) {
    items.push({
      owner: `school:${school.id}`,
      url: school.href,
      primary: true,
      label: school.school,
    });
  }
  for (const school of communitySchools) {
    items.push({
      owner: `school:${school.id}`,
      url: null,
      primary: false,
      label: school.school,
    });
  }
  return items;
}

// How to fetch one cited link. Agencies and CourtListener publish feeds and
// APIs for programs; their reader pages turn programs away. `key` names the
// underlying record, so several links to one docket are fetched once.
export function fetchPlan(rawUrl, { regulationsApiKey = 'DEMO_KEY' } = {}) {
  const url = new URL(rawUrl);
  url.hash = '';
  const path = url.pathname;

  if (url.host === 'www.federalregister.gov') {
    const number =
      path.match(/^\/documents\/\d{4}\/\d{2}\/\d{2}\/([^/]+)/)?.[1] ??
      path.match(/^\/d\/([^/]+)/)?.[1];
    if (number) {
      return {
        kind: 'federal-register',
        key: `federal-register:${number}`,
        url: `https://www.federalregister.gov/api/v1/documents/${number}.json`,
      };
    }
  }

  if (url.host === 'www.courtlistener.com') {
    const docket = path.match(/^\/docket\/(\d+)\//)?.[1];
    if (docket) {
      return {
        kind: 'docket-feed',
        key: `courtlistener:${docket}`,
        url: `https://www.courtlistener.com/docket/${docket}/feed/`,
      };
    }
  }

  if (url.host === 'www.regulations.gov') {
    const match = path.match(/^\/(document|commenton|docket)\/([A-Za-z0-9_-]+)/);
    if (match) {
      const collection = match[1] === 'docket' ? 'dockets' : 'documents';
      return {
        kind: 'regulations',
        key: `regulations:${match[2]}`,
        url: `https://api.regulations.gov/v4/${collection}/${match[2]}`,
        headers: { 'X-Api-Key': regulationsApiKey },
      };
    }
  }

  if (url.host === 'www.ecfr.gov') {
    const title = path.match(/\/title-(\d+)\//)?.[1];
    const section = path.match(/\/section-([0-9A-Za-z.]+)$/)?.[1];
    if (title && section) {
      return {
        kind: 'ecfr',
        key: `ecfr:${title}:${section}`,
        url: `https://www.ecfr.gov/api/versioner/v1/versions/title-${title}.json?section=${section}`,
      };
    }
  }

  return {
    kind: url.host === FORUM_HOST ? 'forum' : 'page',
    key: url.href,
    url: url.href,
  };
}

const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };

function decodeEntities(text) {
  return text
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&([a-z]+);/gi, (entity, name) => ENTITIES[name.toLowerCase()] ?? entity);
}

function tidyLines(text) {
  return text
    .split('\n')
    .map((line) => line.replace(/\s+/g, ' ').trim())
    .filter(Boolean)
    .join('\n');
}

// Readable text of a page, one block per line. Scripts, styles and markup are
// dropped so that tokens and timestamps hidden in them do not look like edits.
// When the page marks its main content, only that part is kept.
export function htmlToText(html) {
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? '';
  const visible = html
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<(script|style|noscript|svg|template|iframe|head)\b[\s\S]*?<\/\1\s*>/gi, ' ');
  const main = visible.match(/<main\b[\s\S]*<\/main\s*>/i)?.[0];
  const toText = (markup) =>
    tidyLines(
      decodeEntities(
        markup
          .replace(/<br\s*\/?>/gi, '\n')
          .replace(/<\/(p|div|li|tr|h[1-6]|section|article|header|footer|nav|aside|main|form|ul|ol|table|blockquote|dd|dt|summary|figcaption|pre)\s*>/gi, '\n')
          .replace(/<[^>]+>/g, ' '),
      ),
    );
  const mainText = main ? toText(main) : '';
  const body = mainText.length >= 500 ? mainText : toText(visible);
  return tidyLines(`${decodeEntities(title)}\n${body}`);
}

// Docket feeds: one line per entry, newest first as the feed lists them.
export function feedToText(xml) {
  const entries = xml.match(/<(entry|item)\b[\s\S]*?<\/\1>/gi) ?? [];
  const field = (entry, name) => {
    const raw = entry.match(new RegExp(`<${name}\\b[^>]*>([\\s\\S]*?)</${name}>`, 'i'))?.[1] ?? '';
    const cdata = raw.replace(/^\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*$/, '$1');
    return tidyLines(decodeEntities(decodeEntities(cdata).replace(/<[^>]+>/g, ' '))).replace(/\n/g, ' ');
  };
  return entries
    .map((entry) => {
      const link = entry.match(/<link\b[^>]*href="([^"]+)"/i)?.[1] ?? field(entry, 'link');
      return [
        field(entry, 'updated') || field(entry, 'published') || field(entry, 'pubDate'),
        field(entry, 'title'),
        field(entry, 'summary') || field(entry, 'description') || field(entry, 'content'),
        decodeEntities(link),
      ]
        .filter(Boolean)
        .join(' | ');
    })
    .join('\n');
}

const FEDERAL_REGISTER_FIELDS = [
  'document_number', 'title', 'type', 'action', 'agency_names', 'publication_date',
  'citation', 'dates', 'effective_on', 'comments_close_on', 'docket_ids',
  'regulation_id_numbers', 'correction_of', 'corrections', 'abstract',
  'html_url', 'pdf_url', 'raw_text_url',
];

// The facts of a Federal Register record that matter to the site. Counters
// such as page views change daily and are left out.
export function federalRegisterToText(document) {
  const agencies = (document.agencies ?? []).map((agency) => agency.name ?? agency.raw_name);
  const record = { ...document, agency_names: agencies };
  return FEDERAL_REGISTER_FIELDS
    .filter((name) => record[name] !== undefined && record[name] !== null)
    .map((name) => `${name}: ${typeof record[name] === 'string' ? record[name] : JSON.stringify(record[name])}`)
    .join('\n');
}

const REGULATIONS_FIELDS = [
  'title', 'documentType', 'docketId', 'frDocNum', 'postedDate',
  'commentStartDate', 'commentEndDate', 'openForComment', 'withdrawn',
  'docketType', 'rin', 'dkAbstract',
];

export function regulationsToText(body) {
  const attributes = body?.data?.attributes ?? {};
  return REGULATIONS_FIELDS
    .filter((name) => attributes[name] !== undefined && attributes[name] !== null)
    .map((name) => `${name}: ${attributes[name]}`)
    .join('\n');
}

// A regulation section's amendment history. A new date means its text changed.
export function ecfrToText(body) {
  const versions = body?.content_versions ?? [];
  if (!versions.length) return '';
  return [
    versions.at(-1).name,
    ...versions.map((version) => `amended ${version.amendment_date}${version.removed ? ' (removed)' : ''}`),
  ].join('\n');
}

const CHALLENGE =
  /just a moment\.\.\.|verify(ing)? (that )?you are (a )?human|enable javascript and cookies|request unsuccessful\. incapsula|access denied|unblock\.federalregister\.gov|attention required|are you a robot|captcha|pardon our interruption|request blocked/i;

// Why a response cannot be used as the source's text, or null when it can.
export function unusableReason(status, text) {
  if ([401, 403, 406, 429].includes(status)) return `HTTP ${status}`;
  if (status === 404 || status === 410) return `HTTP ${status} (page gone)`;
  if (status >= 400) return `HTTP ${status}`;
  if (text.length < 4000 && CHALLENGE.test(text)) return 'verification page instead of content';
  if (text.length < 200) return 'page has no readable text';
  return null;
}

// Lines present in one version only, in reading order.
export function changedLines(before, after) {
  const count = (text) => {
    const counts = new Map();
    for (const line of text.split('\n')) counts.set(line, (counts.get(line) ?? 0) + 1);
    return counts;
  };
  const only = (text, other) => {
    const remaining = count(other);
    return text.split('\n').filter((line) => {
      const left = remaining.get(line) ?? 0;
      if (left > 0) remaining.set(line, left - 1);
      return left === 0;
    });
  };
  return { added: only(after, before), removed: only(before, after) };
}

// `fetched` is null when the source was not fetched this run.
export function classify(previousHash, fetched) {
  if (!fetched) return previousHash ? 'unchanged' : 'unread';
  if (fetched.problem) return fetched.gone ? 'gone' : 'blocked';
  if (!previousHash) return 'new';
  return previousHash === fetched.hash ? 'unchanged' : 'changed';
}

export function fileSlug(key) {
  return key
    .replace(/^https?:\/\//, '')
    .replace(/[^A-Za-z0-9.-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 140);
}

export function easternDate(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York', year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(now);
  const value = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${value.year}-${value.month}-${value.day}`;
}

const STATE_ORDER = ['changed', 'new', 'blocked', 'gone', 'unread', 'unchanged'];

// The Markdown report an editor reads before touching the site. `results` maps
// a fetch key to { state, note, textFile, diffFile, added, removed }.
export function buildReport({ date, items, results }) {
  const rows = items.map((item) => ({
    ...item,
    result: item.key ? results.get(item.key) : { state: 'screenshot' },
  }));
  const tally = new Map();
  for (const key of new Set(rows.map((row) => row.key).filter(Boolean))) {
    const { state } = results.get(key);
    tally.set(state, (tally.get(state) ?? 0) + 1);
  }
  const summary = STATE_ORDER
    .filter((state) => tally.has(state))
    .map((state) => `${tally.get(state)} ${state}`)
    .join(', ');

  const lines = [`# Source check · ${date} ET`, '', `${[...tally.values()].reduce((a, b) => a + b, 0)} sources: ${summary}.`, ''];
  const tag = (row) => `${row.owner}${row.primary ? ' (primary)' : ''}`;
  const section = (title, intro, states, detail) => {
    const matching = rows.filter((row) => states.includes(row.result.state));
    if (!matching.length) return;
    lines.push(`## ${title}`, '', intro, '');
    for (const row of matching) {
      lines.push(`- **${tag(row)}** ${row.result.state}: ${row.url}${row.label ? ` — ${row.label}` : ''}`);
      for (const extra of detail(row.result)) lines.push(`  ${extra}`);
    }
    lines.push('');
  };

  section(
    'Read these',
    'The text differs from the last recorded version, or there is no recorded version yet. Read each one before deciding what changed.',
    ['changed', 'new'],
    (result) => [
      result.textFile && `text: ${result.textFile}`,
      result.diffFile && `diff: ${result.diffFile}`,
      ...(result.added ?? []).slice(0, 6).map((line) => `+ ${line.slice(0, 220)}`),
      ...(result.removed ?? []).slice(0, 3).map((line) => `- ${line.slice(0, 220)}`),
    ].filter(Boolean),
  );
  section(
    'Open these another way',
    'The script could not read these. Open each with the web tool; if that also fails, list it in the PR description.',
    ['blocked', 'gone', 'unread'],
    (result) => (result.note ? [result.note] : []),
  );

  lines.push('## By policy and school', '', '| Item | Primary source | Changed or new | Not read | Unchanged |', '| --- | --- | --- | --- | --- |');
  const owners = [...new Set(rows.map((row) => row.owner))];
  for (const owner of owners) {
    const own = rows.filter((row) => row.owner === owner);
    const primary = own.find((row) => row.primary);
    const countOf = (states) => own.filter((row) => states.includes(row.result.state)).length;
    lines.push(
      `| ${owner} | ${primary ? primary.result.state : 'screenshot only'} | ${countOf(['changed', 'new'])} | ${countOf(['blocked', 'gone', 'unread'])} | ${countOf(['unchanged'])} |`,
    );
  }
  lines.push('');
  return lines.join('\n');
}
