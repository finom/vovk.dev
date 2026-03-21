# Next.js Discord

> Post in the appropriate showcase/projects channel. Keep it short — Discord messages that look like blog posts get scrolled past.

---

Hey all — I've been building a back-end framework on top of Next.js App Router for the past ~3 years and it's finally at a point where I'm happy to share it properly.

**Vovk.ts** adds a structured API layer to Route Handlers — you write controllers with decorators and Zod validation, and the CLI generates type-safe RPC clients, OpenAPI 3.1 specs, and AI tool definitions from the same code. Each segment compiles into its own serverless function, and every procedure has a `.fn()` method for local execution (SSR, PPR, background jobs — no HTTP round-trip).

Quick example — you write this:

```ts
export default class UserController {
  @get('{id}')
  static getUser = procedure({
    params: z.object({ id: z.string().uuid() }),
  }).handle(async (req, { id }) => {
    return UserService.getUser(id);
  });
}
```

And get a typed client:

```ts
const user = await UserRPC.getUser({ params: { id: '123' } });
```

📖 https://vovk.dev
🐙 https://github.com/finom/vovk

Would love to hear any feedback or questions!

