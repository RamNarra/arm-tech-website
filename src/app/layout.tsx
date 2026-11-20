import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { site } from '@/content/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const grotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-grotesk', display: 'swap', weight: ['500', '600', '700'] });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jbmono', display: 'swap', weight: ['400', '500'] });

export const metadata: Metadata = {
  title: 'ARM Tech | ARM Flow: plain-English AI workflows for Indian small businesses',
  description: site.description,
  openGraph: { siteName: site.name, type: 'website', title: 'ARM Tech | ARM Flow', description: site.description, images: ['/arm-tech-logo.png'] },
  icons: { icon: '/icon.svg' },
};

export const viewport: Viewport = { themeColor: '#081631', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${grotesk.variable} ${mono.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-3 focus:text-ink">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
