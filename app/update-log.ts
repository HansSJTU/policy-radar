import type { Language } from './language';

export type UpdateSource = {
  label: string;
  href: string;
};

export type ContentChange = {
  id: string;
  category: string;
  title: string;
  summary: string;
  before?: string;
  after?: string;
  details?: string[];
  sources: UpdateSource[];
};

export type ContentUpdate = {
  date: string;
  changes: ContentChange[];
};

const chineseUpdates: ContentUpdate[] = [
  {
    date: '2026-09-03',
    changes: [
      {
        id: 'duration-government-opposition',
        category: '诉讼进展',
        title: '#03 D/S 固定期限',
        summary:
          '政府于 9 月 2 日提交一份获双方同意的超页申请，并将拟议反对意见作为 Exhibit A 附上。拟议意见请求法院驳回 APA § 705 暂缓、初步禁令以及在行政记录提交前作出简易判决的请求，并主张任何救济均应限于原告。用户提供的 57 页文件不是法院裁定；9·03 听证与 9·15 计划生效日未因该文件本身改变。',
        before: '政府答辩期限延至 2026-09-02；初步禁令申请待答辩。',
        after: '政府已于 2026-09-02 随超页申请附上拟议反对意见；法院尚未裁定。',
        details: [
          '政府主张四年上限不是要求学生四年内毕业，超过获批期限者可申请延期停留。',
          '政府把原告主张的招生损失、合规成本和项目调整描述为推测性或经济性损害，并否认其构成不可弥补损害。',
          '政府反对全国性救济，并称若法院提供救济，应限于本案原告及其成员。',
        ],
        sources: [
          {
            label: '政府 9·02 拟议反对意见附件（57 页 PDF）',
            href: 'https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.46.1.pdf',
          },
          {
            label: '诉讼 docket 汇总',
            href: 'https://clearinghouse.net/case/48393/',
          },
        ],
      },
      {
        id: 'cpt-school-evidence-2026-09-03',
        category: 'CPT 学校清单',
        title: '学校数量与校方证据',
        summary:
          '清单由 21 所扩至 23 所，有校方网页支持当前状态的学校由 11 所增至 13 所；截图、邮件或论坛材料组仍为 10 所。新增 University of Maryland, College Park 与 Trine University，并保留两校公开材料所能支持的范围。',
        before: '21 所 · 11 所校方网页 / 10 所截图、邮件或论坛材料',
        after: '23 所 · 13 所校方网页 / 10 所截图、邮件或论坛材料',
        details: [
          'University of Maryland, College Park 于 9·02 公布：暂停不属于全专业必修、必修课程或论文研究要求的未批准 CPT；已获批 CPT 可继续。',
          'Trine University 的研究生 CPT 页面仍列 2026–27 申请截止日，并称申请持续开放、按收到顺序审理；页面未单独回应 8·24 指引，因此条目不把该页面解读为全面不受影响。',
        ],
        sources: [
          {
            label: 'University of Maryland, College Park CPT 页面',
            href: 'https://marylandglobal.umd.edu/global-learning-all/international-students-scholars/employment-taxes/employment-f-1-international-students/curricular-practical-training-cpt',
          },
          {
            label: 'Trine University CPT 页面',
            href: 'https://www.trine.edu/international/graduate/cpt-information.aspx',
          },
        ],
      },
    ],
  },
  {
    date: '2026-09-02',
    changes: [
      {
        id: 'uc-berkeley-cpt-criteria',
        category: 'CPT 学校清单',
        title: 'UC Berkeley',
        summary:
          '校方 CPT 页面进一步明确论文型 CPT 的适用条件：只有已 Advanced to Candidacy 的论文型硕士或博士，且实践训练是完成论文所必需、无法由其他研究或数据收集方式合理替代时，才可按个案申请，并需导师书面证明。Course Credit CPT 仍暂停。',
        before: '已暂停 Course Credit CPT；Degree-required 与 thesis/dissertation-required CPT 继续。',
        after: 'Course Credit CPT 仍暂停；论文型 CPT 仅限符合 candidacy、必要性、不可替代性和导师证明要求的严格个案。',
        sources: [
          {
            label: 'UC Berkeley International Office CPT 页面',
            href: 'https://internationaloffice.berkeley.edu/students/employment/cpt',
          },
        ],
      },
    ],
  },
  {
    date: '2026-09-01',
    changes: [
      {
        id: 'duration-hearing',
        category: '日期调整',
        title: '#03 D/S 固定期限',
        summary:
          '此前采用的二手报道把初步禁令听证写成 9 月 9 日；现按法院官方日历和 docket 校正为 2026 年 9 月 3 日上午 11:00（美东）。',
        before: '2026-09-09 · 初步禁令听证（错误）',
        after: '2026-09-03 · 初步禁令听证',
        sources: [
          {
            label: '法院官方日历',
            href: 'https://forms.mad.uscourts.gov/courtlist.html',
          },
          {
            label: '诉讼 docket 汇总',
            href: 'https://clearinghouse.net/case/48393/',
          },
          {
            label: '原告方案件页面',
            href: 'https://www.presidentsalliance.org/duration-of-status-litigation/',
          },
        ],
      },
      {
        id: 'cpt-guidance-dates',
        category: '政策内容',
        title: '#05 8·12 / 8·24 CPT 指引',
        summary:
          'CPT 条目现在分别说明两份 ICE/SEVP Broadcast：8·12 是对学校与 DSO 的合规责任提醒；8·24 才提出更窄的 “integral” 标准与 cooperative agreement 要求。高校按新资格口径调整 CPT 的时间起点相应更正为 8·24。',
        before: '8·12 起 · 高校按收紧后的资格标准调整 CPT',
        after: '8·12 合规提醒；8·24 资格标准收紧及高校响应',
        sources: [
          {
            label: 'SEVP 8·12 Broadcast',
            href: 'https://www.ice.gov/doclib/sevis/pdf/bcm260801.pdf',
          },
          {
            label: 'SEVP 8·24 Broadcast',
            href: 'https://www.ice.gov/doclib/sevis/pdf/bcm_260802.pdf',
          },
        ],
      },
      {
        id: 'cpt-school-evidence',
        category: 'CPT 学校清单',
        title: '学校数量与证据级别',
        summary:
          '清单由 13 所扩至 21 所；有校方网页支持当前状态的学校由 6 所增至 11 所，只有截图、邮件或论坛文字材料的学校由 7 所增至 10 所。',
        before: '13 所 · 6 所校方网页 / 7 所论坛材料',
        after: '21 所 · 11 所校方网页 / 10 所截图、邮件或论坛材料',
        details: [
          'University of Michigan 从论坛材料升级为校方网页来源。',
          'Northwestern、Columbia、Harvard 按校方页面加入清单。',
          'New York University 按 8·31 论坛报告加入，仍标为待校方公开页面确认。',
          'University of Washington 按校方通知加入；学校暂停非全专业必修的新 CPT，已获批 CPT 可以继续。',
          'Goldey-Beacom College 与 Purdue University ISS 按已下载到本站的校方邮件截图加入；Purdue ISS 与 Purdue ECE 分开记录。',
          'MIT 的公开 CPT 页面未同步最新暂停范围，因此移至截图材料组；条目改为部分非全专业必修的新 CPT 暂停。',
        ],
        sources: [
          {
            label: 'University of Washington',
            href: 'https://iss.washington.edu/update-on-cpt-policy/',
          },
          {
            label: 'Michigan',
            href: 'https://internationalcenter.umich.edu/about/news/updated-guidance-curricular-practical-training-cpt',
          },
          {
            label: 'Northwestern',
            href: 'https://www.northwestern.edu/international/international-students/student-employment/cpt-for-f1-students.html',
          },
          {
            label: 'Columbia',
            href: 'https://communications.news.columbia.edu/news/important-updates-regarding-cpt-f-1-students',
          },
          {
            label: 'Harvard',
            href: 'https://www.hio.harvard.edu/employment-training/curricular-practical-training',
          },
          {
            label: 'Goldey-Beacom 邮件截图',
            href: '/cpt-evidence/cpt_goldey_beacom.jpeg',
          },
          {
            label: 'Purdue ISS 邮件截图',
            href: '/cpt-evidence/cpt_purdue_iss.jpeg',
          },
          {
            label: 'MIT 通知截图',
            href: '/cpt-evidence/cpt_mit.jpeg',
          },
        ],
      },
    ],
  },
];

const englishUpdates: ContentUpdate[] = [
  {
    date: '2026-09-03',
    changes: [
      {
        id: 'duration-government-opposition',
        category: 'LITIGATION',
        title: '#03 Fixed F/J admission period',
        summary:
          'On September 2, the government filed an assented motion for leave to exceed the page limit and attached its proposed opposition as Exhibit A. The proposed brief asks the court to deny APA § 705 relief, a preliminary injunction, and summary judgment before the administrative record is filed, and argues that any relief should be limited to the plaintiffs. The 57-page document supplied by the user is not a court ruling; the filing itself did not change the September 3 hearing or the scheduled September 15 effective date.',
        before: 'The government response was due September 2; the injunction request was awaiting that response.',
        after: 'The government attached its proposed opposition to its September 2 page-limit motion; the court has not ruled.',
        details: [
          'The government says the four-year cap does not require students to graduate within four years because eligible students may seek an extension of stay.',
          'It characterizes the asserted enrollment losses, compliance costs, and program adjustments as speculative or economic injuries rather than irreparable harm.',
          'It opposes nationwide relief and argues that any remedy should be limited to the plaintiffs and their members.',
        ],
        sources: [
          {
            label: 'Government’s September 2 proposed opposition exhibit (57-page PDF)',
            href: 'https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.46.1.pdf',
          },
          {
            label: 'Docket summary',
            href: 'https://clearinghouse.net/case/48393/',
          },
        ],
      },
      {
        id: 'cpt-school-evidence-2026-09-03',
        category: 'CPT SCHOOL LIST',
        title: 'School count and university evidence',
        summary:
          'The list expanded from 21 to 23 schools. Entries supported by university webpages increased from 11 to 13, while the screenshot, email, or forum-evidence group remains at 10. The University of Maryland, College Park and Trine University were added within the limits of their public materials.',
        before: '21 schools · 11 university webpages / 10 screenshot, email, or forum reports',
        after: '23 schools · 13 university webpages / 10 screenshot, email, or forum reports',
        details: [
          'The University of Maryland, College Park stated on September 2 that unapproved CPT outside a program-wide requirement, required course, or thesis or dissertation research requirement is paused; previously authorized CPT may continue.',
          'Trine University’s graduate CPT page still lists 2026–27 application deadlines and says applications remain open and are reviewed in the order received. Because it does not separately address the August 24 guidance, the entry does not treat the page as proof that every CPT category is unaffected.',
        ],
        sources: [
          {
            label: 'University of Maryland, College Park CPT page',
            href: 'https://marylandglobal.umd.edu/global-learning-all/international-students-scholars/employment-taxes/employment-f-1-international-students/curricular-practical-training-cpt',
          },
          {
            label: 'Trine University CPT page',
            href: 'https://www.trine.edu/international/graduate/cpt-information.aspx',
          },
        ],
      },
    ],
  },
  {
    date: '2026-09-02',
    changes: [
      {
        id: 'uc-berkeley-cpt-criteria',
        category: 'CPT SCHOOL LIST',
        title: 'UC Berkeley',
        summary:
          'The university CPT page now states the narrow thesis and dissertation criteria explicitly: only thesis-track master’s or doctoral students who have Advanced to Candidacy may apply, and the practical training must be necessary to complete the thesis or dissertation, not reasonably replaceable by another research or data-collection method, and documented by the faculty adviser. Course Credit CPT remains paused.',
        before: 'Course-credit CPT is paused; degree-required and thesis/dissertation-required CPT continue.',
        after: 'Course Credit CPT remains paused; thesis and dissertation CPT is limited to cases meeting the candidacy, necessity, non-replaceability, and faculty-documentation requirements.',
        sources: [
          {
            label: 'UC Berkeley International Office CPT page',
            href: 'https://internationaloffice.berkeley.edu/students/employment/cpt',
          },
        ],
      },
    ],
  },
  {
    date: '2026-09-01',
    changes: [
      {
        id: 'duration-hearing',
        category: 'DATE CHANGE',
        title: '#03 Fixed F/J admission period',
        summary:
          'A secondary report previously placed the preliminary-injunction hearing on September 9. The date is now corrected to September 3, 2026, at 11:00 a.m. Eastern Time based on the court’s official calendar and docket.',
        before: 'September 9, 2026 · Preliminary-injunction hearing (incorrect)',
        after: 'September 3, 2026 · Preliminary-injunction hearing',
        sources: [
          {
            label: 'Official court calendar',
            href: 'https://forms.mad.uscourts.gov/courtlist.html',
          },
          {
            label: 'Docket summary',
            href: 'https://clearinghouse.net/case/48393/',
          },
          {
            label: 'Plaintiffs’ case page',
            href: 'https://www.presidentsalliance.org/duration-of-status-litigation/',
          },
        ],
      },
      {
        id: 'cpt-guidance-dates',
        category: 'POLICY CONTENT',
        title: '#05 August 12 / August 24 CPT guidance',
        summary:
          'The CPT entry now separates the two ICE/SEVP Broadcasts: the August 12 notice emphasized school and DSO compliance duties, while the August 24 notice introduced the narrower “integral” standard and cooperative-agreement requirement. The start of university responses to the new eligibility standard was corrected to August 24.',
        before: 'From August 12 · Universities respond to the tighter eligibility standard',
        after: 'August 12 compliance reminder; August 24 eligibility change and university response',
        sources: [
          {
            label: 'SEVP August 12 Broadcast',
            href: 'https://www.ice.gov/doclib/sevis/pdf/bcm260801.pdf',
          },
          {
            label: 'SEVP August 24 Broadcast',
            href: 'https://www.ice.gov/doclib/sevis/pdf/bcm_260802.pdf',
          },
        ],
      },
      {
        id: 'cpt-school-evidence',
        category: 'CPT SCHOOL LIST',
        title: 'School count and evidence level',
        summary:
          'The list expanded from 13 to 21 schools. Entries whose current status is supported by university webpages increased from 6 to 11, while screenshot, email, or forum-text entries increased from 7 to 10.',
        before: '13 schools · 6 university webpages / 7 forum reports',
        after: '21 schools · 11 university webpages / 10 screenshot, email, or forum reports',
        details: [
          'The University of Michigan entry moved from forum-only evidence to a university webpage.',
          'Northwestern, Columbia, and Harvard were added from university webpages.',
          'New York University was added from an August 31 forum report and remains marked as awaiting a public university page.',
          'The University of Washington was added from its university notice: new CPT not required for every student is paused, while previously authorized CPT may continue.',
          'Goldey-Beacom College and Purdue University ISS were added from university email screenshots stored on this site; Purdue ISS remains separate from Purdue ECE.',
          'MIT moved to the screenshot-evidence group because its public CPT webpage does not show the latest pause; the entry now describes the narrower scope shown in the university notice.',
        ],
        sources: [
          {
            label: 'University of Washington',
            href: 'https://iss.washington.edu/update-on-cpt-policy/',
          },
          {
            label: 'Michigan',
            href: 'https://internationalcenter.umich.edu/about/news/updated-guidance-curricular-practical-training-cpt',
          },
          {
            label: 'Northwestern',
            href: 'https://www.northwestern.edu/international/international-students/student-employment/cpt-for-f1-students.html',
          },
          {
            label: 'Columbia',
            href: 'https://communications.news.columbia.edu/news/important-updates-regarding-cpt-f-1-students',
          },
          {
            label: 'Harvard',
            href: 'https://www.hio.harvard.edu/employment-training/curricular-practical-training',
          },
          {
            label: 'Goldey-Beacom email screenshot',
            href: '/cpt-evidence/cpt_goldey_beacom.jpeg',
          },
          {
            label: 'Purdue ISS email screenshot',
            href: '/cpt-evidence/cpt_purdue_iss.jpeg',
          },
          {
            label: 'MIT notice screenshot',
            href: '/cpt-evidence/cpt_mit.jpeg',
          },
        ],
      },
    ],
  },
];

export function getUpdateLog(language: Language): ContentUpdate[] {
  return language === 'en' ? englishUpdates : chineseUpdates;
}
