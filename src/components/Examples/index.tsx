import Example, { ExampleProps } from './Example';

const examples: Omit<ExampleProps, 'reverse'>[] = [
  {
    docsLink: 'https://docs.vovk.dev/docs/service-controller',
    badge: 'Controller to Service',
    title: 'Embracing the Service-Controller Pattern',
    children:
      'Drawing inspiration from NestJS, this framework champions the well-known Service-Controller pattern. It distinctly separates database and API requests from the code managing incoming requests. This design promotes cleaner, more organized code structures, enhancing maintainability and scalability.',
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
    docsLink: 'https://docs.vovk.dev/docs/client',
    badge: 'State to Controller',
    title: "Effortlessly 'Clientize' Your Controller",
    children: (
      <>
        Transform your controller into a client-side API library with just a few lines of code using Vovk.ts. Leveraging
        TypeScript and an innovative JSON metadata approach, it creates a well-typed 'bridge' between front-end and
        back-end, echoing the functionality of tRPC. The framework features a customizable 'fetcher' for server
        requests, which can be seamlessly integrated with your application's state logic. Plus, enjoy the convenience of
        navigating directly from the client-side to the controller in VSCode.
        <video className="mt-4 rounded-xl shadow-xl" src="/jump-to-controller.mp4" loop autoPlay muted controls />
      </>
    ),
    code: [
      `
      // /src/vovk/hello/HelloController.ts - the back-end
      import { post, type VovkRequest } from 'vovk';

      export class HelloController {
          static controllerName = 'HelloController';

          @post('hello/world/:someParam')
          static postSomeData(
            req: VovkRequest<{ hello: number }, { foo: string }>,
            { someParam }: { someParam: string }
          ) {
              const body = await req.json(); // casted as { hello: number }
              const foo = req.nextUrl.get('foo'); // casted as string
              const bar = req.nextUrl.get('bar'); // casted as never

              return {
                  hello: body.hello,
                  foo,
                  someParam,
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
            params: { someParam: string },
          }) => Promise<{ hello: number; foo: string; someParam: string }>
        */
        const result = await controller.postSomeData({
            body: { hello: 42 },
            query: { foo: 'bar' },
            someParam: 'baz',
        });

        // typeof result == { hello: string; foo: string; someParam: string }
        return result;
      }
      `,
    ],
  },
  {
    docsLink: 'https://docs.vovk.dev/docs/streaming',
    badge: 'Response Streaming',
    title: 'Streaming Server Responses with Async Generators',
    children: `
    Vovk.ts reinvigorates the power of generators, a crucial yet underutilized syntax, especially in modern AI applications. It offers an elegant abstraction layer for both generators and async generators. This implementation includes smart workarounds that safeguard the client from data collisions, ensuring smooth and efficient data streaming from the server.
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
          yield* this.helloService.streamTokens();
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

      export async function logStreamTokens() {
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
    docsLink: 'https://docs.vovk.dev/docs/validation',
    badge: 'Client-side Validation',
    title: 'Isomorphic Validation',
    children: (
      <>
        <p className="mb-2">
          Vovk.ts enhances web development with its client-side validation feature, utilizing isomorphic validation.
          This approach allows the client-side to access controller metadata, enabling pre-validation of requests before
          they reach the server. This process reduces server load and improves user experience by catching errors early.
        </p>
        <p>
          The{' '}
          <a href="https://github.com/finom/vovk-zod" className="link" target="_blank">
            vovk-zod
          </a>{' '}
          library, integrating with Vovk.ts, leverages the Zod validation library to offer a unified validation schema
          across both client and server sides. This ensures consistent data handling and simplifies the development
          process. The use of <strong>vovk-zod</strong> exemplifies a practical, efficient approach to data validation,
          aligning well with modern web application needs.
        </p>
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

          private static userService = UserService;

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
    docsLink: 'https://docs.vovk.dev/docs/worker',
    badge: 'Web Workers',
    title: 'Seamless Usage of Web Workers',
    children: (
      <>
        <p className="mb-2">
          Vovk.ts sets a new standard in web development with its seamless integration of Web Workers. This feature
          allows for easy delegation of intensive computations and data manipulations to Web Workers. Achieving this
          only requires a few lines of code, greatly simplifying complex tasks.
        </p>
        <p>
          The integration is designed to be developer-friendly, with tools like VSCode enabling direct navigation to the
          Worker implementation, similar to how it works with Controllers. This ensures a smooth workflow and easy code
          management.
        </p>
        <video className="my-4 rounded-xl shadow-xl" src="/jump-to-controller.mp4" loop autoPlay muted controls />
        Additionally, Vovk.ts goes beyond typical one-shot Web Worker calls by supporting continuous data streaming from
        the worker. Utilizing generators and async generators, it's ideal for ongoing data processing tasks. This means
        data can be sent continuously to components without disrupting the calculations, enhancing the application's
        performance and responsiveness.
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

          static *generator() {
            for (let i = 0; i < 10; i++) {
                yield i;
            }
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

      export async function logGeneratedNumbers() {
        for await (const number of worker.generator()) {
          console.log(number); // 0 ... 9
        }
      }
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
