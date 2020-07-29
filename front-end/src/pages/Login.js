import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { postLogin } from '../services';
import '../styles/Login.css';

const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const btnSemConta = () => (
  <Link to="/register">
    <div className="btn-sem-conta-div">
      <button
        type="button"
        className="btn-sem-conta"
      >
        Ainda não tenho conta
      </button>
    </div>
  </Link>
);

const renderLoginSection = (email, setEmail, senha, setSenha) => (
  <div className="logincampo">
    <label htmlFor="email">E-mail:</label>
    <input
      id="email"
      name="email"
      type="text"
      data-testid="email-input"
      value={email}
      onChange={(event) => setEmail(event.target.value)}
    />
    <label htmlFor="name">Senha:</label>
    <input
      id="senha"
      name="senha"
      type="password"
      data-testid="password-input"
      value={senha}
      onChange={(event) => setSenha(event.target.value)}
    />
  </div>
);

const loginClick = async (email, senha) => {
  const data = await postLogin({ email, password: senha })
    .then((response) => response.data);
  localStorage.setItem('Token do usuário logado', data.token);
};

export default function Login() {
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    if (senha.length >= 6 && regexEmail.test(email)) {
      return setDisabled(false);
    }
    return setDisabled(true);
  }, [email, senha]);

  const renderLoginButton = () => (
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
  return (
    <div>
      {renderLoginSection(email, setEmail, senha, setSenha)}
      {renderLoginButton(disabled, setDisabled)}
      {btnSemConta()}
    </div>
  );
}
