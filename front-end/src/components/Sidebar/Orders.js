import React from 'react';
import { Link } from 'react-router-dom';

const ButtonOrders = () => (
  <Link to="/orders">
    <button
      type="button"
      className="Sidebar_Button"
    >
      Meus Pedidos
    </button>
  </Link>
);

export default ButtonOrders;
