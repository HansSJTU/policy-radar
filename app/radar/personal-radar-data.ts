import type { Language } from '../language.ts';
import { getPolicies } from '../policy-data.ts';
import type { PolicyId } from '../policy-ids.ts';
import { policyHref } from '../policy-links.ts';
import { RADAR_PLACEMENT } from './radar-model.ts';
import {
  addMonths,
  chooseImpact,
  forecastPlacement,
  monthsUntil,
  type RadarPolicy,
} from './personal-radar-model.ts';

// Editorial AI estimates are separate from votes. Update deliberately when
// underlying policy changes; never slide the baseline forward on page visits.
export const ESTIMATE_BASELINE = '2026-09-30';
type Estimate = {
  score: number;
  why: Record<Language, string>;
  months?: [number, number];
  baseline?: string;
};
export const personalEstimates: Record<PolicyId, Estimate> = {
  'opt-fee': {
    score: 9,
    months: [6, 18],
    why: {
      zh: '10·08 提案拟收首次 7 万美元、后续 3 万美元，可能严重限制 OPT 路径；学校先缴费但可转嫁经济成本，最终条文与生效日仍未确定。',
      en: 'The October 8 proposal would charge $70,000 initially and $30,000 subsequently, potentially severely restricting OPT. Schools would remit payment but may pass through costs; final terms and an effective date remain undetermined.',
    },
  },
  'h1b-fee': {
    score: 9,
    months: [3, 12],
    why: {
      zh: '提案里的大额附加费会让很多要抽签的岗位担保不起；免抽签的岗位不收这笔费。',
      en: 'The proposed surcharge could make sponsorship unaffordable for many lottery jobs; cap-exempt jobs don’t pay it.',
    },
  },
  'duration-status': {
    score: 8,
    months: [6, 24],
    why: {
      zh: '固定停留期限和延期手续会大大改变学业和身份安排；法院目前已暂缓执行，分数描述的是新规一旦执行的影响。',
      en: 'Fixed stays and extension filings would substantially change study and status plans. The rule is paused by a court; the score describes the impact if it were enforced.',
    },
  },
  'h1b-weighted-selection': {
    score: 8,
    why: {
      zh: '工资等级决定进池次数，低工资等级岗位的中签机会明显变小。',
      en: 'Wage level sets how many lottery entries you get, so lower-wage jobs have noticeably worse odds.',
    },
  },
  'cpt-guidance': {
    score: 9,
    why: {
      zh: '“专业必修”和校企协议的要求，让很多原本能做的实习拿不到 CPT；具体看课程设置和学校通知。',
      en: 'The “required of every student” rule and the school-employer agreement shut many internships out of CPT; it depends on the curriculum and the school’s notice.',
    },
  },
  'prevailing-wage': {
    score: 8,
    months: [3, 12],
    why: {
      zh: '更高的最低工资要求会明显增加担保成本，有些岗位可能因此不再担保；具体看地区、职业和工资。',
      en: 'Higher minimum wages would raise sponsorship costs a lot, and some jobs may stop sponsoring; it depends on location, occupation and pay.',
    },
  },
  'h1b-reform': {
    score: 7,
    months: [9, 24],
    why: {
      zh: '免抽签资格、外派岗位和违规雇主的审查都可能收紧；具体标准等提案公开。',
      en: 'Cap exemptions, client-site jobs and employers with violations may all face tighter review; exact standards will come with the proposal.',
    },
  },
  'grace-period': {
    score: 9,
    months: [6, 18],
    why: {
      zh: '取消宽限期后，工作一结束就几乎没有时间转身份或找新工作；有其他合法身份的人不受影响，F-1 毕业宽限期也不变。',
      en: 'Without the grace period there would be almost no time to change status or find a new job after a job ends; people with another lawful status are unaffected, and the F-1 post-graduation grace period stays.',
    },
  },
  'ead-auto-extension': {
    score: 8,
    why: {
      zh: '续期还没批下来、旧卡又到期时，就得停工；具体看递交日期、EAD 类别和有没有别的工作许可。H-4 申请资格和 STEM OPT 的 180 天延期不受影响。',
      en: 'If the old card expires before the renewal is approved, you have to stop working; it depends on filing date, EAD category and any other work authorization. H-4 eligibility and the STEM OPT 180-day extension are unaffected.',
    },
  },
  'nonimmigrant-deference': {
    score: 5,
    months: [6, 18],
    baseline: '2026-10-13',
    why: {
      zh: '续期不再参照上次的批准后，I-129 要交的证据和审查都会增加；主要是程序上更麻烦。',
      en: 'Without deference to past approvals, I-129 renewals need more evidence and face closer review; the main effect is more paperwork and process.',
    },
  },
  'ead-discretion': {
    score: 8,
    months: [3, 12],
    why: {
      zh: '有提案所列刑事记录的人，工作许可可能被拒，影响很重；没有这类记录的人不受影响。',
      en: 'People with the criminal records listed in the proposal could be denied work permits, a serious hit; people without such records are unaffected.',
    },
  },
  'h4-ead': {
    score: 9,
    months: [18, 36],
    why: {
      zh: '如果撤销，这些 H-4 配偶就不能再凭这条规定拿工作许可；持 H-1B 的一方不受影响。',
      en: 'If repealed, these H-4 spouses could no longer get work permits this way; the H-1B holder is unaffected.',
    },
  },
  'perm-modernization': {
    score: 7,
    months: [9, 24],
    why: {
      zh: '招聘、裁员保护和留档要求会让 PERM 更难办；绿卡这条路仍然在。',
      en: 'Recruiting, layoff-protection and recordkeeping changes would make PERM much harder; the green-card route itself remains.',
    },
  },
  'h1b-program-integrity': {
    score: 6,
    why: {
      zh: '行政命令让裁员和合规成为审查内容，但没说有裁员就拒；具体看各部门怎么执行。',
      en: 'The order adds layoff and compliance checks but does not say layoffs mean denial; it depends on how agencies carry it out.',
    },
  },
};

const history = {
  zh: '参考：有一项 DHS 规则从 2015 年 12 月提案到 2016 年 11 月定稿用了约 11 个月，另一项从 2023 年 10 月到 2024 年 12 月用了约 14 个月。我们按本项走到哪一步给出一个较宽的区间；实际可能更早、更晚、被撤回，或一直不生效。',
  en: 'For reference: one DHS rule took about 11 months from its December 2015 proposal to its November 2016 final rule; another took about 14 months from October 2023 to December 2024. We give a wide window based on how far this rule has gotten; it could come sooner or later, be withdrawn or never take effect.',
};
const historySources = [
  {
    href: 'https://www.federalregister.gov/d/2016-27540',
    zh: '2016 DHS 历史规则',
    en: '2016 DHS rulemaking precedent',
  },
  {
    href: 'https://www.federalregister.gov/d/2024-29354',
    zh: '2024 DHS 历史规则',
    en: '2024 DHS rulemaking precedent',
  },
];

export function buildPersonalPolicies(
  language: Language,
  ratings: Record<string, { average: number; count: number }> | null,
  today: string,
): RadarPolicy[] {
  const zh = language === 'zh';
  return getPolicies(language).map((policy) => {
    const estimate = personalEstimates[policy.id];
    const estimateBaseline = estimate.baseline ?? ESTIMATE_BASELINE;
    const inForce = policy.effectState !== 'not-in-effect';
    const dates: [string, string] | null =
      !inForce && estimate.months
        ? [
            addMonths(estimateBaseline, estimate.months[0]),
            addMonths(estimateBaseline, estimate.months[1]),
          ]
        : null;
    const placement = dates
      ? forecastPlacement(dates, today)
      : { ring: 0 as const, expired: false };
    const litigation = policy.id === 'duration-status';
    const longTerm = policy.id === 'h4-ead';
    const timeReason = litigation
      ? zh
        ? '法院没有给恢复执行的日期。6–24 个月是假设官司最终允许执行时的 AI 估计；紧急裁定可能更早，也可能一直不执行。'
        : 'The court has set no restart date. Six to twenty-four months is an AI estimate assuming the courts eventually allow the rule; an emergency ruling could come sooner, or it might never be enforced.'
      : `${longTerm ? (zh ? '还在长期计划里，没有提案日期，后面还要走完整规则程序；18–36 个月是假设推进时的估计。' : 'It is on the long-term plan with no proposal date and still needs full rulemaking; eighteen to thirty-six months is an estimate if it moves forward. ') : ''}${history[language]}`;
    return {
      id: policy.id,
      number: policy.rank,
      title: policy.short,
      status: policy.status,
      effect: policy.effectLabel,
      summary: policy.summary,
      audience: policy.audience,
      caveat: policy.caveat,
      href: policyHref(policy.id, language),
      sources: policy.sources,
      sector: RADAR_PLACEMENT[policy.id].sector,
      inForce,
      ring: placement.ring,
      ...chooseImpact(
        ratings === null ? null : ratings[policy.id],
        estimate.score,
      ),
      scoreReason: estimate.why[language],
      timing: inForce
        ? policy.effectState === 'executive-order-issued'
          ? zh
            ? '命令已签署 · 各部门落实中'
            : 'Order issued · implementation ongoing'
          : zh
            ? '已在执行'
            : 'In force'
        : placement.expired
          ? zh
            ? '估计区间已过 · 待重新估计'
            : 'Estimate elapsed · review needed'
          : `${zh ? (litigation ? 'AI 情景' : 'AI 预估') : 'AI estimate'} · ${dates?.[0].slice(0, 7)} – ${dates?.[1].slice(0, 7)}`,
      timeReason: inForce ? policy.caveat : timeReason,
      timeSources:
        inForce || litigation
          ? policy.sources.filter((s) => !s.href.includes('uscardforum.com'))
          : historySources.map((s) => ({ label: s[language], href: s.href })),
      estimateBaseline: dates ? estimateBaseline : null,
      estimateDates: dates,
      estimateMonths:
        dates && !placement.expired
          ? [monthsUntil(dates[0], today), monthsUntil(dates[1], today)]
          : null,
      timeConfidence: dates
        ? litigation || longTerm
          ? 'very-low'
          : 'low'
        : null,
      estimateExpired: placement.expired,
    };
  });
}
