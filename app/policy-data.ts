import type { PolicyId } from './community-impact-model';
import type { Language } from './language';
import { englishPolicies } from './english-content.ts';

type Tone = 'red' | 'amber' | 'blue' | 'green' | 'gray';

export const policies: Array<{
  rank: number;
  id: PolicyId;
  title: string;
  tldr: string;
  score?: string;
  confidence?: number;
  status: string;
  commentUrl?: string;
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
    tldr: 'ICE 打算新增 OPT 收费。媒体报道的金额是 10 万美元。官方没有公布收多少、谁交、哪些申请要交、能不能减免，不能认定由学生承担。',
    score: '10.0',
    confidence: 20,
    status: 'OIRA 审查已完成 · 金额及缴费方未确认',
    tone: 'blue',
    current:
      'ICE 在 2026-08-20 把 Optional Practical Training Fees（RIN 1653-AB01）送交审查，9 月 11 日完成 OIRA 审查，结论是 Consistent with Change（带修改完成审查）。这只是拟议规则的发布前审查。目前没有公开的 NPRM。金额、谁交钱、哪些申请要交、能不能豁免都还没公布，不能认定由学生、雇主或学校承担。这项收费尚未生效，现行 OPT 申请费也没有因此改变。',
    route: ['OPT', 'H-1B 转换'],
    milestones: [
      { date: '2026-08-20', text: 'RIN 1653-AB01 送交 OMB/OIRA 审查。' },
      {
        date: '2026-08-26',
        text: '高校提醒：$100k 来自媒体报道，不是已公布政府文本。',
      },
      { date: '2026-09-11', text: 'OIRA 带修改完成审查；不等于 NPRM 已发布或收费已生效。' },
    ],
    next: [
      {
        date: '下一步',
        text: '等待 Federal Register 公开 NPRM，确认金额、缴费方、适用范围及评论期限。',
      },
      {
        date: '日期未定',
        text: 'NPRM 刊登、最终规则及生效时间均未确认。',
        estimate: true,
      },
    ],
    impacts: [
      '若对个人或雇主按 $100k 收费，大多数普通毕业生将无法把 OPT 当作常规就业桥梁。',
      '雇主会在尚未进入 H-1B 抽签前就筛掉成本较高的国际学生。',
      '现在不用交这笔新费用。适用对象、减免和生效条款，要等官方 NPRM。',
    ],
    sources: [
      {
        label: 'OIRA 9·11 结案记录',
        href: 'https://www.reginfo.gov/public/do/eoDetails?rrid=1506461',
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
    commentUrl: 'https://www.regulations.gov/commenton/USCIS-2026-0298-0001',
    title: '新的 H-1B $103,265 附加费',
    tldr: 'DHS 提议在现有费用之外，对每份 cap-subject H-1B 申请加收 103,265 美元。美国硕士名额和 F-1 境内转身份都要交，cap-exempt 申请不用。',
    score: '9.9',
    confidence: 55,
    status: '正式 NPRM · 尚未生效',
    tone: 'amber',
    current:
      'DHS 在 2026-08-25 正式发布 RIN 1615-AD20，拟在现有费用之外，对每份 cap-subject H-1B petition 加收 $103,265。Cap-exempt 申请不在范围内。9·10 的更正只替换了 Table 13 的历史申请数量表，拟议金额、适用范围和 9·24 评论截止日都没变。',
    route: ['OPT → H-1B', 'H-1B 抽签'],
    milestones: [
      { date: '2026-09-10', text: 'Federal Register 更正 Table 13 历史申请数量；金额、范围及评论期限未变。' },
      {
        date: '2026-08-25',
        text: '新的 $103,265 收费 NPRM 发布。',
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
      { label: 'Federal Register 9·10 更正', href: 'https://www.govinfo.gov/content/pkg/FR-2026-09-10/pdf/C1-2026-17324.pdf' },
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
  "rank": 3,
  "id": "duration-status",
  "title": "D/S 最终规则被法院全国暂缓",
  "tldr": "9·14 更新：法院已全国暂缓 DHS 取消 D/S 的最终规则，原定 9 月 15 日不再生效，DHS 不得继续实施。规则原本要把 F/J 停留改成通常不超过四年的固定期限，并增加延期和学业流动限制；这些新要求现在都被暂缓。",
  "score": "9.4",
  "confidence": 85,
  "status": "法院全国暂缓 · 原 9·15 生效日已推迟",
  "tone": "amber",
  "current": "麻省联邦法院在 2026-09-14 美东下午 4:55 签发第 51 号初步禁令。命令同时依据 APA § 705 推迟整项最终规则生效，并禁止 DHS/ICE 采取任何进一步实施行动。这一状态持续到法院另有命令，或案件实体审理结束，没有设到期日。第 50 号意见第 46—48 页写明，这项救济覆盖全国，不限于原告成员学校；第 42 页认定该最终规则在 APA 意义上属于 arbitrary and capricious。原定 9·15 生效的安排已经作废。法院还没有永久撤销规则，也没有作出有利于原告的简易判决。相关请求被无偏见驳回，可以再次提出。9·17 核查时案卷仍止于第 52 项，没有上诉记录；第 52 项另定 10·02 中午 12 点在波士顿第 1 法庭开现场状态会议，这个日期不是新的生效日。",
  "route": [
    "F-1",
    "CPT",
    "OPT"
  ],
  "milestones": [
    {
      "date": "2025-08-28",
      "text": "DHS 发布拟议规则。"
    },
    {
      "date": "2026-07-17",
      "text": "最终规则发布。"
    },
    {
      "date": "2026-08-18",
      "text": "高校联盟等在麻省联邦法院起诉。"
    },
    {
      "date": "2026-08-31",
      "text": "法院把政府答辩期限延至 9·02；9·03 的初步禁令听证排期未变。"
    },
    {
      "date": "2026-09-02",
      "text": "政府随超页申请附上拟议反对意见，请求法院驳回 APA § 705 暂缓与初步禁令。政府还反对在行政记录提交前作出简易判决。"
    },
    {
      "date": "2026-09-03",
      "text": "法院听证后留待裁定。庭审记录第 70 页显示，法官希望最迟 9·14 决定，也可能先发短期 TRO；这些都不是已签发的命令。"
    },
    {
      "date": "2026-09-14",
      "text": "法院签发初步禁令，全国推迟整项规则生效并禁止继续实施；并非永久撤销。"
    }
  ],
  "next": [
    {
      "date": "2026-10-02",
      "text": "中午 12 点，波士顿第 1 法庭现场状态会议（案卷第 52 项）；不是新生效日。"
    },
    {
      "date": "日期未定",
      "text": "等待后续法院命令或实体裁判；目前没有新的规则生效日期。"
    }
  ],
  "impacts": [
    "以下是规则原本的影响，目前都不实施：规则生效后再完成美国 F-1 学位的人，不能再靠同级或更低级别的项目取得或维持 F-1。生效前已完成的学位不计入这项限制。",
    "以下是规则原本的影响，目前都不实施：研究生在项目中途换专业或转学受到更严限制，除非 SEVP 因特殊情形例外批准。",
    "以下是规则原本的影响，目前都不实施：新制度下 OPT 通常要同时处理 I-765 与 I-539，且二者批准前不能开始工作。",
    "以下是规则原本的影响，目前都不实施：新制度下一般离境宽限期缩到 30 天。过渡人群的规则更复杂。"
  ],
  "sources": [
    {
      "label": "2025 拟议规则",
      "href": "https://www.federalregister.gov/documents/2025/08/28/2025-16554/establishing-a-fixed-time-period-of-admission-and-an-extension-of-stay-procedure-for-nonimmigrant"
    },
    {
      "label": "2026 最终规则",
      "href": "https://www.federalregister.gov/documents/2026/07/17/2026-14439/establishing-a-fixed-time-period-of-admission-and-an-extension-of-stay-procedure-for-nonimmigrant"
    },
    {
      "label": "法院官方日历",
      "href": "https://forms.mad.uscourts.gov/courtlist.html"
    },
    {
      "label": "法院案卷更新（含第 51、52 项）",
      "href": "https://www.courtlistener.com/docket/74661796/feed/"
    },
    {
      "label": "9·03 官方庭审记录（NAFSA 托管；第 70 页）",
      "href": "https://www.nafsa.org/sites/default/files/media/document/PI%20Hearing%20Court%20Transcript.pdf#page=70"
    },
    {
      "label": "政府 9·02 拟议反对意见附件",
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.46.1.pdf"
    },
    {
      "label": "美卡论坛规则讨论",
      "href": "https://www.uscardforum.com/t/topic/431784"
    },
    {
      "label": "美卡论坛诉讼讨论",
      "href": "https://www.uscardforum.com/t/topic/525892"
    },
    {
      "label": "Rice：博士退出、硕士 OPT 与学位限制说明",
      "href": "https://oiss.rice.edu/dhs-final-rule-elimination-duration-status-new-academic-mobility-restrictions"
    },
    {
      "label": "9·14 初步禁令正文（第 51 项）",
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.51.0.pdf"
    },
    {
      "label": "9·14 法院意见（第 50 项；第 46—48 页全国范围）",
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.50.0.pdf"
    }
  ]
},
  {
    rank: 4,
    id: 'h1b-weighted-selection',
    title: 'H-1B 改为工资等级加权抽签',
    tldr: 'USCIS 已经把 cap-subject H-1B 的等概率随机抽签，改成按工资等级加权：Level I、II、III、IV 分别获得 1、2、3、4 份权重。规则 2026-02-27 生效，从 FY2027 注册季开始使用。',
    score: '9.0',
    confidence: 100,
    status: '最终规则已生效 · FY2027 起使用',
    tone: 'red',
    current:
      'DHS 在 2025-12-29 发布 RIN 1615-AD01 最终规则，2026-02-27 生效。USCIS 按职位对应的 OEWS 工资等级给出 1 到 4 份抽签权重。规则同时保留以受益人为中心的选择方式，普通名额和美国高学历名额的先后顺序也不变。',
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
      'DHS 估算，Level I 至 IV 的简单加权中签概率分别约为 15.29%、30.58%、45.87% 和 61.16%。旧的等概率抽签基准约为 29.59%。',
      'F-1/OPT 毕业生如果对应入门级职位并按 Level I 申报，只拿到一份权重。工资等级更高的职位拿到更多权重。',
      '工资等级按具体职业和工作地点判断，不是简单比较所有申请人的绝对年薪。这条规则也不提高职位本身必须支付的法定工资等级。',
      '规则保留 beneficiary-centric selection（以受益人为中心的选择）。同一受益人即使被多个雇主注册，抽中后也只占一个年度名额。',
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
    tldr: 'ICE/SEVP 要求学校只批准“完成学位必需、且该项目所有学生都要做”的实习作为 CPT。只注册一门选修实习课通常不够，实习雇主还必须和学校签有 cooperative agreement（合作协议）。',
    score: '8.8',
    confidence: 100,
    status: 'SEVP 执法口径已在执行',
    tone: 'red',
    current:
      'ICE/SEVP 在 8·12 要求 DSO 只批准完成学位不可缺少、且对该学位所有学生均为必需的 CPT，并强调学校和 DSO 的合规责任。8·24 的问答进一步说明，只有选修实习课不符合标准，“全员”也包括美国学生。问答还重申，雇主与学校要有 cooperative agreement（合作协议）。',
    route: ['CPT', 'Day-1 CPT', '实习'],
    milestones: [
      {"date": "2026-09-15", "text": "Bryn Mawr 校方宣布暂停新的非全员必需 CPT；这是学校执行通知，不是新的联邦规则。"},
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
      '如果学位手册明确要求所有学生完成实习、co-op、clinical 或论文研究，这类项目仍比较可能符合。',
      '已经拿到的 CPT I-20 会不会受影响，看学校的通知。多所学校明确说，现有授权暂时不受影响。',
    ],
    sources: [
      {"label": "Bryn Mawr · 9·15 校方通知", "href": "https://www.brynmawr.edu/inside/offices-services/impact-center/international-advising/issa-announcements"},
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
    tldr: 'DOL 提议把 H-1B、H-1B1、E-3 和 PERM 使用的四级法定工资门槛，从约第 17、34、50、67 百分位提高到第 34、52、70、88 百分位。这项提案尚未生效。',
    score: '8.4',
    confidence: 60,
    status: '评论期已结束 · 尚未生效',
    tone: 'amber',
    current:
      'DOL 在 2026-03-27 发布 RIN 1205-AC30 的 NPRM，公众评论期 2026-05-26 结束。2026 年 8 月的统一议程仍把它列在 Proposed Rule Stage。DOL 还没有发布最终规则，现行工资等级的计算方式没有改变。',
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
      '如果按提案定稿，使用 OEWS 工资数据的雇主，要为新的 H-1B、H-1B1、E-3 LCA 和 PERM 职位支付更高的工资下限。',
      '入门级岗位和工资较低地区的职位，更可能超出雇主预算，从 OPT 转入 H-1B 的可选岗位会减少。',
      'H-1B 延期或换雇主、需要提交新 LCA 时，也可能受影响。这条规则本身不改变 H-1B 抽签权重或名额。',
      '目前获批的案件和现行工资标准都还没变，最终要以新规的适用日期和过渡条款为准。',
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
    tldr: 'DHS 打算重新界定 H-1B cap-exempt 资格，并加强对有违规记录雇主和第三方工作地点的审查。具体资格边界和证明要求，要以 NPRM 正文为准。',
    score: '7.0',
    confidence: 25,
    status: 'OMB 审查中 · 正文未公开',
    tone: 'blue',
    current:
      'RIN 1615-AD00 在 2026-08-24 送交 OIRA。统一议程摘要提到三件事：调整 cap exemption 资格、加强对有违规记录雇主的审查、强化第三方工作地点的监管。',
    route: ['H-1B', '第三方派驻', 'Cap-exempt'],
    milestones: [
      { date: '2025-10 议程', text: 'DHS 首次较清楚披露改革方向。' },
      { date: '2026-08-24', text: '拟议规则送交 OIRA，进入发布前审查。' },
    ],
    next: [
      {
        date: '2026-09—年末',
        text: '统一议程的 2026 年 8 月 NPRM 目标月份已过，正文仍未公开；可能发布 NPRM 并开放评论。',
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
      '不要把议程摘要当成最终规则。等 NPRM 出来，再判断个人路径。',
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
    commentUrl: 'https://www.regulations.gov/commenton/USCIS-2026-0364-0001',
    title: '拟取消失业后的 60 天宽限期',
    tldr: 'DHS 打算取消 E-1、E-2、E-3、H-1B、H-1B1、L-1、O-1 和 TN 等身份在雇佣提前终止后的最长 60 天酌情宽限期。这项提案不涉及 F-1 完成学业后的宽限期。',
    score: '5.5',
    confidence: 35,
    status: 'NPRM 已正式发布 · 尚未生效',
    tone: 'blue',
    current:
      'DHS 在 2026-09-11 正式刊登 RIN 1615-AD22 的 NPRM（2026-18631，91 FR 57807）。提案要删除 8 CFR 214.1(l)(2)，取消 E-1、E-2、E-3、H-1B、H-1B1、L-1、O-1、TN 及其家属的最长 60 天酌情宽限期。公众评论截止到 2026-11-10 美东当日午夜前。目前没有最终规则或生效日期，现行规则没变。',
    route: ['H-1B 失业', '换雇主', '转身份'],
    milestones: [
      { date: '2026-08-06', text: '提案送交 OIRA。' },
      { date: '2026-08-27', text: 'OIRA 完成审查并带修改放行。' },
      { date: '2026-09-10', text: 'NPRM 预览稿公开，明确八类工作身份及其家属的适用范围。' },
      { date: '2026-09-11', text: 'NPRM 正式刊登，评论截止日确认为 11 月 10 日；尚未生效。' },
    ],
    next: [
      {
        date: '2026-11-10',
        text: '公众评论截止：美东当日午夜前，案卷 USCIS-2026-0364。',
      },
      {
        date: '日期未定',
        text: '评论与审议后是否形成最终规则、何时生效均未确定。',
        estimate: true,
      },
    ],
    impacts: [
      'H-1B 被裁后，可能没法在境内从容找新雇主、递交 change of status 或安排离境。',
      '家属（包括 H-4、L-2、E 家属、O-3、TD）靠主申请人维持身份，也会受影响。但家属本人失业，不等于主申请人失业。',
      'F-1 完成课程后的 grace period 是另一套规则，不要混淆。',
    ],
    sources: [
      { label: 'Federal Register NPRM 正式版（9·11）', href: 'https://www.govinfo.gov/content/pkg/FR-2026-09-11/pdf/2026-18631.pdf' },
      { label: 'Federal Register NPRM 预览稿（9·10）', href: 'https://public-inspection.federalregister.gov/2026-18631.pdf' },
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
    tldr: 'DHS 提议要求 USCIS 对 OPT、H-4 EAD 等多数酌情工作许可加强犯罪记录审查。申请人如果曾被捕、被刑事指控、被起诉或被定罪，USCIS 通常会拒绝 I-765，除非有重大的相反公共利益。',
    score: '4.2',
    confidence: 60,
    status: '评论期已结束 · 尚未生效',
    tone: 'amber',
    current:
      'DHS 在 2026-06-05 发布 RIN 1615-AC98 的 NPRM，公众评论期 2026-08-04 结束。提案把新的酌情标准扩大到多数 8 CFR 274a.12(c) 类别，并要求相关初次和续期 I-765 提交生物识别信息。到本报告日期为止，DHS 还没有发布最终规则。',
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
      '提案覆盖 OPT 的 (c)(3)、H-4 EAD 的 (c)(26) 等多数 8 CFR 274a.12(c) 类别。没有相关记录的申请人，不会仅因这条标准自动失去资格。',
      '被捕、还没有处分的刑事指控、正式起诉或定罪，都可能成为通常导致拒绝的负面因素，即使案件最后没有定罪。',
      '官方文本针对的是 criminal acts，不等于所有民事交通罚单都会被拒。记录性质和证明材料由 USCIS 个案审查。',
      '提案不会自动撤销已经签发的 EAD。现有卡片在标注的有效期内继续有效。',
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
    tldr: 'DHS 打算撤销 2015 年那条允许部分 H-4 配偶申请 EAD 的规则。撤销后，符合条件的 H-4 配偶将失去工作许可，但主申请人的 H-1B 身份不受直接影响。',
    score: '3.0',
    confidence: 10,
    status: '长期议程 · 日期待定',
    tone: 'gray',
    current:
      'RIN 1615-AD14 列在长期行动里，要撤销 2015 年那条允许部分 H-4 配偶申请 EAD 的规则。NPRM 日期标注为 To Be Determined（待定），目前没有公开文本或法律期限。',
    route: ['H-4 家庭', '家庭收入'],
    milestones: [
      { date: '2026 统一议程', text: '项目进入政府长期规则议程。' },
      { date: '截至 2026-09-16', text: '没有 NPRM、评论期或生效日。' },
    ],
    next: [
      {
        date: 'TBD',
        text: '若推进，仍须经历 NPRM、评论、最终规则与可能诉讼。',
      },
    ],
    impacts: [
      '不直接改变主申请人的 H-1B 身份或抽签资格。',
      '依赖 H-4 EAD 的家庭，可能失去第二份收入、福利和职业连续性。',
      '现在不要把议程项目当成即将生效的禁令。',
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
  {
    rank: 11,
    id: 'perm-modernization',
    title: 'PERM 劳工认证改革',
    tldr: 'DOL 计划改写 PERM 的招聘要求，让招聘渠道更贴近现实，并提高“招不到美国人”的举证门槛。改革还会加强对被裁美国工人的保护。拟议规则已于 9 月 14 日送交白宫 OIRA 审查，尚未生效。',
    status: 'OIRA 审查中 · 尚未生效',
    tone: 'blue',
    current:
      'DOL / ETA 的 RIN 1205-AC29 在 2026-09-14 送交白宫 OIRA，做拟议规则的发布前审查。议程把本项列在 20 CFR 656 之下。截至 9 月 17 日核查，没有找到公开的 NPRM 正文、评论截止日或生效日。议程里的 2026 年 7 月只是原计划的提案月份，不代表已经发布或生效。',
    route: ['H-1B → 绿卡', 'PERM', '雇主担保'],
    milestones: [
      { date: '2026 统一议程', text: 'DOL 列出 PERM 招聘、裁员保护及雇主合规的改革方向；原计划 7 月发布 NPRM。' },
      { date: '2026-08-04', text: '司法部与 OpenAI 达成 PERM 和解，要求其在官网发布职位并接受电子申请。' },
      { date: '2026-09-14', text: '拟议规则送交白宫 OIRA，进入发布前审查。' },
    ],
    next: [
      { date: '日期未定', text: '统一议程的 2026 年 7 月 NPRM 目标月份已过；等待 OIRA 审查结果和 DOL 发布 NPRM，确认招聘渠道、适用案件和评论期限。' },
      { date: '日期未定', text: '最终规则、生效日期和存量案件的过渡安排，要等后续文件才能明确。', estimate: true },
    ],
    impacts: [
      '如果招聘和留档要求提高，雇主准备 PERM 的工时和费用可能增加。具体变化要等正文。',
      '加强对被裁美国工人的保护是明确的改革方向，但追溯时间、岗位范围和证明材料都还没公开。',
      '对 H-1B 持有人来说，影响主要在后续的雇主担保绿卡；送审本身不改变现有 H-1B 身份，也不改变现行 PERM 规则。',
    ],
    sources: [
      { label: 'OIRA 9·14 送审记录 · RIN 1205-AC29', href: 'https://www.reginfo.gov/public/do/eoDetails?rrid=1532863' },
      { label: '统一议程 · PERM 改革摘要', href: 'https://www.reginfo.gov/public/do/eAgendaViewRule?pubId=202510&RIN=1205-AC29' },
      { label: '司法部 · OpenAI PERM 和解新闻稿（2026-08-04）', href: 'https://www.justice.gov/opa/pr/civil-rights-division-secures-settlement-openai-discriminating-against-us-workers' },
      { label: 'Meltzer Hellrung · PERM 改革预期分析（2026-07-16）', href: 'https://meltzerhellrung.com/dol-is-planning-to-give-perm-its-first-real-update-since-2005-heres-what-employers-should-expect/' },
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
