import type { PolicyContent } from '../policy-types.ts';

export const durationStatus: PolicyContent = {
  id: 'duration-status',
  path: 'F-1',
  tone: 'amber',
  effectState: 'not-in-effect',
  checkedOn: "2026-10-26",
  related: ['cpt-guidance', 'opt-fee', 'grace-period'],
  process: {
    kind: 'federal-rulemaking',
    lastCompletedStage: 4,
    activeStage: null,
    nextStage: 5,
    litigation: [
      {
        date: '8·18',
        zh: '提起诉讼',
        en: 'Lawsuit filed',
        afterStage: 4,
        progress: 53,
        status: 'filed',
        align: 'left',
        lane: 'base',
      },
      {
        date: '9·02',
        zh: '拟议反对意见',
        en: 'Proposed opposition',
        afterStage: 4,
        progress: 70,
        status: 'filed',
        align: 'left',
        lane: 'raised',
      },
      {
        date: '9·03',
        zh: '听证后待裁定',
        en: 'Hearing held; decision pending',
        afterStage: 4,
        progress: 80,
        status: 'filed',
        align: 'right',
        lane: 'base',
      },
      {
        date: '9·14',
        zh: '全国暂缓',
        en: 'Nationwide stay',
        afterStage: 4,
        progress: 90,
        status: 'filed',
        align: 'right',
        lane: 'raised',
      },
    ],
  },
  sources: [
    {
      "href": "https://www.federalregister.gov/documents/2026/07/17/2026-14439/establishing-a-fixed-time-period-of-admission-and-an-extension-of-stay-procedure-for-nonimmigrant",
      "zh": "2026 最终规则",
      "en": "2026 final rule"
    },
    {
      "href": "https://www.federalregister.gov/documents/2025/08/28/2025-16554/establishing-a-fixed-time-period-of-admission-and-an-extension-of-stay-procedure-for-nonimmigrant",
      "zh": "2025 拟议规则",
      "en": "2025 proposed rule"
    },
    {
      "href": "https://forms.mad.uscourts.gov/courtlist.html",
      "zh": "法院官方日历",
      "en": "Official court calendar"
    },
    {
      "href": "https://www.courtlistener.com/docket/74661796/feed/",
      "zh": "法院公开案卷摘要（含 10·23 延期裁定记录）",
      "en": "Public court docket feed (including October 23 extension-ruling record)"
    },
    {
      "href": "https://www.nafsa.org/sites/default/files/media/document/PI%20Hearing%20Court%20Transcript.pdf#page=70",
      "zh": "9·03 官方庭审记录（NAFSA 托管；第 70 页）",
      "en": "September 3 official hearing transcript (NAFSA-hosted; p. 70)"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.46.1.pdf",
      "zh": "政府 9·02 拟议反对意见附件",
      "en": "Government’s September 2 proposed opposition"
    },
    {
      "href": "https://www.uscardforum.com/t/topic/431784",
      "zh": "美卡论坛规则讨论",
      "en": "USCardForum rule discussion"
    },
    {
      "href": "https://www.uscardforum.com/t/topic/525892",
      "zh": "美卡论坛诉讼讨论",
      "en": "USCardForum litigation discussion"
    },
    {
      "href": "https://oiss.rice.edu/dhs-final-rule-elimination-duration-status-new-academic-mobility-restrictions",
      "zh": "Rice：博士退出、硕士 OPT 与学位限制说明",
      "en": "Rice: PhD exit, master’s OPT and degree restrictions"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.51.0.pdf",
      "zh": "9·14 初步禁令正文（第 51 项）",
      "en": "September 14 preliminary injunction (entry 51)"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.50.0.pdf",
      "zh": "9·14 法院意见（第 50 项；第 46—48 页全国范围）",
      "en": "September 14 opinion (entry 50; nationwide scope at pp. 46–48)"
    },
    {
      "href": "https://www.durbin.senate.gov/newsroom/press-releases/durbin-blumenthal-padilla-whitehouse-jayapal-raskin-introduce-cra-resolution-of-disapproval-regarding-regulation-that-changes-how-international-students-and-journalists-maintain-immigration-status",
      "zh": "Durbin 官网 · 9·14 CRA 决议公告",
      "en": "Senator Durbin: September 14 CRA resolution announcement"
    },
    {
      "href": "https://www.durbin.senate.gov/download/cra-on-student-visa-rule&download=1",
      "zh": "CRA 联合否决决议文本（议员官网）",
      "en": "CRA joint resolution text (senator website)"
    },
    {
      "href": "https://www.govinfo.gov/app/details/BILLS-119sjres213pcs",
      "zh": "GovInfo · S.J.Res.213 列入参议院议程文本（9·17）",
      "en": "GovInfo · S.J.Res.213 as placed on the Senate calendar (September 17)"
    },
    {
      "href": "https://www.govinfo.gov/app/details/BILLS-119hjres215ih",
      "zh": "GovInfo · H.J.Res.215 众议院提出文本",
      "en": "GovInfo · H.J.Res.215 as introduced in the House"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.59.0.pdf",
      "zh": "10·09 政府后续程序意见 · 第 59 项（当事方提交）",
      "en": "October 9 government case-management brief · entry 59 (party filing)"
    },
    {
      "href": "https://dockets.justia.com/docket/circuit-courts/ca1/26-2112",
      "zh": "第一巡回法院上诉案镜像（更新止于 10·01）",
      "en": "First Circuit appeal mirror (retrieved through October 1)"
    },
    {
      "href": "https://www.govinfo.gov/content/pkg/CCAL-119scal-2026-10-09/html/CCAL-119scal-2026-10-09-pt5.htm",
      "zh": "10·09 官方参议院日历 · S.J.Res.213",
      "en": "October 9 official Senate calendar · S.J.Res.213"
    },
    {
      "href": "https://clearinghouse.net/case/48393/",
      "zh": "地区法院案卷公开镜像",
      "en": "Public district court docket mirror"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.60.0.pdf",
      "zh": "10·09 原告程序方案 · 第 60 项（当事方提交）",
      "en": "October 9 plaintiffs’ procedural plan · entry 60 (party filing)"
    },
    {
      "href": "https://www.govinfo.gov/content/pkg/CCAL-119scal-2026-10-13/html/CCAL-119scal-2026-10-13-pt5.htm",
      "zh": "10·13 官方参议院日历索引 · S.J.Res.213 第 668 号",
      "en": "October 13 official Senate calendar index · S.J.Res.213, No. 668"
    },
    {
      "href": "https://www.uscis.gov/i-539",
      "zh": "USCIS I-539 · 暂缓令与适用表格版本",
      "en": "USCIS I-539 · Court stay and accepted form editions"
    },
    {
      "href": "https://www.uscis.gov/i-765",
      "zh": "USCIS I-765 · 暂缓令与适用表格版本",
      "en": "USCIS I-765 · Court stay and accepted form editions"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.61.0.pdf",
      "zh": "地区法院 · 10·16 行政记录与简易判决排期命令（第 61 项）",
      "en": "District court · October 16 record and summary-judgment scheduling order (entry 61)"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.63.0.pdf",
      "zh": "政府 10·22 延期申请 · 第 63 项（不是法院命令）",
      "en": "Government October 22 extension motion · entry 63 (not a court order)"
    },
    {
      "href": "https://www.courtlistener.com/docket/74661796/presidents-alliance-on-higher-education-and-immigration-v-united-states/?order_by=desc#entry-64",
      "zh": "法院第 64 项 · 10·23 电子排期命令完整文字",
      "en": "Court entry 64 · Complete October 23 electronic scheduling order"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.65.0.pdf",
      "zh": "政府 10·23 行政记录索引提交通知 · 第 65 项",
      "en": "Government October 23 record-index filing notice · entry 65"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.65.1.pdf",
      "zh": "第 65-1 项 · 认证行政记录索引",
      "en": "Entry 65-1 · Certified administrative-record index"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.65.2.pdf",
      "zh": "第 65-2 项 · 认证行政记录附录 A",
      "en": "Entry 65-2 · Certified record Appendix A"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.65.3.pdf",
      "zh": "第 65-3 项 · Amy Bessada 声明",
      "en": "Entry 65-3 · Amy Bessada declaration"
    },
    {
      "href": "https://www.courtlistener.com/docket/74908049/feed/",
      "zh": "第一巡回法院 26-2112 公开案卷 · 10·09 命令与 10·19 排期",
      "en": "First Circuit 26-2112 public docket · October 9 order and October 19 schedule"
    }
  ],
  zh: {
    title: 'D/S 最终规则被法院全国暂缓',
    short: 'D/S 固定期限',
    status: '法院全国暂缓 · 原 9·15 生效日已推迟',
    effectLabel: '尚未生效 · 法院全国暂缓',
    agency: 'DHS / ICE',
    documentId: '最终规则 2026-14439',
    tldr: '法院在 9 月 14 日全国暂缓了 DHS 取消 D/S 的最终规则。它原拟把 F/J 停留改成通常最长四年的固定期限，并增加延期和学业流动限制；原定 9 月 15 日的生效日已推迟，这些要求目前都不执行。政府 9 月 30 日提出上诉，但上诉本身不解除暂缓令，现行 D/S 继续适用。',
    tags: ['F-1', 'CPT', 'OPT'],
    summary:
      "地区法院要求 10·30 提交简易判决动议、11·02 提交回复。第一巡回法院另于 10·19 排定政府上诉主书状及附录 11·09 到期；这次已从上诉案卷独立核实。9·14 全国暂缓继续，书状期限不会使新规自动生效。",
    audience:
      '受最终规则影响的 F/J/I 身份持有人、他们的家属、学校和雇主。救济范围不限原告成员学校。',
    caveat:
      '法院暂缓的是整项最终规则，但不是永久撤销，也不会自动撤销 8 月那份独立的 CPT 行政指引。',
    reviewNote:
      "10·26 读取地区法院第 64 项完整电子命令及第 65 项通知、认证索引、附录 A 和声明，并与另一镜像核对；未逐份核验索引所列全部行政记录。另从第一巡回法院 26-2112 公开案卷独立读取 10·09 加速排期命令和 10·19 排期记录，确认政府主书状／附录 11·09 到期，解除此前只按政府第 63 项记载的缺口。后续答辩与回复按实际送达日期计算，不能预设固定日期。USCIS I-539、I-765 原页仍列全国暂缓及旧版表格说明；未取得完整后续地区／上诉命令与 CRA 最新行动，公开案卷镜像也可能滞后。",
    background:
      "麻省联邦法院在 2026-09-14 美东下午 4:55 签发第 51 号初步禁令。命令同时依据 APA § 705 推迟整项最终规则生效，并禁止 DHS/ICE 采取任何进一步实施行动。这一状态持续到法院另有命令或案件实体审理结束，没有设到期日；原定 9·15 生效的安排已经作废。\n第 50 号意见第 46—48 页写明，这项救济覆盖全国，不只限于原告成员学校；第 42 页认定该最终规则在 APA 意义上属于 arbitrary and capricious。法院还没有永久撤销规则，也没有作出有利于原告的简易判决；相关请求被无偏见驳回，可以再次提出。\n第 52 项原定 10·02 中午 12 点在波士顿第 1 法庭开现场状态会议，这个日期不是新的生效日。公开案卷镜像的 9·30 第 53 项显示 DHS/ICE 等就第 50 项法院意见提出上诉；第 54 项记录移送，第 55 项记载第一巡回法院案号 26-2112。提出上诉本身不会解除第 51 项全国暂缓令；如上诉法院另行下令，须按新命令核对。\n10·02 状态会议已举行，案卷第 56 项要求双方 10·09 提交后续程序方案。10·09 第 59 项政府意见请求先暂停地区诉讼、等待上诉；若法院不暂停，政府提出行政记录送达及简易判决书面程序的备选时间表。文件另称政府已在 10·07 申请加速第一巡回法院上诉。以上当事方请求本身不是法院排期；第 60 项原告意见反对暂停地区诉讼，要求法院立即作出最终判决、依据 APA § 706 撤销整项规则；原告不反对提供行政记录，并提出 10·16、10·23、10·30 的备选补充书面程序；该方案本身不是法院排期。这些是原告请求，不是已生效排期或永久撤销判决。\n10·16 第 61 项命令已排定书面程序：10·23 传送行政记录并提交索引、10·26 简易判决动议及补充意见、11·02 回复。该命令没有解除全国暂缓或设定新的生效日。\n10·22 政府第 63 项动议请求把简易判决动议期限由 10·26 延至 10·30、回复由 11·02 延至 11·06；原告对该延期请求不持立场。动议没有请求改变 10·23 行政记录期限，也不是法院准许延期的命令。政府称需同时准备第一巡回 26-2112 的主书状和附录，按其文件记载于 11·09 到期；此前核查仅取得这一当事方记载；10·26 已独立核实上诉排期，见后段。10·23 第 64 项实际裁定见下段。\n10·25 取得的公开案卷完整文字确认：10·23 第 64 项电子命令准许第 63 项将简易判决动议延至 10·30 的请求，但明确写明回复须在 11·02 前提交，并未采用政府请求的 11·06。第 65 项是政府 10·23 提交的行政记录索引通知，附认证索引、附录 A 和 Amy Bessada 声明；这确认这些文件已入案卷，不表示本次逐份核验了全部行政记录或法院认可其完整性。第 64 项仅调整书面程序，没有解除 9·14 全国暂缓令。\n第一巡回法院 26-2112 的公开案卷现独立记载：10·09 法院准许加速安排，待案卷具备书面审理条件后，主书状／附录在排期入案卷后 21 天提交；答辩在主书状送达后 30 天、回复在答辩送达后 10 天提交。10·19 随后入案卷的排期明确列出政府主书状／附录 11·09 到期。10·26 核查解除此前仅按地区法院第 60／63 项引用的来源缺口；后续答辩和回复仍须按实际送达日及后续命令核对，不能从 10·09 起算，也不预设固定的 12·09 期限。排期本身没有解除全国暂缓。\n国会方面，Durbin 等参议员 9·14 提出 CRA 联合否决决议 S.J.Res.213，拟撤销这项最终规则；Jayapal 牵头的众议院配套案为 H.J.Res.215。9·17 参议院司法委员会依 5 U.S.C. 802(c) 经请愿被解除审议，S.J.Res.213 列入参议院一般议程（第 668 号）。这只是程序进展，不是表决或通过；决议须经两院通过并由总统签署（或推翻否决）才会生效，也不是法院裁定。",
    teaser: '全国暂缓已生效；规则能不能恢复，要看后续命令。',
    headline: 'D/S 新规实施已被全国暂停，现行制度继续。',
    keyPoint: {
      label: '先看这一点',
      text: '下面三项是这项规则原本会带来的影响。法院全国暂缓期间，**这些要求都不实施**，现行 D/S 制度继续适用。',
    },
    analysis:
      '全国暂缓覆盖整项最终规则。固定停留期限、额外的延期手续、学业流动限制，现在都不执行。学生仍要维持现有身份，遵守适用的工作授权要求。本案没有一并撤销 8 月那份独立的 CPT 指引。',
    impacts: [
      {
        title: '还没毕业，获准停留期限却先到了怎么办？',
        text: '研究和论文未必能精确按期完成。如果单独办延期，准备材料和等审理的时间会占进学业规划。',
        examples: [
          '小王博士还需要一年才能写完论文，学校也同意他延毕。但新规实施以后，合法停留时间有了固定到期日。如果新的毕业时间晚于那个日期，他还得专门向移民局申请延长停留。所以光有学校同意是不够的，合法身份不会自动跟着延。',
        ],
      },
      {
        title: '毕业后申请 OPT，可能要同时办理身份延期',
        text: '在新制度下，OPT 申请通常还要一起办 I-539 延期。身份和工作授权能不能接上，会影响实际入职时间；已经持有 D/S 的人要单独核对过渡条款。',
        examples: [
          '小林五月份毕业，打算用 OPT 七月份入职。但新规下，申请 OPT 和申请延长停留通常是绑在一起的——前者管你能不能工作，后者管你能在美国待多久。所以她安排入职的时候得把这两件事都处理好。不过新规生效后前六个月有过渡安排，不是所有人都要马上同时办这两项。',
        ],
      },
      {
        title: '想再读一个硕士或中途转学，可能会受限制',
        text: '新规则禁止研究生在读期间改变学位层级，也限制中途转学。同级或降级再入学的限制，只计算生效后完成的学位。这些要求会先影响学生身份，再影响依赖身份的 OPT 或 CPT 安排。',
        examples: [
          '小陈原本在读博士，想中途退出来，拿个硕士文凭然后用 OPT 去工作。但新规禁止研究生在读期间改学位层级。根据 Rice 的说法，学校虽然可以发硕士学位，却不能在 SEVIS 系统里把他的身份从博士改成硕士——而这一步改不了，他就没法用这个硕士学位申 OPT。也就是说，就算他手里拿着毕业证，身份这道坎还是过不去，OPT 照样办不下来。',
          '假设小李在新规生效后才拿到美国硕士学位，然后 OPT 期间没抽中 H-1B，就想再读一个硕士，用 Day 1 CPT 边读书边工作。但新规不允许用同级或更低的学位来拿或维持 F-1 身份，所以他首先就卡在第二个硕士的学生身份上——连入学都没法合法办，更别提用 CPT 接着工作了。不过要注意，这条限制只针对新规生效后拿到的学位。如果学位是生效前拿的，就不受影响，所以不能一概而论说所有用 OPT 的人都会遇到这个问题。',
        ],
        source: {
          label: '依据：Rice 对硕士 OPT 与学位限制的解释',
          href: 'https://oiss.rice.edu/dhs-final-rule-elimination-duration-status-new-academic-mobility-restrictions',
        },
      },
    ],
    outlook:
      "关注 10·30 地区法院动议、11·02 回复和 11·09 政府上诉主书状／附录是否提交。后续答辩与回复按送达日计算；继续核对法院实体裁定及是否有修改暂缓的新命令，书状期限不是宣判日或暂缓到期日。",
    scenarios: [
      {
        name: '暂缓继续',
        headline: '现行制度延续',
        assumption: '法院没有修改命令。',
        effects: '被暂缓的新要求不实施，案件继续审理。',
        signals: '法院后续命令及机构执行通知。',
      },
      {
        name: '暂缓被修改或上诉中止',
        headline: '实施安排可能再次改变',
        assumption: '法院或上诉法院签发新的有效命令。',
        effects: '要按新命令重新核对范围、日期和过渡安排。',
        signals: '以新命令正文为准，不用传闻。',
      },
      {
        name: '实体审理结束',
        headline: '规则最终命运仍待决定',
        assumption: '法院对实体争议作出裁判。',
        effects: '可能撤销、维持，或要求机构重新处理；现在还无法确认。',
        signals: '实体裁判及后续上诉。',
      },
    ],
    scope: [
      {
        label: '全国范围',
        text: '第 50 号意见第 46—48 页确认整项规则全国暂缓，不限于原告成员学校。',
      },
      {
        label: '持续期限',
        text: '直到法院另行下令或案件实体审理结束；10·02 举行的是状态会议，不是新的生效日。',
      },
      {
        label: '独立 CPT 指引',
        text: '本命令只针对最终规则 2026-14439，不会自动撤销 8 月的 CPT 备忘录或各校自己的要求。',
      },
    ],
    milestones: [
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
      },
      {
        "date": "2026-09-14",
        "text": "议员提出 CRA 联合否决决议（参议院 S.J.Res.213、众议院 H.J.Res.215），拟撤销最终规则；提出不等于通过或成法。"
      },
      {
        "date": "2026-09-17",
        "text": "参议院司法委员会经请愿被解除审议，S.J.Res.213 列入参议院一般议程（第 668 号）；这不是表决或通过。"
      },
      {
        "date": "2026-09-30",
        "text": "DHS/ICE 等提出上诉；地区法院案卷第 53—55 项显示记录移送及第一巡回法院案号 26-2112。上诉本身不解除全国暂缓令。"
      },
      {
        "date": "2026-10-02",
        "text": "状态会议已举行；第 56 项要求双方 10·09 提交后续程序方案。"
      },
      {
        "date": "2026-10-09",
        "text": "第 59—60 项记录书面提交；政府在第 59 项请求暂停地区诉讼或采用备选排期，未核实法院采纳。"
      },
      {
        "date": "2026-10-09",
        "text": "原告第 60 项反对暂停地区诉讼，要求立即最终判决并撤销规则；备选排期及上诉相对期限仅按其文件记载，未核实法院采纳。"
      },
      {
        "date": "2026-10-16",
        "text": "法院第 61 项命令排定：10·23 传送行政记录并提交索引，10·26 提交简易判决动议及不超过 20 页的补充意见，11·02 提交不超过 10 页的回复。没有解除 9·14 全国暂缓令。"
      },
      {
        "date": "2026-10-22",
        "text": "政府第 63 项申请将简易判决动议延至 10·30、回复延至 11·06；未取得准许命令，10·23 行政记录期限未被该申请要求改变，全国暂缓不变。"
      },
      {
        "date": "2026-10-23",
        "text": "公开摘要新增延期裁定记录及第 65 项通知，正文未取得；尚不能确认裁定结果、新的书面期限或行政记录实际提交情况。"
      },
      {
        "date": "2026-10-25",
        "text": "核实 10·23 第 64 项完整电子命令：动议延至 10·30，回复仍须 11·02；并读取第 65 项行政记录索引通知及三份附件。此前仅有标题的核查缺口解除，全国暂缓继续。"
      },
      {
        "date": "2026-10-26",
        "text": "独立核实第一巡回法院 10·09 命令及 10·19 排期：政府主书状／附录 11·09 到期；后续答辩和回复按送达日计算。全国暂缓继续。"
      }
    ],
    next: [
      {
        "date": "2026-10-30",
        "text": "第 64 项电子命令延长后的简易判决动议期限；不是规则生效日。"
      },
      {
        "date": "2026-11-02",
        "text": "第 64 项明确列出的回复意见期限，未改成政府请求的 11·06；不是暂缓令到期日。"
      },
      {
        "date": "2026-11-09",
        "text": "第一巡回法院 10·19 排定的政府上诉主书状及附录期限；不是规则恢复生效日。"
      },
      {
        "date": "日期未定",
        "text": "上诉答辩在主书状送达后 30 天、回复在答辩送达后 10 天提交；实际日期须按送达及后续命令核对。地区法院实体裁定及上诉口头辩论日期未定。"
      }
    ],
    process: {
      "detail": "法院在 9·14 依据 APA § 705 全国推迟整项最终规则生效，并禁止 DHS/ICE 继续实施，直到另行命令或实体审理结束。原 9·15 生效安排已经改变。",
      "currentSummary": "全国暂缓；动议 10·30、回复 11·02",
      "waitingFor": "地区法院动议 10·30、回复 11·02；上诉主书状／附录 11·09。等待后续书状、实体裁定及任何修改暂缓的新命令。"
    },
  },
  en: {
    title: 'Court Stays the D/S Final Rule Nationwide',
    short: 'D/S Fixed Admission Period',
    status: 'Nationwide court stay · September 15 effective date postponed',
    effectLabel: 'Not in effect · Nationwide court stay',
    agency: 'DHS / ICE',
    documentId: 'Final Rule 2026-14439',
    tldr: 'On September 14 the court stayed the DHS rule ending D/S nationwide. It would replace D/S for F and J status with fixed admission periods generally capped at four years and add extension and academic-mobility restrictions; its September 15 effective date was postponed and those requirements remain inoperative. The government appealed on September 30, but filing alone does not lift the stay.',
    tags: ['F-1', 'CPT', 'OPT'],
    summary:
      "District-court summary-judgment motions are due October 30 and replies November 2. The First Circuit separately scheduled the government’s opening brief and appendix for November 9 in its October 19 docket notice, now independently verified. The September 14 nationwide stay continues; briefing deadlines do not activate the rule.",
    audience:
      'F/J/I holders and related dependents, schools and employers covered by the rule; relief is not limited to plaintiff-member schools.',
    caveat:
      'This nationwide stay covers the entire final rule, not permanent vacatur. It does not automatically rescind separate CPT guidance.',
    reviewNote:
      "On October 26, district electronic order 64 and notice 65, certified index, Appendix A and declaration were read and cross-checked with another mirror; not every indexed record was individually reviewed. The First Circuit 26-2112 public docket independently supplies the October 9 expedited-schedule order and October 19 scheduling notice, confirming November 9 for the government’s opening brief/appendix and resolving the earlier reliance on government motion 63 alone. Later response/reply deadlines depend on actual service dates. USCIS I-539/I-765 pages still describe the nationwide stay and prior form editions. Complete later district/appellate orders and latest CRA actions remain gaps, and public docket mirrors can lag.",
    background:
      "At 4:55 p.m. ET on September 14, 2026, the District of Massachusetts issued docket entry 51, which both postpones the entire final rule under APA § 705 and preliminarily enjoins DHS/ICE from taking any further implementation action until a further court order or resolution on the merits, with no expiration date. The September 15 effective date is postponed.\nOpinion 50, pages 46–48, expressly grants nationwide relief, not relief limited to plaintiff-member schools, and page 42 holds the final rule arbitrary and capricious under the APA. The court did not permanently vacate the rule or grant summary judgment; those requests were denied without prejudice to renewal.\nDocket entry 52 originally scheduled an in-person status conference for October 2 at noon in Courtroom 1, Boston, not a new effective date. September 30 entry 53 records an appeal by DHS/ICE and others from opinion 50; entry 54 records transmittal of the record, and entry 55 assigns First Circuit case number 26-2112. An appeal filing alone does not lift the nationwide relief in entry 51; any later appellate order must be assessed on its own terms.\nEntry 56 records the October 2 conference and requires next-step submissions by October 9. In its October 9 entry 59 brief, the government asks to pause district proceedings pending appeal, or alternatively adopt a proposed record-production and summary-judgment schedule. It also reports filing an October 7 motion to expedite the First Circuit appeal. These party requests are not court-adopted deadlines by themselves or a lifting of relief; entry 60 is now available. Plaintiffs oppose a district-proceedings stay and seek immediate final judgment vacating the entire rule under APA § 706. They do not oppose producing the administrative record and propose alternative supplemental submissions on October 16, 23 and 30; the proposal itself is not a court-adopted deadline. These are party requests, not operative deadlines or a permanent-vacatur judgment.\nOrder 61 of October 16 set record transmission and an index for October 23, summary-judgment motions and supplemental memoranda for October 26, and replies for November 2. It does not lift the nationwide stay or set a new effective date.\nThe government’s October 22 motion (entry 63) requests moving summary-judgment motions from October 26 to October 30 and replies from November 2 to November 6. Plaintiffs take no position on that request. It does not request changing the October 23 record deadline and is not an order granting an extension. The government reports that its opening brief and appendix in First Circuit 26-2112 are due November 9; earlier checks had only that party’s account; independent verification on October 26 is described below. The actual October 23 order 64 is described below.\nThe complete public docket text obtained October 25 confirms that electronic order 64 of October 23 grants motion 63’s extension for summary-judgment motions to October 30, but expressly requires replies by November 2, not the requested November 6. Entry 65 is the government’s October 23 notice of filing the administrative-record index, with a certified index, Appendix A and Amy Bessada’s declaration. This confirms those filings, not individual verification of every indexed record or a court finding that the record is complete. Order 64 adjusts briefing only and does not lift the September 14 nationwide stay.\nThe First Circuit 26-2112 public docket now independently records the October 9 order granting expedited arrangements: once the appeal is ready for briefing, the opening brief/appendix is due 21 days after the schedule enters the docket, the response 30 days after service of the opening brief, and the reply 10 days after service of the response. The subsequent October 19 scheduling notice expressly sets November 9 for the government’s opening brief/appendix. The October 26 check resolves the earlier reliance on quotations in district filings 60/63. Later deadlines still depend on actual service and subsequent orders; they cannot be counted from October 9, and December 9 is not assumed as a fixed deadline. Scheduling does not lift the nationwide stay.\nIn Congress, Senator Durbin and colleagues introduced CRA joint resolution S.J.Res.213 on September 14 to disapprove this final rule; the House companion led by Representative Jayapal is H.J.Res.215. On September 17 the Senate Judiciary Committee was discharged by petition under 5 U.S.C. 802(c), and S.J.Res.213 was placed on the Senate calendar under General Orders (Calendar No. 668). This is a procedural step, not a vote or passage; the resolution would take effect only if both chambers pass it and the President signs it or a veto is overridden, and it is not a court ruling.",
    teaser:
      'Nationwide relief is in place; any resumption depends on later orders.',
    headline:
      'The D/S rule is stayed nationwide; the existing framework continues.',
    analysis:
      'The nationwide stay covers the entire final rule, so its fixed admission periods, added extension filings and academic-mobility restrictions are not implemented. Students must still maintain their existing status and comply with applicable employment-authorization requirements. The order does not rescind the separate August CPT guidance.',
    keyPoint: {
      label: 'Read this first',
      text: 'The three items below describe what the rule would have done. While the nationwide stay lasts, **none of these requirements apply**, and the current D/S system continues.',
    },
    impacts: [
      {
        title:
          'For current students: program extensions depend more on administrative timing',
        text: 'Research, dissertations, and training plans do not always finish on an exact schedule. If a separate extension is required, document preparation and processing time become part of academic planning.',
        examples: [
          'Wang’s school approves another year for PhD research. Under the new fixed-period rule, permission to stay has an end date. If graduation would fall after it, Wang must also apply to extend the stay; the school’s program extension does not itself extend immigration permission.',
        ],
      },
      {
        title:
          'For graduates: OPT and extensions of status must be coordinated',
        text: 'Under the new system, related OPT applications would generally also require an I-539 filing. Coordination between status and work authorization could affect actual start dates, while current D/S holders would need to review the transition rules separately.',
        examples: [
          'Lin plans to graduate in May and start work through OPT in July. The new system generally pairs the OPT application with a stay-extension application: work permission and the permitted length of stay are separate matters. Both affect planning, although a temporary first-six-month provision means simultaneous filings are not immediately required of every applicant.',
        ],
      },
      {
        title: 'For backup paths: less room for additional study and transfers',
        text: 'The rule prohibits graduate-level changes during study and restricts mid-program transfers. The same/lower-level re-enrollment limit counts only degrees completed after the effective date. These provisions affect student status before the OPT or CPT plans that depend on it.',
        examples: [
          'Chen wants to leave a PhD, receive a master’s, and apply for OPT based on it. The new rule prohibits graduate-level changes during study. Rice explains that it can award the master’s but cannot change the SEVIS record from doctoral to master’s level, preventing OPT based on that master’s. The obstacle is the record change, not whether the diploma is awarded.',
          'Suppose Li completes a US master’s after the rule takes effect, then misses H-1B selection while on OPT and plans another master’s with Day 1 CPT. The rule bars obtaining or maintaining F-1 through a same- or lower-level program, blocking the student-status basis for the second master’s before CPT could support continued work. Degrees completed before the effective date do not count toward that restriction.',
        ],
        source: {
          label:
            'Source: Rice explanation of master’s OPT and degree restrictions',
          href: 'https://oiss.rice.edu/dhs-final-rule-elimination-duration-status-new-academic-mobility-restrictions',
        },
      },
    ],
    outlook:
      "Watch for district motions October 30, replies November 2 and the government’s appellate opening brief/appendix November 9. Later response/reply periods run from service. Track merits decisions and any order modifying the stay; briefing deadlines are neither judgment dates nor the stay’s expiration.",
    scenarios: [
      {
        name: 'Stay remains',
        headline: 'Existing framework continues',
        assumption: 'The court does not modify its order.',
        effects:
          'The stayed requirements are not implemented while litigation continues.',
        signals: 'Later court orders and agency instructions.',
      },
      {
        name: 'Stay modified or stayed on appeal',
        headline: 'Implementation may change again',
        assumption:
          'The trial or appellate court issues a new operative order.',
        effects: 'Check its scope, dates and transition provisions.',
        signals: 'The order itself, not rumors.',
      },
      {
        name: 'Merits decision',
        headline: 'The rule’s ultimate fate remains open',
        assumption: 'The court resolves the merits.',
        effects:
          'Vacatur, upholding the rule or further agency action remain possible; none is confirmed now.',
        signals: 'The merits judgment and any appeal.',
      },
    ],
    scope: [
      {
        label: 'Nationwide scope',
        text: 'Opinion 50, pp. 46–48, confirms relief covering the entire rule, not just plaintiff-member schools.',
      },
      {
        label: 'Duration',
        text: 'Until further court order or resolution on the merits; October 2 was a status conference, not an effective date.',
      },
      {
        label: 'Separate CPT guidance',
        text: 'The order concerns final rule 2026-14439; it does not automatically rescind the August CPT memoranda or independent university requirements.',
      },
    ],
    milestones: [
      {
        "date": "2025-08-28",
        "text": "DHS published the proposed rule."
      },
      {
        "date": "2026-07-17",
        "text": "DHS published the final rule."
      },
      {
        "date": "2026-08-18",
        "text": "A coalition of universities and other plaintiffs filed suit in federal court in Massachusetts."
      },
      {
        "date": "2026-08-31",
        "text": "The court extended the government response deadline to September 2; the September 3 preliminary-injunction hearing remained on the calendar."
      },
      {
        "date": "2026-09-02",
        "text": "The government attached its proposed opposition to a motion for leave to exceed the page limit, asking the court to deny APA § 705 relief and a preliminary injunction and opposing summary judgment before the administrative record is filed."
      },
      {
        "date": "2026-09-03",
        "text": "After hearing arguments, the court took the request under advisement. Transcript p. 70 records a hoped-for decision by September 14 and a possible brief TRO, neither an issued order."
      },
      {
        "date": "2026-09-14",
        "text": "The court issued a preliminary injunction postponing the entire rule nationwide and barring further implementation; this is not permanent vacatur."
      },
      {
        "date": "2026-09-14",
        "text": "Lawmakers introduced CRA joint resolutions to disapprove the rule (S.J.Res.213 in the Senate, H.J.Res.215 in the House); introduction is not passage or enactment."
      },
      {
        "date": "2026-09-17",
        "text": "The Senate Judiciary Committee was discharged by petition, and S.J.Res.213 was placed on the Senate calendar under General Orders (Calendar No. 668); this is not a vote or passage."
      },
      {
        "date": "2026-09-30",
        "text": "DHS/ICE and others filed an appeal; district docket entries 53–55 show the record transfer and First Circuit case 26-2112. Filing alone does not lift the nationwide stay."
      },
      {
        "date": "2026-10-02",
        "text": "Status conference held; entry 56 requires next-step submissions by October 9."
      },
      {
        "date": "2026-10-09",
        "text": "Entries 59–60 record written submissions. The government’s entry 59 requests a district-proceedings stay or an alternative schedule; the proposal itself is not a court-adopted deadline."
      },
      {
        "date": "2026-10-09",
        "text": "Plaintiffs’ entry 60 opposes pausing district proceedings and seeks immediate final judgment vacating the rule. Alternative scheduling and quoted appellate periods are recorded as party statements, not independently confirmed adopted deadlines."
      },
      {
        "date": "2026-10-16",
        "text": "Order 61 requires transmission of the administrative record and filing of its index by October 23, summary-judgment motions with supplemental memoranda of up to 20 pages by October 26, and replies of up to 10 pages by November 2. It does not lift the September 14 nationwide stay."
      },
      {
        "date": "2026-10-22",
        "text": "Government entry 63 requests October 30 for summary-judgment motions and November 6 for replies. No granting order was obtained; it does not request changing the October 23 record deadline or alter the nationwide stay."
      },
      {
        "date": "2026-10-23",
        "text": "The public feed adds an extension ruling and notice 65, but their texts were not obtained. The disposition, current briefing dates and actual record submission remain unverified."
      },
      {
        "date": "2026-10-25",
        "text": "Verified the complete October 23 electronic order 64: motions extended to October 30, replies still November 2. Read record-index notice 65 and its three attachments, resolving the earlier title-only gap; the nationwide stay continues."
      },
      {
        "date": "2026-10-26",
        "text": "Independently verified the First Circuit’s October 9 order and October 19 schedule: government opening brief/appendix due November 9; later response and reply periods run from service. The nationwide stay continues."
      }
    ],
    next: [
      {
        "date": "2026-10-30",
        "text": "Extended summary-judgment motion deadline under electronic order 64; not a rule effective date."
      },
      {
        "date": "2026-11-02",
        "text": "Reply deadline expressly stated in order 64, not the government’s requested November 6; not the stay’s expiration."
      },
      {
        "date": "2026-11-09",
        "text": "Government appellate opening brief and appendix due under the First Circuit’s October 19 schedule; not a rule effective date."
      },
      {
        "date": "Date unknown",
        "text": "Appellate response due 30 days after service of the opening brief, and reply 10 days after service of the response. Actual dates depend on service and later orders. District merits ruling and appellate argument dates remain unknown."
      }
    ],
    process: {
      "detail": "On September 14, the court postponed the entire final rule nationwide under APA § 705 and barred DHS/ICE from implementation until further order or resolution on the merits. The September 15 effective date is postponed.",
      "currentSummary": "Nationwide stay; motions October 30, replies November 2",
      "waitingFor": "District motions October 30, replies November 2; appellate opening brief/appendix November 9. Await later briefing, a merits ruling and any order modifying the stay."
    },
  },
};
