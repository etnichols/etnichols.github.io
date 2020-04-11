---
title: 'Lead to Read website redesign with Gatsby and Firebase'
date: '2020-04-04T00:12:03.000Z'
tags:
  - Gatsby
  - React
  - Firebase
draft: true
author: Evan Nichols
type: 'project'
---

Lead to Read is an awesome non-profit based out of Kansas City that facilitates reading based mentorship in the Kansas City metro area. They connect adult volunteers with 1st-3rd grade students for one hour each week to read together. As their motto goes, "Together we are creating a community of readers, one lunch hour at a time."

I worked with Pauly Hart and Martha Conradt to give refresh the UI using Gatsby, while keeping Wordpress as the CMS.

## Motivations for the redesign

Lead to Read is an awesome organization, but their previous website was... less than awesome. It's a 10+ year old Wordpress site with less-than-glamorous Lighthouse audit scores:

![Old Lead to Read website Lighthouse Scores](ltr_lighthouse.png)

The performance and accessibility categories are especially concerning: the site isn't accessible or mobile friendly, and takes over 17 seconds to become interactive.

I kept some "north star" goals in mind during the redesign:

- Performance - improve those lighthouse scores.
- Accessible - make sure the site works for _everyone_.
- Responsive - a layout that works on any screen size.
- Approachable - clear messaging and easy-to-discover content.

## How I approached the design

Before starting, I combed the existing site and tried to group the existing content into more logically sections.

After some sketching on paper, I used Sketch to bring mock out the proposed redesign:

![New site design mocks](lead_to_read_sketch.jpg)

After a couple iterations and resolving feedback from Martha and Pauly, we settled on the landing page layout and navigation menu.

Time for some coding!

## Project structure

I created a new Gatsby site with the following plugins:

```js
gatsby-plugin-sass // enable SASS
gatsby-transformer-sharp // image processing
gatsby-plugin-sharp // image processing
gatsby-plugin-typescript // enable TS
gatsby-plugin-offline, // enable offline mode
gatsby-source-filesystem // make Gatsby aware of image assets
gatsby-plugin-typography // enable Typography.js
gatsby-source-wordpress // the workhorse! Source content from WP.
```

Beyond that, I decided to use mobile-first styling for all CSS, and defined a central defs.scss to be the single source of colors, spacing and mixins for the project. DRY!

<script src="https://gist.github.com/e-nichols/f979c6c285643f6935581a320afc73ba.js"></script>

## Image Carousel

## Working with Wordpress

- normalizer
- routes to include

## Firebase w/ a custom domain

- Really easy.
- But sounds like cloud functions could use some more love. Not efficient. Link to Medium post.
- Is it... worth it?

## Some React tidbits

- OnLoad callback for imgs
