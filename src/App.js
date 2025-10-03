import React, { useEffect, useState } from 'react';
import UserList from './comnponents/UserList/UserList';
import './App.css';

function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <div className="app">
      <header className="app__header">
        <h1>InstaBoard</h1>
        <div>
          <button className="btn" onClick={() => setDark(d => !d)}>
            {dark ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </header>

      <main>
        <UserList />
      </main>

      <footer className="app__footer">
        <small>Made By ❤️ — Mariam Shkukani</small>
      </footer>
    </div>
  );
}

export default App;
