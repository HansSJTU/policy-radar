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
        '联邦部门要改一条大家都必须遵守的法规，一般要走六步：先起草，送白宫 OIRA 审查，再公开提案（NPRM），留一段时间让任何人提意见，看完意见后发布最终规则，最后到了生效日才开始执行。提案阶段什么都不会变，要等最终规则生效才算数。另外，规则公布后可能有人起诉，法院可以让它暂停或作废；官司单独标在流程旁边。',
      stages: ['拟稿／议程', 'OIRA 审查', 'NPRM 发布', '公众评论', '最终规则', '生效'],
      descriptions: [
        '部门起草规则，或者先把它写进政府的规则计划表。',
        '白宫 OIRA 在提案公开前审查；审完通常很快就会公布。',
        '部门在联邦公报上公布提案（NPRM），公开全文。',
        '任何人都可以在截止日前提交意见，部门要阅读并回应。这一步结束后，现行规定仍然照旧。',
        '部门公布最终规则：定稿的条文、对意见的回应，以及哪天生效。',
        '到了生效日，新规开始执行；法院的暂缓或禁令可以让它停下来。',
      ],
    },
    en: {
      label: 'Regulation',
      name: 'Federal rulemaking',
      meaning:
        'When a federal agency changes a regulation everyone must follow, it usually goes through six steps: draft it, send it to the White House’s OIRA for review, publish a proposal (NPRM), let anyone comment for a set period, issue a final rule after reading the comments, and start enforcing it on the effective date. Nothing changes at the proposal stage; only a final rule in effect counts. Once a rule is out, people may sue, and a court can pause or strike it down; lawsuits are shown next to the process.',
      stages: [
        'Draft / agenda',
        'OIRA review',
        'NPRM published',
        'Public comment',
        'Final rule',
        'Effective',
      ],
      descriptions: [
        'The agency drafts the rule, or first lists it in the government’s rulemaking plan.',
        'The White House’s OIRA reviews it before it goes public; publication usually follows soon after.',
        'The agency publishes the full proposal (NPRM) in the Federal Register.',
        'Anyone can comment before the deadline, and the agency must read and respond. Current rules still apply after this step.',
        'The agency publishes the final rule: the finished text, its response to comments and the start date.',
        'On the start date the new rule is enforced; a court stay or injunction can halt it.',
      ],
    },
  },
  'administrative-guidance': {
    zh: {
      label: '行政指引',
      name: 'SEVP 行政指引流程',
      meaning:
        'SEVP（ICE 下面管国际学生的部门）用 Broadcast 通知、问答这类文件，告诉学校某条现行规定该怎么执行，学校和 DSO 照着做。因为法规条文本身不变，它不用走提案、公众评论和最终规则这几步，所以可以很快落地；但它的法律效力比正式法规弱，也更容易被告上法院。',
      stages: ['风险通知', '细化标准', '学校执行', '执法观察', '后续指引'],
      descriptions: [
        'SEVP 提醒学校注意合规风险。',
        'SEVP 发指引，把现行规定的标准说得更具体。',
        '学校和 DSO 按指引审批，具体到每个学生的授权。',
        '看实际的检查和执法会怎么做。',
        '看 SEVP 会不会再补充或调整指引。',
      ],
    },
    en: {
      label: 'Guidance',
      name: 'SEVP administrative guidance',
      meaning:
        'SEVP (the part of ICE that oversees international students) uses Broadcast messages, FAQs and similar documents to tell schools how an existing rule should be applied, and schools and DSOs follow them. Because the regulation’s text stays the same, guidance skips the proposal, public-comment and final-rule steps and can take hold quickly; it carries less legal weight than a regulation, though, and is easier to challenge in court.',
      stages: [
        'Risk notice',
        'Standard clarified',
        'School implementation',
        'Enforcement monitoring',
        'Further guidance',
      ],
      descriptions: [
        'SEVP warns schools about compliance risks.',
        'SEVP issues guidance spelling out the standard under existing rules.',
        'Schools and DSOs apply the guidance to each student’s authorization.',
        'Watch how inspections and enforcement play out.',
        'Watch for further SEVP clarification or revised guidance.',
      ],
    },
  },
  'executive-order': {
    zh: {
      label: '行政命令',
      name: '总统行政命令',
      meaning:
        '行政命令是总统给政府部门下的工作指示，签了就生效，不用走提案、公众评论和最终规则。各部门要在现有法律允许的范围内照着做。如果之后要改法规，部门还得另走一遍规则制定流程；命令和后续做法也都可能被告上法院。',
      stages: ['总统签署', '部门落实', '执行跟踪'],
      descriptions: [
        '总统签署行政命令，给各部门下指示。',
        '国务院、劳工部和 DHS 在现有权限内落实跨部门协作和裁员审查；劳工部要在 30 天内开始复查以前提交的 LCA。',
        '看各部门的执行文件、实际审查和执法情况，以及有没有新的规则或法院命令。',
      ],
    },
    en: {
      label: 'Executive order',
      name: 'Presidential executive order',
      meaning:
        'An executive order is the President’s working instruction to federal agencies. It takes effect when signed, without a proposal, public comment or final rule. Agencies must carry it out within the authority existing law gives them. Changing a regulation later still takes the full rulemaking process, and both the order and how it is carried out can be challenged in court.',
      stages: [
        'President signs',
        'Agency implementation',
        'Implementation monitoring',
      ],
      descriptions: [
        'The President signs the order, instructing agencies.',
        'State, DOL and DHS carry out the coordination and layoff-review instructions within their existing powers. DOL must start re-checking past LCAs within 30 days.',
        'Watch agency documents, how cases are actually reviewed and enforced, and any new regulations or court orders.',
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
      : '下一步 · 还没发生'
    : english
      ? 'Not yet reached'
      : '还没发生';
}
