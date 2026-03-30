import type { BlogDoc, CoreContent } from './types'

function dateSortDesc(a: string, b: string): number {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

/**
 * Sort MDX documents by date descending (newest first).
 */
export function sortPosts<T extends { date: string }>(posts: T[], dateKey: keyof T & string = 'date'): T[] {
  return [...posts].sort((a, b) => dateSortDesc(String(a[dateKey]), String(b[dateKey])))
}

function omit<Obj extends object, Keys extends keyof Obj>(obj: Obj, keys: Keys[]): Omit<Obj, Keys> {
  const result = { ...obj }
  keys.forEach((key) => {
    delete result[key]
  })
  return result
}

/**
 * Strip heavy fields before passing post metadata to list layouts / SEO.
 */
export function coreContent<T extends { mdxSource?: string }>(doc: T): CoreContent<T> {
  return omit(doc, ['mdxSource'] as (keyof T)[]) as CoreContent<T>
}

/**
 * Map documents to core content; in production, drop drafts from listings.
 */
export function allCoreContent<T extends BlogDoc>(contents: T[]): CoreContent<T>[] {
  const isProduction = process.env.NODE_ENV === 'production'
  const mapped = contents.map((c) => coreContent(c))
  if (isProduction) {
    return mapped.filter((c) => !('draft' in c && c.draft === true))
  }
  return mapped
}
