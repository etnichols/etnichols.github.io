---
title: 'Next.js with Prisma, Docker and Google Cloud Run'
date: '2022-08-28'
tags:
  - NextJS
  - Docker
  - Prisma
draft: true
author: Evan Nichols
type: 'project'
---

The first programming tutorial I ever wrote was for an interactive quotebook, after I had graduated from KU and was eager to share my rudimentary knowledge of React with the masses.

A demo of the old app is here: http://randomquotebook.surge.sh/.

This project has kind of acted like a mastery quiz... I forked the original source code (so as to keep the tutorial accurate to the source code) and hacked on my first forays into programming over the years: rewriting the project to use Hooks, making some minor tweaks to the layout, improving the UX, deploying it on Firebase with a custom domain, and more.

And now I'm back, using the project as a way to learn more about Next JS, Prisma, Docker, Google Cloud SQL and Cloud Run (buzzwords! buzzwords!). This post isn't exhaustive; it's more of a smattering of learnings as I tried to "productionize" the app, which now lives at https://quotebook.xyz/.

In its current form, the site is a Next.js app, deployed on Google Cloud Run as a docker container. A Prisma-generated ORM sits between the app and a PostgreSQL database, also hosted on Google Cloud SQL.

### Local development

I modified the out-of-the-box package.json scripts to include usage of dotenv, to be able to test local and prod instances.

### Dockerfile

Nothing special here, aside from the usage of dotenv to ensure usage of a `.env.dev` config file.
