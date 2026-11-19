# Little Grove

A home gardening planner concept built with Next.js. Cream and green surfaces, a full-width scalloped hero, an 85% width floating navbar, botanical photography, and rounded photo cards carry the visual direction.

## Run

```bash
npm ci
npm run dev
```

Open http://localhost:3000. For production, run `npm run build`, then `npm start`.

Agentation is available only in development. Use the bottom-right toolbar to annotate elements and copy feedback for your coding agent.

## Garden interactions

- Name your garden using the hero form.
- Add a plant and its growing spot with the plant form.
- Tick off care checks and see the overview update.
- Open My garden to review your plants.
- Explore section links using the dropdown and mobile navigation.

The sample garden starts with three plants. Garden names, plant lists, and care checks persist in localStorage in the current browser. There is no account, email collection, server storage, or automated plant-care service. If storage is unavailable, the garden remains usable for the current visit.

## Assets

The gardening copy, logo, and favicon were created for this concept. The three section photographs and six hero plant photos were supplied by the user. Section photos are encoded as lossless WebP; hero plants use transparent cutouts made from the supplied JPEG files with the built-in image generation tool. The originals are preserved. The previous reference-derived photos and avatars have been removed. See [ASSETS.md](ASSETS.md) for paths and source mappings. DM Sans remains locally served under its bundled SIL Open Font License.

## Verification

Run `npm run build` to check the production bundle. Layout and garden interactions are also checked in local Chromium at desktop and mobile sizes during implementation.
