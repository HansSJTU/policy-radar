import type { Language } from './language';

export type EvidenceScreenshot = {
  src: string;
  width: number;
  height: number;
};

type SchoolCopy = { state: string; detail: string };

type VerifiedSchoolRecord = {
  id: string;
  checkedOn: string;
  school: string;
  href: string;
  tone: 'pause' | 'tighten' | 'continue';
  zh: SchoolCopy;
  en: SchoolCopy;
  screenshots: EvidenceScreenshot[];
};

type CommunitySchoolRecord = {
  id: string;
  checkedOn: string;
  school: string;
  zh: SchoolCopy;
  en: SchoolCopy;
  screenshots: EvidenceScreenshot[];
};

// Localized views used by the page.
export type VerifiedSchool = Omit<VerifiedSchoolRecord, 'zh' | 'en'> &
  SchoolCopy;
export type CommunitySchool = Omit<CommunitySchoolRecord, 'zh' | 'en'> & {
  state: string;
  detail: string;
};

// Per-record evidence review dates are backed by local audit notes in docs/audits/.
// A community screenshot review does not confirm its current policy status.
export const verifiedSchools: VerifiedSchoolRecord[] = [
  {
    "id": "university-of-oklahoma",
    "checkedOn": "2026-10-21",
    "school": "University of Oklahoma",
    "href": "https://www.ou.edu/globalengagement/iss/curricular-practical-training",
    "tone": "pause",
    "zh": {
      "state": "8·24 起的新 CPT 请求暂停，项目资格仍在审查",
      "detail": "ISS 标注 10·08 更新的页面称，自 8·24 起收到的全部 CPT 请求暂停，学校正核对各学位是否要求所有学生完成实习／实践；选修、独立研究和 directed readings 不符合其说明。页面介绍 10·05 诉讼，没有宣布解除暂停，也未说明已有授权如何处理。"
    },
    "en": {
      "state": "Requests from August 24 paused while degree programs are reviewed",
      "detail": "The ISS page updated October 8 says all requests received on or after August 24 are paused while schools review program-wide required training. It excludes electives, independent studies and directed readings, and reports the October 5 lawsuit without lifting the pause or explaining existing approvals."
    },
    "screenshots": []
  },
  {
    "id": "yale-university",
    "checkedOn": "2026-10-21",
    "school": "Yale University",
    "href": "https://oiss.yale.edu/news/cpt-update-sevp-broadcast-messages-and-pending-litigation",
    "tone": "tighten",
    "zh": {
      "state": "10·07 通知：仅处理项目全员毕业必需的 CPT",
      "detail": "OISS 10·07 通知称，自 8·24 起只处理既定课程内、项目所有学生毕业必需的实践，并继续与院系核对课程。通知介绍 10·05 诉讼，但未宣布恢复选修 CPT 或全面停批；已有授权如何处理未说明。开始工作前仍须获批及取得更新 I-20。"
    },
    "en": {
      "state": "October 7 notice: CPT processed only for program-wide required training",
      "detail": "OISS says that since August 24 it processes only established-curriculum training required for all program students to graduate, while reviewing curricula with schools. The October 7 notice reports litigation without reopening elective CPT or announcing a blanket pause. Existing approvals are not addressed; authorization and an updated I-20 are required before work."
    },
    "screenshots": []
  },
  {
    "id": "university-of-virginia",
    "checkedOn": "2026-10-21",
    "school": "University of Virginia (UVA)",
    "href": "https://issp.virginia.edu/international-student-scholar-faq-status-entry-rights",
    "tone": "tighten",
    "zh": {
      "state": "非毕业必需的课程学分 CPT 暂停；必需实践继续处理",
      "detail": "10·21 原 CPT 更新页访问被拒；可读的 10·19 官方 FAQ 仍确认暂停非毕业必需的课程学分 CPT，并介绍诉讼。此前通知称必需实践继续处理，但本次未能从原页重新核实最新办理细则；暂停起始日与已有授权如何处理也未确认。保留原范围，不推断全校所有 CPT 停批或恢复。"
    },
    "en": {
      "state": "Non-required course-credit CPT paused; degree-required training continues",
      "detail": "The original CPT update page was blocked October 21. The accessible official FAQ, last updated October 19, still confirms a pause of non-required course-credit CPT and reports litigation. The earlier notice allowed mandatory training to continue, but current processing details could not be reverified from the original page; the initial pause date and treatment of existing approvals remain unconfirmed. Preserve that scope without inferring a university-wide halt or reopening."
    },
    "screenshots": []
  },
  {
    "id": "university-of-illinois-chicago",
    "checkedOn": "2026-10-21",
    "school": "University of Illinois Chicago (UIC)",
    "href": "https://ois.uic.edu/news-stories/sevps-cpt-memos-challenged-in-court/",
    "tone": "tighten",
    "zh": {
      "state": "10·07 通知：按既定 CPT 条件核对，跟踪新诉讼",
      "detail": "OIS 10·07 通知（10·16 修改）介绍挑战两份 SEVP 广播的诉讼，现明确列出 11·06 听证。学校继续与学生和院系核对授权资格，未逐项列明哪些项目可批，也未宣布全校停批、全面恢复或已有授权失效；UIC Chicago 与 UIUC 是不同条目。"
    },
    "en": {
      "state": "October 7 notice: eligibility reviewed while litigation is monitored",
      "detail": "The October 7 OIS notice, modified October 16, describes the challenge to both SEVP broadcasts and now identifies the November 6 hearing. OIS continues checking eligibility with students and departments; the notice does not list all qualifying programs or announce a university-wide pause, unrestricted reopening or invalidation of existing approvals. UIC Chicago is separate from UIUC."
    },
    "screenshots": []
  },
  {
    id: 'carnegie-mellon-university',
    checkedOn: "2026-10-21",
    school: 'Carnegie Mellon University (CMU)',
    href: 'https://www.cmu.edu/oie/employment/f1-students/curricular-practical-training.html',
    tone: 'tighten',
    zh: {
      state: "毕业必修 CPT；选修实习改申请 pre-completion OPT",
      detail: "OIE 8·27 公告要求实习为项目全体学生的毕业必修环节；选修实习需先获批 pre-completion OPT。现行 CPT 页排除独立研究，仍列申请步骤，但标注正在修订；论文完成所需校外工作的处理方式仍在审查。10·08 OIE 通知介绍 CPT 诉讼，未宣布恢复选修或论文型 CPT。CSD 博士页仍有冲突措辞，不能据此确认恢复；既有授权如何处理未说明。",
    },
    en: {
      state: "CPT for graduation-required training; elective internships use pre-completion OPT",
      detail: "The August 27 OIE notice requires internships for all program students to graduate and directs electives to approved pre-completion OPT. The CPT page excludes independent study, retains application steps and is under construction; thesis/dissertation-related external work remains under review. OIE’s October 8 notice describes the CPT lawsuit without reopening elective or thesis-based CPT. Conflicting CSD doctoral wording does not establish reopening, and existing approvals are not addressed.",
    },
    screenshots: [],
  },
  {
    id: 'pacific-lutheran-university',
    checkedOn: "2026-10-21",
    school: 'Pacific Lutheran University',
    href: 'https://www.plu.edu/iss/announcements/',
    tone: 'tighten',
    zh: {
      state: '9·25 公告：只批准毕业必需、全专业学生都要完成的实践',
      detail: 'ISS 9·25 公告称，法律顾问建议收紧 CPT：实践须是同一专业或学位项目全体学生必修课程的组成部分，且为毕业所必需；选修课、可选实习和并非所有学生都必需的专业分支不再符合条件。公告没有说明已签发授权如何处理，也未宣布全面停批。',
    },
    en: {
      state: 'September 25 notice: CPT only for graduation-required training required of all students in the major',
      detail: 'The September 25 ISS announcement says counsel recommended restricting CPT to training integral to a course required of every student in the major or degree program and necessary for graduation. Electives, optional internships and tracks without a common training requirement no longer qualify. The notice does not address existing authorizations or announce a blanket pause.',
    },
    screenshots: [],
  },
  {
    id: 'indiana-university-iu-global',
    checkedOn: "2026-10-21",
    school: 'Indiana University (IU Global)',
    href: 'https://www.oid.iu.edu/resources/visa-immigration-updates.html',
    tone: 'pause',
    zh: {
      state: "10·06 更新：原 CPT 暂停继续，学校跟踪诉讼",
      detail: "IU Global 10·06 更新介绍针对 SEVP 指引的诉讼，并明确 CPT 暂停继续。9·09 通知仍称暂停处理大部分 F-1 CPT 请求；原先已批准的授权不变，待审申请人由国际办公室邮件通知。页面未定义“大部分”的例外，也未宣布全面取消既有授权或恢复所有类别。",
    },
    en: {
      state: "October 6 update: CPT pause continues while the university monitors litigation",
      detail: "IU Global’s October 6 update reports litigation against the SEVP guidance and says the CPT pause continues. Its September 9 notice still describes a pause of most F-1 requests, preserves existing approvals and directs pending applicants to email from their international office. It does not define the exceptions or announce cancellation of all approvals or a reopening of every category.",
    },
    screenshots: [],
  },
  {
    id: 'rutgers-university',
    checkedOn: "2026-10-21",
    school: 'Rutgers University (Rutgers Global)',
    href: 'https://global.rutgers.edu/all-alerts',
    tone: 'tighten',
    zh: {
      state: '9·03 公告：仍处理明确符合新标准的 CPT，既有授权可继续',
      detail: 'Rutgers Global 9·03 通知称并未全面暂停 CPT；明确符合新 SEVP 标准的申请继续处理，其他申请可能进一步审查或无法批准。实践须为特定学位所有学生毕业必需；论文型研究生若校内无法取得所需数据或设备，也可能获批完成论文必需的实践。已批准的 CPT 可照计划继续。',
    },
    en: {
      state: 'September 3 notice: clearly qualifying CPT continues and existing approvals may proceed',
      detail: 'Rutgers Global says it did not suspend all CPT. Clearly qualifying requests continue; others may need further review or may be ineligible. Training must be required for all students in the specific degree program, with a narrow thesis/dissertation route when necessary data or equipment is unavailable at Rutgers. Previously approved CPT may continue.',
    },
    screenshots: [],
  },
  {
    id: 'university-of-central-florida',
    checkedOn: "2026-10-21",
    school: 'University of Central Florida',
    href: 'https://global.ucf.edu/immigrationupdates/',
    tone: 'tighten',
    zh: {
      state: '9·09 公告：只批准同一学位所有学生毕业必需的校外实践',
      detail: 'UCF Global 9·09 通知称，校外实践必须是所有同一学位学生完成学位的既定要求；选修、院系推荐但非必需、仅有职业价值的实践，以及论文相关活动本身均不足以获批 CPT。通知未说明已有授权如何处理。',
    },
    en: {
      state: 'September 9 notice: off-campus CPT only for training required of all students in the degree program',
      detail: 'UCF Global says off-campus training must be an established degree-completion requirement for every student in the program. Electives, recommended but nonrequired experience, career-beneficial optional training and thesis/dissertation-related activity alone do not qualify. The notice does not address existing authorizations.',
    },
    screenshots: [],
  },
  {
    id: 'texas-state-university',
    checkedOn: "2026-10-21",
    school: 'Texas State University',
    href: 'https://www.international.txst.edu/current-f1-students/work-authorization/cpt.html',
    tone: 'tighten',
    zh: {
      state: 'CPT 须为课程体系必需；仅实习课或学分不足',
      detail:
        'ISSS 要求实践是学术项目及既定课程体系的必需部分，可能要求院系证明；只注册实习课或取得学分不足以符合资格。页面仍列兼职、全职 CPT 和申请流程，未宣布全面暂停，也未说明已有授权如何处理。页面未注明此口径的更新日期，本条为补录校方说明。',
    },
    en: {
      state: 'CPT must be curriculum-required; course enrollment or credit alone is insufficient',
      detail:
        'ISSS requires practical training to be a mandatory part of the academic program and established curriculum, possibly with department certification. Course enrollment or credit alone does not establish eligibility. The page retains part-time/full-time CPT and application procedures; it does not announce a blanket pause or address existing authorizations. No update date is given for this wording, so this entry adds an existing university explanation.',
    },
    screenshots: [],
  },
  {
    id: 'vanderbilt-university',
    checkedOn: "2026-10-21",
    school: 'Vanderbilt University',
    href: 'https://www.vanderbilt.edu/isss/2026/09/15/updates-to-curricular-practical-training-eligibility/',
    tone: 'tighten',
    zh: {
      state: '9·15 公告：只批准同一学位项目全体学生必需的 CPT',
      detail:
        'ISSS 9·15 公告称，已按 SEVP 指引及对“integral”的更窄解释调整做法：只为同一学位项目全体学生必需的实践授权 CPT；选修实习及其他非完成学位所必需的实践不符合资格。公告未说明已有授权如何处理，也没有宣布全面暂停。这是补录的较早通知，不是新发布的规定。',
    },
    en: {
      state:
        'September 15 notice: CPT only for training required of all students in the degree program',
      detail:
        'The September 15 ISSS notice says Vanderbilt has aligned its practice with SEVP guidance and its narrower reading of “integral”: CPT is authorized only for practical training required of all students in the same degree program, and elective internships and other training not required for degree completion do not qualify. The notice does not address existing authorizations or announce a blanket pause. This is an earlier notice added to the tracker, not a newly issued rule.',
    },
    screenshots: [],
  },
  {
    id: 'stony-brook-university',
    checkedOn: "2026-10-21",
    school: 'Stony Brook University',
    href: 'https://www.stonybrook.edu/visa/resources/news-and-events/immigration-policy-updates/cpt-new-guidance.html',
    tone: 'tighten',
    zh: {
      state: '9·08 公告：学分或选课不再构成 CPT 资格，须为全体学生必修',
      detail:
        'VIS 9·08 公告按 SEVP 两份广播修订 CPT 资格标准与审核流程：实践须为既定课程体系中对全体学生必修的部分，且完成学位取决于该要求。作为选修的实习或研究课即使可满足学位要求也不符合；可通过其他不含实践的课程或选项毕业时不予授权；院系此前批准过同类学生，不代表继续符合资格。VIS 逐案审核，院系须出具证明，必要时补充材料。公告没有宣布全面暂停，也未说明已有授权如何处理。这是补录的较早通知，不是新发布的规定。',
    },
    en: {
      state:
        'September 8 notice: credit or enrollment alone no longer qualifies; training must be required of all students',
      detail:
        'The September 8 VIS notice revises CPT eligibility criteria and review procedures under the two SEVP broadcasts: training must be a required component of the established curriculum for all students, with degree completion depending on it. An elective internship or research course does not qualify even if it satisfies a degree requirement; CPT is not authorized when the degree can be completed through another option without practical training; and a department’s past approvals do not establish continued eligibility. VIS reviews each request, departments must certify the requirement, and more documentation may be requested. The notice does not announce a blanket pause or address existing authorizations. This is an earlier notice added to the tracker, not a newly issued rule.',
    },
    screenshots: [],
  },
  {
    id: 'kennesaw-state-university',
    checkedOn: "2026-10-21",
    school: 'Kennesaw State University',
    href: 'https://campus.kennesaw.edu/current-students/academics/global-education/international-student-scholar-services/f-1/curricular-practical-training.php',
    tone: 'tighten',
    zh: {
      state: '2026 秋季起，仅限教育、护理与社会工作项目',
      detail:
        'ISSS 页首通知仅允许教育、护理和社会工作中全体学生毕业必需的实践，不再批准选修课或 Directed Study CPT。页面下方仍保留旧的选修及论文分类，不能据此认定其他项目已恢复。通知未说明已有授权如何处理，也未单独标注发布日期。',
    },
    en: {
      state:
        'From Fall 2026: limited to Education, Nursing and Social Work programs',
      detail:
        'The ISSS notice at the top limits CPT to graduation-required training for all students in Education, Nursing and Social Work, excluding elective and Directed Study courses. Older elective and thesis categories remain below; they do not establish that other programs have resumed CPT. The notice does not explain existing authorizations or give a separate publication date.',
    },
    screenshots: [],
  },
  {
    id: 'university-of-toledo',
    checkedOn: "2026-10-21",
    school: 'University of Toledo',
    href: 'https://www.utoledo.edu/cisp/international/CPT.html',
    tone: 'tighten',
    zh: {
      state: '9·08 更新：非学位必需实习及选修课不构成 CPT 资格',
      detail:
        'OISSS 按 SEVP 2608-02 要求实践为既定课程体系中必需的组成部分；仅注册实习课或取得学分不足以获批。符合条件的必需实践仍可申请兼职或全职 CPT，秋春学期全职须为学位所必需。页面未说明已有授权如何处理，不应理解为全面暂停。',
    },
    en: {
      state:
        'September 8 update: optional internships and electives do not establish CPT eligibility',
      detail:
        'Under SEVP 2608-02, OISSS requires training to be an integral and required part of the established curriculum; course enrollment or credit alone is insufficient. Qualifying required training can still receive part-time or full-time CPT; Fall/Spring full-time training must be degree-required. The page does not address existing authorizations and does not announce a blanket pause.',
    },
    screenshots: [],
  },
  {
    id: 'william-and-mary',
    checkedOn: "2026-10-21",
    school: 'William & Mary',
    href: 'https://www.wm.edu/offices/revescenter/issp/visasandimmigration/immigration-updates/',
    tone: 'pause',
    zh: {
      state: "10·13 更新：仅处理学位目录要求的 CPT，其他暂停",
      detail:
        "ISSP 10·13 更新页仍只处理学术目录明确列为学位要求的实践，其他 CPT 请求暂停。页面补充 10·05 协会诉讼，但没有宣布扩大审批或恢复选修 CPT，也未说明已有授权如何处理。",
    },
    en: {
      state:
        "October 13 update: only catalog-required CPT is processed; others paused",
      detail:
        "The ISSP page updated October 13 still processes only training listed as a degree requirement in the academic catalog; other requests remain paused. It adds the October 5 association lawsuit, without announcing expanded eligibility or restored elective CPT. Treatment of existing authorizations is not stated.",
    },
    screenshots: [],
  },
  {
    id: 'university-of-rochester',
    checkedOn: "2026-10-21",
    school: 'University of Rochester',
    href: 'https://www.rochester.edu/provost/important-update-for-international-students-on-cpt/',
    tone: 'pause',
    zh: {
      state: '暂停非学位必需的新 CPT；已有秋季授权可按原条件继续',
      detail:
        '8·28 校方通知称，ISO 暂停批准新的 CPT，学位必需的实践除外；须为项目全体学生完成学位所必需。已批准的 2026 秋季 CPT 可按授权条件继续，除非 ISO 另行通知。这是补录的较早通知，不是新发布的政策。',
    },
    en: {
      state:
        'New non-required CPT paused; existing fall authorizations may continue under their terms',
      detail:
        'The August 28 notice pauses new CPT approvals except training required for all students to complete the degree. Already authorized Fall 2026 CPT may continue under its terms unless ISO advises otherwise. This is an earlier notice added to the tracker, not a newly issued policy.',
    },
    screenshots: [],
  },
  {
    id: 'purdue-university-iss',
    checkedOn: "2026-10-21",
    school: 'Purdue University (ISS)',
    href: 'https://www.purdue.edu/gpp/iss/student/f1/employment/cpt.html',
    tone: 'tighten',
    zh: {
      state: '校方公开页面确认：限学位必需或特定论文研究 CPT',
      detail:
        'ISS 公开页面要求实践为主学位所必需；另允许论文型硕士或博士为完成论文获取外部独有技术或必要数据的实践，并要求研究学分。页面下方仍保留选修课措辞，不能据此判断普通选修 CPT 已恢复。与 ECE 邮件分开记录，原邮件截图保留。',
    },
    en: {
      state:
        'Public ISS page confirms degree-required or narrowly defined thesis-research CPT',
      detail:
        'The ISS page requires training for the primary degree, with a separate pathway for thesis or dissertation research requiring technology available only externally or essential data, plus research-credit enrollment. Older elective-course wording remains below; it does not establish reopening of ordinary elective CPT. The ECE email remains a separate record and the original ISS screenshot is preserved.',
    },
    screenshots: [
      { src: '/cpt-evidence/cpt_purdue_iss.jpeg', width: 1206, height: 1018 },
    ],
  },
  {
    id: 'bryn-mawr-college',
    checkedOn: "2026-10-21",
    school: 'Bryn Mawr College',
    href: 'https://www.brynmawr.edu/inside/offices-services/impact-center/international-advising/issa-announcements',
    tone: 'pause',
    zh: {
      state: '9·15 通知暂停新的 optional CPT',
      detail:
        'ISSA 暂停受理新的 optional CPT，也就是不属于全体学生毕业必需的实践。ISSA 同时在审查校内政策与流程。公告没有说会撤销已签发的授权。',
    },
    en: {
      state: 'September 15: new optional CPT authorizations paused',
      detail:
        'ISSA is pausing new CPT not required for every student in the degree program while reviewing its policies and procedures. The notice does not announce revocation of existing authorizations.',
    },
    screenshots: [],
  },
  {
    id: 'university-at-buffalo',
    checkedOn: "2026-10-21",
    school: 'University at Buffalo',
    href: 'https://www.buffalo.edu/international-student-services/immigration-visa/f-1-student/curricular-practical-training--cpt-.html',
    tone: 'pause',
    zh: {
      state: '暂停非学位必需的新 CPT，学位必需申请继续',
      detail:
        '校方 CPT 页面写明：已暂停批准非学位必需的新 CPT 申请，学位必需申请继续处理。仅有选修课或学分不足的实践不符合要求。已获批的 2026 秋季 CPT 可按计划继续。页面未标明本次政策更新的日期。',
    },
    en: {
      state:
        'New non-degree-required CPT paused; degree-required requests continue',
      detail:
        'The CPT page and FAQ require training necessary for every student to complete the degree; elective coursework or credit alone is insufficient. Previously approved Fall 2026 CPT may continue as planned. The page does not date this policy update.',
    },
    screenshots: [],
  },
  {
    id: 'university-of-michigan-dearborn',
    checkedOn: "2026-10-21",
    school: 'University of Michigan–Dearborn',
    href: 'https://umdearborn.edu/office-international-affairs/important-updates',
    tone: 'pause',
    zh: {
      state: '新 CPT 仅限两个硕士项目，其他项目暂不受理',
      detail:
        "此前 OIA 页面只列 MS in Applied Behavior Analysis 与 MS in Clinical Health Psychology 可申请新 CPT，其他项目暂时不要注册 CPT 课程或提交申请，已批准的 2026 秋季 CPT 不取消、不修改。10·21 原页及替代读取均被拒，未能重新确认当前项目范围或是否有后续调整；保留此前记录，不据此确认仍停批或已经恢复。仅限 Dearborn 校区，CPT 栏此前未单独标注更新日期。",
    },
    en: {
      state:
        'New CPT limited to two MS programs: Applied Behavior Analysis and Clinical Health Psychology',
      detail:
        "The previously read OIA page limited new CPT to MS in Applied Behavior Analysis and MS in Clinical Health Psychology, told other students not to enroll in a CPT course or apply, and preserved approved Fall 2026 CPT. Both direct and alternative access were blocked October 21, so current program coverage and later changes could not be reverified. This retains the earlier record without confirming a continuing pause or reopening. It covers Dearborn only; the earlier CPT section had no separate update date.",
    },
    screenshots: [],
  },
  {
    id: 'uc-berkeley',
    checkedOn: "2026-10-21",
    school: 'UC Berkeley',
    href: 'https://internationaloffice.berkeley.edu/students/employment/cpt',
    tone: 'pause',
    zh: {
      state: 'Course Credit CPT 仍暂停；论文型 CPT 仅限严格个案',
      detail:
        'Degree Requirement CPT 只适用于全专业学生都必须完成的实践。Thesis/Dissertation Requirement CPT 只限已 Advanced to Candidacy 的论文型硕士或博士。训练必须是完成论文所必需，且无法由其他研究或数据收集方式合理替代。申请时还需导师书面证明。校方另明确：CPT 指引独立于 D/S 规则，不因 D/S 法院裁定而自动改变。',
    },
    en: {
      state:
        'Course Credit CPT remains paused; thesis and dissertation CPT is limited to narrowly documented cases',
      detail:
        'Degree Requirement CPT is limited to training required of every student in the program. Thesis/Dissertation Requirement CPT is available only to thesis-track master’s or doctoral students who have Advanced to Candidacy, when the training is necessary to complete the thesis or dissertation, cannot reasonably be replaced by another research or data-collection method, and is documented by the faculty adviser. Berkeley also explicitly says CPT guidance is separate from the D/S rule and is not changed by D/S court rulings.',
    },
    screenshots: [],
  },
  {
    id: 'uc-davis',
    checkedOn: "2026-10-21",
    school: 'UC Davis',
    href: 'https://siss.ucdavis.edu/news/federal-government-updates-international-students-and-scholars',
    tone: 'pause',
    zh: {
      state: '已暂停非学位必需的 Course Credit CPT',
      detail: '学位要求 CPT 继续办理。已签发的 CPT I-20 暂时不受影响。',
    },
    en: {
      state: 'Non-degree-required course-credit CPT is paused',
      detail:
        'Degree-required CPT continues; previously issued CPT I-20s are currently unaffected.',
    },
    screenshots: [],
  },
  {
    id: 'boston-university',
    checkedOn: "2026-10-21",
    school: 'Boston University',
    href: 'https://www.bu.edu/isso/2026/08/28/additional-sevp-guidance-further-restricts-cpt-eligibility/',
    tone: 'pause',
    zh: {
      state: '暂停部分 CPT 审批',
      detail: "8·28 校方公告全文本次可直接读取：明确属于毕业要求的 CPT 继续处理，其他模式在校内审查期间暂缓审批。没有宣布全面恢复，也未说明已有授权如何处理。",
    },
    en: {
      state: 'Some CPT approvals are paused',
      detail:
        "The complete August 28 university notice was directly readable in this review: clearly degree-required CPT continues, while other models are paused during institutional review. It does not announce unrestricted reopening or address existing approvals.",
    },
    screenshots: [],
  },
  {
    id: 'uiuc',
    checkedOn: "2026-10-21",
    school: 'UIUC',
    href: 'https://blogs.illinois.edu/view/7559/791491523',
    tone: 'pause',
    zh: {
      state: '不再批准 elective-course CPT',
      detail:
        '只接受实践为全体学生强制要求、且有雇主合作协议的情形。选修课型的 CPT 不再批准。',
    },
    en: {
      state: 'Elective-course CPT is no longer approved',
      detail:
        'Only training required of every student and supported by an employer cooperative agreement is accepted.',
    },
    screenshots: [
      { src: '/cpt-evidence/cpt_uiuc_notice.jpeg', width: 1206, height: 2622 },
    ],
  },
  {
    id: 'texas-a-m',
    checkedOn: "2026-10-21",
    school: 'Texas A&M',
    href: 'https://global.tamu.edu/isss/employment-internships/curricular-practical-training.html',
    tone: 'tighten',
    zh: {
      state: '收紧，但不是全面暂停',
      detail:
        '8·24 之后的新申请必须同时满足两条：实践为全体学生毕业要求，并有合作协议。不满足的申请会被拒绝。',
    },
    en: {
      state: 'Tighter review, not a full pause',
      detail:
        'New applications after August 24 must satisfy both the program-wide graduation requirement and cooperative-agreement standards.',
    },
    screenshots: [],
  },
  {
    id: 'ut-dallas',
    checkedOn: "2026-10-21",
    school: 'UT Dallas',
    href: 'https://isso.utdallas.edu/2026/09/17/update-on-cpt-policy-sevp-broadcast/',
    tone: 'tighten',
    zh: {
      state: '9·17 改为只批准学位目录要求的实习课',
      detail:
        'ISSO 在 9·17 通知中说明，与校方法律顾问确认后整体 CPT 政策维持不变，但按 SEVP 澄清收紧一处：只有学位目录写明实习课要求的学生才能获批 CPT。目录没有该要求的学生不能获批，也没有个案例外。需在校外完成论文或学位论文的研究生可申请 Academic CPT。8·25 通知曾称暂无变化，并表示如有调整将另行通知；9·17 通知是之后的更新。',
    },
    en: {
      state:
        'From September 17, only catalog-required internship courses are approved',
      detail:
        'ISSO said on September 17 that, after consulting university legal counsel, its overall CPT policy is unchanged but one point is tightened under the SEVP clarification: only students whose degree catalog lists an internship course requirement can be approved for CPT. Students without that catalog requirement cannot be approved, and there are no case-by-case exceptions. Graduate students who must complete research off campus for a thesis or dissertation may use Academic CPT. An August 25 post had reported no changes and promised updates if any followed; the September 17 notice is that later update.',
    },
    screenshots: [],
  },
  {
    id: 'university-of-michigan',
    checkedOn: "2026-10-21",
    school: 'University of Michigan',
    href: 'https://internationalcenter.umich.edu/about/news/updated-guidance-curricular-practical-training-cpt',
    tone: 'pause',
    zh: {
      state: '不再批准 elective-course CPT',
      detail:
        '学校只批准对该学位项目所有学生均为毕业必需的实践。已有的授权可以继续。',
    },
    en: {
      state: 'Elective-course CPT is no longer approved',
      detail:
        'Only training required for every student in the degree program may be approved; existing authorizations may continue.',
    },
    screenshots: [
      {
        src: '/cpt-evidence/cpt_michigan_notice.jpeg',
        width: 1544,
        height: 916,
      },
    ],
  },
  {
    id: 'northwestern-university',
    checkedOn: "2026-10-21",
    school: 'Northwestern University',
    href: 'https://www.northwestern.edu/international/international-students/student-employment/f-1-practical-training/curricular-practical-training/',
    tone: 'tighten',
    zh: {
      state: '仅处理项目全员必需的 CPT',
      detail:
        'OISS 9·29 更新的页面要求实践为项目所有学生毕业所必需；完成必需实践后不能再申请额外 CPT。符合条件者须提交校方与雇主的合作协议，通过 OISS 门户申请，由学业负责人确认全员必需，获批后领取注明 CPT 的 I-20。9·25 版本下方曾保留冲突的旧版“integral to or required”措辞，9·29 页面已删去；此前 9·03 通知截图保留作历史对照。',
    },
    en: {
      state: 'CPT processed only when required for every student',
      detail:
        'The OISS page updated September 29 requires training for every student in the program to graduate and bars further CPT after required experiential learning is complete. Eligible students submit an employer-school cooperative agreement through the OISS portal; an academic approver certifies the program-wide requirement before OISS issues a CPT I-20. The September 29 page removed conflicting older “integral to or required” wording that remained on September 25. The September 3 screenshot is retained as history.',
    },
    screenshots: [
      {
        src: '/cpt-evidence/cpt_northwestern_notice.png',
        width: 1284,
        height: 1690,
      },
    ],
  },
  {
    id: 'columbia-university',
    checkedOn: "2026-10-21",
    school: 'Columbia University',
    href: 'https://isso.columbia.edu/content/f-1-cpt-curricular-practical-training',
    tone: 'tighten',
    zh: {
      state: '暂停非全员必需的 CPT；8·24 前已批授权不撤销',
      detail:
        'ISSO 只批准课程体系内、全员必需且有 cooperative agreement 的 CPT。其他情形暂停。8·24 之前获批的 CPT 不会被撤销。校方 9·24 更新应对时间线，并称 9·23 开放 2026 秋季困难基金；资格标准未变。',
    },
    en: {
      state:
        'CPT not required for every student is paused; pre-August 24 approvals will not be rescinded',
      detail:
        'ISSO approves only CPT that is integral to the curriculum, required for all students, and supported by a cooperative agreement. Other cases are paused; CPT approved before August 24 will not be rescinded. A September 24 response timeline says the Fall 2026 hardship fund opened September 23; eligibility standards are unchanged.',
    },
    screenshots: [
      {
        src: '/cpt-evidence/cpt_columbia_notice.webp',
        width: 1080,
        height: 2047,
      },
    ],
  },
  {
    id: 'harvard-university',
    checkedOn: "2026-10-21",
    school: 'Harvard University',
    href: 'https://www.hio.harvard.edu/employment-training/curricular-practical-training',
    tone: 'tighten',
    zh: {
      state: '资格收紧，但校方未称全面停批',
      detail:
        '就业必须是正式记载的学位要求。申请人还要提供与该项目要求相关的 cooperative agreement。',
    },
    en: {
      state: 'Eligibility tightened; no university-wide pause announced',
      detail:
        'Employment must be a formally documented degree requirement and supported by an appropriate cooperative agreement.',
    },
    screenshots: [],
  },
  {
    id: 'university-of-washington',
    checkedOn: "2026-10-21",
    school: 'University of Washington',
    href: 'https://iss.washington.edu/follow-up-on-cpt-policy/',
    tone: 'pause',
    zh: {
      state: '9·08 确认继续暂停；秋季待审非必需 CPT 将被驳回',
      detail:
        '9·08 后续通知明确驳回所有秋季待审的非必需 CPT。新申请须由学术顾问证明：实践属于学生主修项目既定课程中全体学生的必需要求。8·26 通知允许已获授权者按 I-20 条件继续。9·08 没有宣布撤销既有授权。',
    },
    en: {
      state:
        'September 8: pause continues; pending non-required autumn CPT will be dismissed',
      detail:
        'The September 8 follow-up dismisses all pending non-required autumn CPT requests. New requests need an academic adviser’s attestation that training is required of all students in the established curriculum of the student’s primary program. The August 26 notice allowed existing authorizations to continue under their I-20 terms; the September 8 notice does not announce revocation.',
    },
    screenshots: [],
  },
  {
    id: 'university-of-maryland-college-park',
    checkedOn: "2026-10-21",
    school: 'University of Maryland, College Park',
    href: 'https://marylandglobal.umd.edu/global-learning-all/international-students-scholars/employment-taxes/employment-f-1-international-students/curricular-practical-training-cpt',
    tone: 'pause',
    zh: {
      state: '暂停非全员必修或非论文必需的新 CPT',
      detail:
        'ISSS 暂停不属于三类要求的未批准 CPT：全专业必修、必修课程、论文／学位论文研究要求。UNIV099、ENCO099、BMGT099 等非必修实习暂不受理。已获批的 CPT 可以继续。',
    },
    en: {
      state:
        'New CPT outside a program-wide requirement or required research is paused',
      detail:
        'ISSS paused unapproved requests unless the training is required for every student, is part of a required course, or is necessary for thesis or dissertation research. UNIV099, ENCO099, BMGT099, and other non-required internships are not being accepted; previously authorized CPT may continue.',
    },
    screenshots: [],
  },
  {
    id: 'trine-university',
    checkedOn: "2026-10-21",
    school: 'Trine University',
    href: 'https://www.trine.edu/international/hybrid/experiential-learning/cpt-information.aspx',
    tone: 'continue',
    zh: {
      state: '校方 CPT 页面仍列开放申请与审理流程',
      detail:
        '研究生 CPT 页面仍列出 2026–27 开始日期的申请截止日，并称申请持续开放、按收到顺序审理。页面看不到针对 8·24 指引的单独更新。个案资格仍应向 DSO 确认。',
    },
    en: {
      state:
        'The university CPT page still lists an open application and review process',
      detail:
        'The graduate CPT page lists application deadlines for 2026–27 start dates and says applications remain open and are reviewed in the order received. The page does not separately address the August 24 guidance, so students should confirm individual eligibility with their DSO.',
    },
    screenshots: [],
  },
  {
    id: 'mit',
    checkedOn: "2026-10-21",
    school: 'MIT',
    href: 'https://iso.mit.edu/employment/f-1-curricular-practical-training/',
    tone: 'pause',
    zh: {
      state: '暂停非项目全员学位必需的新 CPT',
      detail:
        'MIT 暂停一类新 CPT 申请：8·24 当日已收到或待审，且所涉实践并非全专业学生完成学位的必需经历。校方还将联系已获 2026 秋季 CPT 授权的学生，讨论后续选项。',
    },
    en: {
      state:
        'New CPT outside a program-wide degree requirement is temporarily paused',
      detail:
        'MIT paused new CPT requests received or pending as of August 24 when the training is not required for every student to complete the degree, and says it will contact students already issued Fall 2026 CPT to discuss options.',
    },
    screenshots: [
      { src: '/cpt-evidence/cpt_mit.jpeg', width: 1080, height: 2341 },
    ],
  },
  {
    id: 'ucsb',
    checkedOn: "2026-10-21",
    school: 'UCSB',
    href: 'https://oiss.ucsb.edu/curricular-practical-training',
    tone: 'continue',
    zh: {
      state: '现行官网列出 CPT 申请及审批流程',
      detail:
        "10·21 OISS 页面说明符合条件者可通过 UCSBGlobal 申请，获批后领取带 CPT 授权的 I-20。页面将实践表述为“与学位相关且为项目组成部分”，不再采用先前“学位课程要求”的文字，但未注明修改日期，也未宣布所有 CPT 类型无条件恢复；此前 8 月暂停通知已不显示。附图保留旧公告供对照。",
    },
    en: {
      state: 'Current university page describes CPT applications and approvals',
      detail:
        "The OISS page read October 21 directs eligible students to apply through UCSBGlobal and says approved students receive a CPT-authorized I-20. It now calls training related to and integral to the degree rather than a degree-course requirement, without dating that wording change or announcing unrestricted eligibility. The August pause notice is no longer displayed; screenshots preserve the earlier notice as history.",
    },
    screenshots: [
      { src: '/cpt-evidence/cpt_ucsb_1.jpeg', width: 1080, height: 1677 },
      { src: '/cpt-evidence/cpt_ucsb_2.jpeg', width: 1080, height: 1508 },
    ],
  },
  {
    id: 'new-york-university-tandon-mathematics',
    checkedOn: "2026-10-21",
    school: 'New York University (Tandon Mathematics)',
    href: 'https://math.nyu.edu/dynamic/sites/tandon/internships/',
    tone: "tighten",
    zh: {
      state: "页面列申请步骤；原暂停通知不再显示，恢复待确认",
      detail:
        "Tandon 数学系当前实习页列课程注册、向 OGS 提交材料及获批后工作的步骤，已不显示先前自 9·01 暂停 CPT 的通知。通用申请说明本身不能确认暂停已解除；未核实院系现行审批或恢复日期。本条仅限数学系本科生与研究生，不外推 NYU 全校。",
    },
    en: {
      state:
        "Application steps listed; earlier pause notice absent, reopening unverified",
      detail:
        "The current Tandon Mathematics page lists course registration, OGS documents and authorization before work, without the earlier September 1 pause notice. General application instructions alone do not establish that the pause was lifted; current approvals and a reopening date remain unverified. This covers mathematics undergraduates and graduates, not a university-wide NYU policy.",
    },
    screenshots: [],
  },
  {
    id: 'university-of-southern-california',
    checkedOn: "2026-10-21",
    school: 'University of Southern California',
    href: 'https://ois.usc.edu/important-update-regarding-curricular-practical-training/',
    tone: 'tighten',
    zh: {
      state: '自 8·24 起仅批准毕业必需的 CPT',
      detail:
        'OIS 不再接受非全项目学生必修的选修课型 CPT。补充材料核验可能延迟审批。8·24 之前已签发的 2026 秋季 CPT 授权不会被撤销。',
    },
    en: {
      state: 'Only CPT required for graduation is approved from August 24',
      detail:
        'OIS no longer accepts elective-course CPT that is not required for every student in the program. Documentation review may delay approvals; Fall 2026 CPT authorizations issued before August 24 will not be rescinded.',
    },
    screenshots: [],
  },
  {
    id: 'university-of-alabama',
    checkedOn: "2026-10-21",
    school: 'University of Alabama',
    href: 'https://international.ua.edu/news/curricular-practical-training-cpt-changes-effective-immediately/',
    tone: 'tighten',
    zh: {
      state: '自 8·31 起收紧 CPT 资格审核',
      detail:
        'ISSS 要求院系证明实践属于两种情况之一。第一种：学位项目或方向全体学生必需。第二种：论文型硕士、博士完成论文所必需。学位要求须有课程目录依据。仅为选修课要求的 CPT 不符合标准。',
    },
    en: {
      state: 'Stricter CPT eligibility review began August 31',
      detail:
        'ISSS requires departments to document whether training is required for all students in the degree program or track, or is necessary for thesis-track master’s or doctoral students to complete their thesis or dissertation. Degree requirements must be supported by the academic catalog; an elective-course requirement alone does not qualify.',
    },
    screenshots: [],
  },
  {
    id: 'uc-irvine',
    checkedOn: "2026-10-21",
    school: 'UC Irvine',
    href: 'https://ic.uci.edu/welcome-students/students-current-students/students-current-employment-information/curricular-practical-training/',
    tone: 'tighten',
    zh: {
      state: '只批准学位必需或论文必需的 CPT，并须有合作协议',
      detail:
        "10·21 复查的国际中心页面为常设政策说明：按当前 SEVP 指引，选修课、可选实习或可选工作不能获批 CPT；获批须同时满足学位必需，以及雇主与学校之间有合作协议。页面列出设有实习或实地研究学位要求的项目，并新增硕士论文／博士论文必需 CPT：仅限已进入候选阶段（Advanced to Candidacy）的论文型硕士或博士生，且实践为完成论文所必需、无法以其他方法或数据收集方式合理替代。此前页面上的 8·17 Course Credit CPT 暂停通知和 9·14 置顶通知已不再显示；页面未标注更新日期，也未说明已有授权如何处理。附图为此前暂停 Course Credit CPT 的邮件截图，保留供对照。",
    },
    en: {
      state: 'Only degree-required or thesis/dissertation-required CPT, with a cooperative agreement',
      detail:
        "The International Center page rechecked October 21 is a standing policy page: under current SEVP guidance, CPT cannot be approved for elective courses, optional internships or optional employment, and approval requires both a degree requirement and a cooperative agreement between the employer and the campus. The page lists programs with an internship or field-study degree requirement and adds Master’s Thesis/Doctoral Dissertation Requirement CPT, limited to thesis-track master’s or doctoral students who have Advanced to Candidacy, when the training is required to complete the thesis or dissertation and cannot reasonably be replaced by another method or data-collection process. The earlier August 17 Course Credit CPT pause notice and the September 14 top notice no longer appear; the page shows no update date and does not address existing authorizations. The attached screenshot shows the earlier Course Credit CPT pause email, kept for comparison.",
    },
    screenshots: [
      { src: '/cpt-evidence/cpt_uci.jpeg', width: 1080, height: 1731 },
    ],
  },
  {
    id: 'university-of-utah',
    checkedOn: "2026-10-21",
    school: 'University of Utah',
    href: 'https://www.isss.utah.edu/news/posts/2026/cpt-broadcast-message-update.php',
    tone: 'pause',
    zh: {
      state: '自 9·03 起暂停非全员必需的新 CPT',
      detail:
        'ISSS 暂停 optional CPT 授权。UAtlas 仍可提交申请，但审核结束前不批准此类请求。已有的授权按当前 I-20 的雇主、地点与日期继续。',
    },
    en: {
      state:
        'New CPT not required for every student is paused from September 3',
      detail:
        'ISSS paused optional CPT authorizations. UAtlas still accepts requests, but optional cases will not be approved until review is complete. Existing authorizations continue under the employer, location, and dates on the current I-20.',
    },
    screenshots: [],
  },
  {
    id: 'university-of-delaware',
    checkedOn: "2026-10-21",
    school: 'University of Delaware',
    href: 'https://www.udel.edu/academics/global/isss/announcements/',
    tone: 'pause',
    zh: {
      state: '暂停非全员必需的新 CPT 授权',
      detail:
        '9·02 公告称 CGPS 暂停 optional CPT。学生仍可提交申请，但审核结束前不会签发此类新授权，处理也可能延迟。',
    },
    en: {
      state: 'New CPT not required for every student is paused',
      detail:
        'The September 2 notice says CGPS paused optional CPT. Students may still submit requests, but no new optional authorizations will be issued until review is complete, and processing delays are expected.',
    },
    screenshots: [],
  },
  {
    id: 'uc-san-diego',
    checkedOn: "2026-10-21",
    school: 'UC San Diego',
    href: 'https://iseo.ucsd.edu/student-services/working-in-us/f1-cpt.html',
    tone: 'tighten',
    zh: {
      state: '现行官网列出合格项目的 CPT 申请流程',
      detail:
        'ISEO 现行页面不再显示此前 iServices 全部请求暂停通知，并列出获校内核实的 CPT 项目与申请步骤：实践须为该项目所有学生毕业所必需，学生须有相关职位、课程或合作教育安排，由院系和 ISEO 审核，取得注明 CPT 的 I-20 后才能开始工作。已列项目包括本科生物工程、电影艺术、环境系统、全球健康、城市规划及生物工程硕士；未列项目可请院系提交资格审查。页面还说明研究生夏季合作教育路径。官网未注明何时恢复提交或这些项目何时获准，不能推断所有项目都恢复。',
    },
    en: {
      state: 'Current site lists a CPT application process for qualifying programs',
      detail:
        'ISEO no longer displays its prior pause of all iServices CPT requests and now lists verified programs and application steps. Training must be required for every student in the program; eligible students need a related job and a course or cooperative education arrangement, then department and ISEO review and a CPT-authorized I-20 before work. Listed programs include undergraduate Bioengineering, Cinematic Arts, Environmental Systems, Global Health, Urban Studies and the Bioengineering MEng. Departments may seek review for unlisted programs; a graduate summer cooperative education route is also described. The site does not date reopening or approval of these programs, so this is not unrestricted resumption.',
    },
    screenshots: [],
  },
  {
    id: 'university-of-maryland-baltimore-county',
    checkedOn: "2026-10-21",
    school: 'University of Maryland, Baltimore County',
    href: 'https://isss.umbc.edu/updates/',
    tone: 'tighten',
    zh: {
      state: '待审及未来 CPT 仅限全项目学生必需的实践',
      detail:
        'OISS 9·04 更新称，待审与未来申请都按全项目学生必需的实践要求审核。已经签发的 2026 秋季 CPT 授权不会被撤销。本条单列 UMBC 校区。',
    },
    en: {
      state:
        'Pending and future CPT is limited to training required for every student in the program',
      detail:
        'The September 4 OISS update limits pending and future requests to programs requiring practical training for every student. Already issued Fall 2026 CPT authorizations will not be revoked. This record covers the UMBC campus.',
    },
    screenshots: [],
  },
  {
    id: 'george-washington-university',
    checkedOn: "2026-10-21",
    school: 'George Washington University',
    href: 'https://internationalservices.gwu.edu/updated-guidance-curricular-practical-training-cpt',
    tone: 'pause',
    zh: {
      state: '暂停非全员必需的新 CPT 授权',
      detail:
        'ISO 9·02 公告称，不再批准非学位项目全体学生必需的新 CPT。已有的授权可按当前 I-20 的雇主地点、日期及其他条件继续。',
    },
    en: {
      state: 'New CPT not required for every student is paused',
      detail:
        'The September 2 ISO notice pauses new CPT that is not required for all students in the degree program. Existing authorizations continue under the employer location, dates, and other conditions on the current I-20.',
    },
    screenshots: [],
  },
  {
    id: 'university-of-colorado-boulder',
    checkedOn: "2026-10-21",
    school: 'University of Colorado Boulder',
    href: 'https://www.colorado.edu/isss/2026/08/20/change-cpt-authorization-policy-faqs',
    tone: 'tighten',
    zh: {
      state: '仅处理课程目录列明的学位／主修必需 CPT',
      detail:
        '8·31 更新称，只处理校方列出的、实践为学位或主修毕业必需的项目，minor 不符合。仅供选修学分的实习不获批。已授权的 2026 秋季 CPT 不受影响。',
    },
    en: {
      state: 'CPT is limited to catalog-listed degree or major requirements',
      detail:
        'The August 31 update limits CPT to listed programs requiring practical training for degree or major completion; a minor does not qualify. Elective internship credit alone is insufficient. Already authorized Fall 2026 CPT is unaffected.',
    },
    screenshots: [],
  },
  {
    id: 'university-of-wisconsin-milwaukee',
    checkedOn: "2026-10-21",
    school: 'University of Wisconsin-Milwaukee',
    href: 'https://uwm.edu/cie/services/students/employment/curricular-practical-training/',
    tone: 'tighten',
    zh: {
      state: '自 8·24 起仅批准全项目学生必需的 CPT',
      detail:
        'ISSS 要求实践是学位项目全体学生明确的必修要求。8·24 之前已获批的 CPT 可持续到当前授权结束日。',
    },
    en: {
      state:
        'Only CPT required for every student in the program is approved from August 24',
      detail:
        'ISSS requires an articulated practical-training requirement for all students in the academic program. CPT approved before August 24 remains authorized through its current end date.',
    },
    screenshots: [],
  },
  {
    id: 'university-of-oregon',
    checkedOn: "2026-10-21",
    school: 'University of Oregon',
    href: 'https://isss.uoregon.edu/curricular-practical-training-cpt',
    tone: 'tighten',
    zh: {
      state: '不再批准仅供选修实习学分的 CPT',
      detail:
        'ISSS 现行页面要求实践属于全员必修、必需硕士论文／毕业项目、博士论文或 DMA 结业项目。博士生须进入候选阶段并有导师说明。学分数按项目要求与学业导师商定；旧页面的一学分统一最低要求已不再显示，不能仅据页面删改判断具体项目无需学分。页面未注明本次修订日期。',
    },
    en: {
      state:
        'CPT solely for optional internship credit is no longer authorized',
      detail:
        'The current ISSS page limits CPT to a program-wide requirement or training integral to a required master’s thesis/final project, doctoral dissertation or DMA culminating project. Doctoral students must have advanced to candidacy and obtain a faculty explanation. Credit registration depends on the program and academic advisor; the former uniform one-credit minimum no longer appears, which does not establish that a particular program needs no credit. The page does not date this revision.',
    },
    screenshots: [],
  },
  {
    id: 'university-of-kansas',
    checkedOn: "2026-10-21",
    school: 'University of Kansas',
    href: 'https://iss.ku.edu/f-1-cpt-curricular-practical-training',
    tone: "tighten",
    zh: {
      state: "现行页面称可批准毕业必需 CPT；调整日期未注明",
      detail:
        "ISS 当前页首说，将授权学位必需的实习／实践 CPT，原先暂停所有请求的通知已不再显示；页面继续列院系推荐、iHawk 请求及获批后工作的流程。没有注明调整日期或既有授权如何处理。下方较宽泛的定义不等于所有选修实习已恢复。",
    },
    en: {
      state: "Current page allows degree-required CPT; change date not stated",
      detail:
        "The current ISS notice says it will authorize CPT for internships/practica required for the degree, replacing the earlier notice pausing all requests. Department recommendation, iHawk requests and authorization before work remain listed. No change date or existing-approval treatment is stated. Broader wording lower on the page does not establish reopening of all elective internships.",
    },
    screenshots: [],
  },
  {
    id: 'george-mason-university',
    checkedOn: "2026-10-21",
    school: 'George Mason University',
    href: 'https://oips.gmu.edu/current-immigration-information/',
    tone: 'pause',
    zh: {
      state: '暂停无法证明全员毕业必需的 2026 秋季 CPT 审理',
      detail:
        'OIPS 正在审核 CPT 政策，要求提供证明：实践为该学位项目全体学生毕业所必需。仅为选修课，或只是多个可选毕业路径之一的实习，都不满足标准。公告没有说明已有的授权如何处理。',
    },
    en: {
      state:
        'Fall 2026 CPT processing is paused without proof of a program-wide graduation requirement',
      detail:
        'During its CPT policy review, OIPS requires proof that training is necessary for every student in the degree program to graduate. An elective internship or one of several optional ways to satisfy a degree requirement does not meet that standard. The notice does not explain how existing authorizations are treated.',
    },
    screenshots: [],
  },
  {
    id: 'ucla',
    checkedOn: "2026-10-21",
    school: 'UCLA',
    href: 'https://internationalcenter.ucla.edu/September8message',
    tone: 'pause',
    zh: {
      state: '暂停非全员毕业必需的课程学分／支持信 CPT；学位必需 CPT 继续',
      detail:
        '9·08 校方通知暂停 8·12 起提交的非全员毕业必需申请。论文、研究或 capstone 所需实践也须列入 UCLA General Catalog 的全员项目要求。8·12 之前已获批并签发 CPT I-20 的授权不受影响。所有 CPT 申请须附院系与雇主的合作协议。',
    },
    en: {
      state:
        'Non-degree-required course-credit and support-letter CPT is suspended; degree-required CPT continues',
      detail:
        'The September 8 notice suspends non-degree-required applications submitted from August 12. Dissertation, thesis, research, or capstone training must also be a requirement for every student in the program in the UCLA General Catalog. CPT approved with an I-20 issued before August 12 is unaffected. All CPT applications require a department-employer cooperative agreement.',
    },
    screenshots: [
      { src: '/cpt-evidence/cpt_ucla.jpeg', width: 1144, height: 667 },
    ],
  },
  {
    id: 'university-of-pennsylvania',
    checkedOn: "2026-10-21",
    school: 'University of Pennsylvania (UPenn)',
    href: 'https://global.upenn.edu/isss/cpt/',
    tone: 'tighten',
    zh: {
      state: '9·10 通知称恢复处理符合现行课程要求的 CPT 请求',
      detail:
        'ISSS 最新通知称，只恢复处理一类请求：实践是既定课程必要且必需的组成部分。须经院系确认，并由雇主完成 Penn 合作协议。获批并取得新 I-20 后才能工作。同页下方仍保留待审请求暂停的旧说明。个案恢复进度须向 ISSS 确认，不能视为全面恢复。',
    },
    en: {
      state:
        'September 10 notice says processing has resumed for CPT meeting current curricular requirements',
      detail:
        'The latest ISSS notice limits resumed processing to training that is an integral and required curricular component. Department confirmation and the employer’s Penn cooperative agreement are required; students need approval and a new I-20 before working. Lower on the same page, older pending-request pause language remains. Confirm individual processing with ISSS; this is not an unrestricted reopening.',
    },
    screenshots: [],
  },
  {
    id: 'northeastern-university-coe-masters',
    checkedOn: "2026-10-21",
    school: 'Northeastern University (COE Master’s)',
    href: "https://coe.northeastern.edu/academics-experiential-learning/co-op-experiential-learning/co-op/graduate-co-op/masters-co-op/",
    tone: 'tighten',
    zh: {
      state: '工程学院硕士项目只允许一次 co-op／internship，最长 8 个月',
      detail:
        "COE 硕士项目现页明确每个项目只可参加一次、同一雇主 4–8 个月的 co-op，并将 internship、practicum 等一并计入。此为学院项目限制，不能外推全校或保证个案 CPT 获批，也不属于已确认的新规。页面未标明规定发布日期；此前 FAQ 链接及博士页面本次返回 404，无法核实当前博士实习政策。",
    },
    en: {
      state:
        'COE master’s programs allow one co-op/internship, up to eight months',
      detail:
        "The current COE master’s page permits one co-op experience at a single employer for 4–8 months per program and includes internships, practicums and similar experiences in that limit. This is a college/program restriction, not a university-wide rule or a guarantee of individual CPT approval, and is not a confirmed new policy. No publication date is given; the earlier FAQ link and doctoral page returned 404 in this review, leaving current doctoral internship policy unverified.",
    },
    screenshots: [],
  },
  {
    id: 'georgetown-university',
    checkedOn: "2026-10-21",
    school: 'Georgetown University',
    href: 'https://internationalservices.georgetown.edu/immigration-updates/',
    tone: 'tighten',
    zh: {
      state: '仅限全员课程必需的 CPT；选修实习不符合资格',
      detail:
        'OGS 9·09 更新称，实践必须为既定课程全体学生（不分国籍）必需。学校已联系 8·24 时待审的申请人，以及持有秋季授权的学生，讨论影响和选项。校方没有承诺所有既有授权都不受影响。该日期是校方更新日，不是新的 SEVP 指引发布日期。',
    },
    en: {
      state:
        'CPT must be required for all students in the curriculum; elective internships are ineligible',
      detail:
        'The September 9 OGS update requires training for all students in the established curriculum, regardless of citizenship. OGS contacted applicants pending as of August 24 and students holding fall authorizations about impacts and options, without promising all existing authorizations are unaffected. September 9 is the university update date, not a new SEVP guidance date.',
    },
    screenshots: [],
  },
  {
    id: 'james-madison-university',
    checkedOn: "2026-10-21",
    school: 'James Madison University',
    href: 'https://www.jmu.edu/global/isss/announcements.shtml',
    tone: 'pause',
    zh: {
      state: '暂停新申请和待审 CPT 决定，等待校内审查',
      detail:
        "校方 Immigration Announcements 页（CPT 栏标题为 2026 年 8 月）称，因 8·24 联邦指引，暂缓新申请和待审请求的决定。学校正在加速审查课程及流程。公告没有说明已有的授权如何处理，也没有给出恢复日期。",
    },
    en: {
      state:
        'Decisions on new and pending CPT requests paused during university review',
      detail:
        "The Immigration Announcements page (CPT section headed August 2026) says decisions on new and pending requests are temporarily paused while JMU reviews academic programs and processes after the August 24 guidance. It does not specify treatment of existing authorizations or a resumption date.",
    },
    screenshots: [],
  },
  {
    id: 'boston-college',
    checkedOn: "2026-10-21",
    school: 'Boston College',
    href: 'https://www.bc.edu/content/bc-web/sites/global-engagement/sites/office-of-international-students-and-scholars/maintain/jcr%3Acontent/bottompar/bc_padded_section/par/bc_news_notes.newsItems.html',
    tone: 'pause',
    zh: {
      state: '暂停非全专业学生必需的校外 CPT 审批',
      detail:
        "OISS 9·09 公告暂停非全专业学生毕业必需的校外 CPT，选修学分不足以符合资格。10·14 后续通知介绍 10·05 诉讼及 11·06 听证，并明确等待诉讼期间仍执行 8 月指引；没有宣布恢复或说明已有授权如何处理。",
    },
    en: {
      state:
        'CPT approvals paused for off-campus activities not required of every student in the degree program',
      detail:
        "The September 9 OISS notice pauses off-campus CPT not required of all students for graduation; optional credit alone is insufficient. An October 14 follow-up reports the October 5 lawsuit and November 6 hearing and expressly retains the August guidance during litigation. It neither reopens CPT nor addresses existing approvals.",
    },
    screenshots: [],
  },
  {
    id: 'johns-hopkins-university',
    checkedOn: "2026-10-21",
    school: 'Johns Hopkins University',
    href: 'https://ois.jhu.edu/students/current-f-1-students/f-1-training-and-employment/curricular-practical-training/',
    tone: 'tighten',
    zh: {
      state: "新申请和待审 CPT 仅限符合毕业要求的实践",
      detail:
        "10·21 已通过公开网页读取 OIS 全文，解除此前直连失败的缺口。页首限定新申请和待审请求为毕业必需且符合 SEVP 备忘录的实习／实践，合格请求继续处理；正文仍有学分等一般说明，不能据此认定选修 CPT 恢复。已有授权如何处理仍未说明，D/S 暂缓令不自动改变 CPT。",
    },
    en: {
      state: "New and pending CPT requests limited to degree-required training",
      detail:
        "The full public OIS page was retrieved October 21, resolving the earlier direct-access gap. Its notice limits new/pending requests to degree-required training consistent with SEVP memos and continues processing qualifying requests. General credit wording does not establish elective-CPT reopening. Existing authorization treatment is still not stated; D/S relief does not automatically change CPT.",
    },
    screenshots: [],
  },
  {
    id: 'washington-state-university',
    checkedOn: "2026-10-21",
    school: 'Washington State University',
    href: 'https://ip.wsu.edu/august-7th-2026-special-immigration-advisory/',
    tone: 'tighten',
    zh: {
      state: '计划自 2027 春季限制学年内全职 CPT，保留必需实习例外',
      detail:
        "8·07 校方公告称，自 2027 年春季起，学年内不再批准全职 CPT，课程明确要求实习的项目除外（例如 Hospitality Business Management、Clinical Psychology）。该通知早于 8 月 SEVP 备忘录，不代表当前全面停批，也没有说明是否取消暑期或兼职 CPT。公告注明内容可能不适用于所有校区。10·21 重读 8·07 公告及 10·09、10·16 后续通告；后两份分别涉及旧移民文件留存与春季注册，以及拟议 OPT 费用和在校事项，均未修改该 CPT 安排。未据此推断其他后续 CPT 通知不存在。",
    },
    en: {
      state:
        'Plans to restrict full-time academic-year CPT from Spring 2027, with required-internship exceptions',
      detail:
        "The August 7 university notice says full-time CPT during the academic year will no longer be approved from Spring 2027, except in programs with an internship explicitly required by the curriculum (for example, Hospitality Business Management and Clinical Psychology). It predates the August SEVP memoranda and does not establish a current blanket pause or cancel summer/part-time CPT. The notice says it may not apply at every campus. The August 7 notice and October 9 and 16 advisories were reread October 21. The latter two address document retention/spring registration and proposed OPT fees/campus matters respectively, without revising this CPT arrangement. This does not establish that no other later CPT notice exists.",
    },
    screenshots: [],
  },
  {
    "id": "adelphi-university",
    "checkedOn": "2026-10-21",
    "school": "Adelphi University",
    "href": "https://www.adelphi.edu/policies/curricular-practical-training-cpt-policy/",
    "tone": "tighten",
    "zh": {
      "state": "10·15 修订：实践须为课程体系必需，并有校企合作协议",
      "detail": "校方政策要求实践是既定课程的必需部分、与主修直接相关，雇主须与学校有合作协议，并同期注册课程取得学分。仅为职业经验、简历、minor 或一般毕业要求的实践不足以符合资格。学年内通常限兼职，项目要求全职者除外。政策没有宣布全面停批、恢复或已有授权的处理方式。"
    },
    "en": {
      "state": "October 15 revision: required curricular training and a cooperative agreement",
      "detail": "The university policy requires training integral to the established curriculum, required in the applicable program and directly related to the major, with an employer-school cooperative agreement and concurrent credit. Career experience, résumé building, a minor or a general graduation requirement alone is insufficient. Academic-year CPT is generally part-time unless the program requires full-time training. The policy does not announce a blanket pause, reopening or treatment of existing approvals."
    },
    "screenshots": []
  },
  {
    "id": "north-carolina-state-university",
    "checkedOn": "2026-10-21",
    "school": "North Carolina State University (NC State)",
    "href": "https://internationalservices.ncsu.edu/curricular-practical-training/",
    "tone": "tighten",
    "zh": {
      "state": "仅限全员学位必需或严格论文研究 CPT",
      "detail": "OIS 现行页面按 8·24 指引，排除选修实习、co-op 和选修研究；允许项目全体学生毕业必需的实践，或没有校外环节就无法完成的论文研究，后者须导师有力书面说明。须有雇主合作协议和课程或研究学分。页面未注明此口径修订日期，也未宣布全面暂停或说明已有授权如何处理。"
    },
    "en": {
      "state": "Only program-wide degree requirements or indispensable thesis research",
      "detail": "The current OIS page applies the August 24 guidance and excludes elective internships, co-ops and research. It permits training required of all program students or off-campus research without which a thesis or dissertation cannot be completed, supported by strong written advisor justification. A cooperative agreement and course or research enrollment are required. No revision date for this standard, blanket pause or treatment of existing approvals is specified."
    },
    "screenshots": []
  },
  {
    "id": "western-michigan-university",
    "checkedOn": "2026-10-21",
    "school": "Western Michigan University (WMU)",
    "href": "https://wmich.edu/international/immigration/news",
    "tone": "tighten",
    "zh": {
      "state": "10·16 通知：2027 春季起限全员课程必需 CPT",
      "detail": "I3S 10·16 通知写明从 2027 春季起，实践须为既定课程中所有学生的必需要求；学校称已识别约 52 个要求校外经历的项目，并链接合格项目列表。此为学校未来学期的安排，不是新的联邦生效日，也未宣布当前全面停批或已有授权失效。"
    },
    "en": {
      "state": "October 16 notice: program-wide required CPT from spring 2027",
      "detail": "The October 16 I3S notice sets spring 2027 implementation of a requirement that training be mandatory for all students in the established curriculum. WMU reports approximately 52 programs requiring off-campus experience and links its approved-program list. This is a future campus arrangement, not a new federal effective date; it does not announce a current blanket pause or invalidation of existing approvals."
    },
    "screenshots": []
  }
];

export const communitySchools: CommunitySchoolRecord[] = [
  {
    id: 'unc-chapel-hill',
    checkedOn: "2026-10-21",
    school: 'UNC–Chapel Hill',
    zh: {
      state: 'ISSS 邮件截图：除严格毕业要求外暂停',
      detail: "10·21 重读保存的邮件截图；仅能确认当时邮件内容，未核实校方公开公告或此后是否调整。",
    },
    en: {
      state:
        'An ISSS email screenshot says CPT is paused except where it is a strict graduation requirement.',
      detail:
        "The saved email screenshot was reread October 21. It supports the message at that time; no public university notice or later status was verified.",
    },
    screenshots: [
      { src: '/cpt-evidence/cpt_unc.jpeg', width: 1080, height: 1875 },
    ],
  },
  {
    id: 'caltech',
    checkedOn: "2026-10-21",
    school: 'Caltech',
    zh: {
      state: 'ISP 通知截图：暂停全部新 CPT，当前参与者不受影响',
      detail: "10·21 重读保存的通知截图；仅能确认当时通知，未核实校方公开公告或此后是否调整。",
    },
    en: {
      state:
        'An ISP notice screenshot says all new CPT is paused; current participants are unaffected.',
      detail:
        "The saved notice screenshot was reread October 21. It supports the notice at that time; no public university notice or later status was verified.",
    },
    screenshots: [
      { src: '/cpt-evidence/cpt_caltech.jpeg', width: 1080, height: 1413 },
    ],
  },
  {
    id: 'purdue-ece',
    checkedOn: "2026-10-21",
    school: 'Purdue ECE',
    zh: {
      state:
        'ECE 邮件截图称本学期不批非必需的实习／co-op CPT；论文研究请另问 ISS；仅限 ECE 口径',
      detail: "10·21 重读保存的 ECE 邮件截图；仅能确认该院系当时口径，未核实校方公开公告或此后是否调整，不能外推普渡全校。",
    },
    en: {
      state:
        'A department email screenshot says non-required internship/co-op CPT will not be approved this semester; students should separately consult ISS about work needed for thesis research. This statement covers ECE only.',
      detail:
        "The saved ECE email screenshot was reread October 21. It supports that department’s message at the time; no public university notice or later status was verified, and it cannot be generalized to Purdue University.",
    },
    screenshots: [
      { src: '/cpt-evidence/cpt_purdue.jpeg', width: 1320, height: 1893 },
    ],
  },
  {
    id: 'goldey-beacom-college',
    checkedOn: "2026-10-21",
    school: 'Goldey-Beacom College',
    zh: {
      state:
        '学校邮件截图称暂停新的 CPT 审核与批准；尚未加入 SEVIS 的申请暂不获批',
      detail: "10·21 重读保存的学校邮件截图；仅能确认当时邮件内容，未核实校方公开公告或此后是否调整。",
    },
    en: {
      state:
        'A school email screenshot says new CPT review and approval are paused; requests not already added in SEVIS will not be approved for now.',
      detail:
        "The saved email screenshot was reread October 21. It supports the message at that time; no public university notice or later status was verified.",
    },
    screenshots: [
      {
        src: '/cpt-evidence/cpt_goldey_beacom.jpeg',
        width: 1080,
        height: 2202,
      },
    ],
  },
];

export function getVerifiedSchools(language: Language): VerifiedSchool[] {
  return verifiedSchools.map(({ zh, en, ...school }) => ({
    ...school,
    ...(language === 'en' ? en : zh),
  }));
}

export function getCommunitySchools(language: Language): CommunitySchool[] {
  return communitySchools.map(({ zh, en, ...school }) => ({
    ...school,
    ...(language === 'en' ? en : zh),
  }));
}

export const schoolRecordCount =
  verifiedSchools.length + communitySchools.length;
