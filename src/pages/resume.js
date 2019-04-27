import React from "react"
import { StaticQuery, Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from "../components/layout"

import data from '../data/resume'
import styles from '../styles'
import './resume.css'

const Resume = () => (<Layout><RenderPage data={data} /></Layout>)

const RenderPage = ({data}) => {
  const col1 = data.slice(0,1)
  const col2 = data.slice(1)

  return(
  <>
    <h1>resume.</h1>
    <div className="resume">
    <Column sections={col1} />
    <Column sections={col2} />
    </div>
  </>)
}

// Need an iterative way to build, taking sections and balancing things if possible.

// Attempt to do some balancing based on entries.
// A Column can be multiple sections.
const Column = ({sections}) => {
  return (
    <div className="column">
    {
      sections.map(section =>
        <Section title={section.section} entries={section.entries}/>)
        }
    </div>
  )
}

const Section = ({title, entries}) => {
  return (
    <div className="column">
    <h2 className="section-title">{title}</h2>
    <div className="section-bar"></div>
      {entries.map(entry => <Entry {...entry} />)}
    </div>
  )
}

const Entry = ({title, company, duration, description}) => {
  title = title ? title : ''
  company = company ? company : ''
  duration = duration ? duration : {start: 'Placeholder', end: 'Placeholder'}
  description = description ? description : ''
  return (
  <div className="job">
    <h4 className="job-title">{title}  {company ? `| ${company}` : ``}</h4>
    <div className="duration" style={{color: styles.colors.light}}>
      {`${duration.start} - ${duration.end}`}
    </div>
    <div>{description}</div>
  </div>
)
}

export default Resume
