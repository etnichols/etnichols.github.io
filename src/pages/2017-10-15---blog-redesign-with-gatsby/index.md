---
author: Evan Nichols
title: "Plugin Rodeo: Static site generation with Gatsby 1.0"
date: 2017-10-15
tags:
- gatsby
- web development
- React
draft: false
---

I've spent the last few weekends migrating this site to use the Gatsby v1.0, released this past July. The static site generator [has quickly gained popularity][1] over the past few months, and for good reason. It offers a lot of cool features right out of the box, a rich plugin ecosystem, and great documentation to boot. I won't do a full walkthrough of the Gatsby framework here (I would recommend checking out the [official tutorial][12] instead). Instead, I'll use this post to highlight some of my favorite Gatsby features (which is really just my favorite Gatsby plugins), and how I've used them on this site.

## Posts in Markdown
All of the posts for this site are written in [Markdown][2]. It's a lightweight markup language developed for easy conversion to HTML. It looks like this:

```markdown
## Posts in Markdown
All of the posts for this site are written in [Markdown][2].

It's a lightweight markup language developed for easy conversion to HTML.

It looks like this:

...

[2]: https://daringfireball.net/projects/markdown/syntax
```

Check out the source code for the posts on this site if you want to see more Markdown examples. This isn't a new concept, but it's executed well here and the frontmatter on these posts can be queried against within GraphQL, meaning you can set up tag pages and have unpublished drafts. Here's a snippet from my own ```gatsby-node.js``` file grabbing all Markdown posts which are NOT drafts:


```js
    graphql(
      `
        {
          allMarkdownRemark(
            limit: 1000
            filter: { frontmatter: { draft: { ne: true } } }
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  tags
                }
              }
            }
          }
        }
      `
    )
```

The ability to filter on frontmatter gives you as a user much more fine-grained control over presentation over your data. Maybe you want to add a postType frontmatter field, and use different layouts for different postTypes.

## Code Highlighting
For any bloggers who frequently include code snippets in their posts, [gatsby-remark-prismjs][3] is a simple way to enable syntax highlighting. All you have to do is require a prism theme on the layout files used within your site, like this:

```js
require(`prismjs/themes/prism-solarizedlight.css`)
```

Prism offers [lots of different themes][5], too.

Line highlighting is easy to achieve with the addition defining a ```gatsby-highlight-code-line``` css class and including it on your layout.

```js{3-4}
Regular line
Regular line
Important line
Important line
Regular line
...
```

## Adding Images (and Gifs)
![](gatsby-remark-images.jpg)

[gatsby-remark-images][6] allows you to directly include images within your Markdown posts. If you want even more control over images on your site, consider using the [gatsby-transformer-sharp][8], which is basically a wrapper around the Sharp image processing library.

## Typography Module
I like reading. I especially like reading things written in a nice font. Which is why I was happy to plugin support for Typography.js, another one of Kyle Mathews' projects. Usage is explained nicely in [part two of the Gatsby tutorial][10]. I opted to use [st-annes theme] for this site.

## Google Analytics
I like to keep close tabs on the five or so people who frequent this site, and for that I use Google Analytics. How do I add that into my site? Yep, you guessed it, another plugin: [gatsby-plugin-google-analytics][13]. Install the module and add this line to your gatsby-config.js:

```js
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'Your-Tracking-Id',
      },
    },
```

Boom! Analytics.

## Dead Simple Deployment
gh-pages npm module.

## This site
Although I've added my own fonts and content, this site is nothing more than a fork of the Gatsby Remark example website, by <AUTHOR>. Implemented tag searching, but then got rid of it.

## Closing thoughts
Gatsby is a great static site generation option because it is easy to use, it has a diverse plugin selection and detailed documentation. In an otherwise crowded world of static site generation framework, Gatsby stands out. I'm excited to see how the community grows.

[1]: https://www.gatsbyjs.org/blog/2017-09-21-community-roundup-1/
[2]: https://daringfireball.net/projects/markdown/syntax
[3]: https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/
[4]: https://www.staticgen.com/
[5]: http://prismjs.com/test.html
[6]: https://www.gatsbyjs.org/packages/gatsby-remark-images/
[7]: https://image-processing.gatsbyjs.org/
[8]: https://www.gatsbyjs.org/packages/gatsby-transformer-sharp/
[9]: http://kyleamathews.github.io/typography.js/
[10]: https://www.gatsbyjs.org/tutorial/part-two/
[11]: https://github.com/KyleAMathews/typography.js/tree/master/packages/typography-theme-st-annes
[12]: https://www.gatsbyjs.org/tutorial/
[13]: https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/
