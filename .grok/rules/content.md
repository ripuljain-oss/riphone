# Content

## File naming

`src/content/posts/YYYY-MM-DD-short-slug.mdx` (date prefix for sorting in editor;
public URL slug comes from **title**, not filename).

## Frontmatter

```yaml
---
title: "Sharp Title Here"
description: "One line for Google, X cards, and JSON-LD — your take, not a summary"
date: 2026-05-27T12:00:00Z   # always include time for sort order
type: linked                 # essay | linked | notes | review
tags: [business, tech]
star: false                  # true only for type: essay
linkUrl: "https://…"         # required when type: linked
linkAuthor: "Name"           # optional; use in attribution line
---
```

`linkAuthor`: verify on live page — format `"Name, Outlet"` (e.g. `"Abigail Bassett, The Verge"`).

### Type rules

- **linked** — `linkUrl` required. **Headline `<a>` → `linkUrl`.** Body on permalink:
  attribution (with link to source) → one blockquote → commentary. Never summarize
  the whole piece.
- **essay** — `star: true` → ★ on title. Thesis in paragraph one.
- **notes** — 1–3 paragraphs; tag as `notes` for archive filter (no `/notes` page).
- **review** — verdict first; rare.

## Ordering

Newest first on `/`, `/archive`, `/feed.xml`, `/llms.txt`. Same calendar day →
different `date` times (e.g. `T19:00:00Z` vs `T20:00:00Z`).

## Tags

- Frontmatter `tags: [foo, bar]` drives sidebar counts and `/tags/foo` pages.
- **Every tag in sidebar must have a working `/tags/{tag}` route** (static paths from all posts).

## SEO / AEO (built in)

- `description` in frontmatter → meta, OG, Twitter, BlogPosting JSON-LD
- Omitted → auto from first ~160 chars of body (Markdown stripped)
- Post pages: `BlogPosting` + `article` OG; home: `WebSite`; archive/tags: `CollectionPage`
- `public/robots.txt`, dynamic `/llms.txt`, `/sitemap-index.xml`

## UI copy

- Nav (3 links): `/latest`, `/archive`, `/feed.xml`
- Footer left: `© {year}` + [linked @bmbyslm](https://x.com/bmbyslm)
- Footer right: `riphone · {route}` or `riphone · v1` on home
- Feed `<link>` type: `application/rss+xml`

## Don'ts

- Emoji; "I think"; bare URLs in prose; invented quotes
- `Linked:` prefix in titles unless it *is* the take

> Mirrored from `.cursor/rules/content.mdc` for Grok / multi-agent use. Update both when rules evolve.
