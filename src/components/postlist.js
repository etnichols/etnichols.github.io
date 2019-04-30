import React from 'react'
import { Link } from 'gatsby'

import { formatDate } from '../utils/format'
import styles from '../styles'

const PostList = ({ posts }) => (
  <ul style={{ marginLeft: 0, listStyle: `none`,}}>
    {posts.map(post => {
      const { node } = post
      const { fields, frontmatter } = node
      return (
        <li key={fields.slug}>
          <span
            style={{color: styles.colors.light}}
            className="post-date">
            {formatDate(frontmatter.date)}
          </span>
          <Link to={fields.slug} className="link-underline">
            {frontmatter.title}
          </Link>
        </li>
      )
    })}
  </ul>
)

export default PostList