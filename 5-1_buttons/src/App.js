import './App.css';
import React  from 'react';
import Q1 from './Box1/Q1';



function App() {
  return(
    <div className="App">
      <header className="App-header">
    
    
       <Q1 innerText={'important'} style={{fontWeight:'900'}}> </Q1>

       <Q1 innerText={' not important'} > </Q1>

      </header>
    </div>
  )
  }



export default App;
