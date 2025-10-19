import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = ({ theme, setTheme }) => {
  const activeClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

  return (
    <header className="navbar">
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <span className="rotating-text">InstaBoard</span>
        <nav className="nav-links">
          <NavLink to="/" className={activeClass}>Home</NavLink>
          <NavLink to="/about" className={activeClass}>About</NavLink>
          <NavLink to="/team" className={activeClass}>Team</NavLink>
          <NavLink to="/liked-users" className={activeClass}>Liked Users</NavLink>
        </nav>
      </div>

      <div className="flex">
        <button
          className="btn"
          onClick={() => setTheme(t => (t === "dark" ? "light" : "dark"))}
          title="Toggle theme"
        >
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </header>
  );
};

export default Navigation;
