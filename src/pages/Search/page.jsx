import React, { Component } from "react";
import { Search } from "../../features/Search";
import { Productlist } from "../../features/Productlist";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";
import "./index.less";

class SearchPage extends Component {
  render() {
    return (
      <div className="search-wrap">
        <header>
          <h2>
            Price Comparison
            <Link to={{ pathname: "/user/me" }}>
              <i className="btn-mine" />
            </Link>
          </h2>
        </header>
        <section className="search-main">
          <Search hash={this.props.location.hash} />
          <Productlist />
        </section>
        <Footer url={this.props.location} name={this.props.location.hash} />
      </div>
    );
  }
}

export default SearchPage;
