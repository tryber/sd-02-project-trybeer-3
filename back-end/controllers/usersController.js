const getAllUsers = async (_req, res) => {
  console.log('aqui');
  res.status(200).json({
    users: 'Nois',
  });
};

module.exports = {
  getAllUsers,
};
