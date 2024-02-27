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

// list of all controllers
const controllers = { HelloController };

// used to map types for the generated client library
export type Controllers = typeof controllers;

export const { GET, POST } = initVovk({ controllers });
`;

const use = `
'use client';
import { useState } from 'react';
import { HelloController } from 'vovk-client';
import type { VovkClientReturnType } from 'vovk';

export default function Example() {
  const [response, setResponse] = useState<VovkClientReturnType<typeof HelloController.getHello>>();

  return (
    <>
      <button
        onClick={async () => setResponse(
          await HelloController.getHello()
        )}
      >
        Get Greeting from the Server
      </button>
      <div>{response?.greeting}</div>
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
          description="Create a static class and define API endpoints with decorators"
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
