---
title: "Introducing Vovk.ts — A Back-End Framework Native to Next.js"
published: true
tags: nextjs, typescript, webdev, api
---

# Introducing Vovk.ts

After nearly three years of development, I'm releasing **Vovk.ts** — a back-end meta-framework built natively on top of Next.js App Router. It turns Route Handlers into a structured API layer with controllers, services, and procedures, and automatically generates type-safe RPC clients, OpenAPI specs, and AI tool definitions from your code.

If you've ever wanted the structured back-end experience of NestJS but without leaving the Next.js deployment model, this is what I've been building.

## The idea in 30 seconds

Define a controller with validation in-place:

```ts
@prefix("users")
export default class UserController {
  @get('{id}')
  static getUser = procedure({
    params: z.object({ id: z.string().uuid() }),
    output: z.object({ id: z.string(), name: z.string() }),
  }).handle(async (req, { id }) => {
    return UserService.getUser(id);
  });
}
```

The CLI generates a type-safe client that mirrors the controller:

```ts
import { UserRPC } from 'vovk-client';

const user = await UserRPC.getUser({ params: { id: '123' } });
```

The same procedure runs locally for SSR — no HTTP round-trip:

```ts
await UserController.getUser.fn({ params: { id: '123' } });
```

And it's derivable as an AI tool in one call:

```ts
const { tools } = deriveTools({ modules: { UserRPC, TaskController } });
// [{ name, description, parameters, execute }, ...]
```

That's one endpoint definition generating a typed client, an OpenAPI spec, a local execution path, and an LLM-callable tool.

## What it gives you

- **In-place validation** with Zod, Valibot, or ArkType — no separate contracts or DTOs
- **Auto-generated TypeScript clients** with jump-to-definition and JSDoc hover
- **OpenAPI 3.1 generation** with Scalar-compatible docs
- **Per-segment serverless compilation** — each `route.ts` is its own function with independent runtime config
- **Local procedure execution** via `.fn()` for SSR, PPR, and background jobs
- **JSON Lines streaming** with `async function*` generators
- **Third-party API mixins** — import external OpenAPI specs and get the same typed client interface
- **AI tool derivation** and MCP server support out of the box
- **Multi-language client generation** (experimental) for Python and Rust
- **Multitenancy** with built-in subdomain routing

## What makes it different

If you've used tRPC, ts-rest, NestJS, oRPC, Hono, or ElysiaJS, many of the ideas here will feel familiar. Each of those tools does something genuinely well, and the patterns they've established informed many of the design decisions in Vovk.ts.

Where Vovk.ts carves its own path is in combining these ideas natively within Next.js App Router: the Controller–Service architecture from NestJS, the type-safe clients from tRPC, the REST compliance and OpenAPI generation from ts-rest — without requiring a separate server process, a shared contract layer, or a non-standard wire protocol. On top of that, it adds things I couldn't find elsewhere: local procedure execution via `.fn()` and built-in AI tool derivation for LLM agents and MCP servers.

It's not the right tool for every situation — if you're not on Next.js, or if you prefer a contract-first workflow, other options will serve you better. But if you're building a structured API layer on top of the App Router and want all of the above from a single source of truth, I think you'll enjoy it.

## Get started

```bash
npx vovk-cli@latest init
```

📖 [Documentation](https://vovk.dev/quick-install) · 🐙 [GitHub](https://github.com/finom/vovk) · 📝 [Full announcement with more code examples](https://vovk.dev/blog/announcement)

I'd love to hear how your experience compares — what tools are you using for your Next.js API layer, and what's working (or not) for you?
