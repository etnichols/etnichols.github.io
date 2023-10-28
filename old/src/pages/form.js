import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import PostList from '../components/postlist'

/** Renders list of all posts. */
const Form = () => (
  <Layout>
    <RenderPage />
  </Layout>
)

const RenderPage = () => {
  return (
    <div>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfa5DsdgfUtngPBfIlJ10Cevts4QbN09fJenO_KqJPZRlXwBw/viewform"
        width="640"
        height="1113"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </div>
  )
}

export default Form
