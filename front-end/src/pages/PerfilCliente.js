import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { postLogin } from '../services';
import '../styles/PerfilCliente.css';

const renderPerfilSection = (emailCliente, clientName) => (
  <div className="logincampo">
    <label htmlFor="email">Nome</label>
    <input
      id="name"
      name="name"
      type="text"
      data-testid="email-input"
      value={clientName}
    />
    <label htmlFor="email">E-mail</label>
    <input
      id="email"
      name="email"
      type="text"
      data-testid="profile-email-input"
      readOnly
      value={emailCliente}
    />
  </div>
);

const loginClick = async (emailCliente, clientName) => {
  const data = await postLogin({ emailCliente, password })
    .then((response) => response.data);
  const clientName = localStorage.getItem('Token do usuário logado', data.name);
  const clientMail = localStorage.getItem('Token do usuário logado', data.email);
};

const renderSalvarButton = (email, senha, disabled) => (
  <div className="btn-login-div">
    <Link to="/products">
      <button
        type="button"
        className="btn-login"
        data-testid="signin-btn"
        disabled={disabled}
        onClick={() => loginClick(email, senha)}
      >
        ENTRAR
      </button>
    </Link>
  </div>
);

export default function Login() {
  const [newClient, setNewClient] = useState('');

  useEffect(() => {
    if (senha.length >= 6 && regexEmail.test(email)) {
      return setDisabled(false);
    }
    return setDisabled(true);
  }, [clientName]);

  return (
    <div>
      {renderPerfilSection(emailCliente)}
    </div>
  );
}
