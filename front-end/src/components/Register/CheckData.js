import React, { useContext, useState } from 'react';
import { postRegister } from '../../services';
import Trybeer from '../../context';

const validEmail = /[A-Z0-9]{1,}@[A-Z0-9]{2,}\.[A-Z0-9]{2,}/i;
const validName = /[A-Z ]{12,}/i;
const validPassword = /(.){6,}/;

const CheckData = () => {
  const { userName, password, emailUser } = useContext(Trybeer);
  const [wrongData, setWrongData] = useState(false);

  const testValues = async () => {
    // return validEmail.test(emailUser)
    //   && validPassword.test(password)
    //   && validName.test(userName)
    //   ? console.log('requisição de cadastro aqui')
    //   : setWrongData(true);
    // const { data: { user } } = await postRegister(JSON.stringify(obj));
    // console.log(user);
  };

  return (
    <div>
      <button type="button" onClick={() => testValues()}>Cadastre - se</button >
      {wrongData ? <p>Confira novamente seus dados.</p> : null}
    </div>
  );
};

export default CheckData;
