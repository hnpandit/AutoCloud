import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./UserRegistration.css";
import API from "../../util/api";

//* global gapi */

class UserRegistration extends Component {
  state = {
    userId: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",

    proceed: false,
    cancel: false
  };
  
  setProceed = () => {
    this.setState({
      proceed: true
    });
  };

  renderProceed = () => {
    if (this.state.proceed) {
      return <Redirect to="/carProfile" />;
    }
  };

  setCancel = () => {
    this.setState({
      cancel: true
    })
  }

  renderCancel = () => {
    if (this.state.cancel) {
      this.signOut()
      return <Redirect to="/" />;
    }
  };
  
  signOut = () => {
    /*
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
      console.log("User signed out.");
    });
    */
    this.removeCookies();
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("userId");
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

  change = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.saveUser({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber
    })
      .then(res => {
        if (res.data._id) {
          this.setState({
            userId: res.data._id,
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "" 
          })
          sessionStorage.setItem("userId", res.data._id);
          this.setProceed();
          console.log("Logging created user: ", res);
        }
      })
      .catch(err => console.log("logging error: ", err));
  };

  render() {
    return (
      <div id="registrationPage">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Auto Cloud</h1>
              <p>Create Your Account</p>
              <form>
                <div className="form-group">
                  <input
                    name="firstName"
                    value={this.state.firstName}
                    onChange={e => this.change(e)}
                    type="text"
                    className="form-control"
                    id="first"
                    placeholder="First Name (required)"
                  />
                </div>

                <div className="form-group">
                  <input
                    name="lastName"
                    value={this.state.lastName}
                    onChange={e => this.change(e)}
                    type="text"
                    className="form-control"
                    placeholder="Last Name (required)"
                    id="last"
                  />
                </div>

                <div className="form-group">
                  <input
                    name="email"
                    value={this.state.email}
                    onChange={e => this.change(e)}
                    type="email"
                    className="form-control"
                    placeholder="E-Mail (required)"
                    id="email"
                  />
                </div>

                <div className="form-group">
                  <input
                    name="phoneNumber"
                    value={this.state.phoneNumber}
                    onChange={e => this.change(e)}
                    type="tel"
                    className="form-control"
                    placeholder="Phone number (required)"
                    id="phone-number"
                  />
                </div>

                {this.renderProceed()}
                <button
                  onClick={this.handleFormSubmit}
                  type="submit"
                  className="btn"
                >
                  Create Account
                </button>
                
                {this.renderCancel()}
                <button
                  onClick={this.setCancel}
                  type="submit"
                  className="btn"
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserRegistration;
