import type { PolicyContent } from '../policy-types.ts';

export const h1bFee: PolicyContent = {
  id: 'h1b-fee',
  path: 'H-1B',
  tone: 'amber',
  effectState: 'not-in-effect',
  checkedOn: "2026-11-02",
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
      "zh": "白宫 9·18 延长 10 万美元入境费的公告",
      "en": "White House September 18 extension of the $100,000 entry fee"
    },
    {
      "href": "https://oag.ca.gov/system/files/attachments/press-docs/H1B%20Order.pdf",
      "zh": "麻省地区法院 6·08 判决（撤销收费政策）",
      "en": "District of Massachusetts June 8 ruling (collection policy struck down)"
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
      "zh": "Global Nurse Force 公开案卷（含 10·09 上诉）",
      "en": "Global Nurse Force public docket (including the October 9 appeal)"
    },
    {
      "href": "https://storage.courtlistener.com/recap/gov.uscourts.cand.457426/gov.uscourts.cand.457426.138.0.pdf",
      "zh": "第九巡回 26-6667 · 上诉书排期（地区案卷第 138 项）",
      "en": "Ninth Circuit 26-6667 · Briefing schedule (district entry 138)"
    },
    {
      "href": "https://www.courtlistener.com/docket/71541425/global-nurse-force-v-trump/?order_by=desc#entry-144",
      "zh": "第 144 项会议记录 · 拒绝暂停地区诉讼",
      "en": "Minute entry 144 · District-stay motion denied"
    }
  ],
  zh: {
    title: 'H-1B 拟加收 103,265 美元',
    short: 'H-1B 10.3 万美元附加费',
    searchTitle: "H-1B 103,265 美元附加费提案：谁要交、什么时候收",
    searchDescription: "DHS 提议：参加抽签的 H-1B 申请，雇主每份再交 103,265 美元，OPT 转 H-1B 和美国硕士名额也要交，大学等免抽签雇主不用交。",
    status: '正式提案 · 评论期已结束',
    effectLabel: '尚未生效',
    agency: 'DHS / USCIS',
    documentId: '1615-AD20',
    tldr: "DHS 提议：凡是要参加抽签的 H-1B 申请（cap-subject），雇主在现有费用之外，每份再交 103,265 美元。抽美国硕士名额的要交，F-1 学生人在美国、直接从 OPT 转 H-1B 的也要交；大学等免抽签（cap-exempt）雇主的申请不用交。公众评论已在 9 月结束，最终规则还没出，现在不收。",
    tags: ['OPT → H-1B', 'H-1B 抽签'],
    summary:
      "DHS 打算对每份要参加抽签的 H-1B 申请，在现有费用之外加收 103,265 美元。这笔钱由雇主付。范围很广：抽美国硕士名额的申请要交；F-1 学生不出境、在美国境内把身份从 F-1 转成 H-1B 的也要交。只有免抽签（cap-exempt）的申请不交，比如大学和非营利研究机构递交的申请。公众评论期已结束，DHS 还没发最终规则，这笔钱现在不收。",
    audience:
      "要参加 H-1B 抽签的人和为他们担保的雇主，包括抽美国硕士名额的人，以及 OPT 期间在美国境内转 H-1B 的 F-1 学生。",
    caveat: "免抽签（cap-exempt）的申请，比如大学和非营利研究机构递交的，不收这笔费。",
    background:
      "这项提案（RIN 1615-AD20）2026-08-25 公布，公众评论 9 月 24 日截止。9 月 10 日联邦公报发了一份更正，只改了提案里一张表（Table 13）的历史申请数，金额、范围和截止日都没变。\n注意别和另一笔 10 万美元的 H-1B 入境费搞混。那笔钱来自总统公告 10973，针对的是部分人在美国境外的 H-1B 申请；白宫 9·18 又发公告 11069，把它延长到 2027-09-21。但政府收这笔钱的做法，已经两次被法院判为违法并撤销（作废）：\n第一次，麻省联邦地区法院 6·08 撤销了收费政策。7·24，第一巡回法院拒绝在上诉期间暂停这个判决，收费没能恢复。\n第二次，加州北区联邦法院 9·30 在 Global Nurse Force v. Trump 案（4:25-cv-08454-HSG）里再次撤销，并禁止政府按这两份公告收费，除非政府先走完公开征求意见的规则程序。所以这 10 万美元现在收不了。\n政府 10·09 向第九巡回法院上诉（案号 26-6667），政府上诉书 11·06 到期，原告答辩书 12·04 到期。地区法院 10·28 拒绝在上诉期间暂停自己这边的审理，并要求政府交出行政记录。上诉期间，9·30 的命令继续有效。",
    teaser:
      '抽签之前，先要看雇主肯不肯出这笔钱。',
    headline: '雇主的担保预算，可能比抽签更早成为门槛。',
    analysis:
      "这笔附加费如果落地，雇主为一份申请要花的钱会多出十几万美元。对从 OPT 转 H-1B 的应届生来说，雇主会在决定要不要帮你注册抽签时就算这笔账，而不是等抽签结果出来再说。",
    impacts: [
      {
        title: '对毕业生：公司雇你，不一定肯帮你办 H-1B',
        text: '公司愿意在 OPT 期间雇你，不一定愿意出之后这笔高额的 H-1B 费用。费用一落地，公司会更早决定要不要留人。',
        examples: [
          '小陈用 OPT 入职时，HR 说过以后会帮他申 H-1B。如果这项收费通过，而他的申请要参加抽签，公司就得在原有费用之外再交 103,265 美元。HR 当初没算这笔钱，公司得重新批预算，才能兑现承诺。',
          '小林用 OPT 干了一年，主管很满意，想留她。如果她的 H-1B 要多交 103,265 美元，主管得向上申请这笔钱；财务不批，公司就可能不给她申请。工作表现再好，也抵不过预算不批。',
        ],
      },
      {
        title: '对雇主：预算会向关键岗位集中',
        text: '每份要抽签的申请都多花这笔钱，招聘预算会向难替代、回报明确的岗位倾斜。小公司能调整的余地更小。',
        examples: [
          '一家小公司本来打算给三个员工申 H-1B（都要抽签）。按提案金额，光附加费三份就是 309,795 美元，还不算原来的申请费。公司如果只付得起一份，就只能少担保两个人。',
        ],
      },
      {
        title: '对路径：免抽签的工作会更抢手',
        text: '免抽签（cap-exempt）的申请不收这笔费，这类工作会更受关注。不过这类岗位本来就少，而且 #07 改革可能收紧免抽签资格。',
        examples: [
          '小李手上有两个 offer：一家普通公司，一个大学实验室。公司的 H-1B 要抽签，大学的不用。按提案，公司要交附加费，大学不用。工资差不多，雇主实际花的钱却差很多，这会影响谁更愿意帮他办 H-1B。',
        ],
      },
    ],
    outlook:
      '我们的判断：争论会集中在金额高低、法律依据和雇主能否负担上。就业市场上，最先变的是雇主肯不肯担保、预算给多少，之后才会体现在申请数量上。',
    scenarios: [
      {
        "name": "按提案定稿",
        "headline": "雇主只为最看重的岗位担保",
        "assumption": "103,265 美元附加费保留，所有要抽签的申请都要交。",
        "effects": "应届生和预算紧的公司受影响最大。有些雇主会直接减少愿意担保的岗位，不等到递交申请那一步。",
        "signals": "最终金额、适用范围、生效时间，以及企业下一轮招聘的担保政策。"
      },
      {
        "name": "费用或范围调整",
        "headline": "担保意愿部分回升，但各家差别更大",
        "assumption": "最终规则降低金额，或增加实质性的豁免。",
        "effects": "成本压力会小一些，但不同规模的雇主、不同岗位之间差别仍大。哪些人能豁免，比总金额更重要。",
        "signals": "DHS 对公众意见的回应、调整后的金额和最终豁免条款。"
      },
      {
        "name": "实施被推迟",
        "headline": "短期预算压力缓和，长期担保仍会谨慎",
        "assumption": "规则制定拖长，或者法院命令暂缓实施。",
        "effects": "企业照现有费用继续办理，但对需要多年投入的担保会更谨慎。",
        "signals": "最终规则有没有发布，以及法院命令的具体内容和适用范围。"
      }
    ],
    scope: [
      {
        "label": "要交的",
        "text": "所有要参加抽签的申请，包括美国硕士名额；人在美国境内从 F-1 转 H-1B 也要交。"
      },
      {
        "label": "不用交的",
        "text": "免抽签（cap-exempt）的申请，比如大学和非营利研究机构递交的。"
      },
      {
        "label": "和现有费用的关系",
        "text": "在现有申请费之外另加一笔，由雇主付。"
      }
    ],
    milestones: [
      {
        "date": "2026-08-25",
        "text": "DHS 公布 103,265 美元附加费提案。"
      },
      {
        "date": "2026-09-10",
        "text": "联邦公报发布更正，只改了一张表里的历史申请数；金额、范围和截止日不变。"
      },
      {
        "date": "2026-09-24",
        "text": "公众评论截止。"
      },
      {
        "date": "2026-09-30",
        "text": "另一笔 10 万美元入境费：法院在 Global Nurse Force 案撤销收费政策，禁止按原公告和延长公告收费。"
      },
      {
        "date": "2026-10-09",
        "text": "10 万美元入境费案：政府向第九巡回法院上诉，并请地区法院先暂停审理。"
      },
      {
        "date": "2026-10-14",
        "text": "10 万美元入境费案：第九巡回法院排定政府上诉书 11·06、原告答辩书 12·04 到期。"
      },
      {
        "date": "2026-10-28",
        "text": "10 万美元入境费案：地区法院拒绝暂停审理，要求政府交出行政记录。"
      }
    ],
    next: [
      {
        "date": "2026-11-06",
        "text": "10 万美元入境费案：政府向第九巡回法院提交上诉书。"
      },
      {
        "date": "2026-12-04",
        "text": "10 万美元入境费案：原告答辩书截止。"
      },
      {
        "date": "日期未定",
        "text": "DHS 审阅公众意见后，决定 103,265 美元附加费的最终条文和生效日期。"
      }
    ],
    process: {
      detail:
        "提案已公布，公众评论 9 月 24 日截止。DHS 审阅完意见后，才能发最终规则。",
      currentSummary: "评论期已结束，等待 DHS 定稿",
      waitingFor: "DHS 审阅公众意见，决定最终规则写什么。",
    },
  },
  en: {
    title: 'Proposed $103,265 H-1B Surcharge',
    short: '$103,265 H-1B Surcharge',
    searchTitle: "$103,265 H-1B Fee Proposal: Who Pays and When",
    searchDescription: "DHS proposes an extra $103,265 on every cap-subject H-1B petition, including U.S. master’s-cap cases and F-1 students moving from OPT. Cap-exempt employers such as universities do not pay.",
    status: 'Proposed rule · Comment period closed',
    effectLabel: 'Not in effect',
    agency: 'DHS / USCIS',
    documentId: '1615-AD20',
    tldr: "DHS proposes that for every H-1B petition that goes through the lottery (cap-subject), the employer pays an extra $103,265 on top of existing fees. That includes U.S. master’s-cap cases and F-1 students switching straight from OPT to H-1B inside the U.S.; petitions from cap-exempt employers such as universities do not pay. Comments closed in September and there is no final rule, so nothing is charged now.",
    tags: ['OPT → H-1B', 'H-1B selection'],
    summary:
      "DHS plans to add $103,265 on top of existing fees for every H-1B petition that goes through the lottery. The employer pays it. The reach is wide: petitions under the U.S. master’s cap pay it, and so do F-1 students who change status to H-1B inside the U.S. without leaving. Only cap-exempt petitions, such as those filed by universities and nonprofit research institutions, are exempt. The comment period has closed, DHS has not issued a final rule, and the fee is not charged now.",
    audience:
      "People going through the H-1B lottery and the employers sponsoring them, including U.S. master’s-cap cases and F-1 students on OPT changing to H-1B inside the U.S.",
    caveat: "Cap-exempt petitions, such as those filed by universities and nonprofit research institutions, do not pay this fee.",
    background:
      "The proposal (RIN 1615-AD20) was published August 25, 2026, with comments due September 24. A September 10 correction in the Federal Register changed only the historical filing counts in one table (Table 13); the amount, scope and deadline stayed the same.\nDon’t confuse it with a separate $100,000 H-1B entry fee. That one comes from Proclamation 10973 and applies to certain H-1B petitions for people outside the U.S.; on September 18 the White House issued Proclamation 11069 extending it to September 21, 2027. But the way the government collects it has twice been found unlawful and vacated (cancelled) by courts:\nFirst, on June 8 the federal district court in Massachusetts vacated the collection policy. On July 24 the First Circuit declined to put that ruling on hold during the appeal, so collection did not resume.\nSecond, on September 30 the Northern District of California vacated it again in Global Nurse Force v. Trump (No. 4:25-cv-08454-HSG) and barred the government from collecting under either proclamation unless it first goes through public-comment rulemaking. So the $100,000 fee cannot be collected now.\nThe government appealed to the Ninth Circuit on October 9 (No. 26-6667). Its opening brief is due November 6 and plaintiffs’ answering brief December 4. On October 28 the district court refused to pause its own proceedings during the appeal and ordered the government to turn over its administrative record. The September 30 order stays in force during the appeal.",
    teaser:
      'Before the lottery, the question is whether your employer will pay this fee.',
    headline:
      'Your employer’s sponsorship budget could become the hurdle before the lottery does.',
    analysis:
      "If adopted, the surcharge would add more than $100,000 to the employer’s cost for each petition. For new graduates moving from OPT to H-1B, employers will weigh that cost when deciding whether to register you for the lottery at all, not after the results come in.",
    impacts: [
      {
        title:
          'For graduates: a job offer may not come with H-1B sponsorship',
        text: 'A company happy to employ you on OPT may not want to pay a much higher H-1B cost later. If the fee takes effect, companies will decide sooner whether to keep you.',
        examples: [
          'When Chen started on OPT, HR promised to sponsor his H-1B later. If the fee passes and his petition goes through the lottery, the company would pay another $103,265 on top of existing fees. HR did not budget for that, so the company would need new approval to keep its promise.',
          'Lin’s manager wants to keep her after a strong year on OPT. If her H-1B petition carries the $103,265 fee, the manager needs company approval for it; if finance says no, the company may not file. Good performance does not help if the budget is not approved.',
        ],
      },
      {
        title: 'For employers: budgets may concentrate on critical roles',
        text: 'With every lottery petition costing this much more, hiring budgets will shift toward hard-to-replace roles with clear payoff. Small companies have less room to adjust.',
        examples: [
          'A small company planned three lottery H-1B petitions. At the proposed rate, the surcharge alone would be $309,795, before regular fees. If it can afford only one, two people lose sponsorship.',
        ],
      },
      {
        title:
          'For your path: cap-exempt jobs become more attractive',
        text: 'Cap-exempt petitions skip this fee, so those jobs will draw more interest. But there are few of them, and reform #07 may tighten who qualifies as cap-exempt.',
        examples: [
          'Li has two offers: a company and a university lab. The company’s H-1B goes through the lottery; the university’s is cap-exempt. Under the proposal, only the company pays the surcharge. Similar salaries, very different costs to the employer, which affects who is more willing to file for Li.',
        ],
      },
    ],
    outlook:
      'Our view: the fight will be over the amount, the legal basis and whether employers can afford it. In the job market, the first change will be in employers’ willingness to sponsor and their budgets; filing numbers will follow.',
    scenarios: [
      {
        "name": "Finalized as proposed",
        "headline": "Employers sponsor only their most valued roles",
        "assumption": "The $103,265 surcharge stays and applies to every lottery petition.",
        "effects": "New graduates and companies with tight budgets are hit hardest. Some employers will cut the number of roles they sponsor before anyone files.",
        "signals": "The final amount, who it covers, when it starts, and employers’ sponsorship policies for the next hiring season."
      },
      {
        "name": "Fee or scope revised",
        "headline": "Sponsorship partly recovers, but employers diverge more",
        "assumption": "The final rule lowers the amount or adds real exemptions.",
        "effects": "Cost pressure eases, but outcomes still vary by employer size and role. Who gets an exemption matters more than the headline number.",
        "signals": "DHS’s response to public comments, the revised amount and the final exemptions."
      },
      {
        "name": "Implementation delayed",
        "headline": "Short-term budget pressure eases; long-term sponsorship stays cautious",
        "assumption": "Rulemaking takes longer or a court order pauses implementation.",
        "effects": "Employers keep filing at current costs but grow more cautious about multiyear sponsorship commitments.",
        "signals": "Whether a final rule is published, and what any court order actually says and covers."
      }
    ],
    scope: [
      {
        "label": "Who pays",
        "text": "Every petition that goes through the lottery, including the U.S. master’s cap and F-1 students changing to H-1B inside the U.S."
      },
      {
        "label": "Who doesn’t",
        "text": "Cap-exempt petitions, such as those filed by universities and nonprofit research institutions."
      },
      {
        "label": "On top of existing fees",
        "text": "An extra charge on top of current filing fees, paid by the employer."
      }
    ],
    milestones: [
      {
        "date": "2026-08-25",
        "text": "DHS published the $103,265 surcharge proposal."
      },
      {
        "date": "2026-09-10",
        "text": "The Federal Register published a correction to the historical filing counts in one table; amount, scope and deadline unchanged."
      },
      {
        "date": "2026-09-24",
        "text": "Public comments closed."
      },
      {
        "date": "2026-09-30",
        "text": "Separate $100,000 entry fee: in Global Nurse Force the court struck down the collection policy and barred collection under both proclamations."
      },
      {
        "date": "2026-10-09",
        "text": "$100,000 fee case: the government appealed to the Ninth Circuit and asked the district court to pause the case."
      },
      {
        "date": "2026-10-14",
        "text": "$100,000 fee case: the Ninth Circuit set the government’s opening brief for November 6 and plaintiffs’ answer for December 4."
      },
      {
        "date": "2026-10-28",
        "text": "$100,000 fee case: the district court refused to pause the case and ordered the government to turn over its administrative record."
      }
    ],
    next: [
      {
        "date": "2026-11-06",
        "text": "$100,000 fee case: government’s opening brief due in the Ninth Circuit."
      },
      {
        "date": "2026-12-04",
        "text": "$100,000 fee case: plaintiffs’ answering brief due."
      },
      {
        "date": "Date unknown",
        "text": "After reviewing public comments, DHS decides the final text and start date of the $103,265 surcharge."
      }
    ],
    process: {
      detail:
        "The proposal is out and comments closed September 24. DHS has to review the comments before it can issue a final rule.",
      currentSummary: "Comment period closed; awaiting DHS’s final decision",
      waitingFor: "DHS’s review of public comments and its decision on the final rule.",
    },
  },
};
