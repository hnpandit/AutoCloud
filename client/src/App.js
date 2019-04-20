import React, { Component } from 'react';
import UserRegistration from './Pages/UserRegistration/UserRegistration';
import CarProfile from './Pages/CarProfile/CarProfile';


class App extends Component {

  onSubmit = fields => {
    console.log(fields)
  };
  submitCarForm = fields => {
    console.log(fields)
  }

  render() {
    return (
      <div>
        <UserRegistration onSubmit={fields => this.onSubmit(fields)} />
        <CarProfile submitCarForm={fields => this.submitCarForm(fields)} />
      </div>
    );
  }
}

export default App;
