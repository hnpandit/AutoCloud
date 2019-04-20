import React, { Component } from "react";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import UserRegistration from "./Pages/UserRegistration/UserRegistration";
import Dashboard from "./Pages/Dashboard/Dashboard";
//import CarProfile from "./Pages/CarProfile/CarProfile";
//import Header from "./Components/Header/Header";
//import Body from "./Components/Body/Body";
//import Footer from "./Components/Footer/Footer";

class App extends Component {
  onSubmit = fields => {
    console.log(fields);
  };
  submitCarForm = fields => {
    console.log(fields);
  };

  render() {
    return (
      <React.Fragment>
        
          <UserRegistration onSubmit={fields => this.onSubmit(fields)} />
        
          <Dashboard/>

      </React.Fragment>
    );
  }
}

export default App;
