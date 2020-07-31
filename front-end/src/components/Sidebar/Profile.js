import React, { useContext } from 'react';
import Trybeer from '../../context';
import { useHistory } from 'react-router-dom';
import { changePage } from '../Utils/cart';

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
}


export default ButtonProfile;
