# Astral Hive brand kit

Start with [the brand guidelines](astral-hive-brand-guidelines.md). The four reference boards—`brand_assets.png`, `brand_patterns.png`, `logo_direction.png`, and `og_social_cards.png`—are the visual source of truth. This folder is the ready-to-use digital handoff.

## Asset index

- `logo.png` is the original supplied black monogram raster source. Do not redraw or trace it.
- `logo_direction.png` is the approved lockup direction. The wordmarks in `logos/` are cropped from that approved artwork so their typography is not re-typeset with a substitute font.
- `logos/` contains lossless black, violet, white, and Astral-gradient PNG monograms, plus horizontal wordmarks for light and dark backgrounds.
- SVG exports embed the approved raster artwork from `brand_assets.png`; this preserves the exact supplied logo geometry and wordmark spacing without auto-tracing or font substitution.
- `icons/` contains 16, 32, 180, 192, and 512 px PNG exports.
- `social/` contains PNG exports: `open-graph` is 1200 × 630 px; `profile` is 1080 × 1080 px.
- `social/open-graph-primary.png`, `social/open-graph-dark.png`, and `social/open-graph-light.png` are the three approved 1200 × 630 card treatments; `open-graph.png` aliases the primary card.
- `patterns/` contains the approved hex, monogram, diagonal-node, geometric-block, and banner-strip treatments.
- `tokens/astral-hive.css` and `tokens/astral-hive.json` expose the approved visual tokens for products and marketing sites.

## Use

Use navy or black marks on light, calm backgrounds. Use white marks on navy or dark backgrounds. The violet and gradient variants are for restrained digital emphasis. Keep a clear area equal to 20% of the mark width and never use the monogram below 24 × 24 px. Use a monogram—not a wordmark—at small sizes.

The supplied mark is a raster source, so use the original 1254 × 1254 PNG or the provided exports; do not scale small raster exports up. The intended primary font is Montserrat; Space Grotesk is the approved digital alternative.

## Rebuild raster exports

After changing the source monogram or this kit’s SVG generator, run:

```bash
node brand/scripts/build-assets.mjs
```
- `logos/astral-hive-bilingual-stacked.svg` , `astral-hive-bilingual-stacked.png`, and `astral-hive-bilingual-stacked-transparent.png` place the approved gradient monogram above the Arabic `الخلية النجمية ش.ش.و` and English `Astral Hive SPC` names. The SVG preserves the supplied raster mark and typesets the two names for flexible reuse.

The regular PNG has a white background; the `-transparent.png` export preserves transparency.

Rebuild these bilingual stacked lockups with:

```bash
node brand/scripts/build-bilingual-lockup.mjs
```
