import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'

import Main from './main'
import { allBlogs } from 'contentlayer/generated'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)

  return <Main posts={posts} />
}
