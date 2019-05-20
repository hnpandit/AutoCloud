import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../../util/api";
import "./UserSignup.css";

class Signup extends Component {
  state = {
    //userEmail: sessionStorage.getItem("email"),
    email: "",
    password: "",
    proceed: false,
    toLogin: false
  };

  setToLogin = () => {
    this.setState({
      toLogin: true
    });
  };

  setProceed = () => {
    this.setState({
      proceed: true
    });
  };

  renderProceed = () => {
    if (this.state.proceed) {
      return <Redirect to="/register" />;
    }
  }

  renderToLogin = () => {
    if (this.state.toLogin) {
      return <Redirect to="/" />;
    }
  };

  change = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("submit button works!")
    
    API.signUpUser({
      email: this.state.email,
      password: this.state.password
    })
      .then(res => {
        console.log("Logging res @ UserSignup.js: ", res);
        
        if (res.status === 200) {
            
          
          //this.setState({
          //  token: res.data.token
          //})
          sessionStorage.setItem("userEmail", this.state.email);
          this.setProceed();
        } 
        
      })
      .catch(err => console.log("logging error: ", err));
      
  };

  render() {
    return (
      <div id="signup-page">
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

              {this.renderProceed()}
              <button onClick={this.handleFormSubmit} className="btn">
                Next
              </button>

              {this.renderToLogin()}
              <button onClick={this.setToLogin} type="submit" className="btn">
                Already a member
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
