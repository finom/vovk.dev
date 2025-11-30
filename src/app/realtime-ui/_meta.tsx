import type { MetaRecord } from 'nextra';

const separator = (title: string) => ({ type: 'separator', title });

const meta = {
  '#getting-started': separator('Getting Started'),
  overview: 'Realtime Kanban Overview',
  run: 'Run Locally',
  deploy: 'Deploy',
  '#client': separator('Front-end Setup'),
  state: 'State Normalization with Zustand',
  fetcher: 'Fetching the Data',
  '#server': separator('Back-end Setup'),
  database: 'Database Setup',
  endpoints: 'API Endpoints',
  polling: 'Database Polling with Redis',
  authentication: 'Basic Authentication',
  '#ai': separator('AI Integration'),
  'text-ai': 'Text AI Chat Integration',
  'voice-ai': 'WebRTC Voice AI Integration',
  'mcp': 'MCP',
  'telegram': 'Telegram Bot',
  last: 'Additional Topics', // Conclusion + uncovered topics? TODO
} as const satisfies MetaRecord;

export const icons: Omit<Record<keyof typeof meta, string>, `#${string}`> = {
  overview: '📘',
  run: '▶️',
  deploy: '🚀',
  state: '🧩',
  fetcher: '⚡',
  endpoints: '🔗',
  database: '🗃️',
  'text-ai': '🤖',
  'voice-ai': '🎙️',
  polling: '🔄',
  authentication: '🔐',
  'mcp': '🔌',
  'telegram': '📨',
  last: '📚',
};

export default meta;
