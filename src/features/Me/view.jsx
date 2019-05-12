import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Icon } from "antd";
import { Link } from 'react-router-dom'

import "./view.less";

class Me extends Component {
  constructor(props){
    super(props)
  }
  
  static defaultProps = {
      username: ''
  }

  componentDidUpdate = () => {
  }

  componentDidMount(){
  }

  handleLogout = () => {
    const { actions } = this.props
    actions.logout();
  }

  render() {
    const { username } = this.props;
    return (
      <div className="user-detail">
          <b className="user-pic" style={{ backgroundImage: 'url(../../images/avatar.png)' }} ></b>
          <h1><Icon type="user" />{username}</h1>
          <p><Link to={{ pathname: "/search" }} ><Button type="primary">click to search</Button></Link></p>
          <p><Link to={{ pathname: "/star" }} ><Button type="primary">see your starlist</Button></Link></p>
          <p><Button onClick={this.handleLogout}>logout</Button></p>
      </div>)
  }
}

Me.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Me;
