import React from 'react'
import { Link } from 'gatsby'

import { formatDate } from '../utils/format'
import './postlist.scss'

const resolveColor = type => {
  switch (type) {
    case 'project':
      return 'blue'
    case 'tutorial':
      return 'green'
    default:
      return 'red'
  }
}

const PostList = ({ posts, withType }) => (
  <ul style={{ marginLeft: 0, listStyle: `none` }}>
    {posts.map(post => {
      const { node } = post
      const { fields, frontmatter } = node
      return (
        <li className="post-list-item margin-bottom-medium" key={fields.slug}>
          <div className="post-date">({formatDate(frontmatter.date)})</div>
          <div className="title-container">
            <Link className="list-item" to={fields.slug}>
              {frontmatter.title}
            </Link>
            {withType && (
              <div className="post-type-container">
                <div className={`post-type ${resolveColor(frontmatter.type)}`}>
                  {frontmatter.type}
                </div>
              </div>
            )}
          </div>
        </li>
      )
    })}
  </ul>
)

export default PostList
