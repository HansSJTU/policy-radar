'use client';

import { useEffect, useState } from 'react';
import { GlossaryText } from '../../glossary-text';
import type { Language } from '../../language';
import type { ProcessTrack } from '../../process-model';
import type { PolicyEditorial } from '../../policy-editorial';
import { policyHref } from '../../policy-links';

export function PolicyScenarios({
  editorial,
  language,
}: {
  editorial: PolicyEditorial;
  language: Language;
}) {
  const [selected, setSelected] = useState(0);
  const scenario = editorial.scenarios[selected];
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
        {editorial.scenarios.map((item, index) => (
          <button
            type="button"
            key={item[0]}
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
            <strong>{item[0]}</strong>
            <span className="pd-scenario-assumption">{item[2]}</span>
          </button>
        ))}
      </fieldset>
      <div
        className="pd-scenario-panel"
        id="scenario-result"
        aria-live="polite"
      >
        <span className="pd-kicker">
          {english ? 'IF THIS HAPPENS' : '如果这种情况发生'}{' '}
          {String.fromCharCode(65 + selected)} · {scenario[0]}
        </span>
        <h3>
          <GlossaryText text={scenario[1]} />
        </h3>
        <p>
          {english ? 'Assumption: ' : '假设：'}
          <GlossaryText text={scenario[2]} />
        </p>
        <dl>
          <div>
            <dt>
              {english
                ? 'Potential effects in this scenario'
                : '对你可能有什么影响'}
            </dt>
            <dd>
              <GlossaryText text={scenario[3]} />
            </dd>
          </div>
          <div>
            <dt>
              {english
                ? 'Signals to watch'
                : '接下来要看什么，才能知道是否会这样发展'}
            </dt>
            <dd>
              <GlossaryText text={scenario[4]} />
            </dd>
          </div>
        </dl>
      </div>
    </>
  );
}

const federalDescriptions = {
  zh: [
    '机构拟定规则，或将项目列入统一议程。',
    'OIRA 在提案公开前审查规则。',
    '机构在 Federal Register 发布 NPRM，公开拟议文本。',
    '公众提交意见，机构收集并审阅意见。评论期结束不等于规则生效。',
    '机构发布最终规则，说明采纳的文本、对意见的回应和生效安排。',
    '规则到达生效日期并开始适用；如有法院暂缓或禁令，需另行核对。',
  ],
  en: [
    'The agency drafts the rule or lists it in the Unified Agenda.',
    'OIRA reviews the proposal before publication.',
    'The agency publishes the proposed text as an NPRM in the Federal Register.',
    'The public submits comments and the agency reviews them. Closing comments does not make the rule effective.',
    'The agency publishes the final text, responses to comments and effective-date arrangements.',
    'The rule reaches its effective date and begins to apply, subject to any court stay or injunction.',
  ],
};
const guidanceDescriptions = {
  zh: [
    'SEVP 发布合规风险通知。',
    'SEVP 通过指引进一步解释现行规则。',
    '学校与 DSO 将指引落实到具体授权。',
    '继续观察检查与实际执法口径。',
    '关注 SEVP 是否进一步补充或调整指引。',
  ],
  en: [
    'SEVP issues a compliance-risk notice.',
    'SEVP clarifies existing rules through guidance.',
    'Schools and DSOs apply the guidance to authorizations.',
    'Monitor inspections and enforcement practice.',
    'Watch for further SEVP clarification or revised guidance.',
  ],
};

export function PolicyProgress({
  track,
  language,
}: {
  track: ProcessTrack;
  language: Language;
}) {
  const [selected, setSelected] = useState(track.currentStage);
  const english = language === 'en';
  const descriptions = (
    track.kind === 'federal-rulemaking'
      ? federalDescriptions
      : guidanceDescriptions
  )[language];
  return (
    <>
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
            className={
              index === track.currentStage
                ? 'current'
                : index < track.currentStage
                  ? 'past'
                  : ''
            }
            aria-pressed={index === selected}
            aria-controls="progress-result"
          >
            <span>{index + 1}</span>
            <strong>{label}</strong>
          </button>
        ))}
      </fieldset>
      <div className="pd-progress-note" id="progress-result" aria-live="polite">
        <strong>
          {selected === track.currentStage
            ? english
              ? 'Current stage · '
              : '当前阶段 · '
            : selected > track.currentStage
              ? english
                ? 'Later stage · '
                : '后续节点 · '
              : english
                ? 'Earlier stage · '
                : '前序节点 · '}
          <GlossaryText text={track.stages[selected]} />
        </strong>
        <p>
          <GlossaryText
            text={
              selected === track.currentStage
                ? track.detail
                : descriptions[selected]
            }
          />
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
      {language === 'en' ? 'Explore all 10 policies' : '切换政策 · 共 10 项'}
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
