import type { PolicyContent } from '../policy-types.ts';

export const durationStatus: PolicyContent = {
  id: 'duration-status',
  path: 'F-1',
  tone: 'amber',
  effectState: 'not-in-effect',
  checkedOn: "2026-11-01",
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
    }
  ],
  zh: {
    title: 'D/S 最终规则被法院全国暂缓',
    short: 'D/S 固定期限',
    status: "全国暂缓 · 等待法院判决",
    effectLabel: '尚未生效 · 法院全国暂缓',
    agency: 'DHS / ICE',
    documentId: '最终规则 2026-14439',
    tldr: "法院 9 月 14 日在全国范围暂缓了 DHS 取消 D/S 的新规。新规原本要把 F/J 学生的停留改成固定期限（通常最长四年），还要加延期手续和转学、换学位的限制；现在这些都不执行，D/S 照旧。政府已上诉，上诉期间暂缓继续有效。双方 10·30 都请求法院直接判决，等法院裁定。",
    tags: ['F-1', 'CPT', 'OPT'],
    summary:
      "D/S 新规仍在全国暂缓中。地区法院：双方 10·30 都请求法院根据书面材料直接判决，11·02 交最后一轮回复，之后等判决。上诉法院：政府的上诉书 11·09 到期。法院作出新命令之前，D/S 照旧。",
    audience:
      'F、J、I 签证持有人及其家属、学校和雇主。暂缓适用于全国，不只是起诉学校的学生。',
    caveat:
      '这是暂缓，不是最终判决；法院最后可能撤销新规，也可能维持。8 月的 CPT 指引是另一回事，不受这个案子影响。',
    background:
      "2026-09-14 美东下午 4:55，麻省联邦法院发出初步禁令（第 51 项）：在全国范围推迟整项新规生效，并禁止 DHS/ICE 执行，直到法院另有命令或作出最终判决。原定 9·15 的生效日因此作废。\n法院意见（第 50 项）第 46—48 页写明暂缓适用于全国，不只是起诉学校；第 42 页认定新规“武断且任意”（arbitrary and capricious），这是《行政程序法》（APA）下认定规则违法的标准。不过法院还没有正式撤销新规；原告当时要求直接判决的请求被驳回，但允许以后再提。\n政府 9·30 上诉，第一巡回法院案号 26-2112，并获准加快审理：政府书面意见和附录 11·09 到期，原告收到后 30 天内答辩，政府再在 10 天内回复。上诉期间暂缓继续有效。\n地区法院也在推进最终判决。10·16 法院排定书面程序；10·23 把双方提交判决请求的期限延到 10·30，最后一轮回复仍是 11·02；政府已交出行政记录。10·30 双方都请求法院直接判决：政府要求全部胜诉，退一步也希望法院只把规则发回 DHS 修改而不撤销，或缩小暂缓范围；原告要求全部胜诉、撤销整项新规。\n国会方面，参议员 Durbin 等 9·14 依据《国会审查法》（CRA）提出推翻新规的决议 S.J.Res.213，众议院版本是 H.J.Res.215。9·17 S.J.Res.213 进入参议院待议清单（第 668 号），还没有表决；要生效，须两院都通过并经总统签署（或推翻否决）。",
    teaser: '全国暂缓已生效，现行 D/S 继续。',
    headline: 'D/S 新规已在全国暂缓，现行制度照旧。',
    keyPoint: {
      label: '先看这一点',
      text: '下面三项是新规原本会带来的变化。法院暂缓期间，**这些要求都不执行**，D/S 照旧。',
    },
    analysis:
      '暂缓覆盖整项新规：固定停留期限、额外的延期手续、转学和换学位的限制，现在都不执行。学生照常维持 F-1 身份、遵守工作许可的规定就行。8 月的 CPT 指引是另一份文件，这个案子管不到。',
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
      "接下来看三件事：11·02 地区法院最后一轮回复、11·09 政府上诉书、地区法院的判决。只有法院的新命令才会改变暂缓。",
    scenarios: [
      {
        name: '暂缓继续',
        headline: 'D/S 照旧',
        assumption: '法院没有改变命令。',
        effects: '新规不执行，案件继续审理。',
        signals: '法院的后续命令和移民局的执行通知。',
      },
      {
        name: '暂缓被修改或被上诉法院叫停',
        headline: '执行安排可能再变',
        assumption: '地区法院或上诉法院发出新命令。',
        effects: '按新命令看清适用范围、日期和过渡安排。',
        signals: '新命令的正文。',
      },
      {
        name: '法院作出最终判决',
        headline: '新规的去留由判决决定',
        assumption: '地区法院对案件作出最终判决。',
        effects: '法院可能撤销规则、维持规则，或发回机构重新处理。',
        signals: '判决结果，以及之后的上诉。',
      },
    ],
    scope: [
      {
        label: '全国范围',
        text: '法院意见第 46—48 页确认暂缓适用于全国，不只是起诉学校的学生。',
      },
      {
        label: '持续期限',
        text: '直到法院另有命令或作出最终判决。',
      },
      {
        label: 'CPT 指引',
        text: '命令只针对 D/S 新规（2026-14439）；8 月的 CPT 指引和各校自己的规定照常执行。',
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
        "date": "2026-09-02",
        "text": "政府提交反对意见，请求法院不要暂缓新规。"
      },
      {
        "date": "2026-09-03",
        "text": "法院听取双方辩论，没有当庭裁定。"
      },
      {
        "date": "2026-09-14",
        "text": "法院发出初步禁令，在全国推迟整项新规生效并禁止执行。"
      },
      {
        "date": "2026-09-14",
        "text": "议员提出推翻新规的决议（参议院 S.J.Res.213、众议院 H.J.Res.215）。"
      },
      {
        "date": "2026-09-17",
        "text": "S.J.Res.213 进入参议院待议清单（第 668 号），尚未表决。"
      },
      {
        "date": "2026-09-30",
        "text": "DHS/ICE 等提出上诉（第一巡回法院 26-2112）；暂缓继续有效。"
      },
      {
        "date": "2026-10-02",
        "text": "法院召开进度会议，要求双方 10·09 前提出下一步安排。"
      },
      {
        "date": "2026-10-09",
        "text": "双方提交方案：政府请求暂停地区诉讼、等上诉结果；原告反对，要求尽快判决撤销新规。"
      },
      {
        "date": "2026-10-16",
        "text": "法院排定日程：10·23 交行政记录，10·26 交判决请求，11·02 交回复。"
      },
      {
        "date": "2026-10-19",
        "text": "第一巡回法院排定：政府上诉书和附录 11·09 到期。"
      },
      {
        "date": "2026-10-23",
        "text": "法院把判决请求的期限延到 10·30，回复仍是 11·02；政府交出行政记录。"
      },
      {
        "date": "2026-10-30",
        "text": "双方都请求法院直接判决。"
      }
    ],
    next: [
      {
        "date": "2026-11-02",
        "text": "地区法院最后一轮回复截止。"
      },
      {
        "date": "2026-11-09",
        "text": "政府向第一巡回法院提交上诉书和附录。"
      },
      {
        "date": "日期未定",
        "text": "地区法院判决；原告在收到政府上诉书 30 天内答辩。"
      }
    ],
    process: {
      "detail": "法院 9·14 在全国范围推迟整项新规生效，并禁止 DHS/ICE 执行，直到法院另有命令或作出最终判决。原定 9·15 的生效日作废。",
      "currentSummary": "全国暂缓；等待法院判决",
      "waitingFor": "11·02 最后一轮回复之后的地区法院判决，以及 11·09 开始的上诉书。"
    },
  },
  en: {
    title: 'Court Stays the D/S Final Rule Nationwide',
    short: 'D/S Fixed Admission Period',
    status: "Nationwide court stay · Awaiting ruling",
    effectLabel: 'Not in effect · Nationwide court stay',
    agency: 'DHS / ICE',
    documentId: 'Final Rule 2026-14439',
    tldr: "On September 14 a court paused, nationwide, the DHS rule ending D/S. The rule would have replaced D/S for F and J students with fixed stays (usually up to four years) and added extension filings and limits on transferring or changing degree level. None of that applies now; D/S continues as before. The government has appealed, and the pause stays in place during the appeal. On October 30 both sides asked the court to decide the case on the written record; a ruling is pending.",
    tags: ['F-1', 'CPT', 'OPT'],
    summary:
      "The D/S rule is still paused nationwide. In the district court, both sides asked on October 30 for a decision on the written record; final replies are due November 2, then the court rules. In the appeals court, the government’s brief is due November 9. Until a court orders otherwise, D/S continues as before.",
    audience:
      'F, J and I visa holders, their families, schools and employers. The pause applies nationwide, not only to students at the schools that sued.',
    caveat:
      'This is a pause, not a final ruling; the court could still strike down or uphold the rule. The August CPT guidance is separate and not affected by this case.',
    background:
      "At 4:55 p.m. ET on September 14, 2026, the federal court in Massachusetts issued a preliminary injunction (entry 51). It postpones the entire rule nationwide and bars DHS/ICE from enforcing it until the court orders otherwise or issues a final ruling. The September 15 start date is off.\nThe court’s opinion (entry 50, pp. 46–48) grants nationwide relief, not just relief for the schools that sued, and page 42 finds the rule “arbitrary and capricious,” the test for an unlawful rule under the Administrative Procedure Act (APA). The court did not permanently vacate the rule yet; plaintiffs’ early request for a final judgment was denied, but they may ask again.\nThe government appealed on September 30 (First Circuit No. 26-2112), and the appeal is on a fast track: the government’s brief and appendix are due November 9, plaintiffs answer within 30 days of receiving it, and the government replies within 10 days after that. The pause stays in place during the appeal.\nThe district court is moving toward a final ruling at the same time. On October 16 it set a written schedule; on October 23 it moved the deadline for both sides’ judgment requests to October 30 and kept final replies due November 2. The government has turned over the administrative record. On October 30 both sides asked the court to decide the case on the papers: the government asks to win outright, or at least to have the rule sent back to DHS without being struck down, or the pause narrowed; plaintiffs ask to win outright and have the whole rule struck down.\nIn Congress, Senator Durbin and colleagues introduced S.J.Res.213 on September 14 to overturn the rule under the Congressional Review Act (CRA); the House version is H.J.Res.215. On September 17 S.J.Res.213 was placed on the Senate calendar (No. 668). There has been no vote; it would take effect only if both chambers pass it and the President signs it or a veto is overridden.",
    teaser:
      'Nationwide stay in place; current D/S continues.',
    headline:
      'The D/S rule is paused nationwide; nothing changes for now.',
    analysis:
      'The pause covers the whole rule: fixed stay periods, extra extension filings and limits on transferring or changing degree level are all on hold. Students just keep maintaining their status and following work-authorization rules as usual. The August CPT guidance is a separate document this case does not touch.',
    keyPoint: {
      label: 'Read this first',
      text: 'The three items below describe what the rule would have done. While the court’s pause lasts, **none of these requirements apply**, and D/S continues as before.',
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
      "Three things to watch: final district-court replies on November 2, the government’s appeal brief on November 9, and the district court’s ruling. Only a new court order can change the pause.",
    scenarios: [
      {
        name: 'Pause continues',
        headline: 'D/S continues as before',
        assumption: 'The court leaves its order in place.',
        effects:
          'The rule stays on hold while the case goes on.',
        signals: 'Later court orders and immigration-agency notices.',
      },
      {
        name: 'Pause changed or lifted on appeal',
        headline: 'Things could change again',
        assumption:
          'The district or appeals court issues a new order.',
        effects: 'Read the new order for who it covers, dates and transition rules.',
        signals: 'The text of any new order.',
      },
      {
        name: 'Final ruling',
        headline: 'The ruling decides the rule’s fate',
        assumption: 'The district court issues its final ruling.',
        effects:
          'The court could vacate the rule, uphold it or send it back to the agency.',
        signals: 'The ruling and any appeal.',
      },
    ],
    scope: [
      {
        label: 'Nationwide scope',
        text: 'The opinion (pp. 46–48) confirms the pause applies nationwide, not just to students at the schools that sued.',
      },
      {
        label: 'Duration',
        text: 'Until the court orders otherwise or issues a final ruling.',
      },
      {
        label: 'CPT guidance',
        text: 'The order covers the D/S rule (2026-14439) only; the August CPT guidance and schools’ own rules still apply.',
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
        "text": "S.J.Res.213 was placed on the Senate calendar (No. 668); no vote yet."
      },
      {
        "date": "2026-09-30",
        "text": "DHS/ICE and others appealed (First Circuit No. 26-2112); the pause stays in place."
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
      }
    ],
    next: [
      {
        "date": "2026-11-02",
        "text": "Final district-court replies due."
      },
      {
        "date": "2026-11-09",
        "text": "Government’s appeal brief and appendix due in the First Circuit."
      },
      {
        "date": "Date unknown",
        "text": "District-court ruling; plaintiffs answer the appeal brief within 30 days of receiving it."
      }
    ],
    process: {
      "detail": "On September 14 the court postponed the entire rule nationwide and barred DHS/ICE from enforcing it until further order or a final ruling. The September 15 start date is off.",
      "currentSummary": "Nationwide stay; awaiting the court’s ruling",
      "waitingFor": "The district court’s ruling after November 2 replies, and appeal briefing from November 9."
    },
  },
};
