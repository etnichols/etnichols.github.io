import { graphql, StaticQuery } from 'gatsby'
import React, { FC } from 'react'
import Icon from '../components/icon'
import Layout from '../components/layout'

import { Duration, Entry, Resume, Section } from '../@types/resume.d.ts'
import data from '../data/resume'
import './about.scss'

const Page: FC<> = () => {
  return (
    <Layout>
      <div className="iframe-container">
      <h1>Example Google Calendar embed</h1>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=ht3jlfaac5lfd6263ulfh4tql8%40group.calendar.google.com&ctz=America%2FNew_York"
          style={{border:"0"}}
          width="800"
          height="600"
          frameBorder="0"
          scrolling="no"
        />
      </div>
    </Layout>
  )
}

export default Page
