import React from "react"
import { StaticQuery, Link, graphql } from 'gatsby'
import kebabCase from "lodash/kebabCase"

const RenderPage = ({data}) => {
  const allTags = data.allMarkdownRemark.group
  return (
    <div>
      <h1>Tags</h1>
      <ul>
        {allTags.map(tag => (
          <li key={tag.fieldValue}>
            <Link
              style={{textDecoration: `none`,}}
              to={`/tags/${kebabCase(tag.fieldValue)}/`}
            >
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const TagsPageRoute = () => (
  <StaticQuery
    query={PageQuery}
    render={data => (<Layout><RenderPage data={data}/></Layout>)}
  />)

const PageQuery = graphql`
  query TagsQuery {
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

export default TagsPageRoute
