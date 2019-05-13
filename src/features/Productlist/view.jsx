import React, { Component } from "react";
import PropTypes from "prop-types";
import { debounce } from '../../utils/UiUtil'
import { Spin } from 'antd';
import Product from '../Product'
import "./view.less";

class Productlist extends Component {

  static defaultProps = {
    name: "",
    allNums: 0,
    index: 0,
    counts: 16
  }

  componentDidUpdate = () => {
    //
  }

  componentDidMount() {
    this.handleScroll = this.handleScroll.bind(this)
    //监听下拉加载
    const pro = this.refs.productlist;
    let fn = debounce(this.handleScroll, 100, pro);
    pro.addEventListener('touchmove', fn);
  }

  handleScroll = (dom) => {
    const { actions, name, index, allNums, processing } = this.props;
    if (!name || name === "") {
      console.log(name);
      return false;
    }

    //翻页 loading
    if (dom.scrollHeight - dom.scrollTop - dom.offsetHeight < 100) {
      if (index >= allNums) {
        console.log('processing end')
      } else {
        if (!!processing) {
          return false;
        }
        actions.request(name);
        return dom.scrollTop = dom.scrollHeight
      }
    }
  }


  render() {
    const { items, processing } = this.props;
    return (
      <ul className="productlist" ref="productlist">
        {items.map(product => (
          <li key={product._id} className="productlist-item">
            <Product {...product} />
          </li>
        ))}
        <Spin size="large" spinning={processing} />
      </ul>
    )
  }
}

Productlist.propTypes = {
  processing: PropTypes.bool.isRequired,
  name: PropTypes.string,
  items: PropTypes.array.isRequired,
  allNums: PropTypes.number,
  index: PropTypes.number,
  counts: PropTypes.number,
  actions: PropTypes.object.isRequired
};

export default Productlist;
