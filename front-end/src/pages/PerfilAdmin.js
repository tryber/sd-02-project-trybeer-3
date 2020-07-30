import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import '../styles/PerfilAdmin.css';

export default function PerfilAdmin() {
  const renderPerfilAdmin = () => (
    <article className="page-perfil-admin">
      <h1 className="admin-perfil-title">Perfil</h1>
      <div className="campos-perfil-admin">Nome: </div>
      <div className="campos-perfil-admin">Email: </div>
    </article>
  );

  return (
    <div>
      <Sidebar />
      {renderPerfilAdmin()}
    </div>
  );
}
