import React from 'react'
import Link from "gatsby-link"
import { Location } from '@reach/router'

const ROUTES = {
  'posts': '/',
  'projects': '/projects',
  'tutorials': '/tutorials',
  'about': '/about',
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
        <Link className="link-style" to={value}>{`${isActiveRoute(key, active) ? '>' : ''} ${key}`}</Link>
        <br/>
        </>))
      }}
    </Location>
  )
}

export default Nav
