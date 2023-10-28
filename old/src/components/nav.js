import './nav.scss'

import Link from "gatsby-link"
import { Location } from '@reach/router'
import React from 'react'

const ROUTES = {
  'about': '/',
  'blog': '/blog',
  'programming': '/programming',
}

const isActiveRoute = (route, active) =>
  route === active || (active === '' && route === 'about')

const Nav = props => {
  return (
    <Location>
    {({location}) => {
        let active = location.pathname.split(`/`)[1]
        return Object.entries(ROUTES).map(([key, value]) => (<>
        <Link className="link-style" to={value}>{`${isActiveRoute(key, active) ? '>' : ''} ${key}`}</Link>
        <br/>
        </>))
      }}
    </Location>
  )
}

export default Nav
