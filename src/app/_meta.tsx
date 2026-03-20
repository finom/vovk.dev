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
  performance: 'Route Performance Overhead',
  '#essentials': separator('Essentials'),
  segment: 'Segment',
  /*
  --- Segment ---
  - Segment Overview
  - Static Segment
  */
  procedure: 'Controller & Procedure',
  /*
  --- Controller & Procedure ---
  - Controller & Procedure (Root Endpoint as a hint)
  - req.vovk Interface
  - Content Type
  - Response and Errors
  - Calling Procedures Locally
  - JSON Lines
  - Progressive Responses
  - Type Inference
  ?? Schema - Codegen Extras?
  - Openapi
  */
  schema: 'Schema',
  response: 'Response & Errors',
  decorator: 'Custom Decorators',
  /* --- Custom Decorators ---
  - Custom Decorators Overview
  - Decorator Examples
  */
  fn: 'Calling Procedures Locally',
  jsonlines: 'JSON Lines',
  inference: 'Type Inference',
  openapi: 'OpenAPI Specification',
  tools: '🤖 Deriving AI Tools',
  /* --- Deriving AI Tools ---
  - Deriving AI Tools Overview
  - MCP (Model Context Protocol) Output Formatting
  - Standalone Tools
  - Examples
  */
  '#codegen': separator('TypeScript RPC Codegen'),
  typescript: 'TypeScript Client',
  imports: 'Customizing the Client',
  composed: 'Composed Mode',
  segmented: 'Segmented Mode',
  '#advanced-codegen': separator('Codegen Extras'),
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
  '#etc': separator('Reference'),
  packages: 'Packages',
  'api-ref': 'API Reference',
};

export default meta;
