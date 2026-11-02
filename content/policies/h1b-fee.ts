import type { PolicyContent } from '../policy-types.ts';

export const h1bFee: PolicyContent = {
  id: 'h1b-fee',
  path: 'H-1B',
  tone: 'amber',
  effectState: 'not-in-effect',
  checkedOn: "2026-11-01",
  related: ['opt-fee', 'prevailing-wage', 'h1b-reform'],
  process: {
    kind: 'federal-rulemaking',
    lastCompletedStage: 3,
    activeStage: null,
    nextStage: 4,
  },
  sources: [
    {
      "href": "https://www.federalregister.gov/documents/2026/08/25/2026-17324/fee-for-certain-h-1b-petitions",
      "zh": "Federal Register NPRM",
      "en": "Federal Register NPRM"
    },
    {
      "href": "https://www.govinfo.gov/content/pkg/FR-2026-09-10/pdf/C1-2026-17324.pdf",
      "zh": "Federal Register 9·10 更正",
      "en": "Federal Register September 10 correction"
    },
    {
      "href": "https://www.whitehouse.gov/presidential-actions/2026/09/restriction-on-entry-of-certain-nonimmigrant-workers-faad/",
      "zh": "白宫 9·18 另项 100,000 美元入境限制延长公告",
      "en": "White House September 18 extension of separate $100,000 entry restriction"
    },
    {
      "href": "https://oag.ca.gov/system/files/attachments/press-docs/H1B%20Order.pdf",
      "zh": "麻省地区法院 6·08 撤销执行政策判决",
      "en": "District court June 8 vacatur of implementation policy"
    },
    {
      "href": "https://www.ca1.uscourts.gov/sites/ca1/files/opnfiles/26-1699O-01A.pdf",
      "zh": "第一巡回法院 7·24 拒绝暂缓判决",
      "en": "First Circuit July 24 denial of stay"
    },
    {
      "href": "https://www.uscardforum.com/t/topic/527162",
      "zh": "美卡论坛讨论",
      "en": "USCardForum discussion"
    },
    {
      "href": "https://www.govinfo.gov/content/pkg/USCOURTS-cand-4_25-cv-08454/pdf/USCOURTS-cand-4_25-cv-08454-17.pdf",
      "zh": "Global Nurse Force 9·30 法院命令",
      "en": "Global Nurse Force September 30 court order"
    },
    {
      "href": "https://www.govinfo.gov/app/details/USCOURTS-cand-4_25-cv-08454/USCOURTS-cand-4_25-cv-08454-17/context",
      "zh": "Global Nurse Force 官方法院文献记录",
      "en": "Global Nurse Force official court publication record"
    },
    {
      "href": "https://www.courtlistener.com/docket/71541425/global-nurse-force-v-trump/",
      "zh": "Global Nurse Force 案卷公开镜像（含 10·09 上诉）",
      "en": "Global Nurse Force public docket mirror (including the October 9 appeal)"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.cand.457426/gov.uscourts.cand.457426.138.0.pdf",
      "zh": "第九巡回 26-6667 · 上诉案号与书面排期通知（地区案卷第 138 项）",
      "en": "Ninth Circuit 26-6667 · Appeal number and briefing schedule (district entry 138)"
    },
    {
      "href": "https://www.courtlistener.com/docket/71541425/feed/",
      "zh": "Global Nurse Force · 公开案卷摘要（排期条目可能不含全文）",
      "en": "Global Nurse Force · Current docket feed (some schedule entries lack full text)"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.cand.457426/gov.uscourts.cand.457426.140.0.pdf",
      "zh": "原告 · 10·15 反对暂停地区诉讼及行政程序请求（第 140 项，非裁定）",
      "en": "Plaintiffs · October 15 opposition to district-stay and administrative motions (entry 140, not an order)"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.cand.457426/gov.uscourts.cand.457426.141.0.pdf",
      "zh": "政府 · 10·19 支持暂停地区诉讼的回复（第 141 项，非裁定）",
      "en": "Government · October 19 reply supporting a district-proceedings stay (entry 141, not an order)"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.cand.457426/gov.uscourts.cand.457426.142.0.pdf",
      "zh": "双方 · 10·20 联合案件管理说明（第 142 项，非裁定）",
      "en": "Parties · October 20 joint case management statement (entry 142, not an order)"
    },
    {
      "href": "https://www.courtlistener.com/docket/71541425/global-nurse-force-v-trump/?order_by=desc#minute-entry-483258424",
      "zh": "法院案卷 · 10·28 会议／动议／排期标题（当日核查快照）",
      "en": "Court docket · Conference/stay/hearing title (October 28 review snapshot)"
    },
    {
      "href": "https://www.courtlistener.com/docket/71541425/global-nurse-force-v-trump/?order_by=desc#entry-144",
      "zh": "第 144 项纯文字记录 · 拒绝暂停地区诉讼，日期冲突待澄清",
      "en": "Text-only entry 144 · District-stay motion denied; conflicting dates unresolved"
    }
  ],
  zh: {
    title: 'H-1B 拟加收 103,265 美元',
    short: 'H-1B 10.3 万美元附加费',
    status: '正式提案 · 评论期已结束',
    effectLabel: '尚未生效',
    agency: 'DHS / USCIS',
    documentId: '1615-AD20',
    tldr: 'DHS 提议在现有费用之外，对每份 cap-subject H-1B 申请加收 103,265 美元。美国硕士名额和 F-1 境内转身份都要交，cap-exempt 申请不用。',
    tags: ['OPT → H-1B', 'H-1B 抽签'],
    summary:
      'DHS 打算在现有费用之外，对每份受年度名额限制的 H-1B 申请加收 103,265 美元。美国硕士名额和 F-1 境内转身份也要交，cap-exempt 申请除外。',
    audience:
      '走 cap-subject H-1B 的申请人，以及为他们担保的雇主，包括美国硕士名额和 F-1 境内转身份。',
    caveat: '这项附加费不打算向 cap-exempt 申请收取。',
    reviewNote:
      "11·01 重读 103,265 美元 NPRM、RIN 检索及另项 100,000 美元案的地区案卷。现已取得 10·28 录入的第 144 项纯文字记录，明确写法院拒绝第 133 项暂停地区诉讼动议，并要求提交行政记录；这不是准许恢复收费。但记录把会议写为 12·01、把“自今日起 21 天”括注为 11·17，又列 11·24 后续会议，与 10·28 录入日期及彼此顺序不一致，实际会议日、行政记录期限和后续排期须经法院澄清，不自行推算或采用其中一天。第 138 项原上诉通知仍列主书状 11·06、答辩 12·04；完整后续上诉命令及最新 USCIS 收费执行说明未核实。公开镜像可能滞后，法院日历未能独立消除上述日期冲突。 本次带条目网址可读至第 144 项，裸案卷及稍后重试为 202 空响应；更晚记录无法确认，日期冲突继续保留。",
    background:
      "RIN 1615-AD20 在 2026-08-25 公布，公众评论截止到 9 月 24 日。9 月 10 日的更正只替换了 Table 13 的历史申请数量，拟议金额、适用范围和评论截止日都没变。\n另有不同的 100,000 美元 H-1B 入境限制：白宫 9·18 公告将其期限延至 2027-09-21，针对部分境外申请，不能与本页覆盖 cap-subject 申请的 103,265 美元 NPRM 混为一谈。麻省地区法院 6·08 撤销该限制的机构执行政策；第一巡回法院 7·24 拒绝在上诉期间暂停该判决。延长公告本身不证明机构已恢复征收。\n加州北区法院在 9·30 的 Global Nurse Force v. Trump（4:25-cv-08454-HSG，第 130 号命令）再次撤销并发回相关机构政策，禁止机构执行原公告 10973 及延长公告 11069 的收费政策，直到完成 APA 通知评论程序及 RFA 分析。法院同时拒绝暂缓执行该命令；它不等于撤销本页另项 103,265 美元 NPRM。双方 10·20 已提交联合案件管理说明；9·30 命令及联合说明仍列 10·27 下午 2 时（太平洋时间）Zoom 案件管理会议。\n政府 10·09 就第 130 号命令向第九巡回法院提起上诉（第 132 项），同日申请暂停地区诉讼程序（第 133 项），10·13 又就此提出行政动议（第 136 项）。上诉和这些动议本身不暂停 9·30 命令；第九巡回法院是否另有命令、10·27 的安排是否调整，以法院后续命令为准。\n10·14 地区案卷录入第 138 项，附载第九巡回法院 10·09 签发的排期通知：上诉案号 26-6667，政府主书状须于 11·06 提交，答辩于 12·04 提交，可选回复在答辩送达后 21 天内提交。这是上诉书面排期，不是收费生效日，也未暂停 9·30 命令。公开案卷摘要 另列 10·14 地区排期条目但无完整内容，最新地区安排仍待核实。\n10·15 原告第 140 项反对暂停地区诉讼，10·19 政府第 141 项回复支持暂停。10·20 双方第 142 项联合说明称相关暂停请求仍待处理，并提出不同的后续实体排期方案；这些建议尚不是法院命令，也不恢复收费。\n10·28 核查时，公开案卷只有涉及后续案件管理会议、暂停诉讼动议及听证排期的新条目标题，当时没有正文，未能确认会议实际日期、动议裁定结果或新的排期。\n10·29 取得 10·28 录入的第 144 项纯文字会议记录：记录明确写第 133 项暂停地区诉讼动议被拒，并要求提交行政记录。这是地区诉讼程序安排，不是暂停 9·30 收费政策撤销命令，也不改变 103,265 美元 NPRM 的提案状态。记录所写会议日 12·01、行政记录“自今日起 21 天（11·17）”及后续会议 11·24 与录入日期相互冲突；在法院澄清前，不将这些日期作为已核实的期限或会议时间。",
    teaser:
      '抽签之外，雇主能不能接受这笔高额担保成本，可能决定 offer 还能不能延续。',
    headline: '雇主的担保预算，可能比能否抽中更先成为门槛。',
    analysis:
      '这笔附加费如果落地，雇主为一份申请要投的钱会明显变多。对 OPT 转 H-1B 的应届生来说，雇主可能在决定要不要支持你申请时就开始算成本，而不是等抽签结果出来。',
    impacts: [
      {
        title: '对毕业生：offer 与担保承诺可能分离',
        text: '企业愿意在你 OPT 期间雇你，不等于愿意承担后面的高额 H-1B 成本。费用一落地，企业会更早评估要不要留用。',
        examples: [
          '小陈用 OPT 入职的时候，HR 说过以后会帮他申 H-1B。但如果收费提案真的通过了，而且他的申请属于要参加抽签的那种，公司就得在正常费用之外再多交 103,265 美元。HR 当初可能没把这笔钱算进去，所以公司得重新批预算，才能兑现之前的承诺。',
          '小林用 OPT 干了一年了，主管挺满意，想把她留下来。但如果她申 H-1B 时要多交 103,265 美元，主管就得向上面申请这笔钱。要是财务不批，公司还是可能不给她申——她干得好不好，跟这笔费用免不免没有关系。',
        ],
      },
      {
        title: '对雇主：预算会向关键岗位集中',
        text: '每份受覆盖的申请都要多花这笔钱，招聘预算可能向难替代、回报明确的岗位倾斜。小企业能调整的空间更小。',
        examples: [
          '一家小公司本来打算给三个员工申 H-1B（都是要抽签的那种）。如果提案按现在的金额生效，光这笔附加费三份加起来就是 309,795 美元，这还不算原来的申请费。如果公司只够付一个人的，那就只能减少担保人数，没法按原计划来。',
        ],
      },
      {
        title: '对路径：cap-exempt 的相对吸引力可能上升',
        text: '提案把 cap-exempt 排除在外，这类职位可能更受关注。但职位供给、个人匹配，以及另一项分类改革，仍会限制这条路径。',
        examples: [
          '小李手上有两个 offer，一个是普通公司，一个是大学实验室。普通公司的 H-1B 要抽签，大学的不用。按现在的提案，普通公司得交这笔附加费，大学不用。所以就算两个岗位工资差不多，雇主实际花的钱不一样，这可能会影响他们愿不愿意帮小李办 H-1B。',
        ],
      },
    ],
    outlook:
      '我们的预判：争论会围绕费用高低、法律依据和雇主能不能承受。对就业市场的影响，可能先出现在担保意愿和招聘预算上，再反映到实际申请量。',
    scenarios: [
      {
        name: '按提案定稿',
        headline: '企业担保会更集中于高价值岗位',
        assumption: '103,265 美元附加费保留，覆盖提案列出的 cap-subject 申请。',
        effects:
          '应届生和预算有限的企业受影响更大。有些雇主会直接减少承诺担保的岗位，不用等到提交申请才调整。',
        signals: '最终费用、覆盖范围、生效时间，以及企业下一轮招聘的担保政策。',
      },
      {
        name: '费用／范围调整',
        headline: '担保意愿可能部分回升，但差异更大',
        assumption: '最终规则降低金额，或者增加实质性例外。',
        effects:
          '成本压力可能缓解，但不同规模的雇主、申请类别和岗位之间仍会分化。例外覆盖了谁，比总金额更值得看。',
        signals: '评论回应、修订后的费用模型和最终豁免条款。',
      },
      {
        name: '实施被推迟',
        headline: '短期预算压力缓和，长期承诺仍可能谨慎',
        assumption: '规则制定拖长，或者法院命令暂缓实施。',
        effects:
          '企业可能继续按现在的成本办理，但对多年担保承诺留一手。暂缓一次不等于政策被否决。',
        signals: '最终规则是否发布、法院命令的实际内容和适用范围。',
      },
    ],
    scope: [
      {
        label: '受覆盖申请',
        text: '提案覆盖 cap-subject，包括美国高学历名额。境内转身份不能因为人已经在美国就排除。',
      },
      { label: '未覆盖申请', text: 'Cap-exempt 不在附加费的拟议范围内。' },
      {
        label: '费用关系',
        text: '这是现有费用之外新加的拟议附加费，按 cap-subject 申请划分范围。',
      },
    ],
    milestones: [
      {
        "date": "2026-08-25",
        "text": "新的 $103,265 收费 NPRM 发布。"
      },
      {
        "date": "2026-09-10",
        "text": "Federal Register 更正 Table 13 历史申请数量；金额、范围及评论期限未变。"
      },
      {
        "date": "2026-09-24",
        "text": "NPRM 公众评论期截止；提案尚未生效。"
      },
      {
        "date": "2026-09-30",
        "text": "另项 100,000 美元收费：Global Nurse Force 案撤销机构政策，并禁止执行原公告及延长公告下的收费政策；不属于 103,265 美元 NPRM 的裁判。"
      },
      {
        "date": "2026-10-09",
        "text": "另项 100,000 美元收费案：政府向第九巡回法院上诉，并申请暂停地区诉讼程序；上诉本身不暂停 9·30 命令。"
      },
      {
        "date": "2026-10-14",
        "text": "地区案卷第 138 项录入第九巡回 10·09 排期通知：案号 26-6667，政府主书状 11·06、答辩 12·04；不恢复收费。"
      },
      {
        "date": "2026-10-15",
        "text": "另项 100,000 美元案：原告第 140 项反对政府暂停地区诉讼及相关行政程序请求，要求维持案件管理安排。这是当事人意见，不是法院裁定，也不恢复收费。"
      },
      {
        "date": "2026-10-19",
        "text": "另项 100,000 美元案：政府第 141 项回复继续请求暂停地区诉讼；这是当事人意见，不是法院准许暂缓。"
      },
      {
        "date": "2026-10-20",
        "text": "另项 100,000 美元案：双方提交第 142 项联合案件管理说明，仍列 10·27 下午 2 点（太平洋时间）Zoom 会议，并说明暂停地区诉讼请求尚待处理；双方提出的实体排期并非已获法院采纳。"
      },
      {
        "date": "2026-10-28",
        "text": "另项 100,000 美元案：公开案卷新增涉及后续案件管理会议、暂停诉讼动议和听证排期的条目标题；正文未取得，不能确认动议结果、会议实际日期或新的法院期限。"
      },
      {
        "date": "2026-10-28",
        "text": "另项 100,000 美元案：第 144 项纯文字记录写法院拒绝暂停地区诉讼动议并要求提交行政记录；10·29 取得正文。记录中的 12·01、11·17、11·24 与录入日期冲突，实际期限及会议日期待法院澄清；不恢复收费。"
      }
    ],
    next: [
      {
        "date": "2026-11-06",
        "text": "另项 100,000 美元收费案：第九巡回 26-6667 的政府主书状期限，按第 138 项所附通知；不是收费生效日。"
      },
      {
        "date": "2026-12-04",
        "text": "另项 100,000 美元收费案：第九巡回答辩书状期限；可选回复为答辩送达后 21 天，后续变更以法院命令为准。"
      },
      {
        "date": "日期未定",
        "text": "等待法院澄清第 144 项会议与行政记录期限的日期冲突，并核查后续上诉命令；同时跟踪 103,265 美元提案的最终规则及实际生效安排。"
      }
    ],
    process: {
      detail:
        'NPRM 已发布，9 月 24 日评论期结束。DHS 审阅意见后才能发布最终规则。',
      currentSummary: '评论期已结束，等待 DHS 审阅',
      waitingFor: 'DHS 审阅评论，并决定是否发布最终规则及其文本。',
    },
  },
  en: {
    title: 'Proposed $103,265 H-1B Surcharge',
    short: '$103,265 H-1B Surcharge',
    status: 'Proposed rule · Comment period closed',
    effectLabel: 'Not in effect',
    agency: 'DHS / USCIS',
    documentId: '1615-AD20',
    tldr: 'DHS proposes a $103,265 surcharge, in addition to existing fees, for every cap-subject H-1B petition. The proposal includes U.S. advanced-degree cases and F-1 change-of-status petitions; cap-exempt petitions are outside the surcharge.',
    tags: ['OPT → H-1B', 'H-1B selection'],
    summary:
      'DHS proposes a $103,265 surcharge on each cap-subject H-1B petition, on top of existing fees. U.S. advanced-degree cases and F-1 changes of status are included; cap-exempt petitions are excluded.',
    audience:
      'cap-subject H-1B applicants and sponsors, including U.S. advanced-degree cases and F-1 changes of status.',
    caveat: 'Cap-exempt petitions are outside the proposed surcharge.',
    reviewNote:
      "On November 1, the $103,265 NPRM, RIN search and separate $100,000 case’s district docket were reviewed. The text-only entry 144, entered October 28, now states that the court denied the motion to stay district proceedings (entry 133) and directed production of the administrative record; this does not authorize resumed collection. Its dates conflict: a December 1 conference, “21 days from today” parenthetically identified as November 17, and a November 24 further conference do not align with the October 28 entry date or each other. The actual conference date, record deadline and later setting require court clarification; none is inferred or adopted as a confirmed date. The original appellate notice in entry 138 still lists November 6 and December 4 for briefs. Complete later appellate orders and current USCIS collection guidance remain unverified. Public mirrors may lag, and the court-calendar check did not independently resolve the date conflict. An entry-linked URL reached entry 144 this run, while bare-docket and later retries returned empty 202 responses. Later records remain unverified and the date conflict persists.",
    background:
      "RIN 1615-AD20 was published on August 25, 2026, with comments due September 24. A September 10 correction replaced the historical receipt figures in Table 13; it did not change the proposed amount, scope or comment deadline.\nA separate $100,000 H-1B entry restriction was extended by a September 18 White House proclamation through September 21, 2027. It concerns certain workers outside the United States and is distinct from this $103,265 cap-subject NPRM. The District of Massachusetts vacated the agency implementation policy June 8, and the First Circuit denied a stay pending appeal July 24. The extension alone does not establish that agencies may resume collection.\nOn September 30, the Northern District of California in Global Nurse Force v. Trump (4:25-cv-08454-HSG, docket 130) also vacated and remanded the agency policies and barred enforcement under Proclamation 10973 and its extension, Proclamation 11069, until APA notice-and-comment rulemaking and RFA analyses have been conducted. It denied a stay of its order. This does not invalidate the separate $103,265 NPRM covered here. The parties filed their joint case management statement October 20; the September 30 order and joint statement still list an October 27 Zoom conference at 2 p.m. Pacific.\nOn October 9 the government appealed order 130 to the Ninth Circuit (entry 132) and moved to stay district proceedings (entry 133), followed by an October 13 administrative motion on that request (entry 136). The appeal and motions do not themselves stay the September 30 order; any Ninth Circuit order and any change to the October 27 setting must be checked in later court orders.\nOn October 14, district entry 138 recorded the Ninth Circuit’s October 9 schedule notice for appeal 26-6667: the government’s opening brief is due November 6, the answering brief December 4, and an optional reply within 21 days after service of the answering brief. These are appellate briefing dates, not collection dates, and the notice does not stay the September 30 order. The public feed also lists an October 14 district scheduling entry without its full content; the latest district settings remain unverified.\nPlaintiffs opposed a district-proceedings stay in entry 140 on October 15; the government supported a stay in its October 19 reply, entry 141. The October 20 joint statement, entry 142, describes the stay requests as pending and proposes differing merits schedules. Those proposals are not court orders and do not resume collection.\nAt the October 28 review, the public docket supplied only a title for a further case management conference, order on a stay motion and hearing setting. The actual conference date, motion outcome and new settings could not then be confirmed from that title.\nOn October 29, the text-only entry 144 entered October 28 became available. It expressly records denial of the motion to stay district proceedings (entry 133) and directs production of the administrative record. This concerns district-case procedure, does not stay the September 30 vacatur of collection policies and does not change the separate $103,265 NPRM’s proposed status. The stated December 1 conference, “21 days from today (November 17)” record deadline and November 24 further conference conflict with the entry date and each other. These are not adopted as verified dates pending court clarification.",
    teaser:
      'Beyond selection, whether an employer will absorb a high sponsorship cost may determine whether an offer continues.',
    headline:
      'An employer’s sponsorship budget could become a barrier before selection does.',
    analysis:
      'If adopted, the proposed surcharge would push the one-time sponsorship investment much higher. For new graduates moving from OPT to H-1B, employers may reassess the cost when deciding whether to support a petition, rather than waiting for the selection result.',
    impacts: [
      {
        title:
          'For graduates: an offer may not include a sponsorship commitment',
        text: 'A company willing to employ a student during OPT may not be willing to bear a much higher later H-1B cost. If the fee takes effect, retention decisions may happen sooner.',
        examples: [
          'When Chen started on OPT, HR promised future H-1B sponsorship. If the proposal takes effect and the petition is cap-subject, filing it would require another $103,265 on top of existing fees. HR’s earlier promise may not have included that new charge, so the company would need fresh budget approval before it could follow through.',
          'Lin’s manager wants to retain her after a successful year on OPT. If the upcoming H-1B petition requires the $103,265 surcharge, the manager would need company approval for that expense. Finance could refuse the extra budget and the company might not file, even though the manager values Lin’s work.',
        ],
      },
      {
        title: 'For employers: budgets may concentrate on critical roles',
        text: 'If each covered petition carries the added cost, hiring budgets may shift toward hard-to-replace roles with clear business returns. Smaller businesses may have less room to adjust.',
        examples: [
          'A small company plans three cap-subject H-1B petitions. At the proposed rate, the additional fees alone would total $309,795, before existing costs. If the company can fund only one petition, it may reduce the number of employees it sponsors rather than proceed with all three.',
        ],
      },
      {
        title:
          'For pathways: cap-exempt roles may become relatively more attractive',
        text: 'The proposal excludes cap-exempt petitions. Those roles may draw more interest, though limited openings, individual fit, and a separate classification reform would still constrain this path.',
        examples: [
          'Li receives offers from a company and a university lab. Suppose the company’s petition is cap-subject and the university’s qualifies as cap-exempt. The current proposal would charge the additional fee on the former but exclude the latter. Similar salaries could therefore come with different sponsorship costs and affect the employers’ willingness to file.',
        ],
      },
    ],
    outlook:
      'Our outlook: debate will focus on the fee level, legal authority, and employers’ ability to absorb it. Labor-market effects may first appear in sponsorship willingness and budget decisions before they show up in petition volume.',
    scenarios: [
      {
        name: 'Finalized as proposed',
        headline: 'Employer sponsorship concentrates on high-value roles',
        assumption:
          'The $103,265 surcharge remains and covers the cap-subject petitions identified in the proposal.',
        effects:
          'New graduates and employers with limited budgets may be hit harder. Some employers may reduce the number of roles eligible for sponsorship before petitions are filed.',
        signals:
          'The final fee, coverage definition, effective date, and employer sponsorship policies for the next hiring cycle.',
      },
      {
        name: 'Fee or scope revised',
        headline:
          'Sponsorship interest partly recovers, with wider differences among employers',
        assumption:
          'The final rule lowers the amount or adds meaningful exceptions.',
        effects:
          'Cost pressure may ease, but outcomes would still vary by employer size, petition category, and role. Who qualifies for an exception would matter more than a single headline amount.',
        signals:
          'Responses to comments, a revised fee model, and final exemption terms.',
      },
      {
        name: 'Implementation delayed',
        headline:
          'Near-term budget pressure eases, while long-term commitments remain cautious',
        assumption:
          'Rulemaking takes longer or a later court order pauses implementation.',
        effects:
          'Employers may continue filing under current costs but remain cautious about multiyear sponsorship commitments. A temporary pause would not mean the policy has been invalidated.',
        signals:
          'Publication of a final rule, the actual terms and reach of any court order.',
      },
    ],
    scope: [
      {
        label: 'Covered petitions',
        text: 'The proposal covers cap-subject petitions, including the U.S. advanced-degree allocation; a change of status is not excluded simply because the worker is in the United States.',
      },
      {
        label: 'Excluded petitions',
        text: 'Cap-exempt petitions fall outside the proposed surcharge.',
      },
      {
        label: 'Relationship to other fees',
        text: 'This is a proposed surcharge on top of existing fees; its scope turns on whether the petition is cap-subject.',
      },
    ],
    milestones: [
      {
        "date": "2026-08-25",
        "text": "DHS published the $103,265 fee NPRM."
      },
      {
        "date": "2026-09-10",
        "text": "Federal Register corrected Table 13 historical receipt figures; the amount, scope and comment deadline are unchanged."
      },
      {
        "date": "2026-09-24",
        "text": "The NPRM comment period closed; the proposal is not in effect."
      },
      {
        "date": "2026-09-30",
        "text": "Separate $100,000 payment: Global Nurse Force vacates agency policies and bars implementation under the original and extended proclamations; this is not a ruling on the $103,265 NPRM."
      },
      {
        "date": "2026-10-09",
        "text": "Separate $100,000 case: the government appealed to the Ninth Circuit and moved to stay district proceedings; the appeal alone does not stay the September 30 order."
      },
      {
        "date": "2026-10-14",
        "text": "District entry 138 recorded the Ninth Circuit’s October 9 schedule notice for appeal 26-6667: opening brief November 6, answering brief December 4; the notice does not resume collection."
      },
      {
        "date": "2026-10-15",
        "text": "Separate $100,000 case: plaintiffs’ entry 140 opposes a stay of district proceedings and related administrative relief, requesting that case-management arrangements continue. It is a party filing, not a court order or a resumption of collection."
      },
      {
        "date": "2026-10-19",
        "text": "Separate $100,000 case: the government’s entry 141 reply continues to seek a stay of district proceedings; it is a party filing, not an order granting a stay."
      },
      {
        "date": "2026-10-20",
        "text": "Separate $100,000 case: the parties filed joint case management statement 142, still listing the October 27 Zoom conference at 2 p.m. Pacific and describing the district-stay requests as pending. Their proposed merits schedule has not been adopted by the court."
      },
      {
        "date": "2026-10-28",
        "text": "Separate $100,000 case: the public docket adds a title concerning a further case management conference, a stay motion and hearing settings. Operative text was not obtained; motion outcome, actual conference date and new court deadlines remain unverified."
      },
      {
        "date": "2026-10-28",
        "text": "Separate $100,000 case: text-only entry 144 records denial of the district-proceedings stay motion and directs record production; text obtained October 29. Its December 1, November 17 and November 24 dates conflict with the entry date; actual deadlines/settings require court clarification. This does not resume collection."
      }
    ],
    next: [
      {
        "date": "2026-11-06",
        "text": "Separate $100,000 case: government opening brief due in Ninth Circuit appeal 26-6667 under the notice attached to entry 138; not a collection effective date."
      },
      {
        "date": "2026-12-04",
        "text": "Separate $100,000 case: answering brief due in the Ninth Circuit; optional reply within 21 days after service, subject to later court orders."
      },
      {
        "date": "Date unknown",
        "text": "Await court clarification of the conflicting conference and record-production dates in entry 144, and check later appellate orders; also track final text and effectiveness of the separate $103,265 proposal."
      }
    ],
    process: {
      detail:
        'The NPRM is public and the comment period closed September 24. DHS must review comments before it can issue a final rule.',
      currentSummary: 'Comment period closed; DHS review pending',
      waitingFor: 'DHS review of comments and a decision on final text.',
    },
  },
};
