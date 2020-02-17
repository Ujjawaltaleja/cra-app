import React, { Component } from 'react';
import './App.css';
import FirstChild from './firstchild'
import BrotherOfFirst from './brotheroffirst';
class  App extends Component {
  state={
    data:'parent'
  } 
  clickParent=(newState)=>{
    this.setState({data:newState});
  }
  render(){
    return (
      <div> App
        <button>{this.state.data}</button>
        <header className="App-header">
          <FirstChild clickFirst={this.clickParent} />
          <BrotherOfFirst clickBrotherOfFirst={this.clickParent}  data={this.state.data} />
        </header>
      </div>
    );
  }
}

export default App;
