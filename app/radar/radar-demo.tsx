'use client';

import { useMemo, useState, type CSSProperties } from 'react';

import type { Language } from '../language';
import type { PolicyId } from '../policy-ids';
import {
  buildForecast,
  isAhead,
  LEVEL_KEYS,
  levelCopy,
  MIN_GENUINE_RATINGS,
  ringCopy,
  RING_KEYS,
  SECTOR_KEYS,
  sectorCopy,
  type RadarEntry,
  type SectorKey,
} from './radar-model';

// Radar geometry in viewBox units. Ring edges mark "today", six months and
// eighteen months; the outer band is for policies whose timing is unknown.
const C = 300;
const R = 250;
const RING_EDGES = [86, 143, 200, R];
const DOT_RADII = [63, 114, 171, 226];
const SECTOR_SPAN = 360 / SECTOR_KEYS.length;
const LABEL_RADIUS = R + 12;
const SWEEP_SECONDS = 8;

// Rounded so the server and the browser print identical coordinates.
const round = (value: number) => Math.round(value * 100) / 100;

function point(radius: number, degrees: number): [number, number] {
  const radians = (degrees * Math.PI) / 180;
  return [
    round(C + radius * Math.sin(radians)),
    round(C - radius * Math.cos(radians)),
  ];
}

function circlePath(radius: number, clockwise = true): string {
  const sweep = clockwise ? 1 : 0;
  return `M ${C} ${C - radius} A ${radius} ${radius} 0 1 ${sweep} ${C} ${C + radius} A ${radius} ${radius} 0 1 ${sweep} ${C} ${C - radius} Z`;
}

function wedgePath(start: number, end: number): string {
  const [x1, y1] = point(R, start);
  const [x2, y2] = point(R, end);
  return `M ${C} ${C} L ${x1} ${y1} A ${R} ${R} 0 0 1 ${x2} ${y2} Z`;
}

function placeEntries(entries: RadarEntry[]) {
  return entries.map((entry) => {
    const sectorIndex = SECTOR_KEYS.indexOf(entry.sector);
    const neighbours = entries
      .filter(
        (other) => other.sector === entry.sector && other.ring === entry.ring,
      )
      .sort((a, b) => a.number - b.number);
    const slot = neighbours.findIndex((other) => other.id === entry.id);
    const angle =
      sectorIndex * SECTOR_SPAN +
      ((slot + 1) * SECTOR_SPAN) / (neighbours.length + 1);
    const [x, y] = point(DOT_RADII[RING_KEYS.indexOf(entry.ring)], angle);
    return { entry, angle, x, y };
  });
}

const copy = {
  zh: {
    brand: '留美路径雷达',
    oldHome: '旧版首页',
    checked: '核对于',
    eastern: '美东',
    question: '你现在走到哪一步？',
    wholePath: '看整条路径',
    you: '你',
    passed: (n: number) => `还有 ${n} 条在你已经走过的阶段`,
    score: (average: number, count: number) =>
      `${average.toFixed(1)}\u00a0分 · ${count}\u00a0份评分`,
    pending: (count: number) => `真实评分 ${count}/${MIN_GENUINE_RATINGS}`,
    demo: '演示版。评分是 9 月 27 日线上数据扣除模拟样本后的快照，均分是倒推的，可能差 0.1。离圆心的距离是占位，还没有按 DESIGN.md 第 12 条的方法估算。',
    details: '查看每条政策的完整说明',
    radarLabel:
      '政策雷达：方位是路径阶段，离圆心越近越早影响，颜色是预警等级。',
    inForce: '实心：已在执行',
    notInForce: '虚线：尚未生效',
    colorKey: '颜色：社区评分定的预警等级',
  },
  en: {
    brand: 'Stay Path Radar',
    oldHome: 'Current home page',
    checked: 'Checked',
    eastern: 'ET',
    question: 'Where are you on the path?',
    wholePath: 'Show the whole path',
    you: 'You',
    passed: (n: number) => `${n} more in stages you have passed`,
    score: (average: number, count: number) =>
      `${average.toFixed(1)} · ${count} ratings`,
    pending: (count: number) =>
      `${count}/${MIN_GENUINE_RATINGS} genuine ratings`,
    demo: 'Demo. Ratings are a September 27 snapshot of the live site with launch seeds removed; averages are back-calculated and may be off by 0.1. Distance from the centre is a placeholder until the estimation method in DESIGN.md rule 12 has been run.',
    details: 'Full details for every policy',
    radarLabel:
      'Policy radar: direction is the path stage, distance from the centre is timing, color is the warning level.',
    inForce: 'Solid: in force',
    notInForce: 'Dashed: not yet in force',
    colorKey: 'Color: warning level from community ratings',
  },
} satisfies Record<Language, unknown>;

export default function RadarDemo({
  language,
  entries,
  checkedOn,
  initialStage,
}: {
  language: Language;
  entries: RadarEntry[];
  checkedOn: string;
  initialStage: SectorKey | null;
}) {
  const ui = copy[language];
  const [stage, setStage] = useState<SectorKey | null>(initialStage);
  const [active, setActive] = useState<PolicyId | null>(null);
  const [showPassed, setShowPassed] = useState(false);

  const placed = useMemo(() => placeEntries(entries), [entries]);
  const forecast = buildForecast(entries, stage, language);
  const ahead = entries.filter((entry) => isAhead(entry.sector, stage));
  const passed = entries.filter((entry) => !isAhead(entry.sector, stage));
  const stageIndex = stage ? SECTOR_KEYS.indexOf(stage) : -1;

  const chooseStage = (next: SectorKey | null) => {
    setStage(next);
    setShowPassed(false);
    const url = new URL(window.location.href);
    if (next) url.searchParams.set('stage', next);
    else url.searchParams.delete('stage');
    window.history.replaceState(null, '', url);
  };

  const langHref = (target: Language) =>
    `/radar?lang=${target}${stage ? `&stage=${stage}` : ''}`;

  const bulletin = (items: RadarEntry[]) =>
    LEVEL_KEYS.map(
      (level) =>
        [level, items.filter((entry) => entry.level === level)] as const,
    )
      .filter(([, group]) => group.length > 0)
      .map(([level, group]) => (
        <section key={level} className="rd-level" data-level={level}>
          <h2>
            <span className="rd-swatch" aria-hidden="true" />
            {levelCopy[level].name[language]}
            <span className="rd-count">{group.length}</span>
          </h2>
          <ol>
            {group.map((entry) => (
              <li key={entry.id}>
                <a
                  href={entry.href}
                  className={`rd-item${active === entry.id ? ' is-active' : ''}`}
                  onMouseEnter={() => setActive(entry.id)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(entry.id)}
                  onBlur={() => setActive(null)}
                >
                  <span className="rd-item-no">
                    {String(entry.number).padStart(2, '0')}
                  </span>
                  <span className="rd-item-body">
                    <strong>{entry.short}</strong>
                    <span>{entry.status}</span>
                    <small>
                      {entry.level === 'none'
                        ? ui.pending(entry.genuine)
                        : ui.score(entry.average, entry.genuine)}
                    </small>
                  </span>
                  <span className="rd-item-when" data-force={entry.inForce}>
                    <i aria-hidden="true" />
                    {ringCopy[entry.ring].short[language]}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </section>
      ));

  return (
    <div className="rd" lang={language === 'zh' ? 'zh-CN' : 'en'}>
      <header className="rd-top">
        <a className="rd-brand" href={`/?lang=${language}`}>
          <RadarMark />
          {ui.brand}
        </a>
        <nav>
          <a href={`/?lang=${language}`}>{ui.oldHome}</a>
          <span className="rd-lang">
            <a
              href={langHref('zh')}
              aria-current={language === 'zh' ? 'true' : undefined}
            >
              中
            </a>
            <a
              href={langHref('en')}
              aria-current={language === 'en' ? 'true' : undefined}
            >
              EN
            </a>
          </span>
        </nav>
      </header>

      <main className="rd-main">
        <div className="rd-intro">
          <p className="rd-dateline">
            {ui.checked} <time dateTime={checkedOn}>{checkedOn}</time> ·{' '}
            {ui.eastern}
          </p>
          <p className="rd-scope-line">{forecast.scope}</p>
          <h1 aria-live="polite">
            {forecast.headline.map((phrase, index) => (
              <span key={phrase}>
                {phrase}
                {index < forecast.headline.length - 1 &&
                  (language === 'zh' ? '，' : ', ')}
              </span>
            ))}
          </h1>
          <p className="rd-lede">{forecast.detail}</p>
        </div>

        <fieldset className="rd-stations">
          <legend>{ui.question}</legend>
          <div
            className="rd-line"
            style={{ '--here': stageIndex } as CSSProperties}
            data-chosen={stage !== null}
          >
            <span className="rd-line-group" aria-hidden="true">
              H-1B
            </span>
            {SECTOR_KEYS.map((key, index) => {
              const state =
                stageIndex < 0
                  ? 'idle'
                  : index < stageIndex
                    ? 'passed'
                    : index === stageIndex
                      ? 'here'
                      : 'ahead';
              return (
                <button
                  key={key}
                  type="button"
                  data-state={state}
                  aria-pressed={stage === key}
                  aria-label={sectorCopy[key].arc[language]}
                  onClick={() => chooseStage(stage === key ? null : key)}
                >
                  <i aria-hidden="true" />
                  <span aria-hidden="true">
                    {sectorCopy[key].station[language]}
                  </span>
                </button>
              );
            })}
          </div>
          {stage && (
            <button
              type="button"
              className="rd-reset"
              onClick={() => chooseStage(null)}
            >
              {ui.wholePath}
            </button>
          )}
        </fieldset>

        <figure className="rd-scope" aria-label={ui.radarLabel}>
          <div className="rd-disc">
            <div className="rd-sweep" aria-hidden="true" />
            <svg
              viewBox="0 0 600 600"
              aria-hidden="true"
              data-chosen={stage !== null}
            >
              <defs>
                <pattern
                  id="rd-hatch"
                  width="7"
                  height="7"
                  patternUnits="userSpaceOnUse"
                  patternTransform="rotate(45)"
                >
                  <line x1="0" y1="0" x2="0" y2="7" className="rd-hatch-line" />
                </pattern>
                <path id="rd-arc-cw" d={circlePath(LABEL_RADIUS)} />
                <path id="rd-arc-ccw" d={circlePath(LABEL_RADIUS, false)} />
              </defs>

              {SECTOR_KEYS.map((key, index) => (
                <path
                  key={key}
                  className={`rd-wedge${stage && isAhead(key, stage) ? ' is-ahead' : ''}`}
                  d={wedgePath(index * SECTOR_SPAN, (index + 1) * SECTOR_SPAN)}
                />
              ))}
              <path
                className="rd-unknown-band"
                d={`${circlePath(R)} ${circlePath(RING_EDGES[2], false)}`}
                fillRule="evenodd"
              />
              {Array.from({ length: 36 }, (_, index) => {
                const [x1, y1] = point(R, index * 10);
                const [x2, y2] = point(R + 5, index * 10);
                return (
                  <line
                    key={index}
                    className="rd-tick"
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                  />
                );
              })}
              {RING_EDGES.map((radius) => (
                <circle
                  key={radius}
                  className={`rd-ring${radius === R ? ' is-edge' : ''}`}
                  cx={C}
                  cy={C}
                  r={radius}
                />
              ))}
              {SECTOR_KEYS.map((key, index) => {
                const [x1, y1] = point(24, index * SECTOR_SPAN);
                const [x2, y2] = point(R + 8, index * SECTOR_SPAN);
                return (
                  <line
                    key={key}
                    className="rd-spoke"
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                  />
                );
              })}

              {RING_KEYS.map((ring, index) => (
                <text
                  key={ring}
                  className="rd-ring-label"
                  x={C}
                  y={
                    C - (ring === 'unknown' ? DOT_RADII[3] : RING_EDGES[index])
                  }
                >
                  {ringCopy[ring].edge[language]}
                </text>
              ))}

              {SECTOR_KEYS.map((key, index) => {
                const middle = (index + 0.5) * SECTOR_SPAN;
                const bottom = middle > 90 && middle < 270;
                const offset =
                  ((bottom ? 360 - middle : middle) * Math.PI * LABEL_RADIUS) /
                  180;
                return (
                  <text
                    key={key}
                    className={`rd-arc${stage && !isAhead(key, stage) ? ' is-dim' : ''}${stage === key ? ' is-here' : ''}`}
                    dy={bottom ? '0.9em' : undefined}
                  >
                    <textPath
                      href={bottom ? '#rd-arc-ccw' : '#rd-arc-cw'}
                      startOffset={offset}
                      textAnchor="middle"
                    >
                      {sectorCopy[key].arc[language]}
                    </textPath>
                  </text>
                );
              })}

              <circle className="rd-you" cx={C} cy={C} r="5" />
              <text className="rd-you-label" x={C} y={C + 24}>
                {ui.you}
              </text>

              {placed.map(({ entry, angle, x, y }) => (
                <a
                  key={entry.id}
                  href={entry.href}
                  tabIndex={-1}
                  className={`rd-dot${active === entry.id ? ' is-active' : ''}${isAhead(entry.sector, stage) ? '' : ' is-dim'}`}
                  data-level={entry.level}
                  data-force={entry.inForce}
                  onMouseEnter={() => setActive(entry.id)}
                  onMouseLeave={() => setActive(null)}
                >
                  <circle
                    className="rd-ping"
                    cx={x}
                    cy={y}
                    r="13"
                    style={{
                      animationDelay: `${((angle / 360) * SWEEP_SECONDS).toFixed(2)}s`,
                    }}
                  />
                  <circle className="rd-dot-body" cx={x} cy={y} r="13" />
                  <text x={x} y={y}>
                    {entry.number}
                  </text>
                </a>
              ))}
            </svg>
          </div>
          <figcaption>
            <span>
              <i data-force="true" aria-hidden="true" />
              {ui.inForce}
            </span>
            <span>
              <i data-force="false" aria-hidden="true" />
              {ui.notInForce}
            </span>
            <span>{ui.colorKey}</span>
          </figcaption>
        </figure>

        <div className="rd-bulletin">
          {bulletin(ahead)}
          {passed.length > 0 && !showPassed && (
            <button
              type="button"
              className="rd-passed"
              onClick={() => setShowPassed(true)}
            >
              {ui.passed(passed.length)}
            </button>
          )}
          {showPassed && (
            <div className="rd-passed-list">{bulletin(passed)}</div>
          )}
        </div>
      </main>

      <footer className="rd-foot">
        <p>{ui.demo}</p>
        <a href={`/?lang=${language}#ranking`}>{ui.details} →</a>
      </footer>
    </div>
  );
}

function RadarMark() {
  return (
    <svg className="rd-mark" viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="14" />
      <circle cx="16" cy="16" r="8" />
      <path d="M16 16 L16 2 A14 14 0 0 1 28.1 9 Z" className="rd-mark-sweep" />
      <circle cx="23.5" cy="10.5" r="2.4" className="rd-mark-echo" />
    </svg>
  );
}
