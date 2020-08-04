import React, { useContext, useState, useEffect } from 'react';
import { patchProfile } from '../../services';
import Trybeer from '../../context';

const sizeName = 'Nome deve ser diferente do anterior e ter no mínimo 12 caracteres.';

const updateName = async (name, user, setAnswer, setSize) => {
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

  await patchProfile(update);
  localStorage.setItem('user', JSON.stringify(update));

  setAnswer(true);
  setTimeout(() => {
    setAnswer(false);
  }, 3000);
};

const SaveButton = () => {
  const { profileUser } = useContext(Trybeer);
  const user = JSON.parse(localStorage.getItem('user'));
  const [size, setSize] = useState(false);
  const [answer, setAnswer] = useState(false);

  useEffect(() => {
    if (profileUser === user.name || profileUser.split('').length < 12) {
      return setSize(false);
    }
    return setSize(true);
  }, [profileUser, user]);

  return (
    user.role !== 'admin'
    && (
      <div className="btn-save-profile-div">
        <button
          type="button"
          className="btn-save-profile"
          data-testid="profile-save-btn"
          disabled={!size}
          onClick={() => updateName(profileUser, user, setAnswer, setSize)}
        >
          Salvar
        </button>
        {!size && <p>{sizeName}</p>}
        {answer && <p>Nome Alterado com Sucesso.</p>}
      </div>
    ));
};

export default SaveButton;
