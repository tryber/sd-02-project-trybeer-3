const { getProducts, newOrder } = require('../services/productsService');

const getAllProducts = async (_req, res) => {
  const products = await getProducts();
  res.status(200).json({
    status: 'success',
    products,
  });
};

const createOrder = async (req, res) => {
  const { id } = req.user;
  const { street, streetNumber } = req.body;
  const createdOrder = await newOrder(id, street, streetNumber);
  console.log(createdOrder);
  res.status(200).json({
    status: 'success',
  });
};

module.exports = {
  getAllProducts,
  createOrder,
};
