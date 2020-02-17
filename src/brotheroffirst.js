import React from 'react';
import  { Component } from 'react';
import ChildOfBrother from './childofbrother';
class  BrotherOfFirst extends Component {
  state={
    data:'BrotherOfFirst'
  }
  constructor(props) {
    super(props);
    this.child = React.createRef();
  }
  passchildfuntoparent(newState){
    this.child.current.passchildfuntoparent(newState);
  }
    render(){
      let x=this.state;
      return (
        <div className="App" > BrotherOfFirst
        <button onClick= {() => {this.props.clickBrotherOfFirst(this.state.data)}}>{x.data}</button>
        <ChildOfBrother ref={this.child} />
        </div>
      );
    }
  }
export default BrotherOfFirst;
