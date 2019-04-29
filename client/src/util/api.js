import axios from 'axios';

export default {
	// Gets all users
	getUsers: function(query) {
		return axios.get('/api/users', query);
	},
	// Gets the user with the given id
	getUserById: function(id) {
		return axios.get('/api/users/id/' + id);
	},
	// Gets the user with the given email
	getUserByEmail: function(email) {
		return axios.get('/api/users/email/' + email);
	},
	// Saves a new user to the database
	saveUser: function(userData) {
		return axios.post('/api/users', userData);
	},
	// Updates an existing user to the database
	updateUser: function(id, userData) {
		return axios.put('/api/users' + id, userData);
	},

	// Gets all cars
	getCars: function(query) {
		return axios.get('/api/cars', query);
	},
	// Gets the car with the given id
	getCarById: function(id) {
		return axios.get('/api/cars/id/' + id);
	},
	// Saves a new car to the database
	saveCar: function(carData) {
		return axios.post('/api/cars', carData);
	},
	// Updates an existing car to the database
	updateCar: function(id, carData) {
		return axios.put('/api/cars' + id, carData);
	},

	// Gets all documents
	getDocuments: function(query) {
		return axios.get('/api/documents', query);
	},
	// Gets the document with the given id
	getDocumentById: function(id) {
		return axios.get('/api/documents/id/' + id);
	},
	// Saves a new document to the database
	saveDocument: function(documentData) {
		return axios.post('/api/documents', documentData);
	},
	// Updates an existing document to the database
	updateDocument: function(id, documentData) {
		return axios.put('/api/documents' + id, documentData);
	},
};
