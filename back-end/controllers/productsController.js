const { getProducts } = require('../services/productsService');

const getAllProducts = async (_req, res) => {
  const products = await getProducts();
  res.status(200).json({
    status: 'success',
    products,
  });
};

module.exports = {
  getAllProducts,
};
