import type { PolicyContent } from '../policy-types.ts';

export const eadDiscretion: PolicyContent = {
  id: 'ead-discretion',
  path: 'OPT',
  tone: 'amber',
  effectState: 'not-in-effect',
  checkedOn: "2026-11-02",
  related: [
    "opt-fee",
    "h4-ead",
    "ead-auto-extension"
  ],
  process: {
    kind: 'federal-rulemaking',
    lastCompletedStage: 3,
    activeStage: null,
    nextStage: 4,
  },
  sources: [
    {
      href: 'https://www.federalregister.gov/d/2026-11285',
      zh: 'Federal Register NPRM',
      en: 'Federal Register NPRM',
    },
    {
      href: 'https://www.regulations.gov/document/USCIS-2026-0067-0001',
      zh: 'Regulations.gov 文档',
      en: 'Regulations.gov document',
    },
    {
      href: 'https://www.uscardforum.com/t/topic/521188',
      zh: '美卡论坛讨论',
      en: 'USCardForum discussion',
    },
    {
      "href": "https://www.reginfo.gov/public/Forward?SearchTarget=RegReview&textfield=1615-AC98",
      "zh": "OIRA · 1615-AC98 审查记录检索",
      "en": "OIRA · 1615-AC98 review search"
    }
  ],
  zh: {
    title: 'I-765 拟加严犯罪记录审查',
    short: 'I-765 犯罪记录审查',
    status: '评论期已结束 · 尚未生效',
    effectLabel: '尚未生效',
    agency: 'DHS / USCIS',
    documentId: '1615-AC98',
    tldr: "DHS 提议：申请 OPT、H-4 EAD 等大多数工卡时，只要曾经被逮捕、被刑事指控、被起诉或被定罪，USCIS 一般就会拒绝 I-765，除非有很强的公共利益理由。没有刑事记录的人不受影响。公众意见已在 8 月截止，最终规则还没出，现在的审批标准照旧。",
    tags: ['OPT', 'H-4 EAD', 'I-765'],
    summary:
      "OPT、H-4 EAD 等很多工卡，法律上属于移民局“可以批、也可以不批”的类别，也就是由 USCIS 酌情决定。DHS 打算给这种酌情决定加一条明确标准：申请人有被捕、刑事指控、起诉或定罪的记录，I-765 一般会被拒，除非有很强的公共利益理由。提案 2026 年 6 月公布，公众评论期 8 月 4 日结束，DHS 还没发最终规则。",
    audience: "有刑事记录、要申请 OPT、H-4 EAD 等工卡的人。刑事记录包括只被逮捕、后来没被定罪的情况。",
    caveat:
      "普通的民事交通罚单（比如超速、违停罚款）不算刑事记录；已经签发的 EAD 继续有效。",
    background:
      "提案编号 RIN 1615-AC98，2026 年 3 月 31 日通过 OIRA 审查，6 月 5 日公布，60 天的公众评论期 8 月 4 日截止。\n它覆盖联邦法规 8 CFR 274a.12(c) 下的大多数工卡类别。(c) 这一组的共同点是：要先向 USCIS 申请、由移民局酌情批准，OPT 和 H-4 EAD 都在里面。提案还要求首次申请和续期的 I-765 都采集生物信息，也就是去指定地点按指纹、拍照。\n提案列出的记录分四种，从轻到重是：被逮捕（警察带走）、被刑事指控（检方提出罪名）、被起诉（正式进入刑事审判程序）、被定罪（法院判有罪）。按提案，哪怕只有第一种，也可能成为拒绝理由。",
    teaser:
      "有刑事记录的人，申请 OPT 和其他工卡会更难，也可能更慢。",
    headline: "一条刑事记录，可能让工卡被拒、入职推迟。",
    analysis:
      "如果提案定稿，有记录的申请人要花更多力气说明当年发生了什么、案子最后怎么结束的：撤诉、无罪还是定罪，最好有法院文件证明。这些材料不全，就可能被拒或者审很久。影响集中在有记录的人身上；没有刑事记录的 OPT 申请照常审。",
    impacts: [
      {
        "title": "对有记录的人：案件结果的证明更关键",
        "text": "被捕、指控、定罪的记录，可能要一条条解释。按提案，就算没被定罪，被捕本身也可能成为拒绝理由。",
        "examples": [
          "小张以前因为一起刑事案件被逮捕过，后来没被定罪。提案把“被捕”也列为一般拒绝工卡的理由，除非有很强的公共利益理由。如果这条标准用在他的 OPT 申请上，这段记录本身就可能导致被拒，而不只是审批变慢。"
        ]
      },
      {
        "title": "对入职：审批时间更难预估",
        "text": "需要补材料或逐案审查时，什么时候能批、什么时候能上班就更难说，雇主也得跟着调整入职时间。"
      },
      {
        "title": "没有刑事记录的人：照常审",
        "text": "提案只针对有刑事记录的人。没有记录的 OPT 申请照常审，普通民事罚单也不算刑事记录。",
        "examples": [
          "小陈以前批过工卡，但他有提案列出的刑事记录。如果新标准适用于他下次续期，移民局会按新标准重新判断，不会因为上次批了这次就照批。续期被拒的话，旧卡到期后他就不能再靠这张卡工作。"
        ]
      }
    ],
    outlook:
      "我们的判断：关键看最终规则怎么写三件事：哪些犯罪记录算数、什么情况可以例外、要交什么证明。写得越清楚，各地审批结果越一致。",
    scenarios: [
      {
        "name": "按提案广泛适用",
        "headline": "有记录的申请人要证明更多",
        "assumption": "大多数工卡类别都适用新的拒绝标准。",
        "effects": "记录的性质和案件材料更重要，一部分人被拒的风险和准备成本上升。",
        "signals": "最终覆盖哪些类别、哪些记录算数、有哪些公共利益例外。"
      },
      {
        "name": "范围收窄",
        "headline": "只针对明确列出的情形",
        "assumption": "最终规则缩小适用的行为，或写明哪些情况不算。",
        "effects": "标准更清楚，心里更有底；记录落在范围内的人仍要逐案审查。",
        "signals": "DHS 对公众意见的回应，以及对行为、案件结果和证明材料的定义。"
      },
      {
        "name": "延后推行",
        "headline": "现行标准不变，材料照样要备齐",
        "assumption": "DHS 还在审或在改，没有新规生效。",
        "effects": "暂时没有新的拒绝标准，按现有要求审。",
        "signals": "最终规则公告，以及 I-765 表格和填表说明的更新。"
      }
    ],
    scope: [
      {
        "label": "哪些工卡",
        "text": "8 CFR 274a.12(c) 下的大多数类别，包括 OPT 和 H-4 EAD。"
      },
      {
        "label": "什么记录",
        "text": "被捕、刑事指控、起诉、定罪这四类刑事记录；普通民事交通罚单不在其中。"
      },
      {
        "label": "已经拿到的卡",
        "text": "已签发的 EAD 继续有效；续期按最终规则的标准审。"
      }
    ],
    milestones: [
      {
        "date": "2026-03-31",
        "text": "OIRA 审完提案。"
      },
      {
        "date": "2026-06-05",
        "text": "DHS 公布提案。"
      },
      {
        "date": "2026-08-04",
        "text": "60 天公众意见征集结束。"
      }
    ],
    next: [
      {
        "date": "日期未定",
        "text": "DHS 审阅公众意见，决定修改还是定稿。"
      },
      {
        "date": "日期未定",
        "text": "如果定稿，新标准从生效日起适用于首次申请和续期。",
        "estimate": true
      }
    ],
    process: {
      detail:
        "提案已公布，公众意见 2026 年 8 月 4 日截止。下一步是 DHS 发最终规则。",
      currentSummary: "公众评论期已结束，等待最终规则",
      waitingFor: "DHS 审阅公众意见后，决定修改还是定稿。",
    },
  },
  en: {
    title: 'Proposed Expansion of Criminal-Record Review for Form I-765',
    short: 'I-765 Criminal-Record Review',
    status: 'Comment period closed · Not in effect',
    effectLabel: 'Not in effect',
    agency: 'DHS / USCIS',
    documentId: '1615-AC98',
    tldr: "DHS proposes that for most work permits, including OPT and H-4 EAD, USCIS would generally deny Form I-765 if the applicant has ever been arrested, criminally charged, indicted or convicted, unless there is a strong public-interest reason to approve. People without a criminal record are not affected. Comments closed in August; there is no final rule yet, so current standards still apply.",
    tags: ['OPT', 'H-4 EAD', 'Form I-765'],
    summary:
      "Many work permits, including OPT and H-4 EAD, are legally ones USCIS may grant or deny at its discretion. DHS plans to add a clear standard to that discretion: if the applicant has an arrest, criminal charge, indictment or conviction, the I-765 would generally be denied unless there is a strong public-interest reason. The proposal came out in June 2026, comments closed August 4, and DHS has not issued a final rule.",
    audience:
      "People with a criminal record who apply for work permits such as OPT or H-4 EAD. A criminal record here includes an arrest that never led to a conviction.",
    caveat:
      "Ordinary civil traffic tickets (such as speeding or parking fines) are not criminal records, and EADs already issued stay valid.",
    background:
      "The proposal, RIN 1615-AC98, cleared OIRA review on March 31, 2026, was published June 5, and its 60-day comment period closed August 4.\nIt covers most work-permit categories under the federal regulation at 8 CFR 274a.12(c). What the (c) categories have in common is that you apply to USCIS and it decides at its discretion; OPT and H-4 EAD are both in this group. The proposal also requires biometrics, meaning fingerprints and a photo taken at a USCIS appointment, for both first-time and renewal I-765s.\nThe proposal lists four kinds of record, from lightest to heaviest: an arrest (taken in by police), a criminal charge (prosecutors file an accusation), an indictment (formally sent to criminal trial) and a conviction (found guilty by a court). Under the proposal, even the first could be a reason to deny.",
    teaser:
      "With a criminal record, getting OPT or another work permit would be harder and could take longer.",
    headline:
      "A criminal record could mean a denied work permit and a delayed start date.",
    analysis:
      "If adopted, applicants with a record would need to explain what happened and how the case ended (dismissed, acquitted or convicted), ideally with court documents. Without complete paperwork, the application could be denied or take a long time. The effect falls on people with records; OPT applications without one are reviewed as usual.",
    impacts: [
      {
        "title": "For people with a record: proof of how the case ended matters more",
        "text": "Arrests, charges and convictions may each need explaining. Under the proposal, even an arrest without a conviction could be a reason to deny.",
        "examples": [
          "Zhang was once arrested in a criminal case but not convicted. The proposal lists arrests as a general reason to deny these work permits unless there is a strong public-interest reason. Applied to his OPT application, that record alone could lead to a denial, not just a delay."
        ]
      },
      {
        "title": "For start dates: harder to predict",
        "text": "If more evidence or case-by-case review is needed, it gets harder to say when the permit comes through and when you can start, and employers have to adjust."
      },
      {
        "title": "For people without a criminal record: business as usual",
        "text": "The proposal targets people with criminal records. OPT applications without one are reviewed as usual, and ordinary civil tickets are not criminal records.",
        "examples": [
          "Chen has had a work permit before but has a criminal record of the kind the proposal lists. If the new standard applies to his next renewal, USCIS would decide under it instead of approving because he was approved before. If the renewal is denied, he could not keep working on that card after it expires."
        ]
      }
    ],
    outlook:
      "Our view: what matters is how the final rule defines three things: which records count, what exceptions exist and what proof is required. The clearer those are, the more consistent decisions will be from office to office.",
    scenarios: [
      {
        "name": "Broad application as proposed",
        "headline": "Applicants with records have more to prove",
        "assumption": "The new denial standard applies to most work-permit categories.",
        "effects": "The kind of record and the case documents matter more; some people face higher denial risk and more preparation.",
        "signals": "Which categories the final rule covers, which records count and what public-interest exceptions exist."
      },
      {
        "name": "Narrower scope",
        "headline": "Only clearly listed situations are affected",
        "assumption": "The final rule narrows the conduct covered or spells out what doesn’t count.",
        "effects": "Clearer standards mean less guesswork; people whose records fall inside them still face case-by-case review.",
        "signals": "DHS’s response to public comments and how it defines conduct, case outcomes and required proof."
      },
      {
        "name": "Implementation delayed",
        "headline": "Current standards stay; you still need complete paperwork",
        "assumption": "DHS is still reviewing or revising; no new rule is in effect.",
        "effects": "No new denial standard yet; applications are reviewed under current rules.",
        "signals": "A final rule and updates to the I-765 form and instructions."
      }
    ],
    scope: [
      {
        "label": "Which work permits",
        "text": "Most categories under 8 CFR 274a.12(c), including OPT and H-4 EAD."
      },
      {
        "label": "Which records",
        "text": "Arrests, criminal charges, indictments and convictions; ordinary civil traffic tickets are not included."
      },
      {
        "label": "Cards you already have",
        "text": "Issued EADs stay valid; renewals would be judged under the final rule’s standard."
      }
    ],
    milestones: [
      {
        "date": "2026-03-31",
        "text": "OIRA finished reviewing the proposal."
      },
      {
        "date": "2026-06-05",
        "text": "DHS published the proposal."
      },
      {
        "date": "2026-08-04",
        "text": "The 60-day public comment period closed."
      }
    ],
    next: [
      {
        "date": "Date unknown",
        "text": "DHS reviews public comments and decides whether to revise or finalize."
      },
      {
        "date": "Date unknown",
        "text": "If finalized, the new standard applies to first-time and renewal applications from its start date.",
        "estimate": true
      }
    ],
    process: {
      detail:
        "The proposal is out and comments closed August 4, 2026. The next step is a final rule from DHS.",
      currentSummary: "Comments closed; awaiting a final rule",
      waitingFor:
        "DHS’s review of public comments and its decision to revise or finalize.",
    },
  },
};
