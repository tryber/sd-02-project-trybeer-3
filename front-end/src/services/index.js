import axios from 'axios';

const APIPostRegister = 'http://localhost:3001/user/register';
const APIPostLogin = 'http://localhost:3001/user/login';
const APIGetProducts = 'http://localhost:3001/products';
const APIPatchProfile = 'http://localhost:3001/user/profile';
const APIGetOrders = 'http://localhost:3001/orders';

const headers = {
  Accept: '*/*',
  'Content-Type': 'application/json',
};

const patchHeaders = (token) => ({
  Accept: '*/*',
  Authorization: token,
  'Content-Type': 'application/json',
});

export const postRegister = async (obj) => (
  axios
    .post(APIPostRegister, obj, { headers })
    .then((data) => data)
    .catch((err) => err)
);

export const getProducts = async () => (
  axios
    .get(APIGetProducts)
    .then((data) => data)
    .catch((err) => err)
);

export const postLogin = async (obj) => (
  axios
    .post(APIPostLogin, obj, { headers })
    .then((success) => success)
    .catch((err) => err)
);

export const patchProfile = async (obj, token) => (
  axios
    .patch(APIPatchProfile, obj, { headers: patchHeaders(token) })
    .then((data) => data)
    .catch((err) => err)
);

export const getOrders = async (token) => (
  axios
    .get(APIGetOrders, undefined, { headers: patchHeaders(token) })
    .then((data) => data)
    .catch((err) => err)
);
