// Dependencies
const emailRouter = require("express").Router();
//const emailController = require("../../controllers/email");

// User End-points
emailRouter
  .get("/notify", (req, res, next) => {

    const email = require("../../send-email");

    var message = "Congratulations. Welcome to AutoCloud. You have registered successfully.";
    
    email.sendEmail('himanshu.pandit@outlook.com', 'Welcome to RCB AutoCloud', message);
    
    res.send("Email sent.");

  });

  module.exports = emailRouter;