const express = require("express");
const router = express.Router();
const checkAuth = require("../utils/check-auth");
const UserController = require('../controllers/userAuth');

router.post("/signup", UserController.user_signup);

router.post('/login', UserController.user_login);

router.delete('/:userId', checkAuth, UserController.delete_user);

router.patch('/:userId', checkAuth, UserController.update_pwd);

module.exports = router;