import Link from 'next/link';
import Example, { ExampleProps } from './Example';
import OpenAiExample from './Example/OpenAiExample';
import WorkerExample from './Example/WorkerExample';
import FormExample from './Example/FormExample';
import OpenAiCode1 from './OpenAiCode1.mdx';
import OpenAiCode2 from './OpenAiCode2.mdx';
import ValidationCode1 from './ValidationCode1.mdx';
import ValidationCode2 from './ValidationCode2.mdx';
import WorkerCode1 from './WorkerCode1.mdx';
import WorkerCode2 from './WorkerCode2.mdx';

const examples: Omit<ExampleProps, 'reverse'>[] = [
  /* {
    docsLink: 'https://nextjs.org/docs/app/building-your-application/routing/route-handlers',
    docsLinkText: 'Read Next.js Docs',
    badge: 'Well-known API',
    title: 'Designed for the latest version of Next.js',
    Component: () => (
      <>
        The library designed for{' '}
        <Link href="https://nextjs.org/docs/app" className="link" target="_blank">
          Next.js App Router
        </Link>{' '}
        It avoids introducing complex abstractions and does not modify the request object, acting merely as a wrapper
        over Next.js{' '}
        <Link
          href="https://nextjs.org/docs/app/building-your-application/routing/route-handlers"
          className="link"
          target="_blank"
        >
          route handlers
        </Link>
        . It uses <code className="code">VovkRequest</code> that extends{' '}
        <Link href="https://nextjs.org/docs/app/api-reference/functions/next-request" className="link" target="_blank">
          NextRequest
        </Link>{' '}
        to define request body and search query in order to set up proper type recognition. If you're familiar with
        using them, you already know how to handle operations like retrieving the{' '}
        <Link href="https://developer.mozilla.org/en-US/docs/Web/API/Request/json" className="link" target="_blank">
          JSON body
        </Link>
        ,{' '}
        <Link
          href="https://nextjs.org/docs/app/building-your-application/routing/route-handlers#request-body-formdata"
          className="link"
          target="_blank"
        >
          Request Body FormData
        </Link>
        ,{' '}
        <Link
          href="https://nextjs.org/docs/app/api-reference/functions/next-request#nexturl"
          className="link"
          target="_blank"
        >
          search query
        </Link>
        , making a{' '}
        <Link href="https://nextjs.org/docs/app/api-reference/functions/redirect" className="link" target="_blank">
          redirect
        </Link>
        , using{' '}
        <Link href="https://nextjs.org/docs/app/api-reference/functions/cookies" className="link" target="_blank">
          cookies
        </Link>
        , accessing{' '}
        <Link href="https://nextjs.org/docs/app/api-reference/functions/headers" className="link" target="_blank">
          headers
        </Link>
        , etc.
      </>
    ),
    code: [
      `
        import { type VovkRequest, prefix, put } from 'vovk';
        import { redirect } from 'next/navigation';
        import { headers } from 'next/headers';
        // ...

        @prefix('users')
        export default class UserController {
            @put(':id') // PUT /api/users/69?notifyOn=comment
            @authGuard() 
            static async updateUser(
              req: VovkRequest<Partial<User>, { notifyOn: 'comment' | 'none' }>, 
              { id }: { id: string }
            ) {
                const body = await req.json(); // type: Partial<User>
                const notifyOn = req.nextUrl.searchParams.get('notifyOn'); // 'comment' | 'none'
                // ...
                redirect('/api/another/endpoint');
                // ...
                return updatedUser;
            }
        }
        `,
      `
        import { UserController } from 'vovk-client';

        // ...

        const updatedUser = await UserController.updateUser({
            params: { id: '69' },
            body: { email: 'john@example.com' },
            query: { notifyOn: 'comment' },
        });
        `,
    ],
  }, 
  {
    docsLink: 'https://docs.vovk.dev/docs/controller',
    badge: 'Code Splitting',
    title: 'Embracing the Service-Controller Pattern',
    Component: () => (
      <>
        Drawing inspiration from NestJS, this library champions the well-known Service-Controller pattern, distinctly
        separating database and API requests from the code managing incoming requests. This design promotes cleaner,
        more organized code structures, thereby enhancing maintainability and scalability. Check out the full example{' '}
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
*/
  {
    docsLink: 'controller/streaming',
    badge: 'Response Streaming',
    title: 'Stream Server Responses with Async Generators and Disposable Objects',
    Component: () => (
      <>
        Vovk.ts meets the contemporary demand for streaming responses in AI client libraries, leveraging modern
        TypeScript syntax. Explore how it implements OpenAI chat completion with response streaming:
        <div className="live-example my-6">
          <OpenAiExample />
        </div>
        Check the full code of this example on the{' '}
        <Link href="https://vovk-examples.vercel.app/openai" target="_blank" className="link">
          examples website
        </Link>
        . You might also find other streaming examples interesting:
        <ul className="list-disc pl-6 mt-2">
          <li>
            <Link href="https://vovk-examples.vercel.app/stream" target="_blank" className="link">
              Stream Example
            </Link>{' '}
            &ndash; a basic example of response streaming.
          </li>
          <li>
            <Link href="https://vovk-examples.vercel.app/stream" target="_blank" className="link">
              Stream using Response Object
            </Link>{' '}
            &ndash; an example that utilizes the StreamResponse class instead of generators for more control over the
            code.
          </li>
        </ul>
      </>
    ),
    code: [<OpenAiCode1 key={1} />, <OpenAiCode2 key={2} />],
  },
  {
    docsLink: 'decorators',
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
        validated before it reaches the server. Try it yourself:
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
          by this link
        </Link>
        .
      </>
    ),
    code: [<ValidationCode1 key={1} />, <ValidationCode2 key={2} />],
  },
  {
    docsLink: 'worker',
    badge: 'Client-side threading',
    title: 'Bonus Feature: WPC - Worker Procedure Call',
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
    code: [<WorkerCode1 key={1} />, <WorkerCode2 key={2} />],
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
