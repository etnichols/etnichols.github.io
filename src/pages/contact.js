import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import './index.css'

import Layout from '../components/layout'

const Contact = () => (
  <StaticQuery
    query={PageQuery}
    render={data => (
      <Layout>
        <div>
          <h1>say hello.</h1>
          <ul>
            <li>
              <a className="contact-link" href={`mailto:${data.site.siteMetadata.email}`}>Email</a>
            </li>
            <li>
              <a className="contact-link" href={data.site.siteMetadata.github}>Github</a>
            </li>
            <li>
              <a className="contact-link" href={data.site.siteMetadata.linkedin}>LinkedIn</a>
            </li>
          </ul>
        </div>
      </Layout>
    )}
  />
)

export default Contact

const PageQuery = graphql`
  query {
    site {
      siteMetadata {
        email
        linkedin
        github
      }
    }
  }
`
