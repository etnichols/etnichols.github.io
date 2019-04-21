module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    site: `etnichols.com`,
    title: `etnichols`,
    author: `@etnichols`,
    description: `a blog`,
    homepage: `https://etnichols.com`,
    email: `evantnichols@gmail.com`,
    linkedin: `https://www.linkedin.com/in/etnichols/`,
    github: `https://www.github.com/e-nichols`,
  },
  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorYaml`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        path: `${__dirname}/src/pages/posts`,
        name: `markdown-posts`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/projects`,
        name: `markdown-projects`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/author.yaml`,
        name: `author`,
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `${__dirname}/src/utils/typography.js`,
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              removeAccents: true,
            }
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
            }
          },
          `gatsby-remark-prismjs`,
        ]
      }
    },
    {
      resolve: `gatsby-remark-prismjs`,
      showLineNumbers: false,
    },
    `gatsby-transformer-yaml`,
    `gatsby-plugin-catch-links`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
