---
title: 'Lead to Read KC website redesign with Gatsby and Firebase'
date: '2020-11-30'
tags: ['programming', 'project', 'gatsby', 'react']
type: Blog
---

## Introduction

Lead to Read KC is a non-profit that facilitates reading-based mentorship in the Kansas City metro area. They connect adult volunteers with 1st-3rd grade students for one lunch hour each week to read together. As their tagline indicates, "Together we are creating a community of readers, one lunch hour at a time."

Lead to Read's previous website was a 10+ year old Wordpress site with lackluster [Lighthouse](https://developers.google.com/web/tools/lighthouse) audit scores:

![Old Lead to Read website Lighthouse Scores](/static/images/lead-to-read/ltr_lighthouse_old.png)

The performance and accessibility categories are especially concerning: The site isn't accessible or mobile friendly, and it takes more than 17 seconds to become interactive.

Last year, I approached the executive director of Lead to Read to propose a website redesign using [Gatsby](https://www.gatsbyjs.com/). Gatsby is a fantastic React/GraphQL-powered static site generator that I've [written about before](https://etnichols.com/programming/blog-redesign-with-gatsby) and use for this blog. She gave the redesign the green light and off we went!

## Getting started

I had four main goals in mind as I approached the redesign:

- Performance: improve the Lighthouse audit scores.
- Responsiveness: a layout that works on any screen size.
- "Digestability": clear messaging, easy-to-discover content.
- Accessibility: make sure the site works for _everyone_.

To get started, I combed the existing site and grouped the existing content into more coherent sections, using [Sketch](https://www.sketch.com/) to bring the pen-and-paper wireframes to life:

![New site design mocks](/static/images/lead-to-read/lead_to_read_sketch.jpg)

After a couple iterations with, we settled on the landing page layout, the navigation menu contents, and designs for the blog post and content pages.

## Building out the new site - The Good, the Bad, the Ugly

This section dives into the pros and cons of the Gatsby developer experience and its plugin ecosystem.

### (Good) Shared page templates and layout components

One of Gatsby's core features is allowing developers to programmatically create HTML pages from templates ([docs](https://www.gatsbyjs.com/docs/recipes/pages-layouts/#creating-pages-programmatically-with-createpage)). The templates themselves can use a GraphQL query in order to fetch the data needed to properly render the page.

I leveraged the page templates to programmatically create pages for each blog post ([example](https://www.leadtoreadkc.org/give-success-direct-your-united-way-donation-to-lead-to-read-kc-2)) and the blog post list pages ([example](https://www.leadtoreadkc.org/blog/)).

The templates also share a [layout component](https://www.gatsbyjs.com/docs/recipes/pages-layouts/#creating-a-layout-component), a React component that renders common page elements (header, site nav, footer, etc.) and then children components as the page content.

An abbreviated example of blogpost.js:

```js
const BlogPost = ({ data }) => {
  const { wpPost } = data
  const { title, content, date, author } = wpPost
  return (
    <PageLayout>
      <Title value={title} />
      <Author name={author.node.name} date={date} />
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </PageLayout>
  )
}

export default BlogPost

export const postQuery = graphql`
  query ($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      content
      date
      author {
        node {
          name
        }
      }
    }
  }
`
```

### (Good and bad) A new Gatsby Wordpress plugin

The Lead to Read team wanted to continue using Wordpress as the underlying [content management system](https://en.wikipedia.org/wiki/Content_management_system) (CMS) for the site. Their team is comfortable with the WP interface for creating new pages and posts, and hosted WP instances are wildly inexpensive, with many hosting providers offering managed WP instances for \$100-\$200/year.

Sourcing data from any CMS is one of Gatsby's core selling points, and they offer many plugins allowing developers to do just that. This includes [gatsby-source-wordpress-experimental](https://github.com/gatsbyjs/gatsby-source-wordpress-experimental): the new (and recommended) way to use a Wordpress database as a Gatsby data source. As the name implies, it's still under active development, but it offers a superior development experience compared to the current [gatsby-source-wordpress](https://www.gatsbyjs.com/plugins/gatsby-source-wordpress/). The new plugin includes:

- Hot reloads when data in the Wordpress database updates
- Posts that contain inline images are automatically converted into performant [`gatsby-image`](https://www.gatsbyjs.com/plugins/gatsby-image/)s
- A rich set of [plugin options](https://github.com/gatsbyjs/gatsby-source-wordpress-experimental/blob/master/docs/plugin-options.md#plugin-options) to control exactly what data to pull from WP
- And [lots of other stuff](https://github.com/gatsbyjs/gatsby-source-wordpress-experimental/blob/master/docs/features/index.md#features)

Given the plugin's official endorsement from Gatsby, I decided to hop on the early adopter train and use it for this project. The plugin was great _once I finally got it set up_ - hot reloads made checking the formatting of blog posts a breeze. But the plugin setup took some time, and I hit multiple bugs with the upstream [WPGraphQL](https://www.wpgraphql.com/) plugin (used heavily by `gatsby-source-wordpress-experimental`) along the way:

- [GraphQL type mismatch](https://github.com/gatsbyjs/gatsby-source-wordpress-experimental/issues/37)
- [Authentication issues](https://github.com/gatsbyjs/gatsby-source-wordpress-experimental/issues/139)

And one open bug (with a workaround, actively being addressed by the plugin maintainers):

- [Wordpress URL accidentally stripped of subdomain](https://github.com/gatsbyjs/gatsby-source-wordpress-experimental/issues/327)

More generally:

- The plugin documentation is still very much a [WIP](https://github.com/gatsbyjs/gatsby-source-wordpress-experimental/blob/master/docs/tutorials/index.md)
- Using the Gatsby plugin requires installing two additional plugins into the Wordpress instance (so many plugins!) - and keeping those plugins up-to-date. For developers who don't have admin access to the Wordpress instance they're sourcing data from, this could be a headache.
- The experimental plugin was intentionally published as a separate package from the stable `gatsby-source-wordpress` to allow for an incremental migration... but migrations are still a pain. Read: lots of GraphQL query rewrites.

### (Good) Rich plugin ecosystem

Gatsby touts a rich set of both "core" and "community" [plugins](https://www.gatsbyjs.com/plugins), with the total number of plugins at almost 2500.

I utilized [`gatsby-plugin-mailchimp`](https://www.gatsbyjs.com/plugins/gatsby-plugin-mailchimp/) to integrate the site's Newsletter Signup form with Lead to Read's existing Mailchimp mailing list.

I also used `gatsby-plugin-typography`, which I've [written about before](https://etnichols.com/programming/blog-redesign-with-gatsby/#typography-module-gatsby-plugin-typography), forking a version of the [St. Anne's](https://github.com/KyleAMathews/typography.js/tree/master/packages/typography-theme-st-annes) theme.

And last, the handy [`gatsby-plugin-typescript`](https://www.gatsbyjs.com/plugins/gatsby-plugin-typescript/) provides handy drop-in support for `.ts` and `.tsx` files.

### (Good/Bad) Firebase deploy integration

With last year's announcement of [Gatsby Cloud](https://www.gatsbyjs.com/blog/2019-11-14-announcing-gatsby-cloud/), it expanded into the world of cloud building and hosting, offering the same functionality as the more established Netlify.

Gatsby Cloud offers a variety of hosting integrations: S3, Firebase, Azure, etc. I used the Firebase integration; their [documentation](https://www.gatsbyjs.com/docs/deploying-to-firebase/) made it a breeze to get things set up.

And even better, when used with the new wordpress plugin described above, the site will automatically rebuild when content changes in Wordpress, and then automatically push the new build to Firebase. Yay for a seamless edit-build-deploy pipeline!

Note that developers can still manually build Gatsby sites from the CLI (`gatsby build`) and then use Firebase CLI (`firebase deploy`) to push it.

But... that firebase hosting integration [was broken](https://streamable.com/xiuh1o) the week we performed the cutover to the new site, blocking our ability to get automatic site deployments after WP content changed (I had to manually build/push as described above). To the Gatsby support team's credit, they replied to my support ticket quickly and had the issue resolved less than 12 hours after my initial report.

### (Ugly) Hardcoding home page data

The contents of the site can be split into two buckets of React components:

- Dynamically generated components, data sourced from Wordpress (e.g. blog posts, site pages, "What's New" section). i.e., what Gatsby was meant to do.
- Hardcoded components (e.g., image carousel, "Our Reach" infographic) - page content is hardcoded into the components, does not leverage WP data sourcing. i.e., plain React components.

The choice to hardcode data into some components is best explained with an example. Let's look at the "How it Works" section of the website ([screenshot](https://imgur.com/a/indvb0u)): a simple three-step graphic with some custom icons. Here's the code:

```js
import React from 'react'

import Icon from './icon'

import './howitworks.scss'

// Icon name, CSS class, description tuples
const PAGE_DATA = [
  [
    'school',
    'purple-background',
    `Identify schools and students in need of reading support and mentoring.`,
  ],
  [
    'recruit',
    'orange-background',
    `Recruit, train and pair Reading Mentors with students in grades K-3.`,
  ],
  [
    'book',
    'bright-blue-background',
    `Provide students with 30 minutes of one-to-one reading support and mentoring one lunch hour each week.`,
  ],
]

const HowItWorks = () => (
  <section>
    <div className="content">
      <h1 className="headline">How It Works</h1>
      <ol className="how-it-works-list">
        {PAGE_DATA.map(([iconName, className, description], i) => (
          <li key={`hiw-${i}`}>
            <div className={`circular-icon margin-medium ${className}`}>
              <Icon name={iconName} />
            </div>
            <div className="margin-top-small">
              <span className="bold">{i + 1}. </span>
              {description}
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
)

export default HowItWorks
```

It's three sentence of actual content, which is unlikely to change often. It seems overkill to store each sentence in its own WP page, fetch them, sanitize the HTML and then use it in this graphic. What if the HTML from Wordpress is malformed, accidentally multi-paragraph? What if someone accidentally deletes or renames one of those pages? It's always a tradeoff; given this is three sentences of "stable" content, I chose to hardcode.

Other Cloud CMS providers may provide more flexibility for storing simple key-value pairs (a brief skim of [Contentful's docs](https://www.contentful.com/developers/docs/concepts/data-model/#array-fields) indicates that [Array fields](https://www.contentful.com/developers/docs/concepts/data-model/#array-fields) might very well solve this problem), but Wordpress doesn't appear to offer a simple solution for this.

That same logic applies to the image carousel and the "Our Reach" infographic: hardcoded data to accommodate non-standard layouts. That means I, or future site maintainers, are on the hook for manually updating the content and rebuilding the site when things change in the future. But given the low frequency of changes, it seems like a fair tradeoff.

### (Good) Site performance

The new site performance is a big step in the right direction.

![Old Lead to Read website Lighthouse Scores](/static/images/lead-to-read/ltr_lighthouse_new.png)

- The time to interactive for the home page dropped by almost 50% (~17 secs -> ~8 secs)
- Accessibility score nearly doubled (47 -> 83)
- Best practices score is now perfect (~35% increase)
- SEO parity (82 -> 81)
- Qualifies as a [Progressive Web App](https://web.dev/what-are-pwas/)

But, there are quite a few optimizations remaining -- reducing image sizes, improving image caching, deferring unused JS bundles, among other things.

## Discussion

The new site officially launched this past August at https://leadtoreadkc.org. Despite hiccups with plugin and hosting along the way, I really enjoyed using Gatsby for the project. Gatsby has expanded from an open source framework to an actual [company](https://www.gatsbyjs.com/blog/2018-05-24-launching-new-gatsby-company/), and it feels more mature in terms of its core documentation, core library stability, and customer support.

But the framework has drawbacks, too. I enjoyed Jared Palmer's [Gatsby vs NextJS](https://jaredpalmer.com/gatsby-vs-nextjs) post, in which he points out some of Gatsby's shortcomings: the learning curve of GraphQL, the "snowflake" nature of Gatsby sites, the sometimes challenging debugging experience. It's fair to say that Gatsby might be too heavyweight for someone just wanting to make a simple blog that only uses Markdown files as the data source.

And static sites have logical limitations. Would it make sense for NYTimes to use Gatsby to produce a static version of each one of its millions of articles? What about the comments on those articles? The static model doesn't scale for sites with massive content bases or inherently dynamic data. And to Gatsby's credit, they're aware of the those limitations and encourage developers to use the static HTML where it makes sense and then leverage [React hydration](https://www.gatsbyjs.com/docs/react-hydration/) to enable more "app-like" features.

Shifting briefly to the business side of things, I'm curious to see Gatsby's long-term monetization strategy, and what they build out next. Their core revenue generator right now is via Gatsby Cloud - cloud build and hosting on different tiers. Will they double down on building out this part of the business? Will we see a "Gatsby CMS" -- a competitor to Wordpress, Contentful and other cloud CMS providers? First, you integrate with them, then, you compete with them... we'll see.

Have thoughts about Gatsby? Want to talk more about the website redesign? Shoot me a line at e3t5n6@gmail.com to chat. Thanks for reading!

_A huge thanks to Martha Conradt, Pauly Hart, Jonathan Gaikwad and Hayley Rees for helping make this project a reality._
