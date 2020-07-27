const { getAllProducts } = require('../models/productsModel');

const allFields = ['product_id', 'product_name', 'product_price'];

const getProducts = async () => getAllProducts(allFields);

module.exports = {
  getProducts,
};
