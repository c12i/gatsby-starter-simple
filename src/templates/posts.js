import React from "react"
import Layout from "../components/layout/layout"

export default ({ pageContext: { frontmatter, html } }) => (
  <Layout>
    <h1>{frontmatter.title}</h1>
    <div dangerouslySetInnerHTML={{__html: html}} />
    <p>
      Author:
      <strong>{frontmatter.author}</strong>
    </p>
  </Layout>
)