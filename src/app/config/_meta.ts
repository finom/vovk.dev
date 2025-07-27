/*
- Getting started
- devHttps
- composedClient, segmentedClient
- bundle
- clientTemplateDefs
- imports ? 
- moduleTemplates
- segmentConfig
- openApiMixins
*/
import type { MetaRecord } from 'nextra';

const separator = (title: string) => ({ type: 'separator', title });

const meta = {
  introduction: 'Getting Started 🚧',
  https: 'HTTPS in Development',
  'composed-and-segmented': 'Composed vs Segmented RPC 🚧',
  bundle: 'TypeScript Bundle 🚧',
  'template-defs': 'Client Template Definitions 🚧',
  'module-templates': 'Module Templates 🚧',
  'segment-config': 'Segment Configuration 🚧',
  'openapi-mixins': 'OpenAPI Mixins 🚧',
} satisfies MetaRecord;

export const icons: Omit<Record<keyof typeof meta, string>, `#${string}`> = {
  introduction: 'i',
  https: 'i',
  'composed-and-segmented': 'i',
  bundle: 'i',
  'template-defs': 'i',
  'module-templates': 'i',
  'segment-config': 'i',
  'openapi-mixins': 'i',
};

export default meta;
