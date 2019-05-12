import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./CarProfile.css";
import API from "../../util/api";

class CarProfile extends Component {
  state = {
    userId: sessionStorage.getItem("userId"),
    userEmail: sessionStorage.getItem("email"),
    model: "",
    make: "",
    year: "",
    regExp: "",
    licExp: "",
    inspExp: "",
    proceed: false,
    skip: false
  };

  setProceed = () => {
    this.setState({
      proceed: true
    });
  };

  setSkip = () => {
    this.setState({
      skip: true
    });
  };

  renderProceed = () => {
    if (this.state.proceed) {
      return <Redirect to="/documentProfile" />;
    }
  };

  renderSkip = () => {
    if (this.state.skip && this.state.userEmail) {
      return <Redirect to="/dashboard" />;
    }
  };

  change = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitCarProfile = e => {
    e.preventDefault();
    API.saveCar( this.state.userId,{
      model: this.state.model,
      make: this.state.make,
      year: parseInt(this.state.year),
    })
      .then(res => {
        if (res.data._id) {
          sessionStorage.setItem("carId", res.data.cars[0]._id);
          this.setProceed();
          console.log("Logging added vehicle: ", res);
          //console.log('logging this.state.userId:', this.state.userId);
        }
      })
      .catch(err => console.log("logging error: ", err));
  };

  render() {
    return (
      <div id="carProfile">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Auto Cloud</h1>
              <p>Add a Car to your Profile</p>
              <form>
                <div className="form-group">
                  <input
                    name="make"
                    value={this.state.make}
                    onChange={event => this.change(event)}
                    type="text"
                    className="form-control"
                    placeholder=" Car Manufacturer (required)"
                  />
                </div>
                <div className="form-group">
                  <input
                    name="model"
                    value={this.state.model}
                    onChange={event => this.change(event)}
                    type="text"
                    className="form-control"
                    placeholder="Model (required)"
                  />
                </div>
                <div className="form-group">
                  <input
                    name="year"
                    value={this.state.year}
                    onChange={event => this.change(event)}
                    type="text"
                    className="form-control"
                    placeholder="Year (required)"
                  />
                </div>
                

                {this.renderProceed()}
                <button
                  onClick={e => this.submitCarProfile(e)}
                  type="submit"
                  className="btn"
                >
                  Add 
                </button>
                {this.renderSkip()}
                <button
                  onClick={this.setSkip}
                  type="submit"
                  className="btn"
                >
                  Skip
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CarProfile;
