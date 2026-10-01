import type { EffectState } from '../../content/policy-types.ts';
import type { Language } from '../language.ts';
import type { PolicyId } from '../policy-ids.ts';

// Everything the radar demo needs besides policy copy. See DESIGN.md for the
// rules these encode: sectors are path stages, rings are expected timing and
// color is the warning level set by genuine community ratings.

export const SECTOR_KEYS = [
  'f1',
  'cpt',
  'opt',
  'h1b-lottery',
  'h1b-petition',
  'h1b-work',
  'family',
] as const;
export type SectorKey = (typeof SECTOR_KEYS)[number];

export const RING_KEYS = [
  'active',
  'half-year',
  'eighteen-months',
  'unknown',
] as const;
export type RingKey = (typeof RING_KEYS)[number];

export const LEVEL_KEYS = ['red', 'orange', 'yellow', 'blue', 'none'] as const;
export type Level = (typeof LEVEL_KEYS)[number];

// Below this many genuine ratings a policy is shown as "not graded".
export const MIN_GENUINE_RATINGS = 10;

type Copy = Record<Language, string>;

export const sectorCopy: Record<
  SectorKey,
  { station: Copy; arc: Copy; group?: 'H-1B' }
> = {
  f1: { station: { zh: 'F-1', en: 'F-1' }, arc: { zh: 'F-1', en: 'F-1' } },
  cpt: { station: { zh: 'CPT', en: 'CPT' }, arc: { zh: 'CPT', en: 'CPT' } },
  opt: { station: { zh: 'OPT', en: 'OPT' }, arc: { zh: 'OPT', en: 'OPT' } },
  'h1b-lottery': {
    group: 'H-1B',
    station: { zh: '抽签', en: 'Lottery' },
    arc: { zh: 'H-1B 抽签', en: 'H-1B lottery' },
  },
  'h1b-petition': {
    group: 'H-1B',
    station: { zh: '申请', en: 'Petition' },
    arc: { zh: 'H-1B 申请', en: 'H-1B petition' },
  },
  'h1b-work': {
    group: 'H-1B',
    station: { zh: '在职', en: 'At work' },
    arc: { zh: 'H-1B 在职', en: 'H-1B at work' },
  },
  family: {
    station: { zh: '家属绿卡', en: 'GC/H-4' },
    arc: { zh: '家属与绿卡', en: 'Green card & H-4' },
  },
};

export const ringCopy: Record<
  RingKey,
  { edge: Copy; phrase: Copy; short: Copy }
> = {
  active: {
    edge: { zh: '今天', en: 'Today' },
    phrase: { zh: '已在执行', en: 'already in force' },
    short: { zh: '已在执行', en: 'In force' },
  },
  'half-year': {
    edge: { zh: '半年', en: '6 months' },
    phrase: { zh: '可能在半年内落地', en: 'possibly within six months' },
    short: { zh: '半年内', en: '< 6 months' },
  },
  'eighteen-months': {
    edge: { zh: '一年半', en: '18 months' },
    phrase: {
      zh: '预计半年到一年半',
      en: 'expected in six to eighteen months',
    },
    short: { zh: '半年到一年半', en: '6–18 months' },
  },
  unknown: {
    edge: { zh: '时间未知', en: 'Unknown' },
    phrase: { zh: '时间未知', en: 'timing unknown' },
    short: { zh: '时间未知', en: 'Unknown' },
  },
};

export const levelCopy: Record<
  Level,
  { name: Copy; count: (n: number, language: Language) => string }
> = {
  red: {
    name: { zh: '红色预警', en: 'Red warning' },
    count: (n, l) => (l === 'zh' ? `${n}\u00a0条红色预警` : `${n} red`),
  },
  orange: {
    name: { zh: '橙色预警', en: 'Orange warning' },
    count: (n, l) => (l === 'zh' ? `${n}\u00a0条橙色` : `${n} orange`),
  },
  yellow: {
    name: { zh: '黄色预警', en: 'Yellow warning' },
    count: (n, l) => (l === 'zh' ? `${n}\u00a0条黄色` : `${n} yellow`),
  },
  blue: {
    name: { zh: '蓝色预警', en: 'Blue warning' },
    count: (n, l) => (l === 'zh' ? `${n}\u00a0条蓝色` : `${n} blue`),
  },
  none: {
    name: { zh: '评分不足，未定级', en: 'Not graded yet' },
    count: (n, l) => (l === 'zh' ? `${n}\u00a0条未定级` : `${n} not graded`),
  },
};

// Sector membership is decided in DESIGN.md. Rings are placeholders until the
// estimation method in DESIGN.md rule 12 has been run for each policy.
export const RADAR_PLACEMENT: Record<
  PolicyId,
  { sector: SectorKey; ring: RingKey }
> = {
  'opt-fee': { sector: 'opt', ring: 'eighteen-months' },
  'h1b-fee': { sector: 'h1b-petition', ring: 'half-year' },
  'duration-status': { sector: 'f1', ring: 'unknown' },
  'h1b-weighted-selection': { sector: 'h1b-lottery', ring: 'active' },
  'cpt-guidance': { sector: 'cpt', ring: 'active' },
  'prevailing-wage': { sector: 'h1b-petition', ring: 'eighteen-months' },
  'h1b-reform': { sector: 'h1b-petition', ring: 'eighteen-months' },
  'grace-period': { sector: 'h1b-work', ring: 'eighteen-months' },
  'ead-discretion': { sector: 'opt', ring: 'half-year' },
  'h4-ead': { sector: 'family', ring: 'unknown' },
  'perm-modernization': { sector: 'family', ring: 'eighteen-months' },
  'h1b-program-integrity': { sector: 'h1b-work', ring: 'active' },
};

// Demo snapshot of stayradar.org on 2026-09-27 with launch seeds removed.
// Counts are exact (shown count minus seed count); averages are
// back-calculated from one-decimal figures, so they can be off by about 0.1.
export const DEMO_RATINGS: Record<
  PolicyId,
  { average: number; genuine: number }
> = {
  'opt-fee': { average: 9.6, genuine: 30 },
  'h1b-fee': { average: 9.2, genuine: 26 },
  'duration-status': { average: 7.1, genuine: 12 },
  'h1b-weighted-selection': { average: 7.9, genuine: 14 },
  'cpt-guidance': { average: 9.4, genuine: 13 },
  'prevailing-wage': { average: 7.7, genuine: 9 },
  'h1b-reform': { average: 5.9, genuine: 6 },
  'grace-period': { average: 9.7, genuine: 14 },
  'ead-discretion': { average: 1.9, genuine: 5 },
  'h4-ead': { average: 7.4, genuine: 9 },
  'perm-modernization': { average: 8.3, genuine: 3 },
  'h1b-program-integrity': { average: 7.5, genuine: 2 },
};

export function levelFor(average: number, genuine: number): Level {
  if (genuine < MIN_GENUINE_RATINGS) return 'none';
  if (average >= 9) return 'red';
  if (average >= 7.5) return 'orange';
  if (average >= 5) return 'yellow';
  return 'blue';
}

export function isInForce(state: EffectState): boolean {
  return state !== 'not-in-effect';
}

export type RadarEntry = {
  id: PolicyId;
  number: number;
  short: string;
  status: string;
  href: string;
  sector: SectorKey;
  ring: RingKey;
  level: Level;
  inForce: boolean;
  average: number;
  genuine: number;
};

// Bulletin order: most severe first, then nearest, then the site's own order.
export function orderEntries<T extends Pick<RadarEntry, 'level' | 'ring'>>(
  entries: T[],
): T[] {
  return entries
    .map((entry, index) => ({ entry, index }))
    .sort(
      (a, b) =>
        LEVEL_KEYS.indexOf(a.entry.level) - LEVEL_KEYS.indexOf(b.entry.level) ||
        RING_KEYS.indexOf(a.entry.ring) - RING_KEYS.indexOf(b.entry.ring) ||
        a.index - b.index,
    )
    .map(({ entry }) => entry);
}

// A stage cares about itself and every stage still ahead of it.
export function isAhead(sector: SectorKey, stage: SectorKey | null): boolean {
  return (
    stage === null || SECTOR_KEYS.indexOf(sector) >= SECTOR_KEYS.indexOf(stage)
  );
}

export function parseStage(value: unknown): SectorKey | null {
  return (SECTOR_KEYS as readonly unknown[]).includes(value)
    ? (value as SectorKey)
    : null;
}

// The weather-report headline: how many warnings of each level, the nearest
// of the most severe ones, and how many are still waiting for ratings.
export function buildForecast(
  entries: RadarEntry[],
  stage: SectorKey | null,
  language: Language,
): { scope: string; headline: string[]; detail: string } {
  const zh = language === 'zh';
  const relevant = entries.filter((entry) => isAhead(entry.sector, stage));
  const graded = orderEntries(
    relevant.filter((entry) => entry.level !== 'none'),
  );
  const ungraded = relevant.length - graded.length;

  const scope = stage
    ? zh
      ? `从 ${sectorCopy[stage].arc.zh} 往后，${relevant.length}\u00a0条政策`
      : `From ${sectorCopy[stage].arc.en} onward, ${relevant.length} policies`
    : zh
      ? `整条路径，${relevant.length}\u00a0条政策`
      : `The whole path, ${relevant.length} policies`;

  const counts = LEVEL_KEYS.filter((level) => level !== 'none')
    .map(
      (level) =>
        [
          level,
          graded.filter((entry) => entry.level === level).length,
        ] as const,
    )
    .filter(([, count]) => count > 0)
    .map(([level, count]) => levelCopy[level].count(count, language));
  const headline = counts.length
    ? counts
    : [zh ? '暂无可定级的预警' : 'No graded warnings yet'];

  const parts: string[] = [];
  const nearest = graded[0];
  if (nearest) {
    const phrase = ringCopy[nearest.ring].phrase[language];
    parts.push(
      zh
        ? `最近的${levelCopy[nearest.level].name.zh}是「${nearest.short}」，${phrase}。`
        : `The nearest ${levelCopy[nearest.level].name.en.toLowerCase()} is “${nearest.short}”, ${phrase}.`,
    );
  }
  if (ungraded > 0) {
    parts.push(
      zh
        ? `另有 ${ungraded}\u00a0条真实评分不足 ${MIN_GENUINE_RATINGS}\u00a0份，暂不定级。`
        : `${ungraded} more ${ungraded === 1 ? 'has' : 'have'} fewer than ${MIN_GENUINE_RATINGS} genuine ratings and ${ungraded === 1 ? 'is' : 'are'} not graded yet.`,
    );
  }
  return { scope, headline, detail: parts.join(zh ? '' : ' ') };
}
