import React from 'react';
import EmailInput from '../components/Register/Email';
import InputName from '../components/Register/Name';
import InputPassword from '../components/Register/Password';
import CheckSalesman from '../components/Register/IsSalesman';
import CheckData from '../components/Register/CheckData';

const Register = () => (
  <div>
    <EmailInput />
    <InputName />
    <InputPassword />
    <CheckSalesman />
    <CheckData />
  </div>
);

export default Register;
