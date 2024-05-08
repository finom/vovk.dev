---
sidebar_position: 7
---

# Customization & Configuration

## vovk.config.js

The config file allows to change default options in order to customise generated client or its path. The default config looks like that: 

```ts
/** @type {import('vovk').VovkConfig} */
const vovkConfig = {
    clientOut: './node_modules/.vovk',
    route: './src/app/api/[[...vovk]]/route.ts',
    fetcher: 'vovk/client/defaultFetcher',
    prefix: '/api',
    validateOnClient: '',
};

module.exports = vovkConfig;
```

- `clientOut` - where the client is going to be compiled to. Can be overriden by `VOVK_CLIENT_OUT` env variable.
- `route` - allows to redefine path to the wildcard route (the slug can be any non-empty string, it's name is not utilised by Vovk.ts). Can be overriden by `VOVK_ROUTE` env variable.
- `fetcher` - allows to customize the fetching function that used internally by the client. Can be overriden by `VOVK_FETCHER` env variable. See the next section for more info. 
- `prefix` - defines the root endpoint used by `fetch` function at the client. Can be overriden by `VOVK_PREFIX` env variable.
- `validateOnClient` - defines client-side validation library. If [vovk-zod](https://github.com/finom/vovk-zod) is installed but `validateOnClient` is not redefined it's value going to get value `vovk-zod/zodValidateOnClient`. Can be overriden by `VOVK_VALIDATE_ON_CLIENT` env variable.

The config can be also defined as **vovk.config.cjs** but also as an ES Module named **vovk.config.mjs**:

```ts
/** @type {import('vovk').VovkConfig} */
const vovkConfig = {
    // ...
};

export default vovkConfig;
```

## Customizing fetcher and default client options

You can redefine the default fetching function and its options to tightly integrate Vovk.ts client with your application state or to add extra features. For example, the clientized controller methods may look like that:

```ts
import { UserController } from 'vovk-client';

// ...

UserController.createUser({ 
    body,
    query,
    successToast: 'Successfully created a new user',
    useAuth: true,
    sentryLogErrors: true,
});
```

The fetcher is defined as a default export that extends `VovkClientFetcher` type and should be listed either as config option:

```ts
/** @type {import('vovk').VovkConfig} */
const vovkConfig = {
    fetcher: './src/lib/myFetchingFunction',
};

module.exports = vovkConfig;
```

Or as `VOVK_FETCHER` env variable:

```sh
VOVK_FETCHER="./src/lib/myFetchingFunction" vovk dev
```

By default Vovk.ts uses fetcher defined at `vovk/client/defaultFetcher` and you can check its source code [here](https://github.com/finom/vovk/blob/main/src/client/defaultFetcher.ts). 

The fetcher accepts two arguments: 
- An object that is provided by internal Vovk.ts code that includes HTTP method information and utilities:
    - `httpMethod` - the HTTP metod;
    - `getEndpoint` - an utility that builds request endpoiint from `prefix`, `query` and `params`;
    - `validate` - a function that validates `body` and `query` of the request;
    - `defaultHandler` - handles the `Response` object returned from `fetch` function;
    - `defaultStreamHandler` - handles the `Response` object returned from `fetch` function in case of a stream.
- Request arguments:
    - `params` - the patams such as `id` from `users/:id`;
    - `query` - the search query properties such as `?foo=bar`;
    - `body` - the request body;
    - `prefix` - what's defined as `prefix` property at **vovk.config.js** or passed directly to the client method;
    - The rest options - your custom options and `RequestInit` (including [custom Next.js options](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating)) that includes the rest `fetch` options such as `headers`, `credentials` etc.

Your custom fetcher with a custom option `successMessage` may look like that:

```ts
import type { VovkDefaultFetcherOptions, VovkClientFetcher } from 'vovk';

// in order to keep default features such as disableClientValidation, headers etc,
// it's recommended to extend custom options from VovkDefaultFetcherOptions
interface MyOptions extends VovkDefaultFetcherOptions {
    successMessage: string;
}

const myCustomFetcher: VovkClientFetcher<MyOptions> = async (
  { httpMethod, getEndpoint, validate, defaultHandler, defaultStreamHandler },
  { params, query, body, prefix = '/api', successMessage, ...options }
) => {
  // 1. Build the endpoint
  const endpoint = getEndpoint({ prefix, params, query });

  // 2. Validate
  if (!options.disableClientValidation) {
    await validate({ body, query });
  }

  // 3. Make fetch request (here you can add authorisation headers)
  const response = await fetch(endpoint, {
    method: httpMethod,
    body: JSON.stringify(body),
    ...options,
  });

  // 4. Utilise your custom option somehow
  alert(successMessage);

  // 5. Handle response based on response headers
  if (response.headers.get('content-type')?.includes('application/json')) {
    return defaultHandler(response);
  }

  if (response.headers.get('content-type')?.includes('text/event-stream')) {
    return defaultStreamHandler(response);
  }

  return response;
};

export default myCustomFetcher;
```

As you can see the code determines response type by `content-type` header. You can freely redefine this logic to make the fetcher return something else.

```ts
if (response.headers.get('content-type')?.includes('application/json')) {
  return yourCustomHandler(response);
}
```

In case if the server endpoint and `yourCustomHandler` return different values, you can redefine its type using client method generic.

```ts
import { MyController } from 'vovk-client';

// ...

const result = MyController.myMethod<{ foo: 'bar' }>({
  body,
  successMessage: 'Success!'
})
```

The `result` variable from this example is going to receive `{ foo: 'bar' }` type.


## Creating a custom validation library

If you need to create your custom validation library, check [decorators documentation](./decorators).