import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Trybeer from '../../context';
import { postRegister } from '../../services';

const validEmail = /[A-Z0-9]{1,}@[A-Z0-9]{2,}\.[A-Z0-9]{2,}/i;
const validName = /[A-Z ]{12,}/i;
const validPassword = /[0-9]{6,}/;

const doRequest = async (obj, history) => {
  await postRegister(obj);
  return history.push('/login');
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
      : setWrongData(true)
  );

  return (
    <div>
      <button type="button" onClick={() => checkValues()}>Cadastre - se</button>
      {wrongData ? <p>Confira novamente seus dados.</p> : null}
    </div>
  );
};

export default CheckData;
