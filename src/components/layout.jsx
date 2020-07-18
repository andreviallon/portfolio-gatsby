/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="layout-container">
        <main>{children}</main>
      </div>
        <footer>© {new Date().getFullYear()} Andre Viallon. All rights reserved.</footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
