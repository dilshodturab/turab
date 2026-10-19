# personal-website

A terminal-style portfolio built with [Astro](https://astro.build). One font
(JetBrains Mono), one glass card, and a posts system that requires **zero**
manual wiring: drop a `.md` file into `/posts/` and push.

- **Design** — floating glass terminal (`backdrop-filter: blur(16px)`, `12px`
  radius, `1px rgba(255,255,255,.1)` border) with a `14px` outer margin, dark
  only (`#0A0A0A` translucent / `#E8E8E8` ink), an 8px baseline grid, and a
  fastfetch-style info panel next to random ASCII art on every load.
- **Posts** — Astro content collections scan `/posts/*.md` at build time and
  generate `/posts/` (listing) and `/posts/<slug>/` (each post) automatically.
- **Highlighting** — [Shiki](https://shiki.style) at build time,
  `catppuccin-mocha` theme, any language. No client JS.
- **Budget** — pure static HTML, CSS ~7kb (~2kb gzipped), JS ~1.3kb inline
  (clock + random ASCII art). No hydration, no frameworks, no trackers.

## Writing a post

Create `posts/<anything>.md`:

```md
---
title: "How I use Neovim"
date: 2026-10-16
description: "short one line"
---

Your content here. Standard markdown: lists, tables, blockquotes,
**bold**, `code`, and fenced code blocks with a language tag.
```

That's it. `git add` + `git commit` + `git push` and the host rebuilds — the
listing page, the post page, and the date ordering all come from frontmatter.

- `title` — shown in the listing and as the page `<h1>`; falls back to the
  filename if omitted.
- `date` — required; drives sort order (newest first).
- `description` — optional one-liner shown under the title in the listing.
- `draft: true` — hides the post from `/posts/` without deleting it.

## Images

Two ways, both work:

1. **Shared images** — put them in `public/images/` and reference from
   anywhere: `![alt](/images/my-image.png)`. Served as-is.
2. **Per-post images** — put the file next to the post in `posts/` and use a
   relative path: `![alt](./screenshot.png)`. Astro optimizes it (resizing +
   WebP) at build time.

## Wallpapers

Drop any images into `src/assets/wallpapers/` — nothing to configure. At build
time each one is downscaled to a 1920px WebP (the 4K originals are never
shipped, which is what made the site slow). One is chosen at random the first
time you open the site in a tab and stays put as you click around between
pages; only an actual reload (or a new tab) picks a fresh one. The wallpaper
downloads hidden and fades in once it has fully loaded, instead of painting in
top-to-bottom. The first file alphabetically is the no-JS fallback.

Tuning lives at the top of `src/layouts/BaseLayout.astro`: `WALLPAPER_WIDTH`
(1920 is plenty behind the blur — raise it for crisper 4K) and
`WALLPAPER_QUALITY`.

## Local development

```sh
npm install     # once
npm run dev     # live-reload at http://localhost:4321
npm run build   # static output into dist/
```

## Deploying

No CI/CD config is committed on purpose — both hosts auto-detect Astro:

- **Cloudflare Pages** — create a Pages project from this repo. Build command
  `npm run build`, output directory `dist`. Push to your branch and it deploys.
- **Vercel** — import the repo; the Astro preset is chosen automatically.

Remember to set your real domain in `src/config.ts` (`url`, `email`, …) —
that file is the single place for all personal info.

## Structure

```
posts/                      ← your markdown lives here (auto-listed)
public/images/              ← shared static images
src/
  assets/wallpapers/        ← random page background (auto-optimized at build)
  config.ts                 ← name, host, tagline, bio, email, url
  content.config.ts         ← the posts collection (frontmatter schema)
  styles/global.css         ← the whole design system
  scripts/art.mjs           ← random ASCII art pieces
  components/Header.astro   ← ❯ breadcrumb + live clock
  layouts/BaseLayout.astro  ← <head>, fonts
  layouts/Page.astro        ← header + footer wrapper
  pages/
    index.astro             ← the home terminal
    posts/index.astro       ← auto-generated listing
    posts/[...slug].astro   ← auto-generated post pages
    about.astro projects.astro random.astro 404.astro
```
