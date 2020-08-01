const express = require('express');
const { getAllUsers, register, changeName, myOrders, adminOrderDetail,
  getUser, orderDetails, allOrders } = require('../controllers/usersController');
const { login, authUser } = require('../controllers/authenticatorController');

const router = express.Router();

router
  .route('/')
  .get(authUser, getUser);

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

router
  .route('/orders')
  .get(authUser, myOrders);

router
  .route('/admin/orders')
  .get(authUser, allOrders);

router
  .route('/admin/order/:id')
  .get(authUser, adminOrderDetail);

router
  .route('/orders/:id')
  .get(authUser, orderDetails);

module.exports = router;
