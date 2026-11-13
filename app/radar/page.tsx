import type { Metadata } from 'next';
import { resolveRequestLanguage } from '../language-server';
import { SITE_UPDATED_ON } from '../policy-freshness';
import { languageAlternates } from '../policy-links';
import { buildPersonalPolicies } from './personal-radar-data';
import PersonalRadar from './personal-radar';
import './personal-radar.css';

// Built once per deploy (see app/static-pages.ts). The browser reads the
// profile from the address, loads live votes and applies today's date.
export const dynamic = 'force-dynamic';
type PageProps = { searchParams?: Promise<{ lang?: string }> };

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const language = await resolveRequestLanguage((await searchParams)?.lang);
  return {
    title:
      language === 'zh'
        ? '我的雷达｜留美路径雷达'
        : 'My radar | Stay Path Radar',
    description:
      language === 'zh'
        ? '根据当前身份和下一步计划，查看与你有关的政策、影响程度及预计时间。'
        : 'Explore policy changes, impact and estimated timing along your current status and next steps.',
    // Shared radars carry ?stage=…&goal=…; they are all one page to Google.
    alternates: languageAlternates('/radar', language),
  };
}

export default async function Page({ searchParams }: PageProps) {
  const language = await resolveRequestLanguage((await searchParams)?.lang);
  const today = new Date().toISOString().slice(0, 10);
  return (
    <PersonalRadar
      language={language}
      entries={buildPersonalPolicies(language, undefined, today)}
      checkedOn={SITE_UPDATED_ON}
    />
  );
}
