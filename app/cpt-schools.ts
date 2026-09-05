export type EvidenceScreenshot = {
  src: string;
  width: number;
  height: number;
};

export type VerifiedSchool = {
  school: string;
  state: string;
  detail: string;
  href: string;
  tone: 'pause' | 'tighten' | 'continue';
  screenshots: EvidenceScreenshot[];
};

export type CommunitySchool = {
  school: string;
  state: string;
  screenshots: EvidenceScreenshot[];
};

export const verifiedSchools: VerifiedSchool[] = [
  {
    school: 'UC Berkeley',
    state: 'Course Credit CPT 仍暂停；论文型 CPT 仅限严格个案',
    detail: 'Degree Requirement CPT 仅适用于全专业学生均须完成的实践；Thesis/Dissertation Requirement CPT 仅限已 Advanced to Candidacy 的论文型硕士或博士，且训练必须是完成论文所必需、无法由其他研究或数据收集方式合理替代，并需导师书面证明。',
    href: 'https://internationaloffice.berkeley.edu/students/employment/cpt',
    tone: 'pause',
    screenshots: [],
  },
  {
    school: 'UC Davis',
    state: '已暂停非学位必需的 Course Credit CPT',
    detail: '学位要求 CPT 继续；已签发 CPT I-20 暂不受影响。',
    href: 'https://siss.ucdavis.edu/news/federal-government-updates-international-students-and-scholars',
    tone: 'pause',
    screenshots: [],
  },
  {
    school: 'Boston University',
    state: '暂停部分 CPT 审批',
    detail: '明确属于毕业要求的情形继续处理。',
    href: 'https://www.bu.edu/isso/2026/08/28/additional-sevp-guidance-further-restricts-cpt-eligibility/',
    tone: 'pause',
    screenshots: [],
  },
  {
    school: 'UIUC',
    state: '不再批准 elective-course CPT',
    detail: '仅接受全体学生强制要求且有雇主合作协议的情形。',
    href: 'https://blogs.illinois.edu/view/7559/791491523',
    tone: 'pause',
    screenshots: [
      { src: '/cpt-evidence/cpt_uiuc_notice.jpeg', width: 1206, height: 2622 },
    ],
  },
  {
    school: 'Texas A&M',
    state: '收紧，但不是全面暂停',
    detail: '8·24 后的新申请按“全员毕业要求 + 合作协议”审查，不满足则拒。',
    href: 'https://global.tamu.edu/isss/employment-internships/curricular-practical-training.html',
    tone: 'tighten',
    screenshots: [],
  },
  {
    school: 'UT Dallas',
    state: '截至 8·25 表示流程未变',
    detail: '可作为反例：并非所有学校都已“取消 CPT”。',
    href: 'https://isso.utdallas.edu/2026/08/25/regarding-sevp-broadcast-messages-on-cpt/',
    tone: 'continue',
    screenshots: [],
  },
  {
    school: 'University of Michigan',
    state: '不再批准 elective-course CPT',
    detail: '只批准对该学位项目所有学生均为毕业必需的实践；既有授权可继续。',
    href: 'https://internationalcenter.umich.edu/about/news/updated-guidance-curricular-practical-training-cpt',
    tone: 'pause',
    screenshots: [
      { src: '/cpt-evidence/cpt_michigan_notice.jpeg', width: 1544, height: 916 },
    ],
  },
  {
    school: 'Northwestern University',
    state: '暂停非全员必修的 CPT 申请',
    detail: '学校审核期间，只处理对该项目所有学生均为必修工作经历的 CPT。',
    href: 'https://www.northwestern.edu/international/international-students/student-employment/cpt-for-f1-students.html',
    tone: 'pause',
    screenshots: [
      { src: '/cpt-evidence/cpt_northwestern_notice.png', width: 1284, height: 1690 },
    ],
  },
  {
    school: 'Columbia University',
    state: '按新标准复核 CPT 授权与申请',
    detail: '仅保留课程体系内、全员必修且有 cooperative agreement 的情形；受影响学生由 ISSO 单独通知。',
    href: 'https://communications.news.columbia.edu/news/important-updates-regarding-cpt-f-1-students',
    tone: 'tighten',
    screenshots: [
      { src: '/cpt-evidence/cpt_columbia_notice.webp', width: 1080, height: 2047 },
    ],
  },
  {
    school: 'Harvard University',
    state: '资格收紧，但校方未称全面停批',
    detail: '就业必须是正式记载的学位要求，并提供与该项目要求相关的 cooperative agreement。',
    href: 'https://www.hio.harvard.edu/employment-training/curricular-practical-training',
    tone: 'tighten',
    screenshots: [],
  },
  {
    school: 'University of Washington',
    state: '暂停非全专业必修的新 CPT',
    detail: '对该学位项目所有学生都不是必修的 CPT 新申请暂停；已获批 CPT 可以继续。',
    href: 'https://iss.washington.edu/update-on-cpt-policy/',
    tone: 'pause',
    screenshots: [],
  },
  {
    school: 'University of Maryland, College Park',
    state: '暂停非全员必修或非论文必需的新 CPT',
    detail: 'ISSS 暂停不属于全专业必修、必修课程或论文／学位论文研究要求的未批准 CPT；UNIV099、ENCO099、BMGT099 等非必修实习暂不受理，已获批 CPT 可继续。',
    href: 'https://marylandglobal.umd.edu/global-learning-all/international-students-scholars/employment-taxes/employment-f-1-international-students/curricular-practical-training-cpt',
    tone: 'pause',
    screenshots: [],
  },
  {
    school: 'Trine University',
    state: '校方 CPT 页面仍列开放申请与审理流程',
    detail: '研究生 CPT 页面仍列 2026–27 开始日期的申请截止日，并称申请持续开放、按收到顺序审理；页面未见针对 8·24 指引的单独更新，个案资格仍应向 DSO 确认。',
    href: 'https://www.trine.edu/international/hybrid/experiential-learning/cpt-information.aspx',
    tone: 'continue',
    screenshots: [],
  },
  {
    school: 'MIT',
    state: '暂停非全专业学位必需的新 CPT',
    detail: 'MIT 暂停 8·24 当日已收到或待审、且所涉实践并非全专业学生完成学位必需经历的新 CPT 申请；校方还将联系已获 2026 秋季 CPT 授权的学生讨论后续选项。',
    href: 'https://iso.mit.edu/employment/f-1-curricular-practical-training/',
    tone: 'pause',
    screenshots: [{ src: '/cpt-evidence/cpt_mit.jpeg', width: 1080, height: 2341 }],
  },
  {
    school: 'UCSB',
    state: '校方公告称自 8·17 暂停签发 CPT',
    detail: 'OISS 正在咨询法律顾问，待有进一步指引后更新；公告未细分 CPT 类别，也未说明既有授权的处理方式。',
    href: 'https://oiss.ucsb.edu/curricular-practical-training',
    tone: 'pause',
    screenshots: [
      { src: '/cpt-evidence/cpt_ucsb_1.jpeg', width: 1080, height: 1677 },
      { src: '/cpt-evidence/cpt_ucsb_2.jpeg', width: 1080, height: 1508 },
    ],
  },
  {
    school: 'New York University (Tandon Mathematics)',
    state: '数学系页面称自 9·01 暂停国际学生 CPT 审批',
    detail: '该实习政策页适用于数学系本科生与研究生，并请学生向 OGS 了解后续信息；本条仅记录 Tandon 数学系的公开口径，不外推 NYU 全校。',
    href: 'https://math.nyu.edu/dynamic/sites/tandon/internships/',
    tone: 'pause',
    screenshots: [],
  },
  {
    school: 'University of Southern California',
    state: '自 8·24 起仅批准毕业必需的 CPT',
    detail: 'OIS 不再接受非全项目学生必修的选修课型 CPT，补充材料核验可能延迟审批；8·24 前已签发的 2026 秋季 CPT 授权不会被撤销。',
    href: 'https://ois.usc.edu/important-update-regarding-curricular-practical-training/',
    tone: 'tighten',
    screenshots: [],
  },
  {
    school: 'University of Alabama',
    state: '自 8·31 起收紧 CPT 资格审核',
    detail: 'ISSS 要求院系证明实践为学位项目或方向全体学生必需，或为论文型硕士、博士完成论文所必需；学位要求须有课程目录依据，仅为选修课要求的 CPT 不符合标准。',
    href: 'https://international.ua.edu/news/curricular-practical-training-cpt-changes-effective-immediately/',
    tone: 'tighten',
    screenshots: [],
  },
];

export const communitySchools: CommunitySchool[] = [
  {
    school: 'UC Irvine',
    state: '截图称暂停 Course Credit CPT；强制毕业要求继续',
    screenshots: [{ src: '/cpt-evidence/cpt_uci.jpeg', width: 1080, height: 1731 }],
  },
  {
    school: 'UNC–Chapel Hill',
    state: 'ISSS 邮件截图称除严格毕业要求外暂停',
    screenshots: [{ src: '/cpt-evidence/cpt_unc.jpeg', width: 1080, height: 1875 }],
  },
  {
    school: 'Caltech',
    state: 'ISP 通知截图称暂停全部新 CPT；当前参与者不受影响',
    screenshots: [{ src: '/cpt-evidence/cpt_caltech.jpeg', width: 1080, height: 1413 }],
  },
  {
    school: 'UCLA',
    state: '通知截图称暂停非全员学位要求的 Course Credit / 支持信 CPT',
    screenshots: [{ src: '/cpt-evidence/cpt_ucla.jpeg', width: 1144, height: 667 }],
  },
  {
    school: 'Purdue ECE',
    state: '院系邮件截图称本学期不签 CPT；这是院系口径，不应外推全校',
    screenshots: [{ src: '/cpt-evidence/cpt_purdue.jpeg', width: 1320, height: 1893 }],
  },
  {
    school: 'Goldey-Beacom College',
    state: '学校邮件截图称暂停新的 CPT 审核与批准；尚未加入 SEVIS 的申请暂不获批',
    screenshots: [{ src: '/cpt-evidence/cpt_goldey_beacom.jpeg', width: 1080, height: 2202 }],
  },
  {
    school: 'Purdue University (ISS)',
    state: '校级 ISS 邮件截图称 CPT 必须属于既定课程或论文研究要求；与 ECE 院系停签通知分开记录',
    screenshots: [{ src: '/cpt-evidence/cpt_purdue_iss.jpeg', width: 1206, height: 1018 }],
  },
];
