import Link from 'next/link';
import Example, { ExampleProps } from './Example';
import OpenAiExample from './Example/OpenAiExample';
import WorkerExample from './Example/WorkerExample';
import FormExample from './Example/FormExample';

const examples: Omit<ExampleProps, 'reverse'>[] = [
  {
    docsLink: 'https://docs.vovk.dev/docs/controller',
    badge: 'Code Splitting',
    title: 'Embracing the Service-Controller Pattern',
    Component: () => (
      <>
        Drawing inspiration from NestJS, this library champions the well-known Service-Controller pattern. It distinctly
        separates database and API requests from the code managing incoming requests. This design promotes cleaner, more
        organized code structures, enhancing maintainability and scalability. Check out the full example{' '}
        <Link href="https://vovk-examples.vercel.app/basic-with-service" className="link" target="_blank">
          here
        </Link>
        .
      </>
    ),
    code: [
      `
      // /src/modules/hello/HelloService.ts
      export default class HelloService {
        static getHello() {
          return { greeting: 'Hello world!' };
        }
      }
      `,
      `
      // /src/modules/hello/HelloController.ts
      import { get, prefix } from "vovk";
      import HelloService from "./HelloService";
      
      @prefix('hello')
      export default class HelloController {          
          private static helloService = HelloService;

          @get('greeting')
          static getHello() {
              return this.helloService.getHello();
          }
      }
      `,
    ],
  },

  {
    docsLink: 'https://docs.vovk.dev/docs/controller#streaming',
    badge: 'Response Streaming',
    title: 'Stream Server Responses with Async Generators and Disposable Objects',
    Component: () => (
      <>
        Vovk.ts addresses the contemporary demand for streaming responses through AI client libraries with modern
        TypeScript syntax. Check out the implementation of OpenAI chat completion using response streaming:
        <div className="live-example my-6">
          <OpenAiExample />
        </div>
        Check the full code of this example on the{' '}
        <Link href="https://vovk-examples.vercel.app/openai" target="_blank" className="link">
          examples website
        </Link>
        . You might also be interested to see other streaming examples as well:
        <ul className="list-disc pl-6 mt-2">
          <li>
            <Link href="https://vovk-examples.vercel.app/stream" target="_blank" className="link">
              Stream Example
            </Link>{' '}
            &ndash; basic example of response streaming.
          </li>
          <li>
            <Link href="https://vovk-examples.vercel.app/stream" target="_blank" className="link">
              Stream using Response Object
            </Link>{' '}
            &ndash; stream example with StreamResponse class instead of generators for more control over the code.
          </li>
        </ul>
      </>
    ),
    code: [
      `
        // /src/modules/openai/OpenAiController.ts
        import { type VovkRequest, post, prefix } from 'vovk';
        import OpenAI from 'openai';

        @prefix('openai')
        export default class OpenAiController {
          private static openai = new OpenAI();

          @post('chat', { cors: true })
          static async *createChatCompletion(
            req: VovkRequest<{ messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] }>
          ) {
            const { messages } = await req.json();

            yield* await this.openai.chat.completions.create({
              messages,
              model: 'gpt-3.5-turbo',
              stream: true,
            });
          }
        }
      `,

      `
      import { OpenAiController } from 'vovk-client';

      // ...

      using completion = await OpenAiController.createChatCompletion({
        body: { messages },
      });

      for await (const chunk of completion) {
        console.log(chunk);
      }
`,
    ],
  },
  {
    docsLink: 'https://docs.vovk.dev/docs/decorators#request-input-validation',
    badge: 'Request Validation',
    title: 'Isomorphic Validation',
    Component: () => (
      <>
        Vovk.ts provides an easy way to validate requests using{' '}
        <Link href="https://zod.dev/" target="_blank" className="link">
          Zod
        </Link>
        , a TypeScript-first schema declaration and validation library. This is achieved through the use of{' '}
        <code>vovkZod</code> decorator implemented at{' '}
        <Link href="https://github.com/finom/vovk-zod" target="_blank" className="link">
          vovk-zod
        </Link>{' '}
        package. The validation is isomorphic, meaning it works on both the server and the client and the data is
        validated before it reaches the server. Try it yourself!
        <div className="live-example my-6">
          <FormExample />
        </div>
        See the code for this example{' '}
        <Link href="https://vovk-examples.vercel.app/form" target="_blank" className="link">
          here
        </Link>
        . The{' '}
        <Link href="https://vovk-examples.vercel.app" target="_blank" className="link">
          examples website
        </Link>{' '}
        also includes{' '}
        <Link href="https://react-hook-form.com/" target="_blank" className="link">
          React Hook Form
        </Link>{' '}
        example that you can view{' '}
        <Link href="https://vovk-examples.vercel.app/hook-form" target="_blank" className="link">
          here
        </Link>
        .
      </>
    ),
    code: [
      `
      // /src/modules/user/FormController.ts
      import { prefix, post, VovkRequest } from 'vovk';
      import vovkZod from 'vovk-zod';
      import { z } from 'zod';
      import { userSchema } from '../../zod';

      @prefix('form')
      export default class FormController {
        @post('create-user')
        @vovkZod(userSchema)
        static async createUser(req: VovkRequest<z.infer<typeof userSchema>>) {
          const { firstName, lastName, email } = await req.json();

          return {
            success: true,
            user: { firstName, lastName, email },
          };
        }
      }
`,
      `
      'use client';
      import { useState, type FormEvent } from 'react';
      import { FormController } from 'vovk-client';
      
      export default function FormExample() {
        // ...
        const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          await FormController.createUser({
            body: { firstName, lastName, email },
          })
        };
      
        return (
          <form onSubmit={onSubmit}>
            {/* ... */}
          </form>
        );
      }
      
`,
    ],
  },
  {
    docsLink: 'https://docs.vovk.dev/docs/worker',
    badge: 'Client-side threading',
    title: 'Bonus Feature: Seamless Web Workers Invocation',
    Component: () => (
      <>
        Vovk.ts provides an easy way to integrate Web Workers into your application. This feature allows you to offload
        heavy calculations to a separate browser thread, preventing the main thread from becoming unresponsive. The
        library simplifies the process of creating and using Web Workers, making it accessible without setting up
        messaging manually to exchange data between threads.
        <div className="live-example my-6">
          <WorkerExample />
        </div>
        View the full code of this example{' '}
        <Link href="https://vovk-examples.vercel.app/worker" target="_blank" className="link">
          here
        </Link>
        . You might be also interested to see how you would implement{' '}
        <Link href="https://vovk-examples.vercel.app/worker-yield" target="_blank" className="link">
          continious event streaming with generators
        </Link>{' '}
        that is illustrated as approximation of π with BigInt.
        <br />
        <br />
        This feature is also implemented with TypeScript Mapped Types so you can jump straight from the main thread to
        the worker implementation.
        <video
          className="mt-4 rounded-xl shadow-xl max-w-full w-[700px] mx-auto"
          src="/jump-to-worker.mp4"
          loop
          autoPlay
          muted
          controls
        />
      </>
    ),
    code: [
      `
      // /src/modules/hello/HelloWorker.ts
      import { worker } from 'vovk';

      @worker()
      export default class HelloWorker {
        static factorize(number: bigint): bigint[] {
          let factors: bigint[] = [];
          // ...

          return factors;
        }
      }
      `,
      `
'use client';
import { useEffect, useState, type FormEvent } from 'react';
import { HelloWorker } from 'vovk-client';

export default function WorkerExample() {
  const [value, setValue] = useState('123456789');
  const [result, setResult] = useState<bigint[]>();

  useEffect(() => {
    // inject the worker to the interface
    HelloWorker.use(new Worker(new URL('../../modules/worker/HelloWorker.ts', import.meta.url)));
  }, []);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult(await HelloWorker.factorize(BigInt(value)));
  };

  return (
    <form onSubmit={onSubmit}>
      {/* ... */}
    </form>
  );
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
