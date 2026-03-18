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

---
---
---

# Vovk.ts Discord

> This is your own community — people here already know what Vovk.ts is. Be celebratory, speak directly, highlight what's changed.

---

@everyone

**Vovk.ts is officially released!** 🐺

After nearly three years of development and a few early previews along the way, the framework is ready for a proper introduction. Here's what's shipping:

- In-place procedure validation with Zod, Valibot, or ArkType — no separate contracts
- Auto-generated type-safe RPC clients with jump-to-definition and JSDoc
- OpenAPI 3.1 generation with Scalar-compatible docs
- Per-segment serverless compilation with independent runtime config
- Local procedure execution via `.fn()` for SSR/PPR/background jobs
- JSON Lines streaming with `async function*` generators
- AI tool derivation and MCP server support via `deriveTools()`
- Third-party API mixins — import external OpenAPI specs as typed client modules
- Experimental Python and Rust client generation
- Multitenancy with built-in subdomain routing

📝 Read the full announcement: https://vovk.dev/blog/announcement
📖 Get started: https://vovk.dev/quick-install
🐙 GitHub: https://github.com/finom/vovk

If you've been following the project, thank you — your feedback shaped a lot of these decisions. If you're new here, welcome! Feel free to ask anything.

---
---
---

# Twitter / X (@vovaborisov or Vovk.ts account)

> Option A: Single tweet (concise, links to blog post)

Vovk.ts is officially released.

A back-end framework native to Next.js App Router — controllers, type-safe RPC clients, OpenAPI specs, and AI tool definitions from a single source of truth.

Nearly 3 years in the making.

📖 https://vovk.dev/blog/announcement
🐙 https://github.com/finom/vovk

---

> Option B: Short thread (more detail, better engagement)

**Tweet 1:**
Vovk.ts is officially released 🐺

A back-end framework built natively on Next.js App Router. Define endpoints once — get type-safe clients, OpenAPI docs, and AI tools automatically.

Nearly 3 years in the making. Here's the quick version ↓

**Tweet 2:**
Write a controller with Zod validation. The CLI generates a typed RPC client that mirrors it exactly.

Same procedure runs locally via `.fn()` for SSR — no HTTP round-trip.

Same procedure is derivable as an LLM tool / MCP server endpoint in one call.

**Tweet 3:**
It's not a replacement for tRPC, ts-rest, or NestJS — they're great tools that shaped how I think about this space.

Vovk.ts combines their ideas natively within the App Router, without a separate server, shared contract, or non-standard wire protocol.

**Tweet 4:**
📖 Docs: https://vovk.dev
🐙 GitHub: https://github.com/finom/vovk
📝 Full announcement: https://vovk.dev/blog/announcement

Would love to hear what you think.
