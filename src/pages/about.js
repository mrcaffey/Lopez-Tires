import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <Layout>
  <div style={{ color: `black` }}>
    <Header headerText="About Us" />
    <p>We are Lopez Tires.</p>
  </div>
  </Layout>
)