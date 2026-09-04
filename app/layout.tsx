import type { Metadata } from 'next';
import './globals.css';
import { resolveRequestLanguage } from './language-server';

export async function generateMetadata(): Promise<Metadata> {
  const language = await resolveRequestLanguage();

  return language === 'zh'
    ? {
        title: '留美路径政策雷达｜F-1 → CPT → OPT → H-1B',
        description:
          '截至 2026-09-04 的美国学生与工作签证政策状态、时间线、影响及严重度排序。',
      }
    : {
        title: 'U.S. Stay Path Policy Radar | F-1 → CPT → OPT → H-1B',
        description:
          'U.S. student and employment visa policy status, timelines, impact, and severity ranking as of September 4, 2026.',
      };
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const language = await resolveRequestLanguage();

  return (
    <html lang={language === 'zh' ? 'zh-CN' : 'en'}>
      <body>{children}</body>
    </html>
  );
}
