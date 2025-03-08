// https://github.com/shuding/nextra/blob/main/docs/app/docs/file-conventions/page.mdx?plain=1
const meta = {
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
  segment: 'Segment',
  controller: 'Controller',
  client: 'TypeScript client',
  python: 'Python client',
  schema: 'Schema',
  streaming: 'JSON streaming',
  openapi: 'OpenAPI',
  errors: 'Errors',
  validation: 'Validation',
  config: 'Config',
  cli: 'CLI',
  'api-ref': 'API reference',
};

export default meta;
