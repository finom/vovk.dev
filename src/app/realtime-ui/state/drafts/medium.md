Canonical URL: https://vovk.dev/realtime-ui/state

# The JavaScript Trick That Made Me Rethink State Management in React

*Suggested Medium tags: React, JavaScript, Zustand, Web Development, Frontend*

---

I want to tell you about the most important thing I've ever learned in front-end development.

Years ago I was working on a startup project that used Redux. The app had the classic problem: a single user entity showing up in a dozen places — the header, every task card, the assignee dropdown, the profile drawer. Update a user's name in one place and watch everything else go stale. We were writing sync logic between slices, chaining cache invalidations, prop-drilling data through half the component tree. None of it scaled.

That's where I first learned entity normalization — flat dictionaries keyed by ID, one source of truth for every entity. Redux made the idea work, but the execution was heavy. Schema definitions, boilerplate, reducers for every CRUD operation.

When I moved on from that project, I took the principle with me but dropped Redux. I rebuilt the pattern on Zustand — simpler, lighter, no boilerplate. I've used it in every project since. It's the single pattern that has had the biggest impact on how I build React apps.

And along the way, I stumbled on a JavaScript feature I'd never used in production that turned out to be the most elegant part of the whole system.

## The Shape of the Problem

![Entity Registry Pattern](https://vovk.dev/diagrams/entity_registry_pattern.svg)

The underlying issue is that API responses are nested. A task has an author. The author has a department. The department has a manager. When you fetch a list of tasks, you get this tree of nested entities, and you scatter that data across your component tree.

The moment the same entity exists in two components via two different fetch results, you have a consistency problem. Update one and the other is stale. This is the normalization problem, and it has been well understood since the Redux days. Libraries like normalizr (by Paul Armstrong) solved it by defining schemas upfront and flattening your API responses into dictionaries keyed by entity ID.

The idea was sound. The execution was heavy. Schema definitions for every entity and relationship. Lots of boilerplate. And it was tied to Redux's mental model.

I wanted the same principle -- flat dictionaries keyed by ID, single source of truth, automatic updates -- but without schema definitions, without Redux, and with the developer ergonomics of modern React.

## Convention Over Configuration

Here is the contract I settled on: every entity from the API carries two fields -- `id` and `entityType`.

```ts
enum EntityType {
  user = 'user',
  task = 'task',
}

interface BaseEntity {
  id: string;
  entityType: EntityType;
}
```

That's the entire schema. If your backend includes these fields on every entity (which is trivial with Prisma, Drizzle, or any ORM), the client can figure out the rest automatically. No relationship definitions. No nested schema maps. Just a convention.

The `EntityType` enum can come from your ORM, a codegen tool, or you can define it by hand. The point is that it exists on the data itself, not in a separate configuration file.

## A Single Recursive Pass

The centerpiece of the pattern is a function called `getEntitiesFromData`. It takes any data structure -- an object, an array, arbitrarily nested -- and walks it recursively. Every time it encounters something with `entityType` and `id`, it extracts it into a flat dictionary.

```ts
function getEntitiesFromData(data: unknown, entities = {}, depth = 0) {
  if (depth > MAX_DEPTH) return entities;

  if (Array.isArray(data)) {
    data.forEach((item) => getEntitiesFromData(item, entities, depth + 1));
  } else if (typeof data === 'object' && data !== null) {
    Object.values(data).forEach((value) =>
      getEntitiesFromData(value, entities, depth + 1)
    );
    if ('entityType' in data && 'id' in data) {
      const { entityType, id } = data;
      entities[entityType] ??= {};
      entities[entityType][id] = data;
    }
  }
  return entities;
}
```

Feed it a nested API response like this:

```json
{
  "tasks": [
    {
      "id": "task-1",
      "title": "Fix login bug",
      "entityType": "task",
      "user": {
        "id": "user-1",
        "fullName": "John Doe",
        "entityType": "user"
      }
    }
  ]
}
```

And it produces a flat, normalized structure in one pass:

```
task: { "task-1": { id: "task-1", title: "Fix login bug", ... } }
user: { "user-1": { id: "user-1", fullName: "John Doe", ... } }
```

Both entities extracted. Both stored by ID. No schema required. The function doesn't care about the shape of your API response -- it just walks whatever you give it.

## The Zustand Store

The store itself is straightforward. One dictionary per entity type, plus a `parse` method that wires everything together:

```ts
const useRegistry = create<Registry>((set, get) => ({
  [EntityType.user]: {},
  [EntityType.task]: {},
  parse(data: unknown) {
    const extracted = getEntitiesFromData(data);
    // Merge into store with deep-equal checks...
  },
}));
```

The `parse` method does the smart part. For each incoming entity, it compares against the existing store entry using deep equality (I use `fast-deep-equal`). If nothing changed, it skips the update entirely -- no new object reference, no re-render. Only components whose specific entity actually changed will re-render.

Components consume it like any Zustand store:

```tsx
// Single entity by ID
const user = useRegistry(useShallow((state) => state.user[userId]));

// All entities of a type
const users = useRegistry(useShallow((state) => Object.values(state.user)));
```

`useShallow` from Zustand ensures components only re-render when the selected data structurally changes. This gives you O(1) lookups by ID and minimal re-renders across the board.

## The Part I'm Most Excited About: Soft Deletions

This is the trick that made me want to write this article.

When you delete an entity from a normalized store, you have a problem. You can remove it from the dictionary, but any component still holding a reference to that ID will crash or show undefined. You could add a `deleted: true` flag and filter it out everywhere, but now every list component needs to know about soft deletion. The concern leaks into every consumer.

I was thinking about this when I remembered something I'd learned years ago and never used: **JavaScript property descriptors have an `enumerable` flag**.

When a property is defined with `enumerable: false`, something remarkable happens. It becomes invisible to `Object.keys()`, `Object.values()`, `for...in`, and the spread operator. But it is still accessible by direct key lookup.

```ts
const obj = Object.defineProperties({}, {
  'task-1': {
    value: { id: 'task-1', title: 'Task 1' },
    enumerable: true, configurable: true,
  },
  'task-2': {
    value: { id: 'task-2', title: 'Task 2' },
    enumerable: false, configurable: true,
  },
});

Object.keys(obj);   // ['task-1'] -- task-2 is gone
obj['task-2'];       // { id: 'task-2', title: 'Task 2' } -- still there
```

Read that again. The property *exists* but is *invisible to iteration*.

This is the perfect primitive for soft deletion in a normalized store. When the server tells me an entity was deleted, I set its property descriptor to `enumerable: false`. Every component that lists entities via `Object.values()` stops seeing it -- instantly, automatically, without changing a single line of consuming code. Every component that references it by ID still gets a valid object -- no crash, no undefined check, no error boundary.

The server signals deletion with a minimal payload:

```json
{ "id": "task-1", "entityType": "task", "__isDeleted": true }
```

Inside `parse`, the logic is a single expression: `enumerable: !('__isDeleted' in entity)`. That's the entire soft deletion implementation. One line. No filters, no flags, no leaked abstractions.

I think it's one of those JavaScript features that's been sitting there for decades waiting for the right use case.

## Wiring It Into Your Data Layer

The pattern becomes truly powerful when you connect it to your HTTP layer. Set up a single integration point -- a custom fetch wrapper or an interceptor -- that calls `parse` on every successful API response:

```ts
onSuccess: (data) => {
  useRegistry.getState().parse(data);
};
```

From that point forward, you never manually update the store. Every API call automatically extracts and normalizes entities. Every component that subscribes to an entity gets updated. If your API streams data (via JSON Lines, for instance), call `parse` on each chunk as it arrives. The registry handles the rest.

This is the part that changed how I think about client-side data. The store is no longer something you manage. It's something that manages itself. You just make API calls and the UI stays in sync.

## Where This Fits in a Bigger Picture

I built this pattern as the state layer for an architecture I call Realtime UI, designed for Next.js apps built with [Vovk.ts](https://vovk.dev). The entity registry is one piece -- the same store also powers real-time database polling via Redis streams, AI chat and voice integration, and MCP server support.

If you're using Next.js, there's an SSR story here too. Vovk.ts controllers expose a `.fn()` method that calls the API handler directly on the server, so a server component can pre-populate the registry without making an HTTP request:

```tsx
export default async function Home() {
  const [users, tasks] = await Promise.all([
    UserController.getUsers.fn(),
    TaskController.getTasks.fn(),
  ]);

  return (
    <RegistryProvider initialData={{ users, tasks }}>
      <UserList />
    </RegistryProvider>
  );
}
```

The HTML arrives with data already rendered. No loading spinners, no layout shift, no empty-state flicker. I won't go into the SSR details here -- the [full documentation](https://vovk.dev/realtime-ui/state) covers it -- but it's worth knowing that the pattern extends cleanly to the server.

## The Takeaway

The entity registry pattern boils down to three ideas:

1. **Convention over configuration.** If every entity carries `id` and `entityType`, you can normalize any response shape without schemas.
2. **One store, one parse method.** Hook it into your data layer once and the UI stays in sync automatically.
3. **Property descriptors are underrated.** `enumerable: false` is a first-class language feature that gives you invisible soft deletion for free.

None of this is conceptually new -- the Redux community figured out normalization a decade ago. But the combination of Zustand's simplicity, a convention-based approach, and the `enumerable` trick produces something that genuinely feels lightweight and maintainable. I've been running this in production and I don't think I'll go back.

---

*This article is part of the Realtime UI architecture series. The full documentation, including SSR integration, streaming setup, and a working kanban reference app, is available at [vovk.dev/realtime-ui](https://vovk.dev/realtime-ui/state). The source code is on [GitHub](https://github.com/finom/realtime-kanban).*
