import React, { Component } from "react";
import "./CarProfile.css";

class CarProfile extends Component {
  state = {
    model: "",
    carMake: "",
    year: ""
  };

  change = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitCarProfile = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div id="carProfile">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>AutoCloud</h1>
              <p>Add a Car to your Profile</p>
              <form>
                <div className="form-group">
                  <input
                    name="carMake"
                    value={this.state.carMake}
                    onChange={event => this.change(event)}
                    type="text"
                    className="form-control"
                    placeholder=" Car Manufacturer"
                  />
                </div>
                <div className="form-group">
                  <input
                    name="model"
                    value={this.state.model}
                    onChange={event => this.change(event)}
                    type="text"
                    className="form-control"
                    placeholder="Model"
                  />
                </div>
                <div className="form-group">
                  <input
                    name="year"
                    value={this.state.year}
                    onChange={event => this.change(event)}
                    type="text"
                    className="form-control"
                    placeholder="Year"
                  />
                </div>

                <button
                  onClick={event => this.submitCarProfile(event)}
                  type="submit"
                  className="btn"
                >
                  Add Vehicle
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
