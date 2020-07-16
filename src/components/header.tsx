import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.scss';

const Header = () => (
  <header>
    <div className="flex-container">
      <div className="logo">
        <Link to="/">andré viallon</Link>
      </div>

      <div className="navigation">
        <Link to="/" className="bottom-bar-on-hover">portfolio</Link>
        <Link to="/" className="bottom-bar-on-hover">about</Link>
        <Link to="/" className="bottom-bar-on-hover">resume</Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
