import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import GithubSlugger from 'github-slugger'
import readingTime from 'reading-time'
import { cache } from 'react'
import { extractTocHeadings } from 'pliny/mdx-plugins/remark-toc-headings.js'
import siteMetadata from '@/data/site-metadata'
import type { BlogDoc, TocItem } from './types'
import { allCoreContent, sortPosts } from './utils'

const DATA_BLOG = path.join(process.cwd(), 'data/blog')

function walkMdxFiles(dir: string): string[] {
  const out: string[] = []
  if (!fs.existsSync(dir)) return out
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name)
    if (ent.isDirectory()) out.push(...walkMdxFiles(full))
    else if (ent.name.endsWith('.mdx')) out.push(full)
  }
  return out
}

function normalizeDate(d: unknown): string {
  if (d instanceof Date) return d.toISOString().slice(0, 10)
  return String(d)
}

/**
 * Tag slug keys and counts (same rules as the former Contentlayer onSuccess hook).
 */
export function buildTagCounts(blogs: BlogDoc[]): Record<string, number> {
  const isProduction = process.env.NODE_ENV === 'production'
  const tagCount: Record<string, number> = {}
  blogs.forEach((file) => {
    if (file.tags && (!isProduction || file.draft !== true)) {
      file.tags.forEach((tag) => {
        const formattedTag = GithubSlugger.slug(tag)
        tagCount[formattedTag] = (tagCount[formattedTag] ?? 0) + 1
      })
    }
  })
  return tagCount
}

function writeTagDataAndSearchIndex(blogs: BlogDoc[]) {
  const tagCount = buildTagCounts(blogs)
  fs.writeFileSync(path.join(process.cwd(), 'app/tag-data.json'), JSON.stringify(tagCount))
  if (
    siteMetadata?.search?.provider === 'kbar' &&
    siteMetadata.search.kbarConfig?.searchDocumentsPath
  ) {
    fs.writeFileSync(
      path.join(process.cwd(), 'public', siteMetadata.search.kbarConfig.searchDocumentsPath),
      JSON.stringify(allCoreContent(sortPosts(blogs)))
    )
  }
}

async function fileToBlog(absPath: string): Promise<BlogDoc> {
  const raw = fs.readFileSync(absPath, 'utf8')
  const { data, content } = matter(raw)
  const relFromData = path.relative(path.join(process.cwd(), 'data'), absPath).replace(/\\/g, '/')
  const flatPath = relFromData.replace(/\.mdx$/, '')
  const slug = flatPath.replace(/^blog\//, '')
  const tocRaw = await extractTocHeadings(content)
  const toc: TocItem[] = Array.isArray(tocRaw) ? tocRaw : []
  const date = normalizeDate(data.date)
  const lastmod = data.lastmod != null ? normalizeDate(data.lastmod) : undefined
  const images = data.images
  const structuredData: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: data.title,
    datePublished: date,
    dateModified: lastmod ?? date,
    description: data.summary,
    url: `${siteMetadata.siteUrl}/${flatPath}`,
  }
  if (images) {
    structuredData.image = Array.isArray(images) ? images[0] : images
  } else if (siteMetadata.socialBanner) {
    structuredData.image = siteMetadata.socialBanner
  }
  return {
    title: data.title,
    date,
    tags: data.tags ?? [],
    lastmod,
    draft: data.draft,
    summary: data.summary,
    images,
    authors: data.authors,
    layout: data.layout,
    bibliography: data.bibliography,
    canonicalUrl: data.canonicalUrl,
    readingTime: readingTime(content),
    slug,
    path: flatPath,
    filePath: relFromData,
    toc,
    structuredData,
    mdxSource: content,
  }
}

export const getAllBlogs = cache(async (): Promise<BlogDoc[]> => {
  const files = walkMdxFiles(DATA_BLOG)
  const blogs = await Promise.all(files.map((f) => fileToBlog(f)))
  writeTagDataAndSearchIndex(blogs)
  return blogs
})
