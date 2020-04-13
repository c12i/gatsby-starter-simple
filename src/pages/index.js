import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {
       data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <time>{new Date(node.frontmatter.date).toDateString()}</time>
          <p>{node.excerpt}</p>
          <hr />
        </div>
      ))
    }
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          date
          title
          description
        }
        excerpt
        fields {
          slug
        }
      }
    }
  }
}
`;