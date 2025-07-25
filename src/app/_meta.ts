import type { MetaRecord } from 'nextra';

const separator = (title: string) => ({ type: 'separator', title });

const meta = {
  index: {
    title: 'Home',
    type: 'page',
    theme: {
      layout: 'full',
      toc: false,
      footer: false,
    },
  },
  blog: {
    title: 'Blog',
    href: '/blog',
    type: 'page',
    display: 'hidden',
  },
  '#getting-started': separator('Getting started'),
  about: 'About',
  concepts: 'Core concepts',
  'quick-install': 'Quick install',
  'manual-install': 'Manual install 🚧',
  guides: 'Guides',
  '#common': separator('Common'),
  validation: 'Validation',
  schema: 'Schema',
  '#server-side': separator('Server-side'),
  segment: 'Segment',
  controller: 'Controller',
  '#client-side': separator('Client-side 🚧'),
  'composed-and-segmented': 'Composed vs segmented RPC',
  typescript: 'TypeScript RPC client',
  python: 'Python RPC client',
  rust: 'Rust RPC client',
  templates: 'RPC Templates',
  'custom-validation': 'Custom Validation',
  '#etc': separator('etc. 🚧'),
  inference: 'Type inference',
  packages: 'Packages',
  config: 'Config',
  cli: 'CLI',
  'api-ref': 'API reference',
} satisfies MetaRecord;

export default meta;
