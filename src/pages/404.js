import React from "react"
import Layout from "../components/layout/layout"
import { Container404 } from "../styled-components/404"

const NotFoundPage = () => (
  <Layout>
    <Container404>404!</Container404>
    <p style={{textAlign: 'center'}}>I find your lack of navigation disturbing...</p>
  </Layout>
)

export default NotFoundPage
