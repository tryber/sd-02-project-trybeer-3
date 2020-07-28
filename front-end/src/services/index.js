import axios from 'axios';

const APIPostRegister = 'http://localhost:3001/register';
const APIPostLogin = 'http://localhost:3001/login';
const APIGetProducts = 'http://localhost:3001/products';
const APIPatchProfile = 'http://localhost:3001/profile';

const headers = {
  Accept: '*/*',
  'Content-Type': 'application/json',
};

export const postRegister = async (obj) => {
  return axios
    .post(APIPostRegister, obj, { headers })
    .then((data) => data)
    .catch((err) => console.log(err));
};
