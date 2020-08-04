import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as ls from '../components/Utils/localStorage';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Trybeer from '../context';
import InputsProfile from '../components/Profile/InputsProfile';
import SaveButton from '../components/Profile/SaveButton';
import '../styles/Profile.css';

const Profile = () => {
  const { setPage } = useContext(Trybeer);
  const history = useHistory();
  const user = ls.getItem('user');

  useEffect(() => {
    setPage('Meu perfil');
  }, [setPage]);

  if (!user) {
    history.push('/login');
    return null;
  }
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="div-page-body-perfil">
        <InputsProfile />
        <SaveButton />
      </div>
    </div>
  );
};

export default Profile;
