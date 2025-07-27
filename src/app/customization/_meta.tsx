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
    fetcher: 'Fetcher 🚧',
    'validate-on-client': 'Validate on Client 🚧',
    'create-rpc': 'Create RPC 🚧',

} satisfies MetaRecord;

export const icons: Omit<Record<keyof typeof meta, string>, `#${string}`> = {
    fetcher: '🔄',
    'validate-on-client': '✅',
    'create-rpc': '➕',
};

export default meta;
