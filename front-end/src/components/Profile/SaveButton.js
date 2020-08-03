import React, { useContext, useState, useEffect } from 'react';
import { patchProfile } from '../../services';
import Trybeer from '../../context';

const updateName = async (name, user) => {
  const {
    email,
    role,
    client,
    token,
  } = user;

  const update = {
    name,
    email,
    role,
    token,
    client,
  };

  await patchProfile(update.name, update.token);
  localStorage.setItem('user', JSON.stringify(update));

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
