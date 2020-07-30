const { getAllUsers, getByEmail, createUserModel, changeName,
  myOrders } = require('../models/usersModel');

const allFields = ['name', 'password', 'id', 'email', 'role'];
const normalFields = ['name', 'email', 'password', 'role'];

const getUsers = async () => getAllUsers(allFields);

const getUser = async (email) => getByEmail(email, allFields);

const createUser = async (name, email, password, admin) => {
  const hasUser = await getByEmail(email, allFields);
  if (hasUser.name) return { error: true, message: 'User already exists' };
  const role = admin ? 'admin' : 'client';
  const params = [name, email, password, role];
  await createUserModel(normalFields, params);
  return getByEmail(email, allFields);
};

const changeUserName = async (name, email) => {
  const hasUser = await getByEmail(email, allFields);
  if (!hasUser.name) return { error: true };
  await changeName(name, email);
  return {};
};

const getOrders = async (id) => {
  const orders = await myOrders(id);
  return orders;
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  changeUserName,
  getOrders,
};
