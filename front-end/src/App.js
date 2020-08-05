import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import PerfilCliente from './pages/PerfilCliente';
import PerfilAdmin from './pages/PerfilAdmin';
import Products from './pages/Products';
import MeusPedidosCliente from './pages/MeusPedidosCliente';
import adminOrders from './pages/adminOrders';
import adminOrderDetail from './pages/adminOrderDetail';
import './App.css';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/profile" component={PerfilCliente} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/admin/profile" component={PerfilAdmin} />
      <Route exact path="/orders" component={MeusPedidosCliente} />
      <Route exact path="/admin/orders" component={adminOrders} />
      <Route exact path="/admin/orders/:id" component={adminOrderDetail} />
    </Switch>
  </Router>
);

export default App;
