import React, { FC } from 'react'
import Layout from '../components/layout'

import { Column, Duration, Entry, Resume, Section } from '../@types/resume.d.ts'
import data from '../data/resume'
import './resume.scss'

const Page: FC<> = () => {
  return (
    <Layout>
      <RenderResume {...data} />
    </Layout>
  )
}

const RenderResume: FC<Resume> = ({ sections }) => {
  return (
    <>
      <h1>resume.</h1>
      <div className="resume">
        <RenderColumn sections={sections.slice(0, 1)} />
        <RenderColumn sections={sections.slice(1)} />
      </div>
    </>
  )
}

/** Renders a column which can be one or more sections. */
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

/** A single entry, either a job entry or a list of skills. */
const RenderEntry: FC<Entry> = ({
  title,
  link,
  company,
  duration,
  description,
}) => {
  const header = (
    <>
      <h4 className="job-title">{link ? <a href={link}>{title}</a> : title}</h4>
      {company && <h4 className="job-title">{company}</h4>}
      {duration && (
        <div className="duration">
          <i>{`${duration.start} - ${duration.end}`}</i>
        </div>
      )}
    </>
  )

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
