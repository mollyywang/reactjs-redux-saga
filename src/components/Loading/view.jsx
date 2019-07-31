import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

function Loading({ error = '', pastDelay = false }) {
  return (
    <Fragment>
      {error && <div>Error!</div>}
      {pastDelay && <div>Loading...</div>}
    </Fragment>
  )
}
Loading.defaultProps = {
  error: '',
}
Loading.propTypes = {
  error: PropTypes.string,
  pastDelay: PropTypes.bool.isRequired,
}

export default Loading
