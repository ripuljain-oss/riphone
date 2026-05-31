# .grok — Project Rules for Grok and Multi-Agent Workflows

This folder mirrors the Cursor rules from `.cursor/rules/` so the same editorial, design, and operational constraints apply when using Grok, Claude, or other agents on this repo.

## Structure

- `rules/` — 10 core rule files (project, writing-style, drafting, content, operations, stack, components, accessibility, tokens, typography)
- All files are plain `.md` (no Cursor-specific YAML frontmatter)
- Internal cross-references updated to point inside `.grok/rules/`

## How to use with Grok

When starting a session on this project, the agent should:

1. Read `.grok/README.md`
2. Read the always-applicable rules in `rules/project.md`, `rules/writing-style.md`, `rules/operations.md`, and `rules/drafting.md`
3. Read file-scoped rules as needed (`content.md` for MDX, `tokens.md` + `typography.md` for styles, etc.)
4. Treat `handoff/` as the visual source of truth (reference HTML + tokens)

## Keeping rules in sync

- Primary source of truth: the `.cursor/rules/*.mdc` files (Cursor's native format with globs/alwaysApply)
- This `.grok/` tree is a **copy** for other agents
- When editing rules, update **both** locations and the mirror note at the bottom of each file

## Root instructions

The original Cursor root rules live in `.cursorrules`. Key points are also captured in `rules/project.md`.

## Background (for context)

This is the riphone personal blog (riphone.org):

- Astro 5 static site, MDX posts
- Strict Mono Ink + Terracotta design tokens (never inline values)
- Daring Fireball–inspired writing voice: short, punchy, original takes only
- Content model: linked posts, essays (starred), notes, reviews
- Deploy: push to `main` → Cloudflare Pages rebuilds `dist/`

See the main [README.md](../README.md) and `handoff/README.md` for more.

> Created by copying and adapting `.cursor/` rules for Grok compatibility.
