'use client';

import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { ArrowUpRight, ChevronDown, Radar } from 'lucide-react';
import { getThirtyDayBriefing, getBriefingDateLabels, type BriefingItem } from './briefing-feed';
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
import { getPolicyPath, routeStages, type RouteStage } from './policy-paths';
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
import { SITE_UPDATED_ON } from './policy-freshness';
import type { CommunitySchool, VerifiedSchool } from './cpt-schools';

function BriefingRow({ item, view, language, selectedPath }: {
  item: BriefingItem;
  view: 'timeline' | 'progress';
  language: Language;
  selectedPath: string;
}) {
  const path = getPolicyPath(item.policyId);
  return (
    <a
      className="briefing-row"
      href={policyHref(item.policyId, language, view, selectedPath)}
      title={item.summary}
    >
      <time dateTime={item.date}>{item.date.slice(5).replace('-', '·')}</time>
      <strong>
        <span className="briefing-title-text">#{String(item.rank).padStart(2, '0')} {item.policy}</span>
        {path && <span className="briefing-tag" data-path={path}>{path}</span>}
      </strong>
      <span><GlossaryText text={item.summary} /></span>
      <ArrowUpRight aria-hidden="true" />
    </a>
  );
}

function RoutePolicyLink({ policy, language, onNavigate }: {
  policy: RouteStage['policies'][number];
  language: Language;
  onNavigate: (id: string) => void;
}) {
  return (
    <a
      href={`/?lang=${language}#policy-${policy.id}`}
      onClick={(event) => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        onNavigate(policy.id);
      }}
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
  const briefing = getThirtyDayBriefing(SITE_UPDATED_ON, language);
  const briefingDates = getBriefingDateLabels(SITE_UPDATED_ON);
  const navigateToPolicy = (id: string) => {
    const url = new URL(window.location.href);
    if (!visiblePolicies.some((policy) => policy.id === id)) {
      flushSync(() => setSelectedPath('all'));
      url.searchParams.delete('path');
    }
    url.hash = `policy-${id}`;
    window.history.pushState(null, '', url);
    document.getElementById(`policy-${id}`)?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
      block: 'start',
    });
  };
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
          <div className="asof"><span /><time dateTime={SITE_UPDATED_ON}>{SITE_UPDATED_ON} · ET</time></div>
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
                    <RoutePolicyLink policy={policy} language={language} onNavigate={navigateToPolicy} key={policy.id} />
                  ))}
                  {stage.policies.length > 2 && (
                    <details className="route-more" ref={animateDisclosure}>
                      <summary>{ui.morePolicies(stage.policies.length - 2)}<ChevronDown aria-hidden="true" /></summary>
                      <div className="disclosure-content">
                        {stage.policies.slice(2).map((policy) => (
                          <RoutePolicyLink policy={policy} language={language} onNavigate={navigateToPolicy} key={policy.id} />
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
            <small>{briefingDates.recent}</small>
          </header>
          <div className="briefing-list">
            {briefing.recent.map((item) => (
              <BriefingRow item={item} view="timeline" language={language} selectedPath={selectedPath} key={item.id} />
            ))}
          </div>
        </article>

        <article className="briefing-panel briefing-upcoming">
          <header>
            <div><span>NEXT 30 DAYS</span><h2>{ui.upcoming}</h2></div>
            <small>{briefingDates.upcoming}</small>
          </header>
          <div className="briefing-list">
            {briefing.upcoming.map((item) => (
              <BriefingRow item={item} view="progress" language={language} selectedPath={selectedPath} key={item.id} />
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
              policyPath={getPolicyPath(policy.id)}
              communityAggregate={communityImpact.aggregates[policy.id]}
              communityRating={
                <CommunityImpactRating
                  language={language}
                  policyId={policy.id}
                  forumLinks={policy.sources.filter((source) => new URL(source.href).hostname === 'www.uscardforum.com')}
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
