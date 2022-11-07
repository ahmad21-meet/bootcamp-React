import logo from './logo-s.svg';
import './App.css';
import React, { Component }  from 'react';


function App() {
  const data = ["hello", "world"];
 const number1 = 5;
const number2 =6;
const string = "I love React!"
  return (
    <div>
      <h1> {data[0]}  {data[1]}</h1>

      <h2> the sum of {number1} + {number2} = {number1+number2}</h2>

      <h2>  The String length is {string.length}</h2>

    </div>
  )
  }


export default App;
