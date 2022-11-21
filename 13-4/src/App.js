import React, { useState, useEffect } from 'react';
import FavoriteColor from './component/FavoriteColor';



function App() {
  const arr = ["spinner0", "spinner1", "spinner2"];
  let random = Math.floor(Math.random() * 3);

  const [timer, setTimer] = useState(true);
  useEffect(() => {
     setTimeout(() => {
        setTimer((prev) => !prev);
     }, 3000);
  }, []);
  return <div className="App">{timer && <FavoriteColor cls={arr[random]} />}</div>;
}

export default App;