---
title: "Timesavers with Scripting and Aliases"
date: "2016-09-07T22:08:03.284Z"
path: "/zsh-aliases-scripts/"
---

I had written earlier about using [this tutorial](https://gist.github.com/cobyism/4730490) regarding subtree pushing in git to make updating my website easier. Well, that ended up breaking everything and causing some really nasty errors which took me a long time to sort out. I reverted back to my usual build and update process, which looks something like this:

- Write a new post.
- Build a new version of the site on my "dev" branch.
- Copy the contents of the "public" folder (containing the new version of my site) to my desktop in a tmp folder.
- Switch to my master branch, containing the live site code.
- Delete everything in the master branch and drop

Very slow, and very tedious. The steps above seemed like a good candidate for automation via a bash script, so I decided to give it a go. The script is below:

```
#!/bin/bash
# Deploy Site Script

echo "Deploy Website Script"
cd ~/_Dev/e-nichols.github.io
`git checkout dev`

# echo "Building new site..."
`gatsby build`

echo "Copying Contents of Public Folder..."
cp -a public/ ~/Desktop/tmp_build

echo "Checking out master branch..."
`git checkout master`

echo "Deleting Old Build..."
rm -r *

echo "Copying over new site..."
cp -a ~/Desktop/tmp_build/* ~/_Dev/e-nichols.github.io/

timestamp=$(date)

echo "Adding and committing changes..."
`git add . && git commit -m "Fresh build at $timestamp"`

echo "Pushing changes to github..."
`git push origin master`

echo "Cleaning up..."
rm -rf ~/Desktop/tmp_build

echo "Done"
```

I tested it with a dummy git repo and it ran smoothly. To enable calling it from the terminal, I created a "scripts" folder in my ~/.oh-my-zsh directory and added it to my path. Boom! Automation is great.

Additionally, I took the time to create some git command aliases in my .zshrc file:

```
# GIT ALIASES
alias gc="git clone"
alias co="git checkout"
alias gs="git status"
alias ga="git add"
alias gaa="git add ."
alias gcm="git commit -m"
alias gpo="git push origin"
```

Simple timesavers. I added a couple aliases for jumping to certain directories, which provides the same functionality as [zsh's jump plugin](https://github.com/robbyrussell/oh-my-zsh/blob/master/plugins/jump/jump.plugin.zsh)).

[Check out this site](https://dotfiles.github.io/) if you're interested with learning more or getting started with dotfiles. A couple hours of research and work will pay dividends down the road.
