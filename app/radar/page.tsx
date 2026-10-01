import type { Metadata } from 'next';
import { env } from 'cloudflare:workers';
import { resolveRequestLanguage } from '../language-server';
import { SITE_UPDATED_ON } from '../policy-freshness';
import { getGenuinePolicyImpactAggregates } from '../../db/policy-ratings';
import { buildPersonalPolicies } from './personal-radar-data';
import {
  DEFAULT_PROFILE,
  isSector,
  type RadarProfile,
} from './personal-radar-model';
import PersonalRadar from './personal-radar';
import './personal-radar.css';

export const dynamic = 'force-dynamic';
type PageProps = {
  searchParams?: Promise<{ lang?: string; stage?: string; goal?: string }>;
};

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
  };
}

export default async function Page({ searchParams }: PageProps) {
  const parameters = await searchParams;
  const language = await resolveRequestLanguage(parameters?.lang);
  const initialProfile: RadarProfile = {
    stage: isSector(parameters?.stage)
      ? parameters.stage
      : DEFAULT_PROFILE.stage,
    goal:
      parameters?.goal === 'none' || isSector(parameters?.goal)
        ? parameters.goal
        : DEFAULT_PROFILE.goal,
  };
  const ratings = await getGenuinePolicyImpactAggregates(env.DB).catch(
    () => null,
  );
  const today = new Date().toISOString().slice(0, 10);
  return (
    <PersonalRadar
      language={language}
      entries={buildPersonalPolicies(language, ratings, today)}
      checkedOn={SITE_UPDATED_ON}
      initialProfile={initialProfile}
      explicitProfile={
        isSector(parameters?.stage) ||
        parameters?.goal === 'none' ||
        isSector(parameters?.goal)
      }
      ratingsUnavailable={ratings === null}
    />
  );
}
