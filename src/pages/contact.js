import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import styles from "./index.module.css"

import Layout from "../components/layout"

const Contact = () => (
  <StaticQuery
    query={PageQuery}
    render={data => (
      <Layout>
        <div className={styles.contactSection}>
          <h1>say hello.</h1>
          <p>+ <a className={styles.contactLink} href="mailto:evantnichols@gmail.com">{data.site.siteMetadata.email}</a></p>
          <p>+ <a className={styles.contactLink} href={data.site.siteMetadata.github}> Github</a></p>
          <p>+ <a className={styles.contactLink} href={data.site.siteMetadata.linkedin}> LinkedIn</a></p>
          <p>+ <a className={styles.contactLink} href={__PATH_PREFIX__ + '/nichols_evan_resume.pdf'}> Resume</a></p>
        </div>
      </Layout>
    )}
  />
)

const PageQuery = graphql`
  query {
    site {
      siteMetadata {
        email
        linkedin
        github
      }
    }
  }
`
