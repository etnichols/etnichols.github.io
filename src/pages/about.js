import React from "react"

export default ({data}) => {
  return (
      <div>
        <h1>about me.</h1>
        <img src={__PATH_PREFIX__ + "/about-pic.jpg"}></img>
        <p>I'm Evan. A software engineer living in New York City, by way of Kansas City.</p>
        <p>I like software, reading and the outdoors. I write about those things, along with projects and current events.</p>
        <p>Site created with <a href="https://gatsbyjs.org" >GatsbyJS.</a></p>
      </div>
  )
}
