import { useState } from "react"
import React from 'react'
import  './b1.css'
class Lock extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      inc:0  
    }
}

  increase = () =>{
    if(this.state.inc <= 9){
      this.setState({ inc: this.state.inc + 1 });
  }
}
   decrease = (style) => {
    if (this.state.inc >-10) {
      this.setState({ inc: this.state.inc - 1 });
    }
  };
   reset = () =>{
    this.setState({ inc: this.state.inc ==0});
  }

render() {

  return (
    <div> 
          <div className="counter">
      <h1>React Counter</h1>
      <label >{this.state.inc}</label>
      <div className="btn__container">
        <button className="control__btn" onClick={this.increase}>+</button>
        <button className="control__btn" onClick={this.decrease}>-</button>
        <button className="reset" onClick={this.reset}>Reset</button>
      </div>
    </div>
    </div>
  );
}
}
export default Lock;