export type ProcessKind = 'federal-rulemaking' | 'administrative-guidance';

export type LitigationMarker = {
  date: string;
  label: string;
  afterStage: number;
  progress: number;
  status: 'filed' | 'upcoming';
  align: 'left' | 'right';
  lane: 'base' | 'raised';
};

export type ProcessTrack = {
  kind: ProcessKind;
  name: string;
  meaning: string;
  detail: string;
  currentSummary: string;
  currentStage: number;
  stages: readonly string[];
  litigation: LitigationMarker[];
};

import type { Language } from './language';

const federalRulemakingStages = [
  '拟稿／议程',
  'OIRA 审查',
  'NPRM 发布',
  '公众评论',
  '最终规则',
  '生效',
] as const;

const administrativeGuidanceStages = [
  '风险通知',
  '口径细化',
  '学校执行',
  '执法观察',
  '后续指引',
] as const;

const federalMeaning = '行政机关修改具有法律约束力的联邦法规时，通常先拟稿并接受 OIRA 发布前审查，再发布 NPRM 征求公众意见；回应意见后才能发布最终规则，并在指定日期生效。诉讼属于规则发布后的并行司法审查，会影响规则能否或何时生效，但不是行政流程本身的一段。';

const guidanceMeaning = 'SEVP／ICE 通过 Broadcast、FAQ 等材料解释现行规则，由学校和 DSO 直接落实。它不修改 CFR，因此通常没有 NPRM、公众评论和最终规则这些步骤；执行可以很快，但法律层级低于正式法规。';

const processTracks: Record<string, ProcessTrack> = {
  'opt-fee': {
    kind: 'federal-rulemaking',
    name: '联邦规则制定流程',
    meaning: federalMeaning,
    detail: 'ICE 的费用提案目前处于 OIRA 发布前审查。审查结束后才会公开 NPRM 正文和金额。',
    currentSummary: '正文与金额尚未公开',
    currentStage: 1,
    stages: federalRulemakingStages,
    litigation: [],
  },
  'h1b-fee': {
    kind: 'federal-rulemaking',
    name: '联邦规则制定流程',
    meaning: federalMeaning,
    detail: 'NPRM 已发布，目前在公众评论阶段。DHS 审阅意见后才能发布最终规则。',
    currentSummary: '正式提案开放评论',
    currentStage: 3,
    stages: federalRulemakingStages,
    litigation: [],
  },
  'h1b-weighted-selection': {
    kind: 'federal-rulemaking',
    name: '联邦规则制定流程',
    meaning: federalMeaning,
    detail: 'DHS 已完成 NPRM、公众评论和最终规则阶段。规则自 2026-02-27 生效，并从 FY2027 H-1B 注册季开始使用工资等级加权选择。',
    currentSummary: '最终规则已生效并开始执行',
    currentStage: 5,
    stages: federalRulemakingStages,
    litigation: [],
  },
  'duration-status': {
    kind: 'federal-rulemaking',
    name: '联邦规则制定流程',
    meaning: federalMeaning,
    detail: 'DHS 已走完 NPRM、公众评论和最终规则。法院于 9 月 3 日举行禁令听证、听取双方陈述，并将申请留待裁定；这表示法官没有当庭作出决定，将继续审议并可能另行发布书面命令。9 月 15 日仍是未被暂缓或禁止时的计划生效日。',
    currentSummary: '听证已举行；禁令申请留待裁定',
    currentStage: 4,
    stages: federalRulemakingStages,
    litigation: [
      { date: '8·18', label: '提起诉讼', afterStage: 4, progress: 53, status: 'filed', align: 'left', lane: 'base' },
      { date: '9·02', label: '拟议反对意见', afterStage: 4, progress: 70, status: 'filed', align: 'left', lane: 'raised' },
      { date: '9·03', label: '听证后待裁定', afterStage: 4, progress: 80, status: 'filed', align: 'right', lane: 'base' },
    ],
  },
  'cpt-guidance': {
    kind: 'administrative-guidance',
    name: 'SEVP 行政指引流程',
    meaning: guidanceMeaning,
    detail: 'SEVP 先发布合规风险通知，再细化 CPT 口径；学校和 DSO 已开始按新口径执行。',
    currentSummary: '学校已按新口径执行',
    currentStage: 2,
    stages: administrativeGuidanceStages,
    litigation: [],
  },
  'prevailing-wage': {
    kind: 'federal-rulemaking',
    name: '联邦规则制定流程',
    meaning: federalMeaning,
    detail: 'DOL 已发布 NPRM，公众评论期于 2026 年 5 月 26 日结束。目前仍处于提案阶段，DOL 需要审阅意见后才能发布最终规则。',
    currentSummary: '公众评论期已结束，等待后续规则',
    currentStage: 3,
    stages: federalRulemakingStages,
    litigation: [],
  },
  'h1b-reform': {
    kind: 'federal-rulemaking',
    name: '联邦规则制定流程',
    meaning: federalMeaning,
    detail: '拟议规则处于 OIRA 发布前审查，正文尚未公开。',
    currentSummary: 'OMB 发布前审查',
    currentStage: 1,
    stages: federalRulemakingStages,
    litigation: [],
  },
  'grace-period': {
    kind: 'federal-rulemaking',
    name: '联邦规则制定流程',
    meaning: federalMeaning,
    detail: 'OIRA 已完成发布前审查，目前等待 DHS 在 Federal Register 发布 NPRM。',
    currentSummary: 'OMB 已放行，等待正文',
    currentStage: 2,
    stages: federalRulemakingStages,
    litigation: [],
  },
  'ead-discretion': {
    kind: 'federal-rulemaking',
    name: '联邦规则制定流程',
    meaning: federalMeaning,
    detail: 'DHS 已发布 NPRM，公众评论期于 2026 年 8 月 4 日结束。目前尚无最终规则或生效日期。',
    currentSummary: '公众评论期已结束，尚未形成最终规则',
    currentStage: 3,
    stages: federalRulemakingStages,
    litigation: [],
  },
  'h4-ead': {
    kind: 'federal-rulemaking',
    name: '联邦规则制定流程',
    meaning: federalMeaning,
    detail: '目前只是统一议程中的长期项目，尚未进入 OIRA 审查或 NPRM 阶段。',
    currentSummary: '长期议程，暂无日期',
    currentStage: 0,
    stages: federalRulemakingStages,
    litigation: [],
  },
};

const federalRulemakingStagesEnglish = [
  'Draft / agenda',
  'OIRA review',
  'NPRM published',
  'Public comment',
  'Final rule',
  'Effective',
] as const;

const administrativeGuidanceStagesEnglish = [
  'Risk notice',
  'Standard clarified',
  'School implementation',
  'Enforcement monitoring',
  'Further guidance',
] as const;

const federalMeaningEnglish = 'When a federal agency changes legally binding regulations, it generally drafts the rule, completes OIRA prepublication review, publishes an NPRM for public comment, responds to comments, and then issues a final rule with an effective date. Litigation is a parallel judicial review that can change whether or when a rule takes effect; it is not a stage of the agency process.';
const guidanceMeaningEnglish = 'SEVP/ICE uses Broadcast messages, FAQs, and similar materials to explain existing rules, and schools and DSOs apply that guidance directly. Because guidance does not amend the CFR, it generally has no NPRM, public-comment, or final-rule stages. Implementation can be rapid, but guidance has less legal force than a regulation.';

const englishProcessTracks: Record<string, Pick<ProcessTrack, 'name' | 'meaning' | 'detail' | 'currentSummary' | 'stages' | 'litigation'>> = {
  'opt-fee': {
    name: 'Federal rulemaking',
    meaning: federalMeaningEnglish,
    detail: 'ICE’s fee proposal is in OIRA prepublication review. The NPRM text and any fee amount can become public only after that review.',
    currentSummary: 'Rule text and fee amount are not public',
    stages: federalRulemakingStagesEnglish,
    litigation: [],
  },
  'h1b-fee': {
    name: 'Federal rulemaking',
    meaning: federalMeaningEnglish,
    detail: 'The NPRM is public and the comment period is open. DHS must review the comments before it can issue a final rule.',
    currentSummary: 'Published proposal open for comment',
    stages: federalRulemakingStagesEnglish,
    litigation: [],
  },
  'h1b-weighted-selection': {
    name: 'Federal rulemaking',
    meaning: federalMeaningEnglish,
    detail: 'DHS completed the NPRM, public-comment, and final-rule stages. The rule took effect on February 27, 2026 and applies wage-level-weighted selection beginning with the FY 2027 H-1B registration season.',
    currentSummary: 'Final rule in effect and implemented',
    stages: federalRulemakingStagesEnglish,
    litigation: [],
  },
  'duration-status': {
    name: 'Federal rulemaking',
    meaning: federalMeaningEnglish,
    detail: 'DHS completed the NPRM, comment, and final-rule stages. The court held the injunction hearing on September 3, heard arguments, and took the matter under advisement. That means the judge did not rule from the bench and will continue considering the request, potentially through a later written order. September 15 remains the scheduled effective date unless the rule is stayed or enjoined.',
    currentSummary: 'Hearing held; matter under advisement',
    stages: federalRulemakingStagesEnglish,
    litigation: [
      { date: '8·18', label: 'Lawsuit filed', afterStage: 4, progress: 53, status: 'filed', align: 'left', lane: 'base' },
      { date: '9·02', label: 'Proposed opposition', afterStage: 4, progress: 70, status: 'filed', align: 'left', lane: 'raised' },
      { date: '9·03', label: 'Hearing held; decision pending', afterStage: 4, progress: 80, status: 'filed', align: 'right', lane: 'base' },
    ],
  },
  'cpt-guidance': {
    name: 'SEVP administrative guidance',
    meaning: guidanceMeaningEnglish,
    detail: 'SEVP first issued a compliance-risk notice and then narrowed the CPT standard. Schools and DSOs are already applying that interpretation.',
    currentSummary: 'Schools are applying the new standard',
    stages: administrativeGuidanceStagesEnglish,
    litigation: [],
  },
  'prevailing-wage': {
    name: 'Federal rulemaking',
    meaning: federalMeaningEnglish,
    detail: 'DOL published an NPRM and the public comment period closed on May 26, 2026. The initiative remains a proposal while DOL reviews comments.',
    currentSummary: 'Comment period closed; awaiting further rulemaking',
    stages: federalRulemakingStagesEnglish,
    litigation: [],
  },
  'h1b-reform': {
    name: 'Federal rulemaking',
    meaning: federalMeaningEnglish,
    detail: 'The proposed rule is in OIRA prepublication review. Its text is not yet public.',
    currentSummary: 'OMB prepublication review',
    stages: federalRulemakingStagesEnglish,
    litigation: [],
  },
  'grace-period': {
    name: 'Federal rulemaking',
    meaning: federalMeaningEnglish,
    detail: 'OIRA has completed prepublication review. DHS can now publish the NPRM in the Federal Register.',
    currentSummary: 'OMB cleared the proposal; awaiting public text',
    stages: federalRulemakingStagesEnglish,
    litigation: [],
  },
  'ead-discretion': {
    name: 'Federal rulemaking',
    meaning: federalMeaningEnglish,
    detail: 'DHS published the NPRM and the public comment period closed on August 4, 2026. There is no final rule or effective date.',
    currentSummary: 'Comment period closed; no final rule',
    stages: federalRulemakingStagesEnglish,
    litigation: [],
  },
  'h4-ead': {
    name: 'Federal rulemaking',
    meaning: federalMeaningEnglish,
    detail: 'The initiative is only a long-term item in the Unified Agenda. It has not entered OIRA review or the NPRM stage.',
    currentSummary: 'Long-term agenda item with no date',
    stages: federalRulemakingStagesEnglish,
    litigation: [],
  },
};

export function getProcessTrack(policyId: string, language: Language = 'zh'): ProcessTrack {
  const track = processTracks[policyId];
  if (!track) throw new Error(`Unknown policy process: ${policyId}`);
  if (language === 'en') return { ...track, ...englishProcessTracks[policyId] };
  return track;
}
