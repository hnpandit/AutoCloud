import React, { Component } from "react";
import { Redirect } from "react-router-dom";
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

  renderRedirect = () => {
    console.log("logging this.state.userEmail: ", this.state.userEmail);
    if (this.state.userEmail) {
      return <Redirect to="/dashboard" />;
    } 
  };

  /*
  change = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  */
  onSignIn = googleUser => {
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log("Name: " + profile.getName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
    sessionStorage.setItem("email", profile.getEmail());
    this.setState({
      userEmail: sessionStorage.getItem("email"),
      redirect: true
    });
    document.location.reload()
    //window.location.reload()
    if (this.state.userEmail) {
      return <Redirect to="/dashboard" />;
    } 
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

  takeToRegister = () => {
    if (this.state.redirect)
    return <Redirect to="/register" />;
  }

  

  signOut = () => {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
      console.log("User signed out.");
    });
    this.removeCookies();
    sessionStorage.removeItem("email");
  };

  render() {
    return (
      <div id="registrationPage">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Welcome to </h3>
              <h1>Auto Cloud</h1>
              <div
                //onClick={this.setRedirect}
                className="g-signin2"
                id="google-btn"
                data-onsuccess="onSignIn"
              />
              {this.renderRedirect()}
              <br />
              {/*Added signout button for testing purposes*/}
              <a href="/" onClick={this.signOut}>
                Sign out
              </a>
              {this.takeToRegister()}
              <a href="/" onClick={this.setRedirect}>
                Register
              </a>
    
              {/* <p>Log in</p> */}
              {/*
              <form>
                <div className="form-group">
                  <input
                    name="username"
                    value={this.state.username}
                    onChange={e => this.change(e)}
                    type="email"
                    className="form-control"
                    placeholder="Username"
                    id="username"
                  />
                </div>

                <div className="form-group">
                  <input
                    name="password"
                    value={this.state.password}
                    onChange={e => this.change(e)}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    id="password"
                  />
                </div>

                <button
                  onClick={e => this.onSubmit(e)}
                  type="submit"
                  className="btn"
                >
                  Log In
                </button>
                <div class="g-signin2" data-onsuccess="onSignIn"></div>
              </form>
              <a href="/register">Register</a>
              */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserLogin;
