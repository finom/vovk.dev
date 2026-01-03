import { controllersToStaticParams, initSegment } from 'vovk';
import HelloController from '../../../modules/hello/HelloController';

const controllers = { HelloRPC: HelloController };

export type Controllers = typeof controllers;

export function generateStaticParams() {
  return controllersToStaticParams(controllers);
}

export const { GET } = initSegment({
  controllers,
  onError: (error) => {
    console.error(error);
  },
});
