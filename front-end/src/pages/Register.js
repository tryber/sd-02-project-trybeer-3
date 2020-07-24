import React from 'react';
import EmailInput from '../components/Register/Email';
import InputName from '../components/Register/Name';
import InputPassword from '../components/Register/Password';
import CheckSalesman from '../components/Register/IsSalesman';

const Register = () => (
  <div>
    <EmailInput />
    <InputName />
    <InputPassword />
    <CheckSalesman />
  </div>
);

export default Register;
