import type { AuthorDoc, BlogDoc, CoreContent } from '@/lib/content/types';
import PageTitle from '@/components/page-title'
import { ReactNode } from 'react'
import ScrollTopAndComment from '@/components/scroll-top-and-comment'
import SectionContainer from '@/components/section-container'
import Tag from '@/components/tag'
import siteMetadata from '@/data/site-metadata'

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<BlogDoc>
  authorDetails: CoreContent<AuthorDoc>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, children }: LayoutProps) {
  const { date, title, tags } = content

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <header className="border-b border-gray-200 pb-8 pt-6 dark:border-gray-700">
          <div className="space-y-3">
            <dl>
              <dt className="sr-only">Published on</dt>
              <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                <time dateTime={date}>
                  {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                </time>
              </dd>
            </dl>
            <PageTitle>{title}</PageTitle>
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-1 pt-1">
                {tags.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>
            )}
          </div>
        </header>
        <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">{children}</div>
      </article>
    </SectionContainer>
  )
}
