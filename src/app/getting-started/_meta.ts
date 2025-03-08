import type { MetaRecord } from 'nextra';

const meta: MetaRecord = {
  about: 'About',
  'quick-install': 'Quick install',
  'manual-install': 'Manual install',
};

export const icons: Record<keyof typeof meta, string> = {
  about: 'i',
  'quick-install': 'i',
  'manual-install': 'i',
};

export default meta;
