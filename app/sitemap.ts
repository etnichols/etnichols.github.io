import { MetadataRoute } from 'next'
import { getAllBlogs } from '@/lib/content/blog'
import siteMetadata from '@/data/site-metadata'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = siteMetadata.siteUrl
  const allBlogs = await getAllBlogs()
  const isProduction = process.env.NODE_ENV === 'production'
  const posts = isProduction ? allBlogs.filter((p) => !p.draft) : allBlogs
  const blogRoutes = posts.map((post) => ({
    url: `${siteUrl}/${post.path}`,
    lastModified: post.lastmod || post.date,
  }))

  const routes = ['', 'blog', 'projects', 'tags'].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogRoutes]
}
