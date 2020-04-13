import React from "react"
import Layout from "../components/layout/layout"

import { BlogTitle } from "../styled-components/index"
import { Disqus } from "gatsby-plugin-disqus"

export default ({ pageContext: { frontmatter, html, id } }) => {
  let disqusConfig = {
    identifier: id,
    title: frontmatter.title,
  }

  return (
  <Layout>
    <BlogTitle>{frontmatter.title}</BlogTitle>
    <div dangerouslySetInnerHTML={{__html: html}} />
    <Disqus />
  </Layout>
)}