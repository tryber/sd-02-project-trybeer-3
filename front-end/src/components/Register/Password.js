import React, { useContext } from 'react';
import Trybeer from '../../context';

const InputPassword = () => {
  const { setPassword } = useContext(Trybeer);
  return (
    <div>
      <label htmlFor="InputPassword">Senha</label>
      <input
        type="password"
        id="InputPassword"
        onChange={({ target }) => setPassword(target.value)}
      />
    </div>
  );
};

export default InputPassword;
