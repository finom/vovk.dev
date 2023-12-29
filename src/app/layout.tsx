import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vovk.ts',
  description: 'World-first meta-isomorphic full-stack framework for Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content={metadata.title as string} />
        <meta property="og:description" content={metadata.description as string} />
        <meta property="og:url" content="https://vovk.dev/" />
        <meta property="og:image" content="https://vovk.dev/vovk-og.png" />
        <meta property="og:type" content="website" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
