
import React, { Component } from "react";
import "./UserLogin.css";

class UserRegistration extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: ""
  };

  change = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    console.log(this.state);
  };

  render() {
    return (
      <div id="registrationPage">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Join Auto Cloud</h1>
              <form>
                <div className="form-group">
                  <input
                    name="firstName"
                    value={this.state.firstName}
                    onChange={e => this.change(e)}
                    type="text"
                    className="form-control"
                    id="first"
                    placeholder='First Name'
                  />
                </div>
                <div className="form-group">
                  <input

                    name="lastName"
                    value={this.state.lastName}
                    onChange={e => this.change(e)}
                    type="text"
                    className="form-control"
                    placeholder='Last Name'

                    id="last"
                  />
                </div>
                <div className="form-group">
                  <input
                    name="username"
                    value={this.state.username}
                    onChange={e => this.change(e)}
                    type="email"
                    className="form-control"
                    placeholder='Username'

                    id="username"
                  />
                </div>
                <div className="form-group">
                  <input
                    name="email"
                    value={this.state.email}
                    onChange={e => this.change(e)}
                    type="email"
                    className="form-control"
                    placeholder='E-Mail'
                    id="email"
                  />
                </div>
                <div className="form-group">
                  <input
                    name="password"
                    value={this.state.password}
                    onChange={e => this.change(e)}
                    type="password"
                    className="form-control"
                    placeholder='Password'

                    id="password"
                  />
                </div>
                <button
                  onClick={e => this.onSubmit(e)}
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
/*
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoginOpen: true, isRegister: false };
  }

  showLoginBox() {
    this.setState({ isLoginOpen: true, isRegisterOpen: false });
  }
  showRegisterBox() {
    this.setState({ isRegisterOpen: true, isLoginOpen: false });
  }
  render() {
    return (
      <div className="root-container">
        <div className="box-controller">
            <div className="controller" onClick={this.showLoginBox.bind(this)}>
                Login
            </div>
            <div className="controller" onClick={this.showRegisterBox.bind(this)}>
                Register
            </div>
        </div>
        <div className="box-container">

        
        </div>
      </div>
    );
  }
}

class LoginBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitLogin(e) {}

  render() {
    return (
      <div className="inner-container">
        <div className="box">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="login-input"
              name="username"
              placeholder="Username"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="login-input"
              name="password"
              placeholder="Password"
            />
          </div>

          <button
            type="button"
            className="login-btn"
            onClick={this.submitLogin.bind(this)}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}

class RegisterBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitRegister(e) {}

  render() {
    return (
      <div className="inner-container">
        <div className="header">Register</div>
        <div className="box">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="login-input"
              name="username"
              placeholder="Username"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="login-input"
              name="password"
              placeholder="Password"
            />
          </div>

          <button
            type="button"
            className="login-btn"
            onClick={this.submitRegister.bind(this)}
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}
*/
