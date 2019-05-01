import React, { Component } from "react";
// import "../../App.css";
import "./Dashboard.css";
import API from "../../util/api";
import Vehicles from "../../Components/Vehicle/Vehicle"

//import Tab from "react-bootstrap/Tab";
//import Tabs from "react-bootstrap/Tabs";
import Navbar from "../../Components/Navbar/Navbar";
// import Footer from "../../Components/Footer/Footer";
// import Col from 'react-bootstrap/Col'
// import Nav from 'react-bootstrap/Nav'
// import Row from 'react-bootstrap/Row'

class Dashboard extends Component {
  state = {
    userEmail: sessionStorage.getItem("email"),
    user: []
  };

  componentDidMount() {
    if (this.state.userEmail) {
      this.loadItems();
    }
  }

  loadItems = () => {
    API.getUserByEmail(this.state.userEmail)
      .then(res => {
        this.setState({
          user: res.data
        });
      })
      .catch(err => console.log(err));
    console.log("logging this.state: ", this.state);
  };
  render() {
    return (
      <div>
        <Navbar />
        <div>
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
      </div>
    );
  }
}

export default Dashboard;
