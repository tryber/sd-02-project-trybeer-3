import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { changePage } from '../Utils/cart';
import Trybeer from '../../context';

const AdminOrders = () => {
  const { setOpen } = useContext(Trybeer);
  const history = useHistory();

  return (
    <button
      type="button"
      className="Sidebar_Button"
      onClick={() => changePage(setOpen, history, '/admin/orders')}
    >
      Meu Perfil
    </button>
  );
};
export default AdminOrders;
