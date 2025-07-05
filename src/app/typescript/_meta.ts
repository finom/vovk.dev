import type { MetaRecord } from 'nextra';

const meta: MetaRecord = {
  introduction: 'Getting started',
  bundle: 'Bundle',
  'form-data': 'FormData',
  'type-extraction': 'Type Extraction',
};

export const icons: Record<keyof typeof meta, string> = {
  introduction: 'i',
  'form-data': 'i',
  'type-extraction': 'i',
};

export default meta;
