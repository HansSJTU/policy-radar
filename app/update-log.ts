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
    date: '2026-09-05',
    changes: [
      {
        id: 'cpt-school-records-2026-09-05',
        category: 'CPT 学校清单',
        title: '新增 USC、Alabama，并校正记录计数',
        summary:
          '新增 USC 与 University of Alabama 的公开 CPT 要求，记录总数由 23 增至 25；结合 UCSB、NYU 两条证据升级，校方网页组由 14 增至 18，邮件截图组由 9 减至 7。此前“所学校”的计数混入了同校不同范围的记录，现改为学校／院系记录。',
        before: '23 所学校 · 14 所校方网页 / 9 所截图、邮件或论坛材料',
        after: '25 条学校／院系记录 · 18 条校方网页 / 7 条邮件截图；对应 24 所不同院校',
        details: [
          'USC：此前未收录；现收录 8·25 公告，自 8·24 起仅批准毕业必需的 CPT，8·24 前已签发的 2026 秋季授权不会被撤销。',
          'University of Alabama：此前未收录；现收录 8·31 公告，院系须补充证明实践对全项目或方向学生、或论文完成的必要性，并提供课程目录依据。',
          'Purdue ECE 与 Purdue ISS 是同一院校的两条范围记录。更正此前更新日志把这类记录总数写成学校数的口径，历史条目原文保留供对照。',
        ],
        sources: [
          { label: 'USC OIS 8·25 CPT 公告', href: 'https://ois.usc.edu/important-update-regarding-curricular-practical-training/' },
          { label: 'University of Alabama 8·31 CPT 公告', href: 'https://international.ua.edu/news/curricular-practical-training-cpt-changes-effective-immediately/' },
          { label: 'Purdue ECE 邮件截图', href: '/cpt-evidence/cpt_purdue.jpeg' },
          { label: 'Purdue ISS 邮件截图', href: '/cpt-evidence/cpt_purdue_iss.jpeg' },
        ],
      },
      {
        id: 'nyu-tandon-math-cpt-public-source',
        category: 'CPT 学校清单',
        title: 'NYU Tandon Mathematics',
        summary:
          'NYU Tandon 数学系实习政策页注明，自 9·01 暂停国际学生 CPT 审批。原 NYU 论坛报告移至校方网页组，并将范围限定为该数学系页面覆盖的本科生与研究生。',
        before: 'New York University：8·31 论坛报告称暂停 CPT，尚待校方公开页面确认范围。',
        after: 'New York University (Tandon Mathematics)：校方院系网页支持 9·01 暂停审批；未据此确认 NYU 全校政策。',
        sources: [
          { label: 'NYU Tandon 数学系实习政策页', href: 'https://math.nyu.edu/dynamic/sites/tandon/internships/' },
        ],
      },
      {
        id: 'ucsb-cpt-public-source',
        category: 'CPT 学校清单',
        title: 'UCSB',
        summary:
          'UCSB OISS 的公开 CPT 页面称，自 8·17 暂停签发 CPT，并正在咨询法律顾问。该条移至校方网页组，原有两张邮件截图保留。',
        before: '仅由邮件截图支持：暂停非学位必需的新 CPT，既有授权不受影响。',
        after: '公开公告支持自 8·17 暂停签发 CPT；页面未细分类别，也未说明既有授权的处理方式。',
        sources: [
          { label: 'UCSB OISS CPT 页面', href: 'https://oiss.ucsb.edu/curricular-practical-training' },
        ],
      },
    ],
  },
  {
    date: '2026-09-04',
    changes: [
      {
        id: 'mit-cpt-public-source',
        category: 'CPT 学校清单',
        title: 'MIT',
        summary:
          'MIT International Students Office 的公开 CPT 页面现已明确：学校暂停 8·24 当日已收到或待审、且实践并非全专业学生完成学位必需经历的新 CPT 申请，并将联系已获 2026 秋季 CPT 授权的学生讨论后续选项。因此 MIT 从邮件截图组移至校方网页已核实组。',
        before: '23 所 · 13 所校方网页 / 10 所截图、邮件或论坛材料；MIT 仅由通知截图支持。',
        after: '23 所 · 14 所校方网页 / 9 所截图、邮件或论坛材料；MIT 由公开校方页面支持。',
        sources: [
          {
            label: 'MIT International Students Office CPT 页面',
            href: 'https://iso.mit.edu/employment/f-1-curricular-practical-training/',
          },
        ],
      },
    ],
  },
  {
    date: '2026-09-03',
    changes: [
      {
        id: 'duration-hearing-under-advisement',
        category: '诉讼进展',
        title: '#03 D/S 固定期限',
        summary:
          '法院案卷第 47 项确认，9 月 3 日的禁令听证已经举行，双方完成陈述后法院将申请留待裁定。“留待裁定”表示法官没有当庭作出裁决，将继续审议并可能另行发布书面命令；它既不表示禁令已经获批，也不表示禁令已经被驳回。',
        before: '2026-09-03 上午 11:00 的初步禁令听证待举行；法院尚未裁定。',
        after: '听证已经举行、双方陈述完毕；法院留待裁定，尚未批准或驳回禁令。',
        details: [
          '现阶段没有法院命令暂停最终规则。',
          '若截至该日法院仍无暂缓或禁令，9 月 15 日仍是计划生效日。',
        ],
        sources: [
          {
            label: '案卷第 47 项电子书记员笔记（CourtListener/RECAP）',
            href: 'https://www.courtlistener.com/docket/74661796/feed/',
          },
        ],
      },
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
    date: '2026-09-05',
    changes: [
      {
        id: 'cpt-school-records-2026-09-05',
        category: 'CPT SCHOOL LIST',
        title: 'USC and Alabama added; evidence-record count corrected',
        summary:
          'Public CPT requirements from USC and the University of Alabama expand the list from 23 to 25 records. Together with the UCSB and NYU evidence upgrades, university-webpage records increase from 14 to 18 and email-screenshot records decrease from 9 to 7. The headline now counts school/department records because separate notices from one institution had been counted as separate schools.',
        before: '23 schools · 14 university webpages / 9 screenshot, email, or forum reports',
        after: '25 school/department records · 18 university webpages / 7 email screenshots; 24 distinct institutions',
        details: [
          'USC: newly added from its August 25 notice. From August 24, CPT must be required for graduation; Fall 2026 authorizations issued before August 24 will not be rescinded.',
          'University of Alabama: newly added from its August 31 notice. Departments must document whether training is required for all students in the program or track, or for thesis/dissertation completion, with academic-catalog evidence.',
          'Purdue ECE and Purdue ISS are two scope records for one institution. This corrects earlier update-log references that called such record totals school counts; the historical wording is retained for comparison.',
        ],
        sources: [
          { label: 'USC OIS August 25 CPT notice', href: 'https://ois.usc.edu/important-update-regarding-curricular-practical-training/' },
          { label: 'University of Alabama August 31 CPT notice', href: 'https://international.ua.edu/news/curricular-practical-training-cpt-changes-effective-immediately/' },
          { label: 'Purdue ECE email screenshot', href: '/cpt-evidence/cpt_purdue.jpeg' },
          { label: 'Purdue ISS email screenshot', href: '/cpt-evidence/cpt_purdue_iss.jpeg' },
        ],
      },
      {
        id: 'nyu-tandon-math-cpt-public-source',
        category: 'CPT SCHOOL LIST',
        title: 'NYU Tandon Mathematics',
        summary:
          'The NYU Tandon mathematics internship page says international-student CPT approvals have been paused since September 1. The former NYU forum report moves to the university-webpage group, with its scope narrowed to the undergraduate and graduate mathematics students covered by this page.',
        before: 'New York University: an August 31 forum report said CPT was paused, with the scope awaiting a public university source.',
        after: 'New York University (Tandon Mathematics): a public department page supports a September 1 approval pause; it does not establish a university-wide NYU policy.',
        sources: [
          { label: 'NYU Tandon mathematics internship policies', href: 'https://math.nyu.edu/dynamic/sites/tandon/internships/' },
        ],
      },
      {
        id: 'ucsb-cpt-public-source',
        category: 'CPT SCHOOL LIST',
        title: 'UCSB',
        summary:
          'The public UCSB OISS CPT page says CPT issuance has been paused since August 17 while the office consults legal counsel. The entry moves to the university-webpage group and retains both email screenshots.',
        before: 'Email screenshots only: new CPT that was not degree-required was paused, while existing authorizations were unaffected.',
        after: 'A public notice supports an August 17 pause in CPT issuance; it does not distinguish categories or explain treatment of existing authorizations.',
        sources: [
          { label: 'UCSB OISS CPT page', href: 'https://oiss.ucsb.edu/curricular-practical-training' },
        ],
      },
    ],
  },
  {
    date: '2026-09-04',
    changes: [
      {
        id: 'mit-cpt-public-source',
        category: 'CPT SCHOOL LIST',
        title: 'MIT',
        summary:
          'MIT International Students Office now states on its public CPT page that the university paused new requests received or pending as of August 24 when the training is not required for every student to complete the degree, and that it will contact students already issued Fall 2026 CPT to discuss options. MIT therefore moves from the email-screenshot group to the university-verified group.',
        before: '23 schools · 13 university webpages / 10 screenshot, email, or forum reports; MIT was supported only by a notice screenshot.',
        after: '23 schools · 14 university webpages / 9 screenshot, email, or forum reports; MIT is supported by a public university page.',
        sources: [
          {
            label: 'MIT International Students Office CPT page',
            href: 'https://iso.mit.edu/employment/f-1-curricular-practical-training/',
          },
        ],
      },
    ],
  },
  {
    date: '2026-09-03',
    changes: [
      {
        id: 'duration-hearing-under-advisement',
        category: 'LITIGATION',
        title: '#03 Fixed F/J admission period',
        summary:
          'Docket entry 47 confirms that the September 3 injunction hearing was held. After hearing arguments, the court took the matter under advisement. This means the judge did not rule from the bench and will continue considering the request, potentially through a later written order; the injunction has been neither granted nor denied.',
        before: 'The preliminary-injunction hearing was scheduled for 11:00 a.m. on September 3; the court had not ruled.',
        after: 'The hearing was held and arguments were completed; the matter is under advisement, with no grant or denial yet.',
        details: [
          'No court order currently stays the final rule.',
          'September 15 remains the scheduled effective date unless the court first issues a stay or injunction.',
        ],
        sources: [
          {
            label: 'Docket entry 47 electronic clerk’s notes (CourtListener/RECAP)',
            href: 'https://www.courtlistener.com/docket/74661796/feed/',
          },
        ],
      },
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
