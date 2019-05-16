//Dependencies
const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');
const AuthUser = require('./userAuth');

// API Routes
router.use('/api/AuthUser', AuthUser);
router.use('/api', apiRoutes);

module.exports = router;
