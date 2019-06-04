---
author: Evan Nichols
title: "Resume with React and Typescript"
date: "2019-05-01T00:12:03.000Z"
tags:
- tutorial
- React
- Typescript
draft: false
type: 'tutorial'
---

## Overview
This tutorial illustrates how to create a simple, responsive resume page for your personal website using Gatsby, React function components and Typescript. It assumes a basic knowledge of these three technologies. If that's not the case, check out these references before getting started:

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

## Create /resume page for your site

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

This is a cool thing because it makes integrating Typescript into an existing project quite easy. You could change all existing .js files in your project to .ts|.tsx and incrementally add typings to them, or you could leave all your legacy .js files as is and using .ts|.tsx for any new files.

But I digress. Back to the matter at hand: let's add some typings to Resume function component. The syntax for adding typings is simple: `identifier : type`. Two quick examples.

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

Javascript is fun like that.

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

## Define types

This resume is boring AF right now. Let's think high-level on the "shape" of a resume. It might look something like this:

![Resume illustration!](resume-sketch.png)

It consists of multiple **sections** like "work", "leadership", "education", etc. Each of those sections consists of one or more **entries** related to that section. And each entry consists of details like name of the position, company/organization, duration, description of responsibilities, etc.

But, if you look at the "leadership" section above, there's also the case of a  **section** just having a single entry which is itself a list of items. Another example of a section like this might be a "Programming languages" section, in which you simply want to list the languages/frameworks you know, and perhaps your level of familiarity ('proficient', 'familiar with', etc.) a single **entry**, with a single list that is a list of skills not associated with a specific position/company/duration.

Generalizing the example above into a generic `section`, we get something like:

![Resume illustration!](section.png)

With that in mind, let's define some types.
### Enter: Interfaces

In Typescript, you define types using the interface keyword. The Typescript [docs](https://www.typescriptlang.org/docs/handbook/interfaces.html) explain what interfaces are nicely:

> "One of TypeScript’s core principles is that type checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural subtyping”. In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project."

Let's do our types top-down, starting with saying what a `Resume` is and breaking it down until we get to all primitive types.

Within the `src` directory of your Gatsby project, create a new file `resume.d.ts`. The `.d.ts` denotes a file that contains type declarations.

```ts
export interface Resume {
  sections: [ISection]
}

export interface Section {
  title: string
  entries: [Entry]
}

export interface Entry {
  title?: string
  company?: string
  duration?: Duration
  description: string | [string]
}

export interface Duration {
  start: string
  end: string
}
```

In english:

- A `Resume` is an array of `Sections`.
- A `Section` is a `title` string and an array of `Entry` objects.
- An `entry` can have a `title`, `company`, `Duration`, -- but all these fields are **optional**, hence the usage of the `?`. The `description` field is required, and it can be either a string OR an array of strings (hence the `|`).
- A duration is `start` and an `end`, both strings.

### Define a typed data object

Let's actually make a `Resume` data object that implements the types defined above.

**Audience participation**: this is where you come in, dear reader. Try defining your own `Resume` data object in `data/src/resume.ts`. Or you can steal mine for example (but please don't steal my identity).

## Create function components.

- While it's helpful to think "top down" when breaking down types, I tend to do the opposite when it comes to actually creating the individual components. It's easy to go "bottom up" here, starting by defining the simplest functions and then composing them together until we reach out final `Resume` component.

So the order of function definitions will be: `Entry`, `Section`, `Column`, `Resume`.

### Entry

Take a look at the following code for the `Entry` component, marked up with some inline comments.

```jsx{numberLines: true}
/** A single entry, either a job entry or a list of skills. */
const RenderEntry: FC<Entry> = ({
  title,
  link,
  company,
  duration,
  description,
}) => {
  const header = (
    <>
      <h4 className="job-title">{link ? <a href={link}>{title}</a> : title}</h4>
      {company && <h4 className="job-title">{company}</h4>}
      {duration && (
        <div className="duration">
          <i>{`${duration.start} - ${duration.end}`}</i>
        </div>
      )}
    </>
  )

  const body = Array.isArray(description) ? (
    <ul className="languages">
      {description.map((item, i) => (
        <li key={`languages-${item}-${i}`}>{item}</li>
      ))}
    </ul>
  ) : (
    description
  )

  return (
    <div className="job">
      {header}
      <div className="description">{body}</div>
    </div>
  )
}
```

The first section creates a React [fragment](https://reactjs.org/docs/fragments.html) representing for our entry header. It includes an "maybe linked" title by using the ternary operator, and two [conditionally rendered](https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator) sections -- company and duration -- using the logical && operator.

The second section creates the entry body. It similarly using type of the `description` prop to decide whether to render the description as a list, or just a regular paragraph.

### Section

Section is quite a bit simpler to render, since it's just a titled list of entries.

```tsx

const RenderSection: FC<Section> = ({ title, entries }) => {
  return (
    <section>
      <h2 className="section-title">{title}</h2>
      <div className="section-bar" />
      {entries.map((entry, i) => (
        <RenderEntry key={`${title}-entry-${i}`} {...entry} />
      ))}
    </section>
  )
}

```

It maps over the supplied `entries`, rendering a keyed `RenderEntry` component for each one. Note the usage of the `section` html element to give our DOM some semantic meaning. Mozilla's rule of thumb for using section: "a section should logically appear in the outline of the document." This seems to apply here.

### Column

The column. If you're a skeptical reader, you may be questioning the need for such a type. *"Why do we need the idea of a column for a web-based resume? Why not just render all the sections without the extra "wrapper type"?**

The answer is that you're right. This type isn't doing much. But what it lacks in semantic purpose... it makes up for in **style**.

That's a corny way of saying we use this type to achieve a responsive layout.

Let's think of two cases for laying out our sections.

<PIC 1> Large screen, two columns,

<PIC 2> Small screen, one column

In other words, we can choose a width boundary value -- for screens above that width, render 2 columns. for screens below, render a single column.

The following CSS rules will account implement this responsive layout.

```css
@media (max-width: 512px){
  .resume {
    flex-direction: column;
  }
}

.resume {
  display: flex;
}

.column {
  flex-basis: 0;
  flex-grow: 1;
  margin: $PADDING_SMALL;
}
```

When max-width is below 500px, we give our resume a `flex-direction` of `column` (i.e. establishing the main axis as up-down as opposed to left-right) so the sections stack on top of one another instead of using the default value of `row`.

### Resume

Now let's put things together in a final form. Here's the `RenderResume` function:

```
const RenderResume: FC<Resume> = ({ sections }) => {
  return (
    <>
      <h1>resume.</h1>
      <div className="resume">
        <RenderColumn sections={sections.slice(0, 1)} />
        <RenderColumn sections={sections.slice(1)} />
      </div>
    </>
  )
}
```

This component feels a little "manual" in nature since it is "data aware"... it's choosing where to slice the data into sections.

YMMV on this component, especially if you add more sections to the resume/don't use the starter data. I choose to split into two columns -- one column being 'work' and the other being 'languages/software, education, project.' Play around with this -- add more columns, less columns, change the flex-basis of the columns -- do whatever you want, the world is your flexbox. I am now officially done with making stupid jokes.

## Wrap up

This tutorial is an exploration of Typescript and React function components in the context of a Gatsby-powered website. Some closing thoughts:

- Typescript makes it easier to break down the "shape" of the data in your projects. It informs decisions on how to best break down a view into individual components.
- React function components provide are more succinct than class based components and are easy to compose together to build more complex layouts. There are also some performance reasons to prefer these.
