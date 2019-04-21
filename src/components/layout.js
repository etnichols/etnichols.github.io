/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Link from "gatsby-link"

import Nav from '../components/nav'

import './layout.css'
import styles from '../styles'
import { rhythm, scale } from '../utils/typography'

const NAV_LINKS = {
  posts: '/',
  projects: '/projects',
  about: '/about',
  contact: '/contact'
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      const { title } = data.site.siteMetadata
      return (
      <>
        <div style={{
          padding: rhythm(3 / 4),
          maxWidth: `37rem`,
          margin: `0 auto`,
        }}>
          <main>
            <Link to="/" css={{display: `inline-block`,}}>
            <h1
              style={{
                color: styles.colors.light,
                lineHeight: 1,
                margin: 0,
                paddingBottom: rhythm(1/4),
                paddingTop: rhythm(1/4),
              }}>
              {title}
            </h1></Link>
            <hr/>
            <Nav/>
          {children}
          </main>
          <footer>
            <div style={{ color: styles.colors.light, textAlign: `center`}}>
              {`© ${new Date().getFullYear()} ${title}`}
            </div>
          </footer>
        </div>
      </>)
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
