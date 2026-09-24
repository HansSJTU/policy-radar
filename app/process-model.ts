import type { PolicyContent } from '../content/policy-types.ts';
import type { Language } from './language';

// How a policy moves from idea to effect. The copy for each kind of process is
// defined once here; each policy only records where it stands and adds its own
// detail (see `process` in content/policies/*.ts).

export type ProcessKind =
  | 'federal-rulemaking'
  | 'administrative-guidance'
  | 'executive-order';

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
  // Short policy-type tag, e.g. on the home path map.
  label: string;
  name: string;
  meaning: string;
  detail: string;
  currentSummary: string;
  // Completed events, work in progress and future events are distinct.
  lastCompletedStage: number | null;
  activeStage: number | null;
  nextStage: number | null;
  waitingFor: string | null;
  stages: readonly string[];
  // One plain-language explanation per stage.
  descriptions: readonly string[];
  litigation: LitigationMarker[];
};

type ProcessKindCopy = {
  label: string;
  name: string;
  meaning: string;
  stages: readonly string[];
  descriptions: readonly string[];
};

const processKinds: Record<ProcessKind, Record<Language, ProcessKindCopy>> = {
  'federal-rulemaking': {
    zh: {
      label: '联邦法规',
      name: '联邦规则制定流程',
      meaning:
        '行政机关要改一条有法律约束力的联邦法规，通常先拟稿，交给 OIRA 做发布前审查，再发布 NPRM 征求公众意见。回应意见之后，才能发布最终规则，并在指定日期生效。诉讼是规则发布之后的司法审查。它会影响规则能不能生效、什么时候生效，但不是行政流程里的一段。',
      stages: ['拟稿／议程', 'OIRA 审查', 'NPRM 发布', '公众评论', '最终规则', '生效'],
      descriptions: [
        '机构拟定规则，或将项目列入统一议程。',
        'OIRA 在提案公开前审查规则。',
        '机构在 Federal Register 发布 NPRM，公开拟议文本。',
        '公众提交意见，机构收集并审阅意见。评论期结束不等于规则生效。',
        '机构发布最终规则，说明采纳的文本、对意见的回应和生效安排。',
        '规则到达生效日期并开始适用；如有法院暂缓或禁令，需另行核对。',
      ],
    },
    en: {
      label: 'Regulation',
      name: 'Federal rulemaking',
      meaning:
        'When a federal agency changes legally binding regulations, it generally drafts the rule, completes OIRA prepublication review, publishes an NPRM for public comment, responds to comments, and then issues a final rule with an effective date. Litigation is a parallel judicial review that can change whether or when a rule takes effect; it is not a stage of the agency process.',
      stages: [
        'Draft / agenda',
        'OIRA review',
        'NPRM published',
        'Public comment',
        'Final rule',
        'Effective',
      ],
      descriptions: [
        'The agency drafts the rule or lists it in the Unified Agenda.',
        'OIRA reviews the proposal before publication.',
        'The agency publishes the proposed text as an NPRM in the Federal Register.',
        'The public submits comments and the agency reviews them. Closing comments does not make the rule effective.',
        'The agency publishes the final text, responses to comments and effective-date arrangements.',
        'The rule reaches its effective date and begins to apply, subject to any court stay or injunction.',
      ],
    },
  },
  'administrative-guidance': {
    zh: {
      label: '行政指引',
      name: 'SEVP 行政指引流程',
      meaning:
        'SEVP／ICE 用 Broadcast、FAQ 这类材料解释现行规则，由学校和 DSO 直接落实。它不改 CFR，所以通常没有 NPRM、公众评论和最终规则这几步。执行可以很快，但法律层级低于正式法规。',
      stages: ['风险通知', '口径细化', '学校执行', '执法观察', '后续指引'],
      descriptions: [
        'SEVP 发布合规风险通知。',
        'SEVP 通过指引进一步解释现行规则。',
        '学校与 DSO 将指引落实到具体授权。',
        '继续观察检查与实际执法口径。',
        '关注 SEVP 是否进一步补充或调整指引。',
      ],
    },
    en: {
      label: 'Guidance',
      name: 'SEVP administrative guidance',
      meaning:
        'SEVP/ICE uses Broadcast messages, FAQs, and similar materials to explain existing rules, and schools and DSOs apply that guidance directly. Because guidance does not amend the CFR, it generally has no NPRM, public-comment, or final-rule stages. Implementation can be rapid, but guidance has less legal force than a regulation.',
      stages: [
        'Risk notice',
        'Standard clarified',
        'School implementation',
        'Enforcement monitoring',
        'Further guidance',
      ],
      descriptions: [
        'SEVP issues a compliance-risk notice.',
        'SEVP clarifies existing rules through guidance.',
        'Schools and DSOs apply the guidance to authorizations.',
        'Monitor inspections and enforcement practice.',
        'Watch for further SEVP clarification or revised guidance.',
      ],
    },
  },
  'executive-order': {
    zh: {
      label: '行政命令',
      name: '总统行政命令',
      meaning:
        '总统行政命令向行政部门作出指令，本身不经过 NPRM、公众评论和最终规则这条流程。部门须在现有法律权限内落实；后续若制定或修改法规，仍须遵守适用的规则制定程序，也可能受到司法审查。',
      stages: ['总统签署', '部门落实', '执行跟踪'],
      descriptions: [
        '总统签署行政命令，向部门作出指令；这一步没有 NPRM 或公众评论期。',
        '国务院、劳工部与 DHS 在法律权限内落实跨部门协作和裁员审查要求；命令要求劳工部在 30 天内开始复查既往 LCA 数据，具体执行文件仍需跟踪。',
        '核对部门发布的执行文件、实际审查与执法情况，以及是否出现后续规则或法院命令。',
      ],
    },
    en: {
      label: 'Executive order',
      name: 'Presidential executive order',
      meaning:
        'An executive order directs executive agencies and does not itself follow the NPRM, public-comment and final-rule sequence. Agencies must act within existing legal authority; any later regulations must follow applicable rulemaking procedures, and implementation may face judicial review.',
      stages: [
        'President signs',
        'Agency implementation',
        'Implementation monitoring',
      ],
      descriptions: [
        'The President signs an order directing agencies; this step has no NPRM or public-comment period.',
        'State, DOL and DHS implement coordination and layoff-review directives within their legal authority. DOL must begin reviewing prior LCA data within 30 days; specific implementation documents still need tracking.',
        'Check agency implementation documents, actual review and enforcement practices, and any later regulations or court orders.',
      ],
    },
  },
};

export function buildProcessTrack(
  content: PolicyContent,
  language: Language,
): ProcessTrack {
  const { kind, lastCompletedStage, activeStage, nextStage, litigation = [] } =
    content.process;
  return {
    kind,
    ...processKinds[kind][language],
    ...content[language].process,
    lastCompletedStage,
    activeStage,
    nextStage,
    litigation: litigation.map(({ zh, en, ...event }) => ({
      ...event,
      label: language === 'en' ? en : zh,
    })),
  };
}

export type ProcessStageState = 'complete' | 'active' | 'upcoming';

export function getProcessStageState(
  track: ProcessTrack,
  index: number,
): ProcessStageState {
  if (track.lastCompletedStage !== null && index <= track.lastCompletedStage)
    return 'complete';
  if (index === track.activeStage) return 'active';
  return 'upcoming';
}

// The stage a compact progress bar highlights: the one in progress, or the
// last one reached while the policy waits for its next step.
export function getCurrentStage(track: ProcessTrack): number {
  return track.activeStage ?? track.lastCompletedStage ?? 0;
}

export function getProcessStageLabel(
  track: ProcessTrack,
  index: number,
  language: Language,
): string {
  const english = language === 'en';
  const state = getProcessStageState(track, index);
  if (state === 'complete')
    return index === track.lastCompletedStage
      ? english
        ? 'Last completed'
        : '最近已完成'
      : english
        ? 'Completed'
        : '已完成';
  if (state === 'active') return english ? 'In progress' : '进行中';
  return index === track.nextStage
    ? english
      ? 'Next · Not yet reached'
      : '下一节点 · 尚未发生'
    : english
      ? 'Not yet reached'
      : '尚未发生';
}
