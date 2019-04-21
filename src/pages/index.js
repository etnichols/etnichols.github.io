import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import styles from '../styles'
import presets from '../utils/presets'
import {formatDate} from '../utils/format'

import './index.css'
import Layout from '../components/layout'
import PostList from '../components/postlist'

/** Renders list of all posts. */
const Index = () => (
  <StaticQuery
  query={PageQuery}
  render={data => (<Layout><RenderPage data={data}/></Layout>)}
  />)

const RenderPage = ({data}) => {
  const posts = data.allMarkdownRemark.edges
  return(
    <div>
      <h1>read a post.</h1>
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
            date
          }
        }
      }
    }
  }
`

export default Index
