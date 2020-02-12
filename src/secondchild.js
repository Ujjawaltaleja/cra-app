import React from 'react';
import  { Component } from 'react';
class  SecondChild extends Component {
  state={
    data:'SecondChild'
  }
    render(){
      return (
        <div className="App" >
        <button onClick=  {this.props.clickSecond(this.state.data)}>{this.state.data}</button>
        </div>
      );
    }
  }
export default SecondChild;
