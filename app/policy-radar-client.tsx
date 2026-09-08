'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, ChevronDown, Radar } from 'lucide-react';
import { getThirtyDayBriefing } from './briefing-feed';
import { animateDisclosure } from './disclosure-animation';
import { GlossaryText } from './glossary-text';
import { VisitorTracker } from '@/components/visitor-tracker';
import { TooltipProvider } from '@/components/ui/tooltip';
import { englishRouteStages } from './english-content';
import { LanguageProvider } from './language-context';
import { brandHomeLabel, type Language } from './language';
import { persistLanguage } from './language-client';
import { getPolicies } from './policy-data';
import { policyHref, legacyPolicyHref } from './policy-links';
import { filterPoliciesByRouteStage } from './policy-filter';
import { GitHubProjectLink } from './github-link';
import { ShareButton } from '@/app/share-button';
import { MobileSiteMenu } from './mobile-site-menu';
import {
  CommunityImpactRating,
  useCommunityImpactRatings,
} from './community-impact-rating';
import { shouldTriggerNiulai, type PolicyId } from './community-impact-model';
import { NiulaiEffect } from './niulai-effect';
import { CptSchoolTracker } from './cpt-school-tracker';
import { PolicyCard } from './policy-card';
import { homeCopy } from './home-copy';
import type { CommunitySchool, VerifiedSchool } from './cpt-schools';

const routeStages = [
  {
    key: 'F-1',
    number: '01',
    subtitle: '入学与在读',
    policies: [
      { rank: '03', id: 'duration-status', title: 'D/S 固定期限', state: '最终规则 · 听证后待裁定' },
    ],
  },
  {
    key: 'CPT',
    number: '02',
    subtitle: '校内外实习',
    policies: [
      { rank: '05', id: 'cpt-guidance', title: '8·12 / 8·24 CPT 指引', state: '学校已按新口径执行' },
    ],
  },
  {
    key: 'OPT',
    number: '03',
    subtitle: '毕业后工作',
    policies: [
      { rank: '01', id: 'opt-fee', title: 'OPT $100k', state: 'OIRA 审查中 · 尚未生效' },
      { rank: '09', id: 'ead-discretion', title: 'I-765 犯罪记录审查', state: '评论期已结束' },
    ],
  },
  {
    key: 'H-1B',
    number: '04',
    subtitle: '工作签证',
    policies: [
      { rank: '02', id: 'h1b-fee', title: 'H-1B $103,265', state: '正式提案' },
      { rank: '04', id: 'h1b-weighted-selection', title: 'H-1B 工资加权抽签', state: '最终规则已生效' },
      { rank: '06', id: 'prevailing-wage', title: 'H-1B / PERM 工资等级', state: '评论期已结束' },
      { rank: '07', id: 'h1b-reform', title: 'H-1B 分类改革', state: 'OMB 审查' },
      { rank: '08', id: 'grace-period', title: '取消 60 天宽限期', state: '等待提案正文' },
      { rank: '10', id: 'h4-ead', title: 'H-4 EAD', state: '长期议程' },
    ],
  },
];

function RoutePolicyLink({ policy, language, path }: {
  policy: (typeof routeStages)[number]['policies'][number];
  language: Language;
  path: string;
}) {
  return (
    <a
      href={policyHref(policy.id, language, undefined, path)}
      className="route-policy"
    >
      <span>#{policy.rank}</span>
      <strong>{policy.title}</strong>
      <small><GlossaryText text={policy.state} /></small>
      <ArrowUpRight aria-hidden="true" />
    </a>
  );
}

export default function Home({ initialLanguage, initialPath = 'all' }: { initialLanguage: Language; initialPath?: string }) {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [selectedPath, setSelectedPath] = useState(initialPath);
  const [selectedEvidence, setSelectedEvidence] = useState<VerifiedSchool | CommunitySchool | null>(null);
  const [niulaiTriggerToken, setNiulaiTriggerToken] = useState(0);
  const communityImpact = useCommunityImpactRatings();
  const ui = homeCopy[language];
  useEffect(() => {
    const redirectLegacy = () => {
      const href = legacyPolicyHref(window.location.hash, language);
      if (href) window.location.replace(href);
    };
    redirectLegacy();
    window.addEventListener('hashchange', redirectLegacy);
    return () => window.removeEventListener('hashchange', redirectLegacy);
  }, [language]);
  useEffect(() => {
    document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
    document.title = language === 'en'
      ? 'U.S. Stay Path Policy Radar | F-1 → CPT → OPT → H-1B'
      : '留美路径政策雷达｜F-1 → CPT → OPT → H-1B';
  }, [language]);

  const localizedPolicies = getPolicies(language);
  const localizedRouteStages = language === 'en'
    ? routeStages.map((stage) => ({
        ...stage,
        subtitle: englishRouteStages[stage.key].subtitle,
        policies: stage.policies.map((policy) => ({ ...policy, ...englishRouteStages[stage.key].policies[policy.id] })),
      }))
    : routeStages;
  const pathFilters = ['all', 'F-1', 'CPT', 'OPT', 'H-1B'];
  const visiblePolicies = filterPoliciesByRouteStage(
    localizedPolicies,
    localizedRouteStages,
    selectedPath,
  );
  const briefing = getThirtyDayBriefing('2026-09-07', language);
  const updatesHref = language === 'en' ? '/updates?lang=en' : '/updates';
  const selectLanguage = (nextLanguage: Language) => {
    persistLanguage(nextLanguage);
    setLanguage(nextLanguage);
    setSelectedEvidence(null);

    const url = new URL(window.location.href);
    url.searchParams.delete('lang');
    window.history.replaceState(null, '', url);
  };
  const selectRankingPath = (path: string) => {
    setSelectedPath(path);
    const url = new URL(window.location.href);
    if (path === 'all') url.searchParams.delete('path');
    else url.searchParams.set('path', path);
    window.history.replaceState(null, '', url);
    window.requestAnimationFrame(() => {
      document.getElementById('ranking')?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
        block: 'start',
      });
    });
  };
  const selectCommunityImpact = (policyId: PolicyId, rating: number) => {
    if (shouldTriggerNiulai(policyId, rating)) {
      setNiulaiTriggerToken((current) => current + 1);
    }
    void communityImpact.submitRating(policyId, rating);
  };

  return (
    <LanguageProvider language={language}>
    <TooltipProvider closeDelay={40} delay={0}>
      <VisitorTracker />
      <NiulaiEffect triggerToken={niulaiTriggerToken} />
      <main>
      <header className="topbar product-bar">
        <a className="brand" href="#top" aria-label={brandHomeLabel(language)}>
          <span className="brand-mark"><Radar aria-hidden="true" /></span>
          <span>{ui.brand}</span>
        </a>
        <nav className="nav-links" aria-label={ui.navLabel}>
          <a href="#ranking">{ui.policies}</a>
          <a href="#cpt-schools">{ui.cptSchools}</a>
          <a href={updatesHref}>{ui.updates}</a>
          <a href={language === 'en' ? '/stats?lang=en' : '/stats'}>{ui.stats}</a>
        </nav>
        <div className="top-actions">
          <GitHubProjectLink language={language} />
          <ShareButton language={language} />
          <nav className="language-switch" aria-label={ui.switchLabel}>
            <button type="button" className={language === 'zh' ? 'active' : ''} aria-pressed={language === 'zh'} onClick={() => selectLanguage('zh')}>{ui.chinese}</button>
            <button type="button" className={language === 'en' ? 'active' : ''} aria-pressed={language === 'en'} onClick={() => selectLanguage('en')}>{ui.english}</button>
          </nav>
          <MobileSiteMenu current="home" language={language} />
          <div className="asof"><span /><time dateTime="2026-09-07">2026-09-07 · ET</time></div>
        </div>
      </header>

      <section className="workspace-hero" id="top">
        <div className="workspace-title">
          <div>
            <h1>{ui.heroTitle}</h1>
          </div>
          <p>{ui.heroCount}</p>
        </div>

        <div className="route-map-shell">
          <div className="route-map-head">
            <div><strong>{ui.routeTitle}</strong><span>{ui.routeHint}</span></div>
            {selectedPath !== 'all' && <button type="button" onClick={() => selectRankingPath('all')}>{ui.showAll}</button>}
          </div>
          <div className="route-map" aria-label={ui.routeAria}>
            {localizedRouteStages.map((stage) => (
              <section className="route-stage-column" data-path={stage.key} key={stage.key}>
                <button
                  type="button"
                  className={`route-stage ${selectedPath === stage.key ? 'active' : ''}`}
                  aria-pressed={selectedPath === stage.key}
                  onClick={() => {
                    selectRankingPath(stage.key);
                  }}
                >
                  <span>{stage.number}</span>
                  <strong>{stage.key}</strong>
                  <small>{stage.subtitle}</small>
                </button>
                <div className="stage-policies">
                  {stage.policies.slice(0, 2).map((policy) => (
                    <RoutePolicyLink policy={policy} language={language} path={selectedPath} key={policy.id} />
                  ))}
                  {stage.policies.length > 2 && (
                    <details className="route-more" ref={animateDisclosure}>
                      <summary>{ui.morePolicies(stage.policies.length - 2)}<ChevronDown aria-hidden="true" /></summary>
                      <div className="disclosure-content">
                        {stage.policies.slice(2).map((policy) => (
                          <RoutePolicyLink policy={policy} language={language} path={selectedPath} key={policy.id} />
                        ))}
                      </div>
                    </details>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="briefing-board" aria-label={ui.briefingAria}>
        <article className="briefing-panel briefing-recent">
          <header>
            <div><span>RECENT 30 DAYS</span><h2>{ui.recent}</h2></div>
            <small>08·07—09·05</small>
          </header>
          <div className="briefing-list">
            {briefing.recent.map((item) => (
              <a
                className="briefing-row"
                href={policyHref(item.policyId, language, 'timeline', selectedPath)}
                key={item.id}
                title={item.summary}
              >
                <time dateTime={item.date}>{item.date.slice(5).replace('-', '·')}</time>
                <strong>#{String(item.rank).padStart(2, '0')} {item.policy}</strong>
                <span><GlossaryText text={item.summary} /></span>
                <ArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
        </article>

        <article className="briefing-panel briefing-upcoming">
          <header>
            <div><span>NEXT 30 DAYS</span><h2>{ui.upcoming}</h2></div>
            <small>09·06—10·05</small>
          </header>
          <div className="briefing-list">
            {briefing.upcoming.map((item) => (
              <a
                className="briefing-row"
                href={policyHref(item.policyId, language, 'progress', selectedPath)}
                key={item.id}
                title={item.summary}
              >
                <time dateTime={item.date}>{item.date.slice(5).replace('-', '·')}</time>
                <strong>#{String(item.rank).padStart(2, '0')} {item.policy}</strong>
                <span><GlossaryText text={item.summary} /></span>
                <ArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
        </article>
      </section>

      <section className="report-section" id="ranking" aria-labelledby="ranking-title">
        <div className="ranking-head">
          <div><span className="section-kicker">IMPACT RANKING</span><h2 id="ranking-title">{ui.ranking}</h2><p className="ranking-hint">{ui.rankingHint}</p></div>
        </div>
        <div className="path-console">
            <fieldset className="path-controls">
              <legend className="visually-hidden">{ui.filterAria}</legend>
              {pathFilters.map((path) => (
                <button
                  type="button"
                  key={path}
                  data-path={path === 'all' ? undefined : path}
                  className={selectedPath === path ? 'active' : ''}
                  aria-pressed={selectedPath === path}
                  onClick={() => selectRankingPath(path)}
                >
                  <span className="path-label">{path === 'all' ? ui.all : path}</span>
                  <span className="path-count" aria-hidden="true">{filterPoliciesByRouteStage(localizedPolicies, localizedRouteStages, path).length}</span>
                </button>
              ))}
            </fieldset>
            <output className="filter-result" aria-live="polite">{visiblePolicies.length} {ui.items}</output>
        </div>

        <div className="policy-list" key={selectedPath}>
          {visiblePolicies.map((policy) => (
            <PolicyCard
              key={policy.id}
              policy={policy}
              language={language}
              selectedPath={selectedPath}
              policyPath={localizedRouteStages.find((stage) => stage.policies.some((item) => item.id === policy.id))?.key}
              communityAggregate={communityImpact.aggregates[policy.id]}
              communityRating={
                <CommunityImpactRating
                  language={language}
                  policyId={policy.id}
                  aggregate={communityImpact.aggregates[policy.id]}
                  selected={communityImpact.selections[policy.id] ?? null}
                  pending={communityImpact.pending[policy.id] ?? false}
                  error={communityImpact.errors[policy.id] || communityImpact.loadFailed}
                  onSelect={(rating) => selectCommunityImpact(policy.id, rating)}
                />
              }
            />
          ))}
        </div>
      </section>

      <CptSchoolTracker
        language={language}
        selectedEvidence={selectedEvidence}
        setSelectedEvidence={setSelectedEvidence}
      />

      <footer>
        <div><span className="brand-mark"><Radar aria-hidden="true" /></span><strong>{ui.brand}</strong></div>
        <div className="footer-notes">
          <p>{ui.footer}</p>
          <p className="seed-disclosure">{ui.seedDisclosure}</p>
        </div>
        <div className="footer-actions">
          <a href="#top">{ui.top}</a>
        </div>
      </footer>
      </main>
    </TooltipProvider>
    </LanguageProvider>
  );
}
