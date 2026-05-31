# Design tokens

All visual values live in `handoff/tokens.css` (or `tokens.json`). **Never
inline hex, font family, px size, or duration in component CSS.** Add a
token first, then consume it.

## Color tokens

| Token                  | Value                       | Use                                       |
| ---------------------- | --------------------------- | ----------------------------------------- |
| `--color-bg`           | `#fafafa`                   | page background                           |
| `--color-fg`           | `#14151a`                   | body text, titles, masthead rule          |
| `--color-fg-muted`     | `#4a4f57`                   | blockquote body, sidebar links            |
| `--color-meta`         | `#6b6f78`                   | dateline, footer, archive date column     |
| `--color-rule`         | `rgba(20,21,26,0.12)`       | hairline dividers                         |
| `--color-rule-strong`  | `#14151a`                   | 2px masthead underline                    |
| `--color-accent`       | `#d97757`                   | links, stars, wordmark dot, CTA hover     |
| `--color-accent-fg`    | `#ffffff`                   | on solid-accent surfaces                  |

## Typography tokens

```css
--font-mono:  'JetBrains Mono', ui-monospace, …;
--font-serif: 'Newsreader', 'Source Serif Pro', Georgia, serif;
```

Scale: body 17/1.6 · wordmark 20 · nav 12 · title 18/1.3 · h1 22/1.35 ·
dateline 11 · sidebar 12 · cta 13

## Spacing

4px base only: `4 8 12 16 20 24 32 40 44 48 56 80` via `--space-*`.

## Reviewer cue

`color: #...`, raw `padding: 13px`, or ad-hoc font families in a diff →
replace with tokens.

> Mirrored from `.cursor/rules/tokens.mdc` for Grok / multi-agent use. Update both when rules evolve.
