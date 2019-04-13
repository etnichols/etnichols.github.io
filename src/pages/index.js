import React from "react"
import { StaticQuery, Link, graphql } from 'gatsby'
import styles from "../styles"
import presets from "../utils/presets"
import { rhythm, scale } from "../utils/typography"

import './index.css'
import Layout from "../components/layout"

const RenderPage = ({data}) => {
  const posts = data.allMarkdownRemark.edges
  return(
    <div>
      <h1 css={{marginTop: rhythm(1)}}>read a post.</h1>
      <ul
        css={{
          marginBottom: rhythm(2),
          marginTop: rhythm(1),
          marginLeft: 0,
          listStyle: `none`,
        }}
      >
        {posts.map(post => (
          <li key={post.node.fields.slug}>
            <span
              css={{
                color: styles.colors.light,
                display: `block`,
                [presets.Tablet]: {
                  float: `right`,
                  marginLeft: `1rem`,
                },
              }}
            >
              {post.node.frontmatter.date}
            </span>
            <Link to={post.node.fields.slug} className="link-underline">
              {post.node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Index = () => (
  <StaticQuery
    query={PageQuery}
    render={data => (<Layout><RenderPage data={data}/></Layout>)}
  />)

const PageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          draft: { ne: true }
          type: { eq: "post" }
       }
     }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

export default Index
