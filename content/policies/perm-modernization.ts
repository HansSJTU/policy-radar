import type { PolicyContent } from '../policy-types.ts';

export const permModernization: PolicyContent = {
  id: 'perm-modernization',
  path: 'H-1B',
  tone: 'blue',
  effectState: 'not-in-effect',
  checkedOn: "2026-11-01",
  related: ['prevailing-wage', 'h1b-reform'],
  process: {
    "kind": "federal-rulemaking",
    "lastCompletedStage": 1,
    "activeStage": null,
    "nextStage": 2
  },
  sources: [
    {
      "href": "https://www.reginfo.gov/public/do/eoDetails?rrid=1533011",
      "zh": "OIRA 10·23 审查结论 · Consistent with Change · RIN 1205-AC29",
      "en": "OIRA October 23 conclusion · Consistent with Change · RIN 1205-AC29"
    },
    {
      "href": "https://www.reginfo.gov/public/do/eoDetails?rrid=1532863",
      "zh": "OIRA 9·14 收件记录 · RIN 1205-AC29",
      "en": "OIRA September 14 submission · RIN 1205-AC29"
    },
    {
      "href": "https://www.reginfo.gov/public/do/eAgendaViewRule?pubId=202510&RIN=1205-AC29",
      "zh": "政府规则计划表 · PERM 改革摘要",
      "en": "Unified Agenda (rulemaking plan) · PERM reform summary"
    },
    {
      "href": "https://www.justice.gov/opa/pr/civil-rights-division-secures-settlement-openai-discriminating-against-us-workers",
      "zh": "司法部 · OpenAI PERM 和解新闻稿（2026-08-04）",
      "en": "Justice Department · OpenAI PERM settlement (August 4, 2026)"
    },
    {
      "href": "https://meltzerhellrung.com/dol-is-planning-to-give-perm-its-first-real-update-since-2005-heres-what-employers-should-expect/",
      "zh": "Meltzer Hellrung · PERM 改革预期分析（2026-07-16）",
      "en": "Meltzer Hellrung · What to expect from the PERM update (July 16, 2026)"
    },
    {
      "href": "https://www.uscardforum.com/t/topic/517411",
      "zh": "美卡论坛讨论",
      "en": "USCardForum discussion"
    },
    {
      "href": "https://www.reginfo.gov/public/Forward?SearchTarget=RegReview&textfield=1205-AC29",
      "zh": "OIRA · 1205-AC29 审查记录检索",
      "en": "OIRA · 1205-AC29 review search"
    }
  ],
  zh: {
    title: 'PERM 拟改革：招聘方式和雇主合规要求',
    short: 'PERM 劳工认证改革',
    status: "OIRA 已审完 · 等待正式提案",
    effectLabel: "尚未生效 · 现行 PERM 规则未变",
    agency: 'DOL / ETA',
    documentId: '1205-AC29',
    tldr: "DOL 打算改革 PERM（雇主担保绿卡的第一步）：招聘方式、对被裁美国工人的保护、雇主的合规要求。白宫 OIRA 10·23 审完（要求修改后同意发布），下一步是 DOL 正式公布提案。",
    tags: ['H-1B → 绿卡', 'PERM', '雇主担保'],
    summary:
      "DOL 打算更新 PERM 的招聘渠道、对被裁美国工人的保护、不歧视招聘和留档要求。OIRA 10·23 审完，结论是“Consistent with Change”（要求修改后同意发布）。下一步是 DOL 正式公布提案和评论期限。",
    audience:
      '打算通过雇主担保办绿卡的员工，以及替员工办 PERM 的雇主，包括目前持 H-1B 的人。',
    caveat:
      '这项只管绿卡第一步的劳工认证，和 H-1B 抽签无关，也不是 #06 的工资提案（RIN 1205-AC30）。',
    background:
      "PERM 是雇主替外籍员工办职业移民绿卡的第一步：雇主要证明自己认真招过美国人、没找到合适人选。改革涉及 20 CFR 656。DOL 2026-09-14 把提案送交白宫 OIRA 审查；政府规则计划表原定 7 月公布。\nOIRA 10·23 审完（rrid=1533011），结论是“Consistent with Change”，意思是要求修改后同意发布，但没公开改了什么。提案还没刊登，现行 PERM 规则照旧。",
    teaser: '招聘规则一改，雇主准备 PERM 的工作量和时间都会变。',
    headline: '办绿卡担保，可能要在招聘和留档上花更多时间。',
    analysis:
      '我们的判断：改革是想让 PERM 招聘更像公司平时真正招人的方式。如果按这个方向落地，招聘渠道、怎么收简历、要留哪些记录都可能变，雇主每个案子的工时和费用大概率上升；刚裁过员的公司，核对相关岗位和招聘记录也会更麻烦。下面五项是律所和业界的预测，正式内容以提案为准。',
    possibilities: {
      heading: '业内预测的五项变化',
      note: '这五项是律所和业界根据政府计划表和近期执法案例的推测，不是 DOL 已公布的条款。其中至少三项已经出现在 2026-08-04 司法部和 OpenAI 的 PERM 和解里：司法部认定该公司没在公开招聘网站发 PERM 职位、只收邮寄的纸质申请，还在深夜投放电台广告；和解要求它改在官网发布并接受网上申请。',
      items: [
        [
          '取消强制性的报纸广告',
          '不再硬性要求在当地报纸刊登招聘广告。报纸是 2005 年规则留下的渠道，如今大多数技术类求职者根本不看。',
        ],
        [
          '改用现代招聘渠道',
          '要求或允许用社交媒体、招聘网站这类现在常用的渠道，同时去掉电台、电视这类过时渠道。',
        ],
        [
          '不再要求邮寄简历',
          '不再把“只收邮寄纸质简历”当成合规做法，免得用这种门槛把申请人挡在外面。',
        ],
        [
          '在公司招聘页面发布职位',
          '公司如果有自己的招聘页面，就要把 PERM 职位发在上面，而不是只发在报纸或州劳工局。',
        ],
        [
          '通过 ATS 接收申请',
          '公司如果用申请人管理系统（ATS），就要让申请人能通过系统投递，而不是只留一个邮箱或邮寄地址。',
        ],
      ],
    },
    impacts: [
      {
        title: '对雇主：招聘和留档工作变多',
        text: '如果招聘和留档的最低标准提高，公司要改招聘流程、留更多证据。具体多哪些步骤、多花多少钱，看提案。',
        examples: [
          '一家企业准备为小陈办理 PERM。如果最终规则要求更完整的招聘记录，HR 就要补充整理求职申请和招聘结果，准备时间也会拉长。',
        ],
      },
      {
        title: '对裁过员的公司：保护美国员工的要求更严',
        text: '计划表写明要加强对被裁美国员工的保护，但还没说往回查多久、哪些岗位、要不要逐个通知。裁过员的公司仍然可以办 PERM。',
        examples: [
          '小林的公司最近裁过员，又准备给他办 PERM。改革要加强保护被裁员工，公司以后可能要更仔细地核对相关岗位；具体范围看提案。',
        ],
      },
      {
        title: '对 H-1B 员工：绿卡时间可能往后推',
        text: '雇主准备一个案子的时间变长，员工的绿卡计划就可能往后推；现有 H-1B 身份不受影响。',
        examples: [
          '小王持 H-1B，雇主答应今年给他办绿卡。如果新规让准备工作变多，雇主递交的时间可能推迟；他的 H-1B 身份不受影响。',
        ],
      },
    ],
    outlook:
      "OIRA 已审完，接下来等 DOL 正式公布提案。重点看：招聘渠道、裁员后的通知和核对要求、材料要留几年，以及已经递交的案子怎么过渡。",
    scenarios: [
      {
        "name": "审完，等提案",
        "headline": "现行规则照旧",
        "assumption": "OIRA 已审完，DOL 还没公布提案。",
        "effects": "雇主继续按现行规则准备案件。",
        "signals": "DOL 和联邦公报有没有公布提案、改了什么。"
      },
      {
        name: '提案公布，开始征求意见',
        headline: '雇主开始评估流程怎么变',
        assumption: 'DOL 公布具体条款和评论期。',
        effects: '员工和雇主可以对照正文估算准备量；新要求要等最终规则生效才适用。',
        signals: '招聘标准、裁员保护、留档要求和适用范围。',
      },
      {
        name: '最终规则生效',
        headline: '按最终规则调整 PERM 流程',
        assumption: 'DOL 走完规则程序，最终规则生效。',
        effects:
          '新案和在办案件要不要改，看最终条款、过渡安排和可能的法院命令。',
        signals: '生效日期、过渡安排，以及已经做完的招聘和已递交的案子怎么算。',
      },
    ],
    scope: [
      { label: '涉及什么', text: '20 CFR 656 下的 PERM 劳工认证（职业移民绿卡第一步）。' },
      {
        label: '和 H-1B 的关系',
        text: '主要影响之后的雇主担保绿卡；H-1B 抽签和身份不变。',
      },
      {
        label: '现在到哪一步',
        text: "9·14 送 OIRA，10·23 审完；下一步是公布提案和评论期。",
      },
    ],
    milestones: [
      {
        date: '2026 统一议程',
        text: 'DOL 在政府规则计划表里列出 PERM 改革，原定 7 月公布提案。',
      },
      {
        date: '2026-08-04',
        text: '司法部和 OpenAI 就 PERM 达成和解，要求它在官网发布职位并接受网上申请。',
      },
      { date: '2026-09-14', text: '提案送交白宫 OIRA 审查。' },
      {
        "date": "2026-10-23",
        "text": "OIRA 审完，要求修改后同意发布（Consistent with Change）。"
      }
    ],
    next: [
      {
        "date": "日期未定",
        "text": "DOL 正式公布提案，写明招聘渠道、适用案件和评论期限。"
      },
      {
        "date": "日期未定",
        "text": "最终规则、生效日期，以及在办案件的过渡安排。",
        "estimate": true
      }
    ],
    process: {
      "detail": "OIRA 2026-10-23 审完 PERM 提案（要求修改后同意发布）；提案还没刊登，现行规则照旧。",
      "currentSummary": "OIRA 已审完，等待提案公布",
      "waitingFor": "DOL 公布提案和评论期限。"
    },
  },
  en: {
    title: 'PERM Reform: How Employers Recruit and Comply',
    short: 'PERM Labor Certification Reform',
    status: "OIRA review done · Awaiting proposal",
    effectLabel:
      "Not in effect · Current PERM rules unchanged",
    agency: 'DOL / ETA',
    documentId: '1205-AC29',
    tldr: "DOL plans to overhaul PERM, the first step of an employer-sponsored green card: how employers recruit, protections for laid-off U.S. workers and compliance rules. The White House’s OIRA finished its review on October 23 (cleared with changes); next, DOL publishes the formal proposal.",
    tags: ['H-1B to green card', 'PERM', 'Employer sponsorship'],
    summary:
      "DOL plans to update PERM recruitment channels, protections for laid-off U.S. workers, nondiscrimination and recordkeeping. OIRA finished its review October 23 with “Consistent with Change” (cleared after changes). Next, DOL publishes the proposal and a comment deadline.",
    audience:
      'Employees pursuing employer-sponsored green cards, and the employers filing PERM for them, including people currently in H-1B status.',
    caveat:
      'This is only about the labor certification step of a green card. It has nothing to do with the H-1B lottery and is separate from the #06 wage proposal (RIN 1205-AC30).',
    background:
      "PERM is the first step of an employment-based green card: the employer has to show it genuinely tried to hire U.S. workers and found no qualified one. The reform covers 20 CFR 656. DOL sent the proposal to the White House’s OIRA for review on September 14, 2026; the government’s rulemaking plan had aimed for July.\nOIRA finished on October 23 (rrid=1533011) with “Consistent with Change,” meaning it cleared publication after changes, without saying what changed. The proposal has not been published, and current PERM rules still apply.",
    teaser:
      'If recruitment rules are rewritten, the work and timing of preparing a PERM case change with them.',
    headline:
      'Green-card sponsorship may take more time on recruiting and records.',
    analysis:
      'Our view: the reform aims to make PERM recruiting look more like how companies really hire. If it goes that way, recruiting channels, how applications are taken and what records are kept may all change, and each case will likely cost employers more time and money; companies with recent layoffs will have more checking to do. The five items below are predictions from law firms and industry; the proposal will have the actual terms.',
    possibilities: {
      heading: 'Five changes practitioners expect',
      note: 'These five items are predictions by law firms and practitioners based on the government’s plan and recent enforcement; they are not published DOL terms. At least three already showed up in the Justice Department’s August 4, 2026 PERM settlement with OpenAI: DOJ found the company did not post PERM jobs on its public careers site, accepted only paper applications by mail and ran late-night radio ads; the settlement requires it to post on its own site and accept online applications.',
      items: [
        [
          'Drop the mandatory newspaper ad',
          'Stop requiring a print advertisement in a local newspaper. Print ads are a holdover from the 2005 rule, and most technical job seekers never see them.',
        ],
        [
          'Move to modern recruitment channels',
          'Require or allow social media, job boards and other current channels, while dropping outdated ones such as radio and television.',
        ],
        [
          'Stop requiring mailed resumes',
          'Stop treating “paper applications by mail only” as compliant recruitment, so a physical step does not screen applicants out.',
        ],
        [
          'Post roles on the company job page',
          'If an employer has its own careers page, PERM roles should appear there, not only in a newspaper or on the state job board.',
        ],
        [
          'Accept applications through the ATS',
          'If an employer uses an applicant tracking system, applicants should be able to apply through it rather than to a single mailbox or mailing address.',
        ],
      ],
    },
    impacts: [
      {
        title: 'For employers: more recruiting and recordkeeping',
        text: 'If minimum recruiting and recordkeeping standards go up, companies will need to change their process and keep more evidence. The proposal will show which steps and what cost.',
        examples: [
          'A company is preparing PERM for Chen. If the final rule requires fuller recruitment records, HR would need to compile more application and hiring data, and preparation would take longer.',
        ],
      },
      {
        title:
          'For companies with layoffs: stricter protections for U.S. workers',
        text: 'The plan says protections for laid-off U.S. workers will be stronger, but not how far back it looks, which jobs count or whether each worker must be notified. Companies that had layoffs can still file PERM.',
        examples: [
          'Lin’s company recently had layoffs and is about to start his PERM. With stronger protections for laid-off workers, the company may have to check related jobs more carefully; the proposal will set the scope.',
        ],
      },
      {
        title: 'For H-1B employees: green-card timing could slip',
        text: 'If employer preparation takes longer, the employee’s green-card timeline could shift. Existing H-1B status is unaffected.',
        examples: [
          'Wang works in H-1B status and has an employer commitment to start green-card sponsorship this year. If stricter preparation requirements apply to the case, the filing could slip; Wang’s H-1B status is unaffected.',
        ],
      },
    ],
    outlook:
      "OIRA is done; next comes DOL’s formal proposal. Watch for recruiting channels, notice and checks after layoffs, how long records must be kept and how cases already filed are handled.",
    scenarios: [
      {
        "name": "Review done; proposal pending",
        "headline": "Current rules still apply",
        "assumption": "OIRA has finished; DOL has not published the proposal yet.",
        "effects": "Employers keep preparing cases under current rules.",
        "signals": "Whether DOL and the Federal Register publish the proposal, and what it changes."
      },
      {
        name: 'Proposal published for comment',
        headline: 'Employers assess how the process would change',
        assumption: 'DOL publishes the terms and a comment period.',
        effects:
          'Employees and employers can size the preparation work against the text; new requirements apply only once a final rule takes effect.',
        signals:
          'Recruiting standards, layoff protections, recordkeeping and who it covers.',
      },
      {
        name: 'A final rule takes effect',
        headline: 'PERM processing adjusts to the final rule',
        assumption:
          'DOL finishes rulemaking and the final rule takes effect.',
        effects:
          'Whether new and pending cases must change depends on the final terms, transition rules and any court orders.',
        signals:
          'The start date, transition rules and how recruiting already done and cases already filed are treated.',
      },
    ],
    scope: [
      {
        label: 'What it covers',
        text: 'PERM labor certification under 20 CFR 656 (the first step of an employment green card).',
      },
      {
        label: 'Link to H-1B',
        text: 'It affects the later green-card step; the H-1B lottery and status are unchanged.',
      },
      {
        label: 'Where it stands',
        text: "Sent to OIRA September 14, cleared October 23; next comes the proposal and comment period.",
      },
    ],
    milestones: [
      {
        date: '2026 Unified Agenda',
        text: 'DOL listed the PERM reform in the government’s rulemaking plan, aiming to publish in July.',
      },
      {
        date: '2026-08-04',
        text: 'The Justice Department settled its PERM case against OpenAI, requiring the company to post roles on its career site and accept electronic applications.',
      },
      {
        date: '2026-09-14',
        text: 'The proposal went to the White House’s OIRA for review.',
      },
      {
        "date": "2026-10-23",
        "text": "OIRA finished review and cleared it with changes (Consistent with Change)."
      }
    ],
    next: [
      {
        "date": "Date unknown",
        "text": "DOL publishes the proposal, setting out recruiting channels, covered cases and the comment deadline."
      },
      {
        "date": "Date unknown",
        "text": "A final rule, start date and transition rules for pending cases.",
        "estimate": true
      }
    ],
    process: {
      "detail": "OIRA finished reviewing the PERM proposal on October 23, 2026 (cleared with changes). It has not been published; current rules still apply.",
      "currentSummary": "OIRA done; awaiting proposal",
      "waitingFor": "DOL’s proposal and comment deadline."
    },
  },
};
