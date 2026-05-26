# Pages — implementation spec

Three pages in v1: Landing, Archive, Sponsorship. Each maps directly to a
file in `reference/`. Match those files structurally; this document
explains the data + routing.

---

## Landing — `/`

**File:** `reference/landing.html`

### Purpose

The reading front door. Shows the 10 most recent posts in reverse-chron.

### Data

Read all posts from the content collection, sort by `date` desc, take 10.
Each rendered as a `<Post>` component.

### Sidebar

- **Recent** — last 5 post titles linked to their permalinks. The first
  one is already in the feed; redundant but useful for scrolling readers.
- **Tags** — the 4 most-used tags with usage counts. Counts come from
  `posts.flatMap(p => p.tags)` reduced.

### Permalinks

Posts route at `/<YYYY>/<MM>/<DD>/<slug>`. The slug is the title
lowercased, hyphenated, ASCII-folded. Example:
`/2026/05/22/quietness-of-tools`.

### Feed

A `/feed.xml` (Atom) covers the same 10 posts. The `<link rel="alternate">`
tag in the landing `<head>` points to it.

---

## Archive — `/archive`

**File:** `reference/archive.html`

### Purpose

Complete index of every post. Grep-bait. The reader's escape from the
algorithm — every link is here.

### Data

All posts, grouped by year (newest year first), sorted by date desc
within each year. No pagination; the whole index is one page. If we get
past 500 posts we'll revisit.

### Sidebar

- **Jump to** — one link per year, with `(count)` after the year.
- **Filter** — `all`, `essays`, `linked`, `notes`, `reviews` linking to
  `?type=…` query strings. The server filters and rebuilds the list. (If
  Astro, do this with a dynamic `[type].astro` route or a server endpoint.)

### Row shape

3-column grid `[56px date] [1fr title] [auto tag]`. Date is `MMM DD`
(e.g. `May 22`), in mono meta color. Tag is `Essay | Linked | Notes |
Review`, uppercase 10.5px with `0.08em` tracking.

### Plain-text fallback

Generate a `/archive.txt` at build time with the same list as plain text
("Date — Title (Tag)\n…"). The page description links to it. This is a
small but visible nod to the site's ethos.

---

## Sponsorship — `/sponsor`

**File:** `reference/sponsorship.html`

### Purpose

Sell sponsorships. Communicate the pitch (one per week, no banners, no
tracking), show availability, take a booking via email.

### Sections (in order)

1. **Page title** — eyebrow `/sponsor`, h1 in 2 lines.
2. **Pitch paragraph** — audience size, who they are, what they do.
3. **One sponsor per week** explanation paragraph.
4. **Blockquote** — single sentence statement of principles.
5. **Rates** — 4-row `<RateRow>` block.
6. **Availability** — 8-cell `<AvailabilityCal>`. Two states matter for
   the reader: which weeks are sold and which two are next-available. The
   "next" chips are accent-filled.
7. **How to book** — short paragraph + email mailto link.
8. **CTA** — `Reserve a week →` mailto button.

### Sidebar

- **At a glance** — 5 bullet facts. Static content; live in a JSON or
  frontmatter file.
- **Past sponsors** — 5–6 names then `+ N more`. Live in a JSON file.
  Don't link them out; this isn't an ad listing.

### Booking flow

Pure email. The CTA is a `mailto:` with a pre-filled subject line:

```
mailto:sponsor@ripblog.example?subject=Sponsorship%20—%20week%20of%20…
```

When the editor confirms a week, mark it `sold` in the data file and
rebuild. There is no payment integration in v1.

### Availability data

```yaml
# src/data/sponsorship.yml
weeks:
  - week: "Jun 02"
    status: sold
  - week: "Jun 09"
    status: sold
  - week: "Jun 16"
    status: next
  - week: "Jun 23"
    status: available
  # …
```

Statuses: `sold | next | available`. The page reads the next 8 and
renders them in order.

---

## Out of scope for v1

- Individual post pages (will reuse the landing's `<Post>` component at
  full width — straightforward; add when starting the post-detail route).
- Search.
- Newsletter signup.
- Comment threads.
- The "Notes" page (briefer microblog stream — same components, different
  query).

Resist adding these until v1 is shipped and the editor uses it.
