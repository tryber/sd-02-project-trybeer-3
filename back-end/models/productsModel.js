const { getAll } = require('./Utils/getFromDB');

const getAllProducts = async (fields) => {
  const products = await getAll('Products', fields);
  return products.map(([productId, name, price]) => ({ name, productId, price }));
};

module.exports = {
  getAllProducts,
};
