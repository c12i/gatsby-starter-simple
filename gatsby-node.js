const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode ,actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })

    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const results = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              date
              title
              description
              author
            }
            html
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (results.errors) throw new Error(results.errors)

  const { allMarkdownRemark } = results.data

  const pageTemplate = path.resolve(`./src/templates/posts.js`)
  allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `${node.fields.slug}`,
      component: slash(pageTemplate),
      context: {
        id: node.id,
        frontmatter: node.frontmatter,
        html: node.html,
        excerpt: node.excerpt
      }
    })
  });
}