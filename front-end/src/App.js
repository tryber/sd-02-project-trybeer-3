import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login'

const App = () => (
  <Router>
    <Switch>
      <Route to="/" component={Login} />
    </Switch>
  </Router>
);

export default App;
