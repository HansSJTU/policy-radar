import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '留美路径政策雷达｜F-1 → CPT → OPT → H-1B',
  description: '截至 2026-08-31 的美国学生与工作签证政策状态、时间线、影响及严重度排序。',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
