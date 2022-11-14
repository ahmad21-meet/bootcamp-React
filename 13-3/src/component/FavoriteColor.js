import React, { useState } from 'react';
import  '../component/box.css';
import  genColor  from '../component/genColor';


function App() {
    const { color, generateColor }   = genColor();
       const [circle, setCircle] = useState(null);

   
    

    setTimeout(() => {
        generateColor()
},500)

React.useEffect(() => {
setTimeout(() => {
  setCircle("50%");
},5000)
})

  return (
    <div
    className='box'
      style={{
        height: '500px',
         width: '1000px',
        backgroundColor: "#" + color,
        borderRadius: circle

      }}
    >
      
    </div>
  );
}
  
export default App;