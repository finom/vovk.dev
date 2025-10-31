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
  'quick-install': 'Quick Install 🚧',
  'manual-install': 'Manual Install 🚧',
  'hello-world': '"Hello World!" Example 🚧',
  performance: 'Overhead Performance 🚧',

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
  imports: 'Imports Customization',
  '#client-side': separator('Other Clients'),
  python: 'Python RPC 🧪',
  rust: 'Rust RPC 🧪',
  '#cli': separator('Config & CLI'),
  config: 'Config',
  cli: 'CLI',
  bundle: (
    <>
      <code className="nextra-code">vovk bundle 🧪 🚧</code>
    </>
  ),
  dev: <code className="nextra-code">vovk dev</code>,
  generate: <code className="nextra-code">vovk generate</code>,
  init: <code className="nextra-code">vovk init</code>,
  new: <code className="nextra-code">vovk new</code>,
  '#etc': separator('etc.'),
  openapi: 'OpenAPI Specification',
  multitenant: 'Multitenancy 🧪',
  templates: 'Client Templates',
  packages: 'Packages',
  'api-ref': 'API Reference 🚧',
  '###': { type: 'separator' },
  '#scenarios': separator('Usage Scenarios'),
  saas: 'SaaS Framework',
  codegen: 'OpenAPI Codegen',
  nestjs: 'RPC for NestJS',
  'other-scenarios': 'Other Scenarios',
  '#ai': separator('AI Applications'),
  llm: 'LLM Completions',
  'function-calling': 'Function Calling',
  'realtime-ui': 'Real-Time UI 🧪 🚧',
  polling: 'Real-Time Polling 🧪 🚧',
  mcp: 'MCP Server',
  '#guides': separator('Random Recipes & Guides'),
  authorization: 'Authorization with Decorators',
  proxy: 'Proxy Endpoints',
} satisfies MetaRecord;

export default meta;
