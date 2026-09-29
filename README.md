# Astral Hive — Website

The Astral Hive studio website, built with React, TypeScript, Vite, plain CSS, and Lucide icons. Deployed to GitHub Pages at **astralhive.om**.

## Development

```bash
bun install
bun run dev
bun run build
bun run preview
```

Node/npm also work (`npm ci`, `npm run dev`). Development and production builds automatically sync approved brand assets. The build type-checks the application before generating `dist/`.

## Brand and design system

The **images at the root of `/brand` are the source of truth**: `brand_assets.png`, `brand_patterns.png`, `logo_direction.png`, and `og_social_cards.png`. Use the ready-to-use resources inside the brand subdirectories. Markdown and token files are secondary references; check them against the boards before adopting changes.

The website follows this chain:

1. `brand/tokens/astral-hive.css`: canonical palette, type family, and radii, checked against the boards.
2. `src/styles/tokens.css`: semantic colors, typography, spacing, surfaces, timing, container and breakpoint documentation.
3. Shared components: `Logo`, `ButtonLink`, `SectionHeading`, and `ProjectCard`; `StudioPreview` links to featured products from the hero.
4. Section compositions: `Nav`, `Hero`, `Services`, `Projects`, `About`, `Contact`, and `Footer`.

`src/index.css` owns resets and shared primitives. `src/styles/layout.css` owns navigation, containers, section headings, and footer. `src/styles/sections.css` owns section-specific layouts. Responsive boundaries are 40rem, 60rem, and 75rem; the navigation media query in `Nav.tsx` follows the 60rem boundary.

The approved diagonal-node artwork provides a faint violet-on-white page background through a CSS luminance mask; the source geometry remains intact. Hex artwork stays within featured product cards. `useParallax` moves only the hero/contact decorative layers, updates at most once per animation frame, skips offscreen layers, and responds to reduced-motion preference changes. Text and controls remain stationary.

The supplied wordmark contains its own monogram. Render it intact; do not append another mark or re-typeset the text. The local Montserrat variable font and its SIL Open Font License are in `public/fonts/`. The heading weight and tracking follow the geometric typography of the reference boards; the wordmark itself is never substituted with a web font.

## Content and assets

Edit `src/data.ts` for services, products, studio principles, section links, and external destinations. All seven products retain their own identity assets. The contact action opens existing Linktree contact options; there is no form backend.

`scripts/sync-brand.mjs` copies favicon/social assets from `/brand` and generates compact WebP patterns with Sharp, preserving artwork proportions. Generated patterns live in ignored `public/brand/` and are rebuilt by dev/build. Original brand resources are untouched. Run `bun run brand:sync` independently to refresh public assets.

`index.html` contains SEO and structured data; `public/site.webmanifest` contains installed-app metadata. Preserve the custom domain in these files, `public/CNAME`, robots, and sitemap when updating branding.

## Verification

```bash
bun run test                    # brand asset checks
bunx playwright install chromium # first-time browser setup
bun run test:e2e                 # browser regression and axe accessibility checks
bun run build                   # type checking and production output
```

Browser checks cover skip navigation, mobile menu Escape/navigation/resize behavior, preserved project URLs and status, loaded assets, reduced motion, console errors, horizontal overflow, and WCAG A/AA automated checks at 320, 390, 768, 1024, 1440, and 1920px, plus 200% text enlargement and parallax/reduced-motion behavior. To run the same checks against production output, use `npm run build` followed by `TEST_PREVIEW=1 npm run test:e2e`. Automated accessibility checks supplement visual and keyboard review.

## Deployment

```bash
./deploy.sh "your commit message"
```

The script builds and publishes `dist/` through a git worktree to the `prod` branch, preserving `CNAME`. Running the development or verification commands does not deploy the site.
