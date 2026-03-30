# etnichols personal blog

Next.js App Router site with MDX posts under `data/blog`, author bios under `data/authors`, and [Pliny](https://github.com/timlrx/pliny) UI pieces (search, newsletter, MDX helpers).

## Content system (no Contentlayer)

This repo previously used Contentlayer to generate typed document data and precompiled MDX. That pipeline has been replaced with:

1. **Filesystem + gray-matter** — [`lib/content/blog.ts`](lib/content/blog.ts) reads every `data/blog/**/*.mdx`, parses YAML frontmatter, and attaches computed fields (slug, path, reading time, TOC, JSON-LD payload). [`lib/content/authors.ts`](lib/content/authors.ts) does the same for `data/authors/*.mdx`.
2. **React `cache()`** — `getAllBlogs()` / `getAllAuthors()` are wrapped in `react` `cache()` so each request deduplicates work.
3. **MDX at render time** — [`next-mdx-remote`](https://github.com/hashicorp/next-mdx-remote) RSC `compileMDX` runs in [`lib/content/compile-blog-mdx.ts`](lib/content/compile-blog-mdx.ts) (posts) and [`lib/content/compile-author-mdx.ts`](lib/content/compile-author-mdx.ts) (about page). Custom elements come from [`components/mdx-components.tsx`](components/mdx-components.tsx). `scope.toc` is available in MDX for components like Pliny’s `TOCInline`.
4. **Remark / rehype** — The blog pipeline lives in [`lib/content/mdx-options-full.ts`](lib/content/mdx-options-full.ts) (GFM, Pliny code titles + image JSX, math, KaTeX, Prism, slug + autolink headings, citations). Pliny remark plugins are imported from **subpaths** (e.g. `pliny/mdx-plugins/remark-code-title.js`), not `mdx-plugins/index.js`, to avoid Turbopack + parallel static generation issues on some environments. **`rehype-preset-minify` was dropped** for the same reason; HTML is left unminified.
5. **Tag counts & search** — When `getAllBlogs()` runs, it writes [`app/tag-data.json`](app/tag-data.json) (for optional tooling) and, if `siteMetadata.search.provider === 'kbar'`, [`public/search.json`](public/search.json) for the Pliny kbar integration. **Runtime UI** gets tag counts from `buildTagCounts()` passed as props into [`layouts/list-layout-with-tags.tsx`](layouts/list-layout-with-tags.tsx) so tag sidebars stay correct without relying on JSON import order during build.
6. **List helpers** — [`lib/content/utils.ts`](lib/content/utils.ts) provides `sortPosts`, `coreContent`, and `allCoreContent` (same behavior as the old Pliny `contentlayer` helpers, without generated types).

### Adding React components to posts

Register short tags in [`components/mdx-components.tsx`](components/mdx-components.tsx) (e.g. `Callout: MyCallout`). Use them in `.mdx` as `<Callout>...</Callout>`. Client components are allowed; add `'use client'` in the component module when needed. `compileBlogPostMdx` sets `blockJS: false` so MDX can use JSX expressions where appropriate.

## Scripts

- `pnpm dev` — Next dev server (no separate content watcher).
- `pnpm build` — Production build.
- `pnpm lint` — ESLint.

## Historical note

The project started from the [shadcn/next-contentlayer](https://github.com/shadcn/next-contentlayer) template; content loading is now custom as described above.
