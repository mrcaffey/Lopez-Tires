import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

export default props => <h1>{props.headerText}</h1>

const Header = ({ }) => (
  <div
    style={{
      background: 'red',
      marginBottom: '0rem',
      postion: 'absolute'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {}
        </Link>
      </h1>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

