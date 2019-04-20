import React, { Component } from "react";
import "./UserRegistration.css";
// import Form from 'react-bootstrap/Form';
// import Container from 'react-bootstrap/Container';

class UserRegistration extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    console.log(this.state);
  };

  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Join Auto Cloud</h1>
              <form>
                <div className="form-group">
                  <label >First name</label>
                  <input 
                    name="firstName"
                    value={this.state.firstName} 
                    onChange={e => this.change(e)}
                    type="text"
                    className="form-control"
                    id="first" />
                </div>
                <div className="form-group">
                  <label >Last name</label>
                  <input 
                    name="lastName"
                    value={this.state.lastName} 
                    onChange={e => this.change(e)}
                    type="text" 
                    className="form-control" 
                    id="last" />
                </div>
                <div className="form-group">
                  <label >Username</label>
                  <input 
                    name="username"
                    value={this.state.username} 
                    onChange={e => this.change(e)}
                    type="email" className="form-control" 
                    id="username" />
                </div>
                <div className="form-group">
                  <label >Email</label>
                  <input 
                    name="email"
                    value={this.state.email} 
                    onChange={e => this.change(e)}
                    type="email" className="form-control" 
                    id="email" />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input 
                    name="password"
                    value={this.state.password} 
                    onChange={e => this.change(e)}
                    type="password" className="form-control" id="password" />
                </div>
                <button 
                    onClick={e => this.onSubmit(e)}
                    type="submit" 
                    className="btn">
                    Create account
                </button>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

export default UserRegistration;
