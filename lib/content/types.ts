import type { ReadTimeResults } from 'reading-time'

/** Single TOC node from remark (Pliny / extractTocHeadings shape). */
export type TocItem = {
  value: string
  url: string
  depth: number
}

/** Frontmatter + computed fields for a blog post (includes MDX source for compilation). */
export type BlogDoc = {
  title: string
  date: string
  tags: string[]
  lastmod?: string
  draft?: boolean
  summary?: string
  images?: string | string[]
  authors?: string[]
  layout?: string
  bibliography?: string
  canonicalUrl?: string
  readingTime: ReadTimeResults
  slug: string
  path: string
  filePath: string
  toc: TocItem[]
  structuredData: Record<string, unknown>
  mdxSource: string
}

/** Author file under data/authors (includes MDX body for the about blurb). */
export type AuthorDoc = {
  name: string
  avatar?: string
  occupation?: string
  company?: string
  email?: string
  twitter?: string
  linkedin?: string
  github?: string
  layout?: string
  slug: string
  path: string
  filePath: string
  readingTime: ReadTimeResults
  toc: TocItem[]
  mdxSource: string
}

export type CoreContent<T> = Omit<T, 'mdxSource'>
