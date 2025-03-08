import type { MetaRecord } from 'nextra';

const meta: MetaRecord = {
  introduction: 'Getting started',
  static: 'Static segment',
};

export const icons: Record<keyof typeof meta, string> = {
  introduction: 'i',
  static: 'i',
};

export default meta;
