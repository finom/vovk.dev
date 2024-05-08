---
sidebar_position: 4
---

# Project Structure

This page explains how you could structure an application introducing a framework that you can optionally apply to a large project that uses Vovk.ts.

The framework combines back-end and front-end code into one code base. The logical parts of the app are split into folders called "modules" given them corresponding name such as user, post, comment, app settings, auth features etc. Besically, a module can belong to 2 categories:

1. An entity (a model) like "user" ("post", "comment" etc) requires to put all or most of the user code into "user" folder.
1. Anything what doesn't belong to some specific entity: app settings, auth, AI stuff... 

The typical structure of files and folders in a Vovk.ts app would look like that:

```
/src/modules
    /app
        /AppState.ts
        /AppWorkerService.ts
    /auth
        /AuthState.ts
        /AuthService.ts
        /AuthController.ts
    /hello
        /HelloState.ts
        /HelloService.ts
        /HelloIsomorphicService.ts
        /HelloWorkerService.ts
        /HelloState.ts
    /user
        /UserState.ts
        /UserService.ts
        /UserController.ts
        /UserIsomorphicService.ts
    /post
        /PostState.ts
        /PostService.ts
        /PostIsomorphicService.ts
        /PostController.ts
    /comment
        /CommentState.ts
        /CommentService.ts
        /CommentController.ts
```

Every item in a module folder (Service Class, Controller Class, state etc) is optional. Some parts of your app would require to have state only, but no controller. In another case you can have a state and a controller, but database request in your controller is too simple to move it to a service...

The image below illustrates how different components of the application can be related to each other.

![Vovk Framework](/img/vovk-framework.svg)

## Controller Class

Controller Class is a static class that defines API endpoints. It can use Back-End Service Classes and Isomorphic Service Classes explained below.

```ts
// /src/modules/post/PostController.ts
import { prefix, get } from 'vovk';
import PostService from './PostService';

@prefix('post')
export default class PostController {    
    @get()
    static getPosts() {
        return PostService.getPosts();
    }
}
```

Decorators created with `createDecorator` make possible to validate request, throw errors, redirect, or return something different to the client.

```ts
// /src/modules/post/PostController.ts
import { prefix, get, type VovkRequest } from 'vovk';
import vovkZod from 'vovk-zod';
import { z } from 'zod';
import { authGuard } from '../../decorators';
import PostService from './PostService';

@prefix('post')
export default class PostController {    
    @put(':postId')
    @authGuard()
    @vovkZod(
        z.object({
            title: z.string()
            content: z.string(),
        }).strict(),
        z.object({
            moderationType: z.string(),
        }).strict()
    )
    static updatePost(
        req: VovkRequest<{ title: string; content: string; }, { moderationType: 'nice' | 'strict' }>, 
        { postId }: { postId: string }
    ) {
        const { title, content } = req.json();
        const moderationType = req.nextUrl.searchParams.get('moderationType');
        return PostService.updatePost(postId, title, content, moderationType);
    }
}
```

Let's break down the example above that implements PUT endpoint that looks like that: `/api/post/69?moderationType=nice`.

- `authGuard` is a custom decorator that may be created by you based on your authorisation environment.
- `vovkZod` that's imported from [vovk-zod](https://github.com/finom/vovk-zod) performs Zod validation of body and query both on server-side and client-side.
- `VovkRequest` generic partially re-defines `NextRequest` type and makes `req.json` as well as `req.nextUrl.searchParams.get` return proper types.
- `PostService.updatePost` is invoked with properly-typed arguments after authorisation check, body and query validation.

## Back-end Service Class

Back-end Service Class (or just "Service") is a static class that implements third-party API calls or performs requests do the project database. By design Services don't validate incoming data and play the role of back-end library.

```ts
// /src/modules/comment/CommentService.ts
import PostIsomorphicService from '../post/PostIsomorphicService';
import UserService from '../user/UserService';

export default class CommentService {
    static getAllUserComments(userId: User['id']) {
        const user = await UserService.getUserById(userId);
        // ... perform database request
        return // ...
    }
}
```


## Isomorphic Service Class

Isomorphic Service is very similar to a Back-end Service but can be used both by front-end (state, components, Worker Service Classes, hooks, other Isomorphic Service Classes, ...) and back-end (Back-End Services, Controllers, CLI scripts, ...). The only difference is that its methods need to be implemented as [pure functions](https://en.wikipedia.org/wiki/Pure_function). It means that it shouldn't perform DB calls nor access application state but can use other Isomorphic Service Classes. 

```ts
// /src/modules/comment/CommentIsomorphicService.ts
import PostIsomorphicService from '../post/PostIsomorphicService';

export default class CommentIsomorphicService {
    // a pure function
    static filterCommentsByPostId(comments: Comment[], posts: Post, postId: Post['id']) {
        // findPostById is also a pure function
        const post = PostIsomorphicService.findPostById(posts, postId);
        if(post.isDeleted) return [];
        return comments.filter((comment) => comment.postId === postId);
    }

    // ...
}
```


## Worker Service Class

Every Isomorphic Service Class can be turned into a Worker Service by applying `@worker()` decorator. The decorator defines required `onmessage` listeners if it's imported in a Web Worker environment. In other cases `@worker()` decorator does nothing and still can be used as an Isomorphic Service.

```ts
// /src/modules/hello/HelloWorkerService.ts
import { worker } from 'vovk';

@worker()
export default class HelloWorkerService {
    static performHeavyCalculations() {
        // ...
    }
}
```

The compiled interface can be imported from **vovk-client**.

```ts
// /src/app/page.tsx
import { HelloWorkerService } from 'vovk-client';

// ...
const onClick = useCallback(async () => {
    HelloWorker.use(new Worker(new URL('../modules/hello/HelloWorkerService.ts', import.meta.url)));

    const result = await worker.performHeavyCalculations();

    console.log('result', result);
}, []);
```

Worker Service Clases can use other Worker Services Classes, Isomorphic Service Classes and Back-End Controllers imported from **vovk-client**. For more info check documentation of [Worker Service Classes](./worker).

## State

State file contains application state code that is going to be imported by React Components and other state files. It can use Isomorphic Services, Worker Services and Controllers imported from **vovk-client**. State can be implemented with any application state library: Recoil, Redux, Redux Toolkit, MobX, custom context, or anything else since the framework does not cover state management topic.

```ts
// /src/modules/post/PostState.ts
import { PostController, PostWorkerService } from 'vovk-client';

// ... init app state for posts
```

## Other ideas

The framework isn't limited by the elements described above and you may want to add more files into your module folder.

- More Back-end Service Classes.
- More Isomorphic Service Classes.
- More Worker Service Classes.
- Tests.
- React Components that you want to categorise (`modules/hello/components/MyComponent.tsx`).
- Types (`modules/hello/HelloTypes.ts`).
- Anything else you can imagine.
