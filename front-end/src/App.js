import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import PerfilCliente from './pages/PerfilCliente';
import './App.css';

const App = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route path="/profile" component={PerfilCliente} />
    </Switch>
  </Router>
);

export default App;
