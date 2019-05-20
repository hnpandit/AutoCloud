import React, { Component } from "react";
import "./Dashboard.css";
import API from "../../util/api";
import Vehicles from "../../Components/Vehicle/Vehicle";
import { Redirect } from "react-router-dom";

//import Tab from "react-bootstrap/Tab";
//import Tabs from "react-bootstrap/Tabs";
import Navbar from "../../Components/Navbar/Navbar";

//* global gapi */

class Dashboard extends Component {
  
  state = {
    userToken: sessionStorage.getItem("userToken"),
    userEmail: sessionStorage.getItem("userEmail"),
    user: [],
    signOut: false
  };


  setSignOut = () => {
    this.setState({
      signOut: true
    })
  }

  renderSignOut =  () => {
      if (this.state.signOut) return <Redirect to="/" />; 
  }

  componentDidMount() {
    API.getUserByEmail(this.state.userEmail)
      .then(res => this.setState({user: res.data}))
      .catch(err => console.log(err));

  };

  signOut = () => {
    sessionStorage.removeItem("userEmail");
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("carId");
    sessionStorage.removeItem("userToken");
    this.setSignOut();
  };
  
  // loadItems = () => {
  //   API.getUserByEmail(this.state.userEmail)
  //     .then(res => {
  //       this.setState({
  //         user: res.data
  //       });
  //     })
  //     .catch(err => console.log(err));
  //   console.log("logging this.state: ", this.state);
  // };
  render() {
    return (
       <div>
          {this.renderSignOut()}
          <Navbar signOut={this.signOut}/>

          <Vehicles
            vehicles={[
              /*
              { 
                registration: "11/22/2019",
                license: "12/20/2022",
                inspection: "12/21"
              },
              {
                registration: "12/20/2020",
                license: "1/13/2021",
                inspection: "3/23"
              }
              */
            ]}
          />
        </div>
      
    );
  }
}

export default Dashboard;

