import React from 'react';
import { Component } from 'react';
class SecondChild extends Component {
  state = {
    data: 'SecondChild'
  }
  constructor(props){
    super(props);
    this.classfunctionNotInArrowFunis=this.classfunctionNotInArrowFunis.bind(this);
  }
  clickSecondChild = newState => {
    this.props.clickSecond(newState);
  }
  classfunctionis() {
    debugger;
    this.setState(state => ({
      data: state.data+4
    }));
  }
  classfunctionNotInArrowFunis() {
    debugger;
    console.log(" not arrow state"+this.state.data);
  }
  classfunctionInArrowFunis= (e)=>{
    
    console.log("arrow state"+this.state.data+e);
  }
  fakestate={data:"fakedata second child"};
  render() {
    console.log("secondchild"+this.state.data);
    return (
      <div className="App" > SecondChild click for output
        <button onClick={() => { this.props.clickSecond(this.state.data); }}>{this.state.data}</button>
    <button onClick={() => { this.classfunctionis(); }}>Component button {this.fakestate.data}</button>
    <button onClick= { this.classfunctionNotInArrowFunis }>not an arrow fun</button>
    <button onClick= { this.classfunctionInArrowFunis(34) }> an arrow fun</button>

      </div>
    );
  }
}
export default SecondChild;
