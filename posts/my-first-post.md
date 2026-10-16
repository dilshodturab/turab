---
title: "My first post"
date: 2026-10-01
description: "Testing the pipeline: markdown, images, and build-time highlighting."
---

# My first post

This file lives at `/posts/my-first-post.md`. Nothing else was edited — the
listing page and this page were generated automatically at build time from the
frontmatter above.

## Images

Absolute path, served straight from `public/`:

![terminal screenshot](/images/example-neofetch.png)

## Code blocks

Highlighted at build time with Shiki (catppuccin-mocha). Any language works,
this is bash:

```bash
# deploy is just a git push
git add posts/my-first-post.md
git commit -m "post: my first post"
git push
```

and here is python:

```python
from datetime import date

today = date.today().isoformat()
print(f"posted on {today}")
```

## Everything else

- unordered lists
- [x] task lists
- [ ] that render inline
- **bold**, `inline code`, *italic*

> blockquotes get the same dashed-glass treatment as the rest of the page.

---

The separator above is just `---` in markdown. It renders as a dashed rule to
match the terminal design.
