import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import UserRegistration from "./Pages/UserRegistration/UserRegistration";
import Dashboard from "./Pages/Dashboard/Dashboard";
import CarProfile from "./Pages/CarProfile/CarProfile";
//import UserLogin from "./Pages/UserLogin/UserLogin";
//import CarProfile from "./Pages/CarProfile/CarProfile";

class App extends Component {
  onSubmit = fields => {
    console.log(fields);
  };
  submitCarForm = fields => {
    console.log(fields);
  };

  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={UserRegistration}/>
        <Route path="/carProfile" component={CarProfile}/>
        <Route path="/dashboard" component={Dashboard}/>
        
        {/* <UserRegistration onSubmit={fields => this.onSubmit(fields)} /> */}
      </BrowserRouter>
    );
  }
}

export default App;
