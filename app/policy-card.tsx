import { useEffect, useRef, type ReactNode } from 'react';
import { ArrowUpRight, Clock3, Scale } from 'lucide-react';
import { GlossaryText } from './glossary-text';
import { CommunityImpactScore, type CommunityImpactAggregate } from './community-impact-rating';
import { homeCopy } from './home-copy';
import { centerCurrentProcessStage, showLatestTimeline } from './initial-scroll';
import type { Language } from './language';
import type { getPolicies } from './policy-data';
import { getHomePolicyEditorial as getPolicyEditorial, getHomeProcessTrack as getProcessTrack } from './policy-home-model';
import { policyHref } from './policy-links';
import { ShareButton } from './share-button';
import { getPolicyShareItem } from './item-share-model';

type PolicyCardProps = {
  policy: ReturnType<typeof getPolicies>[number];
  language: Language;
  selectedPath: string;
  policyPath?: string;
  communityRating: ReactNode;
  communityAggregate?: CommunityImpactAggregate;
};

export function PolicyCard({
  policy,
  language,
  selectedPath,
  policyPath,
  communityRating,
  communityAggregate,
}: PolicyCardProps) {
  const ui = homeCopy[language];
  const process = getProcessTrack(policy.id, language);
  const editorial = getPolicyEditorial(policy.id, language)!;
  const flowHelpRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const dismissOutside = (event: PointerEvent) => {
      const details = flowHelpRef.current;
      if (details?.open && !event.composedPath().includes(details)) {
        details.open = false;
      }
    };
    document.addEventListener('pointerdown', dismissOutside, true);
    return () => document.removeEventListener('pointerdown', dismissOutside, true);
  }, []);

  return (
    <article
      className="policy-card policy-card-compact"
      data-path={policyPath}
      id={`policy-${policy.id}`}
      data-policy-id={policy.id}
    >
      <ShareButton language={language} item={getPolicyShareItem(policy.id, language)} compact />
      <header className="policy-snapshot">
        <div className="rank-column">
          <div className="rank-number"><span>#</span>{String(policy.rank).padStart(2, '0')}</div>
          <CommunityImpactScore language={language} policyId={policy.id} aggregate={communityAggregate} />
        </div>
        <div className="policy-title-group">
          <div className="policy-meta">
            <div className={`flow-annotation ${process.kind}`}>
              <span><GlossaryText text={process.name} /></span>
              <details className="flow-help" ref={flowHelpRef}>
                <summary aria-label={ui.viewProcess(process.name)}>?</summary>
                <div className="flow-popover">
                  <div className="flow-popover-head">
                    <span><GlossaryText text={process.name} /></span>
                    <strong><GlossaryText text={process.currentSummary} /></strong>
                  </div>
                  <p className="flow-meaning"><GlossaryText text={process.meaning} /></p>
                  <p className="flow-detail">{ui.policySpecific}<GlossaryText text={process.detail} /></p>
                  <ol>
                    {process.stages.map((stage, index) => {
                      const stageState = index < process.currentStage
                        ? 'complete'
                        : index === process.currentStage
                          ? 'current'
                          : 'upcoming';
                      const stageLabel = stageState === 'complete'
                        ? ui.complete
                        : stageState === 'current'
                          ? ui.currentStage
                          : ui.upcomingStage;
                      return (
                        <li className={stageState} key={stage}>
                          <i>{index + 1}</i>
                          <span><strong><GlossaryText text={stage} /></strong><small>{stageLabel}</small></span>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </details>
            </div>
            {policyPath && <span className="policy-category">{policyPath}</span>}
            {policy.route.filter((tag) => tag !== policyPath).map((tag) => <i key={tag}><GlossaryText text={tag} /></i>)}
          </div>
          <h3><a href={policyHref(policy.id, language, undefined, selectedPath)}>{editorial.title}</a></h3>
          <div className="policy-status"><span className={`status-chip ${policy.tone}`}>{editorial.status}</span></div>
          <p>
            <GlossaryText text={policy.tldr} />
            {policy.commentUrl && (
              <> <a href={policy.commentUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }}>{language === 'en' ? 'Submit a public comment ↗' : '提交公众评论 ↗'}</a></>
            )}
          </p>
        </div>
        {communityRating}
      </header>

      <div className="process-block">
        <div className="process-mobile-head" aria-hidden="true">
          <span>{ui.processProgress}</span>
          <small>{ui.swipe}</small>
        </div>
        <div className="process-row" ref={centerCurrentProcessStage}>
          <div className={`process-steps ${process.kind}`} aria-label={`${ui.currentProcess}${process.stages[process.currentStage]}`}>
            {process.stages.map((label, index) => (
              <i
                className={index < process.currentStage ? 'complete' : index === process.currentStage ? 'current' : 'upcoming'}
                key={label}
              >
                <b />
                <em><GlossaryText text={label} /></em>
              </i>
            ))}
          </div>
        </div>
      </div>

      {process.litigation.length > 0 && (
        <section className="litigation-track" aria-label={ui.litigation}>
          <div className="litigation-heading"><Scale aria-hidden="true" /><span>{ui.litigation}</span></div>
          <ol className="litigation-events">
            {process.litigation.map((event, index) => (
              <li key={event.date + event.label} data-status={event.status} className={index === process.litigation.length - 1 ? 'latest' : undefined}>
                <time>{event.date}</time>
                <span>{event.label}</span>
              </li>
            ))}
          </ol>
        </section>
      )}

      <div className="timeline-block">
        <div className="timeline-caption"><Clock3 aria-hidden="true" /><span>{ui.past}</span><i /> <strong>{ui.now}</strong><i /> <span>{ui.expected}</span></div>
        <div className="timeline-shell" ref={showLatestTimeline}>
          <ol className="time-axis">
            {policy.milestones.map((item, index) => (
              <li
                className={`timeline-node past${index === policy.milestones.length - 1 ? ' to-present' : ''}`}
                key={item.date + item.text}
              >
                <b /><time>{item.date}</time><p><GlossaryText text={item.text} /></p>
              </li>
            ))}
            <li className="timeline-node present">
              <b /><time>{ui.now}</time><p><GlossaryText text={process.currentSummary} /></p>
            </li>
            {policy.next.map((item) => (
              <li className="timeline-node future" key={item.date + item.text}>
                <b /><time>{item.date}{item.estimate && <span className="timeline-estimate">{ui.expected}</span>}</time><p><GlossaryText text={item.text} /></p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="policy-detail-entry">
        <a href={policyHref(policy.id, language, undefined, selectedPath)}>{language === 'en' ? 'Read impact & outlook' : '阅读影响分析与走向'}<ArrowUpRight aria-hidden="true" /></a>
        <a href={policyHref(policy.id, language, 'sources', selectedPath)}>{language === 'en' ? 'Sources' : '原始来源'}</a>
      </div>
    </article>
  );
}
