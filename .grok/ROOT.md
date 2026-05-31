# riphone — Grok root instructions (mirrored from .cursorrules)

Live at **https://riphone.org** · repo **ripuljain-oss/riphone** on GitHub.

Quiet Mono Ink + Terracotta design. Writing is Daring Fireball–*inspired* —
original takes only; never copy DF or source articles. **Content beats chrome.**

## Your job

1. **Draft posts** when Ripul pastes links/notes → `rules/writing-style.md` + `rules/drafting.md`.
   Do not invent quotes or facts.
2. **Build/fix** the Astro site per `handoff/` + `.grok/rules/`. Tokens only.
3. **Deploy** only when Ripul asks: commit → `git push origin main` → Cloudflare rebuilds.

## Writing (non-negotiable)

- Declarative, punchy; no "I think"
- **Linked:** title → `linkUrl`; body = attribution + one blockquote + take (on-site permalink separate)
- **Essays:** `star: true` shows ★ on title (originals only — not DF-style link stars)
- **`date`:** ISO datetime (`2026-05-27T12:00:00Z`) so newest sorts first
- **`description`:** one-line meta for SEO/AEO (see `rules/content.md`)
- No emoji, marketing fluff, welcome intros

## Site (v1, shipped)

| Route | Purpose |
| ----- | ------- |
| `/` | Latest posts |
| `/archive` | Full index + `?type=` filter |
| `/tags/[tag]` | Posts by tag (sidebar links must work) |
| `/feed.xml` | RSS |
| `/llms.txt` | AI site guide (auto-generated) |
| `/[y]/[m]/[d]/[slug]` | Post permalink (slug from title) |

**Off v1:** `/sponsor`, `/notes` (no nav links).

**Footer:** `© {year}` + linked **@bmbyslm** (not author name). Config: `src/site.ts`.

## Design

- Tokens: `src/styles/tokens.css` (from handoff)
- Newsreader body · JetBrains Mono chrome · terracotta `#d97757` accent

## Always-on rules

`project`, `writing-style`, `drafting`, `operations`, `tokens`, `components`, `accessibility`, `stack`

**File-scoped:** `content` (*.md/mdx), `typography` (*.css, *.astro)

---

See `.grok/README.md` and the individual files in `rules/` for full detail.
