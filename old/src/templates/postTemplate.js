import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import styles from '../styles'
import { rhythm } from '../utils/typography'

export default function PostTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html, tableOfContents, timeToRead } = markdownRemark
  return (
    <Layout>
      <header>
        <h1
          style={{
            marginBottom: rhythm(1 / 2),
            color: frontmatter.shadow,
          }}
        >
          {frontmatter.title}
        </h1>
        <hr style={{ marginBottom: rhythm(1 / 2) }} />
        <p
          style={{
            marginTop: 0,
            paddingTop: 0,
            display: `block`,
            color: `${styles.colors.light}`,
          }}
        >
          {`${timeToRead} min read • `}
          <TagsSection post={markdownRemark} />
        </p>
      </header>
      <div
        dangerouslySetInnerHTML={{ __html: tableOfContents }}
        className="toc"
      />
      <div dangerouslySetInnerHTML={{ __html: html }} className="post" />
    </Layout>
  )
}

const TagsSection = ({ post }) => {
  let tags
  if (post.fields.tagSlugs) {
    const tagsArray = post.fields.tagSlugs
    tags = tagsArray.map((tag, i) => (
      <span key={tag}>
        <Link to={tag}>{post.frontmatter.tags[i]}</Link>
        {i < tagsArray.length - 1 && <span>{`, `}</span>}
      </span>
    ))
  }

  return (
    <span style={{ fontStyle: `normal`, textAlign: `left` }}>
      tagged {tags}
    </span>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      tableOfContents
      fields {
        tagSlugs
      }
      frontmatter {
        title
        tags
        date
      }
    }
  }
`
