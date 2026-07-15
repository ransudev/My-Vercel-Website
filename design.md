# Design — Ransu Portfolio

A locked design system for this portfolio. Every page reads this file before visual changes are made.

## Genre

Neo-brutalist brand portfolio: blunt, mechanical, warm, and deliberately physical.

## Audience and task

- Primary audience: recruiters and potential collaborators.
- Primary task: evaluate the work, then contact Lance.
- Content rule: projects are proof; decoration remains secondary.

## Macrostructure family

- Identity page: oversized typographic poster with a boxed practice manifest and no imagery.
- Work page: Portfolio Grid with uniform project records and typographic media fields.
- Profile pages: Long Document variants for About and Skills.
- Contact page: Split Studio with the form and direct channels held in equal tension.

## Theme

The four brand colors were supplied by the user. The system uses them as a full-palette screen-print composition with oxblood structure and flat terracotta fields.

- `--color-brand-deep`: `oklch(0.34772 0.08896 28.24)` — `#60241E`
- `--color-brand-primary`: `oklch(0.44694 0.14751 29.38)` — `#95271D`
- `--color-brand-mid`: `oklch(0.54636 0.13828 25.94)` — `#B34A44`
- `--color-brand-highlight`: `oklch(0.69558 0.14844 44.31)` — `#E77B49`
- Paper: brand-tinted off-white.
- Ink: near-black oxblood.
- Color strategy: full palette; saturated fields are intentional.

## Typography

- Display: Geist, weight 800–900, roman.
- Body: Geist, weight 400.
- Outlier: Geist Mono for metadata and the wordmark only.
- Display tracking: `-0.04em`.
- Type scale: major third.

## Spacing

Four-point named scale in `tokens.css`. Pages use named tokens rather than raw color or font values.

## Motion

- No ambient loops, bounce, parallax, or decorative animation.
- Interactive feedback uses transform and opacity only.
- Reduced-motion fallback is opacity-only and at most 150ms.

## Microinteractions stance

- Silent success.
- Visible, immediate focus rings.
- Hover feedback has a keyboard-focus equivalent.
- Touch targets are at least 44 × 44 CSS pixels.

## CTA voice

- Primary: flat orange rectangle, thick oxblood border, hard offset shadow.
- Secondary: off-white rectangle with the same hard geometry.
- Tertiary: bold underlined typographic link.

## What pages must share

- The `ransu.dev` wordmark.
- Palette, typography, control geometry, navigation, and footer.
- Thick rules, hard shadows, square controls, blunt type, and restrained motion.

## What pages may differ on

- Macrostructure and content density.
- Project-card composition.
- Imagery is deferred until the user supplies or approves assets.

## Exports

### tokens.css

The canonical implementation is in `tokens.css` at the project root.

### Tailwind v4 `@theme`

```css
@theme inline {
  --color-background: var(--color-paper);
  --color-foreground: var(--color-ink);
  --color-accent: var(--color-accent);
  --font-sans: var(--font-body);
  --font-mono: var(--font-outlier);
}
```

### DTCG `tokens.json`

```json
{
  "color": {
    "paper": { "$value": "oklch(0.14 0.015 28.24)", "$type": "color" },
    "ink": { "$value": "oklch(0.94 0.01 44.31)", "$type": "color" },
    "accent": { "$value": "oklch(0.44694 0.14751 29.38)", "$type": "color" }
  },
  "font": {
    "display": { "$value": "Geist", "$type": "fontFamily" },
    "body": { "$value": "Geist", "$type": "fontFamily" },
    "mono": { "$value": "Geist Mono", "$type": "fontFamily" }
  },
  "space": {
    "md": { "$value": "1rem", "$type": "dimension" }
  }
}
```

### shadcn/ui CSS variables

```css
:root {
  --background: 0.14 0.015 28.24;
  --foreground: 0.94 0.01 44.31;
  --primary: 0.44694 0.14751 29.38;
  --primary-foreground: 0.94 0.01 44.31;
  --muted: 0.25 0.028 28.24;
  --muted-foreground: 0.68 0.02 34;
  --border: 0.31 0.035 28.24;
  --input: 0.31 0.035 28.24;
  --ring: 0.69558 0.14844 44.31;
  --radius: 0.75rem;
}
```
