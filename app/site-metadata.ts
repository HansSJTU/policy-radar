import type { Language } from './language';
import { SITE_UPDATED_ON } from './policy-freshness.ts';

export function siteMetadata(language: Language) {
  return language === 'zh'
    ? {
        title: 'OPT、CPT、H-1B 新政策追踪｜留美路径政策雷达',
        description: `跟踪影响 F-1 留学生的美国新政：OPT 收费、CPT 收紧、H-1B 附加费、D/S 固定期限等。每项政策的进度、时间线和影响，更新于 ${SITE_UPDATED_ON}。`,
        siteName: '留美路径雷达',
        locale: 'zh_CN',
      }
    : {
        title: 'F-1, CPT, OPT & H-1B Policy Tracker | U.S. Stay Path Policy Radar',
        description: `Track new U.S. rules for F-1 students: OPT fees, CPT limits, the H-1B surcharge, D/S changes and more. Status, timelines and impact for each policy. Updated ${SITE_UPDATED_ON}.`,
        siteName: 'Stay Path Radar',
        locale: 'en_US',
      };
}
