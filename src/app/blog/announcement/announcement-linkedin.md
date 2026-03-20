# What three years of building a framework alone taught me

I just released Vovk.ts — a back-end framework for Next.js App Router that I've been building for nearly three years. It lets you write controllers with decorators and validation schemas, and the CLI generates type-safe RPC clients, OpenAPI specs, and AI tool definitions from the same code. Every procedure can run locally via `.fn()` for SSR without an HTTP round-trip, and the same endpoints are derivable as LLM tools and MCP server endpoints.

But this post is about the lessons, not the features.

## I didn't know TypeScript as well as I thought

When I started this project, I'd been writing TypeScript for years. I thought I knew it well. Building a framework proved me wrong.

Application code doesn't touch the corners of the type system that a framework lives in. Conditional types, recursive inference, generic boundaries, template literal types — they became daily work. Every time I solved one type inference puzzle, another appeared behind it.

Three years in, I'm still regularly discovering that something I assumed about TypeScript was incomplete or wrong. This isn't a humble brag — it's literal experience. It changed how I see my own expertise. I know more than I did, and I'm more aware of how much I don't know.

## I built three adapters. The ecosystem made them all obsolete.

Early on, Vovk.ts supported three validation libraries — Zod, Yup, and class-validator — each with its own adapter package that converted schemas to JSON Schema. The Zod converter worked well. The Yup converter was full of bugs. The class-validator converter had known issues with arrays and required reflect-metadata.

I documented every bug, wrote workarounds, maintained three separate sections in the docs. Then Standard Schema appeared — and with it, Standard JSON Schema. Zod, ArkType, and Valibot all adopted it.

The decision was obvious: kill all three adapter packages and support only libraries that implement the standard. The chain `zod → vovk-zod → procedure` became `zod → procedure`. It was painful to throw away working, debugged code. But the ecosystem solved the problem better than I ever could alone.

## The hardest work was removing things

Everyone talks about what a framework can do. Nobody talks about what got cut. I removed more code from Vovk.ts than the project contains today.

The most telling removal: Worker Procedure Call. Since I already had codegen and type-safe calls for backend endpoints, I thought — why not apply the same pattern to Web Workers? So I built WPC: `await MyWPC.heavyWork(...args)`. Type-safe Web Worker calls with auto-generated clients. It was elegant. It worked. And it had absolutely nothing to do with a backend framework.

That seems obvious now. At the time, it felt like a natural extension. But every feature like this diluted the focus. When I deleted WPC along with several NestJS-specific features I'd been carrying around, everything got better. The API got smaller. The docs got clearer. The remaining features got sharper.

I stopped asking "where can I add this?" and started asking "what would I have to remove to make this fit?"

## The creator of C# fixed my TypeScript issue

This is the part of the story I still can't quite believe.

I needed the type system to infer types across the boundary between a controller and a service class. It wasn't working — TypeScript kept throwing implicit any errors, killing the types in both places. I filed an issue on the TypeScript repo ([#58616](https://github.com/microsoft/TypeScript/issues/58616)), expecting nothing.

It got attention. And then it was closed — by Anders Hejlsberg. The creator of C#. The architect of TypeScript.

I'm embarrassed to admit I didn't know his name at the time. When I looked him up and realized who had just fixed my problem, I took it as a sign. This project wasn't going to be another abandoned repo on my GitHub.

## The syntax nobody would have designed on purpose

Even after Hejlsberg's fix, I was stuck. The syntax I was using — passing the handler as a property inside the procedure definition — couldn't enforce the return type. The handler could return anything and TypeScript would silently accept it. I had to put a warning in the docs telling users to manually annotate their return types:

```ts
return result satisfies VovkOutput<typeof MyController.myMethod>;
```

For a framework that promises type safety, asking users to do this manually was a failure. I knew I couldn't ship it that way, but I couldn't find an alternative. Months went by. I was convinced the project wasn't good enough to compete with tools like tRPC where inference just works.

Eventually, out of desperation, I asked GitHub Copilot to suggest an alternative syntax. It proposed `procedure(...).handle(fn)` — a chained call instead of a single object.

I didn't think it would work. But the tests passed. The type inference worked. The return type was enforced. Three years of trying, and the last piece of the puzzle came from a suggestion I almost didn't try.

The syntax looks unusual — a chained call on a static class property with a decorator on top. It's not what anyone would design if they were starting from convention. But it's the only syntax I found that satisfies every requirement: the decorator stays in place, validation is defined inline, the handler gets full types, and those types propagate outward to the client, the service layer, OpenAPI, and AI tools — without a single manual annotation.

I tried to find something more conventional. I couldn't. Sometimes the right answer doesn't look like what you'd expect.

## What it added up to

These lessons aren't unique to framework development. But building something alone, over years, with a moving target underneath — it compresses them. You can't defer decisions to the team. You can't wait for consensus. You make the call, live with it, and sometimes reverse it a year later.

Vovk.ts is out now. I'm proud of it — not because it's perfect, but because the scars are in the right places.

📖 https://vovk.dev
🐙 https://github.com/finom/vovk