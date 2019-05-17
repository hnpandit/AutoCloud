import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../../util/api";
import "./UserLogin.css";

//* global gapi */

class UserLogin extends Component {
  state = {
    //userEmail: sessionStorage.getItem("email"),
    email: "",
    password: "",
    proceed: false,
  };

  setProceed = () => {
    this.setState({
      proceed: true
    });
  };

  change = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.loginUser({
      email: this.state.email,
      password: this.state.password
    })
      .then(res => {
        console.log("Logging res @ UserLogin.js: ", res);
        if (res.data.token) {
          this.setState({
            token: res.data.token
          })
          sessionStorage.setItem("userToken", res.data.token);
          this.setProceed();
        } 
      })
      .catch(err => console.log("logging error: ", err));
  };

  takeToDashboard = () => {
    if (this.state.token) {
      return <Redirect to="/dashboard" />;
    }
  };

  takeToRegister = () => {
    if (this.state.redirect) return <Redirect to="/register" />;
  };

  render() {
    return (
      <div id="registrationPage">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Welcome to </h3>
              <h1>Auto Cloud</h1>
              <div className="form-group">
                <input
                  name="email"
                  value={this.state.email}
                  onChange={e => this.change(e)}
                  type="email"
                  required
                  className="form-control"
                  placeholder="E-Mail (required)"
                  id="email"
                />
              </div>

              <div className="form-group">
                <input
                  name="password"
                  value={this.state.password}
                  onChange={e => this.change(e)}
                  type="password"
                  required
                  className="form-control"
                  placeholder="Password (required)"
                  id="password"
                />
              </div>

              {/*This button sings user with google*/}
              {/*}
              <div
                className="g-signin2"
                id="google-btn"
                data-onsuccess="onSignIn"
              />
              */}

              {this.takeToDashboard()}
              <button onClick={this.handleFormSubmit} type="submit">Submit</button>

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
