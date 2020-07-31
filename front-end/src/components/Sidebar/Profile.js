import React, { useContext } from 'react';
import Trybeer from '../../context';
import { useHistory } from 'react-router-dom';

const ButtonProfile = () => {
  const { setOpen } = useContext(Trybeer);
  const history = useHistory();

  const changePage = () => {
    setOpen(false);
    history.push('/profile');
  }

  return (
    <button
      type="button"
      className="Sidebar_Button"
      onClick={() => changePage()}
    >
      Meu Perfil
    </button>
  );
}


export default ButtonProfile;
