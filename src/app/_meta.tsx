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
      copyPage: false,
    },
  },
  blog: {
    title: 'Blog',
    href: '/blog',
    type: 'page',
    display: 'hidden',
  },
  '#about': separator('About'),
  about: 'About Vovk.ts',
  saas: 'Framework for SaaS Apps',
  performance: 'Overhead Performance',
  '#getting-started': separator('Getting Started'),
  'quick-install': 'Quick Install 🚧',
  'manual-install': 'Manual Install 🚧',
  'hello-world': '"Hello World!" Example 🚧',
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
  codegen: 'OpenAPI Codegen',
  templates: 'Client Templates',
  packages: 'Packages',
  'api-ref': 'API Reference 🚧',
  '#ai': separator('AI Applications'),
  llm: 'LLM Completions',
  'function-calling': 'Function Calling',
  'realtime-ui': 'Realtime UI 🧪 🚧',
  polling: 'Realtime Polling 🧪 🚧',
  mcp: 'MCP Server',
  '#guides': separator('Random Recipes & Guides'),
  authorization: 'Authorization with Decorators',
  proxy: 'Proxy Endpoints',
  nestjs: 'RPC for NestJS',
  'other-scenarios': 'Other Usage Scenarios',
} satisfies MetaRecord;

export default meta;
