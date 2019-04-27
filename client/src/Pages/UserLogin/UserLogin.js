import React, { Component } from "react";
import "./UserLogin.css";

class UserLogin extends Component {
  state = {
    username: "",
    password: ""
  };

  change = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  

  


  render() {
    return (
      <div id="registrationPage">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Auto Cloud</h1>
              {/* <p>Log in</p> */}
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserLogin;

/*   CODE BELOW IS FOR TESTING PURPOSES. JUST IGNORE

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
