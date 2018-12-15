import React from "react"
import Banner from "../components/banner"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <Layout>
  <Banner/>
  <div style={{ color: `black` }}>
    <Header headerText="Home Page"/>
    <p>Contact Us Now! yes</p>
    <blockquote>
        <p>
         
        </p>
       
      </blockquote>
  </div>
  <div style={{ height: `100vh`, alignContent: `center` }}>
    <p>CAROUSEL IMAGE</p>
    <img src="/images/tire-page-banner.jpeg"></img>
  </div>


  </Layout>
)