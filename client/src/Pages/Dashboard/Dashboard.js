import React, { Component } from "react";
import "./Dashboard.css";
import API from "../../util/api";
import Vehicles from "../../Components/Vehicle/Vehicle";
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

    );
  }
}

export default Dashboard;


