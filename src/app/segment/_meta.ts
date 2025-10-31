import type { MetaRecord } from 'nextra';

const meta: MetaRecord = {
  introduction: 'Getting Started',
  static: 'Static Segment',
};

export const icons: Record<keyof typeof meta, string> = {
  introduction: '🚀',
  static: '📦',
};

export default meta;