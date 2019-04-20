import React, { Component } from 'react';
import UserRegistration from './Pages/UserRegistration/UserRegistration';
import CarProfile from './Pages/CarProfile/CarProfile';
import Header from './Components/Header/Header';


class App extends Component {

  onSubmit = fields => {
    console.log(fields)
  };
  submitCarForm = fields => {
    console.log(fields)
  }

  render() {
    return (
      <React.Fragment>
        <Header/>
        <UserRegistration onSubmit={fields => this.onSubmit(fields)} />
        <CarProfile submitCarForm={fields => this.submitCarForm(fields)} />
      </React.Fragment>
    );
  }
}

export default App;
