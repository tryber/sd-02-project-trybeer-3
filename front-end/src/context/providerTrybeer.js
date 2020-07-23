import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Trybeer from './index';

const ProviderTrybeer = ({ children }) => {
  const [teste, setTeste] = useState("jorjao");
  const toProvider = {
    teste, 
    setTeste
  };
  return (
    <Trybeer.Provider value={toProvider}>
      { children }
    </Trybeer.Provider>
  );
};

export default ProviderTrybeer;

ProviderTrybeer.propTypes = {
  children: PropTypes.node.isRequired,
};
