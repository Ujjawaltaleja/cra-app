import React from 'react';
import  { Component } from 'react';
class  SecondChild extends Component {
  state={
    data:'SecondChild'
  }
  clickSecondChild = newState => {
    this.props.clickSecond(newState);
  
};
constructor(props){
  
super(props);
};
 classfunctionis= function classfunction(){
   debugger;
  this.setState({data:26});
  
}
    render(){
      console.log("ujjawa");
      return (
        <div className="App" > SecondChild
        <button onClick= {() => {this.props.clickSecond(this.state.data); }}>{this.state.data}</button>
        <button onClick= {() => {this.classfunctionis(); }}>Component button</button>
        </div>
      );
    }
  }
export default SecondChild;
