import type { PolicyId } from './community-impact-model';

// The four stay-path stages shown at the top of the homepage. Every policy belongs
// to exactly one stage, and the stage key is also the category tag shown on cards
// and on the 30-day briefing rows.
export type PolicyPath = 'F-1' | 'CPT' | 'OPT' | 'H-1B';

export type RouteStage = {
  key: PolicyPath;
  number: string;
  subtitle: string;
  policies: Array<{ rank: string; id: PolicyId; title: string; state: string }>;
};

export const routeStages: RouteStage[] = [
  {
    key: 'F-1',
    number: '01',
    subtitle: '入学与在读',
    policies: [
      { rank: '03', id: 'duration-status', title: 'D/S 固定期限', state: '法院全国暂缓 · 生效日已推迟' },
    ],
  },
  {
    key: 'CPT',
    number: '02',
    subtitle: '校内外实习',
    policies: [
      { rank: '05', id: 'cpt-guidance', title: '8·12 / 8·24 CPT 指引', state: '学校已按新口径执行' },
    ],
  },
  {
    key: 'OPT',
    number: '03',
    subtitle: '毕业后工作',
    policies: [
      { rank: '01', id: 'opt-fee', title: 'OPT $100k', state: 'OIRA 审查已完成 · 尚未生效' },
      { rank: '09', id: 'ead-discretion', title: 'I-765 犯罪记录审查', state: '评论期已结束' },
    ],
  },
  {
    key: 'H-1B',
    number: '04',
    subtitle: '工作签证',
    policies: [
      { rank: '02', id: 'h1b-fee', title: 'H-1B $103,265', state: '正式提案' },
      { rank: '04', id: 'h1b-weighted-selection', title: 'H-1B 工资加权抽签', state: '最终规则已生效' },
      { rank: '06', id: 'prevailing-wage', title: 'H-1B / PERM 工资等级', state: '评论期已结束' },
      { rank: '07', id: 'h1b-reform', title: 'H-1B 分类改革', state: 'OMB 审查' },
      { rank: '08', id: 'grace-period', title: '取消 60 天宽限期', state: '提案已发布，评论期内，未生效' },
      { rank: '10', id: 'h4-ead', title: 'H-4 EAD', state: '长期议程' },
      { rank: '11', id: 'perm-modernization', title: 'PERM 劳工认证改革', state: 'OIRA 审查中' },
    ],
  },
];

// Resolve a policy to its stay-path stage so cards and briefing rows can render the
// same category tag without keeping a second grouping in sync.
export function getPolicyPath(id: string): PolicyPath | undefined {
  return routeStages.find((stage) => stage.policies.some((policy) => policy.id === id))?.key;
}
