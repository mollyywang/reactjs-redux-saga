import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

function Loading({ error = '', pastDelay = false }) {
  return (
    <Fragment>
      {error && <div>发生错误Error!</div>}
      {pastDelay && <div>正在加载Loading...</div>}
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
