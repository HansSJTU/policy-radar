import type { Language } from './language';
import { getPolicyEditorial } from './policy-detail-model.ts';
import { getProcessTrack } from './process-model.ts';

// Preserve the HEAD homepage presentation while details use the explicit progress model.
const homeStatuses: Record<Language, Record<string, string>> = {
  zh: {
    'opt-fee': 'OIRA 审查中 · 尚未生效',
    'h1b-fee': '正式提案 · 评论截至 9 月 24 日',
    'duration-status': '最终规则 · 诉讼中',
    'h1b-weighted-selection': '已生效 · FY2027 起使用',
    'cpt-guidance': '学校已按新口径执行',
    'prevailing-wage': '评论期已结束 · 尚未生效',
    'h1b-reform': 'OIRA 审查中',
    'grace-period': 'NPRM 预览已公开 · 尚未生效',
    'ead-discretion': '评论期已结束 · 尚未生效',
    'h4-ead': '长期议程 · 尚无提案日期',
  },
  en: {
    'opt-fee': 'Under OIRA review · Not in effect',
    'h1b-fee': 'Formal proposal · Comments due September 24',
    'duration-status': 'Final rule · In litigation',
    'h1b-weighted-selection': 'In effect · Used beginning with FY2027',
    'cpt-guidance': 'Schools are applying the new interpretation',
    'prevailing-wage': 'Comment period closed · Not in effect',
    'h1b-reform': 'Under OIRA review',
    'grace-period': 'NPRM preview public · Not in effect',
    'ead-discretion': 'Comment period closed · Not in effect',
    'h4-ead': 'Long-term agenda · No proposal date',
  },
};
const homeStages: Record<string, number> = {
  'opt-fee': 1,
  'h1b-fee': 3,
  'duration-status': 4,
  'h1b-weighted-selection': 5,
  'cpt-guidance': 2,
  'prevailing-wage': 3,
  'h1b-reform': 1,
  'grace-period': 2,
  'ead-discretion': 3,
  'h4-ead': 0,
};

export function getHomePolicyEditorial(id: string, language: Language) {
  const editorial = getPolicyEditorial(id, language);
  return editorial
    ? { ...editorial, status: homeStatuses[language][id] }
    : undefined;
}

export function getHomeProcessTrack(id: string, language: Language) {
  return { ...getProcessTrack(id, language), currentStage: homeStages[id] };
}
