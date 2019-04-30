import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./CarProfile.css";
import API from "../../util/api";
// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";

class CarProfile extends Component {
  state = {
    /*
    user: [{
      _id: "5cc787aafbf51b0e71138d7e"
    }],
    */
   
    userId: "",
    
    model: "",
    make: "",
    year: "",
    regExp: "",
    licExp: "",
    inspExp: "",
    redirect: false
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/dashboard" />;
    }
  };

  change = event => {
    this.setState({
      [event.target.name]: event.target.value,
      userId: sessionStorage.getItem("userId")
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
        //if (res.data._id) {
          //const carId = res.data._id;
          //API.updateUser(this.state.user._id, {cars: carId})
          this.setRedirect();
          console.log("Logging added vehicle: ", res);
          console.log('logging this.state.userId:', this.state.userId);
        //}
      })
      .catch(err => console.log("logging error: ", err));
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
                

                {this.renderRedirect()}
                <button
                  onClick={e => this.submitCarProfile(e)}
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
