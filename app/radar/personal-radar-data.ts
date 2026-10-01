import type { Language } from '../language.ts';
import { getPolicies } from '../policy-data.ts';
import type { PolicyId } from '../policy-ids.ts';
import { policyHref } from '../policy-links.ts';
import { RADAR_PLACEMENT } from './radar-model.ts';
import {
  addMonths,
  chooseImpact,
  forecastPlacement,
  type RadarPolicy,
} from './personal-radar-model.ts';

// Editorial AI estimates are separate from votes. Update deliberately when
// underlying policy changes; never slide the baseline forward on page visits.
export const ESTIMATE_BASELINE = '2026-09-30';
type Estimate = {
  score: number;
  why: Record<Language, string>;
  months?: [number, number];
};
export const personalEstimates: Record<PolicyId, Estimate> = {
  'opt-fee': {
    score: 9,
    months: [6, 18],
    why: {
      zh: '若最终设立高额 OPT 费用，可能严重限制工作授权路径；金额、缴费方与豁免尚未公布，不能把报道中的金额视作已确定费用。',
      en: 'A substantial final OPT fee could severely restrict this work-authorization route. Amount, payer and exemptions remain unpublished; reported amounts are not established fees.',
    },
  },
  'h1b-fee': {
    score: 9,
    months: [3, 12],
    why: {
      zh: '提案中的大额附加费可能使受名额限制岗位的担保难以承担；免名额申请与最终豁免需分别核对。',
      en: 'The proposed surcharge could make sponsorship unaffordable for covered cap-subject jobs. Cap-exempt petitions and final exemptions require separate checks.',
    },
  },
  'duration-status': {
    score: 8,
    months: [6, 24],
    why: {
      zh: '固定期限与延期要求可能明显改变学业和身份衔接；法院目前暂缓执行，分数描述规则若适用的后果，不代表恢复实施的概率。',
      en: 'Fixed periods and extension requirements could substantially affect study and status transitions. The rule is stayed; this score describes conditional consequences, not the probability of implementation.',
    },
  },
  'h1b-weighted-selection': {
    score: 8,
    why: {
      zh: '工资等级改变抽签权重，可能明显影响低工资等级岗位的遴选机会；权重不等于个人中签率。',
      en: 'Wage levels change selection weights and may substantially affect lower-wage jobs. Weights are not individual selection probabilities.',
    },
  },
  'cpt-guidance': {
    score: 9,
    why: {
      zh: '必修实践与校企协议要求可能使部分原有实习无法取得 CPT；具体适用取决于课程设置及学校通知。',
      en: 'Required-practicum and school-employer agreement conditions may remove CPT access for some internships. Applicability depends on the curriculum and school instructions.',
    },
  },
  'prevailing-wage': {
    score: 8,
    months: [3, 12],
    why: {
      zh: '较高的法定工资下限可能明显增加担保成本，影响部分岗位的可行性；具体取决于地区、职业和工资。',
      en: 'Higher required wage floors could materially raise sponsorship costs and affect some jobs, depending on location, occupation and pay.',
    },
  },
  'h1b-reform': {
    score: 7,
    months: [9, 24],
    why: {
      zh: '免名额资格、第三方派驻及违规雇主审查可能收紧；提案正文未公开，资格边界仍不确定。',
      en: 'Cap exemptions, third-party placements and noncompliant employers may face tighter scrutiny. Eligibility boundaries remain uncertain before publication of the proposal.',
    },
  },
  'grace-period': {
    score: 9,
    months: [6, 18],
    why: {
      zh: '若取消该宽限期，受影响人员在工作结束后的身份衔接空间将明显缩小；并非所有人都必须立即离境，也不涉及 F-1 毕业宽限期。',
      en: 'Removing the grace period could sharply reduce transition time after covered employment ends. It does not mean everyone must leave immediately and does not cover the F-1 graduation grace period.',
    },
  },
  'ead-discretion': {
    score: 8,
    months: [3, 12],
    why: {
      zh: '触发提案所列刑事记录条件的人可能被拒工作许可，后果较重；未触发条件的人不能照搬这个分数。',
      en: 'People meeting the proposed criminal-record conditions could lose access to work authorization. This score does not apply automatically to people outside those conditions.',
    },
  },
  'h4-ead': {
    score: 9,
    months: [18, 36],
    why: {
      zh: '若撤销该类别，受覆盖的 H-4 配偶可能失去这条工作授权路径；不等于取消主申请人的 H-1B 身份。',
      en: 'Revoking the category could remove this work-authorization route for covered H-4 spouses. It would not itself cancel the principal’s H-1B status.',
    },
  },
  'perm-modernization': {
    score: 7,
    months: [9, 24],
    why: {
      zh: '招聘、裁员保护和记录留存要求可能增加 PERM 办理负担；尚不足以推断取消整个绿卡路径。',
      en: 'Recruitment, layoff-protection and recordkeeping changes could substantially burden PERM sponsorship, without supporting a claim that the entire green-card route would disappear.',
    },
  },
  'h1b-program-integrity': {
    score: 6,
    why: {
      zh: '行政命令增加裁员与合规核查，但未规定裁员自动导致拒签或身份失效；部门如何落实仍需跟踪。',
      en: 'The order adds layoff and compliance checks without prescribing automatic denial or status loss. Agency implementation still needs tracking.',
    },
  },
};

const history = {
  zh: '弱参考：2015 年 12 月提案至 2016 年 11 月最终规则约 11 个月；2023 年 10 月提案至 2024 年 12 月最终规则约 14 个月。结合本项程序阶段给出宽区间；并非同类规则的统计预测。可能提前、延期、撤回或长期不生效。',
  en: 'Weak analogies: one DHS rule took about 11 months from its December 2015 proposal to its November 2016 final rule; another took about 14 months from October 2023 to December 2024. This broad window considers procedural stage, not a statistical forecast of comparable rules. Action may come earlier, be delayed, withdrawn, or never take effect.',
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
    const inForce = policy.effectState !== 'not-in-effect';
    const dates: [string, string] | null =
      !inForce && estimate.months
        ? [
            addMonths(ESTIMATE_BASELINE, estimate.months[0]),
            addMonths(ESTIMATE_BASELINE, estimate.months[1]),
          ]
        : null;
    const placement = dates
      ? forecastPlacement(dates, today)
      : { ring: 0 as const, expired: false };
    const litigation = policy.id === 'duration-status';
    const longTerm = policy.id === 'h4-ead';
    const timeReason = litigation
      ? zh
        ? '法院未给恢复实施日期。6–24 个月仅是“后续诉讼最终允许实施”条件下的 AI 规划情景，不是法院时限或生效概率预测；紧急裁定可能更早，也可能长期不实施。'
        : 'The court has set no restart date. Six to twenty-four months is only an AI planning scenario conditional on litigation eventually allowing implementation, not a court deadline or probability forecast. Emergency action could come sooner; implementation might never resume.'
      : `${longTerm ? (zh ? '长期议程尚无提案日期，仍需后续规则制定；18–36 个月是条件性规划窗口。' : 'The long-term agenda has no proposal date and still requires rulemaking; eighteen to thirty-six months is a conditional planning window. ') : ''}${history[language]}`;
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
            ? '命令已签署 · 跟踪落实'
            : 'Order issued · implementation ongoing'
          : zh
            ? '已在执行'
            : 'In force'
        : placement.expired
          ? zh
            ? '估计区间已过 · 待复核'
            : 'Estimate elapsed · review needed'
          : `${zh ? (litigation ? 'AI 情景' : 'AI 预估') : 'AI estimate'} · ${dates?.[0].slice(0, 7)} – ${dates?.[1].slice(0, 7)}`,
      timeReason: inForce ? policy.caveat : timeReason,
      timeSources:
        inForce || litigation
          ? policy.sources.filter((s) => !s.href.includes('uscardforum.com'))
          : historySources.map((s) => ({ label: s[language], href: s.href })),
      estimateBaseline: dates ? ESTIMATE_BASELINE : null,
      estimateDates: dates,
      timeConfidence: dates
        ? litigation || longTerm
          ? 'very-low'
          : 'low'
        : null,
      estimateExpired: placement.expired,
    };
  });
}
