import type { PolicyContent } from '../policy-types.ts';

export const h1bProgramIntegrity: PolicyContent = {
  id: 'h1b-program-integrity',
  path: 'H-1B',
  tone: 'amber',
  effectState: 'executive-order-issued',
  checkedOn: '2026-09-26',
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
      href: 'https://www.uscardforum.com/t/topic/533107',
      zh: '美卡论坛 · 裁员、贴签与入境讨论',
      en: 'USCardForum · Layoffs, visa stamping and entry discussion',
    },
  ],
  zh: {
    title: 'H-1B 行政命令：加强裁员审查与跨部门协作',
    short: 'H-1B 裁员审查行政命令',
    status: '行政命令已签署 · 跟踪部门落实',
    effectLabel: '已签署并向部门作出指令 · 具体执行待跟踪',
    agency: '总统 / 国务院 / DOL / DHS',
    documentId: '行政命令 14431',
    tldr: '总统 9 月 18 日签署行政命令，要求国务院、劳工部和 DHS 加强 H-1B 跨部门审查，并考虑担保雇主的相关裁员：同一雇主、同类岗位、发生在过去一年内或已列入计划，三个条件都满足才算。针对的是进入或试图进入美国的 H-1B 人员。劳工部须在 30 天内开始复查既往 LCA 数据。命令没有写裁员会导致什么审批结果。',
    tags: ['H-1B', 'LCA', '签证与入境'],
    summary:
      '这份行政命令要求国务院、劳工部和 DHS 用更多部门的工资、就业和学历信息核查 H-1B 合规，并要求在相关审查中考虑担保雇主过去一年及计划中的裁员。这里的“相关”不是泛指公司任何一次裁员，命令用提交申请的雇主、被裁岗位、裁员时间三个条件来限定，也把适用环节写在进入或试图进入美国的案件上。劳工部工资工时司还须在 30 天内开始复查既往 LCA 数据，判断是否需要进一步执法。',
    audience:
      'H-1B 申请人、持有人和担保雇主；按第 3(a) 节的文字，重点是正在或准备从境外进入美国的案件，以及雇主过去一年或计划中有同类岗位裁员的案件。',
    caveat:
      '命令只要求把相关裁员纳入考虑，没有写出裁员与拒签之间的换算标准，也没有宣布现有 H-1B 自动失效。真有裁员时后果如何，要看部门后续文件。',
    reviewNote:
      '9·26 重读白宫命令与联邦公报刊登文本（第 14431 号，9·23 刊于 91 FR 60501—60503）。按联邦公报检索未核实新的执行文件；机构网站公告未逐项确认，检索未命中不证明不存在。10·18 是按签署日推算的启动复查期限，不是生效日。',
    background:
      '总统于 2026-09-18 签署 Enhancing Program Integrity and Interagency Coordination in the Administration of the H-1B Nonimmigrant Visa Program。它是总统对行政部门的指令，不是机构发布的拟议规则。第 2 节规定跨部门协作，第 3 节规定裁员审查、LCA 数据复查和执行授权，第 4 节要求依适用法律及可用拨款实施。命令的直接效果有两个：向部门作出指令，以及把裁员列为需要考虑的因素；命令正文没有写审查标准、需要的证明材料和审查时限。',
    teaser:
      '9·18 行政命令要求审查中考虑担保雇主的相关裁员，并明确了三个限定条件；它不等于裁员即拒签，具体后果仍取决于部门执行。',
    headline: '裁员被明确列为审查因素，具体后果还要看部门如何落实。',
    analysis:
      '我们的判断：这条命令真正新增的是**把裁员写进审查清单，不是给出处理结果**。能确定三点：审查针对为你提交申请的那家雇主，被裁岗位要与拟聘岗位同类，时间限于过去一年或已宣布的计划裁员。不确定的是权重和后果——命令没写裁员就不能批准，也没写要补什么材料、会拖多久。第 3(a) 节的文字还落在进入或试图进入美国的 H-1B 人员上，境内延期和转雇主案件是否同一口径，要等国务院、DHS 和 DOL 的执行文件；在那之前，“裁员几成就拒签”不是命令的原文。',
    keyPoint: {
      label: '重点 · 变化落在签证和入境审查',
      text: 'LCA 和 petition 是雇主在美国境内提交的书面材料，申请人本人不出面；**签证和入境审查**是面对面的环节——签证官在窗口问话，CBP 官员在口岸决定放不放行，判断都在当场作出。命令把“担保雇主的相关裁员”写进这两个环节，等于把公司层面的裁员情况带进了面签问答和入境问话，所以变化最明显的是要去面签或入境的人，而不是已经在美国境内等延期的人。至于签证官会问什么、要额外交什么材料，命令都没写，要等国务院和 DHS 的执行文件。',
    },
    impacts: [
      {
        title: '什么算“相关裁员”：三个限定条件',
        text: '命令要求的考虑对象是：担保雇主过去一年直接或间接进行、或计划进行，并对同类美国工人就业有负面影响的裁员。拆开看是三个条件，缺一不可：裁员雇主须是为这份申请提交 LCA 或 petition 的雇主，母公司、关联公司或客户的裁员只有在属于“直接或间接”范围时才算；被裁岗位要与拟聘岗位在职责和层级上同类，裁其他部门或层级明显更高的岗位不算；时间只看过去一年内发生的，以及已经宣布、列在计划中的裁员。**这三个条件只决定是否进入审查范围，不决定结果**——命令没有写裁员数量、比例与审批结果之间的对应关系。',
        examples: [
          '小林在湾区做数据分析，公司去年 11 月裁掉了同团队三个同级数据分析师；现在公司为他提交 petition，他约了 10 月回上海面签。他的案子三个条件都对得上：裁员的是这家雇主，被裁岗位与他的岗位同类，时间也在过去一年内，所以落在命令要求考虑裁员的范围内。看到裁员记录，签证官最可能问三件事：这个岗位为什么还需要人、他的工作内容与被裁的人有什么不同、公司为什么招他而不是先招回被裁的人。答案要和雇佣信、LCA 上的职责对得上；命令没有规定必须补交新材料，所以不是“裁过员就一定要多交一份材料”。',
          '小林拿着已批的 H-1B 签证第一次入境，被 CBP 要求二次检查。口岸问到的是同一组问题：岗位为什么仍然需要、他和被裁的人职责有何不同、公司在申请前的招聘情况。带雇佣信、岗位说明或组织架构说明会更好回答，但命令没有规定入境必须带某份证明。CBP 的处理是当场判断放行、二次检查还是拒绝入境——命令只要求把相关裁员作为考虑因素，没写裁过员就不能入境；说不清时，可以要求说明后续程序，而不是在口岸自行推测结果。',
          '如果被裁岗位和小林的并不相同，他在窗口和口岸要讲的都是同一句：两者不同类。他可以用公司的招聘记录、在职人数变化或团队分工来说明。三条限定条件不满足时，不必主动把这件事说成不利因素——命令要求考虑的是相关裁员，不是公司历史上的任何一次裁员。',
        ],
      },
      {
        title: '工资、学历与岗位信息交叉核查',
        text: '国务院、DOL 和 DHS 须与商务部、教育部及 SBA 协作，获得工资、就业、学历、产业等信息核查法定要求。我们的判断是说明和核对材料的工作可能增加；命令没有给出统一的新学历或工资门槛。',
      },
      {
        title: '既往 LCA 数据也会被复查',
        text: 'DOL 工资工时司须在 30 天内开始复查既往提交的 LCA 数据，判断是否有必要依 INA § 212(n)(2)(G) 进一步采取行动。复查对象是雇主提交过的 LCA 数据，不是重新审一遍某个人的资格：先有线索，才进入后续调查或执法程序，所以“数据被复查”不等于这张 LCA 或已批的 H-1B 自动失效。',
        examples: [
          '小陈的 H-1B 已经批准，雇主去年提交过好几份 LCA。劳工部现在复查的是这家雇主的 LCA 数据，找的是有没有值得进一步执法的线索；只有复查出线索、依法进入后续程序，才会牵涉到具体案件，所以“数据被复查”不等于小陈的批准会被撤销，也不发生在他面前。',
          '如果复查之后真的对雇主立案，依据是 INA § 212(n)(2)(G)，对象是雇主这个实体，不是小陈个人。他要看的是部门有没有公布复查结果、有没有针对这家雇主的程序，而不是把“数据被复查”当成自己的身份出问题。',
        ],
      },
    ],
    outlook:
      '先看 DOL 是否按期启动数据复查。更关键的是国务院、DHS 和 DOL 的执行文件会不会写清两件事：同类岗位怎么比，以及裁员在审批里占什么权重。这两个口径没出来之前，本项只能确认“裁员被列入考虑”，具体后果待定；后续文件若提出新法规，应另行跟踪规则制定与生效安排。',
    scenarios: [
      {
        name: '部门依现有权限落实',
        headline: '执行口径逐渐明确',
        assumption: '部门发布政策、操作指引或执法说明。',
        effects:
          '可能更系统地核对裁员、工资及岗位信息；实际影响取决于具体文件，不能预设统一拒签结果。',
        signals: '国务院、DHS、DOL 的执行文件及实际案件情况。',
      },
      {
        name: 'LCA 数据复查引出个案行动',
        headline: '部分雇主面临进一步调查',
        assumption: '工资工时司复查数据后认定有依法进一步行动的依据。',
        effects:
          '受影响的是被依法调查的雇主及有关案件，不等于所有 LCA 或 H-1B 申请一并撤销。',
        signals: 'DOL 是否宣布启动复查、调查依据及适用范围。',
      },
      {
        name: '后续规则或法院命令改变执行',
        headline: '程序与范围可能调整',
        assumption: '部门启动需要规则制定的修改，或法院对实际争议作出命令。',
        effects:
          '另行核对法规条款、适用日期或司法救济范围；此处是可能走向，不是已发生的诉讼或规则。',
        signals: '正式部门文件及法院命令，而非仅凭论坛推测。',
      },
    ],
    scope: [
      {
        label: '政策类型',
        text: '总统行政命令，向行政部门作出指令；与正式法规、SEVP 行政指引分别跟踪。',
      },
      {
        label: '相关环节',
        text: '第 2 节涉及 H-1B petitions、LCA 和签证；第 3(a) 节还明确提到入境，具体案件适用须结合部门文件。',
      },
      {
        label: '裁员范围',
        text: '由三个条件共同限定：提交 LCA 或 petition 的雇主、与拟聘岗位同类的被裁岗位、过去一年内或已列入计划的时间。三个条件都满足才落入本项审查；命令没有写落入之后的结果。',
      },
      {
        label: '不是新收费',
        text: '本命令自身没有设定新的 H-1B 费用，也不改变现行收费标准；#02 的 $103,265 是 DHS 的独立收费提案，与本命令分开跟踪。',
      },
    ],
    milestones: [
      {
        date: '2026-09-18',
        text: '总统签署行政命令，要求跨部门协作、考虑相关裁员并启动既往 LCA 数据复查。',
      },
      {
        date: '2026-09-23',
        text: '联邦公报刊登该命令，编号为第 14431 号行政命令（91 FR 60501—60503，FR Doc. 2026-19555）。',
      },
    ],
    next: [
      {
        date: '2026-10-18',
        text: '按签署后 30 个日历天计算，劳工部最迟须开始复查既往 LCA 数据；这是启动期限，不是完成期限或统一生效日。',
      },
      {
        date: '日期未定',
        text: '跟踪国务院、DHS、DOL 的执行文件及实际审查口径；后续若修改法规，另行跟踪适用的规则制定程序。',
        estimate: true,
      },
    ],
    process: {
      detail:
        '总统于 2026-09-18 签署命令，要求跨部门协作并考虑雇主相关裁员情况。命令已向部门作出指令，具体执行文件和实际审查口径仍需跟踪；不能把签署等同于所有审查措施都已落地。',
      currentSummary: '行政命令已签署，跟踪部门落实',
      waitingFor:
        '劳工部须在签署后 30 天内开始复查既往 LCA 数据（按日历天计算为 10·18 前）；关注国务院、DHS 和 DOL 的执行文件。',
    },
  },
  en: {
    title: 'H-1B Executive Order: Layoff Review and Interagency Coordination',
    short: 'H-1B Layoff-Review Executive Order',
    status: 'Executive order signed · Tracking implementation',
    effectLabel:
      'Signed directive to agencies · Implementation still being tracked',
    agency: 'President / State / DOL / DHS',
    documentId: 'Executive Order 14431',
    tldr: 'A September 18 executive order tells State, DOL and DHS to coordinate H-1B review and to weigh the sponsor’s relevant layoffs: same employer, comparable roles, and within the past year or planned. It covers H-1B workers entering or seeking to enter the United States. DOL must begin reviewing past LCA data within 30 days. The order does not say what outcome a layoff leads to.',
    tags: ['H-1B', 'LCA', 'Visa and entry'],
    summary:
      'The order directs State, DOL and DHS to use additional agencies’ information for H-1B compliance checks and requires consideration of the sponsoring employer’s layoffs within the previous year or planned for the future. “Relevant” is not any layoff anywhere: the order defines it by the employer filing the case, the roles cut and the timing, and it frames the covered review around workers entering or attempting to enter the United States. DOL’s Wage and Hour Division must also begin reviewing previously submitted LCA data within 30 days to assess further enforcement.',
    audience:
      'H-1B applicants, holders and sponsoring employers; under the section 3(a) wording, the emphasis is on workers entering or attempting to enter the United States, and on employers with comparable-role layoffs in the previous year or already planned.',
    caveat:
      'The order only requires relevant layoffs to be considered. It states no formula converting a layoff into a denial and does not automatically invalidate existing H-1B status. What layoffs actually mean for a case depends on later agency documents.',
    reviewNote:
      'The White House order and published Federal Register text (EO 14431, printed September 23 at 91 FR 60501–60503) were reread September 26. A Federal Register search did not verify a new implementation document; agency website announcements were not individually confirmed, and a search miss does not prove none exist. October 18 is the calculated deadline to begin review, not an effective date.',
    background:
      'The President signed Enhancing Program Integrity and Interagency Coordination in the Administration of the H-1B Nonimmigrant Visa Program on September 18, 2026. It is a presidential directive to executive agencies, rather than an agency proposed rule. Section 2 addresses coordination; section 3 covers layoffs, LCA data review and implementation authority; section 4 requires implementation consistent with applicable law and available appropriations. The order’s direct effects are to direct agencies and to make layoffs a factor to consider; the text itself sets no review standard, evidence list or processing deadline.',
    teaser:
      'The September 18 order requires consideration of the sponsoring employer’s relevant layoffs and sets three scope conditions. It does not make layoffs a denial, and consequences still depend on agency implementation.',
    headline:
      'Layoffs are an explicit review factor; specific consequences depend on agency implementation.',
    analysis:
      'Our assessment: what the order adds is **a factor on the review checklist, not an outcome**. Three things are clear — the review looks at the employer filing your case, the roles cut must be comparable to the offered job, and the timing is limited to the previous year or layoffs already planned. What is not clear is weight and consequence: the order does not say layoffs bar approval, what evidence to file, or how long review may take. Section 3(a) is also worded around H-1B workers entering or attempting to enter the United States, so whether domestic extensions and change-of-employer cases follow the same standard depends on State, DHS and DOL implementation documents. Until those appear, a claim that a given layoff percentage means denial is not what the order says.',
    keyPoint: {
      label: 'Key point · The change lands on visa and entry review',
      text: 'LCAs and petitions are paper filings an employer submits inside the United States, without the applicant present; **visa and entry review** happen face to face — a consular officer questions the applicant at the window and a CBP officer decides admission at the port, with the judgment made on the spot. By writing the sponsoring employer’s relevant layoffs into those two stages, the order brings company-level layoffs into the visa interview and the inspection, so the people most likely to feel a difference are those going for visa stamping or entering, not those already waiting on a domestic extension. What an officer must ask and what extra evidence an applicant must file are not stated, and will come from State and DHS implementation documents.',
    },
    impacts: [
      {
        title: 'What counts as a “relevant layoff”: three conditions',
        text: 'What the order requires agencies to consider is a layoff by the sponsoring employer, made in the previous year or planned, that negatively affects similarly situated U.S. workers. Three conditions must all be met: the employer must be the one filing the LCA or petition for this case, since layoffs at a parent, affiliate or client count only if they fall within the “direct or indirect” scope; the roles cut must be comparable in duties and level to the offered job, so cuts in other departments or at clearly more senior levels do not count; and the timing is limited to layoffs within the previous year or already announced and planned. **These conditions decide only whether a case falls inside the review scope, not the outcome**, because the order sets no relationship between layoff counts or rates and the decision on a case.',
        examples: [
          'Lin works in data analysis at a Bay Area company that laid off three data analysts at the same level last November. The company is now filing an H-1B petition for Lin, who has a visa interview scheduled in October in Shanghai. All three conditions line up: the employer filing the case is the one that laid people off, the roles cut are comparable to Lin’s, and the layoff falls within the previous year, so the case sits inside the scope the order tells agencies to consider. Seeing that record, the consular officer is most likely to ask three things: why the position is still needed, how Lin’s duties differ from those of the people let go, and why the company is hiring rather than rehiring. Answers should match the duties on the offer letter and the LCA; the order requires no new document, so a layoff does not by itself mean extra paperwork.',
          'Lin holds an approved H-1B visa and is sent to secondary inspection on the first entry. The questions at the port are the same set: why the position is still needed, how Lin’s duties differ from those of the people let go, and what the company’s recruiting looked like before filing. Carrying the offer letter, a job description or an org summary makes that easier, though the order requires no specific document at entry. CBP decides on the spot whether to admit, refer to secondary inspection or refuse entry: the order makes relevant layoffs a factor to consider and does not say a layoff bars entry. If the record is unclear, the officer can be asked to explain the next step rather than leaving the outcome to guesswork at the port.',
          'Where the roles cut were unlike Lin’s, the answer at the window and at the port is the same: they are not comparable. Recruiting records, headcount changes or team structure can show that. Where the three conditions are not met, this need not be volunteered as a negative factor: the order asks about relevant layoffs, not any layoff in the company’s history.',
        ],
      },
      {
        title: 'Cross-checking wages, qualifications and jobs',
        text: 'State, DOL and DHS must consult Commerce, Education and the SBA for wage, employment, academic, industrial and other information to check statutory compliance. Our assessment is that explanation and verification work may increase; the order sets no uniform new degree or wage threshold.',
      },
      {
        title: 'Previously submitted LCA data is included',
        text: 'DOL’s Wage and Hour Division must begin reviewing prior LCA data within 30 days to assess further action under INA section 212(n)(2)(G). What is being reviewed is the employer’s filed LCA data rather than one person’s qualifications again: a lead must emerge before any investigation or enforcement proceeding follows, so a data review does not automatically invalidate an LCA or an approved H-1B petition.',
        examples: [
          'Chen’s H-1B petition is already approved and the employer filed several LCAs last year. What DOL is reviewing now is this employer’s LCA data, looking for leads that might warrant further enforcement. Specific cases come into play only if the review produces such a lead and a separate proceeding follows under law, so a data review neither means Chen’s approval will be revoked nor happens in front of him.',
          'If review later leads to a case against the employer, the basis is INA section 212(n)(2)(G) and the target is the employer as an entity, not Chen personally. What Chen should watch is whether the agency publishes review results and whether any employer-specific proceeding is opened, rather than reading a data review as a problem with his own status.',
        ],
      },
    ],
    outlook:
      'Watch whether DOL begins the data review on time. More important is whether State, DHS and DOL implementation documents answer two questions: how comparable roles are compared, and what weight layoffs carry in adjudication. Until those standards appear, this entry can confirm only that layoffs are a factor to consider, with consequences pending; any later regulatory changes require separate tracking of rulemaking and effective dates.',
    scenarios: [
      {
        name: 'Agencies implement under existing authority',
        headline: 'Operational standards become clearer',
        assumption:
          'Agencies publish policies, operational guidance or enforcement explanations.',
        effects:
          'Layoffs, wages and job information may be checked more systematically. Effects depend on the specific documents, without a presumed uniform denial outcome.',
        signals:
          'State, DHS and DOL implementation documents and actual case handling.',
      },
      {
        name: 'LCA data review leads to individual action',
        headline: 'Some employers face further investigation',
        assumption:
          'Wage and Hour review identifies a legal basis for further action.',
        effects:
          'Affected employers and cases would be subject to that action; this does not mean every LCA or H-1B petition is revoked.',
        signals:
          'DOL confirmation that review has begun, the grounds for investigation and its scope.',
      },
      {
        name: 'Later rules or court orders change implementation',
        headline: 'Procedure and scope may shift',
        assumption:
          'Agencies pursue amendments requiring rulemaking, or a court issues an order in an actual dispute.',
        effects:
          'Check regulatory terms, applicable dates or judicial relief separately. This is a possible outcome, not an assertion that litigation or a new rule already exists.',
        signals:
          'Official agency documents and court orders, rather than forum speculation alone.',
      },
    ],
    scope: [
      {
        label: 'Policy type',
        text: 'A presidential executive order directing agencies, tracked separately from federal regulations and SEVP administrative guidance.',
      },
      {
        label: 'Relevant stages',
        text: 'Section 2 covers H-1B petitions, LCAs and visas; section 3(a) also expressly addresses entry. Application to specific cases needs to be checked against agency documents.',
      },
      {
        label: 'Layoff scope',
        text: 'Set by three conditions together: the employer filing the LCA or petition, laid-off roles comparable to the offered job, and timing within the previous year or already planned. A case must meet all three to fall inside this review; the order does not say what follows.',
      },
      {
        label: 'No new fee in this order',
        text: 'The order itself sets no new H-1B fee and does not change current filing fees. The #02 $103,265 surcharge is a separate DHS proposal, tracked apart from this order.',
      },
    ],
    milestones: [
      {
        date: '2026-09-18',
        text: 'The President signed the order directing interagency coordination, consideration of relevant layoffs and review of prior LCA data.',
      },
      {
        date: '2026-09-23',
        text: 'The Federal Register published the order as Executive Order 14431 (91 FR 60501–60503, FR Doc. 2026-19555).',
      },
    ],
    next: [
      {
        date: '2026-10-18',
        text: 'Calculated as 30 calendar days after signature, this is the deadline for DOL to begin reviewing prior LCA data, not to finish the review or a common effective date.',
      },
      {
        date: 'Date unknown',
        text: 'Watch State, DHS and DOL implementation documents and actual review practices. Any later regulatory amendments will be tracked under the applicable rulemaking process.',
        estimate: true,
      },
    ],
    process: {
      detail:
        'The President signed the order on September 18, 2026, directing interagency coordination and consideration of relevant employer layoffs. The directive has been issued; implementation documents and actual review practices still need tracking. Signature does not establish that every review measure is already operational.',
      currentSummary: 'Order signed; tracking agency implementation',
      waitingFor:
        'DOL must begin reviewing prior LCA data within 30 days of signature (October 18 by calendar-day calculation); watch for State, DHS and DOL implementation documents.',
    },
  },
};
