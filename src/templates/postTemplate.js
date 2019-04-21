
import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

import presets from '../utils/presets'
import formatDate from '../utils/format'
import styles from '../styles'
import { rhythm } from '../utils/typography'

export default function PostTemplate({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html, tableOfContents, timeToRead } = markdownRemark
    return (
      <Layout>
        <header>
          <h1 style={{
            marginBottom: rhythm(1/2),
            color: frontmatter.shadow}}
          >
            {frontmatter.title}
          </h1>
          <hr style={{marginBottom: rhythm(1/2)}}/>
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

// <p
//         css={{
//           marginBottom: rhythm(4 / 4),
//           display: `flex`,
//           alignItems: `center`,
//         }}
//       >
//         <img
//           alt={`Avatar of ${post.frontmatter.author.id}`}
//           src={
//             post.frontmatter.author.avatar.children[0].responsiveResolution
//               .src
//           }
//           srcSet={
//             post.frontmatter.author.avatar.children[0].responsiveResolution
//               .srcSet
//           }
//           css={{
//             borderRadius: `100%`,
//             float: `left`,
//             marginRight: rhythm(3 / 4),
//             marginBottom: 0,
//           }}
//         />
//         <span
//           css={{
//             color: styles.colors.light,
//             ...scale(-1 / 5),
//           }}
//         >
//           <small
//             css={{
//               fontWeight: `bold`,
//               color: styles.colors.text,
//               textTransform: `uppercase`,
//             }}
//           >
//             {post.frontmatter.author.id}
//           </small>
//           {` `}
//           {post.frontmatter.author.bio}
//         </span>
//       </p>

const TagsSection = ({post}) => {
  let tags
  let tagsSection
  if (post.fields.tagSlugs) {
    const tagsArray = post.fields.tagSlugs
    tags = tagsArray.map((tag, i) => {
      const divider = i < tagsArray.length - 1 && <span>{`, `}</span>
      return (
        <span key={tag}>
          <Link to={tag}>{post.frontmatter.tags[i]}</Link>
          {divider}
        </span>
      )
    })
  }

  return (
    <span style={{ fontStyle: `normal`, textAlign: `left`,}}>
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
        author {
          id
          bio
        }
      }
    }
  }
`
