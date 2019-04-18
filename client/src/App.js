import React, { Component } from '../node_modules/react';
import logo from './logo.svg';
import './App.css';
import ProfileForm from './Components/ProfileForm/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProfileForm />
      </div>
    );
  }
}

export default App;
