# riphone

Personal blog at [riphone.org](https://riphone.org). Mono Ink + Terracotta design;
Daring Fireball–style writing.

## Develop

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to any static host. Set the canonical site URL in
`astro.config.mjs` (`site: 'https://riphone.org'`).

## Cloudflare Pages (recommended)

This site is **static** (`output: 'static'`). You do **not** need
`astro add cloudflare` or the Workers adapter.

| Setting | Value |
| ------- | ----- |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | 20 or 22 |

Do **not** use a build step that runs `astro add cloudflare` — that targets
Workers/SSR and caused the missing `public/.assetsignore` error. The file is
included anyway if Cloudflare runs that wizard.

Custom domain: **riphone.org** → add in Pages → Custom domains.

## Content

Posts live in `src/content/posts/` as MDX. See `.cursor/rules/content.mdc`
and `drafting.mdc` for frontmatter and voice.

## Design spec

`handoff/` holds reference HTML, tokens, and the original design docs.
