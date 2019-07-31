import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './index.less'

const addClass = (tab, url) => {
  if (url.pathname === tab) {
    return `tab-${tab.replace('/', '')} cur`
  }
  return `tab-${tab.replace('/', '')}`
}

function Footer({ name = '', url = '' }) {
  return (
    <div className='footer'>
      <div className='tab'><Link to={{ pathname: '/search', hash: name }}><i className={addClass('/search', url)} /></Link></div>
      <div className='tab'><Link to={{ pathname: '/star' }}><i className={addClass('/star', url)} /></Link></div>
    </div>
  )
}
Footer.defaultProps = {
  name: '',
}
Footer.propTypes = {
  name: PropTypes.string,
  url: PropTypes.object.isRequired,
}

export default Footer
