import React from "react";
import "./Body.css";

function Body(props) {
  return (
      <main role="main" className="flex-shrink-0">
        <div className="container">
            {props.children}
        </div>
      </main>
  )
}

export default Body;
