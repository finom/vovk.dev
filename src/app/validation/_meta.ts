import type { MetaRecord } from 'nextra';

const separator = (title: string) => ({ type: 'separator', title });

const meta = {
  introduction: 'Getting Started',
  client: 'Client-Side Validation',
  standard: 'Standard Schema',
  zod: 'Zod 3 and 4',
  dto: 'class-validator',
  yup: { title: 'Yup (obsolete)', display: 'hidden' },
} satisfies MetaRecord;

export const icons: Omit<Record<keyof typeof meta, string>, `#${string}`> = {
  introduction: '🚀',
  client: '💻',
  standard: '📏',
  zod: '⚡',
  dto: '📐',
  yup: '🚫',
};

export default meta;
