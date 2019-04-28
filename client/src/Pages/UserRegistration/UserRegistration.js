import React, { Component } from "react";
import {Redirect} from 'react-router-dom';
import "./UserRegistration.css";
import API from "../../util/api";

class UserRegistration extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    redirect: false
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/carProfile'/>
    }
  }
  /*
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  */

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
        if(res.data._id) {
          this.setRedirect();
        }
        console.log("Logging created user: ",res );
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

                {this.renderRedirect()}
                <button
                  onClick={this.handleFormSubmit}
                  type="submit"
                  className="btn"
                >
                  Create Account
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
