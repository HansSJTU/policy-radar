import type { PolicyId } from './community-impact-model';
import type { Language } from './language';
import { englishPolicies } from './english-content.ts';

type Tone = 'red' | 'amber' | 'blue' | 'green' | 'gray';

export const policies: Array<{
  rank: number;
  id: PolicyId;
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
    current:
      'ICE 的拟议规则于 2026-08-20 送交 OMB/OIRA。标题为 Optional Practical Training Fees，属于经济重大规则；截至本报告日期，规则正文和收费数字尚未公开，现行 OPT 申请费未变。',
    route: ['OPT', 'H-1B 转换'],
    milestones: [
      { date: '2026-08-20', text: 'RIN 1653-AB01 送交 OMB/OIRA 审查。' },
      {
        date: '2026-08-26',
        text: '高校提醒：$100k 来自媒体报道，不是已公布政府文本。',
      },
    ],
    next: [
      {
        date: '下一步',
        text: 'OIRA 审查结束后，才可能在 Federal Register 发布 NPRM。',
      },
      {
        date: '数周—数月',
        text: '可能公开提案文本；最终规则更可能在 2026 年末或 2027 年以后。',
        estimate: true,
      },
    ],
    impacts: [
      '若对个人或雇主按 $100k 收费，大多数普通毕业生将无法把 OPT 当作常规就业桥梁。',
      '雇主会在尚未进入 H-1B 抽签前就筛掉成本较高的国际学生。',
      '当前无需支付新费用；应等待官方 NPRM 的适用对象、减免和生效条款。',
    ],
    sources: [
      {
        label: 'OIRA 审查记录',
        href: 'https://www.reginfo.gov/public/do/eoDetails?rrid=1505717',
      },
      {
        label: 'UIC 状态说明',
        href: 'https://ois.uic.edu/news-stories/dhs-advances-proposed-rulemaking-on-opt-fees/',
      },
      {
        label: '美卡论坛讨论',
        href: 'https://www.uscardforum.com/t/topic/521723',
      },
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
    current:
      'DHS 于 2026-08-25 正式发布 RIN 1615-AD20，拟在现有费用之外，对每份 cap-subject H-1B petition 加收 $103,265。Cap-exempt 申请不在该附加费范围。',
    route: ['OPT → H-1B', 'H-1B 抽签'],
    milestones: [
      {
        date: '2026-06-08',
        text: '旧总统公告的 $100k 实施被联邦地区法院撤销；政府上诉中。',
      },
      {
        date: '2026-08-25',
        text: '新的 $103,265 收费 NPRM 发布，使用不同法律路径。',
      },
    ],
    next: [
      { date: '2026-09-24', text: '公众评论截止；这是当前最明确的参与节点。' },
      {
        date: '2026 年末—2027+',
        text: 'DHS 可能发布最终规则，之后仍可能遭遇诉讼。',
        estimate: true,
      },
    ],
    impacts: [
      '将大幅降低雇主为应届 F-1/OPT 员工参加 H-1B 抽签的意愿。',
      '费用不是只针对境外入境；提案按 cap-subject petition 划分。',
      '高校、研究机构等 cap-exempt 雇主不受这笔附加费约束，但其他规则仍适用。',
    ],
    sources: [
      {
        label: 'Federal Register NPRM',
        href: 'https://www.federalregister.gov/documents/2026/08/25/2026-17324/fee-for-certain-h-1b-petitions',
      },
      {
        label: '美卡论坛讨论',
        href: 'https://www.uscardforum.com/t/topic/527162',
      },
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
    current:
      '2025 年的拟议规则已在 2026-07-17 变成最终规则。F/J 最长按项目获批、但通常不超过四年；延期需向 USCIS 申请。现有 D/S 持有人有过渡条款，但生效后出境再入境通常会进入固定期限制度。法院于 9·03 听取双方陈述后将禁令申请留待裁定，即法官没有当庭作出决定、将继续审议并可能另行发布书面命令；这既不代表批准禁令，也不代表驳回禁令。',
    route: ['F-1', 'CPT', 'OPT'],
    milestones: [
      { date: '2025-08-28', text: 'DHS 发布拟议规则。' },
      { date: '2026-07-17', text: '最终规则发布。' },
      { date: '2026-08-18', text: '高校联盟等在麻省联邦法院起诉。' },
      {
        date: '2026-08-31',
        text: '法院把政府答辩期限延至 9·02；9·03 的初步禁令听证排期未变。',
      },
      {
        date: '2026-09-02',
        text: '政府随超页申请附上拟议反对意见，请求驳回 APA § 705 暂缓与初步禁令，并反对在行政记录提交前作出简易判决。',
      },
      {
        date: '2026-09-03',
        text: '法院举行禁令听证并听取双方陈述；法官没有当庭裁决，将申请留待裁定。',
      },
    ],
    next: [
      {
        date: '2026-09-15',
        text: '若法院此前未发布暂缓或禁令，规则仍按计划生效。',
      },
    ],
    impacts: [
      '在规则生效后完成美国 F-1 学位的人，不能再靠同级或更低级别项目取得或维持 F-1；生效前已完成的学位不计入这项限制。',
      '研究生在项目中途换专业或转学受到更严限制，除非 SEVP 因特殊情形例外批准。',
      '新制度下 OPT 通常要同时处理 I-765 与 I-539，且二者批准前不能开始工作。',
      '新制度下一般离境宽限期缩为 30 天；过渡人群规则更复杂。',
    ],
    sources: [
      {
        label: '2025 拟议规则',
        href: 'https://www.federalregister.gov/documents/2025/08/28/2025-16554/establishing-a-fixed-time-period-of-admission-and-an-extension-of-stay-procedure-for-nonimmigrant',
      },
      {
        label: '2026 最终规则',
        href: 'https://www.federalregister.gov/documents/2026/07/17/2026-14439/establishing-a-fixed-time-period-of-admission-and-an-extension-of-stay-procedure-for-nonimmigrant',
      },
      {
        label: '法院官方日历',
        href: 'https://forms.mad.uscourts.gov/courtlist.html',
      },
      {
        label: '案卷第 47 项电子书记员笔记',
        href: 'https://www.courtlistener.com/docket/74661796/feed/',
      },
      {
        label: '政府 9·02 拟议反对意见附件',
        href: 'https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.46.1.pdf',
      },
      {
        label: '美卡论坛规则讨论',
        href: 'https://www.uscardforum.com/t/topic/431784',
      },
      {
        label: '美卡论坛诉讼讨论',
        href: 'https://www.uscardforum.com/t/topic/525892',
      },
      {
        label: 'Rice：博士退出、硕士 OPT 与学位限制说明',
        href: 'https://oiss.rice.edu/dhs-final-rule-elimination-duration-status-new-academic-mobility-restrictions',
      },
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
    current:
      'DHS 于 2025-12-29 发布 RIN 1615-AD01 最终规则，并于 2026-02-27 生效。USCIS 按职位对应的 OEWS 工资等级赋予 1 至 4 份抽签权重，同时保留以受益人为中心的选择方式以及普通名额、美国高学历名额的原有选择顺序。',
    route: ['OPT → H-1B', 'H-1B 抽签', 'Cap-subject'],
    milestones: [
      { date: '2025-09-24', text: 'DHS 发布工资等级加权抽签 NPRM。' },
      {
        date: '2025-12-29',
        text: '最终规则发布，保留提案中的 Level I 至 IV 四档权重。',
      },
      { date: '2026-02-27', text: '规则生效，并适用于 FY2027 H-1B 注册季。' },
    ],
    next: [
      {
        date: '后续 cap 季',
        text: 'USCIS 将继续按职位、工作地点和申报工资对应的 OEWS 等级进行加权选择，除非规则日后被修改。',
      },
    ],
    impacts: [
      'DHS 估算 Level I 至 IV 的简单加权中签概率分别约为 15.29%、30.58%、45.87% 和 61.16%；旧的等概率抽签基准约为 29.59%。',
      'F-1/OPT 毕业生若对应入门级职位并按 Level I 申报，只获得一份权重；较高工资等级的职位获得更多权重。',
      '工资等级按具体职业和工作地点判断，不是单纯比较所有申请人的绝对年薪；该规则也不提高职位本身必须支付的法定工资等级。',
      '规则保留 beneficiary-centric selection；同一受益人即使由多个雇主注册，被抽中后仍只计入一次年度名额。',
    ],
    sources: [
      {
        label: 'Federal Register 最终规则',
        href: 'https://www.federalregister.gov/documents/2025/12/29/2025-23853/weighted-selection-process-for-registrants-and-petitioners-seeking-to-file-cap-subject-h-1b',
      },
      {
        label: '美卡论坛讨论',
        href: 'https://www.uscardforum.com/t/topic/415560',
      },
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
    current:
      'ICE/SEVP 在 8·12 已要求 DSO 仅批准完成学位不可缺少、且对该学位所有学生均为必需的 CPT，并强调学校与 DSO 的合规责任。8·24 问答进一步说明可选实习课不满足标准、全员包含美国学生，并重申 sponsoring employer 与学校的 cooperative agreement 要求。',
    route: ['CPT', 'Day-1 CPT', '实习'],
    milestones: [
      {
        date: '2026-08-12',
        text: 'SEVP Broadcast 2608-01：已提出学位不可缺少、全员必需标准，并强调 DSO 与学校责任。',
      },
      {
        date: '2026-08-12 后',
        text: '多所高校暂停 Course Credit / optional CPT，或改为只批学位强制项目。',
      },
      {
        date: '2026-08-24',
        text: 'Broadcast 2608-02：进一步解释选修课、全员适用与合作协议要求。',
      },
    ],
    next: [
      {
        date: '现在',
        text: '每所学校按自身课程设置和法律意见执行；没有统一恢复日期。',
      },
      {
        date: '未来数周',
        text: '学校可能继续更新政策；SEVP 也可能补充问答或采取执法行动。',
        estimate: true,
      },
    ],
    impacts: [
      '传统“注册一门实习课即可 CPT”的路径风险最高。',
      '学位手册明确要求所有学生完成实习、co-op、clinical 或论文研究的项目，仍较可能符合。',
      '既有 CPT I-20 是否受影响由学校通知决定；多所学校明确现有授权暂不受影响。',
    ],
    sources: [
      {
        label: 'SEVP 8·12 Broadcast',
        href: 'https://www.ice.gov/doclib/sevis/pdf/bcm260801.pdf',
      },
      {
        label: 'SEVP 8·24 Broadcast',
        href: 'https://www.ice.gov/doclib/sevis/pdf/bcm_260802.pdf',
      },
      {
        label: '美卡论坛讨论',
        href: 'https://www.uscardforum.com/t/topic/524965',
      },
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
    current:
      'DOL 于 2026-03-27 发布 RIN 1205-AC30 的 NPRM，公众评论期于 2026-05-26 结束。2026 年 8 月统一议程仍将其列在 Proposed Rule Stage；DOL 尚未发布最终规则，现行工资等级计算方式没有改变。',
    route: ['OPT → H-1B', 'H-1B', 'PERM'],
    milestones: [
      {
        date: '2025-09-19',
        text: '总统公告要求 DOL 启动规则制定，调整 H-1B prevailing wage 等级。',
      },
      {
        date: '2026-03-27',
        text: 'DOL 发布 NPRM，提出第 34、52、70、88 百分位的新四级工资结构。',
      },
      { date: '2026-05-26', text: '60 天公众评论期结束，DOL 开始审阅意见。' },
    ],
    next: [
      {
        date: '下一步',
        text: 'DOL 可能修改提案并将最终规则送交 OIRA；目前没有公开完成日期。',
      },
      {
        date: '日期待定',
        text: '只有最终规则发布并到达其生效日后，新工资等级才会开始适用。',
        estimate: true,
      },
    ],
    impacts: [
      '如果按提案定稿，使用 OEWS 工资数据的雇主必须为新的 H-1B、H-1B1、E-3 LCA 和 PERM 职位满足更高的工资下限。',
      '入门级岗位和工资较低地区的职位更可能无法满足雇主预算，从 OPT 转入 H-1B 的可选岗位会减少。',
      'H-1B 延期或换雇主在需要提交新 LCA 时也可能受到影响；该规则本身不改变 H-1B 抽签权重或名额。',
      '当前获批案件和现行工资标准尚未改变，应以未来最终规则的适用日期与过渡条款为准。',
    ],
    sources: [
      {
        label: 'Federal Register NPRM',
        href: 'https://www.federalregister.gov/d/2026-06017',
      },
      {
        label: 'DOL 规则说明',
        href: 'https://www.dol.gov/newsroom/releases/eta/eta20260326-0',
      },
      {
        label: '美卡论坛讨论',
        href: 'https://www.uscardforum.com/t/topic/439546',
      },
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
    current:
      'RIN 1615-AD00 于 2026-08-24 送交 OIRA。统一议程摘要提到：调整 cap exemption 资格、加强对有违规记录雇主的审查、强化第三方工作地点监管等。',
    route: ['H-1B', '第三方派驻', 'Cap-exempt'],
    milestones: [
      { date: '2025-10 议程', text: 'DHS 首次较清楚披露改革方向。' },
      { date: '2026-08-24', text: '拟议规则送交 OIRA，进入发布前审查。' },
    ],
    next: [
      {
        date: '2026-09—年末',
        text: '可能发布 NPRM 并开放评论。',
        estimate: true,
      },
      {
        date: '2027+',
        text: '若推进，最终规则与诉讼更可能发生在 2027 年以后。',
        estimate: true,
      },
    ],
    impacts: [
      '外包、consulting、第三方客户现场工作的证据负担可能上升。',
      'Cap-exempt 路径可能被重新界定，但具体边界现在无法判断。',
      '不要把议程摘要当成最终规则；等 NPRM 后再判断个人路径。',
    ],
    sources: [
      {
        label: 'OIRA 审查记录',
        href: 'https://www.reginfo.gov/public/do/eoDetails?rrid=1505714',
      },
      {
        label: '统一议程摘要',
        href: 'https://www.reginfo.gov/public/do/eAgendaViewRule?RIN=1615-AD00&pubId=202510',
      },
      {
        label: '美卡论坛讨论',
        href: 'https://www.uscardforum.com/t/topic/527527',
      },
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
    current:
      'RIN 1615-AD22 于 2026-08-27 完成 OIRA 审查，结果为 “Consistent with Change”。拟取消 E-1/E-2/E-3/H-1B/H-1B1/L-1/O-1/TN 等在雇佣提前终止后的最长 60 天酌情宽限期。提案尚未公开。',
    route: ['H-1B 失业', '换雇主', '转身份'],
    milestones: [
      { date: '2026-08-06', text: '提案送交 OIRA。' },
      { date: '2026-08-27', text: 'OIRA 完成审查并带修改放行。' },
    ],
    next: [
      {
        date: '数天—数周',
        text: '可能发布 NPRM，届时才会看到适用细节。',
        estimate: true,
      },
      {
        date: '2026 年末—2027+',
        text: '评论结束后才可能形成最终规则。',
        estimate: true,
      },
    ],
    impacts: [
      'H-1B 被裁后可能无法在境内从容寻找新雇主、递交 change of status 或安排离境。',
      '雇主转换、家庭安排与 I-94 到期日会变得更关键。',
      'F-1 完成课程后的 grace period 是另一套规则，不要混淆。',
    ],
    sources: [
      {
        label: 'OIRA 完成记录',
        href: 'https://www.reginfo.gov/public/do/eoDetails?rrid=1496261',
      },
      {
        label: 'Fragomen 8·28 更新',
        href: 'https://www.fragomen.com/insights/united-states-dhs-proposal-to-eliminate-60-day-nonimmigrant-grace-period-clears-federal-review.html',
      },
      {
        label: '美卡论坛讨论',
        href: 'https://www.uscardforum.com/t/topic/523657',
      },
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
    current:
      'DHS 于 2026-06-05 发布 RIN 1615-AC98 的 NPRM，公众评论期于 2026-08-04 结束。提案把新的酌情标准扩展至多数 8 CFR 274a.12(c) 类别，并要求相关初次和续期 I-765 提交生物识别信息；截至本报告日期，DHS 尚未发布最终规则。',
    route: ['OPT', 'H-4 EAD', 'I-765'],
    milestones: [
      { date: '2026-03-31', text: 'OIRA 完成 NPRM 的发布前审查。' },
      { date: '2026-06-05', text: 'DHS 发布酌情工作许可 NPRM。' },
      { date: '2026-08-04', text: '60 天公众评论期结束。' },
    ],
    next: [
      {
        date: '下一步',
        text: 'DHS 审阅评论并决定是否修改或发布最终规则；目前没有公开日期。',
      },
      {
        date: '日期待定',
        text: '若定稿，新标准只会按最终规则规定的生效日适用于相关初次或续期申请。',
        estimate: true,
      },
    ],
    impacts: [
      '提案覆盖 OPT 的 (c)(3)、H-4 EAD 的 (c)(26) 等多数 8 CFR 274a.12(c) 类别；没有相关记录的申请人不会仅因这条标准自动失去资格。',
      '被捕、尚无处分的刑事指控、正式起诉或定罪都可能成为通常导致拒绝的负面因素，即使案件没有形成定罪。',
      '官方文本针对 criminal acts，不等于所有民事交通罚单都会触发拒绝；具体记录性质和证明材料由 USCIS 审查。',
      '提案不会自动撤销已经签发的 EAD；现有卡片在其标注的有效期内继续有效。',
    ],
    sources: [
      {
        label: 'Federal Register NPRM',
        href: 'https://www.federalregister.gov/d/2026-11285',
      },
      {
        label: 'Regulations.gov 文档',
        href: 'https://www.regulations.gov/document/USCIS-2026-0067-0001',
      },
      {
        label: '美卡论坛讨论',
        href: 'https://www.uscardforum.com/t/topic/521188',
      },
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
    current:
      'RIN 1615-AD14 列入长期行动，拟撤销 2015 年允许部分 H-4 配偶申请 EAD 的规则。NPRM 日期为 To Be Determined，尚无公开文本或法律期限。',
    route: ['H-4 家庭', '家庭收入'],
    milestones: [
      { date: '2026 统一议程', text: '项目进入政府长期规则议程。' },
      { date: '截至 2026-09-08', text: '没有 NPRM、评论期或生效日。' },
    ],
    next: [
      {
        date: 'TBD',
        text: '若推进，仍须经历 NPRM、评论、最终规则与可能诉讼。',
      },
    ],
    impacts: [
      '不直接改变主申请人的 H-1B 身份或抽签资格。',
      '依赖 H-4 EAD 的家庭可能失去第二份收入、福利和职业连续性。',
      '目前不应把议程项目当成即将生效的禁令。',
    ],
    sources: [
      {
        label: '统一议程 RIN 1615-AD14',
        href: 'https://www.reginfo.gov/public/do/eAgendaViewRule?RIN=1615-AD14&pubId=202510',
      },
      {
        label: '美卡论坛讨论',
        href: 'https://www.uscardforum.com/t/topic/528394',
      },
    ],
  },
];

export function getPolicies(language: Language) {
  return policies.map((policy) => {
    if (language === 'zh') return policy;
    const translated = englishPolicies[policy.id];
    return {
      ...policy,
      ...translated,
      sources: policy.sources.map((source, i) => ({
        ...source,
        label: translated.sourceLabels[i],
      })),
    };
  });
}
