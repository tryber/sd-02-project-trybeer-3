import React, { useContext } from 'react';
import Trybeer from '../../context';

const InputName = () => {
  const { setUserName } = useContext(Trybeer);
  return (
    <div>
      <label htmlFor="InputName">Nome</label>
      <input id="InputName" onChange={({ target }) => setUserName(target.value)} />
    </div>
  );
};

export default InputName;
