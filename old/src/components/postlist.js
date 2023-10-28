import './postlist.scss'

import { Link } from 'gatsby'
import React from 'react'
import { formatDate } from '../utils/format'

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
        <li className="post-list-item margin-bottom-large" key={fields.slug}>
          <div className="title-container">
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
