import React from 'react'
import PropTypes from 'prop-types'
import Link from "gatsby-link"
import { StaticQuery, graphql } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import styles from '../styles'
import presets from '../utils/presets'

import './styles.css'
import 'prismjs/themes/prism-solarizedlight.css'

const NAV_LINKS = {
  posts: '/',
  projects: '/projects',
  about: '/about',
  contact: '/contact'
}

const Nav = ({links}) => {
  const nav = []
  nav.push(<div>)
  for(let [title, route] in links.entries()){
    nav.push(<Link className="linkStyle"  to={route}>{title}</Link>)
    nav.push(<br/>)
  }
  nav.push(</div>)
  return nav
}

const Layout = ({children}) => (
  <div>
    <div {...styles.container} {...styles.verticalPadding}>
      <Link to="/" css={{display: `inline-block`,}}>
        <h1
          css={{
            color: styles.colors.light,
            lineHeight: 1,
            margin: 0,
            paddingBottom: rhythm(0.5),
          }}
        >
          etnichols
        </h1>
      </Link>
      <hr/>
      <Nav links={NAV_LINKS} />
    </div>
    <div {...styles.container} {...styles.verticalPadding}>
      {this.props.children}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

// <div>
//   <Link className="linkStyle"  to={`/`}>posts</Link>
//   <br/>
//   <Link className="linkStyle" to={`/projects/`}>projects</Link>
//   <br/>
//   <Link className="linkStyle"  to={`/about/`}>about</Link>
//   <br/>
//   <Link className="linkStyle" to={`/contact/`}>contact</Link>
// </div>
