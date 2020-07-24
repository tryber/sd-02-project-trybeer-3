const { getUsers, getUser } = require('../services/usersService');

const getAllUsers = async (_req, res) => {
  const users = await getUsers();
  res.status(200).json({
    status: 'success',
    users,
  });
};

module.exports = {
  getAllUsers,
};
