import React from "react"
import '../styles/styles.scss';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Frontpage from '../components/frontpage';
import Portfolio from '../components/portfolio';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Frontpage />
    <Portfolio />
  </Layout>
)

export default IndexPage
