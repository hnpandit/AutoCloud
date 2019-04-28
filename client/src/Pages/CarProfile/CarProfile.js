import React, { Component } from 'react';
import './CarProfile.css';
import API from '../../util/api';
// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";

class CarProfile extends Component {
	state = {
		model: '',
		make: '',
		year: '',
		regExp: '',
		licExp: '',
		inspExp: '',
	};

	change = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	submitCarProfile = (e) => {
		e.preventDefault();
		API.saveCar({
			model: this.state.model,
			make: this.state.make,
			year: parseInt(this.state.year),
			regExp: this.state.regExp,
			licExp: this.state.licExp,
			inspExp: this.state.inspExp,
		});
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
										name="make"
										value={this.state.make}
										onChange={(event) => this.change(event)}
										type="text"
										className="form-control"
										placeholder=" Car Manufacturer"
									/>
								</div>
								<div className="form-group">
									<input
										name="model"
										value={this.state.model}
										onChange={(event) => this.change(event)}
										type="text"
										className="form-control"
										placeholder="Model"
									/>
								</div>
								<div className="form-group">
									<input
										name="year"
										value={this.state.year}
										onChange={(event) => this.change(event)}
										type="text"
										className="form-control"
										placeholder="Year"
									/>
								</div>
								<div className="form-group">
									<input
										name="regExp"
										value={this.state.regExp}
										onChange={(event) => this.change(event)}
										type="text"
										className="form-control"
										placeholder="Registration Expiration"
									/>
								</div>
								<div className="form-group">
									<input
										name="licExp"
										value={this.state.licExp}
										onChange={(event) => this.change(event)}
										type="text"
										className="form-control"
										placeholder="License Expiration"
									/>
								</div>
								<div className="form-group">
									<input
										name="inspExp"
										value={this.state.inspExp}
										onChange={(event) => this.change(event)}
										type="text"
										className="form-control"
										placeholder="Inspection Expiration"
									/>
								</div>

								<button
									onClick={(e) => this.submitCarProfile(e)}
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
