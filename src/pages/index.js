import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <Layout>
  <div style={{ color: `black` }}>
    <Header headerText="Home Page"/>
    <p>Contact Us Now!</p>
    <blockquote>
        <p>
          Welcome to the future site of Lopez Tires! 
        </p>
       
      </blockquote>
  </div>
  </Layout>
)