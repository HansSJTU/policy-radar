import type { PolicyId } from './community-impact-model';

export type PolicyEditorial = {
  id: PolicyId;
  discovery: {
    status: string;
    identities: string[];
    summary: string;
    audience?: string;
    // Only specific events belong here; generic procedural steps stay in details.
    next?: { date?: string; text: string };
  };
  title: string;
  short: string;
  group: string;
  agency: string;
  rin: string;
  status: string;
  effectState: 'not-in-effect' | 'in-effect' | 'guidance-in-use';
  effectLabel: string;
  audience: string;
  caveat: string;
  // Summarize what the policy changes; procedural status is presented separately.
  summary: string;
  background: string;
  note: string;
  deck: string;
  headline: string;
  analysis: string;
  teaser: string;
  impacts: [string, string][];
  outlook: string;
  scenarios: [string, string, string, string, string][];
  scope: [string, string][];
  related: PolicyId[];
  schoolLink?: boolean;
};
