import React from "react"
import { StaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"
import PostList from '../components/postlist'

const Tutorials = () => (
  <StaticQuery
  query={PageQuery}
  render={data => (<Layout><RenderPage data={data}/></Layout>)}
  />
)

const RenderPage =({data}) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <div>
      <h2>try a tutorial</h2>
      <PostList posts={posts} />
    </div>
  )
}

const PageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          draft: { ne: true }
          type: { eq: "tutorial" }
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
            date
          }
        }
      }
    }
  }
`

export default Tutorials
