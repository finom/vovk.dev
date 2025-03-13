import type { MetaRecord } from 'nextra';

const meta: MetaRecord = {
  introduction: 'Getting started',
  'vovk-ajv': { title: 'Ajv (client validation)' },
  'vovk-zod': { title: 'Zod' },
  'vovk-yup': { title: 'Yup' },
  'vovk-dto': { title: 'class-validator' },
  custom: { title: 'Custom Validation' },
};

export const icons: Record<keyof typeof meta, string> = {
  introduction: 'i',
  'vovk-ajv': 'i',
  'vovk-zod': 'i',
  'vovk-yup': 'i',
  'vovk-dto': 'i',
  custom: 'i',
};

export default meta;
