import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import PerfilCliente from './pages/PerfilCliente';
import PerfilAdmin from './pages/PerfilAdmin';
import Products from './pages/Products';
import './App.css';

const App = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route path="/profile" component={PerfilCliente} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/admin/profile" component={PerfilAdmin} />
    </Switch>
  </Router>
);

export default App;
