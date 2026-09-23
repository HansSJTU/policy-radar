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
    summary: verified ? school.detail : school.state,
    scope: `${school.school} · F-1 CPT`,
    checkedOn: school.checkedOn,
    caveat: language === 'en'
      ? verified
        ? 'Limited to the school, campus or department named here. Confirm individual eligibility with your DSO.'
        : 'Screenshot reviewed; current policy is not publicly confirmed. Limited to the named school or department. Check with your DSO.'
      : verified
        ? '仅限本条列明的学校、校区或院系；个人资格请向 DSO 确认。'
        : '已核对截图，当前政策尚无公开确认。仅限本条学校或院系，请向 DSO 核实。',
    href: `${POLICY_SITE_URL}/?lang=${language}#school-${school.id}`,
    unverified: !verified,
  };
}
