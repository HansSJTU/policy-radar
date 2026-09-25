import type { Metadata } from 'next';
import './globals.css';
import './share.css';
import { resolveRequestLanguage } from './language-server';
import { siteMetadata } from './site-metadata';

export async function generateMetadata(): Promise<Metadata> {
  const { title, description } = siteMetadata(await resolveRequestLanguage());
  return { title, description };
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
