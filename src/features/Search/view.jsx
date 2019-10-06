import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Icon, Input, Button } from 'antd';

import "./view.less";

class Search extends Component {
  static defaultProps = {
    name: ''
  }

  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  componentDidUpdate = () => {
    //if users update the url,do search 用户手动更新url链接上的搜索名，执行搜索操作
    const { hash, name, actions } = this.props;
    if (name !== "" && name !== hash.substr(1)) {
      actions.changeName(hash.substr(1));
      actions.productsreset();
      actions.productsGet(hash.substr(1));
    }
  }

  componentDidMount() {
    //do search when opening page first time 第一次打开页面url上面有搜索参数，执行搜索操作
    const { hash, actions } = this.props;
    if (hash !== '') {
      actions.changeName(hash.substr(1));
      actions.productsreset();
      actions.productsGet(hash.substr(1));
    }
  }

  handleSubmit = (e) => {
    //do search whenever click the button 点击一次按钮，执行一次搜索
    const { name, actions } = this.props;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err && (name !== values.name)) {
        actions.changeName(values.name);
        actions.productsreset();
        actions.productsGet(values.name);
      }
      this.context.router.history.push('/search#' + values.name)
    });
  }

  searchDetail = (name, allNums) => {
    if (allNums === 0) {
      return ('找到最便宜的商品')
    } else {
      return (<span className="search-detail">有<b>{allNums}</b> 个结果，关于 <b>{name}</b></span>)
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { name, allNums } = this.props;
    return (
      <div className={name === "" ? "search-form" : "search-form up"}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item className="search-in">
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input your product name!' }],
            })(
              <Input prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="产品名称" />
            )}
          </Form.Item>
          <Form.Item className="search-button">
            {this.searchDetail(name, allNums)}
            <Button type="primary" htmlType="submit" className="btn-search">
              搜索
                        </Button>
          </Form.Item>
        </Form>
      </div>)
  }
}

const SearchForm = Form.create(
  {
    name: 'normal_search',
    //keep the value in the input area the same as the url's hash 保持输入框里面的值跟url链接上的参数一致
    mapPropsToFields(props) {
      return {
        name: Form.createFormField({
          ...props.name,
          value: props.name,
        }),
      };
    }
  }
)(Search);

Search.propTypes = {
  name: PropTypes.string,
  allNums: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};

export default SearchForm;
