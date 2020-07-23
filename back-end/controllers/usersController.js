const errorSomethingWrong = { code: 'something_wrong', message: 'Something is wrong' };

const getAllUsers = async (req, res, next) => {
  console.log('aqui');
  res.status(200).json({
    users: "Nois",
  });
};

module.exports = {
  getAllUsers,
};
