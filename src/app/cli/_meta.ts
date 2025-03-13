import type { MetaRecord } from 'nextra';

const meta: MetaRecord = {
  introduction: 'Getting started',
  dev: 'vovk dev',
  generate: 'vovk generate',
  init: 'vovk init',
  new: 'vovk new',
};

export const icons: Record<keyof typeof meta, string> = {
  introduction: 'i',
  dev: 'i',
  generate: 'i',
  init: 'i',
  new: 'i',
};

export default meta;
