import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/SEO/seo"

import "../styles/404.scss"

const NotFoundPage = () => (
  <Layout headless>
    <SEO title="Not Found" />
    <div className="not-found">404</div>
    <div className="helper-text">
      <p>I find your lack of navigation disturbing...</p>
      <Link to="/">Back home</Link>
    </div>
  </Layout>
)

export default NotFoundPage
