import React, {useContext} from "react";
import {ctxArr} from "../App";

const Grandson = () => {
   const {state} = useContext(ctxArr);
   return (
      <div>
         Grandson
         {console.log("Grandson")}
         <div>
            Grandson's Gifts:
            {state.map((els) => {
               return <h3 key={els}>{els}</h3>;
            })}
         </div>
      </div>
   );
};

export default Grandson;