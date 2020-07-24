const { getAll, byEmail } = require('./Utils/getFromDB');
const { insertDb } = require('./Utils/insertDB');

const getAllUsers = async (fields) => getAll('Users', fields);

const getByEmail = async (email, fields) => {
  const user = await byEmail(email, 'Users', fields);
  return user.length ? user[0].reduce((ac, cur, i) => ({ ...ac, [fields[i]]: cur }), {}) : false;
};

const createUserModel = async (fields, params) => insertDb('Users', fields, params);

module.exports = {
  getAllUsers,
  getByEmail,
  createUserModel,
};
