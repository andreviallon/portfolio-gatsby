import React from 'react';
import { Link } from "gatsby"
import './header.scss';

const Header = () => {
  return(
    <header>
      <div className="flex-container">
        <div className="logo">
          <Link to="/">andré viallon</Link>
        </div>

        <div className="navigation">
          <Link to={"/"} className="bottom-bar-on-hover">portfolio</Link>
          <Link to={"/about"} className="bottom-bar-on-hover">about</Link>
          <Link to={"/"} className="bottom-bar-on-hover">resume</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
