export type VerifiedSchool = {
  school: string;
  state: string;
  detail: string;
  href: string;
  tone: 'pause' | 'tighten' | 'continue';
};

export type CommunitySchool = {
  school: string;
  state: string;
  screenshots: Array<{ src: string; width: number; height: number }>;
};

export const verifiedSchools: VerifiedSchool[] = [
  {
    school: 'UC Berkeley',
    state: '已暂停 Course Credit CPT',
    detail: 'Degree-required 与 thesis/dissertation-required CPT 继续。',
    href: 'https://internationaloffice.berkeley.edu/students/employment/cpt',
    tone: 'pause',
  },
  {
    school: 'UC Davis',
    state: '已暂停非学位必需的 Course Credit CPT',
    detail: '学位要求 CPT 继续；已签发 CPT I-20 暂不受影响。',
    href: 'https://siss.ucdavis.edu/news/federal-government-updates-international-students-and-scholars',
    tone: 'pause',
  },
  {
    school: 'Boston University',
    state: '暂停部分 CPT 审批',
    detail: '明确属于毕业要求的情形继续处理。',
    href: 'https://www.bu.edu/isso/2026/08/28/additional-sevp-guidance-further-restricts-cpt-eligibility/',
    tone: 'pause',
  },
  {
    school: 'UIUC',
    state: '不再批准 elective-course CPT',
    detail: '仅接受全体学生强制要求且有雇主合作协议的情形。',
    href: 'https://blogs.illinois.edu/view/7559/791491523',
    tone: 'pause',
  },
  {
    school: 'Texas A&M',
    state: '收紧，但不是全面暂停',
    detail: '8·24 后的新申请按“全员毕业要求 + 合作协议”审查，不满足则拒。',
    href: 'https://global.tamu.edu/isss/employment-internships/curricular-practical-training.html',
    tone: 'tighten',
  },
  {
    school: 'UT Dallas',
    state: '截至 8·25 表示流程未变',
    detail: '可作为反例：并非所有学校都已“取消 CPT”。',
    href: 'https://isso.utdallas.edu/2026/08/25/regarding-sevp-broadcast-messages-on-cpt/',
    tone: 'continue',
  },
  {
    school: 'University of Michigan',
    state: '不再批准 elective-course CPT',
    detail: '只批准对该学位项目所有学生均为毕业必需的实践；既有授权可继续。',
    href: 'https://internationalcenter.umich.edu/about/news/updated-guidance-curricular-practical-training-cpt',
    tone: 'pause',
  },
  {
    school: 'Northwestern University',
    state: '暂停非全员必修的 CPT 申请',
    detail: '学校审核期间，只处理对该项目所有学生均为必修工作经历的 CPT。',
    href: 'https://www.northwestern.edu/international/international-students/student-employment/cpt-for-f1-students.html',
    tone: 'pause',
  },
  {
    school: 'Columbia University',
    state: '按新标准复核 CPT 授权与申请',
    detail: '仅保留课程体系内、全员必修且有 cooperative agreement 的情形；受影响学生由 ISSO 单独通知。',
    href: 'https://communications.news.columbia.edu/news/important-updates-regarding-cpt-f-1-students',
    tone: 'tighten',
  },
  {
    school: 'Harvard University',
    state: '资格收紧，但校方未称全面停批',
    detail: '就业必须是正式记载的学位要求，并提供与该项目要求相关的 cooperative agreement。',
    href: 'https://www.hio.harvard.edu/employment-training/curricular-practical-training',
    tone: 'tighten',
  },
  {
    school: 'University of Washington',
    state: '暂停非全专业必修的新 CPT',
    detail: '对该学位项目所有学生都不是必修的 CPT 新申请暂停；已获批 CPT 可以继续。',
    href: 'https://iss.washington.edu/update-on-cpt-policy/',
    tone: 'pause',
  },
];

export const communitySchools: CommunitySchool[] = [
  {
    school: 'UCSB',
    state: '截图称暂停非学位必需的新 CPT；既有授权不受影响',
    screenshots: [
      { src: '/cpt-evidence/cpt_ucsb_1.jpeg', width: 1080, height: 1677 },
      { src: '/cpt-evidence/cpt_ucsb_2.jpeg', width: 1080, height: 1508 },
    ],
  },
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
    school: 'New York University',
    state: '论坛 8·31 报告称暂停 CPT；尚待校方公开页面确认范围',
    screenshots: [],
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
  {
    school: 'MIT',
    state: '校方通知截图称暂停部分非全专业必修的新 CPT，并将联系已取得 2026 秋季 CPT 的学生',
    screenshots: [{ src: '/cpt-evidence/cpt_mit.jpeg', width: 1080, height: 2341 }],
  },
];
