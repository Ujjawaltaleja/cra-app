import React from 'react';
import  { Component } from 'react';
import ChildOfBrother from './childofbrother';
class  BrotherOfFirst extends Component {
  state={
    data:'BrotherOfFirst'
  }
  constructor(props) {
    super(props);
    console.log("constructor");
    this.child = React.createRef();
  }
  componentWillMount(){
    console.log("componentWillMount");
  }
  componentDidMount(){
    console.log("componentDidMount");
  }
  componentWillReceiveProps(){
    console.log("componentWillReceiveProps");
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate");
    return 1;
  }
  componentWillUpdate(){
    console.log("componentWillUpdate");
  }
  componentDidUpdate(){
    console.log("componentDidUpdate");
  }
  componentWillUnmount(){
    console.log("componentWillUnmount");
  }
  passchildfuntoparent(newState){
    this.child.current.passchildfuntoparent(newState);
  }
    render(){
    console.log("render");
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
