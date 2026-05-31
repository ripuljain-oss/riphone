# Drafting workflow

Ripul researches, pastes links/notes, asks for **drafts** — he edits before publish.
Agent does not invent sources, quotes, or facts.

## "Draft a post" / "write a take on this"

1. Read URL, excerpts, Ripul's angle only
2. Default **`type: linked`** when prompt is mostly a URL
3. Output MDX: frontmatter + body → `src/content/posts/YYYY-MM-DD-slug.mdx`
4. Set `date` **newer than latest post** (check existing files or use current day + time)
5. Write `description` (≤160 chars, punchy, not clickbait)
6. Match `writing-style.md`

Ask one question only if blocked (missing attribution or stance).

## "Find me post candidates"

When Ripul asks for article ideas (not a full draft yet):

1. Scan `src/content/posts/*.mdx` — avoid topics already covered
2. Propose **2+** options, each with: proposed title, `linkUrl`, attribution, one **verbatim** pull quote, tags, one-sentence angle
3. Ripul picks (or gives a new angle); then draft per checklist below

## Before writing MDX

- Confirm **byline and blockquote verbatim** on the live source page — do not trust search snippets alone
- Run `npm run build` after adding a post (catches schema errors; new tags need `/tags/{tag}` routes)

## When Ripul asks "what's the strategy?"

Don't recap the pile-on. Resolve the confusion with a thesis:

- What looks like a fumble may be allocation, compliance, or halo mechanics
- Name the contradiction (public outrage vs sold-out order book, design hate vs "through 2027")
- Title = the reframe (e.g. `The Luce Isn't a Car, It's a Ticket`)

## Link-post checklist

- [ ] Title is a **take** (links to `linkUrl` on site)
- [ ] First line: `Name, for [Outlet](url):` or similar attribution
- [ ] Exactly **one** blockquote — verbatim from source Ripul provided
- [ ] Commentary: opinion, context, bullshit-calling — does not repeat quote
- [ ] `tags` relevant (`politics`, `tech`, `business`, …)

## Essay checklist

- [ ] `star: true`, thesis in ¶1, `★` on publish

## Publish (only when Ripul asks)

```bash
git add src/content/posts/…
git commit -m "Add post: {title}"
git push origin main
```

Stage **only** the post file unless Ripul asks to include other changes.

Cloudflare rebuilds from `main`. Do not commit/push unless asked.

## Cadence (guidance for Ripul, not agent enforcement)

- **1×/week** to start; **2×/week** if sustainable
- Quality and consistency beat daily volume
- Promote on X (@bmbyslm) when a post goes live

## After the draft

- Offer a tighter alternate title if obvious
- Rewrite if Ripul gives a new angle — don't argue

> Mirrored from `.cursor/rules/drafting.mdc` for Grok / multi-agent use. Update both when rules evolve.
