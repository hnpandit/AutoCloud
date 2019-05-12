import React, { Component } from "react";
import { Redirect } from "react-router-dom";
//import API from "../../util/api";
import "./UserLogin.css";

/* global gapi */

class UserLogin extends Component {
  state = {
    userEmail: sessionStorage.getItem("email"),
    redirect: false
  };

  componentDidMount() {
    if (this.state.userEmail) {
      //this.setRedirect()
    }
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  takeToDashboard = () => {
    console.log("logging this.state.userEmail: ", this.state.userEmail);
    if (this.state.userEmail) {
      return <Redirect to="/dashboard" />;
    /*
    API.getUsers({}).then(res => {
      res.data.forEach(element => {
        if (element.email === this.state.userEmail) {
          console.log("email matched database: ", element.email);
          return <Redirect to="/dashboard" />;
        } else {
          return <Redirect to="/register" />;
        }
      });
    });
    */
    }
  };

  takeToRegister = () => {
    if (this.state.redirect) return <Redirect to="/register" />;
  };
  
  
  signOut = () => {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
      console.log("User signed out.");
    });
    this.removeCookies();
    sessionStorage.removeItem("email");
  };

  //Added to remove cookies from browser
  removeCookies = () => {
    var res = document.cookie;
    var multiple = res.split(";");
    for (var i = 0; i < multiple.length; i++) {
      var key = multiple[i].split("=");
      document.cookie = key[0] + " =; expires = Thu, 01 Jan 1970 00:00:00 UTC";
    }
  };

  

  render() {
    return (
      <div id="registrationPage">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Welcome to </h3>
              <h1>Auto Cloud</h1>

              {/*This button sings user with google*/}
              <div
                className="g-signin2"
                id="google-btn"
                data-onsuccess="onSignIn"
              />
              {this.takeToDashboard()}

              <br />

              {/*Added signout button for testing purposes*/}
              
              <a href="/" onClick={this.signOut}>
                Sign out
              </a>
              

              {/*This button takes user to registration page*/}
              {this.takeToRegister()}
              <button onClick={this.setRedirect}>Register</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserLogin;
