const ghpages = require('gh-pages')
const path = require('path')

const options = {
  repo: 'https://github.com/e-nichols/e-nichols.github.io.git',
  branch: 'master'
}

ghpages.publish(path.join(__dirname, '../public'), options, (error) => {
  if(error) {
    console.log(error)
    throw new Error('Deploying failed')
  } else {
    console.log('Deploying success')
  }
})
