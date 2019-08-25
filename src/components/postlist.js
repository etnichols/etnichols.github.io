import React from 'react'
import { Link } from 'gatsby'

import { formatDate } from '../utils/format'
import styles from '../styles'

const PostList = ({ posts }) => (
  <ul style={{ marginLeft: 0, listStyle: `none`,}}>
    {posts.map(post => {
      const { node } = post
      const { excerpt, fields, frontmatter } = node
      return (
        <li key={fields.slug}>
          <span
            style={{color: styles.colors.text}}
            className="post-date">
            {formatDate(frontmatter.date)}
          </span>
          <Link to={fields.slug}>
            {frontmatter.title}
          </Link>
        </li>
      )
    })}
  </ul>
)

export default PostList
