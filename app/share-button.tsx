'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import Image from 'next/image';
import { Popover } from '@base-ui/react/popover';
import { Check, ChevronLeft, Copy, Link, Mail, MessageCircle, MessagesSquare, Phone, Radar, Share, X } from 'lucide-react';
import { recordShareEvent } from '@/components/share-analytics';
import type { ShareMethod } from './analytics-model';
import type { Language } from './language';
import { buildShareContent, buildShareLinks, type ShareContent } from './share-model';

const copy = {
  zh: {
    share: '分享', title: '分享此页面', close: '关闭分享', back: '返回分享方式',
    subtitle: 'F-1 · CPT · OPT · H-1B 政策追踪',
    messages: '信息', email: '邮件', wechat: '微信', whatsapp: 'WhatsApp',
    url: '页面网址', copy: '复制网址', copied: '已复制', copying: '复制中…',
    copySuccess: '网址已复制', copyWechat: '网址已复制，可到微信聊天中粘贴发送。',
    copyFailure: '无法自动复制，请选中下面的网址手动复制。',
    wechatTitle: '分享到微信', scan: '使用微信扫一扫',
    scanHelp: '打开页面后，点右上角「···」分享给朋友或朋友圈。',
    generating: '正在生成二维码…', qrFailure: '二维码暂时不可用，请复制网址。',
    step1: '复制页面网址', step2: '在微信聊天中粘贴发送',
    inWechat: '已在微信中打开？点右上角「···」分享。',
    appHint: '未打开应用？可复制下方网址，再粘贴发送。',
  },
  en: {
    share: 'Share', title: 'Share this page', close: 'Close sharing', back: 'Back to sharing options',
    subtitle: 'F-1 · CPT · OPT · H-1B policy updates',
    messages: 'Messages', email: 'Email', wechat: 'WeChat', whatsapp: 'WhatsApp',
    url: 'Page link', copy: 'Copy link', copied: 'Copied', copying: 'Copying…',
    copySuccess: 'Link copied', copyWechat: 'Link copied. Paste it into a WeChat conversation.',
    copyFailure: 'Unable to copy automatically. Select the link below and copy it manually.',
    wechatTitle: 'Share on WeChat', scan: 'Scan with WeChat',
    scanHelp: 'Open the page, then tap “···” to share with friends or Moments.',
    generating: 'Generating QR code…', qrFailure: 'QR code unavailable. Please copy the link.',
    step1: 'Copy the page link', step2: 'Paste it into a WeChat conversation',
    inWechat: 'Already in WeChat? Tap “···” to share.',
    appHint: 'App didn’t open? Copy the link below and paste it to share.',
  },
};

function subscribeMobile(onChange: () => void) {
  const media = window.matchMedia('(max-width: 720px)');
  media.addEventListener('change', onChange);
  return () => media.removeEventListener('change', onChange);
}

function mobileSnapshot() {
  return window.matchMedia('(max-width: 720px)').matches;
}

export function ShareButton({ language, pageTitle }: { language: Language; pageTitle?: string }) {
  const ui = copy[language];
  const [open, setOpen] = useState(false);
  const mobile = useSyncExternalStore(subscribeMobile, mobileSnapshot, () => false);
  const [appleMobile, setAppleMobile] = useState(false);
  const [wechat, setWechat] = useState(false);
  const [content, setContent] = useState<ShareContent | null>(null);
  const [qr, setQr] = useState('');
  const [qrFailed, setQrFailed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState('');
  const [manualCopy, setManualCopy] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const urlInput = useRef<HTMLInputElement>(null);
  const wechatButton = useRef<HTMLButtonElement>(null);
  const backButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    return () => {
      clearTimeout(resetTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!open || !wechat || mobile || !content) return;
    let cancelled = false;
    void import('qrcode-generator').then(({ default: qrcode }) => {
      const code = qrcode(0, 'M');
      code.addData(content.url);
      code.make();
      if (!cancelled) setQr(code.createDataURL(5, 20));
    }).catch(() => {
      if (!cancelled) setQrFailed(true);
    });
    return () => { cancelled = true; };
  }, [open, wechat, mobile, content]);

  useEffect(() => {
    if (open && wechat) backButton.current?.focus();
  }, [open, wechat]);

  useEffect(() => {
    if (manualCopy) {
      urlInput.current?.focus();
      urlInput.current?.select();
    }
  }, [manualCopy]);

  function changeOpen(next: boolean) {
    setOpen(next);
    clearTimeout(resetTimer.current);
    if (next) {
      setAppleMobile(/iPhone|iPad|iPod/.test(navigator.userAgent) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));
      setQr('');
      setQrFailed(false);
      setContent(buildShareContent(window.location.href, language, pageTitle));
      setWechat(false);
      setCopied(false);
      setManualCopy(false);
      setNotice('');
    }
  }

  function choose(method: ShareMethod) {
    recordShareEvent(method, 'select');
    if (method === 'wechat') {
      setWechat(true);
      setNotice('');
    } else {
      setNotice(ui.appHint);
    }
  }

  async function copyUrl() {
    if (!content || busy) return;
    const method = wechat ? 'wechat' : 'copy_link';
    if (method === 'copy_link') recordShareEvent(method, 'select');
    setBusy(true);
    setManualCopy(false);
    try {
      await navigator.clipboard.writeText(content.url);
      setCopied(true);
      setNotice(wechat ? ui.copyWechat : ui.copySuccess);
      recordShareEvent(method, 'copy_success');
      clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(false);
      setManualCopy(true);
      setNotice(ui.copyFailure);
      recordShareEvent(method, 'copy_failure');
    } finally {
      setBusy(false);
    }
  }

  const links = content ? buildShareLinks(content, appleMobile) : null;
  const copyControl = (
    <button className="share-copy-button" type="button" disabled={busy} data-copied={copied || undefined} onClick={() => void copyUrl()}>
      {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
      <span>{busy ? ui.copying : copied ? ui.copied : ui.copy}</span>
    </button>
  );

  return (
    <Popover.Root open={open} onOpenChange={changeOpen} modal={mobile}>
      <Popover.Trigger className="share-trigger" aria-label={ui.title}>
        <Share aria-hidden="true" /><span>{ui.share}</span>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Backdrop className="share-backdrop" />
        <Popover.Positioner className="share-positioner" side="bottom" align="end" sideOffset={10}>
          <Popover.Popup className="share-panel">
            <span className="share-handle" aria-hidden="true" />
            <div className="share-panel-header">
              {wechat && (
                <button ref={backButton} type="button" className="share-icon-button" aria-label={ui.back} onClick={() => {
                  setWechat(false);
                  setManualCopy(false);
                  setNotice('');
                  requestAnimationFrame(() => wechatButton.current?.focus());
                }}><ChevronLeft aria-hidden="true" /></button>
              )}
              <Popover.Title>{wechat ? ui.wechatTitle : ui.title}</Popover.Title>
              <Popover.Close className="share-icon-button" aria-label={ui.close}><X aria-hidden="true" /></Popover.Close>
            </div>
            {content && (wechat ? (
              <div className="share-wechat-content">
                {mobile ? (
                  <>
                    <span className="share-wechat-mark"><MessagesSquare aria-hidden="true" /></span>
                    <div className="share-step"><span>1</span>{ui.step1}</div>
                    <div className="share-step"><span>2</span>{ui.step2}</div>
                    <p className="share-help">{ui.inWechat}</p>
                  </>
                ) : (
                  <>
                    <div className="share-qr">
                      {qr ? <Image src={qr} width={168} height={168} alt={ui.scan} unoptimized /> : <output>{qrFailed ? ui.qrFailure : ui.generating}</output>}
                    </div>
                    <strong>{ui.scan}</strong>
                    <p className="share-help">{ui.scanHelp}</p>
                  </>
                )}
                {copyControl}
              </div>
            ) : (
              <>
                <div className="share-preview">
                  <span className="brand-mark"><Radar aria-hidden="true" /></span>
                  <div><strong>{content.title}</strong><span>{ui.subtitle}</span></div>
                </div>
                <div className="share-channels">
                  <a className="share-channel" data-share-method="messages" href={links?.messages} onClick={() => choose('messages')}><span><MessageCircle aria-hidden="true" /></span>{ui.messages}</a>
                  <a className="share-channel" data-share-method="email" href={links?.email} onClick={() => choose('email')}><span><Mail aria-hidden="true" /></span>{ui.email}</a>
                  <button ref={wechatButton} className="share-channel" type="button" onClick={() => choose('wechat')}><span><MessagesSquare aria-hidden="true" /></span>{ui.wechat}</button>
                  <a className="share-channel" data-share-method="whatsapp" href={links?.whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => choose('whatsapp')}><span><Phone aria-hidden="true" /></span>{ui.whatsapp}</a>
                </div>
                <div className="share-copy-section">
                  <span className="share-copy-label">{ui.url}</span>
                  <div className="share-link-row">
                    <Link aria-hidden="true" />
                    <input ref={urlInput} aria-label={ui.url} value={content.url} readOnly onFocus={(event) => event.currentTarget.select()} />
                    {copyControl}
                  </div>
                </div>
              </>
            ))}
            <output className="share-notice" aria-live="polite">{notice}</output>
            {wechat && manualCopy && content && (
              <input className="share-manual-url" ref={urlInput} aria-label={ui.url} value={content.url} readOnly onFocus={(event) => event.currentTarget.select()} />
            )}
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}
