import type { MetaRecord } from 'nextra';

const meta: MetaRecord = {
  saas: 'SaaS',
  'public-api': 'Public API',
  spa: 'Single Page Application',
  nestjs: 'RPC for NestJS',
  proxy: 'Proxy endpoints',
  llm: 'LLM integration',
  ai: 'AI integration',
  cron: 'Vercel Cron jobs',
  authorization: 'Authorization',
  customization: 'Customization',
  prisma: 'Prisma integration',
  codegen: 'Code generation',
  multitenant: 'Multitenancy',
  'react-hook-form': 'React Hook Form',
  'react-query': 'React Query',
  'dev-https': 'Development HTTPS',
  openapi: 'OpenAPI',
};

export const icons: Record<keyof typeof meta, string> = {
  saas: 'i',
  'public-api': 'i',
  spa: 'i',
  nestjs: 'i',
  proxy: 'i',
  llm: 'i',
  ai: 'i',
  cron: 'i',
  authorization: 'i',
  customization: 'i',
  prisma: 'i',
  codegen: 'i',
  multitenant: 'i',
  'react-hook-form': 'i',
  'dev-https': 'i',
  openapi: 'i',
};

export default meta;
