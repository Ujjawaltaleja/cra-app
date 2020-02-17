import React, { Component } from 'react';
import './App.css';
import FirstChild from './firstchild'
import BrotherOfFirst from './brotheroffirst';
class  App extends Component {
  state={
    data:'parent'
  } 
  constructor(props) {
    super(props);
    this.child = React.createRef();
  }
  
  fakestate={data:"fakedata App"};
  clickParent=(newState)=>{
    this.child.current.passchildfuntoparent(newState);
    this.setState({data:newState});
  }
  render(){
    return (
      <div> App
        <button>{this.state.data}</button>
        <header className="App-header">
          <FirstChild clickFirst={this.clickParent} />
          <BrotherOfFirst clickBrotherOfFirst={this.clickParent} ref={this.child} data={this.fakestate.data} />
        </header>
      </div>
    );
  }
}

export default App;
