import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      padding:`50px 30px`,
      borderBottom:`1px solid #ddd`
    }}
  >
    <h1 style={{ color:`#2b2b2b` }}>
      <Link
        to="/"
        style={{
          color:`#2b2b2b`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
    <nav
    style={{textAlign: `right`}}
    >
      <Link to="/about">About</Link>
      <Link to="/feed">Feed</Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
