import {
  getBriefingDateLabels,
  getThirtyDayBriefing,
  type BriefingItem,
} from './briefing-feed.ts';
import {
  getCommunitySchools,
  getVerifiedSchools,
  type CommunitySchool,
  type VerifiedSchool,
} from './cpt-schools.ts';
import { isForumLink } from './forum-links.ts';
import type { Language } from './language';
import {
  getPolicies,
  getPolicy,
  getProcessTrack,
  type Policy,
} from './policy-data.ts';
import { SITE_UPDATED_ON } from './policy-freshness.ts';
import { POLICY_PATHS, pathSubtitles, type PolicyPath } from './policy-paths.ts';
import { getPolicyShareItem } from './policy-share.ts';
import { getCurrentStage, type ProcessTrack } from './process-model.ts';
import type { ShareItem } from './share-model.ts';

// Everything the home page renders, already localized. The server builds this
// so the browser only downloads the copy for one language and only the fields
// the cards show; the full analysis stays on the detail pages.

export type HomePolicy = Pick<
  Policy,
  | 'id'
  | 'rank'
  | 'path'
  | 'tone'
  | 'title'
  | 'status'
  | 'tldr'
  | 'tags'
  | 'commentUrl'
  | 'milestones'
  | 'next'
> & {
  process: Pick<
    ProcessTrack,
    | 'kind'
    | 'name'
    | 'meaning'
    | 'detail'
    | 'currentSummary'
    | 'stages'
    | 'litigation'
  > & { current: number };
  forumLinks: Array<{ label: string; href: string }>;
  share: ShareItem;
};

export type HomePathColumn = {
  key: PolicyPath;
  number: string;
  subtitle: string;
  policies: Array<
    Pick<Policy, 'id' | 'rank' | 'short' | 'status'> &
      Pick<ProcessTrack, 'kind' | 'label'>
  >;
};

export type HomeBriefingRow = BriefingItem & {
  rank: number;
  policy: string;
  path: PolicyPath;
};

export type HomeView = {
  updatedOn: string;
  policies: HomePolicy[];
  paths: HomePathColumn[];
  briefing: {
    recent: HomeBriefingRow[];
    upcoming: HomeBriefingRow[];
    dates: { recent: string; upcoming: string };
  };
  schools: { verified: VerifiedSchool[]; community: CommunitySchool[] };
};

function toHomePolicy(policy: Policy, language: Language): HomePolicy {
  const track = getProcessTrack(policy.id, language);
  return {
    id: policy.id,
    rank: policy.rank,
    path: policy.path,
    tone: policy.tone,
    title: policy.title,
    status: policy.status,
    tldr: policy.tldr,
    tags: policy.tags,
    commentUrl: policy.commentUrl,
    milestones: policy.milestones,
    next: policy.next,
    process: {
      kind: track.kind,
      name: track.name,
      meaning: track.meaning,
      detail: track.detail,
      currentSummary: track.currentSummary,
      stages: track.stages,
      litigation: track.litigation,
      current: getCurrentStage(track),
    },
    forumLinks: policy.sources.filter((source) => isForumLink(source.href)),
    share: getPolicyShareItem(policy.id, language)!,
  };
}

function toBriefingRow(item: BriefingItem, language: Language): HomeBriefingRow {
  const policy = getPolicy(item.policyId, language)!;
  return { ...item, rank: policy.rank, policy: policy.short, path: policy.path };
}

export function buildHomeView(language: Language): HomeView {
  const policies = getPolicies(language);
  const briefing = getThirtyDayBriefing(SITE_UPDATED_ON, language);
  return {
    updatedOn: SITE_UPDATED_ON,
    policies: policies.map((policy) => toHomePolicy(policy, language)),
    paths: POLICY_PATHS.map((key, index) => ({
      key,
      number: String(index + 1).padStart(2, '0'),
      subtitle: pathSubtitles[key][language],
      policies: policies
        .filter((policy) => policy.path === key)
        .map(({ id, rank, short, status }) => {
          const { kind, label } = getProcessTrack(id, language);
          return { id, rank, short, status, kind, label };
        }),
    })),
    briefing: {
      recent: briefing.recent.map((item) => toBriefingRow(item, language)),
      upcoming: briefing.upcoming.map((item) => toBriefingRow(item, language)),
      dates: getBriefingDateLabels(SITE_UPDATED_ON),
    },
    schools: {
      verified: getVerifiedSchools(language),
      community: getCommunitySchools(language),
    },
  };
}
