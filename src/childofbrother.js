import React from 'react';
import  { Component } from 'react';
class  ChildOfBrother extends Component {
  state={
    data:'ChildOfBrother'
  }
  passchildfuntoparent(newState){
    this.setState({data:newState});
  }
    render(){
      let x=this.state;
      return (
        <div className="App" > ChildOfBrother
        <button>{x.data}</button>
        </div>
      );
    }
  }
export default ChildOfBrother;
