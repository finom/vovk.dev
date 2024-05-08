# CLI

## `vovk dev`

Runs Vovk Metadata Server and `next dev` in parallel. Next.js dev server will send information about controllers and worker services to the Metadata Server to build **.vovk.json** and **node_modules/.vovk** files. Please check [How it Works](./how-it-works) for more info.

`vovk dev` supports `--no-next-dev` flag that indicates that it shouldn't run `next dev`. This is useful in case if you want to take control over `next dev` and run it by yourself with [concurrently](https://www.npmjs.com/package/concurrently) or similar library. At this case it is required to set `PORT` env variable explicitly.

```sh
PORT=4000 concurrently 'vovk dev --no-next-dev' 'next dev' --kill-others
```

To devine Vovk Metadata Server port you can use `VOVK_PORT` variable.

For `vovk dev` all flags that come after ` -- ` are passed directly to `next dev` as is, if `--no-next-dev` is not given.

```sh
npx vovk dev --clientOut=my-custom-folder -- --experimental-https --keepAliveTimeout 70000
```

## `vovk generate`

Generates the client based on **.vovk.json** and creates **.js** and **.d.ts** files at **node_modules/.vovk** that are re-exported by **vovk-client**. **.vovk.json** is generated via `vovk dev`.

Both commands accept `--clientOut` flag that indicates where client needs to be generated.

```sh
npx vovk generate --clientOut=my-custom-folder
```

All other commands such as `next build` and `next start` remain the same since the project is a normal Next.js application.

## Available env variables

Environment variables allow to customize Vovk.ts behaviour by overriding configuration optionally defined at **vovk.config.js**. You can find more information about it at [Customization & Configuration page](./customization) of this documentation. Here is a quick ref:

- `PORT=3000` - defines port for Next.js server that is also used by the Metadata Server to ping Next.js server (relevant for `vovk dev` only).
- `VOVK_PORT=3690` - An optional Vovk Metadata Server port (relevant for `vovk dev` only).
- `VOVK_CLIENT_OUT=./node_modules/.vovk` - where the client needs to be compiled to.
- `VOVK_ROUTE=./src/app/api/[[...vovk]]/route.ts` - allows to redefine path to the wildcard route.
- `VOVK_FETCHER=vovk/client/defaultFetcher` - allows to customize the fetching function that used internally by the client.
- `VOVK_PREFIX=/api` - defines the root endpoint used by `fetch` function at the client.
- `VOVK_VALIDATE_ON_CLIENT` - defines client-side validation library. If [vovk-zod](https://github.com/finom/vovk-zod) is installed but `VOVK_VALIDATE_ON_CLIENT` is not redefined it's value going to be defined as `vovk-zod/zodValidateOnClient`.