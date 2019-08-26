import React from 'react';
import logo from './logo.svg';
import GravatarHook from './GravatarHook';
import GravatarLifecycle from './GravatarLifecycle';
import GithubTrending from './GithubTrending';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <GravatarHook />
        <GravatarLifecycle />

        <GithubTrending since="weekly" />
      </header>
    </div>
  );
}

export default App;
