# ripblog — design system

Single source of truth for the visual language. Pair with `tokens.css` and
the three reference HTML pages in `reference/`.

---

## 1. Foundations

### 1.1 Color

The palette is small on purpose. Five neutrals + one accent.

| Role           | Token                  | Value                   | Notes                            |
| -------------- | ---------------------- | ----------------------- | -------------------------------- |
| Background     | `--color-bg`           | `#fafafa`               | Warm off-white. Never pure white.|
| Foreground     | `--color-fg`           | `#14151a`               | Body, titles, strong rule        |
| Foreground/muted | `--color-fg-muted`   | `#4a4f57`               | Blockquote body, sidebar links   |
| Meta           | `--color-meta`         | `#6b6f78`               | Datelines, footer, archive dates |
| Rule           | `--color-rule`         | `rgba(20,21,26,0.12)`   | Hairline dividers                |
| Accent         | `--color-accent`       | `#d97757`               | **Terracotta.** Links, ★, dot    |

Accent appears in **five** places only:
1. `▮` wordmark dot
2. `★` original-post mark
3. Inline link underline + color
4. Blockquote left rule
5. Calendar "next" chip / CTA hover

If you find yourself reaching for the accent for a sixth thing, ask
whether the first five still make sense.

### 1.2 Typography

Two families, no more.

| Token          | Stack                                                  |
| -------------- | ------------------------------------------------------ |
| `--font-serif` | `'Newsreader', 'Source Serif Pro', Georgia, serif`     |
| `--font-mono`  | `'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace` |

Hard split: **serif for reading, mono for chrome.** Post titles are mono.
Datelines are mono. Body paragraphs are serif. Blockquotes are serif.

| Use            | Size  | Weight | Line-height | Family |
| -------------- | ----- | ------ | ----------- | ------ |
| Body           | 17px  | 400    | 1.6         | serif  |
| Wordmark       | 20px  | 600    | 1.0         | mono   |
| Nav            | 12px  | 400    | inherit     | mono   |
| Post title     | 18px  | 600    | 1.3         | mono   |
| Page H1        | 22px  | 600    | 1.35        | mono   |
| Section H2     | 14px  | 600    | inherit     | mono UPPER |
| Year heading   | 13px  | 600    | inherit     | mono (accent) |
| Dateline       | 11px  | 400    | inherit     | mono UPPER |
| Sidebar        | 12px  | 400    | inherit     | mono   |
| CTA            | 13px  | 400    | inherit     | mono   |

### 1.3 Space

4px base. Use only these step values: `4 8 12 16 20 24 32 40 44 48 56 80`.
Tokens are named `--space-1` (4px) through `--space-20` (80px).

### 1.4 Layout

| Token              | Value  | Notes                          |
| ------------------ | ------ | ------------------------------ |
| `--page-max`       | 920px  | Outer page width               |
| `--content-max`    | 580px  | Readable column inside grid    |
| `--sidebar-w`      | 200px  | Sidebar column                 |
| `--grid-gap`       | 56px   | Between sidebar and content    |
| `--page-pad-y`     | 48px   | Top padding                    |
| `--page-pad-x`     | 56px   | Side padding                   |
| `--page-pad-bottom`| 80px   | Bottom padding                 |

Single breakpoint: at `max-width: 720px`, the grid collapses to single
column and the sidebar moves to `order: 2` (after the content).

### 1.5 Borders & rules

- **Hairline** — `1px solid var(--color-rule)`. Between posts, between
  archive rows, between rate rows, around footer.
- **Strong** — `2px solid var(--color-fg)`. Under the masthead only.
- **Accent** — `2px solid var(--color-accent)`. Left rule on `<blockquote>`.

No other borders. No card outlines, no input outlines (the site doesn't
have inputs yet), no rounded corners anywhere.

### 1.6 Motion

| Token       | Value    | Use                              |
| ----------- | -------- | -------------------------------- |
| `--t-fast`  | 120ms    | Color/border transitions on hover|
| `--t-base`  | 180ms    | CTA bg swap                      |
| `--ease`    | `cubic-bezier(.2,.7,.3,1)` | All transitions    |

No entrance animations. No scroll-jacking. Respect
`prefers-reduced-motion`.

---

## 2. Components

See `.cursor/rules/components.mdc` for the full list. Summary:

- **Mast** — wordmark + nav, 2px ink underline
- **PageGrid** — 200px sidebar + 580px content, 56px gap
- **Sidebar** — mono index column, multiple labeled lists
- **Post** — dateline + title (+ optional ★) + body
- **ArchiveRow** — 3-col grid, date / title / tag
- **RateRow** — label / mono accent price
- **AvailabilityCal** — 4-col grid, three cell states
- **CTA** — solid ink button, accent on hover
- **SiteFooter** — © left, route right

---

## 3. Page anatomy

Every page is `Mast → PageGrid → SiteFooter`. The only variable is what
goes in the content column. See `PAGES.md` for per-page spec.
