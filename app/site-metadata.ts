import type { Language } from './language';
import { SITE_UPDATED_ON } from './policy-freshness.ts';

export function siteMetadata(language: Language) {
  return language === 'zh'
    ? {
        title: '留美路径政策雷达｜F-1 → CPT → OPT → H-1B',
        description: `更新于 ${SITE_UPDATED_ON} 的美国学生与工作签证政策状态、时间线、影响及严重度排序。`,
        siteName: '留美路径雷达',
        locale: 'zh_CN',
      }
    : {
        title: 'U.S. Stay Path Policy Radar | F-1 → CPT → OPT → H-1B',
        description: `U.S. student and employment visa policy status, timelines, impact, and severity ranking. Updated ${SITE_UPDATED_ON}.`,
        siteName: 'Stay Path Radar',
        locale: 'en_US',
      };
}
