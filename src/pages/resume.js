import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from "../components/layout"

import './resume.css'

const Resume = () => (
  <Layout>
    <h1>resume.</h1>
    <div className="resume">
      <div className="section">
        <div className="entry">Lifeguard</div>
        <div className="entry">Ballboy</div>
        <div className="entry">Fisherman</div>
      </div>
      <div className="section">
        <div className="entry">Priest</div>
        <div className="entry">Dad</div>
      </div>
    </div>
  </Layout> )

const data = [
  {
    sectionTitle: 'Play',
    jobs: [
      {
        title: 'Being Sick',
        duration: {
          start: 'Dec 2017',
          end: 'April 2018',
        },
        description: `A wonderful work experience where I did a lot of
        things and accomplished many goals and learned about unit tests.`,
      },
      {
        title: 'Youtube Videos',
        duration: {
          start: 'Dec 2018',
          end: 'Jan 2019',
        },
        description: `A wonderful work experience where I did a lot of
        things and accomplished many goals and learned about unit tests.`,
      }
    ]
  },
  {
    sectionTitle: 'Play',
    jobs: [
      {
        title: 'Being Sick',
        duration: {
          start: 'Dec 2017',
          end: 'April 2018',
        },
        description: `A wonderful work experience where I did a lot of
        things and accomplished many goals and learned about unit tests.`,
      },
      {
        title: 'Youtube Videos',
        duration: {
          start: 'Dec 2018',
          end: 'Jan 2019',
        },
        description: `A wonderful work experience where I did a lot of
        things and accomplished many goals and learned about unit tests.`,
      }
    ]
  }
]

// const Section = ({sectionTitle, jobs}) => {
//   let section = []
//   section.push(<SectionTitle title={title} />)
//   jobs.forEach((job) => {
//     section.push(<Job props={job} />)
//   })
//   return section
// }
//
// const SectionTitle = ({title}) => (<div>{title}<hr/></div>)
//
// const Job = ({title, duration, description}) => (
//   <div>
//     <JobTitle title={title} />
//     <Duration duration={duration} />
//     <Description description={description} />
//   </div>
// )
//
// const JobTitle = ({title}) =>
//   (<div>{title}</div>)
//
// const Duration = ({duration}) =>
//   (<div>{`${duration.start} - ${duration.end}`}</div>)
//
// const Description = ({description}) => (<div>{description}</div>)
//
// const Resume = () => {
//   // let resume = []
//   // data.forEach(section => {
//   //   resume.push(<Section props={section} />)
//   // })
//   let resume = []
//   resume.push((<div>Hellooooo</div>))
//   return resume
// }
//
// export default ({data}) => {
//   return (<Resume props={data} />)
// }

export default Resume
