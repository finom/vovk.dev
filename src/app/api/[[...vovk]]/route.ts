import HelloController from '../../../modules/hello/HelloController';
import { initVovk, generateStaticAPI } from 'vovk';

const controllers = { HelloController };
const workers = {};

export type Controllers = typeof controllers;
export type Workers = typeof workers;

export function generateStaticParams() {
  return generateStaticAPI(controllers);
}

export const { GET } = initVovk({ controllers, workers });
