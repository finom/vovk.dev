# Tweet Draft

*Note: Twitter shortens all URLs to 23 characters (t.co). Counts below include that.*

**Option A (248 chars — leads with the insight):**

TIL you can soft-delete from a Zustand store by setting enumerable:false on the property descriptor. Deleted items vanish from Object.values() but are still accessible by ID — zero changes to consuming components.

Full writeup: https://vovk.dev/realtime-ui/state

**Option B (thread — tweet 1 of 2, 196 chars):**

Built a Zustand entity registry that auto-normalizes every API response into a flat store.

The soft-delete trick: mark the property enumerable:false. It vanishes from Object.values() but state.task['task-1'] still works.

**Thread tweet 2 (217 chars):**

The full pattern: recursive entity extraction from any response shape, deep-equal diffing to skip no-op re-renders, O(1) lookups by ID.

Reference app + full docs: https://vovk.dev/realtime-ui/state

---

**Notes:**
- Option A leads with the most shareable insight and fits in a single tweet
- All URLs should point to the published article once live; vovk.dev/realtime-ui/state is the docs canonical URL
- Convert the entity_registry_pattern.svg to PNG and attach as an image — code/diagram tweets get significantly higher engagement
- Best posting times: 9–11am EST or 1–3pm EST weekdays
- Consider tagging @dai_shi (Zustand maintainer) if you have a relationship
- No hashtags — they reduce engagement on tech Twitter
