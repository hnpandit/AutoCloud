import React from "react";
import reactDom from "react-dom";
import "./UserLogin.css";

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
