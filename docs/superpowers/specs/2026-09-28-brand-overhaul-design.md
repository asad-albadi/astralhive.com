# Astral Hive website brand overhaul

## Intent and scope
Overhaul the entire existing single-page website around `/brand`, preserving React, TypeScript, Vite, plain CSS, the content/data separation, all seven products, section anchors, and existing external destinations. Success means a coherent, accessible, responsive brand experience from navigation through footer, including browser icons and social previews. No backend exists; retain honest contact links rather than introducing a nonfunctional form.

## Brand audit
Inspected the complete recursive inventory: both Markdown documents, CSS/JSON tokens, asset generator, all four reference boards, original logo, six SVG exports and their raster counterparts, all pattern sources/exports, favicon/application icons, and social treatments. SVGs embed approved raster geometry rather than vector paths. The current horizontal wordmark includes its own monogram; never add a second mark beside it. Preserve original aspect ratios, minimum sizes, and 20% clear space. Small exports must not be enlarged for hero artwork.

The boards govern discrepancies: their palette is navy #0B1A3B, indigo #6366FF, violet #8B5CF6, white, and light gray #E5E7EB. Use existing exports even where older documentation describes obsolete paths or monochrome variants differently. Montserrat is primary; Space Grotesk is an optional alternative, unnecessary for this design. Neutral secondary text may use documented #5F667A and #B9BED0. Radius tokens are 8, 12, and 16px. The visual language is geometric, spacious, restrained, and precise.

## Existing application audit
One page composes Nav, Hero, Services, Projects, About, Contact, and Footer. Data lives in src/data.ts. Plain CSS defines tokens and every component. A hook runs scroll reveals. No application router, forms, or empty states exist. Two Instagram bot legal Markdown documents are repository documents, not rendered routes. No AGENTS.md was found.

Conflicts: obsolete masked hive logo; unapproved cyan gradients and ambient glows; Inter and Source Code Pro typography; near-black glass surfaces; unapproved project-specific decorative gradients; duplicate contact destinations presented as different actions; legacy favicon/social assets and manifest colors. Mobile navigation lacks Escape handling and explicit controls linkage. Focus styling is incomplete. Reveal content starts hidden globally.

## Recommended visual direction
Light editorial surfaces paired with navy feature sections. Alternative A, an entirely navy site, supports the brand but gives less tonal separation. Alternative B, an all-white site with minimal imagery, is clean but underuses the approved geometry. The recommended mixed direction follows the boards' light layouts and navy banner applications.

- Header: approved horizontal wordmark on white, clear section links, one contact action. Compact mobile navigation with accessible toggle, Escape dismissal, and closure on navigation.
- Hero: large left-aligned Montserrat headline and clear supporting copy; primary project enquiry and secondary work link. Approved geometric background in a separate visual panel, with sufficient calm space for any logo placement. No synthetic dashboard or invented results. Existing platform/product/direct-contact facts become a quiet information strip; derive product count from data.
- Services: numbered section label, strong headline, three aligned service cards with consistent Lucide outline icons. Supporting engineering principles sit below with reduced visual weight.
- Products: all seven entries preserved, with consistent brand surfaces and project logos intact. Larger lead entries can establish hierarchy without duplicate rendering. Retain status badges, including coming soon, and avoid claiming every product is already shipped. Remove per-product decorative accent colors while preserving their actual identity assets.
- About: split studio introduction and numbered working principles. Keep the solo developer positioning and portfolio destination.
- Contact: navy panel with approved geometric banner placed away from text. One clear action explains that contact options open on Linktree. No invented email address or response-time promise.
- Footer: approved wordmark, grouped navigation/external links, copyright, and return-to-top affordance.

## Design system and architecture
Import canonical brand CSS tokens. Add a separate semantic token layer for text, surfaces, borders, focus, type scale, weights, spacing, shadows, container width, and timing. Keep responsive breakpoint values in one documented stylesheet; native CSS custom properties cannot control media-query conditions.

Introduce small shared primitives for action links, section headings, and brand artwork. Retain data-driven service and product rendering. Split styling into tokens, global/shared styles, and component styling where useful. Do not introduce a UI framework. Use local Montserrat files with its license and font-display: swap; retain sensible fallbacks. Use asset imports for rendered brand resources and a repeatable copy step for fixed-path favicon/social assets.

## UX and accessibility
Provide skip navigation, semantic landmarks/headings, visible focus states, 44px interaction targets, sufficient text/control contrast, explicit external-link cues, and decorative image alt handling. Primary small text should not use low-contrast violet on white. Respect reduced motion and make content visible if reveal enhancement is unavailable. Avoid hover transforms on noninteractive service cards. Use real links for navigation and buttons for menu state.

## Responsive composition
Review 360/390px mobile, 768px tablet, 1024px laptop, 1440px desktop, and 1920px large desktop. Mobile stacks the hero and cards, simplifies visual artwork, and provides full-width actions when useful. Tablet uses two-column product layouts; larger layouts use bounded containers and deliberate grids. Check 320px minimum width and zoom/reflow. No horizontal overflow or clipped labels.

## Validation and final review
Run the TypeScript/production build and existing brand asset tests. Use browser checks for every section at representative viewport sizes, mobile menu operation and keyboard focus, anchor offsets, all product destinations, reduced motion, missing assets, and console errors. Capture and inspect screenshots. Scan source/public output for obsolete logo references, legacy colors/fonts, unused CSS and dead assets. Preserve product logo assets and brand source files. Confirm production output includes local fonts, icons, social artwork, and unchanged deployment domain metadata. Do not deploy as part of this work.

## Implementation refinements requested during review
- Root image boards explicitly override all text documentation, including fonts/tokens; subdirectory exports are the implementation sources.
- Product cards lead with logo and name. Platform/category labels and statuses follow descriptions.
- The hero artwork panel now contains useful featured-product links rather than empty decorative space.
- Add a faint light treatment of the approved diagonal-node pattern behind light page sections and restrained artwork-only parallax; honor reduced motion dynamically. Use a CSS luminance mask to preserve source geometry on a white background.
- AstralCalc's light artwork receives a navy logo surface.
- Text enlargement to 200% must reflow without horizontal overflow.
