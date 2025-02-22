import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'

import ListLayoutWithTags from '@/layouts/list-layout-with-tags'
import { Metadata } from 'next'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import siteMetadata from '@/data/site-metadata'
import { slug } from 'github-slugger'
import tagData from 'app/tag-data.json'

export async function generateMetadata({ params }: { params: { tag: string } }): Promise<Metadata> {
  const tag = decodeURI(params.tag)
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
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const paths = tagKeys.map((tag) => ({
    tag: tag,
  }))
  return paths
}

export default function TagPage({ params }: { params: { tag: string } }) {
  const tag = decodeURI(params.tag)
  // Capitalize first letter and convert space to dash
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)
  const filteredPosts = allCoreContent(
    sortPosts(allBlogs.filter((post) => post.tags && post.tags.map((t) => slug(t)).includes(tag)))
  )
  return <ListLayoutWithTags posts={filteredPosts} title={title} />
}
