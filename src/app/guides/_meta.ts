import type { MetaRecord } from 'nextra';

const separator = (title: string) => ({ type: 'separator', title });

const meta: MetaRecord = {
  '#common': separator('Common'),
  'hello-world': '"Hello World!"',
  spa: 'Single Page Application',
  'public-api': 'Public RESTful API',
  multitenant: 'Multitenancy',
  saas: 'SaaS framework',

  '#customization': separator('Customization'),
  validation: 'Validation',
  customization: 'Customization',

  '#codegen': separator('Code Generation'),
  codegen: 'Code generation',
  nestjs: 'RPC for NestJS',

  '#ai': separator('AI'),
  llm: 'LLM integration',
  'ai-tools': 'AI tools',
  'ai-ui': 'AI-powered UI',
  mcp: 'MCP Server',

  '#techniques': separator('Experimental techniques'),
  polling: 'Real-time Polling',
  progressive: 'Progressive Response',

  '#misc': separator('Miscellaneous'),
  cron: 'Vercel Cron jobs',
  authorization: 'Authorization',
  prisma: 'Prisma Generators',
  proxy: 'Proxy endpoints',
  'react-hook-form': 'React Hook Form',
  'react-query': 'React Query',
  'dev-https': 'Development HTTPS',
};

export const icons: Record<keyof typeof meta, string> = {
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
  prisma: 'i',
  codegen: 'i',
  multitenant: 'i',
  'react-hook-form': 'i',
  'react-query': 'i',
  'dev-https': 'i',
  validation: 'i',
  'hello-world': 'i',
  progressive: 'i',
  mcp: 'i',
  polling: 'i',
};

export default meta;
