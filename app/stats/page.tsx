import type { Metadata } from 'next';
import { ArrowLeft, BarChart3, Eye, Users } from 'lucide-react';

import { summarizeTraffic } from '@/app/analytics-model';
import { TrafficChart } from '@/app/stats/traffic-chart';
import { getTrafficSeries } from '@/db/analytics';
import type { Language } from '@/app/language';
import { GitHubProjectLink } from '@/app/github-link';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

type StatsPageProps = { searchParams?: Promise<{ lang?: string }> };

const statsCopy = {
  zh: {
    title: '访问统计｜留美路径政策雷达', description: '留美路径政策雷达最近 30 天的匿名独立访客与页面浏览量。',
    back: '返回政策雷达', public: '公开访问统计', switchLabel: '切换网站语言', hero: '最近 30 天访问趋势',
    intro: '按美东日期统计。数据从启用统计后开始累计，重新部署不会清空历史记录。', summaryAria: '最近 30 天统计摘要',
    visitors: '独立访客（日去重）', views: '页面浏览量', active: '有访问的日期', daily: '每日访问', first: '首条记录：', waiting: '等待第一条访问记录',
    legend: '图例', method: '统计口径', visitorMethod: '同一浏览器在同一自然日只计算一次。', viewMethod: '政策雷达主页每加载一次计算一次。',
    privacy: '数据库只保存按日期生成的匿名哈希，不保存 IP、姓名或邮箱，也不能跨天关联个人。', locale: 'zh-CN',
  },
  en: {
    title: 'Traffic Statistics | U.S. Stay Path Policy Radar', description: 'Anonymous unique visitors and page views for the U.S. Stay Path Policy Radar over the last 30 days.',
    back: 'Back to policy radar', public: 'Public traffic statistics', switchLabel: 'Switch site language', hero: 'Traffic over the last 30 days',
    intro: 'Dates use Eastern Time. Data accumulates from the day tracking was enabled, and a redeployment does not erase prior records.', summaryAria: 'Traffic summary for the last 30 days',
    visitors: 'Unique visitors (daily)', views: 'Page views', active: 'Days with traffic', daily: 'Daily traffic', first: 'First record: ', waiting: 'Waiting for the first visit',
    legend: 'Chart legend', method: 'Measurement method', visitorMethod: 'The same browser is counted once per calendar day.', viewMethod: 'Each load of the policy-radar home page counts as one page view.',
    privacy: 'The database stores only date-scoped anonymous hashes. It does not store IP addresses, names, or email addresses and cannot link an individual across days.', locale: 'en-US',
  },
};

async function pageLanguage(searchParams?: Promise<{ lang?: string }>): Promise<Language> {
  const parameters = await searchParams;
  return parameters?.lang === 'en' ? 'en' : 'zh';
}

export async function generateMetadata({ searchParams }: StatsPageProps): Promise<Metadata> {
  const language = await pageLanguage(searchParams);
  return { title: statsCopy[language].title, description: statsCopy[language].description };
}

export default async function StatsPage({ searchParams }: StatsPageProps) {
  const language = await pageLanguage(searchParams);
  const ui = statsCopy[language];
  const points = await getTrafficSeries(30);
  const summary = summarizeTraffic(points);
  const firstActiveDay = points.find(
    (point) => point.pageViews > 0 || point.visitors > 0,
  )?.day;

  return (
    <main className="stats-page">
      <header className="stats-page-bar">
        <form action="/" method="get">
          <button type="submit" className="stats-back"><ArrowLeft aria-hidden="true" />{ui.back}</button>
        </form>
        <div className="stats-page-actions">
          <span>{ui.public}</span>
          <GitHubProjectLink language={language} />
          <form className="language-switch" aria-label={ui.switchLabel} action="/stats" method="get">
            <button type="submit" name="lang" value="zh" className={language === 'zh' ? 'active' : ''} aria-pressed={language === 'zh'}>中</button>
            <button type="submit" name="lang" value="en" className={language === 'en' ? 'active' : ''} aria-pressed={language === 'en'}>EN</button>
          </form>
        </div>
      </header>

      <section className="stats-hero">
        <span className="section-kicker">PUBLIC ANALYTICS</span>
        <h1>{ui.hero}</h1>
        <p>{ui.intro}</p>
      </section>

      <section className="stats-summary" aria-label={ui.summaryAria}>
        <article>
          <Users aria-hidden="true" />
          <span>{ui.visitors}</span>
          <strong>{summary.visitorDays.toLocaleString(ui.locale)}</strong>
        </article>
        <article>
          <Eye aria-hidden="true" />
          <span>{ui.views}</span>
          <strong>{summary.pageViews.toLocaleString(ui.locale)}</strong>
        </article>
        <article>
          <BarChart3 aria-hidden="true" />
          <span>{ui.active}</span>
          <strong>{summary.activeDays}<small> / 30</small></strong>
        </article>
      </section>

      <section className="stats-chart-card">
        <header>
          <div>
            <h2>{ui.daily}</h2>
            <p>{firstActiveDay ? `${ui.first}${firstActiveDay}` : ui.waiting}</p>
          </div>
          <div className="stats-legend" aria-label={ui.legend}>
            <span className="visitors">{ui.visitors}</span>
            <span className="views">{ui.views}</span>
          </div>
        </header>
        <TrafficChart points={points} language={language} />
      </section>

      <section className="stats-method">
        <h2>{ui.method}</h2>
        <div>
          <p><strong>{ui.visitors}: </strong>{ui.visitorMethod}</p>
          <p><strong>{ui.views}: </strong>{ui.viewMethod}</p>
          <p><strong>{language === 'en' ? 'Privacy' : '隐私'}: </strong>{ui.privacy}</p>
        </div>
      </section>
    </main>
  );
}
