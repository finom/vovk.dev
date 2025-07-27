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
  '#getting-started': separator('Getting Started'),
  about: 'About',
  concepts: 'Core Concepts',
  'quick-install': 'Quick Install',
  'manual-install': 'Manual Install 🚧',
  guides: 'Guides',
  '#common': separator('Common'),
  schema: 'Schema',
  validation: 'Validation',
  inference: 'Type Inference',

  '#server-side': separator('Server-Side'),
  segment: 'Segment',
  controller: 'Controller',
  '#client-side': separator('RPC Client'),
  // 'composed-and-segmented': 'Composed vs Segmented RPC 🚧',
  typescript: 'TypeScript Client 🚧',
  python: 'Python Client 🚧',
  rust: 'Rust Client 🚧',
  '#customization': separator('Customization & Configuration'),
  config: 'Config',
  customization: 'TS RPC Customization',
  templates: 'RPC Templates 🚧',
  '#etc': separator('etc. 🚧'),
  packages: 'Packages',
  cli: 'CLI',
  'api-ref': 'API Reference',
} satisfies MetaRecord;

export default meta;
