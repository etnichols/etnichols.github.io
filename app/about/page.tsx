import AuthorLayout from '@/layouts/author-layout'
import { getAllAuthors } from '@/lib/content/authors'
import { compileAuthorMdx } from '@/lib/content/compile-author-mdx'
import { coreContent } from '@/lib/content/utils'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default async function Page() {
  const allAuthors = await getAllAuthors()
  const author = allAuthors.find((p) => p.slug === 'default')
  if (!author) {
    return null
  }
  const mainContent = coreContent(author)
  const { content: mdxBody } = await compileAuthorMdx(author.mdxSource, author.toc)

  return (
    <>
      <AuthorLayout content={mainContent}>{mdxBody}</AuthorLayout>
    </>
  )
}
