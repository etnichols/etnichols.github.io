import React from "react"
import { StaticQuery, Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from "../components/layout"

import data from '../resume/data'
import styles from '../styles'
import './resume.css'

const Resume = () => ( <Layout><RenderPage data={data} /></Layout> )

const RenderPage = ({data}) => {
  // array of an obj that has a job field
  const sections = Object.entries(data)
  const col1 = sections.slice(0,1)
  const col2 = sections.slice(1)
  // { Object.entries(data).map(
  //   ([title, entries]) => (<Section title={title} entries={entries} />))
  // }
  // console.dir(col1)
  // console.dir(col2)
  return (
  <>
    <h1>resume.</h1>
    <div className="resume">
      <Column sections={col1} />
      <Column sections={col2} />
    </div>
  </>)
}

// Need an iterative way to build, taking sections and balancing things if possible.

// Attempt to do some balancing based on entries.
// A Column can be multiple sections.
const Column = ({sections}) => {
  console.log(sections)
  return (
    <div className="column">
    { sections.map(section => <Section title={section[0]} entries={section[1]}/>) }
    </div>
  )
}

const Section = ({title, entries}) => {
  return (
    <div className="column">
    <h2 className="section-title">{title}</h2>
    <div className="section-bar"></div>
    {entries.map(job => <Job {...job} />)}
    </div>
  )
}

const Job = ({title, company, duration, description}) => (
  <div className="job">
    <h4 className="job-title">{title}  {company ? `| ${company}` : ``}</h4>
    <div className="duration" style={{color: styles.colors.light}}>
      {`${duration.start} - ${duration.end}`}
    </div>
    <div>{description}</div>
  </div>
)

export default Resume

// [
//   {
//   "work": [
//       {
//         "title": "Software Engineer",
//         "company": "Google",
//         "duration": {
//           "start": "Dec 2017",
//           "end": "April 2018",
//         },
//         "description": "A wonderful work experience where I did a lot of
//         things and accomplished many goals and learned about unit tests.",
//       },
//       {
//         "title": "Engineering Resident",
//         "company": "Google",
//         "duration": {
//           "start": "July 2018",
//           "end": "July 2019",
//         },
//         "description": "A wonderful work experience where I did a lot of
//         things and accomplished many goals and learned about unit tests.",
//       },
//       {
//         "title": "RightSite",
//         "company": "University of Kansas Medical Center",
//         "duration": {
//           "start": "July 2018",
//           "end": "A wonderful work experience where I did a lot of
//                   things and accomplished many goals and learned about
//                   unit tests.",
//         },
//         "description": "A wonderful work experience where I did a lot of
//         things and accomplished many goals and learned about unit tests.",
//       },
//     ],
//   }
//   "projects": [
//       {
//         "title": "etnichols.com",
//         "duration": {
//           "start": "Dec 2017",
//           "end": "April 2018",
//         },
//         "description": "A wonderful work experience where I did a lot of
//         things and accomplished many goals and learned about unit tests.",
//       },
//       {
//         "title": "overturemusical.com",
//         "duration": {
//           "start": "Dec 2018",
//           "end": "Jan 2019",
//         },
//         "description": "A wonderful work experience where I did a lot of
//         things and accomplished many goals and learned about unit tests.",
//       }
//     ],
//   "languages": [
//       {
//         "title": "Python",
//         "duration": {
//           "start": "Dec 2017",
//           "end": "April 2018",
//         },
//         "description": "A wonderful work experience where I did a lot of
//         things and accomplished many goals and learned about unit tests.",
//       },
//     ],
//   "education": [
//       {
//         "title": "University of Kansas",
//         "duration": {
//           "start": "Dec 2017",
//           "end": "April 2018",
//         },
//         "description": "A wonderful work experience where I did a lot of
//         things and accomplished many goals and learned about unit tests.",
//       },
//     ],
// }]
