import React from 'react'
import Link from 'gatsby-link'
import Avatar from './avatar'

import '../assets/css/index.css'

const Header = () =>
  <div
    style={{
      background: '#000080',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        padding: '1.45rem 1.0875rem',
      }}
      className="container"
    >
      <Avatar/>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Sachuk Oleksandr
        </Link>
      </h1>
    </div>
  </div>

export default Header
