# Reddit Post Draft

**Subreddit:** r/reactjs (primary), optionally r/nextjs

**Post type:** Link post with comment

**Title:**
I built a Zustand registry pattern that auto-normalizes API responses and syncs every component — here's how it works

**Link:** [dev.to article URL once published]

**First comment (post immediately after submitting):**

Hey r/reactjs,

I originally learned entity normalization years ago on a Redux project — normalizr, createEntityAdapter, the whole setup. It worked, but the boilerplate was brutal. When I moved to Zustand I rebuilt the same principle (flat dictionaries keyed by ID, single source of truth) but with zero schema definitions and minimal code. I've used it in every project since.

The core idea:
- Every entity in your API has `id` + `entityType` fields
- A recursive `getEntitiesFromData` function walks any response shape and extracts entities in a single pass
- `parse` merges them into the store with deep-equal checks to skip no-op updates
- Soft deletions use `enumerable: false` on property descriptors — deleted entities become invisible to `Object.values` but still accessible by ID, so nothing crashes

The pattern isn't tied to any particular framework — works with any HTTP layer and any state lib that supports selective subscriptions.

Curious to hear what you think, especially if you've tried similar normalization approaches. How do you handle keeping multiple components in sync when the same entity appears in different places?

---

**Notes:**
- Do NOT use the word "article" in the title (Reddit penalizes it)
- Post the link, then immediately add the comment for context
- Engage with replies for the first 1-2 hours
- Tags/flair: use "Show /r/reactjs" flair if available
- r/reactjs rules: self-promotion is allowed if you're an active member. Add genuine discussion questions.
- Cross-post to r/nextjs only if you're active there
