import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

/** Minimal MDX pipeline for author bios (no Prism / KaTeX / citation stack). */
export function getAuthorMdxCompilationOptions() {
  return {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
  }
}
