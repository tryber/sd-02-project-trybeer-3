const express = require('express');
const { getAllUsers } = require('../controllers/usersController');
const { login } = require('../controllers/authenticatorController');

const router = express.Router();

router
  .route('/users')
  .get(getAllUsers);

router
  .route('/login')
  .post(login);

module.exports = router;
