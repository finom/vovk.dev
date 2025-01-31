import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vovk.ts - RESTful RPC for Next.js',
  description: 'Transforms Next.js App Router into a powerful REST API platform with RPC integration',
  openGraph: {
    title: 'Vovk.ts - RESTful RPC for Next.js',
    description: 'Transforms Next.js App Router into a powerful REST API platform with RPC integration',
    url: 'https://vovk.dev/',
    type: 'website',
    images: 'https://vovk.dev/vovk-og.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={'inter.className'}>{children}</body>
    </html>
  );
}
