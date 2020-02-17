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
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  // .then(response => response.json())
  // .then(json => this.setState({data:json.userId}))
    console.log("componentWillMount "+this.state.data);
  }
  componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  // .then(response => response.json())
  // .then(json => this.setState({data:json.userId}))
    console.log("componentDidMount");
  }
  componentWillReceiveProps(next,state){
    if(this.props.data!==next.data)
    console.log("componentWillReceiveProps");
    console.log(next);
    console.log(this.props);
    console.log("componentWillReceiveProps "+next+" propsnow "+this.props);
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
