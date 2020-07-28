const express = require('express');
const { getAllProducts, createOrder } = require('../controllers/productsController');
const { authUser } = require('../controllers/authenticatorController');

const router = express.Router();

router
  .route('/products')
  .get(getAllProducts);

router
  .route('/checkout')
  .post(authUser, createOrder);

module.exports = router;
