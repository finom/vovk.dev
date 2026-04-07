# LinkedIn Post Draft

**Post length:** ~1,800 chars (LinkedIn truncates at ~3,000 but engagement drops after the fold at ~210 chars, so the hook matters most)

---

This is the most crucial piece of front-end knowledge I have — and not enough developers know about it.

Entity-driven state normalization is the single pattern that has made me one of the most efficient React developers on the teams I've worked with. The idea is simple: instead of letting the same entity live in multiple places across your component tree, you store it once in a flat registry keyed by ID. Every component reads from the same source. Update it once, everything re-renders.

I first learned this on a Redux project years ago — normalizr, createEntityAdapter, the full setup. It worked, but the boilerplate was heavy. When I moved to Zustand I rebuilt the same principle with zero schema definitions and minimal code. I've used it in every project since.

The registry recursively walks any API response, extracts entities by their id + entityType, and merges them into a centralized store. Automatic. No manual updates.

But the part I'm proudest of came from a late-night debugging session. I needed soft deletions that wouldn't crash components still referencing a deleted entity. I remembered a JS feature I'd known about for years but never had a real use for: enumerable: false on property descriptors.

Properties with enumerable: false are invisible to Object.values, spread, and Object.keys — but still accessible by direct key lookup. That's it. Deleted entities just vanish from lists. Components holding a reference don't crash. Zero changes to consuming code.

One line in the parse method: enumerable: !('__isDeleted' in entity).

I wrote up the full pattern — recursive extraction, deep-equal diffing, the property descriptor trick, and HTTP layer integration. This is part of the Realtime UI architecture I've been building as part of Vovk.ts, an open-source Next.js framework.

Full writeup and reference implementation in the comments.

---

**First comment:**

Full writeup: [dev.to article URL once published]

Reference implementation: https://github.com/finom/realtime-kanban

---

**Notes:**
- LinkedIn algorithm favors posts WITHOUT links in the body — put the link in the first comment
- The "hook" (first 2-3 lines before "See more") is critical — opens on a specific, relatable frustration
- No emojis, no bullet-point listicles — personal story format performs best for technical content
- Post between 8-10am in your timezone on Tuesday-Thursday
- Engage with every comment in the first hour
- Add the entity_registry_pattern.svg diagram as a post image — posts with images get 2x reach
