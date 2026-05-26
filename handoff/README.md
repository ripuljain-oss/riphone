# ripblog — Cursor handoff package

Everything Cursor needs to build the site without asking design questions
back. Drop this `handoff/` folder into the project root of your new
ripblog repo and Cursor will pick up the rules automatically.

---

## What's in here

```
handoff/
├── README.md                ← this file (overview + how to use)
├── DESIGN-SYSTEM.md         ← foundations, tokens, component summary
├── PAGES.md                 ← per-page spec (data, routing, sections)
├── .cursor/
│   └── rules/
│       ├── project.mdc         (always)   brand, voice, hard nos
│       ├── tokens.mdc          (always)   never inline a color/size
│       ├── components.mdc      (always)   8 primitives, how they compose
│       ├── accessibility.mdc   (always)   landmarks, contrast, motion
│       ├── stack.mdc           (always)   Astro layout, integrations
│       ├── typography.mdc      (auto)     attaches on css/jsx/astro
│       └── content.mdc         (auto)     attaches on md/mdx
├── tokens.css               ← drop into src/styles/
├── tokens.json              ← same tokens as JSON (Tailwind/SD friendly)
└── reference/
    ├── styles.css           ← drop into src/styles/ (rename if you like)
    ├── landing.html         ← canonical Landing markup
    ├── archive.html         ← canonical Archive markup
    └── sponsorship.html     ← canonical Sponsorship markup
```

---

## How to use this with Cursor

### 1. Drop the folder into your project root

```bash
mv handoff/.cursor /path/to/your/repo/.cursor
mv handoff /path/to/your/repo/handoff
```

The rules in `.cursor/rules/*.mdc` are picked up automatically by Cursor.
The five `alwaysApply: true` rules attach to every chat. The two `globs`
rules attach when you're editing matching files.

### 2. Open the reference HTML files first

Before writing any component, open the three `reference/*.html` files in
a browser. **The design is what they show.** All implementation work is
translation, not reinterpretation.

### 3. Start with tokens, then layouts, then pages

A sensible build order:

1. Scaffold the framework (Astro is recommended — see `stack.mdc`).
2. Copy `tokens.css` to `src/styles/tokens.css` and import it once in
   the base layout.
3. Copy `reference/styles.css` to `src/styles/components.css` and import
   it after tokens.
4. Build the `<Mast>` and `<SiteFooter>` components first — every page
   uses them.
5. Build the `<PageGrid>` layout.
6. Build per-page primitives (`<Post>`, `<ArchiveRow>`, etc.).
7. Wire pages.
8. Add the content collection, feed, sitemap.

### 4. Hand the chosen direction to Cursor

Sample prompt to seed a fresh chat:

> Read `handoff/README.md`, then build the Landing page following
> `handoff/PAGES.md#landing` and `handoff/reference/landing.html`. Use
> the Astro structure in `.cursor/rules/stack.mdc`. Use only the tokens
> in `handoff/tokens.css`. Don't introduce a new color, font, or size.

---

## Decisions locked in

| Topic              | Decision                                              |
| ------------------ | ----------------------------------------------------- |
| Aesthetic          | Mono Ink + Terracotta (the C1a direction)             |
| Body type          | Newsreader (Google Fonts, variable opsz axis)         |
| UI type            | JetBrains Mono                                        |
| Accent             | `#d97757` terracotta                                  |
| Background         | `#fafafa` warm off-white (not pure white)             |
| Foreground         | `#14151a` ink (not pure black)                        |
| Stack              | Astro, static output, MDX content                     |
| Posts              | Frontmatter-driven, four `type` values                |
| Feed               | Atom at `/feed.xml`                                   |
| Booking            | Mailto only (no payment integration v1)               |
| Analytics          | None                                                  |
| Comments           | None                                                  |
| Search             | Out of scope v1                                       |

---

## Decisions still open

These can be answered after build start; defaults work for now.

- **Author name + domain.** Reference uses "R. Park" and
  `ripblog.example`. Replace globally before launch.
- **Sponsorship contact email.** `sponsor@ripblog.example` placeholder.
- **Real post content.** All three reference HTMLs use placeholder essays.
  Migrate the editor's real drafts into the content collection.
- **Newsletter.** If a weekly email digest is wanted, it can be layered on
  later with Buttondown or similar — out of scope here.
- **Hosting.** Recommended: Cloudflare Pages or Netlify. Either works.

---

## Variants in the original exploration

For posterity, the design canvas explored:

- Three layouts: **Slate** (dark sidebar), **Paper** (centered serif),
  **Mono** (mono chrome + serif body) — **Mono chosen**.
- Three Mono palettes: **Ink** (warm white), **Graphite** (dark mode),
  **Cobalt** (pure white + blue) — **Ink chosen**.
- Three Ink accents: **Terracotta** `#d97757`, **Moss** `#4a7a5a`,
  **Indigo** `#3a52a8` — **Terracotta chosen**.

The Graphite palette is left commented-out in `tokens.css` as a future
dark-mode hook. The Slate and Paper layouts have not been kept — they
diverge structurally and would re-open the design conversation.

---

## Questions?

Re-open the design file (the canvas in the original project) to see all
nine artboards side-by-side. Anything not covered here is either in
`DESIGN-SYSTEM.md`, `PAGES.md`, or the rules under `.cursor/rules/`.
