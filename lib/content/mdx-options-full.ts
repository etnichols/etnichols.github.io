import path from 'path'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCitation from 'rehype-citation'
import rehypeKatex from 'rehype-katex'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import { remarkCodeTitles } from 'pliny/mdx-plugins/remark-code-title.js'
import { remarkImgToJsx } from 'pliny/mdx-plugins/remark-img-to-jsx.js'

const root = process.cwd()

/**
 * Blog MDX pipeline. Matches the old Contentlayer setup except:
 * - Import Pliny remark plugins via their direct entry points (not mdx-plugins/index.js),
 *   which avoids a Turbopack + parallel worker EBADF during `next build`.
 * - rehype-preset-minify is omitted; it triggered the same EBADF when combined with this stack.
 */
export function getBlogMdxCompilationOptions() {
  return {
    remarkPlugins: [remarkGfm, remarkCodeTitles, remarkMath, remarkImgToJsx],
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
      rehypeKatex,
      [rehypeCitation, { path: path.join(root, 'data') }],
      [rehypePrismPlus, { defaultLanguage: 'js', ignoreMissing: true }],
    ],
  }
}
