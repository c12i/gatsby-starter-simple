const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/https://github.com/thecodemint/gatsby-starter-simple.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)