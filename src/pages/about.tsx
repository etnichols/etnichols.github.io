import { graphql, StaticQuery } from 'gatsby'
import React, { FC } from 'react'
import Icon from '../components/icon'
import Layout from '../components/layout'
import Img from 'gatsby-image'

import { Duration, Entry, Resume, Section } from '../@types/resume.d.ts'
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
      <ResumeTitle />
      <div className="resume-body">
        {sections.map(section => (
          <RenderSection key={`section-${section.title}`} {...section} />
        ))}
      </div>
    </>
  )
}

const ResumeTitle: FC<> = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          metadata: site {
            siteMetadata {
              description
              email
              linkedin
              github
              medium
            }
          }
          profile_picture: file(relativePath: { eq: "about-pic.jpg" }) {
            childImageSharp {
              fixed(width: 120, quality: 90) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      `}
      render={({ metadata, profile_picture }) => {
        const {
          email,
          github,
          linkedin,
          medium,
          description,
        } = metadata.siteMetadata

        const iconsWithLinks = [
          ['email', `mailto:${email}`],
          ['github', github],
          ['linkedin', linkedin],
          ['medium', medium],
        ]

        return (
          <div>
            <h2>about me</h2>
            <div class="centered">
              <Img
                fixed={profile_picture.childImageSharp.fixed}
                className="profile-picture"
                imgStyle={{
                  border: 'none',
                  borderRadius: '50%',
                }}
              />
              <p className="title-section-description">{description}</p>
              <div className="icon-section">
                {iconsWithLinks.map(([icon, href], i) => (
                  <a key={`link-${i}`} className="link-icon" href={href}>
                    <Icon key={`link-${i}`} name={icon} />
                  </a>
                ))}
              </div>
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
        <div className="entry-duration">{`${duration.start} -  ${duration.end}`}</div>
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
      <div className="entry-description">{body}</div>
    </div>
  )
}

export default Page
