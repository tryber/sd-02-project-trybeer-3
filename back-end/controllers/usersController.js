const { getUsers, createUser, changeUserName, getOrders } = require('../services/usersService');
const { validationFunc } = require('./utils/schemaValidator');

const getAllUsers = async (_req, res) => {
  const users = await getUsers();
  res.status(200).json({
    status: 'success',
    users,
  });
};

const register = async (req, res, next) => {
  const { name, email, password, admin } = req.body;
  const { error, message } = validationFunc({ name, email, password, admin }, 'user');
  if (error) return next({ code: 'invalid_data', message });

  const user = await createUser(name, email, password, admin);
  if (user.error) return next({ code: 'conflict', message: user.message });

  res.status(201).json({
    status: 'success',
    user,
  });
};

const changeName = async (req, res, next) => {
  const { name } = req.body;
  const { email } = req.user;
  const { error, message } = validationFunc({ name, email }, 'change_name');
  if (error) return next({ code: 'invalid_data', message });

  const user = await changeUserName(name, email);
  if (user.error) return next({ code: 'not_found', message: 'Email not found' });

  res.status(201).json({
    status: 'success',
  });
};

const myOrders = async (req, res) => {
  const { id } = req.user;
  const orders = await getOrders(id);
  res.status(200).json({
    status: 'success',
    orders,
  });
};

module.exports = {
  getAllUsers,
  register,
  changeName,
  myOrders,
};
