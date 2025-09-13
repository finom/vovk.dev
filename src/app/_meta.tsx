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
  'manual-install': 'Manual Install',
  'hello-world': '"Hello World!" Example',

  '#common': separator('Common'),
  schema: 'Schema',
  validation: 'Validation',
  inference: 'Type Inference',
  '#server-side': separator('Server-Side'),
  segment: 'Segment',
  controller: 'Controller',
  '#typescript': separator('TypeScript Client'),
  typescript: 'TypeScript RPC',
  composed: 'Composed Client',
  segmented: 'Segmented Client',
  imports: 'Library Customization',
  '#client-side': separator('Other Clients'),
  python: 'Python RPC 🧪',
  rust: 'Rust RPC 🧪',
  '#cli': separator('Config & CLI'),
  config: 'Config',
  cli: 'CLI',
  bundle: (
    <>
      <code className="nextra-code">vovk bundle</code>
    </>
  ),
  dev: <code className="nextra-code">vovk dev</code>,
  generate: <code className="nextra-code">vovk generate 🚧</code>,
  init: <code className="nextra-code">vovk init</code>,
  new: <code className="nextra-code">vovk new 🚧</code>,
  '#etc': separator('etc.'),
  templates: 'Client Templates 🚧',
  packages: 'Packages',
  'api-ref': 'API Reference',
  '###': { type: 'separator' },
  '#scenarios': separator('Usage Scenarios'),
  openapi: 'RESTful API with OpenAPI 🚧',
  saas: 'SaaS framework',
  codegen: 'OpenAPI Codegen',
  nestjs: 'RPC for NestJS 🚧',
  'other-scenarios': 'Other scenarios',

  '#ai': separator('AI Applications'),
  llm: 'LLM completion streaming 🚧',
  'ai-tools': 'AI tools 🚧',
  'realtime-ui': 'Real-time UI 🧪 🚧',
  polling: 'Real-time Polling 🧪 🚧',
  mcp: 'MCP Server 🚧',

  '#guides': separator('Other Guides'),
  multitenant: 'Multitenancy 🧪',
  authorization: 'Authorization',
  cron: 'Vercel Cron jobs',
  proxy: 'Proxy endpoints',
} satisfies MetaRecord;

export default meta;
