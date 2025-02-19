/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'etnichols blog',
  author: 'Evan Nichols',
  headerTitle: 'etnichols blog',
  language: 'en-us',
  theme: 'system', // system, dark or light
  // siteLogo: '/static/images/logo.png',
  email: 'e3t5n6@gmail.com',
  siteUrl: 'https://etnichols.com',
  github: 'https://github.com/etnichols ',
  twitter: 'https://twitter.com/etnichols_',
  linkedin: 'https://www.linkedin.com/etnichols',
  locale: 'en-US',
  analytics: {
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
  },
}

module.exports = siteMetadata
