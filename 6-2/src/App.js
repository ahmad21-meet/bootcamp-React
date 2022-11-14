import { useState } from "react";
import "./App.css";
import React from "react";
const Box = ({ classProps }) => {
  const [color, setColor] = useState("yellow");
  return (
    <div
      style={{
        height: "100px",
        width: "100px",
        backgroundColor: color,
      }}
      className={classProps}
    ></div>
  );
};
const App = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(prevValue => !prevValue)}>Toggle</button>
       {show && <Box />}
    </>
  );
};
export default App;