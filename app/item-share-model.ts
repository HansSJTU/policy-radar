import type { Language } from './language';
import type { VerifiedSchool, CommunitySchool } from './cpt-schools';
import { POLICY_SITE_URL } from './policy-links.ts';
import { itemShareLabels, type ShareItem } from './share-model.ts';

// The caller passes the same localized record rendered in the school card.
export function getSchoolShareItem(school: VerifiedSchool | CommunitySchool, language: Language): ShareItem {
  const verified = 'href' in school;
  return {
    kind: 'school', id: school.id, title: `${school.school} · CPT`,
    status: verified ? school.state : itemShareLabels[language].unverified,
    summary: verified ? school.detail : `${school.state} ${school.detail}`,
    scope: `${school.school} · F-1 CPT`,
    checkedOn: school.checkedOn,
    caveat: language === 'en'
      ? verified
        ? 'Applies only to the school, campus or department named here. Ask your DSO about your own case.'
        : 'Based on an email screenshot; the school has not posted this policy publicly. Applies only to this school or department. Ask your DSO.'
      : verified
        ? '只适用于这所学校、校区或院系；自己的情况请问 DSO。'
        : '依据是邮件截图，学校还没在网上公开这项政策。只适用于这所学校或院系，具体请问 DSO。',
    href: `${POLICY_SITE_URL}/?lang=${language}#school-${school.id}`,
    unverified: !verified,
  };
}
