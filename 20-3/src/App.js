import React, {Component} from "react";


class Todo extends Component {


  state = {second :60};
  stam =() =>{
    setTimeout(() =>{
      this.setState((prev) =>{
        return {second:prev.second - 0.5}
      });
    },1000);
  }

render() {
  return (
    <div>
      <input 
      value={this.state.second}
      type="number"
      min={1}
      onChange={({target: {value}}) => {
        this.setState((prev) =>{
          return {second : value}
        });
      }}
      />

<input 
      value={this.state.second /60}
      type="number"
      min={1}
      onChange={({target: {value}}) => {
        this.setState((prev) => {
           return {seconds: value};
        })
      }}
      />

      <input 
      value={this.state.second /3600}
      type="number"
      min={1}
      onChange={({target: {value}}) => {
        this.setState((prev) => {
           return {seconds: value};
        })
      }}
      />

    </div>

  )
}
}
export default Todo;