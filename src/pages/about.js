import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <Layout>
  <div style={{ color: `black` }}>
    <Header headerText="About Us" />
    <h1>Who are we? </h1>
    <div style = {{ alignContent: `right` }}>
    <img src="/images/checkmeter.jpg"></img>
    </div>
    <div style = {{ alignContent: `left` }}>
    <h3>We started this business</h3>
    </div>
  </div>
  </Layout>
)