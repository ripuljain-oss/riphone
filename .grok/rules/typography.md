# Typography

## Family rules

- **Newsreader** — article body, blockquotes, page descriptions only
- **JetBrains Mono** — all chrome including **post titles**

Post titles stay mono at 18px semi-bold — do not switch to serif.

## Hierarchy

| Element        | Size/token      | Family | Notes        |
| -------------- | --------------- | ------ | ------------ |
| Page h1        | `--fs-h1`       | mono   | semi-bold    |
| Post title     | `--fs-title`    | mono   | semi-bold    |
| Section h2     | 14px caps       | mono   | +0.04em track|
| Year heading   | 13px            | mono   | accent color |
| Dateline       | `--fs-dateline` | mono   | uppercase    |
| Body           | `--fs-body`     | serif  | 17/1.6       |

## Don'ts

- Preconnect Google Fonts; `display=swap`
- No uppercase on body; no sizes outside token scale
- Italic for `<em>` and quoted titles only

> Mirrored from `.cursor/rules/typography.mdc` for Grok / multi-agent use. Update both when rules evolve.
