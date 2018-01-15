---
author: Evan Nichols
title: "Create an interactive map using React, d3 and Python"
date: 2018-01-15
tags:
- tutorial
- React
- d3
- Python
draft: true
---

A preview of what we're building

A summary of the project goal. To build an interactive application combining React for application state management, creating and composing components and application routing, and d3 for user interaction and direct DOM manipulation. Create and utilize a simple Python script to streamline the process of creating SVG assets. Build and deploy the application using Surge, the static site hosting service.

Motivation for the project. I moved to New York City a few months ago. I had no idea what all the different neighborhoods and where they were. Yeah, there are a lot of static images of maps and even some Google map art, but I wanted to make my own more interactive version.

The basic workflow
In this tutorial I've chosen to use the neighborhoods of Manhattan as my choice for map. But these concepts and general workflow can be applied to producing any type of interactive asset using Adobe Illustrator, React and d3. The basic steps:

1. Create the asset using Adobe Illustrator, labelling individual SVG components appropriately.
2. Export the asset as an SVG.
3. Using a Python script to modify the raw SVG and make it interactive -- we attach onClick events and set up dynamically styling based on a "selection" state value.
4. Make a MapComponent using the marked up SVG.
5. Use d3 to handle animations triggered by user interaction.
6. Interact with your map!

A discussion of limitations and a simpler way. The simplest way, how do we reconcile "this" between React functions and d3 functions! I.e. I want to use d3 to attach an event listener to an object which sets the application state, how do I do that? There must be a simpler way... perhaps that follows the pattern laid out in this example I found while creating the project. But for now, we stick with a working but perhaps the not most efficient implementation.
