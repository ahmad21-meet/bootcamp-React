
import React, {useRef} from "react";
import "./App.css";
import Images from "./Components/Images";
import image1 from "./Components/image1.jpeg";
import image1bw from "./Components/BlackAndWihte1.jpeg";

const App = () => {
   const getRef1 = useRef();

   const hoverIn = (getRef, coloredImg) => {
      getRef.current.src = coloredImg;
   };
   const hoverOut = (getRef, img) => {
      getRef.current.src = img;
   };
   return (
      <div className="App">
         <header className="App-header">
            <Images coloredImg={image1} getRef={getRef1} img={image1bw} hoverIn={hoverIn} hoverOut={hoverOut}></Images>
            </header>
      </div>
   );
};

export default App;