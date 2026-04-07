---
title: "Stop Duplicating API State: A Zustand Registry That Auto-Updates Every Component"
published: false
tags: react, zustand, javascript, typescript
canonical_url: https://vovk.dev/realtime-ui/state
cover_image: https://vovk.dev/diagrams/entity_registry_pattern.svg
---

# Stop Duplicating API State: A Zustand Registry That Auto-Updates Every Component

If your React app deals with interconnected data — users, tasks, comments, anything with relationships — you've probably felt the pain of keeping multiple components in sync. Update a user's name in a dialog, and now the sidebar, the header, and every task card showing that user all need to reflect the change. Lift state up? Duplicate fetch calls? None of it scales.

Entity-driven state normalization solves this. You extract entities into a flat, centralized registry keyed by ID. Every component reads from the same source. Update it once, everything re-renders automatically. And when you delete something, a trick with JavaScript property descriptors makes it invisible to iteration without crashing components that still reference it.

This article walks through a practical implementation using [Zustand](https://github.com/pmndrs/zustand).

## The core idea

Raw API responses are passed through a `parse` method that recursively extracts entities, normalizes them into flat dictionaries keyed by ID, and merges them into a Zustand store. Components subscribe to specific entities and re-render only when their data changes.

![Entity Registry Pattern](https://vovk.dev/diagrams/entity_registry_pattern.svg)

The contract is simple: every entity has an `id` and an `entityType` field. The registry uses these two properties to know *what* the entity is and *where* to store it.

## Defining entity types

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

In a real project, `EntityType` can come from DB as a column with fixed value, a codegen tool, or any other source of truth — the important thing is that your API responses include these fields. You can also use branded IDs (`type UserId = string & { readonly __brand: 'user' }`) to prevent mixing up entity types at compile time.

## The registry store

The store defines a `Registry` interface with entity maps and a `parse` method:

```ts
import { create } from 'zustand';

interface Registry {
  [EntityType.user]: Record<string, UserType>;
  [EntityType.task]: Record<string, TaskType>;
  parse: (data: unknown) => void;
}
```

### Extracting entities with `getEntitiesFromData`

The core of the pattern is a recursive function that walks any data structure and pulls out entities based on `entityType` + `id`:

```ts
const MAX_DEPTH = 10;

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

Given a nested API response like this:

```json
{
  "tasks": [
    {
      "id": "task-1",
      "title": "Task 1",
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

The function produces a normalized shape in a single pass:

```ts
{
  task: { "task-1": { id: "task-1", title: "Task 1", entityType: "task", ... } },
  user: { "user-1": { id: "user-1", fullName: "John Doe", entityType: "user" } }
}
```

Nested entities are extracted alongside their parents — one call normalizes the entire response, no matter how deeply nested.

### The `parse` method

The `parse` method calls `getEntitiesFromData`, then merges the results into the store. For each incoming entity it:

1. Checks if the entity already exists in state
2. Deep-compares old vs new with [fast-deep-equal](https://www.npmjs.com/package/fast-deep-equal) — if nothing changed, it skips the update entirely (no re-render)
3. Stores updated entities as non-writable property descriptors, and marks deleted entities as non-enumerable (more on this below)

The result: only components whose specific entity actually changed will re-render. You can see the [full implementation on GitHub](https://github.com/finom/realtime-kanban/blob/main/src/hooks/useRegistry.tsx).

## Soft deletions: the `enumerable: false` trick

This is my favorite part of the pattern.

When you delete an entity, you can't just remove it from the store — components still referencing that ID would crash. You could add a `deleted` flag and filter everywhere, but that leaks deletion logic into every consumer. Instead, the registry uses a JavaScript feature most people never think about: **property enumerability**.

When a property is defined with `enumerable: false`, it becomes invisible to `Object.values`, `Object.keys`, and `{ ...spread }` — but it can still be accessed directly by key:

```ts
const obj = Object.defineProperties({}, {
  'task-1': { value: { id: 'task-1', title: 'Task 1' }, enumerable: true, configurable: true },
  'task-2': { value: { id: 'task-2', title: 'Task 2' }, enumerable: false, configurable: true },
});

Object.keys(obj);  // ['task-1'] — task-2 is invisible to iteration
obj['task-2'];     // { id: 'task-2', title: 'Task 2' } — still accessible by ID
```

Components iterating over entities won't see deleted ones. Components holding a reference to a specific ID won't crash. Zero awareness required from consuming code — deleted entities just disappear from enumeration.

To trigger a soft deletion, the server sends:

```json
{ "id": "task-1", "entityType": "task", "__isDeleted": true }
```

Inside `parse`, one line handles it: `enumerable: !('__isDeleted' in entity)`. That's it.

## Using the registry in components

Reading a single entity by ID:

```tsx
const UserProfile = ({ userId }: { userId: string }) => {
  const user = useRegistry(useShallow((state) => state.user[userId]));
  return <div>{user.fullName}</div>;
};
```

Listing all entities of a type:

```tsx
const UserList = () => {
  const users = useRegistry(useShallow((state) => Object.values(state.user)));
  return <ul>{users.map((u) => <li key={u.id}>{u.fullName}</li>)}</ul>;
};
```

`Object.values` only iterates enumerable properties, so soft-deleted entities are automatically excluded — no extra filtering needed.

When a component receives a list of IDs from a parent, the same principle applies — but you need to account for deletions explicitly. Spreading the entity map creates a snapshot containing only enumerable (non-deleted) entries, so `id in` that snapshot acts as a deletion guard:

```tsx
const UserList = ({ userIds }: { userIds: User['id'][] }) => {
  const users = useRegistry(
    useShallow(({ user: { ...userReg } }) => userIds.filter((id) => id in userReg).map((id) => userReg[id]))
  );
  return <ul>{users.map((u) => <li key={u.id}>{u.fullName}</li>)}</ul>;
};
```

`{ ...userReg }` copies only enumerable properties, so a deleted ID won't appear in the spread and gets filtered out. The deleted entity remains in the original store — it just can't be seen.

`useShallow` from `zustand/shallow` ensures components only re-render when the selected data actually changes, not on every store update.

## Wiring it up to your data fetching

The pattern shines when every API response is automatically parsed. Call `useRegistry.getState().parse(data)` in whatever HTTP layer you use:

**Plain fetch wrapper:**

```ts
async function apiFetch<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(url, options);
  const data = await res.json();
  useRegistry.getState().parse(data);
  return data;
}
```

Once this is in place, you never manually update the store. Make an API call, the registry extracts and normalizes all entities from the response, and every subscribing component updates automatically. This also works with streaming responses — if your API returns data incrementally (e.g. via JSON Lines), call `parse` on each chunk as it arrives.

## Prior art

The idea comes from the Redux ecosystem. [normalizr](https://github.com/paularmstrong/normalizr) (by Paul Armstrong) introduced schema-based normalization, and Redux Toolkit's [createEntityAdapter](https://redux-toolkit.js.org/api/createEntityAdapter) provided built-in CRUD operations for normalized state. This approach applies the same principle — flat dictionaries keyed by ID — but relies on convention (`id` + `entityType`) instead of upfront schema definitions.

The pattern isn't tied to Zustand either. Any state library with centralized stores and selective subscriptions works: [Jotai](https://jotai.org/), [Valtio](https://valtio.dev/), or even Redux itself.

---

## This is part of a larger architecture

This article is one piece of **Realtime UI** — a streaming-first architecture for Next.js built with [Vovk.ts](https://vovk.dev), covering real-time polling via Redis and JSON Lines, AI chat and voice integration, and MCP server support. It also goes deeper on SSR: Vovk.ts controllers expose a `.fn()` method that calls the handler directly on the server, so a Next.js server component can pre-populate the registry without an HTTP round-trip:

```tsx
export default async function Home() {
  const [users, tasks] = await Promise.all([
    UserController.getUsers.fn(),
    TaskController.getTasks.fn(),
  ]);

  return (
    <RegistryProvider initialData={{ users, tasks }}>
      <UserList />
      <UserKanban />
    </RegistryProvider>
  );
}
```

No loading spinners, no empty-state flicker — the HTML arrives with data already rendered.

**[Read the full Realtime UI documentation](https://vovk.dev/realtime-ui)** | **[Browse the reference app source](https://github.com/finom/realtime-kanban)**
