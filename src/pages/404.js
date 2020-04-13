import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/SEO/seo"
import { Container404 } from "../styled-components/404"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container404 title="404">404</Container404>
    <p style={{textAlign: 'center'}}>I find your lack of navigation disturbing</p>
  </Layout>
)

export default NotFoundPage
