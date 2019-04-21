import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const About = () => (
  <Layout>
    <h1>about me.</h1>
    <Image />
    <br/>
    <br/>
    <p>I'm Evan. A software engineer living in New York City, by way of Kansas City.</p>
    <p>I like software, reading and the outdoors. I write about those things, along with projects and current events.</p>
    <p>Site created with <a href="https://gatsbyjs.org" >GatsbyJS.</a></p>
  </Layout> )

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "about-pic.jpg" }) {
          childImageSharp {
            fixed(width: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <Img fixed={data.placeholderImage.childImageSharp.fixed} />
    )
    }
  />
)

export default About
