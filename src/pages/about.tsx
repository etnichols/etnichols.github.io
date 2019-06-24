import { graphql, StaticQuery } from 'gatsby'
import React, { FC } from 'react'
import Icon from '../components/icon'
import Layout from '../components/layout'

import { Column, Duration, Entry, Resume, Section } from '../@types/resume.d.ts'
import data from '../data/resume'
import './about.scss'

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
      <TitleSection />
      <div className="resume">
        {sections.map(section => (
          <RenderSection key={`section-${section.title}`} {...section} />
        ))}
      </div>
    </>
  )
}

const TitleSection: FC<> = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              author
              description
              email
              linkedin
              github
              medium
            }
          }
        }
      `}
      render={data => {
        const { siteMetadata } = data.site
        return (
          <div>
            <h1>about me</h1>
            <p className="title-section-description">
              {siteMetadata.description}
            </p>
            <div className="icon-section">
              <a className="link-icon" href={`mailto:${siteMetadata.email}`}>
                <Icon name="email" />
              </a>
              <a className="link-icon" href={siteMetadata.github}>
                <Icon name="github" />
              </a>
              <a className="link-icon" href={siteMetadata.linkedin}>
                <Icon name="linkedin" />
              </a>
              <a className="link-icon" href={siteMetadata.medium}>
                <Icon name="medium" />
              </a>
            </div>
          </div>
        )
      }}
    />
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
        <div className="duration">{`${duration.start} - ${duration.end}`}</div>
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
    <div className="entry">
      {header}
      <div className="description">{body}</div>
    </div>
  )
}

export default Page
