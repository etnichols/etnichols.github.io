import { Resume } from '../@types/resume.d.ts'

const data: Resume = {
  sections: [
    {
      title: 'work',
      entries: [
        {
          title: 'Software Engineer',
          company: 'Google',
          duration: {
            start: 'September 2017',
            end: 'Present',
          },
          description:
            'Fullstack development work on [Google Assignments](https://edu.google.com/assignments), a set of free coursework management tools that integrate with learning management systems (LMS) to help university professors create, collect and review coursework using Google Apps.',
        },
        {
          title: 'Engineering Residency Program',
          link: 'https://www.google.com/about/careers/students/engres.html',
          company: 'Google',
          duration: {
            start: 'July 2018',
            end: 'July 2019',
          },
        },
        {
          title: 'RightSite',
          link: 'https://apple.co/2Uu5tUT',
          company: 'University of Kansas Medical Center',
          duration: {
            start: 'October 2016',
            end: 'May 2017',
          },
          description:
            'Proof-of-concept iOS application to improve the precision of skin biopsy labeling. In initial studies, the app led to a 69% improvement in the precision of anatomic site labeling. Accompanying research paper was published in the Health Informatics Journal in March 2020. Read the full research paper [here](https://journals.sagepub.com/doi/full/10.1177/1460458220910341).',
        },
        {
          title: 'Well Query Dashboard',
          company: 'Astra Analytics',
          duration: {
            start: 'September 2016',
            end: 'February 2017',
          },
          description:
            'Created a map-based web application for searching well records by location and 30 different drilling metrics using React, Redux, Node.js/Express and MySQL.',
        },
      ],
    },
    {
      title: 'education',
      entries: [
        {
          company: 'B.S., Computer Science',
          title: 'University of Kansas',
          duration: {
            start: 'Aug 2012',
            end: 'May 2017',
          },
        },
      ],
    },
    {
      title: 'languages/software',
      entries: [
        {
          description: [
            'Javascript (React, Redux, React Native, Node.js)',
            'Typescript',
            'Java',
            'GraphQL ([Gatsby](http://gatsbyjs.org), [Prisma](https://www.prisma.io))',
            'Cloud hosting (Google App Engine, AWS)',
            'HTML/CSS',
            'InDesign, Photoshop, Sketch',
          ],
        },
      ],
    },
    {
      title: 'projects',
      entries: [
        {
          title: 'Lead to Read website redesign',
          link: 'http://leadtoread.dev/',
          duration: {
            start: 'November 2019',
            end: 'August 2020',
          },
          description:
            'Redesign of the Lead to Read KC website using Gatsby JS, using the existing Wordpress database as a headless CMS. Deployed using Firebase and Gatsby Cloud.',
        },
        {
          title: 'overturemusical.com',
          link: 'http://overturemusical.com',
          duration: {
            start: 'March 2019',
            end: 'Present',
          },
          description:
            'Marketing website for Overture - an original symphony about the Kansas City Philharmonic Orchestra during the 1953-1954 season.',
        },
        {
          title: 'Digital Bookshelf',
          link: 'https://github.com/e-nichols/digital-bookshelf',
          duration: {
            start: 'August 2018',
            end: 'February 2019',
          },
          description:
            'React Native app for tracking books you have read or want to read, powered by the Google Books API.'
        },
      ],
    },
  ],
}

export default data
