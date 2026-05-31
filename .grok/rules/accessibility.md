# Accessibility

## Landmarks

- One `<main>` per page
- `<header class="mast">` + `<nav aria-label="Primary">`
- Sidebars: `<aside aria-label="…">`
- Posts: `<article>`; dates: `<time datetime="YYYY-MM-DD">`
- Archive years: `<section id="y2026" aria-labelledby="y2026-h">`

## Focus

- Visible focus ring (default OK; custom:
  `outline: 2px solid var(--color-accent); outline-offset: 2px`)
- Skip link first in `<body>`, targets `#main`
- No positive `tabindex`

## Contrast

- Body/meta/muted on `#fafafa` — AA OK
- Accent `#d97757` — large text / UI only, not body copy
- Small text on accent → use `--color-bg` or white; re-check

## Motion

Keep `prefers-reduced-motion` block from `tokens.css`.

## Screen readers

- `★` on originals (`star: true` essays only): `aria-label="Original post"`
- Wordmark link: `aria-label="riphone — home"`

> Mirrored from `.cursor/rules/accessibility.mdc` for Grok / multi-agent use. Update both when rules evolve.
