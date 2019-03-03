import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"

export default () => (
  <Layout>
  <div style={{ color: `black` }}>
    <Header headerText="Contact" />
    <p>Give us a call today!</p>
    <a href="tel:1-801-883-9519">801-883-9519</a>
  </div>
  <section>
  <img src="/images/tiretread.jpg"></img>
  </section>
  </Layout>
)