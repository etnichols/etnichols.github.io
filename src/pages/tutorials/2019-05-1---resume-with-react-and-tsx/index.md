---
author: Evan Nichols
title: "Resume with React and Typescript"
date: "2019-05-01T00:12:03.000Z"
tags:
- tutorial
- React
- Typescript
draft: true
type: 'tutorial'
---

## Overview
This tutorial illustrates how to create a simple, responsive resume page for your personal website using Gatsby, Typescript and React function components. It assumes a basic knowledge of these three technologies. If that's not the case, check out these references before getting started:

- [Set up your Gatsby development environment](https://www.gatsbyjs.org/tutorial/part-zero/).
- [Typescript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [React Docs - Function and Class Components](https://reactjs.org/docs/components-and-props.html#function-and-class-components)

## Demo
[http://gatsby-typescript-resume.surge.sh/resume/](http://gatsby-typescript-resume.surge.sh/resume/)

[github repo]()

## Set up boilerplate Gatsby site and enable Typescript.

Kick things off by creating a new Gatsby site using the `gatsby-cli` tool.

```bash
$ gatsby new typescript-resume
```

After the install script finishes, cd into the project directory and run `gatsby-develop` to run the site locally. After it finishes building, navigate to `localhost:8000` in your browser to see the boilerplate starter site.

Gatsby provides drop-in support for Typescript via [gatsby-plugin-typescript](https://www.gatsbyjs.org/packages/gatsby-plugin-typescript/). Let's add this to the site. From the project directory, run:

```bash
$ npm i gatsby-plugin-typescript
```

And modify your `gatsby-config.js` to include the plugin:

```
module.exports = {
  // ...,
  plugins: [...`gatsby-plugin-typescript`],
}
```

That's it! Now you can use files with a `.tsx` extension in your project.

## Create /resume page for your site

As the Gatsby docs state:
> Any React component defined in `src/pages/*.js` will automatically become a page.

With Typescript enabled on the project, that statement can be updated to say:

> Any React component defined in `src/pages/*.[js|tsx]` will automatically become a page."

*Note the `.tsx` extension as opposed to just `.ts`. This is because the resume page we create will use JSX, thus we want the `.tsx` extension.*

Create a new page at `src/pages/resume.tsx` and add the following code to it:

```js
import React from 'react'

/** Responsive resume page. */
const Resume = () => (<h1>Hello, Resume!</h1>)

export default Resume
```

Let's see it in action. Run `gatsby develop` again from project directory and navigate your browser to `localhost:8000/resume`. You should see:

![Hello, Resume!](hello-resume.png)

## Actually use Typescript

You probably noticed the code above isn' actually Typescript 🤔 Why did it still compile? It's because *Typescript is a typed superset of Javascript.* Which is a fancy way of saying, "All Javascript is valid Typescript, but not all Typescript is valid Javascript." Typescript simply optional static typing to the language.

This is a cool thing because it enables incremental integration of Typescript into an existing project. One could change all existing `.js` files to `.ts|.tsx` and incrementally add typings to them, or, leave all legacy `.js` files unchanged and use `.ts|.tsx` for any new files.

I digress. Back to the matter at hand: let's add some typings to Resume function component.

The syntax for adding Typescript typings is simple: `identifier : type`. A quick concrete example:

Consider three variables: `x`, `y` and `z`.

`x` and `y` are numbers, `z` is a string. Using the syntax above, the variables can be declared like this:

```tsx
const x: number = 2;
const y: number = 3;
const z: string = 'Howdy!';
```

Now, let's say we have a function, `add`, that accepts two arguments which are both numbers. The typed function definition would look like this:

```tsx
const add = (left: number, right: number) => left + right;
```

Finally, consider if we tried to use the `add` function with the following two combinations of the variables declared above:

```js
console.log(add(x,y));
console.log(add(x,z));
```

If you put all the statements in the example above into a file and tried to compiled it with `tsc` (The Typescript compiler), you'd see the following error:

```
$ tsc test.ts
$ test.ts:8:7 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

8 add(x,z)
```
Using the type declarations, `tsc` is smart enough to catch the invalid function call.

Side note: If you wrote the code above in plain JS, it would compile with no problem and it would output:

```js
5
'2Howdy'
```

Javascript is fun like that.

With that ultra-brief primer on types, let's add types to the `Resume` function component in `resume.tsx`.

To do this, we'll need to import the `FunctionComponent` type declaration from the React library. Update the import section of `resume.tsx` to be:

```tsx
import React, { FunctionComponent } from 'react'
```

And now update the `Resume` function to use this type definition.

```js
/** Responsive resume page. */
const Resume: FunctionComponent = () => (<h1>Hello, Resume!</h1>)
```

Save and refresh the page on your browser. Ta-da! You've successfully used Typescript.

## Define types for Resume data

Consider the "shape" or a resume. It might look something like this:

![Resume illustration!](resume-sketch.png)

It consists of multiple **sections** like "work", "leadership", "education", etc. Each of those sections consists of one or more **entries** related to that section. Finally, entry consists of details like name of the position, company/organization, duration, description of responsibilities, etc.

Pretty simple, but one special case to note. Look at the "leadership" section above. It illustrate a case of a **section** with a single **entry** which is itself a list of items. Another use case for a section like this: adding a "Programming languages" to the resume, where one simply lists the langauges/frameworks with which they have experience.

Generalizing the example above into a generic `section`, we get something like:

![Resume illustration!](section.png)

Let's translate those statements above into define some Typescript types.

### Enter: Interfaces

In Typescript, the `interface` keyword is used to declare types. The Typescript [docs](https://www.typescriptlang.org/docs/handbook/interfaces.html) provide a nice explanation of the motivation for using interfaces:

> "One of TypeScript’s core principles is that type checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural subtyping”. In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project."

Let's define the types "top-down." We start with saying what a `Resume` is and breaking it down into sub types until we get to types that consist of all primitives.

Within the `src` directory of your Gatsby project, create a new file `resume.d.ts`. The `.d.ts` denotes a file that contains type declarations. Add the following type declarations:

```ts
export interface Resume {
  sections: [Section]
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

 What does this say? Exactly what we said above:

- A `Resume` is an array of `Sections`.
- A `Section` is a `title` string and an array of `Entry` objects.
- An `entry` can have a `title`, `company`, `Duration`, -- but all these fields are **optional**, hence the usage of the `?`. The `description` field is required, and it can be either a string OR an array of strings (hence the `|`).
- A duration is `start` and an `end`, both strings.

### Define a typed data object

It's time to make a `Resume` data object that implements the types defined above.

*Note: when I say "data object," I really just mean a plain ole' javascript object.*

**Optional audience participation**: you can either use the <INSERT EXAMPLE LINK HERE> from the demo site, or... make your own! Either way, define this `Resume` data object in new file located at `data/src/resume.ts` in your project.

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

The first section creates a React [fragment](https://reactjs.org/docs/fragments.html) for the entry header. It includes an "maybe linked" title by using the ternary operator, and two [conditionally rendered](https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator) sections -- company and duration -- using the logical && operator.

The second section creates the entry body. It similarly using type of the `description` prop to decide whether to render the description as a list, or just a regular paragraph.

### Section

The `Section` function much simpler to render. It is simply a list of entries with a title.

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

The column. If you're a skeptical reader, you may be questioning the need for such a type. *Why do we need the idea of a column for a web-based resume? Why not just render all the sections without the extra "wrapper type"?*

These are valid questions. The type doesn't add much meaning. But what it lacks in semantic purpose... it makes up for in **style**.

That is a corny way of saying this type is used to achieve a [responsive layout](https://developers.google.com/web/fundamentals/design-and-ux/responsive/).

Consider the two main cases for laying out the sections of our resume: desktop view (large screen) and mobile view (small screen). It makes sense to use all available real estate on each screen:

![Responsive layout illustration](responsive.png)

To achieve this, we can write a CSS media query based on a device width value: in other words, we choose a "breakpoint" width, for screens wider than that value, we render to columns, and for screens below that value, render a single column

The following CSS rules implement this responsive layout.

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
  margin: $SPACING_SMALL;
}
```

When max-width is below 512px, we give our resume a `flex-direction` of `column` (i.e. establishing the main axis of our layout as up-down as opposed to left-right) so the sections stack on top of one another instead of using the default value of `row`.

*Note: discussing the ins and outs of responsive layouts and CSS flex box is outside the scope of this tutorial, if you want to learn more check the links at the end of the post.*

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

You may want to experiment with where to cut the sections into columns, especially if you defined your own `Resume` data object that doesn't use the starter data. Add more columns, less columns, change the flex-basis of the columns -- do whatever you want, the world is your flexbox.

### Optional: Some styling steps

TODO(etnichols): Add a section and picture here with the final product.hb

- Using Typography.js
- Using SCSS

## See the final product

TODO(etnichols): Add a section and picture here with the final product.

## Wrap up

This tutorial is an exploration of Typescript and React function components in the context of a Gatsby-powered website. Some closing thoughts:

- Typescript makes it easier to break down the "shape" of the data in your projects. It informs decisions on how to best break down a view into individual components.
- React function components provide are more succinct than class based components and are easy to compose together to build more complex layouts. There are also some performance reasons to prefer these.

- TODO(etnichols): Maybe a little more final discussion here.
