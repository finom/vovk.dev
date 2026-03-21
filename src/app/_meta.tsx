import type { MetaRecord } from 'nextra';

const separator = (title: string) => ({ type: 'separator', title });

const meta: MetaRecord = {
  'realtime-ui-link': {
    title: '🤖 Realtime UI',
    href: '/realtime-ui',
    type: 'page',
  },
  blog: {
    title: 'Blog',
    href: '/blog',
    type: 'page',
  },
  '#introduction': separator('Getting Started'),
  index: 'About Vovk.ts',
  'quick-install': 'Quick Start',
  'manual-install': 'Manual Install',
  '#segment': separator('Segment'),
  segment: 'Segment',
  'static-segment': 'Static Segment',

  '#procedure': separator('Controller & Procedure'),
  procedure: 'Controller & Procedure',
  'req-vovk': 'Enhanced Request Object',
  fn: 'Calling Procedures Locally',
  response: 'Response & Errors',
  'content-type': 'Content Type',
  jsonlines: 'JSON Lines',
  progressive: 'Progressive Response',
  inference: 'Type Inference',
  openapi: 'OpenAPI Specification',

  '#tools': separator('🤖 AI Tools'),
  tools: 'Deriving AI Tools from Procedures',
  'tools-mcp': 'MCP Formatting',
  'tools-standalone': 'Standalone Tools',

  '#decorators': separator('Decorators'),
  'decorator-overview': 'Decorators Overview',
  decorator: 'Custom Decorators',
  'decorator-examples': 'Decorator Examples',

  '#codegen': separator('TypeScript RPC Codegen'),
  typescript: 'TypeScript Client',
  imports: 'Customizing the Client',
  composed: 'Composed Mode',
  segmented: 'Segmented Mode',
  '#advanced-codegen': separator('Codegen Extras'),
  schema: 'Schema',
  mixins: 'OpenAPI Mixins',
  python: 'Python Client 🧪',
  rust: 'Rust Client 🧪',
  templates: 'Codegen Templates Reference',

  '#cli': separator('CLI & Configuration'),
  config: 'Config File',
  dev: <code className="nextra-code">vovk dev</code>,
  bundle: <code className="nextra-code">vovk bundle</code>,
  generate: <code className="nextra-code">vovk generate</code>,
  init: <code className="nextra-code">vovk init</code>,
  new: <code className="nextra-code">vovk new</code>,
  '#examples': separator('Examples'),
  github_link: {
    title: 'Random Examples',
    href: 'https://examples.vovk.dev',
  },
  'hello-world': '"Hello World!"',
  multitenant: 'Multitenancy Tutorial',
  'realtime-ui': {
    title: '🤖 Realtime UI',
    theme: {
      collapsed: true,
      copyPage: true,
    },
  },
  '#etc': separator('Deep Dive'),
  testing: 'Testing',
  packages: 'Packages',
  'api-ref': 'API Reference',
  performance: 'Route Performance Overhead',
};

export default meta;
