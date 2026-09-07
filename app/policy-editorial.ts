import type { PolicyId } from './community-impact-model';

export type PolicyEditorial = {
  id: PolicyId;
  title: string;
  short: string;
  group: string;
  agency: string;
  rin: string;
  status: string;
  note: string;
  deck: string;
  headline: string;
  analysis: string;
  teaser: string;
  impacts: [string, string][];
  outlook: string;
  scenarios: [string, string, string, string, string][];
  scope: [string, string][];
  process: [string, string][];
  active: number;
  processKind: string;
  related: PolicyId[];
  schoolLink?: boolean;
};
