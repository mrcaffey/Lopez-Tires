import React from "react"
import Banner from "../components/banner"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <Layout>
  <Banner/>
  <div style={{ color: `black` }}>
    <Header headerText="Home Page"/>
  </div>
  <div style={{ height: `100vh`, alignContent: `center`}}>
    <img src="/images/LopezTires_tire-page-banner.jpg"></img>
  <h1>Welcome to Lopez Tires</h1>
  <p>We are a small tire company serving the Salt Lake area.</p>
  <p>Our services include tire sales including full install as well as auto mechanic services</p>
  </div>
  </Layout>
)