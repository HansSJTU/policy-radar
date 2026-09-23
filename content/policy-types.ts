import type { PolicyId } from '../app/policy-ids.ts';
import type { ProcessKind } from '../app/process-model.ts';

// Each policy lives in one file under content/policies/ with its Chinese and
// English copy side by side. Fields shared by both languages sit at the top.

export type PolicyPath = 'F-1' | 'CPT' | 'OPT' | 'H-1B';
export type Tone = 'red' | 'amber' | 'blue' | 'green' | 'gray';
export type EffectState =
  | 'not-in-effect'
  | 'in-effect'
  | 'guidance-in-use'
  | 'executive-order-issued';

export type Milestone = { date: string; text: string };
export type NextStep = { date: string; text: string; estimate?: boolean };

export type LitigationEvent = {
  date: string;
  zh: string;
  en: string;
  afterStage: number;
  progress: number;
  status: 'filed' | 'upcoming';
  align: 'left' | 'right';
  lane: 'base' | 'raised';
};

export type PolicyCopy = {
  title: string;
  // Used for the path map, breadcrumbs, the policy picker and briefing rows.
  short: string;
  // Procedural stage, shown on the home card, the path map and the detail page.
  status: string;
  effectLabel: string;
  agency: string;
  documentId: string;
  // One-paragraph summary on the home card.
  tldr: string;
  tags: string[];
  // Detail page, in reading order.
  summary: string;
  audience: string;
  caveat: string;
  // What was checked, when, and what is still unverified.
  reviewNote?: string;
  background: string;
  teaser: string;
  headline: string;
  analysis: string;
  // An optional point pulled out of the analysis as a callout. Use "**…**"
  // inside any body copy for inline emphasis.
  keyPoint?: { label: string; text: string };
  // Practitioner expectations for an upcoming rule. Always labeled as analysis,
  // never presented as published text or an effective requirement.
  possibilities?: { heading: string; note: string; items: [string, string][] };
  impacts: Array<{
    title: string;
    text: string;
    examples?: string[];
    // Where the examples' reading of the rule comes from, when not obvious.
    source?: { label: string; href: string };
  }>;
  outlook: string;
  scenarios: Array<{
    name: string;
    headline: string;
    assumption: string;
    effects: string;
    signals: string;
  }>;
  scope: Array<{ label: string; text: string }>;
  milestones: Milestone[];
  // Only specific events belong here; generic procedural steps stay in `process`.
  next: NextStep[];
  process: {
    detail: string;
    currentSummary: string;
    waitingFor: string | null;
  };
};

export type PolicyContent = {
  id: PolicyId;
  path: PolicyPath;
  tone: Tone;
  effectState: EffectState;
  // Update only when this entry's sources are actually reviewed.
  checkedOn: string;
  commentUrl?: string;
  related: PolicyId[];
  schoolLink?: boolean;
  process: {
    kind: ProcessKind;
    lastCompletedStage: number | null;
    activeStage: number | null;
    nextStage: number | null;
    litigation?: LitigationEvent[];
  };
  // Primary document first: the detail page links it as the original document.
  sources: Array<{ href: string; zh: string; en: string }>;
  zh: PolicyCopy;
  en: PolicyCopy;
};
