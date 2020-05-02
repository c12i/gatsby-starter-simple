import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/SEO/seo"

import { MainBlogTitle, PrePost } from "../styled-components/index"
import { Disqus } from "gatsby-plugin-disqus"

export default ({ pageContext: { frontmatter, html, id } }) => {
  let disqusConfig = {
    identifier: id,
    title: frontmatter.title,
  }

  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.excerpt} />
      <MainBlogTitle>{frontmatter.title}</MainBlogTitle>
      <PrePost>
        <time>
          {new Date(frontmatter.date).toDateString().toUpperCase()}
        </time>
      </PrePost>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Disqus config={disqusConfig} />
    </Layout>
  )
}
