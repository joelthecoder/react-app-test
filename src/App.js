import React from 'react';
import logo from './logo.svg';
import GravatarHook from './GravatarHook';
import GravatarLifecycle from './GravatarLifecycle';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <GravatarHook />
        <GravatarLifecycle />
      </header>
    </div>
  );
}

export default App;
