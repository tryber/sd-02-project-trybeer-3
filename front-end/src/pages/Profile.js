import React, { useContext, useEffect } from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Trybeer from '../context';
import '../styles/Profile.css';
import InputsProfile from '../components/Profile/InputsProfile';
import SaveButton from '../components/Profile/SaveButton';

const Profile = () => {
  const { setPage } = useContext(Trybeer);

  useEffect(() => {
    setPage('Meu perfil');
  }, [setPage]);

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
