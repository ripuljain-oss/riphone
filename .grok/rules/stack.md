# Stack

**Astro 5** · static output · MDX content collections · deployed on Cloudflare.

## Key paths

```
src/
  site.ts                 # SITE url, name, author, xHandle, xUrl
  content/posts/*.mdx     # posts (frontmatter in content.md)
  content/config.ts       # zod schema
  lib/posts.ts            # sort, paths, tags, slugify
  lib/seo.ts              # meta descriptions, JSON-LD helpers
  layouts/Base.astro      # meta, OG, RSS link, JSON-LD slot
  layouts/PageWithSidebar.astro
  components/             # Mast, Post, ArchiveRow, SiteFooter, JsonLd
  pages/
    index.astro
    archive.astro
    tags/[tag].astro      # required for sidebar tag links
    [year]/[month]/[day]/[slug].astro
    feed.xml.ts
    archive.txt.ts
    llms.txt.ts           # dynamic; lists all posts
  styles/tokens.css
  styles/components.css
public/
  robots.txt
  favicon.svg
  og.svg
  .assetsignore           # Cloudflare adapter safety
handoff/                  # design reference (not all pages shipped)
```

## Config

- `astro.config.mjs`: `site: 'https://riphone.org'`, `trailingSlash: 'never'`, sitemap + mdx
- Permalink slug: from **title** via `slugify()` in `lib/posts.ts`, not filename
- Linked posts: `postTitleHref()` → external URL on title; `postPath()` for permalink

## Integrations

`@astrojs/mdx`, `@astrojs/sitemap`, `@astrojs/rss` → `/feed.xml` (RSS 2.0)

## Don't add without ask

Client router, analytics, comments, Tailwind without token mapping, `/sponsor` or `/notes` nav

> Mirrored from `.cursor/rules/stack.mdc` for Grok / multi-agent use. Update both when rules evolve.
