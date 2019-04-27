import React from "react"
import { StaticQuery, Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from "../components/layout"

import data from '../data/resume'
import styles from '../styles'
import './resume.css'

const Resume = () => (<Layout><RenderPage data={data} /></Layout>)

const RenderPage = ({data}) => {
  // array of an obj that has a job field
  // const col1 = data.slice(0,1)
  // const col2 = data.slice(1)
  // <div className="resume">
  //   <Column sections={col1} />
  //   <Column sections={col2} />
  // </div>
  return (
  <>
    <h1>resume.</h1>
  </>)
}

// Need an iterative way to build, taking sections and balancing things if possible.

// Attempt to do some balancing based on entries.
// A Column can be multiple sections.
// {
  //   sections.map(section =>
    //     <Section title={section.title} entries={section.entries}/>)
    // }
const Column = ({sections}) => {
  return (
    <div className="column">
    </div>
  )
}

const Section = ({title, entries}) => {
  // {entries.map(job => <Job {...job} />)}
  return (
    <div className="column">
    <h2 className="section-title">{title}</h2>
    <div className="section-bar"></div>
    </div>
  )
}

const Job = ({title, company, duration, description}) => {
  return <div>Job</div>
  // <div className="job">
  //   <h4 className="job-title">{title}  {company ? `| ${company}` : ``}</h4>
  //   <div className="duration" style={{color: styles.colors.light}}>
  //     {`${duration.start} - ${duration.end}`}
  //   </div>
  //   <div>{description}</div>
  // </div>

}

export default Resume
