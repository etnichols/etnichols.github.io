import React, { FC } from 'react'
import Layout from '../components/layout'

import { Column, Duration, Entry, Resume, Section } from '../@types/resume.d.ts'
import data from '../data/resume'
import styles from '../styles'
import './resume.css'

const Page: FC<> = () => {
  return (
    <Layout>
      <RenderPage {...data} />
    </Layout>
  )
}

const RenderPage: FC<Resume> = ({ sections }) => {
  const col1 = sections.slice(0, 1)
  const col2 = sections.slice(1)
  return (
    <>
      <h1>resume.</h1>
      <div className="resume">
        <RenderColumn sections={col1} />
        <RenderColumn sections={col2} />
      </div>
    </>
  )
}

/** Renders a column which can be multiple sections. */
const RenderColumn: FC<Column> = ({ sections }) => {
  return (
    <div className="column">
      {sections.map(section => (
        <RenderSection key={`section-${section.title}`} {...section} />
      ))}
    </div>
  )
}

const RenderSection: FC<Section> = ({ title, entries }) => {
  return (
    <section>
      <h2 className="section-title">{title}</h2>
      <div className="section-bar" />
      {entries.map((entry, i) => (
        <RenderEntry key={`${title}-entry-${i}`} {...entry} />
      ))}
    </section>
  )
}

/**
 * A single entry, either a job entry or a list of skills. If the latter all
 * fields exception description are null.
 */
const RenderEntry: FC<Entry> = ({
  title,
  linkify,
  company,
  duration,
  description,
}) => {
  let header

  if (title) {
    const maybeLinkedTitle = linkify ? <a href={linkify}>{title}</a> : title
    header = (
      <>
        <h4 className="job-title">{maybeLinkedTitle}</h4>
        {company && (
          <h4 className="job-title" style={{ color: styles.colors.light }}>
            {company}
          </h4>
        )}
        {duration && (
          <div className="duration" style={{ color: styles.colors.text }}>
            <i>{`${duration.start} - ${duration.end}`}</i>
          </div>
        )}
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

export default Page
