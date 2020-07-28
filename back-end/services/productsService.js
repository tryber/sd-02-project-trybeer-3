const { getAllProducts } = require('../models/productsModel');

const allFields = ['product_id', 'product_name', 'product_price'];

const getProducts = async () => getAllProducts(allFields);

const newOrder = async (id, street, streetNumber) => {
  const date = new Date();
  console.log({ id, street, streetNumber, date });
  return 'Voltou';
};

module.exports = {
  getProducts,
  newOrder,
};
