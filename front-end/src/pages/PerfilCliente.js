import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { postLogin } from '../services';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Trybeer from '../context';
import '../styles/PerfilCliente.css';

const renderPerfilSection = (emailCliente, clientName) => (
  <div className="profile-campo">
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

const getDados = () => {
  const usuarioLogadoAtual = localStorage.getItem('Token do usuário logado');
  console.log(usuarioLogadoAtual);
};

const renderSalvarButton = (email, senha, disabled) => (
  <div className="btn-save-profile-div">
    <Link to="/products">
      <button
        type="button"
        className="btn-save-profile"
        data-testid="profile-save-btn"
        disabled={disabled}
      >
        Salvar
      </button>
    </Link>
  </div>
);

export default function Login() {
  const { setPage } = useContext(Trybeer);
  setPage('Meu perfil');
  getDados();
  // const [newClient, setNewClient] = useState('');

  // useEffect(() => {
  //   if (senha.length >= 6 && regexEmail.test(email)) {
  //     return setDisabled(false);
  //   }
  //   return setDisabled(true);
  // }, [clientName]);

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="div-page-body-perfil">
        {renderPerfilSection()}
        {renderSalvarButton()}
      </div>
    </div>
  );
}
