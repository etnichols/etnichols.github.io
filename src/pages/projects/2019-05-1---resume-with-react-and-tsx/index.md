---
author: Evan Nichols
title: "Resume with React and Typescript"
date: "2019-05-01T00:12:03.000Z"
tags:
- tutorial
- React
- Typescript
draft: false
type: 'project'
---

## Overview
This is a mini-tutorial illustrating how to create a simple, responsive resume page for your personal website using Gatsby, React function components and Typescript. It assumes a basic knowledge of these three technologies. If that's not the case, check out these references before getting started:

- [Set up Gatsby development environment](https://www.gatsbyjs.org/tutorial/part-zero/).
- [Typescript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [Components and Props - React Docs](https://reactjs.org/docs/components-and-props.html)

## Demo
[etnichols.com/resume](http://etnichols.com/resume)

## Set up boilerplate Gatsby site and enable Typescript.

Kick things off by creating a new Gatsby site using the gatsby-cli tool.

```bash
$ gatsby new typescript-resume
```

After the install script finishes, cd into the project directory and run `gatsby-develop` to run the site locally - navigate to `localhost:8000` to check out the site (just boilerplate for now, but not for long!).

Next, install [gatsby-plugin-typescript](https://www.gatsbyjs.org/packages/gatsby-plugin-typescript/). From the project directory, run:

```bash
$ npm i gatsby-plugin-typescript
```

And then, modify your `gatsby-config.js` to include the plugin:

```
module.exports = {
  // ...,
  plugins: [...`gatsby-plugin-typescript`],
}
```

That's it! Now you can use files with a .tsx extension in your project.

## Add resume.tsx to `pages` folder

As the Gatsby docs state, "Any React component defined in `src/pages/*.js` will automatically become a page." With Typescript enabled on the project, that statement can be updated to say, "Any React component defined in `src/pages/*.[js|tsx` will automatically become a page." Note the `.tsx` extension as opposed to just `.ts`. This is because the resume page we create will use JSX, thus we want the `.tsx` extension.

Create a new page at `src/pages/resume.tsx` and copy in this starter code:

```js
import React from 'react'

/** Responsive resume page. */
const Resume = () => (<h1>Hello, Resume!</h1>)

export default Resume
```

Let's see it in action. Run `gatsby develop` again from project directory and navigate your browser to `localhost:8000/resume`. You should see:

![Hello, Resume!](hello-resume.png)


## Actually use Typescript

You probably noticed the code above isn' actually Typescript 🤔  why did it still compile? It's because *Typescript is a typed superset of Javascript.* Which is a fancy way of saying, "All Javascript is valid Typescript, but not all Typescript is valid Javascript." Typescript simply adds optional static typing to the language.

This is a cool thing because it makes integrating Typescript into an existing project quite easy. You could change all existing .js files in your project to .ts|.tsx and incrementally add typings to them, or you could leave all your legacy .js files as is and using .ts|.tsx for any new files. Yay for unncessary re-writing!

Let's add some typings to Resume function component. The syntax for adding typings is simple: `identifier : type`. Two quick examples.

Let's say we have three variables: `x`, `y` and `z`.

`x` and `y` are numbers, `z` is a string. We could declare them like this:

```tsx
const x: number = 2;
const y: number = 3;
const z: string = 'Howdy!';
```

Now, let's say we have a function, `add`, that takes accepts two arguments that are both numbers. It would look like:

```tsx
const add = (left: number, right: number) => left + right;
```

And now consider if we tried to use the `add` function with the variables we declared above:

```js
console.log(add(x,y)); // OK
console.log(add(x,z)); // Compile time error!
```

With the type declarations, the Typescript compiler is smart enough to catch an invalid function call.

If you wrote the code above in plain JS, it would compile with no problem and it would output:

```js
5
'2Howdy'
```

 To the console. Javascript is fun like that.

With that ultra-brief primer on types, let's go ahead and add some types to the simple `Resume` function component in `resume.tsx`.

To do this, we'll need to import the `FunctionComponent` type declaration from the React library. Update the import section of `resume.tsx` to be:

```tsx
import React, { FunctionComponent } from 'react'
```

And now update the `Resume` function to use this type definition.

```js
/** Responsive resume page. */
const Resume: FunctionComponent = () => (<h1>Hello, Resume!</h1>)
```

## Define types and create data.

This resume is boring AF right now. Let's think high-level on the "shape" of a resume. It might look something like this:

TODO: insert picture here.

It consists of multiple **sections** like "Work experience", "education", "projects", "volunteering", etc. Each of those sections consists of one or more **entries** related to that section. And each entry consists of details like name of the position, company/organization, duration, description of responsibilities, etc.

There's also the case of a **section** just being a single entry, that is a list of skills not associated with a specific position/company/duration. Like a "Programming languages" section. We should account for that in our types, too.

With that in mind, let's take a stab at defining some types.

## Create function components.

## Compose

## Style

## Wrap up

## Next steps
