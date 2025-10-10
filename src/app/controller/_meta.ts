import type { MetaRecord } from 'nextra';

const meta = {
  introduction: 'Getting started',
  request: 'VovkRequest Type',
  service: 'Service',
  errors: 'Errors',
  headers: 'Headers',
  redirect: 'redirect and notFound',
  decorator: 'Decorators',
  jsonlines: 'JSON Lines',
  fn: 'Callable Handlers',
  meta: 'Request Meta',
  progressive: 'Progressive Response 🧪',
  formdata: 'FormData',
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
  formdata: '📝',
};

export default meta;