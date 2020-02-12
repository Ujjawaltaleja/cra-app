import React from 'react';
import  { Component } from 'react';
class  BrotherOfFirst extends Component {
  state={
    data:'BrotherOfFirst'
  }
  clickBrotherOfFirst=(newState)=>{
    this.setState({data:newState});
  }
    render(){
      return (
        <div className="App" >
        <button>{this.state.data}</button>
        </div>
      );
    }
  }
export default BrotherOfFirst;
