import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import "../App.css";

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme === "dark" ? "dark" : "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="app">
      <div className="container">
        <Navigation theme={theme} setTheme={setTheme} />
        <main style={{ marginTop: 8 }}>{children}</main>
      </div>
      <footer className="footer">© {new Date().getFullYear()} InstaBoard — Mariam Shkukani</footer>
    </div>
  );
};

export default Layout;
