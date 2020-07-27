import React, { useContext } from 'react';
import Trybeer from '../../context';

const InputEmail = () => {
  const { setEmailUser } = useContext(Trybeer);
  return (
    <div>
      <label htmlFor="InputEmail">Email</label>
      <input
        id="InputEmail"
        type="email"
        onChange={({ target }) => setEmailUser(target.value)}
      />
    </div>
  );
};

export default InputEmail;
