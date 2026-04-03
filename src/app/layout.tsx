import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import WhatsAppFab from '@/components/ui/WhatsAppFab';
import HtmlDirSetter from '@/components/layout/HtmlDirSetter';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'מרפאה אסתטית | קליניקת יופי בתל אביב',
    template: '%s | מרפאה אסתטית',
  },
  description:
    'מרפאה אסתטית מובילה בתל אביב — טיפולי ורידים, הזרקות יופי ולייזר מתקדם. ייעוץ חינם.',
  keywords: ['מרפאה אסתטית', 'טיפולי ורידים', 'בוטוקס', 'לייזר', 'תל אביב'],
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<Record<string, string>>;
}) {
  // params not used at root layout level — lang is read client-side via useSearchParams
  // We default the HTML lang to 'he' for SSR; the client hook updates dynamically
  void params;

  return (
    <html
      lang="he"
      dir="rtl"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="flex flex-col min-h-screen" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
        <Suspense fallback={null}>
          <HtmlDirSetter />
        </Suspense>
        <Suspense fallback={<div className="h-16 bg-white border-b" style={{ borderColor: 'var(--color-border)' }} />}>
          <Nav />
        </Suspense>
        <main className="flex-1">{children}</main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        <Suspense fallback={null}>
          <WhatsAppFab />
        </Suspense>
      </body>
    </html>
  );
}
