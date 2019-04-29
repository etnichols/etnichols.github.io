import React from 'react'
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
    <section>
      <h2 className="section-title">{title}</h2>
      <div className="section-bar"></div>
        {entries.map(entry => <Entry {...entry} />)}
    </section>
  )
}

/** A factory for creating a section entry. */
const Entry = ({title, linkify, company, duration, description}) => {
  let header

  if(title && duration) {
    let maybeLinkedTitle = linkify ? (<a href={linkify}>{title}</a>) : title
    header = (
      <>
        <h4 className="job-title">{maybeLinkedTitle}</h4>
        { company &&
          <h4 className="job-title" style={{color: styles.colors.light}}>
            {company}
          </h4>
        }
        <div className="duration" style={{color: styles.colors.text}}>
          <i>{`${duration.start} - ${duration.end}`}</i>
        </div>
      </>)
  }

  let body = Array.isArray(description) ? (
    <ul className="languages">
    { description.map(item => <li>{item}</li>) }
    </ul> ) : description

  return (
  <div className="job">
    {header}
    <div className="description">{body}</div>
  </div> )
}

export default Resume
