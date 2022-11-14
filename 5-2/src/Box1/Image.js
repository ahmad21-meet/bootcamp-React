import React from "react";

function Image(props){
    return (
        <div>
          {console.log(props)}
          <img src={props.img}></img>
        </div>
    )
}
export default Image