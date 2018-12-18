import React from "react"
import Banner from "../components/banner"
import Header from "../components/header"
import Layout from "../components/layout"
import Flexbox from "flexbox-react"

export default () => (
  <Layout>
  <Banner/>
  <div style={{ color: `black` }}>
    <Header headerText="Home Page"/>
  </div>
  <div style={{ height: `100vh`, alignContent: `center` }}>
    <img src="/images/tire-page-banner.jpeg"></img>
  <h1>Welcome to Lopez Tires</h1>
  <p>We are a small tire company serving the Salt Lake area</p>
  </div>
  </Layout>
)