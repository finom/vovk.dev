import { generateStaticAPI, initSegment } from 'vovk';
import V3SchemaController from '../../../../modules/schema/V3SchemaController';

const controllers = { V3SchemaRPC: V3SchemaController };

export type Controllers = typeof controllers;

export function generateStaticParams() {
  return generateStaticAPI(controllers);
}

export const { GET } = initSegment({
  segmentName: 'schema',
  controllers,
  onError: (error) => {
    console.error(error);
  },
});
