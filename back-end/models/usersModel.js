const { getAll, byEmail } = require('./Utils/getFromDB');
const { insertDb } = require('./Utils/insertDB');
const { queryDb } = require('./Utils/customQuery');

const getAllUsers = async (fields) => getAll('Users', fields);

const getByEmail = async (email, fields) => {
  const user = await byEmail(email, 'Users', fields);
  return user.length ? user[0].reduce((ac, cur, i) => ({ ...ac, [fields[i]]: cur }), {}) : false;
};

const createUserModel = async (fields, params) => insertDb('Users', fields, params);

const changeName = async (name, email) => {
  const query = `UPDATE Users SET name = '${name}' WHERE email = '${email}';`;
  return queryDb(query);
};

module.exports = {
  getAllUsers,
  getByEmail,
  createUserModel,
  changeName,
};
