import type { MetaRecord } from 'nextra';

const separator = (title: string) => ({ type: 'separator', title });

const meta = {
  setup: 'Part 1: Frontend & Backend',
  text: 'Part 2: Text Chat Interface',
  voice: 'Part 3: Voice Interface',
  polling: 'Part 4: Database Polling',
} satisfies MetaRecord;

export const icons: Omit<Record<keyof typeof meta, string>, `#${string}`> = {
  setup: '🛠️',
  text: '💬',
  voice: '🎙️',
  polling: '🔄',
};

export default meta;