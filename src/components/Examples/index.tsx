/*

    Sections:
    - x Service-Controller pattern on back-end
    - x "Clientization" using `import type` and JSON metadata.
    - "Promisification" of Worker
    - x Response streaming
    - Worker streaming
    - The Vovk Pattern
    - x Isomorphic validation
    
*/

import Example, { ExampleProps } from './Example';

const examples: Omit<ExampleProps, 'reverse'>[] = [
  {
    badge: 'Controller to Service',
    title: 'Inspired by NestJS',
    children:
      'The framework originally inspired by NestJS and supporting well-known Service-Controller pattern to separate DB/API requests from the code that handles incoming requests.',
    code: [
      `
      // /src/vovk/hello/HelloService.ts
      export default class HelloService {
        static async getHello() {
          return { greeting: 'Hello world!' };
        }
      }
      `,
      `
      // /src/vovk/hello/HelloController.ts
      import { get, prefix } from "vovk";
      import HelloService from "./HelloService"
      
      @prefix('hello')
      export default class HelloController {
          static controllerName = 'HelloController';
          
          private static helloService = HelloService;

          @get('greeting')
          static async getHello() {
              return this.helloService.getHello();
          }
      }
      `,
    ],
  },
  {
    badge: 'State to Controller',
    title: '"Clientize" controller in a few lines of code',
    children: (
      <>
        Turn your controller into a client-side API library for free. Thanks to \`import type\` and the new JSON
        metadata mechanism Vovk.ts creates well-typed "bridge" between front-end and back-end. It uses so-called
        "fetcher" to make requests to the server which can be re-defined to be tightly injected in your application
        state logic.
        <br />
        ///// Jump to controller gif
      </>
    ),
    code: [
      `
      // /src/vovk/hello/HelloController.ts - the back-end
      import { post, type VovkRequest } from 'vovk';

      export class HelloController {
          static controllerName = 'HelloController';

          @post('hello/world')
          static postSomeData(req: VovkRequest<{ hello: number }, { foo: string }>) {
              const body = await req.json(); // casted as { hello: number }
              const foo = req.nextUrl.get('foo'); // casted as string
              const bar = req.nextUrl.get('bar'); // casted as never

              return {
                  hello: body.hello,
                  foo,
              }
          }
      }
      `,
      `
      // /src/vovk/hello/HelloState.ts - the front-end
      import { clientizeController } from 'vovk/client';
      import type HelloController from './HelloController';
      import metadata from '../vovk-metadata.json';

      const controller = clientizeController<typeof HelloController>(
        metadata.HelloController
      );

      export async function postSomeData(hello: string, foo: string) {
        /*
          typeof controller.postSomeData == ({
            body: { hello: number },
            query: { foo: string },
          }) => Promise<{ hello: number; foo: string; someParam: string }>
        */
        const result = await controller.postSomeData({
            body: { hello: 42 },
            query: { foo: 'baz' },
        });

        // typeof result == { hello: string; foo: string; someParam: string }
        return result;
      }
      `,
    ],
  },
  {
    badge: 'Response Streaming',
    title: 'Stream response from the server using async generators',
    children: `
        Modern AI applications relay heaviily on an old but forgotten syntax of generators. Vovk.ts implements an elegant abstraction over generators and async generators applying required workarounds protecting the client from data collisions.
      `,
    code: [
      `
      // /src/vovk/hello/HelloService.ts
      export type Token = { message: string };
      
      export default class HelloService {
        static async *streamTokens() {
          const tokens: Token[] = [
            { message: 'Hello,' }, 
            { message: ' World' }, 
            { message: '!' }
          ];
      
          for (const token of body) {
              await new Promise((resolve) => setTimeout(resolve, 300));
              yield token;
          }
        }
      }
      `,

      `
      // /src/vovk/hello/HelloController.ts
      import { type VovkRequest } from 'vovk';
      import HelloService from './HelloService';
      
      export default class HelloController {
        static controllerName = 'HelloController';
      
        private static helloService = HelloService;
      
        @post.auto()
        static async *streamTokens(req: VovkRequest<{ hello: string }>) {
          const body = await req.json(); // handle body if needed
          yield* this.helloService.streamTokens(response);
        }
      }
      `,
      `
      // /src/vovk/hello/HelloState.ts
      import { clientizeController } from 'vovk/client';
      import type HelloController from './HelloController';
      import type { Token } from './HelloService';
      import metadata from '../vovk-metadata.json';

      const controller = clientizeController<typeof HelloController>(
        metadata.HelloController
      );

      export async function streamTokens() {
        const resp = await controller.streamTokens({
            body: { hello: 'world' },
            isStream: true, // !
        });

        for await (const token of resp) {
            console.log(token satisfies Token);
        }
      }
`,
    ],
  },
  {
    badge: 'Client-side Validation',
    title: 'Isomorphic validation',
    children: (
      <>
        Since client-side can retrieve information about controller using metadata, it also can validate outcoming
        requests before they are sent to the server. Check out{' '}
        <a href="https://github.com/finom/vovk-zod" className="link" target="_blank">
          vovk-zod
        </a>{' '}
        library that utilises Zod to for isomorphic validation.
      </>
    ),
    code: [
      `
      // /src/vovk/user/UserController.ts
      import { z } from 'zod';
      import vovkZod from 'vovk-zod';
      import { put, type VovkRequest } from 'vovk';
      import UserService from './UserService';

      const UpdateUserModel = z.object({
          name: z.string(),
          email: z.string(),
      }).strict();

      const UpdateUserQueryModel = z.object({
          id: z.string(),
      }).strict();

      export default class UserController {
          static controllerName = 'UserController';

          static userService = UserService;

          @put()
          @vovkZod(UpdateUserModel, UpdateUserQueryModel)
          static updateUser(
              req: VovkRequest<
                z.infer<typeof UpdateUserModel>, 
                z.infer<typeof UpdateUserQueryModel>
              >
          ) {
              const { name, email } = await req.json();
              const id = req.nextUrl.searchParams.get('id');

              return this.userService.updateUser(id, { name, email });
          }
      }
`,
      `
    // /src/vovk/user/UserState.ts
    import { clientizeController } from 'vovk/client';
    import { zodValidateOnClient } from 'vovk-zod';
    import type UserController from './UserController';
    import metadata from '../vovk-metadata.json';

    const controller = clientizeController<typeof StreamingController>(
      metadata.UserController, 
      { validateOnClient: zodValidateOnClient }
    );

    export function updateUser(
      id: string, 
      { name, email }: { name: string; email: string }
    ) {
        return controller.updateUser({
            query: { id },
            body: { name, email },
        });
    }
`,
    ],
  },
  {
    badge: 'Worker Controller',
    title: 'Seamless usage of Web Workers',
    children: (
      <>
        Vovk.ts provides world-first seamless integration of Web Workers into your code. You can delegate any heavy
        calculations and data manipulation to the worker and get the result back in a few lines of code.
      </>
    ),
    code: [
      `
      // /src/vovk/hello/HelloWorkerService.ts
      import { worker } from 'vovk/worker';
      
      @worker()
      export default class HelloWorkerService {
          static workerName = 'HelloWorkerService';
      
          static heavyCalculation(iterations: number) {
              let result: number;
              // ...heavy calculations
              return result;
          }
      }
      `,
      `
      // /src/vovk/hello/HelloState.ts
      import type HelloWorkerService from './HelloWorkerService';
      import metadata from '../vovk-metadata.json';

      const worker = promisifyWorker<typeof HelloWorkerService>(
          new Worker(new URL('./HelloWorkerService.ts', import.meta.url)),
          metadata.workers.HelloWorkerService
      );

      export async function heavyCalculation() {
        const result = await worker.heavyCalculation(100_000_000);

        return result;
      }
`,
    ],
  },
  {
    badge: 'Worker Streaming',
    title: 'Stream data from the worker using generators',
    children: (
      <>
        Besides one-shot Web Worker calls Vovk.ts also supports streaming data from the worker using generators and
        async generators. It is perfect for continiuos data processing when you need to continiuosly send data to
        components without iterrupting the calculations.
      </>
    ),
    code: [
      `
      // /src/vovk/hello/HelloWorkerService.ts
      import { worker } from 'vovk/worker';

      @worker()
      export default class HelloWorkerService {
          static workerName = 'HelloWorkerService';

          static *generator() {
              for (let i = 0; i < 10; i++) {
                  yield i;
              }
          }

          static async *asyncGenerator() {
              for (let i = 0; i < 10; i++) {
                  await new Promise((resolve) => setTimeout(resolve, 100));
                  yield i;
              }
          }
      }
      `,
      `
      // /src/vovk/hello/HelloState.ts
      const worker = promisifyWorker<typeof HelloWorkerService>(/* ... */);
      
      // ...
      for await (const number of worker.generator()) {
          console.log(number); // 0 ... 9
      }

      for await (const number of worker.asyncGenerator()) {
          console.log(number); // 0 ... 9
      }
      // ...
`,
    ],
  },
];

const Examples = () => {
  return (
    <div>
      {examples.map((example, index) => (
        <Example reverse={!!(index % 2)} key={index} {...example} />
      ))}
    </div>
  );
};

export default Examples;
