// Dependencies
const router = require('express').Router();
const userRouter = require('./user');
const carRouter = require('./car');
const documentRouter = require('./document');
const emailRouter = require('./email');

// Routers
router.use('/users', userRouter);
router.use('/cars', carRouter);
router.use('/documents', documentRouter);
router.use('/email', emailRouter);

//Exporting
module.exports = router;
