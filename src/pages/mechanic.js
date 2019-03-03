import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import { Link } from 'gatsby'


export default () => (
  <Layout>
  <div style={{ color: `black` }}>
    <Header headerText="Automotive Services" />
    <img src="/images/LopezTires_enginePicture.jpg" style={{ width: `993px`, height: `500px`, alignContent: `center`}}></img>
    <p>Give us a call today!</p>
    <p>801-883-9519</p>
  </div>
  </Layout>
)