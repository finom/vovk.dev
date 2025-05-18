import type { MetaRecord } from 'nextra';
/*
- Segmented/composed client
- Rust client
- Valiation (primary, secondary libs(?))
- Bundle
- Templates
- Template definition

----- 
Segments
- Segments
- Segmented and composed client
*/

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
  'getting-started': {
    title: 'Getting started',
  },
  '###': {
    type: 'separator',
    title: 'Server-side',
  },
  segment: 'Segment',
  controller: 'Controller',
  openapi: 'OpenAPI',
  '####': {
    type: 'separator',
    title: 'Client-side',
  },
  typescript: 'TypeScript client',
  python: 'Python client',
  schema: 'Schema',
  'isolated-client': 'Isolated client',
  'custom-client': 'Custom client',
  'react-query': 'React Query',
  '#####': {
    type: 'separator',
    title: 'Validation',
  },
  validation: 'Validation',
  'custom-validation': 'Custom Validation',
  '######': {
    type: 'separator',
    title: 'Miscellaneous',
  },
  streaming: 'JSON streaming',
  config: 'Config',
  cli: 'CLI',
  'api-ref': 'API reference',
};

export default meta;
