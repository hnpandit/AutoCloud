import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserRegistration from './Pages/UserRegistration/UserRegistration';
// import Navbar from "./Components/Navbar/Navbar.js";
// import Footer from "./Components/Footer/Footer.js";
import Dashboard from './Pages/Dashboard/Dashboard';
import CarProfile from './Pages/CarProfile/CarProfile';
import UserLogin from './Pages/UserLogin/UserLogin';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import './App.css';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={UserLogin} />
					<Route path="/" component={UserRegistration} />
					<Route path="/carProfile" component={CarProfile} />
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/login" component={UserLogin} />
					<Route component={PageNotFound} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
