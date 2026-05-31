# Components

Names match `src/styles/components.css` / `handoff/reference/styles.css`.

## `<Mast>`

- `▮ riphone` wordmark (`mast__wordmark::before`, accent)
- Nav: `/latest`, `/archive`, `/feed.xml` only (v1)
- `aria-current="page"` on active route

## `<Post>`

- Dateline (`<time datetime>`) · title · optional ★ if `star: true`
- **Linked:** title `<a href={linkUrl}>` (external). Permalink is separate URL.
- Body: serif; blockquote: 2px accent left rule
- `.post + .post` hairline separator

## `<ArchiveRow>`

- Date · title (same href rules as Post) · type tag (Essay/Linked/Notes/Review)

## `<SiteFooter>`

- Left: `© {year}` + `SITE.xHandle` linked to `SITE.xUrl`
- Right: `riphone · {route}`

## Tag sidebar (home + `/tags/[tag]`)

- Links must be `/tags/{tag}` — page exists at `src/pages/tags/[tag].astro`
- `aria-current="page"` on active tag

## Sponsor primitives (dormant)

`<RateRow>`, `<AvailabilityCal>`, `<CTA>` — handoff only; `/sponsor` not shipped

## Reuse rule

New UI → existing primitives + tokens first. Document here before adding components.

> Mirrored from `.cursor/rules/components.mdc` for Grok / multi-agent use. Update both when rules evolve.
