import React, { useContext, useEffect } from 'react';
import Trybeer from '../../context';

const InputsProfile = () => {
  const {
    profileUser,
    setProfileUser,
    profileEmail,
    setProfileEmail,
  } = useContext(Trybeer);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    setProfileUser(userData.name);
    setProfileEmail(userData.email);
  }, [setProfileEmail, setProfileUser]);

  return (
    <div className="profile-campo">
      <label htmlFor="email">Nome</label>
      <input
        id="name"
        name="name"
        type="text"
        data-testid="email-input"
        defaultValue={profileUser}
        onChange={({ target }) => setProfileUser(target.value)}
      />
      <label htmlFor="email">E-mail</label>
      <input
        id="email"
        name="email"
        type="text"
        data-testid="profile-email-input"
        readOnly
        value={profileEmail}
      />
    </div>
  );
};

export default InputsProfile;
