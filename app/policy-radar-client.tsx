'use client';

import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { ArrowUpRight, ChevronDown, Radar } from 'lucide-react';
import { animateDisclosure } from './disclosure-animation';
import { GlossaryText } from './glossary-text';
import { VisitorTracker } from '@/components/visitor-tracker';
import { TooltipProvider } from '@/components/ui/tooltip';
import { LanguageProvider } from './language-context';
import { brandHomeLabel, type Language } from './language';
import { PageLanguageSwitch } from './page-language-switch';
import { policyHref, legacyPolicyHref } from './policy-links';
import { filterByPath, POLICY_PATHS, type PathFilter } from './policy-paths';
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
import type { HomeBriefingRow, HomePathColumn, HomeView } from './home-view';

function BriefingRow({ item, view, language, selectedPath }: {
  item: HomeBriefingRow;
  view: 'timeline' | 'progress';
  language: Language;
  selectedPath: string;
}) {
  return (
    <a
      className="briefing-row"
      href={policyHref(item.policyId, language, view, selectedPath)}
      title={item.summary}
    >
      <time dateTime={item.date}>{item.date.slice(5).replace('-', '·')}</time>
      <strong>
        <span className="briefing-title-text">#{String(item.rank).padStart(2, '0')} {item.policy}</span>
        <span className="briefing-tag" data-path={item.path}>{item.path}</span>
      </strong>
      <span><GlossaryText text={item.summary} /></span>
      <ArrowUpRight aria-hidden="true" />
    </a>
  );
}

function RoutePolicyLink({ policy, language, onNavigate }: {
  policy: HomePathColumn['policies'][number];
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
      <span>#{String(policy.rank).padStart(2, '0')}</span>
      <strong>{policy.short}</strong>
      <span className="route-policy-kind" data-kind={policy.kind}>{policy.label}</span>
      <small><GlossaryText text={policy.status} /></small>
      <ArrowUpRight aria-hidden="true" />
    </a>
  );
}

export default function Home({ view, language, initialPath = 'all' }: {
  view: HomeView;
  language: Language;
  initialPath?: PathFilter;
}) {
  const [selectedPath, setSelectedPath] = useState<PathFilter>(initialPath);
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

  const pathFilters: PathFilter[] = ['all', ...POLICY_PATHS];
  const visiblePolicies = filterByPath(view.policies, selectedPath);
  const scrollBehavior = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth';
  const navigateToPolicy = (id: string) => {
    const url = new URL(window.location.href);
    if (!visiblePolicies.some((policy) => policy.id === id)) {
      flushSync(() => setSelectedPath('all'));
      url.searchParams.delete('path');
    }
    url.hash = `policy-${id}`;
    window.history.pushState(null, '', url);
    document.getElementById(`policy-${id}`)?.scrollIntoView({ behavior: scrollBehavior(), block: 'start' });
  };
  const updatesHref = `/updates?lang=${language}`;
  const selectRankingPath = (path: PathFilter) => {
    setSelectedPath(path);
    const url = new URL(window.location.href);
    if (path === 'all') url.searchParams.delete('path');
    else url.searchParams.set('path', path);
    window.history.replaceState(null, '', url);
    window.requestAnimationFrame(() => {
      document.getElementById('ranking')?.scrollIntoView({ behavior: scrollBehavior(), block: 'start' });
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
          <a href={`/stats?lang=${language}`}>{ui.stats}</a>
        </nav>
        <div className="top-actions">
          <GitHubProjectLink language={language} />
          <ShareButton language={language} />
          <PageLanguageSwitch
            action="/"
            language={language}
            label={ui.switchLabel}
            hidden={selectedPath === 'all' ? {} : { path: selectedPath }}
          />
          <MobileSiteMenu current="home" language={language} />
          <div className="asof"><span /><time dateTime={view.updatedOn}>{view.updatedOn} · ET</time></div>
        </div>
      </header>

      <section className="workspace-hero" id="top">
        <div className="workspace-title">
          <div>
            <h1>{ui.heroTitle}</h1>
          </div>
          <p>{ui.heroCount(view.policies.length, view.schools.verified.length + view.schools.community.length)}</p>
        </div>

        <div className="route-map-shell">
          <div className="route-map-head">
            <div><strong>{ui.routeTitle}</strong><span>{ui.routeHint}</span></div>
            {selectedPath !== 'all' && <button type="button" onClick={() => selectRankingPath('all')}>{ui.showAll}</button>}
          </div>
          <div className="route-map" aria-label={ui.routeAria}>
            {view.paths.map((stage) => (
              <section className="route-stage-column" data-path={stage.key} key={stage.key}>
                <button
                  type="button"
                  className={`route-stage ${selectedPath === stage.key ? 'active' : ''}`}
                  aria-pressed={selectedPath === stage.key}
                  onClick={() => selectRankingPath(stage.key)}
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
            <small>{view.briefing.dates.recent}</small>
          </header>
          <div className="briefing-list">
            {view.briefing.recent.map((item) => (
              <BriefingRow item={item} view="timeline" language={language} selectedPath={selectedPath} key={item.id} />
            ))}
          </div>
        </article>

        <article className="briefing-panel briefing-upcoming">
          <header>
            <div><span>NEXT 30 DAYS</span><h2>{ui.upcoming}</h2></div>
            <small>{view.briefing.dates.upcoming}</small>
          </header>
          <div className="briefing-list">
            {view.briefing.upcoming.map((item) => (
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
                  <span className="path-count" aria-hidden="true">{filterByPath(view.policies, path).length}</span>
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
              communityAggregate={communityImpact.aggregates[policy.id]}
              communityRating={
                <CommunityImpactRating
                  language={language}
                  policyId={policy.id}
                  forumLinks={policy.forumLinks}
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
        verifiedSchools={view.schools.verified}
        communitySchools={view.schools.community}
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
