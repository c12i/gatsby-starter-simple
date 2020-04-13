import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"

import { Divider } from "../styled-components/index"
import { SocialLinks } from "../styled-components/about"

const SecondPage = () => (
  <Layout>
    <SEO title="About" description="About Me"/>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
    <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
    <SocialLinks>
      <a href="https://muriuki.dev">Website</a>
      <Divider />
      <a href="https://github.com/thecodemint/gatsby-starter-simple">Github</a>
    </SocialLinks>
  </Layout>
)

export default SecondPage
