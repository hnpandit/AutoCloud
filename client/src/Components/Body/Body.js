import React from "react";
import "./Body.css";

function Body(props) {
  return (
      <main role="main"  className="main">
            {props.children}
      </main>
  )
}

export default Body;
