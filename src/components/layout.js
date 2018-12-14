import React from "react"
import { Link } from "gatsby"
import StickyFooter from "react-sticky-footer"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)


export default ({ children }) => (
<div>
<div style={{ margin: `0 auto`, maxWidth: 960, padding: `0px 1.0875rem 1.45rem`, paddingTop: 0, }}>
      <banner>
        <img src="/images/LopezTires_newLogo.png"></img>
        <img src="/images/LopezTires_tireTracks.png"></img>
      </banner>
      <header style={{ marginBottom: `1.5rem`, marginTop: `1.5rem`}}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}></h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
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