'use client';

import { useEffect, useRef, useState } from 'react';
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
            ? 'Choose a situation below to see its possible effects. These are alternatives, not steps or predictions of likelihood.'
            : '点击下面任一种情况，查看它可能带来的影响。这是三种不同假设，不是流程步骤，也不是可能性排名。'}
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
            {english
              ? 'Litigation is separate from federal rulemaking. Court orders may affect whether or when the rule takes effect.'
              : '诉讼独立于联邦规则制定流程；法院命令可能影响规则能否或何时生效。'}
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

export function PolicyDirectory({
  sections,
  language,
}: {
  sections: [string, string][];
  language: Language;
}) {
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
