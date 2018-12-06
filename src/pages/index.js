import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <Layout>
  <div style={{ color: `purple` }}>
    <Header headerText="Home Page"/>
    <p>Contact Us Now!</p>
    <img src="/images/Lopez_Tires_Logo_bluetracks.png"/>
    <blockquote>
        <p>
          Welcome to the future site of Lopez Tires! 
        </p>
       
      </blockquote>
  </div>
  </Layout>
)