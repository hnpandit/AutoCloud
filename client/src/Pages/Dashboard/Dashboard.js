import React, { Component } from "react";
// import "../../App.css";
import "./Dashboard.css"

import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Navbar from "../../Components/Navbar/Navbar";
// import Footer from "../../Components/Footer/Footer";
// import Col from 'react-bootstrap/Col'
// import Nav from 'react-bootstrap/Nav'
// import Row from 'react-bootstrap/Row'

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <Tabs defaultActiveKey="" id="dashboard-tabs">
            <Tab eventKey="home" title="Vehicle 1">
              <div>
                <Tab.Pane eventKey="first">
                  <h1>Vehicle #1</h1>
                  <div className='card'>
                    <p>Registration Expiration</p>
                  </div>
                  <div className='card'>
                    <p>License Expiration</p>
                  </div>
                  <div className='card'>
                    <p>Inspection Expiration</p>
                  </div>
                </Tab.Pane>
              </div>
            </Tab>
            <Tab eventKey="profile" title="Vehicle 2">
              <div>
                <Tab.Pane eventKey="second">
                <h1>Vehicle #2</h1>
                  <div className='card'>
                    <p>Registration Expiration</p>
                  </div>
                  <div className='card'>
                    <p>License Expiration</p>
                  </div>
                  <div className='card'>
                    <p>Inspection Expiration</p>
                  </div>
       
                </Tab.Pane>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Dashboard;
