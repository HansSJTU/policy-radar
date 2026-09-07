'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Scale,
  ExternalLink,
  FileSearch,
  Images,
  Radar,
  Search,
  ShieldAlert,
  X,
} from 'lucide-react';
import { getThirtyDayBriefing } from './briefing-feed';
import { animateDisclosure } from './disclosure-animation';
import { GlossaryText } from './glossary-text';
import { centerCurrentProcessStage, showLatestTimeline } from './initial-scroll';
import { getProcessTrack } from './process-model';
import { VisitorTracker } from '@/components/visitor-tracker';
import { TooltipProvider } from '@/components/ui/tooltip';
import { englishCommunitySchools, englishRouteStages, englishVerifiedSchools } from './english-content';
import { LanguageProvider } from './language-context';
import { brandHomeLabel, type Language } from './language';
import { persistLanguage } from './language-client';
import { getPolicies } from './policy-data';
import { policyHref, legacyPolicyHref } from './policy-links';
import { getPolicyEditorial } from './policy-detail-model';
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
import {
  communitySchools,
  verifiedSchools,
  type CommunitySchool,
  type VerifiedSchool,
} from './cpt-schools';

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

const pageCopy = {
  zh: {
    brand: '留美路径雷达', navLabel: '页面导航', policies: '政策', cptSchools: 'CPT 学校', updates: '更新记录', stats: '访问统计',
    switchLabel: '切换网站语言', chinese: '中', english: 'EN', heroTitle: '留美路径政策雷达', heroCount: `10 项动态 · ${verifiedSchools.length + communitySchools.length} 条学校／院系记录`,
    routeTitle: '你的留美路径', routeHint: '选择阶段，查看相关政策', morePolicies: (count: number) => `另有 ${count} 项政策`, showAll: '显示全部 ×', routeAria: 'F-1 到 H-1B 路径与政策分布',
    briefingAria: '最近 30 天动态与未来 30 天关键时间点', recent: '最近 30 天动态', upcoming: '未来 30 天关键时间点',
    ranking: '最难绕开的关卡', rankingHint: '颜色对应路径分类 · 按路径冲击分数从高到低排序', filterAria: '按签证路径筛选', all: '全部', items: '项', sourceLabel: '信息来源',
    viewProcess: (name: string) => `查看${name}说明`, policySpecific: '本项政策：', complete: '已完成', currentStage: '当前阶段', upcomingStage: '尚未到达',
    impact: '路径冲击', processProgress: '规则制定进度', swipe: '左右滑动查看完整流程 →', currentProcess: '当前流程：', litigation: '诉讼进展',
    past: '过去', now: '现在', expected: '预计', details: '政策解读与具体影响', happening: '现在发生了什么', change: '这条路会怎么变',
    schoolTitle: 'CPT：哪些学校停了？', schoolIntro: '大多停的是选修课／学分型 CPT，不是所有 CPT。', search: '搜索学校或政策', evidenceAria: 'CPT 学校证据级别',
    verified: '校方网页已核实', community: '邮件截图', paused: '暂停部分 CPT', tightened: '收紧', unchanged: '暂未改变', officialPage: '校方页面',
    noSchool: '没有匹配的学校。', evidencePrefix: '以下条目依据已下载到本站的校方邮件截图，未全部找到公开校页。Purdue ECE 与 Purdue ISS 分开标注，不能相互外推。', verifyPending: '待公开来源复核',
    viewEvidence: '查看邮件截图', viewReport: '邮件截图待补', evidenceTitle: '邮件截图', closeEvidence: '关闭邮件截图', noScreenshot: '尚未找到对应的邮件截图。',
    footer: '更新于 2026-09-06（美东）。预计日期可能因规则修改或诉讼变化而移动；个人决定请复核原始文件与专业意见。', seedDisclosure: '社区影响均分目前包含每项政策 10–20 个用于上线初始化的模拟样本；这些样本已在数据库中单独标记，待真实评分积累后将删除。', top: '回到顶部 ↑',
  },
  en: {
    brand: 'Stay Path Radar', navLabel: 'Page navigation', policies: 'Policies', cptSchools: 'CPT Schools', updates: 'Updates', stats: 'Traffic',
    switchLabel: 'Switch site language', chinese: '中', english: 'EN', heroTitle: 'U.S. Stay Path Policy Radar', heroCount: `10 policy developments · ${verifiedSchools.length + communitySchools.length} school/department records`,
    routeTitle: 'Your path in the U.S.', routeHint: 'Select a stage to explore its policies', morePolicies: (count: number) => `${count} more policies`, showAll: 'Show all ×', routeAria: 'Policies along the F-1 to H-1B path',
    briefingAria: 'Recent 30-day developments and key dates in the next 30 days', recent: 'Developments in the last 30 days', upcoming: 'Key dates in the next 30 days',
    ranking: 'Highest-impact barriers', rankingHint: 'Colors identify path categories · Sorted by path impact, highest first', filterAria: 'Filter by immigration path', all: 'All', items: 'items', sourceLabel: 'Sources',
    viewProcess: (name: string) => `Explain ${name}`, policySpecific: 'This policy: ', complete: 'Completed', currentStage: 'Current stage', upcomingStage: 'Not reached',
    impact: 'Path impact', processProgress: 'Rulemaking progress', swipe: 'Swipe to see the full process →', currentProcess: 'Current process: ', litigation: 'Court proceedings',
    past: 'Past', now: 'Now', expected: 'Expected', details: 'Policy analysis and impact', happening: 'What is happening now', change: 'How the path would change',
    schoolTitle: 'CPT: Which schools have paused approvals?', schoolIntro: 'Most pauses concern elective or course-credit CPT, not every form of CPT.', search: 'Search schools or policies', evidenceAria: 'CPT school evidence level',
    verified: 'Verified on university website', community: 'Email screenshots', paused: 'Some CPT paused', tightened: 'Tighter review', unchanged: 'No current change', officialPage: 'University page',
    noSchool: 'No matching school.', evidencePrefix: 'The following entries rely on university email screenshots stored on this site; not every item has a public university webpage. Purdue ECE and Purdue ISS are listed separately and should not be generalized across scopes.', verifyPending: 'Awaiting a public source',
    viewEvidence: 'View email screenshot', viewReport: 'Email screenshot pending', evidenceTitle: 'Email screenshots', closeEvidence: 'Close email screenshots', noScreenshot: 'No corresponding email screenshot has been located.',
    footer: 'Updated September 6, 2026 (Eastern Time). Estimated dates may move as rules change or litigation develops. Verify primary sources and obtain professional advice before making individual decisions.', seedDisclosure: 'Community-impact averages currently include 10–20 synthetic launch samples per policy. They are marked separately in the database and will be removed after genuine ratings accumulate.', top: 'Back to top ↑',
  },
};

export default function Home({ initialLanguage, initialPath = 'all' }: { initialLanguage: Language; initialPath?: string }) {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [selectedPath, setSelectedPath] = useState(initialPath);
  const [schoolQuery, setSchoolQuery] = useState('');
  const [schoolTab, setSchoolTab] = useState<'verified' | 'community'>('verified');
  const [selectedEvidence, setSelectedEvidence] = useState<VerifiedSchool | CommunitySchool | null>(null);
  const [niulaiTriggerToken, setNiulaiTriggerToken] = useState(0);
  const communityImpact = useCommunityImpactRatings();
  const ui = pageCopy[language];
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
  useEffect(() => {
    if (!selectedEvidence) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedEvidence(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [selectedEvidence]);
  const localizedPolicies = getPolicies(language);
  const localizedRouteStages = language === 'en'
    ? routeStages.map((stage) => ({
        ...stage,
        subtitle: englishRouteStages[stage.key].subtitle,
        policies: stage.policies.map((policy) => ({ ...policy, ...englishRouteStages[stage.key].policies[policy.id] })),
      }))
    : routeStages;
  const localizedVerifiedSchools = language === 'en'
    ? verifiedSchools.map((school) => ({ ...school, ...englishVerifiedSchools[school.school] }))
    : verifiedSchools;
  const localizedCommunitySchools = language === 'en'
    ? communitySchools.map((school) => ({ ...school, state: englishCommunitySchools[school.school] }))
    : communitySchools;
  const pathFilters = ['all', 'F-1', 'CPT', 'OPT', 'H-1B'];
  const visiblePolicies = filterPoliciesByRouteStage(
    localizedPolicies,
    localizedRouteStages,
    selectedPath,
  );
  const normalizedQuery = schoolQuery.trim().toLowerCase();
  const visibleVerified = localizedVerifiedSchools.filter((school) =>
    `${school.school} ${school.state} ${school.detail}`.toLowerCase().includes(normalizedQuery),
  );
  const visibleCommunity = localizedCommunitySchools.filter((school) =>
    `${school.school} ${school.state}`.toLowerCase().includes(normalizedQuery),
  );
  const briefing = getThirtyDayBriefing('2026-09-06', language);
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
          <div className="asof"><span /><time dateTime="2026-09-06">2026-09-06 · ET</time></div>
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
          {visiblePolicies.map((policy) => {
            const process = getProcessTrack(policy.id, language);
            const editorial = getPolicyEditorial(policy.id, language)!;
            const policyPath = localizedRouteStages.find((stage) => stage.policies.some((item) => item.id === policy.id))?.key;
            const communityAggregate = communityImpact.aggregates[policy.id];
            return (
              <article
                className="policy-card policy-card-compact"
                data-path={policyPath}
                id={`policy-${policy.id}`}
                data-policy-id={policy.id}
                key={policy.id}
              >
                <header className="policy-snapshot">
                  <div className="rank-column">
                    <div className="rank-number"><span>#</span>{String(policy.rank).padStart(2, '0')}</div>
                    <div className="rank-score" aria-label={`${ui.impact} ${policy.score} / 10`}>
                      <span>{ui.impact}</span><strong>{policy.score}</strong><small>/10</small>
                    </div>
                  </div>
                  <div className="policy-title-group">
                    <div className="policy-meta">
                      <div className={`flow-annotation ${process.kind}`}>
                        <span><GlossaryText text={process.name} /></span>
                        <details className="flow-help">
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
                    <p><GlossaryText text={policy.tldr} /></p>
                  </div>
                  <CommunityImpactRating
                    language={language}
                    policyId={policy.id}
                    aggregate={communityAggregate}
                    selected={communityImpact.selections[policy.id] ?? null}
                    pending={communityImpact.pending[policy.id] ?? false}
                    error={communityImpact.errors[policy.id] || communityImpact.loadFailed}
                    onSelect={(rating) => selectCommunityImpact(policy.id, rating)}
                  />
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
          })}
        </div>
      </section>

      <section className="school-section" id="cpt-schools" aria-labelledby="schools-title">
        <div className="school-head">
          <div><span className="section-kicker">CPT SCHOOL TRACKER</span><h2 id="schools-title">{ui.schoolTitle}</h2><p>{ui.schoolIntro}</p></div>
          <label className="school-search"><Search aria-hidden="true" /><input value={schoolQuery} onChange={(event) => setSchoolQuery(event.target.value)} placeholder={ui.search} aria-label={ui.search} /></label>
        </div>

        <div className="school-tabs">
          <div className="school-tab-list" role="tablist" aria-label={ui.evidenceAria}>
            <button type="button" role="tab" aria-selected={schoolTab === 'verified'} className={schoolTab === 'verified' ? 'active' : ''} onClick={() => setSchoolTab('verified')}><CheckCircle2 aria-hidden="true" /><span>{ui.verified}</span><b>{visibleVerified.length}</b></button>
            <button type="button" role="tab" aria-selected={schoolTab === 'community'} className={schoolTab === 'community' ? 'active' : ''} onClick={() => setSchoolTab('community')}><FileSearch aria-hidden="true" /><span>{ui.community}</span><b>{visibleCommunity.length}</b></button>
          </div>
          {schoolTab === 'verified' ? <div className="school-tab-content" role="tabpanel">
            <div className="school-cards">
              {visibleVerified.map((school) => (
                <button
                  type="button"
                  className="school-card evidence-card"
                  aria-haspopup="dialog"
                  onClick={() => setSelectedEvidence(school)}
                  key={school.school}
                >
                  <div><i className={`school-state ${school.tone}`} /><span>{school.tone === 'pause' ? ui.paused : school.tone === 'tighten' ? ui.tightened : ui.unchanged}</span></div>
                  <h3>{school.school}</h3>
                  <strong><GlossaryText text={school.state} /></strong>
                  <p><GlossaryText text={school.detail} /></p>
                  <small>{school.screenshots.length > 0 ? <Images aria-hidden="true" /> : <ExternalLink aria-hidden="true" />}<span>{school.screenshots.length > 0 ? ui.viewEvidence : ui.officialPage}</span><ArrowUpRight className="school-evidence-arrow" aria-hidden="true" /></small>
                </button>
              ))}
              {visibleVerified.length === 0 && <p className="empty-result">{ui.noSchool}</p>}
            </div>
          </div> : <div className="school-tab-content" role="tabpanel">
            <div className="evidence-banner"><ShieldAlert aria-hidden="true" /><p>{ui.evidencePrefix}</p></div>
            <div className="school-cards community-cards">
              {visibleCommunity.map((school) => (
                <button
                  type="button"
                  className="school-card evidence-card"
                  aria-haspopup="dialog"
                  onClick={() => setSelectedEvidence(school)}
                  key={school.school}
                >
                  <div><i className="school-state lead" /><span>{ui.verifyPending}</span></div>
                  <h3>{school.school}</h3>
                  <p><GlossaryText text={school.state} /></p>
                  <small><Images aria-hidden="true" /><span>{school.screenshots.length > 0 ? ui.viewEvidence : ui.viewReport}</span><ArrowUpRight className="school-evidence-arrow" aria-hidden="true" /></small>
                </button>
              ))}
              {visibleCommunity.length === 0 && <p className="empty-result">{ui.noSchool}</p>}
            </div>
          </div>}
        </div>
      </section>

      {selectedEvidence && (
        <div
          className="evidence-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedEvidence(null);
          }}
        >
          <dialog
            open
            className="evidence-modal"
            aria-modal="true"
            aria-labelledby="evidence-modal-title"
          >
            <header>
              <div>
                <span>{ui.evidenceTitle}</span>
                <h2 id="evidence-modal-title">{selectedEvidence.school}</h2>
                <p><GlossaryText text={selectedEvidence.state} /></p>
              </div>
              <button type="button" autoFocus onClick={() => setSelectedEvidence(null)} aria-label={ui.closeEvidence}>
                <X aria-hidden="true" />
              </button>
            </header>
            <div className="evidence-modal-body">
              {'href' in selectedEvidence && (
                <a className="evidence-official-link" href={selectedEvidence.href} target="_blank" rel="noreferrer">
                  {ui.officialPage}<ExternalLink aria-hidden="true" />
                </a>
              )}
              {selectedEvidence.screenshots.length > 0
                ? selectedEvidence.screenshots.map((screenshot, index) => (
                    <figure key={screenshot.src}>
                      <Image
                        src={screenshot.src}
                        width={screenshot.width}
                        height={screenshot.height}
                        alt={`${selectedEvidence.school} ${ui.evidenceTitle} ${index + 1}`}
                        unoptimized
                      />
                      {selectedEvidence.screenshots.length > 1 && <figcaption>{index + 1} / {selectedEvidence.screenshots.length}</figcaption>}
                    </figure>
                  ))
                : <p className="evidence-empty"><FileSearch aria-hidden="true" />{ui.noScreenshot}</p>}
            </div>
          </dialog>
        </div>
      )}

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
