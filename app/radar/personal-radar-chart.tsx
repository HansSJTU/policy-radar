'use client';

import {
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
} from 'react';
import type { Language } from '../language';
import type { PolicyId } from '../policy-ids';
import {
  annularSector,
  arcLabels,
  dragBoundary,
  moduloSector,
  monthsRadius,
  moveBoundary,
  placePolicies,
  radarGeometry,
  SECTOR_KEYS,
  SECTOR_STEP,
  sectorsInRange,
  severityColor,
  timeLabelBoxes,
  timeLabelY,
  timeLabels,
  type Boundary,
  type RadarPolicy,
  type RadarRange,
} from './personal-radar-model';

export function policyStyle(entry: RadarPolicy): CSSProperties {
  const color = severityColor(entry.score);
  return {
    '--pr-level': color.fill,
    '--pr-level-edge': 'color-mix(in srgb,var(--pr-level) 78%,var(--pr-ink))',
    '--pr-dot-ink': color.lightText ? 'var(--pr-white)' : 'var(--pr-risk-text)',
  } as CSSProperties;
}

type Drag = {
  edge: Boundary;
  pointer: number;
  degrees: RadarRange;
  last: number;
};
type Props = {
  language: Language;
  entries: RadarPolicy[];
  range: RadarRange;
  showAll: boolean;
  active: PolicyId | null;
  highlighted: PolicyId | null;
  tooltipId: string;
  popupPolicy: PolicyId | null;
  onCommit: (range: RadarRange) => void;
  onPreview: (range: RadarRange | null) => void;
  onHover: (
    entry: RadarPolicy,
    anchor: HTMLButtonElement,
    pinned?: boolean,
  ) => void;
  onLeave: () => void;
  onSelect: (entry: RadarPolicy) => void;
  onDrag: () => void;
};

export default function PersonalRadarChart(props: Props) {
  const {
    language,
    entries,
    range,
    showAll,
    active,
    highlighted,
    tooltipId,
    popupPolicy,
    onCommit,
    onPreview,
    onHover,
    onLeave,
    onSelect,
    onDrag,
  } = props;
  const box = useRef<HTMLDivElement>(null);
  const svg = useRef<SVGSVGElement>(null);
  const dragRef = useRef<Drag | null>(null);
  const [drag, setDrag] = useState<Drag | null>(null);
  const [size, setSize] = useState({ width: 540, compact: false });
  const [labelWidths, setLabelWidths] = useState<number[]>();
  const [motion, setMotion] = useState(false);
  const patternId = useId().replace(/:/g, '');
  const g = useMemo(() => radarGeometry(size.width), [size.width]);

  useLayoutEffect(() => {
    const element = box.current;
    if (!element) return;
    const measure = () => {
      const width = element.clientWidth;
      if (width) setSize({ width, compact: width < 440 });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    window.addEventListener('resize', measure);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);
  useLayoutEffect(() => {
    const measure = () =>
      setLabelWidths(
        Array.from(
          svg.current?.querySelectorAll<SVGTextElement>('.pr-time-label') ?? [],
          (label) => label.getBBox().width,
        ),
      );
    measure();
    document.fonts.addEventListener('loadingdone', measure);
    return () => document.fonts.removeEventListener('loadingdone', measure);
  }, [language]);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setMotion(!query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  const degrees = drag?.degrees ?? {
    start: range.start * SECTOR_STEP,
    end: range.end * SECTOR_STEP,
  };
  const selected = sectorsInRange({
    start: degrees.start / SECTOR_STEP,
    end: degrees.end / SECTOR_STEP,
  });
  const placed = useMemo(
    () =>
      placePolicies(entries, size.width, language, size.compact, labelWidths),
    [entries, size, language, labelWidths],
  );
  const inRange = sectorsInRange(range);
  const visible = placed.filter(
    ({ entry }) => showAll || drag !== null || inRange.includes(entry.sector),
  );
  const labelBoxes = timeLabelBoxes(g, language, labelWidths);
  // The estimate window of the hovered, focused or selected policy.
  const focused = visible.find(
    ({ entry }) => entry.id === (highlighted ?? active),
  )?.entry;
  const span = focused?.estimateMonths;
  const spanFrom = focused
    ? SECTOR_KEYS.indexOf(focused.sector) * SECTOR_STEP
    : 0;
  const [sx, sy] = g.point(g.radius, degrees.start),
    [ex, ey] = g.point(g.radius, degrees.end);
  const full = degrees.end - degrees.start >= 359.9;
  const wedge = `M ${g.cx} ${g.cy} L ${sx} ${sy} A ${g.radius} ${g.radius} 0 ${degrees.end - degrees.start > 180 ? 1 : 0} 1 ${ex} ${ey} Z`;

  const begin = (event: PointerEvent, edge: Boundary) => {
    if (event.button !== 0 || dragRef.current) return;
    event.preventDefault();
    event.stopPropagation();
    onDrag();
    const state = {
      edge,
      pointer: event.pointerId,
      degrees: {
        start: range.start * SECTOR_STEP,
        end: range.end * SECTOR_STEP,
      },
      last: range[edge] * SECTOR_STEP,
    };
    dragRef.current = state;
    setDrag(state);
    box.current?.setPointerCapture(event.pointerId);
  };
  const move = (event: PointerEvent) => {
    const current = dragRef.current,
      rect = box.current?.getBoundingClientRect();
    if (!current || !rect || current.pointer !== event.pointerId) return;
    const x = event.clientX - rect.left - g.cx,
      y = event.clientY - rect.top - g.cy;
    if (Math.hypot(x, y) < 24) return;
    const angle = ((Math.atan2(x, -y) * 180) / Math.PI + 360) % 360;
    const next = dragBoundary(
      current.degrees,
      current.edge,
      angle,
      current.last,
    );
    const updated = { ...current, degrees: next, last: next[current.edge] };
    dragRef.current = updated;
    setDrag(updated);
    onPreview({
      start: Math.round(next.start / SECTOR_STEP),
      end: Math.round(next.end / SECTOR_STEP),
    });
  };
  const finish = (event: PointerEvent, cancelled = false) => {
    const current = dragRef.current;
    if (!current || current.pointer !== event.pointerId) return;
    dragRef.current = null;
    setDrag(null);
    onPreview(null);
    if (box.current?.hasPointerCapture(event.pointerId))
      box.current.releasePointerCapture(event.pointerId);
    if (!cancelled)
      onCommit({
        start: Math.round(current.degrees.start / SECTOR_STEP),
        end: Math.round(current.degrees.end / SECTOR_STEP),
      });
  };

  return (
    <div
      className="pr-chart"
      ref={box}
      data-compact={size.compact}
      data-dragging={Boolean(drag)}
      data-scanning={motion}
      onPointerMove={move}
      onPointerUp={(e) => finish(e)}
      onPointerCancel={(e) => finish(e, true)}
      onLostPointerCapture={(e) => finish(e, true)}
    >
      <div
        className="pr-sweep"
        aria-hidden="true"
        style={{
          left: g.cx - g.radius,
          top: g.cy - g.radius,
          width: g.radius * 2,
          height: g.radius * 2,
        }}
      />
      <div className="pr-plot">
        <svg
          ref={svg}
          className="pr-radar-svg"
          viewBox={`0 0 ${g.width} ${g.height}`}
          aria-label={
            language === 'zh'
              ? '政策雷达：方位表示阶段，距离表示时间，颜色表示影响程度'
              : 'Policy radar: direction is stage, distance is timing, color is impact'
          }
        >
          <title>
            {language === 'zh' ? '你的政策雷达' : 'Your policy radar'}
          </title>
          <defs>
            <pattern
              id={patternId}
              width="12"
              height="12"
              x={g.cx}
              y={g.cy}
              patternUnits="userSpaceOnUse"
            >
              <circle cx="6" cy="6" r=".8" fill="var(--pr-dot-grid)" />
            </pattern>
            {/* Radial lines stop short of the time labels; rings and the dot
                grid stay visible behind them. */}
            <mask
              id={`${patternId}-labels`}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width={g.width}
              height={g.height}
            >
              <rect width={g.width} height={g.height} fill="white" />
              {labelBoxes.map((b, i) => (
                <rect
                  key={i}
                  x={b.x - 3}
                  y={b.y - 1}
                  width={b.width + 6}
                  height={b.height + 2}
                  rx="3"
                  fill="black"
                />
              ))}
            </mask>
          </defs>
          <circle
            cx={g.cx}
            cy={g.cy}
            r={g.radius}
            fill={`url(#${patternId})`}
            pointerEvents="none"
          />
          {full ? (
            <circle
              data-selection-wedge
              cx={g.cx}
              cy={g.cy}
              r={g.radius}
              fill="var(--pr-selection)"
            />
          ) : (
            <path data-selection-wedge d={wedge} fill="var(--pr-selection)" />
          )}
          {focused && span && (
            <path
              key={focused.id}
              className="pr-window"
              data-window={focused.id}
              d={annularSector(
                g,
                spanFrom + 1.5,
                spanFrom + SECTOR_STEP - 1.5,
                monthsRadius(g, span[0]),
                Math.max(
                  monthsRadius(g, span[1]),
                  monthsRadius(g, span[0]) + 2,
                ),
              )}
            />
          )}
          {g.rings.map((radius, i) => (
            <circle
              className="pr-time-ring"
              key={i}
              cx={g.cx}
              cy={g.cy}
              r={radius}
              fill="none"
              stroke="var(--pr-time-line)"
              strokeWidth={[1.5, 1.1, 0.8, 0.6][i]}
            />
          ))}
          {Array.from({ length: 56 }, (_, i) => {
            const [x1, y1] = g.point(g.radius + 1, (i * 360) / 56),
              [x2, y2] = g.point(g.radius + (i % 8 ? 3 : 5), (i * 360) / 56);
            return (
              <path
                key={i}
                d={`M ${x1} ${y1} L ${x2} ${y2}`}
                stroke="var(--pr-rim)"
                strokeWidth=".6"
              />
            );
          })}
          <g mask={`url(#${patternId}-labels)`}>
            {SECTOR_KEYS.map((sector, i) => {
              const [x, y] = g.point(g.radius, i * SECTOR_STEP),
                [x1, y1] = g.point(g.radius * 0.1, i * SECTOR_STEP);
              return (
                <path
                  key={sector}
                  d={`M ${x1} ${y1} L ${x} ${y}`}
                  stroke="var(--pr-stage-line)"
                  strokeWidth=".9"
                />
              );
            })}
            {(['start', 'end'] as const).map((edge) => {
              const [x, y] = g.point(g.radius, degrees[edge]);
              return (
                <path
                  key={edge}
                  d={`M ${g.cx} ${g.cy} L ${x} ${y}`}
                  stroke="var(--pr-time-line)"
                  strokeWidth="1.1"
                />
              );
            })}
          </g>
          {SECTOR_KEYS.map((sector, i) => {
            const [x, y] = g.point(g.radius, i * SECTOR_STEP);
            const angle = (i + 0.5) * SECTOR_STEP,
              [tx, ty] = g.point(g.radius + 22, angle);
            const rotation =
              angle > 90 && angle < 270
                ? angle - 180
                : angle > 270
                  ? angle - 360
                  : angle;
            const target = Boolean(
              drag &&
              moduloSector(
                Math.round(drag.degrees[drag.edge] / SECTOR_STEP),
              ) === i,
            );
            return (
              <g key={sector}>
                <circle
                  className="pr-snap-stop"
                  data-snap-target={target}
                  cx={x}
                  cy={y}
                  r={target ? 5 : 3.5}
                  fill={target ? 'var(--pr-ink)' : 'var(--pr-muted)'}
                  stroke="var(--pr-white)"
                  strokeWidth="2"
                />
                <text
                  x={tx}
                  y={ty}
                  transform={`rotate(${rotation} ${tx} ${ty})`}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={
                    selected.includes(sector)
                      ? 'var(--pr-soft)'
                      : 'var(--pr-muted)'
                  }
                  fontSize={size.width >= 400 ? 12 : 11}
                  fontWeight={
                    selected.includes(sector)
                      ? 'var(--pr-strong)'
                      : 'var(--pr-normal)'
                  }
                >
                  {arcLabels[language][i]}
                </text>
              </g>
            );
          })}
          {(['start', 'end'] as const).map((edge) => {
            const [x, y] = g.point(g.radius, degrees[edge]);
            return (
              <path
                key={edge}
                className="pr-boundary-hit"
                d={`M ${g.cx} ${g.cy} L ${x} ${y}`}
                stroke="transparent"
                strokeWidth="18"
                fill="none"
                pointerEvents="stroke"
                onPointerDown={(event) => begin(event, edge)}
              />
            );
          })}
          {timeLabels[language].map((label, i) => (
            <text
              key={i}
              className="pr-time-label"
              x={g.cx}
              y={timeLabelY(g, language, i)}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="11"
              fill="var(--pr-muted)"
              stroke="var(--pr-white)"
              strokeWidth="2"
              paintOrder="stroke"
              strokeLinejoin="round"
            >
              {label}
            </text>
          ))}
          <circle cx={g.cx} cy={g.cy} r="4" fill="var(--pr-ink)" />
          {size.width >= 380 && (
            <text
              x={g.cx}
              y={g.cy + 18}
              textAnchor="middle"
              fill="var(--pr-ink)"
              fontSize="11"
            >
              {language === 'zh' ? '你' : 'You'}
            </text>
          )}
        </svg>
        {visible.map(({ entry, x, y }) => (
          <button
            key={entry.id}
            type="button"
            className="pr-dot"
            data-id={entry.id}
            data-force={entry.inForce}
            data-relevant={selected.includes(entry.sector)}
            data-hovered={entry.id === highlighted}
            style={{
              ...policyStyle(entry),
              left: `${(x / g.width) * 100}%`,
              top: `${(y / g.height) * 100}%`,
            }}
            aria-label={`${String(entry.number).padStart(2, '0')} ${entry.title} · ${entry.score}/10 · ${entry.timing}`}
            aria-pressed={entry.id === active}
            aria-haspopup="dialog"
            aria-expanded={entry.id === popupPolicy}
            aria-controls={entry.id === popupPolicy ? tooltipId : undefined}
            onPointerEnter={(event) => {
              if (event.pointerType !== 'touch')
                onHover(entry, event.currentTarget);
            }}
            onPointerLeave={onLeave}
            onFocus={(event) => onHover(entry, event.currentTarget)}
            onBlur={onLeave}
            onClick={(event) => {
              onSelect(entry);
              onHover(entry, event.currentTarget, true);
            }}
          >
            <span>{String(entry.number).padStart(2, '0')}</span>
          </button>
        ))}
        {(['start', 'end'] as const).map((edge) => {
          const [x, y] = g.point(
            full ? g.radius + (edge === 'start' ? -18 : 12) : g.radius,
            degrees[edge],
          );
          return (
            <button
              key={edge}
              className="pr-boundary"
              type="button"
              data-edge={edge}
              data-dragging={drag?.edge === edge}
              style={{
                left: `${(x / g.width) * 100}%`,
                top: `${(y / g.height) * 100}%`,
              }}
              aria-label={
                language === 'zh'
                  ? `${edge === 'start' ? '起点：我现在' : '终点：下一步'}，拖动或使用左右方向键`
                  : `${edge === 'start' ? 'Start: current stage' : 'End: next step'}; drag or use arrow keys`
              }
              onPointerDown={(event) => begin(event, edge)}
              onKeyDown={(event) => {
                if (
                  ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(
                    event.key,
                  )
                ) {
                  event.preventDefault();
                  onDrag();
                  onCommit(
                    moveBoundary(
                      range,
                      edge,
                      ['ArrowRight', 'ArrowDown'].includes(event.key) ? 1 : -1,
                    ),
                  );
                }
              }}
            >
              <span aria-hidden="true">
                {language === 'zh'
                  ? edge === 'start'
                    ? '起'
                    : '终'
                  : edge === 'start'
                    ? 'S'
                    : 'E'}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
