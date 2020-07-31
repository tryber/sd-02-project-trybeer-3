import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Trybeer from '../../context';

const ButtonProducts = () => {
  const { setOpen } = useContext(Trybeer);
  const history = useHistory();

  const changePage = () => {
    setOpen(false);
    history.push('/products');
  };

  return (
    <button
      type="button"
      className="Sidebar_Button"
      onClick={() => changePage()}
    >
      Produtos
    </button>
  );
};

export default ButtonProducts;
