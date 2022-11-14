import { useState } from "react"
import React from 'react'
import  './b1.css'

function Lock() {
  const [counter , SetCounter] = useState(0);

  const increase = () =>{
   SetCounter( count  => count + 1);
  }
  const reset = () =>{
    useState(0)
  }

  const decrease = () => {
    if (counter > 0) {
      SetCounter(count => count - 1);
    }
  };
  return (
    <div> 
          <div className="counter">
      <h1>React Counter</h1>
      <span className="counter__output">{counter}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={increase}>+</button>
        <button className="control__btn" onClick={decrease}>-</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>
    </div>
    </div>
  )
}

export default Lock