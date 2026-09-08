'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import Image from 'next/image';
import { Popover } from '@base-ui/react/popover';
import { Check, ChevronLeft, Copy, Download, ImagePlus, Link, Mail, MessageCircle, MessagesSquare, Phone, Radar, Share, X } from 'lucide-react';
import { recordShareEvent } from '@/components/share-analytics';
import type { ShareMethod } from './analytics-model';
import type { Language } from './language';
import { buildItemShareContent, buildShareContent, buildShareLinks, itemShareLabels, type ShareContent, type ShareItem } from './share-model';

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
    itemTitle: '分享本条', summary: '本条摘要与链接', copySummary: '复制本条摘要与链接',
    summarySuccess: '本条摘要与链接已复制', summaryFailure: '无法自动复制，请选中下方摘要与链接手动复制。',
    image: '生成本条分享图', imageTitle: '本条分享图', imageBusy: '正在生成分享图…',
    imageFailure: '分享图生成失败，请重试，或复制本条摘要与链接。',
    download: '保存 PNG 图片', imageHelp: '可保存图片，或长按图片保存。转发前请留意图上的核对日期。',
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
    itemTitle: 'Share this entry', summary: 'Entry summary and link', copySummary: 'Copy summary & link',
    summarySuccess: 'Summary and link copied', summaryFailure: 'Unable to copy automatically. Select the summary and link below to copy manually.',
    image: 'Create share image', imageTitle: 'Entry share image', imageBusy: 'Creating share image…',
    imageFailure: 'Unable to create the image. Try again, or copy the summary and link.',
    download: 'Save PNG image', imageHelp: 'Save the image, or touch and hold it to save. Check the review date before forwarding.',
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

type ShareButtonProps = { language: Language; pageTitle?: string; pageDescription?: string; item?: ShareItem; compact?: boolean };

export function ShareButton(props: ShareButtonProps) {
  return <ShareMenu key={`${props.language}-${props.item?.id ?? 'page'}`} {...props} />;
}

function ShareMenu({ language, pageTitle, pageDescription, item, compact = false }: ShareButtonProps) {
  const ui = copy[language];
  const [open, setOpen] = useState(false);
  const mobile = useSyncExternalStore(subscribeMobile, mobileSnapshot, () => false);
  const [appleMobile, setAppleMobile] = useState(false);
  const [wechat, setWechat] = useState(false);
  const [content, setContent] = useState<ShareContent | null>(null);
  const [qr, setQr] = useState('');
  const [qrFailed, setQrFailed] = useState(false);
  const [copied, setCopied] = useState<'url' | 'summary' | null>(null);
  const [busy, setBusy] = useState<'url' | 'summary' | null>(null);
  const [notice, setNotice] = useState('');
  const [manualCopy, setManualCopy] = useState<'url' | 'summary' | null>(null);
  const [imageView, setImageView] = useState(false);
  const [imageBusy, setImageBusy] = useState(false);
  const [shareImage, setShareImage] = useState<{ url: string; width: number; height: number } | null>(null);
  const operation = useRef({ id: 0 });
  const resetTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const urlInput = useRef<HTMLInputElement>(null);
  const summaryInput = useRef<HTMLTextAreaElement>(null);
  const imageButton = useRef<HTMLButtonElement>(null);
  const wechatButton = useRef<HTMLButtonElement>(null);
  const backButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const activeOperation = operation.current;
    return () => {
      clearTimeout(resetTimer.current);
      activeOperation.id++;
    };
  }, []);

  useEffect(() => () => { if (shareImage) URL.revokeObjectURL(shareImage.url); }, [shareImage]);


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
    if (open && (wechat || imageView)) backButton.current?.focus();
  }, [open, wechat, imageView]);

  useEffect(() => {
    if (manualCopy === 'url') {
      urlInput.current?.focus();
      urlInput.current?.select();
    } else if (manualCopy === 'summary') {
      summaryInput.current?.focus();
      summaryInput.current?.select();
    }
  }, [manualCopy]);

  function changeOpen(next: boolean) {
    setOpen(next);
    operation.current.id++;
    clearTimeout(resetTimer.current);
    setShareImage(null);
    setImageView(false);
    setImageBusy(false);
    setBusy(null);
    if (next) {
      setAppleMobile(/iPhone|iPad|iPod/.test(navigator.userAgent) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));
      setQr('');
      setQrFailed(false);
      setContent(item ? buildItemShareContent(item, language) : buildShareContent(window.location.href, language, pageTitle, pageDescription));
      setWechat(false);
      setCopied(null);
      setManualCopy(null);
      setNotice('');
    }
  }

  function record(method: ShareMethod, action: Parameters<typeof recordShareEvent>[1]) {
    recordShareEvent(method, action, item ? {
      policyId: item.kind === 'policy' ? item.id : '',
      schoolId: item.kind === 'school' ? item.id : '',
    } : undefined);
  }

  function choose(method: ShareMethod) {
    record(method, 'select');
    setManualCopy(null);
    if (method === 'wechat') {
      setWechat(true);
      setNotice('');
    } else {
      setNotice(ui.appHint);
    }
  }

  async function copyContent(target: 'url' | 'summary') {
    if (!content || busy) return;
    const method = target === 'summary' ? 'copy_summary' : wechat ? 'wechat' : 'copy_link';
    if (method !== 'wechat') record(method, 'select');
    const current = operation.current.id;
    setBusy(target);
    setManualCopy(null);
    try {
      await navigator.clipboard.writeText(target === 'summary' ? content.text : content.url);
      record(method, 'copy_success');
      if (current !== operation.current.id) return;
      setCopied(target);
      setNotice(target === 'summary' ? ui.summarySuccess : wechat ? ui.copyWechat : ui.copySuccess);
      clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setCopied(null), 3000);
    } catch {
      record(method, 'copy_failure');
      if (current !== operation.current.id) return;
      setCopied(null);
      setManualCopy(target);
      setNotice(target === 'summary' ? ui.summaryFailure : ui.copyFailure);
    } finally {
      if (current === operation.current.id) setBusy(null);
    }
  }

  async function createImage() {
    if (!item || !content || imageBusy) return;
    record('share_image', 'select');
    setImageView(true);
    setManualCopy(null);
    setNotice('');
    if (shareImage) return;
    const current = operation.current.id;
    setImageBusy(true);
    try {
      const { generateShareImage } = await import('./share-image');
      const result = await generateShareImage(item, content, language);
      if (current !== operation.current.id) return;
      setShareImage({ url: URL.createObjectURL(result.blob), width: result.width, height: result.height });
      record('share_image', 'generate_success');
    } catch {
      if (current !== operation.current.id) return;
      setNotice(ui.imageFailure);
      record('share_image', 'generate_failure');
    } finally {
      if (current === operation.current.id) setImageBusy(false);
    }
  }

  const links = content ? buildShareLinks(content, appleMobile) : null;
  const copyControl = (
    <button className="share-copy-button" type="button" disabled={!!busy} data-copied={copied === 'url' || undefined} onClick={() => void copyContent('url')}>
      {copied === 'url' ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
      <span>{busy === 'url' ? ui.copying : copied === 'url' ? ui.copied : ui.copy}</span>
    </button>
  );

  return (
    <Popover.Root open={open} onOpenChange={changeOpen} modal={mobile}>
      <Popover.Trigger className={`share-trigger${compact ? ' share-card-trigger' : ''}`} aria-label={item ? `${ui.itemTitle}：${item.title}` : ui.title} title={item ? ui.itemTitle : ui.title}>
        <Share aria-hidden="true" />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Backdrop className="share-backdrop" />
        <Popover.Positioner className="share-positioner" side="bottom" align="end" sideOffset={10} sticky>
          <Popover.Popup className="share-panel" data-item-share={item ? true : undefined}>
            <span className="share-handle" aria-hidden="true" />
            <div className="share-panel-header">
              {(wechat || imageView) && (
                <button ref={backButton} type="button" className="share-icon-button" aria-label={ui.back} onClick={() => {
                  setWechat(false);
                  setImageView(false);
                  setManualCopy(null);
                  setNotice('');
                  requestAnimationFrame(() => (imageView ? imageButton : wechatButton).current?.focus());
                }}><ChevronLeft aria-hidden="true" /></button>
              )}
              <Popover.Title>{imageView ? ui.imageTitle : wechat ? ui.wechatTitle : item ? ui.itemTitle : ui.title}</Popover.Title>
              <Popover.Close className="share-icon-button" aria-label={ui.close}><X aria-hidden="true" /></Popover.Close>
            </div>
            {content && (imageView ? (
              <div className="share-image-content" aria-busy={imageBusy}>
                {imageBusy && <output aria-live="polite">{ui.imageBusy}</output>}
                {shareImage && item && <>
                  <Image className="share-generated-image" src={shareImage.url} width={shareImage.width} height={shareImage.height} alt={`${item.title} · ${item.status} · ${item.scope} · ${itemShareLabels[language].checkedOn} ${item.checkedOn}`} unoptimized />
                  <a className="share-copy-button share-save-image" href={shareImage.url} download={`${item.kind}-${item.id}-${language}-${item.checkedOn}.png`} onClick={() => record('share_image', 'download')}><Download aria-hidden="true" />{ui.download}</a>
                  <p className="share-help">{ui.imageHelp}</p>
                </>}
                {!imageBusy && !shareImage && <button className="share-copy-button" type="button" onClick={() => void createImage()}>{ui.image}</button>}
              </div>
            ) : wechat ? (
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
                  <div><strong>{content.title}</strong><span>{item?.status ?? pageDescription ?? ui.subtitle}</span>{item && <time className="share-checked-date" dateTime={item.checkedOn}>{itemShareLabels[language].checkedOn} {item.checkedOn} · ET</time>}</div>
                </div>
                {item && <div className="share-item-actions">
                  <button className="share-copy-button" type="button" disabled={!!busy} data-copied={copied === 'summary' || undefined} onClick={() => void copyContent('summary')}>
                    {copied === 'summary' ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
                    {busy === 'summary' ? ui.copying : copied === 'summary' ? ui.summarySuccess : ui.copySummary}
                  </button>
                  <button ref={imageButton} className="share-copy-button" type="button" onClick={() => void createImage()}><ImagePlus aria-hidden="true" />{ui.image}</button>
                </div>}
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
            {wechat && manualCopy === 'url' && content && (
              <input className="share-manual-url" ref={urlInput} aria-label={ui.url} value={content.url} readOnly onFocus={(event) => event.currentTarget.select()} />
            )}
            {manualCopy === 'summary' && content && <textarea className="share-manual-summary" ref={summaryInput} aria-label={ui.summary} value={content.text} readOnly rows={8} onFocus={(event) => event.currentTarget.select()} />}
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}
