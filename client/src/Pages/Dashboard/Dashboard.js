import React, { Component } from "react";
import "./Dashboard.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Body from "../../Components/Body/Body";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex flex-column h-100" id="dashboardPage">
        <Header />
            <Body><h1>Hello World!</h1></Body>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
