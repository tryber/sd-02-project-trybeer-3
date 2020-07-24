import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import './App.css';

const App = () => (
  <Router>
    <Switch>
      <Route to="/" component={Login} />
    </Switch>
  </Router>
);

export default App;
