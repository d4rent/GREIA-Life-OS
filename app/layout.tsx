import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import Navigation from '@/components/shared/Navigation';
import { Footer } from '@/components/shared/Footer';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'GREIA - Global Property & Services Platform',
    template: '%s | GREIA'
  },
  description: 'Your global property and services marketplace. Connecting people with their perfect homes and trusted professionals worldwide.',
  keywords: ['property', 'real estate', 'services', 'global', 'marketplace', 'professionals', 'booking', 'CRM'],
  authors: [{ name: 'GREIA Team' }],
  creator: 'GREIA',
  publisher: 'GREIA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://greia-platform-2.lindy.site/',
    siteName: 'GREIA',
    title: 'GREIA - Global Property & Services Platform',
    description: 'Your global property and services marketplace. Connecting people with their perfect homes and trusted professionals worldwide.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GREIA Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GREIA - Global Property & Services Platform',
    description: 'Your global property and services marketplace. Connecting people with their perfect homes and trusted professionals worldwide.',
    images: ['/images/og-image.png'],
    creator: '@GREIA',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Providers>
          <Navigation />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}