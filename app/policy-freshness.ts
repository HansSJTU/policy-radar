import type { PolicyId } from './community-impact-model';
import type { Language } from './language';

// Last site update, not a certification that every source is fully verified.
export const SITE_UPDATED_ON = '2026-09-20';

// Update each entry only when its sources are actually reviewed.
export const policyCheckedOn: Record<PolicyId, string> = {
  'h1b-program-integrity': '2026-09-19',
  'opt-fee': '2026-09-19',
  'h1b-fee': '2026-09-20',
  'duration-status': '2026-09-20',
  'h1b-weighted-selection': '2026-09-20',
  'cpt-guidance': '2026-09-20',
  'prevailing-wage': '2026-09-20',
  'h1b-reform': '2026-09-19',
  'grace-period': '2026-09-20',
  'ead-discretion': '2026-09-20',
  'h4-ead': '2026-09-19',
  'perm-modernization': '2026-09-19',
};

const verificationNotes: Partial<Record<PolicyId, Record<Language, string>>> = {
  'h1b-program-integrity': {
    zh: '核查范围：9·19 已读取白宫 9·18 行政命令全文及论坛原帖。本项只跟踪该命令本身，不引用同日其他文件。后续 Federal Register、DOL 与 USCIS 文件检索未找到可确认的新执行文件，不据此断言没有后续文件。命令编号和部门实际落实情况待跟踪。10·18 是按签署日加 30 个日历天计算的启动复查期限，不是另行公布的生效日。',
    en: 'Review scope: the September 18 White House order and the forum opening post were read on September 19. This entry tracks the order itself and does not rely on other documents issued the same day. Searches for subsequent Federal Register, DOL and USCIS records did not locate a verifiable new implementation document; that does not prove none exists. The order number and actual implementation remain to be tracked. October 18 is calculated as 30 calendar days after signature for beginning the review, not a separately announced effective date.',
  },
  'perm-modernization': {
    zh: "核查范围：9·19 读取 OIRA 9·14 待审记录并检索联邦公报。未找到可验证的后续 NPRM；检索未命中不证明不存在后续文件。",
    en: "Review scope: the September 14 pending OIRA record and Federal Register search were reviewed September 19. No subsequent NPRM was verified; a search miss is not proof that no later document exists.",
  },
  'opt-fee': {
    zh: "核查范围：9·19 读取 OIRA 结案记录、联邦公报检索及新旧论坛主题的最新可访问回复。未核实公开 NPRM，官方金额和缴费方仍待正文确认；论坛回复不是官方条款。",
    en: "Review scope: the OIRA conclusion record, Federal Register search and latest accessible replies in both forum topics were reviewed September 19. A public NPRM was not verified; the official amount and payer still require published text. Forum replies are not official terms.",
  },
  'cpt-guidance': {
    zh: "核查范围：9·19 复核两份 SEVP 备忘录，学校复核延续至 9·20。UT Dallas、UC Irvine 与 Washington State 的原文读取仍有缺口，保留上次成功核对日期，不视为政策反转。Penn、Johns Hopkins 和 Purdue 页面保留的新旧文字差异已在单项说明。其余社区截图仍不是校方公开确认。",
    en: "Review scope: both SEVP memos were reviewed September 19, with campus checks continuing September 20. Original-page access gaps remain for UT Dallas, UC Irvine and Washington State; prior successful review dates are retained, without inferring a policy reversal. Individual entries explain older and newer wording on Penn, Johns Hopkins and Purdue pages. Remaining community screenshots are not public university confirmation.",
  },
  'duration-status': {
    zh: "核查范围：9·19 读取第 51 项禁令及公开案卷镜像，最新可见仍为 9·14 第 52 项、10·02 状态会议通知；镜像可能滞后。9·20 读取议员官网 CRA 公告及决议文本，文本未填决议编号，后续表决与成法进度未核实。不得把提出决议理解为规则已撤销。",
    en: "Review scope: the entry 51 injunction and public docket mirror were read September 19; the latest visible record remains September 14 entry 52 scheduling the October 2 conference. The mirror may lag. The senator’s CRA announcement and resolution text were read September 20; the text leaves the resolution number blank, and subsequent votes or enactment were not verified. Introduction does not mean repeal.",
  },
};

export function getVerificationNote(id: PolicyId, language: Language): string {
  return verificationNotes[id]?.[language] ?? '';
}
