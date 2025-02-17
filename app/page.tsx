import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'

import MainContent from './main-content'
import { allBlogs } from 'contentlayer/generated'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)

  return <MainContent posts={posts} />
}
