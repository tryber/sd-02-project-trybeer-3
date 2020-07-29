const express = require('express');
const { getAllUsers, register, changeName } = require('../controllers/usersController');
const { login, authUser } = require('../controllers/authenticatorController');

const router = express.Router();

router
  .route('/users')
  .get(getAllUsers);

router
  .route('/login')
  .post(login);

router
  .route('/register')
  .post(register);

router
  .route('/profile')
  .patch(authUser, changeName);

module.exports = router;
