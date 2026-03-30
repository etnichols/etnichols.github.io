import { getAllBlogs } from '@/lib/content/blog'
import { allCoreContent, sortPosts } from '@/lib/content/utils'
import MainContent from './main-content'

export default async function Page() {
  const allBlogs = await getAllBlogs()
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)

  return <MainContent posts={posts} />
}
