import React, { Component } from "react";
import PropTypes from "prop-types";
import { Spin, Button } from 'antd';
import { Link } from 'react-router-dom'
import Product from '../Product';

import "./view.less";

class Star extends Component {
  static defaultProps = {
    items: []
  }

  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  componentDidUpdate = () => {
    //
  }

  componentDidMount() {
    const { actions, isLogin } = this.props;
    console.log(isLogin);
    if (isLogin) {
      actions.getStar_request();
    }
  }

  render() {
    const { isLogin, items, processing } = this.props;
    return (
      <div className="star-con">
        {items.length === 0 && (
          <h2 className="alert-info">Star List is empty</h2>
        )}
        {isLogin ? "" : <Link to={{ pathname: "/user/login" }} ><Button type="primary">login to get your starlist</Button></Link>}
        <Spin size="large" spinning={processing} />
        <ul className="starlist-item">
          {items.length > 0 && items.map(product => (
            <li key={product._id} className="starlist-item">
              <Product {...product} typeS="delete" />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

Star.propTypes = {
  items: PropTypes.array,
  actions: PropTypes.object.isRequired
};

export default Star;
