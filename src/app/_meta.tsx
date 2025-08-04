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
  'hello-world': '"Hello World!" 🚧',

  '#common': separator('Common'),
  schema: 'Schema',
  validation: 'Validation',
  inference: 'Type Inference 🚧',
  '#server-side': separator('Server-Side'),
  segment: 'Segment',
  controller: 'Controller',
  // 'composed-and-segmented': 'Composed vs Segmented RPC 🚧',
  '#typescript': separator('TypeScript Client'),
  typescript: 'TypeScript RPC 🚧',
  composed: 'Composed Client 🚧',
  segmented: 'Segmented Client 🚧',
  imports: 'Library Customization',
  '#client-side': separator('Other Clients'),
  python: 'Python RPC 🧪 🚧',
  rust: 'Rust RPC 🧪 🚧',
  '#cli': separator('Config & CLI'),
  config: 'Config 🚧',
  cli: 'CLI 🚧',
  bundle: (
    <>
      <code className="nextra-code">vovk bundle 🚧</code> (TypeScript)
    </>
  ),
  dev: <code className="nextra-code">vovk dev 🚧</code>,
  generate: <code className="nextra-code">vovk generate 🚧</code>,
  init: <code className="nextra-code">vovk init 🚧</code>,
  new: <code className="nextra-code">vovk new 🚧</code>,
  '#etc': separator('etc.'),
  'openapi-mixins': 'OpenAPI Mixins 🚧',
  templates: 'Client Templates 🚧',
  packages: 'Packages 🚧',
  'api-ref': 'API Reference 🚧',
  '###': { type: 'separator' },

  '#scenarios': separator('Usage Scenarios'),
  'public-api': 'Public RESTful API 🚧',
  saas: 'SaaS framework 🚧',
  codegen: 'Code generation 🚧',
  nestjs: 'RPC for NestJS 🚧',

  '#ai': separator('AI Applications'),
  llm: 'LLM integration 🚧',
  'ai-tools': 'AI tools 🚧',
  'ai-ui': 'AI-powered UI 🧪 🚧',
  polling: 'Real-time Polling 🧪 🚧',
  mcp: 'MCP Server 🚧',

  '#guides': separator('Other Guides'),
  authorization: 'Authorization',
  cron: 'Vercel Cron jobs',
  proxy: 'Proxy endpoints',
  multitenant: 'Multitenancy',
} satisfies MetaRecord;

export default meta;
