import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { changePage } from '../Utils/cart';
import Trybeer from '../../context';

const ButtonProfile = () => {
  const { setOpen } = useContext(Trybeer);
  const history = useHistory();

  return (
    <button
      type="button"
      className="Sidebar_Button"
      onClick={() => changePage(setOpen, history, '/profile')}
    >
      Meu Perfil
    </button>
  );
};

export default ButtonProfile;
