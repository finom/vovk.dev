import { generateStaticAPI, initSegment } from 'vovk';
import V3SSchemaController from '../../../../modules/schema/V3SSchemaController';

const controllers = { V3SSchemaRPC: V3SSchemaController };

export type Controllers = typeof controllers;

export function generateStaticParams() {
  return generateStaticAPI(controllers);
}

export const { GET } = initSegment({
  controllers,
  onError: (error) => {
    console.error(error);
  },
});
