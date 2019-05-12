require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3007;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// User Morgan logger
app.use(morgan('dev'));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
	process.env.MONGODB_URI || 'mongodb://localhost:27017/autoCloud',
	{ 
	  useNewUrlParser: true,
	  useFindAndModify: false,
	  useCreateIndex: true
	 }
	
);

// Start the API server
app.listen(PORT, function() {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
