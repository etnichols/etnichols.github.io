import React from "react"
import Link from "gatsby-link"
import styles from "../styles"
import presets from "../utils/presets"
import { rhythm, scale } from "../utils/typography"

class Projects extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges

    return (
      <div>
        <h1 css={{marginTop: rhythm(1)}}>peruse a project.</h1>
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
}

export default Projects

export const pageQuery = graphql`
  query ProjectsQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          draft: { ne: true }
          type: { eq: "project" }
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
