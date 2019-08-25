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
[gatsby-typescript-resume.surge.sh](http://gatsby-typescript-resume.surge.sh/resume/)

Source code available [here](https://github.com/e-nichols/gatsby-typescript-resume).

## Set up boilerplate Gatsby site

Kick things off by creating a new Gatsby site using the `gatsby-cli` tool.

```bash
$ gatsby new typescript-resume
```

## Enable Typescript

After the install script finishes, `cd` into the project directory and run `gatsby-develop` to run the site locally. After it finishes building, navigate to `localhost:8000` in your browser to see the boilerplate starter site.

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

## Create /resume route for your site

As the Gatsby docs state:
> Any React component defined in `src/pages/*.js` will automatically become a page.

With Typescript enabled on the project, this statement can be updated to:

> Any React component defined in `src/pages/*.[js|tsx]` will automatically become a page."

*(Note: the `.tsx` extension as opposed to just `.ts`. This is because the resume page we create will use JSX, thus we want the `.tsx` extension.)*

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

Pretty simple, but one special case to note. Look at the "leadership" section above. It illustrates a case of a **section** with a single **entry** which is itself a list of items. Another use case for a section like this: adding a "Programming languages" to the resume, where one simply lists the langauges/frameworks with which they have experience.

Generalizing the example above into a generic `section`, we get something like:

![Resume illustration!](section.png)

Let's translate those statements above into Typescript types.

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

You can define your own data object or use the dummy data from the demo site ([link](https://github.com/e-nichols/gatsby-typescript-resume/blob/master/src/data/resume.ts)). Either way, be sure to define this `Resume` data object in new file located at `data/src/resume.ts` in your project.

## Create function components for each type

It can be useful to define tops in a "top down" manner, but I tend to think the opposite when it comes to actually implementing individual components. So, this section reads "bottom up", defining components for the simplest types first and composing them together until we arrive at the final `Resume` component.

### A note on CSS

The main point of this tutorial is learning Gatsby, Typescript and React -- not so much learning CSS. For that reason, I'm not going in depth on the rules used in the code snippets below. Choose one of the following options to add CSS to your project:

1. Define your own styles in a `resume.css` file (in the same directory as the `resume.tsx` file) and define your own styles for each component as you go along.
2. Use the `resume.scss` and base styles from the demo site. To do this, [enable scss on the site](https://www.gatsbyjs.org/packages/gatsby-plugin-sass/) (read: just install the plugin) and then copy the relevant files from the demo site into your project ([here](https://github.com/e-nichols/gatsby-typescript-resume/blob/master/src/pages/resume.scss) and [here](https://github.com/e-nichols/gatsby-typescript-resume/tree/master/src/styles)).

### Entry

Let's define the `Entry` component -- a single entry in a section. Add the following component to `resume.tsx`.

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

The `Section` function much simpler to render. It is simply a list of entries with a title. Add the following to `resume.tsx`:

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

It maps over the supplied `entries`, rendering a keyed `RenderEntry` component for each one. Note the usage of the `section` html element to give our DOM some semantic meaning. Mozilla's rule of thumb for using section: "a section should logically appear in the outline of the document."

```
.resume-body {
  -webkit-column-count: 2;
  -moz-column-count: 2;
  column-count: 2;
  -webkit-column-width: 256px;
  -moz-column-width: 256px;
  column-width: 256px;
  -webkit-column-rule: 1px dotted $fff;
  -moz-column-rule: 1px dotted $fff;
  column-rule: 1px dotted $fff;
}
```

### (Optional) Title Component

As a brief introduction to the `StaticQuery` in Gatsby, here's an optional `ResumeTitle` component you can add to your site. It looks like this:

![Resume title illustration!](resume-title.png)

If you want to add this component, you'll need to add some data to your site that can be queried via `StaticQuery`. To do this, update the `gatsby-config.js` file at the root of your site. Update the `siteMetadata` to include the following:

```js
module.exports = {
  siteMetadata: {
    title: `Gatsby Typescript Resume`,
    description: `A simple, responsive resume using Gatsby and Typescript.`,
    author: `John Doe`,
    email: `johndoe123@gmail.com`,
    github: `https://github.com/gatsbyjs`,
    linkedin: `https://www.linkedin.com/company/gatsbyjs/`,
    location: `New York, NY`,
    medium: `https://medium.com/search?q=gatsby%20js`,
  },
  ...
}
```

Additionally, add the following

TODO: Add icons and icons.scss to components
import them into resume.tsx

define the following component.

```jsx
const ResumeTitle: FC<> = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              author
              location
              description
              email
              linkedin
              github
              medium
            }
          }
        }
      `}
      render={data => {
        const {
          author,
          location,
          email,
          github,
          linkedin,
          medium,
          description,
        } = data.site.siteMetadata

        const iconsWithLinks = [
          ['email', `mailto:${email}`],
          ['github', github],
          ['linkedin', linkedin],
          ['medium', medium],
        ]

        return (
          <div className="resume-title">
          <h1 className="resume-name">{author}</h1>
          <h5 className="title-section-description">
            {location}
          </h5>
            <div className="icon-section">
              {iconsWithLinks.map(([icon, href], i) => (
                <a key={`link-${i}`} className="link-icon" href={href}>
                  <Icon key={`link-${i}`} name={icon} />
                </a>
              ))}
            </div>
          </div>
        )
      }}
    />
  )
}
```

TODO: explain this code snippet.

### Resume

Now let's put things together in a final form. Here's the `RenderResume` function:

```
const RenderResume: FC<Resume> = ({ sections }) => {
  return (
    <>
      <ResumeTitle />
      <div className="resume-body">
        {sections.map(section => (
          <RenderSection key={`section-${section.title}`} {...section} />
        ))}
      </div>
    </>
  )
}
```

### Responsive column layout via CSS

I lied -- we will talk about one CSS rule in particular that enables a responsive layout for the resume. Consider the two main cases for laying out the sections of our resume: desktop view (large screen) and mobile view (small screen). It makes sense to use all available real estate on each screen:

![Responsive column illustration](responsive.png)

How can we do this? `column-count` and `column-width` to the stage.

`column-count` breaks an element's content into the specified number of columns, and column-width sets "the ideal column width in a multi-column layout." Used together, they create a responsive layout: 2 columns on large screens, one column on narrow screens.

Add the following to to your resume.css (or resume.scss) file:

```
.resume-body {
  -webkit-column-count: 2;
  -moz-column-count: 2;
  column-count: 2;
  -webkit-column-width: 256px;
  -moz-column-width: 256px;
  column-width: 256px;
  -webkit-column-rule: 1px dotted $fff;
  -moz-column-rule: 1px dotted $fff;
  column-rule: 1px dotted $fff;
}
```

Now, refresh the page and check out resume. It should look like this:

![Animation illustrating the responsive layout](responsive_resume.gif)

### Page

The components folder is for common components - things that should be shared across pages, like the site header and nav bar. The boilerplate site generated by gatsby new site command includes a few: layout, header and seo.

TODO(etnichols): Update the layout.

### Final Product

TODO(etnichols): add final product

## Wrap up

This tutorial is an exploration of Typescript and React function components in the context of a Gatsby-powered website. Some closing thoughts:

- Typescript makes it easier to break down the "shape" of the data in your projects. It informs decisions on how to best break down a view into individual components.
- React function components provide are more succinct than class based components and are easy to compose together to build more complex layouts. There are also some performance reasons to prefer these.
- TODO(etnichols): Maybe a little more final discussion here.
