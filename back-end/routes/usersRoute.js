const express = require('express');
const { getAllUsers, register } = require('../controllers/usersController');
const { login } = require('../controllers/authenticatorController');

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

module.exports = router;
