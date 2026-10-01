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
export function forecastPlacement(
  dates: [string, string],
  today: string,
): { ring: Ring; expired: boolean } {
  const midpoint = (Date.parse(dates[0]) + Date.parse(dates[1])) / 2;
  const months = (midpoint - Date.parse(today)) / ((86400000 * 365.25) / 12);
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
) {
  const gaps = labels.map(
    (b) =>
      Math.hypot(
        Math.max(b.x - x, 0, x - b.x - b.width),
        Math.max(b.y - y, 0, y - b.y - b.height),
      ) -
      radius -
      4,
  );
  placed.forEach((p) =>
    gaps.push(Math.hypot(x - p.x, y - p.y) - radius - p.radius - 4),
  );
  return gaps.reduce((sum, gap) => sum + Math.max(0, -gap) ** 2, 0);
}
export function radarGeometry(width: number) {
  const height = width + 4,
    cx = width / 2,
    cy = height / 2,
    radius = Math.max(65, width / 2 - 42);
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
    rings: [0.3, 0.53, 0.76, 1].map((v) => v * radius),
  };
}
export function placePolicies(
  entries: RadarPolicy[],
  width: number,
  language: Language,
  compact: boolean,
  measuredWidths?: number[],
) {
  const g = radarGeometry(width);
  const labels = timeLabels[language].map((text, i) => {
    const size =
      measuredWidths?.[i] ??
      (language === 'zh' ? text.length * 11 : [30, 46, 90][i]);
    return {
      x: g.cx - size / 2,
      y: g.cy - g.rings[i] + (language === 'en' ? 9 : -6) - 6,
      width: size,
      height: 12,
    };
  });
  const placed: Mark[] = [];
  return entries.map((entry) => {
    const sector = SECTOR_KEYS.indexOf(entry.sector);
    const peers = entries.filter(
      (p) => p.sector === entry.sector && p.ring === entry.ring,
    );
    const index = peers.indexOf(entry);
    const offset =
      sector === 0
        ? SECTOR_STEP * 0.7
        : sector === 6 && entry.ring === 2
          ? 5
          : peers.length === 1
            ? SECTOR_STEP / 2
            : 3 + ((SECTOR_STEP - 6) * index) / (peers.length - 1);
    const radius =
      peers.length >= 3 && entry.ring === 2
        ? g.radius * (index % 2 ? 0.75 : 0.56)
        : g.radius * [0.22, 0.43, 0.65, 0.88][entry.ring];
    const preferred = g.point(radius, sector * SECTOR_STEP + offset);
    const markRadius = entry.inForce ? (compact ? 12 : 13) : compact ? 14 : 18;
    let [x, y] = preferred;
    if (labelClearance(preferred, markRadius, labels, placed) > 0) {
      const [inner, outer] = [
        [0.16, 0.27],
        [0.34, 0.5],
        [0.54, 0.74],
        [0.8, 0.92],
      ][entry.ring];
      let best = labelClearance(preferred, markRadius, labels, placed) * 10000;
      for (let fraction = inner; fraction <= outer + 0.001; fraction += 0.02) {
        for (let angle = 5; angle < SECTOR_STEP - 4; angle += 2) {
          const candidate = g.point(
            g.radius * fraction,
            sector * SECTOR_STEP + angle,
          );
          const cost =
            labelClearance(candidate, markRadius, labels, placed) * 10000 +
            (candidate[0] - preferred[0]) ** 2 +
            (candidate[1] - preferred[1]) ** 2;
          if (cost < best) {
            best = cost;
            [x, y] = candidate;
          }
        }
      }
    }
    placed.push({ x, y, radius: markRadius });
    return { entry, x, y };
  });
}
