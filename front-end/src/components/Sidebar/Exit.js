import React from 'react';
import { useHistory } from 'react-router-dom';

const ButtonExit = () => {
  const history = useHistory();

  const exitAndRedirect = () => {
    localStorage.clear();
    return history.push('/login');
  };

  return (
    <div className="Sidebar_Exit">
      <button
        type="button"
        className="Sidebar_Button"
        onClick={() => exitAndRedirect(history)}
      >
        Sair
      </button>
    </div>
  );
};

export default ButtonExit;
