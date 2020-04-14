import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header/header"
import Footer from "../footer/footer"

import "./layout.scss"

const Layout = ({ children, headless }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <>
      {
        headless ? null : <Header siteTitle={data.site.siteMetadata.title} />
      }
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <section>
          <article>
            {children}
          </article>
        </section>
        <Footer title={data.site.siteMetadata.author} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
