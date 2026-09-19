import type { PolicyId } from './community-impact-model';
import type { Language } from './language';

// Last site update, not a certification that every source is fully verified.
export const SITE_UPDATED_ON = '2026-09-19';

// Update each entry only when its sources are actually reviewed.
export const policyCheckedOn: Record<PolicyId, string> = {
  'h1b-program-integrity': '2026-09-19',
  'opt-fee': '2026-09-17',
  'h1b-fee': '2026-09-17',
  'duration-status': '2026-09-17',
  'h1b-weighted-selection': '2026-09-17',
  'cpt-guidance': '2026-09-17',
  'prevailing-wage': '2026-09-17',
  'h1b-reform': '2026-09-17',
  'grace-period': '2026-09-17',
  'ead-discretion': '2026-09-17',
  'h4-ead': '2026-09-17',
  'perm-modernization': '2026-09-17',
};

const verificationNotes: Partial<Record<PolicyId, Record<Language, string>>> = {
  'h1b-program-integrity': {
    zh: '核查范围：9·19 已读取白宫 9·18 行政命令全文及论坛原帖。本项只跟踪该命令本身，不引用同日其他文件。后续 Federal Register、DOL 与 USCIS 文件检索未找到可确认的新执行文件，不据此断言没有后续文件。命令编号和部门实际落实情况待跟踪。10·18 是按签署日加 30 个日历天计算的启动复查期限，不是另行公布的生效日。',
    en: 'Review scope: the September 18 White House order and the forum opening post were read on September 19. This entry tracks the order itself and does not rely on other documents issued the same day. Searches for subsequent Federal Register, DOL and USCIS records did not locate a verifiable new implementation document; that does not prove none exists. The order number and actual implementation remain to be tracked. October 18 is calculated as 30 calendar days after signature for beginning the review, not a separately announced effective date.',
  },
  'perm-modernization': {
    zh: '核查范围：9·17 复核统一议程与 9 月 14 日 OIRA 待审记录（标题为 Modernizing the Labor Market Test… (NPRM)，状态仍为待审）。Federal Register 正文检索未完成验证，未找到公开 NPRM 不等于证明不存在后续文件。',
    en: 'Review scope: the Unified Agenda and the September 14 pending OIRA record were rechecked September 17 (title “Modernizing the Labor Market Test… (NPRM)”, still pending). Federal Register document verification remains incomplete; failure to locate a public NPRM does not prove that no subsequent document exists.',
  },
  'opt-fee': {
    zh: '核查范围：9·17 复核 OIRA 结案记录及联邦公报检索，尚未找到公开 NPRM。旧论坛主题本次读取返回 403，新主题最新回复同样无法读取。',
    en: 'Review scope: the OIRA conclusion record and Federal Register searches were rechecked September 17; no public NPRM was found. This run could not read the older forum topic (HTTP 403), and the newer topic’s latest replies were inaccessible as well.',
  },
  'cpt-guidance': {
    zh: '核查缺口：Harvard、UC Davis、University of Michigan、Columbia 与 Penn 的校方网页本次返回 403，保留上次成功核对日期，不视为政策反转。UT Dallas 9·17 新通知已取代 8·25 口径。社区截图不等于校方公开确认，论坛只能读到 9·14 之前的回复。',
    en: 'Verification gaps: Harvard, UC Davis, University of Michigan, Columbia and Penn university pages returned HTTP 403 in this run, so their last successful review dates are retained; an access failure is not treated as a policy reversal. UT Dallas superseded its August 25 position with a September 17 notice. Community screenshots are not public university confirmation, and forum replies were readable only through September 14.',
  },
  'duration-status': {
    zh: '核查范围：9·17 复核第 51、52 项及公开案卷，最新可见记录仍为 9·14 第 52 项状态会议通知；法院日历当前只排到 9·24，尚不含 10·02。镜像可能滞后，后续命令与上诉仍需跟踪。',
    en: 'Review scope: entries 51 and 52 and the public docket were rechecked September 17; the latest visible entry remains September 14 entry 52 scheduling the status conference. The court calendar currently runs only through September 24 and does not yet list October 2. The mirror may lag; later orders and appeals still need monitoring.',
  },
};

export function getVerificationNote(id: PolicyId, language: Language): string {
  return verificationNotes[id]?.[language] ?? '';
}
