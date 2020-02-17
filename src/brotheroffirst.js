import React from 'react';
import  { Component } from 'react';
class  BrotherOfFirst extends Component {
  state={
    data:'BrotherOfFirst'
  }
    render(){
      
      return (
        <div className="App" > BrotherOfFirst
        <button onClick= {() => {this.props.clickBrotherOfFirst(this.state.data)}}>{this.props.data}</button>
        </div>
      );
    }
  }
export default BrotherOfFirst;
