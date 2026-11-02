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
    "id": "portland-community-college",
    "checkedOn": "2026-11-01",
    "school": "Portland Community College (PCC)",
    "href": "https://www.pcc.edu/international-students/student-resources/",
    "tone": "tighten",
    "zh": {
      "state": "暂停：非必修课程不再签发 CPT",
      "detail": "OISS 公开 CPT 段落称，收到 2026 年 8 月 SEVP 广播后，已停止为完成学位或项目并非必需的课程签发 CPT，并正与移民律师修订政策。该段没有写暂停起始日或新政策何时出台。"
    },
    "en": {
      "state": "Paused: no CPT for courses the program doesn’t require",
      "detail": "The public OISS CPT section says that, following the August 2026 SEVP broadcasts, it stopped issuing CPT for classes not required to complete a degree or program and is revising its policy with immigration attorneys. No start date or timeline for the new policy is given."
    },
    "screenshots": []
  },
  {
    "id": "depaul-university",
    "checkedOn": "2026-11-01",
    "school": "DePaul University",
    "href": "https://offices.depaul.edu/global-engagement/student-resources/student-services/Pages/employment.aspx",
    "tone": "tighten",
    "zh": {
      "state": "只批必修、计学分的实习；三种课程方式，由 ISS 逐个审批",
      "detail": "就业页“新 CPT 政策”（2026·09·14 更新）要求实践是专业课程的必修内容并且计学分；只与专业相关、选修实习或单纯注册学分都不够。合格结构有三类：含必需实习的必修学分课程；项目所有学生都要完成的独立毕业实践；项目规定可在论文／毕业项目与计学分实习之间选择的必需路径。须先联系学业顾问，经 ISS 审查并取得 CPT I-20 后才能开始。第三类和移民更新页“所有学生必修”的表述如何衔接，可向 ISS 确认。"
    },
    "en": {
      "state": "Only required, for-credit training; three program setups, each reviewed by ISS",
      "detail": "The employment page’s New CPT Policy (updated September 14, 2026) requires training to be a required, credit-bearing part of the program; relevance, an optional internship or credit enrollment alone is not enough. Three structures qualify: a required for-credit course with a built-in internship; a standalone graduation requirement for every program student; or a program requirement that can be met through either a thesis/capstone or a credit-bearing internship. Students consult advisers, get ISS review and receive a CPT I-20 before starting. Ask ISS how the third route fits the all-student wording on its immigration-update page."
    },
    "screenshots": []
  },
  {
    "id": "case-western-reserve-university",
    "checkedOn": "2026-11-01",
    "school": "Case Western Reserve University (CWRU)",
    "href": "https://case.edu/visa/international-students/international-student-employment/f-1-student-employment-and-training",
    "tone": "pause",
    "zh": {
      "state": "9·08 起暂停新的 CPT 申请",
      "detail": "VISA Office 就业页写明自 2026·09·08 起暂停新 CPT 申请，恢复时会在 News and Updates 公布。9·08 公告说明学校正在与各项目核对所有学生必修标准，期间暂停处理。目前还没有恢复公告。"
    },
    "en": {
      "state": "New CPT applications paused since September 8",
      "detail": "The VISA Office employment page pauses new CPT applications from September 8, 2026 and says reopening will be posted on News and Updates. Its September 8 notice explains that programs are being reviewed against the all-student requirement during the pause. No reopening has been announced."
    },
    "screenshots": []
  },
  {
    "id": "university-of-nebraska-omaha",
    "checkedOn": "2026-11-01",
    "school": "University of Nebraska at Omaha (UNO)",
    "href": "https://web.unomaha.edu/curricular-practical-training-cpt-information",
    "tone": "tighten",
    "zh": {
      "state": "只批所有学生毕业都必须做的实习；先拿到 I-20 再上班",
      "detail": "UNO 政策更新页把这份 ISSS 通知列为 9·17 CPT 信息：经 Nebraska 系统法律办公室审阅，只能批准项目内每位学生毕业都必需的实习。学生须向学业顾问确认学分和所有学生的毕业要求，经 iGlobal 申请并取得带 CPT 授权的 I-20 后才能开始。本条为 Omaha 校区。"
    },
    "en": {
      "state": "Only internships every student must do to graduate; get the I-20 before starting",
      "detail": "UNO’s policy-update page lists this ISSS notice as its September 17 CPT information. After Nebraska System legal review, only internships required for every student’s graduation can be approved. Students confirm internship credit and the all-student requirement with advisers, apply in iGlobal and receive a CPT-authorized I-20 before starting. This entry covers the Omaha campus."
    },
    "screenshots": []
  },
  {
    "id": "illinois-institute-of-technology",
    "checkedOn": "2026-11-01",
    "school": "Illinois Institute of Technology (Illinois Tech)",
    "href": "https://www.iit.edu/global-services/student-employment/curricular-practical-training-cpt",
    "tone": "tighten",
    "zh": {
      "state": "专业不要求实习的，CPT 暂停",
      "detail": "OGS 9·04 更新称，暂停处理没有强制实践毕业要求的项目的 CPT；只注册选修实习／实践课不符合所有学生学位必需标准。页面介绍和 Career Services 仍有“必需或计学分”的旧措辞，以 9·04 更新为准。"
    },
    "en": {
      "state": "Paused for programs that don’t require practical training",
      "detail": "The September 4 OGS update pauses CPT for programs without a mandatory practical-training degree requirement; enrolling in an elective internship or practicum course does not meet the all-student standard. Older “required or taken for credit” wording remains in the introduction and on Career Services; the September 4 update governs."
    },
    "screenshots": []
  },
  {
    "id": "university-of-arizona",
    "checkedOn": "2026-11-01",
    "school": "University of Arizona",
    "href": "https://international.arizona.edu/international-students/cpt",
    "tone": "tighten",
    "zh": {
      "state": "非必修 CPT 暂停；学位或论文必需的实践逐个审",
      "detail": "ISS 页面称自 8·24 起暂停处理非项目必需的 CPT。现行可批的两类：课程必需的实践；完成论文、博士论文或硕士项目不可缺少的实践。都需合作协议和相应课程／研究学分。顾问表单提交后至少留 15 天处理，不要凭预计日期答应雇主开工。"
    },
    "en": {
      "state": "Non-required CPT paused; degree- or thesis-required training reviewed case by case",
      "detail": "ISS says processing of non-required CPT is suspended from August 24. Two kinds still qualify: curriculum-required training, and training indispensable to a thesis, dissertation or master’s project. Both need a cooperative agreement and the required course or research units. Allow at least 15 days after the adviser e-form, and don’t commit to a start date before approval."
    },
    "screenshots": []
  },
  {
    "id": "university-of-connecticut",
    "checkedOn": "2026-11-01",
    "school": "University of Connecticut (UConn)",
    "href": "https://international.global.uconn.edu/2026/08/30/immigration-changes-regarding-internships/",
    "tone": "tighten",
    "zh": {
      "state": "只批课程要求里写明所有人必须做的实习",
      "detail": "CISS 公告称暂不处理非必需 CPT：实习或 practicum 必须是全体项目学生必需，学生和导师须指出已公布的课程要求。可以通过门户递交，但选修实习课不够格。公告标注 8·30 发布。"
    },
    "en": {
      "state": "Only internships the published curriculum requires of everyone",
      "detail": "The CISS notice says non-required CPT is not being processed: internships or practica must be required of all program students, and students and advisers must point to the published requirement. Requests can still be submitted through the portal, but elective internship courses do not qualify. The notice is dated August 30."
    },
    "screenshots": []
  },
  {
    "id": "queens-college-cuny",
    "checkedOn": "2026-11-01",
    "school": "Queens College (CUNY)",
    "href": "https://www.qc.cuny.edu/academics/iss/iss-virtual-office-assistant/cpt/",
    "tone": "pause",
    "zh": {
      "state": "CPT 申请暂停；学位必修的实习请先联系 ISSO",
      "detail": "ISS 公开页称，因 8·12、8·24 SEVP 广播正在复核流程，CPT 申请暂停；未获授权前不要申请或开始校外实践。学位必需的实践，须在确定岗位或开工日期前先联系 ISSO。本条仅限 Queens College。"
    },
    "en": {
      "state": "CPT applications paused; contact ISSO first about degree-required training",
      "detail": "The ISS page says CPT applications are paused while processes are reviewed after the August 12/24 broadcasts; do not apply or start off-campus training without authorization. Students whose degree requires training should contact ISSO before committing to a placement or start date. This entry covers Queens College only."
    },
    "screenshots": []
  },
  {
    "id": "bowling-green-state-university",
    "checkedOn": "2026-11-01",
    "school": "Bowling Green State University (BGSU)",
    "href": "https://www.bgsu.edu/international-programs-and-partnerships/immigration-updates-f-1-j-1-students",
    "tone": "tighten",
    "zh": {
      "state": "只批专业必修的实习；已批的 CPT 会重审，可能撤销",
      "detail": "IPP 说明新申请按修订后的联邦解释审查，不合标准的待审申请不批；项目须证明实践是全体学生的课程必需环节。此前获批的 CPT 也会重新评估，必要时撤销。已开工或已接受 offer 的学生须尽快联系 DSO。"
    },
    "en": {
      "state": "Only program-required internships; approved CPT will be reviewed and may be revoked",
      "detail": "IPP says new requests follow the revised federal interpretation and noncompliant pending requests will not be approved; programs must show the training is required of every student. Previously approved CPT will be reevaluated and rescinded where necessary. Students who have started work or accepted offers should contact a DSO promptly."
    },
    "screenshots": []
  },
  {
    "id": "university-of-wyoming",
    "checkedOn": "2026-11-01",
    "school": "University of Wyoming",
    "href": "https://www.uwyo.edu/uwgrad/newsletter/isa-immigration-support-fall2026.html",
    "tone": "tighten",
    "zh": {
      "state": "10·26：仍接受申请，但能批的变少",
      "detail": "ISS 10·26 通讯称，已与学校总法律顾问审查 CPT 政策：在 SEVP 收紧后的定义下仍能批准部分申请，但很多学生的机会会减少。学生可以继续找机会并向 ISS 提交请求，越早提交越好，方便向教师核实。"
    },
    "en": {
      "state": "October 26: still taking requests, but fewer will qualify",
      "detail": "The October 26 newsletter says ISS reviewed CPT policy with UW’s Office of General Counsel. Some requests can still be approved under SEVP’s narrower definitions, but many students will have fewer opportunities. Students can keep looking and should submit requests early so ISS can follow up with faculty."
    },
    "screenshots": []
  },
  {
    "id": "university-of-oklahoma",
    "checkedOn": "2026-11-01",
    "school": "University of Oklahoma",
    "href": "https://www.ou.edu/globalengagement/iss/curricular-practical-training",
    "tone": "pause",
    "zh": {
      "state": "8·24 起收到的申请全部暂停，学校在审各专业",
      "detail": "ISS 页面（10·16 更新）称，8·24 起收到的 CPT 请求全部暂停，学校正核对各学位是否要求所有学生完成实习／实践；选修、独立研究和 directed readings 不符合条件。页面介绍了 10·05 诉讼，暂停仍在继续。"
    },
    "en": {
      "state": "All requests since August 24 paused while programs are reviewed",
      "detail": "The ISS page updated October 16 says all requests received from August 24 are paused while each degree is reviewed for program-wide required training; electives, independent studies and directed readings do not qualify. The page covers the October 5 lawsuit; the pause continues."
    },
    "screenshots": []
  },
  {
    "id": "yale-university",
    "checkedOn": "2026-11-01",
    "school": "Yale University",
    "href": "https://oiss.yale.edu/news/cpt-update-sevp-broadcast-messages-and-pending-litigation",
    "tone": "tighten",
    "zh": {
      "state": "10·07：只批专业所有人毕业必须做的实习",
      "detail": "OISS 10·07 通知称，自 8·24 起只处理课程要求内、项目所有学生毕业必需的实践，并继续与院系核对课程。通知介绍了 10·05 诉讼。开始工作前须获批并取得更新的 I-20。"
    },
    "en": {
      "state": "October 7: only training every student must do to graduate",
      "detail": "OISS says that since August 24 it processes only established-curriculum training required for all program students to graduate, while reviewing curricula with schools. The October 7 notice also covers the October 5 lawsuit. Approval and an updated I-20 are required before work."
    },
    "screenshots": []
  },
  {
    "id": "university-of-virginia",
    "checkedOn": "2026-11-01",
    "school": "University of Virginia (UVA)",
    "href": "https://issp.virginia.edu/cpt-update",
    "tone": "tighten",
    "zh": {
      "state": "选修学分型 CPT 暂停；学位必修的实习照常办",
      "detail": "CPT 通知暂停所有非毕业必需、选修课程学分的新 CPT 请求；项目学位必需的实践继续处理和批准。10·19 诉讼更新列出 11·06 听证，选修 CPT 仍暂停。"
    },
    "en": {
      "state": "Elective course-credit CPT paused; degree-required training continues",
      "detail": "The CPT notice pauses all new non-required, optional course-credit CPT requests; degree-required training continues to be processed and approved. Its October 19 litigation update lists the November 6 hearing; elective CPT remains paused."
    },
    "screenshots": []
  },
  {
    "id": "university-of-illinois-chicago",
    "checkedOn": "2026-11-01",
    "school": "University of Illinois Chicago (UIC)",
    "href": "https://ois.uic.edu/news-stories/sevps-cpt-memos-challenged-in-court/",
    "tone": "tighten",
    "zh": {
      "state": "10·07：逐个核对资格，关注诉讼进展",
      "detail": "OIS 10·07 通知（10·16 修改）介绍挑战两份 SEVP 广播的诉讼和 11·06 听证。学校继续与学生和院系逐案核对授权资格。UIC Chicago 与 UIUC 分开记录。"
    },
    "en": {
      "state": "October 7: eligibility checked case by case; watching the lawsuit",
      "detail": "The October 7 OIS notice, modified October 16, covers the challenge to both SEVP broadcasts and the November 6 hearing. OIS continues checking eligibility case by case with students and departments. UIC Chicago is listed separately from UIUC."
    },
    "screenshots": []
  },
  {
    id: 'carnegie-mellon-university',
    checkedOn: "2026-11-01",
    school: 'Carnegie Mellon University (CMU)',
    href: 'https://www.cmu.edu/oie/employment/f1-students/curricular-practical-training.html',
    tone: 'tighten',
    zh: {
      state: "只批毕业必修的实习；选修实习改用毕业前 OPT",
      detail: "OIE 8·27 公告要求实习是项目全体学生的毕业必修环节；选修实习要改申请 pre-completion OPT。现行 CPT 页排除独立研究，标注正在修订；论文所需校外工作仍在审查。10·08 OIE 通知介绍了 CPT 诉讼，选修和论文型 CPT 仍未恢复。CSD 博士页的措辞与 OIE 不一致，以 OIE 为准。",
    },
    en: {
      state: "Only graduation-required internships; electives use pre-completion OPT",
      detail: "The August 27 OIE notice requires internships to be a graduation requirement for all program students and directs elective internships to pre-completion OPT. The CPT page excludes independent study and is being revised; thesis-related external work is still under review. OIE’s October 8 notice covers the CPT lawsuit; elective and thesis-based CPT remain closed. The CSD doctoral page’s wording differs from OIE’s; follow OIE.",
    },
    screenshots: [],
  },
  {
    id: 'pacific-lutheran-university',
    checkedOn: "2026-11-01",
    school: 'Pacific Lutheran University',
    href: 'https://www.plu.edu/iss/announcements/',
    tone: 'tighten',
    zh: {
      state: '9·25：只批专业所有人毕业必须做的实习',
      detail: 'ISS 9·25 公告称，法律顾问建议收紧 CPT：实践须是同一专业或学位项目全体学生必修课程的组成部分，且为毕业所必需；选修课、可选实习和并非所有学生都必需的专业分支不再符合条件。',
    },
    en: {
      state: 'September 25: only training every student in the major must do to graduate',
      detail: 'The September 25 ISS announcement says counsel recommended restricting CPT to training that is part of a course required of every student in the major or degree program and necessary for graduation. Electives, optional internships and tracks without a common training requirement no longer qualify.',
    },
    screenshots: [],
  },
  {
    id: 'indiana-university-iu-global',
    checkedOn: "2026-11-01",
    school: 'Indiana University (IU Global)',
    href: 'https://www.oid.iu.edu/resources/visa-immigration-updates.html',
    tone: 'pause',
    zh: {
      state: "10·06：CPT 继续暂停",
      detail: "IU Global 10·06 更新介绍针对 SEVP 指引的诉讼，并明确 CPT 暂停继续。9·09 通知称暂停处理大部分 F-1 CPT 请求；已批准的授权不变，待审申请人会收到国际办公室的邮件。",
    },
    en: {
      state: "October 6: CPT pause continues",
      detail: "IU Global’s October 6 update covers the lawsuit against the SEVP guidance and says the CPT pause continues. Its September 9 notice pauses most F-1 CPT requests, keeps existing approvals in place and says pending applicants will hear from the international office by email.",
    },
    screenshots: [],
  },
  {
    id: 'rutgers-university',
    checkedOn: "2026-11-01",
    school: 'Rutgers University (Rutgers Global)',
    href: 'https://global.rutgers.edu/all-alerts',
    tone: 'tighten',
    zh: {
      state: '9·03：明确合格的照常办，已批的可以继续',
      detail: 'Rutgers Global 9·03 通知称并未全面暂停 CPT；明确符合新 SEVP 标准的申请继续处理，其他申请可能进一步审查或无法批准。实践须为特定学位所有学生毕业必需；论文型研究生若校内无法取得所需数据或设备，也可能获批完成论文必需的实践。已批准的 CPT 可照计划继续。',
    },
    en: {
      state: 'September 3: clearly qualifying CPT continues; existing approvals stay',
      detail: 'Rutgers Global says it did not suspend all CPT. Clearly qualifying requests continue; others may need further review or may be ineligible. Training must be required for all students in the specific degree program, with a narrow thesis/dissertation route when necessary data or equipment is unavailable at Rutgers. Previously approved CPT may continue.',
    },
    screenshots: [],
  },
  {
    id: 'university-of-central-florida',
    checkedOn: "2026-11-01",
    school: 'University of Central Florida',
    href: 'https://global.ucf.edu/immigrationupdates/',
    tone: 'tighten',
    zh: {
      state: '9·09：只批学位所有学生都必须做的校外实践',
      detail: 'UCF Global 9·09 通知称，校外实践必须是同一学位所有学生完成学位的既定要求；选修、院系推荐但非必需、只有职业价值的实践，以及论文相关活动本身，都不能获批 CPT。',
    },
    en: {
      state: 'September 9: only off-campus training every student in the degree must do',
      detail: 'UCF Global says off-campus training must be an established degree-completion requirement for every student in the program. Electives, recommended but non-required experience, career-building optional training and thesis-related activity alone do not qualify.',
    },
    screenshots: [],
  },
  {
    id: 'texas-state-university',
    checkedOn: "2026-11-01",
    school: 'Texas State University',
    href: 'https://www.international.txst.edu/current-f1-students/work-authorization/cpt.html',
    tone: 'tighten',
    zh: {
      state: '必须是课程必修；只选实习课或拿学分不够',
      detail:
        'ISSS 要求实践是学术项目及课程要求的必需部分，可能需要院系证明；只注册实习课或拿学分不够。页面仍列兼职、全职 CPT 和申请流程，没有全面暂停。',
    },
    en: {
      state: 'Must be required by the curriculum; an internship course or credit alone isn’t enough',
      detail:
        'ISSS requires practical training to be a mandatory part of the academic program and established curriculum, possibly with department certification; course enrollment or credit alone is not enough. Part-time and full-time CPT and the application process remain listed; there is no blanket pause.',
    },
    screenshots: [],
  },
  {
    id: 'vanderbilt-university',
    checkedOn: "2026-11-01",
    school: 'Vanderbilt University',
    href: 'https://www.vanderbilt.edu/isss/2026/09/15/updates-to-curricular-practical-training-eligibility/',
    tone: 'tighten',
    zh: {
      state: '9·15：只批学位所有学生都必须做的实习',
      detail:
        'ISSS 9·15 公告称，已按 SEVP 指引及对“integral”的更窄解释调整做法：只为同一学位项目全体学生必需的实践授权 CPT；选修实习和其他非完成学位所必需的实践不符合资格。',
    },
    en: {
      state:
        'September 15: only training every student in the degree must do',
      detail:
        'The September 15 ISSS notice says Vanderbilt has aligned its practice with SEVP guidance and its narrower reading of “integral”: CPT is authorized only for practical training required of all students in the same degree program, and elective internships and other training not required for degree completion do not qualify.',
    },
    screenshots: [],
  },
  {
    id: 'stony-brook-university',
    checkedOn: "2026-11-01",
    school: 'Stony Brook University',
    href: 'https://www.stonybrook.edu/visa/resources/news-and-events/immigration-policy-updates/cpt-new-guidance.html',
    tone: 'tighten',
    zh: {
      state: '9·08：光有学分或选课不够，必须是所有人必修',
      detail:
        'VIS 9·08 公告按 SEVP 两份广播修订 CPT 资格与审核流程：实践须是课程要求中对全体学生必修的部分，且完成学位取决于它。作为选修的实习或研究课，即使能满足学位要求也不符合；不做实践也能通过其他课程或选项毕业的，不予授权；院系过去批过同类学生，今后也要重新审。VIS 逐案审核，院系须出具证明，必要时补材料。',
    },
    en: {
      state:
        'September 8: credit or enrollment alone isn’t enough; it must be required of everyone',
      detail:
        'The September 8 VIS notice revises CPT eligibility and review under the two SEVP broadcasts: training must be a required part of the established curriculum for all students, with degree completion depending on it. An elective internship or research course does not qualify even if it satisfies a degree requirement; CPT is not authorized when the degree can be completed through another option without practical training; and past department approvals no longer carry over. VIS reviews each request, departments must certify the requirement, and more documentation may be requested.',
    },
    screenshots: [],
  },
  {
    id: 'kennesaw-state-university',
    checkedOn: "2026-11-01",
    school: 'Kennesaw State University',
    href: 'https://campus.kennesaw.edu/current-students/academics/global-education/international-student-scholar-services/f-1/curricular-practical-training.php',
    tone: 'tighten',
    zh: {
      state: '2026 秋季起，只限教育、护理和社会工作专业',
      detail:
        'ISSS 页首通知只允许教育、护理和社会工作项目中全体学生毕业必需的实践，不再批准选修课或 Directed Study CPT。页面下方的旧选修及论文分类已被页首通知取代。',
    },
    en: {
      state:
        'From Fall 2026: only Education, Nursing and Social Work programs',
      detail:
        'The ISSS notice at the top limits CPT to graduation-required training for all students in Education, Nursing and Social Work, excluding elective and Directed Study courses. The older elective and thesis categories lower on the page are superseded by that notice.',
    },
    screenshots: [],
  },
  {
    id: 'university-of-toledo',
    checkedOn: "2026-11-01",
    school: 'University of Toledo',
    href: 'https://www.utoledo.edu/cisp/international/CPT.html',
    tone: 'tighten',
    zh: {
      state: '9·08：选修实习和选修课不能申请 CPT',
      detail:
        'OISSS 按 SEVP 2608-02 要求实践是课程要求中必需的组成部分；只注册实习课或拿学分不够。符合条件的必需实践仍可申请兼职或全职 CPT，秋春学期全职须为学位所必需。',
    },
    en: {
      state:
        'September 8: elective internships and courses don’t qualify',
      detail:
        'Under SEVP 2608-02, OISSS requires training to be an integral, required part of the established curriculum; course enrollment or credit alone is not enough. Qualifying required training can still get part-time or full-time CPT; full-time during Fall/Spring must be degree-required.',
    },
    screenshots: [],
  },
  {
    id: 'william-and-mary',
    checkedOn: "2026-11-01",
    school: 'William & Mary',
    href: 'https://www.wm.edu/offices/revescenter/issp/visasandimmigration/immigration-updates/',
    tone: 'pause',
    zh: {
      state: "10·13：只批学位目录写明必修的实习，其他暂停",
      detail:
        "ISSP 10·13 更新页仍只处理学术目录明确列为学位要求的实践，其他 CPT 请求暂停。页面补充了 10·05 协会诉讼，审批范围未扩大。",
    },
    en: {
      state:
        "October 13: only internships the catalog requires; others paused",
      detail:
        "The ISSP page updated October 13 still processes only training listed as a degree requirement in the academic catalog; other requests remain paused. It adds the October 5 association lawsuit; eligibility has not been widened.",
    },
    screenshots: [],
  },
  {
    id: 'university-of-rochester',
    checkedOn: "2026-11-01",
    school: 'University of Rochester',
    href: 'https://www.rochester.edu/provost/important-update-for-international-students-on-cpt/',
    tone: 'pause',
    zh: {
      state: '非必修的新 CPT 暂停；已批的秋季 CPT 照常',
      detail:
        '8·28 校方通知称，ISO 暂停批准新的 CPT，学位必需的实践除外；须为项目全体学生完成学位所必需。已批准的 2026 秋季 CPT 可按授权条件继续，除非 ISO 另行通知。',
    },
    en: {
      state:
        'New non-required CPT paused; approved fall CPT continues',
      detail:
        'The August 28 notice pauses new CPT approvals except training required for all students to complete the degree. Already authorized Fall 2026 CPT may continue under its terms unless ISO advises otherwise.',
    },
    screenshots: [],
  },
  {
    id: 'purdue-university-iss',
    checkedOn: "2026-11-01",
    school: 'Purdue University (ISS)',
    href: 'https://www.purdue.edu/gpp/iss/student/f1/employment/cpt.html',
    tone: 'tighten',
    zh: {
      state: '只批学位必修，或特定论文研究需要的 CPT',
      detail:
        'ISS 公开页面要求实践为主学位所必需；论文型硕士或博士为完成论文、需要校外独有技术或必要数据的，也可申请，并须注册研究学分。页面下方的旧选修课措辞已不适用。ECE 邮件另行记录，原邮件截图保留。',
    },
    en: {
      state:
        'Only degree-required CPT or specific thesis-research CPT',
      detail:
        'The ISS page requires training for the primary degree, with a separate route for thesis or dissertation research that needs externally available technology or essential data, plus research-credit enrollment. Older elective-course wording lower on the page no longer applies. The ECE email is recorded separately and its screenshot is kept.',
    },
    screenshots: [
      { src: '/cpt-evidence/cpt_purdue_iss.jpeg', width: 1206, height: 1018 },
    ],
  },
  {
    id: 'bryn-mawr-college',
    checkedOn: "2026-11-01",
    school: 'Bryn Mawr College',
    href: 'https://www.brynmawr.edu/inside/offices-services/impact-center/international-advising/issa-announcements',
    tone: 'pause',
    zh: {
      state: '9·15：暂停新的选修型 CPT',
      detail:
        'ISSA 暂停受理新的选修型（optional）CPT，也就是不是所有学生毕业都必须做的实践，同时在审查校内政策和流程。',
    },
    en: {
      state: 'September 15: new optional CPT paused',
      detail:
        'ISSA has paused new optional CPT, meaning training not every student in the program must do, while it reviews its policies and procedures.',
    },
    screenshots: [],
  },
  {
    id: 'university-at-buffalo',
    checkedOn: "2026-11-01",
    school: 'University at Buffalo',
    href: 'https://www.buffalo.edu/international-student-services/immigration-visa/f-1-student/curricular-practical-training--cpt-.html',
    tone: 'pause',
    zh: {
      state: '非必修的新 CPT 暂停；学位必修的照常办',
      detail:
        '校方 CPT 页面写明：已暂停批准不是学位必修的新 CPT，学位必修的申请照常办理。只靠选修课或学分的实践不符合要求。已批的 2026 秋季 CPT 可以照计划继续。',
    },
    en: {
      state:
        'New non-required CPT paused; degree-required requests continue',
      detail:
        'The CPT page and FAQ require training every student must complete for the degree; elective coursework or credit alone doesn’t count. Approved Fall 2026 CPT can continue as planned.',
    },
    screenshots: [],
  },
  {
    id: 'university-of-michigan-dearborn',
    checkedOn: "2026-11-01",
    school: 'University of Michigan–Dearborn',
    href: 'https://umdearborn.edu/office-international-affairs/important-updates',
    tone: 'pause',
    zh: {
      state: '新 CPT 只限两个硕士项目',
      detail:
        "新 CPT 只限 MS in Applied Behavior Analysis 与 MS in Clinical Health Psychology；其他项目的学生不要注册 CPT 课程或提交申请。已批准的 2026 秋季 CPT 不取消、不修改。页面明确 D/S 全国暂缓不改变这项 CPT 安排；10·08 更新介绍了诉讼，资格范围没有扩大。本条仅限 Dearborn 校区。",
    },
    en: {
      state:
        'New CPT limited to two master’s programs',
      detail:
        "New CPT is limited to the MS in Applied Behavior Analysis and the MS in Clinical Health Psychology; other students should not enroll in a CPT course or apply. Approved Fall 2026 CPT will not be canceled or modified. The page states that the D/S stay does not change these CPT limits; its October 8 update covers the lawsuit without widening eligibility. This entry covers the Dearborn campus only.",
    },
    screenshots: [],
  },
  {
    id: 'uc-berkeley',
    checkedOn: "2026-11-01",
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
    checkedOn: "2026-11-01",
    school: 'UC Davis',
    href: 'https://siss.ucdavis.edu/news/federal-government-updates-international-students-and-scholars',
    tone: 'pause',
    zh: {
      state: '选修学分型 CPT（Course Credit）已暂停',
      detail: '学位要求 CPT 继续办理。已签发的 CPT I-20 暂时不受影响。',
    },
    en: {
      state: 'Elective course-credit CPT paused',
      detail:
        'Degree-required CPT continues; previously issued CPT I-20s are currently unaffected.',
    },
    screenshots: [],
  },
  {
    id: 'boston-university',
    checkedOn: "2026-11-01",
    school: 'Boston University',
    href: 'https://www.bu.edu/isso/2026/08/28/additional-sevp-guidance-further-restricts-cpt-eligibility/',
    tone: 'pause',
    zh: {
      state: '部分 CPT 暂停审批',
      detail: "8·28 校方公告：明确属于毕业要求的 CPT 继续处理，其他模式在校内审查期间暂缓审批。",
    },
    en: {
      state: 'Some CPT approvals paused',
      detail:
        "The August 28 university notice says clearly degree-required CPT continues, while other models are paused during institutional review.",
    },
    screenshots: [],
  },
  {
    id: 'uiuc',
    checkedOn: "2026-11-01",
    school: 'UIUC',
    href: 'https://blogs.illinois.edu/view/7559/791491523',
    tone: 'pause',
    zh: {
      state: '不再批选修课型 CPT',
      detail:
        '只接受实践为全体学生强制要求、且有雇主合作协议的情形。选修课型的 CPT 不再批准。',
    },
    en: {
      state: 'No more elective-course CPT',
      detail:
        'Only training required of every student and supported by an employer cooperative agreement is accepted.',
    },
    screenshots: [
      { src: '/cpt-evidence/cpt_uiuc_notice.jpeg', width: 1206, height: 2622 },
    ],
  },
  {
    id: 'texas-a-m',
    checkedOn: "2026-11-01",
    school: 'Texas A&M',
    href: 'https://global.tamu.edu/isss/employment-internships/curricular-practical-training.html',
    tone: 'tighten',
    zh: {
      state: '标准收紧，没有全面暂停',
      detail:
        '8·24 之后的新申请必须同时满足两条：实践为全体学生毕业要求，并有合作协议。不满足的申请会被拒绝。',
    },
    en: {
      state: 'Stricter standard; no full pause',
      detail:
        'New applications after August 24 must satisfy both the program-wide graduation requirement and cooperative-agreement standards.',
    },
    screenshots: [],
  },
  {
    id: 'ut-dallas',
    checkedOn: "2026-11-01",
    school: 'UT Dallas',
    href: 'https://isso.utdallas.edu/2026/09/17/update-on-cpt-policy-sevp-broadcast/',
    tone: 'tighten',
    zh: {
      state: '9·17 起只批学位目录要求的实习课',
      detail:
        'ISSO 9·17 通知说，和学校法律顾问确认后，整体 CPT 政策不变，但按 SEVP 的澄清收紧了一点：只有学位目录写明要修实习课的学生才能批 CPT，没有这项要求的不能批，也没有个案例外。需要在校外完成论文研究的研究生，可以申请 Academic CPT。',
    },
    en: {
      state:
        'From September 17, only internship courses the catalog requires',
      detail:
        'ISSO said on September 17 that, after checking with university counsel, its overall CPT policy is unchanged except for one tightening under the SEVP clarification: only students whose degree catalog requires an internship course can get CPT, with no case-by-case exceptions. Graduate students who must do thesis or dissertation research off campus can use Academic CPT.',
    },
    screenshots: [],
  },
  {
    id: 'university-of-michigan',
    checkedOn: "2026-11-01",
    school: 'University of Michigan',
    href: 'https://internationalcenter.umich.edu/about/news/updated-guidance-curricular-practical-training-cpt',
    tone: 'pause',
    zh: {
      state: '不再批选修课型 CPT',
      detail:
        '学校只批准对该学位项目所有学生均为毕业必需的实践。已有的授权可以继续。',
    },
    en: {
      state: 'No more elective-course CPT',
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
    checkedOn: "2026-11-01",
    school: 'Northwestern University',
    href: 'https://www.northwestern.edu/international/international-students/student-employment/f-1-practical-training/curricular-practical-training/',
    tone: 'tighten',
    zh: {
      state: '只批专业所有人必修的 CPT',
      detail:
        'OISS 9·29 更新的页面要求实践是项目所有学生毕业都必须做的；做完必修实践后不能再申请额外 CPT。符合条件的学生要通过 OISS 门户提交校方和雇主的合作协议，由学业负责人确认是所有学生必修，批准后领取注明 CPT 的 I-20。9·03 的通知截图保留作对照。',
    },
    en: {
      state: 'Only CPT required of every student',
      detail:
        'The OISS page updated September 29 requires training every student in the program must do to graduate, and no extra CPT after that required experience is done. Eligible students submit an employer-school cooperative agreement through the OISS portal; an academic approver confirms the requirement applies to everyone before OISS issues a CPT I-20. The September 3 screenshot is kept for comparison.',
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
    checkedOn: "2026-11-01",
    school: 'Columbia University',
    href: 'https://isso.columbia.edu/content/f-1-cpt-curricular-practical-training',
    tone: 'tighten',
    zh: {
      state: '非必修 CPT 暂停；8·24 前已批的不撤销',
      detail:
        'ISSO 只批课程要求里、所有学生必修、并且有合作协议（cooperative agreement）的 CPT，其他情况暂停。8·24 前批下的 CPT 不会撤销。学校 9·24 更新了应对时间表，并说 2026 秋季困难补助 9·23 开放申请；资格标准没变。',
    },
    en: {
      state:
        'Non-required CPT paused; approvals before August 24 stay',
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
    checkedOn: "2026-11-01",
    school: 'Harvard University',
    href: 'https://www.hio.harvard.edu/employment-training/curricular-practical-training',
    tone: 'tighten',
    zh: {
      state: '标准收紧，没有全面暂停',
      detail:
        '工作必须是学位正式规定的要求，还要有和这项要求对应的合作协议（cooperative agreement）。',
    },
    en: {
      state: 'Stricter standard; no university-wide pause',
      detail:
        'The work must be a formal degree requirement, backed by a matching cooperative agreement.',
    },
    screenshots: [],
  },
  {
    id: 'university-of-washington',
    checkedOn: "2026-11-01",
    school: 'University of Washington',
    href: 'https://iss.washington.edu/follow-up-on-cpt-policy/',
    tone: 'pause',
    zh: {
      state: '9·08：继续暂停；秋季待审的非必修 CPT 一律驳回',
      detail:
        '9·08 后续通知驳回所有秋季待审的非必需 CPT。新申请须由学术顾问证明：实践属于学生主修项目课程要求中全体学生的必需要求。8·26 通知允许已获授权者按 I-20 条件继续。',
    },
    en: {
      state:
        'September 8: pause continues; pending non-required autumn CPT dismissed',
      detail:
        'The September 8 follow-up dismisses all pending non-required autumn CPT requests. New requests need an academic adviser’s attestation that training is required of all students in the established curriculum of the student’s primary program. The August 26 notice lets existing authorizations continue under their I-20 terms.',
    },
    screenshots: [],
  },
  {
    id: 'university-of-maryland-college-park',
    checkedOn: "2026-11-01",
    school: 'University of Maryland, College Park',
    href: 'https://marylandglobal.umd.edu/global-learning-all/international-students-scholars/employment-taxes/employment-f-1-international-students/curricular-practical-training-cpt',
    tone: 'pause',
    zh: {
      state: '暂停：既不是专业必修、也不是论文必需的新 CPT',
      detail:
        'ISSS 暂停不属于三类要求的未批准 CPT：全专业必修、必修课程、论文／学位论文研究要求。UNIV099、ENCO099、BMGT099 等非必修实习暂不受理。已获批的 CPT 可以继续。',
    },
    en: {
      state:
        'Paused: new CPT not required by the program or for thesis research',
      detail:
        'ISSS paused unapproved requests unless the training is required for every student, is part of a required course, or is necessary for thesis or dissertation research. UNIV099, ENCO099, BMGT099, and other non-required internships are not being accepted; previously authorized CPT may continue.',
    },
    screenshots: [],
  },
  {
    id: 'trine-university',
    checkedOn: "2026-11-01",
    school: 'Trine University',
    href: 'https://www.trine.edu/international/hybrid/experiential-learning/cpt-information.aspx',
    tone: "tighten",
    zh: {
      state: "新生开课日才能上班；续期最迟过渡到 2027·06·13",
      detail:
        "研究生 CPT 页：2027 春季起按学期授权，同一雇主也须重新申请；新生最早在开课日（2027 春季为 01·11）开始工作，提前拿到 I-20 也不能提前开工。OPT 在 SEVIS transfer release date 结束，转学后须重新获批 CPT。缺件或填错的申请直接退回，问题解决后重新提交。续期改为过渡延期，最迟到 2027·06·13 或更早的项目／资格结束日；续期待审期间旧授权不延长。11·16 前已批的授权不撤销。秋季首次 CPT 截止 2026·11·16，下一开始日 2027·01·11；春季截止 2027·04·05，下一开始日 2027·06·14。页内关于补件队列、30／60 天窗口和注册／转学未完成能否递交的说法不一致，请向 DSO 确认。",
    },
    en: {
      state:
        "New students start no earlier than classes; renewals bridge to June 13, 2027 at the latest",
      detail:
        "The graduate CPT page: from Spring 2027 CPT is approved semester by semester, including renewals with the same employer. New students cannot work before classes start (January 11, 2027 for Spring), even with an earlier I-20. OPT ends on the SEVIS transfer release date, and work under CPT then needs new approval. Incomplete or incorrect applications are rejected and must be resubmitted once fixed. Renewals become transition extensions ending by June 13, 2027, or an earlier program/eligibility end; a pending renewal does not extend the current authorization. Approvals before November 16 are not rescinded. The initial Fall deadline is November 16, 2026 (next start January 11); Spring is April 5 (next start June 14). The page is inconsistent about the correction queue, the 30/60-day window and filing before registration or transfer is complete; confirm with the DSO.",
    },
    screenshots: [],
  },
  {
    id: 'mit',
    checkedOn: "2026-11-01",
    school: 'MIT',
    href: 'https://iso.mit.edu/employment/f-1-curricular-practical-training/',
    tone: 'pause',
    zh: {
      state: '暂停：不是学位必修的新 CPT',
      detail:
        "MIT 暂停一类新 CPT：8·24 当日已收到或待审、且实践并非全专业学生完成学位必需的申请。校方会联系已获 2026 秋季 CPT 授权的学生商量后续。最新日期表：2027 春季 01·30—05·19（仅兼职）、暑期 05·20—08·17（兼职或全职）、秋季 08·18—12·17（仅兼职），后续年度也已更新。日期表适用于符合资格的申请；部分学生另有更晚的开始限制，请向 ISO 确认。",
    },
    en: {
      state:
        'Paused: new CPT not required for the degree',
      detail:
        "MIT paused new CPT requests received or pending as of August 24 when the training is not required for every student to complete the degree, and will contact students already issued Fall 2026 CPT to discuss options. The current date table lists Spring 2027 January 30–May 19 (part-time), Summer May 20–August 17 (part- or full-time) and Fall August 18–December 17 (part-time), with later years updated too. The calendar applies to eligible requests; some students face later start restrictions, so confirm with ISO.",
    },
    screenshots: [
      { src: '/cpt-evidence/cpt_mit.jpeg', width: 1080, height: 2341 },
    ],
  },
  {
    id: 'ucsb',
    checkedOn: "2026-11-01",
    school: 'UCSB',
    href: 'https://oiss.ucsb.edu/curricular-practical-training',
    tone: 'continue',
    zh: {
      state: '官网列出 CPT 申请和审批流程',
      detail:
        "OISS 现行页面说明符合条件者可通过 UCSBGlobal 申请，获批后领取带 CPT 授权的 I-20。页面把实践表述为“与学位相关且为项目组成部分”，此前 8 月的暂停通知已撤下。附图为旧公告，保留供对照。",
    },
    en: {
      state: 'Site lists how to apply for and get CPT',
      detail:
        "The current OISS page directs eligible students to apply through UCSBGlobal; approved students receive a CPT-authorized I-20. It describes training as related to and integral to the degree, and the August pause notice has been taken down. The screenshot shows the earlier notice for comparison.",
    },
    screenshots: [
      { src: '/cpt-evidence/cpt_ucsb_1.jpeg', width: 1080, height: 1677 },
      { src: '/cpt-evidence/cpt_ucsb_2.jpeg', width: 1080, height: 1508 },
    ],
  },
  {
    id: 'new-york-university-tandon-mathematics',
    checkedOn: "2026-11-01",
    school: 'New York University (Tandon Mathematics)',
    href: 'https://math.nyu.edu/dynamic/sites/tandon/internships/',
    tone: "tighten",
    zh: {
      state: "页面列申请步骤；原暂停通知已撤下",
      detail:
        "Tandon 数学系当前实习页列出课程注册、向 OGS 提交材料及获批后工作的步骤，先前自 9·01 暂停 CPT 的通知已撤下；院系没有公布恢复日期，申请前请先问院系。本条仅限 Tandon 数学系。",
    },
    en: {
      state:
        "Application steps listed; earlier pause notice removed",
      detail:
        "The current Tandon Mathematics internship page lists course registration, OGS documents and authorization before work; the earlier September 1 pause notice has been removed. The department has not announced a reopening date, so check with it before applying. This entry covers Tandon Mathematics only.",
    },
    screenshots: [],
  },
  {
    id: 'university-of-southern-california',
    checkedOn: "2026-11-01",
    school: 'University of Southern California',
    href: 'https://ois.usc.edu/important-update-regarding-curricular-practical-training/',
    tone: 'tighten',
    zh: {
      state: '8·24 起只批毕业必修的 CPT',
      detail:
        'OIS 不再批不是专业所有学生必修的选修课型 CPT。补材料核对可能让审批变慢。8·24 前签发的 2026 秋季 CPT 不会撤销。',
    },
    en: {
      state: 'Since August 24, only CPT required for graduation',
      detail:
        'OIS no longer approves elective-course CPT that isn’t required of every student in the program. Document checks may slow approvals; Fall 2026 CPT issued before August 24 will not be revoked.',
    },
    screenshots: [],
  },
  {
    id: 'university-of-alabama',
    checkedOn: "2026-11-01",
    school: 'University of Alabama',
    href: 'https://international.ua.edu/news/curricular-practical-training-cpt-changes-effective-immediately/',
    tone: 'tighten',
    zh: {
      state: '8·31 起审得更严',
      detail:
        'ISSS 要求院系证明实践属于两种情况之一。第一种：学位项目或方向全体学生必需。第二种：论文型硕士、博士完成论文所必需。学位要求须有课程目录依据。仅为选修课要求的 CPT 不符合标准。',
    },
    en: {
      state: 'Stricter review since August 31',
      detail:
        'ISSS requires departments to document whether training is required for all students in the degree program or track, or is necessary for thesis-track master’s or doctoral students to complete their thesis or dissertation. Degree requirements must be supported by the academic catalog; an elective-course requirement alone does not qualify.',
    },
    screenshots: [],
  },
  {
    id: 'uc-irvine',
    checkedOn: "2026-11-01",
    school: 'UC Irvine',
    href: 'https://ic.uci.edu/welcome-students/students-current-students/students-current-employment-information/curricular-practical-training/',
    tone: 'tighten',
    zh: {
      state: '只批学位或论文必需的 CPT，且须有合作协议',
      detail:
        "国际中心常设政策页：按当前 SEVP 指引，选修课、可选实习或可选工作不能获批 CPT；获批须同时满足学位必需，以及雇主与学校之间有合作协议。页面列出设有实习或实地研究学位要求的项目，并新增硕士论文／博士论文必需 CPT：仅限已进入候选阶段（Advanced to Candidacy）的论文型硕士或博士生，实践为完成论文所必需，且无法用其他方法或数据收集方式合理替代。此前的 8·17 Course Credit CPT 暂停通知和 9·14 置顶通知已撤下。附图为此前暂停 Course Credit CPT 的邮件截图，保留供对照。",
    },
    en: {
      state: 'Only degree- or thesis-required CPT, with a cooperative agreement',
      detail:
        "The International Center’s standing policy page says that under current SEVP guidance, CPT cannot be approved for elective courses, optional internships or optional employment; approval requires both a degree requirement and a cooperative agreement between the employer and the campus. It lists programs with an internship or field-study degree requirement and adds Master’s Thesis/Doctoral Dissertation Requirement CPT for thesis-track students who have Advanced to Candidacy, when the training is required to complete the thesis or dissertation and cannot reasonably be replaced by another method or data-collection process. The earlier August 17 Course Credit CPT pause and September 14 top notice have been taken down. The screenshot shows the earlier pause email for comparison.",
    },
    screenshots: [
      { src: '/cpt-evidence/cpt_uci.jpeg', width: 1080, height: 1731 },
    ],
  },
  {
    id: 'university-of-utah',
    checkedOn: "2026-11-01",
    school: 'University of Utah',
    href: 'https://www.isss.utah.edu/news/posts/2026/cpt-broadcast-message-update.php',
    tone: 'pause',
    zh: {
      state: '9·03 起暂停非必修的新 CPT',
      detail:
        'ISSS 暂停 optional CPT 授权。UAtlas 仍可提交申请，但审核结束前不批准此类请求。已有的授权按当前 I-20 的雇主、地点与日期继续。',
    },
    en: {
      state:
        'New non-required CPT paused since September 3',
      detail:
        'ISSS paused optional CPT authorizations. UAtlas still accepts requests, but optional cases will not be approved until review is complete. Existing authorizations continue under the employer, location, and dates on the current I-20.',
    },
    screenshots: [],
  },
  {
    id: 'university-of-delaware',
    checkedOn: "2026-11-01",
    school: 'University of Delaware',
    href: 'https://www.udel.edu/academics/global/isss/announcements/',
    tone: 'pause',
    zh: {
      state: '暂停非必修的新 CPT',
      detail:
        '9·02 公告称 CGPS 暂停 optional CPT。学生仍可提交申请，但审核结束前不会签发此类新授权，处理也可能延迟。',
    },
    en: {
      state: 'New non-required CPT paused',
      detail:
        'The September 2 notice says CGPS paused optional CPT. Students may still submit requests, but no new optional authorizations will be issued until review is complete, and processing delays are expected.',
    },
    screenshots: [],
  },
  {
    id: 'uc-san-diego',
    checkedOn: "2026-11-01",
    school: 'UC San Diego',
    href: 'https://iseo.ucsd.edu/student-services/working-in-us/f1-cpt.html',
    tone: 'tighten',
    zh: {
      state: '官网列出合格专业的 CPT 申请流程',
      detail:
        'ISEO 现行页面已撤下此前 iServices 全部请求暂停的通知，并列出经校内核实的 CPT 项目与申请步骤：实践须为该项目所有学生毕业所必需，学生须有相关职位和课程或合作教育安排，经院系和 ISEO 审核、取得注明 CPT 的 I-20 后才能开工。已列项目包括本科生物工程、电影艺术、环境系统、全球健康、城市规划，以及生物工程硕士；未列项目可请院系申请资格审查。页面还说明了研究生夏季合作教育路径。',
    },
    en: {
      state: 'Site lists how qualifying programs apply for CPT',
      detail:
        'ISEO has taken down its earlier pause of all iServices CPT requests and now lists verified programs and application steps. Training must be required for every student in the program; students need a related job and a course or cooperative-education arrangement, then department and ISEO review and a CPT-authorized I-20 before work. Listed programs include undergraduate Bioengineering, Cinematic Arts, Environmental Systems, Global Health and Urban Studies, plus the Bioengineering MEng. Departments can request review for unlisted programs, and a graduate summer cooperative-education route is also described.',
    },
    screenshots: [],
  },
  {
    id: 'university-of-maryland-baltimore-county',
    checkedOn: "2026-11-01",
    school: 'University of Maryland, Baltimore County',
    href: 'https://isss.umbc.edu/updates/',
    tone: 'tighten',
    zh: {
      state: '待审和新的 CPT 只限专业必修的实习',
      detail:
        'OISS 9·04 更新：待审和新的申请，都按“专业所有学生必修”的标准审。已签发的 2026 秋季 CPT 不会撤销。本条为 UMBC 校区。',
    },
    en: {
      state:
        'Pending and new CPT limited to program-required training',
      detail:
        'The September 4 OISS update applies the “required of every student in the program” standard to pending and new requests. Fall 2026 CPT already issued will not be revoked. This entry covers the UMBC campus.',
    },
    screenshots: [],
  },
  {
    id: 'george-washington-university',
    checkedOn: "2026-11-01",
    school: 'George Washington University',
    href: 'https://internationalservices.gwu.edu/updated-guidance-curricular-practical-training-cpt',
    tone: 'pause',
    zh: {
      state: '暂停非必修的新 CPT',
      detail:
        'ISO 9·02 公告：不再批准不是学位项目所有学生必修的新 CPT。已有的 CPT 按当前 I-20 上的雇主、地点、日期等条件继续。',
    },
    en: {
      state: 'New non-required CPT paused',
      detail:
        'The September 2 ISO notice pauses new CPT that is not required for all students in the degree program. Existing authorizations continue under the employer location, dates, and other conditions on the current I-20.',
    },
    screenshots: [],
  },
  {
    id: 'university-of-colorado-boulder',
    checkedOn: "2026-11-01",
    school: 'University of Colorado Boulder',
    href: 'https://www.colorado.edu/isss/2026/08/20/change-cpt-authorization-policy-faqs',
    tone: 'tighten',
    zh: {
      state: '只批课程目录写明学位或主修必修的 CPT',
      detail:
        '8·31 更新称，只处理校方列出的、实践为学位或主修毕业必需的项目，minor 不符合。仅供选修学分的实习不获批。已授权的 2026 秋季 CPT 不受影响。',
    },
    en: {
      state: 'Only CPT the catalog requires for the degree or major',
      detail:
        'The August 31 update limits CPT to listed programs requiring practical training for degree or major completion; a minor does not qualify. Elective internship credit alone is insufficient. Already authorized Fall 2026 CPT is unaffected.',
    },
    screenshots: [],
  },
  {
    id: 'university-of-wisconsin-milwaukee',
    checkedOn: "2026-11-01",
    school: 'University of Wisconsin-Milwaukee',
    href: 'https://uwm.edu/cie/services/students/employment/curricular-practical-training/',
    tone: 'tighten',
    zh: {
      state: '8·24 起只批专业所有人必修的 CPT',
      detail:
        'ISSS 要求实践是学位项目所有学生明确必修的内容。8·24 前已批的 CPT 可以用到当前授权结束。',
    },
    en: {
      state:
        'Since August 24, only CPT required of every student in the program',
      detail:
        'ISSS requires a clearly stated practical-training requirement for every student in the program. CPT approved before August 24 stays valid until its current end date.',
    },
    screenshots: [],
  },
  {
    id: 'university-of-oregon',
    checkedOn: "2026-11-01",
    school: 'University of Oregon',
    href: 'https://isss.uoregon.edu/curricular-practical-training-cpt',
    tone: 'tighten',
    zh: {
      state: '只为拿选修实习学分的 CPT 不再批',
      detail:
        'ISSS 现行页面要求实践属于所有学生必修、必需的硕士论文／毕业项目、博士论文或 DMA 结业项目。博士生须已进入候选阶段并有导师说明。学分数按项目要求与学业导师商定；旧页面统一一学分的最低要求已撤下。',
    },
    en: {
      state:
        'No CPT just for elective internship credit',
      detail:
        'The current ISSS page limits CPT to a program-wide requirement or training integral to a required master’s thesis or final project, doctoral dissertation or DMA culminating project. Doctoral students must have advanced to candidacy and get a faculty explanation. Credit registration is set with the academic advisor by program; the former one-credit minimum has been removed.',
    },
    screenshots: [],
  },
  {
    id: 'university-of-kansas',
    checkedOn: "2026-11-01",
    school: 'University of Kansas',
    href: 'https://iss.ku.edu/f-1-cpt-curricular-practical-training',
    tone: "tighten",
    zh: {
      state: "页面称可以批学位必修的 CPT",
      detail:
        "ISS 当前页首称，将为学位必需的实习／实践授权 CPT，原先暂停所有请求的通知已撤下；页面列出院系推荐、iHawk 请求及获批后工作的流程。下方较宽泛的旧定义以页首通知为准。",
    },
    en: {
      state: "Page says degree-required CPT can be approved",
      detail:
        "The current ISS notice says it will authorize CPT for internships and practica required for the degree, replacing the earlier notice that paused all requests. Department recommendation, iHawk requests and authorization before work are listed. The broader older definition lower on the page is superseded by the notice.",
    },
    screenshots: [],
  },
  {
    id: 'george-mason-university',
    checkedOn: "2026-11-01",
    school: 'George Mason University',
    href: 'https://oips.gmu.edu/current-immigration-information/',
    tone: 'pause',
    zh: {
      state: '2026 秋季：证明不了是所有人毕业必修的，暂停审理',
      detail:
        'OIPS 正在审核 CPT 政策，要求证明实践是该学位项目全体学生毕业所必需。只是选修课，或只是多个可选毕业路径之一的实习，都不满足标准。',
    },
    en: {
      state:
        'Fall 2026: paused unless the program requires it of every student to graduate',
      detail:
        'During its CPT policy review, OIPS requires proof that training is necessary for every student in the degree program to graduate. An elective internship, or one of several optional ways to meet a degree requirement, does not meet that standard.',
    },
    screenshots: [],
  },
  {
    id: 'ucla',
    checkedOn: "2026-11-01",
    school: 'UCLA',
    href: 'https://internationalcenter.ucla.edu/September8message',
    tone: 'pause',
    zh: {
      state: '非必修的课程学分／推荐信 CPT 暂停；学位必修的照常',
      detail:
        '9·08 校方通知：8·12 起递交、不是所有学生毕业都必须做的 CPT 申请暂停。论文、研究或 capstone 需要的实践，也必须是 UCLA General Catalog 里所有学生的项目要求。8·12 前已批并签发 CPT I-20 的不受影响。所有 CPT 申请都要附院系和雇主的合作协议。',
    },
    en: {
      state:
        'Non-required course-credit and support-letter CPT suspended; degree-required CPT continues',
      detail:
        'The September 8 notice suspends applications submitted since August 12 for training not every student must do to graduate. Thesis, research or capstone training must also be a requirement for every student in the program in the UCLA General Catalog. CPT approved with an I-20 issued before August 12 is unaffected. Every CPT application needs a department-employer cooperative agreement.',
    },
    screenshots: [
      { src: '/cpt-evidence/cpt_ucla.jpeg', width: 1144, height: 667 },
    ],
  },
  {
    id: 'university-of-pennsylvania',
    checkedOn: "2026-11-01",
    school: 'University of Pennsylvania (UPenn)',
    href: 'https://global.upenn.edu/isss/cpt/',
    tone: 'tighten',
    zh: {
      state: '9·10：恢复办理符合课程要求的 CPT',
      detail:
        'ISSS 最新通知称，恢复处理一类请求：实践是课程要求必要且必需的组成部分。须经院系确认，并由雇主签 Penn 合作协议；获批并取得新 I-20 后才能工作。同页下方的待审暂停旧说明以最新通知为准，个案进度请向 ISSS 确认。',
    },
    en: {
      state:
        'September 10: processing resumed for CPT that meets curriculum requirements',
      detail:
        'The latest ISSS notice resumes processing for training that is an integral, required part of the curriculum. Department confirmation and the employer’s Penn cooperative agreement are required, and students need approval and a new I-20 before working. Older pause language lower on the page is superseded; confirm individual cases with ISSS.',
    },
    screenshots: [],
  },
  {
    id: 'northeastern-university-coe-masters',
    checkedOn: "2026-11-01",
    school: 'Northeastern University (COE Master’s)',
    href: "https://coe.northeastern.edu/academics-experiential-learning/co-op-experiential-learning/co-op/graduate-co-op/masters-co-op/",
    tone: 'tighten',
    zh: {
      state: '工程学院硕士只能做一次 co-op／实习，最长 8 个月',
      detail:
        "COE 硕士项目现页写明：每个项目只可参加一次、同一雇主 4–8 个月的 co-op，internship、practicum 等也计入这一次。这是工程学院的项目规定；CPT 仍须单独获批。",
    },
    en: {
      state:
        'Engineering master’s students get one co-op or internship, up to eight months',
      detail:
        "The current COE master’s page allows one co-op at a single employer for 4–8 months per program, and internships, practicums and similar experiences count toward that limit. This is a College of Engineering program rule; CPT still needs separate approval.",
    },
    screenshots: [],
  },
  {
    id: 'georgetown-university',
    checkedOn: "2026-11-01",
    school: 'Georgetown University',
    href: 'https://internationalservices.georgetown.edu/immigration-updates/',
    tone: 'tighten',
    zh: {
      state: '只批所有学生必修的 CPT；选修实习不行',
      detail:
        'OGS 9·09 更新称，实践必须为课程要求全体学生（不分国籍）必需。学校已联系 8·24 时待审的申请人以及持有秋季授权的学生，讨论影响和选项。',
    },
    en: {
      state:
        'Only CPT required of all students; elective internships don’t qualify',
      detail:
        'The September 9 OGS update requires training for all students in the established curriculum, regardless of citizenship. OGS has contacted applicants pending as of August 24 and students holding fall authorizations about impacts and options.',
    },
    screenshots: [],
  },
  {
    id: 'james-madison-university',
    checkedOn: "2026-11-01",
    school: 'James Madison University',
    href: 'https://www.jmu.edu/global/isss/announcements.shtml',
    tone: 'pause',
    zh: {
      state: '学校审查期间，新申请和待审申请暂不决定',
      detail:
        "校方 Immigration Announcements 页（CPT 栏标题为 2026 年 8 月）称，因 8·24 联邦指引，暂缓新申请和待审请求的决定，学校正在加速审查课程及流程。",
    },
    en: {
      state:
        'Decisions on new and pending requests paused during review',
      detail:
        "The Immigration Announcements page (CPT section headed August 2026) says decisions on new and pending requests are paused while JMU reviews academic programs and processes after the August 24 guidance.",
    },
    screenshots: [],
  },
  {
    id: 'boston-college',
    checkedOn: "2026-11-01",
    school: 'Boston College',
    href: 'https://www.bc.edu/content/bc-web/sites/global-engagement/sites/office-of-international-students-and-scholars/maintain/jcr%3Acontent/bottompar/bc_padded_section/par/bc_news_notes.newsItems.html',
    tone: 'pause',
    zh: {
      state: '暂停：不是专业所有人必修的校外 CPT',
      detail:
        "OISS 9·09 公告暂停非全专业学生毕业必需的校外 CPT，选修学分不够格。10·14 后续通知介绍了 10·05 诉讼和 11·06 听证，并写明诉讼期间继续执行 8 月指引。",
    },
    en: {
      state:
        'Paused: off-campus CPT not required of every student',
      detail:
        "The September 9 OISS notice pauses off-campus CPT not required of all students for graduation; optional credit is not enough. An October 14 follow-up covers the October 5 lawsuit and November 6 hearing and says the August guidance stays in place during the litigation.",
    },
    screenshots: [],
  },
  {
    id: 'johns-hopkins-university',
    checkedOn: "2026-11-01",
    school: 'Johns Hopkins University',
    href: 'https://ois.jhu.edu/students/current-f-1-students/f-1-training-and-employment/curricular-practical-training/',
    tone: 'tighten',
    zh: {
      state: "新申请和待审申请只限毕业必修的实践",
      detail:
        "OIS 页首通知把新申请和待审请求限定为毕业必需、且符合 SEVP 备忘录的实习／实践，合格请求继续处理。正文里关于学分的一般说明以页首通知为准；D/S 暂缓令不影响 CPT。",
    },
    en: {
      state: "New and pending requests limited to degree-required training",
      detail:
        "The OIS notice limits new and pending requests to degree-required training consistent with the SEVP memos, and qualifying requests continue to be processed. General credit wording in the body is superseded by the notice; the D/S stay does not affect CPT.",
    },
    screenshots: [],
  },
  {
    id: 'washington-state-university',
    checkedOn: "2026-11-01",
    school: 'Washington State University',
    href: 'https://ip.wsu.edu/august-7th-2026-special-immigration-advisory/',
    tone: 'tighten',
    zh: {
      state: '2027 春季起学期内不批全职 CPT，必修实习除外',
      detail:
        "8·07 校方公告称，自 2027 春季起学年内不再批准全职 CPT，课程明确要求实习的项目除外（如 Hospitality Business Management、Clinical Psychology）。这份公告早于 8 月 SEVP 广播，针对的是学年内全职 CPT，暑期和兼职 CPT 不受影响。10·23、10·30 的后续通告涉及 OPT 费用、税务、项目延期和注册提醒，没有改动这项 CPT 安排。",
    },
    en: {
      state:
        'From Spring 2027, no full-time CPT during the school year except required internships',
      detail:
        "The August 7 notice says full-time academic-year CPT will not be approved from Spring 2027, except for curriculum-required internships (such as Hospitality Business Management or Clinical Psychology). It predates the August broadcasts and covers full-time academic-year CPT only; summer and part-time CPT are not affected. Later advisories on October 23 and 30 cover OPT fees, taxes, program extensions and registration without changing this CPT arrangement.",
    },
    screenshots: [],
  },
  {
    "id": "adelphi-university",
    "checkedOn": "2026-11-01",
    "school": "Adelphi University",
    "href": "https://www.adelphi.edu/policies/curricular-practical-training-cpt-policy/",
    "tone": "tighten",
    "zh": {
      "state": "10·15：必须是课程必修，并有校企合作协议",
      "detail": "校方政策要求实践是课程要求的必需部分、与主修直接相关，雇主须与学校签合作协议，并同期注册课程取得学分。只为积累职业经验、丰富简历、minor 或一般毕业要求的实践都不够格。学年内通常限兼职，项目要求全职的除外。"
    },
    "en": {
      "state": "October 15: must be required by the curriculum, with a cooperative agreement",
      "detail": "The university policy requires training that is integral to the established curriculum, required in the program and directly related to the major, with an employer-school cooperative agreement and concurrent credit. Career experience, résumé building, a minor or a general graduation requirement alone does not qualify. Academic-year CPT is generally part-time unless the program requires full-time training."
    },
    "screenshots": []
  },
  {
    "id": "north-carolina-state-university",
    "checkedOn": "2026-11-01",
    "school": "North Carolina State University (NC State)",
    "href": "https://internationalservices.ncsu.edu/curricular-practical-training/",
    "tone": "tighten",
    "zh": {
      "state": "只批所有学生必修或论文必需的 CPT",
      "detail": "OIS 现行页面按 8·24 指引，排除选修实习、co-op 和选修研究；可批的是项目全体学生毕业必需的实践，或不做校外环节就完成不了的论文研究，后者须导师给出有力的书面说明。还须有雇主合作协议和课程或研究学分。"
    },
    "en": {
      "state": "Only program-required CPT or essential thesis research",
      "detail": "The current OIS page applies the August 24 guidance and excludes elective internships, co-ops and research. It allows training required of all program students, or off-campus research without which a thesis or dissertation cannot be completed, backed by a strong written advisor justification. A cooperative agreement and course or research enrollment are also required."
    },
    "screenshots": []
  },
  {
    "id": "western-michigan-university",
    "checkedOn": "2026-11-01",
    "school": "Western Michigan University (WMU)",
    "href": "https://wmich.edu/international/immigration/news",
    "tone": "tighten",
    "zh": {
      "state": "10·16：2027 春季起只批所有学生必修的 CPT",
      "detail": "I3S 10·16 通知写明，从 2027 春季起，实践须为课程要求中所有学生的必需要求；学校已识别约 52 个要求校外经历的项目，并链接了合格项目列表。"
    },
    "en": {
      "state": "October 16: from Spring 2027, only CPT required of every student",
      "detail": "The October 16 I3S notice says that from Spring 2027 training must be mandatory for all students in the established curriculum. WMU has identified about 52 programs that require off-campus experience and links the approved-program list."
    },
    "screenshots": []
  },
  {
    "id": "georgia-institute-of-technology",
    "checkedOn": "2026-11-01",
    "school": "Georgia Institute of Technology (Georgia Tech)",
    "href": "https://isss.oie.gatech.edu/curricular-practical-training-cpt",
    "tone": "tighten",
    "zh": {
      "state": "秋季 CPT 不批延期；新申请表 11·16 前上线",
      "detail": "OIE 现页新增：2026 年秋季 CPT 的延期请求不再授权。新申请表和合作协议表最迟 2026·11·16 提供，届时开始受理。本科合格项目仅 Construction Science and Management、Public Policy；硕士仅 City & Regional Planning、Digital Media、Robotics。博士须证明实践为完成论文所必需、且没有其他方法满足数据或访问需要，具体证明要求 11·16 公布；均须签合作协议。已有授权的具体日期以个人 I-20 和 DSO 通知为准。"
    },
    "en": {
      "state": "No Fall CPT extensions; new forms out by November 16",
      "detail": "OIE now says extensions for Fall 2026 CPT will not be authorized. New request and agreement forms will be available by November 16, 2026, when requests open. Eligible bachelor’s programs are Construction Science and Management and Public Policy; master’s programs are City & Regional Planning, Digital Media and Robotics. Doctoral students must show the training is indispensable to dissertation data or access needs, with details due November 16; a signed agreement is required in every case. Dates for existing authorizations follow the individual I-20 and DSO notice."
    },
    "screenshots": []
  }
];

export const communitySchools: CommunitySchoolRecord[] = [
  {
    id: 'unc-chapel-hill',
    checkedOn: "2026-11-01",
    school: 'UNC–Chapel Hill',
    zh: {
      state: 'ISSS 邮件截图：只有严格的毕业要求才批，其余暂停',
      detail: "ISSS 邮件截图（见附图）。校方公开 CPT 页目前只写流程修订中、请联系顾问，没有公布新的范围。",
    },
    en: {
      state:
        'ISSS email screenshot: paused except strict graduation requirements',
      detail:
        "ISSS email screenshot (attached). The public CPT page currently says only that processes are being revised and directs students to advisers; no new scope has been published.",
    },
    screenshots: [
      { src: '/cpt-evidence/cpt_unc.jpeg', width: 1080, height: 1875 },
    ],
  },
  {
    id: 'caltech',
    checkedOn: "2026-11-01",
    school: 'Caltech',
    zh: {
      state: 'ISP 通知截图：新 CPT 全部暂停，在做的人不受影响',
      detail: "ISP 通知截图（见附图）。校方 F-1 就业页仍保留一般 CPT 申请说明，没有发布恢复公告。",
    },
    en: {
      state:
        'ISP notice screenshot: all new CPT paused; current CPT unaffected',
      detail:
        "ISP notice screenshot (attached). Caltech’s F-1 employment page still carries general CPT application instructions; no reopening has been announced.",
    },
    screenshots: [
      { src: '/cpt-evidence/cpt_caltech.jpeg', width: 1080, height: 1413 },
    ],
  },
  {
    id: 'purdue-ece',
    checkedOn: "2026-11-01",
    school: 'Purdue ECE',
    zh: {
      state:
        'ECE 邮件截图：本学期不批非必修实习／co-op；论文研究另问 ISS',
      detail: "ECE 院系邮件截图（见附图），代表 ECE 院系说法；普渡全校说法见 Purdue University (ISS) 条目。",
    },
    en: {
      state:
        'ECE email screenshot: no non-required internship/co-op CPT this semester; ask ISS about thesis research',
      detail:
        "ECE department email screenshot (attached), reflecting the ECE department’s position; for Purdue’s university-wide policy, see the Purdue University (ISS) entry.",
    },
    screenshots: [
      { src: '/cpt-evidence/cpt_purdue.jpeg', width: 1320, height: 1893 },
    ],
  },
  {
    id: 'goldey-beacom-college',
    checkedOn: "2026-11-01",
    school: 'Goldey-Beacom College',
    zh: {
      state:
        '学校邮件截图：新 CPT 暂停审批；还没进 SEVIS 的暂不批',
      detail: "学校邮件截图（见附图）。校方公开 Career Services 页只有一般 CPT 说明，没有发布恢复公告。",
    },
    en: {
      state:
        'School email screenshot: new CPT approvals paused; requests not yet in SEVIS won’t be approved for now',
      detail:
        "School email screenshot (attached). The public Career Services page has only general CPT information; no reopening has been announced.",
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
