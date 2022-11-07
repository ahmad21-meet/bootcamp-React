import logo from './logo-s.svg';
import './App.css';
import React, { Component }  from 'react';


function App() {
  return (
    <div className="App">

      <header className="App-header">
        <h1> AppleSeeds </h1>
        <br></br>
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <br></br>
        <p> welcome to appleseeds</p>
        <a
          className="App-link"
          href="https://appleseeds.org.il/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click me
        </a>
      </header>
    </div>
  );
}


export default App;
