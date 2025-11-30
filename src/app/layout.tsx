import { Footer, Layout, Link, Navbar } from 'nextra-theme-docs';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import 'nextra-theme-docs/style.css';
import '@/globals.css';
import VovkLogo from '@/components/VovkLogo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://vovk.dev'),
  title: {
    default: 'Vovk.ts - Back-end for Next.js',
    template: '%s | Vovk.ts - Back-end for Next.js',
  },
  openGraph: {
    url: 'https://vovk.dev',
    siteName: 'Vovk.ts',
    locale: 'en_US',
    type: 'website',
    description:
      'Vovk.ts is a conceptual back-end meta-framework created on top of the Next.js App Router. Built for efficiency and an unprecedented developer experience.',
  },
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/icon.svg',
        href: '/icon.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/icon-white.svg',
        href: '/icon-white.svg',
      },
    ],
  },
};

const navbar = (
  <Navbar
    logo={<VovkLogo width={120} />}
    projectLink="https://github.com/finom/vovk"
    chatLink="https://discord.com/invite/qdT8WEHUuP"
    // ... Your additional navbar options
  ></Navbar>
);
const footer = (
  <Footer className="justify-between">
    <div>
      MIT © 2023-{new Date().getFullYear()}{' '}
      <Link href="https://github.com/finom" className="ml-1">
        Andrey Gubanov
      </Link>
    </div>
    <Link href="https://github.com/sponsors/finom" target="_blank" className="ml-2 block">
      Sponsor
    </Link>
  </Footer>
);

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          // banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
