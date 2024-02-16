import HelloController from '../../../modules/hello/HelloController';
import { initVovk, generateStaticAPI } from 'vovk';

const controllers = { HelloController };
const workers = {};

export type Controllers = typeof controllers;
export type Workers = typeof workers;

export const dynamic = 'force-static';

export function generateStaticParams() {
  console.log(generateStaticAPI(controllers));
  return generateStaticAPI(controllers);
}

export const { GET } = initVovk({ controllers, workers });
