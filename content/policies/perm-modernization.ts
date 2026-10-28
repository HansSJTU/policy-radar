import type { PolicyContent } from '../policy-types.ts';

export const permModernization: PolicyContent = {
  id: 'perm-modernization',
  path: 'H-1B',
  tone: 'blue',
  effectState: 'not-in-effect',
  checkedOn: "2026-10-27",
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
      "zh": "OIRA 10·23 结案记录 · Consistent with Change · RIN 1205-AC29",
      "en": "OIRA October 23 conclusion · Consistent with Change · RIN 1205-AC29"
    },
    {
      "href": "https://www.reginfo.gov/public/do/eoDetails?rrid=1532863",
      "zh": "OIRA 9·14 送审记录 · RIN 1205-AC29",
      "en": "OIRA September 14 submission · RIN 1205-AC29"
    },
    {
      "href": "https://www.reginfo.gov/public/do/eAgendaViewRule?pubId=202510&RIN=1205-AC29",
      "zh": "统一议程 · PERM 改革摘要",
      "en": "Unified Agenda · PERM reform abstract"
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
    }
  ],
  zh: {
    title: 'PERM 劳工认证拟改革招聘与雇主合规要求',
    short: 'PERM 劳工认证改革',
    status: "OIRA 已结案 · 等待公开提案",
    effectLabel: "尚未生效 · 现行 PERM 规则未变",
    agency: 'DOL / ETA',
    documentId: '1205-AC29',
    tldr: "DOL 拟更新 PERM 招聘、裁员保护及雇主合规要求。OIRA 于 10·23 以“Consistent with Change”结束提案发布前审查；截至本次核查尚未取得公开 NPRM，具体条款及生效日期未定。",
    tags: ['H-1B → 绿卡', 'PERM', '雇主担保'],
    summary:
      "DOL 拟更新 PERM 招聘渠道、被裁美国工人保护与雇主非歧视招聘及留档要求。OIRA 于 10·23 以“Consistent with Change”结束提案发布前审查；本次尚未取得公开 NPRM，具体修改、评论期限及生效安排仍待正文。",
    audience:
      '打算通过雇主担保办绿卡的员工，以及替员工办 PERM 的雇主，包括目前持 H-1B 的人。',
    caveat:
      '本项只涉及永久劳工认证（绿卡），与 H-1B 抽签改革无关，也不同于 #06 的工资等级提案（RIN 1205-AC30）。',
    reviewNote:
      "10·27 读取新的 OIRA 结案详情（rrid=1533011），按 RIN 检索交叉确认 9·14 收件、10·23 结案及“Consistent with Change”。旧待审链接已不再显示项目内容，当前待审队列不再列 AC29。联邦公报官方 RIN 查询仍未列公开 NPRM；DOL OFLC 公告原页被拒，替代读取仅取得旧公告清单，未确认最新部门公告，具体修改、评论期限、最终规则及过渡安排仍待正式正文。OIRA 结案不能替代提案发布或生效。",
    background:
      "PERM 是雇主替外籍员工办职业移民绿卡时，先要拿到的劳工认证。雇主必须证明自己认真招过美国人，但招不到合适人选。这项改革列在 20 CFR 656 之下，DOL 已于 2026-09-14 把拟议规则送交白宫 OIRA，做发布前审查。统一议程原定 2026 年 7 月发布拟议规则（NPRM）；10 月 14 日核查时，OIRA 仍列提案待审，联邦公报 RIN 查询未列公开正文。计划月份不等于发布日，更不等于生效日。\nOIRA 于 10·23 以“Consistent with Change”结束此次发布前审查，新结案详情为 rrid=1533011；原送审记录不再显示项目内容。这个行政审查结果不公开说明具体改了哪些条款。10·25 联邦公报官方 RIN 查询仍未列公开 NPRM，不能把结案当成提案已经发布或新要求已经生效。",
    teaser: '招聘方式一旦改写，雇主准备 PERM 的工作量和时间安排都会变。',
    headline: '绿卡担保的准备过程，可能要把更多时间花在招聘和留档上。',
    analysis:
      '我们的判断：改革的方向，是让 PERM 招聘更接近公司日常真实招人的做法。如果最终按这个方向落地，招聘渠道、申请接收方式和材料留存都可能变。雇主准备一案的工时和费用大概率上升。刚裁过员的企业，核查相关岗位和招聘记录也会更麻烦。下面列出的具体方向来自律所和业界的推测，不是已发布的条款。在 NPRM 正文出来之前，无法确定会新增哪些材料、会拖多久，也无法确定哪些已提交的案件会受影响。',
    possibilities: {
      heading: '业内推测的五种可能变化',
      note: '这五项是律所和业界根据议程表述与近期执法案例做出的推测。它们不是 DOL 已公布的条款，也不代表五项都会写入最终规则。其中至少三项已经出现在 2026-08-04 司法部与 OpenAI 的 PERM 和解里。司法部认定，该公司没有在公开招聘网站发布 PERM 职位，只接受纸质邮寄申请，还在深夜投放广播广告。和解要求它改为在官网发布，并接受电子申请。可见这些方向不只是纸上推演。',
      items: [
        [
          '取消强制性的报纸广告',
          '不再硬性要求在当地报纸刊登招聘广告。报纸是 2005 年规则留下的渠道，如今大多数技术类求职者根本不看。',
        ],
        [
          '改用现代招聘渠道',
          '要求或允许使用社交媒体、招聘网站等当代渠道，同时去掉广播、电视这类已经过时的渠道。',
        ],
        [
          '不再要求邮寄简历',
          '不再把“只能邮寄纸质简历”当成合规做法，避免用物理门槛把申请人挡在外面。',
        ],
        [
          '在公司招聘页面发布职位',
          '公司如果有自己的招聘页面，就要把 PERM 职位发在上面，而不是只发在报纸或州劳工局。',
        ],
        [
          '通过 ATS 接收申请',
          '公司如果使用申请人追踪系统（ATS），就要让申请人能通过系统投递，而不是只留一个邮箱或邮寄地址。',
        ],
      ],
    },
    impacts: [
      {
        title: '对雇主：招聘和留档的工作量可能增加',
        text: '如果最低招聘标准和记录要求提高，公司可能要调整招聘流程、保存更多证据。具体新增哪些步骤、要花多少钱，现在都还算不出来。',
        examples: [
          '一家企业准备为小陈办理 PERM。如果最终规则要求更完整的招聘记录，HR 就可能需要补充整理求职申请和招聘结果，准备时间也可能增加。这是假设要求提高后的影响；目前还不能认定必须补做某种广告或增加特定材料。',
        ],
      },
      {
        title: '对裁过员的企业：对美国工人的保护可能更严',
        text: '议程明确要加强对被裁美国工人的保护，但没有说清追溯多长时间、覆盖哪些岗位、要不要逐个通知。不能因此认为“只要裁过员就不能办 PERM”。',
        examples: [
          '小林的公司最近裁过员，又准备为他启动 PERM。议程把保护被裁美国工人列为改革方向，公司以后可能需要更详细地核查相关岗位情况；但目前没有新条款说明范围，不能直接得出公司现在不能办 PERM 的结论。',
        ],
      },
      {
        title: '对 H-1B 员工：绿卡时间表可能往后挪',
        text: '如果雇主准备一案要花更久，员工的绿卡申请计划可能顺延。这是条件性判断；送审本身不会取消现有的 H-1B 身份。',
        examples: [
          '小王持 H-1B 工作，雇主答应今年启动绿卡申请。如果未来更严格的准备要求适用于他的案件，雇主的提交计划可能推迟；不过这次送审没有改变他当前的 H-1B 身份，也不能据此算出一定会延期几个月。',
        ],
      },
    ],
    outlook:
      "OIRA 已结案，接下来等待 DOL 公开 NPRM。重点核对招聘渠道、裁员相关的通知与核查义务、留档年限，以及已提交案件的过渡安排；公开正文前不推断具体修改或生效日期。",
    scenarios: [
      {
        "name": "结案后等待公开提案",
        "headline": "现行规则继续适用",
        "assumption": "OIRA 已结束审查，DOL 尚未公开 NPRM 或仍在准备发布。",
        "effects": "雇主可继续按现行规则准备案件；结案标签没有公开拟议条款，不能据此添加具体义务。",
        "signals": "DOL 与联邦公报是否发布正式提案及具体修改。"
      },
      {
        name: 'NPRM 发布并开放评论',
        headline: '雇主开始评估流程怎么变',
        assumption: 'DOL 公布拟议条款和评论窗口。',
        effects: '员工和雇主可以对照正文估算准备量；提案发布不等于新要求生效。',
        signals: '招聘标准、裁员保护、材料留存和拟议的适用范围。',
      },
      {
        name: '最终规则生效',
        headline: '按最终适用范围调整 PERM 流程',
        assumption: 'DOL 走完规则制定程序，最终规则到达生效日。',
        effects:
          '新案和存量案件要不要调整，取决于最终条款、过渡安排和可能的法院命令。',
        signals: '生效日期、过渡条款，以及已经做完的招聘和已提交案件怎么处理。',
      },
    ],
    scope: [
      { label: '相关程序', text: '20 CFR 656 下的 PERM 永久劳工认证。' },
      {
        label: 'H-1B 关联',
        text: '主要影响后续的雇主担保绿卡，不直接改变 H-1B 抽签或身份资格。',
      },
      {
        label: '当前阶段',
        text: "9·14 送审，10·23 以 Consistent with Change 结案；公开 NPRM、评论期限及生效日期仍未核实。",
      },
    ],
    milestones: [
      {
        date: '2026 统一议程',
        text: 'DOL 列出 PERM 招聘、裁员保护及雇主合规的改革方向；原计划 7 月发布 NPRM。',
      },
      {
        date: '2026-08-04',
        text: '司法部与 OpenAI 达成 PERM 和解，要求其在官网发布职位并接受电子申请。',
      },
      { date: '2026-09-14', text: '拟议规则送交白宫 OIRA，进入发布前审查。' },
      {
        "date": "2026-10-23",
        "text": "OIRA 以 Consistent with Change 结束 9·14 送交的提案发布前审查；不是 NPRM 发布或新规生效。"
      }
    ],
    next: [
      {
        "date": "日期未定",
        "text": "OIRA 已于 10·23 结案；等待 DOL 公开 NPRM，确认招聘渠道、适用案件及评论期限。"
      },
      {
        "date": "日期未定",
        "text": "最终规则、生效日期和存量案件的过渡安排，要等后续文件才能明确。",
        "estimate": true
      }
    ],
    process: {
      "detail": "OIRA 于 2026-10-23 以 Consistent with Change 结束 PERM 提案发布前审查；本次未取得公开 NPRM，尚未生效。",
      "currentSummary": "OIRA 已结案，等待公开 NPRM",
      "waitingFor": "DOL 发布 NPRM 及评论期限；具体修改、最终规则和生效安排待定。"
    },
  },
  en: {
    title: 'PERM Reform Would Update Recruitment and Employer Compliance',
    short: 'PERM Labor Certification Reform',
    status: "OIRA review concluded · Public proposal awaited",
    effectLabel:
      "Not in effect · Current PERM rules unchanged",
    agency: 'DOL / ETA',
    documentId: '1205-AC29',
    tldr: "DOL proposes to revise PERM recruitment, layoff protections and employer compliance. OIRA concluded prepublication review on October 23 as “Consistent with Change.” No public NPRM was obtained in this check; detailed provisions and an effective date remain undetermined.",
    tags: ['H-1B to green card', 'PERM', 'Employer sponsorship'],
    summary:
      "DOL proposes to revise PERM recruitment channels, protections for laid-off U.S. workers, nondiscrimination and employer recordkeeping. OIRA concluded prepublication review October 23 as “Consistent with Change.” No public NPRM was obtained in this check; specific revisions, a comment deadline and implementation arrangements await published text.",
    audience:
      'Employees pursuing employer-sponsored green cards, and the employers filing PERM for them, including people currently in H-1B status.',
    caveat:
      'This concerns permanent labor certification only. It is unrelated to H-1B cap selection and separate from the #06 wage-level proposal, RIN 1205-AC30.',
    reviewNote:
      "On October 27, the new OIRA conclusion detail (rrid=1533011) and RIN search confirmed receipt on September 14, conclusion on October 23 and “Consistent with Change.” The old pending link no longer displays this record, and AC29 is absent from the current pending queue. The official Federal Register RIN query still lists no public NPRM. The DOL OFLC announcement page was blocked, and alternative retrieval yielded only an older announcement list without verifying the latest agency updates; specific revisions, comment deadlines, a final rule and transition provisions await published text. OIRA conclusion is neither proposal publication nor implementation.",
    background:
      "PERM is the labor certification an employer must obtain before sponsoring a foreign worker for an employment-based green card: the employer has to show it recruited U.S. workers in good faith and found no qualified person. The reform sits under 20 CFR 656, and DOL sent the proposed rule to the White House OIRA for prepublication review on September 14, 2026. The Unified Agenda originally targeted July 2026 for an NPRM; the October 14 check still showed the proposal pending at OIRA, with no published text listed in the Federal Register RIN query. A target month is not a publication date, and even less an effective date.\nOIRA concluded prepublication review on October 23 as “Consistent with Change,” under the new detail rrid=1533011; the old submission link no longer displays the record. The conclusion does not disclose which provisions changed. The official Federal Register RIN query on October 25 still lists no public NPRM. Conclusion cannot be treated as publication of a proposal or implementation of new requirements.",
    teaser:
      'If recruitment rules are rewritten, the work and timing of preparing a PERM case change with them.',
    headline:
      'Preparing a green-card sponsorship case may take more time on recruitment and files.',
    analysis:
      'Our assessment: the direction of the reform is to make PERM recruitment resemble how a company actually hires. If a final rule follows that direction, recruitment channels, how applications are accepted and what records are kept could all change, and the staff time and cost per case would likely rise. Employers that recently laid people off could also face more complex checks of related positions and recruitment records. The specific directions listed below come from law-firm and practitioner expectations, not published terms. Until an NPRM appears, no one can establish which new documents would be required, how long a case would be delayed, or which pending cases would be affected.',
    possibilities: {
      heading: 'Five changes practitioners expect',
      note: 'These five items come from law-firm and practitioner analysis based on the agenda language and recent enforcement cases. They are not published DOL terms, and not all five are likely to appear in a final rule. At least three already appeared in the Justice Department’s August 4, 2026 PERM settlement with OpenAI: DOJ found the company did not post PERM positions on its public job site, accepted only paper applications by mail, and ran late-night radio ads; the settlement requires it to post on its career site and accept electronic applications. The direction is not merely theoretical.',
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
        title: 'For employers: more recruitment and recordkeeping work',
        text: 'Higher minimum recruitment and recordkeeping standards could require process changes and additional evidence. Which new steps would be required, and what they would cost, cannot yet be calculated.',
        examples: [
          'A company is preparing PERM sponsorship for Chen. If a final rule requires fuller recruitment records, HR may need more time to organize applications and recruitment outcomes. This illustrates a possible effect of stricter requirements; no specific additional advertisement or document has yet been established.',
        ],
      },
      {
        title:
          'For employers with layoffs: U.S.-worker protections could tighten',
        text: 'The agenda expressly calls for stronger protections for laid-off U.S. workers, but does not say how far back the lookback runs, which positions are covered, or whether each worker must be notified. It does not establish that a layoff bars a PERM filing.',
        examples: [
          'Lin’s company recently laid off employees and is preparing to start PERM sponsorship. The agenda identifies protection of laid-off U.S. workers as a reform objective, which could mean more detailed checks of relevant positions. The scope is not yet specified, so this does not establish that the company cannot pursue PERM now.',
        ],
      },
      {
        title: 'For H-1B employees: green-card timing could slip',
        text: 'If employer preparation takes longer, the employee’s green-card plan could shift. That is a conditional assessment; submission for review does not cancel existing H-1B status.',
        examples: [
          'Wang works in H-1B status and has an employer commitment to start green-card sponsorship this year. If stricter preparation requirements eventually apply to the case, the filing plan could shift. This submission for review has not changed Wang’s H-1B status and cannot establish a delay of any particular length.',
        ],
      },
    ],
    outlook:
      "With OIRA review concluded, await a public DOL NPRM. Check recruitment channels, layoff-related notice and review duties, record-retention periods and transition arrangements for filed cases. Do not infer specific revisions or an effective date before published text.",
    scenarios: [
      {
        "name": "Review concluded; public proposal awaited",
        "headline": "Current rules continue to apply",
        "assumption": "OIRA has completed review, while DOL has not publicly issued an NPRM or is preparing publication.",
        "effects": "Employers can prepare under current rules. The conclusion label does not disclose proposed terms or establish specific new obligations.",
        "signals": "A formal DOL/Federal Register proposal and the actual revisions."
      },
      {
        name: 'An NPRM opens for comment',
        headline: 'Employers assess how the process would change',
        assumption: 'DOL publishes proposed terms and a comment window.',
        effects:
          'Employees and employers can size the preparation work against the text. Publication of a proposal does not make new requirements effective.',
        signals:
          'Recruitment standards, layoff protections, recordkeeping and proposed coverage.',
      },
      {
        name: 'A final rule takes effect',
        headline: 'PERM processing adjusts within the final scope',
        assumption:
          'DOL completes rulemaking and the final rule reaches its effective date.',
        effects:
          'Whether new and existing cases must change depends on the final terms, transition provisions and any court orders.',
        signals:
          'The effective date, transition terms, and how recruitment already done and cases already filed are treated.',
      },
    ],
    scope: [
      {
        label: 'Relevant process',
        text: 'PERM permanent labor certification under 20 CFR 656.',
      },
      {
        label: 'H-1B connection',
        text: 'Mainly the later employer-sponsored green-card step, not a direct change to cap selection or H-1B eligibility.',
      },
      {
        label: 'Current stage',
        text: "Submitted September 14; OIRA concluded review October 23 as Consistent with Change. A public NPRM, comment deadline and effective date remain unverified.",
      },
    ],
    milestones: [
      {
        date: '2026 Unified Agenda',
        text: 'DOL outlined PERM recruitment, layoff-protection and employer-compliance reforms, with an original July target for an NPRM.',
      },
      {
        date: '2026-08-04',
        text: 'The Justice Department settled its PERM case against OpenAI, requiring the company to post roles on its career site and accept electronic applications.',
      },
      {
        date: '2026-09-14',
        text: 'The proposed rule entered White House OIRA prepublication review.',
      },
      {
        "date": "2026-10-23",
        "text": "OIRA concluded the proposal submitted September 14 as Consistent with Change; this is neither NPRM publication nor a new rule taking effect."
      }
    ],
    next: [
      {
        "date": "Date unknown",
        "text": "OIRA concluded review October 23. Await a public DOL NPRM specifying recruitment channels, covered cases and the comment deadline."
      },
      {
        "date": "Date unknown",
        "text": "A final rule, effective date and transition provisions for existing cases remain to be determined.",
        "estimate": true
      }
    ],
    process: {
      "detail": "OIRA concluded PERM prepublication review on October 23, 2026 as Consistent with Change. No public NPRM was obtained in this check; the reform is not in effect.",
      "currentSummary": "OIRA concluded; public NPRM awaited",
      "waitingFor": "A DOL NPRM and comment deadline; specific changes, a final rule and implementation arrangements remain undetermined."
    },
  },
};
