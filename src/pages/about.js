import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <Layout>
  <div style={{ color: `black` }}>
    <Header headerText="Who Are We?" />  
    <div style = {{ alignContent: `right` }}>
    <img src="/images/checkmeter.jpg"></img>
    </div>
    <div style = {{ alignContent: `left` }}>
    <h3>We are an auto mechanic shop serving Salt Lake City and surrounding areas.</h3>
    <p>Along with selling tires and used rim sales, we provide service on fuel pumps, water pumps, 
        clutches, transmissions and timing belts. We also offer tune ups, engine and
        suspension work for your vehicle.
    </p>

    <p>We'd love to get to work for you today!</p>
    </div>
  </div>
  </Layout>
)