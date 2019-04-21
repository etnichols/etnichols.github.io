import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Link from "gatsby-link"
import { Location } from '@reach/router'

const ROUTES = {
  posts: '/',
  projects: '/projects',
  about: '/about',
  contact: '/contact'
}

const isActiveRoute = (route, active) =>
  route === active || (active === '' && route === 'posts')

// TODO(etnichols): render a bullet next to active route.
const Nav = props => {
  return (
    <Location>
    {({location}) => {
        let active = location.pathname.split(`/`)[1]
        return Object.entries(ROUTES).map(([key, value]) => (<>
        <Link className="linkStyle" to={value}>{`${isActiveRoute(key, active) ? '•' : ''} ${key}`}</Link>
        <br/>
        </>))
      }}
    </Location>
  )
}

export default Nav
