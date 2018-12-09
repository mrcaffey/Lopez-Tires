import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <Layout>
  <div style={{ color: `black` }}>
    <Header headerText="Contact" />
    <p>Give us a call today!</p>
    <p>801-883-9519</p>
  </div>
  </Layout>
)