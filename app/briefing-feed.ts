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
    "zh": "OPT 收费提案里新表格和数据收集部分（PRA）的评论截止。规则本身的评论已在 11·09 截止。",
    "en": "Comments close on the new forms and data collection (PRA) in the OPT-fee proposal. Comments on the rule itself closed November 9."
  },
  {
    "id": "h1b-separate-fee-appeal-answering-brief",
    "date": "2026-12-04",
    "policyId": "h1b-fee",
    "timing": "upcoming",
    "zh": "10 万美元入境费案：原告向第九巡回上诉法院提交答辩书的截止日（案号 26-6667）。",
    "en": "Separate $100,000 fee case: plaintiffs’ answering brief due in the Ninth Circuit (No. 26-6667)."
  },
  {
    "id": "ead-doe-hearing-november16",
    "date": "2026-11-16",
    "availableOn": "2026-11-04",
    "policyId": "ead-auto-extension",
    "timing": "upcoming",
    "zh": "Jane Doe 案：法院听取政府结束案件的请求，并召开排期会议，美西下午 4 点／美东晚上 7 点。",
    "en": "Jane Doe case: hearing on the government’s request to end the case and scheduling conference, 4 p.m. Pacific / 7 p.m. Eastern."
  },
  {
    "id": "deference-comment-deadline",
    "date": "2026-11-13",
    "policyId": "nonimmigrant-deference",
    "timing": "upcoming",
    "zh": "I-129 延期“参照上次批准”原则拟取消：公众评论截止，美东当天午夜前，在 regulations.gov 案卷 USCIS-2026-0529 下提交。",
    "en": "Comments close on the proposal to stop deferring to earlier I-129 approvals at extension time, before midnight ET; file on regulations.gov under docket USCIS-2026-0529."
  },
  {
    "id": "grace-comment-deadline",
    "date": "2026-11-10",
    "policyId": "grace-period",
    "timing": "upcoming",
    "zh": "取消失业后 60 天宽限期的提案：公众评论截止，美东当天午夜前，在 regulations.gov 案卷 USCIS-2026-0364 下提交。",
    "en": "Comments close on the proposal to end the 60-day grace period after a job ends, before midnight ET; file on regulations.gov under docket USCIS-2026-0364."
  },
  {
    "id": "opt-fee-general-comment-deadline",
    "date": "2026-11-09",
    "policyId": "opt-fee",
    "timing": "upcoming",
    "zh": "OPT 收费提案：规则的公众评论截止，美东 23:59 前，在 regulations.gov 案卷 ICEB-2026-0100 下提交。",
    "en": "OPT-fee proposal: public comments on the rule close at 11:59 p.m. ET; file on regulations.gov under docket ICEB-2026-0100."
  },
  {
    "id": "duration-appeal-opening-november9",
    "date": "2026-11-09",
    "policyId": "duration-status",
    "timing": "upcoming",
    "availableOn": "2026-10-26",
    "zh": "D/S 上诉：政府向第一巡回上诉法院提交上诉书和附录。原告收到后 30 天内答辩，政府再 10 天内回复。",
    "en": "D/S appeal: the government’s brief and appendix are due in the First Circuit. Plaintiffs answer within 30 days of receiving them, and the government replies 10 days after that."
  },
  {
    "id": "wage-final-rule-oira-november6",
    "date": "2026-11-06",
    "availableOn": "2026-11-07",
    "policyId": "prevailing-wage",
    "timing": "recent",
    "zh": "DOL 将工资最终规则送 OIRA 做公布前审查。现行工资标准继续适用，最终幅度和生效日由公布的最终规则确定。",
    "en": "DOL sent the wage final rule to OIRA for review before publication. Current wage levels continue to apply; the published final rule will set the final levels and effective date."
  },
  {
    "id": "cpt-hearing-held-november6",
    "date": "2026-11-06",
    "availableOn": "2026-11-07",
    "policyId": "cpt-guidance",
    "timing": "recent",
    "zh": "法官已听取双方关于暂停 CPT 指引的辩论，决定稍后裁定。指引继续执行。",
    "en": "The judge heard both sides on pausing the CPT guidance and decided to rule later. The guidance remains in use."
  },
  {
    "id": "duration-government-record-excerpts-november6",
    "date": "2026-11-06",
    "availableOn": "2026-11-07",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "政府补交判决请求引用的行政记录目录和摘录，供法官审阅。D/S 全国暂缓继续。",
    "en": "The government filed the record index and excerpts cited in its request for judgment for the judge to review. The nationwide D/S stay continues."
  },

  {
    "id": "cpt-relief-hearing",
    "date": "2026-11-06",
    "policyId": "cpt-guidance",
    "timing": "upcoming",
    "supersededOn": "2026-11-07",
    "zh": "CPT 诉讼（AAU v. DHS）：法院开庭，听双方辩论要不要在判决前先暂停 CPT 指引，美东下午 3 点。",
    "en": "CPT lawsuit (AAU v. DHS): hearing on whether to pause the CPT guidance before a final ruling, 3 p.m. ET."
  },
  {
    "id": "h1b-separate-fee-appeal-opening-brief",
    "date": "2026-11-06",
    "policyId": "h1b-fee",
    "timing": "upcoming",
    "zh": "10 万美元入境费案：政府向第九巡回上诉法院提交上诉书（案号 26-6667）。",
    "en": "Separate $100,000 fee case: the government’s opening brief is due in the Ninth Circuit (No. 26-6667)."
  },
  {
    "id": "cpt-reply-november4",
    "date": "2026-11-04",
    "policyId": "cpt-guidance",
    "timing": "upcoming",
    "zh": "CPT 诉讼：原告回应政府反对意见的截止日（最多 15 页）。",
    "en": "CPT lawsuit: plaintiffs’ reply to the government’s opposition is due (up to 15 pages)."
  },
  {
    "id": "cpt-plaintiffs-reply-november4",
    "date": "2026-11-04",
    "availableOn": "2026-11-04",
    "policyId": "cpt-guidance",
    "timing": "recent",
    "zh": "原告提交回应，主张两份通知改变了长期允许选修实习计学分申请 CPT 的做法，请求法院暂缓。法院同时开放登记后电话旁听；11·06 美东下午 3 点听证，指引继续执行。",
    "en": "Plaintiffs replied that the notices changed the longstanding practice of allowing elective internships for credit to qualify for CPT and asked the court for a pause. The court also allowed registered public telephone access. The hearing is November 6 at 3 p.m. ET; the guidance remains in use."
  },
  {
    "id": "duration-replies-november2",
    "date": "2026-11-02",
    "policyId": "duration-status",
    "timing": "upcoming",
    "zh": "D/S 案：双方最后一轮书面回复截止。",
    "en": "D/S case: final written replies due.",
    "supersededOn": "2026-10-23"
  },
  {
    "id": "duration-replies-order64-november2",
    "date": "2026-11-02",
    "policyId": "duration-status",
    "timing": "upcoming",
    "availableOn": "2026-10-25",
    "zh": "D/S 案：双方最后一轮书面回复截止（法院 10·23 的排期命令维持 11·02）。",
    "en": "D/S case: final written replies due (the court’s October 23 scheduling order kept November 2)."
  },
  {
    "id": "duration-plaintiffs-response-november2",
    "date": "2026-11-02",
    "availableOn": "2026-11-03",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "D/S 案：原告回应政府，主张 DHS 没有充分分析成本收益、SEVIS 替代方案和公众意见，32 天的评论期也太短。他们要求法院撤销整项新规。全国暂缓继续，政府上诉书 11·09 到期。",
    "en": "D/S case: plaintiffs responded that DHS inadequately assessed costs and benefits, SEVIS alternatives and public comments, and that the 32-day comment period was too short. They ask the court to strike down the whole rule. The nationwide pause continues; the government’s appeal brief is due November 9."
  },
  {
    "id": "duration-government-reply-november2",
    "date": "2026-11-02",
    "availableOn": "2026-11-02",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "D/S 案：政府交最后一轮回复，要求判政府赢；退一步，请法院只把规则发回 DHS 补充说明、新规保留，并让暂缓只保护起诉方。原告要求撤销整项新规。全国暂缓继续，政府上诉书 11·09 到期。",
    "en": "D/S case: the government filed its final reply asking to win; as a fallback, it asks the court to send the rule back to DHS for more explanation while keeping it, and to limit the pause to the plaintiffs. Plaintiffs want the whole rule struck down. The nationwide pause continues; the government’s appeal brief is due November 9."
  },
  {
    "id": "ead-doe-hearing-rescheduled-october30",
    "date": "2026-10-30",
    "availableOn": "2026-11-04",
    "policyId": "ead-auto-extension",
    "timing": "recent",
    "zh": "Jane Doe 案：法院把政府请求结束案件的听证和排期会议改至 11·16，美西下午 4 点／美东晚上 7 点。",
    "en": "Jane Doe case: the court moved the hearing on the government’s request to end the case and the scheduling conference to November 16, 4 p.m. Pacific / 7 p.m. Eastern."
  },
  {
    "id": "duration-cross-motions-text-october30",
    "date": "2026-10-30",
    "availableOn": "2026-10-31",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "D/S 案：双方都请法院不开庭、直接根据书面材料判决。政府要求全部胜诉，退一步也希望只把规则发回 DHS 修改而不撤销，或缩小暂缓范围；原告要求撤销整项新规。全国暂缓继续。",
    "en": "D/S case: both sides asked the court to decide the case on the written record without a trial. The government asks to win outright, or at least to have the rule sent back to DHS without being struck down, or the pause narrowed; plaintiffs ask the court to strike down the whole rule. The nationwide pause continues."
  },
  {
    "id": "cpt-reply-permission-october30",
    "date": "2026-10-30",
    "policyId": "cpt-guidance",
    "timing": "recent",
    "zh": "CPT 诉讼：法院允许原告在 11·04 前交一份最多 15 页的回应；11·06 听证照常。",
    "en": "CPT lawsuit: the court let plaintiffs file a reply of up to 15 pages by November 4; the November 6 hearing stands."
  },
  {
    "id": "duration-october30-filing-types",
    "date": "2026-10-30",
    "policyId": "duration-status",
    "timing": "recent",
    "supersededOn": "2026-10-31",
    "zh": "D/S 案：双方的直接判决请求出现在法院公开案卷上。",
    "en": "D/S case: both sides’ requests for judgment on the written record appear on the public docket."
  },
  {
    "id": "duration-motions-order64-october30",
    "date": "2026-10-30",
    "policyId": "duration-status",
    "timing": "upcoming",
    "supersededOn": "2026-10-30",
    "availableOn": "2026-10-25",
    "zh": "D/S 案：双方提交直接判决请求的截止日（法院 10·23 命令延后到这天）。",
    "en": "D/S case: requests for judgment on the written record due (moved to this date by the court’s October 23 order)."
  },
  {
    "id": "h1b-separate-fee-entry144-text",
    "date": "2026-10-28",
    "availableOn": "2026-10-29",
    "policyId": "h1b-fee",
    "timing": "recent",
    "zh": "10 万美元入境费案：地区法院拒绝在上诉期间暂停审理，并要求政府交出行政记录。",
    "en": "Separate $100,000 fee case: the district court refused to pause its case during the appeal and ordered the government to turn over its administrative record."
  },
  {
    "id": "cpt-government-opposition-october28",
    "date": "2026-10-28",
    "policyId": "cpt-guidance",
    "timing": "recent",
    "zh": "CPT 诉讼：政府提交反对意见，认为原告没有起诉资格、SEVP 的通知不能被法院审查；11·06 听证照常。",
    "en": "CPT lawsuit: the government opposed, arguing the plaintiffs lack standing and SEVP’s notices cannot be reviewed by a court; the November 6 hearing stands."
  },
  {
    "id": "cpt-government-response-october28",
    "date": "2026-10-28",
    "policyId": "cpt-guidance",
    "timing": "upcoming",
    "supersededOn": "2026-10-28",
    "zh": "CPT 诉讼：政府答复起诉和暂停申请的截止日。",
    "en": "CPT lawsuit: the government’s response to the complaint and the request to pause the guidance is due."
  },
  {
    "id": "h1b-separate-fee-october28-title",
    "date": "2026-10-28",
    "policyId": "h1b-fee",
    "timing": "recent",
    "supersededOn": "2026-10-29",
    "zh": "10 万美元入境费案：法院就案件安排和暂停审理的申请作出处理。",
    "en": "Separate $100,000 fee case: the court acted on case scheduling and the request to pause the case."
  },
  {
    "id": "h1b-separate-fee-case-management",
    "date": "2026-10-27",
    "policyId": "h1b-fee",
    "timing": "upcoming",
    "zh": "10 万美元入境费案：法院在 Zoom 上开案件安排会议，太平洋时间下午 2 点。",
    "en": "Separate $100,000 fee case: case-scheduling conference on Zoom at 2 p.m. Pacific."
  },
  {
    "id": "duration-summary-judgment-october26",
    "date": "2026-10-26",
    "policyId": "duration-status",
    "timing": "upcoming",
    "zh": "D/S 案：双方提交直接判决请求和补充意见的截止日。",
    "en": "D/S case: requests for judgment on the written record and supplemental memoranda due.",
    "supersededOn": "2026-10-23"
  },
  {
    "id": "duration-order64-record65-verified",
    "date": "2026-10-25",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "D/S 案：法院把双方提交直接判决请求的期限延到 10·30，最后一轮回复仍是 11·02；政府交出了行政记录的目录。全国暂缓继续。",
    "en": "D/S case: the court moved requests for judgment on the written record to October 30 and kept final replies due November 2; the government filed the index of its administrative record. The nationwide pause continues."
  },
  {
    "id": "duration-record-october23",
    "date": "2026-10-23",
    "policyId": "duration-status",
    "timing": "upcoming",
    "zh": "D/S 案：政府交出行政记录（制定新规时依据的全部材料）和目录的截止日。",
    "en": "D/S case: deadline for the government to turn over the administrative record (everything it relied on to write the rule) and its index."
  },
  {
    "id": "duration-october23-unverified-extension-ruling",
    "date": "2026-10-23",
    "policyId": "duration-status",
    "timing": "recent",
    "supersededOn": "2026-10-25",
    "zh": "D/S 案：法院就延期申请作出裁定，政府交出行政记录目录。",
    "en": "D/S case: the court ruled on the extension request and the government filed its record index."
  },
  {
    "id": "perm-oira-concluded-october23",
    "date": "2026-10-23",
    "policyId": "perm-modernization",
    "timing": "recent",
    "availableOn": "2026-10-25",
    "zh": "PERM 改革提案通过白宫 OIRA 审查，结论是按意见修改后同意发布（Consistent with Change）。下一步是 DOL 公布提案全文。",
    "en": "The White House’s OIRA finished reviewing the PERM reform proposal and cleared it once changes are made (Consistent with Change). Next, DOL publishes the full proposal."
  },
  {
    "id": "duration-october22-extension-motion",
    "date": "2026-10-22",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "D/S 案：政府申请把直接判决请求的期限延到 10·30、回复延到 11·06。",
    "en": "D/S case: the government asked to move requests for judgment to October 30 and replies to November 6."
  },
  {
    "id": "h1b-separate-fee-joint-statement",
    "date": "2026-10-20",
    "policyId": "h1b-fee",
    "timing": "upcoming",
    "zh": "10 万美元入境费案：双方联合提交案件安排说明的截止日。",
    "en": "Separate $100,000 fee case: joint case-scheduling statement due."
  },
  {
    "id": "h1b-separate-fee-joint-statement-october20",
    "date": "2026-10-20",
    "policyId": "h1b-fee",
    "timing": "recent",
    "zh": "10 万美元入境费案：双方联合提交案件安排说明，各自提出不同的后续时间表。",
    "en": "Separate $100,000 fee case: the two sides filed a joint scheduling statement, each proposing a different timetable."
  },
  {
    "id": "cpt-response-extension-october19",
    "date": "2026-10-19",
    "policyId": "cpt-guidance",
    "timing": "recent",
    "zh": "CPT 诉讼：法院准许政府延期到 10·28 答复。",
    "en": "CPT lawsuit: the court gave the government until October 28 to respond."
  },
  {
    "id": "duration-appeal-october19-schedule",
    "date": "2026-10-19",
    "policyId": "duration-status",
    "timing": "recent",
    "availableOn": "2026-10-26",
    "zh": "D/S 上诉：第一巡回上诉法院排定政府的上诉书和附录 11·09 到期。",
    "en": "D/S appeal: the First Circuit set the government’s brief and appendix for November 9."
  },
  {
    "id": "h1b-integrity-lca-review-deadline",
    "date": "2026-10-18",
    "policyId": "h1b-program-integrity",
    "timing": "upcoming",
    "zh": "H-1B 行政命令：劳工部要在命令签署后 30 天内开始复查雇主以前提交的 LCA。",
    "en": "H-1B executive order: DOL must start re-checking employers’ past LCAs within 30 days of the order."
  },
  {
    "id": "duration-summary-judgment-order-october16",
    "date": "2026-10-16",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "D/S 案：法院排定日程：10·23 政府交行政记录，10·26 双方交直接判决请求，11·02 交回复。",
    "en": "D/S case: the court set a schedule: administrative record October 23, requests for judgment October 26, replies November 2."
  },
  {
    "id": "cloudera-perm-settlement",
    "date": "2026-10-16",
    "policyId": "h1b-program-integrity",
    "timing": "recent",
    "availableOn": "2026-10-26",
    "zh": "司法部公布与 Cloudera 的和解：从最近一次撤回 PERM 起 24 个月内，Cloudera 不得办 PERM，既不能递交 PERM 申请表（ETA Form 9089），也不能登 PERM 招聘广告。",
    "en": "DOJ announced its settlement with Cloudera: for 24 months from its latest PERM withdrawal, Cloudera may not file PERM applications (ETA Form 9089) or post PERM job ads."
  },
  {
    "id": "h1b-separate-fee-opposition-october15",
    "date": "2026-10-15",
    "policyId": "h1b-fee",
    "timing": "recent",
    "zh": "10 万美元入境费案：原告反对在上诉期间暂停地区法院的审理。",
    "en": "Separate $100,000 fee case: plaintiffs opposed pausing the district case during the appeal."
  },
  {
    "id": "deference-nprm-published",
    "date": "2026-10-14",
    "policyId": "nonimmigrant-deference",
    "timing": "recent",
    "zh": "I-129 延期“参照上次批准”原则拟取消：提案正式刊登（91 FR 65119），公众评论 11·13 截止。",
    "en": "The proposal to stop deferring to earlier I-129 approvals at extension time was published (91 FR 65119); comments close November 13."
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
    "zh": "I-129 延期“参照上次批准”原则拟取消：提案预定刊登，公众评论期为刊登后 30 天。",
    "en": "The I-129 deference proposal is scheduled for publication, with a 30-day comment period.",
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
    "zh": "10 万美元入境费案：第九巡回上诉法院排定日程，政府上诉书 11·06、原告答辩书 12·04 到期（案号 26-6667）。",
    "en": "Separate $100,000 fee case: the Ninth Circuit set the schedule in appeal No. 26-6667, with the government’s brief due November 6 and plaintiffs’ answer December 4."
  },
  {
    "id": "deference-nprm-preview",
    "date": "2026-10-13",
    "policyId": "nonimmigrant-deference",
    "timing": "recent",
    "zh": "DHS 在联邦公报预先公开提案：I-129 延期时，雇主、员工和基本情况都没变，也不再参照上次的批准。",
    "en": "DHS posted a proposal for public inspection: I-129 extensions would no longer defer to earlier approvals even when the employer, worker and facts are unchanged."
  },
  {
    "id": "ead-extension-final-preview",
    "date": "2026-10-13",
    "policyId": "ead-auto-extension",
    "timing": "recent",
    "zh": "最终规则在联邦公报预先公开：照原样保留 2025 年取消部分 EAD 自动延期的规定；分界日前递交的续期和法律规定的例外照常延期。",
    "en": "Final rule posted for public inspection: the 2025 removal of certain EAD automatic extensions is kept unchanged; renewals filed before the cutoff and legal exceptions keep their extensions."
  },
  {
    "id": "h1b-separate-fee-ninth-circuit-appeal",
    "date": "2026-10-09",
    "policyId": "h1b-fee",
    "timing": "recent",
    "zh": "10 万美元入境费案：政府就 9·30 的判决向第九巡回上诉法院上诉，并请地区法院暂停审理；上诉期间 9·30 的判决继续有效。",
    "en": "Separate $100,000 fee case: the government appealed the September 30 ruling to the Ninth Circuit and asked the district court to pause the case; the ruling stays in force during the appeal."
  },
  {
    "id": "duration-plaintiffs-procedural-plan",
    "date": "2026-10-09",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "D/S 案：原告请法院尽快判决撤销新规，反对暂停地区法院的审理。",
    "en": "D/S case: plaintiffs asked for a quick ruling striking down the rule and opposed pausing the district case."
  },
  {
    "id": "duration-next-step-submissions",
    "date": "2026-10-09",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "D/S 案：政府请法院暂停地区审理、等上诉结果，或者改用政府提出的备选时间表。",
    "en": "D/S case: the government asked to pause the district case until the appeal is decided, or to use its alternative schedule."
  },
  {
    "id": "opt-fee-nprm-published",
    "date": "2026-10-08",
    "policyId": "opt-fee",
    "timing": "recent",
    "zh": "ICE 正式提议：DSO 推荐 OPT 之前，学校要先交第一次 70,000 美元、之后每次 30,000 美元，可以把成本转给学生或雇主。规则的公众评论 11·09 截止。",
    "en": "ICE formally proposed that before a DSO recommends OPT, the school pays $70,000 the first time and $30,000 each time after, and can pass the cost to students or employers. Comments on the rule close November 9."
  },
  {
    "id": "targeted-perm-october8-announcement",
    "date": "2026-10-08",
    "policyId": "h1b-program-integrity",
    "timing": "recent",
    "availableOn": "2026-10-26",
    "zh": "白宫发布会上，劳工部官员宣布暂停微软、Adobe 等被点名公司的新 PERM 申请，也暂停处理它们在办的申请；其他公司的 PERM 照常。",
    "en": "At a White House briefing, a DOL official announced that new and pending PERM applications are suspended for named companies including Microsoft and Adobe; other companies’ PERM cases continue as usual."
  },
  {
    "id": "cpt-relief-memorandum",
    "date": "2026-10-06",
    "policyId": "cpt-guidance",
    "timing": "recent",
    "zh": "CPT 诉讼：原告提交书面理由，说明法院为什么应该在判决前先暂停 CPT 指引。",
    "en": "CPT lawsuit: plaintiffs filed their written arguments for why the court should pause the CPT guidance before ruling."
  },
  {
    "id": "cpt-associations-lawsuit-filed",
    "date": "2026-10-05",
    "policyId": "cpt-guidance",
    "timing": "recent",
    "zh": "AAU、Presidents’ Alliance、NAFSA、AICUM 四个高校协会起诉 DHS 等，请法院暂停 CPT 指引（案号 1:26-cv-14520）。法院裁定之前，指引照常执行。",
    "en": "Four higher-education associations (AAU, Presidents’ Alliance, NAFSA and AICUM) sued DHS and others to pause the CPT guidance (No. 1:26-cv-14520). The guidance applies until the court rules."
  },
  {
    "id": "duration-conference-held",
    "date": "2026-10-02",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "D/S 案：法院开进度会议，要求双方 10·09 前提出下一步怎么走。",
    "en": "D/S case: status conference held; the court asked both sides to propose next steps by October 9."
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
    "zh": "另一笔 10 万美元 H-1B 入境费：法院在 Global Nurse Force 案中撤销收费政策，并禁止政府按原公告和延长公告收费，除非先走完公开征求意见的程序。这笔钱现在收不了。",
    "en": "Separate $100,000 H-1B entry fee: in Global Nurse Force the court struck down the collection policy and barred collection under both proclamations until the government goes through public notice and comment. The fee cannot be collected now."
  },
  {
    "id": "duration-government-appeal",
    "date": "2026-09-30",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "D/S 案：DHS/ICE 等向第一巡回上诉法院上诉（案号 26-2112）；上诉期间暂缓继续有效，D/S 照旧。",
    "en": "D/S case: DHS/ICE and others appealed to the First Circuit (No. 26-2112); the pause stays in place during the appeal and D/S continues as before."
  },
  {
    "id": "h1b-fee-comments-closed",
    "date": "2026-09-24",
    "policyId": "h1b-fee",
    "timing": "recent",
    "zh": "103,265 美元附加费提案的公众评论期结束。下一步是 DHS 审阅意见、决定最终规则。",
    "en": "Comments closed on the $103,265 surcharge proposal. Next, DHS reviews them and decides on a final rule."
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
    "zh": "白宫把另一笔 10 万美元 H-1B 入境费（针对部分人在境外的申请）延长到 2027·09·21。法院已经撤销了收这笔钱的政策，上诉法院也拒绝在上诉期间恢复收费，所以现在收不了。",
    "en": "The White House extended the separate $100,000 H-1B entry fee (for some petitions for people abroad) to September 21, 2027. Courts have struck down the policy for collecting it and an appeals court declined to restore it during the appeal, so it cannot be collected now."
  },
  {
    "id": "h1b-integrity-order-signed",
    "date": "2026-09-18",
    "policyId": "h1b-program-integrity",
    "timing": "recent",
    "zh": "总统签署行政命令：各部门审 H-1B 时要互相协作、考虑雇主的相关裁员，并复查雇主以前提交的 LCA。裁员是审查时要考虑的一项因素。",
    "en": "The President signed an order telling agencies to coordinate on H-1B review, consider employers’ relevant layoffs and re-check past LCAs. Layoffs become one factor in the review."
  },
  {
    "id": "duration-cra-senate-calendar",
    "date": "2026-09-17",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "推翻 D/S 新规的国会决议 S.J.Res.213 列入参议院待议清单，等待表决。",
    "en": "S.J.Res.213, the congressional resolution to overturn the D/S rule, was placed on the Senate calendar to await a vote."
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
    "zh": "议员依据《国会审查法》（CRA）提出推翻 D/S 新规的决议。",
    "en": "Lawmakers introduced a resolution under the Congressional Review Act (CRA) to overturn the D/S rule."
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
    "zh": "OPT 收费规则通过白宫 OIRA 审查（有修改），下一步是 ICE 公布提案。",
    "en": "The White House’s OIRA finished reviewing the OPT fee rule, with changes; next, ICE publishes the proposal."
  },
  {
    "id": "ead-seven-plaintiff-order-september11",
    "date": "2026-09-11",
    "availableOn": "2026-11-01",
    "policyId": "ead-auto-extension",
    "timing": "recent",
    "zh": "Jane Doe 案初步禁令生效（9·10 签署、9·11 录入）：保护起诉的七个人，其他人仍按取消自动延期的规则办。",
    "en": "Jane Doe preliminary injunction entered (signed September 10, entered September 11): it protects the seven people who sued; everyone else remains under the rule ending automatic extensions."
  },
  {
    "id": "grace-preview",
    "date": "2026-09-10",
    "policyId": "grace-period",
    "timing": "recent",
    "zh": "取消 60 天宽限期的提案在联邦公报预先公开，涉及八类工作签证及其家属；现行宽限期照常适用。",
    "en": "The proposal to end the 60-day grace period was posted for public inspection, covering eight work-visa types and their families; the current grace period still applies."
  },
  {
    "id": "duration-hearing-under-advisement",
    "date": "2026-09-03",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "D/S 听证：法院听取双方意见，没有当庭裁决，留待裁定（之后再发书面决定）。庭审记录第 70 页显示，法官希望最晚 9·14 作出决定，也可能先发一个短期的临时禁令。",
    "en": "D/S hearing: the court heard both sides and took the matter under advisement, meaning it will decide later in writing rather than from the bench. The transcript (p. 70) shows the judge hoped to decide by September 14 and might first issue a short temporary restraining order."
  },
  {
    "id": "duration-injunction-hearing",
    "date": "2026-09-03",
    "policyId": "duration-status",
    "timing": "upcoming",
    "zh": "法院官方日历：D/S 案就要不要发初步禁令开庭听证。",
    "en": "Court calendar: hearing on whether to issue a preliminary injunction in the D/S case."
  },
  {
    "id": "duration-government-opposition",
    "date": "2026-09-02",
    "policyId": "duration-status",
    "timing": "recent",
    "zh": "D/S 案：政府提交反对意见，请法院不要暂缓新规，并主张就算暂缓，也只应保护原告。",
    "en": "D/S case: the government opposed, asking the court not to pause the rule and arguing that any pause should protect only the plaintiffs."
  },
  {
    "id": "grace-oira-cleared",
    "date": "2026-08-27",
    "policyId": "grace-period",
    "timing": "recent",
    "zh": "取消 60 天宽限期的提案通过白宫 OIRA 审查（有修改），DHS 可以公布提案；现行 60 天宽限期照常。",
    "en": "The White House’s OIRA finished reviewing the proposal to end the 60-day grace period, with changes; DHS can now publish it. The current 60-day grace period still applies."
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
    "zh": "H-1B 改革提案送交白宫 OIRA 审查，方向是收紧外派岗位和免抽签资格。",
    "en": "The H-1B reform proposal went to the White House’s OIRA for review; it aims to tighten rules for client-site jobs and cap-exempt status."
  },
  {
    "id": "opt-fee-oira",
    "date": "2026-08-20",
    "policyId": "opt-fee",
    "timing": "recent",
    "zh": "OPT 收费规则送交白宫 OIRA 审查，这是提案公布前的最后一步。",
    "en": "The OPT fee rule went to the White House’s OIRA for review, the last step before a proposal is published."
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
    "zh": "I-765 犯罪记录审查提案的公众评论截止。DHS 在审阅意见；OPT 和 H-4 EAD 的现行审批标准照常。",
    "en": "Comments closed on the I-765 criminal-record proposal. DHS is reviewing them; current OPT and H-4 EAD standards still apply."
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
