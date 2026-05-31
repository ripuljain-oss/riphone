# riphone — project ground rules

**Live site:** https://riphone.org · **Author:** Ripul Jain · **X:** [@bmbyslm](https://x.com/bmbyslm)

Single source for names/URLs: `src/site.ts`. Repo: `ripuljain-oss/riphone`.

## What this is

A personal link-and-essay blog — text-first, visually quiet, editorially sharp.
[DF](https://daringfireball.net/) is **inspiration** for voice and link-post shape,
not a template to clone. Ripul writes **original** commentary; never republish or
paraphrase whole articles. Layout overlap (sidebar, readable column) is fine;
**content** is what makes riphone riphone.

## Aesthetic (locked)

- Mono Ink + Terracotta — `#fafafa` / `#14151a` / accent `#d97757`
- Newsreader body, JetBrains Mono chrome (titles, nav, datelines)
- `▮ riphone` wordmark (`::before` accent glyph)
- 200px sidebar + 580px content, 920px max page
- No gradients, card shadows, rounded corners, emoji

## Editorial (locked)

- **Skeptic first:** sharp takedowns of tech bullshit — hype, strategy theater, monopoly hand-waves, consumer-hostile moves. See `writing-style.md`.
- DF-style compression: short paragraphs, sharp headlines, link posts with one blockquote + take
- Ripul researches → pastes URL/notes in chat → agent drafts MDX → Ripul edits
- **★** only on `type: essay` with `star: true` (originals). Linked posts: no star.
- Target cadence: **1–2 posts/week**, sustainable; consistency over volume

## v1 pages (live)

- `/`, `/archive`, `/tags/[tag]`, post permalinks, `/feed.xml`, `/archive.txt`, `/llms.txt`
- **Not in nav:** `/sponsor`, `/notes` (code may exist in handoff only)

## Hard nos

- Extra accent colors, UI libraries, inline hex in CSS
- Invented quotes, facts, or pull lines not in Ripul's source material
- `astro add cloudflare` / Workers adapter for this static blog unless explicitly requested
- Commit or push to GitHub unless Ripul asks

## When in doubt

`handoff/reference/*.html` for layout · `writing-style.md` for voice · `operations.md` for deploy

> Mirrored from `.cursor/rules/project.mdc` for Grok / multi-agent use. Update both when rules evolve.
