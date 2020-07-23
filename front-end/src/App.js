import React, { useContext } from 'react';
import './App.css';
import trybeer from './context';

function App() {
  const { teste } = useContext(trybeer);
  return (
    <div className="App">
      <header className="App-header">
        <p>{teste}</p>
      </header>
    </div>
  );
}

export default App;
