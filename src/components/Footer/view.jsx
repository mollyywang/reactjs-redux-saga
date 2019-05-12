import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import './index.less'


class Footer extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    name: ''
  }

  addClass = (tab, url) => {
    if (url.pathname == tab) {
      return 'tab-' + tab.replace('/', '') + " cur"
    } else {
      return 'tab-' + tab.replace('/', '')
    }
  }

  render() {
    const { name, url } = this.props;
    return (
      <div className="footer">
        <div className="tab"><Link to={{ pathname: "/search", hash: name }} ><i className={this.addClass("/search", url)} /></Link></div>
        <div className="tab"><Link to={{ pathname: "/star" }} ><i className={this.addClass("/star", url)} /></Link></div>
      </div>
    );
  }
}

Footer.propTypes = {
  name: PropTypes.string,
  url: PropTypes.object.isRequired
}

export default Footer;



