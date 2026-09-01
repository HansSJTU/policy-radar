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
          '初步禁令听证按最新公开排期改到 2026 年 9 月 9 日上午 11:00（美东）。',
        before: '2026-09-03 · 初步禁令听证',
        after: '2026-09-09 · 初步禁令听证',
        sources: [
          {
            label: '诉讼记录',
            href: 'https://clearinghouse.net/case/48393/',
          },
          {
            label: '最新排期说明',
            href: 'https://news.clinchlaw.com/en/article/uscis-to-mandate-revised-i-539-and-i-765-forms-on-september-15-as-fixed-admissio-mtdmg30w',
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
          '清单由 13 所扩至 18 所；有校方网页的学校由 6 所增至 11 所，只有论坛截图或邮件的学校仍为 7 所。',
        before: '13 所 · 6 所校方网页 / 7 所论坛材料',
        after: '18 所 · 11 所校方网页 / 7 所论坛材料',
        details: [
          'University of Michigan 从论坛材料升级为校方网页来源。',
          'Northwestern、Columbia、Harvard、MIT 按校方页面加入清单。',
          'New York University 按 8·31 论坛报告加入，仍标为待校方公开页面确认。',
        ],
        sources: [
          {
            label: '论坛汇总',
            href: 'https://www.uscardforum.com/t/topic/524965',
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
            label: 'MIT',
            href: 'https://iso.mit.edu/employment/f-1-curricular-practical-training/',
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
          'The preliminary-injunction hearing moved to September 9, 2026, at 11:00 a.m. Eastern Time under the latest public schedule.',
        before: 'September 3, 2026 · Preliminary-injunction hearing',
        after: 'September 9, 2026 · Preliminary-injunction hearing',
        sources: [
          {
            label: 'Case record',
            href: 'https://clearinghouse.net/case/48393/',
          },
          {
            label: 'Latest scheduling summary',
            href: 'https://news.clinchlaw.com/en/article/uscis-to-mandate-revised-i-539-and-i-765-forms-on-september-15-as-fixed-admissio-mtdmg30w',
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
          'The list expanded from 13 to 18 schools. Entries backed by university webpages increased from 6 to 11, while forum-screenshot or email-only entries remained at 7.',
        before: '13 schools · 6 university webpages / 7 forum reports',
        after: '18 schools · 11 university webpages / 7 forum reports',
        details: [
          'The University of Michigan entry moved from forum-only evidence to a university webpage.',
          'Northwestern, Columbia, Harvard, and MIT were added from university webpages.',
          'New York University was added from an August 31 forum report and remains marked as awaiting a public university page.',
        ],
        sources: [
          {
            label: 'Forum roundup',
            href: 'https://www.uscardforum.com/t/topic/524965',
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
            label: 'MIT',
            href: 'https://iso.mit.edu/employment/f-1-curricular-practical-training/',
          },
        ],
      },
    ],
  },
];

export function getUpdateLog(language: Language): ContentUpdate[] {
  return language === 'en' ? englishUpdates : chineseUpdates;
}
