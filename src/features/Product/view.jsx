import React, { Component } from "react";
import PropTypes from "prop-types";
import { Icon, Popconfirm } from 'antd';
import "./view.less";

class Product extends Component {
  static defaultProps = {
  }

  componentDidUpdate = () => {
    //
  }

  componentDidMount() {

  }

  handleStarClick = () => {
    const { _id, name, price, image, urllink, from, isInStar, actions } = this.props
    isInStar ? actions.removeStar_request(_id) : actions.addStar_request({ _id: _id, name: name, price: price, image: image, urllink: urllink, from: from })
  }

  confirm = () => {
    this.handleStarClick();///
  }

  isDoDelete = (typeS, isInStar) => {
    if (typeS) {
      return (
        <Popconfirm title="Detele item ?" okText="Yes" cancelText="No" onConfirm={this.confirm} >
          <button
            className="btn-delete"
          ><i className='delete' />
          </button>
        </Popconfirm>)
    } else {
      return (
        <button
          className="btn-star"
          onClick={this.handleStarClick}
        ><i className={isInStar ? 'star star-filled' : 'star'} />
        </button>)
    }
  }



  render() {
    const { name, price, image, urllink, from, isInStar, typeS } = this.props;
    return (
      <div className="product-con" data={urllink}>
        <div className={'tag ' + from}></div>
        <b style={{ backgroundImage: 'url(' + image + ')' }} alt="product" className="pic" />
        <div className="detail">
          <p className="name">{name}</p>
          <p className="price"><Icon type="pay-circle" /> {price} AU </p>
          {this.isDoDelete(typeS, isInStar)}
        </div>
      </div>
    )
  }
}

Product.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  urllink: PropTypes.string,
  from: PropTypes.string.isRequired,
  isInStar: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
};

export default Product;
