import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Importing pages
import UserRegistration from "./Pages/UserRegistration/UserRegistration";
import UserLogin from "./Pages/UserLogin/UserLogin";
import CarProfile from "./Pages/CarProfile/CarProfile";
import DocumentProfile from "./Pages/DocumentProfile/DocumentProfile";
import Dashboard from "./Pages/Dashboard/Dashboard";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import UserSignup from "./Pages/UserSignup/UserSignup";

// Importing App css
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={UserLogin} />
          <Route path="/signup" component={UserSignup} />
          <Route path="/register" component={UserRegistration} />
          <Route path="/carProfile" component={CarProfile} />
          <Route path="/documentProfile" component={DocumentProfile} />
          <Route path="/dashboard" component={Dashboard} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
