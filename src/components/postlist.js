import React from 'react'
import { Link } from 'gatsby'

import { formatDate } from '../utils/format'
import styles from '../styles'
import './postlist.scss'

const PostList = ({ posts, withType }) => (
  <ul style={{ marginLeft: 0, listStyle: `none` }}>
    {posts.map(post => {
      const { node } = post
      const { fields, frontmatter } = node
      return (
        <li key={fields.slug}>
          <div className="title-container">
          {withType && (
            <div className="post-type-container">
            <div className="post-type">{frontmatter.type}</div>
            </div>
          )}
            <Link className="list-item" to={fields.slug}>
              {frontmatter.title}
            </Link>
            <div className="post-date">({formatDate(frontmatter.date)})</div>
          </div>
        </li>
      )
    })}
  </ul>
)

export default PostList
