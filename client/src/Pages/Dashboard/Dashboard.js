import React, { Component } from "react";
import "./Dashboard.css";
import API from "../../util/api";
import Vehicles from "../../Components/Vehicle/Vehicle"

//import Tab from "react-bootstrap/Tab";
//import Tabs from "react-bootstrap/Tabs";
import Navbar from "../../Components/Navbar/Navbar";

class Dashboard extends Component {
  
  state = {
    user: []
  };

  componentDidMount() {
    API.getUsers()
      .then(res => this.setState({user: res.data}))
      .catch(err => console.log(err));

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
        <Navbar />
        <div>
         
            
            <Vehicles
              vehicles={this.state.user}
            />

            
        </div>
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
      </div>
    );
  }
}

export default Dashboard;

