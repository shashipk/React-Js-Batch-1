import React from "react";
import B from "./B";
export default function A({ handleClick }){
    return(
      <>
          <span> Hello from A </span>
          <br/>
          <B/>
          <button onClick={handleClick}> Click Me</button>

      </>
    );
}