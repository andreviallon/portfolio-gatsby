import React, { useState } from 'react';
import { Link } from "gatsby"
import { graphql, useStaticQuery } from 'gatsby';
import './header.scss';

const Header = () => {
  const resume = useStaticQuery(graphql`
    {
      pdf: file(name: { eq: "resume" }) {
        name
        extension
        publicURL
      }
    }
  `)

  const [menuOpen, setMenuOpen] = useState(false);

  return(
    <header>
      <div className="flex-container">
        <div className="logo">
          <Link to="/">andré viallon</Link>
        </div>

        <div className="show-only-on-desktop">
          <div className="navigation">
            <Link to={"/"} className="bottom-bar-on-hover">portfolio</Link>
            <Link to={"/about"} className="bottom-bar-on-hover">about</Link>
            <a href={resume.pdf.publicURL} target="_blank" rel="noreferrer" className="bottom-bar-on-hover">resume</a>
          </div>
        </div>

        <div className="show-only-on-mobile">
          <span className="anchor" onClick={() => setMenuOpen(!menuOpen)}>{`${menuOpen ? "close" : "menu"}`}</span>
          <div className={`${menuOpen ? "show-nav" : "hide-nav"}`}>
            <div className="mobile-navigation">
              <Link to={"/"} className="bottom-bar-on-hover" onClick={() => setMenuOpen(false)}>portfolio</Link>
              <Link to={"/about"} className="bottom-bar-on-hover" onClick={() => setMenuOpen(false)}>about</Link>
              <a href={resume.pdf.publicURL} target="_blank" rel="noreferrer" className="bottom-bar-on-hover" onClick={() => setMenuOpen(false)}>resume</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
