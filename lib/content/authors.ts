import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { cache } from 'react'
import { extractTocHeadings } from 'pliny/mdx-plugins/remark-toc-headings.js'
import type { AuthorDoc, TocItem } from './types'

const AUTHORS_DIR = path.join(process.cwd(), 'data/authors')

async function fileToAuthor(absPath: string): Promise<AuthorDoc> {
  const raw = fs.readFileSync(absPath, 'utf8')
  const { data, content } = matter(raw)
  const relFromData = path.relative(path.join(process.cwd(), 'data'), absPath).replace(/\\/g, '/')
  const flatPath = relFromData.replace(/\.mdx$/, '')
  const slug = flatPath.replace(/^authors\//, '')
  const tocRaw = await extractTocHeadings(content)
  const toc: TocItem[] = Array.isArray(tocRaw) ? tocRaw : []
  return {
    name: data.name,
    avatar: data.avatar,
    occupation: data.occupation,
    company: data.company,
    email: data.email,
    twitter: data.twitter,
    linkedin: data.linkedin,
    github: data.github,
    layout: data.layout,
    slug,
    path: flatPath,
    filePath: relFromData,
    readingTime: readingTime(content),
    toc,
    mdxSource: content,
  }
}

export const getAllAuthors = cache(async (): Promise<AuthorDoc[]> => {
  if (!fs.existsSync(AUTHORS_DIR)) return []
  const files = fs
    .readdirSync(AUTHORS_DIR)
    .filter((n) => n.endsWith('.mdx'))
    .map((n) => path.join(AUTHORS_DIR, n))
  return Promise.all(files.map((f) => fileToAuthor(f)))
})
