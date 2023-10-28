
import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

export default function TagsTemplate({ data, pageContext }) {
  const { edges, totalCount } = data.allMarkdownRemark
  const links = edges.map(({ node }) => (
    <li><Link to={node.fields.slug}>{node.frontmatter.title}</Link></li>
  ))

  return (
    <Layout>
      <h1>{`${totalCount} ${totalCount === 1 ? 'post' : 'posts'} tagged with "${pageContext.tag}"`}</h1>
      <ul>{links}</ul>
      <p><Link to="/tags/">Browse all tags</Link></p>
    </Layout>
  )
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, draft: { ne: true } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
