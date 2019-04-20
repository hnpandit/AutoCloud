import React, { Component } from "react";
import UserRegistration from "./Pages/UserRegistration/UserRegistration";
import CarProfile from "./Pages/CarProfile/CarProfile";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";

class App extends Component {
  onSubmit = fields => {
    console.log(fields);
  };
  submitCarForm = fields => {
    console.log(fields);
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Body>
          <UserRegistration onSubmit={fields => this.onSubmit(fields)} />
          <CarProfile submitCarForm={fields => this.submitCarForm(fields)} />
        </Body>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
