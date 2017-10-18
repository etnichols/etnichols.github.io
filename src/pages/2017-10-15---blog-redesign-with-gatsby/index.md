---
author: Evan Nichols
title: Static site generation with Gatsby 1.0
date: 2017-10-15
tags:
- gatsby
- web development
- React
draft: true
---

I've spent the last few weekends migrating this site to use the Gatsby v1.0, released this past July. The static site generator [has quickly gained popularity][1] over the past few months, and for good reason. It offers a lot of cool features right out of the box, a rich plugin ecosystem, and great documentation to boot. I won't do a full walkthrough of the Gatsby framework here (I would recommend checking out the official tutorial instead). Instead, I'll use this post to highlight some of my favorite Gatsby features, and how I've used them on this site.

## Plugins
Talk about plugins here.

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

Check out the source code for the posts on this site if you want to see more Markdown examples. This isn't a new concept, but it's executed well here and the frontmatter on these posts can be queried against within GraphQL, meaning you can set up tag pages and have unpublished drafts.

## Code Highlighting
For any bloggers who frequently have posts containing code snippets, [gatsby-remark-prismjs][3] is a simple way to enable syntax highlighting. All you have to do is require a prism theme on the layout files used within your site, like this:

```js
require(`prismjs/themes/prism-solarizedlight.css`)
```

## Adding Images (and Gifs)
![](gatsby-remark-images.jpg)
Yeah. So another cool plugin that allows you to directly include images within your Markdown posts.

## Typography Module
I like reading. I especially like reading things with good fonts, especially things that aren't Papyrus. Gatsby makes it easy to add in custom fonts from Typography JS, another project from Kyle Matthews.

## Google Analytics
I like to keep close tabs on the five or so people who frequent my blog, and for that I like to use Google analytics. How do I add that into my site? Yep, you guessed it, another plugin: gatsby-plugin-google-analytics. Install the module and add this line to your gatsby-config.js:

```js
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'Your-Tracking-Id',
      },
    },
```

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
