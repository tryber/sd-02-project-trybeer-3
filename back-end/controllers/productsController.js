const { getProducts, newOrder, addProducts } = require('../services/productsService');

const getAllProducts = async (_req, res) => {
  const products = await getProducts();
  res.status(200).json({
    status: 'success',
    products,
  });
};

const createOrder = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { street, streetNumber, products } = req.body;
    const createdOrder = await newOrder(id, street, streetNumber, products);
    const addProductOrder = await addProducts(products, createdOrder);
    res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    next({ code: 'something_wrong', message: 'Something went wrong' });
  }
};

module.exports = {
  getAllProducts,
  createOrder,
};
