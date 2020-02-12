import React from "react";
import SecondChild from "./secondchild";
import { Component } from "react";
class FirstChild extends Component {
  state = {
    data: "FirstChild"
  };
  clickFirst = newState => {
      this.props.clickFirst(newState);
    
  };
  render() {
    return (
      <div className="App">
        <button>{this.state.data}</button>
         <SecondChild clickSecond={this.clickFirst} />
      </div>
    );
  }
}
export default FirstChild;
