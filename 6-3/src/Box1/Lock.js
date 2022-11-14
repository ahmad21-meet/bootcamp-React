import { useState } from "react"
import React from 'react'
import  './b1.css'

function Lock() {
  const [counter , SetCounter] = useState(0);
  const [color, setColor] = useState('black')


  const increase = () =>{
    if(counter <= 9){
   SetCounter( count  => count + 1);
   stam(counter)
  }
}
  const decrease = (style) => {
    if (counter >-10) {
      SetCounter(count => count - 1);
      stam(counter)
    }
  };
  const reset = () =>{
    SetCounter(count => count = 0);
    stam(counter)
  }
const stam = (num) =>{
  if (num > 0) {
    setColor('blue');
  } else if (num < 0){
    setColor("red");
  }  else if (num == 0){
    setColor('black');
  }
  return num ;
}

  return (
    <div> 
          <div className="counter">
      <h1>React Counter</h1>
      <label style={{color:color}}>{counter}</label>
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