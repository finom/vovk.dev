import type { MetaRecord } from 'nextra';

const separator = (title: string) => ({ type: 'separator', title });

const meta = {
  '#getting-started': separator('Getting Started'),
  overview: 'Realtime Kanban Overview 🚧',
  run: 'Run Locally with Docker Compose',
  deploy: 'Deploy to Vercel',
  '#client': separator('Front-end Setup'),
  state: 'State Normalization with Zustand',
  fetcher: 'Fetching and Normalizing the Data',
  '#server': separator('Back-end Setup'),
  database: 'Database Setup with Prisma and Zod Generator',
  endpoints: 'API Endpoints and Embeddings',
  polling: 'Database Polling with Redis',
  authentication: 'Basic Authentication and Authorization (Password Protection) 🚧',
  '#ai': separator('AI Integration'),
  'text-ai': 'Text AI Chat Integration with AI SDK and AI Elements',
  'voice-ai': 'Realtime API with WebRTC',
  'mcp': 'MCP with mcp-handler 🚧',
  'telegram': 'Telegram Bot with Vovk.ts OpenAPI Mixins 🚧',
  last: 'Additional Topics 🚧', // Conclusion + uncovered topics? TODO
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
