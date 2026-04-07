---
title: "Build Your Own Entity Registry: Auto-Syncing Zustand State from API Responses"
subtitle: "A step-by-step guide to entity-driven state normalization in React with Zustand, property descriptors, and zero manual store updates"
tags: react, zustand, javascript, typescript, webdev
canonical_url: https://vovk.dev/realtime-ui/state
cover_image: https://vovk.dev/diagrams/entity_registry_pattern.svg
---

Your React app fetches a list of tasks. Each task has an assigned user. You render those users in a sidebar, on task cards, in a header dropdown. Now you update a user's name in a modal. How many places need to know about that change?

If you're prop-drilling API responses or duplicating state across components, the answer is "too many." The fix is straightforward: normalize your entities into a flat, centralized registry keyed by ID, and let every component read from the same source.

This tutorial walks you through building that registry from scratch with Zustand. By the end, you'll have a working entity registry that automatically extracts entities from any API response, deduplicates them, triggers re-renders only where data actually changed, and handles deletions without breaking component references.

![Entity Registry Pattern](https://vovk.dev/diagrams/entity_registry_pattern.svg)

## The Problem

Consider a typical API response for a task board:

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
    },
    {
      "id": "task-2",
      "title": "Add dark mode",
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

User `"user-1"` appears twice. If your `TaskCard` component stores the user inline, and a separate `UserProfile` component fetches the same user independently, you now have multiple copies of the same data. Update one, the others go stale. This is the classic normalization problem.

## Solution Overview

The entity registry pattern works as follows:

1. Every entity in your system carries an `id` and an `entityType` field.
2. A recursive function walks API responses and extracts every entity it finds, regardless of nesting depth.
3. Extracted entities are merged into a Zustand store, organized as flat dictionaries keyed by `entityType` and then by `id`.
4. A `parse` method does the merging with deep-equality checks, so components only re-render when their specific entity actually changed.
5. Deletions are handled via JavaScript property descriptors — deleted entities become non-enumerable, invisible to iteration but still accessible by direct key lookup.

The idea descends from the Redux ecosystem. [normalizr](https://github.com/paularmstrong/normalizr) (by Paul Armstrong) introduced schema-based normalization, and Redux Toolkit's [createEntityAdapter](https://redux-toolkit.js.org/api/createEntityAdapter) provided built-in CRUD for normalized state. This approach applies the same principle but relies on convention (`id` + `entityType` fields) instead of upfront schema definitions. It also isn't tied to Zustand — any state library with centralized stores and selective subscriptions works ([Jotai](https://jotai.org/), [Valtio](https://valtio.dev/), Redux itself).

Now let's build it.

## Step 1: Define Entity Types

Start with an enum that lists every entity in your domain, and a base interface that all entities share:

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

In a real project, `EntityType` could come from Prisma (as a generated enum), a GraphQL codegen tool, or any shared schema. The critical requirement is that your API responses include `id` and `entityType` on every entity object.

Your concrete entity types extend `BaseEntity`:

```ts
interface UserType extends BaseEntity {
  entityType: EntityType.user;
  fullName: string;
  email: string;
  imageUrl?: string;
}

interface TaskType extends BaseEntity {
  entityType: EntityType.task;
  title: string;
  description: string;
  status: 'TODO' | 'IN_PROGRESS' | 'IN_REVIEW' | 'DONE';
  userId: string;
}
```

**Tip:** For extra type safety, use branded IDs to prevent accidentally passing a `UserId` where a `TaskId` is expected:

```ts
type BrandedId<T extends string> = string & { readonly __brand: T };
type UserId = BrandedId<'user'>;
type TaskId = BrandedId<'task'>;
```

## Step 2: Build `getEntitiesFromData`

This is the core extraction function. It recursively walks any data structure — objects, arrays, nested responses — and pulls out every object that has both `entityType` and `id` fields.

```ts
const MAX_DEPTH = 10;

function getEntitiesFromData(
  data: unknown,
  entities: Partial<{
    [key in EntityType]: Record<string, BaseEntity>;
  }> = {},
  depth = 0,
) {
  if (depth > MAX_DEPTH) return entities;

  if (Array.isArray(data)) {
    data.forEach((item) => getEntitiesFromData(item, entities, depth + 1));
  } else if (typeof data === 'object' && data !== null) {
    // Recurse into all values first
    Object.values(data).forEach((value) =>
      getEntitiesFromData(value, entities, depth + 1)
    );
    // Then check if this object itself is an entity
    if ('entityType' in data && 'id' in data) {
      const entityType = (data as BaseEntity).entityType;
      const id = (data as BaseEntity).id;
      entities[entityType] ??= {};
      entities[entityType]![id] = data as BaseEntity;
    }
  }

  return entities;
}
```

A few things to note:

- **`MAX_DEPTH` prevents infinite recursion.** If your API ever returns circular references or extremely deep structures, this keeps you safe.
- **Children are processed before parents.** The function recurses into nested values first, then checks the current object. This means that if a `task` contains a `user`, both get extracted in a single pass.
- **The accumulator pattern avoids allocations.** Passing `entities` through means one object collects everything — no intermediate arrays or maps.

Given the nested API response from earlier, a single call to `getEntitiesFromData(apiResponse)` produces:

```ts
{
  task: {
    "task-1": { id: "task-1", title: "Fix login bug", entityType: "task", ... },
    "task-2": { id: "task-2", title: "Add dark mode", entityType: "task", ... }
  },
  user: {
    "user-1": { id: "user-1", fullName: "John Doe", entityType: "user" }
  }
}
```

Flat. Deduplicated. One pass.

## Step 3: Build the `parse` Method

The `parse` method is what merges extracted entities into the Zustand store. It needs to be smart about updates: if an entity hasn't changed, skip it entirely to avoid unnecessary re-renders.

First, define the store interface:

```ts
import { create } from 'zustand';

interface Registry {
  [EntityType.user]: Record<string, UserType>;
  [EntityType.task]: Record<string, TaskType>;
  parse: (data: unknown) => void;
}
```

Now build the store with the `parse` implementation:

```ts
import fastDeepEqual from 'fast-deep-equal';

const useRegistry = create<Registry>((set) => ({
  [EntityType.user]: {},
  [EntityType.task]: {},
  parse: (data) => {
    const entities = getEntitiesFromData(data);

    set((state) => {
      const newState: Record<string, unknown> = {};
      let isChanged = false;

      Object.entries(entities).forEach(([entityType, entityMap]) => {
        const type = entityType as EntityType;
        // Get existing property descriptors to preserve enumerable flags
        const descriptors = Object.getOwnPropertyDescriptors(
          state[type] ?? {}
        );
        let areDescriptorsChanged = false;

        Object.values(entityMap).forEach((entity) => {
          const descriptorValue = descriptors[entity.id]?.value;
          // Merge with existing data (partial updates work)
          const value = { ...descriptorValue, ...entity };
          const isCurrentChanged = !fastDeepEqual(descriptorValue, value);

          descriptors[entity.id] = isCurrentChanged
            ? {
                value,
                configurable: true,
                writable: false,
                enumerable: !('__isDeleted' in entity),
              }
            : descriptors[entity.id];

          areDescriptorsChanged ||= isCurrentChanged;
        });

        newState[type] = areDescriptorsChanged
          ? Object.defineProperties({}, descriptors)
          : state[type];
        isChanged ||= areDescriptorsChanged;
      });

      return isChanged ? { ...state, ...newState } : state;
    });
  },
}));
```

Key details in this implementation:

- **`fast-deep-equal` prevents no-op updates.** If the incoming entity is identical to what's already in the store, the descriptor is reused unchanged. Components subscribing to that entity won't re-render.
- **`{ ...descriptorValue, ...entity }` allows partial updates.** Your API can return a partial entity (e.g., just `{ id: "user-1", entityType: "user", fullName: "Jane" }`) and it merges cleanly with existing data.
- **`writable: false` on property descriptors** makes entities immutable in the store. You can't accidentally mutate state.
- **The entire entity type dictionary is replaced only when at least one entity in it changed.** This means `Object.values(state.user)` returns a referentially stable array when nothing in `user` changed, which plays well with `useShallow` and memoization.

## Step 4: Handle Soft Deletions

This is the most elegant part of the pattern.

When you delete an entity, you can't simply remove it from the store. Components that still hold a reference to that ID (e.g., a `TaskCard` rendered inside an animation exit, or a `UserProfile` in a stale closure) would crash trying to read properties off `undefined`.

You could add a `deleted` flag and filter everywhere, but that leaks deletion logic into every consumer. Instead, the registry uses **property enumerability** — a JavaScript feature most developers never think about.

When a property is defined with `enumerable: false`, it becomes invisible to `Object.values()`, `Object.keys()`, `Object.entries()`, `for...in`, and the spread operator. But it's still accessible by direct key lookup:

```ts
const obj = Object.defineProperties({}, {
  'task-1': {
    value: { id: 'task-1', title: 'Task 1' },
    enumerable: true,
    configurable: true,
  },
  'task-2': {
    value: { id: 'task-2', title: 'Task 2' },
    enumerable: false,
    configurable: true,
  },
});

Object.keys(obj);   // ['task-1'] -- task-2 is invisible
Object.values(obj); // [{ id: 'task-1', title: 'Task 1' }]
obj['task-2'];       // { id: 'task-2', title: 'Task 2' } -- still works
```

To trigger a soft deletion, your server sends:

```json
{ "id": "task-1", "entityType": "task", "__isDeleted": true }
```

In the `parse` method, this is already handled by one expression:

```ts
enumerable: !('__isDeleted' in entity)
```

That's it. Components iterating with `Object.values(state.task)` stop seeing the deleted task. Components that still reference `state.task['task-1']` directly get a valid object instead of `undefined`. Zero awareness required from consuming code.

## Step 5: Wire It to Components

Reading a single entity by ID:

```tsx
import { useShallow } from 'zustand/shallow';

const UserProfile = ({ userId }: { userId: string }) => {
  const user = useRegistry(useShallow((state) => state.user[userId]));

  if (!user) return null;

  return (
    <div className="flex items-center gap-2">
      <img src={user.imageUrl} alt={user.fullName} />
      <span>{user.fullName}</span>
      <span>{user.email}</span>
    </div>
  );
};
```

Listing all entities of a type:

```tsx
const UserList = () => {
  const users = useRegistry(
    useShallow((state) => Object.values(state.user))
  );

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.fullName}</li>
      ))}
    </ul>
  );
};
```

Selecting specific fields from an entity (useful for forms or components that only care about a subset):

```tsx
import { pick } from 'lodash';

const TaskDialog = ({ taskId }: { taskId: string }) => {
  const task = useRegistry(
    useShallow((state) =>
      pick(state.task[taskId], ['title', 'description', 'status', 'userId'])
    )
  );

  // Component only re-renders when title, description, status, or userId changes
  // ...
};
```

`useShallow` from `zustand/shallow` ensures components only re-render when the selected data actually changes via shallow comparison, not on every store update.

## Step 6: Connect to Your HTTP Layer

The real power of the registry emerges when every API response is automatically parsed. Hook into your HTTP layer and call `parse` on every successful response:

```ts
async function apiFetch<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(url, options);
  const data = await res.json();
  useRegistry.getState().parse(data);
  return data;
}
```

Once this is in place, you never manually update the store. Make an API call, the registry extracts and normalizes all entities from the response, and every subscribing component updates automatically.

This also works with streaming responses. If your API returns data incrementally (e.g., via JSON Lines), call `parse` on each chunk as it arrives — the registry merges each update into the existing state.

Every entity that appears in any response, from any endpoint, gets normalized into the same registry. Update a user via a PUT request, and every component showing that user re-renders with the new data — the sidebar, the task cards, the header, the dialog. You wrote zero manual synchronization code.

## Wrap-up

Here's what you built:

1. **Entity types** with `id` + `entityType` as the universal contract
2. **`getEntitiesFromData`** — a recursive extractor that normalizes any nested API response in one pass
3. **`parse`** — a Zustand store method that merges entities with deep-equality checks, skipping no-op updates
4. **Soft deletions** via property descriptor enumerability — deleted entities vanish from iteration without breaking direct references
5. **Component selectors** with `useShallow` for surgical re-renders
6. **HTTP layer integration** that makes the whole system automatic

The full working implementation is available in the [reference app on GitHub](https://github.com/finom/realtime-kanban/blob/main/src/hooks/useRegistry.tsx).

---

## Part of the Realtime UI Series

This entity registry is one piece of **Realtime UI** — a streaming-first architecture for Next.js built with [Vovk.ts](https://vovk.dev). The full architecture covers entity-driven state normalization, real-time database polling via Redis and JSON Lines, AI chat and voice integration, and MCP server support.

The full documentation covers **SSR support** as well — pre-populating the registry on the server so the first render arrives with data already in place. In short, Vovk.ts controllers expose a `.fn()` method that calls the handler directly on the server without HTTP, letting you hydrate the store from a server component:

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

No loading spinners. No empty-state flicker. The HTML arrives with data already rendered.

**[Read the full Realtime UI documentation](https://vovk.dev/realtime-ui/state)** | **[Browse the reference app source](https://github.com/finom/realtime-kanban)** | **[Vovk.ts docs](https://vovk.dev)**
