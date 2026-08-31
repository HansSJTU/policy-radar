export type GlossaryEntry = {
  term: string;
  aliases?: string[];
  fullName: string;
  explanation: string;
  fullNameEn: string;
  explanationEn: string;
};

import type { Language } from './language';

export type GlossarySegment =
  | { type: 'text'; value: string }
  | {
      type: 'term';
      value: string;
      definition: string;
      fullName: string;
      explanation: string;
    };

export const glossaryEntries: GlossaryEntry[] = [
  {
    term: 'cooperative agreement',
    fullName: 'Cooperative agreement（CPT 合作协议）',
    explanation: 'CPT 语境中用于证明学校课程与雇主训练安排关联的文件；ICE 公开指引也将雇主信列为相关材料。',
    fullNameEn: 'Cooperative agreement',
    explanationEn: 'In the CPT context, a document connecting the school’s curriculum to the employer’s training arrangement; ICE guidance also identifies an employer letter as relevant evidence.',
  },
  {
    term: 'cap-subject H-1B',
    fullName: 'Cap-subject H-1B（受年度名额限制的 H-1B）',
    explanation: '需要进入年度 H-1B cap 注册和选择程序的申请，包括常规名额与美国高等学位名额。',
    fullNameEn: 'Cap-subject H-1B',
    explanationEn: 'An H-1B petition subject to the annual registration and selection process, including both the regular cap and the U.S. advanced-degree exemption.',
  },
  {
    term: 'Cap-exempt',
    aliases: ['cap-exempt'],
    fullName: 'Cap-exempt H-1B（不受年度名额限制的 H-1B）',
    explanation: '符合条件的高校、关联非营利机构、非营利研究机构或政府研究机构等申请，不计入通常的 H-1B 年度名额。',
    fullNameEn: 'Cap-exempt H-1B',
    explanationEn: 'A petition by a qualifying university, affiliated nonprofit, nonprofit research organization, government research organization, or another qualifying employer that does not count against the regular annual H-1B cap.',
  },
  {
    term: 'Broadcast',
    fullName: 'SEVP Broadcast Message（SEVP 广播通知）',
    explanation: 'SEVP 向 SEVIS 用户和学校发布的提醒或执行口径；它不是 NPRM、最终规则，也不会自行改写 CFR。',
    fullNameEn: 'SEVP Broadcast Message',
    explanationEn: 'A notice or enforcement interpretation sent by SEVP to SEVIS users and schools. It is not an NPRM or final rule and does not itself amend the CFR.',
  },
  {
    term: 'integral',
    fullName: 'Integral part of an established curriculum（既有课程体系不可分割的一部分）',
    explanation: '在 CPT 语境中，训练必须直接关系学生专业并嵌入学校已经设立的课程体系；仅对就业有帮助并不自动满足该标准。',
    fullNameEn: 'Integral part of an established curriculum',
    explanationEn: 'For CPT, the training must directly relate to the major and be embedded in an established curriculum. Being useful for employment does not by itself satisfy the standard.',
  },
  {
    term: 'CFR',
    fullName: 'Code of Federal Regulations（联邦法规汇编）',
    explanation: '联邦政府各部门和机构的一般性、永久性规则汇编；Title 8 收录移民与国籍相关法规。',
    fullNameEn: 'Code of Federal Regulations',
    explanationEn: 'The codification of general and permanent federal agency rules. Title 8 contains immigration and nationality regulations.',
  },
  {
    term: 'ICE/SEVP',
    fullName: 'U.S. Immigration and Customs Enforcement / Student and Exchange Visitor Program（美国移民与海关执法局／学生与交流访问者项目）',
    explanation: 'ICE 下属的 SEVP 负责监管 F/M 学生、SEVIS 学校认证与学校合规。',
    fullNameEn: 'U.S. Immigration and Customs Enforcement / Student and Exchange Visitor Program',
    explanationEn: 'SEVP, within ICE, oversees F/M students, SEVIS school certification, and school compliance.',
  },
  {
    term: 'I-765',
    fullName: 'Application for Employment Authorization（就业授权申请）',
    explanation: '向 USCIS 申请就业许可文件的表格；F-1 学生通常用它申请 OPT 工作许可。',
    fullNameEn: 'Form I-765, Application for Employment Authorization',
    explanationEn: 'The USCIS form used to request an Employment Authorization Document. F-1 students generally use it for OPT employment authorization.',
  },
  {
    term: 'I-539',
    fullName: 'Application to Extend/Change Nonimmigrant Status（非移民身份延期／转换申请）',
    explanation: '用于向 USCIS 申请延长或转换部分非移民身份。',
    fullNameEn: 'Form I-539, Application to Extend/Change Nonimmigrant Status',
    explanationEn: 'The USCIS form used to request an extension or change of certain nonimmigrant classifications.',
  },
  {
    term: 'OIRA',
    fullName: 'Office of Information and Regulatory Affairs（信息与监管事务办公室）',
    explanation: 'OMB 内负责审查重要联邦规则的机构；完成审查不等于规则已经生效。',
    fullNameEn: 'Office of Information and Regulatory Affairs',
    explanationEn: 'The office within OMB that reviews significant federal rules. Completion of its review does not mean a rule is effective.',
  },
  {
    term: 'NPRM',
    fullName: 'Notice of Proposed Rulemaking（拟议规则公告）',
    explanation: '联邦机构公开提案并征求意见的正式文件；它不是最终规则。',
    fullNameEn: 'Notice of Proposed Rulemaking',
    explanationEn: 'A formal document in which a federal agency publishes a proposal and requests public comment. It is not a final rule.',
  },
  {
    term: 'OMB',
    fullName: 'Office of Management and Budget（白宫管理和预算办公室）',
    explanation: '总统行政办公室的一部分；负责监管审查的 OIRA 隶属于 OMB。',
    fullNameEn: 'Office of Management and Budget',
    explanationEn: 'An office within the Executive Office of the President. OIRA, which conducts regulatory review, is part of OMB.',
  },
  {
    term: 'DSO',
    fullName: 'Designated School Official（学校指定官员）',
    explanation: '学校中获授权管理 SEVIS、签发或更新 I-20 并处理 CPT 等事项的人员。',
    fullNameEn: 'Designated School Official',
    explanationEn: 'A school official authorized to manage SEVIS records, issue or update Forms I-20, and handle CPT and related matters.',
  },
  {
    term: 'DHS',
    fullName: 'Department of Homeland Security（美国国土安全部）',
    explanation: '主管移民执法、边境安全以及 USCIS、ICE 等机构的联邦部门。',
    fullNameEn: 'U.S. Department of Homeland Security',
    explanationEn: 'The federal department responsible for immigration enforcement, border security, USCIS, ICE, and related agencies.',
  },
  {
    term: 'DOL',
    fullName: 'Department of Labor（美国劳工部）',
    explanation: '负责 H-1B 劳工条件申请、法定工资和 PERM 劳工证等就业相关规则的联邦部门。',
    fullNameEn: 'U.S. Department of Labor',
    explanationEn: 'The federal department responsible for LCAs, prevailing wages, PERM labor certification, and related employment rules.',
  },
  {
    term: 'PERM',
    fullName: 'Program Electronic Review Management（永久劳工证程序）',
    explanation: '多数 EB-2、EB-3 雇主担保绿卡在提交 I-140 前使用的劳工认证程序。',
    fullNameEn: 'Program Electronic Review Management',
    explanationEn: 'The labor-certification process used before Form I-140 in most employer-sponsored EB-2 and EB-3 cases.',
  },
  {
    term: 'LCA',
    fullName: 'Labor Condition Application（劳工条件申请）',
    explanation: 'H-1B、H-1B1 或 E-3 雇主向劳工部申报职位、地点、工资和劳动条件的文件。',
    fullNameEn: 'Labor Condition Application',
    explanationEn: 'The filing in which an H-1B, H-1B1, or E-3 employer attests to the position, worksite, wage, and labor conditions.',
  },
  {
    term: 'OEWS',
    fullName: 'Occupational Employment and Wage Statistics（职业就业与工资统计）',
    explanation: '劳工统计局按职业和地区发布的工资数据，DOL 用它计算四级 prevailing wage。',
    fullNameEn: 'Occupational Employment and Wage Statistics',
    explanationEn: 'Bureau of Labor Statistics wage data by occupation and area that DOL uses to calculate the four prevailing-wage levels.',
  },
  {
    term: 'SEVP',
    fullName: 'Student and Exchange Visitor Program（学生与交流访问者项目）',
    explanation: 'ICE 下负责监管 F/M 学生、SEVIS 与学校认证合规的项目。',
    fullNameEn: 'Student and Exchange Visitor Program',
    explanationEn: 'The program within ICE that oversees F/M students, SEVIS, school certification, and compliance.',
  },
  {
    term: 'ICE',
    fullName: 'U.S. Immigration and Customs Enforcement（美国移民与海关执法局）',
    explanation: 'DHS 下属机构；其 SEVP 负责国际学生与学校监管。',
    fullNameEn: 'U.S. Immigration and Customs Enforcement',
    explanationEn: 'An agency within DHS. Its SEVP division oversees international students and participating schools.',
  },
];

const termsWithEntries = glossaryEntries
  .flatMap((entry) => [entry.term, ...(entry.aliases ?? [])].map((term) => ({ term, entry })))
  .sort((a, b) => b.term.length - a.term.length);
const entriesByTerm = new Map(termsWithEntries.map(({ term, entry }) => [term, entry]));
const escapedTerms = termsWithEntries.map(({ term }) => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
const glossaryPattern = new RegExp(`(?<![A-Za-z0-9])(${escapedTerms.join('|')})(?![A-Za-z0-9])`, 'g');

export function annotateGlossary(text: string, language: Language = 'zh'): GlossarySegment[] {
  const segments: GlossarySegment[] = [];
  let cursor = 0;

  for (const match of text.matchAll(glossaryPattern)) {
    const index = match.index;
    const value = match[0];
    if (index > cursor) segments.push({ type: 'text', value: text.slice(cursor, index) });

    const entry = entriesByTerm.get(value);
    if (entry) {
      const fullName = language === 'en' ? entry.fullNameEn : entry.fullName;
      const explanation = language === 'en' ? entry.explanationEn : entry.explanation;
      segments.push({
        type: 'term',
        value,
        definition: `${fullName}. ${explanation}`,
        fullName,
        explanation,
      });
    }
    cursor = index + value.length;
  }

  if (cursor < text.length) segments.push({ type: 'text', value: text.slice(cursor) });
  return segments.length > 0 ? segments : [{ type: 'text', value: text }];
}
