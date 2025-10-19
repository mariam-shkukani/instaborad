import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const nav = useNavigate();
  return (
    <section style={{ padding: 32, textAlign: "center" }}>
      <h1>404 — Page Not Found</h1>
      <p style={{ color: "var(--muted)" }}>The page you're looking for doesn't exist.</p>
      <div style={{ marginTop: 16 }}>
        <button className="btn" onClick={() => nav("/")}>Go Home</button>
      </div>
    </section>
  );
};

export default NotFound;
