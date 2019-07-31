import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Me from '../../features/Me'
import Footer from '../../components/Footer'

import './index.less'

function MePage({ location }) {
  return (
    <div className='user-wrap'>
      <header><h2>Price Comparison<Link to={{ pathname: '/user/me' }}><i className='btn-mine cur' /></Link></h2></header>
      <section className='user-main'>
        <Me />
      </section>
      <Footer url={location} />
    </div>
  )
}

MePage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default MePage
