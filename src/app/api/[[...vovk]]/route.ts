import HelloController from '../../../modules/hello/HelloController';
import { initVovk } from 'vovk';

export function generateStaticParams() {
  return [{ vovk: ['__ping'] }, { vovk: ['hello', 'greeting'] }]; // there is how you implement static API
}

const controllers = { HelloController };
const workers = {};

export type Controllers = typeof controllers;
export type Workers = typeof workers;

export const { GET, POST, PUT, DELETE } = initVovk({ controllers, workers });
