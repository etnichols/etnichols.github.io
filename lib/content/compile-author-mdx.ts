import type { SerializeOptions } from 'next-mdx-remote/dist/types'
import type { TocItem } from './types'

export async function compileAuthorMdx(mdxSource: string, toc: TocItem[]) {
  const [{ compileMDX }, { components }, { getAuthorMdxCompilationOptions }] = await Promise.all([
    import('next-mdx-remote/rsc'),
    import('@/components/mdx-components'),
    import('./mdx-options-author'),
  ])
  const mdxOptions = getAuthorMdxCompilationOptions() as NonNullable<SerializeOptions['mdxOptions']>
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
