'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  ExternalLink,
  FileSearch,
  Images,
  Search,
  ShieldAlert,
  X,
} from 'lucide-react';
import { getThirtyDayBriefing } from './briefing-feed';
import { GlossaryText } from './glossary-text';
import { getProcessTrack } from './process-model';
import { VisitorTracker } from '@/components/visitor-tracker';
import { TooltipProvider } from '@/components/ui/tooltip';
import { englishCommunitySchools, englishPolicies, englishRouteStages, englishVerifiedSchools } from './english-content';
import { LanguageProvider } from './language-context';
import { brandHomeLabel, type Language } from './language';
import { persistLanguage } from './language-client';
import { filterPoliciesByRouteStage } from './policy-filter';
import { GitHubProjectLink } from './github-link';
import { MobileSiteMenu } from './mobile-site-menu';
import {
  communitySchools,
  verifiedSchools,
  type CommunitySchool,
  type VerifiedSchool,
} from './cpt-schools';

type Tone = 'red' | 'amber' | 'blue' | 'green' | 'gray';

const policies: Array<{
  rank: number;
  id: string;
  title: string;
  tldr: string;
  score: string;
  confidence: number;
  status: string;
  tone: Tone;
  current: string;
  route: string[];
  milestones: Array<{ date: string; text: string }>;
  next: Array<{ date: string; text: string; estimate?: boolean }>;
  impacts: string[];
  sources: Array<{ label: string; href: string }>;
}> = [
  {
    rank: 1,
    id: 'opt-fee',
    title: 'OPT 可能增收 $100,000',
    tldr: 'F-1 学生申请 OPT 时可能需要缴纳 10 万美元；这一金额来自媒体报道，官方尚未公布规则正文、具体收费标准、缴费方或减免条件。',
    score: '10.0',
    confidence: 20,
    status: 'OMB 审查中 · 金额未获官方确认',
    tone: 'blue',
    current: 'ICE 的拟议规则于 2026-08-20 送交 OMB/OIRA。标题为 Optional Practical Training Fees，属于经济重大规则；截至本报告日期，规则正文和收费数字尚未公开，现行 OPT 申请费未变。',
    route: ['OPT', 'H-1B 转换'],
    milestones: [
      { date: '2026-08-20', text: 'RIN 1653-AB01 送交 OMB/OIRA 审查。' },
      { date: '2026-08-26', text: '高校提醒：$100k 来自媒体报道，不是已公布政府文本。' },
    ],
    next: [
      { date: '下一步', text: 'OIRA 审查结束后，才可能在 Federal Register 发布 NPRM。' },
      { date: '数周—数月', text: '可能公开提案文本；最终规则更可能在 2026 年末或 2027 年以后。', estimate: true },
    ],
    impacts: [
      '若对个人或雇主按 $100k 收费，大多数普通毕业生将无法把 OPT 当作常规就业桥梁。',
      '雇主会在尚未进入 H-1B 抽签前就筛掉成本较高的国际学生。',
      '当前无需支付新费用；应等待官方 NPRM 的适用对象、减免和生效条款。',
    ],
    sources: [
      { label: 'OIRA 审查记录', href: 'https://www.reginfo.gov/public/do/eoDetails?rrid=1505717' },
      { label: 'UIC 状态说明', href: 'https://ois.uic.edu/news-stories/dhs-advances-proposed-rulemaking-on-opt-fees/' },
      { label: '美卡论坛讨论', href: 'https://www.uscardforum.com/t/topic/521723' },
    ],
  },
  {
    rank: 2,
    id: 'h1b-fee',
    title: '新的 H-1B $103,265 附加费',
    tldr: 'DHS 提议在现有费用之外，对每份 cap-subject H-1B 申请加收 103,265 美元；该费用适用于美国硕士名额和 F-1 境内转身份申请，cap-exempt 申请不在收费范围内。',
    score: '9.9',
    confidence: 55,
    status: '正式 NPRM · 尚未生效',
    tone: 'amber',
    current: 'DHS 于 2026-08-25 正式发布 RIN 1615-AD20，拟在现有费用之外，对每份 cap-subject H-1B petition 加收 $103,265。Cap-exempt 申请不在该附加费范围。',
    route: ['OPT → H-1B', 'H-1B 抽签'],
    milestones: [
      { date: '2026-06-08', text: '旧总统公告的 $100k 实施被联邦地区法院撤销；政府上诉中。' },
      { date: '2026-08-25', text: '新的 $103,265 收费 NPRM 发布，使用不同法律路径。' },
    ],
    next: [
      { date: '2026-09-24', text: '公众评论截止；这是当前最明确的参与节点。' },
      { date: '2026 年末—2027+', text: 'DHS 可能发布最终规则，之后仍可能遭遇诉讼。', estimate: true },
    ],
    impacts: [
      '将大幅降低雇主为应届 F-1/OPT 员工参加 H-1B 抽签的意愿。',
      '费用不是只针对境外入境；提案按 cap-subject petition 划分。',
      '高校、研究机构等 cap-exempt 雇主不受这笔附加费约束，但其他规则仍适用。',
    ],
    sources: [
      { label: 'Federal Register NPRM', href: 'https://www.federalregister.gov/documents/2026/08/25/2026-17324/fee-for-certain-h-1b-petitions' },
      { label: '美卡论坛讨论', href: 'https://www.uscardforum.com/t/topic/527162' },
    ],
  },
  {
    rank: 3,
    id: 'duration-status',
    title: 'F/J 不再使用 Duration of Status',
    tldr: 'DHS 最终规则取消 F/J 持有人的 D/S 入境期限，改用通常不超过四年的固定期限；需要继续停留的人必须向 USCIS 申请延期，OPT 申请通常还要同时提交 I-765 和 I-539。',
    score: '9.4',
    confidence: 85,
    status: '最终规则 · 诉讼中',
    tone: 'red',
    current: '2025 年的拟议规则已在 2026-07-17 变成最终规则。F/J 最长按项目获批、但通常不超过四年；延期需向 USCIS 申请。现有 D/S 持有人有过渡条款，但生效后出境再入境通常会进入固定期限制度。',
    route: ['F-1', 'CPT', 'OPT'],
    milestones: [
      { date: '2025-08-28', text: 'DHS 发布拟议规则。' },
      { date: '2026-07-17', text: '最终规则发布。' },
      { date: '2026-08-18', text: '高校联盟等在麻省联邦法院起诉。' },
      { date: '2026-08-31', text: '法院把政府答辩期限延至 9·02；9·03 的初步禁令听证排期未变。' },
    ],
    next: [
      { date: '2026-09-03', text: '法院官方日历列明：初步禁令听证，上午 11:00（美东）。' },
      { date: '2026-09-15', text: '规则计划生效；法院仍可能在此前改变局面。' },
    ],
    impacts: [
      '完成美国 F-1 学位后，原则上不能再以 F-1 就读同级或更低级别项目，Day-1 CPT 回退路径被直接压缩。',
      '研究生在项目中途换专业或转学受到更严限制，除非 SEVP 因特殊情形例外批准。',
      '新制度下 OPT 通常要同时处理 I-765 与 I-539，且二者批准前不能开始工作。',
      '新制度下一般离境宽限期缩为 30 天；过渡人群规则更复杂。',
    ],
    sources: [
      { label: '2025 拟议规则', href: 'https://www.federalregister.gov/documents/2025/08/28/2025-16554/establishing-a-fixed-time-period-of-admission-and-an-extension-of-stay-procedure-for-nonimmigrant' },
      { label: '2026 最终规则', href: 'https://www.federalregister.gov/documents/2026/07/17/2026-14439/establishing-a-fixed-time-period-of-admission-and-an-extension-of-stay-procedure-for-nonimmigrant' },
      { label: '法院官方日历', href: 'https://forms.mad.uscourts.gov/courtlist.html' },
      { label: '美卡论坛规则讨论', href: 'https://www.uscardforum.com/t/topic/431784' },
      { label: '美卡论坛诉讼讨论', href: 'https://www.uscardforum.com/t/topic/525892' },
    ],
  },
  {
    rank: 4,
    id: 'h1b-weighted-selection',
    title: 'H-1B 改为工资等级加权抽签',
    tldr: 'USCIS 已把 cap-subject H-1B 的等概率随机抽签改为工资等级加权抽签：Level I、II、III、IV 分别获得 1、2、3、4 份抽签权重；规则自 2026-02-27 生效，并从 FY2027 注册季开始使用。',
    score: '9.0',
    confidence: 100,
    status: '最终规则已生效 · FY2027 起使用',
    tone: 'red',
    current: 'DHS 于 2025-12-29 发布 RIN 1615-AD01 最终规则，并于 2026-02-27 生效。USCIS 按职位对应的 OEWS 工资等级赋予 1 至 4 份抽签权重，同时保留以受益人为中心的选择方式以及普通名额、美国高学历名额的原有选择顺序。',
    route: ['OPT → H-1B', 'H-1B 抽签', 'Cap-subject'],
    milestones: [
      { date: '2025-09-24', text: 'DHS 发布工资等级加权抽签 NPRM。' },
      { date: '2025-12-29', text: '最终规则发布，保留提案中的 Level I 至 IV 四档权重。' },
      { date: '2026-02-27', text: '规则生效，并适用于 FY2027 H-1B 注册季。' },
    ],
    next: [
      { date: '后续 cap 季', text: 'USCIS 将继续按职位、工作地点和申报工资对应的 OEWS 等级进行加权选择，除非规则日后被修改。' },
    ],
    impacts: [
      'DHS 估算 Level I 至 IV 的简单加权中签概率分别约为 15.29%、30.58%、45.87% 和 61.16%；旧的等概率抽签基准约为 29.59%。',
      'F-1/OPT 毕业生若对应入门级职位并按 Level I 申报，只获得一份权重；较高工资等级的职位获得更多权重。',
      '工资等级按具体职业和工作地点判断，不是单纯比较所有申请人的绝对年薪；该规则也不提高职位本身必须支付的法定工资等级。',
      '规则保留 beneficiary-centric selection；同一受益人即使由多个雇主注册，被抽中后仍只计入一次年度名额。',
    ],
    sources: [
      { label: 'Federal Register 最终规则', href: 'https://www.federalregister.gov/documents/2025/12/29/2025-23853/weighted-selection-process-for-registrants-and-petitioners-seeking-to-file-cap-subject-h-1b' },
      { label: '美卡论坛讨论', href: 'https://www.uscardforum.com/t/topic/415560' },
    ],
  },
  {
    rank: 5,
    id: 'cpt-guidance',
    title: '8·12 / 8·24 CPT 指引收紧',
    tldr: 'ICE/SEVP 要求学校只为完成学位所必需、且对该项目所有学生都是毕业要求的实习批准 CPT；仅注册一门选修实习课通常不足，实习雇主还必须与学校签有 cooperative agreement。',
    score: '8.8',
    confidence: 100,
    status: 'SEVP 执法口径已在执行',
    tone: 'red',
    current: 'ICE/SEVP 先在 8·12 提醒学校与 DSO 承担合规责任，后在 8·24 将 “integral” 解释为：实践训练必须是完成学位所必需、且对该项目所有学生均为毕业要求；仅靠选修课通常不够，sponsoring employer 还需与学校有 cooperative agreement。',
    route: ['CPT', 'Day-1 CPT', '实习'],
    milestones: [
      { date: '2026-08-12', text: 'SEVP Broadcast 2608-01：强调 DSO 与学校责任并预告强化监管。' },
      { date: '2026-08-24', text: 'Broadcast 2608-02：给出更窄的 “integral” 与合作协议标准。' },
      { date: '2026-08-24 起', text: '多所高校暂停 Course Credit / optional CPT，或改为只批学位强制项目。' },
    ],
    next: [
      { date: '现在', text: '每所学校按自身课程设置和法律意见执行；没有统一恢复日期。' },
      { date: '未来数周', text: '学校可能继续更新政策；SEVP 也可能补充问答或采取执法行动。', estimate: true },
    ],
    impacts: [
      '传统“注册一门实习课即可 CPT”的路径风险最高。',
      '学位手册明确要求所有学生完成实习、co-op、clinical 或论文研究的项目，仍较可能符合。',
      '既有 CPT I-20 是否受影响由学校通知决定；多所学校明确现有授权暂不受影响。',
    ],
    sources: [
      { label: 'SEVP 8·12 Broadcast', href: 'https://www.ice.gov/doclib/sevis/pdf/bcm260801.pdf' },
      { label: 'SEVP 8·24 Broadcast', href: 'https://www.ice.gov/doclib/sevis/pdf/bcm_260802.pdf' },
      { label: '美卡论坛讨论', href: 'https://www.uscardforum.com/t/topic/524965' },
    ],
  },
  {
    rank: 6,
    id: 'prevailing-wage',
    title: 'H-1B / PERM 工资等级上调',
    tldr: 'DOL 提议把 H-1B、H-1B1、E-3 和 PERM 使用的四级法定工资门槛，从约第 17、34、50、67 百分位提高至第 34、52、70、88 百分位；该提案尚未生效。',
    score: '8.4',
    confidence: 60,
    status: '评论期已结束 · 尚未生效',
    tone: 'amber',
    current: 'DOL 于 2026-03-27 发布 RIN 1205-AC30 的 NPRM，公众评论期于 2026-05-26 结束。2026 年 8 月统一议程仍将其列在 Proposed Rule Stage；DOL 尚未发布最终规则，现行工资等级计算方式没有改变。',
    route: ['OPT → H-1B', 'H-1B', 'PERM'],
    milestones: [
      { date: '2025-09-19', text: '总统公告要求 DOL 启动规则制定，调整 H-1B prevailing wage 等级。' },
      { date: '2026-03-27', text: 'DOL 发布 NPRM，提出第 34、52、70、88 百分位的新四级工资结构。' },
      { date: '2026-05-26', text: '60 天公众评论期结束，DOL 开始审阅意见。' },
    ],
    next: [
      { date: '下一步', text: 'DOL 可能修改提案并将最终规则送交 OIRA；目前没有公开完成日期。' },
      { date: '日期待定', text: '只有最终规则发布并到达其生效日后，新工资等级才会开始适用。', estimate: true },
    ],
    impacts: [
      '如果按提案定稿，使用 OEWS 工资数据的雇主必须为新的 H-1B、H-1B1、E-3 LCA 和 PERM 职位满足更高的工资下限。',
      '入门级岗位和工资较低地区的职位更可能无法满足雇主预算，从 OPT 转入 H-1B 的可选岗位会减少。',
      'H-1B 延期或换雇主在需要提交新 LCA 时也可能受到影响；该规则本身不改变 H-1B 抽签权重或名额。',
      '当前获批案件和现行工资标准尚未改变，应以未来最终规则的适用日期与过渡条款为准。',
    ],
    sources: [
      { label: 'Federal Register NPRM', href: 'https://www.federalregister.gov/d/2026-06017' },
      { label: 'DOL 规则说明', href: 'https://www.dol.gov/newsroom/releases/eta/eta20260326-0' },
      { label: '美卡论坛讨论', href: 'https://www.uscardforum.com/t/topic/439546' },
    ],
  },
  {
    rank: 7,
    id: 'h1b-reform',
    title: 'H-1B 分类体系改革',
    tldr: 'DHS 拟重新界定 H-1B cap-exempt 资格，并加强对有违规记录雇主和第三方工作地点的审查；具体资格边界和证明要求要以 NPRM 正文为准。',
    score: '7.0',
    confidence: 25,
    status: 'OMB 审查中 · 正文未公开',
    tone: 'blue',
    current: 'RIN 1615-AD00 于 2026-08-24 送交 OIRA。统一议程摘要提到：调整 cap exemption 资格、加强对有违规记录雇主的审查、强化第三方工作地点监管等。',
    route: ['H-1B', '第三方派驻', 'Cap-exempt'],
    milestones: [
      { date: '2025-10 议程', text: 'DHS 首次较清楚披露改革方向。' },
      { date: '2026-08-24', text: '拟议规则送交 OIRA，进入发布前审查。' },
    ],
    next: [
      { date: '2026-09—年末', text: '可能发布 NPRM 并开放评论。', estimate: true },
      { date: '2027+', text: '若推进，最终规则与诉讼更可能发生在 2027 年以后。', estimate: true },
    ],
    impacts: [
      '外包、consulting、第三方客户现场工作的证据负担可能上升。',
      'Cap-exempt 路径可能被重新界定，但具体边界现在无法判断。',
      '不要把议程摘要当成最终规则；等 NPRM 后再判断个人路径。',
    ],
    sources: [
      { label: 'OIRA 审查记录', href: 'https://www.reginfo.gov/public/do/eoDetails?rrid=1505714' },
      { label: '统一议程摘要', href: 'https://www.reginfo.gov/public/do/eAgendaViewRule?RIN=1615-AD00&pubId=202510' },
      { label: '美卡论坛讨论', href: 'https://www.uscardforum.com/t/topic/527527' },
    ],
  },
  {
    rank: 8,
    id: 'grace-period',
    title: '拟取消失业后的 60 天宽限期',
    tldr: 'DHS 拟取消 E-1、E-2、E-3、H-1B、H-1B1、L-1、O-1 和 TN 等身份在雇佣提前终止后的最长 60 天酌情宽限期；该提案不涉及 F-1 完成学业后的宽限期。',
    score: '5.5',
    confidence: 35,
    status: 'OIRA 已审完 · 等待 NPRM',
    tone: 'blue',
    current: 'RIN 1615-AD22 于 2026-08-27 完成 OIRA 审查，结果为 “Consistent with Change”。拟取消 E-1/E-2/E-3/H-1B/H-1B1/L-1/O-1/TN 等在雇佣提前终止后的最长 60 天酌情宽限期。提案尚未公开。',
    route: ['H-1B 失业', '换雇主', '转身份'],
    milestones: [
      { date: '2026-08-06', text: '提案送交 OIRA。' },
      { date: '2026-08-27', text: 'OIRA 完成审查并带修改放行。' },
    ],
    next: [
      { date: '数天—数周', text: '可能发布 NPRM，届时才会看到适用细节。', estimate: true },
      { date: '2026 年末—2027+', text: '评论结束后才可能形成最终规则。', estimate: true },
    ],
    impacts: [
      'H-1B 被裁后可能无法在境内从容寻找新雇主、递交 change of status 或安排离境。',
      '雇主转换、家庭安排与 I-94 到期日会变得更关键。',
      'F-1 完成课程后的 grace period 是另一套规则，不要混淆。',
    ],
    sources: [
      { label: 'OIRA 完成记录', href: 'https://www.reginfo.gov/public/do/eoDetails?rrid=1496261' },
      { label: 'Fragomen 8·28 更新', href: 'https://www.fragomen.com/insights/united-states-dhs-proposal-to-eliminate-60-day-nonimmigrant-grace-period-clears-federal-review.html' },
      { label: '美卡论坛讨论', href: 'https://www.uscardforum.com/t/topic/523657' },
    ],
  },
  {
    rank: 9,
    id: 'ead-discretion',
    title: 'I-765 拟扩大犯罪记录审查',
    tldr: 'DHS 提议要求 USCIS 对 OPT、H-4 EAD 等多数酌情工作许可申请加强犯罪记录审查；申请人若曾被捕、被刑事指控、被起诉或被定罪，USCIS 通常将拒绝 I-765，除非存在重大的相反公共利益。',
    score: '4.2',
    confidence: 60,
    status: '评论期已结束 · 尚未生效',
    tone: 'amber',
    current: 'DHS 于 2026-06-05 发布 RIN 1615-AC98 的 NPRM，公众评论期于 2026-08-04 结束。提案把新的酌情标准扩展至多数 8 CFR 274a.12(c) 类别，并要求相关初次和续期 I-765 提交生物识别信息；截至本报告日期，DHS 尚未发布最终规则。',
    route: ['OPT', 'H-4 EAD', 'I-765'],
    milestones: [
      { date: '2026-03-31', text: 'OIRA 完成 NPRM 的发布前审查。' },
      { date: '2026-06-05', text: 'DHS 发布酌情工作许可 NPRM。' },
      { date: '2026-08-04', text: '60 天公众评论期结束。' },
    ],
    next: [
      { date: '下一步', text: 'DHS 审阅评论并决定是否修改或发布最终规则；目前没有公开日期。' },
      { date: '日期待定', text: '若定稿，新标准只会按最终规则规定的生效日适用于相关初次或续期申请。', estimate: true },
    ],
    impacts: [
      '提案覆盖 OPT 的 (c)(3)、H-4 EAD 的 (c)(26) 等多数 8 CFR 274a.12(c) 类别；没有相关记录的申请人不会仅因这条标准自动失去资格。',
      '被捕、尚无处分的刑事指控、正式起诉或定罪都可能成为通常导致拒绝的负面因素，即使案件没有形成定罪。',
      '官方文本针对 criminal acts，不等于所有民事交通罚单都会触发拒绝；具体记录性质和证明材料由 USCIS 审查。',
      '提案不会自动撤销已经签发的 EAD；现有卡片在其标注的有效期内继续有效。',
    ],
    sources: [
      { label: 'Federal Register NPRM', href: 'https://www.federalregister.gov/d/2026-11285' },
      { label: 'Regulations.gov 文档', href: 'https://www.regulations.gov/document/USCIS-2026-0067-0001' },
      { label: '美卡论坛讨论', href: 'https://www.uscardforum.com/t/topic/521188' },
    ],
  },
  {
    rank: 10,
    id: 'h4-ead',
    title: '拟取消部分 H-4 配偶 EAD',
    tldr: 'DHS 拟撤销 2015 年允许部分 H-4 配偶申请 EAD 的规则；该政策将取消符合条件 H-4 配偶的工作许可，但不直接取消主申请人的 H-1B 身份。',
    score: '3.0',
    confidence: 10,
    status: '长期议程 · 日期待定',
    tone: 'gray',
    current: 'RIN 1615-AD14 列入长期行动，拟撤销 2015 年允许部分 H-4 配偶申请 EAD 的规则。NPRM 日期为 To Be Determined，尚无公开文本或法律期限。',
    route: ['H-4 家庭', '家庭收入'],
    milestones: [
      { date: '2026 统一议程', text: '项目进入政府长期规则议程。' },
      { date: '截至 2026-09-02', text: '没有 NPRM、评论期或生效日。' },
    ],
    next: [
      { date: 'TBD', text: '若推进，仍须经历 NPRM、评论、最终规则与可能诉讼。' },
    ],
    impacts: [
      '不直接改变主申请人的 H-1B 身份或抽签资格。',
      '依赖 H-4 EAD 的家庭可能失去第二份收入、福利和职业连续性。',
      '目前不应把议程项目当成即将生效的禁令。',
    ],
    sources: [
      { label: '统一议程 RIN 1615-AD14', href: 'https://www.reginfo.gov/public/do/eAgendaViewRule?RIN=1615-AD14&pubId=202510' },
      { label: '美卡论坛讨论', href: 'https://www.uscardforum.com/t/topic/528394' },
    ],
  },
];

const routeStages = [
  {
    key: 'F-1',
    number: '01',
    subtitle: '入学与在读',
    tone: 'amber',
    policies: [
      { rank: '03', id: 'duration-status', title: 'D/S 固定期限', state: '最终规则 · 禁令待裁定' },
    ],
  },
  {
    key: 'CPT',
    number: '02',
    subtitle: '校内外实习',
    tone: 'red',
    policies: [
      { rank: '05', id: 'cpt-guidance', title: '8·12 / 8·24 CPT 指引', state: '学校已按新口径执行' },
    ],
  },
  {
    key: 'OPT',
    number: '03',
    subtitle: '毕业后工作',
    tone: 'red',
    policies: [
      { rank: '01', id: 'opt-fee', title: 'OPT $100k', state: '金额未获官方确认' },
      { rank: '09', id: 'ead-discretion', title: 'I-765 犯罪记录审查', state: '评论期已结束' },
    ],
  },
  {
    key: 'H-1B',
    number: '04',
    subtitle: '工作签证',
    tone: 'red',
    policies: [
      { rank: '02', id: 'h1b-fee', title: 'H-1B $103,265', state: '正式提案' },
      { rank: '04', id: 'h1b-weighted-selection', title: 'H-1B 工资加权抽签', state: '最终规则已生效' },
      { rank: '06', id: 'prevailing-wage', title: 'H-1B / PERM 工资等级', state: '评论期已结束' },
      { rank: '07', id: 'h1b-reform', title: 'H-1B 分类改革', state: 'OMB 审查' },
      { rank: '08', id: 'grace-period', title: '取消 60 天宽限期', state: '等待提案正文' },
      { rank: '10', id: 'h4-ead', title: 'H-4 EAD', state: '长期议程' },
    ],
  },
];

const pageCopy = {
  zh: {
    brand: '留美路径雷达', navLabel: '页面导航', policies: '政策', cptSchools: 'CPT 学校', updates: '更新记录', stats: '访问统计',
    switchLabel: '切换网站语言', chinese: '中', english: 'EN', heroTitle: '留美路径政策雷达', heroCount: '10 项动态 · 21 所学校',
    routeHint: '点击阶段筛选下方政策', showAll: '显示全部 ×', routeAria: 'F-1 到 H-1B 路径与政策分布',
    briefingAria: '最近 30 天动态与未来 30 天关键时间点', recent: '最近 30 天动态', upcoming: '未来 30 天关键时间点',
    ranking: '最难绕开的关卡', filterAria: '按签证路径筛选', all: '全部', items: '项',
    viewProcess: (name: string) => `查看${name}说明`, policySpecific: '本项政策：', complete: '已完成', currentStage: '当前阶段', upcomingStage: '尚未到达',
    impact: '路径冲击', processProgress: '规则制定进度', swipe: '左右滑动查看完整流程 →', currentProcess: '当前流程：',
    past: '过去', now: '现在', expected: '预计', details: '具体影响与来源', happening: '现在发生了什么', change: '这条路会怎么变',
    schoolTitle: 'CPT：哪些学校停了？', schoolIntro: '大多停的是选修课／学分型 CPT，不是所有 CPT。', search: '搜索学校或政策', evidenceAria: 'CPT 学校证据级别',
    verified: '校方网页已核实', community: '邮件截图', paused: '暂停部分 CPT', tightened: '收紧', unchanged: '暂未改变', officialPage: '校方页面',
    noSchool: '没有匹配的学校。', evidencePrefix: '以下条目依据已下载到本站的校方邮件截图，未全部找到公开校页。Purdue ECE 与 Purdue ISS 分开标注，不能相互外推。', verifyPending: '待公开来源复核',
    viewEvidence: '查看邮件截图', viewReport: '邮件截图待补', evidenceTitle: '邮件截图', closeEvidence: '关闭邮件截图', noScreenshot: '尚未找到对应的邮件截图。',
    footer: '更新于 2026-09-02（美东）。预计日期可能因规则修改或诉讼变化而移动；个人决定请复核原始文件与专业意见。', top: '回到顶部 ↑',
  },
  en: {
    brand: 'Stay Path Radar', navLabel: 'Page navigation', policies: 'Policies', cptSchools: 'CPT Schools', updates: 'Updates', stats: 'Traffic',
    switchLabel: 'Switch site language', chinese: '中', english: 'EN', heroTitle: 'U.S. Stay Path Policy Radar', heroCount: '10 policy developments · 21 schools',
    routeHint: 'Select a stage to filter the policies below', showAll: 'Show all ×', routeAria: 'Policies along the F-1 to H-1B path',
    briefingAria: 'Recent 30-day developments and key dates in the next 30 days', recent: 'Developments in the last 30 days', upcoming: 'Key dates in the next 30 days',
    ranking: 'Highest-impact barriers', filterAria: 'Filter by immigration path', all: 'All', items: 'items',
    viewProcess: (name: string) => `Explain ${name}`, policySpecific: 'This policy: ', complete: 'Completed', currentStage: 'Current stage', upcomingStage: 'Not reached',
    impact: 'Path impact', processProgress: 'Rulemaking progress', swipe: 'Swipe to see the full process →', currentProcess: 'Current process: ',
    past: 'Past', now: 'Now', expected: 'Expected', details: 'Detailed impact and sources', happening: 'What is happening now', change: 'How the path would change',
    schoolTitle: 'CPT: Which schools have paused approvals?', schoolIntro: 'Most pauses concern elective or course-credit CPT, not every form of CPT.', search: 'Search schools or policies', evidenceAria: 'CPT school evidence level',
    verified: 'Verified on university website', community: 'Email screenshots', paused: 'Some CPT paused', tightened: 'Tighter review', unchanged: 'No current change', officialPage: 'University page',
    noSchool: 'No matching school.', evidencePrefix: 'The following entries rely on university email screenshots stored on this site; not every item has a public university webpage. Purdue ECE and Purdue ISS are listed separately and should not be generalized across scopes.', verifyPending: 'Awaiting a public source',
    viewEvidence: 'View email screenshot', viewReport: 'Email screenshot pending', evidenceTitle: 'Email screenshots', closeEvidence: 'Close email screenshots', noScreenshot: 'No corresponding email screenshot has been located.',
    footer: 'Updated September 2, 2026 (Eastern Time). Estimated dates may move as rules change or litigation develops. Verify primary sources and obtain professional advice before making individual decisions.', top: 'Back to top ↑',
  },
};

export default function Home({ initialLanguage }: { initialLanguage: Language }) {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [selectedPath, setSelectedPath] = useState('all');
  const [schoolQuery, setSchoolQuery] = useState('');
  const [schoolTab, setSchoolTab] = useState<'verified' | 'community'>('verified');
  const [selectedEvidence, setSelectedEvidence] = useState<VerifiedSchool | CommunitySchool | null>(null);
  const ui = pageCopy[language];
  useEffect(() => {
    document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
    document.title = language === 'en'
      ? 'U.S. Stay Path Policy Radar | F-1 → CPT → OPT → H-1B'
      : '留美路径政策雷达｜F-1 → CPT → OPT → H-1B';
  }, [language]);
  useEffect(() => {
    if (!selectedEvidence) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedEvidence(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [selectedEvidence]);
  const localizedPolicies = language === 'en'
    ? policies.map((policy) => {
        const english = englishPolicies[policy.id];
        return {
          ...policy,
          ...english,
          sources: policy.sources.map((source, index) => ({ ...source, label: english.sourceLabels[index] })),
        };
      })
    : policies;
  const localizedRouteStages = language === 'en'
    ? routeStages.map((stage) => ({
        ...stage,
        subtitle: englishRouteStages[stage.key].subtitle,
        policies: stage.policies.map((policy) => ({ ...policy, ...englishRouteStages[stage.key].policies[policy.id] })),
      }))
    : routeStages;
  const localizedVerifiedSchools = language === 'en'
    ? verifiedSchools.map((school) => ({ ...school, ...englishVerifiedSchools[school.school] }))
    : verifiedSchools;
  const localizedCommunitySchools = language === 'en'
    ? communitySchools.map((school) => ({ ...school, state: englishCommunitySchools[school.school] }))
    : communitySchools;
  const pathFilters = ['all', 'F-1', 'CPT', 'OPT', 'H-1B'];
  const visiblePolicies = filterPoliciesByRouteStage(
    localizedPolicies,
    localizedRouteStages,
    selectedPath,
  );
  const normalizedQuery = schoolQuery.trim().toLowerCase();
  const visibleVerified = localizedVerifiedSchools.filter((school) =>
    `${school.school} ${school.state} ${school.detail}`.toLowerCase().includes(normalizedQuery),
  );
  const visibleCommunity = localizedCommunitySchools.filter((school) =>
    `${school.school} ${school.state}`.toLowerCase().includes(normalizedQuery),
  );
  const briefing = getThirtyDayBriefing('2026-09-02', language);
  const updatesHref = language === 'en' ? '/updates?lang=en' : '/updates';
  const selectLanguage = (nextLanguage: Language) => {
    persistLanguage(nextLanguage);
    setLanguage(nextLanguage);
    setSelectedEvidence(null);

    const url = new URL(window.location.href);
    url.searchParams.delete('lang');
    window.history.replaceState(null, '', url);
  };
  const revealPolicy = (policyId: string) => {
    setSelectedPath('all');
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        document.getElementById(policyId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', `#${policyId}`);
      });
    });
  };

  return (
    <LanguageProvider language={language}>
    <TooltipProvider closeDelay={40} delay={0}>
      <VisitorTracker />
      <main>
      <header className="topbar product-bar">
        <a className="brand" href="#top" aria-label={brandHomeLabel(language)}>
          <span className="brand-mark">US</span>
          <span>{ui.brand}</span>
        </a>
        <nav className="nav-links" aria-label={ui.navLabel}>
          <a href="#ranking">{ui.policies}</a>
          <a href="#cpt-schools">{ui.cptSchools}</a>
          <a href={updatesHref}>{ui.updates}</a>
          <a href={language === 'en' ? '/stats?lang=en' : '/stats'}>{ui.stats}</a>
        </nav>
        <div className="top-actions">
          <GitHubProjectLink language={language} />
          <nav className="language-switch" aria-label={ui.switchLabel}>
            <button type="button" className={language === 'zh' ? 'active' : ''} aria-pressed={language === 'zh'} onClick={() => selectLanguage('zh')}>{ui.chinese}</button>
            <button type="button" className={language === 'en' ? 'active' : ''} aria-pressed={language === 'en'} onClick={() => selectLanguage('en')}>{ui.english}</button>
          </nav>
          <MobileSiteMenu current="home" language={language} />
          <div className="asof"><span />2026-09-02 · ET</div>
        </div>
      </header>

      <section className="workspace-hero" id="top">
        <div className="workspace-title">
          <div>
            <h1>{ui.heroTitle}</h1>
          </div>
          <p>{ui.heroCount}</p>
        </div>

        <div className="route-map-shell">
          <div className="route-map-head">
            <span>{ui.routeHint}</span>
            {selectedPath !== 'all' && <button type="button" onClick={() => setSelectedPath('all')}>{ui.showAll}</button>}
          </div>
          <div className="route-map" aria-label={ui.routeAria}>
            {localizedRouteStages.map((stage) => (
              <section className={`route-stage-column stage-${stage.tone}`} key={stage.key}>
                <button
                  type="button"
                  className={`route-stage ${selectedPath === stage.key ? 'active' : ''}`}
                  aria-pressed={selectedPath === stage.key}
                  onClick={() => {
                    setSelectedPath(stage.key);
                    document.getElementById('ranking')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span>{stage.number}</span>
                  <strong>{stage.key}</strong>
                  <small>{stage.subtitle}</small>
                </button>
                <div className="stage-policies">
                  {stage.policies.map((policy) => (
                    <a
                      href={`#${policy.id}`}
                      className="route-policy"
                      key={policy.id}
                      onClick={(event) => {
                        event.preventDefault();
                        revealPolicy(policy.id);
                      }}
                    >
                      <span>#{policy.rank}</span>
                      <strong>{policy.title}</strong>
                      <small><GlossaryText text={policy.state} /></small>
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="briefing-board" aria-label={ui.briefingAria}>
        <article className="briefing-panel briefing-recent">
          <header>
            <div><span>RECENT 30 DAYS</span><h2>{ui.recent}</h2></div>
            <small>08·04—09·02</small>
          </header>
          <div className="briefing-list">
            {briefing.recent.map((item) => (
              <a
                className="briefing-row"
                href={`#${item.policyId}`}
                key={item.id}
                title={item.summary}
                onClick={(event) => {
                  event.preventDefault();
                  revealPolicy(item.policyId);
                }}
              >
                <time dateTime={item.date}>{item.date.slice(5).replace('-', '·')}</time>
                <strong>#{String(item.rank).padStart(2, '0')} {item.policy}</strong>
                <span><GlossaryText text={item.summary} /></span>
                <ArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
        </article>

        <article className="briefing-panel briefing-upcoming">
          <header>
            <div><span>NEXT 30 DAYS</span><h2>{ui.upcoming}</h2></div>
            <small>09·03—10·02</small>
          </header>
          <div className="briefing-list">
            {briefing.upcoming.map((item) => (
              <a
                className="briefing-row"
                href={`#${item.policyId}`}
                key={item.id}
                title={item.summary}
                onClick={(event) => {
                  event.preventDefault();
                  revealPolicy(item.policyId);
                }}
              >
                <time dateTime={item.date}>{item.date.slice(5).replace('-', '·')}</time>
                <strong>#{String(item.rank).padStart(2, '0')} {item.policy}</strong>
                <span><GlossaryText text={item.summary} /></span>
                <ArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
        </article>
      </section>

      <section className="report-section" id="ranking" aria-labelledby="ranking-title">
        <div className="ranking-head">
          <div><span className="section-kicker">IMPACT RANKING</span><h2 id="ranking-title">{ui.ranking}</h2></div>
          <div className="path-console">
            <fieldset className="path-controls">
              <legend className="visually-hidden">{ui.filterAria}</legend>
              {pathFilters.map((path) => (
                <button
                  type="button"
                  key={path}
                  className={selectedPath === path ? 'active' : ''}
                  aria-pressed={selectedPath === path}
                  onClick={() => setSelectedPath(path)}
                >
                  {path === 'all' ? ui.all : path}
                </button>
              ))}
            </fieldset>
            <span>{visiblePolicies.length} {ui.items}</span>
          </div>
        </div>

        <div className="policy-list" key={selectedPath}>
          {visiblePolicies.map((policy, policyIndex) => {
            const process = getProcessTrack(policy.id, language);
            return (
              <article
                className={`policy-card policy-${policy.tone}`}
                id={policy.id}
                data-policy-id={policy.id}
                key={policy.id}
                style={{ animationDelay: `${policyIndex * 55}ms` }}
              >
                <header className="policy-snapshot">
                  <div className="rank-number"><span>#</span>{String(policy.rank).padStart(2, '0')}</div>
                  <div className="policy-title-group">
                    <div className="policy-meta">
                      <div className={`flow-annotation ${process.kind}`}>
                        <span><GlossaryText text={process.name} /></span>
                        <details className="flow-help">
                          <summary aria-label={ui.viewProcess(process.name)}>?</summary>
                          <div className="flow-popover">
                            <div className="flow-popover-head">
                              <span><GlossaryText text={process.name} /></span>
                              <strong><GlossaryText text={process.currentSummary} /></strong>
                            </div>
                            <p className="flow-meaning"><GlossaryText text={process.meaning} /></p>
                            <p className="flow-detail">{ui.policySpecific}<GlossaryText text={process.detail} /></p>
                            <ol>
                              {process.stages.map((stage, index) => {
                                const stageState = index < process.currentStage
                                  ? 'complete'
                                  : index === process.currentStage
                                    ? 'current'
                                    : 'upcoming';
                                const stageLabel = stageState === 'complete'
                                  ? ui.complete
                                  : stageState === 'current'
                                    ? ui.currentStage
                                    : ui.upcomingStage;
                                return (
                                  <li className={stageState} key={stage}>
                                    <i>{index + 1}</i>
                                    <span><strong><GlossaryText text={stage} /></strong><small>{stageLabel}</small></span>
                                  </li>
                                );
                              })}
                            </ol>
                          </div>
                        </details>
                      </div>
                      {policy.route.map((tag) => <i key={tag}><GlossaryText text={tag} /></i>)}
                    </div>
                    <h3>{policy.title}</h3>
                    <p><GlossaryText text={policy.tldr} /></p>
                  </div>
                  <div className="score-box" aria-label={`${ui.impact} ${policy.score} / 10`}>
                    <span>{ui.impact}</span><strong>{policy.score}</strong><small>/10</small>
                  </div>
                </header>

                <div className="process-block">
                  <div className="process-mobile-head" aria-hidden="true">
                    <span>{ui.processProgress}</span>
                    <small>{ui.swipe}</small>
                  </div>
                  <div className="process-row">
                    <div className={`process-steps ${process.kind}`} aria-label={`${ui.currentProcess}${process.stages[process.currentStage]}`}>
                      {process.stages.map((label, index) => (
                        <i
                          className={index < process.currentStage ? 'complete' : index === process.currentStage ? 'current' : 'upcoming'}
                          key={label}
                        >
                          <b />
                          <em><GlossaryText text={label} /></em>
                          {process.litigation
                            .filter((event) => event.afterStage + 1 === index)
                            .map((event) => (
                              <span
                                className={`litigation-marker ${event.status} align-${event.align}`}
                                key={event.date + event.label}
                                style={{ left: `${event.progress}%` }}
                              >
                                <b />
                                <em><strong>{event.date}</strong><span>{event.label}</span></em>
                              </span>
                            ))}
                        </i>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="timeline-shell">
                  <div className="timeline-caption"><Clock3 aria-hidden="true" /><span>{ui.past}</span><i /> <strong>{ui.now}</strong><i /> <span>{ui.expected}</span></div>
                  <ol className="time-axis">
                    {policy.milestones.map((item) => (
                      <li className="timeline-node past" key={item.date + item.text}>
                        <b /><time>{item.date}</time><p><GlossaryText text={item.text} /></p>
                      </li>
                    ))}
                    <li className="timeline-node present">
                      <b /><time>{ui.now}</time><p><GlossaryText text={process.currentSummary} /></p>
                    </li>
                    {policy.next.map((item) => (
                      <li className="timeline-node future" key={item.date + item.text}>
                        <b /><time>{item.date}</time><p><GlossaryText text={item.text} /></p>{item.estimate && <em>{ui.expected}</em>}
                      </li>
                    ))}
                  </ol>
                </div>

                <details className="policy-details" open>
                  <summary className="policy-trigger">{ui.details} <span aria-hidden="true">＋</span></summary>
                  <div className="policy-expanded">
                      <div className="expanded-grid">
                        <section><h4>{ui.happening}</h4><p><GlossaryText text={policy.current} /></p></section>
                        <section><h4>{ui.change}</h4><ul>{policy.impacts.map((impact) => <li key={impact}><GlossaryText text={impact} /></li>)}</ul></section>
                      </div>
                      <div className="source-row">
                        {policy.sources.map((source) => (
                          <a href={source.href} target="_blank" rel="noreferrer" key={source.href}><GlossaryText text={source.label} /><ExternalLink aria-hidden="true" /></a>
                        ))}
                      </div>
                  </div>
                </details>
              </article>
            );
          })}
        </div>
      </section>

      <section className="school-section" id="cpt-schools" aria-labelledby="schools-title">
        <div className="school-head">
          <div><span className="section-kicker">CPT SCHOOL TRACKER</span><h2 id="schools-title">{ui.schoolTitle}</h2><p>{ui.schoolIntro}</p></div>
          <label className="school-search"><Search aria-hidden="true" /><input value={schoolQuery} onChange={(event) => setSchoolQuery(event.target.value)} placeholder={ui.search} aria-label={ui.search} /></label>
        </div>

        <div className="school-tabs">
          <div className="school-tab-list" role="tablist" aria-label={ui.evidenceAria}>
            <button type="button" role="tab" aria-selected={schoolTab === 'verified'} className={schoolTab === 'verified' ? 'active' : ''} onClick={() => setSchoolTab('verified')}><CheckCircle2 aria-hidden="true" />{ui.verified} <b>{visibleVerified.length}</b></button>
            <button type="button" role="tab" aria-selected={schoolTab === 'community'} className={schoolTab === 'community' ? 'active' : ''} onClick={() => setSchoolTab('community')}><FileSearch aria-hidden="true" />{ui.community} <b>{visibleCommunity.length}</b></button>
          </div>
          {schoolTab === 'verified' ? <div className="school-tab-content" role="tabpanel">
            <div className="school-cards">
              {visibleVerified.map((school) => (
                <button
                  type="button"
                  className="school-card evidence-card"
                  aria-haspopup="dialog"
                  onClick={() => setSelectedEvidence(school)}
                  key={school.school}
                >
                  <div><i className={`school-state ${school.tone}`} /><span>{school.tone === 'pause' ? ui.paused : school.tone === 'tighten' ? ui.tightened : ui.unchanged}</span></div>
                  <h3>{school.school}</h3>
                  <strong><GlossaryText text={school.state} /></strong>
                  <p><GlossaryText text={school.detail} /></p>
                  <small><Images aria-hidden="true" />{school.screenshots.length > 0 ? ui.viewEvidence : ui.viewReport}</small>
                </button>
              ))}
              {visibleVerified.length === 0 && <p className="empty-result">{ui.noSchool}</p>}
            </div>
          </div> : <div className="school-tab-content" role="tabpanel">
            <div className="evidence-banner"><ShieldAlert aria-hidden="true" /><p>{ui.evidencePrefix}</p></div>
            <div className="school-cards community-cards">
              {visibleCommunity.map((school) => (
                <button
                  type="button"
                  className="school-card evidence-card"
                  aria-haspopup="dialog"
                  onClick={() => setSelectedEvidence(school)}
                  key={school.school}
                >
                  <div><i className="school-state lead" /><span>{ui.verifyPending}</span></div>
                  <h3>{school.school}</h3>
                  <p><GlossaryText text={school.state} /></p>
                  <small><Images aria-hidden="true" />{school.screenshots.length > 0 ? ui.viewEvidence : ui.viewReport}</small>
                </button>
              ))}
              {visibleCommunity.length === 0 && <p className="empty-result">{ui.noSchool}</p>}
            </div>
          </div>}
        </div>
      </section>

      {selectedEvidence && (
        <div
          className="evidence-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedEvidence(null);
          }}
        >
          <dialog
            open
            className="evidence-modal"
            aria-modal="true"
            aria-labelledby="evidence-modal-title"
          >
            <header>
              <div>
                <span>{ui.evidenceTitle}</span>
                <h2 id="evidence-modal-title">{selectedEvidence.school}</h2>
                <p><GlossaryText text={selectedEvidence.state} /></p>
              </div>
              <button type="button" autoFocus onClick={() => setSelectedEvidence(null)} aria-label={ui.closeEvidence}>
                <X aria-hidden="true" />
              </button>
            </header>
            <div className="evidence-modal-body">
              {'href' in selectedEvidence && (
                <a className="evidence-official-link" href={selectedEvidence.href} target="_blank" rel="noreferrer">
                  {ui.officialPage}<ExternalLink aria-hidden="true" />
                </a>
              )}
              {selectedEvidence.screenshots.length > 0
                ? selectedEvidence.screenshots.map((screenshot, index) => (
                    <figure key={screenshot.src}>
                      <Image
                        src={screenshot.src}
                        width={screenshot.width}
                        height={screenshot.height}
                        alt={`${selectedEvidence.school} ${ui.evidenceTitle} ${index + 1}`}
                        unoptimized
                      />
                      {selectedEvidence.screenshots.length > 1 && <figcaption>{index + 1} / {selectedEvidence.screenshots.length}</figcaption>}
                    </figure>
                  ))
                : <p className="evidence-empty"><FileSearch aria-hidden="true" />{ui.noScreenshot}</p>}
            </div>
          </dialog>
        </div>
      )}

      <footer>
        <div><span className="brand-mark">US</span><strong>{ui.brand}</strong></div>
        <p>{ui.footer}</p>
        <div className="footer-actions">
          <a href="#top">{ui.top}</a>
        </div>
      </footer>
      </main>
    </TooltipProvider>
    </LanguageProvider>
  );
}
