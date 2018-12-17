import React from "react"
import { Link, Container } from "gatsby"
import StickyFooter from "react-sticky-footer"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)


export default ({ children }) => (
<div>
<Container style={{ margin: `0 auto`, maxWidth: `960`,padding: `0px 1.0875rem 1.45rem`, paddingTop: 0, display: `block` }}>
      <div style={{ height: `38vh` }}>
      <banner>
        <div>
        <button><a href="/"><img src="/images/LopezTires_newLogo.png" alt="lopez tires utah" onClick="/" style={{ paddingTop: `1em` }}></img></a></button>
        <img src="/images/Lopez_Tires_Logo_bluetrack.png" style={{ padding:`0em`, float: `right`, maxWidth: `380`, position: `absolute`}}></img>
        </Container>
      </banner>
      </div>
      <header style={{ marginBottom: `1.5rem`, marginTop: `1.5rem`}}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}></h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right`, display: `relative` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    {children}
  </div>
<StickyFooter
    bottomThreshold={50}
    normalStyles={{
    backgroundColor: "rgba(255,0,0)",
    padding: "2rem"
    }}
    stickyStyles={{
    backgroundColor: "rgba(255,255,255,.8)",
    padding: "2rem"
    }}
>
    All rights reserved Lopez Tires 2018 // Copyright // Facebook link
</StickyFooter>
</div>


)