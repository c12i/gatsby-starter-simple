import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"

import { BlogLink, BlogTitle } from "../styled-components/index"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {
       data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <BlogLink to={node.fields.slug}>
            <BlogTitle>{node.frontmatter.title}</BlogTitle>
          </BlogLink>
          <time>{new Date(node.frontmatter.date).toDateString()}</time>
          <p>{node.excerpt}</p>
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