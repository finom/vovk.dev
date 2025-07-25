import type { MetaRecord } from 'nextra';

const separator = (title: string) => ({ type: 'separator', title });

const meta = {
  '#common': separator('Common'),
  'hello-world': '"Hello World!" 🚧',
  spa: 'Single Page Application 🚧',
  'public-api': 'Public RESTful API 🚧',
  multitenant: 'Multitenancy',
  saas: 'SaaS framework 🚧',

  '#customization': separator('Customization'),
  customization: 'Customization 🚧',

  '#codegen': separator('Code Generation'),
  codegen: 'Code generation 🚧',
  nestjs: 'RPC for NestJS 🚧',

  '#ai': separator('AI'),
  llm: 'LLM integration 🚧',
  'ai-tools': 'AI tools 🚧',
  'ai-ui': 'AI-powered UI 🧪 🚧',
  polling: 'Real-time Polling 🧪 🚧',
  mcp: 'MCP Server 🚧',

  '#etc': separator('etc.'),
  cron: 'Vercel Cron jobs 🚧',
  authorization: 'Authorization 🚧',
  proxy: 'Proxy endpoints 🚧',
  'react-query': 'React Query 🚧',
  'dev-https': 'HTTPs in development 🚧',
} satisfies MetaRecord;

export const icons: Omit<Record<keyof typeof meta, string>, `#${string}`> = {
  saas: 'i',
  'public-api': 'i',
  spa: 'i',
  nestjs: 'i',
  proxy: 'i',
  llm: 'i',
  'ai-tools': 'i',
  'ai-ui': 'i',
  cron: 'i',
  authorization: 'i',
  customization: 'i',
  codegen: 'i',
  multitenant: 'i',
  'react-query': 'i',
  'dev-https': 'i',
  'hello-world': 'i',
  mcp: 'i',
  polling: 'i',
};

export default meta;
