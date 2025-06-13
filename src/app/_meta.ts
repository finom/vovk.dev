import type { MetaRecord } from 'nextra';

const meta: MetaRecord = {
  index: {
    title: 'Home',
    type: 'page',
    theme: {
      layout: 'full',
      toc: false,
    },
  },
  blog: {
    title: 'Blog',
    href: '/blog',
    type: 'page',
  },
  getting_started_link: {
    title: 'Getting started',
    href: '/getting-started',
    type: 'page',
  },
  '##': {
    type: 'separator',
    title: 'Getting started',
  },
  about: {
    title: 'About',
  },
  'quick-install': {
    title: 'Quick install',
  },
  'manual-install': {
    title: 'Manual install',
  },
  guides: {
    title: 'Guides',
  },
  '###': {
    type: 'separator',
    title: 'Basics',
  },
  segment: 'Segment',
  schema: 'Schema',
  templates: 'RPC Templates',
  '####': {
    type: 'separator',
    title: 'Server-side',
  },
  controller: 'Controller',
  '#####': {
    type: 'separator',
    title: 'Client-side',
  },
  'composed-and-segmented': 'Composed vs segmented RPC',
  typescript: 'TypeScript RPC client',
  python: 'Python RPC client',
  rust: 'Rust RPC client',
  'custom-client': 'Custom client',
  '######': {
    type: 'separator',
    title: 'Validation',
  },
  validation: 'Validation',
  'custom-validation': 'Custom Validation',
  '#######': {
    type: 'separator',
    title: 'Miscellaneous',
  },
  config: 'Config',
  cli: 'CLI',
  'api-ref': 'API reference',
};

export default meta;
