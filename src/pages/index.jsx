import React, { useRef } from "react";
import { TweenLite, Power3 } from 'gsap';
import '../styles/styles.scss';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Frontpage from '../components/frontpage';
import Portfolio from '../components/portfolio';

function IndexPage() {
  let portfolio = useRef(null);

  const scrollToPortfolio = () => {
    TweenLite.to(window, 2, { scrollTo: { y: portfolio.offsetTop }, ease: Power3.easeOut });
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Frontpage onClick={scrollToPortfolio}/>
      <div className="portfolio-container" ref={el => portfolio = el}> 
        <Portfolio />
      </div>
    </Layout>
  )
}

export default IndexPage
