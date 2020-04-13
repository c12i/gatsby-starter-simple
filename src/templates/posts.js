import React from "react"
import Layout from "../components/layout/layout"

import { BlogTitle } from "../styled-components/index"

export default ({ pageContext: { frontmatter, html } }) => (
  <Layout>
    <BlogTitle>{frontmatter.title}</BlogTitle>
    <div dangerouslySetInnerHTML={{__html: html}} />
    <p>
      Author:
      <strong>{frontmatter.author}</strong>
    </p>
  </Layout>
)