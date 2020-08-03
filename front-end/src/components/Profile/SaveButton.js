import React, { useContext, useState, useEffect } from 'react';
import Trybeer from '../../context';

const updateName = (name, user) => {
  const {
    email,
    role,
    client,
    token,
  } = user;

  localStorage.setItem('user', JSON.stringify({
    name,
    email,
    role,
    token,
    client,
  }));
};

const SaveButton = () => {
  const { profileUser } = useContext(Trybeer);
  const user = JSON.parse(localStorage.getItem('user'));
  const [size, setSize] = useState(false);

  useEffect(() => {
    if (profileUser.length < 12) {
      return setSize(false);
    }
    return setSize(true);
  }, [profileUser, user]);

  const sizeName = 'Nome deve ser diferente do anterior e ter no mínimo 12 caracteres.';
  return (
    <div className="btn-save-profile-div">
      <button
        type="button"
        className="btn-save-profile"
        data-testid="profile-save-btn"
        disabled={!size}
        onClick={() => updateName(profileUser, user)}
      >
        Salvar
      </button>
      {!size && <p>{sizeName}</p>}
    </div>
  );
};

export default SaveButton;
