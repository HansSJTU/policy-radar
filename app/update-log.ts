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
