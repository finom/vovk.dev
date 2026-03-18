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



----- 

https://claude.ai/chat/c49c7aae-aacc-4895-a05d-603de5f17cf8

A few tactical notes on your materials:
For Reddit, I'd go with title option 2 — "After ~3 years of work, I'm releasing Vovk.ts..." — it's honest and personal without being clickbait. r/nextjs is allergic to anything that reads like marketing.
For LinkedIn, your "lessons learned" framing is excellent — it's the strongest piece in the whole set. The Anders Hejlsberg story and the Copilot syntax discovery are memorable hooks.
For Habr, the technical depth (TypeScript inference challenges, performance benchmarks, Standard Schema migration) is exactly what the audience rewards. The Thursday timing gives you the full voting window through the weekend.
For Twitter, definitely use the thread (Option B) over the single tweet — threads get significantly more impressions, and each tweet in the chain is a natural engagement point.