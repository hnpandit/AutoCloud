import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./DocumentProfile.css";
import API from "../../util/api";

class DocumentProfile extends Component {
  state = {
    carId: sessionStorage.getItem("carId"),
    userEmail: sessionStorage.getItem("email"),

    type: "",
    docId: "",
    expirationDate: "",
    notificationDay: "",
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
      return <Redirect to="/dashboard" />;
    }
  };

  renderSkip = () => {
    if (this.state.skip && this.state.carId) {
      return <Redirect to="/dashboard" />;
    }
  };

  change = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitDocumentProfile = e => {
    e.preventDefault();
    API.saveDocument(this.state.carId, {
      type: this.state.type,
      docId: this.state.docId,
      expirationDate: this.state.expirationDate,
      notificationDay: this.state.notificationDay
    })
      .then(res => {
        if (res.data._id) {
          this.setProceed();
          console.log("Logging added vehicle: ", res);
        }
      })
      .catch(err => console.log("logging error: ", err));
      
  };

  render() {
    return (
      <div id="docProfile">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>AutoCloud</h1>
              <p>Add a document to your Profile</p>
              <form>
                <div className="form-group">
                  <input
                    name="type"
                    value={this.state.type}
                    onChange={event => this.change(event)}
                    type="text"
                    className="form-control"
                    placeholder=" Name of document (e.g. Registration)"
                  />
                </div>
                <div className="form-group">
                  <input
                    name="docId"
                    value={this.state.docId}
                    onChange={event => this.change(event)}
                    type="text"
                    className="form-control"
                    placeholder="Document Id#"
                  />
                </div>
                <div className="form-group">
                  <input
                    name="expirationDate"
                    value={this.state.expirationDate}
                    onChange={event => this.change(event)}
                    type="date"
                    className="form-control"
                    placeholder="Expiration date (mm/dd/yyyy)"
                  />
                </div>

                <div className="form-group">
                  <input
                    name="notificationDay"
                    value={this.state.notificationDay}
                    onChange={event => this.change(event)}
                    type="number"
                    className="form-control"
                    placeholder="Notification day"
                  />
                </div>

                {this.renderProceed()}
                <button
                  onClick={e => this.submitDocumentProfile(e)}
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

export default DocumentProfile;
