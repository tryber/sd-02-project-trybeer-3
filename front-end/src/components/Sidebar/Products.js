import React from 'react';
import { Link } from 'react-router-dom';

const ButtonProducts = () => (
  <Link to="/products">
    <button
      type="button"
      className="Sidebar_Button"
    >
      Produtos
    </button>
  </Link>
);

export default ButtonProducts;
