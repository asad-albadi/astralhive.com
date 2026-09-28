# Brand Overhaul Implementation Plan

> Use superpowers:executing-plans to implement task by task.

**Goal:** Deliver the approved complete visual and UX overhaul.
**Architecture:** Keep the data-driven React page. Separate canonical brand tokens, semantic/global CSS, shared primitives, and section compositions.
**Tech Stack:** React 18, TypeScript, Vite 6, plain CSS, Lucide.
**Spec:** `docs/superpowers/specs/2026-09-28-brand-overhaul-design.md`

## Global constraints
- Root `/brand` images override Markdown and token files; use actual assets from subdirectories.
- Preserve all seven products, destinations, section IDs, solo-studio positioning, and deployment domain.
- Do not add a backend, fabricated contact address, unrelated palette, or deployment.
- Work in the shared checkout under the user's go-ahead; leave changes reviewable and uncommitted.

## Review focus
- Narrow screens: no horizontal overflow, readable product badges, mobile menu works.
- Keyboard: skip link, menu Escape return focus, visible focus on every action.
- Motion preferences: all content remains visible under reduced motion.
- Asset delivery: production icons/social images match the brand sources; local fonts load.
- Content: seven products remain, coming-soon state is honest, external destinations preserved.

## Task 1 — foundations and interaction checks
- [x] Install project dependencies and browser test tools; verify baseline build.
- [x] Add browser tests for skip link, menu Escape/resize, section navigation, product inventory, overflow, reduced motion, and accessible rendering; observe missing behaviors fail.
- [x] Add semantic tokens and shared ButtonLink, SectionHeading, and Logo components.
- [x] Serve local Montserrat with license and approved brand images.

## Task 2 — complete page composition
- [x] Replace navigation and hero with light editorial layout and approved artwork.
- [x] Recompose Services, Projects, About, Contact, Footer using shared components.
- [x] Remove per-product decorative gradients; retain product logos/statuses.
- [x] Implement responsive grids, focus states, menu dismissal, and modest motion.

## Task 3 — production assets and cleanup
- [x] Add repeatable icon/social sync before dev/build; update metadata and manifest.
- [x] Remove unused legacy identity/font assets and obsolete CSS/hook.
- [x] Document token/asset/component relationships and developer checks in README.

## Task 4 — verification
- [x] Run production build, existing brand tests, browser interaction tests and accessibility scan.
- [x] Inspect screenshots at mobile, tablet, laptop, desktop and large desktop widths.
- [x] Review complete diff for brand consistency and regressions; fix findings.
- [x] Record final evidence and any limitations.

## Execution notes
User approved the direction and explicitly clarified image authority. Native execution proceeds without another permission handoff. Visual changes are verified through browser rendering; behavior changes receive regression tests before implementation.

## Completion evidence
- Production TypeScript/Vite build passed.
- Existing Node brand suite: 8/8 passed.
- Chromium browser suite on production preview: 12/12 passed, including axe WCAG A/AA scans at six widths, keyboard/mobile navigation, product URLs, enlarged text including card-content clipping, and reduced-motion parallax.
- Screenshots inspected for desktop, tablet, laptop, large display and mobile; final product hierarchy and AstralCalc contrast adjusted from user feedback.
- Independent review found an enlarged-text hero overflow; fixed with a bounded grid column and heading wrapping, verified with a failing-then-passing regression test.
- No deployment or commit performed. Changes remain in the shared checkout.
