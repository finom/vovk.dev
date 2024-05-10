# API

Full list of available imports for quick reference: 

```ts
import {
  // core
  initVovk,
  createDecorator,
  // controller method decorators
  get, 
  post, 
  put, 
  patch, 
  del, 
  head, 
  options, 
  // controller class decorator
  prefix, 
  // WPC class decorator 
  worker,
  // core types
  type VovkClientFetcher,
  type VovkDefaultFetcherOptions,
  type VovkConfig,
  type VovkEnv,
  type VovkMetadata,
  type VovkErrorResponse,
  // types used by controllers
  type VovkRequest,
  type VovkControllerBody,
  type VovkControllerQuery,
  type VovkControllerParams,
  type VovkControllerReturnType,
  type VovkControllerYieldType,
  // types used by client
  type VovkBody,
  type VovkQuery,
  type VovkParams,
  type VovkReturnType,
  type VovkYieldType,
  type VovkClientOptions,
  // classes
  StreamResponse,
  HttpException,
  // enums
  HttpStatus,
  HttpMethod,
  // misc
  generateStaticAPI,
} from 'vovk';
```

## Core

### `initVovk`

Creates the standard Next.js App Route handlers used by the main [Optional Catch-all Segment](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#optional-catch-all-segments). The function accepts the following options:

- `controllers: Record<string, Function>` - the list of Controllers
- `workers?: Record<string, Function>` - the list of WPC interfaces
- `exposeValidation?: boolean` - set to `false` if you want to hide validation logic from the client-side code.
- `onError?: (err: Error, req: NextRequest) => void | Promise<void>` - called on Controller exceptions, can be used to log errors by a third-party service. The second argument can be utilised to retrieve reques URL, authorisation info, and other useful information about the failed request.

```ts
// /src/app/api/[[...vovk]]/route.ts
import { initVovk } from 'vovk';
import HelloController from '../../../modules/hello/HelloController';
import UserController from '../../../modules/user/UserController';
import HelloWorker from '../../../modules/hello/HelloWorker';
import UserWorker from '../../../modules/user/UserWorker';

const controllers = { HelloController, UserController };
const workers = { HelloWorker, UserWorker };

export type Controllers = typeof controllers;
export type Workers = typeof workers;

export const { GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS } = initVovk({
  controllers,
  workers,
  exposeValidation: false,
  onError(e, req) {
    console.log('Error', e);
  }
});
```

### `createDecorator`

Defines a custom decorator to extend default behavoir of API endpoints. Accepts 2 arguments: middleware function and init function. The first one defines what the decorator is going to do, the second one is called once per initialisation and intended to pass extra data to the metadata file (for now it's client validation, if exposed).

The middleware accepts at least 2 arguments: `VovkRequest`, `next` function that needs to be called and its awaited result needs to be returned after you perform required actions and `...rest` - the arguments that are going to be used by the created decorator fabric.

```ts
import { createDecorator, get, HttpException, HttpStatus } from 'vovk';

const myDecorator = createDecorator((req, next, a: string, b: number) => {
  console.log(a, b); // Outputs: "foo", 1

  if(isSomething) { 
    // override route method behavior and return { hello: 'world' } from the endpoint
    return { hello: 'world' };
  }

  if(isSomethingElse) {
    // throw HTTP error if needed
    throw new HttpException(HttpStatus.BAD_REQUEST, 'Something went wrong');
  }

  return next();
}, (a: string, b: number) => {
    console.info('Decorator is initialised with', a, b);
});

class MyController {
  static controllerName = 'MyController';

  @get.auto()
  @myDecorator('foo', 1) // Passes 'foo' as 'a', and 1 as 'b'
  static getSomething() {
    // ...
  }
}
```

## Controller Decorators

### `@prefix` decorator

`@prefix(p: string)` decorator used to prepend a sub-path to the endpoint. It's usage is optional.

### `@get`, `@post`, `@put`, `@patch`, `@del`, `@head`, `@options`

`@HTTP_METHOD(p: string, opts?: { cors?: boolean, headers?: Record<string, string> })` decorator define an HTTP method and an endpoint that's handled by the Controller method.

### `@get.auto`, `@post.auto`, `@put.auto`...

`@HTTP_METHOD.auto(opts?: { cors?: boolean, headers?: Record<string, string> })` define HTTP method and generate endpoint string automatically from controller and method name.

```ts
import { prefix, get, post, put, patch, del, head, options } from 'vovk';

@prefix('hello')
export default class HelloController {
    @get('world', { cors: true })
    static getHelloWorld() {
        return { hello: 'world' };
    }

    @post.auto({ headers: { 'x-hello': 'world' }})
    static postData(/* req: VovkRequest */) {
        return { success: true };
    }
}
```

## `worker` decorator

Defines required `onmessage` handler for a [WPC Class](./worker).

```ts
// /src/modules/hello/HelloWorker.ts
import { worker } from 'vovk';

@worker()
export default class HelloWorker {
    static heavyCalculation() {
        // ...
    }
}
```

### Enums

```ts
import { HttpMethod, HttpStatus, HttpException } from 'vovk';
```

#### `HttpMethod` enum

Can be used with your code to create a [custom fetcher](./customization).

```ts
export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
  HEAD = 'HEAD',
  OPTIONS = 'OPTIONS',
}
```

#### `HttpStatus` enum

Used to throw and catch errors thrown by the server. Notice `NULL` member. It can be used to simulate HTTP errors on client validation errors (this approach is used at [vovk-zod](https://github.com/finom/vovk-zod)).

```ts
export enum HttpStatus {
  NULL = 0,
  CONTINUE = 100,
  SWITCHING_PROTOCOLS = 101,
  PROCESSING = 102,
  EARLYHINTS = 103,
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NON_AUTHORITATIVE_INFORMATION = 203,
  NO_CONTENT = 204,
  RESET_CONTENT = 205,
  PARTIAL_CONTENT = 206,
  AMBIGUOUS = 300,
  MOVED_PERMANENTLY = 301,
  FOUND = 302,
  SEE_OTHER = 303,
  NOT_MODIFIED = 304,
  TEMPORARY_REDIRECT = 307,
  PERMANENT_REDIRECT = 308,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  PAYMENT_REQUIRED = 402,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  NOT_ACCEPTABLE = 406,
  PROXY_AUTHENTICATION_REQUIRED = 407,
  REQUEST_TIMEOUT = 408,
  CONFLICT = 409,
  GONE = 410,
  LENGTH_REQUIRED = 411,
  PRECONDITION_FAILED = 412,
  PAYLOAD_TOO_LARGE = 413,
  URI_TOO_LONG = 414,
  UNSUPPORTED_MEDIA_TYPE = 415,
  REQUESTED_RANGE_NOT_SATISFIABLE = 416,
  EXPECTATION_FAILED = 417,
  I_AM_A_TEAPOT = 418,
  MISDIRECTED = 421,
  UNPROCESSABLE_ENTITY = 422,
  FAILED_DEPENDENCY = 424,
  PRECONDITION_REQUIRED = 428,
  TOO_MANY_REQUESTS = 429,
  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
  HTTP_VERSION_NOT_SUPPORTED = 505,
}
```

## Classes

### `HttpException` class

Used to throw HTTP errors on server-side and re-throw, simulate and handle HTTP errors on client-side. The instance provides 2 properties: `statusCode` and `message`.

Server-side:

```ts
// /src/modules/hello/HelloController.tsx
// ...
export default class HelloController {
    @get()
    static getHello() {
        if(/* ... */) {
            throw new HttpException(HttpStatus.BAD_REQUEST, 'Something went wrong'); 
        }
    }
}
```

Client-side:

```ts
// /src/modules/hello/HelloState.ts
import { HelloController } from 'vovk-client';

export async function getHello() {
    try {
        return await HelloController.getHello();
    } catch (e) {
        console.log(e instanceof HttpException);
        const err = e as HttpException;
        console.log(err.statusCode, err.message);
    }
}
```

### StreamResponse

`StreamResponse<T>(init?: ResponseInit)` class can be used as an alternative to generators to implement response streaming. Instances of this class provide the following methods:

- `send(data: T)` - sends portion of data
- `close()` - close the connection
- `throw(error: any)` - throws an error on client-side and closes the connection


```ts
import { prefix, get, StreamResponse, type VovkRequest } from 'vovk';

type Token = { message: string };

@prefix('stream')
export default class StreamController {
  @get('tokens')
  static async streamTokens() {
    const resp = new StreamResponse<Token>();

    void (async () => {
      const tokens: Token[] = [
        { message: 'Hello,' },
        { message: ' World' },
        { message: '!' },
      ];

      for (const token of tokens) {
        await new Promise((resolve) => setTimeout(resolve, 300));
        if(somethingWentWrong) {
          resp.throw(new Error('Somethiing went wrong'));
        }
        resp.send(token);
      }

      resp.close();
    });

    return resp;
  }
}
```


The class also provides static property `defaultHeaders` that contains the standard headers for the keep-alive connections. Since `StreamResponse` accepts standard `ResponseInit` as options argument you can override default headers and optionally spread `StreamResponse.defaultHeaders`.

```ts
const resp = new StreamResponse<Token>({
  headers: {
    ...StreamResponse.defaultHeaders,
    'x-hello': 'world',
  }
});
```

## Core types

### `VovkClientFetcher` and `VovkDefaultFetcherOptions` types

Used to redefine the default fetcher. See [customization docs](./customization).

### `VovkConfig` type

Defines config types.

```ts
// /vovk.config.js
/** @type {import('vovk').VovkConfig} */
const vovkConfig = {
  // ...
}

module.exports = vovkConfig;
```

For more info check [customization docs](./customization).

### `VovkEnv` type

Defines Vovk.ts env variable types.

For more info check [customization docs](./customization).

### `VovkMetadata` type

Defines format for **.vovk.json**

### `VovkErrorResponse` type

Original shape of an object returned from the server when an error is thrown.

## Controller Types

### `VovkRequest` type

The type is used to define types for `req.json` and `req.nextUrl.searchParams.get` and allow to infer types in other environments.

```ts
// /src/modules/hello/HelloController.ts 
import { get, type VovkRequest } from 'vovk';

export class HelloController {
    @get(':someParam')
    static doSomething(
        req: VovkRequest<{ body: true }, { q: string }>, 
        { someParam }: { someParam: string }
    ) {
        const body = await req.body(); // { body: true }
        const q = req.nextUrl.searchParams.get('q'); // string
        const nope = req.nextUrl.searchParams.get('nope'); // never
        // ...
        return { success: true };
    }
}
```

### `VovkControllerBody` type

Extracts request body type from a controller method.

### `VovkControllerQuery` type

Extracts query (search params) type from a controller method.

### `VovkControllerParams` type

Extracts params type from a controller method.

### `VovkControllerReturnType` type

Extracts return type from a controller method and unwraps the promise.

### `VovkControllerYieldType` type

Extracts yield type from a controller method implemented as a generator.

```ts
// /src/modules/hello/HelloState.ts
import {
  get,
  type VovkControllerBody, 
  type VovkControllerQuery, 
  type VovkControllerParams, 
  type VovkControllerReturnType, 
  type VovkControllerYieldType 
} from 'vovk';

export class HelloController {
    @get(':someParam')
    static doSomething(/* ... */) {
        // ...
    }

    static *generator(/* ... */)
}

type DoSomethingBody = VovkControllerBody<typeof HelloController.doSomething>;
type DoSomethingQuery = VovkControllerQuery<typeof HelloController.doSomething>;
type DoSomethingParams = VovkControllerParams<typeof HelloController.doSomething>;
type DoSomethingReturnType = VovkControllerReturnType<typeof HelloController.doSomething>;
type GeneratorYieldtype = VovkControllerYieldType<typeof HelloController.generator>;
```


## Types for the Client

### `VovkBody` type

Extracts request body type from a clientized controller method.

### `VovkQuery` type

Extracts query (search params) type from a clientized controller method.

### `VovkParams` type

Extracts params type from a clientized controller method.

### `VovkReturnType` type

Extracts return type from a clientized controller method and unwraps the promise.

### `VovkYieldType` type

Extracts yield type from a clientized generator controller method.


```ts
import { HelloController } from 'vovk-client';

type DoSomethingBody = VovkBody<typeof HelloController.doSomething>;
type DoSomethingQuery = VovkQuery<typeof HelloController.doSomething>;
type DoSomethingParams = VovkParams<typeof HelloController.doSomething>;
type DoSomethingReturnType = VovkReturnType<typeof HelloController.doSomething>;
type GeneratorYieldtype = VovkYieldType<typeof HelloController.generator>;
```

### `VovkClientOptions` type

Type that used internally and exposed to customize the client. See [decorators documentation](./decorators).

## Misc

### `generateStaticAPI`

`generateStaticAPI(controllers: Record<string, Function>, slug?: string)` is used to generate static endpoints with [generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params) at build time instead of on-demand at request time. It can be used in a [Static Export mode](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports) with the `output: 'export'` Next.js config setting:


```ts
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
};

module.exports = nextConfig;
```

To utilise this feature return `generateStaticAPI` results from `generateStaticParams` function.

```ts
// /src/app/api/[[...vovk]]/route.ts
// ...
export type Controllers = typeof controllers;
export type Workers = typeof workers;

export function generateStaticParams() {
  return generateStaticAPI(controllers);
}

export const { GET } = initVovk({ controllers, workers });
```

In order to make it work on a static website hosting like Github Pages, you may need to define `.json` extension in your endpoint definition to make it return proper HTTP headers.

```ts
import { get, prefix } from 'vovk';

@prefix('hello')
export default class HelloController {
  @get('greeting.json')
  static async getHello() {
    return { greeting: 'Hello world!' };
  }
}
```

As result you're going to get an endpoint that looks like that: [https://vovk.dev/api/hello/greeting.json](https://vovk.dev/api/hello/greeting.json).

In case if you use custom slug (e.g. `/src/app/api/[[...custom]]/route.ts`) instead of **vovk** you can provide it as second argument.

```ts
export function generateStaticParams() {
  return generateStaticAPI(controllers, 'custom');
}
```