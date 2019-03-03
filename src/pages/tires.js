import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import { Link } from 'gatsby'

export default () => (
  <Layout>
  <div style={{ color: `black` }}>
    <Header headerText="New & Used Tires" />
    <img src="/images/workontires.jpg"></img>
    <p>Give us a call today!</p>
    <p>801-883-9519</p>
  </div>
  </Layout>
)