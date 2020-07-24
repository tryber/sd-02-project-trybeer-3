const { getAll, byEmail } = require('./Utils/getFromDB');

const getAllUsers = async (fields) => getAll('Users', fields);

const getByEmail = async (email, fields) => {
  const user = await byEmail(email, 'Users', fields);
  return user.length ? user[0].reduce((ac, cur, i) => ({ ...ac, [fields[i]]: cur }), {}) : false;
};

module.exports = {
  getAllUsers,
  getByEmail,
};
