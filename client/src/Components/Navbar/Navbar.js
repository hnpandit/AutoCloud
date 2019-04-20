import React from "react";
import "./Navbar.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "orange"}}>
      <h1 id="logo">Auto Cloud</h1>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/profile">
              profile <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/cars">
              cars
            </a>
          </li>
        </ul>
        <span className="navbar-text">
          <a className="nav-link" href="/logOut">
            Log out
          </a>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
