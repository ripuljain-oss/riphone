# AGENTS.md — riphone (riphone.org)

**Project:** Personal blog at https://riphone.org  
**Stack:** Astro 5 (static), MDX, Cloudflare Pages  
**Design:** Mono Ink + Terracotta (strict token system)  
**Voice:** Skeptical first — sharp takedowns of tech bullshit; DF-inspired compression, original takes, no fluff

---

## Critical: Always load these rules first

Before any work on this project, read the following (in order):

1. `.grok/README.md` — overview of the rules system
2. `.grok/rules/project.md` — brand, aesthetic, editorial north star, hard nos (always apply)
3. `.grok/rules/writing-style.md` — exact voice, structure for linked/essay/notes (always apply)
4. `.grok/rules/operations.md` — Git, deploy, publish workflow (always apply)
5. `.grok/rules/drafting.md` — how to draft new posts when Ripul provides research

Then load file-scoped rules as relevant:

- Editing MD/MDX/content → `.grok/rules/content.md`
- CSS, Astro components, typography → `.grok/rules/tokens.md` + `.grok/rules/typography.md`
- Components or layouts → `.grok/rules/components.md`
- Any UI work → `.grok/rules/accessibility.md`
- Architecture questions → `.grok/rules/stack.md`

---

## Key constraints (non-negotiable)

- **Never invent facts or quotes.** Only use what Ripul provides.
- **Design tokens only.** All colors, fonts, spacing from `handoff/tokens.css` or `src/styles/tokens.css`. No inline hex or ad-hoc values.
- **Content model:** `type: linked | essay | notes | review`. Stars (`★`) only on original essays with `star: true`.
- **Deploy:** Commit/push to `main` **only when explicitly asked**. Cloudflare auto-builds from Git.
- **No surprises:** Do not add Tailwind, analytics, comments, client router, or new pages (`/sponsor`, `/notes`) without being told.
- **Writing:** Skeptical, sharp takedowns of tech bullshit; short paragraphs; one blockquote max for linked posts; no "I think", no emoji.

---

## Useful references

- Visual source of truth: `handoff/reference/*.html` + `handoff/DESIGN-SYSTEM.md`
- Site identity (single source): `src/site.ts`
- Current posts: `src/content/posts/`
- Token source: `handoff/tokens.css` (and `tokens.json`)

---

## For Grok users

This `AGENTS.md` + the `.grok/` folder were created so Grok (and other agents) follow the exact same rules Cursor uses via `.cursor/rules/`.

The `.cursor/` tree remains the primary (with globs/alwaysApply metadata). Keep `.grok/rules/*.md` in sync when rules change.

---

**Author:** Ripul Jain (@bmbyslm)  
**Repo:** ripuljain-oss/riphone
