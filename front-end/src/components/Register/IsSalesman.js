import React, { useContext } from 'react';
import Trybeer from '../../context';

const CheckSalesman = () => {
  const { isSalesman, setIsSalesman } = useContext(Trybeer);
  return (
    <div>
      <label htmlFor="CheckSalesman">Vou Vender</label>
      <input type="checkbox" onChange={() => setIsSalesman(!isSalesman)} />
    </div>
  );
};

export default CheckSalesman;
