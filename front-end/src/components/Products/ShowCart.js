import React, { useState } from 'react';

const ShowCart = () => {
  const [cartValue, setCartValue] = useState('0.00');
  return(
    <button>
      {`Total: R$ ${cartValue} - Ver Carrinho`}
    </button>
  );
};

export default ShowCart;
