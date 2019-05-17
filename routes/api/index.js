// Dependencies
require('dotenv').config();
const router = require('express').Router();
const userRouter = require('./user');
const carRouter = require('./car');
const documentRouter = require('./document');
const emailRouter = require('./email');
const jwt = require('jsonwebtoken');


// route middleware to verify a token
router.use(function(req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
   console.log("TOKEN :: " + token);
    // decode token
    if (token) {
  
      // verifies secret and checks exp
      jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {       if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' });       } else {
          // if everything is good, save to request for use in other routes
		  req.decoded = decoded;         
		  next();
        }
      });
  
    } else {
  
      // if there is no token
      // return an error
      return res.status(403).send({ 
          success: false, 
          message: 'No token provided.' 
      });
  
    }
  });

// Routers
router.use('/users', userRouter);
router.use('/cars', carRouter);
router.use('/documents', documentRouter);
router.use('/email', emailRouter);


//Exporting
module.exports = router;
