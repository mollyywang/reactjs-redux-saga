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

  componentDidUpdate = () => {
  }

  componentDidMount() {
    const { actions, isLogin } = this.props;
    if (isLogin) {
      actions.getStar_request();
    }
  }

  render() {
    const { isLogin, items, processing } = this.props;
    return (
      <div className="star-con">
        {items.length === 0 && (
          <h2 className="alert-info">购物车为空</h2>
        )}
        {isLogin ? "" : <Link to={{ pathname: "/user/login" }} ><Button type="primary">登录查看购物车</Button></Link>}
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
