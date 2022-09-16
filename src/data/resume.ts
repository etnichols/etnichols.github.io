import { Resume } from '../@types/resume'

const data: Resume = {
  sections: [
    {
      title: 'work',
      entries: [
        {
          title: 'Software Engineer',
          company: 'Google',
          duration: {
            start: 'October 2020',
            end: 'Present',
          },
          description: [
            `Fullstack development work (Java, Javascript) on [Google Forms](https://docs.google.com/forms).`,
            `Implemented "warning" and "hard block" UI of Forms' [Data Loss Prevention](https://support.google.com/a/answer/9646351?hl=en) integration for file upload responses.`,
            `Ensured Forms compatability with [Google Drive Resource Keys](https://support.google.com/a/answer/10685032?hl=en).`,
          ],
        },
        {
          title: 'Software Engineer',
          company: 'Google',
          duration: {
            start: 'September 2017',
            end: 'October 2020',
          },
          description:
            'Fullstack development work (Java, Javascript) on [Google Assignments](https://edu.google.com/assignments), a set of free coursework management tools that integrate with learning management systems (LMS) to help university professors create, collect and review coursework using Google Apps.',
        },
        {
          title: 'Engineering Resident',
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
          description: [
            'Developed a proof-of-concept iOS application to improve the precision of skin biopsy labeling for a team of dermatologists from the University of Kansas Medical Center (KUMC), using [React Native](https://reactnative.dev/).',
            'Automated conversion of SVG assets created via Adobe Illustrator via a Python script: read more about that [here](https://etnichols.com/programming/illustrator-to-react).',
            'Application led to a 69% improvement in the precision of anatomic site labeling in a pilot study of 100 smartphone-assisted skin biopsy labelings.',
            'Accompanying research paper was published in the Health Informatics Journal in March 2020. Read the full research paper [here](https://journals.sagepub.com/doi/full/10.1177/1460458220910341).',
          ],
        },
        {
          title: 'Freelance software developer',
          company: 'Astra Innovations',
          duration: {
            start: 'September 2016',
            end: 'February 2017',
          },
          description:
            'Created a Google-maps-based web application for [Astra Innovations](https://www.linkedin.com/company/astra-ai/) searching oil well drilling records by location and 30 different drilling metrics using React, Redux, Node.js/Express and MySQL.',
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
      title: 'web development',
      entries: [
        {
          title: 'Lead to Read KC',
          link: 'https://leadtoreadkc.org',
          duration: {
            start: 'November 2019',
            end: 'August 2020',
          },
          description: [
            'Overhauled the Lead to Read KC website using Gatsby JS, using the existing Wordpress database as a headless CMS, deployed using Firebase and Gatsby Cloud.',
            'Read more about the redesign process [here](programming/lead-to-read-website).',
          ],
        },
        {
          title: 'quotebook.xyz',
          link: 'http://quotebook.xyz',
          duration: {
            start: 'March 2019',
            end: 'Present',
          },
          description: [
            `An ongoing project showcasing a variety of my favorite quotes I've collected through the years.`,
            `Want to make your own? Check out the tutorial [here](https://etnichols.com/programming/react-quotebook-tutorial).`,
          ],
        },
        {
          title: 'Intro to React - Hackathon Workshop',
          description: [
            'Created and presented an introduction to React workshop at various NYC-based hackathons, including the 2019 CUNY Hackathon and 2020 Brooklyn College virtual hackathon.',
            'Slides and source code available on [Github](https://github.com/etnichols/intro-to-react-workshop).',
          ],
        },
      ],
    },
  ],
}

export default data
