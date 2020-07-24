const { getSession } = require('../connection');

const queryDb = async (query) => {
  const db = await getSession();
  const sesions = await db.sql(query).execute();
  return sesions.fetchAll();
};

module.exports = {
  queryDb,
};
