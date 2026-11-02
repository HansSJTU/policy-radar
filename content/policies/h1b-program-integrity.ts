import type { PolicyContent } from '../policy-types.ts';

export const h1bProgramIntegrity: PolicyContent = {
  id: 'h1b-program-integrity',
  path: 'H-1B',
  tone: 'amber',
  effectState: 'executive-order-issued',
  checkedOn: "2026-11-01",
  related: ['h1b-reform', 'h1b-fee', 'prevailing-wage', 'perm-modernization'],
  process: {
    kind: 'executive-order',
    lastCompletedStage: 0,
    activeStage: 1,
    nextStage: 2,
  },
  sources: [
    {
      href: 'https://www.whitehouse.gov/presidential-actions/2026/09/enhancing-program-integrity-and-integrity-and-interagency-coordination-in-the-administration-of-the-h-1b-nonimmigrant-visa-program/',
      zh: '白宫 · 9·18 行政命令全文（第 2—4 节）',
      en: 'White House · September 18 executive order, sections 2–4',
    },
    {
      href: 'https://www.federalregister.gov/documents/2026/09/23/2026-19555/enhancing-program-integrity-and-interagency-coordination-in-the-administration-of-the-h-1b',
      zh: '联邦公报 · 9·23 刊登（EO 14431，91 FR 60501）',
      en: 'Federal Register · Published September 23 (EO 14431, 91 FR 60501)',
    },
    {
      "href": "https://www.whitehouse.gov/videos/vice-president-jd-vance-holds-press-conference-on-fighting-visa-fraud/",
      "zh": "白宫 · 10·08 签证欺诈发布会（含 PERM 暂停公告）",
      "en": "White House · October 8 visa-fraud press conference (PERM suspension announcement)"
    },
    {
      "href": "https://www.justice.gov/opa/pr/us-departments-justice-and-labor-secure-settlement-cloudera-enforce-two-year-perm-debarment",
      "zh": "DOJ · 10·16 Cloudera PERM 和解公告",
      "en": "DOJ · October 16 Cloudera PERM settlement announcement"
    },
    {
      "href": "https://www.justice.gov/crt/media/1465571/dl?inline=",
      "zh": "Cloudera 和解原文 · 第 III 部分第 17 段（PDF 第 7 页）",
      "en": "Cloudera settlement · Part III, paragraph 17 (PDF p. 7)"
    },
    {
      href: 'https://www.uscardforum.com/t/topic/533107',
      zh: '美卡论坛 · 裁员、面签和入境讨论',
      en: 'USCardForum · Layoffs, visa stamping and entry discussion',
    },
  ],
  zh: {
    title: 'H-1B 行政命令：审查时要看雇主有没有裁员',
    short: 'H-1B 裁员审查行政命令',
    status: '已签署 · 各部门落实中',
    effectLabel: '已签署 · 各部门落实中',
    agency: '总统 / 国务院 / DOL / DHS',
    documentId: '行政命令 14431',
    tldr: '总统 9 月 18 日签署行政命令：国务院、劳工部和 DHS 审 H-1B 时要互相共享信息，并考虑担保雇主的相关裁员——同一家雇主、同类岗位、过去一年内或已计划的裁员，三条都满足才算。主要针对入境或准备入境的 H-1B 人员。劳工部要在 30 天内开始复查雇主以前提交的 LCA。命令没说有裁员就拒。',
    tags: ['H-1B', 'LCA', '签证与入境'],
    summary:
      '命令要求国务院、劳工部和 DHS 借助其他部门的工资、就业和学历数据核查 H-1B，并在审查时考虑担保雇主过去一年或计划中的相关裁员。“相关”有三个条件：就是提交申请的这家雇主、裁的是同类岗位、时间在过去一年内或已列入计划；主要针对入境或准备入境的人。劳工部工资工时司还要在 30 天内开始复查雇主以前提交的 LCA，看是否需要执法。',
    audience:
      'H-1B 申请人、持有人和担保雇主；最相关的是雇主过去一年有裁员或已宣布裁员的情况。',
    caveat:
      '命令只要求把相关裁员纳入考虑，没说有裁员就拒，现有 H-1B 身份不受影响。具体怎么审，看各部门之后的文件。',
    background:
      "总统 2026-09-18 签署这份行政命令（英文名 Enhancing Program Integrity and Interagency Coordination in the Administration of the H-1B Nonimmigrant Visa Program）。它是总统给政府部门的指示，不是新法规。第 2 节要求各部门协作，第 3 节讲裁员审查、LCA 复查和执法，第 4 节要求在现有法律和预算范围内执行。命令没写审查标准、要交什么材料或多久审完。\n同一时期还有两件针对具体公司的 PERM 执法。白宫 10·08 发布会上，劳工部官员宣布暂停微软、Adobe 等点名公司的新 PERM 申请，也暂停处理它们在办的申请；其他公司的 PERM 照常。DOJ 10·16 公布和 Cloudera 的和解：撤回用失效招聘邮箱的在办 PERM，并从最近一次撤回日起 24 个月内不得办 PERM（不能递交 ETA Form 9089，也不能登 PERM 招聘广告）。\nPERM、H-1B 的 LCA 和 #12 PERM 改革（1205-AC29）是三件不同的事。",
    teaser:
      '9·18 行政命令让雇主的裁员成为 H-1B 审查要看的一项，但只限三种情况；具体怎么用，看各部门执行。',
    headline: '雇主裁员，成了 H-1B 审查要看的一项。',
    analysis:
      '我们的判断：这条命令新增的是**把裁员写进审查清单，而没有规定处理结果**。能确定三点：看的是为你递交申请的那家雇主；被裁的岗位要和你的岗位同类；时间限于过去一年或已宣布的裁员。分量和后果命令没写：没说有裁员就不批，也没说要补什么材料、要等多久。第 3(a) 节写的是入境或准备入境的 H-1B 人员；在美国境内延期、换雇主怎么处理，要等国务院、DHS 和劳工部的执行文件。',
    keyPoint: {
      label: '重点：真正当面被问到，是在面签和入境时',
      text: '第 3(a) 节要求在 LCA、petition、签证和入境四个环节都考虑雇主的相关裁员。LCA 和 petition 是雇主在美国递交的书面材料，你本人不出面；**签证和入境审查**则是面对面——签证官在窗口问话，海关（CBP）官员在口岸决定放不放行，当场判断。所以公司裁员最可能在面签和入境时被直接问到。在美国境内延期、换雇主时怎么看裁员、要多交什么材料，要等国务院、DHS 和劳工部的执行文件。',
    },
    impacts: [
      {
        title: '什么算“相关裁员”：三个限定条件',
        text: '命令要求考虑的裁员必须同时满足三条：一、是为这份申请递交 LCA 或 petition 的雇主裁的人（母公司、关联公司或客户的裁员，只有算作这家雇主“直接或间接”的裁员才算）；二、裁员影响了处境相近的美国员工，什么算“相近”由各部门执行时决定；三、发生在过去一年内，或已经宣布、列入计划。**这三个条件决定是否进入审查范围**，命令没有规定裁多少人、裁多大比例会导致什么结果。',
        examples: [
          '小林在湾区做数据分析，公司去年 11 月裁掉了同团队三个同级数据分析师；现在公司为他提交 petition，他约了 10 月回上海面签。三个条件都对得上：裁员的是这家雇主，被裁岗位与他同类，时间在过去一年内。签证官最可能问三件事：这个岗位为什么还需要人、他的工作和被裁的人有什么不同、公司为什么招他而不是招回被裁的人。答案要和雇佣信、LCA 上的职责一致；命令没有要求补交新材料。',
          '小林拿着已批的 H-1B 签证第一次入境，被海关要求二次检查。口岸问的是同一组问题：岗位为什么还需要人、他和被裁的人职责有什么不同、公司申请前是怎么招人的。带上雇佣信、岗位说明或组织架构说明会更好回答。海关当场决定放行、继续二次检查还是拒绝入境；命令只把相关裁员列为要考虑的一项。说不清时，可以请官员说明下一步怎么办。',
          '如果被裁岗位和小林的并不同类，他在窗口和口岸要讲的都是这一点，可以用公司的招聘记录、在职人数变化或团队分工来说明。命令要求考虑的是相关裁员，公司历史上的其他裁员不在范围内。',
        ],
      },
      {
        title: '工资、学历和岗位信息会被交叉核对',
        text: '国务院、劳工部和 DHS 要和商务部、教育部、小企业管理局（SBA）合作，用工资、就业、学历和行业数据核查申请。我们估计要解释和核对的材料会变多；命令没有设新的学历或工资门槛。',
      },
      {
        title: '以前提交的 LCA 也会被复查',
        text: '劳工部工资工时司要在 30 天内开始复查雇主以前提交的 LCA，看是否需要依 INA § 212(n)(2)(G) 采取行动。查的是雇主，找执法线索；有线索才会调查。已批的 LCA 和 H-1B 照常有效。',
        examples: [
          '小陈的 H-1B 已经批了，雇主去年递交过好几份 LCA。劳工部现在复查的是这家雇主的 LCA 数据，找值得执法的线索。只有查出问题、另外立案，才会牵涉具体员工；小陈的批准照常有效。',
          '如果复查后真的对雇主立案，依据是 INA § 212(n)(2)(G)，对象是雇主，不是小陈个人。他要关注的是部门有没有公布复查结果、有没有针对这家雇主的程序。',
        ],
      },
      {
        "title": "相关 PERM 执法：先看你的雇主有没有被点名",
        "text": "10·08 官员宣布暂停微软、Adobe 等公司的 PERM；Cloudera 和解要求它从最近一次撤回 PERM 起 24 个月内不得新办 PERM、不得登招聘广告。两件事范围不同，要分别看雇主通知和和解条款。其他公司的 PERM 照常，已有 H-1B 身份不受影响。",
        "source": {
          "label": "依据：Cloudera 和解第 17 段；10·08 公告见下方来源",
          "href": "https://www.justice.gov/crt/media/1465571/dl?inline="
        }
      },
    ],
    outlook:
      '先看劳工部有没有开始复查。更关键的是各部门的执行文件会不会写清两件事：怎么判断岗位“同类”，裁员在审批里占多大分量。如果之后要改法规，再单独跟踪。',
    scenarios: [
      {
        name: '各部门按现有权力执行',
        headline: '执行标准慢慢清楚',
        assumption: '部门发布政策、操作指引或执法说明。',
        effects:
          '裁员、工资和岗位信息会被更系统地核对；实际影响看具体文件。',
        signals: '国务院、DHS 和劳工部的执行文件，以及实际案例。',
      },
      {
        name: 'LCA 复查查出问题',
        headline: '部分雇主面临进一步调查',
        assumption: '工资工时司复查后，认为有依据进一步执法。',
        effects:
          '受影响的是被调查的雇主及相关案件。',
        signals: '劳工部是否宣布开始复查、调查依据和范围。',
      },
      {
        name: '新法规或法院命令改变执行',
        headline: '程序和范围可能调整',
        assumption: '各部门推动需要改法规的变化，或法院在具体案件中下令。',
        effects:
          '按新的法规、生效日期或法院命令重新看。',
        signals: '正式的部门文件和法院命令。',
      },
    ],
    scope: [
      {
        label: '这是什么',
        text: '总统给政府部门的指示，不是法规，也不是 SEVP 指引。',
      },
      {
        label: '涉及哪些环节',
        text: 'LCA、petition、签证；第 3(a) 节还明确写了入境。',
      },
      {
        label: '什么裁员算数',
        text: '同时满足三条：递交申请的雇主、和你同类的岗位、过去一年内或已计划。',
      },
      {
        label: '不收新费',
        text: '这份命令没有新增 H-1B 费用；#02 的 103,265 美元是 DHS 另外的提案。',
      },
    ],
    milestones: [
      {
        date: '2026-09-18',
        text: '总统签署行政命令：各部门协作、考虑相关裁员、复查以前的 LCA。',
      },
      {
        date: '2026-09-23',
        text: '联邦公报刊登，编号第 14431 号行政命令（91 FR 60501—60503）。',
      },
      {
        "date": "2026-10-08",
        "text": "相关 PERM 执法：劳工部官员在白宫发布会上宣布，暂停微软、Adobe 等点名公司的新 PERM 申请和在办申请。"
      },
      {
        "date": "2026-10-16",
        "text": "DOJ 公布 Cloudera 和解：从最近一次撤回 PERM 起 24 个月内不得办 PERM。"
      },
    ],
    next: [
      {
        "date": "日期未定",
        "text": "劳工部开始复查以前的 LCA（命令要求 10·18 前开始），以及各部门的执行文件。",
        "estimate": true
      }
    ],
    process: {
      detail:
        '总统 2026-09-18 签署命令，要求各部门协作并考虑雇主相关裁员。各部门在落实，执行文件和审查标准还没公布。',
      currentSummary: '已签署，各部门落实中',
      waitingFor:
        "劳工部开始复查以前的 LCA，以及国务院、DHS 和劳工部的执行文件。",
    },
  },
  en: {
    title: 'H-1B Executive Order: Employer Layoffs Become Part of Review',
    short: 'H-1B Layoff-Review Executive Order',
    status: 'Signed · Agencies implementing',
    effectLabel:
      'Signed · Agencies implementing',
    agency: 'President / State / DOL / DHS',
    documentId: 'Executive Order 14431',
    tldr: 'A September 18 executive order tells State, DOL and DHS to share information when reviewing H-1B cases and to consider the sponsor’s relevant layoffs: same employer, similar jobs, and within the past year or planned. All three must apply. It is aimed at H-1B workers entering or about to enter the U.S. DOL must start re-checking employers’ past LCAs within 30 days. The order does not say a layoff means denial.',
    tags: ['H-1B', 'LCA', 'Visa and entry'],
    summary:
      'The order tells State, DOL and DHS to use other agencies’ wage, employment and education data to check H-1B cases and to consider the sponsor’s relevant layoffs from the past year or planned. “Relevant” has three conditions: the employer filing the case, similar jobs and the timing; it is aimed at people entering or about to enter the U.S. DOL’s Wage and Hour Division must also start re-checking employers’ past LCAs within 30 days to see whether enforcement is needed.',
    audience:
      'H-1B applicants, holders and sponsoring employers, especially where the employer had layoffs in the past year or has announced them.',
    caveat:
      'The order only says relevant layoffs must be considered; it does not say a layoff means denial, and existing H-1B status is unaffected. How cases are reviewed in practice will come from later agency documents.',
    background:
      "The President signed the order (Enhancing Program Integrity and Interagency Coordination in the Administration of the H-1B Nonimmigrant Visa Program) on September 18, 2026. It is an instruction from the President to agencies, not a new regulation. Section 2 calls for coordination; section 3 covers layoff review, re-checking LCAs and enforcement; section 4 says it must be carried out within existing law and budgets. The order sets no review standard, list of documents or deadline.\nTwo PERM actions against specific companies came at the same time. At an October 8 White House press conference, a DOL official announced that new PERM applications from named companies including Microsoft and Adobe were suspended, along with processing of their pending ones; PERM continues normally for everyone else. On October 16 DOJ announced a settlement with Cloudera: it must withdraw pending PERM cases that used a dead recruiting email and file no PERM for 24 months from its latest withdrawal (no ETA Form 9089 and no PERM job ads).\nPERM, H-1B LCAs and the #12 PERM reform (1205-AC29) are three different things.",
    teaser:
      'The September 18 order makes an employer’s layoffs something H-1B reviewers look at, within three conditions; how it’s used is up to the agencies.',
    headline:
      'Employer layoffs are now on the H-1B review checklist.',
    analysis:
      'Our view: what the order adds is **a factor on the review checklist, without a set outcome**. Three things are clear: it looks at the employer filing for you; the jobs cut must be similar to yours; and the timing is the past year or layoffs already announced. Weight and consequences are not set: the order does not say layoffs block approval, what to file or how long it takes. Section 3(a) is about H-1B workers entering or about to enter the U.S.; how extensions and job changes inside the country are handled will come from State, DHS and DOL documents.',
    keyPoint: {
      label: 'Key point: you’re most likely to face it at the visa interview and the border',
      text: 'Section 3(a) says relevant layoffs must be considered at four points: the LCA, the petition, the visa and entry. LCAs and petitions are paperwork your employer files in the U.S. without you; **visa and entry review** happen face to face: a consular officer questions you at the window and a CBP officer decides at the border, on the spot. So company layoffs are most likely to come up directly at the visa interview and at entry. How extensions and job changes inside the U.S. will treat layoffs, and what extra documents are needed, will come from State, DHS and DOL.',
    },
    impacts: [
      {
        title: 'What counts as a “relevant layoff”: three conditions',
        text: 'The layoffs agencies must consider have to meet all three conditions: (1) they were made by the employer filing this LCA or petition (cuts at a parent, affiliate or client count only as that employer’s “direct or indirect” layoffs); (2) they affected similarly situated U.S. workers, which agencies will define in practice; and (3) they happened in the past year or are announced and planned. **These conditions decide whether a case falls inside the review scope**; the order does not tie any number or share of layoffs to an outcome.',
        examples: [
          'Lin works in data analysis at a Bay Area company that laid off three data analysts at the same level last November. The company is now filing an H-1B petition for Lin, who has a visa interview in October in Shanghai. All three conditions line up: same employer, comparable roles, within the past year. The consular officer is most likely to ask why the position is still needed, how Lin’s duties differ from those of the people let go, and why the company is hiring rather than rehiring. Answers should match the offer letter and the LCA; the order requires no new document.',
          'Lin holds an approved H-1B visa and is sent to secondary inspection on first entry. The questions at the port are the same: why the position is still needed, how Lin’s duties differ, and how the company recruited before filing. An offer letter, job description or org summary makes them easier to answer. CBP decides on the spot whether to admit, keep in secondary or refuse entry; the order makes relevant layoffs one factor among others. If something is unclear, Lin can ask the officer to explain the next step.',
          'If the roles cut were unlike Lin’s, that is the point to make at the window and at the port, backed by recruiting records, headcount changes or team structure. The order asks about relevant layoffs only; other layoffs in the company’s history are outside its scope.',
        ],
      },
      {
        title: 'Wages, degrees and jobs get cross-checked',
        text: 'State, DOL and DHS must work with Commerce, Education and the Small Business Administration (SBA), using wage, employment, education and industry data to check filings. We expect more explaining and verifying; the order sets no new degree or wage threshold.',
      },
      {
        title: 'Past LCAs get re-checked',
        text: 'DOL’s Wage and Hour Division must start re-checking employers’ past LCAs within 30 days to see whether action is needed under INA section 212(n)(2)(G). It is looking at employers for enforcement leads; an investigation follows only if it finds one. Approved LCAs and H-1Bs stay valid.',
        examples: [
          'Chen’s H-1B is approved, and his employer filed several LCAs last year. DOL is now re-checking that employer’s LCA data for enforcement leads. Individual workers come into it only if a problem is found and a separate case is opened; Chen’s approval stays valid.',
          'If review leads to a case against the employer, the basis is INA section 212(n)(2)(G) and the target is the employer, not Chen. What Chen should watch is whether the agency publishes results and opens any proceeding against this employer.',
        ],
      },
      {
        "title": "Related PERM actions: check whether your employer is named",
        "text": "On October 8 officials announced a PERM suspension for named companies including Microsoft and Adobe; Cloudera’s settlement bars it from new PERM filings and job ads for 24 months from its latest withdrawal. The two differ in scope, so check your employer’s notice and the settlement terms separately. Everyone else’s PERM continues as usual, and existing H-1B status is unaffected.",
        "source": {
          "label": "Source: Cloudera settlement, paragraph 17; October 8 announcement listed below",
          "href": "https://www.justice.gov/crt/media/1465571/dl?inline="
        }
      },
    ],
    outlook:
      'First, watch whether DOL starts its review. More important is whether the agencies’ documents settle two questions: how “similar jobs” are judged, and how much weight layoffs carry. If new regulations follow, we will track them separately.',
    scenarios: [
      {
        name: 'Agencies act under existing powers',
        headline: 'Standards become clearer',
        assumption:
          'Agencies publish policies, operational guidance or enforcement explanations.',
        effects:
          'Layoffs, wages and job information get checked more systematically; actual effects depend on the documents.',
        signals:
          'State, DHS and DOL documents, and real cases.',
      },
      {
        name: 'LCA review turns up problems',
        headline: 'Some employers face further investigation',
        assumption:
          'Wage and Hour finds grounds for enforcement after its review.',
        effects:
          'The employers under investigation and their cases are affected.',
        signals:
          'Whether DOL announces the review, and the grounds and scope of any investigation.',
      },
      {
        name: 'New rules or court orders change things',
        headline: 'Procedure and scope may shift',
        assumption:
          'Agencies pursue changes that need new regulations, or a court rules in an actual case.',
        effects:
          'Re-check against the new rules, start dates or court order.',
        signals:
          'Official agency documents and court orders.',
      },
    ],
    scope: [
      {
        label: 'What it is',
        text: 'A presidential instruction to agencies, not a regulation or SEVP guidance.',
      },
      {
        label: 'Which stages',
        text: 'LCAs, petitions and visas; section 3(a) also names entry.',
      },
      {
        label: 'Which layoffs count',
        text: 'All three: the employer filing for you, jobs similar to yours, within the past year or planned.',
      },
      {
        label: 'No new fee',
        text: 'This order adds no H-1B fee; the $103,265 in #02 is a separate DHS proposal.',
      },
    ],
    milestones: [
      {
        date: '2026-09-18',
        text: 'The President signed the order: agencies coordinate, consider relevant layoffs and re-check past LCAs.',
      },
      {
        date: '2026-09-23',
        text: 'Published in the Federal Register as Executive Order 14431 (91 FR 60501–60503).',
      },
      {
        "date": "2026-10-08",
        "text": "Related PERM action: at a White House press conference, a DOL official announced a suspension of new and pending PERM cases for named companies including Microsoft and Adobe."
      },
      {
        "date": "2026-10-16",
        "text": "DOJ announced the Cloudera settlement: no PERM filings for 24 months from its latest withdrawal."
      },
    ],
    next: [
      {
        "date": "Date unknown",
        "text": "DOL starts re-checking past LCAs (due to begin by October 18), and agencies issue their implementing documents.",
        "estimate": true
      }
    ],
    process: {
      detail:
        'The President signed the order on September 18, 2026, telling agencies to coordinate and consider relevant employer layoffs. Agencies are implementing it; their documents and review standards have not been published.',
      currentSummary: 'Signed; agencies implementing',
      waitingFor:
        "DOL starting its review of past LCAs, and State, DHS and DOL implementing documents.",
    },
  },
};
