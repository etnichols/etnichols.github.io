import Tooltip from "@material-ui/core/Tooltip"
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import React, { FC } from 'react'
import ReactMarkdown from "react-markdown"
import { Resume } from '../@types/resume.d.ts'
import Icon from '../components/icon'
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
            <div className="centered">
              <Img
                fixed={profile_picture.childImageSharp.fixed}
                className="profile-picture"
                imgStyle={{
                  border: 'none',
                  borderRadius: '50%',
                }}
              />
              <ReactMarkdown className="title-section-description" source={description} />
              <div className="icon-section">
                <>
                  {iconsWithLinks.map(([icon, href], i) => (
                    <Tooltip title={icon} placement="bottom">
                      <a key={`link-${i}`} className="link-icon" href={href}>
                        <Icon key={`link-${i}`} name={icon} />
                      </a>
                    </Tooltip>
                  ))}
                  <Tooltip title="resume" placement="bottom">
                    <Link to="/resume">
                      <Icon key={`link-resume`} name="resume" />
                    </Link>
                  </Tooltip>
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
