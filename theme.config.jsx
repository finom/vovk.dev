import Link from 'next/link';
import VovkLogo from './src/components/VovkLogo';
import { useRouter } from 'next/router';

const themeConfig = {
  logo: <VovkLogo width={120} />,
  project: {
    link: 'https://github.com/finom/vovk',
  },
  chat: {
    link: 'https://discord.gg/qdT8WEHUuP',
  },
  banner: {
    key: '2.0-release',
    text: <Link href="/blog/vovk-2-0">🎉 Vovk 2.0 is released. Read more →</Link>,
  },
  docsRepositoryBase: 'https://github.com/finom/vovk.dev/tree/main/',
  head: (
    <>
      <link href="icon.svg" rel="icon" media="(prefers-color-scheme: light)" />
      <link href="icon-white.svg" rel="icon" media="(prefers-color-scheme: dark)" />
    </>
  ),
  footer: false,
  useNextSeoProps() {
    const { asPath } = useRouter();
    const openGraph = {
      title: 'Vovk.ts - RESTful RPC for Next.js',
      description: 'Transforms Next.js App Router into a powerful REST API platform with RPC integration',
      url: 'https://vovk.dev/',
      type: 'website',
      images: [
        {
          url: 'https://vovk.dev/vovk-og.png',
          width: 1200,
          height: 630,
          alt: 'Vovk.ts',
        },
      ],
    };
    if (asPath === '/') {
      return {
        openGraph,
        titleTemplate: 'Vovk.ts - RESTful RPC for Next.js',
      };
    } else {
      return {
        openGraph,
        titleTemplate: '%s – Vovk.ts',
      };
    }
  },
};

export default themeConfig;
