import CreateInitUseSection from './CreateInitUseSection';
import CreateInitUseExample from './CreateInitUseExample';

const create = `
// /src/modules/hello/HelloController.ts
import { get, prefix } from 'vovk';

@prefix('hello')
export default class HelloController {
  /**
   * Return a greeting from 
   * GET /api/hello/greeting
   */
  @get('greeting')
  static getHello() {
    return { greeting: 'Hello world!' };
  }
}
`;

const init = `
// /src/app/api/[[...vovk]]/route.ts
import { initVovk } from 'vovk';
import HelloController from '../../../modules/hello/HelloController';

export const runtime = 'edge'; // optional

const controllers = { HelloController };
const workers = {};

export type Controllers = typeof controllers;
export type Workers = typeof workers;

export const { GET, POST } = initVovk({ 
    controllers, workers,
});
`;

const use = `
'use client';
import { useState } from 'react';
import { HelloController } from 'vovk-client';
import type { VovkClientReturnType } from 'vovk';

export default function Example() {
  const [
    serverResponse, setServerResponse,
  ] = useState<VovkClientReturnType<typeof HelloController.getHello>>();

  return (
    <>
      <button
        onClick={async () => {
          setServerResponse(
            await HelloController.getHello()
          );
        }}
      >
        Get Greeting from Server
      </button>
      <div>{serverResponse?.greeting}</div>
    </>
  );
}
`;

const CreateInitUse = () => {
  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto max-w-screen-2xl">
        <CreateInitUseSection
          title="Create"
          description="Create static class and define API endpoints with decorators"
          number={1}
        >
          {create}
        </CreateInitUseSection>
        <CreateInitUseSection
          title="Init"
          description="Initialise the controller at Next.js Optional Catch-all Segment"
          number={2}
        >
          {init}
        </CreateInitUseSection>
        <CreateInitUseSection
          title="Use"
          description='Import the auto-generated client library from "vovk-client"'
          number={3}
        >
          {use}
        </CreateInitUseSection>
      </div>
      <CreateInitUseExample />
    </div>
  );
};

export default CreateInitUse;
