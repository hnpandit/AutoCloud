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
	getUserByEmail: function(email, token) {
		console.log('AXIOS API CALL TOKEN VALUE FROM SESSION :: ' + token);
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
		return axios.get('/api/users/email/' + email);
	},
	// Saves a new user to the database (test)
	saveUser: function(userData) {
		return axios.post('/api/users', userData);
	},
	// Updates an existing user to the database
	updateUser: function(id, userData) {
		return axios.put('/api/users/' + id, userData);
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
	saveCar: function(userId, carData) {
		return axios.post('/api/cars/userId/'+userId, carData);
	},
	// Updates an existing car to the database
	updateCar: function(id, carData, userId) {
		return axios.put('/api/cars/' + id, carData, userId);
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
	saveDocument: function(carId, documentData) {
		return axios.post('/api/documents/carId/'+carId, documentData);
	},
	// Updates an existing document to the database
	updateDocument: function(id, documentData) {
		return axios.put('/api/documents/' + id, documentData);
	},

//Authorized User Addition

	signUpUser: function(userEmailPwd){
		return axios.post('/api/AuthUser/signup', userEmailPwd);
	},

	loginUser: function(userEmailPwd){
		return axios.post('/api/AuthUser/login', userEmailPwd);
	}

};
