# Reddit post for /r/nextjs

## Title options (pick one):

1. I built a back-end framework that runs natively on Next.js App Router — controllers, type-safe clients, OpenAPI, and AI tools from a single source of truth
2. After ~3 years of work, I'm releasing Vovk.ts — a structured back-end layer for Next.js App Router
3. I wanted NestJS-style controllers in Next.js without leaving the App Router — so I built Vovk.ts

---

## Post body:

Hey everyone — I've been working on this for almost three years. I shared early previews a couple of years ago, but it wasn't really ready then. Now it is.

**Vovk.ts** is a back-end framework that sits on top of Next.js Route Handlers. The short version: you write controllers with decorators and validation (think NestJS but with static methods and Zod), and the CLI generates a type-safe RPC client, an OpenAPI spec, and AI tool definitions from the same code.

Here's what that looks like — you define a controller:

```ts
@prefix("users")
export default class UserController {
  @get('{id}')
  static getUser = procedure({
    params: z.object({ id: z.string().uuid() }),
  }).handle(async (req, { id }) => {
    return UserService.getUser(id);
  });
}
```

And the CLI generates a typed client:

```ts
import { UserRPC } from 'vovk-client';

const user = await UserRPC.getUser({ params: { id: '123' } });
```

The thing that bugged me about the existing options was always some trade-off: tRPC gives you type-safe clients but with a non-standard protocol. ts-rest gives you REST + OpenAPI but you maintain a separate contract alongside your handlers. NestJS has the architecture I love but runs its own server outside the Next.js deployment model. I wanted all of it in one place, native to the App Router.

A few things it does that I haven't seen elsewhere:

- Every procedure has a `.fn()` method that runs locally — same handler logic, no HTTP round-trip. Useful for SSR, PPR, background jobs.
- Controllers are automatically derivable as LLM tools / MCP server endpoints with `deriveTools()`.
- Each segment compiles into its own serverless function with the CLI aware of the segmentation for client generation.

It's not for everyone — if you're not on Next.js or you prefer contract-first, there are great tools for that. But if you're looking for a structured API layer on the App Router, give it a look.

📖 Docs: https://vovk.dev
🐙 GitHub: https://github.com/finom/vovk

Happy to answer any questions or hear what you're currently using for your API layer.
