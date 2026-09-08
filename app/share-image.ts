import qrcode from 'qrcode-generator';
import type { Language } from './language';
import { itemShareLabels, type ShareContent, type ShareItem } from './share-model.ts';

// Preserve every qualifier and date. Long records grow vertically instead of
// being ellipsized, and long Latin words/URLs can still wrap on narrow lines.
export function wrapShareText(text: string, width: number, measure: (text: string) => number): string[] {
  return text.split('\n').flatMap((paragraph) => {
    const words = paragraph.match(/[\p{Script=Latin}\p{N}][\p{Script=Latin}\p{N}'’.,:/?=&%#_-]*|\s+|[^\s]/gu) ?? [''];
    const lines: string[] = [];
    let line = '';
    for (const word of words) {
      if (measure(line + word) <= width) {
        line += word;
        continue;
      }
      if (line.trim()) lines.push(line.trimEnd());
      line = '';
      for (const character of word.trimStart()) {
        if (line && measure(line + character) > width) {
          lines.push(line);
          line = '';
        }
        line += character;
      }
    }
    if (line.trim() || !lines.length) lines.push(line.trimEnd());
    return lines;
  });
}

export async function generateShareImage(item: ShareItem, content: ShareContent, language: Language) {
  await document.fonts.ready;
  const ui = itemShareLabels[language];
  const width = 1080;
  const inset = 72;
  const bodyWidth = width - inset * 2;
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas is unavailable');
  const family = 'system-ui, -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif';
  const font = (size: number, weight = 400) => `${weight} ${size}px ${family}`;
  const blocks = [
    { label: '', text: item.title, size: 56, weight: 700, color: '#172b46' },
    { label: ui.status, text: item.status, size: 36, weight: 650, color: item.unverified ? '#8a5010' : '#155d69' },
    { label: '', text: item.summary, size: 32, weight: 400, color: '#344962' },
    { label: ui.scope, text: item.scope, size: 32, weight: 550, color: '#172b46' },
    { label: ui.caveat, text: item.caveat, size: 28, weight: 400, color: '#526478' },
  ].map((block) => {
    ctx.font = font(block.size, block.weight);
    const lines = wrapShareText(block.text, bodyWidth, (text) => ctx.measureText(text).width);
    const lineHeight = Math.ceil(block.size * 1.5);
    return { ...block, lines, lineHeight, height: lines.length * lineHeight + (block.label ? 44 : 0) + 36 };
  });
  const footerTop = 312 + blocks.reduce((sum, block) => sum + block.height, 0);
  const entry = new URL(item.href);
  const readableUrl = entry.host + entry.pathname + entry.hash;
  ctx.font = font(23);
  const urlLines = wrapShareText(readableUrl, bodyWidth - 272, (text) => ctx.measureText(text).width);
  const height = Math.max(1440, footerTop + Math.max(332, 138 + urlLines.length * 34));
  canvas.width = width;
  canvas.height = height;
  ctx.textBaseline = 'top';
  ctx.fillStyle = '#f7f8f5';
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = '#155d69';
  ctx.fillRect(0, 0, width, 12);
  ctx.font = font(34, 700);
  ctx.fillStyle = '#172b46';
  ctx.fillText(ui.brand, inset, 52);
  ctx.font = font(24, 500);
  ctx.fillStyle = '#526478';
  ctx.fillText(item.unverified ? ui.unverified : ui[item.kind], inset, 102);

  ctx.fillStyle = '#e5ede9';
  ctx.fillRect(inset, 162, bodyWidth, 106);
  ctx.font = font(26, 550);
  ctx.fillStyle = '#155d69';
  ctx.fillText(ui.checkedOn, inset + 24, 177);
  ctx.font = font(36, 700);
  ctx.fillStyle = '#172b46';
  ctx.fillText(`${item.checkedOn} · ET`, inset + 24, 215);

  let y = 312;
  for (const block of blocks) {
    if (block.label) {
      ctx.font = font(24, 500);
      ctx.fillStyle = '#526478';
      ctx.fillText(block.label, inset, y);
      y += 44;
    }
    ctx.font = font(block.size, block.weight);
    ctx.fillStyle = block.color;
    for (const line of block.lines) {
      ctx.fillText(line, inset, y);
      y += block.lineHeight;
    }
    y += 36;
  }

  ctx.fillStyle = '#d4ded9';
  ctx.fillRect(inset, footerTop, bodyWidth, 2);
  ctx.font = font(26, 650);
  ctx.fillStyle = '#172b46';
  const entryLines = wrapShareText(ui.entry, bodyWidth - 272, (text) => ctx.measureText(text).width);
  entryLines.forEach((line, index) => ctx.fillText(line, inset, footerTop + 36 + index * 38));
  ctx.font = font(23);
  ctx.fillStyle = '#526478';
  const urlTop = footerTop + 46 + entryLines.length * 38;
  urlLines.forEach((line, index) => ctx.fillText(line, inset, urlTop + index * 34));
  ctx.font = font(24, 500);
  ctx.fillText(ui.freshness, inset, height - 62);

  const code = qrcode(0, 'M');
  code.addData(content.url);
  code.make();
  const modules = code.getModuleCount();
  const cell = Math.floor(240 / (modules + 8));
  const qrSize = (modules + 8) * cell;
  const qrX = width - inset - qrSize;
  const qrY = footerTop + 28;
  ctx.fillStyle = '#fff';
  ctx.fillRect(qrX, qrY, qrSize, qrSize);
  ctx.fillStyle = '#172b46';
  for (let row = 0; row < modules; row++) {
    for (let col = 0; col < modules; col++) {
      if (code.isDark(row, col)) ctx.fillRect(qrX + (col + 4) * cell, qrY + (row + 4) * cell, cell, cell);
    }
  }

  const blob = await new Promise<Blob>((resolve, reject) => canvas.toBlob(
    (result) => result ? resolve(result) : reject(new Error('PNG encoding failed')),
    'image/png',
  ));
  return { blob, width, height };
}
