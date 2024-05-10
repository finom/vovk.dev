import Link from 'next/link';
import VovkLogo from './src/components/VovkLogo';

const themeConfig = {
  logo: <VovkLogo width={120} />,
  project: {
    link: 'https://github.com/finom/vovk.dev',
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
};

export default themeConfig;
