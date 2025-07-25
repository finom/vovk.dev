import { generateStaticAPI, initSegment } from 'vovk';
import HelloController from '../../../modules/hello/HelloController';
import SpecController from '../../../modules/spec/SpecController';

const controllers = { HelloRPC: HelloController, SpecRPC: SpecController };

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
