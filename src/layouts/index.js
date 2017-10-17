import React from "react"
import Link from "gatsby-link"
import { rhythm, scale } from "../utils/typography"
import styles from "../styles"
import presets from "../utils/presets"

require(`prismjs/themes/prism-solarizedlight.css`)

class DefaultLayout extends React.Component {
  render() {
    const { author, homepage } = this.props.data.site.siteMetadata
    return (
      <div>
        <div {...styles.container} {...styles.verticalPadding}>
          <Link
            to="/"
            css={{
              display: `inline-block`,
            }}
          >
            <h1
              css={{
                color: styles.colors.light,
                lineHeight: 1,
                margin: 0,
                paddingBottom: rhythm(1),
              }}
            >
              etnichols
            </h1>
          </Link>
          <div>
            <Link className={styles.linkStyle} to={`/`}>home</Link>
            <br/>
            <Link className={styles.linkStyle} to={`/about/`}>about</Link>
            <br/>
            <Link className={styles.linkStyle}to={`/contact/`}>contact</Link>
          </div>
        </div>
        <div {...styles.container} {...styles.verticalPadding}>
          {this.props.children()}
        </div>
      </div>
    )
  }
}

export default DefaultLayout

export const pageQuery = graphql`
  query LayoutIndexQuery {
    site {
      siteMetadata {
        author
        homepage
      }
    }
  }
`