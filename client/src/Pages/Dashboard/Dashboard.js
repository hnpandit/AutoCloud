import React, { Component } from "react";
import "./Dashboard.css";
import API from "../../util/api";
import Vehicles from "../../Components/Vehicle/Vehicle";
import { Redirect } from "react-router-dom";

//import Tab from "react-bootstrap/Tab";
//import Tabs from "react-bootstrap/Tabs";
import Navbar from "../../Components/Navbar/Navbar";

/* global gapi */

class Dashboard extends Component {
  
  state = {
    userEmail: sessionStorage.getItem("email"),
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
    API.getUsers()
      .then(res => this.setState({user: res.data}))
      .catch(err => console.log(err));

  };

  signOut = () => {
    this.setSignOut();
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
      console.log("User signed out.");
    });
    this.removeCookies();
    sessionStorage.removeItem("email");
  };

  //Added to remove cookies from browser
  removeCookies = () => {
    var res = document.cookie;
    var multiple = res.split(";");
    for (var i = 0; i < multiple.length; i++) {
      var key = multiple[i].split("=");
      document.cookie = key[0] + " =; expires = Thu, 01 Jan 1970 00:00:00 UTC";
    }
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
          <div>
            <Vehicles
              vehicles={this.state.user}
            />    
          </div> 

          <Vehicles
            vehicles={[
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
            ]}
          />
        </div>
      
    );
  }
}

export default Dashboard;

