const { getAll } = require('./Utils/getFromDB');
const { insertDb } = require('./Utils/insertDB');

const getAllProducts = async (fields) => {
  const products = await getAll('Products', fields);
  return products.map(([productId, name, price, picture]) => ({ name, productId, price, picture }));
};

const createNewOrder = async (newOrderFields, params) => insertDb('Orders', newOrderFields, params);

const addToOrder = async (fields, params) => insertDb('Order_Products', fields, params);

module.exports = {
  getAllProducts,
  createNewOrder,
  addToOrder,
};
