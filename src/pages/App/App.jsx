import React, { Component } from "react";
import { Route, Switch } from "react-router";
import MePage from "../Me";
import UserPage from "../User";
import SearchPage from "../Search";
import StarPage from "../Star";
import userIsAuthenticated from "../../utils/AuthUtil";
import './App.less'




class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/search/:key" component={SearchPage} />
          <Route exact path="/user/login" component={UserPage} />
          {/* 没登录不允许访问 */}
          <Route exact path="/user/me" component={userIsAuthenticated(MePage)} />
          <Route exact path="/star" component={StarPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
