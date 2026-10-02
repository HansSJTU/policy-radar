import type { Language } from '../language.ts';
import type { PolicyId } from '../policy-ids.ts';
import { SECTOR_KEYS, type SectorKey } from './radar-model.ts';

export { SECTOR_KEYS, type SectorKey };
export const SECTOR_STEP = 360 / SECTOR_KEYS.length;
export const PROFILE_STORAGE_KEY = 'stayradar-personal-profile-v1';
export const DEFAULT_PROFILE: RadarProfile = { stage: 'f1', goal: 'h1b-work' };
export type RadarProfile = { stage: SectorKey; goal: SectorKey | 'none' };
export type RadarRange = { start: number; end: number };
export type Boundary = 'start' | 'end';
export type Ring = 0 | 1 | 2 | 3;
export type SourceLink = { label: string; href: string };
export type RadarPolicy = {
  id: PolicyId;
  number: number;
  title: string;
  status: string;
  effect: string;
  summary: string;
  audience: string;
  caveat: string;
  href: string;
  sources: SourceLink[];
  sector: SectorKey;
  inForce: boolean;
  ring: Ring;
  score: number;
  scoreOrigin: 'community' | 'ai';
  genuineCount: number | null;
  scoreReason: string;
  timing: string;
  timeReason: string;
  timeSources: SourceLink[];
  estimateBaseline: string | null;
  estimateDates: [string, string] | null;
  // Months from today to each end of the estimate; null once in force or elapsed.
  estimateMonths: [number, number] | null;
  timeConfidence: 'low' | 'very-low' | null;
  estimateExpired: boolean;
};

export const stageLabels: Record<SectorKey, Record<Language, string>> = {
  f1: { zh: 'F-1 在读', en: 'F-1 student' },
  cpt: { zh: 'CPT 实习', en: 'CPT internship' },
  opt: { zh: 'OPT / STEM OPT', en: 'OPT / STEM OPT' },
  'h1b-lottery': { zh: 'H-1B 抽签', en: 'H-1B lottery' },
  'h1b-petition': { zh: 'H-1B 申请', en: 'H-1B petition' },
  'h1b-work': { zh: 'H-1B 就业', en: 'H-1B employment' },
  family: { zh: '家属 / 绿卡规划', en: 'Family / green card' },
};
export const arcLabels: Record<Language, string[]> = {
  zh: [
    'F-1',
    'CPT',
    'OPT',
    'H-1B 抽签',
    'H-1B 申请',
    'H-1B 在职',
    '家属与绿卡',
  ],
  en: [
    'F-1',
    'CPT',
    'OPT',
    'H-1B lottery',
    'H-1B petition',
    'H-1B at work',
    'Family & GC',
  ],
};
export const timeLabels: Record<Language, string[]> = {
  zh: ['今天', '半年', '一年半'],
  en: ['Today', 'Half year', 'A year and a half'],
};
export const moduloSector = (n: number) => ((n % 7) + 7) % 7;
export function isSector(value: unknown): value is SectorKey {
  return SECTOR_KEYS.some((key) => key === value);
}
export function parseProfile(value: unknown): RadarProfile | null {
  if (!value || typeof value !== 'object') return null;
  const p = value as Record<string, unknown>;
  return isSector(p.stage) && (p.goal === 'none' || isSector(p.goal))
    ? { stage: p.stage, goal: p.goal }
    : null;
}
export function routeRange(profile: RadarProfile): RadarRange {
  const start = SECTOR_KEYS.indexOf(profile.stage);
  const target =
    profile.goal === 'none' ? start : SECTOR_KEYS.indexOf(profile.goal);
  let end = target + 1;
  while (end <= start) end += 7;
  return { start, end };
}
export function sectorsInRange({ start, end }: RadarRange): SectorKey[] {
  return Array.from(
    { length: Math.max(1, Math.min(7, Math.round(end) - Math.round(start))) },
    (_, i) => SECTOR_KEYS[moduloSector(Math.round(start) + i)],
  );
}
export function profileFromRange({ start, end }: RadarRange): RadarProfile {
  return {
    stage: SECTOR_KEYS[moduloSector(Math.round(start))],
    goal: SECTOR_KEYS[moduloSector(Math.round(end) - 1)],
  };
}
export function moveBoundary(
  range: RadarRange,
  edge: Boundary,
  delta: number,
): RadarRange {
  const next = { ...range, [edge]: range[edge] + delta };
  return next.end - next.start < 1 || next.end - next.start > 7 ? range : next;
}
// Unwrap at north before clamping so crossing zero never reverses the route.
export function dragBoundary(
  range: RadarRange,
  edge: Boundary,
  angle: number,
  previous: number,
): RadarRange {
  const unwrapped = angle + 360 * Math.round((previous - angle) / 360);
  const next =
    edge === 'start'
      ? Math.max(range.end - 360, Math.min(range.end - SECTOR_STEP, unwrapped))
      : Math.max(
          range.start + SECTOR_STEP,
          Math.min(range.start + 360, unwrapped),
        );
  return { ...range, [edge]: next };
}

export function chooseImpact(
  rating: { average: number; count: number } | undefined | null,
  estimate: number,
) {
  const valid =
    rating &&
    Number.isFinite(rating.average) &&
    rating.average >= 1 &&
    rating.average <= 10 &&
    Number.isInteger(rating.count) &&
    rating.count >= 0;
  return {
    score: valid && rating.count >= 10 ? rating.average : estimate,
    scoreOrigin:
      valid && rating.count >= 10 ? ('community' as const) : ('ai' as const),
    genuineCount: valid ? rating.count : rating === null ? null : 0,
  };
}
export const severityStops = [
  [0, [255, 255, 255]],
  [4, [255, 234, 219]],
  [6, [250, 195, 157]],
  [8, [238, 122, 73]],
  [9, [217, 67, 50]],
  [10, [167, 30, 44]],
] as const;
export function severityColor(score: number) {
  const value = Math.max(0, Math.min(10, score));
  const upper = severityStops.findIndex(([stop]) => stop >= value);
  const [low, from] = severityStops[Math.max(0, upper - 1)];
  const [high, to] = severityStops[upper];
  const t = low === high ? 0 : (value - low) / (high - low);
  const rgb = from.map((v, i) => Math.round(v + (to[i] - v) * t));
  const luminance = (c: readonly number[]) =>
    c
      .map((v) => v / 255)
      .map((v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4))
      .reduce((a, v, i) => a + v * [0.2126, 0.7152, 0.0722][i], 0);
  const lum = luminance(rgb);
  return {
    fill: `rgb(${rgb.join(',')})`,
    lightText:
      1.05 / (lum + 0.05) >= (lum + 0.05) / (luminance([46, 32, 28]) + 0.05),
  };
}
export function impactLabel(score: number, language: Language) {
  const index = score >= 9 ? 0 : score >= 7.5 ? 1 : score >= 5 ? 2 : 3;
  return (
    language === 'zh'
      ? ['严重影响', '较高影响', '中等影响', '较低影响']
      : ['Severe impact', 'High impact', 'Moderate impact', 'Lower impact']
  )[index];
}
export function addMonths(date: string, months: number): string {
  const d = new Date(`${date}T00:00:00Z`);
  const day = d.getUTCDate();
  d.setUTCDate(1);
  d.setUTCMonth(d.getUTCMonth() + months);
  const last = new Date(
    Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 0),
  ).getUTCDate();
  d.setUTCDate(Math.min(day, last));
  return d.toISOString().slice(0, 10);
}
export function monthsUntil(date: string, today: string) {
  return (Date.parse(date) - Date.parse(today)) / ((86400000 * 365.25) / 12);
}
export function forecastPlacement(
  dates: [string, string],
  today: string,
): { ring: Ring; expired: boolean } {
  const months =
    (monthsUntil(dates[0], today) + monthsUntil(dates[1], today)) / 2;
  const expired = dates[1] < today;
  return {
    ring: expired ? 3 : months <= 6 ? 1 : months <= 18 ? 2 : 3,
    expired,
  };
}

export type Box = { x: number; y: number; width: number; height: number };
type Mark = { x: number; y: number; radius: number };
export function labelClearance(
  [x, y]: readonly number[],
  radius: number,
  labels: Box[],
  placed: Mark[],
  padding = 4,
) {
  const gaps = labels.map(
    (b) =>
      Math.hypot(
        Math.max(b.x - x, 0, x - b.x - b.width),
        Math.max(b.y - y, 0, y - b.y - b.height),
      ) -
      radius -
      padding,
  );
  placed.forEach((p) =>
    gaps.push(Math.hypot(x - p.x, y - p.y) - radius - p.radius - padding),
  );
  return gaps.reduce((sum, gap) => sum + Math.max(0, -gap) ** 2, 0);
}
export function radarGeometry(width: number) {
  const height = width + 4,
    cx = width / 2,
    cy = height / 2,
    radius = Math.max(65, width / 2 - 36);
  const point = (r: number, degrees: number): [number, number] => [
    Math.round(cx + r * Math.sin((degrees * Math.PI) / 180)),
    Math.round(cy - r * Math.cos((degrees * Math.PI) / 180)),
  ];
  return {
    width,
    height,
    cx,
    cy,
    radius,
    point,
    rings: [0.26, 0.5, 0.78, 1].map((v) => v * radius),
  };
}
export type RadarGeometry = ReturnType<typeof radarGeometry>;
export function markRadius(inForce: boolean, compact: boolean) {
  return inForce ? (compact ? 12 : 13) : compact ? 14 : 18;
}
export function timeLabelY(g: RadarGeometry, language: Language, i: number) {
  return g.cy - g.rings[i] + (language === 'en' ? 9 : -6);
}
export function timeLabelBoxes(
  g: RadarGeometry,
  language: Language,
  measuredWidths?: number[],
): Box[] {
  return timeLabels[language].map((text, i) => {
    const width =
      measuredWidths?.[i] ??
      (language === 'zh' ? text.length * 11 : [30, 46, 90][i]);
    return {
      x: g.cx - width / 2,
      y: timeLabelY(g, language, i) - 6,
      width,
      height: 12,
    };
  });
}
// Months from today → radius on the same scale as the labelled rings:
// today, half a year, a year and a half, then the rim at three years.
export function monthsRadius(g: RadarGeometry, months: number) {
  const stops: Array<[number, number]> = [
    [0, g.rings[0]],
    [6, g.rings[1]],
    [18, g.rings[2]],
    [36, g.rings[3]],
  ];
  const m = Math.max(0, Math.min(36, months));
  const upper = stops.findIndex(([stop]) => stop >= m);
  if (upper <= 0) return stops[0][1];
  const [m0, r0] = stops[upper - 1],
    [m1, r1] = stops[upper];
  return r0 + ((r1 - r0) * (m - m0)) / (m1 - m0);
}
export function annularSector(
  g: RadarGeometry,
  from: number,
  to: number,
  inner: number,
  outer: number,
) {
  const [ax, ay] = g.point(outer, from),
    [bx, by] = g.point(outer, to),
    [cx, cy] = g.point(inner, to),
    [dx, dy] = g.point(inner, from);
  return `M ${ax} ${ay} A ${outer} ${outer} 0 0 1 ${bx} ${by} L ${cx} ${cy} A ${inner} ${inner} 0 0 0 ${dx} ${dy} Z`;
}
// Gap between a mark and the nearer stage divider; negative means it crosses.
function dividerGap(rho: number, offset: number, radius: number) {
  const near = Math.min(offset, SECTOR_STEP - offset);
  return rho * Math.sin((near * Math.PI) / 180) - radius;
}
// Positions depend on every policy, not on which ones are visible, so
// toggling other policies or dragging the range never moves a mark.
export function placePolicies(
  entries: RadarPolicy[],
  width: number,
  language: Language,
  compact: boolean,
  measuredWidths?: number[],
) {
  const g = radarGeometry(width);
  // Labels get a little extra air on each side; marks may still use it
  // when a cell is crowded, but never overlap the text itself.
  const labels = timeLabelBoxes(g, language, measuredWidths).map((b) => ({
    ...b,
    x: b.x - 3,
    width: b.width + 6,
  }));
  if (width >= 380) {
    const you = language === 'zh' ? 12 : 22;
    labels.push({ x: g.cx - you / 2, y: g.cy + 8, width: you, height: 13 });
  }
  const centre: Mark = { x: g.cx, y: g.cy, radius: 4 };
  const cells = entries.map((entry) => {
    const sector = SECTOR_KEYS.indexOf(entry.sector);
    const peers = entries.filter(
      (p) => p.sector === entry.sector && p.ring === entry.ring,
    );
    const index = peers.indexOf(entry);
    const mark = markRadius(entry.inForce, compact);
    const inner = entry.ring ? g.rings[entry.ring - 1] : 0;
    const outer = entry.ring === 3 ? g.radius - mark - 3 : g.rings[entry.ring];
    const from = sector * SECTOR_STEP;
    // Peers fan out to the cell's corners while staying clear of the stage
    // dividers; with three or more, the middle ones drop to the inner arc,
    // where the cell is narrower.
    const depth =
      entry.ring === 0
        ? 0.62
        : peers.length > 2
          ? index % 2
            ? 0.15
            : 0.85
          : 0.55;
    const rho = inner + (outer - inner) * depth;
    const edge = Math.min(
      SECTOR_STEP / 2,
      (Math.asin(Math.min(1, (mark + 2) / rho)) * 180) / Math.PI,
    );
    const preferred = g.point(
      rho,
      from +
        (peers.length === 1
          ? SECTOR_STEP / 2
          : edge + ((SECTOR_STEP - 2 * edge) * index) / (peers.length - 1)),
    );
    return { entry, mark, inner, outer, from, preferred };
  });
  const marks: Mark[] = cells.map(({ preferred: [x, y], mark }) => ({
    x,
    y,
    radius: mark,
  }));
  // One greedy pass, then two passes that re-place each mark against all
  // of the others, so an early mark cannot corner a later peer.
  for (let pass = 0; pass < 3; pass++)
    cells.forEach(({ mark, inner, outer, from, preferred }, i) => {
      const others = [
        centre,
        ...marks.filter((_, j) => j !== i && (pass > 0 || j < i)),
      ];
      let best = Infinity;
      for (let f = 0.1; f <= 0.901; f += 0.04) {
        const rho = inner + (outer - inner) * f;
        for (let offset = 2; offset <= SECTOR_STEP - 2; offset += 1) {
          const candidate = g.point(rho, from + offset);
          const cost =
            labelClearance(candidate, mark, labels, others, 1) * 10000 +
            labelClearance(candidate, mark, labels, others) * 40 +
            Math.max(0, 2 - dividerGap(rho, offset, mark)) ** 2 * 40 +
            (candidate[0] - preferred[0]) ** 2 +
            (candidate[1] - preferred[1]) ** 2;
          if (cost < best) {
            best = cost;
            marks[i] = { x: candidate[0], y: candidate[1], radius: mark };
          }
        }
      }
    });
  return cells.map(({ entry }, i) => ({ entry, x: marks[i].x, y: marks[i].y }));
}
