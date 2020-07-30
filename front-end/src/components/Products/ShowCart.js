import React, { useContext } from 'react';
import Trybeer from '../../context';

const ShowCart = () => {
  const { cartValue } = useContext(Trybeer);
  return (
    <div>
      <button>
        {`Total: R$ ${cartValue} - Ver Carrinho`}
      </button>
    </div>
  );
};

export default ShowCart;
