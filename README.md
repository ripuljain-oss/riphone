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

## Content

Posts live in `src/content/posts/` as MDX. See `.cursor/rules/content.mdc`
and `drafting.mdc` for frontmatter and voice.

## Design spec

`handoff/` holds reference HTML, tokens, and the original design docs.
