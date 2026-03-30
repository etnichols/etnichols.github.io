import { buildTagCounts, getAllBlogs } from '@/lib/content/blog'
import { allCoreContent, sortPosts } from '@/lib/content/utils'
import ListLayoutWithTags from '@/layouts/list-layout-with-tags'
import { Metadata } from 'next'
import { genPageMetadata } from 'app/seo'
import siteMetadata from '@/data/site-metadata'
import { slug } from 'github-slugger'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>
}): Promise<Metadata> {
  const { tag: tagParam } = await params
  const tag = decodeURI(tagParam)
  return genPageMetadata({
    title: tag,
    description: `${siteMetadata.title} ${tag} tagged content`,
    alternates: {
      canonical: './',
      types: {
        'application/rss+xml': `${siteMetadata.siteUrl}/tags/${tag}/feed.xml`,
      },
    },
  })
}

export const generateStaticParams = async () => {
  const allBlogs = await getAllBlogs()
  const tagCounts = buildTagCounts(allBlogs)
  return Object.keys(tagCounts).map((tag) => ({ tag }))
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag: tagParam } = await params
  const tag = decodeURI(tagParam)
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)
  const allBlogs = await getAllBlogs()
  const tagCounts = buildTagCounts(allBlogs)
  const filteredPosts = allCoreContent(
    sortPosts(allBlogs.filter((post) => post.tags && post.tags.map((t) => slug(t)).includes(tag)))
  )
  return <ListLayoutWithTags posts={filteredPosts} title={title} tagCounts={tagCounts} />
}
