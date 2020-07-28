import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { postLogin } from '../services';
import '../styles/Login.css';

const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');

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

const renderLoginSection = () => (
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

const loginClick = async () => {
  const data = postLogin({ email, password: senha })
    .then((response) => response.data);
  console.log(data);
};

export default function Login() {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (senha.length >= 6 && regexEmail.test(email)) {
      return setDisabled(false);
    }
    setDisabled(true);
  }, [email, senha]);

  const renderLoginButton = () => (
    <div className="btn-login-div">
      <Link to="/">
        <button
          type="button"
          className="btn-login"
          data-testid="signin-btn"
          disabled={disabled}
          onClick={loginClick()}
        >
          ENTRAR
        </button>
      </Link>
    </div>
  );

  return (
    <div>
      {renderLoginSection()}
      {renderLoginButton()}
      {btnSemConta()}
    </div>
  );
}
