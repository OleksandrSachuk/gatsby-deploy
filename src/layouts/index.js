import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from './header'
import Navigation from './nav/nav'

import '../assets/css/bootstrap-theme.min.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/index.css'
import '../assets/css/custom.css'

const TemplateWrapper = ({children}) =>
  <div>
    <Helmet
      title="Sachuk Oleksandr page"
      meta={[
        {name: 'description', content: 'Sample'},
        {name: 'keywords', content: 'sample, something'},
      ]}
    />
    <Header/>
    <Navigation/>
    <div
      style={{
        margin: '0 auto',
        // maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>


TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
