import React, { useContext } from 'react';
import Trybeer from '../../context';
import { useHistory } from 'react-router-dom';

const ButtonOrders = () => {
  const { setOpen } = useContext(Trybeer);
  const history = useHistory();

  const changePage = () => {
    setOpen(false);
    history.push('/orders');
  };

  return (
    <button
      type="button"
      className="Sidebar_Button"
      onClick={() => changePage()}
    >
      Meus Pedidos
    </button>
  );
}

export default ButtonOrders;
