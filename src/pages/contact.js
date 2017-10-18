import React from "react"
import styles from "./index.module.css"

export default ({data}) => {
  return (
    <div className={styles.contactSection}>
      <h1>say hello</h1>
      <p>+ <a className={styles.contactLink} href="mailto:evantnichols@gmail.com">{data.site.siteMetadata.email}</a></p>
      <p>+ <a className={styles.contactLink} href={data.site.siteMetadata.github}> Github</a></p>
      <p>+ <a className={styles.contactLink} href={data.site.siteMetadata.linkedin}> LinkedIn</a></p>
      <p>+ <a className={styles.contactLink} href={__PATH_PREFIX__ + '/nichols_evan_resume.pdf'}> Resume</a></p>
    </div>
  )
}

export const query = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        email
        linkedin
        github
      }
    }
  }
`
