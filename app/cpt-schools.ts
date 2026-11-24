import type { Language } from './language';

export type EvidenceScreenshot = {
  src: string;
  width: number;
  height: number;
};

type SchoolCopy = { state: string; detail: string };

type VerifiedSchoolRecord = {
  id: string;
  checkedOn: string;
  school: string;
  href: string;
  tone: 'pause' | 'tighten' | 'continue';
  zh: SchoolCopy;
  en: SchoolCopy;
  screenshots: EvidenceScreenshot[];
};

type CommunitySchoolRecord = {
  id: string;
  checkedOn: string;
  school: string;
  zh: SchoolCopy;
  en: SchoolCopy;
  screenshots: EvidenceScreenshot[];
};

// Localized views used by the page.
export type VerifiedSchool = Omit<VerifiedSchoolRecord, 'zh' | 'en'> &
  SchoolCopy;
export type CommunitySchool = Omit<CommunitySchoolRecord, 'zh' | 'en'> & {
  state: string;
  detail: string;
};

// Per-record evidence review dates are backed by local audit notes in docs/audits/.
// A community screenshot review does not confirm its current policy status.
export const verifiedSchools: VerifiedSchoolRecord[] = [
  {
    "id": "university-of-nebraska-lincoln",
    "school": "University of Nebraska–Lincoln (UNL)",
    "href": "https://global.unl.edu/isso/immigration/us-immigration-policy-regulatory-updates/",
    "tone": "continue",
    "zh": {
      "state": "11·17：恢复按 8 月前办法审核和处理 CPT",
      "detail": "校方法律顾问审阅法院命令后，ISSO 恢复按 8 月前的指引审核和处理 CPT 申请。学生须先与学业顾问确认资格，再递交所需材料。"
    },
    "en": {
      "state": "November 17: CPT review and processing resume under pre-August guidelines",
      "detail": "After university counsel reviewed the court order, ISSO resumed reviewing and processing CPT applications under the guidelines in place before August. Students should confirm eligibility with their academic adviser and submit the required paperwork."
    },
    "checkedOn": "2026-11-23",
    "screenshots": []
  },
  {
    "id": "california-state-university-long-beach",
    "school": "California State University Long Beach (CSULB)",
    "href": "https://www.csulb.edu/international/current-students/curricular-practical-training",
    "tone": "continue",
    "zh": {
      "state": "11·20：按 8 月前办法申请 CPT，须与专业课程相关",
      "detail": "校方 11·20 更新允许学生继续按 8·12 前的办法申请 CPT。实践须与专业直接相关、属于课程内容，并注册实习课或同等课程取得学分。开工前须获学业顾问及国际学生顾问批准，并取得 CPT I-20。秋季和春季只批兼职 CPT，与校内工作合计每周不超过 20 小时；全职 CPT 只在暑期开放。"
    },
    "en": {
      "state": "November 20: pre-August CPT applications continue with a curriculum link",
      "detail": "The November 20 university update allows students to apply under the guidelines in place before August 12. Training must relate directly to the major and curriculum, with enrollment in an internship course or equivalent for academic credit. Obtain approval from academic and international student advisers and the CPT I-20 before work. Fall and spring CPT is part-time only, with CPT and on-campus work capped at 20 combined hours weekly; full-time CPT is available only in summer."
    },
    "checkedOn": "2026-11-23",
    "screenshots": []
  },
  {
    "id": "university-of-minnesota-twin-cities",
    "school": "University of Minnesota Twin Cities",
    "href": "https://isss.umn.edu/fstudents/employment/cpt",
    "tone": "continue",
    "zh": {
      "state": "11·23 起已恢复处理必修及选修 CPT",
      "detail": "ISSS 11·23 更新确认，当天起已恢复处理必修和选修 CPT，申请流程有调整。递交前须完成 ISSS 在线 CPT 课程；开始工作前须取得注明 CPT 授权的 I-20。"
    },
    "en": {
      "state": "Required and elective CPT processing resumed November 23",
      "detail": "The November 23 ISSS update confirms that processing of required and elective CPT has resumed, with changes to the application process. Complete the ISSS online CPT workshop before applying and obtain a CPT-authorized I-20 before work."
    },
    "checkedOn": "2026-11-23",
    "screenshots": []
  },
  {
    "id": "university-of-pittsburgh",
    "school": "University of Pittsburgh",
    "href": "https://www.ois.pitt.edu/curricular-practical-training",
    "tone": "continue",
    "zh": {
      "state": "恢复 8 月前 CPT 办法，可凭学位要求或学分申请",
      "detail": "OIS 在 11·17 法院命令后恢复 8 月前的 CPT 办法。学位必需实践，或计入特定学位要求、写入院系规定的学分实践，可申请。秋春通常限兼职；暑期可全职，最后一学期及特定项目另有条件。先完成 CPT 教程并经院系确认，再向 My OIS 申请；预留两周处理，取得 CPT I-20 后才能工作。"
    },
    "en": {
      "state": "Pre-August CPT procedures resume for degree-required or qualifying credit-bearing training",
      "detail": "After the November 17 order, OIS is restoring pre-August CPT procedures. Training may qualify when required for the degree or when it earns credit toward a specific degree requirement documented by the program. Fall and spring usually require part-time CPT; summer permits full-time CPT, with final-term and program conditions. Complete the CPT tutorial, confirm academic eligibility and apply in My OIS. Allow two weeks and obtain the CPT I-20 before work."
    },
    "checkedOn": "2026-11-23",
    "screenshots": []
  },
  {
    "id": "virginia-tech",
    "school": "Virginia Tech",
    "href": "https://international.vt.edu/employment/cpt.html",
    "tone": "tighten",
    "zh": {
      "state": "11·18：评估法院命令，后续安排将通过邮件通知",
      "detail": "Cranwell International Center 正与校方讨论法院暂停 8 月指引后的安排，并将通过邮件通知学生。CPT 须与专业和既定课程相关，实习期间注册相应课程；具体申请安排按学校后续通知办理。"
    },
    "en": {
      "state": "November 18: court order under review; further instructions by email",
      "detail": "Cranwell International Center is reviewing the pause of the August guidance with university leadership and will update students by email. CPT must relate to the major and curriculum, with enrollment in the relevant course during training. Follow the school’s forthcoming application instructions."
    },
    "checkedOn": "2026-11-23",
    "screenshots": []
  },
  {
    "id": "cornell-university",
    "checkedOn": "2026-11-23",
    "school": "Cornell University",
    "href": "https://international.globallearning.cornell.edu/alerts/cpt-applications-reopening-november-20",
    "tone": "continue",
    "zh": {
      "state": "11·20：工程 Co-op、课程学分及必要博士研究 CPT 申请已开放",
      "detail": "International Services 11·20 更新：CPT 申请现已开放。先前符合条件的工程 Co-op 学生、课程内带学分实践，以及博士候选人为完成论文而需要校外资源的实践，可按 F-1 CPT 页面流程申请。学位本来要求的实践继续符合资格。"
    },
    "en": {
      "state": "November 20: CPT applications now open for engineering co-op, course credit and necessary doctoral research",
      "detail": "International Services confirmed November 20 that CPT applications are now open. Previously eligible engineering co-op students, students taking curriculum-based credit-bearing courses and PhD candidates needing external resources for dissertation research can apply under the F-1 CPT webpage’s procedures. Degree-required experiential learning remains eligible."
    },
    "screenshots": []
  },
  {
    "id": "university-of-colorado-colorado-springs",
    "checkedOn": "2026-11-23",
    "school": "University of Colorado Colorado Springs (UCCS)",
    "href": "https://international.uccs.edu/international-students-and-scholars/important-immigration-updates",
    "tone": "tighten",
    "zh": {
      "state": "只处理目录要求全体学生完成的实习 CPT",
      "detail": "ISSS 10·01 通知：只处理专业要求全体学生完成实习的 CPT 申请，这项要求必须写在大学目录中。 ISSS 11·17 公布法院初步禁令消息，将在收到办理指引后通知学生。"
    },
    "en": {
      "state": "Only catalog-required training for every student is processed",
      "detail": "The October 1 ISSS notice limits CPT processing to programs that require the training of every student. The requirement must appear in the university catalog. On November 17, ISSS announced the preliminary injunction and said it would provide further information once processing guidance arrives."
    },
    "screenshots": []
  },
  {
    "id": "cooper-union",
    "checkedOn": "2026-11-23",
    "school": "The Cooper Union",
    "href": "https://cooper.edu/admissions/international/Changes-to-CPT-policy",
    "tone": "pause",
    "zh": {
      "state": "全部 CPT 申请暂停",
      "detail": "ISSO 8·27 通知暂停所有 CPT 申请，期限待另行通知。学校正与法律顾问讨论后续办理条件，并通过 ISSO 网站和校内邮件发布安排。"
    },
    "en": {
      "state": "All CPT applications paused",
      "detail": "The August 27 ISSO notice pauses all CPT applications until further notice. The school is consulting legal counsel about future processing requirements and will communicate updates through the ISSO website and university email."
    },
    "screenshots": []
  },
  {
    "id": "ohio-state-university",
    "checkedOn": "2026-11-23",
    "school": "The Ohio State University (OSU)",
    "href": "https://oia.osu.edu/international-students/employment/curricular-practical-training",
    "tone": "continue",
    "zh": {
      "state": "课程学分型实践可申请；须有顾问确认课程联系",
      "detail": "OIA 现行规定允许非学位必需的实践：学生须取得实践学分，由学业顾问确认它属于仍在进行的既定课程，并在授权学期注册、完成指定实习课或独立研究课。学位必需实践继续符合条件。博士候选阶段的论文实践须产生必要数据，由学业顾问书面说明。至少提前 5 个工作日申请，拿到 CPT I-20 后才能开工。"
    },
    "en": {
      "state": "Course-credit training eligible with an adviser-confirmed curriculum connection",
      "detail": "OIA allows training that is not degree-required when it earns academic credit and the academic adviser confirms it is integral to the established curriculum still in progress. Register for and complete the designated internship or independent-study course in the authorized semester. Degree-required training remains eligible. Post-candidacy doctoral training must produce necessary dissertation data, with a written explanation from the academic adviser. Apply at least five business days ahead and receive the CPT I-20 before work."
    },
    "screenshots": []
  },
  {
    "id": "university-of-denver",
    "checkedOn": "2026-11-23",
    "school": "University of Denver",
    "href": "https://internationalization.du.edu/isss/resources/immigration-updates",
    "tone": "tighten",
    "zh": {
      "state": "选修课 CPT 暂停；学位或论文必需实践可申请",
      "detail": "ISSS 8 月 31 日通知：不再为并非项目所有学生必修的实习或实践课授权 CPT。可以申请的情形是：学校正式文件列明所有学生完成学位必需的实践，或完成已批准硕士／博士论文所必需的研究或训练。博士生须已进入正式论文候选阶段。"
    },
    "en": {
      "state": "Elective-course CPT paused; degree- or thesis-required training eligible",
      "detail": "The August 31 ISSS notice stops CPT for internship or experiential-learning courses that are not required of all students in the academic program. Eligible training must either be required of all students to complete the degree and documented in an official university publication, or be necessary for an approved thesis or dissertation. Doctoral students must have reached the dissertation stage."
    },
    "screenshots": []
  },
  {
    "id": "ucla-extension",
    "checkedOn": "2026-11-23",
    "school": "UCLA Extension",
    "href": "https://www.uclaextension.edu/international-students",
    "tone": "pause",
    "zh": {
      "state": "非证书项目所有学生必需的 CPT 暂停",
      "detail": "ISS 暂停处理 2026 年 8 月 12 日起递交、实践不是所有学生完成证书项目的必需环节的 CPT 申请，直至另行通知。条目涵盖 UCLA Extension 证书项目。"
    },
    "en": {
      "state": "CPT paused when not required of every student in the certificate program",
      "detail": "ISS has suspended review and processing of CPT applications submitted on or after August 12, 2026 when the training is not an official certificate requirement for every student in the program, until further notice. This entry covers UCLA Extension certificate programs."
    },
    "screenshots": []
  },
  {
    "id": "unc-charlotte",
    "checkedOn": "2026-11-23",
    "school": "University of North Carolina at Charlotte (UNC Charlotte)",
    "href": "https://isso.charlotte.edu/our-population/alerts/",
    "tone": "tighten",
    "zh": {
      "state": "只批课程目录列为所有学生必需的校外实习",
      "detail": "ISSO 10·21 通知：校外实习须在课程目录中明确列为项目所有学生完成学位或学位论文的必需环节，才符合 CPT 要求。选修或可选实习课对应的校外实习不批 CPT。"
    },
    "en": {
      "state": "Only off-campus internships the catalog requires of every student qualify",
      "detail": "ISSO’s October 21 notice limits CPT to off-campus internships that the University Catalog explicitly requires of every student in the program to complete the degree or dissertation. Internships tied to optional or elective internship courses are ineligible."
    },
    "screenshots": []
  },
  {
    "id": "brown-university",
    "checkedOn": "2026-11-23",
    "school": "Brown University",
    "href": "https://isss.brown.edu/international-students/currently-brown/f-1-students/employment/cpt",
    "tone": "pause",
    "zh": {
      "state": "本科 CPT 暂停；6 个硕士项目可申请",
      "detail": "ISSS 11·17 正与校领导讨论法院暂缓后的下一步安排。ISSS 11·13 更新的规定暂停 F-1 本科生 CPT，期限未定，包括可选职业实践方向、独立研究课和 Brown in Washington 等可选校外学期。硕士只接受 PRIME、数据科学、公共事务、教学、城市教育政策和公共卫生 6 个有必修实践要求的项目。博士生通常不符合资格；已获批的博士论文计划要求在校外机构工作才能完成论文的，ISSS 可在极少数情形下考虑。在读博士通过 Open Graduate Education 或 Concurrent Secondary Master's Degree 同时攻读硕士，不能凭该硕士项目申请 CPT。申请须有 Brown 与雇主的合作协议，并在取得 CPT I-20 后开始工作。"
    },
    "en": {
      "state": "Undergraduate CPT suspended; six master’s programs eligible",
      "detail": "On November 17, ISSS said it is consulting university leadership about next steps after the court’s stay. The November 13 ISSS update suspends F-1 undergraduate CPT indefinitely, including optional professional tracks, independent study and optional semester-away programs such as Brown in Washington. Master’s requests are accepted only from six programs with mandatory training: PRIME, Data Science, Public Affairs, Teaching, Urban Education Policy and Public Health. PhD students generally do not qualify; ISSS may consider very limited cases where an approved dissertation proposal requires employment with an external organization to complete the dissertation. Concurrent master’s enrollment through Open Graduate Education or the Concurrent Secondary Master’s Degree program does not qualify a PhD student for CPT. Requests need a cooperative agreement between Brown and the employer; work begins after the CPT I-20 is issued."
    },
    "screenshots": []
  },
  {
    "id": "colorado-state-university",
    "checkedOn": "2026-11-23",
    "school": "Colorado State University (CSU)",
    "href": "https://international.colostate.edu/international-student-updates-immigration-visa-travel-information/",
    "tone": "tighten",
    "zh": {
      "state": "11·17：按现行法规审核实践请求",
      "detail": "CSU 11·17 通知确认 8 月 CPT 指引已被法院暂停执行。ISSS 按现行法律、法规及可用的联邦指引审核实践请求；学生接受工作前须咨询 ISSS，并遵守原有 CPT 和 OPT 授权流程。"
    },
    "en": {
      "state": "November 17: practical-training requests reviewed under current regulations",
      "detail": "CSU’s November 17 notice confirms that the August CPT guidance is stayed. ISSS will review practical-training requests under current law, regulatory requirements and available federal guidance. Consult ISSS before accepting employment and follow existing CPT and OPT authorization procedures."
    },
    "screenshots": []
  },
  {
    "id": "portland-community-college",
    "checkedOn": "2026-11-23",
    "school": "Portland Community College (PCC)",
    "href": "https://www.pcc.edu/international-students/student-resources/",
    "tone": "tighten",
    "zh": {
      "state": "暂停：非必修课程不再签发 CPT",
      "detail": "OISS 公开 CPT 段落称，收到 2026 年 8 月 SEVP 广播后，已停止为完成学位或项目并非必需的课程签发 CPT，并正与移民律师修订政策。"
    },
    "en": {
      "state": "Paused: no CPT for courses the program doesn’t require",
      "detail": "The public OISS CPT section says that, following the August 2026 SEVP broadcasts, it stopped issuing CPT for classes not required to complete a degree or program and is revising its policy with immigration attorneys."
    },
    "screenshots": []
  },
  {
    "id": "depaul-university",
    "checkedOn": "2026-11-23",
    "school": "DePaul University",
    "href": "https://offices.depaul.edu/global-engagement/student-resources/student-services/Pages/employment.aspx",
    "tone": "tighten",
    "zh": {
      "state": "只批必修、计学分的实习；三种课程方式，由 ISS 逐个审批",
      "detail": "就业页“新 CPT 政策”（2026·09·14 更新）要求实践是专业课程的必修内容并且计学分；只与专业相关、选修实习或单纯注册学分都不够。合格结构有三类：含必需实习的必修学分课程；项目所有学生都要完成的独立毕业实践；项目规定可在论文／毕业项目与计学分实习之间选择的必需路径。须先联系学业顾问，经 ISS 审查并取得 CPT I-20 后才能开始。"
    },
    "en": {
      "state": "Only required, for-credit training; three program setups, each reviewed by ISS",
      "detail": "The employment page’s New CPT Policy (updated September 14, 2026) requires training to be a required, credit-bearing part of the program; relevance, an optional internship or credit enrollment alone is not enough. Three structures qualify: a required for-credit course with a built-in internship; a standalone graduation requirement for every program student; or a program requirement that can be met through either a thesis/capstone or a credit-bearing internship. Students consult advisers, get ISS review and receive a CPT I-20 before starting."
    },
    "screenshots": []
  },
  {
    "id": "case-western-reserve-university",
    "checkedOn": "2026-11-23",
    "school": "Case Western Reserve University (CWRU)",
    "href": "https://case.edu/visa/international-students/international-student-employment/f-1-student-employment-and-training",
    "tone": "pause",
    "zh": {
      "state": "9·08 起暂停新的 CPT 申请",
      "detail": "VISA Office 就业页写明自 2026·09·08 起暂停新 CPT 申请，恢复时会在 News and Updates 公布。9·08 公告说明学校正在与各项目核对所有学生必修标准，期间暂停处理。目前还没有恢复公告。"
    },
    "en": {
      "state": "New CPT applications paused since September 8",
      "detail": "The VISA Office employment page pauses new CPT applications from September 8, 2026 and says reopening will be posted on News and Updates. Its September 8 notice explains that programs are being reviewed against the all-student requirement during the pause. No reopening has been announced."
    },
    "screenshots": []
  },
  {
    "id": "university-of-nebraska-omaha",
    "checkedOn": "2026-11-23",
    "school": "University of Nebraska at Omaha (UNO)",
    "href": "https://web.unomaha.edu/curricular-practical-training-cpt-information",
    "tone": "tighten",
    "zh": {
      "state": "只批所有学生毕业都必须做的实习；先拿到 I-20 再上班",
      "detail": "UNO 政策更新页把这份 ISSS 通知列为 9·17 CPT 信息：经 Nebraska 系统法律办公室审阅，只能批准项目内每位学生毕业都必需的实习。学生须向学业顾问确认学分和所有学生的毕业要求，经 iGlobal 申请并取得带 CPT 授权的 I-20 后才能开始。本条为 Omaha 校区。"
    },
    "en": {
      "state": "Only internships every student must do to graduate; get the I-20 before starting",
      "detail": "UNO’s policy-update page lists this ISSS notice as its September 17 CPT information. After Nebraska System legal review, only internships required for every student’s graduation can be approved. Students confirm internship credit and the all-student requirement with advisers, apply in iGlobal and receive a CPT-authorized I-20 before starting. This entry covers the Omaha campus."
    },
    "screenshots": []
  },
  {
    "id": "illinois-institute-of-technology",
    "checkedOn": "2026-11-23",
    "school": "Illinois Institute of Technology (Illinois Tech)",
    "href": "https://www.iit.edu/global-services/student-employment/curricular-practical-training-cpt",
    "tone": "tighten",
    "zh": {
      "state": "专业不要求实习的，CPT 暂停",
      "detail": "OGS 9·04 更新称，暂停处理没有强制实践毕业要求的项目的 CPT；只注册选修实习／实践课不符合所有学生学位必需标准。页面介绍和 Career Services 仍有“必需或计学分”的旧措辞，以 9·04 更新为准。"
    },
    "en": {
      "state": "Paused for programs that don’t require practical training",
      "detail": "The September 4 OGS update pauses CPT for programs without a mandatory practical-training degree requirement; enrolling in an elective internship or practicum course does not meet the all-student standard. Older “required or taken for credit” wording remains in the introduction and on Career Services; the September 4 update governs."
    },
    "screenshots": []
  },
  {
    "id": "university-of-arizona",
    "checkedOn": "2026-11-23",
    "school": "University of Arizona",
    "href": "https://international.arizona.edu/international-students/cpt",
    "tone": "tighten",
    "zh": {
      "state": "非必修 CPT 暂停；学位或论文必需的实践逐个审",
      "detail": "ISS 页面称自 8·24 起暂停处理非项目必需的 CPT。现行可批的两类：课程必需的实践；完成论文、博士论文或硕士项目不可缺少的实践。都需合作协议和相应课程／研究学分。顾问表单提交后至少留 15 天处理，不要凭预计日期答应雇主开工。"
    },
    "en": {
      "state": "Non-required CPT paused; degree- or thesis-required training reviewed case by case",
      "detail": "ISS says processing of non-required CPT is suspended from August 24. Two kinds still qualify: curriculum-required training, and training indispensable to a thesis, dissertation or master’s project. Both need a cooperative agreement and the required course or research units. Allow at least 15 days after the adviser e-form, and don’t commit to a start date before approval."
    },
    "screenshots": []
  },
  {
    "id": "university-of-connecticut",
    "checkedOn": "2026-11-23",
    "school": "University of Connecticut (UConn)",
    "href": "https://international.global.uconn.edu/2026/08/30/immigration-changes-regarding-internships/",
    "tone": "tighten",
    "zh": {
      "state": "只批课程要求里写明所有人必须做的实习",
      "detail": "CISS 公告称暂不处理非必需 CPT：实习或 practicum 必须是全体项目学生必需，学生和导师须指出已公布的课程要求。可以通过门户递交，但选修实习课不够格。公告标注 8·30 发布。"
    },
    "en": {
      "state": "Only internships the published curriculum requires of everyone",
      "detail": "The CISS notice says non-required CPT is not being processed: internships or practica must be required of all program students, and students and advisers must point to the published requirement. Requests can still be submitted through the portal, but elective internship courses do not qualify. The notice is dated August 30."
    },
    "screenshots": []
  },
  {
    "id": "queens-college-cuny",
    "checkedOn": "2026-11-23",
    "school": "Queens College (CUNY)",
    "href": "https://www.qc.cuny.edu/academics/iss/iss-virtual-office-assistant/cpt/",
    "tone": "pause",
    "zh": {
      "state": "CPT 申请暂停；学位必修的实习请先联系 ISSO",
      "detail": "ISS 公开页称，因 8·12、8·24 SEVP 广播正在复核流程，CPT 申请暂停；未获授权前不要申请或开始校外实践。学位必需的实践，须在确定岗位或开工日期前先联系 ISSO。本条仅限 Queens College。"
    },
    "en": {
      "state": "CPT applications paused; contact ISSO first about degree-required training",
      "detail": "The ISS page says CPT applications are paused while processes are reviewed after the August 12/24 broadcasts; do not apply or start off-campus training without authorization. Students whose degree requires training should contact ISSO before committing to a placement or start date. This entry covers Queens College only."
    },
    "screenshots": []
  },
  {
    "id": "bowling-green-state-university",
    "checkedOn": "2026-11-23",
    "school": "Bowling Green State University (BGSU)",
    "href": "https://www.bgsu.edu/international-programs-and-partnerships/immigration-updates-f-1-j-1-students",
    "tone": "tighten",
    "zh": {
      "state": "只批专业必修的实习；已批的 CPT 会重审，可能撤销",
      "detail": "IPP 说明新申请按修订后的联邦解释审查，不合标准的待审申请不批；项目须证明实践是全体学生的课程必需环节。此前获批的 CPT 也会重新评估，必要时撤销。已开工或已接受 offer 的学生须尽快联系 DSO。"
    },
    "en": {
      "state": "Only program-required internships; approved CPT will be reviewed and may be revoked",
      "detail": "IPP says new requests follow the revised federal interpretation and noncompliant pending requests will not be approved; programs must show the training is required of every student. Previously approved CPT will be reevaluated and rescinded where necessary. Students who have started work or accepted offers should contact a DSO promptly."
    },
    "screenshots": []
  },
  {
    "id": "university-of-wyoming",
    "checkedOn": "2026-11-23",
    "school": "University of Wyoming",
    "href": "https://www.uwyo.edu/uwgrad/newsletter/isa-immigration-support-fall2026.html",
    "tone": "tighten",
    "zh": {
      "state": "10·26：仍接受申请，但能批的变少",
      "detail": "ISS 10·26 通讯称，已与学校总法律顾问审查 CPT 政策：在 SEVP 收紧后的定义下仍能批准部分申请，但很多学生的机会会减少。学生可以继续找机会并向 ISS 提交请求，越早提交越好，方便向教师核实。"
    },
    "en": {
      "state": "October 26: still taking requests, but fewer will qualify",
      "detail": "The October 26 newsletter says ISS reviewed CPT policy with UW’s Office of General Counsel. Some requests can still be approved under SEVP’s narrower definitions, but many students will have fewer opportunities. Students can keep looking and should submit requests early so ISS can follow up with faculty."
    },
    "screenshots": []
  },
  {
    "id": "university-of-oklahoma",
    "checkedOn": "2026-11-23",
    "school": "University of Oklahoma",
    "href": "https://www.ou.edu/globalengagement/iss/curricular-practical-training",
    "tone": "pause",
    "zh": {
      "state": "秋季继续暂停；2027 春季重开 CPT 请求",
      "detail": "ISS 11·19 更新说明：2026 秋季 CPT 请求继续关闭，2027 春季将重开。学校正评估 11·17 法院命令并重新审视办理办法。学生可先与院系及 ISS 核对课程内实践安排，后续申请按校方公布的流程办理。"
    },
    "en": {
      "state": "Fall requests remain closed; CPT requests reopen for Spring 2027",
      "detail": "The November 19 ISS update keeps Fall 2026 CPT requests closed and says requests will reopen for Spring 2027. ISS is reviewing the November 17 court order and reevaluating its procedures. Students can discuss curriculum-based training with their academic department and ISS and follow the school’s updated application instructions."
    },
    "screenshots": []
  },
  {
    "id": "yale-university",
    "checkedOn": "2026-11-23",
    "school": "Yale University",
    "href": "https://oiss.yale.edu/immigration/immigration-changes/immigration-faqs-for-international-students-and-",
    "tone": "tighten",
    "zh": {
      "state": "11·17：因 8 月指引被拒或搁置的申请可询问重新评估",
      "detail": "OISS 11·17 说明法院已暂停 8 月两份 CPT 指引。计划实习或学分实践的学生，应联系 OISS 顾问确认申请条件；此前因这两份指引被拒或搁置的申请，可询问是否能重新评估。开始工作前须获批并取得更新的 I-20，院系应先与 OISS 协调再向学生作安排。"
    },
    "en": {
      "state": "November 17: ask OISS to reconsider requests denied or held under the August guidance",
      "detail": "OISS’s November 17 update says the court has paused both August CPT broadcasts. Students considering internships or training for academic credit should ask an OISS adviser about eligibility. Students whose requests were denied or held because of those broadcasts can ask whether their requests can be reviewed again. OISS approval and an updated I-20 are required before work, and departments should coordinate with OISS before making arrangements."
    },
    "screenshots": []
  },
  {
    "id": "university-of-virginia",
    "checkedOn": "2026-11-23",
    "school": "University of Virginia (UVA)",
    "href": "https://issp.virginia.edu/cpt-update",
    "tone": "tighten",
    "zh": {
      "state": "选修学分型 CPT 暂停；学位必修的实习照常办",
      "detail": "CPT 通知暂停所有非毕业必需、选修课程学分的新 CPT 请求；项目学位必需的实践继续处理和批准。校方 11·17 公布法院批准暂缓与初步禁令的消息。"
    },
    "en": {
      "state": "Elective course-credit CPT paused; degree-required training continues",
      "detail": "The CPT notice pauses all new non-required, optional course-credit CPT requests; degree-required training continues to be processed and approved. On November 17, the university announced the court’s stay and preliminary injunction."
    },
    "screenshots": []
  },
  {
    "id": "university-of-illinois-chicago",
    "checkedOn": "2026-11-23",
    "school": "University of Illinois Chicago (UIC)",
    "href": "https://ois.uic.edu/news-stories/update-on-f-1-curricular-practical-training/",
    "tone": "continue",
    "zh": {
      "state": "11·20：沿用 8 月前 CPT 办法，合格实践继续审核",
      "detail": "OIS 11·20 通知说明，8 月前的 CPT 办法在案件审理期间继续适用。与专业课程相关的合格实习、co-op 及其他实践，可按现有政策和流程获批。学生继续走原有申请流程，有资格或授权问题请联系 OIS 顾问。UIC Chicago 与 UIUC 分开记录。"
    },
    "en": {
      "state": "November 20: pre-August CPT rules continue; eligible training can be authorized",
      "detail": "OIS’s November 20 notice says the longstanding pre-August CPT rules remain in effect while the case proceeds. Eligible internships, co-ops and other training integral to the academic program may be authorized under existing policies and procedures. Follow the established application process and contact an OIS adviser about eligibility or authorization. UIC Chicago is listed separately from UIUC."
    },
    "screenshots": []
  },
  {
    id: 'carnegie-mellon-university',
    "checkedOn": "2026-11-23",
    school: 'Carnegie Mellon University (CMU)',
    href: 'https://www.cmu.edu/oie/news-and-events/2026-2027/october/cpt-lawsuit.html',
    tone: 'tighten',
    zh: {
      state: "11·23：校方正审阅法院命令及 CPT 办理流程",
      detail: "OIE 8·27 公告要求实习是项目全体学生的毕业必修环节；选修实习要改申请 pre-completion OPT。现行 CPT 页排除独立研究；论文所需校外工作仍在审查。OIE 11·23 通知称，正与总法律顾问审阅法院命令、CPT 表格及办理流程，后续将公布办理说明。",
    },
    en: {
      state: "November 23: court order and CPT procedures under university review",
      detail: "The August 27 OIE notice requires internships to be a graduation requirement for all program students and directs elective internships to pre-completion OPT. The CPT page excludes independent study; thesis-related external work is still under review. OIE’s November 23 notice says it is reviewing the court order, CPT forms and procedures with general counsel and will publish further instructions.",
    },
    screenshots: [],
  },
  {
    id: 'pacific-lutheran-university',
    "checkedOn": "2026-11-23",
    school: 'Pacific Lutheran University',
    href: 'https://www.plu.edu/iss/announcements/',
    tone: 'continue',
    zh: {
      state: '11·20：宣布恢复课程相关的选修 CPT',
      detail: 'ISS 宣布在法院禁令有效期间恢复原有 CPT 办法。校外实习或工作须与专业直接相关，并关联现有课程，或注册选修实习、独立研究学分。秋春每周最多 20 小时；寒假、J-term 和暑期，学生在非全日制修课时可每周最多工作 40 小时。',
    },
    en: {
      state: 'November 20: elective CPT linked to coursework will return',
      detail: 'ISS announced a return to its earlier CPT policy while the injunction is in place. Off-campus training must relate directly to the major and connect to an existing course or elective internship or independent-study credit. Fall and spring are limited to 20 hours per week. Winter break, J-term and summer allow up to 40 hours weekly when the student is not enrolled full-time.',
    },
    screenshots: [],
  },
  {
    "id": "indiana-university-iu-global",
    "checkedOn": "2026-11-23",
    "school": "Indiana University (IU Global)",
    "href": "https://www.oid.iu.edu/resources/visa-immigration-updates.html",
    "tone": "pause",
    "zh": {
      "state": "11·19：评估 CPT 流程，等待后续说明",
      "detail": "IU Global 11·19 通知介绍法院已暂停执行 8 月两份指引，学校正据此评估 CPT 流程，并将公布进一步说明。原先大部分新 CPT 请求的暂停安排继续，已批准的授权保持不变。"
    },
    "en": {
      "state": "November 19: CPT procedures under review; further instructions to follow",
      "detail": "IU Global’s November 19 notice says both August broadcasts are stayed and the university is reviewing CPT processes. Further instructions will be posted. The earlier pause on most new requests continues, while existing approvals remain in place."
    },
    "screenshots": []
  },
  {
    "id": "rutgers-university",
    "checkedOn": "2026-11-23",
    "school": "Rutgers University (Rutgers Global)",
    "href": "https://global.rutgers.edu/all-alerts",
    "tone": "tighten",
    "zh": {
      "state": "11·17：按现行校规和联邦规定继续审核，准备后续说明",
      "detail": "Rutgers Global 正与总法律顾问及各校区国际办公室评估法院命令对学生和专业的影响。CPT 请求继续按现行大学及联邦规定审核，后续变化将另行通知。学生应联系本校区国际办公室确认资格及申请安排；已批准的 CPT 可照计划继续。"
    },
    "en": {
      "state": "November 17: requests reviewed under current university and federal guidance; further updates to follow",
      "detail": "Rutgers Global is reviewing the court order with General Counsel and international offices across the university. CPT requests continue to be reviewed under current university and federal guidance, with further updates to follow. Contact the relevant campus international office about eligibility and applications. Previously approved CPT may continue as planned."
    },
    "screenshots": []
  },
  {
    id: 'university-of-central-florida',
    "checkedOn": "2026-11-23",
    school: 'University of Central Florida',
    href: 'https://global.ucf.edu/immigrationupdates/',
    tone: 'tighten',
    zh: {
      state: '9·09：只批学位所有学生都必须做的校外实践',
      detail: 'UCF Global 9·09 通知称，校外实践必须是同一学位所有学生完成学位的既定要求；选修、院系推荐但非必需、只有职业价值的实践，以及论文相关活动本身，都不能获批 CPT。',
    },
    en: {
      state: 'September 9: only off-campus training every student in the degree must do',
      detail: 'UCF Global says off-campus training must be an established degree-completion requirement for every student in the program. Electives, recommended but non-required experience, career-building optional training and thesis-related activity alone do not qualify.',
    },
    screenshots: [],
  },
  {
    id: 'texas-state-university',
    "checkedOn": "2026-11-23",
    school: 'Texas State University',
    href: 'https://www.international.txst.edu/current-f1-students/work-authorization/cpt.html',
    tone: 'tighten',
    zh: {
      state: '必须是课程必修；只选实习课或拿学分不够',
      detail:
        'ISSS 要求实践是学术项目及课程要求的必需部分，可能需要院系证明；只注册实习课或拿学分不够。页面仍列兼职、全职 CPT 和申请流程，没有全面暂停。',
    },
    en: {
      state: 'Must be required by the curriculum; an internship course or credit alone isn’t enough',
      detail:
        'ISSS requires practical training to be a mandatory part of the academic program and established curriculum, possibly with department certification; course enrollment or credit alone is not enough. Part-time and full-time CPT and the application process remain listed; there is no blanket pause.',
    },
    screenshots: [],
  },
  {
    id: 'vanderbilt-university',
    "checkedOn": "2026-11-23",
    school: 'Vanderbilt University',
    href: 'https://www.vanderbilt.edu/isss/2026/09/15/updates-to-curricular-practical-training-eligibility/',
    tone: 'tighten',
    zh: {
      state: '9·15：只批学位所有学生都必须做的实习',
      detail:
        'ISSS 9·15 公告称，已按 SEVP 指引及对“integral”的更窄解释调整做法：只为同一学位项目全体学生必需的实践授权 CPT；选修实习和其他非完成学位所必需的实践不符合资格。',
    },
    en: {
      state:
        'September 15: only training every student in the degree must do',
      detail:
        'The September 15 ISSS notice says Vanderbilt has aligned its practice with SEVP guidance and its narrower reading of “integral”: CPT is authorized only for practical training required of all students in the same degree program, and elective internships and other training not required for degree completion do not qualify.',
    },
    screenshots: [],
  },
  {
    id: 'stony-brook-university',
    "checkedOn": "2026-11-23",
    school: 'Stony Brook University',
    href: 'https://www.stonybrook.edu/visa/resources/news-and-events/immigration-policy-updates/cpt-new-guidance.html',
    tone: 'tighten',
    zh: {
      state: '9·08：光有学分或选课不够，必须是所有人必修',
      detail:
        'VIS 9·08 公告按 SEVP 两份广播修订 CPT 资格与审核流程：实践须是课程要求中对全体学生必修的部分，且完成学位取决于它。作为选修的实习或研究课，即使能满足学位要求也不符合；不做实践也能通过其他课程或选项毕业的，不予授权；院系过去批过同类学生，今后也要重新审。VIS 逐案审核，院系须出具证明，必要时补材料。',
    },
    en: {
      state:
        'September 8: credit or enrollment alone isn’t enough; it must be required of everyone',
      detail:
        'The September 8 VIS notice revises CPT eligibility and review under the two SEVP broadcasts: training must be a required part of the established curriculum for all students, with degree completion depending on it. An elective internship or research course does not qualify even if it satisfies a degree requirement; CPT is not authorized when the degree can be completed through another option without practical training; and past department approvals no longer carry over. VIS reviews each request, departments must certify the requirement, and more documentation may be requested.',
    },
    screenshots: [],
  },
  {
    id: 'kennesaw-state-university',
    "checkedOn": "2026-11-23",
    school: 'Kennesaw State University',
    href: 'https://campus.kennesaw.edu/current-students/academics/global-education/international-student-scholar-services/f-1/curricular-practical-training.php',
    tone: 'tighten',
    zh: {
      state: '2026 秋季起，只限教育、护理和社会工作专业',
      detail:
        'ISSS 页首通知只允许教育、护理和社会工作项目中全体学生毕业必需的实践，不再批准选修课或 Directed Study CPT。页面下方的旧选修及论文分类已被页首通知取代。',
    },
    en: {
      state:
        'From Fall 2026: only Education, Nursing and Social Work programs',
      detail:
        'The ISSS notice at the top limits CPT to graduation-required training for all students in Education, Nursing and Social Work, excluding elective and Directed Study courses. The older elective and thesis categories lower on the page are superseded by that notice.',
    },
    screenshots: [],
  },
  {
    id: 'university-of-toledo',
    "checkedOn": "2026-11-23",
    school: 'University of Toledo',
    href: 'https://www.utoledo.edu/cisp/international/immigration-update/',
    tone: 'tighten',
    zh: {
      state: '已恢复处理必修实践 CPT，采用新版申请表',
      detail:
        "OISSS 按 SEVP 2608-02 要求实践是课程要求中必需的组成部分；只注册实习课或拿学分不够。符合条件的必需实践仍可申请兼职或全职 CPT，秋春学期全职须为学位所必需。 另一个校方移民更新页现明确：修订后的申请表已上线，OISSS 已恢复处理符合要求的请求。学术／co-op／学院审批人须确认实践是所有相关学生都必须完成的毕业要求，且已注册相应必修课程；须先取得 CPT I-20 并等到授权开始日。",
    },
    en: {
      state:
        'Required-training CPT processing resumed with revised forms',
      detail:
        "Under SEVP 2608-02, OISSS requires training to be an integral, required part of the established curriculum; course enrollment or credit alone is not enough. Qualifying required training can still get part-time or full-time CPT; full-time during Fall/Spring must be degree-required. The official immigration-update page now states that revised request forms are available and OISSS has resumed processing qualifying requests. Academic/co-op/college approvers must confirm a mandatory graduation requirement for all students in the curriculum and required enrollment. The authorized I-20 and its start date must precede work.",
    },
    screenshots: [],
  },
  {
    "id": "william-and-mary",
    "checkedOn": "2026-11-23",
    "school": "William & Mary",
    "href": "https://www.wm.edu/offices/revescenter/issp/visasandimmigration/immigration-updates/",
    "tone": "pause",
    "zh": {
      "state": "11·19：维持学位必修 CPT，其他请求继续暂停",
      "detail": "ISSP 11·19 说明，学校正评估 11·17 法院命令并准备后续指引，现行 CPT 流程保持不变。学术目录列为学位要求的实践继续处理，其他请求暂停。"
    },
    "en": {
      "state": "November 19: degree-required CPT continues; other requests remain paused",
      "detail": "ISSP’s November 19 update says it is reviewing the November 17 court order and preparing further guidance. Current CPT procedures continue: training listed as a degree requirement in the academic catalog is processed, while other requests remain paused."
    },
    "screenshots": []
  },
  {
    id: 'university-of-rochester',
    "checkedOn": "2026-11-23",
    school: 'University of Rochester',
    href: 'https://www.rochester.edu/provost/important-update-for-international-students-on-cpt/',
    tone: 'pause',
    zh: {
      state: '非必修的新 CPT 暂停；已批的秋季 CPT 照常',
      detail:
        '8·28 校方通知称，ISO 暂停批准新的 CPT，学位必需的实践除外；须为项目全体学生完成学位所必需。已批准的 2026 秋季 CPT 可按授权条件继续，除非 ISO 另行通知。',
    },
    en: {
      state:
        'New non-required CPT paused; approved fall CPT continues',
      detail:
        'The August 28 notice pauses new CPT approvals except training required for all students to complete the degree. Already authorized Fall 2026 CPT may continue under its terms unless ISO advises otherwise.',
    },
    screenshots: [],
  },
  {
    id: 'purdue-university-iss',
    "checkedOn": "2026-11-17",
    school: 'Purdue University (ISS)',
    href: 'https://www.purdue.edu/gpp/iss/student/f1/employment/cpt.html',
    tone: 'tighten',
    zh: {
      state: '只批学位必修，或特定论文研究需要的 CPT',
      detail:
        'ISS 公开页面要求实践为主学位所必需；论文型硕士或博士为完成论文、需要校外独有技术或必要数据的，也可申请，并须注册研究学分。页面下方的旧选修课措辞已不适用。ECE 邮件另行记录，原邮件截图保留。',
    },
    en: {
      state:
        'Only degree-required CPT or specific thesis-research CPT',
      detail:
        'The ISS page requires training for the primary degree, with a separate route for thesis or dissertation research that needs externally available technology or essential data, plus research-credit enrollment. Older elective-course wording lower on the page no longer applies. The ECE email is recorded separately and its screenshot is kept.',
    },
    screenshots: [
      { src: '/cpt-evidence/cpt_purdue_iss.jpeg', width: 1206, height: 1018 },
    ],
  },
  {
    id: 'bryn-mawr-college',
    "checkedOn": "2026-11-23",
    school: 'Bryn Mawr College',
    href: 'https://www.brynmawr.edu/inside/offices-services/impact-center/international-advising/issa-announcements',
    tone: 'pause',
    zh: {
      state: '9·15：暂停新的选修型 CPT',
      detail:
        'ISSA 暂停受理新的选修型（optional）CPT，也就是不是所有学生毕业都必须做的实践，同时在审查校内政策和流程。',
    },
    en: {
      state: 'September 15: new optional CPT paused',
      detail:
        'ISSA has paused new optional CPT, meaning training not every student in the program must do, while it reviews its policies and procedures.',
    },
    screenshots: [],
  },
  {
    "id": "university-at-buffalo",
    "checkedOn": "2026-11-23",
    "school": "University at Buffalo",
    "href": "https://www.buffalo.edu/international-student-services/immigration-visa/f-1-student/curricular-practical-training--cpt-.html",
    "tone": "continue",
    "zh": {
      "state": "11·17：恢复按 8 月前标准审核 CPT",
      "detail": "ISS 宣布恢复按 8 月前标准审核 CPT。实习仍须与专业课程相关，并按校方要求提交课程和学分材料；已批的 2026 秋季 CPT 可以照计划继续。"
    },
    "en": {
      "state": "November 17: pre-August CPT review standards restored",
      "detail": "ISS will again review CPT under its pre-August standards. Training still needs a connection to the curriculum and the school’s course and credit documentation. Approved Fall 2026 CPT can continue as planned."
    },
    "screenshots": []
  },
  {
    "id": "university-of-michigan-dearborn",
    "checkedOn": "2026-11-23",
    "school": "University of Michigan–Dearborn",
    "href": "https://umdearborn.edu/office-international-affairs/important-updates",
    "tone": "pause",
    "zh": {
      "state": "11·18：非全专业必修实践先等后续流程",
      "detail": "OIA 正与总法律顾问讨论法院暂缓后的 CPT 流程。现阶段只有全专业学生必修的实践可在 M-International 提交新请求，其他学生先等 OIA 通知。原列合格项目为 MS in Applied Behavior Analysis 和 MS in Clinical Health Psychology；已批的 2026 秋季 CPT 照常。本条仅限 Dearborn 校区。"
    },
    "en": {
      "state": "November 18: wait for further procedures for training not required of everyone",
      "detail": "OIA is consulting General Counsel about CPT procedures after the court’s stay. For now, submit new requests in M-International only for training required of all students in the degree program; other students should await OIA instructions. The previously listed eligible programs are the MS in Applied Behavior Analysis and MS in Clinical Health Psychology. Approved Fall 2026 CPT continues. This entry covers Dearborn only."
    },
    "screenshots": []
  },
  {
    "id": "uc-berkeley",
    "checkedOn": "2026-11-23",
    "school": "UC Berkeley",
    "href": "https://internationaloffice.berkeley.edu/students/employment/cpt",
    "tone": "continue",
    "zh": {
      "state": "11·17：恢复 Course Credit CPT；须提前两周申请",
      "detail": "BIO 恢复处理课程学分型 CPT。学生须有与主修专业相关的实践，注册同期、带学分的课程，并取得院系推荐。一般处理时间为完整申请送达 BIO 后 5 个工作日，校方要求至少在开工前两周提交。学位必需和必要论文研究两条路径继续；工作第一天须持有效 CPT I-20。 Degree Requirement CPT 仍要求全专业学生必修；Thesis/Dissertation Requirement CPT 限已 Advanced to Candidacy 的论文型硕士或博士，实践须为完成论文所必需、无法由其他研究或数据收集方式合理替代，并有导师书面证明。"
    },
    "en": {
      "state": "November 17: Course Credit CPT resumed; apply at least two weeks ahead",
      "detail": "BIO has resumed Course Credit CPT. Students need training related to their major, concurrent enrollment for credit and an academic adviser’s recommendation. Normal processing takes five business days after BIO receives a complete request; submit at least two weeks before work begins. Degree-required and necessary thesis-research routes continue. Have a valid CPT I-20 on the first day of work. Degree Requirement CPT still requires training of every student in the program. Thesis/Dissertation Requirement CPT is limited to thesis-track master’s or doctoral students who have Advanced to Candidacy, when the necessary research cannot reasonably be replaced by another research or data-collection method and is documented in writing by the faculty adviser."
    },
    "screenshots": []
  },
  {
    id: 'uc-davis',
    "checkedOn": "2026-11-23",
    school: 'UC Davis',
    href: 'https://siss.ucdavis.edu/news/federal-government-updates-international-students-and-scholars',
    tone: 'continue',
    zh: {
      state: '11·23：冬季学季将恢复办理课程学分 CPT',
      detail: '学校 11·23 通知宣布，冬季学季将恢复处理课程学分 CPT。学位要求 CPT 继续办理，已有授权按 CPT I-20 的条件继续。开始实习或实践前，须先取得 SISS 的 CPT 授权。',
    },
    en: {
      state: 'November 23: course-credit CPT processing will resume for winter quarter',
      detail:
        'The November 23 notice announces resumed course-credit CPT processing for winter quarter. Degree-required CPT continues, and existing authorizations continue under the terms on the CPT I-20. Obtain SISS CPT authorization before starting training.',
    },
    screenshots: [],
  },
  {
    id: 'boston-university',
    "checkedOn": "2026-11-23",
    school: 'Boston University',
    href: 'https://www.bu.edu/isso/2026/11/17/judge-issues-preliminary-injunction-in-lawsuit-challenging-sevp-cpt-guidance/',
    tone: 'pause',
    zh: {
      state: '春季仍限全专业必修 CPT，校方准备后续办法',
      detail: "ISSO 11·19 更新法院暂缓后的安排：春季继续为同一项目所有学生都必须完成的实践授权 CPT。学校正与院系及总法律顾问合作，起草有关实习、临床轮转和其他课程实践的指引，并准备下一学年的 CPT 办法。",
    },
    en: {
      state: 'Spring CPT remains limited to all-students requirements; further guidelines in preparation',
      detail:
        "ISSO’s November 19 update says spring CPT continues for experiences required of every student in a particular program. ISSO is working with academic departments and General Counsel on guidance for internships, clinical rotations and other curricular training, while preparing CPT guidelines for the next academic year.",
    },
    screenshots: [],
  },
  {
    "id": "uiuc",
    "checkedOn": "2026-11-23",
    "school": "University of Illinois Urbana-Champaign (UIUC)",
    "href": "https://blogs.illinois.edu/view/8569/1744245392",
    "tone": "continue",
    "zh": {
      "state": "11·17：恢复有正式实践课程或论文研究支持的 CPT",
      "detail": "ISSS 恢复按原有法规审核：实践须通过有正式工作环节的课程，或与拟定的论文研究直接相关，并属于既定课程的一部分。工作前仍须取得 CPT I-20。UIUC 与 UIC Chicago 分开记录。"
    },
    "en": {
      "state": "November 17: CPT resumes for courses with formal practical components or thesis research",
      "detail": "ISSS resumed review under the existing regulation: training must be part of the curriculum through a course with a formal work component or be directly related to proposed thesis research. A CPT I-20 is required before work begins. UIUC is listed separately from UIC Chicago."
    },
    "screenshots": [
      {
        "src": "/cpt-evidence/cpt_uiuc_notice.jpeg",
        "width": 1206,
        "height": 2622
      }
    ]
  },
  {
    "id": "texas-a-m",
    "checkedOn": "2026-11-23",
    "school": "Texas A&M",
    "href": "https://global.tamu.edu/isss/employment-internships/curricular-practical-training.html",
    "tone": "continue",
    "zh": {
      "state": "11·17：停止执行全专业必修限制，按个人学位计划申请",
      "detail": "ISSS 停止执行实习必须是全专业学生必修的限制。484、684 等实习课程须列入学生获批的个人学位计划；雇主与院系仍须按校方流程完成合作协议，工作前取得 CPT I-20。"
    },
    "en": {
      "state": "November 17: all-student requirement lifted; apply under the individual degree plan",
      "detail": "ISSS is no longer implementing the requirement that training be mandatory for every student in the program. Internship courses such as 484 and 684 must be on the student’s approved individual degree plan. Employers and departments still complete the school’s cooperative-agreement process, with a CPT I-20 before work begins."
    },
    "screenshots": []
  },
  {
    id: 'ut-dallas',
    "checkedOn": "2026-11-23",
    school: 'UT Dallas',
    href: 'https://isso.utdallas.edu/2026/09/17/update-on-cpt-policy-sevp-broadcast/',
    tone: 'tighten',
    zh: {
      state: '9·17 起只批学位目录要求的实习课',
      detail:
        'ISSO 9·17 通知说，和学校法律顾问确认后，整体 CPT 政策不变，但按 SEVP 的澄清收紧了一点：只有学位目录写明要修实习课的学生才能批 CPT，没有这项要求的不能批，也没有个案例外。需要在校外完成论文研究的研究生，可以申请 Academic CPT。',
    },
    en: {
      state:
        'From September 17, only internship courses the catalog requires',
      detail:
        'ISSO said on September 17 that, after checking with university counsel, its overall CPT policy is unchanged except for one tightening under the SEVP clarification: only students whose degree catalog requires an internship course can get CPT, with no case-by-case exceptions. Graduate students who must do thesis or dissertation research off campus can use Academic CPT.',
    },
    screenshots: [],
  },
  {
    "id": "university-of-michigan",
    "checkedOn": "2026-11-23",
    "school": "University of Michigan",
    "href": "https://internationalcenter.umich.edu/about/news/federal-court-temporarily-blocks-sevp-guidance-curricular-practical-training-cpt",
    "tone": "tighten",
    "zh": {
      "state": "11·17：准备后续指引，非学位必需实践先等申请说明",
      "detail": "International Center 正评估法院命令，并将与院系沟通 CPT 流程变化。申请非学位必需实践的学生，应先等更新说明再通过 M-Passport 递交。M-Passport 申请处理通常需 1 至 2 周。"
    },
    "en": {
      "state": "November 17: further guidance being prepared; wait before applying for non-required training",
      "detail": "The International Center is reviewing the court’s order and will communicate CPT procedure changes to departments. Students seeking training that is not degree-required should wait for updated instructions before submitting in M-Passport. M-Passport requests generally take one to two weeks to process."
    },
    "screenshots": [
      {
        "src": "/cpt-evidence/cpt_michigan_notice.jpeg",
        "width": 1544,
        "height": 916
      }
    ]
  },
  {
    "id": "northwestern-university",
    "checkedOn": "2026-11-23",
    "school": "Northwestern University",
    "href": "https://www.northwestern.edu/international/international-students/student-employment/f-1-practical-training/curricular-practical-training/",
    "tone": "continue",
    "zh": {
      "state": "11·19：按课程联系审核，须注册相关学术课程",
      "detail": "OISS 11·19 更新后，实践须与主修相关，并属于既定课程的一部分。学生须注册与实践相关的学术课程，取得实习机构和校内学业负责人的合作协议，经 OISS 审批并领取 CPT I-20 后开工。学期内实践须同期修课；暑期可在暑期或紧接的秋季修相关课程。每个学期分别申请，一般需 7 个工作日处理。9·03 的通知截图保留作对照。"
    },
    "en": {
      "state": "November 19: curriculum-based review with enrollment in a related academic course",
      "detail": "The November 19 OISS page requires training related to the major and integral to the curriculum. Enroll in a related academic course and obtain a cooperative agreement signed by the internship provider and academic approver. OISS must issue the CPT I-20 before work. During the academic year, take the course in the work term; summer CPT may use a summer or following-fall course. Apply separately each term; processing normally takes up to seven business days. The September 3 screenshot is retained for comparison."
    },
    "screenshots": [
      {
        "src": "/cpt-evidence/cpt_northwestern_notice.png",
        "width": 1284,
        "height": 1690
      }
    ]
  },
  {
    "id": "columbia-university",
    "checkedOn": "2026-11-23",
    "school": "Columbia University",
    "href": "https://immigration.columbia.edu/news/important-updates-cpt-opt-duration-status",
    "tone": "continue",
    "zh": {
      "state": "11·18：恢复考虑选修 CPT，须有课程联系和三方协议",
      "detail": "ISSO 恢复考虑属于既定课程一部分的选修 CPT。实践须与学生的培养或学位项目密切相关，并由学生、学院和实习／安置机构签署协议。校方提供推荐模板。"
    },
    "en": {
      "state": "November 18: elective CPT considered again; curriculum link and three-party agreement required",
      "detail": "ISSO will again consider elective CPT that is integral to the established curriculum. The work must be integral to the student’s training or degree program and supported by an agreement signed by the student, school and placement agency or internship. The university provides a recommended template."
    },
    "screenshots": [
      {
        "src": "/cpt-evidence/cpt_columbia_notice.webp",
        "width": 1080,
        "height": 2047
      }
    ]
  },
  {
    id: 'harvard-university',
    "checkedOn": "2026-11-23",
    school: 'Harvard University',
    href: 'https://www.hio.harvard.edu/employment-training/curricular-practical-training',
    tone: 'tighten',
    zh: {
      state: '标准收紧，没有全面暂停',
      detail:
        '工作必须是学位正式规定的要求，还要有和这项要求对应的合作协议（cooperative agreement）。',
    },
    en: {
      state: 'Stricter standard; no university-wide pause',
      detail:
        'The work must be a formal degree requirement, backed by a matching cooperative agreement.',
    },
    screenshots: [],
  },
  {
    "id": "university-of-washington",
    "checkedOn": "2026-11-23",
    "school": "University of Washington (UW)",
    "href": "https://iss.washington.edu/preliminary-injunction-cpt/",
    "tone": "tighten",
    "zh": {
      "state": "11·17：秋季限制继续；冬春季安排将在未来数周公布",
      "detail": "ISS 正与校领导和州总检察长办公室讨论是否恢复原有 CPT 政策。秋季安排暂时维持；冬季和春季授权办法将在未来数周通知学生和院系。"
    },
    "en": {
      "state": "November 17: autumn restrictions continue; winter and spring decisions in coming weeks",
      "detail": "ISS is consulting university leadership and the Attorney General’s office about returning to previous CPT policies. Autumn arrangements remain in effect for now. Students and departments will receive winter and spring authorization decisions in the coming weeks."
    },
    "screenshots": []
  },
  {
    id: 'university-of-maryland-college-park',
    "checkedOn": "2026-11-23",
    school: 'University of Maryland, College Park',
    href: 'https://marylandglobal.umd.edu/global-learning-all/international-students-scholars/employment-taxes/employment-f-1-international-students/curricular-practical-training-cpt',
    tone: 'pause',
    zh: {
      state: '暂停：既不是专业必修、也不是论文必需的新 CPT',
      detail:
        'ISSS 暂停不属于三类要求的未批准 CPT：全专业必修、必修课程、论文／学位论文研究要求。UNIV099、ENCO099、BMGT099 等非必修实习暂不受理。已获批的 CPT 可以继续。校方当前日历列明，冬季 CPT 最晚于 2027 年 1·27 结束，春季 CPT 最早同日开始。',
    },
    en: {
      state:
        'Paused: new CPT not required by the program or for thesis research',
      detail:
        'ISSS paused unapproved requests unless the training is required for every student, is part of a required course, or is necessary for thesis or dissertation research. UNIV099, ENCO099, BMGT099, and other non-required internships are not being accepted; previously authorized CPT may continue. The current calendar lists January 27, 2027 as the latest winter CPT end and earliest spring CPT start.',
    },
    screenshots: [],
  },
  {
    "id": "trine-university",
    "checkedOn": "2026-11-23",
    "school": "Trine University",
    "href": "https://www.trine.edu/international/hybrid/experiential-learning/cpt-information.aspx",
    "tone": "tighten",
    "zh": {
      "state": "不接受全远程 CPT；授权结束后仍须完成整学期课程",
      "detail": "Trine 不再接受 100% 远程 CPT 岗位；混合办公逐案审核。学生须完成整个学期的 CPT 课程并缴费，即使授权在学期中结束。课程通常在授权开工日后一周内自动注册；同学期换一份新 CPT 时沿用同一课程。研究生 CPT 页：2027 春季起按学期授权，同一雇主也须重新申请；新生最早在开课日（2027 春季为 01·11）开始工作，提前拿到 I-20 也不能提前开工。OPT 在 SEVIS transfer release date 结束，转学后须重新获批 CPT。缺件或填错的申请直接退回，问题解决后重新提交。续期改为过渡延期，最迟到 2027·06·13 或更早的项目／资格结束日；续期待审期间旧授权不延长。11·16 前已批的授权不撤销。秋季首次 CPT 截止 2026·11·16，下一开始日 2027·01·11；春季截止 2027·04·05，下一开始日 2027·06·14。"
    },
    "en": {
      "state": "Fully remote CPT not accepted; finish the semester’s course after authorization ends",
      "detail": "Trine no longer accepts 100% remote CPT jobs; hybrid jobs are reviewed individually. Students must pay for and complete the full semester’s CPT course even if authorization ends mid-semester. Registration is normally automatic within one week after the authorized start date; a new CPT authorization in the same semester uses the same course section. The graduate CPT page: from Spring 2027 CPT is approved semester by semester, including renewals with the same employer. New students cannot work before classes start (January 11, 2027 for Spring), even with an earlier I-20. OPT ends on the SEVIS transfer release date, and work under CPT then needs new approval. Incomplete or incorrect applications are rejected and must be resubmitted once fixed. Renewals become transition extensions ending by June 13, 2027, or an earlier program/eligibility end; a pending renewal does not extend the current authorization. Approvals before November 16 are not rescinded. The initial Fall deadline is November 16, 2026 (next start January 11); Spring is April 5 (next start June 14)."
    },
    "screenshots": []
  },
  {
    id: 'mit',
    "checkedOn": "2026-11-23",
    school: 'Massachusetts Institute of Technology (MIT)',
    href: 'https://iso.mit.edu/employment/f-1-curricular-practical-training/',
    tone: 'pause',
    zh: {
      state: '暂停：不是学位必修的新 CPT',
      detail:
        "MIT 暂停一类新 CPT：8·24 当日已收到或待审、且实践并非全专业学生完成学位必需的申请。校方会联系已获 2026 秋季 CPT 授权的学生商量后续。最新日期表：2027 春季 01·30—05·19（仅兼职）、暑期 05·20—08·20（兼职或全职）、秋季 08·21—12·17（仅兼职），后续年度也已更新。日期表适用于符合资格的申请；部分学生另有更晚的开始限制，请向 ISO 确认。",
    },
    en: {
      state:
        'Paused: new CPT not required for the degree',
      detail:
        "MIT paused new CPT requests received or pending as of August 24 when the training is not required for every student to complete the degree, and will contact students already issued Fall 2026 CPT to discuss options. The current date table lists Spring 2027 January 30–May 19 (part-time), Summer May 20–August 20 (part- or full-time) and Fall August 21–December 17 (part-time), with later years updated too. The calendar applies to eligible requests; some students face later start restrictions, so confirm with ISO.",
    },
    screenshots: [
      { src: '/cpt-evidence/cpt_mit.jpeg', width: 1080, height: 2341 },
    ],
  },
  {
    id: 'ucsb',
    "checkedOn": "2026-11-23",
    school: 'UC Santa Barbara (UCSB)',
    href: 'https://oiss.ucsb.edu/curricular-practical-training',
    tone: 'tighten',
    zh: {
      state: "课程须要求所有修课学生完成实践",
      detail:
        "OISS 现行页面说明符合条件者可通过 UCSBGlobal 申请，获批后领取带 CPT 授权的 I-20。实践须与学位相关、是课程要求的一部分。学生须修读要求所有修课学生完成实践的课程。此前 8 月的暂停通知已撤下。附图为旧公告，保留供对照。",
    },
    en: {
      state: "The course must require practical work of every enrolled student",
      detail:
        "The current OISS page directs eligible students to apply through UCSBGlobal; approved students receive a CPT-authorized I-20. Training must relate to the degree and be integral to the curriculum. Students must enroll in a course that requires practical work from every enrolled student. The August pause notice has been taken down. The screenshot shows the earlier notice for comparison.",
    },
    screenshots: [
      { src: '/cpt-evidence/cpt_ucsb_1.jpeg', width: 1080, height: 1677 },
      { src: '/cpt-evidence/cpt_ucsb_2.jpeg', width: 1080, height: 1508 },
    ],
  },
  {
    id: 'new-york-university-tandon-mathematics',
    "checkedOn": "2026-11-23",
    school: 'New York University (Tandon Mathematics)',
    href: 'https://math.nyu.edu/dynamic/sites/tandon/internships/',
    tone: "tighten",
    zh: {
      state: "页面列申请步骤；原暂停通知已撤下",
      detail:
        "Tandon 数学系当前实习页列出课程注册、向 OGS 提交材料及获批后工作的步骤，先前自 9·01 暂停 CPT 的通知已撤下；院系没有公布恢复日期，申请前请先问院系。本条仅限 Tandon 数学系。",
    },
    en: {
      state:
        "Application steps listed; earlier pause notice removed",
      detail:
        "The current Tandon Mathematics internship page lists course registration, OGS documents and authorization before work; the earlier September 1 pause notice has been removed. The department has not announced a reopening date, so check with it before applying. This entry covers Tandon Mathematics only.",
    },
    screenshots: [],
  },
  {
    id: 'university-of-southern-california',
    "checkedOn": "2026-11-23",
    school: 'University of Southern California',
    href: 'https://ois.usc.edu/important-update-regarding-curricular-practical-training/',
    tone: 'tighten',
    zh: {
      state: '8·24 起只批毕业必修的 CPT',
      detail:
        'OIS 不再批不是专业所有学生必修的选修课型 CPT。补材料核对可能让审批变慢。8·24 前签发的 2026 秋季 CPT 不会撤销。',
    },
    en: {
      state: 'Since August 24, only CPT required for graduation',
      detail:
        'OIS no longer approves elective-course CPT that isn’t required of every student in the program. Document checks may slow approvals; Fall 2026 CPT issued before August 24 will not be revoked.',
    },
    screenshots: [],
  },
  {
    "id": "university-of-alabama",
    "checkedOn": "2026-11-23",
    "school": "University of Alabama",
    "href": "https://international.ua.edu/news/curricular-practical-training-cpt-changes-effective-immediately/",
    "tone": "continue",
    "zh": {
      "state": "11·17：恢复按联邦法规处理 CPT，申请材料将更新",
      "detail": "ISSS 宣布恢复按现行联邦 CPT 法规处理申请。校方将更新申请材料和学生就业页面，学生按 ISSS 公布的步骤申请。"
    },
    "en": {
      "state": "November 17: CPT processing resumes under federal regulations; forms to be updated",
      "detail": "ISSS announced resumed processing under the existing federal CPT regulation. It will update the application packet and student employment page; students should follow the procedures ISSS publishes."
    },
    "screenshots": []
  },
  {
    id: 'uc-irvine',
    "checkedOn": "2026-11-23",
    school: 'UC Irvine (UCI)',
    href: 'https://ic.uci.edu/welcome-students/students-current-students/students-current-employment-information/curricular-practical-training/',
    tone: 'tighten',
    zh: {
      state: '只批学位或论文必需的 CPT，且须有合作协议',
      detail:
        "国际中心常设政策页：按当前 SEVP 指引，选修课、可选实习或可选工作不能获批 CPT；获批须同时满足学位必需，以及雇主与学校之间有合作协议。页面列出设有实习或实地研究学位要求的项目，项目表新增法学院 J.D.，限暑期。硕士论文／博士论文必需 CPT：仅限已进入候选阶段（Advanced to Candidacy）的论文型硕士或博士生，实践为完成论文所必需，且无法用其他方法或数据收集方式合理替代。此前的 8·17 Course Credit CPT 暂停通知和 9·14 置顶通知已撤下。附图为此前暂停 Course Credit CPT 的邮件截图，保留供对照。",
    },
    en: {
      state: 'Only degree- or thesis-required CPT, with a cooperative agreement',
      detail:
        "The International Center’s standing policy page says that under current SEVP guidance, CPT cannot be approved for elective courses, optional internships or optional employment; approval requires both a degree requirement and a cooperative agreement between the employer and the campus. It lists programs with an internship or field-study degree requirement; the table now includes the School of Law’s J.D., for summer only. Master’s Thesis/Doctoral Dissertation Requirement CPT is available for thesis-track students who have Advanced to Candidacy, when the training is required to complete the thesis or dissertation and cannot reasonably be replaced by another method or data-collection process. The earlier August 17 Course Credit CPT pause and September 14 top notice have been taken down. The screenshot shows the earlier pause email for comparison.",
    },
    screenshots: [
      { src: '/cpt-evidence/cpt_uci.jpeg', width: 1080, height: 1731 },
    ],
  },
  {
    id: 'university-of-utah',
    "checkedOn": "2026-11-23",
    school: 'University of Utah',
    href: 'https://isss.utah.edu/news/posts/2026/federal-court-temporarily-blocks-guidance-on-cpt.php',
    tone: 'continue',
    zh: {
      state: '11·23：恢复必修及选修 CPT 审核；春季 12·07 开放申请',
      detail:
        'ISSS 恢复按 8 月前标准审核 CPT，必修和选修实习均可考虑，须与专业直接相关、属于既定课程的一部分。2027 年春季申请窗口为 12·07 至 1·29；开始实践前须取得 CPT I-20。已有授权按 I-20 所列雇主、日期和工时继续。',
    },
    en: {
      state:
        'November 23: required and elective CPT review resumes; spring applications open December 7',
      detail:
        'ISSS is resuming CPT review under pre-August criteria, including required and elective training that directly relates to the major and forms part of the established curriculum. Spring 2027 applications open December 7 and close January 29. Obtain the CPT I-20 before training. Existing authorizations continue under the employer, dates and hours on the I-20.',
    },
    screenshots: [],
  },
  {
    id: 'university-of-delaware',
    "checkedOn": "2026-11-23",
    school: 'University of Delaware',
    href: 'https://www.udel.edu/academics/global/isss/announcements/',
    tone: 'pause',
    zh: {
      state: '暂停非必修的新 CPT',
      detail:
        '9·02 公告称 CGPS 暂停 optional CPT。学生仍可提交申请，但审核结束前不会签发此类新授权，处理也可能延迟。',
    },
    en: {
      state: 'New non-required CPT paused',
      detail:
        'The September 2 notice says CGPS paused optional CPT. Students may still submit requests, but no new optional authorizations will be issued until review is complete, and processing delays are expected.',
    },
    screenshots: [],
  },
  {
    "id": "uc-san-diego",
    "checkedOn": "2026-11-23",
    "school": "UC San Diego",
    "href": "https://iseo.ucsd.edu/student-services/working-in-us/f1-cpt.html",
    "tone": "tighten",
    "zh": {
      "state": "官网列出合格专业的 CPT 申请流程",
      "detail": "ISEO 现行页面已撤下此前 iServices 全部请求暂停的通知，并列出经校内核实的 CPT 项目与申请步骤：实践须为该项目所有学生毕业所必需，学生须有相关职位和课程或合作教育安排，经院系和 ISEO 审核、取得注明 CPT 的 I-20 后才能开工。已列项目包括本科生物工程、电影艺术、环境系统、全球健康、城市规划，以及生物工程硕士；未列项目可请院系申请资格审查。页面还说明了研究生夏季合作教育路径。 ISEO 另公告正与法律顾问、UCOP 和其他学校讨论法院暂缓后的安排，将公布进一步说明。"
    },
    "en": {
      "state": "Site lists how qualifying programs apply for CPT",
      "detail": "ISEO has taken down its earlier pause of all iServices CPT requests and now lists verified programs and application steps. Training must be required for every student in the program; students need a related job and a course or cooperative-education arrangement, then department and ISEO review and a CPT-authorized I-20 before work. Listed programs include undergraduate Bioengineering, Cinematic Arts, Environmental Systems, Global Health and Urban Studies, plus the Bioengineering MEng. Departments can request review for unlisted programs, and a graduate summer cooperative-education route is also described. ISEO also announced consultations with Legal Counsel, UCOP and peer institutions about the court’s stay and will publish further clarification."
    },
    "screenshots": []
  },
  {
    id: 'university-of-maryland-baltimore-county',
    "checkedOn": "2026-11-23",
    school: 'University of Maryland, Baltimore County',
    href: 'https://isss.umbc.edu/updates/',
    tone: 'tighten',
    zh: {
      state: '待审和新的 CPT 只限专业必修的实习',
      detail:
        'OISS 9·04 更新：待审和新的申请，都按“专业所有学生必修”的标准审。已签发的 2026 秋季 CPT 不会撤销。本条为 UMBC 校区。',
    },
    en: {
      state:
        'Pending and new CPT limited to program-required training',
      detail:
        'The September 4 OISS update applies the “required of every student in the program” standard to pending and new requests. Fall 2026 CPT already issued will not be revoked. This entry covers the UMBC campus.',
    },
    screenshots: [],
  },
  {
    id: 'george-washington-university',
    "checkedOn": "2026-11-23",
    school: 'George Washington University',
    href: 'https://internationalservices.gwu.edu/important-update-federal-court-blocks-sevp-cpt-guidance-clarifications-institutional-cpt-policy',
    tone: 'continue',
    zh: {
      state: '11·18：选修课程型 CPT 可申请，须有学分并同期修课',
      detail:
        'ISO 11·18 公告允许选修课程支持 CPT。实践须直接对应专业现有的实习或体验课程，并计入学位进度；学生须在实践所在学期注册该课程、取得学分。申请前先与学业顾问确认课程，再向 ISO 提交。已有 CPT 按获批日期、雇主及修课条件继续。',
    },
    en: {
      state: 'November 18: elective-course CPT qualifies with credit and same-term enrollment',
      detail:
        'ISO’s November 18 notice allows elective courses to support CPT. Training must be tied to an existing experiential, internship or practicum course in the academic program and count toward degree progress. Enroll in that course for academic credit during the training term. Confirm the course with an academic adviser before applying to ISO. Existing CPT continues under its approved dates, employer details and course-enrollment conditions.',
    },
    screenshots: [],
  },
  {
    "id": "university-of-colorado-boulder",
    "checkedOn": "2026-11-23",
    "school": "University of Colorado Boulder (CU Boulder)",
    "href": "https://www.colorado.edu/isss/2026/08/20/change-cpt-authorization-policy-faqs",
    "tone": "pause",
    "zh": {
      "state": "暂关 CPT 申请表，更新法院暂缓后的办理办法",
      "detail": "ISSS 正根据 11·17 法院命令更新申请条件、材料和流程，期间 CPT Request 电子表格暂不可用；有问题请直接联系 ISSS。已授权的 2026 秋季 CPT 照常。"
    },
    "en": {
      "state": "CPT request form temporarily unavailable while procedures are updated",
      "detail": "ISSS is updating CPT eligibility information, materials and procedures following the November 17 court order. The CPT Request e-form is temporarily unavailable; contact ISSS directly with questions. Already authorized Fall 2026 CPT continues."
    },
    "screenshots": []
  },
  {
    id: 'university-of-wisconsin-milwaukee',
    "checkedOn": "2026-11-23",
    school: 'University of Wisconsin-Milwaukee',
    href: 'https://uwm.edu/cie/services/students/employment/curricular-practical-training/',
    tone: 'tighten',
    zh: {
      state: '8·24 起只批专业所有人必修的 CPT',
      detail:
        'ISSS 要求实践是学位项目所有学生明确必修的内容。8·24 前已批的 CPT 可以用到当前授权结束。',
    },
    en: {
      state:
        'Since August 24, only CPT required of every student in the program',
      detail:
        'ISSS requires a clearly stated practical-training requirement for every student in the program. CPT approved before August 24 stays valid until its current end date.',
    },
    screenshots: [],
  },
  {
    "id": "university-of-oregon",
    "checkedOn": "2026-11-23",
    "school": "University of Oregon",
    "href": "https://isss.uoregon.edu/curricular-practical-training-cpt",
    "tone": "continue",
    "zh": {
      "state": "选修实习可申请 CPT；须同期注册学分",
      "detail": "校方列出的资格包括学位必需实践、选修实习要求和必要的论文研究。选修实习须注册学分；博士论文实践须符合候选资格及导师证明等校方要求。"
    },
    "en": {
      "state": "Elective internships can qualify for CPT with concurrent credit enrollment",
      "detail": "The school lists degree-required training, elective internship requirements and necessary thesis research as qualifying routes. Elective internships require credit enrollment. Doctoral research training must meet the school’s candidacy and faculty-documentation requirements."
    },
    "screenshots": []
  },
  {
    "id": "university-of-kansas",
    "checkedOn": "2026-11-23",
    "school": "University of Kansas",
    "href": "https://iss.ku.edu/f-1-cpt-curricular-practical-training",
    "tone": "continue",
    "zh": {
      "state": "11·17：恢复 8 月前标准；专业选修实习课程可支持 CPT",
      "detail": "ISSS 恢复按 8 月前的指引办理。实践须属于专业课程的一部分；学位必修或专业选修的实习课程都可考虑，须同期注册学分，并在工作前取得 CPT 授权。"
    },
    "en": {
      "state": "November 17: pre-August standards restored; major electives can support CPT",
      "detail": "ISSS has restored its pre-August guidance. Training must be part of the major’s curriculum. Required courses and elective internship courses within the major can qualify, with concurrent credit enrollment and CPT authorization before work begins."
    },
    "screenshots": []
  },
  {
    id: 'george-mason-university',
    "checkedOn": "2026-11-23",
    school: 'George Mason University (GMU)',
    href: 'https://oips.gmu.edu/current-immigration-information/',
    tone: 'pause',
    zh: {
      state: '2026 秋季：证明不了是所有人毕业必修的，暂停审理',
      detail:
        'OIPS 正在审核 CPT 政策，要求证明实践是该学位项目全体学生毕业所必需。只是选修课，或只是多个可选毕业路径之一的实习，都不满足标准。',
    },
    en: {
      state:
        'Fall 2026: paused unless the program requires it of every student to graduate',
      detail:
        'During its CPT policy review, OIPS requires proof that training is necessary for every student in the degree program to graduate. An elective internship, or one of several optional ways to meet a degree requirement, does not meet that standard.',
    },
    screenshots: [],
  },
  {
    id: 'ucla',
    "checkedOn": "2026-11-23",
    school: 'UCLA',
    href: 'https://internationalcenter.ucla.edu/September8message',
    tone: 'pause',
    zh: {
      state: '非必修的课程学分／推荐信 CPT 暂停；学位必修的照常',
      detail:
        '9·08 校方通知：8·12 起递交、不是所有学生毕业都必须做的 CPT 申请暂停。论文、研究或 capstone 需要的实践，也必须是 UCLA General Catalog 里所有学生的项目要求。8·12 前已批并签发 CPT I-20 的不受影响。所有 CPT 申请都要附院系和雇主的合作协议。',
    },
    en: {
      state:
        'Non-required course-credit and support-letter CPT suspended; degree-required CPT continues',
      detail:
        'The September 8 notice suspends applications submitted since August 12 for training not every student must do to graduate. Thesis, research or capstone training must also be a requirement for every student in the program in the UCLA General Catalog. CPT approved with an I-20 issued before August 12 is unaffected. Every CPT application needs a department-employer cooperative agreement.',
    },
    screenshots: [
      { src: '/cpt-evidence/cpt_ucla.jpeg', width: 1144, height: 667 },
    ],
  },
  {
    "id": "university-of-pennsylvania",
    "checkedOn": "2026-11-23",
    "school": "University of Pennsylvania (UPenn)",
    "href": "https://global.upenn.edu/isss/news-articles/federal-court-stays-august-2026-cpt-guidance/",
    "tone": "tighten",
    "zh": {
      "state": "11·17：可重新考虑合格学分型 CPT，申请流程将更新",
      "detail": "Penn 可重新考虑符合条件、计学分但并非全体学生必修的实践。ISSS 正调整申请流程；待审或曾被拒的申请先等重审说明，避免重复递交。新申请可先与院系准备课程材料，按 ISSS 后续通知提交；工作前须取得 CPT I-20。"
    },
    "en": {
      "state": "November 17: eligible credit-bearing CPT can be considered again; procedures to be updated",
      "detail": "Penn can again consider eligible credit-bearing training that is not required of every student. ISSS is adjusting procedures. Students with pending or denied requests should await reconsideration instructions and avoid duplicate submissions. New applicants can prepare course materials with their school and submit under forthcoming ISSS instructions; a CPT I-20 is required before work."
    },
    "screenshots": []
  },
  {
    id: 'northeastern-university-coe-masters',
    "checkedOn": "2026-11-23",
    school: 'Northeastern University (COE Master’s)',
    href: "https://coe.northeastern.edu/academics-experiential-learning/co-op-experiential-learning/co-op/graduate-co-op/masters-co-op/",
    tone: 'tighten',
    zh: {
      state: '工程学院硕士只能做一次 co-op／实习，最长 8 个月',
      detail:
        "COE 硕士项目现页写明：每个项目只可参加一次、同一雇主 4–8 个月的 co-op，internship、practicum 等也计入这一次。这是工程学院的项目规定；CPT 仍须单独获批。",
    },
    en: {
      state:
        'Engineering master’s students get one co-op or internship, up to eight months',
      detail:
        "The current COE master’s page allows one co-op at a single employer for 4–8 months per program, and internships, practicums and similar experiences count toward that limit. This is a College of Engineering program rule; CPT still needs separate approval.",
    },
    screenshots: [],
  },
  {
    "id": "georgetown-university",
    "checkedOn": "2026-11-23",
    "school": "Georgetown University",
    "href": "https://internationalservices.georgetown.edu/immigration-updates/",
    "tone": "tighten",
    "zh": {
      "state": "11·19：评估 CPT 资格，12·01 前公布更新",
      "detail": "OGS 11·19 通知说明，学校正根据 11·17 法院暂缓与初步禁令评估 F-1 CPT 政策，并将在 12·01 前向学生说明资格更新。申请安排以 OGS 随后发布的说明为准。"
    },
    "en": {
      "state": "November 19: CPT policy under review; eligibility updates by December 1",
      "detail": "OGS’s November 19 notice says Georgetown is reviewing its F-1 CPT policy following the November 17 stay and preliminary injunction. The university will communicate eligibility updates by December 1. Follow OGS’s forthcoming instructions for applications."
    },
    "screenshots": []
  },
  {
    id: 'james-madison-university',
    "checkedOn": "2026-11-23",
    school: 'James Madison University',
    href: 'https://www.jmu.edu/global/isss/announcements.shtml',
    tone: 'pause',
    zh: {
      state: '学校审查期间，新申请和待审申请暂不决定',
      detail:
        "校方 Immigration Announcements 页（CPT 栏标题为 2026 年 8 月）称，因 8·24 联邦指引，暂缓新申请和待审请求的决定，学校正在加速审查课程及流程。",
    },
    en: {
      state:
        'Decisions on new and pending requests paused during review',
      detail:
        "The Immigration Announcements page (CPT section headed August 2026) says decisions on new and pending requests are paused while JMU reviews academic programs and processes after the August 24 guidance.",
    },
    screenshots: [],
  },
  {
    "id": "boston-college",
    "checkedOn": "2026-11-23",
    "school": "Boston College",
    "href": "https://www.bc.edu/content/bc-web/sites/global-engagement/sites/office-of-international-students-and-scholars/maintain/jcr%3Acontent/bottompar/bc_padded_section/par/bc_news_notes.newsItems.html",
    "tone": "pause",
    "zh": {
      "state": "11·20：评估是否恢复原 CPT 办法，后续几周通知",
      "detail": "OISS 正评估法院暂缓后的指引、关注政府是否上诉，并与校内部门讨论是否恢复原有 CPT 办法。学校将在未来几周作出决定后通知学生和院系。原先非全专业必修实践的暂停安排继续，申请人可联系 OISS 进行个别咨询。"
    },
    "en": {
      "state": "November 20: reviewing a return to prior CPT policies; updates in coming weeks",
      "detail": "OISS is reviewing guidance after the court’s stay, monitoring a possible appeal and consulting campus partners about returning to its previous CPT policies. Students and departments will receive an update in the coming weeks once a decision is made. The earlier pause on training not required of all program students continues; applicants can contact OISS for individual advising."
    },
    "screenshots": []
  },
  {
    id: 'johns-hopkins-university',
    "checkedOn": "2026-11-23",
    school: 'Johns Hopkins University',
    href: 'https://ois.jhu.edu/students/current-f-1-students/f-1-training-and-employment/curricular-practical-training/',
    tone: 'tighten',
    zh: {
      state: "新申请和待审申请只限毕业必修的实践",
      detail:
        "OIS 页首通知把新申请和待审请求限定为毕业必需、且符合 SEVP 备忘录的实习／实践，合格请求继续处理。正文里关于学分的一般说明以页首通知为准；D/S 暂缓令不影响 CPT。",
    },
    en: {
      state: "New and pending requests limited to degree-required training",
      detail:
        "The OIS notice limits new and pending requests to degree-required training consistent with the SEVP memos, and qualifying requests continue to be processed. General credit wording in the body is superseded by the notice; the D/S stay does not affect CPT.",
    },
    screenshots: [],
  },
  {
    id: 'washington-state-university',
    "checkedOn": "2026-11-23",
    school: 'Washington State University',
    href: 'https://ip.wsu.edu/august-7th-2026-special-immigration-advisory/',
    tone: 'tighten',
    zh: {
      state: '2027 春季起学期内不批全职 CPT，必修实习除外',
      detail:
        "8·07 校方公告称，自 2027 春季起学年内不再批准全职 CPT，课程明确要求实习的项目除外（如 Hospitality Business Management、Clinical Psychology）。这份公告早于 8 月 SEVP 广播，针对的是学年内全职 CPT，暑期和兼职 CPT 不受影响。10·23、10·30 的后续通告涉及 OPT 费用、税务、项目延期和注册提醒，没有改动这项 CPT 安排。",
    },
    en: {
      state:
        'From Spring 2027, no full-time CPT during the school year except required internships',
      detail:
        "The August 7 notice says full-time academic-year CPT will not be approved from Spring 2027, except for curriculum-required internships (such as Hospitality Business Management or Clinical Psychology). It predates the August broadcasts and covers full-time academic-year CPT only; summer and part-time CPT are not affected. Later advisories on October 23 and 30 cover OPT fees, taxes, program extensions and registration without changing this CPT arrangement.",
    },
    screenshots: [],
  },
  {
    "id": "adelphi-university",
    "checkedOn": "2026-11-23",
    "school": "Adelphi University",
    "href": "https://www.adelphi.edu/policies/curricular-practical-training-cpt-policy/",
    "tone": "tighten",
    "zh": {
      "state": "10·15：必须是课程必修，并有校企合作协议",
      "detail": "校方政策要求实践是课程要求的必需部分、与主修直接相关，雇主须与学校签合作协议，并同期注册课程取得学分。只为积累职业经验、丰富简历、minor 或一般毕业要求的实践都不够格。学年内通常限兼职，项目要求全职的除外。"
    },
    "en": {
      "state": "October 15: must be required by the curriculum, with a cooperative agreement",
      "detail": "The university policy requires training that is integral to the established curriculum, required in the program and directly related to the major, with an employer-school cooperative agreement and concurrent credit. Career experience, résumé building, a minor or a general graduation requirement alone does not qualify. Academic-year CPT is generally part-time unless the program requires full-time training."
    },
    "screenshots": []
  },
  {
    "id": "north-carolina-state-university",
    "checkedOn": "2026-11-23",
    "school": "North Carolina State University (NC State)",
    "href": "https://internationalservices.ncsu.edu/curricular-practical-training/",
    "tone": "continue",
    "zh": {
      "state": "恢复 co-op 路径；学期内全职 CPT 仍有严格条件",
      "detail": "OIS 更新后的规定列出课程必需实践、必要论文研究和专业相关 co-op。须注册对应课程或研究学分，实习至少 6 周，并获学业顾问批准；研究生还须 DGP 推荐。研究生在秋、春等必修学期的 co-op 限每周不超过 20 小时；全职 CPT 须为学位要求或完成论文所必需。本科全职 co-op 按多学期项目办理。春季 2027 CPT 自 2026·11·02 开放申请，最早授权开始日为 2026·12·13。全职申请截至 2027·01·25、兼职截至 03·06、延期截至 03·12；当学期完成学业者最晚 05·08 结束，继续在读者最晚 05·18 结束。暑期申请 03·22 开放。须符合上述课程及全职限制，工作前取得 CPT I-20。"
    },
    "en": {
      "state": "Co-op route restored; full-time CPT in required semesters remains limited",
      "detail": "The updated OIS page lists curriculum-required training, essential thesis research and co-op in the major. Enroll in the corresponding course or research credits, plan at least six weeks of training and obtain academic-adviser approval; graduate students also need DGP recommendation. Graduate co-op in required terms such as fall and spring is limited to 20 hours weekly. Full-time CPT in those terms must be degree-required or essential to the thesis. Undergraduate full-time co-op follows the multi-semester program. Spring 2027 CPT applications open November 2, 2026, with authorization starting no earlier than December 13, 2026. Full-time requests close January 25, 2027; part-time March 6; extensions March 12. Authorization ends by May 8 for students completing that semester, or May 18 for continuing students. Summer applications open March 22. Meet the course and full-time limits above and receive the CPT I-20 before work."
    },
    "screenshots": []
  },
  {
    "id": "western-michigan-university",
    "checkedOn": "2026-11-23",
    "school": "Western Michigan University (WMU)",
    "href": "https://wmich.edu/international/immigration/news",
    "tone": "continue",
    "zh": {
      "state": "11·17：暂停原定 2027 春季收紧，恢复原有流程",
      "detail": "校方暂停原定从 2027 春季实施的 CPT 限制，恢复按既有联邦法规办理。春季申请沿用原有程序；后续法院命令改变安排时，学校将再通知。"
    },
    "en": {
      "state": "November 17: planned Spring 2027 restrictions paused; earlier procedures restored",
      "detail": "The university paused the CPT restrictions planned for Spring 2027 and resumed processing under the established federal regulation. Spring requests follow the earlier procedures; the university will announce changes if further court orders alter the arrangements."
    },
    "screenshots": []
  },
  {
    "id": "georgia-institute-of-technology",
    "checkedOn": "2026-11-23",
    "school": "Georgia Institute of Technology (Georgia Tech)",
    "href": "https://isss.oie.gatech.edu/curricular-practical-training-cpt",
    "tone": "tighten",
    "zh": {
      "state": "秋季 CPT 不批延期；新表单延后至法院决定后开放",
      "detail": "OIE 继续暂停授权 2026 年秋季 CPT 延期。因 CPT 诉讼仍在进行，新申请表延后至法院作出决定后开放。本科合格项目仅 Construction Science and Management、Public Policy；硕士仅 City & Regional Planning、Digital Media、Robotics。博士须证明实践为完成论文所必需、且没有其他方法满足数据或访问需要，具体证明要求将在表单上线时提供；均须签合作协议。已有授权的具体日期以个人 I-20 和 DSO 通知为准。"
    },
    "en": {
      "state": "No Fall CPT extensions; new forms delayed until a court decision",
      "detail": "OIE continues to withhold Fall 2026 CPT extensions. Because CPT litigation is ongoing, release of the new request form is delayed until a court decision. Eligible bachelor’s programs are Construction Science and Management and Public Policy; master’s programs are City & Regional Planning, Digital Media and Robotics. Doctoral students must show the training is indispensable to dissertation data or access needs, with details available when the form is released; a signed agreement is required in every case. Dates for existing authorizations follow the individual I-20 and DSO notice."
    },
    "screenshots": []
  }
];

export const communitySchools: CommunitySchoolRecord[] = [
  {
    id: 'unc-chapel-hill',
    checkedOn: "2026-11-02",
    school: 'UNC–Chapel Hill',
    zh: {
      state: 'ISSS 邮件截图：只有严格的毕业要求才批，其余暂停',
      detail: "ISSS 邮件截图（见附图）。校方公开 CPT 页目前只写流程修订中、请联系顾问，没有公布新的范围。 这是学校之前发出的通知，最新安排以学校公告为准。",
    },
    en: {
      state:
        'ISSS email screenshot: paused except strict graduation requirements',
      detail:
        "ISSS email screenshot (attached). The public CPT page currently says only that processes are being revised and directs students to advisers; no new scope has been published. This is an earlier school notice; check the school’s latest announcements for current arrangements.",
    },
    screenshots: [
      { src: '/cpt-evidence/cpt_unc.jpeg', width: 1080, height: 1875 },
    ],
  },
  {
    id: 'caltech',
    checkedOn: "2026-11-02",
    school: 'Caltech',
    zh: {
      state: 'ISP 通知截图：新 CPT 全部暂停，在做的人不受影响',
      detail: "ISP 通知截图（见附图）。校方 F-1 就业页仍保留一般 CPT 申请说明，没有发布恢复公告。 这是学校之前发出的通知，最新安排以学校公告为准。",
    },
    en: {
      state:
        'ISP notice screenshot: all new CPT paused; current CPT unaffected',
      detail:
        "ISP notice screenshot (attached). Caltech’s F-1 employment page still carries general CPT application instructions; no reopening has been announced. This is an earlier school notice; check the school’s latest announcements for current arrangements.",
    },
    screenshots: [
      { src: '/cpt-evidence/cpt_caltech.jpeg', width: 1080, height: 1413 },
    ],
  },
  {
    id: 'purdue-ece',
    checkedOn: "2026-11-02",
    school: 'Purdue ECE',
    zh: {
      state:
        'ECE 邮件截图：本学期不批非必修实习／co-op；论文研究另问 ISS',
      detail: "ECE 院系邮件截图（见附图），代表 ECE 院系说法；普渡全校说法见 Purdue University (ISS) 条目。 这是学校之前发出的通知，最新安排以学校公告为准。",
    },
    en: {
      state:
        'ECE email screenshot: no non-required internship/co-op CPT this semester; ask ISS about thesis research',
      detail:
        "ECE department email screenshot (attached), reflecting the ECE department’s position; for Purdue’s university-wide policy, see the Purdue University (ISS) entry. This is an earlier school notice; check the school’s latest announcements for current arrangements.",
    },
    screenshots: [
      { src: '/cpt-evidence/cpt_purdue.jpeg', width: 1320, height: 1893 },
    ],
  },
  {
    id: 'goldey-beacom-college',
    checkedOn: "2026-11-02",
    school: 'Goldey-Beacom College',
    zh: {
      state:
        '学校邮件截图：新 CPT 暂停审批；还没进 SEVIS 的暂不批',
      detail: "学校邮件截图（见附图）。校方公开 Career Services 页只有一般 CPT 说明，没有发布恢复公告。 这是学校之前发出的通知，最新安排以学校公告为准。",
    },
    en: {
      state:
        'School email screenshot: new CPT approvals paused; requests not yet in SEVIS won’t be approved for now',
      detail:
        "School email screenshot (attached). The public Career Services page has only general CPT information; no reopening has been announced. This is an earlier school notice; check the school’s latest announcements for current arrangements.",
    },
    screenshots: [
      {
        src: '/cpt-evidence/cpt_goldey_beacom.jpeg',
        width: 1080,
        height: 2202,
      },
    ],
  },
];

export function getVerifiedSchools(language: Language): VerifiedSchool[] {
  return verifiedSchools.map(({ zh, en, ...school }) => ({
    ...school,
    ...(language === 'en' ? en : zh),
  }));
}

export function getCommunitySchools(language: Language): CommunitySchool[] {
  return communitySchools.map(({ zh, en, ...school }) => ({
    ...school,
    ...(language === 'en' ? en : zh),
  }));
}

export const schoolRecordCount =
  verifiedSchools.length + communitySchools.length;
