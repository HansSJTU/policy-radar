import type { PolicyId } from './community-impact-model';
import type { Language } from './language';

// Last site update, not a certification that every source is fully verified.
export const SITE_UPDATED_ON = '2026-09-16';

// Update each entry only when its sources are actually reviewed.
export const policyCheckedOn: Record<PolicyId, string> = {
  'opt-fee': '2026-09-16',
  'h1b-fee': '2026-09-16',
  'duration-status': '2026-09-16',
  'h1b-weighted-selection': '2026-09-16',
  'cpt-guidance': '2026-09-16',
  'prevailing-wage': '2026-09-16',
  'h1b-reform': '2026-09-16',
  'grace-period': '2026-09-16',
  'ead-discretion': '2026-09-16',
  'h4-ead': '2026-09-16',
};

const verificationNotes: Partial<Record<PolicyId, Record<Language, string>>> = {
  'opt-fee': {
    zh: '核查范围：已复核 OIRA 结案记录及联邦公报检索，尚未找到公开 NPRM。原论坛主题已拆分，新主题最新回复访问受限。',
    en: 'Review scope: OIRA completion and Federal Register searches were rechecked; no public NPRM was found. The original forum topic was split and the new topic’s latest replies were inaccessible.',
  },
  'cpt-guidance': {
    zh: '核查缺口：UT Dallas、UC Irvine 当前原页无法读取，保留上次成功核对日期；WSU 仅核对到校方索引正文，后续执行待复核。Penn、JHU 新旧口径冲突仍已注明；USC 学院恢复传闻尚未获公开新公告证实。社区截图不等于校方公开确认，论坛仅复核最新可访问回复。',
    en: 'Verification gaps: current UT Dallas and UC Irvine source pages were inaccessible, so their last successful review dates are retained. WSU was checked through indexed official text; later implementation remains unverified. Penn and JHU source conflicts remain disclosed; USC college reopening reports lack a verified new public notice. Community screenshots are not public university confirmation; only the latest accessible forum replies were reviewed.',
  },
  'h1b-fee': {
    zh: '核查缺口：旧 10 万美元总统公告收费的上诉案卷最新状态尚未完整核实。',
    en: 'Verification gap: the latest appellate dockets for the older $100,000 proclamation fee have not been fully verified.',
  },
  'duration-status': {
    zh: '核查范围：9·16 复核第 51 号暂缓令及公开案卷，最新可见记录仍为 9·14 第 52 项状态会议通知；镜像可能滞后，后续命令与上诉仍需跟踪。',
    en: 'Review scope: order 51 and the public docket were rechecked September 16; the latest visible entry remains September 14 entry 52 scheduling a status conference. The mirror may lag; later orders and appeals still need monitoring.',
  },
};

export function getVerificationNote(id: PolicyId, language: Language): string {
  return verificationNotes[id]?.[language] ?? '';
}
