import { initVovk, generateStaticAPI } from 'vovk';
import HelloController from '../../../modules/hello/HelloController';
import HelloWorker from '../../../modules/hello/HelloWorker';

const controllers = { HelloRPC: HelloController };
const workers = { HelloWPC: HelloWorker };

export type Controllers = typeof controllers;
export type Workers = typeof workers;

export function generateStaticParams() {
  return generateStaticAPI(controllers);
}

export const { GET } = initVovk({ controllers, workers });
