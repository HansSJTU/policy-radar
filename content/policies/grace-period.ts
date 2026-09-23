import type { PolicyContent } from '../policy-types.ts';

export const gracePeriod: PolicyContent = {
  id: 'grace-period',
  path: 'H-1B',
  tone: 'blue',
  effectState: 'not-in-effect',
  checkedOn: '2026-09-22',
  commentUrl: 'https://www.regulations.gov/commenton/USCIS-2026-0364-0001',
  related: ['h1b-reform', 'h4-ead', 'duration-status'],
  process: {
    kind: 'federal-rulemaking',
    lastCompletedStage: 2,
    activeStage: 3,
    nextStage: 4,
  },
  sources: [
    {
      href: 'https://www.govinfo.gov/content/pkg/FR-2026-09-11/pdf/2026-18631.pdf',
      zh: 'Federal Register NPRM 正式版（9·11）',
      en: 'Federal Register published NPRM (September 11)',
    },
    {
      href: 'https://public-inspection.federalregister.gov/2026-18631.pdf',
      zh: 'Federal Register NPRM 预览稿（9·10）',
      en: 'Federal Register NPRM preview (September 10)',
    },
    {
      href: 'https://www.reginfo.gov/public/do/eoDetails?rrid=1496261',
      zh: 'OIRA 完成记录',
      en: 'OIRA completion record',
    },
    {
      href: 'https://www.fragomen.com/insights/united-states-dhs-proposal-to-eliminate-60-day-nonimmigrant-grace-period-clears-federal-review.html',
      zh: 'Fragomen 8·28 更新',
      en: 'Fragomen August 28 update',
    },
    {
      href: 'https://www.uscardforum.com/t/topic/523657',
      zh: '美卡论坛讨论',
      en: 'USCardForum discussion',
    },
  ],
  zh: {
    title: '失业后的最长 60 天宽限期拟取消',
    short: '取消失业后 60 天宽限期',
    status: '正式提案 · 评论截至 11 月 10 日',
    effectLabel: '尚未生效 · 现行规则未变',
    agency: 'DHS / USCIS',
    documentId: '1615-AD22',
    tldr: 'DHS 打算取消 E-1、E-2、E-3、H-1B、H-1B1、L-1、O-1 和 TN 等身份在雇佣提前终止后的最长 60 天酌情宽限期。这项提案不涉及 F-1 完成学业后的宽限期。',
    tags: ['H-1B 失业', '换雇主', '转身份'],
    summary:
      '9·11 进展（9·22 核对）：DHS 已正式发布拟议规则公告（NPRM）。提案要取消 H-1B、H-1B1、E-1、E-2、E-3、L-1、O-1、TN 持有人及其家属在主申请人雇佣提前终止后的最长 60 天酌情宽限期。公众评论截止到 11·10 美东当日午夜前。这项提案尚未生效，现行规则没变，也不涉及 F-1 完成学业后的宽限期。',
    audience:
      '雇佣或相关活动提前终止的 E-1、E-2、E-3、H-1B、H-1B1、L-1、O-1、TN 持有人及其家属。',
    caveat:
      '这只是提案，现行规则没有变。即使最终按原稿生效，如果你还有别的合法留美依据，也不属于一律要立刻离境。F-1 毕业后的宽限期是另一套规则。',
    background:
      '2026-18631 在 9 月 10 日进入公开预览，9 月 11 日正式刊登于 91 FR 57807，案卷号 USCIS-2026-0364。提案要删除 8 CFR 214.1(l)(2)，并相应修改对 compelling-circumstances EAD 的引用。正式版写明公众评论截止到 2026 年 11 月 10 日美东当日午夜前。最终规则和生效日期都还没定。',
    teaser: '失业后的缓冲若缩小，换雇主、身份衔接与家庭安排都可能更急。',
    headline: '裁员后的时间缓冲，可能成为留美路径更脆弱的一环。',
    analysis:
      '如果这 60 天酌情宽限期被取消，失业的影响会更快传到身份和家庭安排上。对靠雇主维持身份的人来说，公司变化的速度和个人能反应的时间，会越来越对不上。',
    impacts: [
      {
        title: '对员工：突发裁员的应对窗口可能缩短',
        text: '找新雇主、准备申请材料、安排离境都要时间。缓冲一少，这几件事就得同时做。',
        examples: [
          '小陈持 H-1B 被裁了，本来打算用最长 60 天的宽限期来找新工作。但如果提案把这个宽限期取消了，他就没法再靠这条规定留在美国慢慢找。所以这里变的是失业后能合法待多久，跟公司愿不愿意面试他没关系。',
        ],
      },
      {
        title: '对换工作：衔接安排更影响风险承受力',
        text: '换工作的空档期会变得更敏感。企业配合的节奏、材料准备的速度，都会直接决定风险大小。',
        examples: [
          '小李被裁后找到了愿意接收的新公司，但公司准备 H-1B 申请需要时间。本来宽限期可以给他争取一些缓冲时间。但如果宽限期被取消，就算拿到了 offer，等申请材料准备好之前他也待不下去。所以新公司动作快不快，直接决定他能不能顺利转过去。',
          '小李被裁后想申请学校，从工作身份转成学生身份。但等学校录取通知、准备身份转换材料都需要时间。如果宽限期没了，他就不能靠着这条规定留在美国等手续办完。所以除了能不能被录取，他还得操心等待期间身份怎么解决。',
        ],
      },
      {
        title: '对家庭：主申请人的变化会传导到全家',
        text: '配偶的工作、孩子的学业、住在哪里，可能同时受影响。具体影响多大，还要看每位家庭成员各自的身份和到期日。',
        examples: [
          '小王自己是工作身份，配偶和孩子是家属身份，一家人在美国生活。如果失业后的宽限期被取消，依赖这段缓冲时间的家庭就得更早做打算——要么转身份，要么准备离境。这会影响到孩子要不要继续在原学校上学、房子要不要续租，不光是小王一个人找工作时间表的问题。',
        ],
      },
    ],
    outlook:
      '接下来要看公众评论会不会让 DHS 改方案，以及最终规则怎么生效、怎么过渡。提案已经写明要取消这段缓冲，但不能把提案当成现行要求。',
    scenarios: [
      {
        name: '取消现有缓冲',
        headline: '突发失业更难留出从容安排的时间',
        assumption: '提案取消最长 60 天酌情宽限，而且没有相当的替代机制。',
        effects:
          '雇佣关系一变，身份衔接的压力来得更快。家庭安排和企业准备的速度会更重要。',
        signals: 'NPRM 对身份、雇佣终止和后续申请的具体处理。',
      },
      {
        name: '保留特定例外',
        headline: '风险可能按失业原因和个人条件分化',
        assumption: '文本保留部分人群、情形或过渡期间的缓冲。',
        effects:
          '在例外范围内的人还有应对时间；范围外的人只能靠提前安排，没法用一个天数概括。',
        signals: '例外对象、证明要求、裁量标准和过渡条款。',
      },
      {
        name: '暂未推进',
        headline: '现行规则下的缓冲继续发挥作用',
        assumption: '提案没有定稿，或者最终没有生效。',
        effects:
          '近期安排仍按现行规则判断，但企业裁员、员工转岗时会更多考虑未来的变化。',
        signals: '最终规则、撤回记录或后续修订。',
      },
    ],
    scope: [
      {
        label: '涉及身份',
        text: 'E-1、E-2、E-3、H-1B、H-1B1、L-1、O-1、TN，以及依赖其身份的家属，包括 H-4、L-2、E 家属、O-3、TD。',
      },
      { label: '适用事件', text: '雇佣提前终止，不是所有签证到期或失业情形。' },
      {
        label: '家属失业',
        text: '家属自己失业，不会让主申请人或家属因此失去身份。这里针对的是主申请人的雇佣或相关活动结束。',
      },
      {
        label: '10 天规则',
        text: '签证有效期前后另有一段最长 10 天的停留期。它不等于失业宽限期，也替代不了有效期还没到就失业时的那 60 天。',
      },
      { label: '不要混淆', text: 'F-1 完成学业后的宽限期属于另一套规则。' },
    ],
    milestones: [
      { date: '2026-08-06', text: '提案送交 OIRA。' },
      { date: '2026-08-27', text: 'OIRA 完成审查并带修改放行。' },
      {
        date: '2026-09-10',
        text: 'NPRM 预览稿公开，明确八类工作身份及其家属的适用范围。',
      },
      {
        date: '2026-09-11',
        text: 'NPRM 正式刊登，评论截止日确认为 11 月 10 日；尚未生效。',
      },
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
    process: {
      detail:
        'NPRM 在 9 月 11 日正式刊登，公众评论期到 11 月 10 日。目前还没有最终规则。',
      currentSummary: 'NPRM 已发布，公众评论期内',
      waitingFor:
        '公众评论在 11 月 10 日美东当日午夜前截止。之后要关注最终规则和生效安排。',
    },
  },
  en: {
    title: 'Proposed End to the Up-to-60-Day Grace Period After Job Loss',
    short: 'Ending the 60-Day Grace Period',
    status: 'Proposed rule · Comments due November 10',
    effectLabel: 'Not in effect · Current rule unchanged',
    agency: 'DHS / USCIS',
    documentId: '1615-AD22',
    tldr: 'DHS plans to eliminate the discretionary grace period of up to 60 days after early termination of employment for E-1, E-2, E-3, H-1B, H-1B1, L-1, O-1, TN, and related classifications. The proposal does not concern the F-1 post-completion grace period.',
    tags: ['H-1B job loss', 'Employer change', 'Change of status'],
    summary:
      'September 11 development (checked September 22): DHS published its Notice of Proposed Rulemaking (NPRM). It would remove the discretionary grace period of up to 60 days for H-1B, H-1B1, E-1, E-2, E-3, L-1, O-1 and TN holders and their dependents after the principal’s employment ends early. Public comments are due before midnight Eastern Time on November 10. It is not in effect; current rules remain unchanged, and the F-1 post-completion grace period is separate.',
    audience:
      'E-1, E-2, E-3, H-1B, H-1B1, L-1, O-1 and TN workers whose employment or qualifying activity ends early, and their dependents.',
    caveat:
      'This is a proposal; current rules remain unchanged. If finalized as drafted, people otherwise authorized to remain lawfully would not all have to depart immediately. The F-1 post-completion grace period is separate.',
    background:
      'Document 2026-18631 entered public inspection September 10 and was published September 11 at 91 FR 57807; docket USCIS-2026-0364. It would remove 8 CFR 214.1(l)(2) and make a conforming reference change for compelling-circumstances EADs. The published version sets the comment deadline at November 10, 2026, before midnight Eastern Time. No final rule or effective date is set.',
    teaser:
      'A shorter post-employment buffer could make employer changes, status transitions, and family arrangements more urgent.',
    headline:
      'The time buffer after a layoff could become a more fragile part of the U.S. pathway.',
    analysis:
      'If the discretionary grace period of up to 60 days is removed, job loss could affect status and family arrangements sooner. For people whose status depends on an employer, the risk of a mismatch between company decisions and personal response time could rise.',
    impacts: [
      {
        title: 'For workers: less time to respond to an unexpected layoff',
        text: 'Finding a new employer, preparing filings, and planning departure all take time. With a smaller buffer, several tasks may need to happen at once.',
        examples: [
          'After an H-1B layoff, Chen plans to look for another employer during an applicable discretionary grace period of up to 60 days. Removing that provision would mean Chen could no longer rely on it for the planned stay while job hunting. The change concerns the status buffer after losing employment, not access to interviews.',
        ],
      },
      {
        title: 'For job changes: transition planning affects risk',
        text: 'During a job change, the gap between the end of one employment relationship and the start of the next arrangement may matter more. Coordination costs for employers and filing materials could also rise.',
        examples: [
          'Li finds a new employer after a layoff, but the company still needs time to prepare the H-1B petition. An applicable grace period could provide a buffer during that wait. If removed, an offer would not replace the lost basis for relying on that period, making filing readiness more consequential for the move.',
          'After a layoff, Li plans to apply to school and change from work to student status. Admission and immigration paperwork take time. Removing the employment-related grace period means Li cannot rely on it as the buffer for those preparations. Admission and permission to stay during the wait are separate issues.',
        ],
      },
      {
        title: 'For families: the principal worker’s change affects everyone',
        text: 'A spouse’s job, children’s schooling, and housing arrangements may all be affected. The magnitude still depends on each family member’s status and actual expiration date.',
        examples: [
          'Wang lives in the US with a spouse and children in dependent status. Removing the grace-period buffer after job loss could require the family to address status or departure plans sooner. That could affect schooling and lease renewal as well as Wang’s job search.',
        ],
      },
    ],
    outlook:
      'Watch whether public comments lead DHS to revise the proposal and what effective-date and transition terms appear in any final rule. The proposed text specifies removal of the buffer but does not change current requirements.',
    scenarios: [
      {
        name: 'Current buffer removed',
        headline:
          'Unexpected unemployment leaves less time for deliberate planning',
        assumption:
          'The proposal removes the discretionary grace period of up to 60 days without a comparable replacement.',
        effects:
          'A change in employment may create status-transition pressure sooner, making family planning and employer preparation speed more important.',
        signals:
          'The NPRM’s specific treatment of status, employment termination, and later filings.',
      },
      {
        name: 'Specific exceptions retained',
        headline:
          'Risk varies by reason for job loss and personal circumstances',
        assumption:
          'The text preserves a buffer for some people, situations, or transition periods.',
        effects:
          'People covered by an exception may retain time to respond. Others would depend more on advance planning, and no single number would describe everyone.',
        signals:
          'Covered exceptions, evidence requirements, discretion standards, and transition terms.',
      },
      {
        name: 'No further action yet',
        headline: 'The current rule continues to provide a buffer',
        assumption: 'The proposal is not finalized or does not take effect.',
        effects:
          'Near-term decisions would continue under the current rule, though employers and workers may pay more attention to future changes during layoffs and job transitions.',
        signals: 'A final rule, withdrawal, or subsequent revision.',
      },
    ],
    scope: [
      {
        label: 'Covered statuses',
        text: 'E-1, E-2, E-3, H-1B, H-1B1, L-1, O-1 and TN, plus their dependents, including H-4, L-2, E dependents, O-3 and TD.',
      },
      {
        label: 'Covered event',
        text: 'Early termination of employment, not every visa expiration or unemployment situation.',
      },
      {
        label: 'Dependent job loss',
        text: 'A dependent losing their own job does not cause the principal or the dependent to lose status. The proposal concerns the end of the principal’s employment or related activity.',
      },
      {
        label: '10-day periods',
        text: 'The separately authorized periods of up to 10 days around petition validity dates are not an unemployment grace period and do not replace the 60 days after early termination.',
      },
      {
        label: 'Do not confuse',
        text: 'The F-1 post-completion grace period is governed by a separate rule.',
      },
    ],
    milestones: [
      { date: '2026-08-06', text: 'DHS submitted the proposal to OIRA.' },
      {
        date: '2026-08-27',
        text: 'OIRA completed review and cleared the proposal with changes.',
      },
      {
        date: '2026-09-10',
        text: 'The NPRM preview became public, specifying eight worker classifications and their dependents.',
      },
      {
        date: '2026-09-11',
        text: 'The NPRM was published, confirming a November 10 comment deadline. It is not in effect.',
      },
    ],
    next: [
      {
        date: '2026-11-10',
        text: 'Public comments due before midnight Eastern Time; docket USCIS-2026-0364.',
      },
      {
        date: 'Date unknown',
        text: 'Whether a final rule follows comments and review, and when it would take effect, remain undetermined.',
        estimate: true,
      },
    ],
    process: {
      detail:
        'The NPRM was published September 11, with public comments due November 10. It is not a final rule.',
      currentSummary: 'NPRM published; public comments open',
      waitingFor:
        'Public comments due November 10 before midnight Eastern Time; then monitor any final rule and effective-date provisions.',
    },
  },
};
