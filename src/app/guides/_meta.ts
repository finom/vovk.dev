import type { MetaRecord } from 'nextra';

const separator = (title: string) => ({ type: 'separator', title });

const meta = {
  '#common': separator('Common'),
  'hello-world': '"Hello World!" 🚧',
  spa: 'Single Page Application 🚧',
  'public-api': 'Public RESTful API 🚧',
  multitenant: 'Multitenancy',
  saas: 'SaaS framework 🚧',

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
  authorization: 'Authorization',
  cron: 'Vercel Cron jobs',
  proxy: 'Proxy endpoints',
  'react-query': 'React Query 🚧',
} satisfies MetaRecord;

export const icons: Omit<Record<keyof typeof meta, string>, `#${string}`> = {
  saas: '☁️',
  'public-api': '🔌',
  spa: '📄',
  nestjs: '🐱',
  proxy: '🔀',
  llm: '🤖',
  'ai-tools': '🛠️',
  'ai-ui': '✨',
  cron: '⏰',
  authorization: '🔐',
  codegen: '⚡',
  multitenant: '🏢',
  'react-query': '🔍',
  'hello-world': '👋',
  mcp: '📡',
  polling: '📊',
};

export default meta;
