---
author: Evan Nichols
title: Gatsby 1.0 in action
date: 2017-10-15
tags:
- gatsby
- web development
- React
draft: false
---

I've spent the last few weekends migrating this site to use the Gatsby v1.0, released this past July. It's gained a lot of popularity over the past few months, and for good reason. It offers a lot of cool features right out of the box, a rich plugin ecosystem, and great documentation to boot. In this post I'll highlight some of my favorite Gatsby features.

## Plugins

## Posts in Markdown
All of the posts for this site are written in [Markdown][1]. It's a lightweight markup language developed for easy conversion to HTML. It looks like this:

```markdown
## Posts in Markdown
All of the posts for this site are written in [Markdown][1].

It's a lightweight markup language developed for easy conversion to HTML.

It looks like this:

...

[1]: https://daringfireball.net/projects/markdown/syntax
```

Check out the source code for the posts on this site if you want to see more Markdown examples. This isn't a new concept, but it's executed well here and the frontmatter on these posts can be queried against within GraphQL, meaning you can set up tag pages and have unpublished drafts.

## Code Highlighting
For any bloggers who frequently have posts containing code snippets, [gatsby-remark-prismjs][2] is a simple way to enable syntax highlighting, by simply requiring a prism theme on the layout files used within your site, like this:

```js
require(`prismjs/themes/prism-solarizedlight.css`)
```

## Adding Images (and Gifs)
![](gatsby-remark-images.jpg)
Yeah. So another cool plugin that allows you to directly include images within your Markdown posts.

## Typography Module
I like reading. I especially like reading things with good fonts, especially things that aren't Papyrus. Gatsby makes it easy to add in custom fonts from Typography JS, another project from Kyle Matthews.

## Google Analytics
I like to keep close tabs on the 5 or so people who frequent my blog, and for that I like to use Google analytics. How do I add that into my site? Yep, you guessed it, another dead simple plugin: gatsby-plugin-google-analytics. It's as easy as adding a line
Jekyll was my first experience with static site generators.
Starting a post about using

## This site
Although I've added my own fonts and content, this site is nothing more than a fork of the Gatsby Remark example website, by <AUTHOR>.

Implemented tag searching, but then got rid of it.
Using typography plugins.

[1]: https://daringfireball.net/projects/markdown/syntax
[2]: https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/
