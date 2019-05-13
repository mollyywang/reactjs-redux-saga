import React, { Component } from 'react';
import Me from "../../features/Me";
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

import './index.less'

class MePage extends Component {

  render() {
    return (
      <div className='user-wrap'>
        <header><h2>Price Comparison<Link to={{ pathname: "/user/me" }} ><i className='btn-mine cur' /></Link></h2></header>
        <section className='user-main'>
          <Me />
        </section>
        <Footer url={this.props.location} />
      </div>
    );
  }
}

export default MePage;
