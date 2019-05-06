/** Resume Data and Type Defs. */
export interface IResume {
  sections: [ISection]
}

export interface ISection {
  title: string
  entries: [IEntry]
}

export interface IEntry {
  title?: string
  company?: string
  duration?: IDuration
  description: string | [string]
}

export interface IDuration {
  start: string
  end: string
}

export const data: [ISection] = [
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
          'Fullstack development work on Course Kit, a set of free tools that integrate with existing learning management systems (LMS) to help university professors create, collect and review coursework using Google Apps.',
      },
      {
        title: 'Engineering Resident',
        company: 'Google',
        duration: {
          start: 'July 2018',
          end: 'July 2019',
        },
        description:
          'Completed one-year new program for recent CS/CoE grads aimed at rapidly developing software at scale. Projects included design and implementation of an algorithm for detecting outdated content produced from an NLG system (C++) and and an asynchornous longform audio transcription system using the Google Speech API.',
      },
      {
        title: 'RightSite',
        linkify: 'https://apple.co/2Uu5tUT',
        company: 'University of Kansas Medical Center',
        duration: {
          start: 'October 2016',
          end: 'May 2017',
        },
        description:
          'Developed a React Native iOS application which allows users to interact with 38 different interactive SVGs of the human body, with the goal of improving biopsy labeling accuracy in a laboratory setting.',
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
    title: 'languages/software',
    entries: [
      {
        description: [
          'Javascript (React, Redux, React Native, Node.js)',
          'Typescript',
          'Java',
          'GraphQL (Gatsby, Prisma)',
          'Google App Engine, AWS',
          'HTML/CSS',
          'InDesign, Photoshop, Sketch',
        ],
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
        description: 'GPA: 3.67 / 4.00',
      },
    ],
  },
  {
    title: 'projects',
    entries: [
      {
        title: 'overturemusical.com',
        linkify: 'http://overturemusical.com',
        duration: {
          start: 'March 2019',
          end: 'Present',
        },
        description:
          'Marketing website for Overture - an original symphony about the Kansas City Philharmonic Orchestra during the 1953-1954 season.',
      },
      {
        title: 'nycmaps.surge.sh',
        linkify: 'https://nyc-maps.surge.sh',
        duration: {
          start: 'November 2017',
          end: 'January 2018',
        },
        description:
          "Interactive maps of Manhattan's neighborhoods and the five boroughs. Created with Illustrator, React and D3. Note: Manhattan kind of looks like a hambone.",
      },
      {
        title: 'Digital Bookshelf',
        linkify: 'https://github.com/e-nichols/digital-bookshelf',
        duration: {
          start: 'August 2018',
          end: 'February 2019',
        },
        description:
          "A poor man's GoodReads clone using React Native, Prisma and Node.js.",
      },
    ],
  },
]
