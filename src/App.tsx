import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={`/logo.jpeg`} className="App-logo" alt="logo" />
        <p style={{fontWeight: 'bold'}}>
          Ragnarok Calculator
        </p>
        <a
          className="App-link"
          href="https://discord.gg/9Zqq9VyqH9"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord
        </a>
      </header>
    </div>
  );
}

export default App;
