import React from 'react';
import { Link } from 'react-router-dom';

const ButtonProfile = () => (
  <Link to="/profile">
    <button
      type="button"
      className="Sidebar_Button"
    >
      Meu Perfil
    </button>
  </Link>
);

export default ButtonProfile;
