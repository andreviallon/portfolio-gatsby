import React from "react"
import '../styles/styles.scss';

import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Frontpage from '../components/frontpage';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Frontpage />
  </Layout>
)

export default IndexPage
