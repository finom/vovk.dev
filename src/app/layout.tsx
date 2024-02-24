import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vovk.ts - REST for Next',
  description:
    'Vovk.ts is an extension over documented Next.js App API routes that enables you to create a REST API as easy as you can imagine.',
  openGraph: {
    title: 'Vovk.ts - REST for Next',
    description:
      'Vovk.ts is an extension over documented Next.js App API routes that enables you to create a REST API as easy as you can imagine.',
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
