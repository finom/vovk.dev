---
sidebar_position: 0
---

# Getting Started

## Quick install

Setup Vovk.ts with [create-next-app](https://www.npmjs.com/package/create-next-app).

```
npx create-next-app -e https://github.com/finom/vovk-hello-world
```

Inside the project folder run `npm run dev` and open [http://localhost:3000](http://localhost:3000).

## Manual install

### 1. Create Next.js project with App Router, install Vovk.ts and Concurrently

Follow [this instruction](https://nextjs.org/docs/getting-started/installation) to install Next.js. Use TypeScript, App Router and `src/` directory.

```
npx create-next-app
```

Choices example:

![](https://github.com/finom/vovk/assets/1082083/b9e600da-a43a-4e30-a089-43e5e4b147ef)


At the newly created folder run:

```
npm i vovk vovk-client
```
or
```
yarn add vovk vovk-client
```

Then install concurrently, the recommended way to run Vovk.ts and Next.js together.

```
npm i concurrently --save-dev
```
or
```
yarn add concurrently --dev
```

### 2. Enable decorators

In your **tsconfig.json** set `"experimentalDecorators"` to `true`.

```json
{
    "compilerOptions": {
        "experimentalDecorators": true,
        // ...
    }
}
```

### 3. Set up Next.js wildcard route handler and export types read by the client library

Create file **/src/app/api/[[...vovk]]/route.ts** where **[[...vovk]]** is a folder name insicating what Next.js documentation calls ["Optional Catch-all Segment"](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#optional-catch-all-segments) that [can be customized](./customization). This is the core entry point for all **Vovk.ts** routes.

```ts
// /src/app/api/[[...vovk]]/route.ts
import { initVovk } from 'vovk';

export const runtime = 'edge';

const controllers = {};
const workers = {};

// export types used by the client
export type Controllers = typeof controllers;
export type Workers = typeof workers;

export const { GET, POST, PUT, DELETE } = initVovk({ controllers, workers });
```

Enabling Edge Runtime is optional.


### 4. Create first controller and add it to the controller object

Create `HelloController.ts` at **/src/modules/hello/** with same-named static class. 

```ts
// /src/modules/hello/HelloController.ts
import { get, prefix } from "vovk";

@prefix('hello') // prefix is optional
export default class HelloController {
    @get('greeting')
    static getHello() {
        return { greeting: 'Hello world!' };
    }
}
```

And add this class at **/src/app/api/[[...vovk]]/route.ts** to the `controllers` object.

```ts
// /src/app/api/[[...vovk]]/route.ts
import HelloController from '../../../modules/hello/HelloController';

// ...
const controllers = { HelloController };
// ...
```

The code above creates GET endpoint to `/api/hello/greeting`. You can also use named export for the controller if needed.

## Create a React component and run `vovk dev` and `next dev` with Concurrently

Create an NPM script in **package.json** that runs `vovk dev` and `next dev` together specifying the port explicitly. Vovk.ts Server requires to know the port.

```json
"scripts": {
    "dev": "PORT=3000 concurrently 'vovk dev' 'next dev' --kill-others"
}
```

Once you run `npx run dev` you're going to notice the new file **.vovk.json** created in the root of your project. This file contains required information to build the client and it needs to be committed. It's going to be updated automatically when your project structure is changed. Open [http://localhost:3000](http://localhost:3000).

Alternatively, you can use use built-in concurrently-like process runner to run both servers and assign ports automatically.

```
npx vovk dev --next-dev
```

Besides **.vovk.json** the command also generates client **.js** and **.ts** files inside **node_modules/.vovk** that are re-exported by **vovk-client** module to produce no errors if **vovk-client** is not installed. This approach is borrowed from Prisma ORM.

Now the client is generated you can safely import your client library from **vovk-client**.

```tsx
'use client';
import { useState } from 'react';
import { HelloController } from 'vovk-client';
import type { VovkReturnType } from 'vovk';

export default function MyComponent() {
  const [serverResponse, setServerResponse] = useState<VovkReturnType<typeof HelloController.getHello>>();

  return (
    <>
      <button
        onClick={async () => {
          const response = await HelloController.getHello();
          setServerResponse(response);
        }}
      >
        Get Greeting from Server
      </button>
      <div>{serverResponse?.greeting}</div>
    </>
  );
}
```

Note that if you're using VSCode you're probably going to need to [restart TS server](https://stackoverflow.com/questions/64454845/where-is-vscodes-restart-ts-server) each time when you add a new controller or worker service to your app because by the time being TS Server doesn't update types imported from **node_modules** automatically when they were changed. This is a well-known problem that bothers Prisma ORM developers for long time. In all other scenarios (when you add a new method, change body type, etc) you don't need to do that since TS server reads `Controllers` and `Workers` that you export from **/src/app/api/[[...vovk]]/route.ts**.

Next.js Server Components are also supported but require to define absolute URL (by default all requests are made to `/api`). Check the [Server Component Example](https://vovk-examples.vercel.app/server-component) for more information.

Methods of the generated library have approximately the following signature:

```ts
interface Options extends Omit<RequestInit, 'body' | 'method'> {
  reactNative?: { textStreaming: boolean };
  prefix?: string;
  disableClientValidation?: boolean;
  body: VovkBody<typeof Controller.method>
  params: VovkParams<typeof Controller.method>
  query: VovkQuery<typeof Controller.method>
}
```

In other words it supports [custom Next.js options](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating) (Because Next.js extends `RequestInit` global type) as well as [React Native Fetch API](https://www.npmjs.com/package/react-native-fetch-api).

```ts
await HelloController.hello({
  body: { foo: 'bar' },
  next: { revalidate: 3600 },
});
```

## Build and deploy

Use the regular `npx next build` to build the project. If the client wasn't generated in **node_modules/.vovk** before, you going to get compilation errors if **vovk-client** was imported somewhere in the app. To re-generate client with existing **.vovk.json** without re-builing the project itself you need to run `npx vovk generate` that updates **node_modules/.vovk** folder on deployment or after you've reinstalled your **node_modules**. 

To easily build the project on Vercel you can create `"vercel-build"` npm script at **package.json** that is going to generate client before build.

```json
"scripts": {
    "vercel-build": "vovk generate && next build"
}
```

## Examples 

You can check more examples [here](https://vovk-examples.vercel.app/).