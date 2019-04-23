import React, { Component } from "react";
import "./Dashboard.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Body from "../../Components/Body/Body";
// import Tab from 'react-bootstrap/Tab'
// import Col from 'react-bootstrap/Col'
// import Nav from 'react-bootstrap/Nav'
// import Row from 'react-bootstrap/Row'
// import Sonnet from 'react-bootstrap/Sonnet'

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex flex-column h-100" id="dashboardPage">
        <Header />
        <Body>
          <h1>Hello World!</h1>

          {/*<Tab.Container id="left-tabs-example" defaultActiveKey="first">
             <Row>
               <Col sm={3}>
                 <Nav variant="pills" className="flex-column">
                   <Nav.Item>
                     <Nav.Link eventKey="first">Tab 1</Nav.Link>
                   </Nav.Item>
                   <Nav.Item>
                     <Nav.Link eventKey="second">Tab 2</Nav.Link>
                   </Nav.Item>
                 </Nav>
               </Col>
               <Col sm={9}>
                 <Tab.Content>
                   <Tab.Pane eventKey="first">
                     <Sonnet />
                   </Tab.Pane>
                   <Tab.Pane eventKey="second">
                     <Sonnet />
                   </Tab.Pane>
                 </Tab.Content>
               </Col>
             </Row>
           </Tab.Container>
        */}
        </Body>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
