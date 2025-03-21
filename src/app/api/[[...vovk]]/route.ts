import { initVovk, generateStaticAPI } from 'vovk';
import HelloController from '../../../modules/hello/HelloController';

const controllers = { HelloRPC: HelloController };

export type Controllers = typeof controllers;

export function generateStaticParams() {
  return generateStaticAPI(controllers);
}

export const { GET } = initVovk({
  controllers,
  onError: (error) => {
    console.error(error);
  },
});
