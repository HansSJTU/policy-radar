'use client';

import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from 'react';
import { ArrowRight, ArrowUpRight, Info, Radar, X } from 'lucide-react';
import type { Language } from '../language';
import type { PolicyId } from '../policy-ids';
import { PageLanguageSwitch } from '../page-language-switch';
import { MobileSiteMenu } from '../mobile-site-menu';
import { VisitorTracker } from '@/components/visitor-tracker';
import PersonalRadarChart, { policyStyle } from './personal-radar-chart';
import { personalRadarCopy } from './personal-radar-copy';
import {
  arcLabels,
  impactLabel,
  parseProfile,
  profileFromRange,
  PROFILE_STORAGE_KEY,
  routeRange,
  SECTOR_KEYS,
  sectorsInRange,
  stageLabels,
  type RadarPolicy,
  type RadarProfile,
  type RadarRange,
} from './personal-radar-model';

type FactsProps = {
  entry: RadarPolicy;
  language: Language;
  profile: RadarProfile;
  sectors: string[];
};
function relevance({ entry, language, profile, sectors }: FactsProps) {
  const ui = personalRadarCopy[language];
  if (!sectors.includes(entry.sector)) return ui.outside;
  return `${entry.sector === profile.stage ? ui.currentMatch : ui.nextMatch} · ${arcLabels[language][SECTOR_KEYS.indexOf(entry.sector)]}`;
}
export function PolicyFacts(props: FactsProps) {
  const { entry: p, language } = props,
    ui = personalRadarCopy[language];
  const ai = p.scoreOrigin === 'ai';
  const rows: Array<{ label: string; value: ReactNode; sub?: string }> = [
    {
      label: ui.impact,
      value: (
        <strong>
          {ai ? p.score : p.score.toFixed(1)}/10 ·{' '}
          {impactLabel(p.score, language)}
        </strong>
      ),
    },
    {
      label: ui.source,
      value: ai ? `${ui.ai} · ${ui.low}` : ui.community,
      sub:
        p.genuineCount === null
          ? ui.unavailable
          : ai
            ? ui.aiCount(p.genuineCount)
            : ui.count(p.genuineCount),
    },
    { label: ui.status, value: p.status },
    {
      label: ui.timing,
      value: p.timing.split(/(\d{4}-\d{2})/).map((part, index) =>
        /^\d{4}-\d{2}$/.test(part) ? (
          <time className="pr-month" dateTime={part} key={index}>
            {part}
          </time>
        ) : (
          part
        ),
      ),
      sub: p.timeConfidence
        ? p.timeConfidence === 'very-low'
          ? ui.veryLow
          : ui.low
        : undefined,
    },
    { label: ui.relevance, value: relevance(props), sub: p.audience },
  ];
  return (
    <dl className="pr-facts">
      {rows.map((row) => (
        <div className="pr-fact-row" key={row.label}>
          <dt>{row.label}</dt>
          <dd>
            {row.value}
            {row.sub && <span className="pr-fact-sub">{row.sub}</span>}
          </dd>
        </div>
      ))}
    </dl>
  );
}

type Tip = { entry: RadarPolicy; anchor: HTMLButtonElement; pinned: boolean };
function subscribeProfile(callback: () => void) {
  window.addEventListener('storage', callback);
  return () => window.removeEventListener('storage', callback);
}
function storedProfile() {
  try {
    return localStorage.getItem(PROFILE_STORAGE_KEY);
  } catch {
    return null;
  }
}
function readProfile(raw: string | null) {
  try {
    return parseProfile(JSON.parse(raw ?? 'null'));
  } catch {
    return null;
  }
}
export default function PersonalRadar({
  language,
  entries,
  checkedOn,
  initialProfile,
  explicitProfile,
  ratingsUnavailable,
}: {
  language: Language;
  entries: RadarPolicy[];
  checkedOn: string;
  initialProfile: RadarProfile;
  explicitProfile: boolean;
  ratingsUnavailable: boolean;
}) {
  const ui = personalRadarCopy[language];
  const root = useRef<HTMLDivElement>(null),
    popup = useRef<HTMLDialogElement>(null);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const saved = useSyncExternalStore(
    subscribeProfile,
    storedProfile,
    () => null,
  );
  const [localProfile, setProfile] = useState<RadarProfile | null>(null);
  const profile = useMemo(
    () =>
      localProfile ??
      (explicitProfile
        ? initialProfile
        : (readProfile(saved) ?? initialProfile)),
    [localProfile, explicitProfile, initialProfile, saved],
  );
  const [preview, setPreview] = useState<RadarRange | null>(null);
  const [showAll, setShowAll] = useState(true);
  const [chosenGroup, setGroup] = useState<'now' | 'next' | 'all' | null>(null);
  const group = chosenGroup ?? (profile.goal === 'none' ? 'now' : 'next');
  const [active, setActive] = useState<PolicyId | null>(null);
  const [tip, setTip] = useState<Tip | null>(null);
  const [listHover, setListHover] = useState<PolicyId | null>(null);
  const tipId = useId();
  const range = useMemo(() => routeRange(profile), [profile]);
  const sectors = sectorsInRange(preview ?? range);
  const scoped = entries
    .filter((p) => sectors.includes(p.sector))
    .sort(
      (a, b) => b.score - a.score || a.ring - b.ring || a.number - b.number,
    );
  const current = scoped.filter((p) => p.sector === sectors[0]),
    next = scoped.filter((p) => p.sector !== sectors[0]);
  const listed = group === 'now' ? current : group === 'next' ? next : scoped;
  const selected =
    entries.find(
      (p) => p.id === active && (showAll || sectors.includes(p.sector)),
    ) ?? scoped[0];

  const hideTip = useCallback(() => {
    if (timeout.current) clearTimeout(timeout.current);
    setTip(null);
  }, []);
  useEffect(() => {
    const outside = (event: globalThis.PointerEvent) => {
      const target = event.target;
      if (
        target instanceof Element &&
        !target.closest('.pr-dot,.pr-hover-card')
      )
        hideTip();
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') hideTip();
    };
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('keydown', escape);
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, [hideTip]);
  useLayoutEffect(() => {
    if (!tip) return;
    const position = () => {
      const card = popup.current,
        container = root.current;
      if (!card || !container || !tip.anchor.isConnected) return;
      const a = tip.anchor.getBoundingClientRect(),
        parent = container.getBoundingClientRect();
      const width = card.offsetWidth,
        height = card.offsetHeight;
      const left = Math.max(
        Math.max(12, parent.left + 12),
        Math.min(
          window.innerWidth - width - 12,
          a.left + a.width / 2 - width / 2,
        ),
      );
      const above = a.top - height - 14;
      const top =
        above >= 12
          ? above
          : Math.min(
              a.bottom + 14,
              Math.max(12, window.innerHeight - height - 12),
            );
      card.style.left = `${left - parent.left}px`;
      card.style.top = `${Math.max(12, top) - parent.top}px`;
    };
    position();
    const observer = new ResizeObserver(position);
    if (popup.current) observer.observe(popup.current);
    window.addEventListener('resize', position);
    window.addEventListener('scroll', position, true);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', position);
      window.removeEventListener('scroll', position, true);
    };
  }, [tip, language]);

  const chooseProfile = (value: RadarProfile) => {
    hideTip();
    setProfile(value);
    setGroup(value.goal === 'none' ? 'now' : 'next');
    try {
      localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(value));
    } catch {
      /* Session-only when blocked. */
    }
    const url = new URL(window.location.href);
    url.searchParams.set('stage', value.stage);
    url.searchParams.set('goal', value.goal);
    window.history.replaceState(null, '', url);
  };
  const choosePolicy = (p: RadarPolicy) => {
    setActive(p.id);
    if (sectors.includes(p.sector))
      setGroup(p.sector === sectors[0] ? 'now' : 'next');
  };
  const showTip = (
    entry: RadarPolicy,
    anchor: HTMLButtonElement,
    pinned = false,
  ) => {
    if (timeout.current) clearTimeout(timeout.current);
    if (
      !pinned &&
      root.current?.querySelector('.pr-dot:focus-visible') &&
      document.activeElement !== anchor
    )
      return;
    setTip((previous) => ({
      entry,
      anchor,
      pinned:
        pinned || Boolean(previous?.pinned && previous.entry.id === entry.id),
    }));
  };
  const leaveTip = () => {
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(
      () =>
        setTip((previous) =>
          previous?.pinned ||
          previous?.anchor.matches(':focus-visible') ||
          popup.current?.contains(document.activeElement)
            ? previous
            : null,
        ),
      140,
    );
  };
  const homeHref = `/?lang=${language}`;

  return (
    <div className="pr" ref={root} lang={language === 'zh' ? 'zh-CN' : 'en'}>
      <VisitorTracker />
      <header className="pr-header">
        <a className="pr-brand" href={homeHref}>
          <span className="pr-mark">
            <Radar aria-hidden="true" />
          </span>
          <span>{ui.brand}</span>
        </a>
        <nav className="pr-nav" aria-label={ui.nav}>
          <a href={`${homeHref}#ranking`}>{ui.allPolicies}</a>
          <span aria-current="page">{ui.myRadar}</span>
          <a href={`/updates?lang=${language}`}>{ui.updates}</a>
        </nav>
        <div className="pr-header-actions">
          <PageLanguageSwitch
            action="/radar"
            language={language}
            label={ui.language}
            hidden={{ stage: profile.stage, goal: profile.goal }}
          />
          <MobileSiteMenu current="radar" language={language} />
        </div>
      </header>
      <main className="pr-main">
        <div className="pr-eyebrow">
          <span>{ui.eyebrow}</span>
          <span>
            {ui.checked} <time dateTime={checkedOn}>{checkedOn}</time>
          </span>
        </div>
        <h1>
          {ui.head(
            stageLabels[profile.stage][language],
            profile.goal === 'none'
              ? null
              : stageLabels[profile.goal][language],
          )}
        </h1>
        <p className="pr-intro">{ui.intro}</p>
        <div className="pr-profile">
          <label className="pr-field">
            <span>{ui.current}</span>
            <select
              value={profile.stage}
              onChange={(e) =>
                chooseProfile({
                  ...profile,
                  stage: e.target.value as RadarProfile['stage'],
                })
              }
            >
              {SECTOR_KEYS.map((key) => (
                <option key={key} value={key}>
                  {stageLabels[key][language]}
                </option>
              ))}
            </select>
          </label>
          <ArrowRight
            className="pr-profile-arrow"
            size={18}
            aria-hidden="true"
          />
          <label className="pr-field">
            <span>{ui.goal}</span>
            <select
              value={profile.goal}
              onChange={(e) =>
                chooseProfile({
                  ...profile,
                  goal: e.target.value as RadarProfile['goal'],
                })
              }
            >
              {SECTOR_KEYS.map((key) => (
                <option key={key} value={key}>
                  {stageLabels[key][language]}
                </option>
              ))}
              <option value="none">{ui.none}</option>
            </select>
          </label>
        </div>
        <p className="pr-summary" aria-live="polite">
          {ui.summary(current.length, next.length)}
        </p>
        {ratingsUnavailable && (
          <output className="pr-rating-error">
            {ui.unavailable} · {ui.unavailableNote}
          </output>
        )}
        <div className="pr-grid">
          <section className="pr-radar-panel" aria-label={ui.title}>
            <div className="pr-panel-head">
              <h2>{ui.title}</h2>
              <label className="pr-show-all">
                <input
                  type="checkbox"
                  checked={showAll}
                  onChange={(e) => {
                    hideTip();
                    setShowAll(e.target.checked);
                  }}
                />
                {ui.showAll}
              </label>
            </div>
            <p className="pr-panel-sub">{ui.subtitle}</p>
            <div className="pr-scope">{ui.drag}</div>
            <PersonalRadarChart
              language={language}
              entries={entries}
              range={range}
              showAll={showAll}
              active={selected?.id ?? null}
              highlighted={tip?.entry.id ?? listHover}
              tooltipId={tipId}
              popupPolicy={tip?.entry.id ?? null}
              onCommit={(value) => chooseProfile(profileFromRange(value))}
              onPreview={setPreview}
              onHover={showTip}
              onLeave={leaveTip}
              onSelect={choosePolicy}
              onDrag={hideTip}
            />
            <div className="pr-legend">
              <span>
                <i className="pr-solid" aria-hidden="true" />
                {ui.inForce}
              </span>
              <span>
                <i className="pr-hollow" aria-hidden="true" />
                {ui.pending}
              </span>
              <span className="pr-severity-scale">
                {ui.severe}
                <i className="pr-scale-colors" aria-hidden="true" />
                {ui.lower}
              </span>
            </div>
            {selected && (
              <article className="pr-selected" aria-label={ui.selected}>
                <div className="pr-selected-top">
                  <span>{ui.selected}</span>
                  <span className="pr-selected-no">
                    {String(selected.number).padStart(2, '0')}
                  </span>
                </div>
                <h3>{selected.title}</h3>
                <PolicyFacts
                  entry={selected}
                  language={language}
                  profile={profile}
                  sectors={sectors}
                />
                <details key={selected.id}>
                  <summary>{ui.basis}</summary>
                  {selected.scoreOrigin === 'ai' && (
                    <>
                      <p>
                        <strong>{ui.scoreBasis}</strong> ·{' '}
                        {selected.scoreReason}
                      </p>
                      <p>{ui.conditional}</p>
                    </>
                  )}
                  <p>{selected.caveat}</p>
                  {selected.estimateBaseline && (
                    <>
                      <p>
                        <strong>{ui.timingBasis}</strong> ·{' '}
                        {selected.timeReason}
                      </p>
                      <p>
                        {ui.baseline} ·{' '}
                        <time dateTime={selected.estimateBaseline}>
                          {selected.estimateBaseline}
                        </time>
                      </p>
                      <p className="pr-source-links">
                        {selected.timeSources.map((s) => (
                          <a
                            key={s.href}
                            href={s.href}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {s.label}
                            <ArrowUpRight size={12} aria-hidden="true" />
                          </a>
                        ))}
                      </p>
                    </>
                  )}
                  <p className="pr-source-links">
                    {selected.sources.slice(0, 2).map((s) => (
                      <a
                        key={s.href}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {s.label}
                        <ArrowUpRight size={12} aria-hidden="true" />
                      </a>
                    ))}
                  </p>
                </details>
                <a href={selected.href}>
                  {ui.read}
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </article>
            )}
          </section>
          <section className="pr-list-panel" aria-label={ui.list}>
            <div className="pr-list-head">
              <h2>{ui.list}</h2>
              <span>{ui.order}</span>
            </div>
            <fieldset className="pr-tabs" aria-label={ui.list}>
              {(['now', 'next', 'all'] as const).map((tab) => (
                <button
                  type="button"
                  key={tab}
                  aria-pressed={group === tab}
                  onClick={() => setGroup(tab)}
                >
                  {ui[tab]} ·{' '}
                  {tab === 'now'
                    ? current.length
                    : tab === 'next'
                      ? next.length
                      : scoped.length}
                </button>
              ))}
            </fieldset>
            {listed.length ? (
              listed.map((entry) => (
                <button
                  className="pr-policy"
                  type="button"
                  key={entry.id}
                  style={policyStyle(entry)}
                  aria-pressed={selected?.id === entry.id}
                  data-hovered={
                    tip?.entry.id === entry.id || listHover === entry.id
                  }
                  onClick={() => {
                    hideTip();
                    choosePolicy(entry);
                  }}
                  onPointerEnter={() => setListHover(entry.id)}
                  onPointerLeave={() => setListHover(null)}
                  onFocus={() => setListHover(entry.id)}
                  onBlur={() => setListHover(null)}
                >
                  <span className="pr-policy-kicker">
                    <span className="pr-level">
                      {impactLabel(entry.score, language)}
                    </span>
                    <span className="pr-time">{entry.timing}</span>
                  </span>
                  <span className="pr-policy-title">
                    <span className="pr-policy-no">
                      {String(entry.number).padStart(2, '0')}
                    </span>
                    {entry.title}
                  </span>
                  <span className="pr-policy-reason">{entry.status}</span>
                  <span className="pr-score">
                    <strong>
                      {entry.scoreOrigin === 'ai' ? ui.ai : ui.community} ·{' '}
                      {entry.scoreOrigin === 'ai'
                        ? entry.score
                        : entry.score.toFixed(1)}
                      /10
                    </strong>
                    <span className="pr-small-count">
                      {entry.genuineCount === null
                        ? ui.unavailable
                        : ui.count(entry.genuineCount)}
                      {entry.scoreOrigin === 'ai' ? ` · ${ui.low}` : ''}
                    </span>
                  </span>
                </button>
              ))
            ) : (
              <p className="pr-empty">{ui.empty}</p>
            )}
            <p className="pr-note">{ui.note}</p>
          </section>
        </div>
        <footer className="pr-foot">
          <Info aria-hidden="true" />
          <div>
            <p>{ui.timeNote}</p>
            <p>{ui.privacy}</p>
          </div>
        </footer>
      </main>
      {tip && (
        <dialog
          ref={popup}
          className="pr-hover-card"
          open
          aria-labelledby={`${tipId}-title`}
          id={tipId}
          onPointerEnter={() => {
            if (timeout.current) clearTimeout(timeout.current);
          }}
          onPointerLeave={leaveTip}
        >
          <button
            type="button"
            className="pr-tip-close"
            aria-label={ui.close}
            onBlur={leaveTip}
            onClick={() => {
              tip.anchor.focus();
              hideTip();
            }}
          >
            <X size={16} aria-hidden="true" />
          </button>
          <h3 className="pr-hover-heading" id={`${tipId}-title`}>
            <span className="pr-policy-no">
              {String(tip.entry.number).padStart(2, '0')}
            </span>
            {tip.entry.title}
          </h3>
          <PolicyFacts
            entry={tip.entry}
            language={language}
            profile={profile}
            sectors={sectors}
          />
        </dialog>
      )}
    </div>
  );
}
