import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { postLogin } from '../services';
import '../styles/Login.css';

const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const btnSemConta = () => (
  <Link to="/register">
    <div className="btn-sem-conta-div">
      <button
        type="button"
        className="btn-sem-conta"
        data-testid="no-account-btn"
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

const loginClick = async (email, senha, history) => {
  const data = await postLogin({ email, password: senha })
    .then((response) => response.data);
  localStorage.setItem('Token do usuário logado', data.token);
  return history.push('/products');
};

const renderLoginButton = (email, senha, disabled, history) => (
  <div className="btn-login-div">
    <button
      type="button"
      className="btn-login"
      data-testid="signin-btn"
      disabled={disabled}
      onClick={() => loginClick(email, senha, history)}
    >
      ENTRAR
      </button>
  </div>
);

export default function Login() {
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (senha.length >= 6 && regexEmail.test(email)) {
      return setDisabled(false);
    }
    return setDisabled(true);
  }, [email, senha]);

  return (
    <div className="Login_all">
      {renderLoginSection(email, setEmail, senha, setSenha)}
      {renderLoginButton(email, senha, disabled, history)}
      {btnSemConta()}
    </div>
  );
}
