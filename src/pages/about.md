
# About

## Motivation

Next.js de facto became a standard framework for front-end React applications that includes SSR, HMR, ready-to-go router, bunch of loaders and many more other features out of the box. Unfortunately, to implement back-end capabilities a developer needs to use insufficient built-in API router that requires to create a lot of folders with **route.ts** file or use workarounds that implement custom protocols instead of using the well-known REST API. Vovk.ts attempts to fix this problem by implementing a wrapper over Next.js [Optional Catch-all Segment](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#optional-catch-all-segments) and automatically compiles a client-side TypeScript library that can be imported from **vovk-client** module. As a reference it uses auto-generated metadata file **.vovk.json** file from the root of the project that needs to be committed to re-generate the client library on deployment or when **node_modules** are reinstalled with `npx vovk generate`.

Vovk.ts uses standard APIs such as Fetch API and `Response` object to implement its features. It provides an easy to use library utilising built-in browser and Next.js APIs that you would use anyway with Next.js **route.ts** (including [redirect](https://nextjs.org/docs/app/building-your-application/routing/redirecting), [headers](https://nextjs.org/docs/app/api-reference/functions/headers#headers), [notFound](https://nextjs.org/docs/app/api-reference/functions/not-found#notfound), [req.formData](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#request-body-formdata) etc). If you're new to Next.js I recommend to check [Next.js App Router documentation](https://nextjs.org/docs/app/building-your-application/routing) first.

The project originally inspired by [NestJS](https://nestjs.com/) that is probably the best framework on the market for scaleable and complex back-end. The first step in Vovk.ts development (that wasn't even considered to be an open-sourced project back then) was an attempt to merge Next.js and NestJS thru Next.js middleware. This attempt wasn't successful and the decision was to build similar project from scratch using the Optional Catch-all Segment utilising the most important features of NestJS: classes, decorators and the service-controller pattern. At the same time the Angular-like features such as dependency injection and the way to define modules looked redundant since they weren't useful in practice (even the best tools can be simpler). 

The library also provides [Web Worker interface](./worker) utilising the same approach with the metadata file to generate main-thread library for heavy in-browser calculations to avoid glitches in the UI when it's applicable. Web Worker is a fantastic technology but it's not used widely because it requires a lot of effort to organise event listeners and `postMessage` calls. Vovk.ts attemtps to popularise this technology to make complex front-end applications to perform faster by moving part of the application logic to another thread where low-performant code is inavoidable.

## Features

- 👵 Good old REST API with no custom protocols.
- 🚢 Run full-stack Next.js application on one port avoiding monorepo hell.
- 🧐 Service-Controller-Repository pattern for the highest code quality.
- 🚄 Edge runtime is available out of the box.
- 🌿 Zero dependencies and light weight.
- 🤏 Generated client code is compact, it's just a wrapper over `fetch` function.
- 📦 Bundle and distribute production-ready client API library with Webpack, Rollup or another bundler.
- 🤝 Use standard Next.js API such as `Response`, `headers` or `redirect`, nothing is changed.
- 🧠 Easy to learn, only a few pages of documentation.
- 📱 Easily integrated with React Native.
- 🤖 Streaming for LLM apps with disposable async generators.
- 📄 Static API generation with [generateStaticAPI](./api#generatestaticapi)
- ⚙️ Web Worker interface for multi-threading in browser.
- 🏎️ Fast on client and on server.
- 🔧 Customizable.
- 🥰 TypeScript, TypeScript, TypeScript!