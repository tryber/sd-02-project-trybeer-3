import React, { useContext } from 'react';
import Trybeer from '../../context';

const InputPassword = () => {
  const { setPassword } = useContext(Trybeer);
  return (
    <div>
      <label htmlFor="InputPassword">Senha</label>
      <input
        type="password"
        onChange={({ target }) => setPassword(target.value)}
        id="InputPassword"
      />
    </div>
  );
};

export default InputPassword;
