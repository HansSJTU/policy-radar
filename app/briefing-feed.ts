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
  // A later development that makes this entry obsolete: a moved date, or a
  // placeholder replaced once the full record is available.
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
    "zh": "OPT 收费提案的信息收集（PRA）评论截止；规则一般评论另于 11·09 截止。",
    "en": "Information-collection (PRA) comments on the OPT fees close; general rule comments close separately on November 9."
  },
  {
    "id": "h1b-separate-fee-appeal-answering-brief",
    "date": "2026-12-04",
    "policyId": "h1b-fee",
    "timing": "upcoming",
    "zh": "10 万美元入境费案：第九巡回 26-6667 原告答辩书截止。",
    "en": "Separate $100,000 fee case: plaintiffs’ answering brief due in Ninth Circuit 26-6667."
  },
  {
    "id": "deference-comment-deadline",
    "date": "2026-11-13",
    "policyId": "nonimmigrant-deference",
    "timing": "upcoming",
    "zh": "取消 I-129 上次批准尊重原则的 NPRM 评论截止，美东当日午夜前，案卷 USCIS-2026-0529。",
    "en": "Comments close on the NPRM removing deference to prior I-129 approvals, before midnight ET; docket USCIS-2026-0529."
  },
  {
    "id": "grace-comment-deadline",
    "date": "2026-11-10",
    "policyId": "grace-period",
    "timing": "upcoming",
    "zh": "取消 60 天宽限期提案的公众评论截止，美东当日午夜前，案卷 USCIS-2026-0364。",
    "en": "Comments close on the proposal to end the 60-day grace period, before midnight ET; docket USCIS-2026-0364."
  },
  {
    "id": "opt-fee-general-comment-deadline",
    "date": "2026-11-09",
    "policyId": "opt-fee",
    "timing": "upcoming",
    "zh": "OPT 收费 NPRM 一般评论截止，美东 23:59，案卷 ICEB-2026-0100。",
    "en": "General comments on the OPT-fee NPRM close at 11:59 p.m. ET; docket ICEB-2026-0100."
  },
  {
    "id": "duration-appeal-opening-november9",
    "date": "2026-11-09",
    "policyId": "duration-status",
    "timing": "upcoming",
    "availableOn": "2026-10-26",
    "zh": "D/S 上诉：政府向第一巡回法院提交上诉书和附录；答辩在送达后 30 天、回复再 10 天。",
    "en": "D/S appeal: government’s First Circuit opening brief and appendix due; the response follows 30 days after service and the reply 10 days after that."
  },
  {
    "id": "cpt-relief-hearing",
    "date": "2026-11-06",
    "policyId": "cpt-guidance",
    "timing": "upcoming",
    "zh": "AAU v. DHS：法院就 CPT 指引的初步禁令与暂缓申请举行听证，美东下午 3 点。",
    "en": "AAU v. DHS: hearing on the motion to block the CPT guidance, 3 p.m. ET."
  },
  {
    "id": "h1b-separate-fee-appeal-opening-brief",
    "date": "2026-11-06",
    "policyId": "h1b-fee",
    "timing": "upcoming",
    "zh": "10 万美元入境费案：政府向第九巡回法院提交上诉书（26-6667）。",
    "en": "Separate $100,000 fee case: government’s opening brief due in the Ninth Circuit (26-6667)."
  },
  {
    "id": "cpt-reply-november4",
    "date": "2026-11-04",
    "policyId": "cpt-guidance",
    "timing": "upcoming",
    "zh": "CPT 诉讼：原告回应书截止（最多 15 页）。",
    "en": "CPT lawsuit: plaintiffs’ reply brief due (up to 15 pages)."
  },
  {
    "id": "duration-replies-november2",
    "date": "2026-11-02",
    "policyId": "duration-status",
    "timing": "upcoming",
    "zh": "D/S 案最后一轮回复截止。",
    "en": "D/S case: summary-judgment replies due.",
    "supersededOn": "2026-10-23"
  },
  {
    "id": "duration-replies-order64-november2",
    "date": "2026-11-02",
    "policyId": "duration-status",
    "timing": "upcoming",
    "availableOn": "2026-10-25",
    "zh": "D/S 案最后一轮回复截止（法院第 64 项命令维持 11·02）。",
    "en": "D/S case: summary-judgment replies due (order 64 kept November 2)."
  },
  {
    "id": "duration-cross-motions-text-october30",
    "date": "2026-10-30",
    "availableOn": "2026-10-31",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "D/S 案双方请求法院直接判决：政府要求全部胜诉，退一步也希望只把规则发回 DHS 修改而不撤销，或缩小暂缓范围；原告要求撤销整项新规。全国暂缓继续。",
    "en": "D/S case: both sides moved for summary judgment. The government asks to win every claim, or at least to have the rule sent back to DHS without being struck down, or the pause narrowed; plaintiffs ask to vacate the whole rule. The nationwide stay continues."
  },
  {
    "id": "cpt-reply-permission-october30",
    "date": "2026-10-30",
    "policyId": "cpt-guidance",
    "timing": "recent",
    "zh": "CPT 诉讼：法院准许原告在 11·04 前提交最多 15 页的回复；11·06 听证照常。",
    "en": "CPT lawsuit: the court allowed plaintiffs to file a reply of up to 15 pages by November 4; the November 6 hearing stands."
  },
  {
    "id": "duration-october30-filing-types",
    "date": "2026-10-30",
    "policyId": "duration-status",
    "timing": "recent",
    "supersededOn": "2026-10-31",
    "zh": "D/S 案公开案卷新增判决请求（第 66、67 项）。",
    "en": "D/S case: summary-judgment filings (entries 66 and 67) appear on the public docket."
  },
  {
    "id": "duration-motions-order64-october30",
    "date": "2026-10-30",
    "policyId": "duration-status",
    "timing": "upcoming",
    "supersededOn": "2026-10-30",
    "availableOn": "2026-10-25",
    "zh": "D/S 案判决请求截止（第 64 项命令延后）。",
    "en": "D/S case: summary-judgment motions due (extended by order 64)."
  },
  {
    "id": "h1b-separate-fee-entry144-text",
    "date": "2026-10-28",
    "availableOn": "2026-10-29",
    "policyId": "h1b-fee",
    "timing": "recent",
    "zh": "10 万美元入境费案：地区法院拒绝暂停地区诉讼，要求政府提交行政记录。",
    "en": "Separate $100,000 fee case: the district court denied a stay of district proceedings and ordered the administrative record produced."
  },
  {
    "id": "cpt-government-opposition-october28",
    "date": "2026-10-28",
    "policyId": "cpt-guidance",
    "timing": "recent",
    "zh": "CPT 诉讼：政府提交反对意见，认为原告无权起诉、广播不能被法院审查；11·06 听证照常。",
    "en": "CPT lawsuit: the government opposed, arguing the plaintiffs cannot sue and the broadcasts cannot be reviewed by a court; the November 6 hearing stands."
  },
  {
    "id": "cpt-government-response-october28",
    "date": "2026-10-28",
    "policyId": "cpt-guidance",
    "timing": "upcoming",
    "supersededOn": "2026-10-28",
    "zh": "CPT 诉讼：政府答复起诉及暂缓申请的截止日。",
    "en": "CPT lawsuit: government’s response to the complaint and relief motion due."
  },
  {
    "id": "h1b-separate-fee-october28-title",
    "date": "2026-10-28",
    "policyId": "h1b-fee",
    "timing": "recent",
    "supersededOn": "2026-10-29",
    "zh": "10 万美元入境费案：案卷新增案件管理会议和暂停动议的处理记录。",
    "en": "Separate $100,000 fee case: the docket adds an entry on case management and the stay motion."
  },
  {
    "id": "h1b-separate-fee-case-management",
    "date": "2026-10-27",
    "policyId": "h1b-fee",
    "timing": "upcoming",
    "zh": "10 万美元入境费案：Zoom 案件管理会议，太平洋时间下午 2 点。",
    "en": "Separate $100,000 fee case: Zoom case-management conference at 2 p.m. Pacific."
  },
  {
    "id": "duration-summary-judgment-october26",
    "date": "2026-10-26",
    "policyId": "duration-status",
    "timing": "upcoming",
    "zh": "D/S 案判决请求和补充意见截止。",
    "en": "D/S case: summary-judgment motions and supplemental memoranda due.",
    "supersededOn": "2026-10-23"
  },
  {
    "id": "duration-order64-record65-verified",
    "date": "2026-10-25",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "D/S 案：法院第 64 项命令把判决请求延至 10·30、回复仍为 11·02；政府已提交行政记录索引。全国暂缓继续。",
    "en": "D/S case: order 64 moved summary-judgment motions to October 30 and kept replies due November 2; the government filed the administrative-record index. The nationwide stay continues."
  },
  {
    "id": "duration-record-october23",
    "date": "2026-10-23",
    "policyId": "duration-status",
    "timing": "upcoming",
    "zh": "D/S 案：政府传送行政记录并提交索引的截止日。",
    "en": "D/S case: deadline for the government to transmit the administrative record and file its index."
  },
  {
    "id": "duration-october23-unverified-extension-ruling",
    "date": "2026-10-23",
    "policyId": "duration-status",
    "timing": "recent",
    "supersededOn": "2026-10-25",
    "zh": "D/S 案：法院就延期申请作出裁定，政府提交行政记录索引。",
    "en": "D/S case: the court ruled on the extension request and the government filed its record index."
  },
  {
    "id": "perm-oira-concluded-october23",
    "date": "2026-10-23",
    "policyId": "perm-modernization",
    "timing": "recent",
    "availableOn": "2026-10-25",
    "zh": "OIRA 以 Consistent with Change 结束 PERM 改革提案审查；下一步是 DOL 公开 NPRM。",
    "en": "OIRA concluded review of the PERM reform proposal as Consistent with Change; next, DOL publishes the NPRM."
  },
  {
    "id": "duration-october22-extension-motion",
    "date": "2026-10-22",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "D/S 案：政府申请把判决请求延至 10·30、回复延至 11·06。",
    "en": "D/S case: the government asked to move summary-judgment motions to October 30 and replies to November 6."
  },
  {
    "id": "h1b-separate-fee-joint-statement",
    "date": "2026-10-20",
    "policyId": "h1b-fee",
    "timing": "upcoming",
    "zh": "10 万美元入境费案：双方联合案件管理说明截止。",
    "en": "Separate $100,000 fee case: joint case-management statement due."
  },
  {
    "id": "h1b-separate-fee-joint-statement-october20",
    "date": "2026-10-20",
    "policyId": "h1b-fee",
    "timing": "recent",
    "zh": "10 万美元入境费案：双方提交联合案件管理说明，提出不同的后续排期。",
    "en": "Separate $100,000 fee case: the parties filed a joint case-management statement proposing different schedules."
  },
  {
    "id": "cpt-response-extension-october19",
    "date": "2026-10-19",
    "policyId": "cpt-guidance",
    "timing": "recent",
    "zh": "CPT 诉讼：法院准许政府延期至 10·28 答复。",
    "en": "CPT lawsuit: the court gave the government until October 28 to respond."
  },
  {
    "id": "duration-appeal-october19-schedule",
    "date": "2026-10-19",
    "policyId": "duration-status",
    "timing": "recent",
    "availableOn": "2026-10-26",
    "zh": "D/S 上诉：第一巡回法院排定政府上诉书和附录 11·09 到期。",
    "en": "D/S appeal: the First Circuit set the government’s opening brief and appendix for November 9."
  },
  {
    "id": "h1b-integrity-lca-review-deadline",
    "date": "2026-10-18",
    "policyId": "h1b-program-integrity",
    "timing": "upcoming",
    "zh": "H-1B 行政命令：DOL 须在签署后 30 天内开始复查既往 LCA 数据。",
    "en": "H-1B executive order: DOL must begin reviewing prior LCA data within 30 days of signature."
  },
  {
    "id": "duration-summary-judgment-order-october16",
    "date": "2026-10-16",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "D/S 案：法院排定 10·23 行政记录、10·26 判决请求、11·02 回复。",
    "en": "D/S case: the court set the record for October 23, summary-judgment motions for October 26 and replies for November 2."
  },
  {
    "id": "cloudera-perm-settlement",
    "date": "2026-10-16",
    "policyId": "h1b-program-integrity",
    "timing": "recent",
    "availableOn": "2026-10-26",
    "zh": "DOJ 公布 Cloudera 和解：自最近一次 PERM 申请撤回日起自我禁入 PERM 24 个月，期间不得提交 ETA Form 9089 或刊登 PERM 招聘广告。",
    "en": "DOJ announced Cloudera’s settlement: 24 months of PERM self-debarment from its latest withdrawal, with no ETA Form 9089 filings or PERM recruitment ads."
  },
  {
    "id": "h1b-separate-fee-opposition-october15",
    "date": "2026-10-15",
    "policyId": "h1b-fee",
    "timing": "recent",
    "zh": "10 万美元入境费案：原告反对暂停地区诉讼。",
    "en": "Separate $100,000 fee case: plaintiffs opposed a stay of district proceedings."
  },
  {
    "id": "deference-nprm-published",
    "date": "2026-10-14",
    "policyId": "nonimmigrant-deference",
    "timing": "recent",
    "zh": "取消 I-129 上次批准尊重原则的 NPRM 正式刊登（91 FR 65119），评论截至 11·13。",
    "en": "The NPRM removing deference to prior I-129 approvals was published (91 FR 65119); comments close November 13."
  },
  {
    "id": "ead-extension-final-rule-published",
    "date": "2026-10-14",
    "policyId": "ead-auto-extension",
    "timing": "recent",
    "zh": "取消部分 EAD 续期自动延期的最终规则刊登并当天生效（91 FR 65306），照原样保留 2025 年的临时规则；分界日仍是 2025·10·30。",
    "en": "The final rule ending automatic extensions for certain EAD renewals was published and took effect (91 FR 65306), keeping the 2025 interim rule unchanged; the cutoff is still October 30, 2025."
  },
  {
    "id": "deference-publication-scheduled",
    "date": "2026-10-14",
    "policyId": "nonimmigrant-deference",
    "timing": "upcoming",
    "zh": "预定刊登取消 I-129 上次批准尊重原则的 NPRM，评论期为刊登后 30 天。",
    "en": "The I-129 deference NPRM is scheduled for publication, with a 30-day comment period.",
    "supersededOn": "2026-10-14"
  },
  {
    "id": "ead-extension-final-publication-scheduled",
    "date": "2026-10-14",
    "policyId": "ead-auto-extension",
    "timing": "upcoming",
    "zh": "取消部分 EAD 续期自动延期的最终规则预定刊登并生效，照原样保留 2025 年的临时规则；分界日仍是 2025·10·30。",
    "en": "The final rule ending automatic extensions for certain EAD renewals is scheduled to be published and take effect, keeping the 2025 interim rule unchanged; the cutoff stays October 30, 2025.",
    "supersededOn": "2026-10-14"
  },
  {
    "id": "h1b-separate-fee-appeal-schedule-recorded",
    "date": "2026-10-14",
    "policyId": "h1b-fee",
    "timing": "recent",
    "zh": "10 万美元入境费案：第九巡回法院排定上诉书，上诉书 11·06、答辩 12·04（案号 26-6667）。",
    "en": "Separate $100,000 fee case: the Ninth Circuit set briefing in appeal 26-6667, with the opening brief due November 6 and the answering brief December 4."
  },
  {
    "id": "deference-nprm-preview",
    "date": "2026-10-13",
    "policyId": "nonimmigrant-deference",
    "timing": "recent",
    "zh": "DHS 公开 NPRM 预览，拟删除 I-129 中对雇主、员工和事实都相同上次批准的参照原则。",
    "en": "DHS released an NPRM preview proposing to remove general deference to prior I-129 approvals involving the same parties and facts."
  },
  {
    "id": "ead-extension-final-preview",
    "date": "2026-10-13",
    "policyId": "ead-auto-extension",
    "timing": "recent",
    "zh": "最终规则预览：照原样保留 2025 年取消部分 EAD 自动延期的规定；分界日前递交的续期和法律例外不受影响。",
    "en": "Final-rule preview: the 2025 removal of certain EAD extensions is kept unchanged; renewals filed before the cutoff and legal exceptions are not affected."
  },
  {
    "id": "h1b-separate-fee-ninth-circuit-appeal",
    "date": "2026-10-09",
    "policyId": "h1b-fee",
    "timing": "recent",
    "zh": "10 万美元入境费案：政府就 9·30 命令向第九巡回法院上诉，并申请暂停地区诉讼；上诉期间命令继续有效。",
    "en": "Separate $100,000 fee case: the government appealed the September 30 order to the Ninth Circuit and moved to stay district proceedings; the order stays in force during the appeal."
  },
  {
    "id": "duration-plaintiffs-procedural-plan",
    "date": "2026-10-09",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "D/S 案：原告请求立即判决撤销规则，反对暂停地区诉讼。",
    "en": "D/S case: plaintiffs asked for an immediate judgment vacating the rule and opposed pausing the district case."
  },
  {
    "id": "duration-next-step-submissions",
    "date": "2026-10-09",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "D/S 案：政府请求暂停地区诉讼等待上诉，或采用备选排期。",
    "en": "D/S case: the government asked to pause the district case pending appeal, or to adopt an alternative schedule."
  },
  {
    "id": "opt-fee-nprm-published",
    "date": "2026-10-08",
    "policyId": "opt-fee",
    "timing": "recent",
    "zh": "ICE 正式提议学校在 OPT 推荐前先缴首次 70,000 美元、后续 30,000 美元，可把成本转给学生或雇主；一般评论截止 11·09。",
    "en": "ICE formally proposed that schools pay $70,000 initially and $30,000 subsequently before recommending OPT, with costs passable to students or employers; general comments close November 9."
  },
  {
    "id": "targeted-perm-october8-announcement",
    "date": "2026-10-08",
    "policyId": "h1b-program-integrity",
    "timing": "recent",
    "availableOn": "2026-10-26",
    "zh": "白宫发布会上，劳工部官员宣布暂停微软、Adobe 等被点名企业的新 PERM 申请和待审处理；针对的是这些企业。",
    "en": "At a White House press conference, a DOL official announced that new and pending PERM applications are suspended for named employers including Microsoft and Adobe; the action targets those employers."
  },
  {
    "id": "cpt-relief-memorandum",
    "date": "2026-10-06",
    "policyId": "cpt-guidance",
    "timing": "recent",
    "zh": "CPT 诉讼：原告提交支持初步禁令与暂缓申请的法律意见。",
    "en": "CPT lawsuit: plaintiffs filed their memorandum supporting the preliminary-injunction and stay motion."
  },
  {
    "id": "cpt-associations-lawsuit-filed",
    "date": "2026-10-05",
    "policyId": "cpt-guidance",
    "timing": "recent",
    "zh": "AAU、Presidents’ Alliance、NAFSA、AICUM 起诉 DHS 等，申请暂缓 CPT 指引（1:26-cv-14520）；在法院裁定前指引照常执行。",
    "en": "AAU, Presidents’ Alliance, NAFSA and AICUM sued DHS and others to block the CPT guidance (1:26-cv-14520); the guidance applies until the court rules."
  },
  {
    "id": "duration-conference-held",
    "date": "2026-10-02",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "D/S 案状态会议举行，法院要求双方 10·09 前提交后续程序方案。",
    "en": "D/S case: status conference held; both sides must propose next steps by October 9."
  },
  {
    "id": "duration-status-conference",
    "date": "2026-10-02",
    "policyId": "duration-status",
    "timing": "upcoming",
    "zh": "D/S 案：中午 12 点在波士顿第 1 法庭举行现场状态会议。",
    "en": "D/S case: in-person status conference at noon, Courtroom 1, Boston.",
    "supersededOn": "2026-10-02"
  },
  {
    "id": "h1b-separate-fee-enforcement-enjoined",
    "date": "2026-09-30",
    "policyId": "h1b-fee",
    "timing": "recent",
    "zh": "10 万美元入境费：Global Nurse Force 案法院撤销收费政策，并禁止按原公告和延长公告收费，除非先走完公开征求意见的程序。和 103,265 美元的附加费提案是两回事。",
    "en": "Separate $100,000 entry fee: in Global Nurse Force the court struck down the collection policy and barred collection under both proclamations until the government goes through public notice and comment. This is separate from the $103,265 surcharge proposal."
  },
  {
    "id": "duration-government-appeal",
    "date": "2026-09-30",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "D/S 案：DHS/ICE 等提出上诉（第一巡回法院 26-2112）；暂缓继续有效，D/S 照旧。",
    "en": "D/S case: DHS/ICE and others appealed (First Circuit No. 26-2112); the stay stays in place and D/S continues as before."
  },
  {
    "id": "h1b-fee-comments-closed",
    "date": "2026-09-24",
    "policyId": "h1b-fee",
    "timing": "recent",
    "zh": "103,265 美元附加费提案评论期结束；DHS 还没发最终规则。",
    "en": "Comments closed on the $103,265 surcharge proposal; DHS has not issued a final rule."
  },
  {
    "id": "h1b-fee-comment-deadline",
    "date": "2026-09-24",
    "policyId": "h1b-fee",
    "timing": "upcoming",
    "zh": "103,265 美元附加费提案评论截止，之后 DHS 审评论、决定是否修改。",
    "en": "Comments close on the $103,265 surcharge proposal; DHS then reviews them and decides whether to revise it."
  },
  {
    "id": "h1b-separate-entry-proclamation-renewed",
    "date": "2026-09-18",
    "policyId": "h1b-fee",
    "timing": "recent",
    "zh": "白宫把另一笔 10 万美元 H-1B 入境费（针对部分境外申请）延长到 2027·09·21。法院已撤销收这笔钱的政策，上诉法院也拒绝暂缓，所以目前收不了。它和 103,265 美元附加费提案是两回事。",
    "en": "The White House extended the separate $100,000 H-1B entry fee (for some petitions for people abroad) to September 21, 2027. Courts have struck down the policy for collecting it and an appeals court refused to pause that ruling, so it cannot be collected now. It is separate from the $103,265 surcharge proposal."
  },
  {
    "id": "h1b-integrity-order-signed",
    "date": "2026-09-18",
    "policyId": "h1b-program-integrity",
    "timing": "recent",
    "zh": "总统签署行政命令：各部门审 H-1B 时要协作、考虑雇主的相关裁员，并复查以前提交的 LCA；命令没说有裁员就拒。",
    "en": "The President signed an order telling agencies to coordinate on H-1B review, consider employers’ relevant layoffs and re-check past LCAs; it does not say layoffs mean denial."
  },
  {
    "id": "duration-cra-senate-calendar",
    "date": "2026-09-17",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "推翻 D/S 新规的国会决议 S.J.Res.213 进入参议院待议清单，还没有表决；这和法院暂缓是两条线。",
    "en": "S.J.Res.213, the congressional resolution to overturn the D/S rule, was placed on the Senate calendar; no vote yet. This is separate from the court stay."
  },
  {
    "id": "duration-effective-date",
    "date": "2026-09-15",
    "policyId": "duration-status",
    "timing": "upcoming",
    "supersededOn": "2026-09-14",
    "zh": "D/S 新规原定生效日（法院之后已暂缓）。",
    "en": "The D/S rule’s original start date (later stayed by the court)."
  },
  {
    "id": "duration-cra-introduced",
    "date": "2026-09-14",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "议员提出推翻 D/S 新规的国会决议；法院暂缓是另一条线。",
    "en": "Lawmakers introduced a resolution to overturn the D/S rule; the court stay is a separate track."
  },
  {
    "id": "duration-nationwide-stay",
    "date": "2026-09-14",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "法院在全国范围暂缓整项 D/S 新规，禁止 DHS 执行；原定 9·15 的生效日作废。",
    "en": "The court paused the entire D/S rule nationwide and barred DHS from enforcing it; the September 15 start date is off."
  },
  {
    "id": "perm-modernization-oira",
    "date": "2026-09-14",
    "policyId": "perm-modernization",
    "timing": "recent",
    "zh": "DOL 把 PERM 招聘和雇主合规改革提案送交 OIRA 审查。",
    "en": "DOL sent its PERM recruiting and compliance reform proposal to OIRA for review."
  },
  {
    "id": "grace-publication",
    "date": "2026-09-11",
    "policyId": "grace-period",
    "timing": "recent",
    "zh": "取消 60 天宽限期的提案正式刊登，评论 11 月 10 日美东午夜前截止。",
    "en": "The proposal to end the 60-day grace period was published; comments close before midnight ET on November 10."
  },
  {
    "id": "opt-fee-oira-completed",
    "date": "2026-09-11",
    "policyId": "opt-fee",
    "timing": "recent",
    "zh": "OPT 收费规则 OIRA 审完（有修改）；金额和由谁交费还没公布。",
    "en": "OIRA finished reviewing the OPT fee rule, with changes; the amount and who pays had not been published."
  },
  {
    "id": "ead-seven-plaintiff-order-september11",
    "date": "2026-09-11",
    "availableOn": "2026-11-01",
    "policyId": "ead-auto-extension",
    "timing": "recent",
    "zh": "Jane Doe 案初步禁令（9·10 签署、9·11 录入）：只保护起诉的七个人，法院没有在全国范围暂停。",
    "en": "Jane Doe preliminary injunction (signed September 10, entered September 11): relief only for the seven people who sued; the court declined nationwide relief."
  },
  {
    "id": "grace-preview",
    "date": "2026-09-10",
    "policyId": "grace-period",
    "timing": "recent",
    "zh": "取消 60 天宽限期的提案预览公开，涉及八类工作签证及其家属；现行宽限期照常。",
    "en": "The proposal to end the 60-day grace period was previewed, covering eight work-visa types and their families; the current grace period still applies."
  },
  {
    "id": "duration-hearing-under-advisement",
    "date": "2026-09-03",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "D/S 听证：法院听取双方意见，没有当庭裁决，留待裁定。庭审记录第 70 页显示法官希望最晚 9·14 决定，也可能先发短期临时禁令。",
    "en": "D/S hearing: the court heard both sides and took the matter under advisement without ruling from the bench. Transcript page 70 shows the judge hoped to decide by September 14 and might first issue a short temporary restraining order."
  },
  {
    "id": "duration-injunction-hearing",
    "date": "2026-09-03",
    "policyId": "duration-status",
    "timing": "upcoming",
    "zh": "法院官方日历：D/S 案初步禁令听证。",
    "en": "Court calendar: preliminary-injunction hearing in the D/S case."
  },
  {
    "id": "duration-government-opposition",
    "date": "2026-09-02",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "D/S 案：政府提交反对意见，请法院不要暂缓新规，并主张就算暂缓也只应限于原告。",
    "en": "D/S case: the government opposed, asking the court not to pause the rule and arguing any relief should cover only the plaintiffs."
  },
  {
    "id": "grace-oira-cleared",
    "date": "2026-08-27",
    "policyId": "grace-period",
    "timing": "recent",
    "zh": "取消 60 天宽限期的提案 OIRA 审完（有修改），DHS 可以公布提案；现行 60 天宽限期照常。",
    "en": "OIRA finished reviewing the proposal to end the 60-day grace period, with changes; DHS can now publish it. The current 60-day grace period still applies."
  },
  {
    "id": "h1b-fee-nprm",
    "date": "2026-08-25",
    "policyId": "h1b-fee",
    "timing": "recent",
    "zh": "DHS 公布 103,265 美元附加费提案，覆盖所有要抽签的 H-1B 申请。",
    "en": "DHS published the $103,265 surcharge proposal, covering every H-1B petition that goes through the lottery."
  },
  {
    "id": "cpt-integral-guidance",
    "date": "2026-08-24",
    "policyId": "cpt-guidance",
    "timing": "recent",
    "zh": "SEVP 问答进一步解释选修课、“所有学生”和合作协议的要求；多所学校已停批选修课型 CPT。",
    "en": "SEVP’s FAQ further explained electives, “all students” and cooperative agreements; several schools have stopped approving elective-course CPT."
  },
  {
    "id": "h1b-reform-oira",
    "date": "2026-08-24",
    "policyId": "h1b-reform",
    "timing": "recent",
    "zh": "H-1B 改革提案送交 OIRA 审查，可能收紧外派岗位和免抽签资格。",
    "en": "The H-1B reform proposal went to OIRA for review; it may tighten client-site jobs and cap-exempt status."
  },
  {
    "id": "opt-fee-oira",
    "date": "2026-08-20",
    "policyId": "opt-fee",
    "timing": "recent",
    "zh": "OPT 收费规则送交 OIRA 审查；提案内容和传闻中的 10 万美元金额都还没公开。",
    "en": "The OPT fee rule went to OIRA for review; neither the text nor the rumored $100,000 figure was public."
  },
  {
    "id": "duration-lawsuit",
    "date": "2026-08-18",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "高校联盟起诉，请求法院在 9·15 之前阻止 D/S 新规生效。",
    "en": "A university coalition sued and asked the court to block the D/S rule before its September 15 start date."
  },
  {
    "id": "cpt-risk-notice",
    "date": "2026-08-12",
    "policyId": "cpt-guidance",
    "timing": "recent",
    "zh": "SEVP 要求 CPT 必须是学位不可缺少、所有学生必修的实习，并强调学校和 DSO 的责任；多所学校随后暂停选修型 CPT。",
    "en": "SEVP said CPT must be indispensable to the degree and required of every student, and stressed schools’ and DSOs’ responsibility; several schools then paused optional CPT."
  },
  {
    "id": "ead-discretion-comment-close",
    "date": "2026-08-04",
    "policyId": "ead-discretion",
    "timing": "recent",
    "zh": "I-765 犯罪记录审查提案评论截止。DHS 在审评论，OPT 和 H-4 EAD 的现行审查标准不变。",
    "en": "Comments closed on the I-765 criminal-record proposal. DHS is reviewing them; current OPT and H-4 EAD standards are unchanged."
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
        (!entry.supersededOn || asOf < entry.supersededOn) &&
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
