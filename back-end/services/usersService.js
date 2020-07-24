const { getAllUsers, getByEmail } = require('../models/usersModel');

const allFields = ['name', 'password', 'id', 'email', 'role']

const getUsers = async () => getAllUsers(allFields);

const getUser = async (email) => getByEmail(email, allFields);

module.exports = {
  getUsers,
  getUser,
};
