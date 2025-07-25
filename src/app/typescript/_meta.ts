import type { MetaRecord } from 'nextra';

const meta: MetaRecord = {
  introduction: 'Getting started',
  bundle: 'Bundle',
  'form-data': 'FormData',
};

export const icons: Record<keyof typeof meta, string> = {
  introduction: 'i',
  'form-data': 'i',
};

export default meta;
