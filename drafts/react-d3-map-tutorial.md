---
title: 'Create an interactive map using React, d3 and Python'
date: '2018-01-15'
tags: ['programming', 'react', 'tutorial']
draft: true
type: 'tutorial'
---

## Overview

In this tutorial, we'll build an interactive map of Manhattan's neighborhoods, using a React and d3. We leverage React for creating and composing components and application state management, and let d3 handle the direction DOM manipulation and user interaction. The map itself is an interactive SVG created using Adobe Illustrator, which we "mark up" using a Python script. Finally, we'll build the application and deploy it using Surge, a static site hosting service.

More generally, this is a tutorial that introduces an approach for combining React and d3 in a semi-sane way. It's weird, because React kind of teaches you to avoid direct DOM manipulation, while d3 is arguably on the other side of the spectrum, relying on direct DOM manipulation to create and animate data drive graphics.

## The Basic Workflow

In this tutorial I've chosen to use the neighborhoods of Manhattan as my choice for map. But these concepts and general workflow can be applied to producing any type of interactive asset using Adobe Illustrator, React and d3. The basic steps:

1. Create the asset using Adobe Illustrator, labelling individual SVG components appropriately.
2. Export the asset as an SVG.
3. Using a Python script to modify the raw SVG and make it interactive -- we attach onClick events and set up dynamically styling based on a "selection" state value.
4. Make a MapComponent using the marked up SVG.
5. Use d3 to handle animations triggered by user interaction.
6. Interact with your map!

## Let's Build

### Bootstrap project with create-react-app

Make sure you have `create-react-app` installed on your system. Use `npm install -g create-react-app` from the command line if it's not installed. Once installed, run the following command:

```bash
$ npx create-react-app nyc-maps-tutorial
```

Once the script finishes, run:

```bash
cd nyc-map-tutorial
npm start
```

Boom, you're app should be running at localhost:3000.

_(You can use yarn here if that's how you roll. Just substitute in the appropriate commands.)_

### Make the Map component

Within the `src` folder create a new directory called `components` and within it, create a new file called `Map.js` and include the following:

```javascript
import React, { Component } from 'react'

class Manhattan extends Component {
  render() {
    return <p>Map placeholder</p>
  }
}

export default Map
```

And now, go to `App.js` and include the `Map` component within it:

```javascript
import React, { Component } from 'react'
import Map from './components/Map'

class App extends Component {
  render() {
    return <Map />
  }
}
```

Cool. Now it would be useful to have an actual map graphic to work with. Let' make that now.

### Create and export the map using Illustrator

I used Adobe Illustrator CC 2018 to create [this SVG][3] of the neighborhoods of Manhattan. I based it off [this map][4] from Wikipedia.

### Add the SVG to the Map Component

### Bring the map to life with d3

### Working smarter, not harder

### Componentize the SVG with Python

A note on this script: it's meant for SVGs exported from Adobe Illustrator CC 2018. YMMV depending on version used -- Adobe Illustrator CS5 exports SVGs in a certain format and you might have to make minor adjustments to adjust for up beginning markup of your SVG file.

## Wrap Up

A discussion of limitations and a simpler way. The simplest way, how do we reconcile "this" between React functions and d3 functions! I.e. I want to use d3 to attach an event listener to an object which sets the application state, how do I do that? There must be a simpler way... perhaps that follows the pattern laid out in this example I found while creating the project. But for now, we stick with a working but perhaps the not most efficient implementation.

The reality: this isn't a perfect system. You make compromises when you choose libraries that have drastically seemingly incompatiable different approaches to DOM manipulation. But if we use them carefully and utilize each tool where it excels, we end up with a nice application.
