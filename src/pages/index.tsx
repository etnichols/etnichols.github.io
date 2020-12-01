import Icon from '../components/icon'
import Layout from '../components/layout'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import React, { FC } from 'react'
import ReactMarkdown from 'react-markdown'

import { Duration, Entry, Resume, Section } from '../@types/resume.d.ts'
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
            <h2>welcome</h2>
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
                <>
                  {iconsWithLinks.map(([icon, href], i) => (
                    <a key={`link-${i}`} className="link-icon" href={href}>
                      <Icon key={`link-${i}`} name={icon} />
                    </a>
                  ))}
                  <Link to="/resume">
                    <Icon key={`link-resume`} name="resume" />
                  </Link>
                </>
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}

export default Page
