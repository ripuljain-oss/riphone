# Operations

## GitHub

- Remote: `https://github.com/ripuljain-oss/riphone`
- Default branch: `main`
- Push to `main` triggers Cloudflare redeploy (if connected)

## Build & deploy

```bash
npm install
npm run build    # output: dist/
npm run preview  # local check
```

**Cloudflare Pages / Workers (connected to Git):**

| Setting | Value |
| ------- | ----- |
| Build command | `npm run build` only |
| Output directory | `dist` |
| Node | 20 or 22 |

Do **not** use `astro add cloudflare` for this project — site is `output: 'static'`.
If Cloudflare's wizard runs it anyway, `public/.assetsignore` must exist
(`_worker.js`, `_routes.json`).

## After deploy — verify

- https://riphone.org/
- https://riphone.org/feed.xml
- https://riphone.org/sitemap-index.xml
- https://riphone.org/robots.txt
- https://riphone.org/llms.txt
- A new post permalink and `/tags/{tag}` if tags changed

## Publishing a new post (agent)

1. Add `src/content/posts/YYYY-MM-DD-short-slug.mdx` with full frontmatter
2. `npm run build` locally (always for new posts — validates content + tag routes)
3. Commit + push **only when Ripul asks** ("deploy", "push", "publish")
4. Use ISO `date` with time newer than existing posts for homepage order
5. Commit message: `Add post: {title}` — stage **only** the post MDX unless Ripul asks otherwise

## Search Console (Ripul)

Submit `https://riphone.org/sitemap-index.xml` once; indexing lags days/weeks.

> Mirrored from `.cursor/rules/operations.mdc` for Grok / multi-agent use. Update both when rules evolve.
