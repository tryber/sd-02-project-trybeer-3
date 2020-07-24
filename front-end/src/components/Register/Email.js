import React, { useContext } from 'react';
import Trybeer from '../../context';

const InputEmail = () => {
  const { setEmail } = useContext(Trybeer);
  return (
    <div>
      <label htmlFor="InputEmail">Email</label>
      <input
        id="InputEmail"
        type="email"
        onChange={({ target }) => setEmail(target.value)}
      />
    </div>
  );
};

export default InputEmail;
