import VovkLogo from './src/components/VovkLogo';

const themeConfig = {
  logo: <VovkLogo width={120} />,
  project: {
    link: 'https://github.com/finom/vovk.dev',
  },
  banner: {
    key: '2.0-release',
    text: (
      <a href="https://nextra.site" target="_blank">
        🎉 Nextra 2.0 is released. Read more →
      </a>
    ),
  },
  // ... other theme options
};

export default themeConfig;
