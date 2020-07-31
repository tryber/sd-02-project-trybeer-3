const { getAllUsers, getByEmail, createUserModel, changeName,
  myOrders, orderDetail, allOrders } = require('../models/usersModel');

const months = require('./utils/months');

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

const adjustOrders = (orders) => orders
  .map(([orderId, date, total, deliver]) => ({ orderId, date, total, deliver }))
  .map(({ orderId, date, total, deliver }) => (
    {
      orderId,
      total,
      day: date.toUTCString().split(' ')[1],
      month: months[date.toUTCString().split(' ')[2]],
      deliver,
    }
  ));

const getOrders = async (id) => {
  const completeOrders = await myOrders(id);
  return adjustOrders(completeOrders)
    .map(({ orderId, day, month, total }) => ({ orderId, day, month, total }));
};

const getOrderDetail = async (id, clientID) => {
  const order = await orderDetail(id, clientID);
  if (!order.length) return { error: true };
  return order
    .map(([orderId, , , , date, , , , qty, , , name, price]) => ({
      orderId, date, qty, name, price,
    }))
    .reduce((prev, { orderId, date, name, price, qty }) => ({
      orderId,
      day: new Date(date).getUTCDate(),
      month: new Date(date).getUTCMonth() + 1,
      products: [...prev.products, { name, qty, price, total: qty * price }],
      total: prev.total + (qty * price),
    }), { products: [], total: 0 });
};

const getAllOrders = async () => {
  const ordersAdmin = await allOrders();
  return adjustOrders(ordersAdmin)
    .map(({ orderId, day, month, total, deliver }) => ({ orderId, day, month, total, deliver }));
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  changeUserName,
  getOrders,
  getOrderDetail,
  getAllOrders,
};
