import type { PolicyContent } from '../policy-types.ts';

export const gracePeriod: PolicyContent = {
  id: 'grace-period',
  path: 'H-1B',
  tone: 'blue',
  effectState: 'not-in-effect',
  checkedOn: "2026-11-01",
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
      "href": "https://www.govinfo.gov/content/pkg/FR-2026-09-11/pdf/2026-18631.pdf",
      "zh": "Federal Register NPRM 正式版（9·11）",
      "en": "Federal Register published NPRM (September 11)"
    },
    {
      "href": "https://public-inspection.federalregister.gov/2026-18631.pdf",
      "zh": "Federal Register NPRM 预览稿（9·10）",
      "en": "Federal Register NPRM preview (September 10)"
    },
    {
      "href": "https://www.reginfo.gov/public/do/eoDetails?rrid=1496261",
      "zh": "OIRA 审查完成记录",
      "en": "OIRA completion record"
    },
    {
      "href": "https://www.fragomen.com/insights/united-states-dhs-proposal-to-eliminate-60-day-nonimmigrant-grace-period-clears-federal-review.html",
      "zh": "Fragomen 8·28 更新",
      "en": "Fragomen August 28 update"
    },
    {
      "href": "https://www.uscardforum.com/t/topic/523657",
      "zh": "美卡论坛讨论",
      "en": "USCardForum discussion"
    },
    {
      "href": "https://www.uscis.gov/working-in-the-united-states/information-for-employers-and-employees/options-for-nonimmigrant-workers-following-termination-of-employment",
      "zh": "USCIS：工作结束后的身份选择",
      "en": "USCIS: options after employment ends"
    },
    {
      "href": "https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-214/subpart-A/section-214.1#p-214.1(l)(2)",
      "zh": "eCFR 8 CFR 214.1(l)(2) · 现行 60 天宽限期条款",
      "en": "eCFR 8 CFR 214.1(l)(2) · Current 60-day grace period"
    }
  ],
  zh: {
    title: '失业后的最长 60 天宽限期拟取消',
    short: '取消失业后 60 天宽限期',
    status: '正式提案 · 评论截至 11 月 10 日',
    effectLabel: '尚未生效 · 现行规则未变',
    agency: 'DHS / USCIS',
    documentId: '1615-AD22',
    tldr: 'DHS 打算取消工作签证持有人（H-1B、H-1B1、E-1、E-2、E-3、L-1、O-1、TN）在工作提前结束后最长 60 天的宽限期。现在还只是提案。F-1 毕业后的宽限期不受影响。',
    tags: ['H-1B 失业', '换雇主', '转身份'],
    summary:
      'DHS 9 月 11 日正式提出：取消 H-1B、H-1B1、E-1、E-2、E-3、L-1、O-1、TN 持有人及其家属在工作提前结束后最长 60 天的宽限期。公众评论 11·10 美东午夜前截止。现行 60 天宽限期照常适用。',
    audience:
      '工作提前结束（被裁、辞职或被解雇）的 H-1B、H-1B1、E-1、E-2、E-3、L-1、O-1、TN 持有人及其家属。',
    caveat:
      '这只是提案，现在失业照样有最长 60 天宽限期。即使按原样定稿，有其他合法身份的人仍然可以留下。F-1 毕业后的宽限期是另一套规则。',
    background:
      '提案（2026-18631）9 月 10 日公开预览，9 月 11 日正式刊登（91 FR 57807），案卷号 USCIS-2026-0364。它要删掉给予 60 天宽限期的条款 8 CFR 214.1(l)(2)，并相应修改“特殊情况 EAD”（compelling-circumstances EAD）里引用这条的地方。公众评论 2026 年 11 月 10 日美东午夜前截止。最终规则和生效日期都还没定。',
    teaser: '被裁后没有缓冲期，找新工作、换身份、安排家人都会更急。',
    headline: '被裁之后的缓冲时间，可能整个没了。',
    analysis:
      '如果取消 60 天宽限期，一失业就会马上影响身份和全家的安排。靠雇主维持身份的人，公司做决定的速度和自己能反应的时间会越来越对不上。',
    impacts: [
      {
        title: '对员工：被裁后能反应的时间更短',
        text: '找新雇主、准备申请、安排离境都要时间。没有缓冲，这几件事就得同时做。',
        examples: [
          '小陈持 H-1B 被裁，本来打算用最长 60 天的宽限期找新工作。如果宽限期取消，他就不能靠这条规定留在美国慢慢找。变的是失业后能合法待多久，跟有没有公司愿意面试他无关。',
        ],
      },
      {
        title: '对换工作：新雇主动作要快',
        text: '两份工作之间的空档会变得很要紧。新雇主多快能递交申请，直接决定风险大小。',
        examples: [
          '小李被裁后找到愿意接收的新公司，但公司准备 H-1B 申请需要时间。现在宽限期可以覆盖这段等待；取消后，申请没递交之前他就没有留下的依据。新公司动作快不快，决定他能不能顺利转过去。',
          '小李被裁后想回学校读书，从工作身份转成学生身份。等录取、准备转身份材料都要时间。宽限期没了，他就不能靠它留在美国等手续办完；除了能不能被录取，还得解决等待期间的身份问题。',
        ],
      },
      {
        title: '对家庭：一个人失业，全家都受影响',
        text: '配偶的工作、孩子的学业、住在哪里，可能同时受影响。具体多大，要看每个家庭成员自己的身份和到期日。',
        examples: [
          '小王持工作签证，配偶和孩子是家属身份。如果失业后没有宽限期，全家都得更早决定：转身份，还是准备离开。孩子要不要继续在原学校读、房子要不要续租，都跟着受影响。',
        ],
      },
    ],
    outlook:
      '接下来看评论会不会让 DHS 改方案，以及最终规则从什么时候开始、有没有过渡期。',
    scenarios: [
      {
        name: '宽限期取消',
        headline: '突然被裁，几乎没有时间安排',
        assumption: '最终规则取消 60 天宽限期，也没有别的替代安排。',
        effects:
          '工作一变，身份马上有压力。家庭的应对和新雇主的速度都更关键。',
        signals: '最终规则怎么处理工作结束后的身份和后续申请。',
      },
      {
        name: '保留部分例外',
        headline: '失业原因和个人情况不同，结果不同',
        assumption: '最终规则为部分人、部分情形或过渡期保留缓冲。',
        effects:
          '在例外范围内的人还有应对时间；范围外的人要提前安排。',
        signals: '例外适用于谁、要交什么证明、过渡期多长。',
      },
      {
        name: '暂不推进',
        headline: '60 天宽限期继续有效',
        assumption: '提案没有定稿，或者最终没有生效。',
        effects:
          '眼下照现行规则办；不过公司裁员和员工换工作时，会更多考虑以后的变化。',
        signals: '最终规则、撤回公告或修改后的提案。',
      },
    ],
    scope: [
      {
        label: '哪些身份',
        text: 'E-1、E-2、E-3、H-1B、H-1B1、L-1、O-1、TN，以及他们的家属（H-4、L-2、E 家属、O-3、TD）。',
      },
      { label: '什么情况', text: '工作提前结束时；签证正常到期不算。' },
      {
        label: '家属自己失业',
        text: '家属自己没了工作，不影响任何人的身份；提案针对的是持工作签证那一方的工作结束。',
      },
      {
        label: '10 天停留期',
        text: '签证有效期前后另有最长 10 天的停留期，这和失业宽限期是两回事，工作提前结束时用不上。',
      },
      { label: 'F-1 不受影响', text: 'F-1 毕业后的宽限期是另一套规则。' },
    ],
    milestones: [
      { date: '2026-08-06', text: '提案送交 OIRA 审查。' },
      { date: '2026-08-27', text: 'OIRA 审完，要求修改后放行。' },
      {
        date: '2026-09-10',
        text: '提案预览稿公开，列出八类工作签证及其家属。',
      },
      {
        date: '2026-09-11',
        text: '提案正式刊登，评论 11 月 10 日截止。',
      },
    ],
    next: [
      {
        date: '2026-11-10',
        text: '公众评论截止（美东午夜前），案卷 USCIS-2026-0364。',
      },
      {
        date: '日期未定',
        text: 'DHS 审完评论后决定是否发最终规则、何时生效。',
        estimate: true,
      },
    ],
    process: {
      detail:
        '提案 9 月 11 日正式刊登，公众评论到 11 月 10 日。还没有最终规则。',
      currentSummary: '提案已公布，正在收集评论',
      waitingFor:
        '公众评论 11 月 10 日美东午夜前截止，之后看 DHS 是否发最终规则。',
    },
  },
  en: {
    title: 'Proposed End to the Up-to-60-Day Grace Period After Job Loss',
    short: 'Ending the 60-Day Grace Period',
    status: 'Proposed rule · Comments due November 10',
    effectLabel: 'Not in effect · Current rule unchanged',
    agency: 'DHS / USCIS',
    documentId: '1615-AD22',
    tldr: 'DHS plans to end the grace period of up to 60 days that H-1B, H-1B1, E-1, E-2, E-3, L-1, O-1 and TN workers get after a job ends early. It is only a proposal for now. The F-1 grace period after graduation is not affected.',
    tags: ['H-1B job loss', 'Employer change', 'Change of status'],
    summary:
      'On September 11 DHS formally proposed ending the grace period of up to 60 days that H-1B, H-1B1, E-1, E-2, E-3, L-1, O-1 and TN workers and their families get after a job ends early. Public comments close before midnight Eastern Time on November 10. The current 60-day grace period still applies.',
    audience:
      'H-1B, H-1B1, E-1, E-2, E-3, L-1, O-1 and TN workers whose job ends early (layoff, resignation or firing), and their families.',
    caveat:
      'This is only a proposal; if you lose your job now, you still get up to 60 days. Even if adopted as written, people with another lawful status could stay. The F-1 grace period after graduation is a separate rule.',
    background:
      'The proposal (2026-18631) was previewed September 10 and published September 11 (91 FR 57807); docket USCIS-2026-0364. It would delete 8 CFR 214.1(l)(2), the provision that grants the 60-day grace period, and update the compelling-circumstances EAD rule that refers to it. Public comments close before midnight Eastern Time on November 10, 2026. No final rule or start date has been set.',
    teaser:
      'Without a buffer after a layoff, finding a job, changing status and planning for family all get more urgent.',
    headline:
      'The breathing room after a layoff could disappear.',
    analysis:
      'Without the 60-day grace period, losing a job would hit your status and your family’s plans right away. For people whose status depends on an employer, there would be less and less time to react to a company’s decision.',
    impacts: [
      {
        title: 'For workers: less time to react to a layoff',
        text: 'Finding a new employer, preparing filings and planning to leave all take time. Without a buffer, you have to do them all at once.',
        examples: [
          'Chen is laid off from an H-1B job and plans to use the up-to-60-day grace period to find a new one. Without it, he could not stay in the U.S. on that basis while looking. What changes is how long he can legally stay, not whether companies will interview him.',
        ],
      },
      {
        title: 'For job changes: the new employer has to move fast',
        text: 'The gap between jobs becomes critical. How quickly the new employer can file decides how much risk you carry.',
        examples: [
          'Li finds a new employer after a layoff, but the company needs time to prepare the H-1B petition. Today the grace period covers that wait. Without it, Li would have no basis to stay until the petition is filed, so the new employer’s speed decides whether the move works.',
          'After a layoff, Li wants to go back to school and switch to student status. Admission and paperwork take time. Without the grace period, he could not rely on it to stay while that happens; besides getting admitted, he would need a way to stay legally during the wait.',
        ],
      },
      {
        title: 'For families: one job loss affects everyone',
        text: 'A spouse’s job, the children’s school and where you live can all be affected. How much depends on each family member’s own status and expiration date.',
        examples: [
          'Wang is on a work visa; his spouse and children are dependents. Without a grace period after a job loss, the family would have to decide much sooner whether to change status or leave, which affects the children’s school and whether to renew the lease.',
        ],
      },
    ],
    outlook:
      'Next, watch whether comments lead DHS to change the proposal, and when a final rule would start and whether it has a transition period.',
    scenarios: [
      {
        name: 'Grace period removed',
        headline:
          'A sudden layoff leaves almost no time',
        assumption:
          'The final rule removes the 60-day grace period with nothing to replace it.',
        effects:
          'Any job change puts your status under pressure right away. How fast your family and your new employer can act matters more.',
        signals:
          'How the final rule handles status after a job ends and later filings.',
      },
      {
        name: 'Some exceptions kept',
        headline:
          'Outcomes depend on why you lost the job and your situation',
        assumption:
          'The final rule keeps a buffer for some people, situations or a transition period.',
        effects:
          'People covered by an exception keep time to respond; everyone else needs to plan ahead.',
        signals:
          'Who the exceptions cover, what proof is needed and how long any transition lasts.',
      },
      {
        name: 'Proposal stalls',
        headline: 'The 60-day grace period stays',
        assumption: 'The proposal is never finalized or never takes effect.',
        effects:
          'For now, current rules apply, though companies and workers will keep possible changes in mind during layoffs and job moves.',
        signals: 'A final rule, a withdrawal or a revised proposal.',
      },
    ],
    scope: [
      {
        label: 'Which statuses',
        text: 'E-1, E-2, E-3, H-1B, H-1B1, L-1, O-1 and TN, plus their families (H-4, L-2, E dependents, O-3 and TD).',
      },
      {
        label: 'When it applies',
        text: 'When a job ends early; a visa expiring on schedule is different.',
      },
      {
        label: 'If a family member loses a job',
        text: 'A family member losing their own job does not affect anyone’s status; the proposal is about the main worker’s job ending.',
      },
      {
        label: '10-day periods',
        text: 'The separate periods of up to 10 days around a petition’s validity dates are not a job-loss grace period and don’t help when a job ends early.',
      },
      {
        label: 'F-1 not affected',
        text: 'The F-1 grace period after graduation is a separate rule.',
      },
    ],
    milestones: [
      { date: '2026-08-06', text: 'DHS sent the proposal to OIRA for review.' },
      {
        date: '2026-08-27',
        text: 'OIRA finished review and cleared it with changes.',
      },
      {
        date: '2026-09-10',
        text: 'The proposal was previewed, listing eight work-visa types and their families.',
      },
      {
        date: '2026-09-11',
        text: 'The proposal was published; comments close November 10.',
      },
    ],
    next: [
      {
        date: '2026-11-10',
        text: 'Public comments due before midnight Eastern Time; docket USCIS-2026-0364.',
      },
      {
        date: 'Date unknown',
        text: 'After reviewing comments, DHS decides whether to issue a final rule and when it would take effect.',
        estimate: true,
      },
    ],
    process: {
      detail:
        'The proposal was published September 11, with public comments open until November 10. There is no final rule yet.',
      currentSummary: 'Proposal published; comments open',
      waitingFor:
        'Public comments close before midnight Eastern Time on November 10; then whether DHS issues a final rule.',
    },
  },
};
