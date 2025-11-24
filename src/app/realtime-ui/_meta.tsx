import type { MetaRecord } from 'nextra';

const separator = (title: string) => ({ type: 'separator', title });

const meta = {
  setup: 'Part 1: Frontend & Backend',
  ai: 'Part 2: Text & Voice AI',
  polling: 'Part 3: Database Polling',
} satisfies MetaRecord;

export const icons: Omit<Record<keyof typeof meta, string>, `#${string}`> = {
  setup: '🛠️',
  ai: '🤖',
  polling: '🔄',
};

export default meta;