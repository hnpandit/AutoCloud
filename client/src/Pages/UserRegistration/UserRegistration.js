import React, { Component } from "react";
import "./UserRegistration.css";
import api from "../../util/api";
//import Body from "../../Components/Body/Body";
// import Form from 'react-bootstrap/Form';
// import Container from 'react-bootstrap/Container';

class UserRegistration extends Component {
  state = {
    user: [],

    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    phoneNumber: "",
    zipCode: ""
  };

  /*
  componentDidMount() {
		this.loadItems();
  }
  */

  loadUser = () => {
		api.getUserById()
			.then(res =>
				this.setState({
					user: res.data,
					firstName: "",
          lastName: "",
          userName: "",
          email: "",
          password: "",
          phoneNumber: "",
          zipCode: ""
				})
			)
			.catch(err => console.log(err));
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
                    name="userName"
                    value={this.state.userName}
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

                <div className="form-group">
                  <input
                    name="phoneNumber"
                    value={this.state.phoneNumber}
                    onChange={e => this.change(e)}
                    type="phoneNumber"
                    className="form-control"
                    placeholder='Phone number'
                    id="phoneNumber"
                  />
                </div>

                <div className="form-group">
                  <input
                    name="zipCode"
                    value={this.state.zipCode}
                    onChange={e => this.change(e)}
                    type="zipCode"
                    className="form-control"
                    placeholder='zip code'
                    id="zipCode"
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
