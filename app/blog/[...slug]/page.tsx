import 'css/prism.css'
import 'katex/dist/katex.css'

import { getAllAuthors } from '@/lib/content/authors'
import { getAllBlogs } from '@/lib/content/blog'
import { compileBlogPostMdx } from '@/lib/content/compile-blog-mdx'
import type { AuthorDoc, BlogDoc } from '@/lib/content/types'
import { allCoreContent, coreContent, sortPosts } from '@/lib/content/utils'
import { Metadata } from 'next'
import PageTitle from '@/components/page-title'
import PostBanner from '@/layouts/post-banner'
import PostLayout from '@/layouts/post-layout'
import PostSimple from '@/layouts/post-simple'
import siteMetadata from '@/data/site-metadata'

const defaultLayout = 'PostLayout'
const layouts = {
  PostSimple,
  PostLayout,
  PostBanner,
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>
}): Promise<Metadata | undefined> {
  const { slug: slugParts } = await params
  const slug = decodeURI(slugParts.join('/'))
  const [allBlogs, allAuthors] = await Promise.all([getAllBlogs(), getAllAuthors()])
  const post = allBlogs.find((p) => p.slug === slug)
  if (!post) {
    return
  }
  const authorList = post.authors || ['default']
  const authorDetails = authorList.map((authorSlug) => {
    const authorResults = allAuthors.find((p) => p.slug === authorSlug) as AuthorDoc
    return coreContent(authorResults)
  })

  const publishedAt = new Date(post.date).toISOString()
  const modifiedAt = new Date(post.lastmod || post.date).toISOString()
  const authors = authorDetails.map((author) => author.name)
  let imageList: string[] = []
  if (post.images) {
    imageList = typeof post.images === 'string' ? [post.images] : post.images
  }
  const ogImages = imageList.map((img: string) => {
    return {
      url: img.includes('http') ? img : siteMetadata.siteUrl + img,
    }
  })

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      siteName: siteMetadata.title,
      locale: 'en_US',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: './',
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: imageList,
    },
  }
}

export const generateStaticParams = async () => {
  const allBlogs = await getAllBlogs()
  const isProduction = process.env.NODE_ENV === 'production'
  const visible = isProduction ? allBlogs.filter((p) => !p.draft) : allBlogs
  return visible.map((p) => ({ slug: p.slug.split('/') }))
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug: slugParts } = await params
  const slug = decodeURI(slugParts.join('/'))
  const [allBlogs, allAuthors] = await Promise.all([getAllBlogs(), getAllAuthors()])
  const sortedCoreContents = allCoreContent(sortPosts(allBlogs))
  const postIndex = sortedCoreContents.findIndex((p) => p.slug === slug)
  if (postIndex === -1) {
    return (
      <div className="mt-24 text-center">
        <PageTitle>
          Under Construction{' '}
          <span role="img" aria-label="roadwork sign">
            🚧
          </span>
        </PageTitle>
      </div>
    )
  }

  const prev = sortedCoreContents[postIndex + 1]
  const next = sortedCoreContents[postIndex - 1]
  const post = allBlogs.find((p) => p.slug === slug) as BlogDoc
  const authorList = post?.authors || ['default']
  const authorDetails = authorList.map((authorSlug) => {
    const authorResults = allAuthors.find((p) => p.slug === authorSlug) as AuthorDoc
    return coreContent(authorResults)
  })
  const mainContent = coreContent(post)
  const { content: mdxBody } = await compileBlogPostMdx(post.mdxSource, post.toc)
  const jsonLd = {
    ...post.structuredData,
    author: authorDetails.map((author) => ({
      '@type': 'Person',
      name: author.name,
    })),
  }

  const Layout = layouts[post.layout || defaultLayout]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Layout content={mainContent} authorDetails={authorDetails} next={next} prev={prev}>
        {mdxBody}
      </Layout>
    </>
  )
}
