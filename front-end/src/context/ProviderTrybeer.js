import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Trybeer from './index';

const ProviderTrybeer = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState('Produtos');
  const [emailUser, setEmailUser] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const toProvider = {
    open,
    setOpen,
    page,
    setPage,
    emailUser,
    setEmailUser,
    userName,
    setUserName,
    password,
    setPassword,
  };

  return (
    <Trybeer.Provider value={toProvider}>
      {children}
    </Trybeer.Provider>
  );
};

export default ProviderTrybeer;

ProviderTrybeer.propTypes = {
  children: PropTypes.node.isRequired,
};
