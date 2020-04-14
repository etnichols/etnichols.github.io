module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    site: `etnichols.com`,
    title: `etnichols`,
    author: `Evan Nichols`,
    description: `Software Engineer in NYC by way of Kansas City. Reader, runner, writer, slackliner and web development enthusiast.`,
    homepage: `https://etnichols.com`,
    email: `e3t5n6@gmail.com`,
    linkedin: `https://www.linkedin.com/in/etnichols/`,
    github: `https://www.github.com/etnichols`,
    medium: `https://medium.com/@etnichols`,
    location: `New York, NY`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-69960811-1',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `etnichols personal website`,
        short_name: `etnichols`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `##fb251b`,
        display: `standalone`,
        icon: `${__dirname}/src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/random`,
        name: `markdown-random`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/programming`,
        name: `markdown-programming`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `${__dirname}/src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              removeAccents: true,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-katex`,
          {
            resolve: `gatsby-remark-smartypants`,
            options: {
              dashes: `oldschool`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    {
      resolve: `gatsby-remark-prismjs`,
      showLineNumbers: false,
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-plugin-sass`,
  ],
}
