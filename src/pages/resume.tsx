import React, { FunctionComponent } from 'react'
import Layout from '../components/layout'

import { data, IDuration, IEntry, ISection } from '../data/resume'
import styles from '../styles'
import './resume.css'

const Resume: FunctionComponent<> = props => {
  return (
    <Layout>
      <RenderPage data={data} />
    </Layout>
  )
}

const RenderPage: FunctionComponent<{ data: [ISection] }> = ({ data }) => {
  const col1 = data.slice(0, 1)
  const col2 = data.slice(1)
  return (
    <>
      <h1>resume.</h1>
      <div className="resume">
        <Column sections={col1} />
        <Column sections={col2} />
      </div>
    </>
  )
}

/** Renders a column which can be multiple sections. */
const Column: FunctionComponent<{ sections: [ISections] }> = ({ sections }) => {
  return (
    <div className="column">
      {sections.map(section => (
        <Section
          key={`section-${section.title}`}
          title={section.title}
          entries={section.entries}
        />
      ))}
    </div>
  )
}

const Section: FunctionComponent<{ title: string; entries: [IEntry] }> = ({
  title,
  entries,
}) => {
  return (
    <section>
      <h2 className="section-title">{title}</h2>
      <div className="section-bar" />
      {entries.map((entry, i) => (
        <Entry key={`${title}-entry-${i}`} {...entry} />
      ))}
    </section>
  )
}

/**
 * A single entry, either a job entry or a list of skills. If the latter all
 * fields exception description are null.
 */
const Entry: FunctionComponent<{
  title?: string
  linkify?: string
  company?: string
  duration?: IDuration
  description: string | [string]
}> = ({ title, linkify, company, duration, description }) => {
  let header

  if (title && duration) {
    const maybeLinkedTitle = linkify ? <a href={linkify}>{title}</a> : title
    header = (
      <>
        <h4 className="job-title">{maybeLinkedTitle}</h4>
        {company && (
          <h4 className="job-title" style={{ color: styles.colors.light }}>
            {company}
          </h4>
        )}
        <div className="duration" style={{ color: styles.colors.text }}>
          <i>{`${duration.start} - ${duration.end}`}</i>
        </div>
      </>
    )
  }

  const body = Array.isArray(description) ? (
    <ul className="languages">
      {description.map((item, i) => (
        <li key={`languages-${item}-${i}`}>{item}</li>
      ))}
    </ul>
  ) : (
    description
  )

  return (
    <div className="job">
      {header}
      <div className="description">{body}</div>
    </div>
  )
}

export default Resume
