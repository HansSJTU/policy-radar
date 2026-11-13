import type { PolicyContent } from '../policy-types.ts';

export const durationStatus: PolicyContent = {
  id: 'duration-status',
  path: 'F-1',
  tone: 'amber',
  effectState: 'not-in-effect',
  checkedOn: "2026-11-02",
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
        zh: '政府反对',
        en: 'Government opposes',
        afterStage: 4,
        progress: 70,
        status: 'filed',
        align: 'left',
        lane: 'raised',
      },
      {
        date: '9·03',
        zh: '听证，未当庭裁定',
        en: 'Hearing; no ruling yet',
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
      { date: '10·30', zh: '双方请求判决', en: 'Both sides seek judgment', afterStage: 4, progress: 98, status: 'filed', align: 'right', lane: 'base' },
      { date: '11·02', zh: '政府交回复', en: 'Government reply filed', afterStage: 4, progress: 99, status: 'filed', align: 'left', lane: 'raised' },
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
      "zh": "法院公开案卷摘要",
      "en": "Public court docket feed"
    },
    {
      "href": "https://www.nafsa.org/sites/default/files/media/document/PI%20Hearing%20Court%20Transcript.pdf#page=70",
      "zh": "9·03 官方庭审记录（NAFSA 托管；第 70 页）",
      "en": "September 3 official hearing transcript (NAFSA-hosted; p. 70)"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.46.1.pdf",
      "zh": "政府 9·02 反对意见",
      "en": "Government’s September 2 opposition"
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
      "zh": "Rice：退博、硕士 OPT 和学位限制说明",
      "en": "Rice: leaving a PhD, master’s OPT and degree limits"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.51.0.pdf",
      "zh": "9·14 初步禁令正文（第 51 项）",
      "en": "September 14 preliminary injunction (entry 51)"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.50.0.pdf",
      "zh": "9·14 法院意见（第 50 项；全国范围见第 46—48 页）",
      "en": "September 14 opinion (entry 50; nationwide scope at pp. 46–48)"
    },
    {
      "href": "https://www.durbin.senate.gov/newsroom/press-releases/durbin-blumenthal-padilla-whitehouse-jayapal-raskin-introduce-cra-resolution-of-disapproval-regarding-regulation-that-changes-how-international-students-and-journalists-maintain-immigration-status",
      "zh": "Durbin 官网 · 9·14 CRA 决议公告",
      "en": "Senator Durbin: September 14 CRA resolution announcement"
    },
    {
      "href": "https://www.durbin.senate.gov/download/cra-on-student-visa-rule&download=1",
      "zh": "S.J.Res.213 决议文本（参议员官网）",
      "en": "S.J.Res.213 text (senator’s website)"
    },
    {
      "href": "https://www.govinfo.gov/app/details/BILLS-119sjres213pcs",
      "zh": "GovInfo · S.J.Res.213 列入参议院待议清单（9·17）",
      "en": "GovInfo · S.J.Res.213 as placed on the Senate calendar (September 17)"
    },
    {
      "href": "https://www.govinfo.gov/app/details/BILLS-119hjres215ih",
      "zh": "GovInfo · H.J.Res.215 众议院版本",
      "en": "GovInfo · H.J.Res.215 (House version)"
    },
    {
      "href": "https://www.govinfo.gov/content/pkg/CCAL-119scal-2026-10-09/html/CCAL-119scal-2026-10-09-pt5.htm",
      "zh": "10·09 官方参议院日历 · S.J.Res.213",
      "en": "October 9 official Senate calendar · S.J.Res.213"
    },
    {
      "href": "https://clearinghouse.net/case/48393/",
      "zh": "地区法院公开案卷",
      "en": "District court public docket"
    },
    {
      "href": "https://www.govinfo.gov/content/pkg/CCAL-119scal-2026-10-13/html/CCAL-119scal-2026-10-13-pt5.htm",
      "zh": "10·13 参议院日历 · S.J.Res.213 第 668 号",
      "en": "October 13 Senate calendar · S.J.Res.213, No. 668"
    },
    {
      "href": "https://www.uscis.gov/i-539",
      "zh": "USCIS I-539 页面（含暂缓说明）",
      "en": "USCIS I-539 page (with stay notice)"
    },
    {
      "href": "https://www.uscis.gov/i-765",
      "zh": "USCIS I-765 页面（含暂缓说明）",
      "en": "USCIS I-765 page (with stay notice)"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.61.0.pdf",
      "zh": "地区法院 10·16 排期命令（第 61 项）",
      "en": "District court October 16 scheduling order (entry 61)"
    },
    {
      "href": "https://www.courtlistener.com/docket/74661796/presidents-alliance-on-higher-education-and-immigration-v-united-states/?order_by=desc#entry-64",
      "zh": "第 64 项 · 10·23 排期命令",
      "en": "Entry 64 · October 23 scheduling order"
    },
    {
      "href": "https://www.courtlistener.com/docket/74908049/feed/",
      "zh": "第一巡回法院 26-2112 公开案卷",
      "en": "First Circuit 26-2112 public docket"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.66.0.pdf",
      "zh": "政府 10·30 判决请求（第 66 项）",
      "en": "Government October 30 motion for judgment (entry 66)"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.68.0.pdf",
      "zh": "原告 10·30 判决请求（第 68 项）",
      "en": "Plaintiffs’ October 30 motion for judgment (entry 68)"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.69.0.pdf",
      "zh": "原告 10·30 补充意见 · 第 69 项",
      "en": "Plaintiffs’ October 30 supplemental memorandum · entry 69"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.70.0.pdf",
      "zh": "政府 11·02 回复 · 第 70 项",
      "en": "Government November 2 reply · entry 70"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.71.0.pdf",
      "zh": "原告 11·02 回应 · 第 71 项",
      "en": "Plaintiffs’ November 2 response · entry 71"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.72.0.pdf",
      "zh": "政府 11·06 补交行政记录目录及摘录的通知 · 第 72 项",
      "en": "Government’s November 6 notice filing record index and excerpts · entry 72"
    },
  ],
  zh: {
    title: 'D/S 最终规则被法院全国暂缓',
    short: 'D/S 固定期限',
    searchTitle: "F-1 D/S 固定期限新规：法院全国暂缓，现行 D/S 照旧",
    searchDescription: "DHS 最终规则要把 F-1 学生的 D/S（身份有效期间）改成固定停留期限，到期须申请延期。法院 9 月在全国范围暂缓了这项规则，诉讼还在进行。",
    status: "全国暂缓 · 双方 11·02 书面意见已交",
    effectLabel: '尚未生效 · 法院全国暂缓',
    agency: 'DHS / ICE',
    documentId: '最终规则 2026-14439',
    tldr: "D/S（身份有效期间）是现在 F-1 学生的停留方式：只要按规定读书，就可以一直合法待在美国，I-94 上没有固定截止日。DHS 7 月的最终规则要把它改成固定期限，到期还得另外申请延期。9 月 14 日法院在全国范围暂缓了这项新规，所以现在一切照旧。官司还在打：双方都请法院直接判决，并在 11·02 交了书面回应；政府也已向上诉法院上诉。",
    tags: ['F-1', 'CPT', 'OPT'],
    summary:
      "D/S 新规现在在全国范围暂缓，F-1、J-1 学生照旧按 D/S 停留。地区法院这边，双方都请法官不开庭、直接根据书面材料判决：原告要求撤销（作废）整项新规；政府 11·02 交了最后一轮书面意见，要求判政府赢。政府还提了两个退路：就算法院认为新规有问题，也希望只把规则发回 DHS 补充说明、新规本身保留；或者让暂缓只保护起诉的学校和组织的成员。原告也在 11·02 回应政府，认为 DHS 没有充分分析成本收益、SEVIS 替代方案和公众意见，32 天的评论期也太短，要求撤销整项新规。法院还没判。政府的上诉也在审理中。",
    audience:
      "F、J、I 签证持有人及其家属、学校和雇主。暂缓适用于全国，所有学生都受保护，不只是起诉学校的学生。",
    caveat:
      "暂缓是法院在最终判决前先让新规停下；最终判决可能撤销新规，也可能维持。8 月的 CPT 指引是另一件事，照常执行。",
    background:
      "先说新规是什么。现在 F-1 学生入境时，I-94 上写的是 D/S，意思是只要你在按规定读书、维持身份，就可以一直待下去，没有固定的截止日。DHS 2025 年 8 月提出、2026 年 7 月 17 日发布最终规则（2026-14439），要把它改成固定的停留期限：到期还没读完，要另外向移民局申请延期；同时限制转学和中途换学位层级。新规原定 9 月 15 日生效。\n再说官司。8 月 18 日，一批高校和组织在麻省联邦法院起诉。9 月 14 日美东下午 4:55，法院发出初步禁令：在全国范围推迟整项新规生效，并禁止 DHS/ICE 执行，直到法院另有命令或作出最终判决。原定 9 月 15 日的生效日因此作废。法院意见第 46—48 页写明这项保护适用于全国，不只是起诉学校的学生；第 42 页认定新规“武断且任意”，这是《行政程序法》（APA）下判断规则违法的常用标准，意思是政府没有给出合理的理由。\n政府 9 月 30 日向第一巡回上诉法院上诉（案号 26-2112），并获准加快审理：法院当时把政府上诉书和附录的截止日定为 11 月 9 日（附录是把地区法院的关键文件汇编给上诉法院），原告收到后 30 天内答辩，政府再在 10 天内回复。上诉期间暂缓继续有效。\n地区法院同时在推进最终判决。法院排定书面程序后，政府 10 月 23 日交出行政记录，也就是 DHS 制定新规时依据的全部材料。10 月 30 日双方都请求直接判决。原告的补充意见认为，DHS 没有好好考虑 SEVIS 系统已经能做到的追踪，限制转学和换学位也违法，应该撤销整项新规。11 月 2 日政府交了最后一轮回复，主张 SEVIS 替代不了新规要求的定期审查、DHS 有权规定停留期限。\n原告 11 月 2 日也回应了政府的判决请求。他们认为 DHS 没有充分衡量新规的成本和收益，也没有充分考虑用 SEVIS 系统加强管理等负担更小的办法。原告还主张，DHS 忽略了重要的公众意见，给这项复杂新规的评论期只有 32 天，时间太短。他们请求法院驳回政府的判决请求，并撤销整项新规。法院接下来要决定谁胜诉；全国暂缓继续有效。\n国会方面，参议员 Durbin 等 9 月 14 日依据《国会审查法》（CRA）提出推翻新规的决议 S.J.Res.213，众议院版本是 H.J.Res.215。9 月 17 日 S.J.Res.213 列入参议院待议清单（第 668 号），还没有表决。要生效，须两院都通过并经总统签署，或者国会推翻总统否决。\n11 月 6 日，政府补交了此前判决请求引用的行政记录目录和摘录。这些是政府制定规则时使用、现在交给法官审阅的材料。全国暂缓继续有效。",
    teaser: "全国暂缓已生效，现行 D/S 照旧。",
    headline: "D/S 新规已在全国暂缓，现行制度照旧。",
    keyPoint: {
      "label": "先看这一点",
      "text": "下面三项是新规原本会带来的变化。法院暂缓期间，**这些要求都不执行**，D/S 照旧。"
    },
    analysis:
      "暂缓覆盖整项新规：固定停留期限、额外的延期手续、转学和换学位的限制，现在都不执行。学生照常维持 F-1 身份、遵守工作许可的规定就行。官司接下来有三种走向：地区法院撤销新规、维持新规，或者发回 DHS 修改；上诉法院也可能改变暂缓。每一种都会在这里更新。",
    impacts: [
      {
        title: '还没毕业，获准停留期限却先到了怎么办？',
        text: '研究和论文不一定能按时完成。如果要另外申请延期，准备材料和等审批的时间都得算进学业计划。',
        examples: [
          '小王博士还要一年才能写完论文，学校也同意他延期毕业。但新规下，合法停留有固定的到期日；如果新的毕业时间晚于这个日期，他还得另外向移民局申请延长。学校同意延期，不会自动延长他的合法停留。',
        ],
      },
      {
        title: '毕业后申请 OPT，可能要同时办理身份延期',
        text: '新规下，申请 OPT 通常还要同时递交 I-539 申请延长停留。两者能不能衔接，会影响实际入职时间；新规生效前已经是 D/S 的人，适用单独的过渡规定。',
        examples: [
          '小林五月毕业，打算七月用 OPT 入职。新规下，申请 OPT 和申请延长停留通常要一起办：一个管能不能工作，一个管能在美国待多久，两件事都得安排好。新规生效后的头六个月有过渡安排，那段时间不是每个人都要同时办。',
        ],
      },
      {
        title: '想再读一个硕士或中途转学，可能会受限制',
        text: '新规禁止研究生在读期间换学位层级，也限制中途转学；读同级或更低学位的限制，只算新规生效后拿到的学位。这些限制先卡住学生身份，依赖身份的 OPT 和 CPT 也就跟着卡住。',
        examples: [
          '小陈在读博士，想中途退出、拿个硕士学位再用 OPT 工作。新规禁止在读期间换学位层级。按 Rice 的解释，学校可以发硕士学位，但不能在 SEVIS 里把他的记录从博士改成硕士；记录改不了，就不能凭这个硕士申请 OPT。手里有毕业证也没用。',
          '假设小李在新规生效后拿到美国硕士学位，OPT 期间没抽中 H-1B，想再读一个硕士、用 Day 1 CPT 边读边工作。新规不允许用同级或更低学位取得或维持 F-1 身份，所以他连第二个硕士的学生身份都办不下来，更谈不上 CPT。这条限制只计算新规生效后拿到的学位，之前拿的不受影响。',
        ],
        source: {
          label: '依据：Rice 对硕士 OPT 和学位限制的解释',
          href: 'https://oiss.rice.edu/dhs-final-rule-elimination-duration-status-new-academic-mobility-restrictions',
        },
      },
    ],
    outlook:
      "接下来看地区法院对双方直接判决请求的裁决，以及上诉法院的后续安排。判决出来之前，全国暂缓继续有效。",
    scenarios: [
      {
        "name": "暂缓继续",
        "headline": "D/S 照旧",
        "assumption": "法院维持现在的命令。",
        "effects": "新规不执行，案件继续审理。",
        "signals": "法院的后续命令和移民局的执行通知。"
      },
      {
        "name": "暂缓被修改或被上诉法院叫停",
        "headline": "执行安排可能再变",
        "assumption": "地区法院或上诉法院发出新命令。",
        "effects": "按新命令看清适用范围、日期和过渡安排。",
        "signals": "新命令的正文。"
      },
      {
        "name": "法院作出最终判决",
        "headline": "新规的去留由判决决定",
        "assumption": "地区法院对案件作出最终判决。",
        "effects": "法院可能撤销新规、维持新规，或发回 DHS 修改。",
        "signals": "判决结果，以及之后的上诉。"
      }
    ],
    scope: [
      {
        "label": "全国范围",
        "text": "法院意见第 46—48 页写明暂缓适用于全国所有学生，不只是起诉学校的学生。"
      },
      {
        "label": "持续期限",
        "text": "直到法院另有命令或作出最终判决。"
      },
      {
        "label": "CPT 指引",
        "text": "命令针对的是 D/S 新规（2026-14439）；8 月的 CPT 指引和各校自己的规定照常执行。"
      }
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
        "date": "2026-09-02",
        "text": "政府提交反对意见，请求法院不要暂缓新规。"
      },
      {
        "date": "2026-09-03",
        "text": "法院听取双方辩论，没有当庭裁定。"
      },
      {
        "date": "2026-09-14",
        "text": "法院发出初步禁令，在全国范围推迟整项新规生效并禁止执行。"
      },
      {
        "date": "2026-09-14",
        "text": "议员提出推翻新规的决议（参议院 S.J.Res.213、众议院 H.J.Res.215）。"
      },
      {
        "date": "2026-09-17",
        "text": "S.J.Res.213 列入参议院待议清单（第 668 号）。"
      },
      {
        "date": "2026-09-30",
        "text": "DHS/ICE 等向第一巡回上诉法院上诉（案号 26-2112）；暂缓继续有效。"
      },
      {
        "date": "2026-10-02",
        "text": "法院召开进度会议，要求双方 10·09 前提出下一步安排。"
      },
      {
        "date": "2026-10-09",
        "text": "双方提交方案：政府请求暂停地区法院的审理、等上诉结果；原告反对，要求尽快判决撤销新规。"
      },
      {
        "date": "2026-10-16",
        "text": "法院排定日程：10·23 交行政记录，10·26 交判决请求，11·02 交回复。"
      },
      {
        "date": "2026-10-19",
        "text": "第一巡回上诉法院排定：政府上诉书和附录 11·09 到期。"
      },
      {
        "date": "2026-10-23",
        "text": "法院把判决请求的期限延到 10·30，回复仍是 11·02；政府交出行政记录。"
      },
      {
        "date": "2026-10-30",
        "text": "双方都请求法院直接判决。"
      },
      {
        "date": "2026-11-02",
        "text": "政府交最后一轮回复，要求判政府赢；退一步，请求只把规则发回 DHS、保留新规，并缩小保护范围。"
      },
      {
        "date": "2026-11-02",
        "text": "原告回应政府的判决请求，主张成本收益分析、SEVIS 替代方案和公众评论程序有问题，请求撤销整项新规。"
      },
      {
        "date": "2026-11-06",
        "text": "政府补交此前判决请求引用的行政记录目录和摘录，供法院审阅。"
      }
    ],
    next: [
      {
        "date": "日期未定",
        "text": "地区法院对双方的直接判决请求作出裁决；原告的上诉答辩书在收到政府上诉书后 30 天内交。"
      }
    ],
    process: {
      "detail": "法院 9·14 在全国范围推迟整项新规生效，并禁止 DHS/ICE 执行，直到法院另有命令或作出最终判决。原定 9·15 的生效日作废。",
      "currentSummary": "全国暂缓；双方 11·02 书面回应已交，等待判决",
      "waitingFor": "地区法院的判决，以及上诉法院的后续审理安排。"
    },
  },
  en: {
    title: 'Court Stays the D/S Final Rule Nationwide',
    short: 'D/S Fixed Admission Period',
    searchTitle: "F-1 Duration of Status Rule: Court Stays It Nationwide",
    searchDescription: "DHS’s final rule would replace duration of status (D/S) for F-1 students with a fixed admission period. A court stayed it nationwide in September; the lawsuit continues.",
    status: "Nationwide court stay · Both sides filed November 2 responses",
    effectLabel: 'Not in effect · Nationwide court stay',
    agency: 'DHS / ICE',
    documentId: 'Final Rule 2026-14439',
    tldr: "D/S (duration of status) is how F-1 students stay today: as long as you keep studying by the rules, you can stay lawfully, with no fixed end date on your I-94. DHS’s July final rule would replace that with a fixed period and a separate extension filing when it runs out. On September 14 a court paused the rule nationwide, so nothing has changed. The case continues: both sides have asked the court to rule on the written record and filed responses on November 2; the government has also appealed.",
    tags: ['F-1', 'CPT', 'OPT'],
    summary:
      "The D/S rule is paused nationwide, and F-1 and J-1 students still stay under D/S. In the district court, both sides have asked the judge to decide the case on the written record without a trial: plaintiffs want the whole rule vacated (struck down), and the government, in its final reply on November 2, asks to win outright. The government also offered two fallbacks: if the court finds problems, send the rule back to DHS for a fuller explanation while keeping it in place, or limit the protection to members of the schools and groups that sued. Plaintiffs also responded on November 2, arguing that DHS inadequately assessed costs and benefits, SEVIS alternatives and public comments, and that the 32-day comment period was too short. They ask the court to strike down the whole rule. The court has not ruled yet. The government’s appeal is also pending.",
    audience:
      "F, J and I visa holders, their families, schools and employers. The pause applies nationwide and protects every student, not only those at the schools that sued.",
    caveat:
      "A stay pauses the rule before the court’s final ruling; the final ruling could strike the rule down or uphold it. The August CPT guidance is a separate matter and still applies.",
    background:
      "First, what the rule does. Today, when an F-1 student enters the U.S., the I-94 says D/S: as long as you study by the rules and keep your status, you can stay, with no fixed end date. DHS proposed a change in August 2025 and published the final rule (2026-14439) on July 17, 2026. It would set a fixed period of stay instead: if you are still studying when it runs out, you apply to USCIS for an extension. It also limits transfers and switching degree level mid-program. It was set to start September 15.\nThen, the lawsuit. On August 18, a group of universities and organizations sued in federal court in Massachusetts. At 4:55 p.m. ET on September 14, the court issued a preliminary injunction: it postponed the entire rule nationwide and barred DHS/ICE from enforcing it until the court orders otherwise or issues a final ruling. The September 15 start date is off. The court’s opinion (pp. 46–48) grants nationwide relief, not just relief for students at the schools that sued, and page 42 finds the rule “arbitrary and capricious,” the usual Administrative Procedure Act (APA) test for an unlawful rule, meaning the government did not give adequate reasons. At that stage the court paused the rule but did not permanently vacate it (strike it down for good); that is what the final ruling will decide.\nThe government appealed to the First Circuit on September 30 (No. 26-2112) on a fast track: the court set November 9 as the deadline for its brief and appendix (the appendix collects the key district-court documents for the appeals court), plaintiffs answer within 30 days of receiving it, and the government replies within 10 days after that. The pause stays in place during the appeal.\nThe district court is moving toward a final ruling at the same time. After it set a written schedule, the government turned over the administrative record on October 23, meaning all the material DHS relied on to write the rule. On October 30 both sides asked the court to decide the case on the papers. Plaintiffs’ supplemental memorandum argues that DHS ignored what the SEVIS system can already track, that the transfer and degree-change limits are unlawful, and that the whole rule should be struck down. On November 2 the government filed its final reply, arguing that SEVIS cannot replace the periodic review the rule requires and that DHS may set periods of stay.\nPlaintiffs also responded to the government on November 2. They argue that DHS did not adequately weigh the rule’s costs and benefits or consider less burdensome options such as improving oversight through SEVIS. They also argue that DHS disregarded significant public comments and allowed only 32 days for comments on a complex rule, too little time. They ask the court to deny the government’s request for judgment and strike down the whole rule. The court will decide which side wins; the nationwide pause remains in force.\nIn Congress, Senator Durbin and colleagues introduced S.J.Res.213 on September 14 to overturn the rule under the Congressional Review Act (CRA); the House version is H.J.Res.215. On September 17 S.J.Res.213 was placed on the Senate calendar (No. 668); there has been no vote. It would take effect only if both chambers pass it and the President signs it, or Congress overrides a veto.\nOn November 6, the government filed an index and excerpts of the administrative record cited in its earlier request for judgment. These are materials the government used in making the rule, now submitted for the judge to review. The nationwide stay remains in force.",
    teaser:
      "Nationwide stay in place; current D/S continues.",
    headline:
      "The D/S rule is paused nationwide; nothing changes for now.",
    analysis:
      "The pause covers the whole rule: fixed stay periods, extra extension filings and limits on transferring or changing degree level are all on hold. Students just keep maintaining their status and following work-authorization rules as usual. The case can go three ways from here: the district court strikes the rule down, upholds it, or sends it back to DHS to fix; the appeals court could also change the pause. We will update this page whichever way it goes.",
    keyPoint: {
      "label": "Read this first",
      "text": "The three items below describe what the rule would have done. While the court’s pause lasts, **none of these requirements apply**, and D/S continues as before."
    },
    impacts: [
      {
        title:
          'Still studying when your permitted stay runs out?',
        text: 'Research and dissertations do not always finish on schedule. If you have to apply separately to extend your stay, preparing the paperwork and waiting for approval become part of your academic plan.',
        examples: [
          'Wang’s school lets him take another year to finish his PhD. Under the new rule, his permitted stay would have a fixed end date; if graduation falls after it, he would also have to ask USCIS for an extension. The school’s approval does not extend his immigration stay.',
        ],
      },
      {
        title:
          'Applying for OPT may also mean filing to extend your stay',
        text: 'Under the new rule, applying for OPT would usually also mean filing an I-539 to extend your stay. Whether the two line up affects your start date; people already on D/S when the rule starts would follow separate transition rules.',
        examples: [
          'Lin graduates in May and plans to start work on OPT in July. Under the new rule, the OPT application and the stay extension would usually go together: one covers working, the other how long she can stay. For the first six months after the rule starts, a transition rule means not everyone has to file both at once.',
        ],
      },
      {
        title: 'Want a second master’s or to transfer? There would be limits',
        text: 'The rule bars graduate students from switching degree level mid-program and limits transfers; the ban on enrolling at the same or a lower level counts only degrees earned after the rule starts. These limits block student status first, and the OPT or CPT that depends on it goes with it.',
        examples: [
          'Chen wants to leave a PhD, take a master’s and use it for OPT. The rule bars switching degree level mid-program. Rice explains that it can award the master’s but cannot change his SEVIS record from doctoral to master’s, and without that change he cannot get OPT based on the master’s. Having the diploma does not help.',
          'Say Li earns a U.S. master’s after the rule starts, misses the H-1B lottery while on OPT and plans a second master’s with Day 1 CPT. The rule bars getting or keeping F-1 status through a program at the same or a lower level, so Li could not get student status for the second master’s, let alone CPT. Degrees earned before the rule starts do not count.',
        ],
        source: {
          label:
            'Source: Rice on master’s OPT and degree limits',
          href: 'https://oiss.rice.edu/dhs-final-rule-elimination-duration-status-new-academic-mobility-restrictions',
        },
      },
    ],
    outlook:
      "Two things to watch: the district court’s decision on both sides’ requests to rule on the written record, and the appeals court’s next steps. Until a ruling comes, the nationwide pause stays in place.",
    scenarios: [
      {
        "name": "Pause continues",
        "headline": "D/S continues as before",
        "assumption": "The court leaves its order in place.",
        "effects": "The rule stays on hold while the case goes on.",
        "signals": "Later court orders and immigration-agency notices."
      },
      {
        "name": "Pause changed or lifted on appeal",
        "headline": "Things could change again",
        "assumption": "The district or appeals court issues a new order.",
        "effects": "Read the new order for who it covers, dates and transition rules.",
        "signals": "The text of any new order."
      },
      {
        "name": "Final ruling",
        "headline": "The ruling decides the rule’s fate",
        "assumption": "The district court issues its final ruling.",
        "effects": "The court could strike the rule down, uphold it or send it back to DHS to fix.",
        "signals": "The ruling and any appeal."
      }
    ],
    scope: [
      {
        "label": "Nationwide scope",
        "text": "The opinion (pp. 46–48) says the pause covers every student nationwide, not just students at the schools that sued."
      },
      {
        "label": "Duration",
        "text": "Until the court orders otherwise or issues a final ruling."
      },
      {
        "label": "CPT guidance",
        "text": "The order covers the D/S rule (2026-14439); the August CPT guidance and schools’ own rules still apply."
      }
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
        "date": "2026-09-02",
        "text": "The government filed its opposition, asking the court not to pause the rule."
      },
      {
        "date": "2026-09-03",
        "text": "The court heard arguments and did not rule from the bench."
      },
      {
        "date": "2026-09-14",
        "text": "The court issued a preliminary injunction postponing the entire rule nationwide and barring enforcement."
      },
      {
        "date": "2026-09-14",
        "text": "Lawmakers introduced resolutions to overturn the rule (S.J.Res.213 in the Senate, H.J.Res.215 in the House)."
      },
      {
        "date": "2026-09-17",
        "text": "S.J.Res.213 was placed on the Senate calendar (No. 668)."
      },
      {
        "date": "2026-09-30",
        "text": "DHS/ICE and others appealed to the First Circuit (No. 26-2112); the pause stays in place."
      },
      {
        "date": "2026-10-02",
        "text": "Status conference held; the court asked both sides for next-step proposals by October 9."
      },
      {
        "date": "2026-10-09",
        "text": "Both sides filed proposals: the government asked to pause the district case until the appeal is decided; plaintiffs objected and asked for a quick ruling striking down the rule."
      },
      {
        "date": "2026-10-16",
        "text": "The court set a schedule: administrative record by October 23, judgment requests by October 26, replies by November 2."
      },
      {
        "date": "2026-10-19",
        "text": "The First Circuit set the government’s brief and appendix for November 9."
      },
      {
        "date": "2026-10-23",
        "text": "The court moved judgment requests to October 30 and kept replies due November 2; the government turned over the administrative record."
      },
      {
        "date": "2026-10-30",
        "text": "Both sides asked the court to decide the case on the written record."
      },
      {
        "date": "2026-11-02",
        "text": "The government filed its final reply asking to win; as a fallback, it asks to send the rule back to DHS while keeping it, and to narrow who is protected."
      },
      {
        "date": "2026-11-02",
        "text": "Plaintiffs responded to the government, challenged the cost-benefit analysis, SEVIS alternatives and public-comment process, and asked the court to strike down the whole rule."
      },
      {
        "date": "2026-11-06",
        "text": "The government filed an index and excerpts of the administrative record cited in its earlier request for judgment."
      }
    ],
    next: [
      {
        "date": "Date unknown",
        "text": "The district court rules on both sides’ requests for judgment; plaintiffs’ appellate answer is due 30 days after they receive the government’s brief."
      }
    ],
    process: {
      "detail": "On September 14 the court postponed the entire rule nationwide and barred DHS/ICE from enforcing it until further order or a final ruling. The September 15 start date is off.",
      "currentSummary": "Nationwide stay; both sides filed November 2 responses, ruling pending",
      "waitingFor": "The district court’s ruling and the appeals court’s next procedural steps."
    },
  },
};
