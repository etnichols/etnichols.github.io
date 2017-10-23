---
author: Evan Nichols
title: "Static site generation with plugin-rich Gatsby 1.0"
date: 2017-10-15
tags:
- gatsby
- web development
- React
draft: false
---

I've spent the last few weekends migrating this site to use [Gatsby 1.0][14], released this past July. The static site generator [has quickly gained popularity][1] over the past few months, and for good reason. The React/Graphql powered framework offers a lot of cool features right out of the box, a rich plugin ecosystem, and great documentation to boot. In this post I'll highlight <USE SPECIFIC NUMBER HERE> favorite Gatsby features and plugins, and how I've used them within this site.

## Posts in Markdown (gatsby-transformer-remark)
All of the posts for this site are written in [Markdown][2]. It's a lightweight markup language developed for easy conversion to HTML. It looks like this:

```markdown
## Posts in Markdown (gatsby-transformer-remark)
All of the posts for this site are written in [Markdown][2].

It's a lightweight markup language developed for easy conversion to HTML.

It looks like this:

...

[2]: https://daringfireball.net/projects/markdown/syntax
```

In Gatsby, this conversion is handled by [gatsby-transformer-remark][15]. It takes markdown nodes produced by [gatsby-source-filesystem][16] and transforms them into valid HTML. Additionally, Graphql makes it easy to query against frontmatter fields in your posts. Adding tags to posts and having drafts is easily configured. Here's a snippet from my own ```gatsby-node.js``` file grabbing all Markdown posts which are NOT drafts:

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

The ability to filter on frontmatter gives you as a user much more fine-grained control over presentation over data presentation. One could add a postType frontmatter field, and use different layouts for different postTypes. Or for a multi-author site, the ability fetch specific author information and profile picture.

## Code Highlighting (gatsby-remark-prismjs)
For any bloggers who frequently include code snippets in their posts, [gatsby-remark-prismjs][3] is a simple way to enable syntax highlighting. All you have to do is require a prism theme on the layouts used within your site:

```js
require(`prismjs/themes/prism-solarizedlight.css`)
```

Prism offers [lots of different themes][5], too.

Line highlighting is easy to achieve with the addition defining a ```gatsby-highlight-code-line``` CSS class and including it on your layout.

```js{3-4}
Regular line
Regular line
Important line!
Important line!
Regular line
...
```

## Adding Images (gatsby-remark-images)
![](gatsby-remark-images.jpg)

[Gatsby-remark-images][6] allows you to directly include images within your Markdown posts. If you want even more control over images on your site, consider using the [gatsby-transformer-sharp][8], which is basically a wrapper around the Sharp image processing library.

## Adding other file types (gatsby-remark-copy-linked-files)
*What if I use .gif or .pdf files within my site?* [Gatsby-remark-copy-linked-files][18] will make your dreams come true. I mean, it will make your GIFs and PDFs work when referenced in your posts. Like this one.

![](dumblerage.gif)

## Google Analytics (gatsby-plugin-google-analytics)
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

## Simple Deployment (gh-pages)
There are a variety of ways to deploy a static site. I've written about Surge before, and Gatsby provides information on how to deploy with Github Pages and Amazon's Cloudfront CDN. I've used Github Pages for the last few years, which is made simple with the [gh-pages][20] npm module.

If you're a student, consider applying for the [Github Student Developer Pack][19] -- it's free! And it includes offers a free one-year registration of a .me domain name through Namecheap. Or if you don't mind spending $10-$20 bucks, you can find another .com or .io or .something to use. Once you have one registered, and have the gh-pages module included as a devDependency, you can add a deploy script to your ```package.json```:

```js{7-8}
{
  ...
  "scripts": {
    "develop": "gatsby develop",
    "build": "gatsby build",
    "serve": "gatsby serve",
    "deploy": "gatsby build --prefix-paths && echo your_domain_name.com > public/CNAME && gh-pages -d public --branch master"
  },
  ...
}
```
The first command is the Gatsby production build command using a [path prefix][23] (mine is just the root path '/', since my site is hosted at e-nichols.github.io). The second command sets up a CNAME record for your custom domain name. CNAME records basically act as an alias for another domain name. Github [provides documentation][22] covering how to set this up. This command simply creates a CNAME file within the freshly-created ```public``` folder from the first command, containing ```your_domain_name.com```. The third and final command invokes the gh-pages module which handles pushing the content of the ```public``` folder to the ```master``` branch.

## Typography Module (gatsby-plugin-typography)
I like reading. I especially like reading things written in a nice font. Which is why I was happy to find plugin support for [Typography.js][17], another one of Kyle Mathews' projects. Usage of the gatsby-plugin-typography is explained nicely in [part two of the Gatsby tutorial][10]. I use [st-annes theme][11] for this site.

## This site
This site is a fork of the [Gatsby Remark example website][21], with some small tweaks to layout and fonts used. It's simple and I like it. The source code is available [here][24].

## Closing thoughts
Gatsby is a great static site generation option because it is easy to use, it has a diverse plugin selection and detailed documentation. In an otherwise crowded arena of static site generation frameworks, Gatsby stands out. I'm excited to see how the framework and community around it grow.

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
[14]: https://github.com/gatsbyjs/gatsby
[15]: https://www.gatsbyjs.org/packages/gatsby-transformer-remark/
[16]: https://www.gatsbyjs.org/packages/gatsby-source-filesystem/
[17]: http://kyleamathews.github.io/typography.js/
[18]: https://www.gatsbyjs.org/packages/gatsby-remark-copy-linked-files/
[19]: https://education.github.com/pack
[20]: https://www.npmjs.com/package/gh-pages
[21]: https://using-remark.gatsbyjs.org/
[22]: https://help.github.com/articles/quick-start-setting-up-a-custom-domain/
[23]: https://www.gatsbyjs.org/docs/path-prefix/
[24]: https://github.com/e-nichols/e-nichols.github.io/tree/dev
