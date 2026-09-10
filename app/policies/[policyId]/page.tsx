import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  FileText,
  GraduationCap,
  Radar,
  Route,
} from 'lucide-react';
import { resolveRequestLanguage } from '../../language-server';
import { PageLanguageSwitch } from '../../page-language-switch';
import { ShareButton } from '../../share-button';
import { getPolicyShareItem } from '../../item-share-model';
import { MobileSiteMenu } from '../../mobile-site-menu';
import { getPolicies } from '../../policy-data';
import {
  getPolicyDetail,
  getPolicyEditorial,
  POLICY_SITE_URL,
} from '../../policy-detail-model';
import { GlossaryText } from '../../glossary-text';
import { LanguageProvider } from '../../language-context';
import { getPolicyExamples } from '../../policy-examples';
import { getProcessTrack } from '../../process-model';
import { policyHref } from '../../policy-links';
import { VisitorTracker } from '@/components/visitor-tracker';
import {
  PolicyDirectory,
  PolicyPicker,
  PolicyProgress,
  PolicyScenarios,
} from './policy-interactions';
import './policy-detail.css';

export const dynamic = 'force-dynamic';
type Props = {
  params: Promise<{ policyId: string }>;
  searchParams?: Promise<{ lang?: string; from?: string }>;
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const [{ policyId }, search] = await Promise.all([params, searchParams]);
  const language = await resolveRequestLanguage(search?.lang);
  const detail = getPolicyDetail(policyId, language);
  if (!detail)
    return {
      title: 'Policy not found',
      robots: { index: false, follow: false },
    };
  const { editorial } = detail;
  const canonical = POLICY_SITE_URL + policyHref(policyId, language);
  const title = `${editorial.title}｜${language === 'en' ? 'Stay Path Radar' : '留美路径雷达'}`;
  const image = `${POLICY_SITE_URL}/policies/${policyId}/share-image?lang=${language}`;
  return {
    title,
    description: editorial.teaser,
    alternates: {
      canonical,
      languages: {
        'zh-CN': POLICY_SITE_URL + policyHref(policyId, 'zh'),
        en: POLICY_SITE_URL + policyHref(policyId, 'en'),
      },
    },
    openGraph: {
      title: editorial.title,
      description: editorial.teaser,
      type: 'article',
      url: canonical,
      siteName: 'Stay Path Radar',
      locale: language === 'en' ? 'en_US' : 'zh_CN',
      images: [{ url: image, width: 1200, height: 630, alt: editorial.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: editorial.title,
      description: editorial.teaser,
      images: [image],
    },
  };
}

export default async function PolicyPage({ params, searchParams }: Props) {
  const [{ policyId }, search] = await Promise.all([params, searchParams]);
  const language = await resolveRequestLanguage(search?.lang);
  const detail = getPolicyDetail(policyId, language);
  if (!detail) notFound();
  const { record, editorial: p } = detail;
  const english = language === 'en';
  const process = getProcessTrack(policyId, language);
  const home = `/?lang=${language}`;
  const returnPath = ['F-1', 'CPT', 'OPT', 'H-1B'].includes(search?.from ?? '')
    ? search!.from!
    : 'all';
  const back = `${home}${returnPath === 'all' ? '' : `&path=${encodeURIComponent(returnPath)}`}#policy-${policyId}`;
  const items = getPolicies(language);
  const options = items.map((item) => ({
    id: item.id,
    label: `${String(item.rank).padStart(2, '0')} · ${getPolicyEditorial(item.id, language)!.short}`,
  }));
  const sections: [string, string][] = [
    ['overview', english ? 'Policy background' : '政策背景'],
    ['impact', english ? 'Potential impact' : '潜在影响'],
    ['outlook', english ? 'Outlook' : '走向预测'],
    ['progress', english ? 'Progress' : '程序进度'],
    ['timeline', english ? 'Key dates' : '关键时间'],
    ['sources', english ? 'Sources' : '原始来源'],
  ];
  const sources = record.sources.filter(
    (source) => !source.href.includes('uscardforum.com'),
  );
  const official =
    sources.find((source) => source.href.includes('2026-14439')) ?? sources[0];
  const examples = getPolicyExamples(record.id, language);
  const impactIcons = [GraduationCap, BriefcaseBusiness, Route];
  return (
    <LanguageProvider language={language}>
      <div
        className="policy-detail-page"
        data-path={p.group}
        data-policy-id={policyId}
      >
        <VisitorTracker policyId={policyId} />
        <header className="topbar product-bar">
          <a className="brand" href={home}>
            <span className="brand-mark">
              <Radar aria-hidden="true" />
            </span>
            <span>{english ? 'Stay Path Radar' : '留美路径雷达'}</span>
          </a>
          <nav
            className="nav-links"
            aria-label={english ? 'Site navigation' : '网站导航'}
          >
            <a href={`${home}#ranking`}>{english ? 'Policies' : '政策'}</a>
            <a href={`${home}#cpt-schools`}>
              {english ? 'CPT Schools' : 'CPT 学校'}
            </a>
            <a href={`/updates?lang=${language}`}>
              {english ? 'Updates' : '更新记录'}
            </a>
          </nav>
          <div className="top-actions">
            <PageLanguageSwitch
              from={returnPath}
              action={`/policies/${policyId}`}
              language={language}
              label={english ? 'Switch language' : '切换语言'}
            />
            <MobileSiteMenu current="home" language={language} />
          </div>
        </header>
        <div className="pd-shell">
          <div className="pd-breadcrumb">
            <nav aria-label={english ? 'Breadcrumb' : '面包屑'}>
              <a href={home}>{english ? 'Home' : '首页'}</a>
              <span>›</span>
              <a href={`${home}#ranking`}>{english ? 'Policies' : '政策'}</a>
              <span>›</span>
              <span>{p.short}</span>
            </nav>
            <a className="pd-back" href={back} data-home-return>
              <ArrowLeft aria-hidden="true" />
              {english ? 'Back to policies' : '返回首页，继续浏览'}
            </a>
          </div>
          <div className="pd-mobile-picker">
            <PolicyPicker id={policyId} language={language} options={options} />
          </div>
          <div className="pd-layout">
            <main className="pd-main">
              <div className="pd-eyebrow">
                <span>{p.group}</span>POLICY BRIEF
              </div>
              <div className="pd-title-row">
                <h1>
                  <GlossaryText text={p.title} />
                </h1>
                <ShareButton
                  language={language}
                  pageTitle={p.title}
                  pageDescription={p.teaser}
                  item={getPolicyShareItem(policyId, language)}
                />
              </div>
              <dl
                className="pd-status"
                aria-label={
                  english ? 'Current status and effect' : '当前状态与效力'
                }
              >
                <div>
                  <dt>{english ? 'Current status' : '当前状态'}</dt>
                  <dd>{p.status}</dd>
                </div>
                <div>
                  <dt>{english ? 'In effect?' : '是否生效'}</dt>
                  <dd data-effect={p.effectState}>{p.effectLabel}</dd>
                </div>
                <div>
                  <dt>{english ? 'Last checked' : '最后核对'}</dt>
                  <dd>
                    <time dateTime={detail.checkedOn}>{detail.checkedOn}</time> · ET
                  </dd>
                </div>
              </dl>
              <p className="pd-deck">
                <GlossaryText text={p.summary} />
              </p>
              <dl className="pd-essentials">
                <div>
                  <dt>{english ? 'Who is affected' : '相关人群'}</dt>
                  <dd>
                    <GlossaryText text={p.audience} />
                  </dd>
                </div>
                <div>
                  <dt>{english ? 'Key boundaries' : '关键边界'}</dt>
                  <dd>
                    <GlossaryText text={[p.caveat, detail.verificationNote].filter(Boolean).join(' ')} />
                  </dd>
                </div>
                <div>
                  <dt>{english ? 'Next to watch' : '下一步关注'}</dt>
                  <dd>
                    {record.next[0].estimate &&
                      (english ? 'Estimated · ' : '预计 · ')}
                    {record.next[0].date} ·{' '}
                    <GlossaryText text={record.next[0].text} />
                  </dd>
                </div>
              </dl>
              <section id="overview" className="pd-overview pd-section">
                <h2>{english ? 'Policy background' : '政策背景'}</h2>
                <p>
                  <GlossaryText text={p.background} />
                </p>
              </section>
              <section id="impact" className="pd-section">
                <div className="pd-section-heading">
                  <h2>{english ? 'Potential impact' : '潜在影响'}</h2>
                  <span>01 / IMPACT</span>
                </div>
                <div className="pd-answer">
                  <span className="pd-answer-label">
                    <Route aria-hidden="true" />
                    {english ? 'OUR TAKE · ANALYSIS' : '核心判断 · 本站分析'}
                  </span>
                  <h2>
                    <GlossaryText text={p.headline} />
                  </h2>
                  <p>
                    <GlossaryText text={p.analysis} />
                  </p>
                </div>
                {p.impacts.map(([title, text], i) => {
                  const Icon = impactIcons[i % impactIcons.length];
                  return (
                    <article className="pd-impact" key={title}>
                      <span className="pd-impact-icon">
                        <Icon aria-hidden="true" />
                      </span>
                      <div>
                        <h3>
                          <GlossaryText text={title} />
                        </h3>
                        <p>
                          <GlossaryText text={text} />
                        </p>
                        {examples[i]?.map((example, index) => (
                          <div className="pd-example" key={example}>
                            <strong>
                              {examples[i].length > 1
                                ? english
                                  ? `Example ${index + 1} · Hypothetical`
                                  : `情况 ${index + 1} · 举个例子`
                                : english
                                  ? 'For example · Hypothetical'
                                  : '举个例子 · 假设情形'}
                            </strong>
                            <p>
                              <GlossaryText text={example} />
                            </p>
                          </div>
                        ))}
                        {policyId === 'duration-status' && i === 2 && (
                          <p className="pd-example-source">
                            <a
                              href="https://oiss.rice.edu/dhs-final-rule-elimination-duration-status-new-academic-mobility-restrictions"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {english
                                ? 'Source: Rice explanation of master’s OPT and degree restrictions ↗'
                                : '依据：Rice 对硕士 OPT 与学位限制的解释 ↗'}
                            </a>
                          </p>
                        )}
                      </div>
                    </article>
                  );
                })}
                {p.schoolLink && (
                  <a className="pd-school-link" href={`${home}#cpt-schools`}>
                    <div>
                      <strong>
                        {english
                          ? 'Check how your school is applying the guidance'
                          : '查你的学校，具体怎么执行'}
                      </strong>
                      <p>
                        {english
                          ? 'Review the program, authorization type and dates.'
                          : '查看学校、院系与项目记录，核对授权类型和日期。'}
                      </p>
                    </div>
                    <ArrowRight aria-hidden="true" />
                  </a>
                )}
              </section>
              <section id="outlook" className="pd-section">
                <div className="pd-section-heading">
                  <h2>{english ? 'Outlook' : '走向预测'}</h2>
                  <span>02 / OUTLOOK</span>
                </div>
                <p className="pd-outlook">
                  <GlossaryText text={p.outlook} />
                </p>
                <PolicyScenarios
                  key={policyId}
                  editorial={p}
                  language={language}
                />
                <p className="pd-analysis-note">
                  {english
                    ? 'These scenarios are our analysis, not probability rankings. We revise them as evidence changes.'
                    : '情景为本站推演，不代表概率排序；随新文本与执行证据更新。'}
                </p>
                <details className="pd-scope">
                  <summary>
                    {english
                      ? 'Which boundaries could change this analysis?'
                      : '哪些边界会改变上面的判断？'}
                  </summary>
                  <dl>
                    {p.scope.map(([label, text]) => (
                      <div key={label}>
                        <dt>{label}</dt>
                        <dd>
                          <GlossaryText text={text} />
                        </dd>
                      </div>
                    ))}
                  </dl>
                </details>
              </section>
              <section id="progress" className="pd-section">
                <div className="pd-section-heading">
                  <h2>{english ? 'Progress' : '程序进度'}</h2>
                  <span>03 / {process.name}</span>
                </div>
                <PolicyProgress
                  key={policyId}
                  track={process}
                  language={language}
                />
              </section>
              <section id="timeline" className="pd-section">
                <div className="pd-section-heading">
                  <h2>{english ? 'Key dates' : '关键时间'}</h2>
                  <span>04 / TIMELINE</span>
                </div>
                <ol className="pd-timeline">
                  {record.milestones.map((event) => (
                    <li key={event.date + event.text}>
                      <time>{event.date}</time>
                      <p>
                        <GlossaryText text={event.text} />
                      </p>
                    </li>
                  ))}
                </ol>
              </section>
              <section id="sources" className="pd-section">
                <div className="pd-section-heading">
                  <h2>{english ? 'Sources' : '原始来源'}</h2>
                  <span>05 / SOURCES</span>
                </div>
                {sources.map((source) => (
                  <div className="pd-source" key={source.href}>
                    <FileText aria-hidden="true" />
                    <div>
                      <a
                        href={source.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {source.label}
                        <ArrowUpRight aria-hidden="true" />
                      </a>
                      <small>{new URL(source.href).hostname}</small>
                    </div>
                  </div>
                ))}
              </section>
              <section className="pd-section">
                <div className="pd-section-heading">
                  <h2>{english ? 'Related' : '相关'}</h2>
                  <span>RELATED</span>
                </div>
                <div className="pd-related">
                  {p.related.map((id) => {
                    const related = getPolicyEditorial(id, language)!;
                    return (
                      <a href={policyHref(id, language)} key={id}>
                        <strong>
                          {related.title}
                          <ArrowUpRight aria-hidden="true" />
                        </strong>
                        <p>{related.teaser}</p>
                      </a>
                    );
                  })}
                </div>
              </section>
            </main>
            <aside className="pd-aside">
              <PolicyPicker
                id={policyId}
                language={language}
                options={options}
              />
              <span className="pd-aside-label">
                {english ? 'ON THIS PAGE' : '本页内容'}
              </span>
              <PolicyDirectory sections={sections} language={language} />
              <div className="pd-dossier">
                <span className="pd-aside-label">
                  {english ? 'POLICY RECORD' : '政策档案'}
                </span>
                <dl>
                  <div>
                    <dt>{english ? 'Agency' : '主管机构'}</dt>
                    <dd>
                      <GlossaryText text={p.agency} />
                    </dd>
                  </div>
                  <div>
                    <dt>{english ? 'Document identifier' : '文件编号'}</dt>
                    <dd>{p.rin}</dd>
                  </div>
                  <div>
                    <dt>{english ? 'Related paths' : '相关路径'}</dt>
                    <dd>
                      <GlossaryText text={record.route.join(' · ')} />
                    </dd>
                  </div>
                </dl>
                <a
                  href={official.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pd-official"
                >
                  {english ? 'Read original document' : '查看原始文件'}
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </aside>
          </div>
          <footer className="pd-footer">
            <div>
              <strong>{english ? 'Stay Path Radar' : '留美路径雷达'}</strong>
              <p>
                {english
                  ? 'Track policy, understand the impact, revisit the outlook.'
                  : '追踪政策进展，分析路径影响，随新证据更新判断。'}
              </p>
            </div>
            <a href={`${home}#ranking`}>
              {english ? 'Explore all 10 policies' : '查看全部 10 项政策'}
              <ArrowRight aria-hidden="true" />
            </a>
          </footer>
        </div>
      </div>
    </LanguageProvider>
  );
}
