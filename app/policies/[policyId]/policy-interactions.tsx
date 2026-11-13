'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { List as ListIcon, X } from 'lucide-react';
import { GlossaryText } from '../../glossary-text';
import type { Language } from '../../language';
import { useEnterOnChange } from '../../motion';
import {
  getProcessStageState,
  getProcessStageLabel,
  type ProcessTrack,
} from '../../process-model';
import type { PolicyCopy } from '@/content/policy-types';
import { policyHref } from '../../policy-links';

export function PolicyScenarios({
  scenarios,
  language,
}: {
  scenarios: PolicyCopy['scenarios'];
  language: Language;
}) {
  const [selected, setSelected] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  useEnterOnChange(panelRef, selected);
  const scenario = scenarios[selected];
  const english = language === 'en';
  return (
    <>
      <div className="pd-scenario-intro">
        <h3>
          {english
            ? 'What happens in each case?'
            : '如果出现不同情况，会怎样？'}
        </h3>
        <p>
          {english
            ? 'Pick a situation to see what it would mean for you. The three are side-by-side possibilities, in no particular order.'
            : '点一种情况，看看它会给你带来什么影响。三种情况是并列的可能，没有先后顺序。'}
        </p>
      </div>
      <fieldset
        className="pd-scenarios"
        aria-label={english ? 'Scenario analysis' : '情景推演'}
      >
        {scenarios.map((item, index) => (
          <button
            type="button"
            key={item.name}
            aria-pressed={selected === index}
            aria-controls="scenario-result"
            onClick={() => setSelected(index)}
          >
            <span className="pd-scenario-choice">
              <span>
                {english ? 'Case' : '情况'} {String.fromCharCode(65 + index)}
              </span>
              <span>
                {selected === index
                  ? english
                    ? '✓ Viewing'
                    : '✓ 正在查看'
                  : english
                    ? 'View effects →'
                    : '查看影响 →'}
              </span>
            </span>
            <strong>{item.name}</strong>
            <span className="pd-scenario-assumption">{item.assumption}</span>
          </button>
        ))}
      </fieldset>
      <div
        className="pd-scenario-panel"
        id="scenario-result"
        aria-live="polite"
        ref={panelRef}
      >
        <span className="pd-kicker">
          {english ? 'IF THIS HAPPENS' : '如果这种情况发生'}{' '}
          {String.fromCharCode(65 + selected)} · {scenario.name}
        </span>
        <h3>
          <GlossaryText text={scenario.headline} />
        </h3>
        <p>
          {english ? 'Assumption: ' : '假设：'}
          <GlossaryText text={scenario.assumption} />
        </p>
        <dl>
          <div>
            <dt>
              {english
                ? 'Potential effects in this scenario'
                : '对你可能有什么影响'}
            </dt>
            <dd>
              <GlossaryText text={scenario.effects} />
            </dd>
          </div>
          <div>
            <dt>
              {english
                ? 'Signals to watch'
                : '接下来要看什么，才能知道是否会这样发展'}
            </dt>
            <dd>
              <GlossaryText text={scenario.signals} />
            </dd>
          </div>
        </dl>
      </div>
    </>
  );
}

export function PolicyProgress({
  track,
  language,
}: {
  track: ProcessTrack;
  language: Language;
}) {
  const [selected, setSelected] = useState(
    track.activeStage ?? track.lastCompletedStage ?? 0,
  );
  const noteRef = useRef<HTMLDivElement>(null);
  useEnterOnChange(noteRef, selected);
  const english = language === 'en';
  return (
    <>
      <p className="pd-current">
        <GlossaryText text={track.detail} />
      </p>
      {track.waitingFor && (
        <div className="pd-watch pd-process-waiting">
          <strong>{english ? 'Currently waiting for' : '当前等待'}</strong>
          <p>
            <GlossaryText text={track.waitingFor} />
          </p>
        </div>
      )}
      <fieldset
        className="pd-stages"
        aria-label={english ? 'Policy progress' : '政策进度'}
        style={{
          gridTemplateColumns: `repeat(${track.stages.length}, minmax(0, 1fr))`,
        }}
      >
        {track.stages.map((label, index) => (
          <button
            type="button"
            key={label}
            onClick={() => setSelected(index)}
            className={getProcessStageState(track, index)}
            aria-current={index === track.activeStage ? 'step' : undefined}
            aria-pressed={index === selected}
            aria-controls="progress-result"
          >
            <span aria-hidden="true">
              {getProcessStageState(track, index) === 'complete'
                ? '✓'
                : index + 1}
            </span>
            <strong>{label}</strong>
            <small>{getProcessStageLabel(track, index, language)}</small>
          </button>
        ))}
      </fieldset>
      <div className="pd-progress-note" id="progress-result" aria-live="polite" ref={noteRef}>
        <strong>
          {getProcessStageLabel(track, selected, language)} ·{' '}
          <GlossaryText text={track.stages[selected]} />
        </strong>
        <p>
          <GlossaryText text={track.descriptions[selected]} />
        </p>
      </div>
      {track.litigation.length > 0 && (
        <section
          className="pd-litigation"
          aria-label={english ? 'Parallel judicial review' : '并行司法审查'}
        >
          <h3>
            {english
              ? 'Litigation · Parallel judicial review'
              : '诉讼进展 · 并行司法审查'}
          </h3>
          <p>
            {track.kind === 'administrative-guidance'
              ? english
                ? 'The lawsuit runs alongside the guidance. A court order could pause the guidance.'
                : '诉讼和指引是两条线；法院的命令可能让指引暂停执行。'
              : english
                ? 'The lawsuit runs alongside rulemaking. A court order could pause the rule or delay when it starts.'
                : '诉讼和规则制定是两条线；法院的命令可能让规则暂停或推迟生效。'}
          </p>
          <ol>
            {track.litigation.map((event) => (
              <li key={event.date + event.label}>
                <time>{event.date}</time>
                <span>
                  <GlossaryText text={event.label} />
                </span>
              </li>
            ))}
          </ol>
        </section>
      )}
    </>
  );
}

export function PolicyPicker({
  id,
  language,
  options,
}: {
  id: string;
  language: Language;
  options: { id: string; label: string }[];
}) {
  return (
    <label className="pd-picker">
      {language === 'en' ? `Explore all ${options.length} policies` : `切换政策 · 共 ${options.length} 项`}
      <select
        aria-label={language === 'en' ? 'Select policy' : '选择政策'}
        value={id}
        onChange={(event) =>
          window.location.assign(policyHref(event.target.value, language))
        }
      >
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

/** The section whose top has passed the reading line, updated on scroll and resize. */
function useActiveSection(sections: [string, string][]) {
  const [active, setActive] = useState(sections[0]?.[0]);
  useEffect(() => {
    const elements = sections
      .map(([id]) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    let frame = 0;
    const update = () => {
      frame = 0;
      const readingLine = Math.min(window.innerHeight * 0.3, 180);
      let current = elements[0]?.id;
      for (const element of elements) {
        if (element.getBoundingClientRect().top <= readingLine)
          current = element.id;
        else break;
      }
      // At the end of the page the last short sections never reach the line.
      const bottom = window.innerHeight + window.scrollY;
      if (bottom >= document.documentElement.scrollHeight - 4)
        current = elements[elements.length - 1]?.id ?? current;
      if (current) setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const observer = new ResizeObserver(schedule);
    elements.forEach((element) => observer.observe(element));
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('hashchange', schedule);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('hashchange', schedule);
    };
  }, [sections]);
  return active;
}

export function PolicyDirectory({
  sections,
  language,
}: {
  sections: [string, string][];
  language: Language;
}) {
  const active = useActiveSection(sections);
  return (
    <nav
      className="pd-directory"
      aria-label={language === 'en' ? 'On this page' : '本页目录'}
    >
      {sections.map(([id, label], index) => (
        <a
          key={id}
          href={`#${id}`}
          aria-current={active === id ? 'location' : undefined}
        >
          <span>0{index}</span>
          {label}
        </a>
      ))}
    </nav>
  );
}

/** How far the reader is through `selector`, 0 to 1; 1 at the end of the page. */
function useReadingProgress(selector: string) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const article = document.querySelector<HTMLElement>(selector);
    if (!article) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const atEnd =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;
      const box = article.getBoundingClientRect();
      const value = atEnd
        ? 1
        : Math.min(1, Math.max(0, (window.innerHeight - box.top) / Math.max(1, box.height)));
      setProgress(value);
      document.documentElement.style.setProperty('--pd-progress', value.toFixed(4));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const observer = new ResizeObserver(schedule);
    observer.observe(article);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [selector]);
  return progress;
}

/**
 * Phone contents, after WebNav's FloatingToc: a frosted reading pill at the bottom shows the
 * current section and reading progress; tapping it slides a contents drawer in from the left,
 * which closes from its button, the backdrop, Escape or a left swipe.
 */
export function PolicyReadingPill({
  sections,
  language,
}: {
  sections: [string, string][];
  language: Language;
}) {
  const active = useActiveSection(sections);
  const progress = useReadingProgress('.pd-main');
  const sheet = useRef<HTMLDialogElement>(null);
  const pill = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const english = language === 'en';
  const copy = english
    ? { title: 'On this page', open: 'Open page contents', close: 'Close contents' }
    : { title: '本页目录', open: '打开本页目录', close: '收起目录' };
  const activeIndex = Math.max(0, sections.findIndex(([id]) => id === active));
  const percent = `${Math.round(progress * 100)}%`;
  const number = (index: number) => String(index).padStart(2, '0');

  // Leaving phone width with the drawer open closes it.
  useEffect(() => {
    const phone = window.matchMedia('(max-width: 800px)');
    const onChange = () => {
      if (!phone.matches && sheet.current?.open) sheet.current.close();
    };
    phone.addEventListener('change', onChange);
    return () => phone.removeEventListener('change', onChange);
  }, []);

  const openSheet = () => {
    const dialog = sheet.current;
    if (!dialog || dialog.open) return;
    dialog.style.transform = '';
    dialog.showModal();
    setOpen(true);
  };
  // The drawer slides back to the left before it closes.
  const closeSheet = useCallback((then?: () => void) => {
    const dialog = sheet.current;
    if (!dialog?.open || dialog.dataset.closing !== undefined) return;
    dialog.dataset.closing = '';
    dialog.style.transform = '';
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.setTimeout(() => {
      dialog.close();
      delete dialog.dataset.closing;
      then?.();
    }, reduced ? 0 : 240);
  }, []);

  // A tap on the backdrop (outside the drawer's right edge) closes it; Escape is handled by onCancel.
  useEffect(() => {
    const dialog = sheet.current;
    if (!dialog) return;
    const onBackdrop = (event: MouseEvent) => {
      if (event.target === dialog && event.clientX > dialog.getBoundingClientRect().right) closeSheet();
    };
    dialog.addEventListener('click', onBackdrop);
    return () => dialog.removeEventListener('click', onBackdrop);
  }, [closeSheet]);

  const swipe = useRef<{ x: number; y: number; time: number; dx: number; horizontal?: boolean } | null>(null);
  const onTouchStart = (event: React.TouchEvent) => {
    const touch = event.touches[0];
    swipe.current = { x: touch.clientX, y: touch.clientY, time: event.timeStamp, dx: 0 };
  };
  const onTouchMove = (event: React.TouchEvent) => {
    const state = swipe.current;
    const dialog = sheet.current;
    if (!state || !dialog) return;
    const touch = event.touches[0];
    const dx = touch.clientX - state.x;
    const dy = touch.clientY - state.y;
    if (state.horizontal === undefined) {
      if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
      state.horizontal = Math.abs(dx) > Math.abs(dy) && dx < 0;
      if (!state.horizontal) {
        swipe.current = null;
        return;
      }
      dialog.dataset.dragging = '';
    }
    state.dx = Math.min(0, dx);
    dialog.style.transform = `translateX(${state.dx}px)`;
  };
  const onTouchEnd = (event: React.TouchEvent) => {
    const state = swipe.current;
    const dialog = sheet.current;
    swipe.current = null;
    if (!state?.horizontal || !dialog) return;
    delete dialog.dataset.dragging;
    const speed = state.dx / Math.max(1, event.timeStamp - state.time);
    if (-state.dx > dialog.offsetWidth * 0.3 || speed < -0.5) closeSheet();
    else dialog.style.transform = '';
  };

  const jump = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    closeSheet(() => {
      const heading = document.getElementById(id);
      if (!heading) return;
      // Instant, as in WebNav: a smooth scroll here would be cut short by focus moving.
      history.replaceState(null, '', `#${id}`);
      heading.tabIndex = -1;
      heading.focus({ preventScroll: true });
      heading.scrollIntoView({ block: 'start', behavior: 'instant' });
    });
  };

  const progressBar = (
    <div className="pd-toc-progress" aria-hidden="true"><span /></div>
  );

  return (
    <>
      <div className="pd-read-progress" aria-hidden="true" />
      <button
        ref={pill}
        type="button"
        className="pd-toc-pill"
        aria-label={copy.open}
        aria-haspopup="dialog"
        aria-controls="pd-toc-sheet"
        aria-expanded={open}
        onClick={openSheet}
      >
        <ListIcon aria-hidden="true" />
        <span className="pd-toc-pill-label">
          <span className="pd-toc-num">{number(activeIndex)}</span>
          <span className="pd-toc-pill-text">{sections[activeIndex]?.[1]}</span>
        </span>
        <span className="pd-toc-percent pd-toc-ring">{percent}</span>
      </button>
      <dialog
        ref={sheet}
        id="pd-toc-sheet"
        className="pd-toc-sheet"
        aria-labelledby="pd-toc-title"
        onCancel={(event) => {
          event.preventDefault();
          closeSheet();
        }}
        // Closing returns focus to the pill natively; a jump then moves it to the heading.
        onClose={() => setOpen(false)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
      >
        <span className="pd-toc-sheet-handle" aria-hidden="true" />
        <header className="pd-toc-sheet-head">
          <h2 id="pd-toc-title">{copy.title}</h2>
          <span className="pd-toc-percent">{percent}</span>
          <button type="button" aria-label={copy.close} onClick={() => closeSheet()}>
            <X aria-hidden="true" />
          </button>
        </header>
        {progressBar}
        <nav aria-label={copy.title}>
          <ol className="pd-toc-list">
            {sections.map(([id, label], index) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'location' : undefined}
                  onClick={(event) => jump(event, id)}
                >
                  <span className="pd-toc-num" aria-hidden="true">{number(index)}</span>
                  <span className="pd-toc-label">{label}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </dialog>
    </>
  );
}
