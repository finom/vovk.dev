import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vovk.ts - REST for Next',
  description: 'Transforms Next.js into a powerful and extensible REST API platform',
  openGraph: {
    title: 'Vovk.ts - REST for Next',
    description: 'Transforms Next.js into a powerful and extensible REST API platform',
    url: 'https://vovk.dev/',
    type: 'website',
    images: 'https://vovk.dev/vovk-og.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
