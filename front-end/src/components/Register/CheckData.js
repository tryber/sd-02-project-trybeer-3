import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { postRegister, postLogin } from '../../services';
import * as ls from '../Utils/localStorage';
import Trybeer from '../../context';

const validEmail = /[A-Z0-9]{1,}@[A-Z0-9]{2,}\.[A-Z0-9]{2,}/i;
const validName = /[A-Z ]{12,}/i;
const validPassword = /[0-9]{6,}/;

const doRequest = async (obj, history) => {
  await postRegister(obj);
  const user = await postLogin({ email: obj.email, password: obj.password });
  const { status, ...values } = user.data;
  ls.setItem('user', values);
  if (values.role === 'admin') return history.push('/admin/orders');
  return history.push('/products');
};

const counter = (setWrongData) => {
  setWrongData(true);
  setTimeout(() => {
    setWrongData(false);
  }, 3000);
};

const CheckData = () => {
  const {
    userName, emailUser, password, isSalesman,
  } = useContext(Trybeer);

  const [wrongData, setWrongData] = useState(false);
  const userObj = {
    email: emailUser, password, name: userName, admin: isSalesman,
  };

  const history = useHistory();

  const checkValues = () => (
    validEmail.test(emailUser)
      && validPassword.test(password)
      && validName.test(userName)
      ? doRequest(userObj, history)
      : counter(setWrongData)
  );

  return (
    <div>
      <button type="button" onClick={() => checkValues()}>Cadastre - se</button>
      {wrongData ? <p>Confira novamente seus dados.</p> : null}
    </div>
  );
};

export default CheckData;
