import type { MetaRecord } from 'nextra';

const meta = {
  introduction: 'Getting started',
  request: 'VovkRequest type',
  service: 'Service',
  errors: 'Errors',
  headers: 'Headers',
  redirect: 'redirect and notFound',
  decorator: 'Decorators',
  jsonlines: 'JSON Lines',
  fn: 'Callable handlers',
  meta: 'Request meta',
  progressive: 'Progressive response 🧪',
  'form-data': 'FormData',
} satisfies MetaRecord;

export const icons: Record<keyof typeof meta, string> = {
  introduction: '🚀',
  request: '📨',
  service: '⚙️',
  errors: '⚠️',
  headers: '📋',
  redirect: '↪️',
  decorator: '✨',
  jsonlines: '📊',
  fn: '🔧',
  meta: '📌',
  progressive: '📈',
  'form-data': '📝',
};

export default meta;