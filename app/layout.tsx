import type { Metadata } from 'next';
import './globals.css';
import './share.css';
import { resolveRequestLanguage } from './language-server';
import { siteMetadata } from './site-metadata';

export async function generateMetadata(): Promise<Metadata> {
  const { title, description } = siteMetadata(await resolveRequestLanguage());
  return {
    title,
    description,
    // Drawn from public/icon.svg by scripts/build-icons.mjs.
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: '16x16 32x32 48x48' },
        { url: '/icon.svg', type: 'image/svg+xml' },
      ],
      apple: '/apple-touch-icon.png',
    },
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
