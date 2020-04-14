import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/SEO/seo"

import { NotFoundContainer, HelperText } from "../styled-components/404"

const NotFoundPage = () => (
  <Layout headless>
    <SEO title="Not Found" />
    <NotFoundContainer>404</NotFoundContainer>
    <HelperText>
      <p>I find your lack of navigation disturbing...</p>
      <Link to="/">Back home</Link>
    </HelperText>
  </Layout>
)

export default NotFoundPage
