import type { SerializeOptions } from 'next-mdx-remote/dist/types'
import { getBlogMdxCompilationOptions } from './mdx-options-full'
import type { TocItem } from './types'

export async function compileBlogPostMdx(mdxSource: string, toc: TocItem[]) {
  const [{ compileMDX }, { components }] = await Promise.all([
    import('next-mdx-remote/rsc'),
    import('@/components/mdx-components'),
  ])
  const mdxOptions = getBlogMdxCompilationOptions() as NonNullable<SerializeOptions['mdxOptions']>
  return compileMDX({
    source: mdxSource,
    components,
    options: {
      parseFrontmatter: false,
      scope: { toc },
      blockJS: false,
      mdxOptions,
    },
  })
}
