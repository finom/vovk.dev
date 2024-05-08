# Changelog

## v2.0.0
 
### Breaking changes

The version 1 is heavily tested in production and the community feedback is taken into account. Great news is that no significant bugs are found since then! The main purpose of breaking changes in this release is to make Vovk more consistent and easier to use.

- ✅ Renamed some types so that often used types are shorter and easier to type:
    - `VovkReturnType` -> `VovkControllerReturnType`
    - `VovkBody` -> `VovkControllerBody`
    - `VovkQuery` -> `VovkControllerQuery`
    - `VovkParams` -> `VovkControllerParams`
    - `VovkYieldType` -> `VovkControllerYieldType`
    - `VovkClientReturnType` -> `VovkReturnType`
    - `VovkClientBody` -> `VovkBody`
    - `VovkClientQuery` -> `VovkQuery`
    - `VovkClientParams` -> `VovkParams`
    - `VovkClientYieldType` -> `VovkYieldType`
- ✅ Replaced `--no-next-dev` flag with `--next-dev` flag in order to make it not run Next.js development server by default. In other words [concurrently](https://www.npmjs.com/package/concurrently) is now a recommended way to run Vovk and Next.js development servers together. This reduces potential problems with built-in command runner in Vovk.ts but also reduces very relevant confusion for new users.
    - Without Concurrently:
        - Before: `vovk dev`
        - After: `vovk dev --next-dev` - not recommended but can be useful in some cases.
    - With Concurrently:
        - Before: `PORT=3000 concurrently "vovk dev --no-next-dev" "next dev" --kill-others`
        - After: `PORT=3000 concurrently "vovk dev" "next dev" --kill-others` - this is the new recommended way to run Vovk and Next.js development servers together.
- ✅ Renamed `worker.use` to `worker.employ` to make it less confusing in React components.

### Other changes

- ✅ Due to logging updates in Next.js 14.2 Vovk.ts now watches controller and route files for changes instead of making ping request every 3 seconds and updates the client with debouncing. This requires to introduce two new config options:
    - `routeFile` (or `VOVK_ROUTE_FILE` environment variable) - path to the route file that equals to `./src/app/api/[[...vovk]]/route.ts` by default.
    - `watchDir` (or `VOVK_WATCH_DIR` environment variable) - path to the directory to watch for changes that equals to `./src` by default (it's recommended to set it to `./src/modules` or other folder where controllers are stored).
- ✅ `onError` option for `initVovk` now provides `req` object as the second argument. This allows to access request data in order to get more information such as URL, headers, cookies, authorisation, etc.

## v1.1.0

- ✅ Support .js, .cjs, .mjs extensions for Vovk Config
- ✅ Rebuild client automatically once Vovk Config is changed without restarting the server

## v1.0.0

- ✅ Generate client library automatically.
- ✅ Support Edge Runtime.
- ✅ Export `StreamResponse` class to use as a response pointer in Services and to implement streaming without generators syntax.
- ✅ Extract generator types.
- ✅ Implement disposable objects (`using` keyword) to close stream responses automatically.
