import React from "react"
import Banner from "../components/banner"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <Layout>
  <Banner/>
  <div style={{ color: `black` }}>
    <Header headerText="Home Page"/>
    <p>Contact Us Now!</p>
    <blockquote>
        <p>
         Carousel Image here
        </p>
       
      </blockquote>
  </div>

  </Layout>
)