import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import CustomLink from './link'
import Image from './image'
import type { MDXComponents } from 'mdx/types'
import Pre from 'pliny/ui/Pre'
import TOCInline from 'pliny/ui/TOCInline'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  BlogNewsletterForm,
}
