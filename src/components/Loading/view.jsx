import React, { Component } from "react";

class Loading extends Component {

  constructor(props){
    super(props)
  }

  render() {
      const { error,pastDelay } = this.props;
      if (error) {
        return (<div>Error!</div>);
      } else if (pastDelay) {
        return (<div>Loading...</div>);
      } else {
        return null;
      }
  }
}


export default Loading;
