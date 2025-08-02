import type { MetaRecord } from 'nextra';

const separator = (title: string) => ({ type: 'separator', title });

const meta = {
  introduction: 'Getting started 🚧',
  client: 'Client-side Validation 🚧',
  standard: 'Standard Schema',
  zod: 'Zod 3 and 4',
  dto: 'class-validator 🚧',
  yup: 'Yup (obsolete)',
} satisfies MetaRecord;

export const icons: Omit<Record<keyof typeof meta, string>, `#${string}`> = {
  introduction: 'i',
  client: 'i',
  standard: 'i',
  zod: 'i',
  dto: 'i',
  yup: 'i',
};

export default meta;
