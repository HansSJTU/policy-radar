import type { PolicyContent } from '../policy-types.ts';

export const durationStatus: PolicyContent = {
  id: 'duration-status',
  path: 'F-1',
  tone: 'amber',
  effectState: 'not-in-effect',
  checkedOn: '2026-09-22',
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
      href: 'https://www.federalregister.gov/documents/2026/07/17/2026-14439/establishing-a-fixed-time-period-of-admission-and-an-extension-of-stay-procedure-for-nonimmigrant',
      zh: '2026 最终规则',
      en: '2026 final rule',
    },
    {
      href: 'https://www.federalregister.gov/documents/2025/08/28/2025-16554/establishing-a-fixed-time-period-of-admission-and-an-extension-of-stay-procedure-for-nonimmigrant',
      zh: '2025 拟议规则',
      en: '2025 proposed rule',
    },
    {
      href: 'https://forms.mad.uscourts.gov/courtlist.html',
      zh: '法院官方日历',
      en: 'Official court calendar',
    },
    {
      href: 'https://www.courtlistener.com/docket/74661796/feed/',
      zh: '法院案卷更新（含第 51、52 项）',
      en: 'Court docket updates (including entries 51 and 52)',
    },
    {
      href: 'https://www.nafsa.org/sites/default/files/media/document/PI%20Hearing%20Court%20Transcript.pdf#page=70',
      zh: '9·03 官方庭审记录（NAFSA 托管；第 70 页）',
      en: 'September 3 official hearing transcript (NAFSA-hosted; p. 70)',
    },
    {
      href: 'https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.46.1.pdf',
      zh: '政府 9·02 拟议反对意见附件',
      en: 'Government’s September 2 proposed opposition',
    },
    {
      href: 'https://www.uscardforum.com/t/topic/431784',
      zh: '美卡论坛规则讨论',
      en: 'USCardForum rule discussion',
    },
    {
      href: 'https://www.uscardforum.com/t/topic/525892',
      zh: '美卡论坛诉讼讨论',
      en: 'USCardForum litigation discussion',
    },
    {
      href: 'https://oiss.rice.edu/dhs-final-rule-elimination-duration-status-new-academic-mobility-restrictions',
      zh: 'Rice：博士退出、硕士 OPT 与学位限制说明',
      en: 'Rice: PhD exit, master’s OPT and degree restrictions',
    },
    {
      href: 'https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.51.0.pdf',
      zh: '9·14 初步禁令正文（第 51 项）',
      en: 'September 14 preliminary injunction (entry 51)',
    },
    {
      href: 'https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.50.0.pdf',
      zh: '9·14 法院意见（第 50 项；第 46—48 页全国范围）',
      en: 'September 14 opinion (entry 50; nationwide scope at pp. 46–48)',
    },
    {
      href: 'https://www.durbin.senate.gov/newsroom/press-releases/durbin-blumenthal-padilla-whitehouse-jayapal-raskin-introduce-cra-resolution-of-disapproval-regarding-regulation-that-changes-how-international-students-and-journalists-maintain-immigration-status',
      zh: 'Durbin 官网 · 9·14 CRA 决议公告',
      en: 'Senator Durbin: September 14 CRA resolution announcement',
    },
    {
      href: 'https://www.durbin.senate.gov/download/cra-on-student-visa-rule&download=1',
      zh: 'CRA 联合否决决议文本（议员官网）',
      en: 'CRA joint resolution text (senator website)',
    },
  ],
  zh: {
    title: 'D/S 最终规则被法院全国暂缓',
    short: 'D/S 固定期限',
    status: '法院全国暂缓 · 原 9·15 生效日已推迟',
    effectLabel: '尚未生效 · 法院全国暂缓',
    agency: 'DHS / ICE',
    documentId: '最终规则 2026-14439',
    tldr: '法院在 9 月 14 日全国暂缓了 DHS 取消 D/S 的最终规则：规则不会在原定的 9 月 15 日生效，DHS 也不得继续实施。这项规则原本要把 F/J 的停留改成通常不超过四年的固定期限，并增加延期和学业流动限制；这些要求现在都不执行。',
    tags: ['F-1', 'CPT', 'OPT'],
    summary:
      '法院在 9 月 14 日全国暂缓了 DHS 取消 D/S 的最终规则。规则不会在原定的 9 月 15 日生效，DHS 也不得继续实施。规则原本要改成通常不超过四年的固定停留期限，并加严延期和学业流动；这些要求现在都暂停执行。',
    audience:
      '受最终规则影响的 F/J/I 身份持有人、他们的家属、学校和雇主。救济范围不限原告成员学校。',
    caveat:
      '法院暂缓的是整项最终规则，但不是永久撤销，也不会自动撤销 8 月那份独立的 CPT 行政指引。',
    reviewNote:
      '9·22 读取第 51 项禁令及公开案卷镜像，最新可见仍为 9·14 第 52 项、10·02 状态会议通知；镜像可能滞后。9·20 读取议员官网 CRA 公告及决议文本，文本未填决议编号，后续表决与成法进度未核实。不得把提出决议理解为规则已撤销。',
    background:
      '麻省联邦法院在 2026-09-14 美东下午 4:55 签发第 51 号初步禁令。命令同时依据 APA § 705 推迟整项最终规则生效，并禁止 DHS/ICE 采取任何进一步实施行动。这一状态持续到法院另有命令或案件实体审理结束，没有设到期日；原定 9·15 生效的安排已经作废。\n第 50 号意见第 46—48 页写明，这项救济覆盖全国，不只限于原告成员学校；第 42 页认定该最终规则在 APA 意义上属于 arbitrary and capricious。法院还没有永久撤销规则，也没有作出有利于原告的简易判决；相关请求被无偏见驳回，可以再次提出。\n第 52 项另定 10·02 中午 12 点在波士顿第 1 法庭开现场状态会议，这个日期不是新的生效日。9·22 读取的公开案卷镜像仍止于第 52 项，未见上诉记录；镜像可能滞后。\n另据议员官网 9·14 公告，Durbin 等参议员已提出 CRA 联合否决决议，拟撤销这项最终规则，Jayapal 和 Raskin 牵头众议院配套案。提出决议本身不撤销规则，也不是法院裁定；后续表决和成法进度仍待核实。',
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
      '接下来要看法院是否改动暂缓令、政府是否上诉，以及 10 月 2 日状态会议怎么安排。状态会议不是新生效日，初步救济也不等于最终胜诉。',
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
        text: '直到法院另行下令或案件实体审理结束；10·02 只是状态会议。',
      },
      {
        label: '独立 CPT 指引',
        text: '本命令只针对最终规则 2026-14439，不会自动撤销 8 月的 CPT 备忘录或各校自己的要求。',
      },
    ],
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
        text: '政府随超页申请附上拟议反对意见，请求法院驳回 APA § 705 暂缓与初步禁令。政府还反对在行政记录提交前作出简易判决。',
      },
      {
        date: '2026-09-03',
        text: '法院听证后留待裁定。庭审记录第 70 页显示，法官希望最迟 9·14 决定，也可能先发短期 TRO；这些都不是已签发的命令。',
      },
      {
        date: '2026-09-14',
        text: '法院签发初步禁令，全国推迟整项规则生效并禁止继续实施；并非永久撤销。',
      },
      {
        date: '2026-09-14',
        text: '议员宣布提出 CRA 联合否决决议，拟撤销最终规则；提出不等于通过或成法。',
      },
    ],
    next: [
      {
        date: '2026-10-02',
        text: '中午 12 点，波士顿第 1 法庭现场状态会议（案卷第 52 项）；不是新生效日。',
      },
      {
        date: '日期未定',
        text: '等待后续法院命令或实体裁判；目前没有新的规则生效日期。',
      },
    ],
    process: {
      detail:
        '法院在 9·14 依据 APA § 705 全国推迟整项最终规则生效，并禁止 DHS/ICE 继续实施，直到另行命令或实体审理结束。原 9·15 生效安排已经改变。',
      currentSummary: '全国暂缓已签发，生效日已推迟',
      waitingFor:
        '10·02 中午 12 点状态会议；关注后续法院命令及上诉，不是新生效日。',
    },
  },
  en: {
    title: 'Court Stays the D/S Final Rule Nationwide',
    short: 'D/S Fixed Admission Period',
    status: 'Nationwide court stay · September 15 effective date postponed',
    effectLabel: 'Not in effect · Nationwide court stay',
    agency: 'DHS / ICE',
    documentId: 'Final Rule 2026-14439',
    tldr: 'On September 14 the court postponed the DHS rule ending D/S nationwide and barred further implementation, so the rule will not take effect on September 15 as scheduled. It would replace D/S for F and J status with fixed periods generally capped at four years and add extension and academic-mobility restrictions; none of those requirements apply while the stay lasts.',
    tags: ['F-1', 'CPT', 'OPT'],
    summary:
      'On September 14 the court postponed the DHS rule ending D/S nationwide and barred further implementation. It will not take effect on September 15 as scheduled. The rule would replace D/S for F and J status with fixed periods generally capped at four years and add extension and academic-mobility restrictions; those requirements are stayed.',
    audience:
      'F/J/I holders and related dependents, schools and employers covered by the rule; relief is not limited to plaintiff-member schools.',
    caveat:
      'This nationwide stay covers the entire final rule, not permanent vacatur. It does not automatically rescind separate CPT guidance.',
    reviewNote:
      'The entry 51 injunction and public docket mirror were read September 22; the latest visible record remains September 14 entry 52 scheduling the October 2 conference. The mirror may lag. The senator’s CRA announcement and resolution text were read September 20; the text leaves the resolution number blank, and subsequent votes or enactment were not verified. Introduction does not mean repeal.',
    background:
      'At 4:55 p.m. ET on September 14, 2026, the District of Massachusetts issued docket entry 51, which both postpones the entire final rule under APA § 705 and preliminarily enjoins DHS/ICE from taking any further implementation action until a further court order or resolution on the merits, with no expiration date. The September 15 effective date is postponed.\nOpinion 50, pages 46–48, expressly grants nationwide relief, not relief limited to plaintiff-member schools, and page 42 holds the final rule arbitrary and capricious under the APA. The court did not permanently vacate the rule or grant summary judgment; those requests were denied without prejudice to renewal.\nDocket entry 52 schedules an in-person status conference for October 2 at noon in Courtroom 1, Boston. That is not a new effective date. The public docket mirror read on September 22 still ended at entry 52, with no visible notice of appeal; the mirror may lag.\nSeparately, a September 14 announcement from Senator Durbin reports introduction of a CRA joint resolution to disapprove this final rule, with Jayapal and Raskin leading the House companion. Introduction alone does not repeal the rule and is not a court ruling; subsequent votes and enactment remain unverified.',
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
      'Watch for changes to the stay, any government appeal, and the October 2 status conference. The conference is not an effective date, and preliminary relief is not a final merits victory.',
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
        text: 'Until further court order or resolution on the merits; October 2 is only a status conference.',
      },
      {
        label: 'Separate CPT guidance',
        text: 'The order concerns final rule 2026-14439; it does not automatically rescind the August CPT memoranda or independent university requirements.',
      },
    ],
    milestones: [
      { date: '2025-08-28', text: 'DHS published the proposed rule.' },
      { date: '2026-07-17', text: 'DHS published the final rule.' },
      {
        date: '2026-08-18',
        text: 'A coalition of universities and other plaintiffs filed suit in federal court in Massachusetts.',
      },
      {
        date: '2026-08-31',
        text: 'The court extended the government response deadline to September 2; the September 3 preliminary-injunction hearing remained on the calendar.',
      },
      {
        date: '2026-09-02',
        text: 'The government attached its proposed opposition to a motion for leave to exceed the page limit, asking the court to deny APA § 705 relief and a preliminary injunction and opposing summary judgment before the administrative record is filed.',
      },
      {
        date: '2026-09-03',
        text: 'After hearing arguments, the court took the request under advisement. Transcript p. 70 records a hoped-for decision by September 14 and a possible brief TRO, neither an issued order.',
      },
      {
        date: '2026-09-14',
        text: 'The court issued a preliminary injunction postponing the entire rule nationwide and barring further implementation; this is not permanent vacatur.',
      },
      {
        date: '2026-09-14',
        text: 'Lawmakers announced introduction of a CRA joint resolution to disapprove the rule; introduction is not passage or enactment.',
      },
    ],
    next: [
      {
        date: '2026-10-02',
        text: 'In-person status conference at noon, Courtroom 1, Boston (docket entry 52); not a new effective date.',
      },
      {
        date: 'Date unknown',
        text: 'Await further court orders or a merits decision; no new effective date is set.',
      },
    ],
    process: {
      detail:
        'On September 14, the court postponed the entire final rule nationwide under APA § 705 and barred DHS/ICE from implementation until further order or resolution on the merits. The September 15 effective date is postponed.',
      currentSummary: 'Nationwide stay issued; effective date postponed',
      waitingFor:
        'October 2 status conference at noon; monitor later court orders and appeals. This is not an effective date.',
    },
  },
};
