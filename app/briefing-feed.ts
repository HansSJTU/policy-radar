import type { Language } from './language';
import { POLICY_IDS, type PolicyId } from './policy-ids.ts';

// Curated source-level developments (federal rulemaking, litigation, official
// guidance). Individual campus notices belong to the CPT school tracker instead.
export type BriefingEntry = {
  id: string;
  date: string;
  policyId: PolicyId;
  // "recent" reports something that happened; "upcoming" announces a dated
  // event. An upcoming entry never moves into the recent list on its own.
  timing: 'recent' | 'upcoming';
  // A later development that makes this upcoming date obsolete.
  supersededOn?: string;
  // First site snapshot with verified support; keep earlier audit gaps intact.
  availableOn?: string;
  zh: string;
  en: string;
};

export type BriefingItem = {
  id: string;
  date: string;
  policyId: PolicyId;
  summary: string;
};

// Newest first. Add new entries at the top.
export const briefingEntries: BriefingEntry[] = [
  {
    "id": "opt-fee-pra-comment-deadline",
    "date": "2026-12-07",
    "policyId": "opt-fee",
    "timing": "upcoming",
    "zh": "OPT 收费提案的信息收集（PRA）评论截止；一般规则评论是 11·09，两个期限不能混用。",
    "en": "Information-collection (PRA) comments on OPT fees close; general rule comments close November 9. These are distinct deadlines."
  },
  {
    "id": "h1b-separate-fee-appeal-answering-brief",
    "date": "2026-12-04",
    "policyId": "h1b-fee",
    "timing": "upcoming",
    "zh": "另项 100,000 美元收费案：第九巡回 26-6667 答辩书状期限，按原始排期通知；不是收费生效日。",
    "en": "Separate $100,000 case: answering brief due in Ninth Circuit 26-6667 under the original schedule notice; not a collection effective date."
  },
  {
    "id": "deference-comment-deadline",
    "date": "2026-11-13",
    "policyId": "nonimmigrant-deference",
    "timing": "upcoming",
    "zh": "取消 I-129 既往批准尊重原则的 NPRM 评论截止，美东当日午夜前，案卷 USCIS-2026-0529；不是生效日。",
    "en": "Comments close on the NPRM removing deference to prior I-129 approvals, before midnight ET; docket USCIS-2026-0529. This is not an effective date."
  },
  {
    "id": "grace-comment-deadline",
    "date": "2026-11-10",
    "policyId": "grace-period",
    "timing": "upcoming",
    "zh": "公众评论截止：美东当日午夜前，案卷 USCIS-2026-0364；这不是生效日。",
    "en": "Public comments due before midnight ET; docket USCIS-2026-0364. This is not an effective date."
  },
  {
    "id": "opt-fee-general-comment-deadline",
    "date": "2026-11-09",
    "policyId": "opt-fee",
    "timing": "upcoming",
    "zh": "OPT 收费 NPRM 一般评论截至美东 23:59，案卷 ICEB-2026-0100；不是收费生效日。",
    "en": "General OPT-fee NPRM comments close at 11:59 p.m. ET, docket ICEB-2026-0100; this is not a fee effective date."
  },
  {
    "id": "duration-appeal-opening-november9",
    "date": "2026-11-09",
    "policyId": "duration-status",
    "timing": "upcoming",
    "availableOn": "2026-10-26",
    "zh": "第一巡回法院 10·19 排期所列政府上诉主书状／附录期限；答辩、回复分别在相应送达后 30 天、10 天计算。不是规则恢复生效日。",
    "en": "Government appellate opening brief/appendix due under the First Circuit’s October 19 schedule; response and reply periods run 30 and 10 days from the respective service dates. Not a rule effective date."
  },
  {
    "id": "cpt-relief-hearing",
    "date": "2026-11-06",
    "policyId": "cpt-guidance",
    "timing": "upcoming",
    "zh": "AAU v. DHS：法院就 CPT 指引的初步禁令与暂缓申请举行听证，美东下午 3 点；听证不等于裁定，也不是恢复选修 CPT 的日期。",
    "en": "AAU v. DHS: hearing on the preliminary-injunction and stay motion against the CPT guidance, 3 p.m. ET. A hearing is not a ruling or a date for elective CPT to resume."
  },
  {
    "id": "h1b-separate-fee-appeal-opening-brief",
    "date": "2026-11-06",
    "policyId": "h1b-fee",
    "timing": "upcoming",
    "zh": "另项 100,000 美元收费案：第九巡回 26-6667 政府主书状期限；排期本身不暂停 9·30 命令，也不恢复收费。",
    "en": "Separate $100,000 case: government opening brief due in Ninth Circuit 26-6667. Scheduling does not stay the September 30 order or resume collection."
  },
  {
    "id": "duration-replies-november2",
    "date": "2026-11-02",
    "policyId": "duration-status",
    "timing": "upcoming",
    "zh": "简易判决回复意见截止；不是暂缓令到期日或规则生效日。",
    "en": "Reply memoranda on summary judgment are due; this is not the stay’s expiration or a rule effective date.",
    "supersededOn": "2026-10-23"
  },
  {
    "id": "duration-replies-order64-november2",
    "date": "2026-11-02",
    "policyId": "duration-status",
    "timing": "upcoming",
    "availableOn": "2026-10-25",
    "zh": "第 64 项电子命令明确要求回复在 11·02 前提交，未采用政府请求的 11·06；不是全国暂缓到期日。",
    "en": "Electronic order 64 expressly requires replies by November 2, not the requested November 6; this is not the nationwide stay’s expiration."
  },
  {
    "id": "duration-motions-order64-october30",
    "date": "2026-10-30",
    "policyId": "duration-status",
    "timing": "upcoming",
    "availableOn": "2026-10-25",
    "zh": "第 64 项电子命令延长后的简易判决动议期限；不是判决日或新规生效日。",
    "en": "Extended summary-judgment motion deadline under electronic order 64; not a judgment or rule effective date."
  },
  {
    "id": "cpt-government-opposition-october28",
    "date": "2026-10-28",
    "policyId": "cpt-guidance",
    "timing": "recent",
    "zh": "政府提交反对初步禁令及行政行动暂缓的意见（第 27 项）；第 26 项命令仅准许超页。11·06 下午 3 时美东听证安排未变，未取得准许暂缓的命令。",
    "en": "The government filed its opposition to preliminary relief and a stay (entry 27); order 26 only permits excess pages. The November 6 hearing at 3 p.m. ET remains scheduled, with no order granting relief obtained."
  },
  {
    "id": "cpt-government-response-october28",
    "date": "2026-10-28",
    "policyId": "cpt-guidance",
    "timing": "upcoming",
    "supersededOn": "2026-10-28",
    "zh": "政府答复起诉及初步禁令／暂缓申请的延长期限；11·06 听证另行进行。",
    "en": "Extended deadline for the government’s response to the complaint and preliminary-injunction/stay motion; the hearing remains separately scheduled for November 6."
  },
  {
    "id": "h1b-separate-fee-october28-title",
    "date": "2026-10-28",
    "policyId": "h1b-fee",
    "timing": "recent",
    "zh": "另项 100,000 美元案新增涉及案件管理会议、暂停动议和听证排期的案卷标题；正文未取得，裁定结果及新排期待核实，不能据此认定恢复收费。",
    "en": "The separate $100,000 case adds a docket title concerning case management, a stay motion and hearing settings. Operative text, disposition and new dates remain unverified; the title does not establish resumed collection."
  },
  {
    "id": "h1b-separate-fee-case-management",
    "date": "2026-10-27",
    "policyId": "h1b-fee",
    "timing": "upcoming",
    "zh": "另项 100,000 美元案：9·30 命令及 10·20 联合说明仍列下午 2 时（太平洋时间）Zoom 案件管理会议；后续调整待核实，不属于 103,265 美元 NPRM。",
    "en": "Separate $100,000 case: the September 30 order and October 20 joint statement list a Zoom case-management conference at 2 p.m. Pacific, subject to later scheduling changes. This is distinct from the $103,265 NPRM."
  },
  {
    "id": "duration-summary-judgment-october26",
    "date": "2026-10-26",
    "policyId": "duration-status",
    "timing": "upcoming",
    "zh": "简易判决动议及补充意见截止；不是法院作出最终判决的日期，全国暂缓没有因此解除。",
    "en": "Summary-judgment motions and supplemental memoranda are due; this is not a judgment date and does not lift the nationwide stay.",
    "supersededOn": "2026-10-23"
  },
  {
    "id": "duration-order64-record65-verified",
    "date": "2026-10-25",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "核实 10·23 第 64 项完整电子命令：动议 10·30、回复 11·02；政府已提交第 65 项行政记录索引通知及附件。全国暂缓继续。",
    "en": "Verified complete October 23 electronic order 64: motions October 30, replies November 2. Government record-index notice 65 and attachments were filed; the nationwide stay continues."
  },
  {
    "id": "duration-record-october23",
    "date": "2026-10-23",
    "policyId": "duration-status",
    "timing": "upcoming",
    "zh": "第 61 项命令：被告传送行政记录并向地区法院提交索引；不是规则生效日。",
    "en": "Order 61: defendants transmit the administrative record and file its index in district court; not a rule effective date."
  },
  {
    "id": "duration-october23-unverified-extension-ruling",
    "date": "2026-10-23",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "公开摘要新增延期裁定及第 65 项通知；正文未取得，延期结果和最新期限待核实。旧排期暂不列作确认的未来日期，不表示政府请求已获准。",
    "en": "The public feed adds an extension ruling and notice 65. Their texts, disposition and current deadlines remain unverified. Old calendar cards are withheld as unconfirmed, not because the government’s request is assumed granted."
  },
  {
    "id": "perm-oira-concluded-october23",
    "date": "2026-10-23",
    "policyId": "perm-modernization",
    "timing": "recent",
    "availableOn": "2026-10-25",
    "zh": "OIRA 以 Consistent with Change 结束 PERM 提案发布前审查；尚未核实公开 NPRM，结案不等于生效。",
    "en": "OIRA concluded PERM prepublication review as Consistent with Change; no public NPRM was verified, and conclusion is not implementation."
  },
  {
    "id": "duration-october22-extension-motion",
    "date": "2026-10-22",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "政府第 63 项申请将简易判决动议由 10·26 延至 10·30、回复由 11·02 延至 11·06；未取得准许命令，仍保留第 61 项现行期限，全国暂缓不变。",
    "en": "Government entry 63 requests moving summary-judgment motions from October 26 to October 30 and replies from November 2 to November 6. No granting order was obtained; order 61’s deadlines and the nationwide stay are retained."
  },
  {
    "id": "h1b-separate-fee-joint-statement",
    "date": "2026-10-20",
    "policyId": "h1b-fee",
    "timing": "upcoming",
    "zh": "另项 100,000 美元收费案：9·30 第 130 号命令要求双方提交联合案件管理说明；政府已申请暂停地区诉讼程序，排期可能调整。",
    "en": "Separate $100,000 payment case: September 30 order 130 requires a joint case-management statement; the government has moved to stay district proceedings, so the schedule may change."
  },
  {
    "id": "h1b-separate-fee-joint-statement-october20",
    "date": "2026-10-20",
    "policyId": "h1b-fee",
    "timing": "recent",
    "zh": "另项 100,000 美元案：双方提交联合案件管理说明，仍列 10·27 Zoom 会议；暂停地区诉讼请求待裁，建议排期不是法院命令。",
    "en": "Separate $100,000 case: the parties filed a joint case management statement still listing the October 27 Zoom conference. District-stay requests remain pending; proposed dates are not court orders."
  },
  {
    "id": "cpt-response-extension-october19",
    "date": "2026-10-19",
    "policyId": "cpt-guidance",
    "timing": "recent",
    "zh": "法院第 22 项电子命令将政府答复起诉及暂缓申请延至 10·28；未暂停 CPT 指引。",
    "en": "Electronic order 22 extends the government’s response to the complaint and relief motion to October 28; it does not stay the CPT guidance."
  },
  {
    "id": "duration-appeal-october19-schedule",
    "date": "2026-10-19",
    "policyId": "duration-status",
    "timing": "recent",
    "availableOn": "2026-10-26",
    "zh": "上诉案卷独立确认政府主书状／附录 11·09 到期，解除此前仅依赖政府动议记载的缺口；后续按送达日计算，全国暂缓继续。",
    "en": "The appellate docket independently confirms November 9 for the government’s opening brief/appendix, resolving reliance on a party filing. Later periods run from service; the nationwide stay continues."
  },
  {
    "id": "h1b-integrity-lca-review-deadline",
    "date": "2026-10-18",
    "policyId": "h1b-program-integrity",
    "timing": "upcoming",
    "zh": "按签署后 30 个日历天计算，DOL 最迟须开始复查既往 LCA 数据；不是完成期限或统一生效日。",
    "en": "Calculated as 30 calendar days after signature, DOL must begin reviewing prior LCA data by this date; it is not a completion deadline or common effective date."
  },
  {
    "id": "duration-summary-judgment-order-october16",
    "date": "2026-10-16",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "法院第 61 项命令排定 10·23 行政记录、10·26 简易判决动议、11·02 回复；9·14 全国暂缓继续。",
    "en": "Court order 61 sets the record for October 23, summary-judgment motions for October 26 and replies for November 2; the September 14 nationwide stay continues."
  },
  {
    "id": "cloudera-perm-settlement",
    "date": "2026-10-16",
    "policyId": "h1b-program-integrity",
    "timing": "recent",
    "availableOn": "2026-10-26",
    "zh": "DOJ 公布 Cloudera 和解：PERM 自我禁入 24 个月，从最近一次申请撤回日起算，期间不得提交 ETA Form 9089 或刊登 PERM 招聘广告；实际起止日未核实。",
    "en": "DOJ announced Cloudera’s settlement: 24 months of PERM self-debarment from the latest application withdrawal, without ETA Form 9089 filings or PERM recruitment advertisements. Actual start/end dates remain unverified."
  },
  {
    "id": "h1b-separate-fee-opposition-october15",
    "date": "2026-10-15",
    "policyId": "h1b-fee",
    "timing": "recent",
    "zh": "另项 100,000 美元收费案：原告第 140 项反对政府暂停地区诉讼及相关程序请求；这是当事人意见，不是法院裁定或恢复收费。",
    "en": "Separate $100,000 case: plaintiffs’ entry 140 opposes the government’s district-proceedings stay and related request; this is a party filing, not a court order or resumed collection."
  },
  {
    "id": "deference-nprm-published",
    "date": "2026-10-14",
    "policyId": "nonimmigrant-deference",
    "timing": "recent",
    "zh": "取消 I-129 既往批准尊重原则的 NPRM 正式刊登（91 FR 65119），评论截至 11·13；尚未生效，不自动拒绝续期。",
    "en": "The NPRM removing deference to prior I-129 approvals was published (91 FR 65119), with comments due November 13. It is not in effect and does not automatically deny renewals."
  },
  {
    "id": "ead-extension-final-rule-published",
    "date": "2026-10-14",
    "policyId": "ead-auto-extension",
    "timing": "recent",
    "zh": "取消部分 EAD 续期自动延期的最终规则刊登并当日生效（91 FR 65306），原样承接 2025 临时最终规则；续期界线仍为 2025·10·30。",
    "en": "The final rule removing certain EAD renewal extensions was published and took effect (91 FR 65306), adopting the 2025 IFR unchanged; the renewal cutoff remains October 30, 2025."
  },
  {
    "id": "deference-publication-scheduled",
    "date": "2026-10-14",
    "policyId": "nonimmigrant-deference",
    "timing": "upcoming",
    "zh": "预定刊登取消 I-129 既往批准尊重原则的 NPRM；评论期按刊登后 30 天计算，尚未取得确定日历截止日，不是生效日。",
    "en": "Publication of the I-129 deference NPRM is scheduled; comments run 30 days from publication, but the calendar deadline is not yet confirmed. This is not an effective date.",
    "supersededOn": "2026-10-14"
  },
  {
    "id": "ead-extension-final-publication-scheduled",
    "date": "2026-10-14",
    "policyId": "ead-auto-extension",
    "timing": "upcoming",
    "zh": "预定刊登并生效的最终规则原样承接 2025 临时最终规则；续期申请界线仍为 2025·10·30，不是 10·14 才首次取消。",
    "en": "The final rule is scheduled for publication and effectiveness, adopting the 2025 IFR unchanged. The renewal cutoff remains October 30, 2025; removal does not first begin on October 14.",
    "supersededOn": "2026-10-14"
  },
  {
    "id": "h1b-separate-fee-appeal-schedule-recorded",
    "date": "2026-10-14",
    "policyId": "h1b-fee",
    "timing": "recent",
    "zh": "另项 100,000 美元收费案：地区案卷录入第九巡回 10·09 排期通知，上诉案号 26-6667，主书状 11·06、答辩 12·04；不是恢复收费命令。",
    "en": "Separate $100,000 case: the district docket recorded the Ninth Circuit’s October 9 notice for appeal 26-6667, with opening and answering briefs due November 6 and December 4. It does not restore collection."
  },
  {
    "id": "deference-nprm-preview",
    "date": "2026-10-13",
    "policyId": "nonimmigrant-deference",
    "timing": "recent",
    "zh": "DHS 公开 NPRM 预览，拟删除 I-129 中对相同当事方、相同事实既往批准的一般尊重原则；尚未生效，不自动拒绝续期。",
    "en": "DHS released an NPRM preview proposing removal of general deference to prior I-129 approvals involving the same parties and facts; not in effect and not automatic renewal denial."
  },
  {
    "id": "ead-extension-final-preview",
    "date": "2026-10-13",
    "policyId": "ead-auto-extension",
    "timing": "recent",
    "zh": "最终稿预览原样承接取消部分 EAD 自动延期的 2025 规则；保留界线前合格申请和法定例外，与 H-4 资格撤销议程分开。",
    "en": "The final-rule preview adopts the 2025 removal of certain EAD extensions unchanged, retaining qualifying pre-cutoff applications and legal exceptions; separate from H-4 eligibility rescission."
  },
  {
    "id": "h1b-separate-fee-ninth-circuit-appeal",
    "date": "2026-10-09",
    "policyId": "h1b-fee",
    "timing": "recent",
    "zh": "另项 100,000 美元收费案：政府就 9·30 命令向第九巡回法院上诉，并申请暂停地区诉讼程序；上诉本身不暂停该命令，也不涉及 103,265 美元 NPRM。",
    "en": "Separate $100,000 case: the government appealed the September 30 order to the Ninth Circuit and moved to stay district proceedings. The appeal alone does not stay that order and does not concern the $103,265 NPRM."
  },
  {
    "id": "duration-plaintiffs-procedural-plan",
    "date": "2026-10-09",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "原告第 60 项请求立即作出撤销规则的最终判决，反对暂停地区诉讼；其引用的上诉相对期限尚未以法院原命令独立核实，不能当成确定排期或恢复生效日。",
    "en": "Plaintiffs’ entry 60 seeks immediate final judgment vacating the rule and opposes pausing district proceedings. Its quoted appellate periods were not independently checked against the original order and are not confirmed calendar deadlines or a rule-resumption date."
  },
  {
    "id": "duration-next-step-submissions",
    "date": "2026-10-09",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "地区法院记录第 59—60 项书面提交；政府请求暂停地区诉讼等待上诉，或采用备选排期。这是当事方请求，不是解除全国暂缓令的裁定。",
    "en": "District entries 59–60 record written submissions. The government requests a district-proceedings stay pending appeal or an alternative schedule; this is a party request, not an order lifting nationwide relief."
  },
  {
    "id": "opt-fee-nprm-published",
    "date": "2026-10-08",
    "policyId": "opt-fee",
    "timing": "recent",
    "zh": "ICE 正式提议学校在 OPT 推荐前先缴首次 70,000 美元、后续 30,000 美元，允许成本转嫁；一般评论截止 11·09，新收费尚未生效。",
    "en": "ICE formally proposes school prepayment of $70,000 initially and $30,000 subsequently, allowing cost pass-through. General comments close November 9; the fees are not in effect."
  },
  {
    "id": "targeted-perm-october8-announcement",
    "date": "2026-10-08",
    "policyId": "h1b-program-integrity",
    "timing": "recent",
    "availableOn": "2026-10-26",
    "zh": "白宫发布会中，劳工部官员宣布暂停微软、Adobe 等被点名企业的新 PERM 申请和待审处理；属于定向执法，最新企业书面状态待核实，不等于全国停办或 AC29 提案发布。",
    "en": "At a White House press conference, a DOL official announced suspension of new and pending PERM applications for named employers including Microsoft and Adobe. This is targeted enforcement; current written employer status is unverified, not a nationwide halt or AC29 proposal publication."
  },
  {
    "id": "cpt-relief-memorandum",
    "date": "2026-10-06",
    "policyId": "cpt-guidance",
    "timing": "recent",
    "zh": "原告提交支持 CPT 初步禁令与暂缓请求的意见；尚未核实改变指引执行的法院命令，学校资格仍须逐项核对。",
    "en": "Plaintiffs filed argument supporting preliminary-injunction/stay requests; no order changing guidance implementation was verified, and school eligibility still requires individual checking."
  },
  {
    "id": "cpt-associations-lawsuit-filed",
    "date": "2026-10-05",
    "policyId": "cpt-guidance",
    "timing": "recent",
    "zh": "AAU、Presidents’ Alliance、NAFSA、AICUM 起诉 DHS 等并申请初步禁令与行政行动暂缓（1:26-cv-14520）；起诉本身不恢复选修 CPT。",
    "en": "AAU, Presidents’ Alliance, NAFSA and AICUM sued DHS and others and requested preliminary-injunction/stay relief (1:26-cv-14520); filing alone does not restore elective CPT."
  },
  {
    "id": "duration-conference-held",
    "date": "2026-10-02",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "状态会议已举行，第 56 项要求双方 10·09 提交后续程序方案；不是新的规则生效日。",
    "en": "Status conference held; entry 56 required next-step submissions by October 9. This is not a new rule effective date."
  },
  {
    "id": "duration-status-conference",
    "date": "2026-10-02",
    "policyId": "duration-status",
    "timing": "upcoming",
    "zh": "中午 12 点，波士顿第 1 法庭举行现场状态会议；这是诉讼安排，不是新生效日。",
    "en": "In-person status conference at noon, Courtroom 1, Boston. This is a court proceeding, not a new effective date.",
    "supersededOn": "2026-10-02"
  },
  {
    "id": "h1b-separate-fee-enforcement-enjoined",
    "date": "2026-09-30",
    "policyId": "h1b-fee",
    "timing": "recent",
    "zh": "Global Nurse Force 案第 130 号命令撤销机构收费政策，并禁止按原公告及延长公告执行，直到履行 APA／RFA 程序；与 103,265 美元收费提案分开。",
    "en": "Global Nurse Force order 130 vacates agency fee policies and enjoins enforcement under the original and extended proclamations until APA/RFA procedures are completed; this is separate from the $103,265 proposal."
  },
  {
    "id": "duration-government-appeal",
    "date": "2026-09-30",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "DHS/ICE 等提出上诉，第一巡回法院案号 26-2112；上诉本身不解除全国暂缓令，现行 D/S 继续适用。",
    "en": "DHS/ICE and others appealed; First Circuit case 26-2112 was assigned. Filing alone does not lift the nationwide stay, and the current D/S framework continues."
  },
  {
    "id": "h1b-fee-comments-closed",
    "date": "2026-09-24",
    "policyId": "h1b-fee",
    "timing": "recent",
    "zh": "拟议附加费的公众评论期已结束；DHS 尚未发布最终规则，103,265 美元收费未生效。",
    "en": "The proposed surcharge comment period closed; DHS has not published a final rule, and the $103,265 fee is not in effect."
  },
  {
    "id": "h1b-fee-comment-deadline",
    "date": "2026-09-24",
    "policyId": "h1b-fee",
    "timing": "upcoming",
    "zh": "NPRM 评论期截止；窗口关闭后，DHS 将审阅意见并决定是否修订提案。",
    "en": "The NPRM comment period closes. DHS will then review the record and decide whether to revise the proposal."
  },
  {
    "id": "h1b-separate-entry-proclamation-renewed",
    "date": "2026-09-18",
    "policyId": "h1b-fee",
    "timing": "recent",
    "zh": "白宫把另项针对部分境外 H-1B 申请的 100,000 美元入境限制延至 2027·09·21；执行政策已遭法院撤销，上诉庭拒绝暂缓。这不是 103,265 美元收费提案，也不证明已恢复征收。",
    "en": "The White House extended the separate $100,000 entry restriction for certain overseas H-1B cases to September 21, 2027. Courts vacated its implementation policy and denied a stay; this is distinct from the proposed $103,265 fee and does not itself restore collection."
  },
  {
    "id": "h1b-integrity-order-signed",
    "date": "2026-09-18",
    "policyId": "h1b-program-integrity",
    "timing": "recent",
    "zh": "总统签署行政命令，要求跨部门协作、考虑相关裁员并开始复查既往 LCA 数据；原文没有规定裁员即拒签。",
    "en": "The President signed an order directing interagency coordination, consideration of relevant layoffs and review of prior LCA data; it does not impose automatic denial after layoffs."
  },
  {
    "id": "duration-cra-senate-calendar",
    "date": "2026-09-17",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "参议院司法委员会经请愿被解除审议，CRA 撤销决议 S.J.Res.213 列入参议院一般议程；这只是程序进展，不是表决或通过，与法院暂缓分开跟踪。",
    "en": "The Senate Judiciary Committee was discharged by petition and CRA disapproval resolution S.J.Res.213 was placed on the Senate calendar. This is a procedural step, not a vote or passage, and is tracked separately from the court stay."
  },
  {
    "id": "duration-effective-date",
    "date": "2026-09-15",
    "policyId": "duration-status",
    "timing": "upcoming",
    "supersededOn": "2026-09-14",
    "zh": "若法院未暂停，固定期限规则按计划生效，F/J/I 将不再沿用 D/S。",
    "en": "Unless the court stays it, the rule is scheduled to take effect and F/J/I admissions will no longer use D/S."
  },
  {
    "id": "duration-cra-introduced",
    "date": "2026-09-14",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "议员宣布提出 CRA 决议，拟撤销最终规则；提出不等于成法，法院全国暂缓是另一个程序。",
    "en": "Lawmakers announced a CRA resolution to disapprove the final rule. Introduction is not enactment; the nationwide court stay is a separate proceeding."
  },
  {
    "id": "duration-nationwide-stay",
    "date": "2026-09-14",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "法院全国推迟整项最终规则生效，禁止 DHS 继续实施；不是永久撤销，原 9·15 生效日已推迟。",
    "en": "The court postponed the entire rule nationwide and barred further implementation. This is not permanent vacatur; the September 15 effective date is postponed."
  },
  {
    "id": "perm-modernization-oira",
    "date": "2026-09-14",
    "policyId": "perm-modernization",
    "timing": "recent",
    "zh": "DOL 将 PERM 招聘与雇主合规改革提案送交 OIRA，进入发布前审查；尚未生效。",
    "en": "DOL submitted its PERM recruitment and employer-compliance reform proposal for OIRA prepublication review; it is not in effect."
  },
  {
    "id": "grace-publication",
    "date": "2026-09-11",
    "policyId": "grace-period",
    "timing": "recent",
    "zh": "NPRM 正式刊登，公众评论截止为 11 月 10 日美东午夜前；尚未生效。",
    "en": "The NPRM was published. Public comments are due November 10 before midnight ET; it is not in effect."
  },
  {
    "id": "opt-fee-oira-completed",
    "date": "2026-09-11",
    "policyId": "opt-fee",
    "timing": "recent",
    "zh": "OIRA 带修改完成审查；金额与缴费方尚未公布，尚未生效。",
    "en": "OIRA completed review with changes. The amount and payer remain unpublished; it is not in effect."
  },
  {
    "id": "grace-preview",
    "date": "2026-09-10",
    "policyId": "grace-period",
    "timing": "recent",
    "zh": "NPRM 预览稿公开，涵盖八类工作身份及其家属；现行规则未变。",
    "en": "The NPRM preview is public, covering eight worker classifications and their dependents. The current rule is unchanged."
  },
  {
    "id": "duration-hearing-under-advisement",
    "date": "2026-09-03",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "庭审记录第 70 页：法官希望最迟 9·14 决定，也可能先发短期 TRO 争取时间。这次没有当庭裁决，申请留待裁定，9·14 不是保证。",
    "en": "Transcript p. 70: the judge hoped to decide by September 14 and might first issue a brief TRO for more time. No bench ruling was issued; September 14 is not guaranteed."
  },
  {
    "id": "duration-injunction-hearing",
    "date": "2026-09-03",
    "policyId": "duration-status",
    "timing": "upcoming",
    "zh": "法院官方日历列明将举行初步禁令听证；规则是否暂停可能在生效日前明确。",
    "en": "The court’s official calendar lists a preliminary-injunction hearing. Whether the rule is stayed may become clear before its effective date."
  },
  {
    "id": "duration-government-opposition",
    "date": "2026-09-02",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "政府随超页申请附上拟议反对意见，请求法院驳回 APA § 705 暂缓与初步禁令，并主张任何救济都应只限原告。这份文件不是法院裁定。",
    "en": "The government attached its proposed opposition to a motion for leave to exceed the page limit, asking the court to deny APA § 705 relief and a preliminary injunction and arguing that any relief should be limited to the plaintiffs. The filing is not a court ruling."
  },
  {
    "id": "grace-oira-cleared",
    "date": "2026-08-27",
    "policyId": "grace-period",
    "timing": "recent",
    "zh": "OIRA 已带修改放行；DHS 可发布 NPRM，但现行 60 天宽限期暂未改变。",
    "en": "OIRA cleared the proposal with changes. DHS may publish an NPRM, but the current 60-day grace period has not changed."
  },
  {
    "id": "h1b-fee-nprm",
    "date": "2026-08-25",
    "policyId": "h1b-fee",
    "timing": "recent",
    "zh": "DHS 公布附加费提案；覆盖全部 cap-subject petitions，目前仍未生效。",
    "en": "DHS published the surcharge proposal. It covers all cap-subject petitions and is not currently in effect."
  },
  {
    "id": "cpt-integral-guidance",
    "date": "2026-08-24",
    "policyId": "cpt-guidance",
    "timing": "recent",
    "zh": "SEVP 问答进一步解释选修课、全员必需与合作协议要求；选修课型 CPT 已在多校停批。",
    "en": "SEVP’s Q&A further explained elective courses, the all-student requirement, and cooperative agreements; several universities have stopped approving elective-course CPT."
  },
  {
    "id": "h1b-reform-oira",
    "date": "2026-08-24",
    "policyId": "h1b-reform",
    "timing": "recent",
    "zh": "拟议规则进入 OIRA 审查；第三方派驻与 cap-exempt 资格可能收紧。",
    "en": "The proposed rule entered OIRA review and may tighten third-party placement and cap-exempt eligibility."
  },
  {
    "id": "opt-fee-oira",
    "date": "2026-08-20",
    "policyId": "opt-fee",
    "timing": "recent",
    "zh": "“OPT Fees”进入 OIRA 审查；正文和传闻中的 $100,000 金额均未公开。",
    "en": "The “OPT Fees” rule entered OIRA review. Neither the proposal nor the reported $100,000 amount is public."
  },
  {
    "id": "duration-lawsuit",
    "date": "2026-08-18",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "高校联盟起诉并申请初步禁令，试图阻止固定期限规则在 9·15 生效。",
    "en": "A university coalition sued and requested a preliminary injunction to stop the rule from taking effect on September 15."
  },
  {
    "id": "cpt-risk-notice",
    "date": "2026-08-12",
    "policyId": "cpt-guidance",
    "timing": "recent",
    "zh": "SEVP 已要求 CPT 必须是完成学位不可缺少、且全员必需的环节，并强调学校和 DSO 的合规责任。多所学校随后暂停 optional CPT。",
    "en": "SEVP already required CPT to be indispensable to the degree and required for every student, alongside school and DSO compliance duties; several universities then paused optional CPT."
  },
  {
    "id": "ead-discretion-comment-close",
    "date": "2026-08-04",
    "policyId": "ead-discretion",
    "timing": "recent",
    "zh": "NPRM 评论期已结束。DHS 正在审阅意见，OPT 和 H-4 EAD 的现行审查标准暂时没变。",
    "en": "The NPRM comment period closed. DHS is reviewing comments, while current OPT and H-4 EAD standards remain unchanged."
  },
];

const dayMs = 86_400_000;

function dateValue(date: string): number {
  return Date.parse(`${date}T00:00:00Z`);
}

// Same-day entries are ordered by policy rank.
const rankOf = (id: PolicyId) => POLICY_IDS.indexOf(id);

export function getThirtyDayBriefing(
  asOf: string,
  language: Language = 'zh',
): { recent: BriefingItem[]; upcoming: BriefingItem[] } {
  const asOfValue = dateValue(asOf);
  const daysFromNow = (entry: BriefingEntry) =>
    Math.round((dateValue(entry.date) - asOfValue) / dayMs);
  const localize = ({
    id,
    date,
    policyId,
    ...entry
  }: BriefingEntry): BriefingItem => ({
    id,
    date,
    policyId,
    summary: entry[language],
  });

  const recent = briefingEntries
    .filter(
      (entry) =>
        entry.timing === 'recent' &&
        (!entry.availableOn || asOf >= entry.availableOn) &&
        daysFromNow(entry) <= 0 &&
        daysFromNow(entry) >= -29,
    )
    .sort(
      (a, b) =>
        dateValue(b.date) - dateValue(a.date) ||
        rankOf(a.policyId) - rankOf(b.policyId),
    )
    .map(localize);

  const upcoming = briefingEntries
    .filter(
      (entry) =>
        entry.timing === 'upcoming' &&
        (!entry.availableOn || asOf >= entry.availableOn) &&
        (!entry.supersededOn || asOf < entry.supersededOn) &&
        daysFromNow(entry) >= 1 &&
        daysFromNow(entry) <= 30,
    )
    .sort(
      (a, b) =>
        dateValue(a.date) - dateValue(b.date) ||
        rankOf(a.policyId) - rankOf(b.policyId),
    )
    .map(localize);

  return { recent, upcoming };
}

export function getBriefingDateLabels(asOf: string) {
  const label = (offset: number) =>
    new Date(dateValue(asOf) + offset * dayMs)
      .toISOString()
      .slice(5, 10)
      .replace('-', '·');
  return {
    recent: `${label(-29)}—${label(0)}`,
    upcoming: `${label(1)}—${label(30)}`,
  };
}
