import type { MetaRecord } from 'nextra';

const meta: MetaRecord = {
  introduction: 'Getting started',
  request: 'VovkRequest',
  service: 'Service',
  return: 'Return type',
  errors: 'Errors',
  headers: 'Response headers',
  decorator: 'Decorators and metadata',
  redirect: 'redirect and notFound',
  proxy: 'Proxy',
  'type-extraction': 'Type extraction',
};

export const icons: Record<keyof typeof meta, string> = {
  introduction: 'i',
  request: 'i',
  service: 'i',
  return: 'i',
  errors: 'i',
  headers: 'i',
  decorator: 'i',
  redirect: 'i',
  proxy: 'i',
  'type-extraction': 'i',
};

export default meta;
