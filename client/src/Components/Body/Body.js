import React from "react";
import "./Body.css";

function Body(props) {
  return (
      <main   className="main">
            {props.children}
      </main>
  )
}

export default Body;
