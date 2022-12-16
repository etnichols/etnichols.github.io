import React, { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import { Entry, Resume, Section } from '../@types/resume.d.ts'
import Layout from '../components/layout'
import data from '../data/resume'
import './index.scss'

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
      <h2>resume</h2>
      <div className="resume-body">
        view a copy <a target="_blank" href="https://drive.google.com/file/d/1mna08xjos0fK1SQMh9jJ_68PCqZ-sSLR/view">here</a>.
      </div>
    </>
  )
}

/** Renders a section, a titled list of entries. */
const RenderSection: FC<Section> = ({ title, entries }) => {
  return (
    <section className="section">
      <div className="section-title-container">
        <h2 className="section-title">{title}</h2>
        <div className="section-bar" />
      </div>
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
      {title && (
        <h4 className="entry-title">
          {link ? <a href={link}>{title}</a> : title}
        </h4>
      )}
      {company && <h5 className="entry-company">{company}</h5>}
      {duration && (
        <div className="entry-duration">{`${duration.start} -  ${duration.end}`}</div>
      )}
    </>
  )

  const body = Array.isArray(description) ? (
    <ul className="languages">
      {description.map((item, i) => (
        <li key={`languages-${item}-${i}`}>
          <ReactMarkdown source={item} />
        </li>
      ))}
    </ul>
  ) : (
    <ReactMarkdown source={description} />
  )

  return (
    <div className="entry">
      {header}
      <div className="entry-description">{body}</div>
    </div>
  )
}

export default Page
