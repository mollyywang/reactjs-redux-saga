import React, { Component } from "react";
import Star from "../../features/Star";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import "./index.less";

class StarPage extends Component {
  render() {
    return (
      <div className="star-wrap">
        <header>
          <h2>
            购物比价网站
            <Link to={{ pathname: "/user/me" }}>
              <i className="btn-mine" />
            </Link>
          </h2>
        </header>
        <section className="star-main">
          <Star />
        </section>
        <Footer url={this.props.location} />
      </div>
    );
  }
}

export default StarPage;
