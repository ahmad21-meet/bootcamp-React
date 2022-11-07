import './App.css';
import React  from 'react';
import Box1 from './Box1/newbox1';
 import Box2 from './Box2/newbox2';
 import Box3 from './Box3/newbox3';
 import Box4 from './Box4/newbox4';



function App() {
  return(
  <div>
    <Box1>
       <Box2>
        <Box3>
          <Box4> </Box4>
          <Box4></Box4>
        </Box3>
      </Box2> 
    </Box1>
    </div>
  )
  }



export default App;
