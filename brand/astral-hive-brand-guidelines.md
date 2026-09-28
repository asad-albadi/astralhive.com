# Astral Hive — Brand Guidelines

## Source of Truth

The visual boards in this directory are the authoritative reference for the asset system:

- `brand_assets.png` — logo, wordmark, icon, and palette treatments
- `brand_patterns.png` — approved patterns and applications
- `logo_direction.png` — logo construction and lockup direction
- `og_social_cards.png` — approved 1200 × 630 social-card treatments

Where these boards conflict with older guidance below, the boards take precedence.

## Brand Overview

**Astral Hive** is a software company focused on custom software development, web applications, automation, SaaS products, APIs, enterprise system integration, and technology consulting.

The brand should feel:

- Modern
- Technical
- Minimal
- Professional
- Precise
- Forward-looking

The visual identity is built around a geometric **AH monogram** with a subtle hexagonal structure, representing both **Astral Hive** and the modular, interconnected nature of software systems.

---

## Logo

Primary logo assets:

```text
logos/astral-hive-monogram-gradient.svg
logos/astral-hive-wordmark-navy.svg
```

When used inside this document or a compatible Markdown renderer:

```html
<img src="logo.svg" alt="Astral Hive Logo" width="240">
```

### Logo Usage

The monogram is the primary brand mark and may be used:

- On its own as an icon, favicon, avatar, or application mark.
- Alongside the **Astral Hive** wordmark.
- In monochrome black or white.
- With the approved Astral gradient where appropriate.

### Clear Space

Maintain clear space around the logo equal to at least **20% of the logo's width**.

Do not place text, borders, icons, or other visual elements inside this area.

### Minimum Size

For digital use:

- Standalone monogram: minimum **24 × 24 px**
- Logo with wordmark: minimum recommended width **140 px**

At very small sizes, use the monogram without the wordmark.

### Logo Restrictions

Do not:

- Stretch or distort the logo.
- Rotate the logo.
- Alter the proportions.
- Add shadows, outlines, bevels, or other effects.
- Place the logo over visually noisy backgrounds.
- Use unapproved colors.
- Recreate or redraw the monogram inconsistently.

---

## Color Palette

### Primary Colors

| Role | Name | Hex |
|---|---|---|
| Primary Dark | Midnight Navy | `#0B1A3B` |
| Primary Accent | Violet | `#8B5CF6` |

These are the core Astral Hive brand colors.

### Supporting Colors

| Role | Name | Hex |
|---|---|---|
| Bright Accent | Electric Indigo | `#6366FF` |
| Light Background | White | `#FFFFFF` |
| UI / Dividers | Light Gray | `#E5E7EB` |

### Primary Gradient

The Astral gradient may be used for digital brand elements, highlights, hero sections, and selected logo treatments.

```css
background: linear-gradient(
  135deg,
  #6366FF 0%,
  #8B5CF6 100%
);
```

### Recommended Usage

Use **Midnight Navy** as the dominant dark color and **Violet** as the primary accent.

Electric Indigo and Violet should support the main palette rather than compete with it.

For formal documents, print, or situations where color is unavailable, use the monochrome logo in pure black or white.

---

## Typography

### Primary Typeface

**Montserrat**

Montserrat is the primary Astral Hive typeface.

Recommended weights:

| Usage | Font |
|---|---|
| Main headings | Montserrat Bold / SemiBold |
| Subheadings | Montserrat SemiBold |
| Body text | Montserrat Regular |
| Secondary / light headings | Montserrat Light |
| Labels / captions | Montserrat Medium |

### Logo Typography

When reproducing the Astral Hive wordmark:

**ASTRAL**

```text
Montserrat SemiBold / Bold
```

**HIVE**

```text
Montserrat Light
```

**SOFTWARE COMPANY**

```text
Montserrat Medium
Uppercase
Wide letter spacing
```

The visual distinction between the heavier **ASTRAL** and lighter **HIVE** should be preserved.

### Letter Spacing

For branding-oriented uppercase text, increased tracking is encouraged.

Example:

```css
.brand-caption {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.25em;
}
```

---

## Alternative Typeface

**Space Grotesk** may be used for selected digital interfaces or technical/product-focused materials where a slightly more distinctive technology-oriented appearance is desired.

Montserrat remains the primary brand font.

---

## Digital UI Recommendations

### Light Theme

```css
--brand-primary: #8B5CF6;
--brand-primary-bright: #6366FF;
--brand-primary-dark: #0B1A3B;

--brand-navy: #0B1A3B;

--background: #FFFFFF;
--surface: #FFFFFF;

--text-primary: #0B1A3B;
--text-secondary: #5F667A;
```

### Dark Theme

```css
--brand-primary: #6366FF;
--brand-primary-dark: #8B5CF6;

--background: #070D1C;
--surface: #0B1A3B;

--text-primary: #FFFFFF;
--text-secondary: #B9BED0;
```

---

## Brand Style

Astral Hive's visual language should favor:

- Clean layouts
- Generous whitespace
- Geometric shapes
- Strong alignment
- Minimal decoration
- Subtle gradients
- Rounded UI elements where appropriate
- Clear typography hierarchy
- High contrast
- Restrained use of color

Avoid excessive futuristic effects, neon-heavy visuals, generic circuit-board graphics, and overly complex technology imagery.

The identity should feel like a **serious software engineering company**, not a gaming, cryptocurrency, or generic IT-support brand.

---

## Iconography

Icons should be:

- Simple
- Geometric
- Consistent in stroke width
- Easily recognizable
- Minimal in detail

Preferred icon styles are outline or simple geometric glyphs.

Use brand violet selectively for important actions and highlights.

---

## Imagery

When imagery is required, prefer visuals related to:

- Software products
- Modern interfaces
- Systems architecture
- Automation
- Data and connectivity
- Abstract geometry
- Technology in practical business environments

Avoid generic stock imagery where possible.

---

## Tone of Voice

Astral Hive communications should be:

- Clear
- Direct
- Confident
- Technical when necessary
- Easy to understand
- Professional without sounding corporate or overly formal

Prefer concise explanations over marketing jargon.

### Example

Instead of:

> We leverage cutting-edge innovative technologies to empower digital transformation.

Prefer:

> We design and build reliable software, automation, and digital platforms for real business needs.

---

## Brand Summary

```text
Brand: Astral Hive
Industry: Software Development / Technology

Primary Logo:
logo.svg

Primary Colors:
#0B1A3B — Midnight Navy
#8B5CF6 — Violet

Supporting Colors:
#6366FF — Electric Indigo
#E5E7EB — Light Gray
#FFFFFF — White

Primary Typeface:
Montserrat

Alternative Typeface:
Space Grotesk

Logo Style:
Geometric AH Monogram

Visual Direction:
Minimal / Modern / Technical / Professional
```

---

## Asset Structure

Recommended brand asset structure:

```text
brand/
├── logo.svg
├── README.md
├── favicon.svg
├── logo-black.svg
├── logo-white.svg
├── logo-gradient.svg
└── assets/
    ├── social/
    ├── web/
    └── print/
```

`logo.svg` should remain the canonical source for the primary Astral Hive logo.
