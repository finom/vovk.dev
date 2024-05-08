# Controller Class

## Controller definition

Controller is a static class that handles incoming HTTP requests. The methods of this class that are decorated with HTTP decorator accept 2 arguments: `NextRequest` that is not modified in any way by Vovk.ts itself and parameters that are defined by the decorator path. 

```ts
import type { NextRequest } from 'next';
import { prefix, put } from 'vovk';

@prefix('users')
export default class UserController {
    // Example request: PUT /api/users/69?role=moderator
    @put(':id') 
    static async updateUser(req: NextRequest, { id }: { id: string }) {
        const data = await req.json(); // any
        const userRole = req.nextUrl.searchParams.get('role'); // string | null
        // ...
        return updatedUser;
    }
}
```

At the example aboce `data` is casted as `any` and `userRole` is casted as `string | null`. To fix the body and query types Vovk.ts provides a new type `VovkRequest<BODY?, QUERY?>` that is extended from `NextRequest` where the first generic argument represents the type of value returned from `req.json` but also allows to define values returned from `req.nextUrl.searchParams.get`. `VovkRequest` also plays a crucial role in type inference when **vovk-client** is used. 

As its mentioned before, `req` object is an original `NextRequest` object that provided by Next.js as is without changing it, but other libraries (like [vovk-zod](https://github.com/finom/vovk-zod)) as well as your custom code can modify this object when needed (for example to add `currentUser` property defined by your [auth guard decorator](./decorators)).

To add the required body and query types just replace `NextRequest` by `VovkRequest`. Let's modify the abstract example above.

```ts
// /src/modules/user/UserController.ts
import { prefix, put, type VovkRequest } from 'vovk';
import type { User } from '../../types';

@prefix('users')
export default class UserController {
    // Example request: PUT /api/users/69?role=moderator
    @put(':id') 
    static async updateUser(
        req: VovkRequest<Partial<User>, 'user' | 'moderator' | 'admin'>, 
        { id }: { id: string }
    ) {
        const data = await req.json(); // Partial<User>
        const userRole = req.nextUrl.searchParams.get('role'); // 'user' | 'moderator' | 'admin'
        // ...
        return updatedUser;
    }
}
```

As you can see we've changed nothing more than the type of `req` but now `data` receives type of `Partial<User>` and `userRole` is casted as `'user' | 'moderator' | 'admin'` and does not extend `null` anymore.

## Client library

Once controller is defined it needs to be initialized at the wildcard route by adding it to the `controllers` object.

```ts
// /src/app/api/[[...vovk]]/route.ts
import { initVovk } from 'vovk';
import UserController from '../../../modules/user/UserController';

const controllers = { UserController };
const workers = {}; // See Worker documentation

export type Controllers = typeof controllers;
export type Workers = typeof workers;

export const { GET, POST, PUT, DELETE } = initVovk({ controllers, workers });
```

`initVovk` performs required actions to generate client-side library and no additional action from your side is required (but you probably would need to restart TS Server to update types if you use VSCode when a new controller is added).

The client library implements the same methods (in our case `updateUser`) but changes the method interface so you can pass required input data as options (`body`, `query` and `params`). **vovk-client** can be used in client components, server components, application state and even be distributed as a standalone package. For an illustration [vovk-examples](https://github.com/finom/vovk-examples) is published as a [standalone NPM package](https://www.npmjs.com/package/vovk-examples) to be used on [vovk.dev](https://vovk.dev) that, by itself, is a static website powered by gh-pages.

Everything exported from **vovk-client** is plain old JavaScript with typings that calls the regular `fetch` function.

```ts
import { UserController } from 'vovk-client';

// ...

const updatedUser = await UserController.updateUser({
    body: { firstName, lastName },
    query: { role: 'admin' },
    params: { id: '69' },
});

// same as
fetch('/api/users/69?role=admin', {
    method: 'PUT',
    body: JSON.stringify({ firstName, lastName }),
});
```

It's worthy to mention that client library [can be customised](./customization) in order to follow custom logic required by the application.

```ts
 await UserController.updateUser({
    // ...
    successMessage: 'Successfully created the user',
    someOtherCustomFlag: true,
});
```

## Return type

### Custom object

The decorated static methods of controllers can return several kinds of objects. The most common is a custom object. Let's say your controller method returns Prisma ORM invocation.

```ts
// ...
static async updateUser(/* ... */) {
    // ...
    const updatedUser = await prisma.user.update({
        where: { id },
        data,
    });

    return updatedUser;
}
// ...
```

At this case the returned value of client method `UserController.updateUser` is going to be recognised as `User` generated at **@prisma/client**.

### Response object

HTTP handlers can also return regular `Response` object, for example `NextResponse`. 

```ts
// ...
static async updateUser(/* ... */) {
    // ...
    return NextResponse.json(updatedUser, { status: 200 });
}
// ...
```

At this case client library wouldn't be able to properly recognise type of returned value but you can override the type manually by using generic argument that overrides the return type without need to convert it to `unknown` first.

```ts
import { UserController } from 'vovk-client';
import { User } from '../../types';

// ...

const updatedUser = await UserController.updateUser<User>(/* ... */);
```

### Async iterable

```ts
// ...
static async *updateUser(/* ... */) {
    // ...
    yield* iterable;
}
// ...
```

If iterable is returned, the client library is going to cast the method as async generator to implement response streaming. It's explained in more details below.

## Auto-generated endpoints

All HTTP decorators provide `.auto` method that generates endpoint name automatically from the method name.

```ts
// /src/modules/user/UserController.ts
import { prefix, put } from 'vovk';

@prefix('users')
export default class UserController {
    // Example request: PUT /api/users/do-something
    @put.auto() 
    static async doSomething(/* ... */) {
        // ...
    }
}
```

## Response headers

All HTTP decorators support custom response headers provided as the second argument.

```ts
// ...
export default class UserController {
    @put('do-something', { headers: { 'x-hello': 'world' } }) 
    static async doSomething(/* ... */) { /* ... */ }
}
```

To enable CORS instead of manually setting up headers you can use `cors: true` option.

```ts
// ...
export default class UserController {
    @put('do-something', { cors: true }) 
    static async doSomething(/* ... */) { /* ... */ }
}
```

For auto-generated endpoints `cors` and `headers` are defined as the only argument.


```ts
// ...
export default class UserController {
    @put.auto({ cors: true, headers: { 'x-hello': 'world' } }) 
    static async doSomething(/* ... */) { /* ... */ }
}
```

## Errors: `HttpException` class and `HttpStatus` enum

You can gracefully throw HTTP exceptions similarly to NestJS. `HttpException` class accepts 2 arguments. The first one is an HTTP code that can be retrieved from `HttpStatus`, the other one is an error text.

```ts
import { HttpException, HttpStatus } from 'vovk';

// ...
static async updateUser(/* ... */) {
    // ...
    throw new HttpException(HttpStatus.BAD_REQUEST, 'Something went wrong');
}
```

The errors are re-thrown at the client library with the same interface.

```ts
import { UserController } from 'vovk-client';
import { HttpException } from 'vovk';

// ...
try {
    const updatedUser = await UserController.updateUser(/* ... */);
} catch(e) {
    console.log(e instanceof HttpException); // true
    const err = e as HttpException;
    console.log(err.message, err.statusCode);
}

```

Regular errors such as `Error` are equivalent to `HttpException` with code `500`.

```ts
import { HttpException, HttpStatus } from 'vovk';

// ...
static async updateUser(/* ... */) {
    // ...
    throw new Error('Something went wrong'); // 500
}
```

You can also throw custom objects that are going to be re-thrown on the client-side as is.

```ts
throw { hello: 'World' };
```


## Service Class

In order to make the code cleaner it's recommended to move most of the logic to Back-end Services. [Back-End Service](./project-structure) is a static class that serves as a library that performs database and third-party API calls outside of Controller Classes.

Let's say you have the following Controller Class:

```ts
// /src/modules/user/UserController.ts
import { prefix, put, type VovkRequest } from 'vovk';
import type { User } from '../../types';

@prefix('users')
export default class UserController {
    @put(':id') 
    static async updateUser(req: VovkRequest<Partial<User>>, { id }: { id: string }) {
        const data = await req.json();

        const updatedUser = await prisma.user.update({
            where: { id },
            data,
        });

        return updatedUser;
    }
}
```

Currently it looks fine since it doesn't contain a lot of logic. But as your app is getting more complex you're going to get more handlers with more code. At this case it's recommended to move part of the logic to Back-End Service Class making controllers to be responsible for input extraction, validation and authorisation, but not for DB or API calls.

Let's refactor the code above by introducing `UserService`. For this example it's going to be small but I hope that illustrates the idea clearly.

```ts
// /src/modules/user/UserService.ts

// ... import types and libraries ...

export default class UserService {
    static updateUser(id: string, data: Partial<User>) {
        return prisma.user.update({
            where: { id },
            data,
        });
    }
}
```

As you can see, `UserService` does not use decorators and used as a library to perform side-effects.

```ts
// /src/modules/user/UserController.ts
import { prefix, put, type VovkRequest } from 'vovk';
import UserService from './UserService'

@prefix('users')
export default class UserController {
    @put(':id') 
    static async updateUser(req: VovkRequest<Partial<User>>, { id }: { id: string }) {
        const data = await req.json();
        return UserService.updateUser(id, data);
    }
}
```

Back-End Service Classes can inject other Back-End Services (as well as so-called Isomorphic Service Classes explained in [separate article of this documentation](./project-structure)).

```ts
// /src/modules/user/UserService.ts
import PostService from '../post/PostService';
import CommentService from '../comment/CommentService';
// ... other imports ...

export default class UserService {
    static async updateUser(id: string, data: Partial<User>) {
        const latestPost = PostService.findLatestUserPost(id);
        const latestPostComments = CommentService.findPostComments(latestPost.id);
        // ...
    }
}
```

## Streaming

Vovk.ts provides two ways to implement response streaming requred for applications that utilise the AI completions.

### Async iterators

Controller methods can implement generators that use `*` syntax and utilise `yield` keyword instead of regular `return`.

```ts
// /src/modules/stream/StreamController.ts
import { get, prefix } from 'vovk';

type Token = { message: string };

@prefix('stream')
export default class StreamController {
  @get('tokens')
  static async *streamTokens() {
    const tokens: Token[] = [
      { message: 'Hello,' },
      { message: ' World' },
      { message: '!' },
    ];

    for (const token of tokens) {
      await new Promise((resolve) => setTimeout(resolve, 300));
      yield token;
    }
  }
}
```

In order to refactor this code and utilise Back-end Service you can move the streaming logic to `StreamService` static class.

```ts
// /src/modules/stream/StreamService.ts
type Token = { message: string };

export default class StreamService {
  static async *streamTokens() {
    const tokens: Token[] = [
      { message: 'Hello,' },
      { message: ' World' },
      { message: '!' },
    ];

    for (const token of tokens) {
      await new Promise((resolve) => setTimeout(resolve, 300));
      yield token;
    }
  }
}
```

At the controller use `yield*` syntax to delegate iterable returned from `StreamService.streamTokens`.

```ts
import { get, prefix } from 'vovk';
import StreamService from './StreamService';

@prefix('stream')
export default class StreamController {
  @get('tokens')
  static async *streamTokens() {
    yield* StreamService.streamTokens();
  }
}
```

### StreamResponse

In some cases it's too hard to use generators to implement response streaming. Vovk.ts introduces `StreamResponse` class inherited from `Response` class that uses `TransformStream#readable` as body and adds required HTTP headers. It's a lower-level API that is used behind the scenes to implement generator logic explained above. `StreamResponse` is useful when your service method is implemented a regular function that accepts `StreamResponse` instance as a pointer to send messages manually.

There is what the streaming service might look like:

```ts
// /src/modules/stream/StreamService.ts
import type { StreamResponse } from 'vovk';

export type Token = { message: string };

export default class StreamService {
  static async streamTokens(resp: StreamResponse<Token>) {
    const tokens: Token[] = [
      { message: 'Hello,' },
      { message: ' World' },
      { message: '!' },
    ];

    for (const token of tokens) {
      await new Promise((resolve) => setTimeout(resolve, 300));
      resp.send(token);
    }

    resp.close();
  }
}
```

As you can see tokens are sent using `StreamResponse#send` method and, when the stream is completed, it needs to be closed with `StreamResponse#close`.

The Controller Class returns an instance of `StreamResponse` and the streaming is performed a floating Promise above the `return` statement.

```ts
import { prefix, get, StreamResponse, type VovkRequest } from 'vovk';
import StreamService, { type Token } from './StreamService';

@prefix('stream')
export default class StreamController {
  @get('tokens')
  static async streamTokens() {
    const resp = new StreamResponse<Token>();

    void StreamService.streamTokens(resp);

    return resp;
  }
}
```

`StreamResponse` class also provides `throw` methods that safely closes the stream and makes the client to re-throw the received error.

```ts
await resp.close();

await resp.throw(new Error('Stream error'));
```

### Handling Stream Responses on the Client

Both ways of response streaming generate client method that returns a disposable async generator. 

```ts
import { StreamController } from 'vovk-client';

{
    using stream = await StreamController.streamTokens();

    for await (const token of stream) {
        console.log(token);
    }
}
```

`using` keyword (that you can freely replace by `let` or `const`) indicates that when code block is reached the end (in case of early `break` or if the code block encountered an error) the stream is going to be closed by invoking `stream.close()` method automatically. `stream.close()` can also be called explicitly if needed.

To make sure that the stream is closed before moving to the next code block you can use `await using` syntax that disposes the stream asynchronous way.

```ts
import { StreamController } from 'vovk-client';

{
    await using stream = await StreamController.streamTokens();
    // ...
}
// on this line stream is already closed
```

## Validation with vovk-zod

[vovk-zod](https://github.com/finom/vovk-zod) is a library that implements [Zod](https://zod.dev/) validation. It performs validation on the Controller with `ZodModel.parse`, [converts the Zod object to a JSON Schema](https://www.npmjs.com/package/zod-to-json-schema) that's stored at the metadata file, and runs validation with [Ajv](https://ajv.js.org/) on client before the request is made.

```ts
// /src/modules/user/UserController.ts
import vovkZod from 'vovk-zod';
import { z } from 'zod';
import { UpdateUserModel, UpdateUserQueryModel } from '../../zod';
// ... other imports ...

export default class UserController {
    @put(':id')
    @vovkZod(UpdateUserModel, UpdateUserQueryModel)
    static updateUser(
        req: VovkRequest<z.infer<typeof UpdateUserModel>, z.infer<typeof UpdateUserQueryModel>>
    ) {
        // ...
    }
}
```

To disable client-side validation you can pass `disableClientValidation: true` to the client method.

```ts
import { UserController } from 'vovk-client';

// ...
UserController.updateUser({
    // ...
    disableClientValidation: true,
})
```

`disableClientValidation` is mostly useful for debugging purposes to make sure that the server validation is properly functioning. In order to disable client validation completely (for example to hide validation logic from client-side so it doesn't appear in **.vovk.json**) you can set `exposeValidation: false` at `initVovk` function. 

```ts
// /src/app/api/[[...vovk]]/route.ts
// ...

export const { GET, POST, PUT, DELETE } = initVovk({ 
    controllers, 
    workers,
    exposeValidation: false,
});
```

## Type extraction

**vovk** module provides a collection of useful types that described in more details at [API documentation](./api). It's worthy to mention the most often used types here:

```ts
import { UserController, StreamController } from 'vovk-client';
import type { VovkBody, VovkQuery, VovkParams, VovkReturnType, VovkYieldType } from 'vovk';

// infer body
type Body = VovkBody<typeof UserController.updateUser>;
// infer query
type Query = VovkQuery<typeof UserController.updateUser>;
// infer params
type Params = VovkParams<typeof UserController.updateUser>;
// infer return type
type Return = VovkReturnType<typeof UserController.updateUser>;
// infer yield type from stream methods
type Yield = VovkYieldType<typeof StreamController.streamTokens>;
```

For example, if you want to create a custom function that makes requests to the server, you can borrow types from the client to build the arguments.

```ts
import { UserController } from 'vovk-client';
import type { VovkBody, VovkQuery } from 'vovk';

export function updateUser(
    id: VovkQuery<typeof UserController.updateUser>['id'],
    body: VovkBody<typeof UserController.updateUser>,
) {
    return UserController.updateUser({
        body,
        query: { id },
    });
}
```