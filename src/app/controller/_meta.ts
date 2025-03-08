import type { MetaRecord } from 'nextra';

const meta: MetaRecord = {
  introduction: 'Getting started',
  service: 'Service',
  request: 'VovkRequest',
  return: 'Return Type',
  headers: 'Response Headers',
  decorator: 'Decorators and metadata',
  redirect: 'redirect and notFound',
  proxy: 'Proxy',
  'type-extraction': 'Type Extraction',
};

export const icons: Record<keyof typeof meta, string> = {
  introduction: 'i',
  service: 'i',
  request: 'i',
  return: 'i',
  headers: 'i',
  decorator: 'i',
  redirect: 'i',
  proxy: 'i',
  'type-extraction': 'i',
};

export default meta;
