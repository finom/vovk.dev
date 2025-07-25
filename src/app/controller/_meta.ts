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
  fn: 'Callable handlers 🚧',
  meta: 'Request meta 🚧',
  progressive: 'Progressive Response 🧪 🚧',
  'form-data': 'FormData 🚧',
} satisfies MetaRecord;

export const icons: Record<keyof typeof meta, string> = {
  introduction: 'i',
  request: 'i',
  service: 'i',
  errors: 'i',
  headers: 'i',
  redirect: 'i',
  decorator: 'i',
  jsonlines: 'i',
  fn: 'i',
  meta: 'i',
  progressive: 'i',
  'form-data': 'i',
};

export default meta;
