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
    term: 'Thesis/Dissertation Requirement CPT',
    aliases: ['thesis/dissertation-required CPT'],
    fullName: 'Thesis/Dissertation Requirement CPT（论文要求型 CPT）',
    explanation: '只有当实践或数据收集是完成硕士或博士论文缺一不可的部分时才适用；只是和研究有关还不够。',
    fullNameEn: 'Thesis/Dissertation Requirement CPT',
    explanationEn: 'CPT available only when the training or data collection is essential to finishing a master’s thesis or doctoral dissertation; being related to the research is not enough.',
  },
  {
    term: 'Degree Requirement CPT',
    fullName: 'Degree Requirement CPT（学位要求型 CPT）',
    explanation: '实习、实践或 capstone 是该学位项目所有学生毕业的强制要求；不同于仅通过选修实习课程取得学分。',
    fullNameEn: 'Degree Requirement CPT',
    explanationEn: 'CPT for an internship, practicum, or capstone that every student in the degree program must complete to graduate, rather than an elective internship course taken only for credit.',
  },
  {
    term: 'Course Credit CPT',
    aliases: ['Course-credit CPT', 'course-credit CPT'],
    fullName: 'Course Credit CPT（课程学分型 CPT）',
    explanation: '靠注册一门实习或实践课、拿学分来申请的 CPT；按现在的标准，只选一门选修实习课通常不够。',
    fullNameEn: 'Course Credit CPT',
    explanationEn: 'CPT based on enrolling in an internship or practicum course for credit. Under the current standard, an elective internship course alone usually isn’t enough.',
  },
  {
    term: 'Advanced to Candidacy',
    fullName: 'Advanced to Candidacy（正式进入论文候选阶段）',
    explanation: '学校确认学生已完成前置要求、正式进入论文阶段；刚入读研究生项目还不算。',
    fullNameEn: 'Advanced to Candidacy',
    explanationEn: 'A formal milestone confirming the student has finished the prerequisites and moved on to the thesis or dissertation stage; just being enrolled in a graduate program doesn’t count.',
  },
  {
    term: 'CPT I-20',
    fullName: 'CPT I-20（载有 CPT 授权的 I-20）',
    explanation: '由 DSO 更新签发并列明雇主、工作起止日期及全职或兼职信息；学生必须取得后才能开始相应校外工作。',
    fullNameEn: 'CPT-authorized Form I-20',
    explanationEn: 'An updated Form I-20 issued by a DSO that lists the employer, authorized dates, and full- or part-time status. The student must receive it before beginning the off-campus work.',
  },
  {
    term: 'prevailing wage',
    aliases: ['Prevailing Wage'],
    fullName: 'Prevailing wage（现行工资基准）',
    explanation: '按职业、地区及其他法定因素确定的工资基准；H-1B、LCA 和 PERM 程序通常要求雇主至少满足相应标准。',
    fullNameEn: 'Prevailing wage',
    explanationEn: 'A wage benchmark determined by occupation, location, and other regulatory factors. H-1B, LCA, and PERM processes generally require the employer to meet the applicable standard.',
  },
  {
    term: '初步禁令',
    aliases: ['preliminary injunction'],
    fullName: 'Preliminary injunction（初步禁令）',
    explanation: '官司还没打完时，法院先下的临时命令，让一项政策暂时不能执行。法院要先判断原告大概率会赢、不暂停会造成难以挽回的损害，才会发这种命令。官司最后谁赢，要看最终判决。',
    fullNameEn: 'Preliminary injunction',
    explanationEn: 'A temporary court order, issued before the case is decided, that stops a policy from being enforced for now. A court grants one only if the plaintiffs seem likely to win and would suffer harm that can’t be undone without it. Who ultimately wins is decided in the final judgment.',
  },
  {
    term: 'SEVIS',
    fullName: 'Student and Exchange Visitor Information System（学生和交流访问者信息系统）',
    explanation: '政府与学校用于维护 F、M、J 学生及交流访问者记录的系统；DSO 在其中更新 CPT 等身份信息。',
    fullNameEn: 'Student and Exchange Visitor Information System',
    explanationEn: 'The government system used with schools to maintain F, M, and J student and exchange-visitor records. DSOs use it to update CPT and other status information.',
  },
  {
    term: 'D/S',
    fullName: 'Duration of Status（身份有效期间）',
    explanation: '只要一直符合身份要求就能合法停留，I-94 上没有固定的截止日；签证本身仍有有效期。',
    fullNameEn: 'Duration of Status',
    explanationEn: 'Permission to stay that lasts as long as you keep up your status, with no fixed end date on the I-94; the visa stamp itself still expires.',
  },
  {
    term: 'EAD',
    fullName: 'Employment Authorization Document（就业授权文件／工卡）',
    explanation: 'USCIS 签发的工作许可文件；I-765 是申请表，EAD 是申请获批后取得的授权文件。',
    fullNameEn: 'Employment Authorization Document',
    explanationEn: 'The work-authorization document issued by USCIS. Form I-765 is the application, while the EAD is the authorization received after approval.',
  },
  {
    term: 'RIN',
    fullName: 'Regulation Identifier Number（法规识别编号）',
    explanation: '联邦政府为一项法规行动分配的追踪编号，可用于跨 OIRA、统一议程和 Federal Register 查询同一规则。',
    fullNameEn: 'Regulation Identifier Number',
    explanationEn: 'A tracking number assigned to a federal regulatory action and used to follow the same rule across OIRA, the Unified Agenda, and the Federal Register.',
  },
  {
    term: 'cooperative agreement',
    aliases: ['合作协议'],
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
    explanation: 'SEVP 发给学校和 DSO 的通知，用来说明某条规定该怎么执行。它属于执行指引，联邦法规（CFR）的条文本身不变，但学校通常会照着做。',
    fullNameEn: 'SEVP Broadcast Message',
    explanationEn: 'A notice SEVP sends to schools and DSOs explaining how a rule should be applied. It is guidance: the text of the federal regulations (CFR) stays the same, but schools generally follow it.',
  },
  {
    term: 'integral',
    fullName: 'Integral part of an established curriculum（学校既定课程中不可缺少的一部分）',
    explanation: '在 CPT 里，指实践必须和专业直接相关、是学校现有课程的一部分；只是对找工作有帮助不算。',
    fullNameEn: 'Integral part of an established curriculum',
    explanationEn: 'For CPT, the training must relate directly to the major and be part of the school’s existing curriculum; being useful for a job doesn’t count.',
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
    explanation: '白宫管理和预算办公室（OMB）下面专门审查重要规则的办公室。DHS、DOL 等部门的提案和最终规则，公布前通常要先送这里审；审完才能在联邦公报上公布。送到 OIRA，说明规则快要公开了。',
    fullNameEn: 'Office of Information and Regulatory Affairs',
    explanationEn: 'The office within the White House’s OMB that reviews major rules. Proposals and final rules from DHS, DOL and other agencies usually go here before they can be published in the Federal Register. A rule at OIRA is usually close to becoming public.',
  },
  {
    term: 'NPRM',
    aliases: ['拟议规则', 'proposed rule'],
    fullName: 'Notice of Proposed Rulemaking（拟议规则公告）',
    explanation: '联邦部门公开的规则草案，也叫提案。公布后有一段公众评论期，任何人都可以提意见；部门看完意见再发最终规则。提案阶段，现行规定照常适用。',
    fullNameEn: 'Notice of Proposed Rulemaking',
    explanationEn: 'A federal agency’s published draft rule, also called a proposal. Anyone can comment during the comment period; the agency then reviews the comments and issues a final rule. While it is only proposed, current rules still apply.',
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
    aliases: ['劳工证'],
    fullName: 'Program Electronic Review Management（永久劳工证程序）',
    explanation: '雇主担保绿卡的第一步，也叫劳工证。雇主要按规定渠道公开招聘，证明找不到合适的美国员工，劳工部批准后才能递交 I-140。多数 EB-2、EB-3 绿卡都要走这一步。',
    fullNameEn: 'Program Electronic Review Management',
    explanationEn: 'The first step of most employer-sponsored green cards (EB-2 and EB-3), also called labor certification. The employer advertises the job through set channels and shows it found no qualified U.S. worker; once DOL approves, it can file Form I-140.',
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
    term: '同类美国工人',
    aliases: ['同类岗位', 'similarly situated U.S. workers'],
    fullName: 'Similarly situated U.S. workers（同类美国工人）',
    explanation: '和拟聘岗位在职责、资格要求和地区上可比的美国员工，而不是公司裁掉的所有人。裁员审查和 PERM 的裁员保护都按这个标准比较岗位。',
    fullNameEn: 'Similarly situated U.S. workers',
    explanationEn: 'U.S. workers whose jobs are comparable to the offered position in duties, qualifications, and location, rather than anyone the company has laid off. Layoff review and PERM layoff protection compare jobs on this basis.',
  },
  {
    term: 'ICE',
    fullName: 'U.S. Immigration and Customs Enforcement（美国移民与海关执法局）',
    explanation: 'DHS 下属机构；其 SEVP 负责国际学生与学校监管。',
    fullNameEn: 'U.S. Immigration and Customs Enforcement',
    explanationEn: 'An agency within DHS. Its SEVP division oversees international students and participating schools.',
  },  {
    term: '临时规则',
    aliases: ['interim rule', 'interim final rule'],
    fullName: 'Interim final rule（临时规则）',
    explanation: '一种先生效、后征求意见的规则。部门认为情况紧急时，可以跳过提案阶段，直接公布并执行，同时接受公众意见，之后再发正式的最终规则。',
    fullNameEn: 'Interim final rule',
    explanationEn: 'A rule that takes effect first and takes public comment afterward. When an agency says a matter is urgent, it can skip the proposal stage, publish and enforce the rule right away, take comments, and later issue a final rule.',
  },
  {
    term: '最终规则',
    aliases: ['final rule', 'Final rule'],
    fullName: 'Final rule（最终规则）',
    explanation: '联邦部门走完提案和公众评论之后正式定稿的规则。它刊登在联邦公报上，写明哪天生效；生效后和法律一样必须遵守，除非被法院暂停或撤销。',
    fullNameEn: 'Final rule',
    explanationEn: 'The finished version of a rule after the proposal and public comment. It is published in the Federal Register with a start date; once in effect it binds like law unless a court pauses or strikes it down.',
  },
  {
    term: '联邦公报',
    aliases: ['Federal Register'],
    fullName: 'Federal Register（联邦公报）',
    explanation: '联邦政府每个工作日出版的官方刊物，提案、最终规则和总统文件都在这里正式公布。“91 FR 65306”这样的写法，指第 91 卷第 65306 页。',
    fullNameEn: 'Federal Register',
    explanationEn: 'The federal government’s official daily publication, where proposals, final rules and presidential documents are formally published. A citation like “91 FR 65306” means volume 91, page 65306.',
  },
  {
    term: '公众评论',
    aliases: ['评论期', 'public comment', 'comment period'],
    fullName: 'Public comment period（公众评论期）',
    explanation: '提案公布后的一段时间（常见 30 或 60 天），任何人都可以在 regulations.gov 上提交意见，包括学生本人。部门定稿前必须阅读并回应重要意见。',
    fullNameEn: 'Public comment period',
    explanationEn: 'A window after a proposal is published (often 30 or 60 days) when anyone, students included, can submit comments on regulations.gov. The agency must read and respond to significant comments before finalizing.',
  },
  {
    term: '规则计划表',
    aliases: ['统一议程', 'Unified Agenda'],
    fullName: 'Unified Agenda（政府规则计划表）',
    explanation: '联邦各部门每年春秋各公布一次的规则计划清单，列出打算制定哪些规则、走到哪一步、预计什么时候公布。上面的日期经常推迟，只能当方向参考。',
    fullNameEn: 'Unified Agenda',
    explanationEn: 'A list each federal agency publishes every spring and fall of the rules it plans to write, how far along they are and when it expects to publish them. The dates often slip, so treat them as a direction, not a schedule.',
  },
  {
    term: '全国暂缓',
    aliases: ['nationwide stay', 'Nationwide stay'],
    fullName: 'Nationwide stay（全国暂缓）',
    explanation: '法院在最终判决之前，先让一项规则在全国范围内停下来，所有人都按原来的规定办，不只是起诉的人。最终判决出来后，再决定规则的去留。',
    fullNameEn: 'Nationwide stay',
    explanationEn: 'A court order that halts a rule across the whole country until the case is decided, so everyone, not just the people who sued, follows the old rules. The final ruling then decides the rule’s fate.',
  },
  {
    term: '直接判决',
    fullName: 'Summary judgment（直接判决）',
    explanation: '不开庭、不传证人，法官只看双方的书面材料和政府的行政记录就作出判决。告政府规则的官司，大多用这种方式结案。',
    fullNameEn: 'Summary judgment',
    explanationEn: 'A ruling made without a trial or witnesses, based only on the written briefs and the government’s administrative record. Most lawsuits over federal rules end this way.',
  },
  {
    term: '发回',
    fullName: 'Remand（发回）',
    explanation: '法院认定规则有问题时，可以不直接作废，而是让制定规则的部门拿回去补充解释或修改。发回时如果规则不作废，修改期间规则可能照常执行。',
    fullNameEn: 'Remand',
    explanationEn: 'When a court finds a rule flawed, it can send it back to the agency to explain or fix it instead of striking it down. If the rule is not struck down at the same time, it may stay in force while the agency works on it.',
  },
  {
    term: '行政记录',
    aliases: ['administrative record'],
    fullName: 'Administrative record（行政记录）',
    explanation: '政府制定规则时依据的全部材料，包括数据、内部分析和收到的公众意见。法院主要看这些材料，判断政府的理由是否站得住。',
    fullNameEn: 'Administrative record',
    explanationEn: 'Everything the government relied on to write a rule, including data, internal analysis and public comments. Courts mainly look at this material to judge whether the government’s reasons hold up.',
  },
  {
    term: 'APA',
    fullName: 'Administrative Procedure Act（《行政程序法》）',
    explanation: '规定联邦部门怎么制定规则的基本法律：新规通常要先公开征求意见，还要给出合理的理由。规则违反这些要求，法院可以暂停或撤销它。',
    fullNameEn: 'Administrative Procedure Act',
    explanationEn: 'The basic law on how federal agencies make rules: new rules usually need public comment first and a reasoned explanation. A court can pause or strike down a rule that breaks these requirements.',
  },
  {
    term: '武断且任意',
    aliases: ['arbitrary and capricious'],
    fullName: 'Arbitrary and capricious（武断且任意）',
    explanation: '《行政程序法》下判断规则违法的常用标准：政府没有给出合理解释、忽略了重要问题或证据，法院就可能这样认定。',
    fullNameEn: 'Arbitrary and capricious',
    explanationEn: 'The usual Administrative Procedure Act test for an unlawful rule: a court may find a rule arbitrary and capricious when the government failed to explain it reasonably or ignored important problems or evidence.',
  },
  {
    term: 'CRA',
    fullName: 'Congressional Review Act（《国会审查法》）',
    explanation: '国会推翻新出台的联邦规则的程序。两院都要通过决议，再由总统签署；总统否决的话，国会要以三分之二多数推翻否决，规则才会被废除。',
    fullNameEn: 'Congressional Review Act',
    explanationEn: 'The process Congress uses to overturn a newly issued federal rule. Both chambers must pass a resolution and the President must sign it; if the President vetoes it, Congress needs a two-thirds vote to override.',
  },
  {
    term: '起诉资格',
    aliases: ['lack standing'],
    fullName: 'Standing（起诉资格）',
    explanation: '能不能打这场官司的门槛：原告要证明自己因为这项政策受到了具体的、真实的损害。政府常以原告不够资格为由，请法院不要审。',
    fullNameEn: 'Standing',
    explanationEn: 'The threshold for bringing a lawsuit: plaintiffs must show the policy caused them a concrete, real injury. The government often argues plaintiffs lack standing to keep a court from hearing the case.',
  },
  {
    term: '无法弥补的损害',
    aliases: ['irreparable harm'],
    fullName: 'Irreparable harm（无法弥补的损害）',
    explanation: '法院在判决前先暂停一项政策的条件之一：如果不先暂停，原告会受到事后用钱也补不回来的损害，比如错过学期、失去工作或身份。',
    fullNameEn: 'Irreparable harm',
    explanationEn: 'One of the conditions for a court to pause a policy before ruling: without a pause, the plaintiffs would suffer harm money can’t fix later, such as losing a semester, a job or immigration status.',
  },
  {
    term: '巡回上诉法院',
    aliases: ['第一巡回上诉法院', '第一巡回法院', '第九巡回法院', 'First Circuit', 'Ninth Circuit'],
    fullName: 'U.S. Courts of Appeals（联邦巡回上诉法院）',
    explanation: '联邦地区法院之上的上诉法院，按地区分成若干“巡回区”。第一巡回区管麻省等新英格兰各州，第九巡回区管加州等西部各州。对地区法院的判决不服，就上诉到这里。',
    fullNameEn: 'U.S. Courts of Appeals',
    explanationEn: 'The appeals courts above the federal district courts, divided by region into “circuits.” The First Circuit covers Massachusetts and the rest of New England; the Ninth covers California and other western states. Appeals from district-court rulings go here.',
  },
  {
    term: '案卷',
    aliases: ['docket'],
    fullName: 'Docket（案卷）',
    explanation: '一个案件或一项规则的全部公开文件。法院案卷按编号列出每份文件，比如“第 51 项”就是第 51 份；regulations.gov 上的规则案卷收着提案和公众提交的意见。',
    fullNameEn: 'Docket',
    explanationEn: 'All the public filings in a case or rulemaking. A court docket numbers each filing (“entry 51” is the 51st); a regulations.gov docket holds the proposal and the public comments on it.',
  },
  {
    term: '行政命令',
    aliases: ['executive order', 'Executive Order'],
    fullName: 'Executive order（行政命令）',
    explanation: '总统给联邦部门下的书面工作指示。各部门要按它调整做法，但它本身不改联邦法规，所以不需要提案和公众评论；要改法规，部门还得另走规则程序。',
    fullNameEn: 'Executive order',
    explanationEn: 'A written instruction from the President to federal agencies. Agencies change how they work to follow it, but it does not change federal regulations itself, so it needs no proposal or public comment; changing a regulation still takes separate rulemaking.',
  },
  {
    term: '总统公告',
    aliases: ['Proclamation', 'presidential proclamation'],
    fullName: 'Presidential proclamation（总统公告）',
    explanation: '总统发布的正式公告，常用来限制某类人入境或设定入境条件。10 万美元 H-1B 入境费就来自总统公告 10973 号。',
    fullNameEn: 'Presidential proclamation',
    explanationEn: 'A formal announcement by the President, often used to restrict or set conditions on entry for certain people. The $100,000 H-1B entry fee comes from Proclamation 10973.',
  },
  {
    term: 'TPS',
    fullName: 'Temporary Protected Status（临时保护身份）',
    explanation: '美国因为战乱、灾害等原因，允许特定国家的人暂时留下并工作的身份。DHS 会发公告延长这些人的身份和工卡。',
    fullNameEn: 'Temporary Protected Status',
    explanationEn: 'A status that lets people from certain countries stay and work in the U.S. temporarily because of war, disaster or similar conditions at home. DHS extends their status and work permits by notice.',
  },
  {
    term: 'I-94',
    fullName: 'Form I-94, Arrival/Departure Record（入境记录）',
    explanation: '每次入境时生成的电子记录，写明你以什么身份入境、可以待到哪天。F-1 学生的 I-94 通常写 D/S，表示没有固定截止日。可以在 CBP 网站自己查。',
    fullNameEn: 'Form I-94, Arrival/Departure Record',
    explanationEn: 'The electronic record created each time you enter the U.S., showing your status and how long you may stay. F-1 students usually see D/S, meaning no fixed end date. You can look it up yourself on the CBP website.',
  },
  {
    term: 'I-20',
    fullName: 'Form I-20（F-1 学生资格证明）',
    explanation: '学校签发的 F-1 学生身份文件，写明你的专业、学习期限和资金来源。CPT 和 OPT 的推荐、授权也会更新在 I-20 上。',
    fullNameEn: 'Form I-20, Certificate of Eligibility',
    explanationEn: 'The school-issued document for F-1 students, listing your program, dates of study and funding. CPT and OPT recommendations and authorizations are also recorded on it.',
  },
  {
    term: 'I-129',
    fullName: 'Form I-129, Petition for a Nonimmigrant Worker（非移民工作签证申请）',
    explanation: '雇主为 H-1B、L-1、O-1 等工作签证向 USCIS 递交的申请表。第一次申请、延期和换雇主都用它。',
    fullNameEn: 'Form I-129, Petition for a Nonimmigrant Worker',
    explanationEn: 'The petition employers file with USCIS for H-1B, L-1, O-1 and other work visas, used for first filings, extensions and job changes.',
  },
  {
    term: 'I-140',
    fullName: 'Form I-140, Immigrant Petition for Alien Worker（职业移民申请）',
    explanation: '雇主为员工递交的绿卡移民申请，通常在 PERM 劳工证批准之后递交。I-140 获批，是 H-4 配偶申请工卡的常见条件。',
    fullNameEn: 'Form I-140, Immigrant Petition for Alien Worker',
    explanationEn: 'The green-card petition an employer files for a worker, usually after PERM is approved. An approved I-140 is the usual basis for an H-4 spouse’s work permit.',
  },
  {
    term: 'AC21',
    fullName: 'American Competitiveness in the Twenty-First Century Act（《21 世纪美国竞争力法》）',
    explanation: '2000 年的一部法律。它允许绿卡还在办的 H-1B 持有人超过六年上限继续延期，也允许换雇主时带着在办的绿卡申请走。',
    fullNameEn: 'American Competitiveness in the Twenty-First Century Act',
    explanationEn: 'A 2000 law that lets H-1B workers with green cards in process extend beyond the six-year limit, and lets some pending green-card cases move with them to a new employer.',
  },
  {
    term: '补件通知',
    aliases: ['request for evidence', 'requests for evidence'],
    fullName: 'Request for Evidence, RFE（补件通知）',
    explanation: 'USCIS 认为材料不够时寄来的信，列出要补交的证据和截止日。按时补齐就继续审，补不齐可能被拒。',
    fullNameEn: 'Request for Evidence (RFE)',
    explanationEn: 'A letter from USCIS saying the file is incomplete, listing the evidence to send and a deadline. The case continues once you respond; a weak or late response can lead to denial.',
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
