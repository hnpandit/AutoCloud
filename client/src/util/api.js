import axios from "axios";

export default {
  // Gets all users
  getUsers: function(query) {
    return axios.get("/api/users", query);
  },
  // Gets the user with the given id
  getUserById: function(id) {
    return axios.get("/api/users/id/" + id);
  },
  // Gets the user with the given email
   getUserByEmail: function(email) {
    return axios.get("/api/users/email/" + email);
  },
  // Saves a new user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  // Updates an existing user to the database
  updateUser: function(userData) {
    return axios.put("/api/users" + id, userData);
  }
};