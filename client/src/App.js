import React, { Component } from 'react';
import UserForm from './Components/UserForm';
import CarProfileForm from './Components/CarProfileForm';
import Navbar from './Components/Navbar';

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
        <Navbar/>
        <UserForm onSubmit={fields => this.onSubmit(fields)} />
        <CarProfileForm submitCarForm={fields => this.submitCarForm(fields)} />
      </div>
    );
  }
}

export default App;
