import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <Layout>
  <div style={{ color: `teal` }}>
    <Header headerText="About Us" />
    <Header headerText="Proudly in business for 5 years" />
    <p>We are Lopez Tires.</p>
  </div>
  </Layout>
)